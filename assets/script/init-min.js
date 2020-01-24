function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}

function setFilter(e, t, n) {
    var r = uncamel(t),
        o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[o + "filter"] = e[o + "filter"] || "", n = setUnit(n > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : n, jQuery.CSS.filters[t].unit), e[o + "filter"] += r + "(" + n + ") ", delete e[t]
}

function endpointWorkaround(e) {
    if (~e.indexOf(gcmServer)) return (t = e.split(gcmServer))[1];
    if (~e.indexOf(sFirefoxServer)) return (t = e.split(sFirefoxServer))[1];
    if (~e.indexOf(sFirefoxServer2)) {
        var t = e.split(sFirefoxServer2);
        return t[1]
    }
    return e
}

function DataStack(e) {
    e = e || {}, this.stack = {}, this.debug = e.debug || !1
}

function initForm(e) {
    (e = $(e)).find("form").each(function(e, t) {
        modules.get("component.forms", "constructor")(t)
    }), e.find("button").hover(function() {
        e.closest(".contact-block").find(".decoration").addClass("hover")
    }, function() {
        e.closest(".contact-block").find(".decoration").removeClass("hover")
    }), modules.get("component.textual-popup", "init")(e)
}

function initSmallPopup(e) {
    (e = $(e)).find("[data-contact-popup]").on("click", function() {
        var e = $(this);
        modules.get("component.basic-contact-popup", "open-popup")(e.attr("data-contact-popup"), e.attr("data-popup-title"), e.attr("data-popup-button"))
    })
}

function component__scrollBlocksShow() {
    function e(e) {
        (e = $(e)).addClass("visible"), e.attr("data-scroller-action") && window[$(e).attr("data-scroller-action")](e)
    }
    var t = $(document).scrollTop(),
        n = $(window).height();
    $("[data-scroller]:not(.visible)").each(function(r, o) {
        var i = (o = $(o)).data("scroller");
        if ("0" === i || i || (i = .15), o.offset().top - t < n * (1 - +i) && !o.hasClass("visible")) {
            var a = +o.attr("data-scroller-delay") || !1;
            a ? setTimeout(function() {
                e(o)
            }, a) : e(o)
        }
    })
}

function component__scrolledParallax() {
    var e = $(document).scrollTop(),
        t = $(window).height();
    $("[data-scrollable]").each(function(n, r) {
        if ((r = $(r)).offset().top - (e + t) < 0 && r.offset().top + r.height() - e > 0) {
            var o = t / 100,
                i = o * (100 - (r.offset().top - e) / o) * +r.data("scrollable");
            r.css("transform", "translateY(" + i + "px)")
        }
    })
}

function initQTip(e) {
    e = $(e), $(window).width() > 1024 ? e.tooltip({
        track: !0
    }) : e.tooltip({
        track: !1
    })
}

function initRates(e) {
    initQTip(e), initPayment(e), initSmallPopup(e)
}

function initImageCompare(e) {
    $(e).find(".value .action .wrap").twentytwenty({
        default_offset_pct: .38,
        no_overlay: !0
    })
}

function initCounter(e) {
    $(e).countTo({
        speed: 1400
    })
}

function initNavigate(e) {
    (e = $(e)).find('a[href^="#"]').on("click", function() {
        var e;
        return e = $($(this).attr("href")).find(".title")[0] ? $($(this).attr("href")).find(".title").first() : $($(this).attr("href")), $("html, body").animate({
            scrollTop: e.offset().top - 170
        }, 500), !1
    }), $(".menu-control").click(function() {
        var e = $("#menu"),
            t = $(".menu-control");
        e.toggleClass("show"), t.removeClass("show"), $(document.body).css({
            overflow: "auto"
        }), e.hasClass("show") && $(window).width() <= 640 && (t.addClass("show"), $(document.body).css({
            overflow: "hidden"
        }))
    }), $("#menu .item,#menu .close").on("click", function() {
        return $("#menu").removeClass("show"), $(".menu-control").removeClass("show"), $(document.body).css({
            overflow: "auto"
        }), !0
    }), initPayment(e)
}

