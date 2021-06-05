(() => {
  var e = {
    829: () => {
      const e = document.createElement('div');
      e.className = 'title', e.innerHTML = '这是一段内容', document.body.appendChild(e);
    }, 466: e => {e.exports = {priceFormat: () => '￥198'};}
  }, r = {};

  function t(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var a = r[o] = {exports: {}};
    return e[o](a, a.exports, t), a.exports;
  }

  t.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return t.d(r, {a: r}), r;
  }, t.d = (e, r) => {
    for (var o in r) t.o(r, o) && !t.o(e, o) && Object.defineProperty(e, o, {
      enumerable: !0,
      get: r[o]
    });
  }, t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
    'use strict';
    t(829);
    const {priceFormat: e} = t(466);
    console.log(e());
  })();
})();
