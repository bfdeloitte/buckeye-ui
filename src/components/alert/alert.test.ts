import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { clickOnElement, moveMouseOnElement } from '../../internal/test';
import { queryByTestId } from '../../internal/test/data-testid-helpers';
import { resetMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type Alert from './alert';
import type IconButton from '../icon-button/icon-button';

const getAlertContainer = (alert: Alert): HTMLElement => {
  return alert.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
};

const expectAlertToBeVisible = (alert: Alert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
  expect(style.visibility).not.to.equal('collapse');
};

const expectAlertToBeInvisible = (alert: Alert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display, 'alert should be invisible').to.equal('none');
};

const expectHideAndAfterHideToBeEmittedInCorrectOrder = async (alert: Alert, action: () => void | Promise<void>) => {
  const hidePromise = oneEvent(alert, 'bui-hide');
  const afterHidePromise = oneEvent(alert, 'bui-after-hide');
  let afterHideHappened = false;
  oneEvent(alert, 'bui-after-hide').then(() => (afterHideHappened = true));

  action();

  await hidePromise;
  expect(afterHideHappened).to.be.false;

  await afterHidePromise;
  expectAlertToBeInvisible(alert);
};

const expectShowAndAfterShowToBeEmittedInCorrectOrder = async (alert: Alert, action: () => void | Promise<void>) => {
  const showPromise = oneEvent(alert, 'bui-show');
  const afterShowPromise = oneEvent(alert, 'bui-after-show');
  let afterShowHappened = false;
  oneEvent(alert, 'bui-after-show').then(() => (afterShowHappened = true));

  action();

  await showPromise;
  expect(afterShowHappened).to.be.false;

  await afterShowPromise;
  expectAlertToBeVisible(alert);
};

const getCloseButton = (alert: Alert): IconButton | null | undefined =>
  alert.shadowRoot?.querySelector<IconButton>('[part="close-button"]');

