var didna = window.didna || { cmd: [] };
!(function () {
  "use strict";
  function e(e) {
    return { desktop: [1, 2], mobile: [1, 3, 5], tablet: [1, 4, 5] }[
      window.DIDNA_CONFIG.device
    ].includes(e);
  }
  let t = {
    ibv: {
      url: "",
      player: "didna",
      options: {
        endAfterAdEnds: true,
        brandingSettings: { position: "top-right" },
        loadVideoTimeout: 10000,
        playVideoAfterAd: false,
      },
      failLimit: 2,
      firstLoad: false,
      ibvWaitCount: 1,
      recoveryTime: 15000,
    },
    mode: "standard",
    debug: false,
    rules: {
      5369674005: { refresh: 0 },
      5375326044: { refresh: 0 },
      5424327728: { refresh: 0 },
      5442100291: { refresh: 0 },
      5442372679: { refresh: 0 },
    },
    prebid: { inject: true, groupAuctions: { enabled: false, timeframe: 500 } },
    adUnits: { all: { inViewRefresh: 17000 } },
    adhesion: {
      mobile: {
        vendors: {
          didna: { weight: 1, enabled: false, adUnitPath: "" },
          trion: { id: 0, weight: 1, enabled: false },
          recrue: { id: "", weight: 1, enabled: false },
          infolinks: {
            weight: 1,
            enabled: false,
            infolinks_pid: 0,
            infolinks_wsid: 0,
          },
          nextMillenium: { weight: 1, enabled: false },
        },
        delayTime: 1000,
      },
      tablet: {
        vendors: {
          didna: { weight: 1, enabled: false, adUnitPath: "" },
          trion: { id: 0, weight: 1, enabled: false },
          recrue: { id: "", weight: 1, enabled: false },
          infolinks: {
            weight: 1,
            enabled: false,
            infolinks_pid: 0,
            infolinks_wsid: 0,
          },
          nextMillenium: { weight: 1, enabled: false },
        },
        delayTime: 1000,
      },
      desktop: {
        vendors: {
          didna: { weight: 1, enabled: false, adUnitPath: "" },
          trion: { id: 0, weight: 1, enabled: false },
          recrue: { id: "", weight: 1, enabled: false },
          infolinks: {
            weight: 1,
            enabled: false,
            infolinks_pid: 0,
            infolinks_wsid: 0,
          },
          nextMillenium: { weight: 1, enabled: false },
        },
        delayTime: 1000,
      },
      enableAdhesion: false,
    },
    amazonA9: { pubID: "64abda41-57ff-4c58-84f8-8c2c7ab4be23" },
    lazyload: {
      level: 1,
      mobileScaling: 2,
      renderAdPercent: 10,
      bidRequestPercent: 45,
    },
    scanners: {
      devcon: {
        page: 0,
        dataE: "5",
        dataKey: "70037fa2-355a-4223-8309-11faa980151c",
      },
      confiant: { gpt: 1, prebid: 1 },
    },
    activeTab: true,
    enableIbv: 2,
    enableMoat: false,
    exclusions: { sizes: [], bidders: {} },
    placements: {
      all: {
        "320x50": {
          adyoulike: { placement: "e738c68e510b58755d25b9f410ae9226" },
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d642b700f7",
          },
          Triplelift: { inventoryCode: "Infatuation_Leaderboard_Mobile" },
        },
        "728x90": {
          adyoulike: { placement: "115b977b770a595260d2d00dc218f925" },
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d7077300fa",
          },
          Triplelift: { inventoryCode: "Infatuation_Leaderboard_Desktop" },
          sharethrough: { pkey: "RKdZhcHTNyh8FeoXVEHHezSh" },
        },
        "970x90": {
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d45d4400f1",
          },
        },
        "300x250": {
          adyoulike: { placement: "e2e0e16ac695f7314622eb010ae77286" },
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d5067700f3",
          },
          Triplelift: { inventoryCode: "Infatuation_InContent_Desktop" },
          sharethrough: { pkey: "xokLXqAGo7w6XpschHXpMkrQ" },
        },
        "300x340": { sharethrough: { pkey: "ZS1nTKFKA2sfBHY1fEZnY6tJ" } },
        "300x600": {
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d7444000fb",
          },
          Triplelift: { inventoryCode: "Infatuation_RightRail_Desktop" },
          sharethrough: { pkey: "PDVNgwb69uwyW2KUuRdbYoRG" },
        },
        "320x100": {
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d67b0f00f8",
          },
        },
        "336x280": {
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d5637f00f4",
          },
          sharethrough: { pkey: "ZBwAbSk1AVD4ap92jBZsZbQd" },
        },
        "970x250": {
          adyoulike: { placement: "115b977b770a595260d2d00dc218f925" },
          onemobile: {
            dcn: "8a9691d0017070401401403a11d30006",
            pos: "8a9698ab01747406698907d4b8c500f2",
          },
          Triplelift: { inventoryCode: "Infatuation_Leaderboard_Desktop" },
          sharethrough: { pkey: "TeeGngHitNL5H51XrSgeNDdH" },
        },
        sizeless: {
          amx: { tagId: "ZGlkbmEuaW8", adUnitId: "theinfatuation.com " },
          rubicon: { siteId: "325410", zoneId: "1689586", accountId: "20100" },
          "33across": { siteId: "d0OnrWPeqr6Rz0aKkv7mNO", productId: "siab" },
          appnexus: { placementId: 19149610 },
          conversant: { secure: 0, site_id: "202254" },
        },
      },
    },
    adjustments: {},
    priceFloors: {
      global: { mobile: 1, tablet: 1, desktop: 1 },
      mobile: 0.05,
      tablet: 0.05,
      desktop: 0.05,
    },
    setCentering: true,
    didnaTrackers: false,
    headerBidding: 1,
    pageTargeting: {},
    refreshEngine: { id: "didna" },
    auctionManager: { groupAuctions: { enabled: false, timeframe: 500 } },
    enableAmazonA9: false,
    thirdPartyTags: [],
    refreshSettings: {
      inViewPercent: 0.51,
      inViewRefresh: 18000,
      outOfViewRefresh: 300000,
      enableAdvancedRefresh: false,
      outOfViewRefreshEnabled: false,
    },
    analyticsAdapter: {
      key: "92b66395-2fed-40e5-89d1-153067e19eaa",
      provider: "loggly",
      trackerName: "didna-logger",
    },
    enableRulesEngine: false,
    activityMonitoring: {
      timeout: 1200000,
      clearTimer: 300000,
      resumeTimer: 5000,
      backgroundTimeout: 10000,
    },
    enableAdvancedRefresh: false,
    enableAnalyticsAdapter: false,
    enableActivityMonitoring: false,
    uuid: "91248709ae964a1d9f70ee78401e9f7c",
  };
  var n;
  if (
    (window.DIDNA_CONFIG
      ? (window.DIDNA_CONFIG = (function e(t, n) {
          for (let i in n)
            "object" == typeof n[i] && i in t
              ? "string" == typeof t[i]
                ? (t[i] = n[i])
                : (t[i] = e(t[i], n[i]))
              : (t[i] = n[i]);
          return t;
        })(t, window.DIDNA_CONFIG))
      : (window.DIDNA_CONFIG = t),
    (window.DIDNA_CONFIG.device =
      ((n = navigator.userAgent || navigator.vendor || window.opera),
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        n.toLowerCase()
      )
        ? "tablet"
        : /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(
            n.toLowerCase()
          )
        ? "mobile"
        : "desktop")),
    (window.DIDNA_CONFIG.hostId = (function () {
      let e = window.location.host.split(".");
      return (e = e[e.length - 2]);
    })()),
    (window.DIDNA_CONFIG.pageTargeting =
      window.DIDNA_CONFIG.pageTargeting || {}),
    (window.DIDNA_CONFIG.pageTargeting.pub = window.location.host),
    (window.DIDNA_CONFIG.pageTargeting.path = window.location.pathname.replace(
      /[^\/]*$/,
      ""
    )),
    (window.DIDNA_CONFIG.headerBidding =
      !window.DIDNA_CONFIG.hasOwnProperty("headerBidding") ||
      e(window.DIDNA_CONFIG.headerBidding)),
    window.DIDNA_CONFIG.hasOwnProperty("lazyload")
      ? (window.DIDNA_CONFIG.lazyload.level =
          !window.DIDNA_CONFIG.lazyload.hasOwnProperty("level") ||
          e(window.DIDNA_CONFIG.lazyload.level))
      : (window.DIDNA_CONFIG.lazyload = { level: !0 }),
    window.DIDNA_CONFIG.hasOwnProperty("enableIbv")
      ? "boolean" != typeof window.DIDNA_CONFIG.enableIbv &&
        (window.DIDNA_CONFIG.enableIbv = e(window.DIDNA_CONFIG.enableIbv))
      : (window.DIDNA_CONFIG.enableIbv = !1),
    window.DIDNA_CONFIG.hasOwnProperty("scanners") &&
      window.DIDNA_CONFIG.scanners.hasOwnProperty("confiant") &&
      ((window.DIDNA_CONFIG.scanners.confiant.prebid = e(
        window.DIDNA_CONFIG.scanners.confiant.prebid
      )),
      (window.DIDNA_CONFIG.scanners.confiant.gpt = e(
        window.DIDNA_CONFIG.scanners.confiant.gpt
      ))),
    window.DIDNA_CONFIG.hasOwnProperty("exclusions") &&
      window.DIDNA_CONFIG.exclusions.hasOwnProperty("bidders"))
  )
    for (let t in window.DIDNA_CONFIG.exclusions.bidders)
      window.DIDNA_CONFIG.exclusions.bidders[t] = e(t);
})();
try {
  !(function (o, n, t) {
    (t = o.createElement(n)),
      (o = o.getElementsByTagName(n)[0]),
      (t.async = 1),
      (t.src =
        "https://livelylaugh.com/v2snwA_LeGfd0sTyXdcz7rCUDV4RGpPAjYclesOsoQC5pBF3F24fcSUmHdeUNtJ8ZRQ"),
      o.parentNode.insertBefore(t, o);
  })(document, "script"),
    (function (o, n) {
      function t() {
        (t.q = t.q || []).push(arguments);
      }
      (t.v = 1), (o.admiral = o.admiral || t);
    })(window);
  !(function (o, t, n, c) {
    function e(n) {
      (function () {
        try {
          return (localStorage.getItem("v4ac1eiZr0") || "").split(",")[4] > 0;
        } catch (o) {}
        return !1;
      })() &&
        (n = o[t].pubads()) &&
        n.setTargeting("admiral-engaged", "true");
    }
    ((c = o[t] = o[t] || {}).cmd = c.cmd || []),
      typeof c.pubads === n
        ? e()
        : typeof c.cmd.unshift === n
        ? c.cmd.unshift(e)
        : c.cmd.push(e);
  })(window, "googletag", "function");
  !(function (t, n, i, e, o) {
    function a() {
      for (var t = [], i = 0; i < arguments.length; i++) t.push(arguments[i]);
      if (!t.length) return o;
      "ping" === t[0]
        ? t[2]({
            gdprAppliesGlobally: !!n.__cmpGdprAppliesGlobally,
            cmpLoaded: !1,
            cmpStatus: "stub",
          })
        : t.length > 0 && o.push(t);
    }
    function c(t) {
      if (t && t.data && t.source) {
        var e,
          o = t.source,
          a = "string" == typeof t.data && t.data.indexOf("__tcfapiCall") >= 0;
        (e = a
          ? (
              (function (t) {
                try {
                  return JSON.parse(t);
                } catch (n) {}
              })(t.data) || {}
            ).__tcfapiCall
          : (t.data || {}).__tcfapiCall) &&
          n[i](
            e.command,
            e.version,
            function (t, n) {
              var i = {
                __tcfapiReturn: {
                  returnValue: t,
                  success: n,
                  callId: e.callId,
                },
              };
              o && o.postMessage(a ? JSON.stringify(i) : i, "*");
            },
            e.parameter
          );
      }
    }
    !(function f() {
      if (!window.frames[e]) {
        var n = t.body;
        if (n) {
          var i = t.createElement("iframe");
          (i.style.display = "none"), (i.name = e), n.appendChild(i);
        } else setTimeout(f, 5);
      }
    })(),
      (o = []),
      (a.v = 1),
      "function" != typeof n[i] &&
        ((n[i] = n[i] || a),
        n.addEventListener
          ? n.addEventListener("message", c, !1)
          : n.attachEvent && n.attachEvent("onmessage", c));
  })(document, window, "__tcfapi", "__tcfapiLocator");
} catch (e) {
  console.error(`Caught custom code error: ${e.message}`);
}
!(function () {
  "use strict";
  window.DIDNA_CONFIG.debug;
  let e = null,
    t = {
      util: "https://storage.googleapis.com/didna-prod/latest/didna_util.min.js.gz",
      prebid:
        "https://storage.googleapis.com/didna-prod/latest/didna_prebid.js.gz",
    };
  function n(e, t, n, i = !1) {
    const o = document.getElementsByTagName("head")[0];
    return new Promise((a, r) => {
      try {
        let s = document.createElement(t);
        if ("script" == t) (s.async = !0), (s.src = e), (s.type = n);
        else if ("inline/css" == n) {
          let t = document.createTextNode(e);
          (s.type = "text/css"), s.appendChild(t);
        } else (s.href = e), (s.rel = "stylesheet"), (s.type = n);
        if (i) for (let e in i) s.setAttribute(e, i[e]);
        o.appendChild(s), a(`${e}: successfully loaded.`);
      } catch (t) {
        r(`${e}: failed loading. ${t.message}.`);
      }
    });
  }
  let i = {};
  try {
    i = window.localStorage.getItem("diDNA_cache")
      ? JSON.parse(window.localStorage.getItem("diDNA_cache"))
      : {};
  } catch (e) {}
  function o(e) {
    const t = window.atob(e),
      n = new Blob([t], { type: "text/javascript" });
    return URL.createObjectURL(n);
  }
  function a() {
    for (let e in t) n(t[e], "script", "text/javascript");
  }
  if (
    ((!1 === window.DIDNA_CONFIG.headerBidding ||
      (!0 === window.DIDNA_CONFIG.hasOwnProperty("prebid") &&
        !1 === window.DIDNA_CONFIG.prebid.inject)) &&
      delete t.prebid,
    window.Worker)
  )
    try {
      const d = new Blob(
          [
            'function getLibrary(url){return new Promise((resolve, reject) => {let xhr = new XMLHttpRequest();xhr.open("GET", url, true);xhr.onload = () => {resolve(xhr.responseText);};xhr.onerror = reject;xhr.send();});}onmessage = function(e){let msg = e.data.split("?");const url = msg[0];const name = msg.pop();getLibrary(url).then(library => {let ret = {"name": name,"url": url};try{ret["lib"] = self.btoa(library);ret["status"] = "success";}catch(e){ret["status"] = "error";}postMessage(ret);}).catch(e => {postMessage({"name": name, "url": url, "status": "error"});});};',
          ],
          { type: "text/javascript" }
        ),
        w = URL.createObjectURL(d);
      (e = new Worker(w)),
        URL.revokeObjectURL(w),
        (e.onmessage = (a) => {
          if ("error" !== a.data.status) {
            let r = "util" == a.data.name ? 864e5 : 1728e5;
            (i[a.data.name] = {
              setTime: new Date().getTime(),
              expTime: r,
              url: a.data.url,
            }),
              window.localStorage.setItem(`diDNA_${a.data.name}`, a.data.lib);
            let s = o(a.data.lib);
            n(s, "script", "text/javascript").finally(() => {
              URL.revokeObjectURL(s),
                delete t[a.data.name],
                window.localStorage.setItem("diDNA_cache", JSON.stringify(i)),
                0 === Object.keys(t).length &&
                  t.constructor === Object &&
                  e.terminate();
            });
          } else n(a.data.url, "script", "text/javascript");
        });
      for (let a in t)
        if (
          ((r = a),
          (s = t[a]),
          !i.hasOwnProperty(r) ||
            null === window.localStorage.getItem("diDNA_" + r) ||
            i[r].url !== s ||
            new Date().getTime() - i[r].setTime > i[r].expTime)
        )
          e.postMessage(`${t[a]}?${a}`);
        else {
          let e = o(window.localStorage.getItem(`diDNA_${a}`));
          n(e, "script", "text/javascript").finally(() => {
            URL.revokeObjectURL(e);
          });
        }
    } catch (e) {
      a();
    }
  else a();
  var r, s;
  if (
    (!1 == !!document.querySelector("script[src$='gpt.js']") &&
      n(
        `${document.location.protocol}//securepubads.g.doubleclick.net/tag/js/gpt.js`,
        "script",
        "text/javascript"
      ),
    window.DIDNA_CONFIG.headerBidding &&
      window.DIDNA_CONFIG.enableAmazonA9 &&
      (!(function (e, t, n, i, o, a, r) {
        function s(n, i) {
          t[e]._Q.push([n, i]);
        }
        t[e] ||
          ((t[e] = {
            init: function () {
              s("i", arguments);
            },
            fetchBids: function () {
              s("f", arguments);
            },
            setDisplayBids: function () {},
            targetingKeys: function () {
              return [];
            },
            _Q: [],
          }),
          ((a = n.createElement(i)).async = !0),
          (a.src = "//c.amazon-adsystem.com/aax2/apstag.js"),
          (r = n.getElementsByTagName(i)[0]).parentNode.insertBefore(a, r));
      })("apstag", window, document, "script"),
      apstag.init({
        pubID: window.DIDNA_CONFIG.amazonA9.pubID,
        adServer: "googletag",
      })),
    window.DIDNA_CONFIG.hasOwnProperty("scanners")
      ? window.DIDNA_CONFIG.scanners.hasOwnProperty("confiant") &&
        ((window.confiant = window.confiant || {}),
        (window.confiant.enable_integrations = []),
        window.DIDNA_CONFIG.scanners.confiant.prebid &&
          window.confiant.enable_integrations.push("prebid"),
        window.DIDNA_CONFIG.scanners.confiant.gpt &&
          window.confiant.enable_integrations.push("gpt"),
        n(
          "https://confiant-integrations.global.ssl.fastly.net/MbZTQS496EB4Sd27ILU4rbHXnJ8/gpt_and_prebid/config.js",
          "script",
          "text/javascript"
        ))
      : ((window.confiant = window.confiant || {}),
        (window.confiant.enable_integrations = ["prebid"]),
        n(
          "https://confiant-integrations.global.ssl.fastly.net/MbZTQS496EB4Sd27ILU4rbHXnJ8/gpt_and_prebid/config.js",
          "script",
          "text/javascript"
        )),
    window.DIDNA_CONFIG.hasOwnProperty("thirdPartyTags") &&
      window.DIDNA_CONFIG.thirdPartyTags.length > 0)
  )
    for (let e = 0, t = window.DIDNA_CONFIG.thirdPartyTags.length; e < t; e++) {
      n(...window.DIDNA_CONFIG.thirdPartyTags[e]);
    }
})();
