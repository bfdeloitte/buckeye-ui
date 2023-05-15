import {
  popup_styles_default
} from "./chunk.VLXMOHNO.js";
import {
  o
} from "./chunk.26WLO5GK.js";
import {
  BuckeyeElement,
  e,
  e2,
  i
} from "./chunk.5DKFNGO3.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk.LKA3TPUC.js";

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t3) {
  return t3.split("-")[1];
}
function e3(t3) {
  return "y" === t3 ? "height" : "width";
}
function n(t3) {
  return t3.split("-")[0];
}
function o2(t3) {
  return ["top", "bottom"].includes(n(t3)) ? "x" : "y";
}
function i2(i4, r4, a3) {
  let { reference: l3, floating: s3 } = i4;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, m3 = o2(r4), u3 = e3(m3), g3 = l3[u3] / 2 - s3[u3] / 2, d3 = "x" === m3;
  let p3;
  switch (n(r4)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (t(r4)) {
    case "start":
      p3[m3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[m3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var r = async (t3, e4, n3) => {
  const { placement: o5 = "bottom", strategy: r4 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e4));
  let f3 = await l3.getElementRects({ reference: t3, floating: e4, strategy: r4 }), { x: m3, y: u3 } = i2(f3, o5, c3), g3 = o5, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y3, y: x4, data: w3, reset: v3 } = await h3({ x: m3, y: u3, initialPlacement: o5, placement: g3, strategy: r4, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t3, floating: e4 } });
    m3 = null != y3 ? y3 : m3, u3 = null != x4 ? x4 : u3, d3 = __spreadProps(__spreadValues({}, d3), { [a4]: __spreadValues(__spreadValues({}, d3[a4]), w3) }), v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t3, floating: e4, strategy: r4 }) : v3.rects), { x: m3, y: u3 } = i2(f3, g3, c3)), n4 = -1);
  }
  return { x: m3, y: u3, placement: g3, strategy: r4, middlewareData: d3 };
};
function a(t3) {
  return "number" != typeof t3 ? function(t4) {
    return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, t4);
  }(t3) : { top: t3, right: t3, bottom: t3, left: t3 };
}
function l(t3) {
  return __spreadProps(__spreadValues({}, t3), { top: t3.y, left: t3.x, right: t3.x + t3.width, bottom: t3.y + t3.height });
}
async function s(t3, e4) {
  var n3;
  void 0 === e4 && (e4 = {});
  const { x: o5, y: i4, platform: r4, rects: s3, elements: c3, strategy: f3 } = t3, { boundary: m3 = "clippingAncestors", rootBoundary: u3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e4, h3 = a(p3), y3 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x4 = l(await r4.getClippingRect({ element: null == (n3 = await (null == r4.isElement ? void 0 : r4.isElement(y3))) || n3 ? y3 : y3.contextElement || await (null == r4.getDocumentElement ? void 0 : r4.getDocumentElement(c3.floating)), boundary: m3, rootBoundary: u3, strategy: f3 })), w3 = "floating" === g3 ? __spreadProps(__spreadValues({}, s3.floating), { x: o5, y: i4 }) : s3.reference, v3 = await (null == r4.getOffsetParent ? void 0 : r4.getOffsetParent(c3.floating)), b3 = await (null == r4.isElement ? void 0 : r4.isElement(v3)) && await (null == r4.getScale ? void 0 : r4.getScale(v3)) || { x: 1, y: 1 }, A2 = l(r4.convertOffsetParentRelativeRectToViewportRelativeRect ? await r4.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
  return { top: (x4.top - A2.top + h3.top) / b3.y, bottom: (A2.bottom - x4.bottom + h3.bottom) / b3.y, left: (x4.left - A2.left + h3.left) / b3.x, right: (A2.right - x4.right + h3.right) / b3.x };
}
var c = Math.min;
var f = Math.max;
function m(t3, e4, n3) {
  return f(t3, c(e4, n3));
}
var u = (n3) => ({ name: "arrow", options: n3, async fn(i4) {
  const { element: r4, padding: l3 = 0 } = n3 || {}, { x: s3, y: c3, placement: f3, rects: u3, platform: g3, elements: d3 } = i4;
  if (null == r4)
    return {};
  const p3 = a(l3), h3 = { x: s3, y: c3 }, y3 = o2(f3), x4 = e3(y3), w3 = await g3.getDimensions(r4), v3 = "y" === y3, b3 = v3 ? "top" : "left", A2 = v3 ? "bottom" : "right", R2 = v3 ? "clientHeight" : "clientWidth", P3 = u3.reference[x4] + u3.reference[y3] - h3[y3] - u3.floating[x4], E2 = h3[y3] - u3.reference[y3], T3 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(r4));
  let D3 = T3 ? T3[R2] : 0;
  D3 && await (null == g3.isElement ? void 0 : g3.isElement(T3)) || (D3 = d3.floating[R2] || u3.floating[x4]);
  const L3 = P3 / 2 - E2 / 2, k3 = p3[b3], O3 = D3 - w3[x4] - p3[A2], B2 = D3 / 2 - w3[x4] / 2 + L3, C2 = m(k3, B2, O3), H2 = null != t(f3) && B2 != C2 && u3.reference[x4] / 2 - (B2 < k3 ? p3[b3] : p3[A2]) - w3[x4] / 2 < 0;
  return { [y3]: h3[y3] - (H2 ? B2 < k3 ? k3 - B2 : O3 - B2 : 0), data: { [y3]: C2, centerOffset: B2 - C2 } };
} });
var g = ["top", "right", "bottom", "left"];
var d = g.reduce((t3, e4) => t3.concat(e4, e4 + "-start", e4 + "-end"), []);
var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
function h(t3) {
  return t3.replace(/left|right|bottom|top/g, (t4) => p[t4]);
}
function y(n3, i4, r4) {
  void 0 === r4 && (r4 = false);
  const a3 = t(n3), l3 = o2(n3), s3 = e3(l3);
  let c3 = "x" === l3 ? a3 === (r4 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return i4.reference[s3] > i4.floating[s3] && (c3 = h(c3)), { main: c3, cross: h(c3) };
}
var x2 = { start: "end", end: "start" };
function w(t3) {
  return t3.replace(/start|end/g, (t4) => x2[t4]);
}
var b = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "flip", options: e4, async fn(o5) {
    var i4;
    const { placement: r4, middlewareData: a3, rects: l3, initialPlacement: c3, platform: f3, elements: m3 } = o5, _a = e4, { mainAxis: u3 = true, crossAxis: g3 = true, fallbackPlacements: d3, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x4 = "none", flipAlignment: v3 = true } = _a, b3 = __objRest(_a, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), A2 = n(r4), R2 = n(c3) === c3, P3 = await (null == f3.isRTL ? void 0 : f3.isRTL(m3.floating)), E2 = d3 || (R2 || !v3 ? [h(c3)] : function(t3) {
      const e5 = h(t3);
      return [w(t3), e5, w(e5)];
    }(c3));
    d3 || "none" === x4 || E2.push(...function(e5, o6, i5, r5) {
      const a4 = t(e5);
      let l4 = function(t3, e6, n3) {
        const o7 = ["left", "right"], i6 = ["right", "left"], r6 = ["top", "bottom"], a5 = ["bottom", "top"];
        switch (t3) {
          case "top":
          case "bottom":
            return n3 ? e6 ? i6 : o7 : e6 ? o7 : i6;
          case "left":
          case "right":
            return e6 ? r6 : a5;
          default:
            return [];
        }
      }(n(e5), "start" === i5, r5);
      return a4 && (l4 = l4.map((t3) => t3 + "-" + a4), o6 && (l4 = l4.concat(l4.map(w)))), l4;
    }(c3, v3, x4, P3));
    const T3 = [c3, ...E2], D3 = await s(o5, b3), L3 = [];
    let k3 = (null == (i4 = a3.flip) ? void 0 : i4.overflows) || [];
    if (u3 && L3.push(D3[A2]), g3) {
      const { main: t3, cross: e5 } = y(r4, l3, P3);
      L3.push(D3[t3], D3[e5]);
    }
    if (k3 = [...k3, { placement: r4, overflows: L3 }], !L3.every((t3) => t3 <= 0)) {
      var O3, B2;
      const t3 = ((null == (O3 = a3.flip) ? void 0 : O3.index) || 0) + 1, e5 = T3[t3];
      if (e5)
        return { data: { index: t3, overflows: k3 }, reset: { placement: e5 } };
      let n3 = null == (B2 = k3.filter((t4) => t4.overflows[0] <= 0).sort((t4, e6) => t4.overflows[1] - e6.overflows[1])[0]) ? void 0 : B2.placement;
      if (!n3)
        switch (p3) {
          case "bestFit": {
            var C2;
            const t4 = null == (C2 = k3.map((t5) => [t5.placement, t5.overflows.filter((t6) => t6 > 0).reduce((t6, e6) => t6 + e6, 0)]).sort((t5, e6) => t5[1] - e6[1])[0]) ? void 0 : C2[0];
            t4 && (n3 = t4);
            break;
          }
          case "initialPlacement":
            n3 = c3;
        }
      if (r4 !== n3)
        return { reset: { placement: n3 } };
    }
    return {};
  } };
};
var D = function(e4) {
  return void 0 === e4 && (e4 = 0), { name: "offset", options: e4, async fn(i4) {
    const { x: r4, y: a3 } = i4, l3 = await async function(e5, i5) {
      const { placement: r5, platform: a4, elements: l4 } = e5, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(r5), f3 = t(r5), m3 = "x" === o2(r5), u3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && m3 ? -1 : 1, d3 = "function" == typeof i5 ? i5(e5) : i5;
      let { mainAxis: p3, crossAxis: h3, alignmentAxis: y3 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : __spreadValues({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, d3);
      return f3 && "number" == typeof y3 && (h3 = "end" === f3 ? -1 * y3 : y3), m3 ? { x: h3 * g3, y: p3 * u3 } : { x: p3 * u3, y: h3 * g3 };
    }(i4, e4);
    return { x: r4 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};
function L(t3) {
  return "x" === t3 ? "y" : "x";
}
var k = function(t3) {
  return void 0 === t3 && (t3 = {}), { name: "shift", options: t3, async fn(e4) {
    const { x: i4, y: r4, placement: a3 } = e4, _a = t3, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t4) => {
      let { x: e5, y: n3 } = t4;
      return { x: e5, y: n3 };
    } } } = _a, u3 = __objRest(_a, ["mainAxis", "crossAxis", "limiter"]), g3 = { x: i4, y: r4 }, d3 = await s(e4, u3), p3 = o2(n(a3)), h3 = L(p3);
    let y3 = g3[p3], x4 = g3[h3];
    if (l3) {
      const t4 = "y" === p3 ? "bottom" : "right";
      y3 = m(y3 + d3["y" === p3 ? "top" : "left"], y3, y3 - d3[t4]);
    }
    if (c3) {
      const t4 = "y" === h3 ? "bottom" : "right";
      x4 = m(x4 + d3["y" === h3 ? "top" : "left"], x4, x4 - d3[t4]);
    }
    const w3 = f3.fn(__spreadProps(__spreadValues({}, e4), { [p3]: y3, [h3]: x4 }));
    return __spreadProps(__spreadValues({}, w3), { data: { x: w3.x - i4, y: w3.y - r4 } });
  } };
};
var B = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "size", options: e4, async fn(i4) {
    const { placement: r4, rects: a3, platform: l3, elements: m3 } = i4, _a = e4, { apply: u3 = () => {
    } } = _a, g3 = __objRest(_a, ["apply"]), d3 = await s(i4, g3), p3 = n(r4), h3 = t(r4), y3 = "x" === o2(r4), { width: x4, height: w3 } = a3.floating;
    let v3, b3;
    "top" === p3 || "bottom" === p3 ? (v3 = p3, b3 = h3 === (await (null == l3.isRTL ? void 0 : l3.isRTL(m3.floating)) ? "start" : "end") ? "left" : "right") : (b3 = p3, v3 = "end" === h3 ? "top" : "bottom");
    const A2 = w3 - d3[v3], R2 = x4 - d3[b3], P3 = !i4.middlewareData.shift;
    let E2 = A2, T3 = R2;
    if (y3) {
      const t3 = x4 - d3.left - d3.right;
      T3 = h3 || P3 ? c(R2, t3) : t3;
    } else {
      const t3 = w3 - d3.top - d3.bottom;
      E2 = h3 || P3 ? c(A2, t3) : t3;
    }
    if (P3 && !h3) {
      const t3 = f(d3.left, 0), e5 = f(d3.right, 0), n3 = f(d3.top, 0), o5 = f(d3.bottom, 0);
      y3 ? T3 = x4 - 2 * (0 !== t3 || 0 !== e5 ? t3 + e5 : f(d3.left, d3.right)) : E2 = w3 - 2 * (0 !== n3 || 0 !== o5 ? n3 + o5 : f(d3.top, d3.bottom));
    }
    await u3(__spreadProps(__spreadValues({}, i4), { availableWidth: T3, availableHeight: E2 }));
    const D3 = await l3.getDimensions(m3.floating);
    return x4 !== D3.width || w3 !== D3.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t3) {
  var e4;
  return (null == (e4 = t3.ownerDocument) ? void 0 : e4.defaultView) || window;
}
function o3(t3) {
  return n2(t3).getComputedStyle(t3);
}
function i3(t3) {
  return t3 instanceof n2(t3).Node;
}
function r2(t3) {
  return i3(t3) ? (t3.nodeName || "").toLowerCase() : "";
}
var l2;
function c2() {
  if (l2)
    return l2;
  const t3 = navigator.userAgentData;
  return t3 && Array.isArray(t3.brands) ? (l2 = t3.brands.map((t4) => t4.brand + "/" + t4.version).join(" "), l2) : navigator.userAgent;
}
function s2(t3) {
  return t3 instanceof n2(t3).HTMLElement;
}
function f2(t3) {
  return t3 instanceof n2(t3).Element;
}
function u2(t3) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t3 instanceof n2(t3).ShadowRoot || t3 instanceof ShadowRoot;
}
function a2(t3) {
  const { overflow: e4, overflowX: n3, overflowY: i4, display: r4 } = o3(t3);
  return /auto|scroll|overlay|hidden|clip/.test(e4 + i4 + n3) && !["inline", "contents"].includes(r4);
}
function d2(t3) {
  return ["table", "td", "th"].includes(r2(t3));
}
function h2(t3) {
  const e4 = /firefox/i.test(c2()), n3 = o3(t3), i4 = n3.backdropFilter || n3.WebkitBackdropFilter;
  return "none" !== n3.transform || "none" !== n3.perspective || !!i4 && "none" !== i4 || e4 && "filter" === n3.willChange || e4 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t4) => n3.willChange.includes(t4)) || ["paint", "layout", "strict", "content"].some((t4) => {
    const e5 = n3.contain;
    return null != e5 && e5.includes(t4);
  });
}
function p2() {
  return /^((?!chrome|android).)*safari/i.test(c2());
}
function g2(t3) {
  return ["html", "body", "#document"].includes(r2(t3));
}
var m2 = Math.min;
var y2 = Math.max;
var x3 = Math.round;
function w2(t3) {
  const e4 = o3(t3);
  let n3 = parseFloat(e4.width), i4 = parseFloat(e4.height);
  const r4 = s2(t3), l3 = r4 ? t3.offsetWidth : n3, c3 = r4 ? t3.offsetHeight : i4, f3 = x3(n3) !== l3 || x3(i4) !== c3;
  return f3 && (n3 = l3, i4 = c3), { width: n3, height: i4, fallback: f3 };
}
function v2(t3) {
  return f2(t3) ? t3 : t3.contextElement;
}
var b2 = { x: 1, y: 1 };
function L2(t3) {
  const e4 = v2(t3);
  if (!s2(e4))
    return b2;
  const n3 = e4.getBoundingClientRect(), { width: o5, height: i4, fallback: r4 } = w2(e4);
  let l3 = (r4 ? x3(n3.width) : n3.width) / o5, c3 = (r4 ? x3(n3.height) : n3.height) / i4;
  return l3 && Number.isFinite(l3) || (l3 = 1), c3 && Number.isFinite(c3) || (c3 = 1), { x: l3, y: c3 };
}
function E(e4, o5, i4, r4) {
  var l3, c3;
  void 0 === o5 && (o5 = false), void 0 === i4 && (i4 = false);
  const s3 = e4.getBoundingClientRect(), u3 = v2(e4);
  let a3 = b2;
  o5 && (r4 ? f2(r4) && (a3 = L2(r4)) : a3 = L2(e4));
  const d3 = u3 ? n2(u3) : window, h3 = p2() && i4;
  let g3 = (s3.left + (h3 && (null == (l3 = d3.visualViewport) ? void 0 : l3.offsetLeft) || 0)) / a3.x, m3 = (s3.top + (h3 && (null == (c3 = d3.visualViewport) ? void 0 : c3.offsetTop) || 0)) / a3.y, y3 = s3.width / a3.x, x4 = s3.height / a3.y;
  if (u3) {
    const t3 = n2(u3), e5 = r4 && f2(r4) ? n2(r4) : r4;
    let o6 = t3.frameElement;
    for (; o6 && r4 && e5 !== t3; ) {
      const t4 = L2(o6), e6 = o6.getBoundingClientRect(), i5 = getComputedStyle(o6);
      e6.x += (o6.clientLeft + parseFloat(i5.paddingLeft)) * t4.x, e6.y += (o6.clientTop + parseFloat(i5.paddingTop)) * t4.y, g3 *= t4.x, m3 *= t4.y, y3 *= t4.x, x4 *= t4.y, g3 += e6.x, m3 += e6.y, o6 = n2(o6).frameElement;
    }
  }
  return l({ width: y3, height: x4, x: g3, y: m3 });
}
function T2(t3) {
  return ((i3(t3) ? t3.ownerDocument : t3.document) || window.document).documentElement;
}
function R(t3) {
  return f2(t3) ? { scrollLeft: t3.scrollLeft, scrollTop: t3.scrollTop } : { scrollLeft: t3.pageXOffset, scrollTop: t3.pageYOffset };
}
function C(t3) {
  return E(T2(t3)).left + R(t3).scrollLeft;
}
function F(t3) {
  if ("html" === r2(t3))
    return t3;
  const e4 = t3.assignedSlot || t3.parentNode || u2(t3) && t3.host || T2(t3);
  return u2(e4) ? e4.host : e4;
}
function S(t3) {
  const e4 = F(t3);
  return g2(e4) ? e4.ownerDocument.body : s2(e4) && a2(e4) ? e4 : S(e4);
}
function W(t3, e4) {
  var o5;
  void 0 === e4 && (e4 = []);
  const i4 = S(t3), r4 = i4 === (null == (o5 = t3.ownerDocument) ? void 0 : o5.body), l3 = n2(i4);
  return r4 ? e4.concat(l3, l3.visualViewport || [], a2(i4) ? i4 : []) : e4.concat(i4, W(i4));
}
function D2(e4, i4, r4) {
  let l3;
  if ("viewport" === i4)
    l3 = function(t3, e5) {
      const o5 = n2(t3), i5 = T2(t3), r5 = o5.visualViewport;
      let l4 = i5.clientWidth, c4 = i5.clientHeight, s3 = 0, f3 = 0;
      if (r5) {
        l4 = r5.width, c4 = r5.height;
        const t4 = p2();
        (!t4 || t4 && "fixed" === e5) && (s3 = r5.offsetLeft, f3 = r5.offsetTop);
      }
      return { width: l4, height: c4, x: s3, y: f3 };
    }(e4, r4);
  else if ("document" === i4)
    l3 = function(t3) {
      const e5 = T2(t3), n3 = R(t3), i5 = t3.ownerDocument.body, r5 = y2(e5.scrollWidth, e5.clientWidth, i5.scrollWidth, i5.clientWidth), l4 = y2(e5.scrollHeight, e5.clientHeight, i5.scrollHeight, i5.clientHeight);
      let c4 = -n3.scrollLeft + C(t3);
      const s3 = -n3.scrollTop;
      return "rtl" === o3(i5).direction && (c4 += y2(e5.clientWidth, i5.clientWidth) - r5), { width: r5, height: l4, x: c4, y: s3 };
    }(T2(e4));
  else if (f2(i4))
    l3 = function(t3, e5) {
      const n3 = E(t3, true, "fixed" === e5), o5 = n3.top + t3.clientTop, i5 = n3.left + t3.clientLeft, r5 = s2(t3) ? L2(t3) : { x: 1, y: 1 };
      return { width: t3.clientWidth * r5.x, height: t3.clientHeight * r5.y, x: i5 * r5.x, y: o5 * r5.y };
    }(i4, r4);
  else {
    const t3 = __spreadValues({}, i4);
    if (p2()) {
      var c3, u3;
      const o5 = n2(e4);
      t3.x -= (null == (c3 = o5.visualViewport) ? void 0 : c3.offsetLeft) || 0, t3.y -= (null == (u3 = o5.visualViewport) ? void 0 : u3.offsetTop) || 0;
    }
    l3 = t3;
  }
  return l(l3);
}
function V(t3, e4) {
  const n3 = F(t3);
  return !(n3 === e4 || !f2(n3) || g2(n3)) && ("fixed" === o3(n3).position || V(n3, e4));
}
function A(t3, e4) {
  return s2(t3) && "fixed" !== o3(t3).position ? e4 ? e4(t3) : t3.offsetParent : null;
}
function H(t3, e4) {
  const i4 = n2(t3);
  if (!s2(t3))
    return i4;
  let l3 = A(t3, e4);
  for (; l3 && d2(l3) && "static" === o3(l3).position; )
    l3 = A(l3, e4);
  return l3 && ("html" === r2(l3) || "body" === r2(l3) && "static" === o3(l3).position && !h2(l3)) ? i4 : l3 || function(t4) {
    let e5 = F(t4);
    for (; s2(e5) && !g2(e5); ) {
      if (h2(e5))
        return e5;
      e5 = F(e5);
    }
    return null;
  }(t3) || i4;
}
function O2(t3, e4, n3) {
  const o5 = s2(e4), i4 = T2(e4), l3 = E(t3, true, "fixed" === n3, e4);
  let c3 = { scrollLeft: 0, scrollTop: 0 };
  const f3 = { x: 0, y: 0 };
  if (o5 || !o5 && "fixed" !== n3)
    if (("body" !== r2(e4) || a2(i4)) && (c3 = R(e4)), s2(e4)) {
      const t4 = E(e4, true);
      f3.x = t4.x + e4.clientLeft, f3.y = t4.y + e4.clientTop;
    } else
      i4 && (f3.x = C(i4));
  return { x: l3.left + c3.scrollLeft - f3.x, y: l3.top + c3.scrollTop - f3.y, width: l3.width, height: l3.height };
}
var P2 = { getClippingRect: function(t3) {
  let { element: e4, boundary: n3, rootBoundary: i4, strategy: l3 } = t3;
  const c3 = "clippingAncestors" === n3 ? function(t4, e5) {
    const n4 = e5.get(t4);
    if (n4)
      return n4;
    let i5 = W(t4).filter((t5) => f2(t5) && "body" !== r2(t5)), l4 = null;
    const c4 = "fixed" === o3(t4).position;
    let s4 = c4 ? F(t4) : t4;
    for (; f2(s4) && !g2(s4); ) {
      const e6 = o3(s4), n5 = h2(s4);
      n5 || "fixed" !== e6.position || (l4 = null), (c4 ? !n5 && !l4 : !n5 && "static" === e6.position && l4 && ["absolute", "fixed"].includes(l4.position) || a2(s4) && !n5 && V(t4, s4)) ? i5 = i5.filter((t5) => t5 !== s4) : l4 = e6, s4 = F(s4);
    }
    return e5.set(t4, i5), i5;
  }(e4, this._c) : [].concat(n3), s3 = [...c3, i4], u3 = s3[0], d3 = s3.reduce((t4, n4) => {
    const o5 = D2(e4, n4, l3);
    return t4.top = y2(o5.top, t4.top), t4.right = m2(o5.right, t4.right), t4.bottom = m2(o5.bottom, t4.bottom), t4.left = y2(o5.left, t4.left), t4;
  }, D2(e4, u3, l3));
  return { width: d3.right - d3.left, height: d3.bottom - d3.top, x: d3.left, y: d3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t3) {
  let { rect: e4, offsetParent: n3, strategy: o5 } = t3;
  const i4 = s2(n3), l3 = T2(n3);
  if (n3 === l3)
    return e4;
  let c3 = { scrollLeft: 0, scrollTop: 0 }, f3 = { x: 1, y: 1 };
  const u3 = { x: 0, y: 0 };
  if ((i4 || !i4 && "fixed" !== o5) && (("body" !== r2(n3) || a2(l3)) && (c3 = R(n3)), s2(n3))) {
    const t4 = E(n3);
    f3 = L2(n3), u3.x = t4.x + n3.clientLeft, u3.y = t4.y + n3.clientTop;
  }
  return { width: e4.width * f3.x, height: e4.height * f3.y, x: e4.x * f3.x - c3.scrollLeft * f3.x + u3.x, y: e4.y * f3.y - c3.scrollTop * f3.y + u3.y };
}, isElement: f2, getDimensions: function(t3) {
  return w2(t3);
}, getOffsetParent: H, getDocumentElement: T2, getScale: L2, async getElementRects(t3) {
  let { reference: e4, floating: n3, strategy: o5 } = t3;
  const i4 = this.getOffsetParent || H, r4 = this.getDimensions;
  return { reference: O2(e4, await i4(n3), o5), floating: __spreadValues({ x: 0, y: 0 }, await r4(n3)) };
}, getClientRects: (t3) => Array.from(t3.getClientRects()), isRTL: (t3) => "rtl" === o3(t3).direction };
function z(t3, e4, n3, o5) {
  void 0 === o5 && (o5 = {});
  const { ancestorScroll: i4 = true, ancestorResize: r4 = true, elementResize: l3 = true, animationFrame: c3 = false } = o5, s3 = i4 || r4 ? [...f2(t3) ? W(t3) : t3.contextElement ? W(t3.contextElement) : [], ...W(e4)] : [];
  s3.forEach((t4) => {
    const e5 = !f2(t4) && t4.toString().includes("V");
    !i4 || c3 && !e5 || t4.addEventListener("scroll", n3, { passive: true }), r4 && t4.addEventListener("resize", n3);
  });
  let u3, a3 = null;
  l3 && (a3 = new ResizeObserver(() => {
    n3();
  }), f2(t3) && !c3 && a3.observe(t3), f2(t3) || !t3.contextElement || c3 || a3.observe(t3.contextElement), a3.observe(e4));
  let d3 = c3 ? E(t3) : null;
  return c3 && function e5() {
    const o6 = E(t3);
    !d3 || o6.x === d3.x && o6.y === d3.y && o6.width === d3.width && o6.height === d3.height || n3();
    d3 = o6, u3 = requestAnimationFrame(e5);
  }(), n3(), () => {
    var t4;
    s3.forEach((t5) => {
      i4 && t5.removeEventListener("scroll", n3), r4 && t5.removeEventListener("resize", n3);
    }), null == (t4 = a3) || t4.disconnect(), a3 = null, c3 && cancelAnimationFrame(u3);
  };
}
var k2 = (t3, n3, o5) => {
  const i4 = /* @__PURE__ */ new Map(), r4 = __spreadValues({ platform: P2 }, o5), l3 = __spreadProps(__spreadValues({}, r4.platform), { _c: i4 });
  return r(t3, n3, __spreadProps(__spreadValues({}, r4), { platform: l3 }));
};

// node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
function t2(t3) {
  return r3(t3);
}
function o4(t3) {
  return t3.assignedSlot ? t3.assignedSlot : t3.parentNode instanceof ShadowRoot ? t3.parentNode.host : t3.parentNode;
}
function r3(t3) {
  for (let e4 = t3; e4; e4 = o4(e4))
    if (e4 instanceof Element && "none" === getComputedStyle(e4).display)
      return null;
  for (let e4 = o4(t3); e4; e4 = o4(e4)) {
    if (!(e4 instanceof Element))
      continue;
    const t4 = getComputedStyle(e4);
    if ("contents" !== t4.display) {
      if ("static" !== t4.position || "none" !== t4.filter)
        return e4;
      if ("BODY" === e4.tagName)
        return e4;
    }
  }
  return null;
}

// src/components/popup/popup.ts
var Popup = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.placement = "top";
    this.strategy = "absolute";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    this.stop();
  }
  async updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProps.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root = this.getRootNode();
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof Element) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (!this.anchorEl) {
      throw new Error(
        "Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute."
      );
    }
    this.start();
  }
  start() {
    if (!this.anchorEl) {
      return;
    }
    this.cleanup = z(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      // The offset middleware goes first
      D({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        B({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    if (this.flip) {
      middleware.push(
        b({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        k({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        B({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        u({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    const getOffsetParent = this.strategy === "absolute" ? (element) => P2.getOffsetParent(element, t2) : P2.getOffsetParent;
    k2(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy,
      platform: __spreadProps(__spreadValues({}, P2), {
        getOffsetParent
      })
    }).then(({ x: x4, y: y3, middlewareData, placement }) => {
      const isRtl = getComputedStyle(this).direction === "rtl";
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x4}px`,
        top: `${y3}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    this.emit("bui-reposition");
  }
  render() {
    return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${o({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
Popup.styles = popup_styles_default;
__decorateClass([
  i(".popup")
], Popup.prototype, "popup", 2);
__decorateClass([
  i(".popup__arrow")
], Popup.prototype, "arrowEl", 2);
__decorateClass([
  e2()
], Popup.prototype, "anchor", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Popup.prototype, "active", 2);
__decorateClass([
  e2({ reflect: true })
], Popup.prototype, "placement", 2);
__decorateClass([
  e2({ reflect: true })
], Popup.prototype, "strategy", 2);
__decorateClass([
  e2({ type: Number })
], Popup.prototype, "distance", 2);
__decorateClass([
  e2({ type: Number })
], Popup.prototype, "skidding", 2);
__decorateClass([
  e2({ type: Boolean })
], Popup.prototype, "arrow", 2);
__decorateClass([
  e2({ attribute: "arrow-placement" })
], Popup.prototype, "arrowPlacement", 2);
__decorateClass([
  e2({ attribute: "arrow-padding", type: Number })
], Popup.prototype, "arrowPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], Popup.prototype, "flip", 2);
__decorateClass([
  e2({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], Popup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  e2({ attribute: "flip-fallback-strategy" })
], Popup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  e2({ type: Object })
], Popup.prototype, "flipBoundary", 2);
__decorateClass([
  e2({ attribute: "flip-padding", type: Number })
], Popup.prototype, "flipPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], Popup.prototype, "shift", 2);
__decorateClass([
  e2({ type: Object })
], Popup.prototype, "shiftBoundary", 2);
__decorateClass([
  e2({ attribute: "shift-padding", type: Number })
], Popup.prototype, "shiftPadding", 2);
__decorateClass([
  e2({ attribute: "auto-size" })
], Popup.prototype, "autoSize", 2);
__decorateClass([
  e2()
], Popup.prototype, "sync", 2);
__decorateClass([
  e2({ type: Object })
], Popup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  e2({ attribute: "auto-size-padding", type: Number })
], Popup.prototype, "autoSizePadding", 2);
Popup = __decorateClass([
  e("bui-popup")
], Popup);

export {
  Popup
};