function initWorkSchedule(e) {
    var t = $(e);
    t.find(".head .item").click(function() {
        var e = +$(this).attr("data-slide");
        t.find(".active").removeClass("active"), t.find("[data-slide=" + e + "]").addClass("active")
    }), $(window).width() > 1800 && (t.find(".image[data-full]").parallax({
        yparallax: .06,
        xparallax: .06,
        mouseport: t
    }), t.find(".image[data-hor]").parallax({
        yparallax: 0,
        xparallax: .06,
        mouseport: t
    })), t.find(".controls .prev").click(function() {
        var e = +t.find(".active").attr("data-slide"),
            n = t.find(".head .item").length;
        1 === e ? e = n : e--, t.find(".active").removeClass("active"), t.find("[data-slide=" + e + "]").addClass("active")
    }), t.find(".controls .next").click(function() {
        var e = +t.find(".active").attr("data-slide");
        e === t.find(".head .item").length ? e = 1 : e++, t.find(".active").removeClass("active"), t.find("[data-slide=" + e + "]").addClass("active")
    })
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || ee).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = fe.type(e);
        return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t, n) {
        return fe.isFunction(t) ? fe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? fe.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? fe.grep(e, function(e) {
            return ie.call(t, e) > -1 !== n
        }) : Pe.test(t) ? fe.filter(t, e, n) : (t = fe.filter(t, e), fe.grep(e, function(e) {
            return ie.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return fe.each(e.match(Se) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function u(e, t, n) {
        var r;
        try {
            e && fe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && fe.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        ee.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), fe.ready()
    }

    function p() {
        this.expando = fe.expando + p.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e)
    }

    function f(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace($e, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = d(n)
                } catch (e) {}
                Ee.set(e, t, n)
            } else n = void 0;
        return n
    }

    function h(e, t, n, r) {
        var o, i = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return fe.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
            c = (fe.cssNumber[t] || "px" !== u && +l) && Le.exec(fe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                i = i || ".5", c /= i, fe.style(e, t, c + u)
            } while (i !== (i = s() / l) && 1 !== i && --a)
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = o)), o
    }

    function y(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = Me.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && Fe(r) && (o[i] = m(r))) : "none" !== n && (o[i] = "none", Me.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e
    }

    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], n) : n
    }

    function g(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, o) {
        for (var i, a, s, l, u, c, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
            if ((i = e[f]) || 0 === i)
                if ("object" === fe.type(i)) fe.merge(d, i.nodeType ? [i] : i);
                else if (We.test(i)) {
            for (a = a || p.appendChild(t.createElement("div")), s = (Ve.exec(i) || ["", ""])[1].toLowerCase(), l = ze[s] || ze._default, a.innerHTML = l[1] + fe.htmlPrefilter(i) + l[2], c = l[0]; c--;) a = a.lastChild;
            fe.merge(d, a.childNodes), (a = p.firstChild).textContent = ""
        } else d.push(t.createTextNode(i));
        for (p.textContent = "", f = 0; i = d[f++];)
            if (r && fe.inArray(i, r) > -1) o && o.push(i);
            else if (u = fe.contains(i.ownerDocument, i), a = v(p.appendChild(i), "script"), u && g(a), n)
            for (c = 0; i = a[c++];) Re.test(i.type || "") && n.push(i);
        return p
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function T() {
        try {
            return ee.activeElement
        } catch (e) {}
    }

    function P(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) P(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = x;
        else if (!o) return e;
        return 1 === i && (a = o, o = function(e) {
            return fe().off(e), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, o, r, n)
        })
    }

    function j(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Y(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function C(e, t) {
        var n, r, o, i, a, s, l, u;
        if (1 === t.nodeType) {
            if (Me.hasData(e) && (i = Me.access(e), a = Me.set(t, i), u = i.events)) {
                delete a.handle, a.events = {};
                for (o in u)
                    for (n = 0, r = u[o].length; n < r; n++) fe.event.add(t, o, u[o][n])
            }
            Ee.hasData(e) && (s = Ee.access(e), l = fe.extend({}, s), Ee.set(t, l))
        }
    }

    function S(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Q(e, t, r, o) {
        t = re.apply([], t);
        var i, a, s, l, u, c, p = 0,
            d = e.length,
            f = d - 1,
            h = t[0],
            m = fe.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !pe.checkClone && et.test(h)) return e.each(function(n) {
            var i = e.eq(n);
            m && (t[0] = h.call(this, n, i.html())), Q(i, t, r, o)
        });
        if (d && (i = b(t, e[0].ownerDocument, !1, e, o), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || o)) {
            for (l = (s = fe.map(v(i, "script"), k)).length; p < d; p++) u = i, p !== f && (u = fe.clone(u, !0, !0), l && fe.merge(s, v(u, "script"))), r.call(e[p], u, p);
            if (l)
                for (c = s[s.length - 1].ownerDocument, fe.map(s, Y), p = 0; p < l; p++) u = s[p], Re.test(u.type || "") && !Me.access(u, "globalEval") && fe.contains(c, u) && (u.src ? fe._evalUrl && fe._evalUrl(u.src) : n(u.textContent.replace(nt, ""), c))
        }
        return e
    }

    function _(e, t, n) {
        for (var r, o = t ? fe.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || fe.cleanData(v(r)), r.parentNode && (n && fe.contains(r.ownerDocument, r) && g(v(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function A(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || it(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)), !pe.pixelMarginRight() && ot.test(a) && rt.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function D(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        if (e in ct) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--;)
            if ((e = ut[n] + t) in ct) return e
    }

    function E(e, t, n) {
        var r = Le.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function O(e, t, n, r, o) {
        var i, a = 0;
        for (i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2) "margin" === n && (a += fe.css(e, n + Be[i], !0, o)), r ? ("content" === n && (a -= fe.css(e, "padding" + Be[i], !0, o)), "margin" !== n && (a -= fe.css(e, "border" + Be[i] + "Width", !0, o))) : (a += fe.css(e, "padding" + Be[i], !0, o), "padding" !== n && (a += fe.css(e, "border" + Be[i] + "Width", !0, o)));
        return a
    }

    function $(e, t, n) {
        var r, o = !0,
            i = it(e),
            a = "border-box" === fe.css(e, "boxSizing", !1, i);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
            if (((r = A(e, t, i)) < 0 || null == r) && (r = e.style[t]), ot.test(r)) return r;
            o = a && (pe.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + O(e, t, n || (a ? "border" : "content"), o, i) + "px"
    }

    function I(e, t, n, r, o) {
        return new I.prototype.init(e, t, n, r, o)
    }

    function L() {
        dt && (e.requestAnimationFrame(L), fe.fx.tick())
    }

    function B() {
        return e.setTimeout(function() {
            pt = void 0
        }), pt = fe.now()
    }

    function F(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Be[r], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function N(e, t, n) {
        for (var r, o = (Z.tweeners[t] || []).concat(Z.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function H(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = fe.camelCase(n), o = t[r], i = e[n], fe.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = fe.cssHooks[r]) && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function Z(e, t, n) {
        var r, o, i = 0,
            a = Z.prefilters.length,
            s = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = pt || B(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; i < a; i++) u.tweens[i].run(r);
                return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: fe.extend({}, t),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || B(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (H(c, u.opts.specialEasing); i < a; i++)
            if (r = Z.prefilters[i].call(u, e, c, u.opts)) return fe.isFunction(r.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(r.stop, r)), r;
        return fe.map(c, N, u), fe.isFunction(u.opts.start) && u.opts.start.call(e, u), fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function V(e) {
        return (e.match(Se) || []).join(" ")
    }

    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function z(e, t, n, r) {
        var o;
        if (fe.isArray(t)) fe.each(t, function(t, o) {
            n || jt.test(e) ? r(e, o) : z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== fe.type(t)) r(e, t);
        else
            for (o in t) z(e + "[" + o + "]", t[o], n, r)
    }

    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(Se) || [];
            if (fe.isFunction(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function q(e, t, n, r) {
        function o(s) {
            var l;
            return i[s] = !0, fe.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || i[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var i = {},
            a = e === $t;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function X(e, t) {
        var n, r, o = fe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && fe.extend(!0, e, r), e
    }

    function U(e, t, n) {
        for (var r, o, i, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    l.unshift(o);
                    break
                } if (l[0] in n) i = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    i = o;
                    break
                }
                a || (a = o)
            }
            i = i || a
        }
        if (i) return i !== l[0] && l.unshift(i), n[i]
    }

    function K(e, t, n, r) {
        var o, i, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                if ("*" === i) i = l;
                else if ("*" !== l && l !== i) {
            if (!(a = u[l + " " + i] || u["* " + i]))
                for (o in u)
                    if ((s = o.split(" "))[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[o] : !0 !== u[o] && (i = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function G(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var J = [],
        ee = e.document,
        te = Object.getPrototypeOf,
        ne = J.slice,
        re = J.concat,
        oe = J.push,
        ie = J.indexOf,
        ae = {},
        se = ae.toString,
        le = ae.hasOwnProperty,
        ue = le.toString,
        ce = ue.call(Object),
        pe = {},
        de = "3.1.1",
        fe = function(e, t) {
            return new fe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ye = /-([a-z])/g,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    fe.fn = fe.prototype = {
        jquery: de,
        constructor: fe,
        length: 0,
        toArray: function() {
            return ne.call(this)
        },
        get: function(e) {
            return null == e ? ne.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ne.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: J.sort,
        splice: J.splice
    }, fe.extend = fe.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || fe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (u && r && (fe.isPlainObject(r) || (o = fe.isArray(r))) ? (o ? (o = !1, i = n && fe.isArray(n) ? n : []) : i = n && fe.isPlainObject(n) ? n : {}, a[t] = fe.extend(u, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, fe.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = fe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== se.call(e) || (t = te(e)) && ("function" != typeof(n = le.call(t, "constructor") && t.constructor) || ue.call(n) !== ce))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[se.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ye, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, o = 0;
            if (r(e))
                for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ie.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var o, i, a = 0,
                s = [];
            if (r(e))
                for (o = e.length; a < o; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), fe.isFunction(e)) return r = ne.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(ne.call(arguments)))
            }, o.guid = e.guid = e.guid || fe.guid++, o
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = J[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, l, c, d, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== A && _(t), t = t || A, M)) {
                if (11 !== h && (l = me.exec(e)))
                    if (o = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (f && (a = f.getElementById(o)) && I(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (l[2]) return U.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return U.apply(n, t.getElementsByClassName(o)), n
                    } if (w.qsa && !V[e + " "] && (!E || !E.test(e))) {
                    if (1 !== h) f = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, we) : t.setAttribute("id", s = L), i = (c = j(e)).length; i--;) c[i] = "#" + s + " " + p(c[i]);
                        d = c.join(","), f = ye.test(e) && u(t.parentNode) || t
                    }
                    if (d) try {
                        return U.apply(n, f.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        s === L && t.removeAttribute("id")
                    }
                }
            }
            return Y(e.replace(ie, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[L] = !0, e
        }

        function o(e) {
            var t = A.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = N++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, o);
                return !1
            } : function(t, n, l) {
                var u, c, p, d = [F, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (p = t[L] || (t[L] = {}), c = p[t.uniqueID] || (p[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = c[i]) && u[0] === F && u[1] === s) return d[2] = u[2];
                                if (c[i] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) {
            for (var o = 0, i = n.length; o < i; o++) t(e, n[o], r);
            return r
        }

        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), u && t.push(s)));
            return a
        }

        function y(e, t, n, o, i, a) {
            return o && !o[L] && (o = y(o)), i && !i[L] && (i = y(i, a)), r(function(r, a, s, l) {
                var u, c, p, d = [],
                    f = [],
                    y = a.length,
                    v = r || h(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !r && t ? v : m(v, d, e, s, l),
                    b = n ? i || (r ? e : y || o) ? [] : a : g;
                if (n && n(g, b, s, l), o)
                    for (u = m(b, f), o(u, [], s, l), c = u.length; c--;)(p = u[c]) && (b[f[c]] = !(g[f[c]] = p));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = b.length; c--;)(p = b[c]) && u.push(g[c] = p);
                            i(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(p = b[c]) && (u = i ? G(r, p) : d[c]) > -1 && (r[u] = !(a[u] = p))
                    }
                } else b = m(b === a ? b.splice(y, b.length) : b), i ? i(null, a, b, l) : U.apply(a, b)
            })
        }

        function v(e) {
            for (var t, n, r, o = e.length, i = x.relative[e[0].type], a = i || x.relative[" "], s = i ? 1 : 0, l = d(function(e) {
                    return e === t
                }, a, !0), u = d(function(e) {
                    return G(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var o = !i && (r || n !== C) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, o
                }]; s < o; s++)
                if (n = x.relative[e[s].type]) c = [d(f(c), n)];
                else {
                    if ((n = x.filter[e[s].type].apply(null, e[s].matches))[L]) {
                        for (r = ++s; r < o && !x.relative[e[r].type]; r++);
                        return y(s > 1 && f(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ie, "$1"), n, s < r && v(e.slice(s, r)), r < o && v(e = e.slice(r)), r < o && p(e))
                    }
                    c.push(n)
                } return f(c)
        }

        function g(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, p, d, f = 0,
                        h = "0",
                        y = r && [],
                        v = [],
                        g = C,
                        b = r || i && x.find.TAG("*", u),
                        w = F += null == g ? 1 : Math.random() || .1,
                        T = b.length;
                    for (u && (C = a === A || a || u); h !== T && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (p = 0, a || c.ownerDocument === A || (_(c), s = !M); d = e[p++];)
                                if (d(c, a || A, s)) {
                                    l.push(c);
                                    break
                                } u && (F = w)
                        }
                        o && ((c = !d && c) && f--, r && y.push(c))
                    }
                    if (f += h, o && h !== f) {
                        for (p = 0; d = n[p++];) d(y, v, a, s);
                        if (r) {
                            if (f > 0)
                                for (; h--;) y[h] || v[h] || (v[h] = q.call(l));
                            v = m(v)
                        }
                        U.apply(l, v), u && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (F = w, C = g), y
                };
            return o ? r(a) : a
        }
        var b, w, x, T, P, j, k, Y, C, S, Q, _, A, D, M, E, O, $, I, L = "sizzle" + 1 * new Date,
            B = e.document,
            F = 0,
            N = 0,
            H = n(),
            Z = n(),
            V = n(),
            R = function(e, t) {
                return e === t && (Q = !0), 0
            },
            z = {}.hasOwnProperty,
            W = [],
            q = W.pop,
            X = W.push,
            U = W.push,
            K = W.slice,
            G = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"),
            ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            pe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ge = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            we = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            xe = function() {
                _()
            },
            Te = d(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            U.apply(W = K.call(B.childNodes), B.childNodes), W[B.childNodes.length].nodeType
        } catch (e) {
            U = {
                apply: W.length ? function(e, t) {
                    X.apply(e, K.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, P = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, _ = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : B;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, D = A.documentElement, M = !P(A), B !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = he.test(A.getElementsByClassName), w.getById = o(function(e) {
                return D.appendChild(e).id = L, !A.getElementsByName || !A.getElementsByName(L).length
            }), w.getById ? (x.filter.ID = function(e) {
                var t = e.replace(ve, ge);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (x.filter.ID = function(e) {
                var t = e.replace(ve, ge);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                        for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                    }
                    return []
                }
            }), x.find.TAG = w.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, x.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
            }, O = [], E = [], (w.qsa = he.test(A.querySelectorAll)) && (o(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && E.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || E.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + L + "-]").length || E.push("~="), e.querySelectorAll(":checked").length || E.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || E.push(".#.+[+~]")
            }), o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && E.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && E.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && E.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), E.push(",.*:")
            })), (w.matchesSelector = he.test($ = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = $.call(e, "*"), $.call(e, "[s!='']:x"), O.push("!=", re)
            }), E = E.length && new RegExp(E.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(D.compareDocumentPosition), I = t || he.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, R = t ? function(e, t) {
                if (e === t) return Q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === B && I(B, e) ? -1 : t === A || t.ownerDocument === B && I(B, t) ? 1 : S ? G(S, e) - G(S, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return Q = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !i) return e === A ? -1 : t === A ? 1 : o ? -1 : i ? 1 : S ? G(S, e) - G(S, t) : 0;
                if (o === i) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === B ? -1 : l[r] === B ? 1 : 0
            }, A) : A
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && _(e), n = n.replace(le, "='$1']"), w.matchesSelector && M && !V[n + " "] && (!O || !O.test(n)) && (!E || !E.test(n))) try {
                var r = $.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && _(e), I(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && _(e);
            var n = x.attrHandle[t.toLowerCase()],
                r = n && z.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== r ? r : w.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(be, we)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (Q = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(R), Q) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += T(t);
            return n
        }, (x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ge), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ge), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = j(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ge).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = H[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && H(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, p, d, f, h, m = i !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            g = !l && !s,
                            b = !1;
                        if (y) {
                            if (i) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && g) {
                                for (b = (f = (u = (c = (p = (d = y)[L] || (d[L] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === F && u[1]) && u[2], d = f && y.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [F, f, b];
                                        break
                                    }
                            } else if (g && (d = t, p = d[L] || (d[L] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === F && u[1], b = f), !1 === b)
                                for (;
                                    (d = ++f && d && d[m] || (b = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (g && (p = d[L] || (d[L] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e] = [F, b]), d !== t)););
                            return (b -= o) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[L] ? i(n) : i.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = G(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = k(e.replace(ie, "$1"));
                    return o[L] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ve, ge),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ge).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return de.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in {
                submit: !0,
                reset: !0
            }) x.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return c.prototype = x.filters = x.pseudos, x.setFilters = new c, j = t.tokenize = function(e, n) {
            var r, o, i, a, s, l, u, c = Z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = x.preFilter; s;) {
                r && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = se.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(ie, " ")
                }), s = s.slice(r.length));
                for (a in x.filter) !(o = pe[a].exec(s)) || u[a] && !(o = u[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : Z(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = V[e + " "];
            if (!i) {
                for (t || (t = j(e)), n = t.length; n--;)(i = v(t[n]))[L] ? r.push(i) : o.push(i);
                (i = V(e, g(o, r))).selector = e
            }
            return i
        }, Y = t.select = function(e, t, n, r) {
            var o, i, a, s, l, c = "function" == typeof e && e,
                d = !r && j(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((i = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && M && x.relative[i[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ve, ge), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (r = l(a.matches[0].replace(ve, ge), ye.test(i[0].type) && u(t.parentNode) || t))) {
                        if (i.splice(o, 1), !(e = r.length && p(i))) return U.apply(n, r), n;
                        break
                    }
            }
            return (c || k(e, d))(r, t, !M, n, !t || ye.test(e) && u(t.parentNode) || t), n
        }, w.sortStable = L.split("").sort(R).join("") === L, w.detectDuplicates = !!Q, _(), w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(J, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    fe.find = ge, fe.expr = ge.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ge.uniqueSort, fe.text = ge.getText, fe.isXMLDoc = ge.isXML, fe.contains = ge.contains, fe.escapeSelector = ge.escape;
    var be = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && fe(e).is(n)) break;
                    r.push(e)
                } return r
        },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        xe = fe.expr.match.needsContext,
        Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Pe = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? fe.find.matchesSelector(r, e) ? [r] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (fe.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) fe.find(e, o[t], n);
            return r > 1 ? fe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var je, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (fe.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || je, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ee, !0)), Te.test(r[1]) && fe.isPlainObject(t))
                    for (r in t) fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = ee.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : fe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this)
    }).prototype = fe.fn, je = fe(ee);
    var Ye = /^(?:parents|prev(?:Until|All))/,
        Ce = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function(e) {
            var t = fe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (fe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && fe(e);
            if (!xe.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        } return this.pushStack(i.length > 1 ? fe.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.call(fe(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || fe.merge([], e.childNodes)
        }
    }, function(e, t) {
        fe.fn[e] = function(n, r) {
            var o = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = fe.filter(r, o)), this.length > 1 && (Ce[e] || fe.uniqueSort(o), Ye.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var Se = /[^\x20\t\r\n\f]+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : fe.extend({}, e);
        var t, n, r, o, i = [],
            s = [],
            l = -1,
            u = function() {
                for (o = e.once, r = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < i.length;) !1 === i[l].apply(n[0], n[1]) && e.stopOnFalse && (l = i.length, n = !1);
                e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
            },
            c = {
                add: function() {
                    return i && (n && !t && (l = i.length - 1, s.push(n)), function t(n) {
                        fe.each(n, function(n, r) {
                            fe.isFunction(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== fe.type(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return fe.each(arguments, function(e, t) {
                        for (var n;
                            (n = fe.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? fe.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []), this
                },
                disable: function() {
                    return o = s = [], i = n = "", this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return o = s = [], n || t || (i = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, fe.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2],
                    ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return fe.Deferred(function(t) {
                            fe.each(n, function(n, r) {
                                var o = fe.isFunction(e[r[4]]) && e[r[4]];
                                i[r[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, o) {
                        function i(t, n, r, o) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    p = function() {
                                        var e, p;
                                        if (!(t < a)) {
                                            if ((e = r.apply(u, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p = e && ("object" == typeof e || "function" == typeof e) && e.then, fe.isFunction(p) ? o ? p.call(e, i(a, n, s, o), i(a, n, l, o)) : (a++, p.call(e, i(a, n, s, o), i(a, n, l, o), i(a, n, s, n.notifyWith))) : (r !== s && (u = void 0, c = [e]), (o || n.resolveWith)(u, c))
                                        }
                                    },
                                    d = o ? p : function() {
                                        try {
                                            p()
                                        } catch (e) {
                                            fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                                        }
                                    };
                                t ? d() : (fe.Deferred.getStackHook && (d.stackTrace = fe.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return fe.Deferred(function(e) {
                            n[0][3].add(i(0, e, fe.isFunction(o) ? o : s, e.notifyWith)), n[1][3].add(i(0, e, fe.isFunction(t) ? t : s)), n[2][3].add(i(0, e, fe.isFunction(r) ? r : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? fe.extend(e, o) : o
                    }
                },
                i = {};
            return fe.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                o[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                }, i[t[0] + "With"] = a.fireWith
            }), o.promise(i), t && t.call(i, i), i
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = ne.call(arguments),
                i = fe.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = arguments.length > 1 ? ne.call(arguments) : n, --t || i.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (u(e, i.done(a(n)).resolve, i.reject), "pending" === i.state() || fe.isFunction(o[n] && o[n].then))) return i.then();
            for (; n--;) u(o[n], a(n), i.reject);
            return i.promise()
        }
    });
    var Qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    fe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, fe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var _e = fe.Deferred();
    fe.fn.ready = function(e) {
        return _e.then(e).catch(function(e) {
            fe.readyException(e)
        }), this
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || _e.resolveWith(ee, [fe]))
        }
    }), fe.ready.then = _e.then, "complete" === ee.readyState || "loading" !== ee.readyState && !ee.documentElement.doScroll ? e.setTimeout(fe.ready) : (ee.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var Ae = function(e, t, n, r, o, i, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === fe.type(n)) {
                o = !0;
                for (s in n) Ae(e, t, s, n[s], !0, i, a)
            } else if (void 0 !== r && (o = !0, fe.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(fe(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
        },
        De = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[fe.camelCase(t)] = n;
            else
                for (r in t) o[fe.camelCase(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    fe.isArray(t) ? t = t.map(fe.camelCase) : (t = fe.camelCase(t), t = t in r ? [t] : t.match(Se) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || fe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !fe.isEmptyObject(t)
        }
    };
    var Me = new p,
        Ee = new p,
        Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $e = /[A-Z]/g;
    fe.extend({
        hasData: function(e) {
            return Ee.hasData(e) || Me.hasData(e)
        },
        data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        removeData: function(e, t) {
            Ee.remove(e, t)
        },
        _data: function(e, t, n) {
            return Me.access(e, t, n)
        },
        _removeData: function(e, t) {
            Me.remove(e, t)
        }
    }), fe.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ee.get(i), 1 === i.nodeType && !Me.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = fe.camelCase(r.slice(5)), f(i, r, o[r]));
                    Me.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Ee.set(this, e)
            }) : Ae(this, function(t) {
                var n;
                if (i && void 0 === t) {
                    if (void 0 !== (n = Ee.get(i, e))) return n;
                    if (void 0 !== (n = f(i, e))) return n
                } else this.each(function() {
                    Ee.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ee.remove(this, e)
            })
        }
    }), fe.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Me.get(e, t), n && (!r || fe.isArray(n) ? r = Me.access(e, t, fe.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = fe._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                fe.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Me.get(e, n) || Me.access(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    Me.remove(e, [t + "queue", n])
                })
            })
        }
    }), fe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = fe.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Me.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Le = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
        Be = ["Top", "Right", "Bottom", "Left"],
        Fe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display")
        },
        Ne = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        },
        He = {};
    fe.fn.extend({
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? fe(this).show() : fe(this).hide()
            })
        }
    });
    var Ze = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Re = /^$|\/(?:java|ecma)script/i,
        ze = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
    var We = /<|&#?\w+;/;
    ! function() {
        var e = ee.createDocumentFragment().appendChild(ee.createElement("div")),
            t = ee.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var qe = ee.documentElement,
        Xe = /^key/,
        Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, l, u, c, p, d, f, h, m, y = Me.get(e);
            if (y)
                for (n.handler && (i = n, n = i.handler, o = i.selector), o && fe.find.matchesSelector(qe, o), n.guid || (n.guid = fe.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                        return void 0 !== fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(Se) || [""]).length; u--;) s = Ke.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f && (p = fe.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = fe.event.special[f] || {}, c = fe.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && fe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(f, a)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), fe.event.global[f] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, p, d, f, h, m, y = Me.hasData(e) && Me.get(e);
            if (y && (l = y.events)) {
                for (u = (t = (t || "").match(Se) || [""]).length; u--;)
                    if (s = Ke.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (p = fe.event.special[f] || {}, d = l[f = (r ? p.delegateType : p.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                        a && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, y.handle) || fe.removeEvent(e, f, y.handle), delete l[f])
                    } else
                        for (f in l) fe.event.remove(e, f + t[u], n, r, !0);
                fe.isEmptyObject(l) && Me.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = fe.event.fix(e),
                l = new Array(arguments.length),
                u = (Me.get(this, "events") || {})[s.type] || [],
                c = fe.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = fe.event.handlers.call(this, s, u), t = 0;
                    (o = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((fe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (i = [], a = {}, n = 0; n < l; n++) r = t[n], o = r.selector + " ", void 0 === a[o] && (a[o] = r.needsContext ? fe(o, this).index(u) > -1 : fe.find(o, this, null, [u]).length), a[o] && i.push(r);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    } return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(fe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: fe.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[fe.expando] ? e : new fe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && fe.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, fe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ue.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, fe.event.addProp), fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === r || fe.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), fe.fn.extend({
        on: function(e, t, n, r) {
            return P(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return P(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each(function() {
                fe.event.remove(this, e, n, t)
            })
        }
    });
    var Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Je = /<script|<style|<link/i,
        et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tt = /^true\/(.*)/,
        nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ge, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0),
                l = fe.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (a = v(s), i = v(e), r = 0, o = i.length; r < o; r++) S(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || v(e), a = a || v(s), r = 0, o = i.length; r < o; r++) C(i[r], a[r]);
                else C(e, s);
            return (a = v(s, "script")).length > 0 && g(a, !l && v(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, o = fe.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (De(n)) {
                    if (t = n[Me.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? fe.event.remove(n, r) : fe.removeEvent(n, r, t.handle);
                        n[Me.expando] = void 0
                    }
                    n[Ee.expando] && (n[Ee.expando] = void 0)
                }
        }
    }), fe.fn.extend({
        detach: function(e) {
            return _(this, e, !0)
        },
        remove: function(e) {
            return _(this, e)
        },
        text: function(e) {
            return Ae(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Q(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || j(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Q(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = j(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Q(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Q(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Je.test(e) && !ze[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (fe.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Q(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, r = [], o = fe(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), fe(o[a])[t](n), oe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var rt = /^margin/,
        ot = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
        it = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", qe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, i = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, qe.removeChild(a), s = null
            }
        }
        var n, r, o, i, a = ee.createElement("div"),
            s = ee.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), fe.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), r
            },
            pixelMarginRight: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), i
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/,
        st = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ut = ["Webkit", "Moz", "ms"],
        ct = ee.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = A(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = fe.camelCase(t),
                    l = e.style;
                return t = fe.cssProps[s] || (fe.cssProps[s] = M(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t] : ("string" === (i = typeof n) && (o = Le.exec(n)) && o[1] && (n = h(e, t, o), i = "number"), void(null != n && n === n && ("number" === i && (n += o && o[3] || (fe.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = fe.camelCase(t);
            return t = fe.cssProps[s] || (fe.cssProps[s] = M(s) || s), (a = fe.cssHooks[t] || fe.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = A(e, t, r)), "normal" === o && t in lt && (o = lt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), fe.each(["height", "width"], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !at.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, r) : Ne(e, st, function() {
                    return $(e, t, r)
                })
            },
            set: function(e, n, r) {
                var o, i = r && it(e),
                    a = r && O(e, t, r, "border-box" === fe.css(e, "boxSizing", !1, i), i);
                return a && (o = Le.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = fe.css(e, t)), E(0, n, a)
            }
        }
    }), fe.cssHooks.marginLeft = D(pe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Ne(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + Be[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, rt.test(e) || (fe.cssHooks[e + t].set = E)
    }), fe.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (fe.isArray(t)) {
                    for (r = it(e), o = t.length; a < o; a++) i[t[a]] = fe.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), fe.Tween = I, I.prototype = {
        constructor: I,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, fe.fx = I.prototype.init, fe.fx.step = {};
    var pt, dt, ft = /^(?:toggle|show|hide)$/,
        ht = /queueHooks$/;
    fe.Animation = fe.extend(Z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Le.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Se);
                for (var n, r = 0, o = e.length; r < o; r++) n = e[r], Z.tweeners[n] = Z.tweeners[n] || [], Z.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, o, i, a, s, l, u, c, p = "width" in t || "height" in t,
                    d = this,
                    f = {},
                    h = e.style,
                    m = e.nodeType && Fe(e),
                    v = Me.get(e, "fxshow");
                n.queue || (null == (a = fe._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, fe.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (o = t[r], ft.test(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !v || void 0 === v[r]) continue;
                            m = !0
                        }
                        f[r] = v && v[r] || fe.style(e, r)
                    } if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(f)) {
                    p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = v && v.display) && (u = Me.get(e, "display")), "none" === (c = fe.css(e, "display")) && (u ? c = u : (y([e], !0), u = e.style.display || u, c = fe.css(e, "display"), y([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === fe.css(e, "float") && (l || (d.done(function() {
                        h.display = u
                    }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1;
                    for (r in f) l || (v ? "hidden" in v && (m = v.hidden) : v = Me.access(e, "fxshow", {
                        display: u
                    }), i && (v.hidden = !m), m && y([e], !0), d.done(function() {
                        m || y([e]), Me.remove(e, "fxshow");
                        for (r in f) fe.style(e, r, f[r])
                    })), l = N(m ? v[r] : 0, r, d), r in v || (v[r] = l.start, m && (l.end = l.start, l.start = 0))
                }
            }],
            prefilter: function(e, t) {
                t ? Z.prefilters.unshift(e) : Z.prefilters.push(e)
            }
        }), fe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? fe.extend({}, e) : {
                complete: n || !n && t || fe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !fe.isFunction(t) && t
            };
            return fe.fx.off || ee.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in fe.fx.speeds ? r.duration = fe.fx.speeds[r.duration] : r.duration = fe.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                fe.isFunction(r.old) && r.old.call(this), r.queue && fe.dequeue(this, r.queue)
            }, r
        }, fe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Fe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = fe.isEmptyObject(e),
                    i = fe.speed(t, n, r),
                    a = function() {
                        var t = Z(this, fe.extend({}, e), i);
                        (o || Me.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = fe.timers,
                        a = Me.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && ht.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    !t && n || fe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Me.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = fe.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, fe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), fe.each(["toggle", "show", "hide"], function(e, t) {
            var n = fe.fn[t];
            fe.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, o)
            }
        }), fe.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            fe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), fe.timers = [], fe.fx.tick = function() {
            var e, t = 0,
                n = fe.timers;
            for (pt = fe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || fe.fx.stop(), pt = void 0
        }, fe.fx.timer = function(e) {
            fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
        }, fe.fx.interval = 13, fe.fx.start = function() {
            dt || (dt = e.requestAnimationFrame ? e.requestAnimationFrame(L) : e.setInterval(fe.fx.tick, fe.fx.interval))
        }, fe.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(dt) : e.clearInterval(dt), dt = null
        }, fe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fe.fn.delay = function(t, n) {
            return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var o = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = ee.createElement("input"),
                t = ee.createElement("select").appendChild(ee.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = ee.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var mt, yt = fe.expr.attrHandle;
    fe.fn.extend({
        attr: function(e, t) {
            return Ae(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? fe.prop(e, t, n) : (1 === i && fe.isXMLDoc(e) || (o = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = fe.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                o = t && t.match(Se);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? fe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || fe.find.attr;
        yt[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = yt[a], yt[a] = o, o = null != n(e, t, r) ? a : null, yt[a] = i), o
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return Ae(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[fe.propFix[e] || e]
            })
        }
    }), fe.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, o = fe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pe.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }), fe.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).addClass(e.call(this, t, R(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Se) || []; n = this[l++];)
                    if (o = R(n), r = 1 === n.nodeType && " " + V(o) + " ") {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = V(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).removeClass(e.call(this, t, R(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Se) || []; n = this[l++];)
                    if (o = R(n), r = 1 === n.nodeType && " " + V(o) + " ") {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                        o !== (s = V(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, R(this), t), t)
            }) : this.each(function() {
                var t, r, o, i;
                if ("string" === n)
                    for (r = 0, o = fe(this), i = e.match(Se) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = R(this)) && Me.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Me.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + V(R(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = fe.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, fe(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : fe.isArray(o) && (o = fe.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = fe.valHooks[o.type] || fe.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : V(fe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        i = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? i + 1 : o.length;
                    for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = fe(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = fe.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = fe.inArray(fe.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
            }
        }, pe.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt = /^(?:focusinfocus|focusoutblur)$/;
    fe.extend(fe.event, {
        trigger: function(t, n, r, o) {
            var i, a, s, l, u, c, p, d = [r || ee],
                f = le.call(t, "type") ? t.type : t,
                h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || ee, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : fe.makeArray(n, [t]), p = fe.event.special[f] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!o && !p.noBubble && !fe.isWindow(r)) {
                    for (l = p.delegateType || f, wt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (r.ownerDocument || ee) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0;
                    (a = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? l : p.bindType || f, (c = (Me.get(a, "events") || {})[t.type] && Me.get(a, "handle")) && c.apply(a, n), (c = u && a[u]) && c.apply && De(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), n) || !De(r) || u && fe.isFunction(r[f]) && !fe.isWindow(r) && ((s = r[u]) && (r[u] = null), fe.event.triggered = f, r[f](), fe.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(r, null, t)
        }
    }), fe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return fe.event.trigger(e, t, n, !0)
        }
    }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = Me.access(r, t);
                o || r.addEventListener(e, n, !0), Me.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = Me.access(r, t) - 1;
                o ? Me.access(r, t, o) : (r.removeEventListener(e, n, !0), Me.remove(r, t))
            }
        }
    });
    var xt = e.location,
        Tt = fe.now(),
        Pt = /\?/;
    fe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
    };
    var jt = /\[\]$/,
        kt = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                var n = fe.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, o);
        return r.join("&")
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && Ct.test(this.nodeName) && !Yt.test(e) && (this.checked || !Ze.test(e))
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var St = /%20/g,
        Qt = /#.*$/,
        _t = /([?&])_=[^&]*/,
        At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Et = /^\/\//,
        Ot = {},
        $t = {},
        It = "*/".concat("*"),
        Lt = ee.createElement("a");
    Lt.href = xt.href, fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: Dt.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? X(X(e, fe.ajaxSettings), t) : X(fe.ajaxSettings, e)
        },
        ajaxPrefilter: W(Ot),
        ajaxTransport: W($t),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u, d, f, w, x, T = n;
                c || (c = !0, l && e.clearTimeout(l), o = void 0, a = s || "", P.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, r && (w = U(h, P, r)), w = K(h, w, P, u), u ? (h.ifModified && ((x = P.getResponseHeader("Last-Modified")) && (fe.lastModified[i] = x), (x = P.getResponseHeader("etag")) && (fe.etag[i] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, d = w.data, f = w.error, u = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), P.status = t, P.statusText = (n || T) + "", u ? v.resolveWith(m, [d, T, P]) : v.rejectWith(m, [P, T, f]), P.statusCode(b), b = void 0, p && y.trigger(u ? "ajaxSuccess" : "ajaxError", [P, h, u ? d : f]), g.fireWith(m, [P, T]), p && (y.trigger("ajaxComplete", [P, h]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, i, a, s, l, u, c, p, d, f, h = fe.ajaxSetup({}, n),
                m = h.context || h,
                y = h.context && (m.nodeType || m.jquery) ? fe(m) : fe.event,
                v = fe.Deferred(),
                g = fe.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                x = {},
                T = "canceled",
                P = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = At.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) P.always(e[P.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return o && o.abort(t), r(0, t), this
                    }
                };
            if (v.promise(P), h.url = ((t || h.url || xt.href) + "").replace(Et, xt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Se) || [""], null == h.crossDomain) {
                u = ee.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Lt.protocol + "//" + Lt.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = fe.param(h.data, h.traditional)), q(Ot, h, n, P), c) return P;
            (p = fe.event && h.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), i = h.url.replace(Qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(St, "+")) : (f = h.url.slice(i.length), h.data && (i += (Pt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(_t, "$1"), f = (Pt.test(i) ? "&" : "?") + "_=" + Tt++ + f), h.url = i + f), h.ifModified && (fe.lastModified[i] && P.setRequestHeader("If-Modified-Since", fe.lastModified[i]), fe.etag[i] && P.setRequestHeader("If-None-Match", fe.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && P.setRequestHeader("Content-Type", h.contentType), P.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) P.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, P, h) || c)) return P.abort();
            if (T = "abort", g.add(h.complete), P.done(h.success), P.fail(h.error), o = q($t, h, n, P)) {
                if (P.readyState = 1, p && y.trigger("ajaxSend", [P, h]), c) return P;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    P.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, o.send(w, r)
                } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return P
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }), fe.each(["get", "post"], function(e, t) {
        fe[t] = function(e, n, r, o) {
            return fe.isFunction(n) && (o = o || r, r = n, n = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, fe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (fe.isFunction(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = fe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                fe(this).replaceWith(this.childNodes)
            }), this
        }
    }), fe.expr.pseudos.hidden = function(e) {
        return !fe.expr.pseudos.visible(e)
    }, fe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, fe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        Ft = fe.ajaxSettings.xhr();
    pe.cors = !!Ft && "withCredentials" in Ft, pe.ajax = Ft = !!Ft, fe.ajaxTransport(function(t) {
        var n, r;
        if (pe.cors || Ft && !t.crossDomain) return {
            send: function(o, i) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (a in o) s.setRequestHeader(a, o[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), fe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = fe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), ee.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Nt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || fe.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ht, "$1" + o) : !1 !== t.jsonp && (t.url += (Pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || fe.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === i ? fe(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Nt.push(o)), a && fe.isFunction(i) && i(a[0]), a = i = void 0
        }), "script"
    }), pe.createHTMLDocument = function() {
        var e = ee.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), fe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, o, i;
        return t || (pe.createHTMLDocument ? (t = ee.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ee.location.href, t.head.appendChild(r)) : t = ee), o = Te.exec(e), i = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, i), i && i.length && fe(i).remove(), fe.merge([], o.childNodes))
    }, fe.fn.load = function(e, t, n) {
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = V(e.slice(s)), e = e.slice(0, s)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && fe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), fe.expr.pseudos.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem
        }).length
    }, fe.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, u = fe.css(e, "position"),
                c = fe(e),
                p = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), i = fe.css(e, "top"), l = fe.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1 ? (r = c.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : c.css(p)
        }
    }, fe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                fe.offset.setOffset(this, e, t)
            });
            var t, n, r, o, i = this[0];
            return i ? i.getClientRects().length ? (r = i.getBoundingClientRect()).width || r.height ? (o = i.ownerDocument, n = G(o), t = o.documentElement, {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === fe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + fe.css(e[0], "borderTopWidth", !0),
                    left: r.left + fe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - fe.css(n, "marginTop", !0),
                    left: t.left - r.left - fe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) e = e.offsetParent;
                return e || qe
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        fe.fn[e] = function(r) {
            return Ae(this, function(e, r, o) {
                var i = G(e);
                return void 0 === o ? i ? i[t] : e[r] : void(i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
            }, e, r, arguments.length)
        }
    }), fe.each(["top", "left"], function(e, t) {
        fe.cssHooks[t] = D(pe.pixelPosition, function(e, n) {
            if (n) return n = A(e, t), ot.test(n) ? fe(e).position()[t] + "px" : n
        })
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            fe.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === i ? "margin" : "border");
                return Ae(this, function(t, n, o) {
                    var i;
                    return fe.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? fe.css(t, n, s) : fe.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }), fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var Zt = e.jQuery,
        Vt = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = Vt), t && e.jQuery === fe && (e.jQuery = Zt), fe
    }, t || (e.jQuery = e.$ = fe), fe
});
var decorative_svg_2_uncolored = '<svg id="decorative-svg-2-uncolored" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.16 330.93"><path d="M-1620.86,937.52a68.21,68.21,0,0,0-68.2,68.2,68.21,68.21,0,0,0,68.2,68.2,68.21,68.21,0,0,0,68.2-68.2,68.21,68.21,0,0,0-68.2-68.2h0Zm0,12.87a55.34,55.34,0,0,1,55.33,55.33,55.34,55.34,0,0,1-55.33,55.33,55.34,55.34,0,0,1-55.33-55.33A55.34,55.34,0,0,1-1620.86,950.39Z" transform="translate(1814.96 -801.71)"/><path d="M-1416.7,902.5a41.91,41.91,0,0,0-41.9,41.9,41.91,41.91,0,0,0,41.9,41.9,41.91,41.91,0,0,0,41.9-41.9,41.91,41.91,0,0,0-41.9-41.9h0Zm0,28.27a13.64,13.64,0,0,1,13.64,13.64A13.64,13.64,0,0,1-1416.7,958a13.64,13.64,0,0,1-13.64-13.64A13.64,13.64,0,0,1-1416.7,930.77Z" transform="translate(1814.96 -801.71)"/><circle cx="300.18" cy="308.73" r="22.19"/><circle cx="179.7" cy="96.38" r="15.69"/><circle cx="383.31" cy="181.75" r="6.95"/><circle cx="366.66" cy="98.81" r="6.95"/><circle cx="285.99" cy="203.11" r="6.95"/><polygon points="39.8 0 42.43 1.52 45.05 3.03 45.05 6.06 45.05 9.1 42.43 10.61 39.8 12.13 37.17 10.61 34.55 9.1 34.55 6.06 34.55 3.03 37.17 1.52 39.8 0"/><path d="M-1749.43,846.91h7l-7,7v-7h0Zm66,58.94v7h-7l7-7h0Zm0-21.43-28.45,28.45h10.72l17.74-17.74V884.42h0Zm0-21.43-49.89,49.89h10.72l39.17-39.17V863h0Zm-5.36-16.08-60.6,60.6v5.36h5.36l60.6-60.6v-5.36h-5.36Zm-21.43,0-39.17,39.17V896.8l49.89-49.89h-10.72Zm-21.43,0-17.74,17.74v10.72l28.45-28.45h-10.72Z" transform="translate(1814.96 -801.71)"/><path d="M-1600,1023.76h2.32l-2.32,2.32v-2.32h0Zm21.82,19.5v2.32h-2.32l2.32-2.32h0Zm0-7.09-9.41,9.41h3.55l5.87-5.87v-3.55h0Zm0-7.09-16.5,16.5h3.55l13-13v-3.55h0Zm-1.77-5.32-20,20.05v1.77h1.77l20-20.05v-1.77h-1.77Zm-7.09,0-13,13v3.55l16.5-16.5H-1587Zm-7.09,0-5.87,5.87v3.55l9.41-9.41h-3.55Z" transform="translate(1814.96 -801.71)"/><polygon points="2.63 188.7 3.94 189.46 5.25 190.22 5.25 191.73 5.25 193.25 3.94 194 2.63 194.76 1.31 194 0 193.25 0 191.73 0 190.22 1.31 189.46 2.63 188.7"/><path class="cls-3" d="M-1428.69,898.55h2.34l-2.34,2.34v-2.34h0Zm22,19.67v2.34H-1409l2.34-2.34h0Zm0-7.15-9.5,9.5h3.58l5.92-5.92v-3.58h0Zm0-7.15-16.65,16.65h3.58l13.07-13.07v-3.58h0Zm-1.79-5.37-20.23,20.23v1.79h1.79l20.23-20.23v-1.79h-1.79Zm-7.15,0-13.07,13.07v3.58l16.65-16.65h-3.58Zm-7.15,0-5.92,5.92V908l9.5-9.5h-3.58Z" transform="translate(1814.96 -801.71)"/><path class="cls-4" d="M-1771.28,1051.28a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm39.11,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14A2.11,2.11,0,0,1-1771.28,1066.51ZM-1724.57,1051.28a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm39.11,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14A2.11,2.11,0,0,1-1724.57,1066.51ZM-1679.42,1051.28a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm39.11,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14A2.11,2.11,0,0,1-1679.42,1066.51Z" transform="translate(1814.96 -801.71)"/></svg>',
    decorative_svg_2 = '<svg id="decorative-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.16 330.93"><path d="M-1620.86,937.52a68.21,68.21,0,0,0-68.2,68.2,68.21,68.21,0,0,0,68.2,68.2,68.21,68.21,0,0,0,68.2-68.2,68.21,68.21,0,0,0-68.2-68.2h0Zm0,12.87a55.34,55.34,0,0,1,55.33,55.33,55.34,55.34,0,0,1-55.33,55.33,55.34,55.34,0,0,1-55.33-55.33A55.34,55.34,0,0,1-1620.86,950.39Z" transform="translate(1814.96 -801.71)"/><path d="M-1416.7,902.5a41.91,41.91,0,0,0-41.9,41.9,41.91,41.91,0,0,0,41.9,41.9,41.91,41.91,0,0,0,41.9-41.9,41.91,41.91,0,0,0-41.9-41.9h0Zm0,28.27a13.64,13.64,0,0,1,13.64,13.64A13.64,13.64,0,0,1-1416.7,958a13.64,13.64,0,0,1-13.64-13.64A13.64,13.64,0,0,1-1416.7,930.77Z" transform="translate(1814.96 -801.71)"/><circle cx="300.18" cy="308.73" r="22.19"/><circle cx="179.7" cy="96.38" r="15.69"/><circle cx="383.31" cy="181.75" r="6.95"/><circle cx="366.66" cy="98.81" r="6.95"/><circle cx="285.99" cy="203.11" r="6.95"/><polygon points="39.8 0 42.43 1.52 45.05 3.03 45.05 6.06 45.05 9.1 42.43 10.61 39.8 12.13 37.17 10.61 34.55 9.1 34.55 6.06 34.55 3.03 37.17 1.52 39.8 0"/><path d="M-1749.43,846.91h7l-7,7v-7h0Zm66,58.94v7h-7l7-7h0Zm0-21.43-28.45,28.45h10.72l17.74-17.74V884.42h0Zm0-21.43-49.89,49.89h10.72l39.17-39.17V863h0Zm-5.36-16.08-60.6,60.6v5.36h5.36l60.6-60.6v-5.36h-5.36Zm-21.43,0-39.17,39.17V896.8l49.89-49.89h-10.72Zm-21.43,0-17.74,17.74v10.72l28.45-28.45h-10.72Z" transform="translate(1814.96 -801.71)"/><path d="M-1600,1023.76h2.32l-2.32,2.32v-2.32h0Zm21.82,19.5v2.32h-2.32l2.32-2.32h0Zm0-7.09-9.41,9.41h3.55l5.87-5.87v-3.55h0Zm0-7.09-16.5,16.5h3.55l13-13v-3.55h0Zm-1.77-5.32-20,20.05v1.77h1.77l20-20.05v-1.77h-1.77Zm-7.09,0-13,13v3.55l16.5-16.5H-1587Zm-7.09,0-5.87,5.87v3.55l9.41-9.41h-3.55Z" transform="translate(1814.96 -801.71)"/><polygon points="2.63 188.7 3.94 189.46 5.25 190.22 5.25 191.73 5.25 193.25 3.94 194 2.63 194.76 1.31 194 0 193.25 0 191.73 0 190.22 1.31 189.46 2.63 188.7"/><path class="cls-3" d="M-1428.69,898.55h2.34l-2.34,2.34v-2.34h0Zm22,19.67v2.34H-1409l2.34-2.34h0Zm0-7.15-9.5,9.5h3.58l5.92-5.92v-3.58h0Zm0-7.15-16.65,16.65h3.58l13.07-13.07v-3.58h0Zm-1.79-5.37-20.23,20.23v1.79h1.79l20.23-20.23v-1.79h-1.79Zm-7.15,0-13.07,13.07v3.58l16.65-16.65h-3.58Zm-7.15,0-5.92,5.92V908l9.5-9.5h-3.58Z" transform="translate(1814.96 -801.71)"/><path class="cls-4" d="M-1771.28,1051.28a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm39.11,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14A2.11,2.11,0,0,1-1771.28,1066.51ZM-1724.57,1051.28a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm39.11,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14A2.11,2.11,0,0,1-1724.57,1066.51ZM-1679.42,1051.28a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm39.11,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm0,15.23a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-7.53-7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14,2.11,2.11,0,0,1,2.07-2.14h0Zm-8,7.61a2.11,2.11,0,0,1,2.07,2.14,2.11,2.11,0,0,1-2.07,2.14,2.11,2.11,0,0,1-2.07-2.14A2.11,2.11,0,0,1-1679.42,1066.51Z" transform="translate(1814.96 -801.71)"/></svg>',
    decorative_svg_for_slider = '<svg id="decorative-svg-for-slider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.24 165.51"><path d="M-1448.27,630.07A28.24,28.24,0,0,1-1420,601.84a28.24,28.24,0,0,1,28.24,28.24A28.24,28.24,0,0,1-1420,658.31a28.24,28.24,0,0,1-28.24-28.24h0Zm19,0a9.19,9.19,0,0,0,9.19,9.19,9.19,9.19,0,0,0,9.19-9.19,9.19,9.19,0,0,0-9.19-9.19A9.19,9.19,0,0,0-1429.23,630.07Z" transform="translate(1671.04 -592.84)"/><circle cx="238.4" cy="65.47" r="6.95"/><circle cx="222.41" cy="4.86" r="4.86"/><path d="M-1429,599.84v1.7l1.7-1.7h-1.7Zm14.26,16h1.7v-1.7l-1.7,1.7h0Zm-5.18,0,6.88-6.88v2.59l-4.29,4.29h-2.59Zm-5.18,0,12.07-12.07v2.59l-9.47,9.47h-2.59Zm-3.89-1.3,14.66-14.66h1.3v1.3l-14.66,14.66h-1.3v-1.3h0Zm0-5.18,9.47-9.47h2.59L-1429,611.91v-2.59h0Zm0-5.18,4.29-4.29h2.59l-6.88,6.88v-2.59Z" transform="translate(1671.04 -592.84)"/><path d="M-1650.78,638v3.51l3.51-3.51h-3.51Zm29.51,33h3.51v-3.51l-3.51,3.51h0Zm-10.73,0,14.24-14.24v5.37l-8.88,8.88H-1632Zm-10.73,0,25-25v5.36L-1637.36,671h-5.37Zm-8-2.68,30.34-30.34h2.68v2.68L-1648.09,671h-2.68v-2.68h0Zm0-10.73,19.61-19.61h5.37l-25,25v-5.37h0Zm0-10.73,8.88-8.88h5.37l-14.24,14.24v-5.37Z" transform="translate(1671.04 -592.84)"/><circle cx="77.67" cy="82.37" r="8.29"/><circle cx="117.78" cy="160.48" r="5.02"/><polygon points="0 4.77 0.76 6.08 1.52 7.39 3.03 7.39 4.55 7.39 5.3 6.08 6.06 4.77 5.3 3.46 4.55 2.14 3.03 2.14 1.52 2.14 0.76 3.46 0 4.77"/></svg>',
    portfolio_decoration_1 = '<svg id="portfolio_decoration_1" width="299.17" height="307.17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.17 307.17" data-scroller=""><polygon points="28.55 241.23 14.28 249.48 0 257.72 0 274.2 0 290.69 14.28 298.93 28.55 307.17 42.83 298.93 57.1 290.69 57.1 274.2 57.1 257.72 42.83 249.48 28.55 241.23"/><polygon points="84.74 184.57 83.97 194.15 83.19 203.73 91.1 209.19 99 214.65 107.69 210.53 116.37 206.41 117.14 196.83 117.92 187.25 110.01 181.8 102.1 176.34 93.42 180.46 84.74 184.57"/><path d="M-615.85,251A75.89,75.89,0,0,1-540,326.89a75.89,75.89,0,0,1-75.88,75.88,75.89,75.89,0,0,1-75.89-75.88A75.89,75.89,0,0,1-615.85,251h0Zm0,51.19a24.7,24.7,0,0,0-24.7,24.7,24.7,24.7,0,0,0,24.7,24.7,24.7,24.7,0,0,0,24.7-24.7A24.7,24.7,0,0,0-615.85,302.19Z" transform="translate(839.14 -251)"/></svg>',
    interjection_decoration_wrap = '<svg xmlns="http://www.w3.org/2000/svg" height="232" viewBox="0 0 284.33 197.98" data-scroller><path d="M-1368,626.81a68.21,68.21,0,0,1,68.2-68.2,68.21,68.21,0,0,1,68.2,68.2,68.21,68.21,0,0,1-68.2,68.2,68.21,68.21,0,0,1-68.2-68.2h0Zm12.87,0a55.34,55.34,0,0,0,55.33,55.33,55.34,55.34,0,0,0,55.33-55.33,55.34,55.34,0,0,0-55.33-55.33A55.34,55.34,0,0,0-1355.14,626.81Z" transform="translate(1445.8 -497.03)"/><path class="cls-4" d="M-1443.73,578.12a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm39.11-7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm0-15.23a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-7.53,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm0-15.23a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-7.53,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8-7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14A2.11,2.11,0,0,0-1443.73,562.89Z" transform="translate(1445.8 -497.03)"/><path class="cls-4" d="M-1397,578.12A2.11,2.11,0,0,0-1395,576a2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm39.11-7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14A2.11,2.11,0,0,0-1368,576a2.11,2.11,0,0,0,2.07,2.14h0Zm0-15.23a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-7.53,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm0-15.23a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-7.53,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8-7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14A2.11,2.11,0,0,0-1397,562.89Z" transform="translate(1445.8 -497.03)"/><path class="cls-4" d="M-1351.88,578.12a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm39.11-7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm0-15.23a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-7.53,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm0-15.23a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-7.53,7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14,2.11,2.11,0,0,0,2.07,2.14h0Zm-8-7.61a2.11,2.11,0,0,0,2.07-2.14,2.11,2.11,0,0,0-2.07-2.14,2.11,2.11,0,0,0-2.07,2.14A2.11,2.11,0,0,0-1351.88,562.89Z" transform="translate(1445.8 -497.03)"/><path d="M-1257,585.9h-2.32l2.32,2.32V585.9h0Zm-21.82,19.5v2.32h2.32l-2.32-2.32h0Zm0-7.09,9.41,9.41H-1273l-5.87-5.87v-3.55h0Zm0-7.09,16.5,16.5h-3.55l-13-13v-3.55h0Zm1.77-5.32,20.05,20v1.77h-1.77l-20-20.05V585.9h1.77Zm7.09,0,13,13v3.55l-16.5-16.5h3.55Zm7.09,0,5.87,5.87v3.55l-9.41-9.41h3.55Z" transform="translate(1445.8 -497.03)"/><circle cx="245.99" cy="129.78" r="6.95"/><circle cx="268.64" cy="15.69" r="15.69"/></svg>',
    about_us_decoration_wrap = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.21 292.94" data-scroller><path d="M-1624.53,941.19a68.21,68.21,0,0,0,68.2,68.2,68.21,68.21,0,0,0,68.2-68.2,68.21,68.21,0,0,0-68.2-68.2,68.21,68.21,0,0,0-68.2,68.2h0Zm68.2-55.33A55.34,55.34,0,0,1-1501,941.19a55.34,55.34,0,0,1-55.33,55.33,55.34,55.34,0,0,1-55.33-55.33A55.34,55.34,0,0,1-1556.33,885.86Z" transform="translate(1760.34 -747.1)"/><circle cx="96.38" cy="179.7" r="15.69"/><circle cx="203.11" cy="285.99" r="6.95"/><polygon points="0 39.8 1.52 42.43 3.03 45.05 6.06 45.05 9.1 45.05 10.61 42.43 12.13 39.8 10.61 37.17 9.1 34.55 6.06 34.55 3.03 34.55 1.52 37.17 0 39.8"/><path d="M-1715.14,812.62h7l-7,7v-7h0Zm58.94,66,7-7v7h-7Zm-21.43,0h10.72l17.74-17.74V850.13l-28.45,28.45h0Zm-21.43,0h10.72l39.17-39.17V828.7l-49.89,49.89h0Zm-16.08-5.36v5.36h5.36l60.6-60.6v-5.36h-5.36l-60.6,60.6h0Zm0-21.43v10.72l49.89-49.89H-1676l-39.17,39.17h0Zm0-10.72,28.45-28.45h-10.72l-17.74,17.74v10.72Z" transform="translate(1760.34 -787.1)"/><path d="M-1538.29,962.08h2.32l-2.32,2.32v-2.32h0Zm19.5,21.82,2.32-2.32v2.32h-2.32Zm-7.09,0h3.55l5.87-5.87v-3.55l-9.41,9.41h0Zm-7.09,0h3.55l13-13V967.4l-16.5,16.5h0Zm-5.32-1.77v1.77h1.77l20.05-20v-1.77h-1.77l-20.05,20.05h0Zm0-7.09v3.55l16.5-16.5h-3.55l-13,13h0Zm0-3.55,9.41-9.41h-3.55l-5.87,5.87v3.55Z" transform="translate(1760.34 -747.1)"/><polygon points="188.7 2.63 189.46 3.94 190.22 5.25 191.73 5.25 193.25 5.25 194 3.94 194.76 2.63 194 1.31 193.25 0 191.73 0 190.22 0 189.46 1.31 188.7 2.63"/><path class="cls-3" d="M-1510.77,790.78a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm7.61,39.11a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07A2.11,2.11,0,0,1-1501,832a2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-8a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm15.23,0a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-7.53a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-8a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm15.23,0a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-7.53a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm9.75-10.09a2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07A2.11,2.11,0,0,1-1493.41,788.7Z" transform="translate(1760.34 -747.1)"/><path class="cls-3" d="M-1510.77,837.48a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm7.61,39.11a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-8a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm15.23,0a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-7.53A2.11,2.11,0,0,1-1501,859a2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-8a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm15.23,0a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-7.53a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm9.75-10.09a2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07A2.11,2.11,0,0,1-1493.41,835.41Z" transform="translate(1760.34 -747.1)"/><path class="cls-3" d="M-1510.77,882.63a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm7.61,39.11a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-8a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm15.23,0a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-7.53a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-8a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm15.23,0a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm-7.61-7.53a2.11,2.11,0,0,1,2.14-2.07,2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07h0Zm9.75-10.09a2.11,2.11,0,0,1,2.14,2.07,2.11,2.11,0,0,1-2.14,2.07,2.11,2.11,0,0,1-2.14-2.07A2.11,2.11,0,0,1-1493.41,880.56Z" transform="translate(1760.34 -747.1)"/></svg><svg height="187" width="187" data-scroller viewBox="0 0 87 87"><path d="M-1715.14,812.62h7l-7,7v-7h0Zm58.94,66,7-7v7h-7Zm-21.43,0h10.72l17.74-17.74V850.13l-28.45,28.45h0Zm-21.43,0h10.72l39.17-39.17V828.7l-49.89,49.89h0Zm-16.08-5.36v5.36h5.36l60.6-60.6v-5.36h-5.36l-60.6,60.6h0Zm0-21.43v10.72l49.89-49.89H-1676l-39.17,39.17h0Zm0-10.72,28.45-28.45h-10.72l-17.74,17.74v10.72Z" transform="translate(1730 -800)"/></svg>',
    icons_sprite = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><svg viewBox="0 0 32 26" id="icon-bage"><circle class="agcls-1" cx="11" cy="9" r="4"/><path class="agcls-1" d="M17 22l-.98-6L13 15M5 22l.98-6L9 15M20 7h4M20 11h8M20 15h8M20 19h8M11 25h10"/><path class="agcls-1" d="M23 25h8V1H1v24h8"/></svg><svg viewBox="0 0 24 32" id="icon-blank"><path class="ahcls-1" d="M19.93 5H23v26H1V5h3.02"/><path class="ahcls-1" d="M17 7V3h-3a2 2 0 1 0-4 0H7v4h10zM9.99 13v14M13.99 11v16M17.99 14v13M5.99 20v7"/></svg><svg viewBox="0 0 69.75 117.77" id="icon-chevron"><path d="M66.57 51.21l-.12-.11-47.9-47.9A10.861 10.861 0 1 0 3.19 18.56l40.33 40.33L3.19 99.22a10.861 10.861 0 1 0 15.36 15.36l47.93-47.93.08-.08a10.81 10.81 0 0 0 3.16-7.13v-.16a10.81 10.81 0 0 0-3.15-8.07z"/></svg><svg viewBox="0 0 32.28 32" id="icon-command"><circle class="akcls-1" cx="12.13" cy="9" r="8"/><path class="akcls-1" d="M23.13 5a6 6 0 1 1 0 12M26.13 20.98l4 1.02 1 7h-5M17.99 21l4.11 1.33L23.13 31h-22l1.02-8.67L6.26 21"/></svg><svg viewBox="0 0 29.36 25.89" id="icon-console"><path d="M.49 0h28.87v25.89H0V0h.5zm27.88 1H.99v23.91h27.38V1z"/><path d="M.5 5.77h28.37v.99H.5z"/><circle cx="25.52" cy="3.6" r=".98"/><circle cx="21.31" cy="3.6" r=".98"/><path d="M10.42 12.3l-3.3 3.34 3.33 3.35-.7.7-3.68-3.7-.35-.35.35-.34 3.64-3.69.71.69zM19.65 11.61l3.65 3.69.34.34-.35.35-3.67 3.7-.71-.7 3.34-3.35-3.3-3.34.7-.69zM13.43 21.04l2.26-10.99.97.2-2.26 10.99-.97-.2z"/></svg><svg viewBox="0 0 29.36 25.89" id="icon-development"><path class="amcls-1" d="M.5 0h28.87v25.89H.01V0h.5zm27.88 1H1v23.91h27.38V1z"/><path class="amcls-1" d="M.5 5.77h28.37v.99H.5z"/><circle class="amcls-1" cx="25.52" cy="3.6" r=".98"/><circle class="amcls-1" cx="21.31" cy="3.6" r=".98"/><path class="amcls-1" d="M16.76 16.99l-.34-.11v-3.36h-3.6v3.4l-.33.12c-.19.07-.38.14-.56.23l-.11.05h-.1l-.32.16-.25-.25-2.13-2.13-2.55 2.55 2.16 2.16.25.25-.15.32c-.09.18-.16.36-.23.55V21.16l-.11.34H5.03v3.6h3.4l.12.33c.05.15.11.29.17.43H4.05v-5.35H7.7l.1-.24-2.26-2.26-.35-.35.35-.35 3.25-3.25.35-.35.35.35 2.23 2.23.23-.1v-3.7h5.58v3.65l.24.1 2.26-2.26.35-.35.35.35 3.25 3.25.35.35-.35.35-2.23 2.23V20.39h3.7v5.47h-4.67q.12-.27.21-.54l.11-.34h3.36v-3.6h-3.38l-.12-.33c-.05-.14-.1-.27-.15-.39-.06-.14-.12-.26-.18-.38l-.16-.32.25-.25 2.13-2.13-2.55-2.55-2.15 2.15-.25.25-.32-.15c-.18-.09-.36-.16-.55-.23H16.8zm-2.08 2a4.23 4.23 0 0 0-4.23 4.23 4.22 4.22 0 0 0 .91 2.62h1.41a3.27 3.27 0 0 1-.38-.33 3.23 3.23 0 0 1-1-2.29 3.25 3.25 0 0 1 3.24-3.24 3.25 3.25 0 0 1 3.24 3.24 3.23 3.23 0 0 1-1 2.29 3.26 3.26 0 0 1-.38.33h1.41a4.22 4.22 0 0 0 .91-2.62 4.23 4.23 0 0 0-4.23-4.23z"/></svg><svg viewBox="0 0 30.56 31.15" id="icon-draw-pen"><path class="aocls-1" d="M1.15 29.92l9-8.5"/><circle class="aocls-1" cx="12.15" cy="19.42" r="3"/><path class="aocls-1" d="M29.15 11.33l-2 2a7 7 0 1 1-9.9-9.9l2-2z"/><path class="aocls-1" d="M12.15 7.42l-9 5-2 17.5 19-3.5 3-8"/></svg><svg viewBox="0 0 32 32" id="icon-email"><path class="apcls-1" d="M31 7v24H1V7M4 26l6-10"/><path class="apcls-1" d="M28 13l-12 6-12-6M28 26l-6-10M27 11V1H5v10M8 5h7M8 9h14"/></svg><svg viewBox="0 0 24 32" id="icon-flag"><path class="aqcls-1" d="M1 0v32M5 4C12.33 7.2 15.67.8 23 4v16c-7.33-3.2-10.67 3.2-18 0"/></svg><svg viewBox="0 0 32 32" id="icon-graph-up"><path class="arcls-1" d="M32 31H0M1 32V0M8 30v-2M12 30v-2M16 30v-2M20 30v-2M24 30v-2M28 30v-2M4 25H2M4 21H2M4 17H2M4 13H2M4 9H2M4 5H2M8 22l6.01-8 5 4L28 9"/><path class="arcls-1" d="M28.01 17V9h-8"/></svg><svg viewBox="0 0 26 32" id="icon-guarantee"><path class="ascls-1" d="M1 22V9M25 22V9M1 22c0 2.22.21 3.16 2 4.2l9 4.8h2l9-4.8c1.79-1 2-2 2-4.2M20 17H6M20 21H6M13 13H6M26 6h-7a6 6 0 0 1-6-6 6 6 0 0 1-6 6H0"/></svg><svg viewBox="0 0 32 32.01" id="icon-headphones"><path class="atcls-1" d="M6 24a5 5 0 1 1 0-10v10zM26 14a5 5 0 0 1 0 10V14zM29 27a1.94 1.94 0 0 1-2 2M23 29h4"/><circle class="atcls-1" cx="20.53" cy="29.01" r="2"/><path class="atcls-1" d="M6 11a10 10 0 1 1 20 0"/></svg><svg viewBox="0 0 32 32" id="icon-math"><path class="aucls-1" d="M1 1h30v30H1zM10 14V6M14 10H6M26 10h-8M20 20h-2M25 24h-2M7 25l6-6M19 25l6-6M13 25l-6-6"/></svg><svg viewBox="0 0 20 32" id="icon-mobile-phone"><path class="avcls-1" d="M1 1h18v6H1zM19 9.95V31H1V9.95M9 27h2M8 4h4M1 23h18"/></svg><svg viewBox="0 0 32 24" id="icon-pay-card"><circle class="bacls-1" cx="301" cy="693" r="3" transform="rotate(-89.66 -181.479 497.357)"/><path class="bacls-1" d="M21.89 13.87a3 3 0 1 1 0 4.24M1 1h30v22H1zM4 7h24"/></svg><svg viewBox="0 0 23.56 45.37" id="icon-social-fb"><path class="bdcls-1" d="M15.3 45.38v-20.7h6.95l1-8.07h-8v-5.15c0-2.34.65-3.93 4-3.93h4.31V.32A57.15 57.15 0 0 0 17.34 0C11.18 0 6.97 3.76 6.97 10.66v5.95h-7v8.07h7v20.7h8.33z"/></svg><svg viewBox="0 0 71.32 45.39" id="icon-social-gp"><path class="becls-1" d="M22.69 19.46v7.78h12.87c-.52 3.34-3.89 9.79-12.87 9.79a14.33 14.33 0 0 1 0-28.66 12.77 12.77 0 0 1 9 3.5l6.16-5.93A21.75 21.75 0 0 0 22.65.01a22.695 22.695 0 1 0 0 45.39c13.1 0 21.79-9.21 21.79-22.17a20.87 20.87 0 0 0-.36-3.76H22.69zM71.32 19.45h-6.48v-6.48h-6.49v6.48h-6.48v6.48h6.48v6.49h6.49v-6.49h6.48v-6.48z"/></svg><svg viewBox="0 0 53.69 53.69" id="icon-social-in"><path class="bfcls-1" d="M26.85 4.83c7.17 0 8 0 10.85.16a14.86 14.86 0 0 1 5 .92 8.89 8.89 0 0 1 5.1 5.1 14.85 14.85 0 0 1 .92 5c.13 2.83.16 3.68.16 10.85s0 8-.16 10.85a14.85 14.85 0 0 1-.92 5 8.89 8.89 0 0 1-5.1 5.1 14.85 14.85 0 0 1-5 .92c-2.83.13-3.68.16-10.85.16s-8 0-10.85-.16a14.85 14.85 0 0 1-5-.92 8.89 8.89 0 0 1-5.1-5.1 14.86 14.86 0 0 1-.92-5c-.13-2.83-.16-3.68-.16-10.85s0-8 .16-10.85a14.85 14.85 0 0 1 .92-5 8.89 8.89 0 0 1 5.1-5.1 14.85 14.85 0 0 1 5-.92c2.83-.13 3.68-.16 10.85-.16m0-4.84c-7.29 0-8.21 0-11.07.16A19.7 19.7 0 0 0 9.26 1.4a13.73 13.73 0 0 0-7.85 7.85 19.7 19.7 0 0 0-1.25 6.52C.03 18.63 0 19.55 0 26.84s0 8.21.16 11.07a19.7 19.7 0 0 0 1.25 6.52 13.73 13.73 0 0 0 7.85 7.85 19.7 19.7 0 0 0 6.52 1.25c2.86.13 3.78.16 11.07.16s8.21 0 11.07-.16a19.7 19.7 0 0 0 6.52-1.25 13.73 13.73 0 0 0 7.85-7.85 19.7 19.7 0 0 0 1.25-6.52c.13-2.86.16-3.78.16-11.07s0-8.21-.16-11.07a19.7 19.7 0 0 0-1.25-6.52 13.73 13.73 0 0 0-7.85-7.85A19.7 19.7 0 0 0 37.92.15c-2.86-.13-3.78-.16-11.07-.16z"/><path class="bfcls-1" d="M26.85 13.06a13.79 13.79 0 1 0 13.79 13.79 13.79 13.79 0 0 0-13.79-13.79zm0 22.73a8.95 8.95 0 1 1 8.95-8.95 8.95 8.95 0 0 1-8.95 8.95z"/><circle class="bfcls-1" cx="41.18" cy="12.52" r="3.22"/></svg><svg viewBox="0 0 56.97 56.97" id="icon-social-ok"><path class="bgcls-1" d="M28.51 23.61a4.91 4.91 0 1 0-4.94-4.86 4.88 4.88 0 0 0 4.94 4.86zm0 0"/><path class="bgcls-1" d="M28.48 0A28.49 28.49 0 1 0 57 28.47 28.49 28.49 0 0 0 28.52-.02zm0 8.66a10 10 0 1 1-10.07 10 10 10 0 0 1 10.07-10zm11.24 24a12.06 12.06 0 0 1-4.35 2.81 20.42 20.42 0 0 1-4.93 1.1c.25.28.37.41.53.57 2.28 2.29 4.58 4.58 6.85 6.88a2.27 2.27 0 0 1 .51 2.67 2.7 2.7 0 0 1-2.54 1.58 2.47 2.47 0 0 1-1.6-.82c-1.72-1.73-3.48-3.44-5.17-5.2-.49-.52-.73-.42-1.16 0-1.73 1.78-3.49 3.54-5.26 5.29a2.21 2.21 0 0 1-2.67.48 2.7 2.7 0 0 1-1.56-2.48 2.5 2.5 0 0 1 .84-1.67l6.77-6.78c.15-.15.29-.31.51-.54a15.4 15.4 0 0 1-8.22-2.93c-.29-.23-.6-.46-.87-.71a2.46 2.46 0 0 1 2.79-4 5 5 0 0 1 .68.4 13.47 13.47 0 0 0 14.93.14 4.07 4.07 0 0 1 1.45-.75 2.28 2.28 0 0 1 2.62 1 2.21 2.21 0 0 1-.16 2.91zm0 0"/></svg><svg viewBox="0 0 58.77 47.76" id="icon-social-tw"><path class="bhcls-1" d="M58.77 5.66a24.1 24.1 0 0 1-6.92 1.9 12.09 12.09 0 0 0 5.3-6.67 24.14 24.14 0 0 1-7.66 2.93 12.07 12.07 0 0 0-20.55 11A34.23 34.23 0 0 1 4.09 2.22a12.07 12.07 0 0 0 3.73 16.1 12 12 0 0 1-5.46-1.51v.15a12.06 12.06 0 0 0 9.67 11.82 12.08 12.08 0 0 1-5.44.21 12.07 12.07 0 0 0 11.26 8.37 24.19 24.19 0 0 1-15 5.16 24.46 24.46 0 0 1-2.88-.17 34.13 34.13 0 0 0 18.48 5.42c22.18 0 34.3-18.37 34.3-34.31V11.9a24.5 24.5 0 0 0 6.02-6.24z"/></svg><svg viewBox="0 0 75.68 43.17" id="icon-social-vk"><path class="bicls-1" d="M37.02 43h4.52a3.82 3.82 0 0 0 2.06-.9 3.31 3.31 0 0 0 .62-2s-.09-6.07 2.73-7 6.34 5.87 10.12 8.46c2.86 2 5 1.53 5 1.53l10.11-.14s5.29-.33 2.78-4.48c-.21-.34-1.46-3.07-7.51-8.69-6.34-5.88-5.49-4.93 2.15-15.1 4.65-6.2 6.51-10 5.93-11.6s-4-1.14-4-1.14l-11.38.07a2.58 2.58 0 0 0-1.47.26 3.17 3.17 0 0 0-1 1.22 66 66 0 0 1-4.2 8.87c-5.07 8.6-7.09 9.06-7.92 8.52-1.93-1.25-1.45-5-1.45-7.67 0-8.34 1.26-11.81-2.46-12.71a19.45 19.45 0 0 0-5.31-.53c-4.06 0-7.5 0-9.44 1-1.29.63-2.29 2-1.68 2.13a5.11 5.11 0 0 1 3.36 1.69c1.17 1.59 1.13 5.15 1.13 5.15s.67 9.82-1.56 11c-1.53.84-3.64-.87-8.16-8.68a72.61 72.61 0 0 1-4.06-8.42 3.38 3.38 0 0 0-.94-1.27 4.7 4.7 0 0 0-1.75-.71l-10.81.07a3.69 3.69 0 0 0-2.22.75 2.36 2.36 0 0 0 0 1.93S8.68 24.42 18.26 34.4c8.79 9.15 18.77 8.55 18.77 8.55z"/></svg><svg viewBox="0 0 66.45 46.74" id="icon-social-yt"><path class="bjcls-1" d="M33.24 0S19.29 0 9.99.67a9.51 9.51 0 0 0-6.66 2.81c-2 2-2.64 6.6-2.64 6.6a100.49 100.49 0 0 0-.66 10.75v5a100.49 100.49 0 0 0 .66 10.75s.65 4.58 2.64 6.6c2.53 2.65 5.85 2.56 7.33 2.84 5.32.51 22.59.67 22.59.67s14 0 23.26-.69a9.5 9.5 0 0 0 6.66-2.81c2-2 2.64-6.6 2.64-6.6a100.64 100.64 0 0 0 .66-10.75v-5a100.64 100.64 0 0 0-.66-10.75s-.65-4.58-2.64-6.6A9.5 9.5 0 0 0 56.51.67C47.21 0 33.26 0 33.26 0"/><path class="bjcls-2" fill="#ef4647" d="M26.36 31.99l18-9.3-18-9.37v18.67z"/></svg><svg viewBox="0 0 29.36 27.02" id="icon-statistic"><path class="bkcls-1" d="M.49 0h28.87v21.8H0V0h.5zm27.88 1H.99v19.82h27.38V1zM7.7 26.03h13.97v.99H7.7z"/><path class="bkcls-1" d="M11.85 26.03h5.66V21.8h-5.66v4.23zm6.15 1h-7.14v-6.21h7.64v6.21H18zM5.97 14.01a1.14 1.14 0 0 0-1.13 1.13 1.14 1.14 0 0 0 1.13 1.13 1.14 1.14 0 0 0 1.13-1.13 1.14 1.14 0 0 0-1.13-1.13zm0-1a2.12 2.12 0 0 1 2.12 2.12 2.12 2.12 0 0 1-2.12 2.12 2.12 2.12 0 0 1-2.12-2.12 2.12 2.12 0 0 1 2.12-2.12zm17.29-7.53a1.14 1.14 0 0 0-1.13 1.13 1.14 1.14 0 0 0 1.13 1.13 1.14 1.14 0 0 0 1.13-1.13 1.14 1.14 0 0 0-1.13-1.13zm0-1a2.12 2.12 0 0 1 2.12 2.12 2.12 2.12 0 0 1-2.12 2.12 2.12 2.12 0 0 1-2.12-2.12 2.12 2.12 0 0 1 2.12-2.12zm-5.88 9.51a1.14 1.14 0 0 0-1.13 1.13 1.14 1.14 0 0 0 1.13 1.13 1.14 1.14 0 0 0 1.13-1.13 1.14 1.14 0 0 0-1.13-1.13zm0-1a2.12 2.12 0 0 1 2.12 2.12 2.12 2.12 0 0 1-2.12 2.12 2.12 2.12 0 0 1-2.12-2.12 2.12 2.12 0 0 1 2.12-2.12zm-5.54-3.65a1.14 1.14 0 0 0-1.13 1.13 1.14 1.14 0 0 0 1.13 1.13 1.14 1.14 0 0 0 1.13-1.13 1.14 1.14 0 0 0-1.13-1.13zm0-1a2.12 2.12 0 0 1 2.12 2.12 2.12 2.12 0 0 1-2.12 2.12 2.12 2.12 0 0 1-2.12-2.12 2.12 2.12 0 0 1 2.11-2.12z"/><path class="bkcls-1" d="M6.88 13.79l3.43-2.71a1.64 1.64 0 0 0 .61.77l-3.43 2.71a1.64 1.64 0 0 0-.61-.77zm6.46-2.67l3.16 2.64a1.64 1.64 0 0 0-.64.76l-3.16-2.64a1.64 1.64 0 0 0 .64-.76zm4.5 2.46l4.12-6a1.63 1.63 0 0 0 .81.56l-4.12 6a1.64 1.64 0 0 0-.81-.56z"/></svg><svg viewBox="0 0 29.95 29.95" id="icon-target"><path class="blcls-1" d="M28.95 14.48A14 14 0 0 0 15.47 1v4.56h-1V1A14 14 0 0 0 .99 14.48h4.56v1H.99a14 14 0 0 0 13.48 13.47v-4.56h1v4.56a14 14 0 0 0 13.48-13.48h-4.56v-1h4.56zm-17-4.94a1.35 1.35 0 0 0-1.32 0 1.87 1.87 0 0 0-1.16 1.68 7.46 7.46 0 0 0 .52 2.71l.12.34c.38 1 .68 1.87-.35 2.88a3.3 3.3 0 0 1-.48.38 4.26 4.26 0 0 1-.56.31c-.27.13-.53.23-.78.32a2.34 2.34 0 0 0-1.6 1.26 3.06 3.06 0 0 0-.23.89 6.2 6.2 0 0 0 0 1.06l-1 .06a7.19 7.19 0 0 1 0-1.23 4 4 0 0 1 .31-1.18 3.14 3.14 0 0 1 2.15-1.79c.23-.09.47-.18.71-.29a3.32 3.32 0 0 0 .43-.24 2.29 2.29 0 0 0 .33-.27c.57-.56.37-1.12.11-1.83l-.13-.36a8.35 8.35 0 0 1-.55-3.02 2.79 2.79 0 0 1 1.75-2.58 2.51 2.51 0 0 1 1.19-.25 2.63 2.63 0 0 1 1 .31 3.55 3.55 0 0 1 1.09-.87 3.44 3.44 0 0 1 1.43-.46 3.12 3.12 0 0 1 1.47.31 3.73 3.73 0 0 1 1.31.92 2.41 2.41 0 0 1 .82-.21 2.51 2.51 0 0 1 1.19.25 2.79 2.79 0 0 1 1.75 2.58 8.35 8.35 0 0 1-.57 3.09l-.13.35c-.26.71-.46 1.27.11 1.83a2.32 2.32 0 0 0 .33.27 3.32 3.32 0 0 0 .43.24c.24.11.48.2.71.29a3.14 3.14 0 0 1 2.15 1.79 4.05 4.05 0 0 1 .31 1.18 7.13 7.13 0 0 1 0 1.23l-1-.06a6.15 6.15 0 0 0 0-1.06 3.07 3.07 0 0 0-.23-.89 2.35 2.35 0 0 0-1.6-1.26c-.25-.09-.51-.19-.78-.32a4.3 4.3 0 0 1-.56-.31 3.36 3.36 0 0 1-.48-.38c-1-1-.73-1.83-.35-2.88l.12-.34a7.47 7.47 0 0 0 .54-2.77 1.87 1.87 0 0 0-1.16-1.73 1.58 1.58 0 0 0-.73-.17 1.27 1.27 0 0 0-.33.07 4.22 4.22 0 0 1 .33 1.45 10.7 10.7 0 0 1-.73 4l-.16.46c-.35 1-.63 1.74.18 2.53a3.17 3.17 0 0 0 .45.37 4.43 4.43 0 0 0 .58.32c.31.15.63.27.93.38a4 4 0 0 1 2.71 2.24 5.1 5.1 0 0 1 .39 1.49 9.13 9.13 0 0 1 0 1.58l-1-.06a8.14 8.14 0 0 0 0-1.41 4.12 4.12 0 0 0-.31-1.2 3.16 3.16 0 0 0-2.16-1.72c-.32-.12-.65-.25-1-.41a5.43 5.43 0 0 1-.7-.4 4.13 4.13 0 0 1-.6-.48c-1.27-1.24-.89-2.28-.42-3.58l.16-.44a9.82 9.82 0 0 0 .68-3.58 2.56 2.56 0 0 0-1.59-2.37 2.2 2.2 0 0 0-1-.23 2.52 2.52 0 0 0-1 .34 2.59 2.59 0 0 0-1.36 2.38 10.13 10.13 0 0 0 .68 3.46l.16.45c.48 1.3.85 2.34-.42 3.58a4.1 4.1 0 0 1-.6.48 5.43 5.43 0 0 1-.7.4c-.35.16-.68.29-1 .41a3.16 3.16 0 0 0-2.16 1.72 4.13 4.13 0 0 0-.31 1.2 8.17 8.17 0 0 0 0 1.41l-1 .06a9.13 9.13 0 0 1 0-1.58 5.11 5.11 0 0 1 .39-1.49 4 4 0 0 1 2.71-2.24c.3-.11.61-.23.93-.38a4.42 4.42 0 0 0 .58-.32 3.14 3.14 0 0 0 .45-.37c.81-.8.53-1.56.18-2.53l-.17-.47a11 11 0 0 1-.74-3.81 4.37 4.37 0 0 1 .3-1.49zm18 5.44a15 15 0 0 1-15 15 15 15 0 0 1-15-15 15 15 0 0 1 15-15 15 15 0 0 1 15 14.99z"/></svg><svg viewBox="0 0 32.23 32" id="icon-thumbup"><path class="bmcls-1" d="M8 13h2l4-5V4a3 3 0 0 1 6 0M20 4v9.03l11 1.99L27.03 31H17l-7-2H8M1 13h4v16H1z"/></svg></defs></svg>';
$("#container-for-svg").append(decorative_svg_for_slider), $("#container-for-svg").append(decorative_svg_2), $("#container-for-svg").append(decorative_svg_2_uncolored), $("#container-for-svg").append(icons_sprite), $("#portfolio_decoration_1_wrap").html(portfolio_decoration_1), $("#interjection_decoration_wrap").html(interjection_decoration_wrap), $("#about_us_decoration_wrap").html(about_us_decoration_wrap),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        e.ui = e.ui || {};
        e.ui.version = "1.12.1";
        var t = 0,
            n = Array.prototype.slice;
        e.cleanData = function(t) {
            return function(n) {
                var r, o, i;
                for (i = 0; null != (o = n[i]); i++) try {
                    (r = e._data(o, "events")) && r.remove && e(o).triggerHandler("remove")
                } catch (e) {}
                t(n)
            }
        }(e.cleanData), e.widget = function(t, n, r) {
            var o, i, a, s = {},
                l = t.split(".")[0],
                u = l + "-" + (t = t.split(".")[1]);
            return r || (r = n, n = e.Widget), e.isArray(r) && (r = e.extend.apply(null, [{}].concat(r))), e.expr[":"][u.toLowerCase()] = function(t) {
                return !!e.data(t, u)
            }, e[l] = e[l] || {}, o = e[l][t], i = e[l][t] = function(e, t) {
                if (!this._createWidget) return new i(e, t);
                arguments.length && this._createWidget(e, t)
            }, e.extend(i, o, {
                version: r.version,
                _proto: e.extend({}, r),
                _childConstructors: []
            }), a = new n, a.options = e.widget.extend({}, a.options), e.each(r, function(t, r) {
                e.isFunction(r) ? s[t] = function() {
                    function e() {
                        return n.prototype[t].apply(this, arguments)
                    }

                    function o(e) {
                        return n.prototype[t].apply(this, e)
                    }
                    return function() {
                        var t, n = this._super,
                            i = this._superApply;
                        return this._super = e, this._superApply = o, t = r.apply(this, arguments), this._super = n, this._superApply = i, t
                    }
                }() : s[t] = r
            }), i.prototype = e.widget.extend(a, {
                widgetEventPrefix: o ? a.widgetEventPrefix || t : t
            }, s, {
                constructor: i,
                namespace: l,
                widgetName: t,
                widgetFullName: u
            }), o ? (e.each(o._childConstructors, function(t, n) {
                var r = n.prototype;
                e.widget(r.namespace + "." + r.widgetName, i, n._proto)
            }), delete o._childConstructors) : n._childConstructors.push(i), e.widget.bridge(t, i), i
        }, e.widget.extend = function(t) {
            for (var r, o, i = n.call(arguments, 1), a = 0, s = i.length; a < s; a++)
                for (r in i[a]) o = i[a][r], i[a].hasOwnProperty(r) && void 0 !== o && (e.isPlainObject(o) ? t[r] = e.isPlainObject(t[r]) ? e.widget.extend({}, t[r], o) : e.widget.extend({}, o) : t[r] = o);
            return t
        }, e.widget.bridge = function(t, r) {
            var o = r.prototype.widgetFullName || t;
            e.fn[t] = function(i) {
                var a = "string" == typeof i,
                    s = n.call(arguments, 1),
                    l = this;
                return a ? this.length || "instance" !== i ? this.each(function() {
                    var n, r = e.data(this, o);
                    return "instance" === i ? (l = r, !1) : r ? e.isFunction(r[i]) && "_" !== i.charAt(0) ? (n = r[i].apply(r, s)) !== r && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0 : e.error("no such method '" + i + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + i + "'")
                }) : l = void 0 : (s.length && (i = e.widget.extend.apply(null, [i].concat(s))), this.each(function() {
                    var t = e.data(this, o);
                    t ? (t.option(i || {}), t._init && t._init()) : e.data(this, o, new r(i, this))
                })), l
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(n, r) {
                r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === r && this.destroy()
                    }
                }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function(e, n) {
                    t._removeClass(n, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, n) {
                var r, o, i, a = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (a = {}, r = t.split("."), t = r.shift(), r.length) {
                        for (o = a[t] = e.widget.extend({}, this.options[t]), i = 0; i < r.length - 1; i++) o[r[i]] = o[r[i]] || {}, o = o[r[i]];
                        if (t = r.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
                        o[t] = n
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        a[t] = n
                    } return this._setOptions(a), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(t) {
                var n, r, o;
                for (n in t) o = this.classesElementLookup[n], t[n] !== this.options.classes[n] && o && o.length && (r = e(o.get()), this._removeClass(o, n), r.addClass(this._classes({
                    element: r,
                    keys: n,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(t) {
                function n(n, i) {
                    var a, s;
                    for (s = 0; s < n.length; s++) a = o.classesElementLookup[n[s]] || e(), a = e(t.add ? e.unique(a.get().concat(t.element.get())) : a.not(t.element).get()), o.classesElementLookup[n[s]] = a, r.push(n[s]), i && t.classes[n[s]] && r.push(t.classes[n[s]])
                }
                var r = [],
                    o = this;
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && n(t.keys.match(/\S+/g) || [], !0), t.extra && n(t.extra.match(/\S+/g) || []), r.join(" ")
            },
            _untrackClassesElement: function(t) {
                var n = this;
                e.each(n.classesElementLookup, function(r, o) {
                    -1 !== e.inArray(t.target, o) && (n.classesElementLookup[r] = e(o.not(t.target).get()))
                })
            },
            _removeClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !1)
            },
            _addClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !0)
            },
            _toggleClass: function(e, t, n, r) {
                r = "boolean" == typeof r ? r : n;
                var o = "string" == typeof e || null === e,
                    i = {
                        extra: o ? t : n,
                        keys: o ? e : t,
                        element: o ? this.element : e,
                        add: r
                    };
                return i.element.toggleClass(this._classes(i), r), this
            },
            _on: function(t, n, r) {
                var o, i = this;
                "boolean" != typeof t && (r = n, n = t, t = !1), r ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, o = this.widget()), e.each(r, function(r, a) {
                    function s() {
                        if (t || !0 !== i.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? i[a] : a).apply(i, arguments)
                    }
                    "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                    var l = r.match(/^([\w:-]*)\s*(.*)$/),
                        u = l[1] + i.eventNamespace,
                        c = l[2];
                    c ? o.on(u, c, s) : n.on(u, s)
                })
            },
            _off: function(t, n) {
                n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(n).off(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                var n = this;
                return setTimeout(function() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(t, n, r) {
                var o, i, a = this.options[t];
                if (r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], i = n.originalEvent)
                    for (o in i) o in n || (n[o] = i[o]);
                return this.element.trigger(n, r), !(e.isFunction(a) && !1 === a.apply(this.element[0], [n].concat(r)) || n.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, n) {
            e.Widget.prototype["_" + t] = function(r, o, i) {
                "string" == typeof o && (o = {
                    effect: o
                });
                var a, s = o ? !0 === o || "number" == typeof o ? n : o.effect || n : t;
                "number" == typeof(o = o || {}) && (o = {
                    duration: o
                }), a = !e.isEmptyObject(o), o.complete = i, o.delay && r.delay(o.delay), a && e.effects && e.effects.effect[s] ? r[t](o) : s !== t && r[s] ? r[s](o.duration, o.easing, i) : r.queue(function(n) {
                    e(this)[t](), i && i.call(r[0]), n()
                })
            }
        });
        e.widget;
        ! function() {
            function t(e, t, n) {
                return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? n / 100 : 1)]
            }

            function n(t, n) {
                return parseInt(e.css(t, n), 10) || 0
            }

            function r(t) {
                var n = t[0];
                return 9 === n.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(n) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : n.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: n.pageY,
                        left: n.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            var o, i = Math.max,
                a = Math.abs,
                s = /left|center|right/,
                l = /top|center|bottom/,
                u = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                p = /%$/,
                d = e.fn.position;
            e.position = {
                scrollbarWidth: function() {
                    if (void 0 !== o) return o;
                    var t, n, r = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        i = r.children()[0];
                    return e("body").append(r), t = i.offsetWidth, r.css("overflow", "scroll"), n = i.offsetWidth, t === n && (n = r[0].clientWidth), r.remove(), o = t - n
                },
                getScrollInfo: function(t) {
                    var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        o = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() : 0,
                        height: o ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var n = e(t || window),
                        r = e.isWindow(n[0]),
                        o = !!n[0] && 9 === n[0].nodeType;
                    return {
                        element: n,
                        isWindow: r,
                        isDocument: o,
                        offset: !r && !o ? e(t).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: n.outerWidth(),
                        height: n.outerHeight()
                    }
                }
            }, e.fn.position = function(o) {
                if (!o || !o.of) return d.apply(this, arguments);
                o = e.extend({}, o);
                var p, f, h, m, y, v, g = e(o.of),
                    b = e.position.getWithinInfo(o.within),
                    w = e.position.getScrollInfo(b),
                    x = (o.collision || "flip").split(" "),
                    T = {};
                return v = r(g), g[0].preventDefault && (o.at = "left top"), f = v.width, h = v.height, m = v.offset, y = e.extend({}, m), e.each(["my", "at"], function() {
                    var e, t, n = (o[this] || "").split(" ");
                    1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : l.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = s.test(n[0]) ? n[0] : "center", n[1] = l.test(n[1]) ? n[1] : "center", e = u.exec(n[0]), t = u.exec(n[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], o[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
                }), 1 === x.length && (x[1] = x[0]), "right" === o.at[0] ? y.left += f : "center" === o.at[0] && (y.left += f / 2), "bottom" === o.at[1] ? y.top += h : "center" === o.at[1] && (y.top += h / 2), p = t(T.at, f, h), y.left += p[0], y.top += p[1], this.each(function() {
                    var r, s, l = e(this),
                        u = l.outerWidth(),
                        c = l.outerHeight(),
                        d = n(this, "marginLeft"),
                        v = n(this, "marginTop"),
                        P = u + d + n(this, "marginRight") + w.width,
                        j = c + v + n(this, "marginBottom") + w.height,
                        k = e.extend({}, y),
                        Y = t(T.my, l.outerWidth(), l.outerHeight());
                    "right" === o.my[0] ? k.left -= u : "center" === o.my[0] && (k.left -= u / 2), "bottom" === o.my[1] ? k.top -= c : "center" === o.my[1] && (k.top -= c / 2), k.left += Y[0], k.top += Y[1], r = {
                        marginLeft: d,
                        marginTop: v
                    }, e.each(["left", "top"], function(t, n) {
                        e.ui.position[x[t]] && e.ui.position[x[t]][n](k, {
                            targetWidth: f,
                            targetHeight: h,
                            elemWidth: u,
                            elemHeight: c,
                            collisionPosition: r,
                            collisionWidth: P,
                            collisionHeight: j,
                            offset: [p[0] + Y[0], p[1] + Y[1]],
                            my: o.my,
                            at: o.at,
                            within: b,
                            elem: l
                        })
                    }), o.using && (s = function(e) {
                        var t = m.left - k.left,
                            n = t + f - u,
                            r = m.top - k.top,
                            s = r + h - c,
                            p = {
                                target: {
                                    element: g,
                                    left: m.left,
                                    top: m.top,
                                    width: f,
                                    height: h
                                },
                                element: {
                                    element: l,
                                    left: k.left,
                                    top: k.top,
                                    width: u,
                                    height: c
                                },
                                horizontal: n < 0 ? "left" : t > 0 ? "right" : "center",
                                vertical: s < 0 ? "top" : r > 0 ? "bottom" : "middle"
                            };
                        f < u && a(t + n) < f && (p.horizontal = "center"), h < c && a(r + s) < h && (p.vertical = "middle"), i(a(t), a(n)) > i(a(r), a(s)) ? p.important = "horizontal" : p.important = "vertical", o.using.call(this, e, p)
                    }), l.offset(e.extend(k, {
                        using: s
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n, r = t.within,
                            o = r.isWindow ? r.scrollLeft : r.offset.left,
                            a = r.width,
                            s = e.left - t.collisionPosition.marginLeft,
                            l = o - s,
                            u = s + t.collisionWidth - a - o;
                        t.collisionWidth > a ? l > 0 && u <= 0 ? (n = e.left + l + t.collisionWidth - a - o, e.left += l - n) : e.left = u > 0 && l <= 0 ? o : l > u ? o + a - t.collisionWidth : o : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = i(e.left - s, e.left)
                    },
                    top: function(e, t) {
                        var n, r = t.within,
                            o = r.isWindow ? r.scrollTop : r.offset.top,
                            a = t.within.height,
                            s = e.top - t.collisionPosition.marginTop,
                            l = o - s,
                            u = s + t.collisionHeight - a - o;
                        t.collisionHeight > a ? l > 0 && u <= 0 ? (n = e.top + l + t.collisionHeight - a - o, e.top += l - n) : e.top = u > 0 && l <= 0 ? o : l > u ? o + a - t.collisionHeight : o : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = i(e.top - s, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var n, r, o = t.within,
                            i = o.offset.left + o.scrollLeft,
                            s = o.width,
                            l = o.isWindow ? o.scrollLeft : o.offset.left,
                            u = e.left - t.collisionPosition.marginLeft,
                            c = u - l,
                            p = u + t.collisionWidth - s - l,
                            d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            h = -2 * t.offset[0];
                        c < 0 ? ((n = e.left + d + f + h + t.collisionWidth - s - i) < 0 || n < a(c)) && (e.left += d + f + h) : p > 0 && ((r = e.left - t.collisionPosition.marginLeft + d + f + h - l) > 0 || a(r) < p) && (e.left += d + f + h)
                    },
                    top: function(e, t) {
                        var n, r, o = t.within,
                            i = o.offset.top + o.scrollTop,
                            s = o.height,
                            l = o.isWindow ? o.scrollTop : o.offset.top,
                            u = e.top - t.collisionPosition.marginTop,
                            c = u - l,
                            p = u + t.collisionHeight - s - l,
                            d = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            h = -2 * t.offset[1];
                        c < 0 ? ((r = e.top + d + f + h + t.collisionHeight - s - i) < 0 || r < a(c)) && (e.top += d + f + h) : p > 0 && ((n = e.top - t.collisionPosition.marginTop + d + f + h - l) > 0 || a(n) < p) && (e.top += d + f + h)
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }();
        e.ui.position, e.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, e.fn.extend({
            uniqueId: function() {
                var e = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var r = !1;
        e(document).on("mouseup", function() {
            r = !1
        });
        e.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.on("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).on("click." + this.widgetName, function(n) {
                    if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!r) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var n = this,
                        o = 1 === t.which,
                        i = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                    return !(o && !i && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return n._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return n._mouseUp(e)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), r = !0, !0))
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which)
                        if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, r = !1, t.preventDefault()
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        });
        e.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function() {
                    var t = e(this).attr("title") || "";
                    return e("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(t, n) {
                var r = (t.attr("aria-describedby") || "").split(/\s+/);
                r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
            },
            _removeDescribedBy: function(t) {
                var n = t.data("ui-tooltip-id"),
                    r = (t.attr("aria-describedby") || "").split(/\s+/),
                    o = e.inArray(n, r); - 1 !== o && r.splice(o, 1), t.removeData("ui-tooltip-id"), (r = e.trim(r.join(" "))) ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = e("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = e([])
            },
            _setOption: function(t, n) {
                var r = this;
                this._super(t, n), "content" === t && e.each(this.tooltips, function(e, t) {
                    r._updateContent(t.element)
                })
            },
            _setOptionDisabled: function(e) {
                this[e ? "_disable" : "_enable"]()
            },
            _disable: function() {
                var t = this;
                e.each(this.tooltips, function(n, r) {
                    var o = e.Event("blur");
                    o.target = o.currentTarget = r.element[0], t.close(o, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                    var t = e(this);
                    if (t.is("[title]")) return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                }))
            },
            _enable: function() {
                this.disabledTitles.each(function() {
                    var t = e(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                }), this.disabledTitles = e([])
            },
            open: function(t) {
                var n = this,
                    r = e(t ? t.target : this.element).closest(this.options.items);
                r.length && !r.data("ui-tooltip-id") && (r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("ui-tooltip-open", !0), t && "mouseover" === t.type && r.parents().each(function() {
                    var t, r = e(this);
                    r.data("ui-tooltip-open") && ((t = e.Event("blur")).target = t.currentTarget = this, n.close(t, !0)), r.attr("title") && (r.uniqueId(), n.parents[this.id] = {
                        element: this,
                        title: r.attr("title")
                    }, r.attr("title", ""))
                }), this._registerCloseHandlers(t, r), this._updateContent(r, t))
            },
            _updateContent: function(e, t) {
                var n, r = this.options.content,
                    o = this,
                    i = t ? t.type : null;
                if ("string" == typeof r || r.nodeType || r.jquery) return this._open(t, e, r);
                (n = r.call(e[0], function(n) {
                    o._delay(function() {
                        e.data("ui-tooltip-open") && (t && (t.type = i), this._open(t, e, n))
                    })
                })) && this._open(t, e, n)
            },
            _open: function(t, n, r) {
                function o(e) {
                    u.of = e, a.is(":hidden") || a.position(u)
                }
                var i, a, s, l, u = e.extend({}, this.options.position);
                r && ((i = this._find(n)) ? i.tooltip.find(".ui-tooltip-content").html(r) : (n.is("[title]") && (t && "mouseover" === t.type ? n.attr("title", "") : n.removeAttr("title")), i = this._tooltip(n), a = i.tooltip, this._addDescribedBy(n, a.attr("id")), a.find(".ui-tooltip-content").html(r), this.liveRegion.children().hide(), (l = e("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(t)) : a.position(e.extend({
                    of: n
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (s = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (o(u.of), clearInterval(s))
                }, e.fx.interval)), this._trigger("open", t, {
                    tooltip: a
                })))
            },
            _registerCloseHandlers: function(t, n) {
                var r = {
                    keyup: function(t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var r = e.Event(t);
                            r.currentTarget = n[0], this.close(r, !0)
                        }
                    }
                };
                n[0] !== this.element[0] && (r.remove = function() {
                    this._removeTooltip(this._find(n).tooltip)
                }), t && "mouseover" !== t.type || (r.mouseleave = "close"), t && "focusin" !== t.type || (r.focusout = "close"), this._on(!0, n, r)
            },
            close: function(t) {
                var n, r = this,
                    o = e(t ? t.currentTarget : this.element),
                    i = this._find(o);
                i ? (n = i.tooltip, i.closing || (clearInterval(this.delayedShow), o.data("ui-tooltip-title") && !o.attr("title") && o.attr("title", o.data("ui-tooltip-title")), this._removeDescribedBy(o), i.hiding = !0, n.stop(!0), this._hide(n, this.options.hide, function() {
                    r._removeTooltip(e(this))
                }), o.removeData("ui-tooltip-open"), this._off(o, "mouseleave focusout keyup"), o[0] !== this.element[0] && this._off(o, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, n) {
                    e(n.element).attr("title", n.title), delete r.parents[t]
                }), i.closing = !0, this._trigger("close", t, {
                    tooltip: n
                }), i.hiding || (i.closing = !1))) : o.removeData("ui-tooltip-open")
            },
            _tooltip: function(t) {
                var n = e("<div>").attr("role", "tooltip"),
                    r = e("<div>").appendTo(n),
                    o = n.uniqueId().attr("id");
                return this._addClass(r, "ui-tooltip-content"), this._addClass(n, "ui-tooltip", "ui-widget ui-widget-content"), n.appendTo(this._appendTo(t)), this.tooltips[o] = {
                    element: t,
                    tooltip: n
                }
            },
            _find: function(e) {
                var t = e.data("ui-tooltip-id");
                return t ? this.tooltips[t] : null
            },
            _removeTooltip: function(e) {
                e.remove(), delete this.tooltips[e.attr("id")]
            },
            _appendTo: function(e) {
                var t = e.closest(".ui-front, dialog");
                return t.length || (t = this.document[0].body), t
            },
            _destroy: function() {
                var t = this;
                e.each(this.tooltips, function(n, r) {
                    var o = e.Event("blur"),
                        i = r.element;
                    o.target = o.currentTarget = i[0], t.close(o, !0), e("#" + n).remove(), i.data("ui-tooltip-title") && (i.attr("title") || i.attr("title", i.data("ui-tooltip-title")), i.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), !1 !== e.uiBackCompat && e.widget("ui.tooltip", e.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var e = this._superApply(arguments);
                return this.options.tooltipClass && e.tooltip.addClass(this.options.tooltipClass), e
            }
        });
        e.ui.tooltip
    }),
    function(e, t) {
        function n(e, t) {
            function n() {
                o.frameCount++, e.call(o)
            }
            var r, o = this;
            this.frameDuration = t || 25, this.frameCount = -1, this.start = function() {
                n(), r = setInterval(n, this.frameDuration)
            }, this.stop = function() {
                clearInterval(r), r = null
            }
        }

        function r() {
            var t = e.event.special.frame.handler,
                n = e.Event("frame"),
                r = this.array,
                o = r.length;
            for (n.frameCount = this.frameCount; o--;) t.call(r[o], n)
        }
        var o;
        e.event.special.frame || (e.event.special.frame = {
            setup: function(e, t) {
                if (o) o.array.push(this);
                else {
                    (o = new n(r, e && e.frameDuration)).array = [this];
                    var i = setTimeout(function() {
                        o.start(), clearTimeout(i), i = null
                    }, 0)
                }
            },
            teardown: function(e) {
                for (var t = o.array, n = t.length; n--;)
                    if (t[n] === this) {
                        t.splice(n, 1);
                        break
                    } 0 === t.length && (o.stop(), o = void 0)
            },
            handler: function(t) {
                e.event.handle.apply(this, arguments)
            }
        })
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e, t) {
        function n(e) {
            function t(e) {
                r ? (n(), D(t), o = !0, r = !1) : o = !1
            }
            var n = e,
                r = !1,
                o = !1;
            this.kick = function(e) {
                r = !0, o || t()
            }, this.end = function(e) {
                var t = n;
                e && (o ? (n = r ? function() {
                    t(), e()
                } : e, r = !0) : e())
            }
        }

        function r() {
            return !0
        }

        function o() {
            return !1
        }

        function i(e) {
            e.preventDefault()
        }

        function a(e) {
            M[e.target.tagName.toLowerCase()] || e.preventDefault()
        }

        function s(e) {
            return 1 === e.which && !e.ctrlKey && !e.altKey
        }

        function l(e, t) {
            var n, r;
            if (e.identifiedTouch) return e.identifiedTouch(t);
            for (n = -1, r = e.length; ++n < r;)
                if (e[n].identifier === t) return e[n]
        }

        function u(e, t) {
            var n = l(e.changedTouches, t.identifier);
            if (n && (n.pageX !== t.pageX || n.pageY !== t.pageY)) return n
        }

        function c(e) {
            y(e, e.data, e, d)
        }

        function p(e) {
            d()
        }

        function d() {
            _(document, E.move, c), _(document, E.cancel, p)
        }

        function f(e) {
            var t = e.data,
                n = u(e, t);
            n && y(e, t, n, m)
        }

        function h(e) {
            var t = e.data;
            l(e.changedTouches, t.identifier) && m(t.identifier)
        }

        function m(e) {
            _(document, "." + e, f), _(document, "." + e, h)
        }

        function y(e, t, n, r) {
            var o = n.pageX - t.startX,
                i = n.pageY - t.startY;
            o * o + i * i < S * S || b(e, t, n, o, i, r)
        }

        function v() {
            return this._handled = r, !1
        }

        function g(e) {
            e._handled()
        }

        function b(e, t, n, r, o, i) {
            var a, s;
            t.target;
            a = e.targetTouches, s = e.timeStamp - t.timeStamp, t.type = "movestart", t.distX = r, t.distY = o, t.deltaX = r, t.deltaY = o, t.pageX = n.pageX, t.pageY = n.pageY, t.velocityX = r / s, t.velocityY = o / s, t.targetTouches = a, t.finger = a ? a.length : 1, t._handled = v, t._preventTouchmoveDefault = function() {
                e.preventDefault()
            }, A(t.target, t), i(t.identifier)
        }

        function w(e) {
            var t = e.data.timer;
            e.data.touch = e, e.data.timeStamp = e.timeStamp, t.kick()
        }

        function x(e) {
            var t = e.data.event,
                n = e.data.timer;
            T(), C(t, n, function() {
                setTimeout(function() {
                    _(t.target, "click", o)
                }, 0)
            })
        }

        function T(e) {
            _(document, E.move, w), _(document, E.end, x)
        }

        function P(e) {
            var t = e.data.event,
                n = e.data.timer,
                r = u(e, t);
            r && (e.preventDefault(), t.targetTouches = e.targetTouches, e.data.touch = r, e.data.timeStamp = e.timeStamp, n.kick())
        }

        function j(e) {
            var t = e.data.event,
                n = e.data.timer;
            l(e.changedTouches, t.identifier) && (k(t), C(t, n))
        }

        function k(e) {
            _(document, "." + e.identifier, P), _(document, "." + e.identifier, j)
        }

        function Y(e, t, n, r) {
            var o = n - e.timeStamp;
            e.type = "move", e.distX = t.pageX - e.startX, e.distY = t.pageY - e.startY, e.deltaX = t.pageX - e.pageX, e.deltaY = t.pageY - e.pageY, e.velocityX = .3 * e.velocityX + .7 * e.deltaX / o, e.velocityY = .3 * e.velocityY + .7 * e.deltaY / o, e.pageX = t.pageX, e.pageY = t.pageY
        }

        function C(e, t, n) {
            t.end(function() {
                return e.type = "moveend", A(e.target, e), n && n()
            })
        }
        var S = 6,
            Q = e.event.add,
            _ = e.event.remove,
            A = function(t, n, r) {
                e.event.trigger(n, r, t)
            },
            D = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                return window.setTimeout(function() {
                    e()
                }, 25)
            },
            M = {
                textarea: !0,
                input: !0,
                select: !0,
                button: !0
            },
            E = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            O = {
                move: "touchmove",
                cancel: "touchend",
                end: "touchend"
            };
        e.event.special.movestart = {
            setup: function(e, t, n) {
                return Q(this, "movestart.move", g), !0
            },
            teardown: function(e) {
                return _(this, "dragstart drag", i), _(this, "mousedown touchstart", a), _(this, "movestart", g), !0
            },
            add: function(e) {
                "move" !== e.namespace && "moveend" !== e.namespace && (Q(this, "dragstart." + e.guid + " drag." + e.guid, i, t, e.selector), Q(this, "mousedown." + e.guid, a, t, e.selector))
            },
            remove: function(e) {
                "move" !== e.namespace && "moveend" !== e.namespace && (_(this, "dragstart." + e.guid + " drag." + e.guid), _(this, "mousedown." + e.guid))
            },
            _default: function(e) {
                var r, i;
                e._handled() && (r = {
                    target: e.target,
                    startX: e.startX,
                    startY: e.startY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    distX: e.distX,
                    distY: e.distY,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    velocityX: e.velocityX,
                    velocityY: e.velocityY,
                    timeStamp: e.timeStamp,
                    identifier: e.identifier,
                    targetTouches: e.targetTouches,
                    finger: e.finger
                }, i = {
                    event: r,
                    timer: new n(function(t) {
                        Y(r, i.touch, i.timeStamp), A(e.target, r)
                    }),
                    touch: t,
                    timeStamp: t
                }, e.identifier === t ? (Q(e.target, "click", o), Q(document, E.move, w, i), Q(document, E.end, x, i)) : (e._preventTouchmoveDefault(), Q(document, O.move + "." + e.identifier, P, i), Q(document, O.end + "." + e.identifier, j, i)))
            }
        }, e.event.special.move = {
            setup: function() {
                Q(this, "movestart.move", e.noop)
            },
            teardown: function() {
                _(this, "movestart.move", e.noop)
            }
        }, e.event.special.moveend = {
            setup: function() {
                Q(this, "movestart.moveend", e.noop)
            },
            teardown: function() {
                _(this, "movestart.moveend", e.noop)
            }
        }, Q(document, "mousedown.move", function(e) {
            var t;
            s(e) && (t = {
                target: e.target,
                startX: e.pageX,
                startY: e.pageY,
                timeStamp: e.timeStamp
            }, Q(document, E.move, c, t), Q(document, E.cancel, p, t))
        }), Q(document, "touchstart.move", function(e) {
            var t, n;
            M[e.target.tagName.toLowerCase()] || (n = {
                target: (t = e.changedTouches[0]).target,
                startX: t.pageX,
                startY: t.pageY,
                timeStamp: e.timeStamp,
                identifier: t.identifier
            }, Q(document, O.move + "." + t.identifier, f, n), Q(document, O.cancel + "." + t.identifier, h, n))
        }), "function" == typeof Array.prototype.indexOf && function(e, t) {
            for (var n = ["changedTouches", "targetTouches"], r = n.length; r--;) e.event.props && -1 === e.event.props.indexOf(n[r]) && e.event.props.push(n[r])
        }(e)
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function(e) {
        "use strict";

        function t(t) {
            var n = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
        }

        function n(t) {
            var n = t.target,
                r = e(n);
            if (!r.is("[type=submit],[type=image]")) {
                var o = r.closest("[type=submit]");
                if (0 === o.length) return;
                n = o[0]
            }
            var i = this;
            if (i.clk = n, "image" == n.type)
                if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
                else if ("function" == typeof e.fn.offset) {
                var a = r.offset();
                i.clk_x = t.pageX - a.left, i.clk_y = t.pageY - a.top
            } else i.clk_x = t.pageX - n.offsetLeft, i.clk_y = t.pageY - n.offsetTop;
            setTimeout(function() {
                i.clk = i.clk_x = i.clk_y = null
            }, 100)
        }

        function r() {
            if (e.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
            }
        }
        var o = {};
        o.fileapi = void 0 !== e("<input type='file'/>").get(0).files, o.formdata = void 0 !== window.FormData;
        var i = !!e.fn.prop;
        e.fn.attr2 = function() {
            if (!i) return this.attr.apply(this, arguments);
            var e = this.prop.apply(this, arguments);
            return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
        }, e.fn.ajaxSubmit = function(t) {
            function n(n) {
                var r, o, i = e.param(n, t.traditional).split("&"),
                    a = i.length,
                    s = [];
                for (r = 0; r < a; r++) i[r] = i[r].replace(/\+/g, " "), o = i[r].split("="), s.push([decodeURIComponent(o[0]), decodeURIComponent(o[1])]);
                return s
            }

            function a(n) {
                function o(e) {
                    var t = null;
                    try {
                        e.contentWindow && (t = e.contentWindow.document)
                    } catch (e) {
                        r("cannot get iframe.contentWindow document: " + e)
                    }
                    if (t) return t;
                    try {
                        t = e.contentDocument ? e.contentDocument : e.document
                    } catch (n) {
                        r("cannot get iframe.contentDocument: " + n), t = e.document
                    }
                    return t
                }

                function a() {
                    function t() {
                        try {
                            var e = o(v).readyState;
                            r("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                        } catch (e) {
                            r("Server abort: ", e, " (", e.name, ")"), l(Y), T && clearTimeout(T), T = void 0
                        }
                    }
                    var n = c.attr2("target"),
                        i = c.attr2("action");
                    P.setAttribute("target", m), s && !/post/i.test(s) || P.setAttribute("method", "POST"), i != d.url && P.setAttribute("action", d.url), d.skipEncodingOverride || s && !/post/i.test(s) || c.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), d.timeout && (T = setTimeout(function() {
                        x = !0, l(k)
                    }, d.timeout));
                    var a = [];
                    try {
                        if (d.extraData)
                            for (var u in d.extraData) d.extraData.hasOwnProperty(u) && (e.isPlainObject(d.extraData[u]) && d.extraData[u].hasOwnProperty("name") && d.extraData[u].hasOwnProperty("value") ? a.push(e('<input type="hidden" name="' + d.extraData[u].name + '">').val(d.extraData[u].value).appendTo(P)[0]) : a.push(e('<input type="hidden" name="' + u + '">').val(d.extraData[u]).appendTo(P)[0]));
                        d.iframeTarget || y.appendTo("body"), v.attachEvent ? v.attachEvent("onload", l) : v.addEventListener("load", l, !1), setTimeout(t, 15);
                        try {
                            P.submit()
                        } catch (e) {
                            document.createElement("form").submit.apply(P)
                        }
                    } finally {
                        P.setAttribute("action", i), n ? P.setAttribute("target", n) : c.removeAttr("target"), e(a).remove()
                    }
                }


                var u, p, d, f, m, y, v, g, b, w, x, T, P = c[0],
                    j = e.Deferred();
                if (j.abort = function(e) {
                        g.abort(e)
                    }, n)
                    for (p = 0; p < h.length; p++) u = e(h[p]), i ? u.prop("disabled", !1) : u.removeAttr("disabled");
                if (d = e.extend(!0, {}, e.ajaxSettings, t), d.context = d.context || d, m = "jqFormIO" + (new Date).getTime(), d.iframeTarget ? (w = (y = e(d.iframeTarget)).attr2("name")) ? m = w : y.attr2("name", m) : (y = e('<iframe name="' + m + '" src="' + d.iframeSrc + '" />')).css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    }), v = y[0], g = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(t) {
                            var n = "timeout" === t ? "timeout" : "aborted";
                            r("aborting upload... " + n), this.aborted = 1;
                            try {
                                v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                            } catch (e) {}
                            y.attr("src", d.iframeSrc), g.error = n, d.error && d.error.call(d.context, g, n, t), f && e.event.trigger("ajaxError", [g, d, n]), d.complete && d.complete.call(d.context, g, n)
                        }
                    }, (f = d.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [g, d]), d.beforeSend && !1 === d.beforeSend.call(d.context, g, d)) return d.global && e.active--, j.reject(), j;
                if (g.aborted) return j.reject(), j;
                (b = P.clk) && (w = b.name) && !b.disabled && (d.extraData = d.extraData || {}, d.extraData[w] = b.value, "image" == b.type && (d.extraData[w + ".x"] = P.clk_x, d.extraData[w + ".y"] = P.clk_y));
                var k = 1,
                    Y = 2,
                    C = e("meta[name=csrf-token]").attr("content"),
                    S = e("meta[name=csrf-param]").attr("content");
                S && C && (d.extraData = d.extraData || {}, d.extraData[S] = C), d.forceSync ? a() : setTimeout(a, 10);
                var Q, _, A, D = 50,
                    M = e.parseXML || function(e, t) {
                        return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    },
                    E = e.parseJSON || function(e) {
                        return window.eval("(" + e + ")")
                    },
                    O = function(t, n, r) {
                        var o = t.getResponseHeader("content-type") || "",
                            i = "xml" === n || !n && o.indexOf("xml") >= 0,
                            a = i ? t.responseXML : t.responseText;
                        return i && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), r && r.dataFilter && (a = r.dataFilter(a, n)), "string" == typeof a && ("json" === n || !n && o.indexOf("json") >= 0 ? a = E(a) : ("script" === n || !n && o.indexOf("javascript") >= 0) && e.globalEval(a)), a
                    };
                return j
            }
            if (!this.length) return r("ajaxSubmit: skipping submit process - no element selected"), this;
            var s, l, u, c = this;
            "function" == typeof t ? t = {
                success: t
            } : void 0 === t && (t = {}), s = t.type || this.attr2("method"), (u = (u = "string" == typeof(l = t.url || this.attr2("action")) ? e.trim(l) : "") || window.location.href || "") && (u = (u.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
                url: u,
                success: e.ajaxSettings.success,
                type: s || e.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, t), console.log(t.iframeSrc);
            var p = {};
            if (this.trigger("form-pre-serialize", [this, t, p]), p.veto) return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return r("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var d = t.traditional;
            void 0 === d && (d = e.ajaxSettings.traditional);
            var f, h = [],
                m = this.formToArray(t.semantic, h);
            if (t.data && (t.extraData = t.data, f = e.param(t.data, d)), t.beforeSubmit && !1 === t.beforeSubmit(m, this, t)) return r("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [m, this, t, p]), p.veto) return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var y = e.param(m, d);
            f && (y = y ? y + "&" + f : f), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + y, t.data = null) : t.data = y;
            var v = [];
            if (t.resetForm && v.push(function() {
                    c.resetForm()
                }), t.clearForm && v.push(function() {
                    c.clearForm(t.includeHidden)
                }), !t.dataType && t.target) {
                var g = t.success || function() {};
                v.push(function(n) {
                    var r = t.replaceTarget ? "replaceWith" : "html";
                    e(t.target)[r](n).each(g, arguments)
                })
            } else t.success && v.push(t.success);
            if (t.success = function(e, n, r) {
                    for (var o = t.context || this, i = 0, a = v.length; i < a; i++) v[i].apply(o, [e, n, r || c, c])
                }, t.error) {
                var b = t.error;
                t.error = function(e, n, r) {
                    var o = t.context || this;
                    b.apply(o, [e, n, r, c])
                }
            }
            if (t.complete) {
                var w = t.complete;
                t.complete = function(e, n) {
                    var r = t.context || this;
                    w.apply(r, [e, n, c])
                }
            }
            var x = e("input[type=file]:enabled", this).filter(function() {
                    return "" !== e(this).val()
                }).length > 0,
                T = "multipart/form-data",
                P = c.attr("enctype") == T || c.attr("encoding") == T,
                j = o.fileapi && o.formdata;
            r("fileAPI :" + j);
            var k, Y = (x || P) && !j;
            !1 !== t.iframe && (t.iframe || Y) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
                k = a(m)
            }) : k = a(m) : k = (x || P) && j ? function(r) {
                for (var o = new FormData, i = 0; i < r.length; i++) o.append(r[i].name, r[i].value);
                if (t.extraData) {
                    var a = n(t.extraData);
                    for (i = 0; i < a.length; i++) a[i] && o.append(a[i][0], a[i][1])
                }
                t.data = null;
                var l = e.extend(!0, {}, e.ajaxSettings, t, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: s || "POST"
                });
                t.uploadProgress && (l.xhr = function() {
                    var n = e.ajaxSettings.xhr();
                    return n.upload && n.upload.addEventListener("progress", function(e) {
                        var n = 0,
                            r = e.loaded || e.position,
                            o = e.total;
                        e.lengthComputable && (n = Math.ceil(r / o * 100)), t.uploadProgress(e, r, o, n)
                    }, !1), n
                }), l.data = null;
                var u = l.beforeSend;
                return l.beforeSend = function(e, n) {
                    t.formData ? n.data = t.formData : n.data = o, u && u.call(this, e, n)
                }, e.ajax(l)
            }(m) : e.ajax(t), c.removeData("jqxhr").data("jqxhr", k);
            for (var C = 0; C < h.length; C++) h[C] = null;
            return this.trigger("form-submit-notify", [this, t]), this
        }, e.fn.ajaxForm = function(o) {
            if (o = o || {}, o.delegation = o.delegation && e.isFunction(e.fn.on), !o.delegation && 0 === this.length) {
                var i = {
                    s: this.selector,
                    c: this.context
                };
                return !e.isReady && i.s ? (r("DOM not ready, queuing ajaxForm"), e(function() {
                    e(i.s, i.c).ajaxForm(o)
                }), this) : (r("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
            }
            return o.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, o, t).on("click.form-plugin", this.selector, o, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", o, t).bind("click.form-plugin", o, n)
        }, e.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, e.fn.formToArray = function(t, n) {
            var r = [];
            if (0 === this.length) return r;
            var i = this[0],
                a = t ? i.getElementsByTagName("*") : i.elements;
            if (!a) return r;
            var s, l, u, c, p, d, f;
            for (s = 0, d = a.length; s < d; s++)
                if (p = a[s], (u = p.name) && !p.disabled)
                    if (t && i.clk && "image" == p.type) i.clk == p && (r.push({
                        name: u,
                        value: e(p).val(),
                        type: p.type
                    }), r.push({
                        name: u + ".x",
                        value: i.clk_x
                    }, {
                        name: u + ".y",
                        value: i.clk_y
                    }));
                    else if ((c = e.fieldValue(p, !0)) && c.constructor == Array)
                for (n && n.push(p), l = 0, f = c.length; l < f; l++) r.push({
                    name: u,
                    value: c[l]
                });
            else if (o.fileapi && "file" == p.type) {
                n && n.push(p);
                var h = p.files;
                if (h.length)
                    for (l = 0; l < h.length; l++) r.push({
                        name: u,
                        value: h[l],
                        type: p.type
                    });
                else r.push({
                    name: u,
                    value: "",
                    type: p.type
                })
            } else null !== c && void 0 !== c && (n && n.push(p), r.push({
                name: u,
                value: c,
                type: p.type,
                required: p.required
            }));
            if (!t && i.clk) {
                var m = e(i.clk),
                    y = m[0];
                (u = y.name) && !y.disabled && "image" == y.type && (r.push({
                    name: u,
                    value: m.val()
                }), r.push({
                    name: u + ".x",
                    value: i.clk_x
                }, {
                    name: u + ".y",
                    value: i.clk_y
                }))
            }
            return r
        }, e.fn.formSerialize = function(t) {
            return e.param(this.formToArray(t))
        }, e.fn.fieldSerialize = function(t) {
            var n = [];
            return this.each(function() {
                var r = this.name;
                if (r) {
                    var o = e.fieldValue(this, t);
                    if (o && o.constructor == Array)
                        for (var i = 0, a = o.length; i < a; i++) n.push({
                            name: r,
                            value: o[i]
                        });
                    else null !== o && void 0 !== o && n.push({
                        name: this.name,
                        value: o
                    })
                }
            }), e.param(n)
        }, e.fn.fieldValue = function(t) {
            for (var n = [], r = 0, o = this.length; r < o; r++) {
                var i = this[r],
                    a = e.fieldValue(i, t);
                null === a || void 0 === a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(n, a) : n.push(a))
            }
            return n
        }, e.fieldValue = function(t, n) {
            var r = t.name,
                o = t.type,
                i = t.tagName.toLowerCase();
            if (void 0 === n && (n = !0), n && (!r || t.disabled || "reset" == o || "button" == o || ("checkbox" == o || "radio" == o) && !t.checked || ("submit" == o || "image" == o) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
            if ("select" == i) {
                var a = t.selectedIndex;
                if (a < 0) return null;
                for (var s = [], l = t.options, u = "select-one" == o, c = u ? a + 1 : l.length, p = u ? a : 0; p < c; p++) {
                    var d = l[p];
                    if (d.selected) {
                        var f = d.value;
                        if (f || (f = d.attributes && d.attributes.value && !d.attributes.value.specified ? d.text : d.value), u) return f;
                        s.push(f)
                    }
                }
                return s
            }
            return e(t).val()
        }, e.fn.clearForm = function(t) {
            return this.each(function() {
                e("input,select,textarea", this).clearFields(t)
            })
        }, e.fn.clearFields = e.fn.clearInputs = function(t) {
            var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var r = this.type,
                    o = this.tagName.toLowerCase();
                n.test(r) || "textarea" == o ? this.value = "" : "checkbox" == r || "radio" == r ? this.checked = !1 : "select" == o ? this.selectedIndex = -1 : "file" == r ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(r) || "string" == typeof t && e(this).is(t)) && (this.value = "")
            })
        }, e.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, e.fn.enable = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                this.disabled = !e
            })
        }, e.fn.selected = function(t) {
            return void 0 === t && (t = !0), this.each(function() {
                var n = this.type;
                if ("checkbox" == n || "radio" == n) this.checked = t;
                else if ("option" == this.tagName.toLowerCase()) {
                    var r = e(this).parent("select");
                    t && r[0] && "select-one" == r[0].type && r.find("option").selected(!1), this.selected = t
                }
            })
        }, e.fn.ajaxSubmit.debug = !1
    }),
    function(e, t, n, r) {
        "use strict";
        var o = n("html"),
            i = n(e),
            a = n(t),
            s = n.fancybox = function() {
                s.open.apply(this, arguments)
            },
            l = navigator.userAgent.match(/msie/i),
            u = null,
            c = void 0 !== t.createTouch,
            p = function(e) {
                return e && e.hasOwnProperty && e instanceof n
            },
            d = function(e) {
                return e && "string" === n.type(e)
            },
            f = function(e) {
                return d(e) && e.indexOf("%") > 0
            },
            h = function(e) {
                return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
            },
            m = function(e, t) {
                var n = parseInt(e, 10) || 0;
                return t && f(e) && (n = s.getViewport()[t] / 100 * n), Math.ceil(n)
            },
            y = function(e, t) {
                return m(e, t) + "px"
            };
        n.extend(s, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !c,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeChange: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                if (e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0))) return n.isArray(e) || (e = p(e) ? n(e).get() : [e]), n.each(e, function(r, o) {
                    var i, a, l, u, c, f, h, m = {};
                    "object" === n.type(o) && (o.nodeType && (o = n(o)), p(o) ? (m = {
                        href: o.data("fancybox-href") || o.attr("href"),
                        title: o.data("fancybox-title") || o.attr("title"),
                        isDom: !0,
                        element: o
                    }, n.metadata && n.extend(!0, m, o.metadata())) : m = o), i = t.href || m.href || (d(o) ? o : null), a = void 0 !== t.title ? t.title : m.title || "", !(u = (l = t.content || m.content) ? "html" : t.type || m.type) && m.isDom && ((u = o.data("fancybox-type")) || (u = (c = o.prop("class").match(/fancybox\.(\w+)/)) ? c[1] : null)), d(i) && (u || (s.isImage(i) ? u = "image" : s.isSWF(i) ? u = "swf" : "#" === i.charAt(0) ? u = "inline" : d(o) && (u = "html", l = o)), "ajax" === u && (i = (f = i.split(/\s+/, 2)).shift(), h = f.shift())), l || ("inline" === u ? i ? l = n(d(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i) : m.isDom && (l = o) : "html" === u ? l = i : u || i || !m.isDom || (u = "inline", l = o)), n.extend(m, {
                        href: i,
                        type: u,
                        content: l,
                        title: a,
                        selector: h
                    }), e[r] = m
                }), s.opts = n.extend(!0, {}, s.defaults, t), void 0 !== t.keys && (s.opts.keys = !!t.keys && n.extend({}, s.defaults.keys, t.keys)), s.group = e, s._start(s.opts.index)
            },
            cancel: function() {
                var e = s.coming;
                e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
            },
            close: function(e) {
                s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && !0 !== e ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(s.player.timer)
                    },
                    n = function() {
                        t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                    },
                    r = function() {
                        t(), a.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                    };
                !0 === e || !s.player.isActive && !1 !== e ? s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, a.bind({
                    "onCancel.player beforeClose.player": r,
                    "onUpdate.player": n,
                    "beforeLoad.player": t
                }), n(), s.trigger("onPlayStart")) : r()
            },
            next: function(e) {
                var t = s.current;
                t && (d(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = s.current;
                t && (d(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, n) {
                var r = s.current;
                r && (e = m(e), s.direction = t || r.direction[e >= r.index ? "next" : "prev"], s.router = n || "jumpto", r.loop && (e < 0 && (e = r.group.length + e % r.group.length), e %= r.group.length), void 0 !== r.group[e] && (s.cancel(), s._start(e)))
            },
            reposition: function(e, t) {
                var r, o = s.current,
                    i = o ? o.wrap : null;
                i && (r = s._getPosition(t), e && "scroll" === e.type ? (delete r.position, i.stop(!0, !0).animate(r, 200)) : (i.css(r), o.pos = n.extend({}, o.dim, r)))
            },
            update: function(e) {
                var t = e && e.type,
                    n = !t || "orientationchange" === t;
                n && (clearTimeout(u), u = null), s.isOpen && !u && (u = setTimeout(function() {
                    var r = s.current;
                    r && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && s._setDimension(), "scroll" === t && r.canShrink || s.reposition(e), s.trigger("onUpdate"), u = null)
                }, n && !c ? 0 : 300))
            },
            toggle: function(e) {
                s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, c && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
            },
            hideLoading: function() {
                a.unbind(".loading"), n("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                s.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), a.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
                }), s.defaults.fixed || (t = s.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = s.current && s.current.locked || !1,
                    n = {
                        x: i.scrollLeft(),
                        y: i.scrollTop()
                    };
                return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = c && e.innerWidth ? e.innerWidth : i.width(), n.h = c && e.innerHeight ? e.innerHeight : i.height()), n
            },
            unbindEvents: function() {
                s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), a.unbind(".fb"), i.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = s.current;
                t && (i.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), (e = t.keys) && a.bind("keydown.fb", function(r) {
                    var o = r.which || r.keyCode,
                        i = r.target || r.srcElement;
                    if (27 === o && s.coming) return !1;
                    r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || i && (i.type || n(i).is("[contenteditable]")) || n.each(e, function(e, i) {
                        return t.group.length > 1 && void 0 !== i[o] ? (s[e](i[o]), r.preventDefault(), !1) : n.inArray(o, i) > -1 ? (s[e](), r.preventDefault(), !1) : void 0
                    })
                }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, r, o, i) {
                    for (var a = e.target || null, l = n(a), u = !1; l.length && !(u || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) u = h(l[0]), l = n(l).parent();
                    0 === r || u || s.group.length > 1 && !t.canShrink && (i > 0 || o > 0 ? s.prev(i > 0 ? "down" : "left") : (i < 0 || o < 0) && s.next(i < 0 ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var r, o = t || s.coming || s.current;
                if (o) {
                    if (n.isFunction(o[e]) && (r = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), !1 === r) return !1;
                    o.helpers && n.each(o.helpers, function(t, r) {
                        r && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, r), o)
                    }), a.trigger(e)
                }
            },
            isImage: function(e) {
                return d(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return d(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, r, o, i, a, l = {};
                if (e = m(e), !(t = s.group[e] || null)) return !1;
                if (l = n.extend(!0, {}, s.opts, t), i = l.margin, a = l.padding, "number" === n.type(i) && (l.margin = [i, i, i, i]), "number" === n.type(a) && (l.padding = [a, a, a, a]), l.modal && n.extend(!0, l, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = s.group, l.index = e, s.coming = l, !1 !== s.trigger("beforeLoad")) {
                    if (o = l.type, r = l.href, !o) return s.coming = null, !(!s.current || !s.router || "jumpto" === s.router) && (s.current.index = e, s[s.router](s.direction));
                    if (s.isActive = !0, "image" !== o && "swf" !== o || (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && c && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
                            skin: n(".fancybox-skin", l.wrap),
                            outer: n(".fancybox-outer", l.wrap),
                            inner: n(".fancybox-inner", l.wrap)
                        }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                            l.skin.css("padding" + t, y(l.padding[e]))
                        }), s.trigger("onReady"), "inline" === o || "html" === o) {
                        if (!l.content || !l.content.length) return s._error("content")
                    } else if (!r) return s._error("href");
                    "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad()
                } else s.coming = null
            },
            _error: function(e) {
                n.extend(s.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: s.coming.tpl.error
                }), s._afterLoad()
            },
            _loadImage: function() {
                var e = s.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, s._error("image")
                }, e.src = s.coming.href, !0 !== e.complete && s.showLoading()
            },
            _loadAjax: function() {
                var e = s.coming;
                s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                    },
                    success: function(t, n) {
                        "success" === n && (e.content = t, s._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = s.coming,
                    t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
                n(e.wrap).bind("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (s.showLoading(), t.one("load", function() {
                    n(this).data("ready", 1), c || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
            },
            _preloadImages: function() {
                var e, t, n = s.group,
                    r = s.current,
                    o = n.length,
                    i = r.preload ? Math.min(r.preload, o - 1) : 0;
                for (t = 1; t <= i; t += 1) "image" === (e = n[(r.index + t) % o]).type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, r, o, i, a, l = s.coming,
                    u = s.current,
                    c = "fancybox-placeholder";
                if (s.hideLoading(), l && !1 !== s.isActive) {
                    if (!1 === s.trigger("afterLoad", l, u)) return l.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null);
                    switch (u && (s.trigger("beforeChange", u), u.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = l, t = l.content, r = l.type, o = l.scrolling, n.extend(s, {
                        wrap: e.wrap,
                        skin: e.skin,
                        outer: e.outer,
                        inner: e.inner,
                        current: e,
                        previous: u
                    }), i = e.href, r) {
                        case "inline":
                        case "ajax":
                        case "html":
                            e.selector ? t = n("<div>").html(t).find(e.selector) : p(t) && (t.data(c) || t.data(c, n('<div class="' + c + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                                n(this).find(t).length && t.hide().replaceAll(t.data(c)).data(c, !1)
                            }));
                            break;
                        case "image":
                            t = e.tpl.image.replace("{href}", i);
                            break;
                        case "swf":
                            t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + i + '"></param>', a = "", n.each(e.swf, function(e, n) {
                                t += '<param name="' + e + '" value="' + n + '"></param>', a += " " + e + '="' + n + '"'
                            }), t += '<embed src="' + i + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                    }
                    p(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? u.prevMethod && s.transitions[u.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages()
                }
            },
            _setDimension: function() {
                var e, t, r, o, i, a, l, u, c, p, d, h, v, g, b, w = s.getViewport(),
                    x = 0,
                    T = !1,
                    P = !1,
                    j = s.wrap,
                    k = s.skin,
                    Y = s.inner,
                    C = s.current,
                    S = C.width,
                    Q = C.height,
                    _ = C.minWidth,
                    A = C.minHeight,
                    D = C.maxWidth,
                    M = C.maxHeight,
                    E = C.scrolling,
                    O = C.scrollOutside ? C.scrollbarWidth : 0,
                    $ = C.margin,
                    I = m($[1] + $[3]),
                    L = m($[0] + $[2]);
                if (j.add(k).add(Y).width("auto").height("auto").removeClass("fancybox-tmp"), e = m(k.outerWidth(!0) - k.width()), t = m(k.outerHeight(!0) - k.height()), r = I + e, o = L + t, i = f(S) ? (w.w - r) * m(S) / 100 : S, a = f(Q) ? (w.h - o) * m(Q) / 100 : Q, "iframe" === C.type) {
                    if (g = C.content, C.autoHeight && 1 === g.data("ready")) try {
                        g[0].contentWindow.document.location && (Y.width(i).height(9999), b = g.contents().find("body"), O && b.css("overflow-x", "hidden"), a = b.outerHeight(!0))
                    } catch (e) {}
                } else(C.autoWidth || C.autoHeight) && (Y.addClass("fancybox-tmp"), C.autoWidth || Y.width(i), C.autoHeight || Y.height(a), C.autoWidth && (i = Y.width()), C.autoHeight && (a = Y.height()), Y.removeClass("fancybox-tmp"));
                if (S = m(i), Q = m(a), c = i / a, _ = m(f(_) ? m(_, "w") - r : _), D = m(f(D) ? m(D, "w") - r : D), A = m(f(A) ? m(A, "h") - o : A), M = m(f(M) ? m(M, "h") - o : M), l = D, u = M, C.fitToView && (D = Math.min(w.w - r, D), M = Math.min(w.h - o, M)), h = w.w - I, v = w.h - L, C.aspectRatio ? (S > D && (Q = m((S = D) / c)), Q > M && (S = m((Q = M) * c)), S < _ && (Q = m((S = _) / c)), Q < A && (S = m((Q = A) * c))) : (S = Math.max(_, Math.min(S, D)), C.autoHeight && "iframe" !== C.type && (Y.width(S), Q = Y.height()), Q = Math.max(A, Math.min(Q, M))), C.fitToView)
                    if (Y.width(S).height(Q), j.width(S + e), p = j.width(), d = j.height(), C.aspectRatio)
                        for (;
                            (p > h || d > v) && S > _ && Q > A && !(x++ > 19);) Q = Math.max(A, Math.min(M, Q - 10)), (S = m(Q * c)) < _ && (Q = m((S = _) / c)), S > D && (Q = m((S = D) / c)), Y.width(S).height(Q), j.width(S + e), p = j.width(), d = j.height();
                    else S = Math.max(_, Math.min(S, S - (p - h))), Q = Math.max(A, Math.min(Q, Q - (d - v)));
                O && "auto" === E && Q < a && S + e + O < h && (S += O), Y.width(S).height(Q), j.width(S + e), p = j.width(), d = j.height(), T = (p > h || d > v) && S > _ && Q > A, P = C.aspectRatio ? S < l && Q < u && S < i && Q < a : (S < l || Q < u) && (S < i || Q < a), n.extend(C, {
                    dim: {
                        width: y(p),
                        height: y(d)
                    },
                    origWidth: i,
                    origHeight: a,
                    canShrink: T,
                    canExpand: P,
                    wPadding: e,
                    hPadding: t,
                    wrapSpace: d - k.outerHeight(!0),
                    skinSpace: k.height() - Q
                }), !g && C.autoHeight && Q > A && Q < M && !P && Y.height("auto")
            },
            _getPosition: function(e) {
                var t = s.current,
                    n = s.getViewport(),
                    r = t.margin,
                    o = s.wrap.width() + r[1] + r[3],
                    i = s.wrap.height() + r[0] + r[2],
                    a = {
                        position: "absolute",
                        top: r[0],
                        left: r[3]
                    };
                return t.autoCenter && t.fixed && !e && i <= n.h && o <= n.w ? a.position = "fixed" : t.locked || (a.top += n.y, a.left += n.x), a.top = y(Math.max(a.top, a.top + (n.h - i) * t.topRatio)), a.left = y(Math.max(a.left, a.left + (n.w - o) * t.leftRatio)), a
            },
            _afterZoomIn: function() {
                var e = s.current;
                e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(e) {
                    e.preventDefault(), s.close()
                }), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), s.trigger("afterClose", e)
            }
        }), s.transitions = {
            getOrigPosition: function() {
                var e = s.current,
                    t = e.element,
                    n = e.orig,
                    r = {},
                    o = 50,
                    i = 50,
                    a = e.hPadding,
                    l = e.wPadding,
                    u = s.getViewport();
                return !n && e.isDom && t.is(":visible") && ((n = t.find("img:first")).length || (n = t)), p(n) ? (r = n.offset(), n.is("img") && (o = n.outerWidth(), i = n.outerHeight())) : (r.top = u.y + (u.h - i) * e.topRatio, r.left = u.x + (u.w - o) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (r.top -= u.y, r.left -= u.x), r = {
                    top: y(r.top - a * e.topRatio),
                    left: y(r.left - l * e.leftRatio),
                    width: y(o + l),
                    height: y(i + a)
                }
            },
            step: function(e, t) {
                var n, r, o = t.prop,
                    i = s.current,
                    a = i.wrapSpace,
                    l = i.skinSpace;
                "width" !== o && "height" !== o || (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), r = e - ("width" === o ? i.wPadding : i.hPadding), s.skin[o](m("width" === o ? r : r - a * n)), s.inner[o](m("width" === o ? r : r - a * n - l * n)))
            },
            zoomIn: function() {
                var e = s.current,
                    t = e.pos,
                    r = e.openEffect,
                    o = "elastic" === r,
                    i = n.extend({
                        opacity: 1
                    }, t);
                delete i.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1), s.wrap.css(t).animate(i, {
                    duration: "none" === r ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: o ? this.step : null,
                    complete: s._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = s.current,
                    t = e.closeEffect,
                    n = "elastic" === t,
                    r = {
                        opacity: .1
                    };
                n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1)), s.wrap.animate(r, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: n ? this.step : null,
                    complete: s._afterZoomOut
                })
            },
            changeIn: function() {
                var e, t = s.current,
                    n = t.nextEffect,
                    r = t.pos,
                    o = {
                        opacity: 1
                    },
                    i = s.direction;
                r.opacity = .1, "elastic" === n && (e = "down" === i || "up" === i ? "top" : "left", "down" === i || "right" === i ? (r[e] = y(m(r[e]) - 200), o[e] = "+=200px") : (r[e] = y(m(r[e]) + 200), o[e] = "-=200px")), "none" === n ? s._afterZoomIn() : s.wrap.css(r).animate(o, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: s._afterZoomIn
                })
            },
            changeOut: function() {
                var e = s.previous,
                    t = e.prevEffect,
                    r = {
                        opacity: .1
                    },
                    o = s.direction;
                "elastic" === t && (r["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=200px"), e.wrap.animate(r, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        n(this).trigger("onReset").remove()
                    }
                })
            }
        }, s.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !c,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: n("html"),
            create: function(e) {
                e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (i.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    if (n(e.target).hasClass("fancybox-overlay")) return s.isActive ? s.close() : t.close(), !1
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                var e, t;
                i.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = i.scrollTop(), t = i.scrollLeft(), this.el.removeClass("fancybox-lock"), i.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var e, n = "100%";
                this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > e && (n = a.width())) : a.width() > i.width() && (n = a.width()), this.overlay.width(n).height(a.height())
            },
            onReady: function(e, t) {
                var r = this.overlay;
                n(".fancybox-overlay").stop(!0, !0), r || this.create(e), e.locked && this.fixed && t.fixed && (r || (this.margin = a.height() > i.height() && n("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                var r, o;
                t.locked && (!1 !== this.margin && (n("*").filter(function() {
                    return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = i.scrollTop(), o = i.scrollLeft(), this.el.addClass("fancybox-lock"), i.scrollTop(r).scrollLeft(o)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
            }
        }, s.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t, r, o = s.current,
                    i = o.title,
                    a = e.type;
                if (n.isFunction(i) && (i = i.call(o.element, o)), d(i) && "" !== n.trim(i)) {
                    switch (t = n('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + i + "</div>"), a) {
                        case "inside":
                            r = s.skin;
                            break;
                        case "outside":
                            r = s.wrap;
                            break;
                        case "over":
                            r = s.inner;
                            break;
                        default:
                            r = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(m(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](r)
                }
            }
        }, n.fn.fancybox = function(e) {
            var t, r = n(this),
                o = this.selector || "",
                i = function(i) {
                    var a, l, u = n(this).blur(),
                        c = t;
                    i.ctrlKey || i.altKey || i.shiftKey || i.metaKey || u.is(".fancybox-wrap") || (a = e.groupAttr || "data-fancybox-group", (l = u.attr(a)) || (a = "rel", l = u.get(0)[a]), l && "" !== l && "nofollow" !== l && (c = (u = (u = o.length ? n(o) : r).filter("[" + a + '="' + l + '"]')).index(this)), e.index = c, !1 !== s.open(u, e) && i.preventDefault())
                };
            return e = e || {}, t = e.index || 0, o && !1 !== e.live ? a.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", i) : r.unbind("click.fb-start").bind("click.fb-start", i), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, a.ready(function() {
            var t, r;
            void 0 === n.scrollbarWidth && (n.scrollbarWidth = function() {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    r = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), r
            }), void 0 === n.support.fixedPosition && (n.support.fixedPosition = function() {
                var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                return e.remove(), t
            }()), n.extend(s.defaults, {
                scrollbarWidth: n.scrollbarWidth(),
                fixed: n.support.fixedPosition,
                parent: n("body")
            }), t = n(e).width(), o.addClass("fancybox-lock-test"), r = n(e).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (r - t) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery),
    function(e, t) {
        function n(e) {
            return k.exec(e) ? parseFloat(e) / 100 : e
        }

        function r(e) {
            function t() {
                p.pointer = i(S, [!0, !0], o, r)
            }

            function n() {
                r = a(e), o = s(e), p.threshold = l(r)
            }
            var r, o, u = {
                    "mouseenter.parallax": function() {
                        p.timer.add(t)
                    },
                    "mouseleave.parallax": function(e) {
                        p.timer.remove(t), p.pointer = i([e.pageX, e.pageY], [!0, !0], o, r)
                    }
                },
                c = {
                    "resize.parallax": n
                },
                p = {
                    elem: e,
                    events: u,
                    winEvents: c,
                    timer: new Q
                };
            return Y.on(c), e.on(u), n(), p
        }

        function o(e, t, n) {
            var r = e.data(t);
            return r || (r = n ? n(e) : {}, e.data(t, r)), r
        }

        function i(e, t, n, r) {
            for (var o = [], i = 2; i--;) o[i] = (e[i] - n[i]) / r[i], o[i] = o[i] < 0 ? 0 : o[i] > 1 ? 1 : o[i];
            return o
        }

        function a(e) {
            return [e.width(), e.height()]
        }

        function s(e) {
            var t = e.offset() || {
                    left: 0,
                    top: 0
                },
                n = "none" === e.css("borderLeftStyle") ? 0 : parseInt(e.css("borderLeftWidth"), 10),
                r = "none" === e.css("borderTopStyle") ? 0 : parseInt(e.css("borderTopWidth"), 10),
                o = parseInt(e.css("paddingLeft"), 10),
                i = parseInt(e.css("paddingTop"), 10);
            return [t.left + n + o, t.top + r + i]
        }

        function l(e) {
            return [1 / e[0], 1 / e[1]]
        }

        function u(e, t, n) {
            return [t || e.width(), n || e.height()]
        }

        function c(e, r) {
            for (var o = [e, r], i = 2, a = []; i--;) a[i] = "string" == typeof o[i] ? o[i] === t ? 1 : P[a[i]] || n(a[i]) : o[i];
            return a
        }

        function p(e, t) {
            return [j.test(e), j.test(t)]
        }

        function d(e, t, r) {
            for (var o = [e, t], i = 2, a = []; i--;) a[i] = r[i] ? parseInt(o[i], 10) : !0 === o[i] ? 1 : n(o[i]);
            return a
        }

        function f(e, t, n, r) {
            for (var o = 2, i = []; o--;) i[o] = t[o] ? n[o] * (r[o] - e[o]) : e[o] ? n[o] * (1 - e[o]) : 0;
            return i
        }

        function h(e, t) {
            for (var n = 2, r = []; n--;) e[n] && (r[n] = 100 * t[n] + "%");
            return r
        }

        function m(e, t, n, r, o) {
            for (var i = e.offsetParent(), a = e.position(), s = [], l = [], u = 2; u--;) s[u] = n[u] ? 0 : a[0 === u ? "left" : "top"] / (i[0 === u ? "outerWidth" : "outerHeight"]() - o[u]) || 0, l[u] = (s[u] - r[u]) / t[u] || 0;
            return l
        }

        function y(e, t, n, r, o, i) {
            for (var a, s, l = [], u = 2, c = {}; u--;) e[u] && (l[u] = e[u] * i[u] + n[u], t[u] ? (a = o[u], s = -1 * l[u]) : (a = 100 * l[u] + "%", s = l[u] * r[u] * -1), 0 === u ? (c.left = a, c.marginLeft = s) : (c.top = a, c.marginTop = s));
            return {
                transform: "translate(" + (+c.marginLeft || 0) + "px," + (+c.marginTop || 0) + "px)"
            }
        }

        function v(e, t, n, r, o, i, a) {
            var s, l;
            if ((!o[0] || Math.abs(e[0] - (+t[0] || 0)) < n[0]) && (!o[1] || Math.abs(e[1] - (+t[1] || 0)) < n[1])) return i && i(), a(e);
            for (s = [], l = 2; l--;) o[l] && (s[l] = e[l] + r * (t[l] - e[l]));
            return a(s)
        }

        function g(e, t, n, r, o, i, a) {
            if (e[0] !== t[0] || e[1] !== t[1]) return a(e)
        }

        function b(e, t, n) {
            e.off(t).removeData("parallax_port"), Y.off(n)
        }

        function w(e, t, n) {
            t.elem.off(n), t.layers = t.layers.not(e), 0 === t.layers.length && b(t.elem, t.events, t.winEvents)
        }

        function x(e) {
            var t = {};
            e[0] && (t.left = "", t.marginLeft = ""), e[1] && (t.top = "", t.marginTop = ""), elem.css(t)
        }
        var T = {
                mouseport: "body",
                xparallax: !0,
                yparallax: !0,
                xorigin: .5,
                yorigin: .5,
                decay: .66,
                frameDuration: 30,
                freezeClass: "freeze"
            },
            P = {
                left: 0,
                top: 0,
                middle: .5,
                center: .5,
                right: 1,
                bottom: 1
            },
            j = /^\d+\s?px$/,
            k = /^\d+\s?%$/,
            Y = e(window),
            C = e(document),
            S = [0, 0],
            Q = function() {
                function e() {
                    function e() {}

                    function r() {
                        var e = s.slice(0),
                            r = e.length,
                            o = -1;
                        for (t && console.log("timer frame()", r); ++o < r;) e[o].call(this);
                        n(a)
                    }

                    function o() {
                        t && console.log("timer start()"), this.start = e, this.stop = i, n(a = r)
                    }

                    function i() {
                        t && console.log("timer stop()"), this.start = o, this.stop = e, a = e
                    }
                    var a, s = [];
                    this.callbacks = s, this.start = o, this.stop = i
                }
                var t = !1,
                    n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                        return window.setTimeout(function() {
                            e()
                        }, 25)
                    };
                return e.prototype = {
                    add: function(e) {
                        for (var n = this.callbacks, r = n.length; r--;)
                            if (n[r] === e) return;
                        this.callbacks.push(e), t && console.log("timer add()", this.callbacks.length)
                    },
                    remove: function(e) {
                        for (var n = this.callbacks, r = n.length; r--;) n[r] === e && n.splice(r, 1);
                        t && console.log("timer remove()", this.callbacks.length), 0 === n.length && this.stop()
                    }
                }, e
            }();
        e.fn.parallax = function(t) {
            var n = e.extend({}, e.fn.parallax.options, t),
                i = arguments,
                a = o(n.mouseport instanceof e ? n.mouseport : e(n.mouseport), "parallax_port", r),
                s = a.timer;
            return this.each(function(t) {
                function r(e) {
                    var t = y(C, Y, S, j, Q, e);
                    x.css(t), _ = e
                }

                function o() {
                    A(a.pointer, _, a.threshold, P, C, D, r)
                }

                function l() {
                    A = g
                }

                function b() {
                    s.remove(o)
                }
                var w = this,
                    x = e(this),
                    T = i[t + 1] ? e.extend({}, n, i[t + 1]) : n,
                    P = T.decay,
                    j = u(x, T.width, T.height),
                    k = c(T.xorigin, T.yorigin),
                    Y = p(T.xparallax, T.yparallax),
                    C = d(T.xparallax, T.yparallax, Y),
                    S = f(C, Y, k, j),
                    Q = h(Y, k),
                    _ = m(x, C, Y, S, j),
                    A = v,
                    D = l,
                    M = {
                        "mouseenter.parallax": function(e) {
                            A = v, D = l, s.add(o), s.start()
                        },
                        "mouseleave.parallax": function(e) {
                            A = v, D = b
                        }
                    };
                e.data(w, "parallax") && x.unparallax(), e.data(w, "parallax", {
                    port: a,
                    events: M,
                    parallax: C
                }), a.elem.on(M), a.layers = a.layers ? a.layers.add(w) : e(w)
            })
        }, e.fn.unparallax = function(t) {
            return this.each(function() {
                var n = e.data(this, "parallax");
                n && (e.removeData(this, "parallax"), w(this, n.port, n.events), t && x(n.parallax))
            })
        }, e.fn.parallax.options = T, C.on("mousemove.parallax", function(e) {
            S = [e.pageX, e.pageY]
        })
    }(jQuery),
    function(e) {
        e.fn.twentytwenty = function(t) {
            var t = e.extend({
                default_offset_pct: .5,
                orientation: "horizontal"
            }, t);
            return this.each(function() {
                function n(e) {
                    clearInterval(T), (o = "vertical" === a ? (e.pageY - b) / x : (e.pageX - i.offset().left) / i.width()) < 0 && (o = 0), o > 1 && (o = 1), v(o)
                }

                function r(e) {
                    k = e, j = o, clearInterval(T), T = setInterval(function() {
                        Math.abs(k - o) < .01 ? clearInterval(T) : v(o + (k - j) / 50)
                    }, 10)
                }
                var o = t.default_offset_pct,
                    i = e(this),
                    a = t.orientation,
                    s = "vertical" === a ? "down" : "left",
                    l = "vertical" === a ? "up" : "right";
                i.wrap("<div class='twentytwenty-wrapper twentytwenty-" + a + "'></div>"), i.append("<div class='twentytwenty-overlay'></div>");
                var u = i.find("img:first"),
                    c = i.find("img:last");
                i.append("<div class='twentytwenty-handle'></div>");
                var p = i.find(".twentytwenty-handle");
                p.append("<span class='twentytwenty-" + s + "-arrow'></span>"), p.append("<span class='twentytwenty-" + l + "-arrow'></span>"), i.addClass("twentytwenty-container"), u.addClass("twentytwenty-before"), c.addClass("twentytwenty-after");
                var d = i.find(".twentytwenty-overlay");
                d.append("<div class='twentytwenty-before-label'></div>"), d.append("<div class='twentytwenty-after-label'></div>");
                var f = d.find(".twentytwenty-before-label"),
                    h = d.find(".twentytwenty-after-label"),
                    m = function(e) {
                        var t = u.width(),
                            n = u.height();
                        return {
                            w: t + "px",
                            h: n + "px",
                            cw: e * t + "px",
                            ch: e * n + "px"
                        }
                    },
                    y = function(e) {
                        "vertical" === a ? u.css("clip", "rect(0," + e.w + "," + e.ch + ",0)") : (u.css("clip", "rect(0," + e.cw + "," + i.height() + "px,0)"), f.css("clip", "rect(0," + e.cw + "," + i.height() + "px,0)")), i.css("height", e.h)
                    },
                    v = function(e) {
                        o = e;
                        var t = m(e);
                        p.css("vertical" === a ? "top" : "left", "vertical" === a ? t.ch : t.cw), y(t)
                    };
                e(window).on("resize.twentytwenty", function(e) {
                    v(o)
                });
                var g = 0,
                    b = 0,
                    w = 0,
                    x = 0;
                p.on("movestart", function(e) {
                    (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && "vertical" !== a ? e.preventDefault() : (e.distX < e.distY && e.distX < -e.distY || e.distX > e.distY && e.distX > -e.distY) && "vertical" === a && e.preventDefault(), i.addClass("active"), g = i.offset().left, b = i.offset().top, w = u.width(), x = u.height()
                }), p.on("moveend", function(e) {
                    i.removeClass("active")
                }), p.on("move", n), i.on("click", n);
                var T, P = "after",
                    j = o,
                    k = 0;
                p.hover(function() {
                    clearInterval(T)
                }), f.hover(function() {
                    "before" !== P && (r(.62), P = "before")
                }, function() {}), h.hover(function() {
                    "after" !== P && (r(.38), P = "after")
                }, function() {}), i.find("img").on("mousedown", function(e) {
                    e.preventDefault()
                }), e(window).trigger("resize.twentytwenty")
            })
        }
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        var t = function(n, r) {
            this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, this.dataOptions(), r), this.init()
        };
        t.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(e, t) {
                return e.toFixed(t.decimals)
            },
            onUpdate: null,
            onComplete: null
        }, t.prototype.init = function() {
            this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
        }, t.prototype.dataOptions = function() {
            var e = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                t = Object.keys(e);
            for (var n in t) {
                var r = t[n];
                void 0 === e[r] && delete e[r]
            }
            return e
        }, t.prototype.update = function() {
            this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
        }, t.prototype.render = function() {
            var e = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(e)
        }, t.prototype.restart = function() {
            this.stop(), this.init(), this.start()
        }, t.prototype.start = function() {
            this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        }, t.prototype.stop = function() {
            this.interval && clearInterval(this.interval)
        }, t.prototype.toggle = function() {
            this.interval ? this.stop() : this.start()
        }, e.fn.countTo = function(n) {
            return this.each(function() {
                var r = e(this),
                    o = r.data("countTo"),
                    i = !o || "object" == typeof n,
                    a = "object" == typeof n ? n : {},
                    s = "string" == typeof n ? n : "start";
                i && (o && o.stop(), r.data("countTo", o = new t(this, a))), o[s].call(o)
            })
        }
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(e) {
        "use strict";
        e.fn.spoiler = function(t) {
            var n = e.extend({
                    contentClass: "spoiler-content",
                    paddingValue: 6,
                    triggerEvents: !1,
                    includePadding: !0,
                    buttonActiveClass: "spoiler-active",
                    spoilerVisibleClass: "spoiler-content-visible"
                }, t),
                r = "." + n.contentClass,
                o = {};
            return e(r).each(function() {
                var t = e(this);
                t.css("overflow", "hidden");
                var r = t.prop("scrollHeight");
                r = n.includePadding ? r + parseInt(n.paddingValue, 10) : r;
                var i = t.attr("data-spoiler-link");
                o[i] = r + "px", t.css("height", "0")
            }), e(this).on("click", function() {
                var t = e(this),
                    i = t.attr("data-spoiler-link"),
                    a = e(r + "[data-spoiler-link=" + i + "]"),
                    s = {
                        height: o[i]
                    },
                    l = {
                        height: "0"
                    },
                    u = a.hasClass(n.spoilerVisibleClass);
                u ? a.css(l) : a.css(s), n.triggerEvents && (u ? t.trigger("jq-spoiler-hidden") : t.trigger("jq-spoiler-visible")), a.toggleClass(n.spoilerVisibleClass), t.toggleClass(n.buttonActiveClass)
            }), this
        }
    });
var ytp = ytp || {},
    getYTPVideoID = function(e) {
        var t, n;
        return e.indexOf("youtu.be") > 0 ? t = (n = (t = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null) ? t.substr(0, t.lastIndexOf("?")) : t : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], n = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : n = (t = e.length > 15 ? null : e) ? null : e, {
            videoID: t,
            playlistID: n
        }
    };
! function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.0.11",
        build: "6092",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            mobileFallbackImage: null,
            gaTrack: !0,
            optimizeDisplay: !0,
            anchor: "center,center",
            onReady: function(e) {},
            onError: function(e, t) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        loading: null,
        locationProtocol: "https:",
        filters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                void 0 !== property && void 0 !== property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    modestbranding: 1,
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                        html5: 1
                    }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1), YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, YTPlayer.isPlayer = !1, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide();
                    var overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                    YTPlayer.isPlayer && overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay()
                    });
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    wrapper.css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    });
                    var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                    if (playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                            opacity: 1
                        }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script><\/script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return YTPlayer.opt.mobileFallbackImage && wrapper.css({
                        backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        opacity: 1
                    }), $YTPlayer.remove(), void jQuery(document).trigger("YTPUnavailable");
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = void 0 === YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                            if (!YTPlayer.isInit)
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .563 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        width: "100%",
                                        height: h,
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target, playerBox.css({
                                                    opacity: 1
                                                }), YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                } else new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(e) {
                                            YTPlayer.player = e.target, YTPlayer.isReady || (YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay), YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function() {
                                                $YTPlayer.optimizeDisplay()
                                            }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.preventTrigger) YTPlayer.preventTrigger = !1;
                                                else {
                                                    YTPlayer.state = state;
                                                    var eventType;
                                                    switch (state) {
                                                        case -1:
                                                            eventType = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            eventType = "YTPEnd";
                                                            break;
                                                        case 1:
                                                            eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                            break;
                                                        case 2:
                                                            eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 3:
                                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            eventType = "YTPCued"
                                                    }
                                                    var YTPEvent = jQuery.Event(eventType);
                                                    YTPEvent.time = YTPlayer.currentTime, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                                }
                                            }
                                        },
                                        onPlaybackQualityChange: function(e) {
                                            var t = e.target.getPlaybackQuality(),
                                                n = jQuery.Event("YTPQualityChange");
                                            n.quality = t, jQuery(YTPlayer).trigger(n)
                                        },
                                        onError: function(e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                        }))
                    }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        getDataFromAPI: function(e) {
            if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                    if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                        var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                        e.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                            backgroundSize: "cover"
                        }), e.opt.backgroundUrl = t
                    }
                }), e.videoData) setTimeout(function() {
                e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
                var t = jQuery.Event("YTPData");
                t.prop = {};
                for (var n in e.videoData) t.prop[n] = e.videoData[n];
                jQuery(e).trigger(t)
            }, 500), e.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(t) {
                e.dataReceived = !0, jQuery(e).trigger("YTPChanged"),
                    function(t) {
                        e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                    }(t.items[0].snippet), e.hasData = !0;
                var n = jQuery.Event("YTPData");
                n.prop = {};
                for (var r in e.videoData) n.prop[r] = e.videoData[r];
                jQuery(e).trigger(n)
            });
            else {
                if (setTimeout(function() {
                        jQuery(e).trigger("YTPChanged")
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }), e.opt.backgroundUrl = t
                }
                e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }!e.isPlayer || e.opt.autoPlay || jQuery.browser.mobile || (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            return this.get(0).videoData
        },
        getVideoID: function() {
            return this.get(0).videoID || !1
        },
        setVideoQuality: function(e) {
            this.get(0).player.setPlaybackQuality(e)
        },
        playlist: function(e, t, n, r) {
            var o = this.get(0);
            return o.isPlayList = !0, t && (e = jQuery.shuffle(e)), o.videoID || (o.videos = e, o.videoCounter = 0, o.videoLength = e.length, jQuery(o).data("property", e[0]), jQuery(o).mb_YTPlayer()), "function" == typeof n && jQuery(o).one("YTPChanged", function() {
                n(o)
            }), jQuery(o).on("YTPEnd", function() {
                r = void 0 === r || r, jQuery(o).playNext(r)
            }), this
        },
        playNext: function(e) {
            var t = this.get(0);
            return t.checkForStartAt && (clearTimeout(t.checkForStartAt), clearInterval(t.getState)), t.videoCounter++, t.videoCounter >= t.videoLength && e && (t.videoCounter = 0), t.videoCounter < t.videoLength ? jQuery(t).YTPChangeMovie(t.videos[t.videoCounter]) : t.videoCounter--, this
        },
        playPrev: function() {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this
        },
        playIndex: function(e) {
            var t = this.get(0);
            return e -= 1, t.checkForStartAt && (clearInterval(t.checkForStartAt), clearInterval(t.getState)), t.videoCounter = e, t.videoCounter >= t.videoLength - 1 && (t.videoCounter = t.videoLength - 1), jQuery(t).YTPChangeMovie(t.videos[t.videoCounter]), this
        },
        changeMovie: function(e) {
            var t = this.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, "true" == t.opt.loop && (t.opt.loop = 9999), jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function() {
                var e = jQuery.Event("YTPChangeMovie");
                e.time = t.currentTime, e.videoId = t.videoID, jQuery(t).trigger(e), jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(t), jQuery.mbYTPlayer.getDataFromAPI(t)
            }), jQuery.mbYTPlayer.applyMask(t)
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            return ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this
        },
        fullscreen: function(real) {
            function RunPrefixMethod(e, t) {
                for (var n, r, o = ["webkit", "moz", "ms", "o", ""], i = 0; i < o.length && !e[n];) {
                    if (n = t, "" == o[i] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)), n = o[i] + n, "undefined" != (r = typeof e[n])) return o = [o[i]], "function" == r ? e[n]() : e[n];
                    i++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            void 0 === real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 500), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;
            else {
                function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    })
                }
                jQuery(document).on("mousemove.YTPlayer", function(e) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
                }), hideMouse(), real ? (videoWrapper.css({
                    opacity: 0
                }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                    videoWrapper.CSSAnimate({
                        opacity: 1
                    }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                }, 500)) : videoWrapper.css({
                    zIndex: 1e4
                }).CSSAnimate({
                    opacity: 1
                }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
            }
            return this
        },
        toggleLoops: function() {
            var e = this.get(0),
                t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this
        },
        play: function() {
            var e = this.get(0);
            return e.isReady ? (e.player.playVideo(), e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, 2e3), jQuery(e.playerEl).CSSAnimate({
                opacity: 1
            }, 1e3), jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, jQuery(e).css("background-image", "none"), this) : this
        },
        togglePlay: function(e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this
        },
        stop: function() {
            var e = this.get(0);
            return jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this
        },
        pause: function() {
            var e = this.get(0);
            return e.player.pauseVideo(), e.state = 2, this
        },
        seekTo: function(e) {
            return this.get(0).player.seekTo(e, !0), this
        },
        setVolume: function(e) {
            var t = this.get(0);
            return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this
        },
        toggleVolume: function() {
            var e = this.get(0);
            if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var t = jQuery.Event("YTPMuted");
                return t.time = e.currentTime, e.canTrigger && jQuery(e).trigger(t), this
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var t = jQuery.Event("YTPUnmuted");
                return t.time = e.currentTime, e.canTrigger && jQuery(e).trigger(t), this
            }
        },
        applyFilter: function(e, t) {
            return this.each(function() {
                var n = this;
                n.filters[e].value = t, n.filtersEnabled && jQuery(n).YTPEnableFilters()
            })
        },
        applyFilters: function(e) {
            return this.each(function() {
                var t = this;
                if (t.isReady) {
                    for (var n in e) jQuery(t).YTPApplyFilter(n, e[n]);
                    jQuery(t).trigger("YTPFiltersApplied")
                } else jQuery(t).on("YTPReady", function() {
                    jQuery(t).YTPApplyFilters(e)
                })
            })
        },
        toggleFilter: function(e, t) {
            return this.each(function() {
                var n = this;
                n.filters[e].value ? n.filters[e].value = 0 : n.filters[e].value = t, n.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function(e) {
            return this.each(function() {
                var t = this;
                t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled)
            })
        },
        disableFilters: function() {
            return this.each(function() {
                var e = this,
                    t = jQuery(e.playerEl);
                t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1
            })
        },
        enableFilters: function() {
            return this.each(function() {
                var e = this,
                    t = jQuery(e.playerEl),
                    n = "";
                for (var r in e.filters) e.filters[r].value && (n += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") ");
                t.css("-webkit-filter", n), t.css("filter", n), e.filtersEnabled = !0
            })
        },
        removeFilter: function(e, t) {
            return this.each(function() {
                var n = this;
                if ("function" == typeof e && (t = e, e = null), e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e);
                else
                    for (var r in n.filters) jQuery(this).YTPApplyFilter(r, 0), "function" == typeof t && t(r)
            })
        },
        getFilters: function() {
            return this.get(0).filters
        },
        addMask: function(e) {
            var t = this.get(0),
                n = t.overlay;
            e || (e = t.actualMask);
            var r = jQuery("<img/>").attr("src", e).on("load", function() {
                n.CSSAnimate({
                    opacity: 0
                }, 500, function() {
                    t.hasMask = !0, r.remove(), n.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), n.CSSAnimate({
                        opacity: 1
                    }, 500)
                })
            });
            return this
        },
        removeMask: function() {
            var e = this.get(0),
                t = e.overlay;
            return t.CSSAnimate({
                opacity: 0
            }, 500, function() {
                e.hasMask = !1, t.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), t.CSSAnimate({
                    opacity: 1
                }, 500)
            }), this
        },
        applyMask: function(e) {
            var t = jQuery(e);
            if (t.off("YTPTime.mask"), e.opt.mask)
                if ("string" == typeof e.opt.mask) t.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask;
                else if ("object" == typeof e.opt.mask) {
                for (var n in e.opt.mask)
                    if (e.opt.mask[n]) jQuery("<img/>").attr("src", e.opt.mask[n]);
                e.opt.mask[0] && t.YTPAddMask(e.opt.mask[0]), t.on("YTPTime.mask", function(n) {
                    for (var r in e.opt.mask) n.time == r && (e.opt.mask[r] ? (t.YTPAddMask(e.opt.mask[r]), e.actualMask = e.opt.mask[r]) : t.YTPRemoveMask())
                })
            }
        },
        toggleMask: function() {
            var e = this.get(0),
                t = $(e);
            return e.hasMask ? t.YTPRemoveMask() : t.YTPAddMask(), this
        },
        manageProgress: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPProgress"),
                r = t.find(".mb_YTPLoaded"),
                o = t.find(".mb_YTPseekbar"),
                i = n.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()),
                s = Math.floor(e.player.getDuration()),
                l = a * i / s,
                u = 100 * e.player.getVideoLoadedFraction();
            return r.css({
                left: 0,
                width: u + "%"
            }), o.css({
                left: 0,
                width: l
            }), {
                totalTime: s,
                currentTime: a
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                        timeBar.css({
                            width: e.clientX - timeBar.offset().left
                        }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var t = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer.goto = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            if (clearInterval(YTPlayer.getState), !jQuery.contains(document, YTPlayer)) return jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
            jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1,
                    stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 1e3), YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, 500, function() {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        var e = jQuery.Event("YTPEnd");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                            backgroundSize: "cover"
                        })
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()
                }
            }, interval)
        },
        getTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.totalTime)
        },
        checkForStart: function(e) {
            var t = jQuery(e);
            if (jQuery.contains(document, e)) {
                if (e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.controlBar = !1, e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                    var n = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                    e.overlay.addClass(e.isRetina ? n + " retina" : n)
                } else e.overlay.removeClass(function(e, t) {
                    var n = t.split(" "),
                        r = [];
                    return jQuery.each(n, function(e, t) {
                        /raster.*/.test(t) && r.push(t)
                    }), r.push("retina"), r.join(" ")
                });
                var r = e.opt.startAt ? e.opt.startAt : 1;
                e.player.playVideo(), e.player.seekTo(r, !0), e.checkForStartAt = setInterval(function() {
                    jQuery(e).YTPMute();
                    var n = e.player.getVideoLoadedFraction() >= r / e.player.getDuration();
                    if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= r && n) {
                        clearInterval(e.checkForStartAt), "function" == typeof e.opt.onReady && e.opt.onReady(e), e.isReady = !0;
                        var o = jQuery.Event("YTPReady");
                        if (o.time = e.currentTime, jQuery(e).trigger(o), e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay) {
                            var i = jQuery.Event("YTPStart");
                            i.time = e.currentTime, jQuery(e).trigger(i), t.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({
                                opacity: 1
                            }, 1e3), t.YTPPlay(), e.wrapper.CSSAnimate({
                                opacity: e.isAlone ? 1 : e.opt.opacity
                            }, 1e3), jQuery.browser.safari && (e.safariPlay = setInterval(function() {
                                1 != e.state ? t.YTPPlay() : clearInterval(e.safariPlay)
                            }, 10)), t.on("YTPReady", function() {
                                t.YTPPlay()
                            })
                        } else e.player.pauseVideo(), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
                            opacity: 1
                        }, 500), e.wrapper.CSSAnimate({
                            opacity: e.isAlone ? 1 : e.opt.opacity
                        }, 500)), e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"), setTimeout(function() {
                            e.loading.fadeOut()
                        }, 100)), e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3)
                    } else jQuery.browser.safari && (e.player.playVideo(), r >= 0 && e.player.seekTo(r, !0))
                }, 1)
            } else jQuery(e).YTPPlayerDestroy()
        },
        setAnchor: function(e) {
            this.optimizeDisplay(e)
        },
        getAnchor: function() {
            return this.get(0).opt.anchor
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e - 60 * t);
            return (t <= 9 ? "0" + t : t) + " : " + (n <= 9 ? "0" + n : n)
        }
    }, jQuery.fn.optimizeDisplay = function(e) {
        var t = this.get(0),
            n = jQuery(t.playerEl),
            r = {};
        t.opt.anchor = e || t.opt.anchor, t.opt.anchor = "undefined " != typeof t.opt.anchor ? t.opt.anchor : "center,center";
        var o = t.opt.anchor.split(",");
        if (t.opt.optimizeDisplay) {
            var i = t.isPlayer ? 0 : 80,
                a = {},
                s = t.wrapper;
            a.width = s.outerWidth(), a.height = s.outerHeight() + i, r.width = a.width, r.height = "16/9" == t.opt.ratio ? Math.ceil(r.width * (9 / 16)) : Math.ceil(.75 * r.width), r.marginTop = -(r.height - a.height) / 2, r.marginLeft = 0;
            var l = r.height < a.height;
            l && (r.height = a.height, r.width = "16/9" == t.opt.ratio ? Math.floor(r.height * (16 / 9)) : Math.floor(r.height * (4 / 3)), r.marginTop = 0, r.marginLeft = -(r.width - a.width) / 2);
            for (var u in o)
                if (o.hasOwnProperty(u)) switch (o[u].replace(/ /g, "")) {
                    case "top":
                        r.marginTop = l ? -(r.height - a.height) / 2 : 0;
                        break;
                    case "bottom":
                        r.marginTop = l ? 0 : -(r.height - a.height);
                        break;
                    case "left":
                        r.marginLeft = 0;
                        break;
                    case "right":
                        r.marginLeft = l ? -(r.width - a.width) : 0;
                        break;
                    default:
                        r.width > a.width && (r.marginLeft = -(r.width - a.width) / 2)
                }
        } else r.width = "100%", r.height = "100%", r.marginTop = 0, r.marginLeft = 0;
        n.css({
            width: r.width,
            height: r.height,
            marginTop: r.marginTop,
            marginLeft: r.marginLeft,
            maxWidth: "initial"
        })
    }, jQuery.shuffle = function(e) {
        for (var t = e.slice(), n = t.length, r = n; r--;) {
            var o = parseInt(Math.random() * n),
                i = t[r];
            t[r] = t[o], t[o] = i
        }
        return t
    }, jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function() {
    var e = (document.body || document.documentElement).style;
    return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var n in t) {
            "transform" === n && (t[jQuery.CSS.sfx + "transform"] = t[n], delete t[n]), "transform-origin" === n && (t[jQuery.CSS.sfx + "transform-origin"] = e[n], delete t[n]), "filter" !== n || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[n], delete t[n]), "blur" === n && setFilter(t, "blur", e[n]), "brightness" === n && setFilter(t, "brightness", e[n]), "contrast" === n && setFilter(t, "contrast", e[n]), "grayscale" === n && setFilter(t, "grayscale", e[n]), "hueRotate" === n && setFilter(t, "hueRotate", e[n]), "invert" === n && setFilter(t, "invert", e[n]), "saturate" === n && setFilter(t, "saturate", e[n]), "sepia" === n && setFilter(t, "sepia", e[n]);
            var r = "";
            "x" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " translateX(" + setUnit(e[n], "px") + ")", delete t[n]), "y" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " translateY(" + setUnit(e[n], "px") + ")", delete t[n]), "z" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " translateZ(" + setUnit(e[n], "px") + ")", delete t[n]), "rotate" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotate(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateX" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotateX(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateY" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotateY(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateZ" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotateZ(" + setUnit(e[n], "deg") + ")", delete t[n]), "scale" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scale(" + setUnit(e[n], "") + ")", delete t[n]), "scaleX" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scaleX(" + setUnit(e[n], "") + ")", delete t[n]), "scaleY" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scaleY(" + setUnit(e[n], "") + ")", delete t[n]), "scaleZ" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scaleZ(" + setUnit(e[n], "") + ")", delete t[n]), "skew" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " skew(" + setUnit(e[n], "deg") + ")", delete t[n]), "skewX" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " skewX(" + setUnit(e[n], "deg") + ")", delete t[n]), "skewY" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " skewY(" + setUnit(e[n], "deg") + ")", delete t[n]), "perspective" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " perspective(" + setUnit(e[n], "px") + ")", delete t[n])
        }
        return t
    },
    getProp: function(e) {
        var t = [];
        for (var n in e) t.indexOf(n) < 0 && t.push(uncamel(n));
        return t.join(",")
    },
    animate: function(e, t, n, r, o) {
        return this.each(function() {
            function i() {
                a.called = !0, a.CSSAIsRunning = !1, s.off(jQuery.CSS.transitionEnd + "." + a.id), clearTimeout(a.timeout), s.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof o && o.apply(a), "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)
            }
            var a = this,
                s = jQuery(this);
            a.id = a.id || "CSSA_" + (new Date).getTime();
            var l = l || {
                type: "noEvent"
            };
            if (a.CSSAIsRunning && a.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9) a.CSSqueue = function() {
                s.CSSAnimate(e, t, n, r, o)
            };
            else if (a.CSSqueue = null, a.eventType = l.type, 0 !== s.length && e) {
                if (e = jQuery.normalizeCss(e), a.CSSAIsRunning = !0, "function" == typeof t && (o = t, t = jQuery.fx.speeds._default), "function" == typeof n && (r = n, n = 0), "string" == typeof n && (o = n, n = 0), "function" == typeof r && (o = r, r = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
                    for (var u in jQuery.fx.speeds) {
                        if (t == u) {
                            t = jQuery.fx.speeds[u];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof o && (r = o, o = null), !jQuery.support.CSStransition) {
                    for (var c in e) {
                        if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) {
                            p = e[c];
                            e[d = "left"] = p, delete e[c]
                        }
                        if ("y" === c) {
                            var p = e[c],
                                d = "top";
                            e[d] = p, delete e[c]
                        }("-ms-transform" === c || "-ms-filter" === c) && delete e[c]
                    }
                    return void s.delay(n).animate(e, t, o)
                }
                var f = {
                    default: "ease",
                    in: "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                f[r] && (r = f[r]), s.off(jQuery.CSS.transitionEnd + "." + a.id);
                var h = jQuery.CSS.getProp(e),
                    m = {};
                jQuery.extend(m, e), m[jQuery.CSS.sfx + "transition-property"] = h, m[jQuery.CSS.sfx + "transition-duration"] = t + "ms", m[jQuery.CSS.sfx + "transition-delay"] = n + "ms", m[jQuery.CSS.sfx + "transition-timing-function"] = r, setTimeout(function() {
                    s.one(jQuery.CSS.transitionEnd + "." + a.id, i), s.css(m)
                }, 1), a.timeout = setTimeout(function() {
                    return a.called || !o ? (a.called = !1, void(a.CSSAIsRunning = !1)) : (s.css(jQuery.CSS.sfx + "transition", ""), o.apply(a), a.CSSAIsRunning = !1, void("function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)))
                }, t + n + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(e) {
    return this.each(function() {
        var t = jQuery(this),
            n = jQuery.normalizeCss(e);
        t.css(n)
    })
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
        jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3,
            end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
        jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3,
            end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
    function(e) {
        e.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            events: {
                start: e.browser.mobile ? "touchstart" : "mousedown",
                end: e.browser.mobile ? "touchend" : "mouseup",
                move: e.browser.mobile ? "touchmove" : "mousemove"
            },
            init: function(t) {
                return this.each(function() {
                    var n = this,
                        r = e(n);
                    r.addClass("simpleSlider"), n.opt = {}, e.extend(n.opt, e.simpleSlider.defaults, t), e.extend(n.opt, r.data());
                    var o = "h" == n.opt.orientation ? "horizontal" : "vertical",
                        o = e("<div/>").addClass("level").addClass(o);
                    r.prepend(o), n.level = o, r.css({
                        cursor: "default"
                    }), "auto" == n.opt.scale && (n.opt.scale = e(n).outerWidth()), r.updateSliderVal(), n.opt.readonly || (r.on(e.simpleSlider.events.start, function(t) {
                        e.browser.mobile && (t = t.changedTouches[0]), n.canSlide = !0, r.updateSliderVal(t), "h" == n.opt.orientation ? r.css({
                            cursor: "col-resize"
                        }) : r.css({
                            cursor: "row-resize"
                        }), t.preventDefault(), t.stopPropagation()
                    }), e(document).on(e.simpleSlider.events.move, function(t) {
                        e.browser.mobile && (t = t.changedTouches[0]), n.canSlide && (e(document).css({
                            cursor: "default"
                        }), r.updateSliderVal(t), t.preventDefault(), t.stopPropagation())
                    }).on(e.simpleSlider.events.end, function() {
                        e(document).css({
                            cursor: "auto"
                        }), n.canSlide = !1, r.css({
                            cursor: "auto"
                        })
                    }))
                })
            },
            updateSliderVal: function(t) {
                var n = this.get(0);
                if (n.opt) {
                    n.opt.initialval = "number" == typeof n.opt.initialval ? n.opt.initialval : n.opt.initialval(n);
                    var r = e(n).outerWidth(),
                        o = e(n).outerHeight();
                    n.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof t ? t * r / n.opt.scale : n.opt.initialval * r / n.opt.scale, n.y = "object" == typeof t ? t.clientY + document.body.scrollTop - this.offset().top : "number" == typeof t ? (n.opt.scale - n.opt.initialval - t) * o / n.opt.scale : n.opt.initialval * o / n.opt.scale, n.y = this.outerHeight() - n.y, n.scaleX = n.x * n.opt.scale / r, n.scaleY = n.y * n.opt.scale / o, n.outOfRangeX = n.scaleX > n.opt.scale ? n.scaleX - n.opt.scale : 0 > n.scaleX ? n.scaleX : 0, n.outOfRangeY = n.scaleY > n.opt.scale ? n.scaleY - n.opt.scale : 0 > n.scaleY ? n.scaleY : 0, n.outOfRange = "h" == n.opt.orientation ? n.outOfRangeX : n.outOfRangeY, n.value = void 0 !== t ? "h" == n.opt.orientation ? n.x >= this.outerWidth() ? n.opt.scale : 0 >= n.x ? 0 : n.scaleX : n.y >= this.outerHeight() ? n.opt.scale : 0 >= n.y ? 0 : n.scaleY : "h" == n.opt.orientation ? n.scaleX : n.scaleY, "h" == n.opt.orientation ? n.level.width(Math.floor(100 * n.x / r) + "%") : n.level.height(Math.floor(100 * n.y / o)), "function" == typeof n.opt.callback && n.opt.callback(n)
                }
            }
        }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
    }(jQuery),
    function(e) {
        e.mbCookie = {
            set: function(e, t, n, r) {
                t = JSON.stringify(t), n || (n = 7), r = r ? "; domain=" + r : "";
                var o, i = new Date;
                i.setTime(i.getTime() + 864e5 * n), o = "; expires=" + i.toGMTString(), document.cookie = e + "=" + t + o + "; path=/" + r
            },
            get: function(e) {
                for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    for (var o = n[r];
                        " " == o.charAt(0);) o = o.substring(1, o.length);
                    if (0 == o.indexOf(t)) return JSON.parse(o.substring(t.length, o.length))
                }
                return null
            },
            remove: function(t) {
                e.mbCookie.set(t, "", -1)
            }
        }, e.mbStorage = {
            set: function(e, t) {
                t = JSON.stringify(t), localStorage.setItem(e, t)
            },
            get: function(e) {
                return localStorage[e] ? JSON.parse(localStorage[e]) : null
            },
            remove: function(e) {
                e ? localStorage.removeItem(e) : localStorage.clear()
            }
        }
    }(jQuery),
    function() {
        function e() {
            A.keyboardSupport && h("keydown", o)
        }

        function t() {
            if (!O && document.body) {
                O = !0;
                var t = document.body,
                    n = document.documentElement,
                    r = window.innerHeight,
                    o = t.scrollHeight;
                if ($ = document.compatMode.indexOf("CSS") >= 0 ? n : t, k = t, e(), top != self) M = !0;
                else if (re && o > r && (t.offsetHeight <= r || n.offsetHeight <= r)) {
                    var i = document.createElement("div");
                    i.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + $.scrollHeight + "px", document.body.appendChild(i);
                    var a;
                    C = function() {
                        a || (a = setTimeout(function() {
                            D || (i.style.height = "0", i.style.height = $.scrollHeight + "px", a = null)
                        }, 500))
                    }, setTimeout(C, 10), h("resize", C);
                    var s = {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    };
                    if ((Y = new X(C)).observe(t, s), $.offsetHeight <= r) {
                        var l = document.createElement("div");
                        l.style.clear = "both", t.appendChild(l)
                    }
                }
                A.fixedBackground || D || (t.style.backgroundAttachment = "scroll", n.style.backgroundAttachment = "scroll")
            }
        }

        function n(e, t, n) {
            if (v(t, n), 1 != A.accelerationMax) {
                var r = Date.now() - Z;
                if (r < A.accelerationDelta) {
                    var o = (1 + 50 / r) / 2;
                    o > 1 && (o = Math.min(o, A.accelerationMax), t *= o, n *= o)
                }
                Z = Date.now()
            }
            if (N.push({
                    x: t,
                    y: n,
                    lastX: t < 0 ? .99 : -.99,
                    lastY: n < 0 ? .99 : -.99,
                    start: Date.now()
                }), !H) {
                var i = U(),
                    a = e === i || e === document.body;
                null == e.$scrollBehavior && f(e) && (e.$scrollBehavior = e.style.scrollBehavior, e.style.scrollBehavior = "auto");
                var s = function(r) {
                    for (var o = Date.now(), i = 0, l = 0, u = 0; u < N.length; u++) {
                        var c = N[u],
                            p = o - c.start,
                            d = p >= A.animationTime,
                            f = d ? 1 : p / A.animationTime;
                        A.pulseAlgorithm && (f = P(f));
                        var h = c.x * f - c.lastX >> 0,
                            m = c.y * f - c.lastY >> 0;
                        i += h, l += m, c.lastX += h, c.lastY += m, d && (N.splice(u, 1), u--)
                    }
                    a ? window.scrollBy(i, l) : (i && (e.scrollLeft += i), l && (e.scrollTop += l)), t || n || (N = []), N.length ? q(s, e, 1e3 / A.frameRate + 1) : (H = !1, null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior, e.$scrollBehavior = null))
                };
                q(s, e, 0), H = !0
            }
        }

        function r(e) {
            O || t();
            var r = e.target;
            if (e.defaultPrevented || e.ctrlKey) return !0;
            if (y(k, "embed") || y(r, "embed") && /\.pdf/i.test(r.src) || y(k, "object") || r.shadowRoot) return !0;
            var o = -e.wheelDeltaX || e.deltaX || 0,
                i = -e.wheelDeltaY || e.deltaY || 0;
            L && (e.wheelDeltaX && b(e.wheelDeltaX, 120) && (o = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && b(e.wheelDeltaY, 120) && (i = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), o || i || (i = -e.wheelDelta || 0), 1 === e.deltaMode && (o *= 40, i *= 40);
            var s = u(r);
            return s ? !!g(i) || (Math.abs(o) > 1.2 && (o *= A.stepSize / 120), Math.abs(i) > 1.2 && (i *= A.stepSize / 120), n(s, o, i), e.preventDefault(), void a()) : !M || !J || (Object.defineProperty(e, "target", {
                value: window.frameElement
            }), parent.wheel(e))
        }

        function o(e) {
            var t = e.target,
                r = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== B.spacebar;
            document.body.contains(k) || (k = document.activeElement);
            var o = /^(textarea|select|embed|object)$/i,
                i = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (e.defaultPrevented || o.test(t.nodeName) || y(t, "input") && !i.test(t.type) || y(k, "video") || x(e) || t.isContentEditable || r) return !0;
            if ((y(t, "button") || y(t, "input") && i.test(t.type)) && e.keyCode === B.spacebar) return !0;
            if (y(t, "input") && "radio" == t.type && F[e.keyCode]) return !0;
            var s = 0,
                l = 0,
                c = u(k);
            if (!c) return !M || !J || parent.keydown(e);
            var p = c.clientHeight;
            switch (c == document.body && (p = window.innerHeight), e.keyCode) {
                case B.up:
                    l = -A.arrowScroll;
                    break;
                case B.down:
                    l = A.arrowScroll;
                    break;
                case B.spacebar:
                    l = -(e.shiftKey ? 1 : -1) * p * .9;
                    break;
                case B.pageup:
                    l = .9 * -p;
                    break;
                case B.pagedown:
                    l = .9 * p;
                    break;
                case B.home:
                    c == document.body && document.scrollingElement && (c = document.scrollingElement), l = -c.scrollTop;
                    break;
                case B.end:
                    var d = c.scrollHeight - c.scrollTop - p;
                    l = d > 0 ? d + 10 : 0;
                    break;
                case B.left:
                    s = -A.arrowScroll;
                    break;
                case B.right:
                    s = A.arrowScroll;
                    break;
                default:
                    return !0
            }
            n(c, s, l), e.preventDefault(), a()
        }

        function i(e) {
            k = e.target
        }

        function a() {
            clearTimeout(Q), Q = setInterval(function() {
                R = z = W = {}
            }, 1e3)
        }

        function s(e, t, n) {
            for (var r = n ? R : z, o = e.length; o--;) r[V(e[o])] = t;
            return t
        }

        function l(e, t) {
            return (t ? R : z)[V(e)]
        }

        function u(e) {
            var t = [],
                n = document.body,
                r = $.scrollHeight;
            do {
                var o = l(e, !1);
                if (o) return s(t, o);
                if (t.push(e), r === e.scrollHeight) {
                    var i = p($) && p(n) || d($);
                    if (M && c($) || !M && i) return s(t, U())
                } else if (c(e) && d(e)) return s(t, e)
            } while (e = e.parentElement)
        }

        function c(e) {
            return e.clientHeight + 10 < e.scrollHeight
        }

        function p(e) {
            return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
        }

        function d(e) {
            var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return "scroll" === t || "auto" === t
        }

        function f(e) {
            var t = V(e);
            if (null == W[t]) {
                var n = getComputedStyle(e, "")["scroll-behavior"];
                W[t] = "smooth" == n
            }
            return W[t]
        }

        function h(e, t, n) {
            window.addEventListener(e, t, n || !1)
        }

        function m(e, t, n) {
            window.removeEventListener(e, t, n || !1)
        }

        function y(e, t) {
            return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
        }

        function v(e, t) {
            e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, E.x === e && E.y === t || (E.x = e, E.y = t, N = [], Z = 0)
        }

        function g(e) {
            if (e) {
                I.length || (I = [e, e, e]), e = Math.abs(e), I.push(e), I.shift(), clearTimeout(S), S = setTimeout(function() {
                    try {
                        localStorage.SS_deltaBuffer = I.join(",")
                    } catch (e) {}
                }, 1e3);
                var t = e > 120 && w(e);
                return !w(120) && !w(100) && !t
            }
        }

        function b(e, t) {
            return Math.floor(e / t) == e / t
        }

        function w(e) {
            return b(I[0], e) && b(I[1], e) && b(I[2], e)
        }

        function x(e) {
            var t = e.target,
                n = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                do {
                    if (n = t.classList && t.classList.contains("html5-video-controls")) break
                } while (t = t.parentNode);
            return n
        }

        function T(e) {
            var t, n;
            return (e *= A.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (n = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - n)), t * A.pulseNormalize
        }

        function P(e) {
            return e >= 1 ? 1 : e <= 0 ? 0 : (1 == A.pulseNormalize && (A.pulseNormalize /= T(1)), T(e))
        }

        function j(e) {
            for (var t in e) _.hasOwnProperty(t) && (A[t] = e[t])
        }
        var k, Y, C, S, Q, _ = {
                frameRate: 150,
                animationTime: 400,
                stepSize: 100,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 50,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                fixedBackground: !0,
                excluded: ""
            },
            A = _,
            D = !1,
            M = !1,
            E = {
                x: 0,
                y: 0
            },
            O = !1,
            $ = document.documentElement,
            I = [],
            L = /^Mac/.test(navigator.platform),
            B = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            F = {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            },
            N = [],
            H = !1,
            Z = Date.now(),
            V = function() {
                var e = 0;
                return function(t) {
                    return t.uniqueID || (t.uniqueID = e++)
                }
            }(),
            R = {},
            z = {},
            W = {};
        if (window.localStorage && localStorage.SS_deltaBuffer) try {
            I = localStorage.SS_deltaBuffer.split(",")
        } catch (e) {}
        var q = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, n) {
                window.setTimeout(e, n || 1e3 / 60)
            },
            X = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            U = function() {
                var e = document.scrollingElement;
                return function() {
                    if (!e) {
                        var t = document.createElement("div");
                        t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
                        var n = document.body.scrollTop;
                        document.documentElement.scrollTop;
                        window.scrollBy(0, 3), e = document.body.scrollTop != n ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
                    }
                    return e
                }
            }(),
            K = window.navigator.userAgent,
            G = /Edge/.test(K),
            J = /chrome/i.test(K) && !G,
            ee = /safari/i.test(K) && !G,
            te = /mobile/i.test(K),
            ne = /Windows NT 6.1/i.test(K) && /rv:11/i.test(K),
            re = ee && (/Version\/8/i.test(K) || /Version\/9/i.test(K)),
            oe = (J || ee || ne) && !te,
            ie = !1;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function() {
                    ie = !0
                }
            }))
        } catch (e) {}
        var ae = !!ie && {
                passive: !1
            },
            se = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
        se && oe && (h(se, r, ae), h("mousedown", i), h("load", t)), j.destroy = function() {
            Y && Y.disconnect(), m(se, r), m("mousedown", i), m("keydown", o), m("resize", C), m("load", t)
        }, window.SmoothScrollOptions && j(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
            return j
        }) : "object" == typeof exports ? module.exports = j : window.SmoothScroll = j
    }();
var sServerApi = "https://pushdata.sendpulse.com:4434",
    gcmServer = "https://android.googleapis.com/gcm/send/",
    sFirefoxServer = "https://updates.push.services.mozilla.com/push/",
    sFirefoxServer2 = "https://updates.push.services.mozilla.com/wpush/v1/";
self.addEventListener("push", function(e) {
    var t = !1;
    e.data && (t = e.data.json()), e.waitUntil(self.registration.pushManager.getSubscription().then(function(e) {
        var n = null;
        if (n = "subscriptionId" in e ? e.subscriptionId : e.endpoint, n = endpointWorkaround(n), t) {
            var r = Base64.decode(t.message.title),
                o = Base64.decode(t.message.message),
                i = t.message.icon,
                a = t.message.tag,
                s = Base64.decode(t.message.url),
                l = {
                    action: "statisctic",
                    subscriptionId: n,
                    statisctic_action: "delivered",
                    task_id: t.message.task_id,
                    user_id: t.message.user_id
                };
            return fetch(sServerApi, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(l)
            }).then(function(e) {
                var n = {
                    body: o,
                    icon: i,
                    tag: a,
                    data: {
                        redirectUrl: s
                    },
                    requireInteraction: !0
                };
                return void 0 !== t.message.buttons && (n.actions = t.message.buttons, n.data.buttons = t.message.buttons), void 0 !== t.message.image && (n.image = t.message.image), self.registration.showNotification(r, n)
            })
        }
        return fetch(sServerApi + "/message/" + n).then(function(e) {
            if (200 !== e.status) throw new Error;
            return e.json().then(function(e) {
                if (e.error || !e.notification) throw new Error;
                if (void 0 !== e.notifications) {
                    for (var t = !1, n = 0; n < e.notifications.length; n++) {
                        var r = e.notifications[n].title,
                            o = e.notifications[n].message,
                            i = e.notifications[n].icon,
                            a = e.notifications[n].tag,
                            s = e.notifications[n].url;
                        t = self.registration.showNotification(r, {
                            body: o,
                            icon: i,
                            tag: a + n,
                            data: {
                                redirectUrl: s
                            },
                            requireInteraction: !0
                        })
                    }
                    return t
                }
                var r = e.notification.title,
                    o = e.notification.message,
                    i = e.notification.icon,
                    a = e.notification.tag,
                    s = e.notification.url;
                return self.registration.showNotification(r, {
                    body: o,
                    icon: i,
                    tag: a,
                    data: {
                        redirectUrl: s
                    },
                    requireInteraction: !0
                })
            })
        })
    }))
}), self.addEventListener("notificationclick", function(e) {
    var t = e.notification.data.redirectUrl;
    if (void 0 !== e.action) {
        var n = e.action;
        if (void 0 !== e.notification.data.buttons)
            for (var r = 0; r < e.notification.data.buttons.length; r++) e.notification.data.buttons[r].action == n && (t = e.notification.data.buttons[r].url)
    }
    e.notification.close(), e.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if ("/" == r.url && "focus" in r) return r.focus()
        }
        if (clients.openWindow) return clients.openWindow(t)
    }))
});
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t, n, r, o, i, a, s, l = "",
            u = 0;
        for (e = Base64._utf8_encode(e); u < e.length;) o = (t = e.charCodeAt(u++)) >> 2, i = (3 & t) << 4 | (n = e.charCodeAt(u++)) >> 4, a = (15 & n) << 2 | (r = e.charCodeAt(u++)) >> 6, s = 63 & r, isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64), l = l + this._keyStr.charAt(o) + this._keyStr.charAt(i) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
        return l
    },
    decode: function(e) {
        var t, n, r, o, i, a, s = "",
            l = 0;
        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) t = this._keyStr.indexOf(e.charAt(l++)) << 2 | (o = this._keyStr.indexOf(e.charAt(l++))) >> 4, n = (15 & o) << 4 | (i = this._keyStr.indexOf(e.charAt(l++))) >> 2, r = (3 & i) << 6 | (a = this._keyStr.indexOf(e.charAt(l++))), s += String.fromCharCode(t), 64 != i && (s += String.fromCharCode(n)), 64 != a && (s += String.fromCharCode(r));
        return s = Base64._utf8_decode(s)
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
        }
        return t
    },
    _utf8_decode: function(e) {
        for (var t = "", n = 0, r = 0, o = 0, i = 0; n < e.length;)(r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (o = e.charCodeAt(n + 1), t += String.fromCharCode((31 & r) << 6 | 63 & o), n += 2) : (o = e.charCodeAt(n + 1), i = e.charCodeAt(n + 2), t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i), n += 3);
        return t
    }
};
DataStack.prototype.get = function(e, t) {
    return this.stack[e] ? this.stack[e][t] : (console.log("Unexpected module: " + e), !1)
}, DataStack.prototype.set = function(e, t, n) {
    return this.stack[e] || (this.stack[e] = {}, this.debug && this.log("Resolved data space for module: " + e)), this.stack[e][t] = n, n
}, DataStack.prototype.error = function(e) {
    console.log("DataStack error:\n", e)
}, DataStack.prototype.log = function(e) {
    console.log("DataStack log message:\n", e)
};
var modules = new DataStack({
    debug: !0
});
$(function() {
        var e = [],
            t = window.location.hostname;
        $("[data-load-content]").each(function(t, n) {
            e.push($(n).attr("data-load-content"))
        }), $.get("//" + t + "/?page=components&showtemplate=false&component=content-block&component-value=" + JSON.stringify(e)).done(function(e) {
            try {
                e = JSON.parse(e)
            } catch (t) {
                return void console.log(t, e)
            }
            for (var t in e) {
                var n = e[t];
                $('[data-load-content="' + t + '"]').each(function(e, t) {
                    $(t).html(n), component__scrollBlocksShow(), component__scrolledParallax(), $(t).attr("data-load-content-callback") && window[$(t).attr("data-load-content-callback")](t)
                })
            }
        })
    }), $(function() {
        $.ajaxSetup({
            cache: !1
        }), modules.get("component.forms", "init")(document.body)
    }), modules.set("component.forms", "init", function(e) {
        (e = $(e)).find("form").each(function(e, t) {
            modules.get("component.forms", "constructor")(t)
        }), modules.get("component.textual-popup", "init")(e)
    }), modules.set("component.forms", "callback-message_default", '<div class="success-message">Ваша заявка успешно принята!<br><br>Наш специалист свяжется с Вами в течение рабочего дня<br><br>Присоединяйтесь: <a target="_blank" href="https://vk.com/yalanding" class="icon vk" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg"><use href="#icon-social-vk"></use></svg></a><a target="_blank" href="https://www.facebook.com/oartnetstudio/" class="icon fb" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg"><use href="#icon-social-fb"></use></svg></a><a target="_blank" href="//www.instagram.com/artnetstudio/" class="icon in" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg"><use href="#icon-social-in"></use></svg></a></div>'), modules.set("component.forms", "callback-message_question", '<div class="success-message">Ваш вопрос успешно отправлен!<br><br>Наш специалист ответит Вам в течение рабочего дня<br><br>Присоединяйтесь: <a target="_blank" href="https://vk.com/yalanding" class="icon vk"><svg xmlns="http://www.w3.org/2000/svg"><use href="#icon-social-vk"></use></svg></a><a target="_blank" href="https://www.facebook.com/oartnetstudio/" class="icon fb"><svg xmlns="http://www.w3.org/2000/svg"><use href="#icon-social-fb"></use></svg></a><a target="_blank" href="//www.instagram.com/artnetstudio/" class="icon in"><svg xmlns="http://www.w3.org/2000/svg"><use href="#icon-social-in"></use></svg></a></div>'), modules.set("component.forms", "constructor", function(e) {
        $(e).ajaxForm({
            success: function(e, t, n, r) {
                console.log("Успешная отправка формы: " + $(r).attr("data-publicity-target")), $(r).removeClass("send");
                var o = modules.get("component.forms", "callback-message_" + ($(r).attr("data-form-callback-message") || "default"));
                $(r).height($(r).height()).addClass("success").html(o), yaCounter33180868.reachGoal($(r).attr("data-publicity-target"))
            },
            error: function(t, n) {
                console.log(t), $(e).removeClass("send")
            },
            beforeSubmit: function() {
                if (!modules.get("component.forms", "validation")(e)) return !1;
                $(e).addClass("send")
            }
        })
    }), modules.set("component.forms", "phone-regexp", /^(((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?(\d{3}[\- ]?\d{2}[\- ]?\d{2})|(\d{2}[\- ]?){3}|(\d{3}[\- ]?){2}|(\d[\- ]?(\d{2}[\- ]?){2}))$/), modules.set("component.forms", "validation", function(e) {
        var t = !1;
        return $(e).find("input:not([name=adress]):not([name=theme]):not([name=kpp]):not([name=fio]),textarea").each(function(e, n) {
            $(n).val() ? "phone" === $(n).attr("name") && -1 === $(n).val().search(modules.get("component.forms", "phone-regexp")) ? (t = !0, $(n).addClass("error"), console.log("error value of input with name " + $(n).attr("name"))) : "email" !== $(n).attr("name") && "custEmail" !== $(n).attr("name") || -1 !== $(n).val().search(/.+@.+\..+/i) ? "contacts" === $(n).attr("name") && -1 === $(n).val().search(modules.get("component.forms", "phone-regexp")) && -1 === $(n).val().search(/.+@.+\..+/i) ? (t = !0, $(n).addClass("error"), console.log("error value of input with name " + $(n).attr("name"))) : $(n).removeClass("error") : (t = !0, $(n).addClass("error"), console.log("error value of input with name " + $(n).attr("name"))) : (t = !0, $(n).addClass("error"), console.log("empty value of input with name " + $(n).attr("name")))
        }), !t
    }),
    function() {
        function e(e) {
            var t = 0;
            return e.find("[data-index]").each(function(e, n) {
                +$(n).attr("data-index") > t && (t = +$(n).attr("data-index"))
            }), t
        }

        function t(t, n, r, o) {
            var i = 0;
            t[0] && (i = e(t));
            var a = r.find("[data-index]"),
                s = r.find("[data-index=" + i + "]").nextAll();
            0 === i && (s = r.find("[data-index]")), n.html("");
            for (var l = 0; l < o; l++) {
                var u = s[l] || a[l - s.length];
                u = $(u).clone(), n.append(u)
            }
        }

        function n(e, n, r, o, i) {
            if (clearInterval(a), i) {
                var u = n.find(".plane.active"),
                    c = n.find(".plane:not(.active)").last();
                u.removeClass("active"), c.addClass("active"), setTimeout(function() {
                    s = !1, t(c, u, e, r)
                }, l)
            }
            a = setInterval(function() {
                var o = n.find(".plane.active"),
                    i = n.find(".plane:not(.active)").last();
                o.removeClass("active"), i.addClass("active"), s = !0, setTimeout(function() {
                    s = !1, t(i, o, e, r)
                }, l)
            }, o)
        }

        function r(e, r, o, i) {
            var a = r.find(".plane.active"),
                l = r.find(".plane:not(.active)").last();
            t(a, l, e, o), a.removeClass("active"), l.addClass("active"), t(a = r.find(".plane.active"), l = r.find(".plane:not(.active)").last(), e, o), n(e, r, o, i), r.find(".control").click(function() {
                s || (s = !0, n(e, r, o, i, !0))
            })
        }
        var o = 3,
            i = 9200,
            a = !1,
            s = !0;
        $(window).width() < 768 && (o = 2, i = 6500), $(window).width() <= 640 && (o = 1, i = 5e3);
        var l = 1e3 + 300 * (o - 1);
        $(function() {
            r($(".our-team .stack"), $(".our-team .view"), o, i)
        })
    }(), $(function() {
        var e = function() {
            for (var e = {}, t = window.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                e[r[0]] = void 0 === r[1] ? "" : r[1]
            }
            return e
        }();
        e["publicity-target"] && "sendpuls-newsletter" === e["publicity-target"] && $.fancybox.open($(".newsletter-callback-popup"), {
            scrolling: "no",
            type: "inline",
            padding: 0,
            closeBtn: !1
        })
    }), $(function() {
        modules.get("component.basic-contact-popup", "init")(document.body)
    }), modules.set("component.basic-contact-popup", "init", function(e) {
        (e = $(e)).find("[data-contact-popup]").on("click", function() {
            var e = $(this);
            modules.get("component.basic-contact-popup", "open-popup")(e.attr("data-contact-popup"), e.attr("data-popup-title"), e.attr("data-popup-button"))
        }), e.on("click", ".textual-popup [data-contact-popup]", function() {
            var e = $(this);
            modules.get("component.basic-contact-popup", "open-popup")(e.attr("data-contact-popup"), e.attr("data-popup-title"), e.attr("data-popup-button"))
        })
    }), modules.set("component.basic-contact-popup", "open-popup", function(e, t, n) {
        e = e || "Малая контактная форма", t = t || "Получить консультацию", n = n || "Отправить заявку";
        var r = $(".popups .contact-popup");
        modules.get("complex.popups", "open-popup")(r, function() {
            r.find("[name=theme]").val(e), r.find(".head").html(t), r.find("button").html(n), $("main,header,footer").addClass("blur")
        }, function() {
            r.find("[name=theme]").val("Малая контактная форма"), r.find(".head").html("Получить консультацию"), r.find("button").html("Отправить заявку"), $("main,header,footer").removeClass("blur")
        })
    }), $(function() {
        function e(e) {
            $.fancybox.open($(".image-popup"), {
                scrolling: "no",
                type: "inline",
                padding: 0,
                closeBtn: !1,
                beforeShow: function() {
                    $("main,header,footer").addClass("blur"), $(".image-popup .content").html('<img src="' + e + '">')
                },
                afterClose: function() {
                    $("main,header,footer").removeClass("blur")
                }
            })
        }
        $("[data-image-popup]").on("click", function() {
            return e($(this).attr("data-image-popup")), !1
        })
    }), $(function() {
        initPayment(document.body)
    }), modules.set("component.review-popup", "checkedProduct", !1), $(function() {
        $("[data-popup=product-card-review] ").click(function() {
            modules.get("component.review-popup", "open-popup")($(this).closest("[data-review-link]"))
        }), $('[data-component="review-popup"] .popup-with-view__control_next').click(function() {
            var e = modules.get("component.review-popup", "checkedProduct");
            e.nextAll(".show[data-review-link]")[0] && (modules.set("component.review-popup", "checkedProduct", $(e.nextAll(".show[data-review-link]")[0])), modules.get("component.review-popup", "set-content")())
        }), $('[data-component="review-popup"] .popup-with-view__control_prev').click(function() {
            var e = modules.get("component.review-popup", "checkedProduct");
            e.prevAll(".show[data-review-link]")[0] && (modules.set("component.review-popup", "checkedProduct", $(e.prevAll(".show[data-review-link]")[0])), modules.get("component.review-popup", "set-content")())
        })
    }), modules.set("component.review-popup", "open-popup", function(e) {
        modules.set("component.review-popup", "checkedProduct", $(e)), modules.get("component.review-popup", "set-content")(), modules.get("complex.popups", "open-popup")($('[data-component="review-popup"]'))
    }), modules.set("component.review-popup", "set-content", function() {
        var e = modules.get("component.review-popup", "checkedProduct"),
            t = $('[data-component="review-popup"]');
        t.find(".popup-with-view__review").html('<img class="popup-with-view__review-image" src="' + e.attr("data-review-link") + '">'), e.nextAll(".show[data-review-link]")[0] ? t.find(".popup-with-view__control_next").removeClass("opacity") : t.find(".popup-with-view__control_next").addClass("opacity"), e.prevAll(".show[data-review-link]")[0] ? t.find(".popup-with-view__control_prev").removeClass("opacity") : t.find(".popup-with-view__control_prev").addClass("opacity")
    }), modules.set("component.site-view-popup", "checkedProduct", !1), $(function() {
        $("[data-component=product-card]").click(function() {
            modules.get("component.site-view-popup", "open-popup")(this)
        }), $('[data-component="site-view-popup"] .popup-with-view__control_next').click(function() {
            var e = modules.get("component.site-view-popup", "checkedProduct");
            e.nextAll(".show")[0] && (modules.set("component.site-view-popup", "checkedProduct", $(e.nextAll(".show")[0])), modules.get("component.site-view-popup", "set-content")())
        }), $('[data-component="site-view-popup"] .popup-with-view__control_prev').click(function() {
            var e = modules.get("component.site-view-popup", "checkedProduct");
            e.prevAll(".show")[0] && (modules.set("component.site-view-popup", "checkedProduct", $(e.prevAll(".show")[0])), modules.get("component.site-view-popup", "set-content")())
        })
    }), modules.set("component.site-view-popup", "open-popup", function(e) {
        $(event.target).closest(".link")[0] || (modules.set("component.site-view-popup", "checkedProduct", $(e)), modules.get("component.site-view-popup", "set-content")(), modules.get("complex.popups", "open-popup")($('[data-component="site-view-popup"]')))
    }), modules.set("component.site-view-popup", "set-content", function() {
        var e = modules.get("component.site-view-popup", "checkedProduct"),
            t = $('[data-component="site-view-popup"]');
        t.find(".portfolio-site-view__head-site-address,.portfolio-site-view__link").attr("href", e.attr("data-link")), t.find(".portfolio-site-view__head-site-address").html(e.attr("data-link").replace("https://", "").replace("http://", "")), t.find(".portfolio-site-view__frame").html('<img class="portfolio-site-view__frame-img" src="' + e.attr("data-image-link") + '">'), e.nextAll(".show")[0] ? t.find(".popup-with-view__control_next").removeClass("opacity") : t.find(".popup-with-view__control_next").addClass("opacity"), e.prevAll(".show")[0] ? t.find(".popup-with-view__control_prev").removeClass("opacity") : t.find(".popup-with-view__control_prev").addClass("opacity")
    }), modules.set("component.textual-popup", "init", function(e) {
        (e = $(e)).find("[data-textual-popup]").on("click", function() {
            return modules.get("component.textual-popup", "open-popup")($(this).attr("data-textual-popup")), !1
        })
    }), modules.set("component.textual-popup", "open-popup", function(e) {
        modules.get("complex.popups", "open-popup")($(".textual-popup"), function() {
            var t = window.location.hostname;
            $.get("//" + t + '/?page=components&showtemplate=false&component=content-block&component-value=["' + e + '"]').done(function(t) {
                $(".textual-popup .content").html(JSON.parse(t)[e])
            })
        })
    }), $(function() {
        $("[data-video-popup]").on("click", function() {
            var e = this;
            $.fancybox.open($(".video-popup"), {
                scrolling: "no",
                type: "inline",
                padding: 0,
                closeBtn: !1,
                beforeShow: function() {
                    $("main,header,footer").addClass("blur"), $(".video-popup .content").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + $(e).attr("data-video-popup") + '?autoplay=1&amp;mute=1&amp;rel=0&amp;showinfo=0&hd=1" frameborder="0" allowfullscreen=""></iframe>')
                },
                afterClose: function() {
                    $("main,header,footer").removeClass("blur"), $(".video-popup .content").html("")
                }
            })
        })
    }), modules.set("complex.popups", "checkedPopup", !1), $(function() {
        $(".popups .close,.popup-with-view__layout-close-button,.newsletter-callback-popup__close").click(function() {
            $.fancybox.close(), modules.set("complex.popups", "checkedPopup", !1)
        })
    }), modules.set("complex.popups", "open-popup", function(e, t, n) {
        e = $(e);
        var r = modules.get("complex.popups", "checkedPopup");
        t = t || function() {}, n = n || function() {}, $.fancybox.open(e, {
            scrolling: "no",
            type: "inline",
            padding: 0,
            closeBtn: !1,
            beforeShow: function() {
                t(), modules.set("complex.popups", "checkedPopup", e)
            },
            afterClose: function() {
                if (n(), r) return modules.get("complex.popups", "open-popup")(r), !1;
                modules.set("complex.popups", "checkedPopup", !1)
            }
        })
    }), $(function() {
        component__scrollBlocksShow(), $(window).scroll(function() {
            component__scrollBlocksShow()
        })
    }), $(function() {
        component__scrolledParallax(), $("[data-scrollable]").addClass("load"), $(window).scroll(function() {
            component__scrolledParallax()
        })
    }), $(function() {
        var e = $("h1").text(),
            t = '<p>Я Лендинг — создание Landing page под ключ, заказать лендинг. Подробнее&nbsp;<a href="' + location.href + '" title="' + e + '">' + location.href + "</a></p>";
        jQuery(function(e) {
            window.getSelection && e(".global-main").bind("copy", function() {
                var n = window.getSelection(),
                    r = n.getRangeAt(0),
                    o = e("<div>").css({
                        overflow: "hidden",
                        width: "1px",
                        height: "1px",
                        position: "absolute",
                        top: "-10000px",
                        left: "-10000px"
                    });
                o.append(r.cloneContents(), t), e("body").append(o);
                var i = r.cloneRange();
                n.removeAllRanges();
                var a = document.createRange();
                a.selectNode(o.get(0)), n.addRange(a), window.setTimeout(function() {
                    n.removeAllRanges(), n.addRange(i), o.remove()
                }, 0)
            })
        })
    }), $(function() {
        $(".about-landing .questions .item .head").click(function() {
            $(this).toggleClass("active")
        }), $(".portfolio .see-more").click(function() {
            $(".portfolio .item:not(.show)").addClass("show"), $(this).addClass("hide")
        }), $(".spoiler").spoiler({
            paddingValue: 36
        }), initQTip(document.body), initImageCompare($(".landing-advantages")), $(".about-us .value .view .video").YTPlayer(), $(".quote .play-song").click(function() {
            $(this).toggleClass("active"), $(this).hasClass("active") ? $("#boss-song")[0].play() : $("#boss-song")[0].pause()
        }), $(window).width() > 1630 && $(".quote .view img").parallax({
            yparallax: 0,
            xparallax: .05,
            mouseport: $(".quote")
        }), $(document.body).on("click", '[href="//artnet.bitrix24.ru/~rfnEI"]', function() {
            return yaCounter33180868.reachGoal("brief-link-click"), !0
        }), $(document.body).on("click", '[href="https://artnet.bitrix24.ru/~Yj8h7"]', function() {
            return yaCounter33180868.reachGoal("offer-link-click"), !0
        }), $(document.body).on("click", '[href*="vk.com"],[href*="facebook.com"],[href*="twitter.com"],[href*="plus.google.com"],[href*="youtube.com"],[href*="instagram.com"]', function(e, t) {
            return yaCounter33180868.reachGoal("social-link-click"), !0
        })
    }), document.body.onload = function() {
        $("[data-load]").addClass("load")
    }, $(function() {
        var e = 0,
            t = $(".global-navigate"),
            n = t[0].offsetHeight,
            r = 0,
            o = $(".global-main > .preview");
        $(window).width() > 1200 && ($(this).scrollTop() >= o[0].offsetHeight && t.addClass("stick"), $(this).scrollTop() < o[0].offsetHeight && t.removeClass("stick"), $(window).scroll(function() {
            $(this).scrollTop() >= o[0].offsetHeight && t.addClass("stick"), $(this).scrollTop() < o[0].offsetHeight && t.removeClass("stick")
        })), $(window).width() < 768 && (t.addClass("stick"), $(window).scroll(function() {
            var o = $(document).scrollTop();
            r + e - o >= -n ? r += e - o : r = -n, r > 0 && (r = 0), t.css("top", r + "px"), e = o
        }))
    }), $(function() {
        function e() {
            $("[id]:not(input)").each(function(e, t) {
                var n = $('.global-navigate .anchors a[href="#' + t.id + '"],#menu .anchors a[href="#' + t.id + '"]');
                $(t).offset().top - 200 <= $(window).scrollTop() && n[0] && ($(".global-navigate .anchors .active,#menu .anchors .active").removeClass("active"), n.addClass("active"))
            })
        }
        $('a[href^="#"]').on("click", function() {
            var e;
            return e = $($(this).attr("href")).find(".title")[0] ? $($(this).attr("href")).find(".title").first() : $($(this).attr("href")), $("html, body").animate({
                scrollTop: e.offset().top - 170
            }, 500), !1
        }), e(), $(window).scroll(function() {
            e(), $("#menu").removeClass("show"), $(".menu-control").removeClass("show"), $(document.body).css({
                overflow: "auto"
            })
        })
    }), $(function() {
        initWorkSchedule($(".work-schedule"))
    }), $(document).ready(function() {
        function e() {
            var e = 16,
                t = {
                    iconLayout: "default#image",
                    iconImageHref: "//static.yalanding.ru/assets/images/artnet-map-marker.png",
                    iconImageSize: [77, 104],
                    iconImageOffset: [-38, -104]
                };
            $(window).width() < 768 && (e = 14), n = new ymaps.Map("ymap", {
                center: o,
                zoom: e,
                controls: ["zoomControl"]
            }, {
                searchControlProvider: "yandex#search"
            }), r = new ymaps.Map("ymapOfMoscow", {
                center: i,
                zoom: e,
                controls: ["zoomControl"]
            }, {
                searchControlProvider: "yandex#search"
            });
            var a = new ymaps.Placemark([58.59461, 49.665782], {
                    hintContent: "Офис",
                    balloonContent: '<div class="container" style="padding: 28px;"><svg id="y-map-prompt-logo" width="250" height="38"><use href="#LOGO_clean"></use></svg><div id="y-map-prompt-text" style="line-height: 1.4;padding-left: 48px;width: 280px;margin-top: 8px;font-family: Roboto, arial, serif;color: #605b5b;font-size: 18px;font-weight: 400;">ООО «Студия Арт Нэт»<br>г. Киров, ул.Карла Либкнехта, д.120, офис 202.</div></div>'
                }, t),
                s = new ymaps.Placemark([55.782623, 37.723367], {
                    hintContent: "Представительство",
                    balloonContent: '<div class="container" style="padding: 28px;"><svg id="y-map-prompt-logo" width="250" height="38"><use href="#LOGO_clean"></use></svg><div id="y-map-prompt-text" style="line-height: 1.4;padding-left: 48px;width: 280px;margin-top: 8px;font-family: Roboto, arial, serif;color: #605b5b;font-size: 18px;font-weight: 400;">ООО «Студия Арт Нэт»<br>г. Москва, ул.Щербаковская, д.3, ДЦ "Щербаковский", офис 1215</div></div>'
                }, t);
            n.geoObjects.add(a), r.geoObjects.add(s), $(window).width() < 768 ? (r.behaviors.disable(["scrollZoom", "drag"]), n.behaviors.disable(["scrollZoom", "drag"])) : (r.behaviors.disable("scrollZoom"), n.behaviors.disable("scrollZoom")), ymaps.geolocation.get({
                provider: "yandex"
            }).then(function(e) {
                console.log(e.geoObjects.get(0).getLocalities())
            })
        }

        function t() {
            $(window).scrollTop() + $(window).height() + 200 >= $("#contacts .maps").offset().top && 0 == a && (a = !0, ymaps.ready(e))
        }
        var n, r, o = [58.59461, 49.665782],
            i = [55.782623, 37.723367],
            a = !1;
        t(), $(window).scroll(function() {
            t()
        })
    }), $(function() {
        var e = window.location.hostname,
            t = $(".about-landing .button");
        "kirov.yalanding.ru" == e && t.attr("data-textual-popup", "popup_about_landing_kr")
    }), $(function() {
        var e = $(".background");
        `\n\t<video loop muted autoplay id="video">\n                <source src="//yalanding.ru/assets/video/preview-background.ogv" type='video/ogg; codecs="theora, vorbis"'>\n                <source src="//yalanding.ru/assets/video/preview-background.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>\n                <source src="//yalanding.ru/assets/video/preview-background.webm" type='video/webm; codecs="vp8, vorbis"'>\n            </video>\t\n`;
        screen.width < 1200 ? console.log("не удаляем") : e.append(`\n\t<video loop muted autoplay id="video">\n                <source src="//yalanding.ru/assets/video/preview-background.ogv" type='video/ogg; codecs="theora, vorbis"'>\n                <source src="//yalanding.ru/assets/video/preview-background.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>\n                <source src="//yalanding.ru/assets/video/preview-background.webm" type='video/webm; codecs="vp8, vorbis"'>\n            </video>\t\n`)
    }),
    function(e, t) {
        "object" == typeof exports ? module.exports = t(e) : "function" == typeof define && define.amd ? define([], t) : e.LazyLoad = t(e)
    }("undefined" != typeof global ? global : this.window || this.global, function(e) {
        "use strict";

        function t(e, t) {
            this.settings = r(n, t || {}), this.images = e || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
        }
        "function" == typeof define && define.amd && (e = window);
        const n = {
                src: "data-src",
                srcset: "data-srcset",
                selector: "[data-lazy]",
                root: null,
                rootMargin: "0px",
                threshold: 0
            },
            r = function() {
                let e = {},
                    t = !1,
                    n = 0,
                    o = arguments.length;
                for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++); n < o; n++) ! function(n) {
                    for (let o in n) Object.prototype.hasOwnProperty.call(n, o) && (t && "[object Object]" === Object.prototype.toString.call(n[o]) ? e[o] = r(!0, e[o], n[o]) : e[o] = n[o])
                }(arguments[n]);
                return e
            };
        return t.prototype = {
            init: function() {
                if (!e.IntersectionObserver) return void this.loadImages();
                let t = this,
                    n = {
                        root: this.settings.root,
                        rootMargin: this.settings.rootMargin,
                        threshold: [this.settings.threshold]
                    };
                this.observer = new IntersectionObserver(function(e) {
                    Array.prototype.forEach.call(e, function(e) {
                        if (e.isIntersecting) {
                            t.observer.unobserve(e.target);
                            let n = e.target.getAttribute(t.settings.src),
                                r = e.target.getAttribute(t.settings.srcset);
                            "img" === e.target.tagName.toLowerCase() ? (n && (e.target.src = n), r && (e.target.srcset = r)) : e.target.style.backgroundImage = "url(" + n + ")"
                        }
                    })
                }, n), Array.prototype.forEach.call(this.images, function(e) {
                    t.observer.observe(e)
                })
            },
            loadAndDestroy: function() {
                this.settings && (this.loadImages(), this.destroy())
            },
            loadImages: function() {
                if (!this.settings) return;
                let e = this;
                Array.prototype.forEach.call(this.images, function(t) {
                    let n = t.getAttribute(e.settings.src),
                        r = t.getAttribute(e.settings.srcset);
                    "img" === t.tagName.toLowerCase() ? (n && (t.src = n), r && (t.srcset = r)) : t.style.backgroundImage = "url('" + n + "')"
                })
            },
            destroy: function() {
                this.settings && (this.observer.disconnect(), this.settings = null)
            }
        }, e.lazyload = function(e, n) {
            return new t(e, n)
        }, e.jQuery && (e.jQuery.fn.lazyload = function(e) {
            return e = e || {}, e.attribute = e.attribute || "data-src", new t("", e), this
        }), t
    }), $(document).ready(function() {
        $("[data-lazy]").lazyload()
    });