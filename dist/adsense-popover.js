var ft = Object.defineProperty;
var dt = (e, t, n) => t in e ? ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => (dt(e, typeof t != "symbol" ? t + "" : t, n), n);
/*! 
Copyright (c) 2023 sjquant. All rights reserved.

This software is part of the adsense-popover project: https://github.com/sjquant/adsense-popover

Licensed under the MIT License. See the LICENSE file in the project root for full license information.
*/
function P() {
}
function q(e) {
  return e();
}
function J() {
  return /* @__PURE__ */ Object.create(null);
}
function S(e) {
  e.forEach(q);
}
function B(e) {
  return typeof e == "function";
}
function G(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ht(e) {
  return Object.keys(e).length === 0;
}
function F(e) {
  return e ?? "";
}
function j(e, t) {
  e.appendChild(t);
}
function Q(e, t, n) {
  const i = $t(e);
  if (!i.getElementById(t)) {
    const o = w("style");
    o.id = t, o.textContent = n, mt(i, o);
  }
}
function $t(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function mt(e, t) {
  return j(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function K(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function w(e) {
  return document.createElement(e);
}
function gt(e) {
  return document.createTextNode(e);
}
function _t() {
  return gt(" ");
}
function bt(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function f(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function yt(e) {
  return Array.from(e.childNodes);
}
function wt(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let z;
function C(e) {
  z = e;
}
function W() {
  if (!z)
    throw new Error("Function called outside component initialization");
  return z;
}
function pt(e) {
  W().$$.on_mount.push(e);
}
function vt(e) {
  W().$$.on_destroy.push(e);
}
const y = [], D = [];
let p = [];
const U = [], xt = /* @__PURE__ */ Promise.resolve();
let M = !1;
function kt() {
  M || (M = !0, xt.then(d));
}
function Y(e) {
  p.push(e);
}
const A = /* @__PURE__ */ new Set();
let b = 0;
function d() {
  if (b !== 0)
    return;
  const e = z;
  do {
    try {
      for (; b < y.length; ) {
        const t = y[b];
        b++, C(t), Et(t.$$);
      }
    } catch (t) {
      throw y.length = 0, b = 0, t;
    }
    for (C(null), y.length = 0, b = 0; D.length; )
      D.pop()();
    for (let t = 0; t < p.length; t += 1) {
      const n = p[t];
      A.has(n) || (A.add(n), n());
    }
    p.length = 0;
  } while (y.length);
  for (; U.length; )
    U.pop()();
  M = !1, A.clear(), C(e);
}
function Et(e) {
  if (e.fragment !== null) {
    e.update(), S(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Y);
  }
}
function Ct(e) {
  const t = [], n = [];
  p.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), p = t;
}
const N = /* @__PURE__ */ new Set();
let Pt;
function Z(e, t) {
  e && e.i && (N.delete(e), e.i(t));
}
function zt(e, t, n, i) {
  if (e && e.o) {
    if (N.has(e))
      return;
    N.add(e), Pt.c.push(() => {
      N.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function jt(e) {
  e && e.c();
}
function tt(e, t, n) {
  const { fragment: i, after_update: o } = e.$$;
  i && i.m(t, n), Y(() => {
    const s = e.$$.on_mount.map(q).filter(B);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : S(s), e.$$.on_mount = [];
  }), o.forEach(Y);
}
function et(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ct(n.after_update), S(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Nt(e, t) {
  e.$$.dirty[0] === -1 && (y.push(e), kt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function nt(e, t, n, i, o, s, a = null, l = [-1]) {
  const u = z;
  C(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: P,
    not_equal: o,
    bound: J(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: J(),
    dirty: l,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  a && a(r.root);
  let m = !1;
  if (r.ctx = n ? n(e, t.props || {}, (h, g, ..._) => {
    const v = _.length ? _[0] : g;
    return r.ctx && o(r.ctx[h], r.ctx[h] = v) && (!r.skip_bound && r.bound[h] && r.bound[h](v), m && Nt(e, h)), g;
  }) : [], r.update(), m = !0, S(r.before_update), r.fragment = i ? i(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = yt(t.target);
      r.fragment && r.fragment.l(h), h.forEach(L);
    } else
      r.fragment && r.fragment.c();
    t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), d();
  }
  C(u);
}
let st;
typeof HTMLElement == "function" && (st = class extends HTMLElement {
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    $(this, "$$ctor");
    /** Slots */
    $(this, "$$s");
    /** The Svelte component instance */
    $(this, "$$c");
    /** Whether or not the custom element is connected */
    $(this, "$$cn", !1);
    /** Component props data */
    $(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    $(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let a;
          return {
            c: function() {
              a = w("slot"), s !== "default" && f(a, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(r, m) {
              K(r, a, m);
            },
            d: function(r) {
              r && L(a);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, i = wt(this);
      for (const s of this.$$s)
        s in i && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = O(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const o = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const a = O(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const l = this.$$c.$on(s, a);
          this.$$l_u.set(a, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, i) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = O(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function O(e, t, n, i) {
  var s;
  const o = (s = n[e]) == null ? void 0 : s.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function it(e, t, n, i, o, s) {
  let a = class extends st {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var r;
        u = O(l, u, t), this.$$d[l] = u, (r = this.$$c) == null || r.$set({ [l]: u });
      }
    });
  }), i.forEach((l) => {
    Object.defineProperty(a.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), s && (a = s(a)), e.element = /** @type {any} */
  a, a;
}
class ot {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    et(this, 1), this.$destroy = P;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!B(n))
      return P;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const o = i.indexOf(n);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ht(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
function St(e) {
  Q(e, "svelte-wbtlcz", ".close-btn.svelte-wbtlcz.svelte-wbtlcz{background:transparent;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;border:none;border-radius:0px;outline:none}.close-btn.svelte-wbtlcz svg.svelte-wbtlcz{width:16px;height:16px}");
}
function Lt(e) {
  let t, n, i;
  return {
    c() {
      t = w("button"), t.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-wbtlcz"><path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>', f(t, "class", "close-btn svelte-wbtlcz");
    },
    m(o, s) {
      K(o, t, s), n || (i = bt(t, "click", function() {
        B(
          /*onClick*/
          e[0]
        ) && e[0].apply(this, arguments);
      }), n = !0);
    },
    p(o, [s]) {
      e = o;
    },
    i: P,
    o: P,
    d(o) {
      o && L(t), n = !1, i();
    }
  };
}
function At(e, t, n) {
  let { onClick: i } = t;
  return e.$$set = (o) => {
    "onClick" in o && n(0, i = o.onClick);
  }, [i];
}
class rt extends ot {
  constructor(t) {
    super(), nt(this, t, At, Lt, G, { onClick: 0 }, St);
  }
  get onClick() {
    return this.$$.ctx[0];
  }
  set onClick(t) {
    this.$$set({ onClick: t }), d();
  }
}
it(rt, { onClick: {} }, [], [], !0);
function Dt(e) {
  Q(e, "svelte-tm3ms6", ".adsense-popover.svelte-tm3ms6.svelte-tm3ms6{position:fixed;visibility:hidden;box-shadow:0 2px 8px hsla(0, 0%, 0%, 0.22);border-radius:4px;opacity:0;background-color:#fff;z-index:9999}.adsense-popover.visible.svelte-tm3ms6.svelte-tm3ms6{visibility:visible;opacity:1;transform:translateY(0) !important}.adsense-popover.svelte-tm3ms6 .close-btn.svelte-tm3ms6{position:absolute;z-index:1;color:#000;background-color:#fff;cursor:pointer;top:0;right:0}.adsense-popover.svelte-tm3ms6 .close-btn.svelte-tm3ms6:hover{background-color:#f5f5f5}.adsbygoogle.svelte-tm3ms6.svelte-tm3ms6{display:block;background-color:#fff}");
}
function Mt(e) {
  let t, n, i, o, s, a, l;
  return i = new rt({ props: { onClick: (
    /*closeAd*/
    e[9]
  ) } }), {
    c() {
      t = w("div"), n = w("div"), jt(i.$$.fragment), o = _t(), s = w("ins"), f(n, "class", "close-btn svelte-tm3ms6"), f(
        n,
        "style",
        /*btnStyle*/
        e[7]
      ), f(s, "class", "adsbygoogle svelte-tm3ms6"), f(
        s,
        "data-ad-client",
        /*client*/
        e[2]
      ), f(
        s,
        "data-ad-slot",
        /*slot*/
        e[1]
      ), f(
        s,
        "data-ad-layout-key",
        /*layoutKey*/
        e[0]
      ), f(
        s,
        "data-ad-format",
        /*format*/
        e[3]
      ), f(
        s,
        "data-full-width-responsive",
        /*responsive*/
        e[4]
      ), f(t, "class", a = F(`adsense-popover ${/*isVisible*/
      e[6] ? "visible" : ""}`) + " svelte-tm3ms6"), f(
        t,
        "style",
        /*containerStyle*/
        e[8]
      );
    },
    m(u, r) {
      K(u, t, r), j(t, n), tt(i, n, null), j(t, o), j(t, s), e[19](s), l = !0;
    },
    p(u, [r]) {
      (!l || r & /*btnStyle*/
      128) && f(
        n,
        "style",
        /*btnStyle*/
        u[7]
      ), (!l || r & /*client*/
      4) && f(
        s,
        "data-ad-client",
        /*client*/
        u[2]
      ), (!l || r & /*slot*/
      2) && f(
        s,
        "data-ad-slot",
        /*slot*/
        u[1]
      ), (!l || r & /*layoutKey*/
      1) && f(
        s,
        "data-ad-layout-key",
        /*layoutKey*/
        u[0]
      ), (!l || r & /*format*/
      8) && f(
        s,
        "data-ad-format",
        /*format*/
        u[3]
      ), (!l || r & /*responsive*/
      16) && f(
        s,
        "data-full-width-responsive",
        /*responsive*/
        u[4]
      ), (!l || r & /*isVisible*/
      64 && a !== (a = F(`adsense-popover ${/*isVisible*/
      u[6] ? "visible" : ""}`) + " svelte-tm3ms6")) && f(t, "class", a), (!l || r & /*containerStyle*/
      256) && f(
        t,
        "style",
        /*containerStyle*/
        u[8]
      );
    },
    i(u) {
      l || (Z(i.$$.fragment, u), l = !0);
    },
    o(u) {
      zt(i.$$.fragment, u), l = !1;
    },
    d(u) {
      u && L(t), et(i), e[19](null);
    }
  };
}
function Yt(e, t, n) {
  let i, o, { width: s = 400 } = t, { height: a = 140 } = t, { padding: l = 8 } = t, { offsetX: u = 16 } = t, { offsetY: r = 16 } = t, { animationDuration: m = 0.5 } = t, { horizontalPosition: h = "right" } = t, { verticalPosition: g = "bottom" } = t, { timeout: _ = 2e3 } = t, { layoutKey: v = "" } = t, { slot: X = "" } = t, { client: I = "" } = t, { format: T = "auto" } = t, { responsive: R = "true" } = t, x, k = !1;
  const H = new MutationObserver((c) => {
    var E;
    for (const V of c) {
      const { type: ct, attributeName: at } = V;
      if (ct === "attributes" && at === "data-ad-status" && ((E = V.target.attributes.getNamedItem("data-ad-status")) == null ? void 0 : E.value) === "unfilled") {
        n(6, k = !1);
        break;
      }
    }
  });
  pt(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({}), H.observe(x, { attributes: !0 }), setTimeout(
      () => {
        var E;
        ((E = x.attributes.getNamedItem("data-ad-status")) == null ? void 0 : E.value) === "unfilled" ? n(6, k = !1) : n(6, k = !0);
      },
      _
    );
  }), vt(() => {
    H.disconnect();
  });
  function lt() {
    n(6, k = !1);
  }
  function ut(c) {
    D[c ? "unshift" : "push"](() => {
      x = c, n(5, x);
    });
  }
  return e.$$set = (c) => {
    "width" in c && n(10, s = c.width), "height" in c && n(11, a = c.height), "padding" in c && n(12, l = c.padding), "offsetX" in c && n(13, u = c.offsetX), "offsetY" in c && n(14, r = c.offsetY), "animationDuration" in c && n(15, m = c.animationDuration), "horizontalPosition" in c && n(16, h = c.horizontalPosition), "verticalPosition" in c && n(17, g = c.verticalPosition), "timeout" in c && n(18, _ = c.timeout), "layoutKey" in c && n(0, v = c.layoutKey), "slot" in c && n(1, X = c.slot), "client" in c && n(2, I = c.client), "format" in c && n(3, T = c.format), "responsive" in c && n(4, R = c.responsive);
  }, e.$$.update = () => {
    e.$$.dirty & /*width, height, verticalPosition, offsetY, animationDuration, horizontalPosition, offsetX, padding*/
    261120 && n(8, i = `
  width: ${s}px;
  height: ${a}px;
  ${g}: ${r}px;
  transition-duration: ${m}s;
  ${h === "center" ? `left: calc(50% - ${s / 2})px` : `${h}: ${u}px`};
  transform: translateY(${g === "bottom" ? 50 : -50}%);
  padding: ${l}px;
`), e.$$.dirty & /*padding*/
    4096 && n(7, o = `
  margin: ${l}px;
`);
  }, [
    v,
    X,
    I,
    T,
    R,
    x,
    k,
    o,
    i,
    lt,
    s,
    a,
    l,
    u,
    r,
    m,
    h,
    g,
    _,
    ut
  ];
}
class Bt extends ot {
  constructor(t) {
    super(), nt(
      this,
      t,
      Yt,
      Mt,
      G,
      {
        width: 10,
        height: 11,
        padding: 12,
        offsetX: 13,
        offsetY: 14,
        animationDuration: 15,
        horizontalPosition: 16,
        verticalPosition: 17,
        timeout: 18,
        layoutKey: 0,
        slot: 1,
        client: 2,
        format: 3,
        responsive: 4
      },
      Dt
    );
  }
  get width() {
    return this.$$.ctx[10];
  }
  set width(t) {
    this.$$set({ width: t }), d();
  }
  get height() {
    return this.$$.ctx[11];
  }
  set height(t) {
    this.$$set({ height: t }), d();
  }
  get padding() {
    return this.$$.ctx[12];
  }
  set padding(t) {
    this.$$set({ padding: t }), d();
  }
  get offsetX() {
    return this.$$.ctx[13];
  }
  set offsetX(t) {
    this.$$set({ offsetX: t }), d();
  }
  get offsetY() {
    return this.$$.ctx[14];
  }
  set offsetY(t) {
    this.$$set({ offsetY: t }), d();
  }
  get animationDuration() {
    return this.$$.ctx[15];
  }
  set animationDuration(t) {
    this.$$set({ animationDuration: t }), d();
  }
  get horizontalPosition() {
    return this.$$.ctx[16];
  }
  set horizontalPosition(t) {
    this.$$set({ horizontalPosition: t }), d();
  }
  get verticalPosition() {
    return this.$$.ctx[17];
  }
  set verticalPosition(t) {
    this.$$set({ verticalPosition: t }), d();
  }
  get timeout() {
    return this.$$.ctx[18];
  }
  set timeout(t) {
    this.$$set({ timeout: t }), d();
  }
  get layoutKey() {
    return this.$$.ctx[0];
  }
  set layoutKey(t) {
    this.$$set({ layoutKey: t }), d();
  }
  get slot() {
    return this.$$.ctx[1];
  }
  set slot(t) {
    this.$$set({ slot: t }), d();
  }
  get client() {
    return this.$$.ctx[2];
  }
  set client(t) {
    this.$$set({ client: t }), d();
  }
  get format() {
    return this.$$.ctx[3];
  }
  set format(t) {
    this.$$set({ format: t }), d();
  }
  get responsive() {
    return this.$$.ctx[4];
  }
  set responsive(t) {
    this.$$set({ responsive: t }), d();
  }
}
customElements.define("adsense-popover", it(Bt, { width: {}, height: {}, padding: {}, offsetX: {}, offsetY: {}, animationDuration: {}, horizontalPosition: {}, verticalPosition: {}, timeout: {}, layoutKey: {}, slot: {}, client: {}, format: {}, responsive: {} }, [], [], !1));
export {
  Bt as Adsense
};
