(() => {
  var e = {
      213: (e) => {
        (window,
          (e.exports = (function (e) {
            var t = {};
            function s(i) {
              if (t[i]) return t[i].exports;
              var n = (t[i] = { i, l: !1, exports: {} });
              return (
                e[i].call(n.exports, n, n.exports, s),
                (n.l = !0),
                n.exports
              );
            }
            return (
              (s.m = e),
              (s.c = t),
              (s.d = function (e, t, i) {
                s.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: i });
              }),
              (s.r = function (e) {
                ("undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 }));
              }),
              (s.t = function (e, t) {
                if ((1 & t && (e = s(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var i = Object.create(null);
                if (
                  (s.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var n in e)
                    s.d(
                      i,
                      n,
                      function (t) {
                        return e[t];
                      }.bind(null, n),
                    );
                return i;
              }),
              (s.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return (s.d(t, "a", t), t);
              }),
              (s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (s.p = ""),
              s((s.s = 0))
            );
          })([
            function (e, t, s) {
              "use strict";
              s.r(t);
              var i,
                n = "fslightbox-",
                r = "".concat(n, "styles"),
                o = "".concat(n, "cursor-grabbing"),
                a = "".concat(n, "full-dimension"),
                l = "".concat(n, "flex-centered"),
                d = "".concat(n, "open"),
                c = "".concat(n, "transform-transition"),
                u = "".concat(n, "absoluted"),
                p = "".concat(n, "slide-btn"),
                f = "".concat(p, "-container"),
                m = "".concat(n, "fade-in"),
                h = "".concat(n, "fade-out"),
                v = m + "-strong",
                g = h + "-strong",
                w = "".concat(n, "opacity-"),
                b = "".concat(w, "1"),
                y = "".concat(n, "source");
              function x(e) {
                return (x =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function S(e) {
                var t = e.stageIndexes,
                  s = e.core.stageManager,
                  i = e.props.sources.length - 1;
                ((s.getPreviousSlideIndex = function () {
                  return 0 === t.current ? i : t.current - 1;
                }),
                  (s.getNextSlideIndex = function () {
                    return t.current === i ? 0 : t.current + 1;
                  }),
                  (s.updateStageIndexes =
                    0 === i
                      ? function () {}
                      : 1 === i
                        ? function () {
                            0 === t.current
                              ? ((t.next = 1), delete t.previous)
                              : ((t.previous = 0), delete t.next);
                          }
                        : function () {
                            ((t.previous = s.getPreviousSlideIndex()),
                              (t.next = s.getNextSlideIndex()));
                          }),
                  (s.i =
                    i <= 2
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          var s = t.current;
                          if ((0 === s && e === i) || (s === i && 0 === e))
                            return !0;
                          var n = s - e;
                          return -1 === n || 0 === n || 1 === n;
                        }));
              }
              function T(e) {
                var t,
                  s = e.props,
                  i = 0,
                  n = {};
                ((this.getSourceTypeFromLocalStorageByUrl = function (e) {
                  return t[e] ? t[e] : r(e);
                }),
                  (this.handleReceivedSourceTypeForUrl = function (e, s) {
                    if (
                      !1 === n[s] &&
                      (i--, "invalid" !== e ? (n[s] = e) : delete n[s], 0 === i)
                    ) {
                      !(function (e, t) {
                        for (var s in t) e[s] = t[s];
                      })(t, n);
                      try {
                        localStorage.setItem(
                          "fslightbox-types",
                          JSON.stringify(t),
                        );
                      } catch (e) {}
                    }
                  }));
                var r = function (e) {
                  (i++, (n[e] = !1));
                };
                if (s.disableLocalStorage)
                  ((this.getSourceTypeFromLocalStorageByUrl = function () {}),
                    (this.handleReceivedSourceTypeForUrl = function () {}));
                else {
                  try {
                    t = JSON.parse(localStorage.getItem("fslightbox-types"));
                  } catch (e) {}
                  t ||
                    ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
                }
              }
              function E(e, t, s, i) {
                var n = e.data,
                  r = e.elements.sources,
                  o = s / i,
                  a = 0;
                this.adjustSize = function () {
                  if ((a = n.maxSourceWidth / o) < n.maxSourceHeight)
                    return (s < n.maxSourceWidth && (a = i), l());
                  ((a = i > n.maxSourceHeight ? n.maxSourceHeight : i), l());
                };
                var l = function () {
                  ((r[t].style.width = a * o + "px"),
                    (r[t].style.height = a + "px"));
                };
              }
              function L(e, t) {
                var s = this,
                  i = e.collections.sourceSizers,
                  n = e.elements,
                  r = n.sourceAnimationWrappers,
                  o = n.sources,
                  a = e.isl,
                  l = e.resolve;
                function d(e, s) {
                  ((i[t] = l(E, [t, e, s])), i[t].adjustSize());
                }
                this.runActions = function (e, i) {
                  ((a[t] = !0),
                    o[t].classList.add(b),
                    r[t].classList.add(v),
                    r[t].removeChild(r[t].firstChild),
                    d(e, i),
                    (s.runActions = d));
                };
              }
              function C(e, t) {
                var s,
                  i = this,
                  n = e.elements.sources,
                  r = e.props,
                  o = (0, e.resolve)(L, [t]);
                ((this.handleImageLoad = function (e) {
                  var t = e.target,
                    s = t.naturalWidth,
                    i = t.naturalHeight;
                  o.runActions(s, i);
                }),
                  (this.handleVideoLoad = function (e) {
                    var t = e.target,
                      i = t.videoWidth,
                      n = t.videoHeight;
                    ((s = !0), o.runActions(i, n));
                  }),
                  (this.handleNotMetaDatedVideoLoad = function () {
                    s || i.handleYoutubeLoad();
                  }),
                  (this.handleYoutubeLoad = function () {
                    var e = 1920,
                      t = 1080;
                    (r.maxYoutubeDimensions &&
                      ((e = r.maxYoutubeDimensions.width),
                      (t = r.maxYoutubeDimensions.height)),
                      o.runActions(e, t));
                  }),
                  (this.handleCustomLoad = function () {
                    var e = n[t],
                      s = e.offsetWidth,
                      r = e.offsetHeight;
                    s && r
                      ? o.runActions(s, r)
                      : setTimeout(i.handleCustomLoad);
                  }));
              }
              function M(e, t, s) {
                var i = e.elements.sources,
                  n = e.props.customClasses,
                  r = n[t] ? n[t] : "";
                i[t].className = s + " " + r;
              }
              function P(e, t) {
                var s = e.elements.sources,
                  i = e.props.customAttributes;
                for (var n in i[t]) s[t].setAttribute(n, i[t][n]);
              }
              function A(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  i = e.elements,
                  n = i.sources,
                  r = i.sourceAnimationWrappers,
                  o = e.props.sources;
                ((n[t] = document.createElement("img")),
                  M(e, t, y),
                  (n[t].src = o[t]),
                  (n[t].onload = s[t].handleImageLoad),
                  P(e, t),
                  r[t].appendChild(n[t]));
              }
              function I(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  i = e.elements,
                  n = i.sources,
                  r = i.sourceAnimationWrappers,
                  o = e.props,
                  a = o.sources,
                  l = o.videosPosters;
                ((n[t] = document.createElement("video")),
                  M(e, t, y),
                  (n[t].src = a[t]),
                  (n[t].onloadedmetadata = function (e) {
                    s[t].handleVideoLoad(e);
                  }),
                  (n[t].controls = !0),
                  P(e, t),
                  l[t] && (n[t].poster = l[t]));
                var d = document.createElement("source");
                ((d.src = a[t]),
                  n[t].appendChild(d),
                  setTimeout(s[t].handleNotMetaDatedVideoLoad, 3e3),
                  r[t].appendChild(n[t]));
              }
              function k(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  i = e.elements,
                  r = i.sources,
                  o = i.sourceAnimationWrappers,
                  a = e.props.sources;
                ((r[t] = document.createElement("iframe")),
                  M(e, t, "".concat(y, " ").concat(n, "youtube-iframe")));
                var l = a[t],
                  d = l.split("?")[1];
                ((r[t].src = "https://www.youtube.com/embed/"
                  .concat(
                    l.match(
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
                    )[2],
                    "?",
                  )
                  .concat(d || "")),
                  (r[t].allowFullscreen = !0),
                  P(e, t),
                  o[t].appendChild(r[t]),
                  s[t].handleYoutubeLoad());
              }
              function O(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  i = e.elements,
                  n = i.sources,
                  r = i.sourceAnimationWrappers,
                  o = e.props.sources;
                ((n[t] = o[t]),
                  M(e, t, "".concat(n[t].className, " ").concat(y)),
                  r[t].appendChild(n[t]),
                  s[t].handleCustomLoad());
              }
              function z(e, t) {
                var s = e.elements,
                  i = s.sources,
                  r = s.sourceAnimationWrappers;
                (e.props.sources,
                  (i[t] = document.createElement("div")),
                  (i[t].className = ""
                    .concat(n, "invalid-file-wrapper ")
                    .concat(l)),
                  (i[t].innerHTML = "Invalid source"),
                  r[t].classList.add(v),
                  r[t].removeChild(r[t].firstChild),
                  r[t].appendChild(i[t]));
              }
              function F(e) {
                var t = e.collections,
                  s = t.sourceLoadHandlers,
                  i = t.sourcesRenderFunctions,
                  n = e.core.sourceDisplayFacade,
                  r = e.resolve;
                this.runActionsForSourceTypeAndIndex = function (t, o) {
                  var a;
                  switch (("invalid" !== t && (s[o] = r(C, [o])), t)) {
                    case "image":
                      a = A;
                      break;
                    case "video":
                      a = I;
                      break;
                    case "youtube":
                      a = k;
                      break;
                    case "custom":
                      a = O;
                      break;
                    default:
                      a = z;
                  }
                  ((i[o] = function () {
                    return a(e, o);
                  }),
                    n.displaySourcesWhichShouldBeDisplayed());
                };
              }
              function _() {
                var e,
                  t,
                  s,
                  i = {
                    isUrlYoutubeOne: function (e) {
                      var t = document.createElement("a");
                      return (
                        (t.href = e),
                        "www.youtube.com" === t.hostname ||
                          "youtu.be" === t.hostname
                      );
                    },
                    getTypeFromResponseContentType: function (e) {
                      return e.slice(0, e.indexOf("/"));
                    },
                  };
                function n() {
                  if (4 !== s.readyState) {
                    if (2 === s.readyState) {
                      var e;
                      switch (
                        i.getTypeFromResponseContentType(
                          s.getResponseHeader("content-type"),
                        )
                      ) {
                        case "image":
                          e = "image";
                          break;
                        case "video":
                          e = "video";
                          break;
                        default:
                          e = "invalid";
                      }
                      ((s.onreadystatechange = null), s.abort(), t(e));
                    }
                  } else t("invalid");
                }
                ((this.setUrlToCheck = function (t) {
                  e = t;
                }),
                  (this.getSourceType = function (r) {
                    if (i.isUrlYoutubeOne(e)) return r("youtube");
                    ((t = r),
                      ((s = new XMLHttpRequest()).onreadystatechange = n),
                      s.open("GET", e, !0),
                      s.send());
                  }));
              }
              function D(e, t, s) {
                var i = e.props,
                  n = i.types,
                  r = i.type,
                  o = i.sources,
                  a = e.resolve;
                ((this.getTypeSetByClientForIndex = function (e) {
                  var t;
                  return (n && n[e] ? (t = n[e]) : r && (t = r), t);
                }),
                  (this.retrieveTypeWithXhrForIndex = function (e) {
                    var i = a(_);
                    (i.setUrlToCheck(o[e]),
                      i.getSourceType(function (i) {
                        (t.handleReceivedSourceTypeForUrl(i, o[e]),
                          s.runActionsForSourceTypeAndIndex(i, e));
                      }));
                  }));
              }
              function N(e, t) {
                var s = e.core.stageManager,
                  i = e.elements,
                  n = i.smw,
                  r = i.sourceWrappersContainer,
                  o = e.props,
                  d = 0,
                  p = document.createElement("div");
                function f(e) {
                  ((p.style.transform = "translateX(".concat(e + d, "px)")),
                    (d = 0));
                }
                function m() {
                  return (1 + o.slideDistance) * innerWidth;
                }
                ((p.className = "".concat(u, " ").concat(a, " ").concat(l)),
                  (p.s = function () {
                    p.style.display = "flex";
                  }),
                  (p.h = function () {
                    p.style.display = "none";
                  }),
                  (p.a = function () {
                    p.classList.add(c);
                  }),
                  (p.d = function () {
                    p.classList.remove(c);
                  }),
                  (p.n = function () {
                    p.style.removeProperty("transform");
                  }),
                  (p.v = function (e) {
                    return ((d = e), p);
                  }),
                  (p.ne = function () {
                    f(-m());
                  }),
                  (p.z = function () {
                    f(0);
                  }),
                  (p.p = function () {
                    f(m());
                  }),
                  s.i(t) || p.h(),
                  (n[t] = p),
                  r.appendChild(p),
                  (function (e, t) {
                    var s = e.elements,
                      i = s.smw,
                      n = s.sourceAnimationWrappers,
                      r = document.createElement("div"),
                      o = document.createElement("div");
                    o.className = "fslightboxl";
                    for (var a = 0; a < 3; a++) {
                      var l = document.createElement("div");
                      o.appendChild(l);
                    }
                    (r.appendChild(o), i[t].appendChild(r), (n[t] = r));
                  })(e, t));
              }
              function G(e, t, s, i) {
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg",
                );
                (r.setAttributeNS(null, "width", t),
                  r.setAttributeNS(null, "height", t),
                  r.setAttributeNS(null, "viewBox", s));
                var o = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path",
                );
                return (
                  o.setAttributeNS(null, "class", "".concat(n, "svg-path")),
                  o.setAttributeNS(null, "d", i),
                  r.appendChild(o),
                  e.appendChild(r),
                  r
                );
              }
              function V(e, t) {
                var s = document.createElement("div");
                return (
                  (s.className = "".concat(n, "toolbar-button ").concat(l)),
                  (s.title = t),
                  e.appendChild(s),
                  s
                );
              }
              function H(e, t) {
                var s = document.createElement("div");
                ((s.className = "".concat(n, "toolbar")),
                  t.appendChild(s),
                  (function (e, t) {
                    var s = e.componentsServices,
                      i = e.data,
                      n = e.fs,
                      r =
                        "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                      o = V(t);
                    o.title = "Enter fullscreen";
                    var a = G(o, "20px", "0 0 18 18", r);
                    ((s.ofs = function () {
                      ((i.ifs = !0),
                        (o.title = "Exit fullscreen"),
                        a.setAttributeNS(null, "width", "24px"),
                        a.setAttributeNS(null, "height", "24px"),
                        a.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                        a.firstChild.setAttributeNS(
                          null,
                          "d",
                          "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
                        ));
                    }),
                      (s.xfs = function () {
                        ((i.ifs = !1),
                          (o.title = "Enter fullscreen"),
                          a.setAttributeNS(null, "width", "20px"),
                          a.setAttributeNS(null, "height", "20px"),
                          a.setAttributeNS(null, "viewBox", "0 0 18 18"),
                          a.firstChild.setAttributeNS(null, "d", r));
                      }),
                      (o.onclick = n.t));
                  })(e, s),
                  (function (e, t) {
                    var s = V(t, "Close");
                    ((s.onclick = e.core.lightboxCloser.closeLightbox),
                      G(
                        s,
                        "20px",
                        "0 0 24 24",
                        "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
                      ));
                  })(e, s));
              }
              function q(e) {
                var t = e.props.sources,
                  s = e.elements.container,
                  i = document.createElement("div");
                ((i.className = "".concat(n, "nav")),
                  s.appendChild(i),
                  H(e, i),
                  t.length > 1 &&
                    (function (e, t) {
                      var s = e.componentsServices,
                        i = e.props.sources,
                        r = (e.stageIndexes, document.createElement("div"));
                      r.className = "".concat(n, "slide-number-container");
                      var o = document.createElement("div");
                      o.className = l;
                      var a = document.createElement("span");
                      s.setSlideNumber = function (e) {
                        return (a.innerHTML = e);
                      };
                      var d = document.createElement("span");
                      d.className = "".concat(n, "slash");
                      var c = document.createElement("div");
                      ((c.innerHTML = i.length),
                        r.appendChild(o),
                        o.appendChild(a),
                        o.appendChild(d),
                        o.appendChild(c),
                        t.appendChild(r),
                        setTimeout(function () {
                          o.offsetWidth > 55 &&
                            (r.style.justifyContent = "flex-start");
                        }));
                    })(e, i));
              }
              function R(e, t, s, i) {
                var n = e.elements.container,
                  r = s.charAt(0).toUpperCase() + s.slice(1),
                  o = document.createElement("div");
                ((o.className = "".concat(f, " ").concat(f, "-").concat(s)),
                  (o.title = "".concat(r, " slide")),
                  (o.onclick = t),
                  (function (e, t) {
                    var s = document.createElement("div");
                    ((s.className = "".concat(p, " ").concat(l)),
                      G(s, "20px", "0 0 20 20", t),
                      e.appendChild(s));
                  })(o, i),
                  n.appendChild(o));
              }
              function B(e) {
                var t = e.core,
                  s = t.lightboxCloser,
                  i = t.slideChangeFacade,
                  n = e.fs;
                this.listener = function (e) {
                  switch (e.key) {
                    case "Escape":
                      s.closeLightbox();
                      break;
                    case "ArrowLeft":
                      i.changeToPrevious();
                      break;
                    case "ArrowRight":
                      i.changeToNext();
                      break;
                    case "F11":
                      (e.preventDefault(), n.t());
                  }
                };
              }
              function W(e) {
                var t = e.elements,
                  s = e.sourcePointerProps,
                  i = e.stageIndexes;
                function n(e, i) {
                  t.smw[e].v(s.swipedX)[i]();
                }
                this.runActionsForEvent = function (e) {
                  var r, a, l;
                  (t.container.contains(t.slideSwipingHoverer) ||
                    t.container.appendChild(t.slideSwipingHoverer),
                    (r = t.container),
                    (a = o),
                    (l = r.classList).contains(a) || l.add(a),
                    (s.swipedX = e.screenX - s.downScreenX));
                  var d = i.previous,
                    c = i.next;
                  (n(i.current, "z"),
                    void 0 !== d && s.swipedX > 0
                      ? n(d, "ne")
                      : void 0 !== c && s.swipedX < 0 && n(c, "p"));
                };
              }
              function j(e) {
                var t = e.props.sources,
                  s = e.resolve,
                  i = e.sourcePointerProps,
                  n = s(W);
                1 === t.length
                  ? (this.listener = function () {
                      i.swipedX = 1;
                    })
                  : (this.listener = function (e) {
                      i.isPointering && n.runActionsForEvent(e);
                    });
              }
              function $(e) {
                var t = e.core.slideIndexChanger,
                  s = e.elements.smw,
                  i = e.stageIndexes,
                  n = e.sws;
                function r(e) {
                  var t = s[i.current];
                  (t.a(), t[e]());
                }
                function o(e, t) {
                  void 0 !== e && (s[e].s(), s[e][t]());
                }
                ((this.runPositiveSwipedXActions = function () {
                  var e = i.previous;
                  if (void 0 === e) r("z");
                  else {
                    r("p");
                    var s = i.next;
                    t.changeTo(e);
                    var a = i.previous;
                    (n.d(a), n.b(s), r("z"), o(a, "ne"));
                  }
                }),
                  (this.runNegativeSwipedXActions = function () {
                    var e = i.next;
                    if (void 0 === e) r("z");
                    else {
                      r("ne");
                      var s = i.previous;
                      t.changeTo(e);
                      var a = i.next;
                      (n.d(a), n.b(s), r("z"), o(a, "p"));
                    }
                  }));
              }
              function X(e, t) {
                e.contains(t) && e.removeChild(t);
              }
              function Y(e) {
                var t = e.core.lightboxCloser,
                  s = e.elements,
                  i = e.resolve,
                  n = e.sourcePointerProps,
                  r = i($);
                ((this.runNoSwipeActions = function () {
                  (X(s.container, s.slideSwipingHoverer),
                    n.isSourceDownEventTarget || t.closeLightbox(),
                    (n.isPointering = !1));
                }),
                  (this.runActions = function () {
                    (n.swipedX > 0
                      ? r.runPositiveSwipedXActions()
                      : r.runNegativeSwipedXActions(),
                      X(s.container, s.slideSwipingHoverer),
                      s.container.classList.remove(o),
                      (n.isPointering = !1));
                  }));
              }
              function U(e) {
                var t = e.resolve,
                  s = e.sourcePointerProps,
                  i = t(Y);
                this.listener = function () {
                  s.isPointering &&
                    (s.swipedX ? i.runActions() : i.runNoSwipeActions());
                };
              }
              function K(e) {
                var t = this,
                  s = e.core,
                  i = s.eventsDispatcher,
                  n = s.globalEventsController,
                  r = s.scrollbarRecompensor,
                  o = e.data,
                  a = e.elements,
                  l = e.fs,
                  c = e.props,
                  u = e.sourcePointerProps;
                ((this.isLightboxFadingOut = !1),
                  (this.runActions = function () {
                    ((t.isLightboxFadingOut = !0),
                      a.container.classList.add(g),
                      n.removeListeners(),
                      c.exitFullscreenOnClose && o.ifs && l.x(),
                      setTimeout(function () {
                        ((t.isLightboxFadingOut = !1),
                          (u.isPointering = !1),
                          a.container.classList.remove(g),
                          document.documentElement.classList.remove(d),
                          r.removeRecompense(),
                          document.body.removeChild(a.container),
                          i.dispatch("onClose"));
                      }, 270));
                  }));
              }
              function J(e, t) {
                var s = e.classList;
                s.contains(t) && s.remove(t);
              }
              function Z(e) {
                var t, s, i;
                ((s = (t = e).core.eventsDispatcher),
                  (i = t.props),
                  (s.dispatch = function (e) {
                    i[e] && i[e]();
                  }),
                  (function (e) {
                    var t = e.componentsServices,
                      s = e.data,
                      i = e.fs,
                      n = [
                        "fullscreenchange",
                        "webkitfullscreenchange",
                        "mozfullscreenchange",
                        "MSFullscreenChange",
                      ];
                    function r(e) {
                      for (var t = 0; t < n.length; t++) document[e](n[t], o);
                    }
                    function o() {
                      document.fullscreenElement ||
                      document.webkitIsFullScreen ||
                      document.mozFullScreen ||
                      document.msFullscreenElement
                        ? t.ofs()
                        : t.xfs();
                    }
                    ((i.o = function () {
                      t.ofs();
                      var e = document.documentElement;
                      e.requestFullscreen
                        ? e.requestFullscreen()
                        : e.mozRequestFullScreen
                          ? e.mozRequestFullScreen()
                          : e.webkitRequestFullscreen
                            ? e.webkitRequestFullscreen()
                            : e.msRequestFullscreen && e.msRequestFullscreen();
                    }),
                      (i.x = function () {
                        (t.xfs(),
                          document.exitFullscreen
                            ? document.exitFullscreen()
                            : document.mozCancelFullScreen
                              ? document.mozCancelFullScreen()
                              : document.webkitExitFullscreen
                                ? document.webkitExitFullscreen()
                                : document.msExitFullscreen &&
                                  document.msExitFullscreen());
                      }),
                      (i.t = function () {
                        s.ifs ? i.x() : i.o();
                      }),
                      (i.l = function () {
                        r("addEventListener");
                      }),
                      (i.q = function () {
                        r("removeEventListener");
                      }));
                  })(e),
                  (function (e) {
                    var t = e.core,
                      s = t.globalEventsController,
                      i = t.windowResizeActioner,
                      n = e.fs,
                      r = e.resolve,
                      o = r(B),
                      a = r(j),
                      l = r(U);
                    ((s.attachListeners = function () {
                      (document.addEventListener("pointermove", a.listener),
                        document.addEventListener("pointerup", l.listener),
                        addEventListener("resize", i.runActions),
                        document.addEventListener("keydown", o.listener),
                        n.l());
                    }),
                      (s.removeListeners = function () {
                        (document.removeEventListener(
                          "pointermove",
                          a.listener,
                        ),
                          document.removeEventListener("pointerup", l.listener),
                          removeEventListener("resize", i.runActions),
                          document.removeEventListener("keydown", o.listener),
                          n.q());
                      }));
                  })(e),
                  (function (e) {
                    var t = e.core.lightboxCloser,
                      s = (0, e.resolve)(K);
                    t.closeLightbox = function () {
                      s.isLightboxFadingOut || s.runActions();
                    };
                  })(e),
                  (function (e) {
                    var t = e.data,
                      s = e.core.scrollbarRecompensor;
                    function i() {
                      document.body.offsetHeight > innerHeight &&
                        (document.body.style.marginRight =
                          t.scrollbarWidth + "px");
                    }
                    ((s.addRecompense = function () {
                      "complete" === document.readyState
                        ? i()
                        : addEventListener("load", function () {
                            (i(), (s.addRecompense = i));
                          });
                    }),
                      (s.removeRecompense = function () {
                        document.body.style.removeProperty("margin-right");
                      }));
                  })(e),
                  (function (e) {
                    var t = e.core,
                      s = t.slideChangeFacade,
                      i = t.slideIndexChanger,
                      n = t.stageManager;
                    e.props.sources.length > 1
                      ? ((s.changeToPrevious = function () {
                          i.jumpTo(n.getPreviousSlideIndex());
                        }),
                        (s.changeToNext = function () {
                          i.jumpTo(n.getNextSlideIndex());
                        }))
                      : ((s.changeToPrevious = function () {}),
                        (s.changeToNext = function () {}));
                  })(e),
                  (function (e) {
                    var t = e.componentsServices,
                      s = e.core,
                      i = s.slideIndexChanger,
                      n = s.sourceDisplayFacade,
                      r = s.stageManager,
                      o = e.elements,
                      a = o.smw,
                      l = o.sourceAnimationWrappers,
                      d = e.isl,
                      c = e.stageIndexes,
                      u = e.sws;
                    ((i.changeTo = function (e) {
                      ((c.current = e),
                        r.updateStageIndexes(),
                        t.setSlideNumber(e + 1),
                        n.displaySourcesWhichShouldBeDisplayed());
                    }),
                      (i.jumpTo = function (e) {
                        var t = c.previous,
                          s = c.current,
                          n = c.next,
                          o = d[s],
                          p = d[e];
                        i.changeTo(e);
                        for (var f = 0; f < a.length; f++) a[f].d();
                        (u.d(s),
                          u.c(),
                          requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                              var e = c.previous,
                                i = c.next;
                              function f() {
                                r.i(s)
                                  ? s === c.previous
                                    ? a[s].ne()
                                    : s === c.next && a[s].p()
                                  : (a[s].h(), a[s].n());
                              }
                              (o && l[s].classList.add(h),
                                p && l[c.current].classList.add(m),
                                u.a(),
                                void 0 !== e && e !== s && a[e].ne(),
                                a[c.current].n(),
                                void 0 !== i && i !== s && a[i].p(),
                                u.b(t),
                                u.b(n),
                                d[s] ? setTimeout(f, 260) : f());
                            });
                          }));
                      }));
                  })(e),
                  (function (e) {
                    var t = e.core.sourcesPointerDown,
                      s = e.elements,
                      i = s.smw,
                      n = s.sources,
                      r = e.sourcePointerProps,
                      o = e.stageIndexes;
                    t.listener = function (e) {
                      ("VIDEO" !== e.target.tagName && e.preventDefault(),
                        (r.isPointering = !0),
                        (r.downScreenX = e.screenX),
                        (r.swipedX = 0));
                      var t = n[o.current];
                      t && t.contains(e.target)
                        ? (r.isSourceDownEventTarget = !0)
                        : (r.isSourceDownEventTarget = !1);
                      for (var s = 0; s < i.length; s++) i[s].d();
                    };
                  })(e),
                  (function (e) {
                    var t = e.collections.sourcesRenderFunctions,
                      s = e.core.sourceDisplayFacade,
                      i = e.props,
                      n = e.stageIndexes;
                    function r(e) {
                      t[e] && (t[e](), delete t[e]);
                    }
                    s.displaySourcesWhichShouldBeDisplayed = function () {
                      if (i.loadOnlyCurrentSource) r(n.current);
                      else for (var e in n) r(n[e]);
                    };
                  })(e),
                  (function (e) {
                    var t = e.core.stageManager,
                      s = e.elements,
                      i = s.smw,
                      n = s.sourceAnimationWrappers,
                      r = e.isl,
                      o = e.stageIndexes,
                      a = e.sws;
                    ((a.a = function () {
                      for (var e in o) i[o[e]].s();
                    }),
                      (a.b = function (e) {
                        void 0 === e || t.i(e) || (i[e].h(), i[e].n());
                      }),
                      (a.c = function () {
                        for (var e in o) a.d(o[e]);
                      }),
                      (a.d = function (e) {
                        if (r[e]) {
                          var t = n[e];
                          (J(t, v), J(t, m), J(t, h));
                        }
                      }));
                  })(e),
                  (function (e) {
                    var t = e.collections.sourceSizers,
                      s = e.core.windowResizeActioner,
                      i = e.data,
                      n = e.elements.smw,
                      r = e.stageIndexes;
                    s.runActions = function () {
                      (innerWidth < 992
                        ? (i.maxSourceWidth = innerWidth)
                        : (i.maxSourceWidth = 0.9 * innerWidth),
                        (i.maxSourceHeight = 0.9 * innerHeight));
                      for (var e = 0; e < n.length; e++)
                        (n[e].d(), t[e] && t[e].adjustSize());
                      var s = r.previous,
                        o = r.next;
                      (void 0 !== s && n[s].ne(), void 0 !== o && n[o].p());
                    };
                  })(e));
              }
              function Q(e) {
                var t = e.componentsServices,
                  s = e.core,
                  i = s.eventsDispatcher,
                  r = s.globalEventsController,
                  o = s.scrollbarRecompensor,
                  l = s.sourceDisplayFacade,
                  c = s.stageManager,
                  p = s.windowResizeActioner,
                  f = e.data,
                  m = e.elements,
                  h = (e.props, e.stageIndexes),
                  g = e.sws;
                function w() {
                  var t, s;
                  ((f.i = !0),
                    (f.scrollbarWidth = (function () {
                      var e = document.createElement("div"),
                        t = e.style,
                        s = document.createElement("div");
                      ((t.visibility = "hidden"),
                        (t.width = "100px"),
                        (t.msOverflowStyle = "scrollbar"),
                        (t.overflow = "scroll"),
                        (s.style.width = "100%"),
                        document.body.appendChild(e));
                      var i = e.offsetWidth;
                      e.appendChild(s);
                      var n = s.offsetWidth;
                      return (document.body.removeChild(e), i - n);
                    })()),
                    Z(e),
                    (m.container = document.createElement("div")),
                    (m.container.className = ""
                      .concat(n, "container ")
                      .concat(a, " ")
                      .concat(v)),
                    (function (e) {
                      var t = e.elements;
                      ((t.slideSwipingHoverer = document.createElement("div")),
                        (t.slideSwipingHoverer.className = ""
                          .concat(n, "slide-swiping-hoverer ")
                          .concat(a, " ")
                          .concat(u)));
                    })(e),
                    q(e),
                    (function (e) {
                      var t = e.core.sourcesPointerDown,
                        s = e.elements,
                        i = e.props.sources,
                        n = document.createElement("div");
                      ((n.className = "".concat(u, " ").concat(a)),
                        s.container.appendChild(n),
                        n.addEventListener("pointerdown", t.listener),
                        (s.sourceWrappersContainer = n));
                      for (var r = 0; r < i.length; r++) N(e, r);
                    })(e),
                    e.props.sources.length > 1 &&
                      ((s = (t = e).core.slideChangeFacade),
                      R(
                        t,
                        s.changeToPrevious,
                        "previous",
                        "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z",
                      ),
                      R(
                        t,
                        s.changeToNext,
                        "next",
                        "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z",
                      )),
                    (function (e) {
                      for (
                        var t = e.props.sources,
                          s = e.resolve,
                          i = s(T),
                          n = s(F),
                          r = s(D, [i, n]),
                          o = 0;
                        o < t.length;
                        o++
                      )
                        if ("string" == typeof t[o]) {
                          var a = r.getTypeSetByClientForIndex(o);
                          if (a) n.runActionsForSourceTypeAndIndex(a, o);
                          else {
                            var l = i.getSourceTypeFromLocalStorageByUrl(t[o]);
                            l
                              ? n.runActionsForSourceTypeAndIndex(l, o)
                              : r.retrieveTypeWithXhrForIndex(o);
                          }
                        } else n.runActionsForSourceTypeAndIndex("custom", o);
                    })(e),
                    i.dispatch("onInit"));
                }
                e.open = function () {
                  var s =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    n = h.previous,
                    a = h.current,
                    u = h.next;
                  ((h.current = s),
                    f.i || S(e),
                    c.updateStageIndexes(),
                    f.i
                      ? (g.c(),
                        g.a(),
                        g.b(n),
                        g.b(a),
                        g.b(u),
                        i.dispatch("onShow"))
                      : w(),
                    l.displaySourcesWhichShouldBeDisplayed(),
                    t.setSlideNumber(s + 1),
                    document.body.appendChild(m.container),
                    document.documentElement.classList.add(d),
                    o.addRecompense(),
                    r.attachListeners(),
                    p.runActions(),
                    m.smw[h.current].n(),
                    i.dispatch("onOpen"));
                };
              }
              function ee(e, t, s) {
                return (ee = te()
                  ? Reflect.construct.bind()
                  : function (e, t, s) {
                      var i = [null];
                      i.push.apply(i, t);
                      var n = new (Function.bind.apply(e, i))();
                      return (s && se(n, s.prototype), n);
                    }).apply(null, arguments);
              }
              function te() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }
              function se(e, t) {
                return (se = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (e, t) {
                      return ((e.__proto__ = t), e);
                    })(e, t);
              }
              function ie(e) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return ne(e);
                  })(e) ||
                  (function (e) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e["@@iterator"]
                    )
                      return Array.from(e);
                  })(e) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return ne(e, t);
                      var s = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === s &&
                          e.constructor &&
                          (s = e.constructor.name),
                        "Map" === s || "Set" === s
                          ? Array.from(e)
                          : "Arguments" === s ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                            ? ne(e, t)
                            : void 0
                      );
                    }
                  })(e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })()
                );
              }
              function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, i = new Array(t); s < t; s++) i[s] = e[s];
                return i;
              }
              function re() {
                for (
                  var e = document.getElementsByTagName("a"),
                    t = function (t) {
                      if (!e[t].hasAttribute("data-fslightbox"))
                        return "continue";
                      var s = e[t].hasAttribute("data-href")
                        ? e[t].getAttribute("data-href")
                        : e[t].getAttribute("href");
                      if (!s)
                        return (
                          console.warn(
                            'The "data-fslightbox" attribute was set without the "href" attribute.',
                          ),
                          "continue"
                        );
                      var i = e[t].getAttribute("data-fslightbox");
                      fsLightboxInstances[i] ||
                        (fsLightboxInstances[i] = new FsLightbox());
                      var n = null;
                      ("#" === s.charAt(0)
                        ? (n = document
                            .getElementById(s.substring(1))
                            .cloneNode(!0)).removeAttribute("id")
                        : (n = s),
                        fsLightboxInstances[i].props.sources.push(n),
                        fsLightboxInstances[i].elements.a.push(e[t]));
                      var r = fsLightboxInstances[i].props.sources.length - 1;
                      ((e[t].onclick = function (e) {
                        (e.preventDefault(), fsLightboxInstances[i].open(r));
                      }),
                        u("types", "data-type"),
                        u("videosPosters", "data-video-poster"),
                        u("customClasses", "data-class"),
                        u("customClasses", "data-custom-class"));
                      for (
                        var o = [
                            "href",
                            "data-fslightbox",
                            "data-href",
                            "data-type",
                            "data-video-poster",
                            "data-class",
                            "data-custom-class",
                          ],
                          a = e[t].attributes,
                          l = fsLightboxInstances[i].props.customAttributes,
                          d = 0;
                        d < a.length;
                        d++
                      )
                        if (
                          -1 === o.indexOf(a[d].name) &&
                          "data-" === a[d].name.substr(0, 5)
                        ) {
                          l[r] || (l[r] = {});
                          var c = a[d].name.substr(5);
                          l[r][c] = a[d].value;
                        }
                      function u(s, n) {
                        e[t].hasAttribute(n) &&
                          (fsLightboxInstances[i].props[s][r] =
                            e[t].getAttribute(n));
                      }
                    },
                    s = 0;
                  s < e.length;
                  s++
                )
                  t(s);
                var i = Object.keys(fsLightboxInstances);
                window.fsLightbox = fsLightboxInstances[i[i.length - 1]];
              }
              ("object" ===
                ("undefined" == typeof document ? "undefined" : x(document)) &&
                (((i = document.createElement("style")).className = r),
                i.appendChild(
                  document.createTextNode(
                    ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}",
                  ),
                ),
                document.head.appendChild(i)),
                (window.FsLightbox = function () {
                  var e = this;
                  ((this.props = {
                    sources: [],
                    customAttributes: [],
                    customClasses: [],
                    types: [],
                    videosPosters: [],
                    slideDistance: 0.3,
                  }),
                    (this.data = {
                      isFullscreenOpen: !1,
                      maxSourceWidth: 0,
                      maxSourceHeight: 0,
                      scrollbarWidth: 0,
                    }),
                    (this.isl = []),
                    (this.sourcePointerProps = {
                      downScreenX: null,
                      isPointering: !1,
                      isSourceDownEventTarget: !1,
                      swipedX: 0,
                    }),
                    (this.stageIndexes = {}),
                    (this.elements = {
                      a: [],
                      container: null,
                      slideSwipingHoverer: null,
                      smw: [],
                      sourceWrappersContainer: null,
                      sources: [],
                      sourceAnimationWrappers: [],
                    }),
                    (this.componentsServices = {
                      setSlideNumber: function () {},
                    }),
                    (this.resolve = function (t) {
                      var s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [];
                      return (s.unshift(e), ee(t, ie(s)));
                    }),
                    (this.collections = {
                      sourceLoadHandlers: [],
                      sourcesRenderFunctions: [],
                      sourceSizers: [],
                    }),
                    (this.core = {
                      eventsDispatcher: {},
                      globalEventsController: {},
                      lightboxCloser: {},
                      lightboxUpdater: {},
                      scrollbarRecompensor: {},
                      slideChangeFacade: {},
                      slideIndexChanger: {},
                      sourcesPointerDown: {},
                      sourceDisplayFacade: {},
                      stageManager: {},
                      windowResizeActioner: {},
                    }),
                    (this.fs = {}),
                    (this.sws = {}),
                    Q(this),
                    (this.close = function () {
                      return e.core.lightboxCloser.closeLightbox();
                    }));
                }),
                (window.fsLightboxInstances = {}),
                re(),
                (window.refreshFsLightbox = function () {
                  for (var e in fsLightboxInstances) {
                    var t = fsLightboxInstances[e].props;
                    ((fsLightboxInstances[e] = new FsLightbox()),
                      (fsLightboxInstances[e].props = t),
                      (fsLightboxInstances[e].props.sources = []),
                      (fsLightboxInstances[e].elements.a = []));
                  }
                  re();
                }));
            },
          ])));
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return (e[i](r, r.exports, s), r.exports);
  }
  (() => {
    "use strict";
    function e(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function t(s, i) {
      (void 0 === s && (s = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach((n) => {
          void 0 === s[n]
            ? (s[n] = i[n])
            : e(i[n]) &&
              e(s[n]) &&
              Object.keys(i[n]).length > 0 &&
              t(s[n], i[n]);
        }));
    }
    const i = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function n() {
      const e = "undefined" != typeof document ? document : {};
      return (t(e, i), e);
    }
    const r = {
      document: i,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function o() {
      const e = "undefined" != typeof window ? window : {};
      return (t(e, r), e);
    }
    function a(e, t) {
      return (void 0 === t && (t = 0), setTimeout(e, t));
    }
    function l() {
      return Date.now();
    }
    function d(e, t) {
      void 0 === t && (t = "x");
      const s = o();
      let i, n, r;
      const a = (function (e) {
        const t = o();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = a.transform || a.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
        n || 0
      );
    }
    function c(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function u(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function p() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != i && !u(i)) {
          const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, n = s.length; t < n; t += 1) {
            const n = s[t],
              r = Object.getOwnPropertyDescriptor(i, n);
            void 0 !== r &&
              r.enumerable &&
              (c(e[n]) && c(i[n])
                ? i[n].__swiper__
                  ? (e[n] = i[n])
                  : p(e[n], i[n])
                : !c(e[n]) && c(i[n])
                  ? ((e[n] = {}),
                    i[n].__swiper__ ? (e[n] = i[n]) : p(e[n], i[n]))
                  : (e[n] = i[n]));
          }
        }
      }
      return e;
    }
    function f(e, t, s) {
      e.style.setProperty(t, s);
    }
    function m(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const n = o(),
        r = -t.translate;
      let a,
        l = null;
      const d = t.params.speed;
      ((t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID));
      const c = s > r ? "next" : "prev",
        u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          ((a = new Date().getTime()), null === l && (l = a));
          const e = Math.max(Math.min((a - l) / d, 1), 0),
            o = 0.5 - Math.cos(e * Math.PI) / 2;
          let c = r + o * (s - r);
          if ((u(c, s) && (c = s), t.wrapperEl.scrollTo({ [i]: c }), u(c, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                ((t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: c }));
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(p);
        };
      p();
    }
    function h(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowRoot &&
          e.shadowRoot.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function v(e, t) {
      return (
        void 0 === t && (t = ""),
        [...e.children].filter((e) => e.matches(t))
      );
    }
    function g(e) {
      try {
        return void console.warn(e);
      } catch (e) {}
    }
    function w(e, t) {
      void 0 === t && (t = []);
      const s = document.createElement(e);
      return (
        s.classList.add(
          ...(Array.isArray(t)
            ? t
            : (function (e) {
                return (
                  void 0 === e && (e = ""),
                  e
                    .trim()
                    .split(" ")
                    .filter((e) => !!e.trim())
                );
              })(t)),
        ),
        s
      );
    }
    function b(e, t) {
      return o().getComputedStyle(e, null).getPropertyValue(t);
    }
    function y(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function x(e, t, s) {
      const i = o();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    let S, T, E;
    function C() {
      return (
        S ||
          (S = (function () {
            const e = o(),
              t = n();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        S
      );
    }
    function M(e) {
      return (
        void 0 === e && (e = {}),
        T ||
          (T = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = C(),
              i = o(),
              n = i.navigator.platform,
              r = t || i.navigator.userAgent,
              a = { ios: !1, android: !1 },
              l = i.screen.width,
              d = i.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = r.match(/(iPad).*OS\s([\d_]+)/);
            const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              f = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              m = "Win32" === n;
            let h = "MacIntel" === n;
            return (
              !u &&
                h &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${d}`) >= 0 &&
                ((u = r.match(/(Version)\/([\d.]+)/)),
                u || (u = [0, 1, "13_0_0"]),
                (h = !1)),
              c && !m && ((a.os = "android"), (a.android = !0)),
              (u || f || p) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        T
      );
    }
    function P() {
      return (
        E ||
          (E = (function () {
            const e = o(),
              t = M();
            let s = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, i] = t
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                s = e < 16 || (16 === e && i < 2);
              }
            }
            const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
              r = i();
            return {
              isSafari: s || r,
              needPerspectiveFix: s,
              need3dFix: r || (n && t.ios),
              isWebView: n,
            };
          })()),
        E
      );
    }
    var A = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            (i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t));
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n() {
          (i.off(e, n), n.__emitterProxy && delete n.__emitterProxy);
          for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
            r[o] = arguments[o];
          t.apply(i, r);
        }
        return ((n.__emitterProxy = t), i.on(e, n, s));
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e),
          s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return (s >= 0 && t.eventsAnyListeners.splice(s, 1), t);
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, n) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(n, 1);
                    });
              }),
              s)
            : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        ("string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
          s.unshift(i));
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            (e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                }));
          }),
          e
        );
      },
    };
    const I = (e, t, s) => {
      t && !e.classList.contains(s)
        ? e.classList.add(s)
        : !t && e.classList.contains(s) && e.classList.remove(s);
    };
    const k = (e, t, s) => {
      t && !e.classList.contains(s)
        ? e.classList.add(s)
        : !t && e.classList.contains(s) && e.classList.remove(s);
    };
    const O = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (s) {
          let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          (!t &&
            e.isElement &&
            (s.shadowRoot
              ? (t = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                ))
              : requestAnimationFrame(() => {
                  s.shadowRoot &&
                    ((t = s.shadowRoot.querySelector(
                      `.${e.params.lazyPreloaderClass}`,
                    )),
                    t && t.remove());
                })),
            t && t.remove());
        }
      },
      z = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      F = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          n = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const s = n,
            r = [s - t];
          return (
            r.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
            void e.slides.forEach((t, s) => {
              r.includes(t.column) && z(e, s);
            })
          );
        }
        const r = n + i - 1;
        if (e.params.rewind || e.params.loop)
          for (let i = n - t; i <= r + t; i += 1) {
            const t = ((i % s) + s) % s;
            (t < n || t > r) && z(e, t);
          }
        else
          for (let i = Math.max(n - t, 0); i <= Math.min(r + t, s - 1); i += 1)
            i !== n && (i > r || i < n) && z(e, i);
      };
    var _ = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        ((t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(b(i, "padding-left") || 0, 10) -
              parseInt(b(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(b(i, "padding-top") || 0, 10) -
              parseInt(b(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            })));
      },
      updateSlides: function () {
        const e = this;
        function t(t, s) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: i,
            slidesEl: n,
            size: r,
            rtlTranslate: o,
            wrongRTL: a,
          } = e,
          l = e.virtual && s.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = v(n, `.${e.params.slideClass}, swiper-slide`),
          u = l ? e.virtual.slides.length : c.length;
        let p = [];
        const m = [],
          h = [];
        let g = s.slidesOffsetBefore;
        "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
        let w = s.slidesOffsetAfter;
        "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
        const y = e.snapGrid.length,
          S = e.slidesGrid.length;
        let T = s.spaceBetween,
          E = -g,
          L = 0,
          C = 0;
        if (void 0 === r) return;
        ("string" == typeof T && T.indexOf("%") >= 0
          ? (T = (parseFloat(T.replace("%", "")) / 100) * r)
          : "string" == typeof T && (T = parseFloat(T)),
          (e.virtualSize = -T),
          c.forEach((e) => {
            (o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = ""));
          }),
          s.centeredSlides &&
            s.cssMode &&
            (f(i, "--swiper-centered-offset-before", ""),
            f(i, "--swiper-centered-offset-after", "")));
        const M = s.grid && s.grid.rows > 1 && e.grid;
        let P;
        M ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
        const A =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          let n;
          if (
            ((P = 0),
            c[i] && (n = c[i]),
            M && e.grid.updateSlide(i, n, c),
            !c[i] || "none" !== b(n, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              A && (c[i].style[e.getDirectionLabel("width")] = "");
              const r = getComputedStyle(n),
                o = n.style.transform,
                a = n.style.webkitTransform;
              if (
                (o && (n.style.transform = "none"),
                a && (n.style.webkitTransform = "none"),
                s.roundLengths)
              )
                P = e.isHorizontal() ? x(n, "width", !0) : x(n, "height", !0);
              else {
                const e = t(r, "width"),
                  s = t(r, "padding-left"),
                  i = t(r, "padding-right"),
                  o = t(r, "margin-left"),
                  a = t(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) P = e + o + a;
                else {
                  const { clientWidth: t, offsetWidth: r } = n;
                  P = e + s + i + o + a + (r - t);
                }
              }
              (o && (n.style.transform = o),
                a && (n.style.webkitTransform = a),
                s.roundLengths && (P = Math.floor(P)));
            } else
              ((P = (r - (s.slidesPerView - 1) * T) / s.slidesPerView),
                s.roundLengths && (P = Math.floor(P)),
                c[i] && (c[i].style[e.getDirectionLabel("width")] = `${P}px`));
            (c[i] && (c[i].swiperSlideSize = P),
              h.push(P),
              s.centeredSlides
                ? ((E = E + P / 2 + L / 2 + T),
                  0 === L && 0 !== i && (E = E - r / 2 - T),
                  0 === i && (E = E - r / 2 - T),
                  Math.abs(E) < 0.001 && (E = 0),
                  s.roundLengths && (E = Math.floor(E)),
                  C % s.slidesPerGroup == 0 && p.push(E),
                  m.push(E))
                : (s.roundLengths && (E = Math.floor(E)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(E),
                  m.push(E),
                  (E = E + P + T)),
              (e.virtualSize += P + T),
              (L = P),
              (C += 1));
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + w),
          o &&
            a &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (i.style.width = `${e.virtualSize + T}px`),
          s.setWrapperSize &&
            (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + T}px`),
          M && e.grid.updateWrapperSize(P, p),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < p.length; i += 1) {
            let n = p[i];
            (s.roundLengths && (n = Math.floor(n)),
              p[i] <= e.virtualSize - r && t.push(n));
          }
          ((p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r));
        }
        if (l && s.loop) {
          const t = h[0] + T;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup,
              ),
              n = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + n);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            (1 === s.slidesPerGroup && p.push(p[p.length - 1] + t),
              m.push(m[m.length - 1] + t),
              (e.virtualSize += t));
        }
        if ((0 === p.length && (p = [0]), 0 !== T)) {
          const t =
            e.isHorizontal() && o
              ? "marginLeft"
              : e.getDirectionLabel("marginRight");
          c.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1,
          ).forEach((e) => {
            e.style[t] = `${T}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          (h.forEach((t) => {
            e += t + (T || 0);
          }),
            (e -= T));
          const t = e - r;
          p = p.map((e) => (e <= 0 ? -g : e > t ? t + w : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          (h.forEach((t) => {
            e += t + (T || 0);
          }),
            (e -= T));
          const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
          if (e + t < r) {
            const s = (r - e - t) / 2;
            (p.forEach((e, t) => {
              p[t] = e - s;
            }),
              m.forEach((e, t) => {
                m[t] = e + s;
              }));
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: p,
            slidesGrid: m,
            slidesSizesGrid: h,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          (f(i, "--swiper-centered-offset-before", -p[0] + "px"),
            f(
              i,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px",
            ));
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          ((e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s)));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          p.length !== y &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          m.length !== S && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          e.emit("slidesUpdated"),
          !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          u <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(o(e));
            }
        else s.push(o(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        (n && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []));
        let a = s.spaceBetween;
        "string" == typeof a && a.indexOf("%") >= 0
          ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
          : "string" == typeof a && (a = parseFloat(a));
        for (let e = 0; e < i.length; e += 1) {
          const l = i[e];
          let d = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
          const c =
              (o + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + a),
            u =
              (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + a),
            p = -(o - d),
            f = p + t.slidesSizesGrid[e],
            m = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
            h =
              (p >= 0 && p < t.size - 1) ||
              (f > 1 && f <= t.size) ||
              (p <= 0 && f >= t.size);
          (h && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)),
            I(l, h, s.slideVisibleClass),
            I(l, m, s.slideFullyVisibleClass),
            (l.progress = n ? -c : c),
            (l.originalProgress = n ? -u : u));
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: o, progressLoop: a } = t;
        const l = r,
          d = o;
        if (0 === i) ((n = 0), (r = !0), (o = !0));
        else {
          n = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            a = Math.abs(e - t.maxTranslate()) < 1;
          ((r = s || n <= 0), (o = a || n >= 1), s && (n = 0), a && (n = 1));
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[s],
            r = t.slidesGrid[i],
            o = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          ((a = l >= n ? (l - n) / o : (l + o - r) / o), a > 1 && (a -= 1));
        }
        (Object.assign(t, {
          progress: n,
          progressLoop: a,
          isBeginning: r,
          isEnd: o,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          o && !d && t.emit("reachEnd toEdge"),
          ((l && !r) || (d && !o)) && t.emit("fromEdge"),
          t.emit("progress", n));
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
          r = e.virtual && s.virtual.enabled,
          o = e.grid && s.grid && s.grid.rows > 1,
          a = (e) => v(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let l, d, c;
        if (r)
          if (s.loop) {
            let t = n - e.virtual.slidesBefore;
            (t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (l = a(`[data-swiper-slide-index="${t}"]`)));
          } else l = a(`[data-swiper-slide-index="${n}"]`);
        else
          o
            ? ((l = t.filter((e) => e.column === n)[0]),
              (c = t.filter((e) => e.column === n + 1)[0]),
              (d = t.filter((e) => e.column === n - 1)[0]))
            : (l = t[n]);
        (l &&
          (o ||
            ((c = (function (e, t) {
              const s = [];
              for (; e.nextElementSibling; ) {
                const i = e.nextElementSibling;
                (t ? i.matches(t) && s.push(i) : s.push(i), (e = i));
              }
              return s;
            })(l, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && !c && (c = t[0]),
            (d = (function (e, t) {
              const s = [];
              for (; e.previousElementSibling; ) {
                const i = e.previousElementSibling;
                (t ? i.matches(t) && s.push(i) : s.push(i), (e = i));
              }
              return s;
            })(l, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && 0 === !d && (d = t[t.length - 1]))),
          t.forEach((e) => {
            (k(e, e === l, s.slideActiveClass),
              k(e, e === c, s.slideNextClass),
              k(e, e === d, s.slidePrevClass));
          }),
          e.emitSlidesClasses());
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: n,
            activeIndex: r,
            realIndex: o,
            snapIndex: a,
          } = t;
        let l,
          d = e;
        const c = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : i >= t[e] && i < t[e + 1] && (n = e + 1)
                  : i >= t[e] && (n = e);
              return (
                s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0),
                n
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          l = i.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / n.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), d === r && !t.params.loop))
          return void (
            l !== a && ((t.snapIndex = l), t.emit("snapIndexChange"))
          );
        if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled)
          return void (t.realIndex = c(d));
        const u = t.grid && n.grid && n.grid.rows > 1;
        let p;
        if (t.virtual && n.virtual.enabled && n.loop) p = c(d);
        else if (u) {
          const e = t.slides.filter((e) => e.column === d)[0];
          let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          (Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
            (p = Math.floor(s / n.grid.rows)));
        } else if (t.slides[d]) {
          const e = t.slides[d].getAttribute("data-swiper-slide-index");
          p = e ? parseInt(e, 10) : d;
        } else p = d;
        (Object.assign(t, {
          previousSnapIndex: a,
          snapIndex: l,
          previousRealIndex: o,
          realIndex: p,
          previousIndex: r,
          activeIndex: d,
        }),
          t.initialized && F(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (o !== p && t.emit("realIndexChange"), t.emit("slideChange")));
      },
      updateClickedSlide: function (e, t) {
        const s = this,
          i = s.params;
        let n = e.closest(`.${i.slideClass}, swiper-slide`);
        !n &&
          s.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !n &&
              e.matches &&
              e.matches(`.${i.slideClass}, swiper-slide`) &&
              (n = e);
          });
        let r,
          o = !1;
        if (n)
          for (let e = 0; e < s.slides.length; e += 1)
            if (s.slides[e] === n) {
              ((o = !0), (r = e));
              break;
            }
        if (!n || !o)
          return ((s.clickedSlide = void 0), void (s.clickedIndex = void 0));
        ((s.clickedSlide = n),
          s.virtual && s.params.virtual.enabled
            ? (s.clickedIndex = parseInt(
                n.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (s.clickedIndex = r),
          i.slideToClickedSlide &&
            void 0 !== s.clickedIndex &&
            s.clickedIndex !== s.activeIndex &&
            s.slideToClickedSlide());
      },
    };
    var D = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = d(n, e);
        return ((r += this.cssOverflowAdjustment()), s && (r = -r), r || 0);
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: n, wrapperEl: r, progress: o } = s;
        let a,
          l = 0,
          d = 0;
        (s.isHorizontal() ? (l = i ? -e : e) : (d = e),
          n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? l : d),
          n.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -l : -d)
            : n.virtualTranslate ||
              (s.isHorizontal()
                ? (l -= s.cssOverflowAdjustment())
                : (d -= s.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`)));
        const c = s.maxTranslate() - s.minTranslate();
        ((a = 0 === c ? 0 : (e - s.minTranslate()) / c),
          a !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t));
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, n) {
        (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0));
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = i && e > l ? l : i && e < d ? d : e),
          r.updateProgress(c),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                m({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd,
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      (r.animating = !1),
                      s && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function N(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = i;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit(`transition${n}`),
        s && r !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
        (t.emit(`slideChangeTransition${n}`),
          "next" === a
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`));
      }
    }
    var G = {
      slideTo: function (e, t, s, i, n) {
        (void 0 === e && (e = 0),
          void 0 === s && (s = !0),
          "string" == typeof e && (e = parseInt(e, 10)));
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (!h && !i && !n) ||
          r.destroyed ||
          (r.animating && a.preventInteractionOnTransition)
        )
          return !1;
        void 0 === t && (t = r.params.speed);
        const v = Math.min(r.params.slidesPerGroupSkip, o);
        let g = v + Math.floor((o - v) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const w = -l[g];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * w),
              s = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (o = e)
                : t >= s && t < i && (o = e + 1)
              : t >= s && (o = e);
          }
        if (r.initialized && o !== u) {
          if (
            !r.allowSlideNext &&
            (p
              ? w > r.translate && w > r.minTranslate()
              : w < r.translate && w < r.minTranslate())
          )
            return !1;
          if (
            !r.allowSlidePrev &&
            w > r.translate &&
            w > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let b;
        if (
          (o !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(w),
          (b = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -w === r.translate) || (!p && w === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(w),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            s = p ? w : -w;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            (t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    f[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  ((r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1));
                }));
          } else {
            if (!r.support.smoothScroll)
              return (
                m({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(w),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd,
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === s && (s = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const n = this;
        if (n.destroyed) return;
        void 0 === t && (t = n.params.speed);
        const r = n.grid && n.params.grid && n.params.grid.rows > 1;
        let o = e;
        if (n.params.loop)
          if (n.virtual && n.params.virtual.enabled)
            o += n.virtual.slidesBefore;
          else {
            let e;
            if (r) {
              const t = o * n.params.grid.rows;
              e = n.slides.filter(
                (e) => 1 * e.getAttribute("data-swiper-slide-index") === t,
              )[0].column;
            } else e = n.getSlideIndexByData(o);
            const t = r
                ? Math.ceil(n.slides.length / n.params.grid.rows)
                : n.slides.length,
              { centeredSlides: s } = n.params;
            let a = n.params.slidesPerView;
            "auto" === a
              ? (a = n.slidesPerViewDynamic())
              : ((a = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
                s && a % 2 == 0 && (a += 1));
            let l = t - e < a;
            if (
              (s && (l = l || e < Math.ceil(a / 2)),
              i && s && "auto" !== n.params.slidesPerView && !r && (l = !1),
              l)
            ) {
              const i = s
                ? e < n.activeIndex
                  ? "prev"
                  : "next"
                : e - n.activeIndex - 1 < n.params.slidesPerView
                  ? "next"
                  : "prev";
              n.loopFix({
                direction: i,
                slideTo: !0,
                activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                slideRealIndex: "next" === i ? n.realIndex : void 0,
              });
            }
            if (r) {
              const e = o * n.params.grid.rows;
              o = n.slides.filter(
                (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
              )[0].column;
            } else o = n.getSlideIndexByData(o);
          }
        return (
          requestAnimationFrame(() => {
            n.slideTo(o, t, s, i);
          }),
          n
        );
      },
      slideNext: function (e, t, s) {
        void 0 === t && (t = !0);
        const i = this,
          { enabled: n, params: r, animating: o } = i;
        if (!n || i.destroyed) return i;
        void 0 === e && (e = i.params.speed);
        let a = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
          d = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (o && !d && r.loopPreventsSliding) return !1;
          if (
            (i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft),
            i.activeIndex === i.slides.length - 1 && r.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                i.slideTo(i.activeIndex + l, e, t, s);
              }),
              !0
            );
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === t && (t = !0);
        const i = this,
          {
            params: n,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: a,
            enabled: l,
            animating: d,
          } = i;
        if (!l || i.destroyed) return i;
        void 0 === e && (e = i.params.speed);
        const c = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (d && !c && n.loopPreventsSliding) return !1;
          (i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft));
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(a ? i.translate : -i.translate),
          f = r.map((e) => u(e));
        let m = r[f.indexOf(p) - 1];
        if (void 0 === m && n.cssMode) {
          let e;
          (r.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (m = r[e > 0 ? e - 1 : e]));
        }
        let h = 0;
        if (
          (void 0 !== m &&
            ((h = o.indexOf(m)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return n.loop && 0 === i.activeIndex && n.cssMode
          ? (requestAnimationFrame(() => {
              i.slideTo(h, e, t, s);
            }),
            !0)
          : i.slideTo(h, e, t, s);
      },
      slideReset: function (e, t, s) {
        void 0 === t && (t = !0);
        const i = this;
        if (!i.destroyed)
          return (
            void 0 === e && (e = i.params.speed),
            i.slideTo(i.activeIndex, e, t, s)
          );
      },
      slideToClosest: function (e, t, s, i) {
        (void 0 === t && (t = !0), void 0 === i && (i = 0.5));
        const n = this;
        if (n.destroyed) return;
        void 0 === e && (e = n.params.speed);
        let r = n.activeIndex;
        const o = Math.min(n.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[a]) {
          const e = n.snapGrid[a];
          l - e > (n.snapGrid[a + 1] - e) * i && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[a - 1];
          l - e <= (n.snapGrid[a] - e) * i && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this;
        if (e.destroyed) return;
        const { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          ((n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    v(s, `${o}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  a(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    v(s, `${o}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  a(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r));
        } else e.slideTo(r);
      },
    };
    var V = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        const n = () => {
            v(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            });
          },
          r = t.grid && s.grid && s.grid.rows > 1,
          o = s.slidesPerGroup * (r ? s.grid.rows : 1),
          a = t.slides.length % o != 0,
          l = r && t.slides.length % s.grid.rows != 0,
          d = (e) => {
            for (let i = 0; i < e; i += 1) {
              const e = t.isElement
                ? w("swiper-slide", [s.slideBlankClass])
                : w("div", [s.slideClass, s.slideBlankClass]);
              t.slidesEl.append(e);
            }
          };
        if (a) {
          if (s.loopAddBlankSlides) {
            (d(o - (t.slides.length % o)), t.recalcSlides(), t.updateSlides());
          } else
            g(
              "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          n();
        } else if (l) {
          if (s.loopAddBlankSlides) {
            (d(s.grid.rows - (t.slides.length % s.grid.rows)),
              t.recalcSlides(),
              t.updateSlides());
          } else
            g(
              "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          n();
        } else n();
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: s = !0,
          direction: i,
          setTranslate: n,
          activeSlideIndex: r,
          byController: o,
          byMousewheel: a,
        } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
            slides: d,
            allowSlidePrev: c,
            allowSlideNext: u,
            slidesEl: p,
            params: f,
          } = l,
          { centeredSlides: m } = f;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && f.virtual.enabled)
        )
          return (
            s &&
              (f.centeredSlides || 0 !== l.snapIndex
                ? f.centeredSlides && l.snapIndex < f.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = c),
            (l.allowSlideNext = u),
            void l.emit("loopFix")
          );
        let h = f.slidesPerView;
        "auto" === h
          ? (h = l.slidesPerViewDynamic())
          : ((h = Math.ceil(parseFloat(f.slidesPerView, 10))),
            m && h % 2 == 0 && (h += 1));
        const v = f.slidesPerGroupAuto ? h : f.slidesPerGroup;
        let w = v;
        (w % v != 0 && (w += v - (w % v)),
          (w += f.loopAdditionalSlides),
          (l.loopedSlides = w));
        const b = l.grid && f.grid && f.grid.rows > 1;
        d.length < h + w
          ? g(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
            )
          : b &&
            "row" === f.grid.fill &&
            g(
              "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
            );
        const y = [],
          x = [];
        let S = l.activeIndex;
        void 0 === r
          ? (r = l.getSlideIndex(
              d.filter((e) => e.classList.contains(f.slideActiveClass))[0],
            ))
          : (S = r);
        const T = "next" === i || !i,
          E = "prev" === i || !i;
        let L = 0,
          C = 0;
        const M = b ? Math.ceil(d.length / f.grid.rows) : d.length,
          P = (b ? d[r].column : r) + (m && void 0 === n ? -h / 2 + 0.5 : 0);
        if (P < w) {
          L = Math.max(w - P, v);
          for (let e = 0; e < w - P; e += 1) {
            const t = e - Math.floor(e / M) * M;
            if (b) {
              const e = M - t - 1;
              for (let t = d.length - 1; t >= 0; t -= 1)
                d[t].column === e && y.push(t);
            } else y.push(M - t - 1);
          }
        } else if (P + h > M - w) {
          C = Math.max(P - (M - 2 * w), v);
          for (let e = 0; e < C; e += 1) {
            const t = e - Math.floor(e / M) * M;
            b
              ? d.forEach((e, s) => {
                  e.column === t && x.push(s);
                })
              : x.push(t);
          }
        }
        if (
          ((l.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            l.__preventObserver__ = !1;
          }),
          E &&
            y.forEach((e) => {
              ((d[e].swiperLoopMoveDOM = !0),
                p.prepend(d[e]),
                (d[e].swiperLoopMoveDOM = !1));
            }),
          T &&
            x.forEach((e) => {
              ((d[e].swiperLoopMoveDOM = !0),
                p.append(d[e]),
                (d[e].swiperLoopMoveDOM = !1));
            }),
          l.recalcSlides(),
          "auto" === f.slidesPerView
            ? l.updateSlides()
            : b &&
              ((y.length > 0 && E) || (x.length > 0 && T)) &&
              l.slides.forEach((e, t) => {
                l.grid.updateSlide(t, e, l.slides);
              }),
          f.watchSlidesProgress && l.updateSlidesOffset(),
          s)
        )
          if (y.length > 0 && E) {
            if (void 0 === t) {
              const e = l.slidesGrid[S],
                t = l.slidesGrid[S + L] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(S + Math.ceil(L), 0, !1, !0),
                  n &&
                    ((l.touchEventsData.startTranslate =
                      l.touchEventsData.startTranslate - t),
                    (l.touchEventsData.currentTranslate =
                      l.touchEventsData.currentTranslate - t)));
            } else if (n) {
              const e = b ? y.length / f.grid.rows : y.length;
              (l.slideTo(l.activeIndex + e, 0, !1, !0),
                (l.touchEventsData.currentTranslate = l.translate));
            }
          } else if (x.length > 0 && T)
            if (void 0 === t) {
              const e = l.slidesGrid[S],
                t = l.slidesGrid[S - C] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(S - C, 0, !1, !0),
                  n &&
                    ((l.touchEventsData.startTranslate =
                      l.touchEventsData.startTranslate - t),
                    (l.touchEventsData.currentTranslate =
                      l.touchEventsData.currentTranslate - t)));
            } else {
              const e = b ? x.length / f.grid.rows : x.length;
              l.slideTo(l.activeIndex - e, 0, !1, !0);
            }
        if (
          ((l.allowSlidePrev = c),
          (l.allowSlideNext = u),
          l.controller && l.controller.control && !o)
        ) {
          const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === f.slidesPerView && s,
                  });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({
                ...e,
                slideTo:
                  l.controller.control.params.slidesPerView ===
                    f.slidesPerView && s,
              });
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        (e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0));
      },
    };
    function H(e, t, s) {
      const i = o(),
        { params: n } = e,
        r = n.edgeSwipeDetection,
        a = n.edgeSwipeThreshold;
      return (
        !r ||
        !(s <= a || s >= i.innerWidth - a) ||
        ("prevent" === r && (t.preventDefault(), !0))
      );
    }
    function q(e) {
      const t = this,
        s = n();
      let i = e;
      i.originalEvent && (i = i.originalEvent);
      const r = t.touchEventsData;
      if ("pointerdown" === i.type) {
        if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId;
      } else
        "touchstart" === i.type &&
          1 === i.targetTouches.length &&
          (r.touchId = i.targetTouches[0].identifier);
      if ("touchstart" === i.type)
        return void H(t, i, i.targetTouches[0].pageX);
      const { params: a, touches: d, enabled: c } = t;
      if (!c) return;
      if (!a.simulateTouch && "mouse" === i.pointerType) return;
      if (t.animating && a.preventInteractionOnTransition) return;
      !t.animating && a.cssMode && a.loop && t.loopFix();
      let u = i.target;
      if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(u)) return;
      if ("which" in i && 3 === i.which) return;
      if ("button" in i && i.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      const p = !!a.noSwipingClass && "" !== a.noSwipingClass,
        f = i.composedPath ? i.composedPath() : i.path;
      p && i.target && i.target.shadowRoot && f && (u = f[0]);
      const m = a.noSwipingSelector
          ? a.noSwipingSelector
          : `.${a.noSwipingClass}`,
        h = !(!i.target || !i.target.shadowRoot);
      if (
        a.noSwiping &&
        (h
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === n() || s === o()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode
                    ? i || t(s.getRootNode().host)
                    : null;
                })(t)
              );
            })(m, u)
          : u.closest(m))
      )
        return void (t.allowClick = !0);
      if (a.swipeHandler && !u.closest(a.swipeHandler)) return;
      ((d.currentX = i.pageX), (d.currentY = i.pageY));
      const v = d.currentX,
        g = d.currentY;
      if (!H(t, i, v)) return;
      (Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (d.startX = v),
        (d.startY = g),
        (r.touchStartTime = l()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        a.threshold > 0 && (r.allowThresholdMove = !1));
      let w = !0;
      (u.matches(r.focusableElements) &&
        ((w = !1), "SELECT" === u.nodeName && (r.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(r.focusableElements) &&
          s.activeElement !== u &&
          s.activeElement.blur());
      const b = w && t.allowTouchMove && a.touchStartPreventDefault;
      ((!a.touchStartForcePreventDefault && !b) ||
        u.isContentEditable ||
        i.preventDefault(),
        a.freeMode &&
          a.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !a.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", i));
    }
    function R(e) {
      const t = n(),
        s = this,
        i = s.touchEventsData,
        { params: r, touches: o, rtlTranslate: a, enabled: d } = s;
      if (!d) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let c,
        u = e;
      if (
        (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type)
      ) {
        if (null !== i.touchId) return;
        if (u.pointerId !== i.pointerId) return;
      }
      if ("touchmove" === u.type) {
        if (
          ((c = [...u.changedTouches].filter(
            (e) => e.identifier === i.touchId,
          )[0]),
          !c || c.identifier !== i.touchId)
        )
          return;
      } else c = u;
      if (!i.isTouched)
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", u)
        );
      const p = c.pageX,
        f = c.pageY;
      if (u.preventedByNestedSwiper)
        return ((o.startX = p), void (o.startY = f));
      if (!s.allowTouchMove)
        return (
          u.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(o, {
              startX: p,
              startY: f,
              currentX: p,
              currentY: f,
            }),
            (i.touchStartTime = l()))
          )
        );
      if (r.touchReleaseOnEdges && !r.loop)
        if (s.isVertical()) {
          if (
            (f < o.startY && s.translate <= s.maxTranslate()) ||
            (f > o.startY && s.translate >= s.minTranslate())
          )
            return ((i.isTouched = !1), void (i.isMoved = !1));
        } else if (
          (p < o.startX && s.translate <= s.maxTranslate()) ||
          (p > o.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        u.target === t.activeElement &&
        u.target.matches(i.focusableElements)
      )
        return ((i.isMoved = !0), void (s.allowClick = !1));
      (i.allowTouchCallbacks && s.emit("touchMove", u),
        (o.previousX = o.currentX),
        (o.previousY = o.currentY),
        (o.currentX = p),
        (o.currentY = f));
      const m = o.currentX - o.startX,
        h = o.currentY - o.startY;
      if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && o.currentY === o.startY) ||
        (s.isVertical() && o.currentX === o.startX)
          ? (i.isScrolling = !1)
          : m * m + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(m))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", u),
        void 0 === i.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          ("touchmove" === u.type && i.preventTouchMoveFromPointerMove))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      ((s.allowClick = !1),
        !r.cssMode && u.cancelable && u.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && u.stopPropagation());
      let v = s.isHorizontal() ? m : h,
        g = s.isHorizontal()
          ? o.currentX - o.previousX
          : o.currentY - o.previousY;
      (r.oneWayMovement &&
        ((v = Math.abs(v) * (a ? 1 : -1)), (g = Math.abs(g) * (a ? 1 : -1))),
        (o.diff = v),
        (v *= r.touchRatio),
        a && ((v = -v), (g = -g)));
      const w = s.touchesDirection;
      ((s.swipeDirection = v > 0 ? "prev" : "next"),
        (s.touchesDirection = g > 0 ? "prev" : "next"));
      const b = s.params.loop && !r.cssMode,
        y =
          ("next" === s.touchesDirection && s.allowSlideNext) ||
          ("prev" === s.touchesDirection && s.allowSlidePrev);
      if (!i.isMoved) {
        if (
          (b && y && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
            detail: { bySwiperTouchMove: !0 },
          });
          s.wrapperEl.dispatchEvent(e);
        }
        ((i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", u));
      }
      if (
        (new Date().getTime(),
        i.isMoved &&
          i.allowThresholdMove &&
          w !== s.touchesDirection &&
          b &&
          y &&
          Math.abs(v) >= 1)
      )
        return (
          Object.assign(o, {
            startX: p,
            startY: f,
            currentX: p,
            currentY: f,
            startTranslate: i.currentTranslate,
          }),
          (i.loopSwapReset = !0),
          void (i.startTranslate = i.currentTranslate)
        );
      (s.emit("sliderMove", u),
        (i.isMoved = !0),
        (i.currentTranslate = v + i.startTranslate));
      let x = !0,
        S = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (S = 0),
        v > 0
          ? (b &&
              y &&
              i.allowThresholdMove &&
              i.currentTranslate >
                (r.centeredSlides
                  ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((x = !1),
              r.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + v) ** S)))
          : v < 0 &&
            (b &&
              y &&
              i.allowThresholdMove &&
              i.currentTranslate <
                (r.centeredSlides
                  ? s.maxTranslate() +
                    s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === r.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(r.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((x = !1),
              r.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - v) ** S))),
        x && (u.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (i.currentTranslate = i.startTranslate),
            void (o.diff = s.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
          r.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        r.freeMode &&
          r.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function B(e) {
      const t = this,
        s = t.touchEventsData;
      let i,
        n = e;
      n.originalEvent && (n = n.originalEvent);
      if ("touchend" === n.type || "touchcancel" === n.type) {
        if (
          ((i = [...n.changedTouches].filter(
            (e) => e.identifier === s.touchId,
          )[0]),
          !i || i.identifier !== s.touchId)
        )
          return;
      } else {
        if (null !== s.touchId) return;
        if (n.pointerId !== s.pointerId) return;
        i = n;
      }
      if (
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          n.type,
        )
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      ((s.pointerId = null), (s.touchId = null));
      const {
        params: r,
        touches: o,
        rtlTranslate: d,
        slidesGrid: c,
        enabled: u,
      } = t;
      if (!u) return;
      if (!r.simulateTouch && "mouse" === n.pointerType) return;
      if (
        (s.allowTouchCallbacks && t.emit("touchEnd", n),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && r.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      r.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const p = l(),
        f = p - s.touchStartTime;
      if (t.allowClick) {
        const e = n.path || (n.composedPath && n.composedPath());
        (t.updateClickedSlide((e && e[0]) || n.target, e),
          t.emit("tap click", n),
          f < 300 &&
            p - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", n));
      }
      if (
        ((s.lastClickTime = l()),
        a(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          (0 === o.diff && !s.loopSwapReset) ||
          (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
      )
        return (
          (s.isTouched = !1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      let m;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (m = r.followFinger
          ? d
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        r.cssMode)
      )
        return;
      if (r.freeMode && r.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: m });
      const h = m >= -t.maxTranslate() && !t.params.loop;
      let v = 0,
        g = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < c.length;
        e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
      ) {
        const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== c[e + t]
          ? (h || (m >= c[e] && m < c[e + t])) &&
            ((v = e), (g = c[e + t] - c[e]))
          : (h || m >= c[e]) &&
            ((v = e), (g = c[c.length - 1] - c[c.length - 2]));
      }
      let w = null,
        b = null;
      r.rewind &&
        (t.isBeginning
          ? (b =
              r.virtual && r.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (w = 0));
      const y = (m - c[v]) / g,
        x = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (f > r.longSwipesMs) {
        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
        ("next" === t.swipeDirection &&
          (y >= r.longSwipesRatio
            ? t.slideTo(r.rewind && t.isEnd ? w : v + x)
            : t.slideTo(v)),
          "prev" === t.swipeDirection &&
            (y > 1 - r.longSwipesRatio
              ? t.slideTo(v + x)
              : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio
                ? t.slideTo(b)
                : t.slideTo(v)));
      } else {
        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl)
          ? n.target === t.navigation.nextEl
            ? t.slideTo(v + x)
            : t.slideTo(v)
          : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : v + x),
            "prev" === t.swipeDirection && t.slideTo(null !== b ? b : v));
      }
    }
    function W() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e,
        o = e.virtual && e.params.virtual.enabled;
      ((e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses());
      const a = o && t.loop;
      (!("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      a
        ? e.params.loop && !o
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow());
    }
    function j(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function X() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      ((e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses());
      const r = e.maxTranslate() - e.minTranslate();
      ((n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1));
    }
    function Y(e) {
      const t = this;
      (O(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update());
    }
    function U() {
      const e = this;
      e.documentTouchHandlerProceeded ||
        ((e.documentTouchHandlerProceeded = !0),
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
    }
    const K = (e, t) => {
      const s = n(),
        { params: i, el: r, wrapperEl: o, device: a } = e,
        l = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      r &&
        "string" != typeof r &&
        (s[d]("touchstart", e.onDocumentTouchStart, {
          passive: !1,
          capture: l,
        }),
        r[d]("touchstart", e.onTouchStart, { passive: !1 }),
        r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[d]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
        s[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        s[d]("touchend", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
        s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          r[d]("click", e.onClick, !0),
        i.cssMode && o[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              W,
              !0,
            )
          : e[c]("observerUpdate", W, !0),
        r[d]("load", e.onLoad, { capture: !0 }));
    };
    const J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var Z = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function Q(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (!0 === e[i] && (e[i] = { enabled: !0 }),
            "navigation" === i &&
              e[i] &&
              e[i].enabled &&
              !e[i].prevEl &&
              !e[i].nextEl &&
              (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 &&
              e[i] &&
              e[i].enabled &&
              !e[i].el &&
              (e[i].auto = !0),
            i in e && "enabled" in n
              ? ("object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                p(t, s))
              : p(t, s))
          : p(t, s);
      };
    }
    const ee = {
        eventsEmitter: A,
        update: _,
        translate: D,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            (s.params.cssMode ||
              ((s.wrapperEl.style.transitionDuration = `${e}ms`),
              (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              s.emit("setTransition", e, t));
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              N({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            ((s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                N({ swiper: s, runCallbacks: e, direction: t, step: "End" })));
          },
        },
        slide: G,
        loop: V,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                }));
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              { params: t } = e;
            ((e.onTouchStart = q.bind(e)),
              (e.onTouchMove = R.bind(e)),
              (e.onTouchEnd = B.bind(e)),
              (e.onDocumentTouchStart = U.bind(e)),
              t.cssMode && (e.onScroll = X.bind(e)),
              (e.onClick = j.bind(e)),
              (e.onLoad = Y.bind(e)),
              K(e, "on"));
          },
          detachEvents: function () {
            K(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: n } = e,
              r = i.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!o || e.currentBreakpoint === o) return;
            const a = (o in r ? r[o] : void 0) || e.originalParams,
              l = J(e, i),
              d = J(e, a),
              c = e.params.grabCursor,
              u = a.grabCursor,
              f = i.enabled;
            (l && !d
              ? (n.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (n.classList.add(`${i.containerModifierClass}grid`),
                ((a.grid.fill && "column" === a.grid.fill) ||
                  (!a.grid.fill && "column" === i.grid.fill)) &&
                  n.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              c && !u ? e.unsetGrabCursor() : !c && u && e.setGrabCursor(),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === a[t]) return;
                const s = i[t] && i[t].enabled,
                  n = a[t] && a[t].enabled;
                (s && !n && e[t].disable(), !s && n && e[t].enable());
              }));
            const m = a.direction && a.direction !== i.direction,
              h = i.loop && (a.slidesPerView !== i.slidesPerView || m),
              v = i.loop;
            (m && s && e.changeDirection(), p(e.params, a));
            const g = e.params.enabled,
              w = e.params.loop;
            (Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              f && !g ? e.disable() : !f && g && e.enable(),
              (e.currentBreakpoint = o),
              e.emit("_beforeBreakpoint", a),
              s &&
                (h
                  ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                  : !v && w
                    ? (e.loopCreate(t), e.updateSlides())
                    : v && !w && e.loopDestroy()),
              e.emit("breakpoint", a));
          },
          getBreakpoint: function (e, t, s) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !s))
            )
              return;
            let i = !1;
            const n = o(),
              r = "window" === t ? n.innerHeight : s.clientHeight,
              a = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              const { point: r, value: o } = a[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
                : o <= s.clientWidth && (i = r);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            (!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"));
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: n, device: r } = e,
              o = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass,
              );
            (t.push(...o), n.classList.add(...t), e.emitContainerClasses());
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e &&
              "string" != typeof e &&
              (e.classList.remove(...t), this.emitContainerClasses());
          },
        },
      },
      te = {};
    class se {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
          i[r] = arguments[r];
        (1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
          t || (t = {}),
          (t = p({}, t)),
          e && !t.el && (t.el = e));
        const o = n();
        if (
          t.el &&
          "string" == typeof t.el &&
          o.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            o.querySelectorAll(t.el).forEach((s) => {
              const i = p({}, t, { el: s });
              e.push(new se(i));
            }),
            e
          );
        }
        const a = this;
        ((a.__swiper__ = !0),
          (a.support = C()),
          (a.device = M({ userAgent: t.userAgent })),
          (a.browser = P()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          t.modules &&
            Array.isArray(t.modules) &&
            a.modules.push(...t.modules));
        const l = {};
        a.modules.forEach((e) => {
          e({
            params: t,
            swiper: a,
            extendParams: Q(t, l),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const d = p({}, Z, l);
        return (
          (a.params = p({}, d, te, t)),
          (a.originalParams = p({}, a.params)),
          (a.passedParams = p({}, t)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null,
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getDirectionLabel(e) {
        return this.isHorizontal()
          ? e
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[e];
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = y(v(t, `.${s.slideClass}, swiper-slide`)[0]);
        return y(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = v(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        (s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses());
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        (e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          (t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i));
        }),
          e.emit("_slideClasses", t));
      }
      slidesPerViewDynamic(e, t) {
        (void 0 === e && (e = "current"), void 0 === t && (t = !1));
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
          let e,
            t = i[a] ? Math.ceil(i[a].swiperSlideSize) : 0;
          for (let s = a + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += Math.ceil(i[s].swiperSlideSize)),
              (l += 1),
              t > o && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            n[a] - n[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          (e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses());
        }
        let n;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && O(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
        )
          (i(), s.autoHeight && e.updateAutoHeight());
        else {
          if (
            ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
            e.isEnd &&
            !s.centeredSlides
          ) {
            const t =
              e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            n = e.slideTo(t.length - 1, 0, !1, !0);
          } else n = e.slideTo(e.activeIndex, 0, !1, !0);
          n || i();
        }
        (s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update"));
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        ((s.swiper = t),
          s.parentNode &&
            s.parentNode.host &&
            s.parentNode.host.nodeName ===
              t.params.swiperElementNodeName.toUpperCase() &&
            (t.isElement = !0));
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return v(s, i())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = w("div", t.params.wrapperClass)),
            s.append(n),
            v(s, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: n,
            slidesEl:
              t.isElement && !s.parentNode.host.slideSlots
                ? s.parentNode.host
                : n,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
            wrongRTL: "-webkit-box" === b(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents());
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          s.forEach((e) => {
            e.complete
              ? O(t, e)
              : e.addEventListener("load", (e) => {
                  O(t, e.target);
                });
          }),
          F(t),
          (t.initialized = !0),
          F(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        (void 0 === e && (e = !0), void 0 === t && (t = !0));
        const s = this,
          { params: i, el: n, wrapperEl: r, slides: o } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n && "string" != typeof n && n.removeAttribute("style"),
              r && r.removeAttribute("style"),
              o &&
                o.length &&
                o.forEach((e) => {
                  (e.classList.remove(
                    i.slideVisibleClass,
                    i.slideFullyVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index"));
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              (s.el && "string" != typeof s.el && (s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        p(te, e);
      }
      static get extendedDefaults() {
        return te;
      }
      static get defaults() {
        return Z;
      }
      static installModule(e) {
        se.prototype.__modules__ || (se.prototype.__modules__ = []);
        const t = se.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => se.installModule(e)), se)
          : (se.installModule(e), se);
      }
    }
    function ie(e) {
      let t,
        s,
        { swiper: i, extendParams: r, on: o, emit: a, params: l } = e;
      ((i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }));
      let d,
        c,
        u,
        p,
        f,
        m,
        h,
        v,
        g = l && l.autoplay ? l.autoplay.delay : 3e3,
        w = l && l.autoplay ? l.autoplay.delay : 3e3,
        b = new Date().getTime();
      function y(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", y),
          v || (e.detail && e.detail.bySwiperTouchMove) || C());
      }
      const x = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (c = !0) : c && ((w = d), (c = !1));
          const e = i.autoplay.paused ? d : b + w - new Date().getTime();
          ((i.autoplay.timeLeft = e),
            a("autoplayTimeLeft", e, e / g),
            (s = requestAnimationFrame(() => {
              x();
            })));
        },
        S = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          (cancelAnimationFrame(s), x());
          let n = void 0 === e ? i.params.autoplay.delay : e;
          ((g = i.params.autoplay.delay), (w = i.params.autoplay.delay));
          const r = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                  : i.slides[i.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          (!Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((n = r), (g = r), (w = r)),
            (d = n));
          const o = i.params.speed,
            l = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(o, !0, !0), a("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(i.slides.length - 1, o, !0, !0), a("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                    ? (i.slideNext(o, !0, !0), a("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(0, o, !0, !0), a("autoplay")),
                i.params.cssMode &&
                  ((b = new Date().getTime()),
                  requestAnimationFrame(() => {
                    S();
                  })));
            };
          return (
            n > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  l();
                }, n)))
              : requestAnimationFrame(() => {
                  l();
                }),
            n
          );
        },
        T = () => {
          ((b = new Date().getTime()),
            (i.autoplay.running = !0),
            S(),
            a("autoplayStart"));
        },
        E = () => {
          ((i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            a("autoplayStop"));
        },
        L = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          (clearTimeout(t), e || (h = !0));
          const n = () => {
            (a("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", y)
                : C());
          };
          if (((i.autoplay.paused = !0), s))
            return (m && (d = i.params.autoplay.delay), (m = !1), void n());
          const r = d || i.params.autoplay.delay;
          ((d = r - (new Date().getTime() - b)),
            (i.isEnd && d < 0 && !i.params.loop) || (d < 0 && (d = 0), n()));
        },
        C = () => {
          (i.isEnd && d < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((b = new Date().getTime()),
            h ? ((h = !1), S(d)) : S(),
            (i.autoplay.paused = !1),
            a("autoplayResume"));
        },
        M = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = n();
          ("hidden" === e.visibilityState && ((h = !0), L(!0)),
            "visible" === e.visibilityState && C());
        },
        P = (e) => {
          "mouse" === e.pointerType &&
            ((h = !0), (v = !0), i.animating || i.autoplay.paused || L(!0));
        },
        A = (e) => {
          "mouse" === e.pointerType && ((v = !1), i.autoplay.paused && C());
        };
      (o("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", P),
            i.el.addEventListener("pointerleave", A)),
          n().addEventListener("visibilitychange", M),
          T());
      }),
        o("destroy", () => {
          (i.el &&
            "string" != typeof i.el &&
            (i.el.removeEventListener("pointerenter", P),
            i.el.removeEventListener("pointerleave", A)),
            n().removeEventListener("visibilitychange", M),
            i.autoplay.running && E());
        }),
        o("_freeModeStaticRelease", () => {
          (p || h) && C();
        }),
        o("_freeModeNoMomentumRelease", () => {
          i.params.autoplay.disableOnInteraction ? E() : L(!0, !0);
        }),
        o("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? L(!0, !0) : E());
        }),
        o("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? E()
              : ((u = !0),
                (p = !1),
                (h = !1),
                (f = setTimeout(() => {
                  ((h = !0), (p = !0), L(!0));
                }, 200))));
        }),
        o("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && u) {
            if (
              (clearTimeout(f),
              clearTimeout(t),
              i.params.autoplay.disableOnInteraction)
            )
              return ((p = !1), void (u = !1));
            (p && i.params.cssMode && C(), (p = !1), (u = !1));
          }
        }),
        o("slideChange", () => {
          !i.destroyed && i.autoplay.running && (m = !0);
        }),
        Object.assign(i.autoplay, { start: T, stop: E, pause: L, resume: C }));
    }
    function ne(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        o = !1;
      function a() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          i = e.clickedSlide;
        if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let n;
        ((n = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          t.params.loop ? t.slideToLoop(n) : t.slideTo(n));
      }
      function l() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          ((t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update());
        else if (c(e.swiper)) {
          const i = Object.assign({}, e.swiper);
          (Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(i)),
            (o = !0));
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass,
          ),
          t.thumbs.swiper.on("tap", a),
          !0
        );
      }
      function d(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const i =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let n = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (n = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (n = 1),
          (n = Math.floor(n)),
          s.slides.forEach((e) => e.classList.remove(r)),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < n; e += 1)
            v(
              s.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`,
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let e = 0; e < n; e += 1)
            s.slides[t.realIndex + e] &&
              s.slides[t.realIndex + e].classList.add(r);
        const o = t.params.thumbs.autoScrollOffset,
          a = o && !s.params.loop;
        if (t.realIndex !== s.realIndex || a) {
          const n = s.activeIndex;
          let r, l;
          if (s.params.loop) {
            const e = s.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`,
            )[0];
            ((r = s.slides.indexOf(e)),
              (l = t.activeIndex > t.previousIndex ? "next" : "prev"));
          } else
            ((r = t.realIndex), (l = r > t.previousIndex ? "next" : "prev"));
          (a && (r += "next" === l ? o : -1 * o),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(r) < 0 &&
              (s.params.centeredSlides
                ? (r =
                    r > n
                      ? r - Math.floor(i / 2) + 1
                      : r + Math.floor(i / 2) - 1)
                : r > n && s.params.slidesPerGroup,
              s.slideTo(r, e ? 0 : void 0)));
        }
      }
      ((t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const s = n(),
                i = () => {
                  const i =
                    "string" == typeof e.swiper
                      ? s.querySelector(e.swiper)
                      : e.swiper;
                  if (i && i.swiper) ((e.swiper = i.swiper), l(), d(!0));
                  else if (i) {
                    const s = (n) => {
                      ((e.swiper = n.detail[0]),
                        i.removeEventListener("init", s),
                        l(),
                        d(!0),
                        e.swiper.update(),
                        t.update());
                    };
                    i.addEventListener("init", s);
                  }
                  return i;
                },
                r = () => {
                  if (t.destroyed) return;
                  i() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else (l(), d(!0));
        }),
        i("slideChange update resize observerUpdate", () => {
          d();
        }),
        i("setTransition", (e, s) => {
          const i = t.thumbs.swiper;
          i && !i.destroyed && i.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && o && e.destroy();
        }),
        Object.assign(t.thumbs, { init: l, update: d }));
    }
    function re(e, t) {
      const s = h(t);
      return (
        s !== t &&
          ((s.style.backfaceVisibility = "hidden"),
          (s.style["-webkit-backface-visibility"] = "hidden")),
        s
      );
    }
    function oe(e) {
      let { swiper: t, duration: s, transformElements: i, allSlides: n } = e;
      const { activeIndex: r } = t;
      if (t.params.virtualTranslate && 0 !== s) {
        let e,
          s = !1;
        ((e = n
          ? i
          : i.filter((e) => {
              const s = e.classList.contains("swiper-slide-transform")
                ? ((e) => {
                    if (!e.parentElement)
                      return t.slides.filter(
                        (t) => t.shadowRoot && t.shadowRoot === e.parentNode,
                      )[0];
                    return e.parentElement;
                  })(e)
                : e;
              return t.getSlideIndex(s) === r;
            })),
          e.forEach((e) => {
            !(function (e, t) {
              t &&
                e.addEventListener("transitionend", function s(i) {
                  i.target === e &&
                    (t.call(e, i), e.removeEventListener("transitionend", s));
                });
            })(e, () => {
              if (s) return;
              if (!t || t.destroyed) return;
              ((s = !0), (t.animating = !1));
              const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              t.wrapperEl.dispatchEvent(e);
            });
          }));
      }
    }
    function ae(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ fadeEffect: { crossFade: !1 } });
      !(function (e) {
        const {
          effect: t,
          swiper: s,
          on: i,
          setTranslate: n,
          setTransition: r,
          overwriteParams: o,
          perspective: a,
          recreateShadows: l,
          getEffectParams: d,
        } = e;
        let c;
        (i("beforeInit", () => {
          if (s.params.effect !== t) return;
          (s.classNames.push(`${s.params.containerModifierClass}${t}`),
            a &&
              a() &&
              s.classNames.push(`${s.params.containerModifierClass}3d`));
          const e = o ? o() : {};
          (Object.assign(s.params, e), Object.assign(s.originalParams, e));
        }),
          i("setTranslate", () => {
            s.params.effect === t && n();
          }),
          i("setTransition", (e, i) => {
            s.params.effect === t && r(i);
          }),
          i("transitionEnd", () => {
            if (s.params.effect === t && l) {
              if (!d || !d().slideShadows) return;
              (s.slides.forEach((e) => {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                ).forEach((e) => e.remove());
              }),
                l());
            }
          }),
          i("virtualUpdate", () => {
            s.params.effect === t &&
              (s.slides.length || (c = !0),
              requestAnimationFrame(() => {
                c && s.slides && s.slides.length && (n(), (c = !1));
              }));
          }));
      })({
        effect: "fade",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e } = t;
          t.params.fadeEffect;
          for (let s = 0; s < e.length; s += 1) {
            const e = t.slides[s];
            let i = -e.swiperSlideOffset;
            t.params.virtualTranslate || (i -= t.translate);
            let n = 0;
            t.isHorizontal() || ((n = i), (i = 0));
            const r = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e.progress), 0)
                : 1 + Math.min(Math.max(e.progress, -1), 0),
              o = re(0, e);
            ((o.style.opacity = r),
              (o.style.transform = `translate3d(${i}px, ${n}px, 0px)`));
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => h(e));
          (s.forEach((t) => {
            t.style.transitionDuration = `${e}ms`;
          }),
            oe({
              swiper: t,
              duration: e,
              transformElements: s,
              allSlides: !0,
            }));
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    }
    (Object.keys(ee).forEach((e) => {
      Object.keys(ee[e]).forEach((t) => {
        se.prototype[t] = ee[e][t];
      });
    }),
      se.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const n = o();
          let r = null,
            a = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            d = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          (s("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = n.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let n = s,
                      r = i;
                    (e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: o } = e;
                      (o && o !== t.el) ||
                        ((n = i ? i.width : (s[0] || s).inlineSize),
                        (r = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (n === s && r === i) || l());
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", l),
                n.addEventListener("orientationchange", d));
          }),
            s("destroy", () => {
              (a && n.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", l),
                n.removeEventListener("orientationchange", d));
            }));
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: n } = e;
          const r = [],
            a = o(),
            l = function (e, s) {
              void 0 === s && (s = {});
              const i = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const s = function () {
                    n("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(s)
                    : a.setTimeout(s, 0);
                },
              );
              (i.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                r.push(i));
            };
          (s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = (function (e, t) {
                    const s = [];
                    let i = e.parentElement;
                    for (; i; )
                      (t ? i.matches(t) && s.push(i) : s.push(i),
                        (i = i.parentElement));
                    return s;
                  })(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                (l(t.hostEl, { childList: t.params.observeSlideChildren }),
                  l(t.wrapperEl, { attributes: !1 }));
              }
            }),
            i("destroy", () => {
              (r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length));
            }));
        },
      ]));
    const le = (e, t = 3) => {
      const s = e.querySelectorAll(".swiper-slide"),
        i = e.querySelector(".swiper-wrapper");
      let n = s.length;
      if (n > 0 && n <= t) {
        let e = Math.ceil(t / n);
        if (e > 0)
          for (let t = 0, n = e; t < n; t++)
            s.forEach((e) => {
              const t = e.tagName.toLowerCase(),
                s = document.createElement(`${t}`);
              s.classList.add(...e.classList);
              for (let t of e.attributes)
                "id" !== t.name && s.setAttribute(t.name, t.value);
              ((s.innerHTML = e.innerHTML), i.append(s));
            });
      }
    };
    if (document.querySelector("#myMap")) {
      const e = document.querySelector("#myMap").getAttribute("data-x"),
        t = document.querySelector("#myMap").getAttribute("data-y");
      var de = L.map("myMap").setView([parseFloat(t), parseFloat(e)], 13);
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.carto.com/attributions">CARTO</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      ).addTo(de);
      var ce = L.icon({
        iconUrl: document.querySelector("#myMap").getAttribute("data-icon"),
        iconSize: [38, 95],
        iconAnchor: [19, 60],
      });
      L.marker([parseFloat(t), parseFloat(e)], { icon: ce }).addTo(de);
    }
    document.querySelectorAll(".custom-select").forEach((e) => {
      e.classList.add("hidden");
      const t = e.closest(".wpcf7-form-control-wrap"),
        s = e.querySelectorAll("option"),
        i = document.createElement("div");
      i.classList.add("cs");
      const n = document.createElement("p");
      n.classList.add("cs_current");
      const r = document.createElement("ul");
      (r.classList.add("another", "hidden", "cs_list"),
        (r.style.display = "none"),
        s.forEach((t, s) => {
          const i = document.createElement("li");
          (i.classList.add("another-f"),
            (i.innerHTML = t.textContent),
            0 === s && (n.innerHTML = t.textContent),
            i.classList.contains("disabled") ||
              i.addEventListener("click", () => {
                ((e.selectedIndex = s),
                  (n.innerHTML = i.textContent),
                  $(r).slideUp(300),
                  r.classList.remove("active"),
                  n.classList.remove("active"),
                  i.classList.add("active"),
                  $(i).siblings("li").removeClass("active"));
              }),
            r.append(i));
        }),
        t && (i.append(n), i.append(r), t.append(i)),
        n.addEventListener("click", () => {
          ($(r).slideToggle(300),
            r.classList.toggle("active"),
            n.classList.toggle("active"));
        }));
    });
    s(213);
    document.addEventListener("DOMContentLoaded", (e) => {
      document.querySelectorAll(".hero__swiper").forEach((e) => {
        (le(e, 20),
          new se(e, {
            modules: [ie, ae],
            loop: !0,
            slidesPerView: "auto",
            speed: 5e3,
            fadeEffect: { crossFade: !0 },
            watchSlidesVisibility: !0,
            autoplay: { delay: 0 },
          }));
      });
      let t = !0;
      const s = () => {
        var e;
        ((e = new se(".mySwiper", {
          loop: !0,
          slidesPerView: "auto",
          freeMode: !0,
          watchSlidesProgress: !0,
        })),
          new se(".mySwiper2", {
            loop: !0,
            slidesPerView: 1,
            spaceBetween: 10,
            modules: [ne],
            thumbs: { swiper: e },
          }),
          (() => {
            var e = new se(".mySwiperSide", {
              loop: !0,
              slidesPerView: "auto",
              freeMode: !0,
              watchSlidesProgress: !0,
            });
            new se(".mySwiperMain", {
              loop: !0,
              slidesPerView: 1,
              spaceBetween: 10,
              modules: [ne],
              thumbs: { swiper: e },
            });
          })(),
          (() => {
            if (document.querySelector(".faq__blocks")) {
              document.querySelectorAll(".faq__icon");
              const e = document.querySelectorAll(".faq__button");
              e.forEach((t) => {
                t.addEventListener("click", () => {
                  if (t.classList.contains("active"))
                    (t.classList.remove("active"),
                      (t.nextElementSibling.style.maxHeight = null));
                  else {
                    (e.forEach((e) => {
                      (e.classList.remove("active"),
                        (e.nextElementSibling.style.maxHeight = null));
                    }),
                      t.classList.add("active"));
                    const s = t.nextElementSibling;
                    s.style.maxHeight = s.scrollHeight + "px";
                  }
                });
              });
            }
          })(),
          (() => {
            const e = document.querySelectorAll(".contact__form-field");
            (e &&
              e.forEach((e) => {
                const t = e.querySelector("input"),
                  s = e.querySelector("label");
                (t.addEventListener("focus", () => {
                  (s.classList.add("active"), (t.style.textAlign = "left"));
                }),
                  t.addEventListener("blur", () => {
                    t.value ||
                      (s.classList.remove("active"),
                      (t.style.textAlign = "right"));
                  }));
              }),
              document.querySelectorAll(".textarea__optional").forEach((e) => {
                (e.addEventListener("focus", () => {
                  e.style.textAlign = "left";
                }),
                  e.addEventListener("blur", () => {
                    e.value || (e.style.textAlign = "right");
                  }));
              }));
          })(),
          (() => {
            if (document.querySelector(".talents__filter-wrapper")) {
              const e = document.querySelector("html"),
                t = document.querySelector(".talents__filter-popup-button"),
                s = document.querySelector(".talents__filter-popup"),
                i = document.querySelector(".talents__filter-close");
              (t &&
                t.addEventListener("click", () => {
                  (s.classList.toggle("open"),
                    s.classList.contains("open") ? n("add") : n("remove"));
                }),
                i &&
                  i.addEventListener("click", () => {
                    (s.classList.remove("open"), n("remove"));
                  }));
              const n = (t) => {
                ("add" === t && (e.style.overflow = "hidden"),
                  "remove" === t && (e.style.overflow = "inherit"));
              };
            }
          })(),
          (() => {
            const e = document.querySelectorAll(".portfolio__item");
            (e.forEach((e) => {
              const t = e.querySelector(".portfolio__item-pre"),
                s = e.querySelector(".portfolio__item-video");
              if (t && s) {
                const i = () => {
                    ((t.style.opacity = "0"), (s.muted = !0), s.play());
                  },
                  n = () => {
                    ((t.style.opacity = "1"), s.pause());
                  };
                window.innerWidth <= 768
                  ? i()
                  : (e.addEventListener("mouseover", i),
                    e.addEventListener("mouseout", n));
              }
            }),
              window.addEventListener("resize", () => {
                e.forEach((e) => {
                  const t = e.querySelector(".portfolio__item-pre"),
                    s = e.querySelector(".portfolio__item-video");
                  if (t && s) {
                    const i = () => {
                        ((t.style.opacity = "0"), (s.muted = !0), s.play());
                      },
                      n = () => {
                        window.innerWidth >= 768 &&
                          ((t.style.opacity = "1"), s.pause());
                      };
                    (e.removeEventListener("mouseover", i),
                      e.removeEventListener("mouseout", n),
                      window.innerWidth <= 768
                        ? i()
                        : (n(),
                          e.addEventListener("mouseover", i),
                          e.addEventListener("mouseout", n)));
                  }
                });
              }));
          })());
        const t = document.querySelector("html"),
          s = document.querySelector(".header"),
          i = document.querySelector(".header__burger"),
          n = document.querySelectorAll(".header__wp a"),
          r = document.querySelector(".header__main");
        (n.forEach((e) => {
          e.addEventListener("click", () => {
            (r.classList.remove("open"),
              i.classList.remove("open"),
              s.classList.remove("open"),
              o("remove"),
              (i.textContent = "menu"));
          });
        }),
          i.addEventListener("click", () => {
            (r.classList.toggle("open"),
              i.classList.toggle("open"),
              s.classList.toggle("open"),
              r.classList.contains("open")
                ? ((i.textContent = "Close"), o("add"))
                : ((i.textContent = "menu"), o("remove")));
          }));
        const o = (e) => {
            ("add" === e && (t.style.overflow = "hidden"),
              "remove" === e && (t.style.overflow = "inherit"));
          },
          a = (e) => {
            e &&
              e.forEach((e) => {
                const t = e.textContent,
                  s = `<span class="label-up">${t}</span><span class="label-up">${t}</span>`;
                e.innerHTML = s;
              });
          },
          l = document.querySelectorAll(".anim-btn"),
          d = document.querySelectorAll(".header__menu a"),
          c = document.querySelectorAll(".footer__menu a");
        (a(d), a(c), a(l));
        let u = window.pageYOffset;
        window.addEventListener("scroll", () => {
          const e = window.pageYOffset;
          ((s.style.top = u <= e && e > 50 ? "-90px" : "0px"), (u = e));
        });
      };
      if (window.pageYOffset >= 1 && t) ((t = !1), s());
      else if (window.pageYOffset < 1 && t) {
        [
          "mousemove",
          "click",
          "mousewheel",
          "scroll",
          "touchstart",
          "keydown",
          "keypress",
          "mouseover",
          "mouseout",
          "resize",
        ].forEach((e) => {
          window.addEventListener(e, () => {
            t && ((t = !1), s());
          });
        });
      }
    });
  })();
})();
