import '../icon/icon';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class AnimatedImage extends BuckeyeElement {
    static styles: CSSResultGroup;
    animatedImage: HTMLImageElement;
    frozenFrame: string;
    isLoaded: boolean;
    src: string;
    alt: string;
    play: boolean;
    private handleClick;
    private handleLoad;
    private handleError;
    handlePlayChange(): void;
    handleSrcChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-animated-image': AnimatedImage;
    }
}