describe('<bui-alert>', () => {
  let clock: sinon.SinonFakeTimers | null = null;

  afterEach(async () => {
    clock?.restore();
    await resetMouse();
  });

  it('renders', async () => {
    const alert = await fixture<Alert>(html`<bui-alert open>I am an alert</bui-alert>`);

    expectAlertToBeVisible(alert);
  });

  it('is accessible', async () => {
    const alert = await fixture<Alert>(html`<bui-alert open>I am an alert</bui-alert>`);

    await expect(alert).to.be.accessible();
  });

  describe('alert visibility', () => {
    it('should be visible with the open attribute', async () => {
      const alert = await fixture<Alert>(html`<bui-alert open>I am an alert</bui-alert>`);

      expectAlertToBeVisible(alert);
    });

    it('should not be visible without the open attribute', async () => {
      const alert = await fixture<Alert>(html` <bui-alert>I am an alert</bui-alert>`);

      expectAlertToBeInvisible(alert);
    });

    it('should emit bui-show and bui-after-show when calling show()', async () => {
      const alert = await fixture<Alert>(html` <bui-alert>I am an alert</bui-alert>`);

      expectAlertToBeInvisible(alert);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.show());
    });

    it('should emit bui-hide and bui-after-hide when calling hide()', async () => {
      const alert = await fixture<Alert>(html` <bui-alert open>I am an alert</bui-alert>`);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => alert.hide());
    });

    it('should emit bui-show and bui-after-show when setting open = true', async () => {
      const alert = await fixture<Alert>(html` <bui-alert>I am an alert</bui-alert> `);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => {
        alert.open = true;
      });
    });

    it('should emit bui-hide and bui-after-hide when setting open = false', async () => {
      const alert = await fixture<Alert>(html` <bui-alert open>I am an alert</bui-alert> `);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        alert.open = false;
      });
    });
  });

  describe('close button', () => {
    it('shows a close button if the alert has the closable attribute', () => async () => {
      const alert = await fixture<Alert>(html` <bui-alert open closable>I am an alert</bui-alert> `);
      const closeButton = getCloseButton(alert);

      expect(closeButton).to.be.visible;
    });

    it('clicking the close button closes the alert', () => async () => {
      const alert = await fixture<Alert>(html` <bui-alert open closable>I am an alert</bui-alert> `);
      const closeButton = getCloseButton(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clickOnElement(closeButton!);
      });
    });
  });

  describe('toast', () => {
    const getToastStack = (): HTMLDivElement | null => document.querySelector<HTMLDivElement>('.bui-toast-stack');

    const closeRemainingAlerts = async (): Promise<void> => {
      const toastStack = getToastStack();
      if (toastStack?.children) {
        for (const element of toastStack.children) {
          await (element as Alert).hide();
        }
      }
    };

    beforeEach(async () => {
      await closeRemainingAlerts();
    });

    it('can be rendered as a toast', async () => {
      const alert = await fixture<Alert>(html`<bui-alert>I am an alert</bui-alert>`);

      expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.toast());
      const toastStack = getToastStack();
      expect(toastStack).to.be.visible;
      expect(toastStack?.firstChild).to.be.equal(alert);
    });

    it('resolves only after being closed', async () => {
      const alert = await fixture<Alert>(html`<bui-alert closable>I am an alert</bui-alert>`);

      const afterShowEvent = oneEvent(alert, 'bui-after-show');
      let toastPromiseResolved = false;
      alert.toast().then(() => (toastPromiseResolved = true));

      await afterShowEvent;
      expect(toastPromiseResolved).to.be.false;

      const closePromise = oneEvent(alert, 'bui-after-hide');
      const closeButton = getCloseButton(alert);
      clickOnElement(closeButton!);

      await closePromise;
      await aTimeout(0);

      expect(toastPromiseResolved).to.be.true;
    });

    const expectToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).not.to.be.null;
    };

    const expectNoToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).to.be.null;
    };

    const openToast = async (alert: Alert): Promise<void> => {
      const openPromise = oneEvent(alert, 'bui-after-show');
      alert.toast();
      await openPromise;
    };

    const closeToast = async (alert: Alert): Promise<void> => {
      const closePromise = oneEvent(alert, 'bui-after-hide');
      const closeButton = getCloseButton(alert);
      await clickOnElement(closeButton!);
      await closePromise;
      await aTimeout(0);
    };

    it('deletes the toast stack after the last alert is done', async () => {
      const container = await fixture<HTMLElement>(html`<div>
        <bui-alert data-testid="alert1" closable>alert 1</bui-alert>
        <bui-alert data-testid="alert2" closable>alert 2</bui-alert>
      </div>`);

      const alert1 = queryByTestId<Alert>(container, 'alert1');
      const alert2 = queryByTestId<Alert>(container, 'alert2');

      await openToast(alert1!);

      expectToastStack();

      await openToast(alert2!);

      expectToastStack();

      await closeToast(alert1!);

      expectToastStack();

      await closeToast(alert2!);

      expectNoToastStack();
    });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<Alert>(html` <bui-alert open duration="3000">I am an alert</bui-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<Alert>(html` <bui-alert open duration="3000">I am an alert</bui-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(1000);

      await moveMouseOnElement(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after opening', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<Alert>(html` <bui-alert duration="3000">I am an alert</bui-alert>`);

      expectAlertToBeInvisible(alert);

      clock.tick(1000);

      const afterShowPromise = oneEvent(alert, 'bui-after-show');
      alert.show();
      await afterShowPromise;

      clock.tick(2999);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });
  });

  describe('alert variants', () => {
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];

    variants.forEach(variant => {
      it(`adapts to the variant: ${variant}`, async () => {
        const alert = await fixture<Alert>(html`<bui-alert variant="${variant}" open>I am an alert</bui-alert>`);

        const alertContainer = getAlertContainer(alert);
        expect(alertContainer).to.have.class(`alert--${variant}`);
      });
    });
  });
});
