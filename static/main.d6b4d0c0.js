(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire960c"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire960c"] = parcelRequire;
}
parcelRequire.register("2YYA6", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $22c02d8b37537ae9$export$6503ec6e8aabbaf; }, function (v) { return $22c02d8b37537ae9$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $22c02d8b37537ae9$export$f7ad0328861e2f03; }, function (v) { return $22c02d8b37537ae9$export$f7ad0328861e2f03 = v; });
var $22c02d8b37537ae9$export$6503ec6e8aabbaf;
var $22c02d8b37537ae9$export$f7ad0328861e2f03;
"use strict";
var $22c02d8b37537ae9$var$mapping = {};
function $22c02d8b37537ae9$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$22c02d8b37537ae9$var$mapping[keys[i]] = pairs[keys[i]];
}
function $22c02d8b37537ae9$var$resolve(id) {
    var resolved = $22c02d8b37537ae9$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$22c02d8b37537ae9$export$6503ec6e8aabbaf = $22c02d8b37537ae9$var$register;
$22c02d8b37537ae9$export$f7ad0328861e2f03 = $22c02d8b37537ae9$var$resolve;

});

parcelRequire.register("77BDW", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $52f663007a700e7a$export$bdfd709ae4826697; }, function (v) { return $52f663007a700e7a$export$bdfd709ae4826697 = v; });
var $52f663007a700e7a$export$bdfd709ae4826697;
var $52f663007a700e7a$export$c9e73fbda7da57b6;
var $52f663007a700e7a$export$5a759dc7a1cfb72a;
"use strict";
var $52f663007a700e7a$var$bundleURL = {};
function $52f663007a700e7a$var$getBundleURLCached(id) {
    var value = $52f663007a700e7a$var$bundleURL[id];
    if (!value) {
        value = $52f663007a700e7a$var$getBundleURL();
        $52f663007a700e7a$var$bundleURL[id] = value;
    }
    return value;
}
function $52f663007a700e7a$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $52f663007a700e7a$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $52f663007a700e7a$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $52f663007a700e7a$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$52f663007a700e7a$export$bdfd709ae4826697 = $52f663007a700e7a$var$getBundleURLCached;
$52f663007a700e7a$export$c9e73fbda7da57b6 = $52f663007a700e7a$var$getBaseURL;
$52f663007a700e7a$export$5a759dc7a1cfb72a = $52f663007a700e7a$var$getOrigin;

});

parcelRequire.register("91LJf", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("aUwsZ");

});

parcelRequire.register("dRVHh", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("aIxh9");

});

parcelRequire.register("8z7tz", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("bk2Nf");

});

parcelRequire.register("eJdOC", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("e9Rqg");

});

parcelRequire.register("kOw2L", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("cYkZi");

});

parcelRequire.register("9EgZ8", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("dIceq");

});

parcelRequire.register("61dh4", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("UzrBK");

});

parcelRequire.register("2wDVO", function(module, exports) {


module.exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "images/" + (parcelRequire("2YYA6")).resolve("hs0ch");

});

var $c565066730ace4c1$exports = {};

(parcelRequire("2YYA6")).register(JSON.parse('{"h2OIq":"main.d6b4d0c0.js","2tzIf":"c804.df34a5a3.mp3","gJ3bC":"c805.fe04160f.mp3","2unR5":"c806.7471c895.mp3","aSwQf":"c807.7dbb1f94.mp3","cSXzX":"c811.193629bd.mp3","lCEPu":"c812.cec97ca8.mp3","f1yo5":"c813.6adaed39.mp3","k6TU9":"c815.bf4e6816.mp3","gXDDR":"c816.983554c8.mp3","7ni7n":"c817a.0dc43017.mp3","bUy19":"c817b.f15eeefd.mp3","ektWr":"c824.b5843ba5.mp3","9lu2J":"c826.c92c5ee6.mp3","dLPaH":"c829.ee19f85d.mp3","a3DJZ":"powering_up.ebd58d74.mp3","ald3j":"powering_down.3cae8d9b.mp3","6vNgY":"redalert1a.02b04c25.mp3","b3kCa":"redalert2a.a124b93c.mp3","aUwsZ":"jwst001.f6f4592c.jpg","aIxh9":"jwst002.6d342356.jpg","bk2Nf":"jwst003.b12533b0.jpg","e9Rqg":"jwst004.57c7912b.jpg","cYkZi":"jwst005.9d03b451.jpg","dIceq":"jwst006.3ea19dc6.jpg","UzrBK":"jwst007.205e7180.jpg","hs0ch":"jwst008.fc32dc4a.jpg"}'));

var $771006645357c94f$export$2f0ee02dbc24ab6e;
var $771006645357c94f$export$b1ee323202faff63;
var $771006645357c94f$export$e252e9826f40ee5;
var $771006645357c94f$export$d2eb0d710fd7e6a3;
var $771006645357c94f$export$6bc1c44d5e100318;
var $771006645357c94f$export$440642fd4c279c05;
function $771006645357c94f$export$a13251365167ea49() {
    return Math.floor(Math.random() * 2) * 2 - 1;
}
function $771006645357c94f$export$24d4d9f7cb1f68df(a, b) {
    if (b < a) [a, b] = [
        b,
        a
    ];
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
function $771006645357c94f$export$7d15b64cf5a3a4c4(n, min = 0, max = 1) {
    return Math.min(max, Math.max(n, min));
}
function $771006645357c94f$export$51e16a050e2bf069(a, b) {
    if (b < a) [a, b] = [
        b,
        a
    ];
    return Math.random() * (b - a) + a;
}
function $771006645357c94f$export$3c5f89dae98e900b(num = 2) {
    return Math.floor(Math.random() * num);
}
function $771006645357c94f$export$cc4d98609e3a31e7(tmpMin = 1, tmpMax) {
    if (tmpMax == undefined) tmpMax = tmpMin;
    const tmpDigits = $771006645357c94f$export$24d4d9f7cb1f68df(tmpMin, tmpMax); // first, randomly picks the number of digits the output will have
    return $771006645357c94f$export$24d4d9f7cb1f68df(Math.pow(10, tmpDigits - 1), Math.pow(10, tmpDigits) - 1); // if tmpDigits=3, returns 100..999
}
function $771006645357c94f$export$de12a21935b7f164(tmpArray) {
    if (!Array.isArray(tmpArray)) return "";
    if (tmpArray.length == 0) return "";
    return tmpArray[$771006645357c94f$export$3c5f89dae98e900b(tmpArray.length)];
}
function $771006645357c94f$export$dd918e842b943f50(n, width, char = 0) {
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(char) + n;
}
function $771006645357c94f$export$3c20c3b4fe44b7c5(tmpOdd = 0, tmpTotal = 1) {
    if (tmpTotal == 0) return false;
    if (Math.random() < tmpOdd / tmpTotal) return true;
    return false;
}
function $771006645357c94f$export$61fc7d43ac8f84b0(callbackFunc, delay = 1000) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            callbackFunc(...args);
        }, delay);
    };
}
function $771006645357c94f$export$de363e709c412c8a(callbackFunc, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = ()=>{
        if (waitingArgs == null) shouldWait = false;
        else {
            callbackFunc(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    };
    return (...args)=>{
        if (shouldWait) {
            waitingArgs = args;
            return;
        }
        callbackFunc(...args);
        shouldWait = true;
        setTimeout(timeoutFunc, delay);
    };
}
function $771006645357c94f$export$2af9aa02da5a4582(camelString) {
    return camelString// insert a space before all caps
    .replace(/([A-Z])/g, " $1")// uppercase the first character
    .replace(/^./, function(str) {
        return str.toUpperCase();
    })// insert a space before a number that's after a non-number
    .replace(/([^\d])(\d)/g, "$1 $2");
}
function $771006645357c94f$export$275509f970718c8a(timerArray, functionRef, delay) {
    timerArray.push(setTimeout(functionRef, delay));
}
function $771006645357c94f$export$9ffbd077477b35d(d3_element, singleClickFunc, doubleClickFunc, blocking = true, stopPropagation = true) {
    let timeBufferForDoubleClick = 350; // in ms
    if (singleClickFunc == null) singleClickFunc = ()=>{};
    if (doubleClickFunc == null) {
        timeBufferForDoubleClick = 0;
        doubleClickFunc = ()=>{};
    }
    if (blocking) // will run with single-click OR double-click event, NOT both
    // -- wait for double-click event by delaying the single click event
    d3_element.on("pointerdown", (e)=>{
        // if the lcarsBox div is not ready, exit this arrow function immediately
        // if (d3_element.node().closest('.lcarsBox').dataset.status != 'enabled') return;
        if (d3_element.node().dataset.status != "disabled") {
            if (stopPropagation) e.stopPropagation();
            if (e.button == 0) {
                if (isNaN(d3_element.property("pointerdownTimerID"))) {
                    // ======= single click
                    const timerId = setTimeout(()=>{
                        d3_element.property("pointerdownTimerID", null);
                        singleClickFunc(d3_element);
                    }, timeBufferForDoubleClick);
                    d3_element.property("pointerdownTimerID", timerId);
                } else {
                    // ======= double click
                    clearTimeout(d3_element.property("pointerdownTimerID"));
                    d3_element.property("pointerdownTimerID", null);
                    doubleClickFunc(d3_element);
                }
            }
        }
    });
    else // will run single-click PLUS double-click if needed
    // -- run single-click event immediately, and if the next click is within preset time, run it as the double-click event
    d3_element.on("pointerdown", (e)=>{
        // if the lcarsBox div is not ready, exit this arrow function immediately
        // if (d3_element.node().closest('.lcarsBox').dataset.status != 'enabled') return;
        if (d3_element.node().dataset.status != "disabled") {
            if (stopPropagation) e.stopPropagation();
            if (e.button == 0) {
                if (isNaN(d3_element.property("pointerdownTimerID"))) {
                    // ======= single click
                    singleClickFunc(d3_element);
                    const timerId = setTimeout(()=>{
                        d3_element.property("pointerdownTimerID", null);
                    }, timeBufferForDoubleClick);
                    d3_element.property("pointerdownTimerID", timerId);
                } else {
                    // ======= double click
                    clearTimeout(d3_element.property("pointerdownTimerID"));
                    d3_element.property("pointerdownTimerID", null);
                    doubleClickFunc(d3_element);
                }
            }
        }
    });
}
function $771006645357c94f$export$3640b375c01540b1(d3_element) {
    d3_element.on("pointerdown", null);
}
function $771006645357c94f$export$1428f42a7de81803(hourType = "24hour", secondsType = "showSeconds") {
    const today = new Date();
    let hh = today.getHours();
    if (hourType !== "24hour") {
        hh = hh % 12;
        if (hh == 0) hh = 12;
    }
    let ss = "";
    if (secondsType === "showSeconds") ss = ":" + $771006645357c94f$export$dd918e842b943f50(today.getSeconds(), 2);
    return $771006645357c94f$export$dd918e842b943f50(hh, 2) + ":" + $771006645357c94f$export$dd918e842b943f50(today.getMinutes(), 2) + ss;
}
function $771006645357c94f$export$fedb369cb70207f1() {
    if (/iPad|iPhone|iPod/.test(navigator.platform)) return true;
    else return Boolean(navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));
}
function $771006645357c94f$export$363474031fa64020() {
    return Boolean(navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));
}
// ======================================================================================
// const greekLetters = new Array(); // longest length: "EPSILON"
const $771006645357c94f$var$greekLetters = [
    "ALPHA",
    "BETA",
    "GAMMA",
    "DELTA",
    "EPSILON",
    "ZETA",
    "ETA",
    "THETA",
    "IOTA",
    "KAPPA",
    "LAMBDA",
    "MU",
    "NU",
    "XI",
    "OMICRON",
    "PI",
    "RHO",
    "SIGMA",
    "TAU",
    "UPSILON",
    "PHI",
    "CHI",
    "PSI",
    "OMEGA"
];
$771006645357c94f$export$2f0ee02dbc24ab6e = $771006645357c94f$var$greekLetters;
// const constellationAbb = new Array(); // all 3 letters -- used in stars with Bayer designations, 89 collected. ** mewho changing "SEX - SEXTANS" to "SXT"
const $771006645357c94f$var$constellationAbb = [
    "AND",
    "ANT",
    "APS",
    "AQR",
    "AQL",
    "ARA",
    "ARI",
    "AUR",
    "BOO",
    "CAE",
    "CAM",
    "CNC",
    "CVN",
    "CMA",
    "CMI",
    "CAP",
    "CAR",
    "CAS",
    "CEN",
    "CEP",
    "CET",
    "CHA",
    "CIR",
    "COL",
    "COM",
    "CRA",
    "CRB",
    "CRV",
    "CRT",
    "CRU",
    "CYG",
    "DEL",
    "DOR",
    "DRA",
    "EQU",
    "ERI",
    "FOR",
    "GEM",
    "GRU",
    "HER",
    "HOR",
    "HYA",
    "HYI",
    "IND",
    "LAC",
    "LEO",
    "LMI",
    "LEP",
    "LIB",
    "LUP",
    "LYN",
    "LYR",
    "MEN",
    "MIC",
    "MON",
    "MUS",
    "NOR",
    "OCT",
    "OPH",
    "ORI",
    "PAV",
    "PEG",
    "PER",
    "PHE",
    "PIC",
    "PSC",
    "PSA",
    "PUP",
    "PYX",
    "RET",
    "SGE",
    "SGR",
    "SCO",
    "SCL",
    "SCT",
    "SER",
    "SXT",
    "TAU",
    "TEL",
    "TRI",
    "TRA",
    "TUC",
    "UMA",
    "UMI",
    "VEL",
    "VIR",
    "VOL",
    "VUL"
];
$771006645357c94f$export$b1ee323202faff63 = $771006645357c94f$var$constellationAbb;
const $771006645357c94f$var$constellationName = [
    "Andromeda",
    "Antlia",
    "Apus",
    "Aquarius",
    "Aquila",
    "Ara",
    "Aries",
    "Auriga",
    "Bootes",
    "Caelum",
    "Camelopardalis",
    "Cancer",
    "Canes Venatici",
    "Canis Major",
    "Canis Minor",
    "Capricornus",
    "Carina",
    "Cassiopeia",
    "Centaurus",
    "Cepheus",
    "Cetus",
    "Chamaeleon",
    "Circinus",
    "Columba",
    "Coma Berenices",
    "Corona Australis",
    "Corona Borealis",
    "Corvus",
    "Crater",
    "Crux",
    "Cygnus",
    "Delphinus",
    "Dorado",
    "Draco",
    "Equuleus",
    "Eridanus",
    "Fornax",
    "Gemini",
    "Grus",
    "Hercules",
    "Horologium",
    "Hydra",
    "Hydrus",
    "Indus",
    "Lacerta",
    "Leo",
    "Leo Minor",
    "Lepus",
    "Libra",
    "Lupus",
    "Lynx",
    "Lyra",
    "Mensa",
    "Microscopium",
    "Monoceros",
    "Musca",
    "Norma",
    "Octans",
    "Ophiuchus",
    "Orion",
    "Pavo",
    "Pegasus",
    "Perseus",
    "Phoenix",
    "Pictor",
    "Pisces",
    "Piscis Austrinus",
    "Puppis",
    "Pyxis",
    "Reticulum",
    "Sagitta",
    "Sagittarius",
    "Scorpius",
    "Sculptor",
    "Scutum",
    "Serpens",
    "Sextans",
    "Taurus",
    "Telescopium",
    "Triangulum",
    "Triangulum Australe",
    "Tucana",
    "Ursa Major",
    "Ursa Minor",
    "Vela",
    "Virgo",
    "Volans",
    "Vulpecula"
];
$771006645357c94f$export$e252e9826f40ee5 = $771006645357c94f$var$constellationName;
const $771006645357c94f$var$warpRelatedShorterText = [
    "WF",
    "WARP",
    "POWER",
    "FIELD",
    "MAG F.",
    "CCR",
    "FACTOR",
    "WARP FT",
    "SHIELD",
    "M/SEC",
    "METERS",
    "NANO SEC",
    "SUBSPACE",
    "RATIO",
    "DILITHIUM",
    "FUSION",
    "PLASMA",
    "K.PASCALS",
    "K.HERTZ",
    "EPS",
    "HALFLIFE",
    "INJECTOR",
    "EJECTION",
    "A.MATTER",
    "CONV.",
    "REACTION",
    "RAMSCOOP",
    "MFG/C",
    "M/ARA",
    "QCRD",
    "WPS",
    "CCF",
    "IPS",
    "PDT",
    "PORT",
    "NACELLE",
    "WARP COILS",
    "WARP CORE",
    "WFC",
    "ODN",
    "PLASMA PTC",
    "ENG.",
    "MEASURE",
    "LEVELS",
    "FUEL LEVEL",
    "EM LEVEL",
    "EXHAUST",
    "RESTORE",
    "QUANTUM",
    "UNLOCK",
    "LOCKED",
    "STORAGE",
    "VENTING",
    "CALIB.",
    "SIF",
    "IMPULSE",
    "ENGINE"
];
$771006645357c94f$export$d2eb0d710fd7e6a3 = $771006645357c94f$var$warpRelatedShorterText;
// s47.warpRelatedShortText = new Array(); // longest length: "ENGINEERING"
// s47.warpRelatedShortText = ["WF","WARP","POWER","FIELD","MAG FIELD","COCHRANES","FACTOR","WARP FT","SHIELD","M/SEC","METERS","NANO SEC","SUBSPACE","RATIO","DILITHIUM","DEUTERIUM","FUSION","PLASMA","K.PASCALS","K.HERTZ","EPS","HALFLIFE","INJECTOR","EJECTION","ANTIMATTER","CONVERSION","REACTION","RAMSCOOP","MFG/C","M/ARA","QCRD","WPS","CCF","IPS","PDT","S/NACELLE","P/NACELLE","WARP COILS","WARP CORE","WFC","ODN","PLASMA PTC","ENGINEERING","MEASURE","LEVELS","FUEL LEVEL","EM LEVEL","EXHAUSTION","REFINEMENT","QUANTUM","PERFORMANCE","DEGRADATION","LOCKED","STORAGE","VENTING","REDIRECTION","CALIBRATING","SIF","IMPULSE","ENGINE"];
// s47.warpRelatedLongText = new Array(); // longest length: "DILITHIUM CRYSTAL ARTICULATION"
const $771006645357c94f$var$warpRelatedLongText = [
    "WARP FACTOR",
    "POWER TRANSFER LEVEL",
    "WARP FIELD ESTABLISHED",
    "MAGNETIC FIELD STRENGTH",
    "MAGNETIC FIELD GENERATOR",
    "MAGNETIC CONSTRICTION SEGMENT",
    "ELECTROMAGNETIC FIELD",
    "MICROCOCHRANES MARGIN",
    "SHIELD STRENGTH LEVEL",
    "OPTICAL DATA NETWORK",
    "REACTION RATIO",
    "DILITHIUM RECRYSTALLIZATION",
    "DILITHIUM CRYSTAL ARTICULATION",
    "PRIMARY DEUTERIUM TANKAGE",
    "DEUTERIUM SUPPLY",
    "CONTINUUM DISTORTION FIELD",
    "FUSION REACTION RATE",
    "PLANCK TIME REACTION",
    "POWER TRANSPORT CONDUIT",
    "EPS DISTRIBUTION",
    "PLASMA INJECTOR OFFLINE",
    "PLASMA STREAM WARNING",
    "PLASMA CONTAINMENT",
    "ANTIMATTER CONTAINMENT",
    "CONTAINMENT FIELD",
    "WARP CORE EJECTION SYSTEM",
    "ANTIMATTER GENERATOR",
    "ANTIMATTER STORAGE POD",
    "ANTIMATTER REACANT INJECTOR",
    "MATTER REACANT INJECTOR",
    "CONVERSION FACTOR",
    "REACTION CHAMBER",
    "BUSSARD RAMSCOOP",
    "SUBSPACE FIELD GEOMETRY",
    "SUBSPACE FIELD FOLDS",
    "MATTER/ANTIMATER REACTION",
    "QUANTUM CHARGE REVERSAL",
    "IMPULSE PROPULSION SYSTEM",
    "WARP ENGINE EFFICIENCY",
    "WPS BREACH LEVEL",
    "ELECTRO-PLASMA SYSTEM",
    "STARBOARD NACELLE",
    "PORT NACELLE ONLINE",
    "WARP FIELD COILS",
    "WARP CORE EJECTION",
    "WARP CORE C/F",
    "DILITHIUM DEGRADATION",
    "STRUCTURAL INTEGRITY FIELD",
    "RECRYSTALLIZATION REFINEMENT",
    "REACTION CHAMBER",
    "WARP DRIVE ONLINE",
    "ENERGY FLUX"
];
$771006645357c94f$export$6bc1c44d5e100318 = $771006645357c94f$var$warpRelatedLongText;
const $771006645357c94f$var$techRelatedLongText = [
    "STARFIELD 47",
    "INERTIA DAMPER",
    "SUBSPACE ANALYSIS",
    "GRAVITON MAPPING"
];
$771006645357c94f$export$440642fd4c279c05 = $771006645357c94f$var$techRelatedLongText; // BJS Animations ========================================================================================
 // const fps = 60;
 // exports.fps = fps;
 // const easeMode = {
 //     "in": BABYLON.EasingFunction.EASINGMODE_EASEIN,
 //     "out": BABYLON.EasingFunction.EASINGMODE_EASEOUT,
 //     "inOut": BABYLON.EasingFunction.EASINGMODE_EASEINOUT
 // };
 // export function easeFunc(type = "sine", mode = "inOut", param1=null, param2=null) {
 //     let easingFunction = null;
 //     switch (type) {
 //         case "circle":
 //             easingFunction = new BABYLON.CircleEase();
 //             break;
 //         case "back":
 //             if (param1==null) param1=1;
 //             easingFunction = new BABYLON.BackEase(param1);
 //             break;
 //         case "bounce":
 //             easingFunction = new BABYLON.BounceEase(param1, param2);
 //             break;
 //         case "cubic":
 //             easingFunction = new BABYLON.CubicEase();
 //             break;
 //         case "elastic":
 //             easingFunction = new BABYLON.ElasticEase(param1, param2);
 //             break;
 //         case "exponential":
 //             easingFunction = new BABYLON.ExponentialEase(param1);
 //             break;
 //         case "power":
 //             easingFunction = new BABYLON.PowerEase(param1);
 //             break;
 //         case "quadratic":
 //             easingFunction = new BABYLON.QuadraticEase();
 //             break;
 //         case "quartic":
 //             easingFunction = new BABYLON.QuarticEase();
 //             break;
 //         case "quintic":
 //             easingFunction = new BABYLON.QuinticEase();
 //             break;
 //         default:
 //             easingFunction = new BABYLON.SineEase();
 //     }
 //     easingFunction.setEasingMode( easeMode[mode] );
 //     return easingFunction;
 // }
 // const animationType = {
 //     "vector3": BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
 //     "color3": BABYLON.Animation.ANIMATIONTYPE_COLOR3,
 //     "float": BABYLON.Animation.ANIMATIONTYPE_FLOAT
 // };
 // exports.animationType = animationType;
 // export function playAnimation(parameter, animValue, animType, animKeys, group, ease, easeMode, start) {
 //     // create animation clip
 //     // const thisAniName = parameter._name;
 //     let thisAniName = parameter._name; // * fixed to have better names in ani edit viewer
 //     if (thisAniName == null) {
 //         thisAniName = parameter.name;
 //     } else if (thisAniName == null) {
 //         thisAniName = parameter.id;
 //     }
 //     // console.log(parameter._name, thisAniName, parameter);
 //     if (animType === "float") {
 //         animType = animationType.float;
 //     } else if (animType === "vector3") {
 //         animType = animationType.vector3;
 //     } else if (animType === "color3") {
 //         animType = animationType.color3;
 //     }
 //     var paramAnim = new BABYLON.Animation(thisAniName, animValue, 60, animType, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
 //     // set up easing
 //     if (ease != null) {
 //         var easingFunction = ease;
 //         if (easeMode != null) {
 //             easingFunction.setEasingMode(easeMode);
 //         }
 //         paramAnim.setEasingFunction(easingFunction);
 //     }
 //     // create animation
 //     paramAnim.setKeys(animKeys);
 //     if (group !== null) {
 //         group.addTargetedAnimation(paramAnim, parameter);
 //         if (start) {
 //             group.play(true);
 //         }
 //     }
 // }












const $88becd1e1d3e4bd7$var$numTurbolifts = 4; // zero index -- matching to svg turbolift id names. #turbolift0, #turbolift1, etc.
const $88becd1e1d3e4bd7$var$turbolifts = [];
const $88becd1e1d3e4bd7$var$turboliftLogging = false; // ! DEV <<<<<<<<<<<<<<<<<<<<<<<<
// sections and junctions are labeled in Figma
const $88becd1e1d3e4bd7$var$turboshaft = {};
$88becd1e1d3e4bd7$var$turboshaft.sections = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
]; // sections with doors
$88becd1e1d3e4bd7$var$turboshaft.section1 = {
    doorX: [
        2577,
        2790,
        2969
    ],
    doorY: [
        133
    ],
    toSection1: [],
    toSection2: [
        "j1"
    ],
    toSection3: [
        "j1",
        "j2"
    ],
    toSection4: [
        "j1",
        "j2",
        "j3"
    ],
    toSection5: [
        "j1",
        "j2",
        "j3",
        "j4"
    ],
    toSection6: [
        "j1",
        "j2",
        "j3",
        "j5"
    ],
    toSection7: [
        "j1",
        "j2",
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10"
    ],
    toSection8: [
        "j1",
        "j2",
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10",
        "j11"
    ]
};
$88becd1e1d3e4bd7$var$turboshaft.section2 = {
    doorX: [
        2539
    ],
    doorY: [
        14,
        34,
        54,
        74,
        94,
        114,
        134,
        154,
        174,
        194,
        214,
        233
    ],
    toSection1: [
        "j1"
    ],
    toSection2: [],
    toSection3: [
        "j2"
    ],
    toSection4: [
        "j2",
        "j3"
    ],
    toSection5: [
        "j2",
        "j3",
        "j4"
    ],
    toSection6: [
        "j2",
        "j3",
        "j5"
    ],
    toSection7: [
        "j2",
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10"
    ],
    toSection8: [
        "j2",
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10",
        "j11"
    ]
};
$88becd1e1d3e4bd7$var$turboshaft.section3 = {
    doorX: [
        2246,
        2350,
        2450,
        2577,
        2702
    ],
    doorY: [
        233
    ],
    toSection1: [
        "j2",
        "j1"
    ],
    toSection2: [
        "j2"
    ],
    toSection3: [],
    toSection4: [
        "j3"
    ],
    toSection5: [
        "j3",
        "j4"
    ],
    toSection6: [
        "j3",
        "j5"
    ],
    toSection7: [
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10"
    ],
    toSection8: [
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10",
        "j11"
    ]
};
$88becd1e1d3e4bd7$var$turboshaft.section4 = {
    doorX: [
        2223
    ],
    doorY: [
        54,
        74,
        94,
        114,
        134,
        154,
        174,
        194,
        214,
        233
    ],
    toSection1: [
        "j3",
        "j2",
        "j1"
    ],
    toSection2: [
        "j3",
        "j2"
    ],
    toSection3: [
        "j3"
    ],
    toSection4: [],
    toSection5: [
        "j4"
    ],
    toSection6: [
        "j3",
        "j5"
    ],
    toSection7: [
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10"
    ],
    toSection8: [
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10",
        "j11"
    ]
};
$88becd1e1d3e4bd7$var$turboshaft.section5 = {
    doorX: [
        2223,
        2033,
        1858
    ],
    doorY: [
        134
    ],
    toSection1: [
        "j4",
        "j3",
        "j2",
        "j1"
    ],
    toSection2: [
        "j4",
        "j3",
        "j2"
    ],
    toSection3: [
        "j4",
        "j3"
    ],
    toSection4: [
        "j4"
    ],
    toSection5: [],
    toSection6: [
        "j4",
        "j3",
        "j5"
    ],
    toSection7: [
        "j4",
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10"
    ],
    toSection8: [
        "j4",
        "j3",
        "j5",
        "j6",
        "j7",
        "j8",
        "j9",
        "j10",
        "j11"
    ]
};
$88becd1e1d3e4bd7$var$turboshaft.section6 = {
    doorX: [
        906,
        1171,
        1446,
        1645,
        1843,
        1923
    ],
    doorY: [
        616
    ],
    toSection1: [
        "j5",
        "j3",
        "j2",
        "j1"
    ],
    toSection2: [
        "j5",
        "j3",
        "j2"
    ],
    toSection3: [
        "j5",
        "j3"
    ],
    toSection4: [
        "j5",
        "j3"
    ],
    toSection5: [
        "j5",
        "j3",
        "j4"
    ],
    toSection6: [],
    toSection7: [
        "j6",
        "j7",
        "j8",
        "j9",
        "j10"
    ],
    toSection8: [
        "j6",
        "j7",
        "j8",
        "j9",
        "j10",
        "j11"
    ]
};
$88becd1e1d3e4bd7$var$turboshaft.section7 = {
    doorX: [
        963,
        1087,
        1126
    ],
    doorY: [
        480
    ],
    toSection1: [
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3",
        "j2",
        "j1"
    ],
    toSection2: [
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3",
        "j2"
    ],
    toSection3: [
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3"
    ],
    toSection4: [
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3"
    ],
    toSection5: [
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3",
        "j4"
    ],
    toSection6: [
        "j10",
        "j9",
        "j8",
        "j7",
        "j6"
    ],
    toSection7: [],
    toSection8: [
        "j11"
    ]
};
$88becd1e1d3e4bd7$var$turboshaft.section8 = {
    doorX: [
        1126
    ],
    doorY: [
        368,
        398,
        418,
        444,
        462
    ],
    toSection1: [
        "j11",
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3",
        "j2",
        "j1"
    ],
    toSection2: [
        "j11",
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3",
        "j2"
    ],
    toSection3: [
        "j11",
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3"
    ],
    toSection4: [
        "j11",
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3"
    ],
    toSection5: [
        "j11",
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j3",
        "j4"
    ],
    toSection6: [
        "j11",
        "j10",
        "j9",
        "j8",
        "j7",
        "j6"
    ],
    toSection7: [
        "j11"
    ],
    toSection8: []
};
$88becd1e1d3e4bd7$var$turboshaft.junctions = {
    j1: {
        x: 2539,
        y: 134
    },
    j2: {
        x: 2539,
        y: 233
    },
    j3: {
        x: 2223,
        y: 233
    },
    j4: {
        x: 2223,
        y: 134
    },
    j5: {
        x: 1895,
        y: 616
    },
    j6: {
        x: 889,
        y: 616
    },
    j7: {
        x: 889,
        y: 675
    },
    j8: {
        x: 889,
        y: 544
    },
    j9: {
        x: 889,
        y: 538
    },
    j10: {
        x: 936,
        y: 480
    },
    j11: {
        x: 1126,
        y: 480
    }
};
function $88becd1e1d3e4bd7$export$80d17a45d63df6f2() {
    for(let i = 0; i < $88becd1e1d3e4bd7$var$numTurbolifts; i++)$88becd1e1d3e4bd7$var$turbolifts[i].d3node.interrupt();
    if ($88becd1e1d3e4bd7$var$turboliftLogging) console.log("turbolift system stopped");
}
function $88becd1e1d3e4bd7$export$863452630d3a69f5(resetLocations = "resetLocations") {
    // ! if locations aren't reset, the immediate animations will look wonky
    if (resetLocations == "resetLocations") $88becd1e1d3e4bd7$var$turbolifts_setRandomLocations();
    for(let i = 0; i < $88becd1e1d3e4bd7$var$numTurbolifts; i++)$88becd1e1d3e4bd7$var$initTurbolift(i, "systemStarted");
    if ($88becd1e1d3e4bd7$var$turboliftLogging) console.log("turbolift system started");
}
function $88becd1e1d3e4bd7$export$22a41b0a1e33e61(force) {
    let toShow = force;
    if (toShow !== true && toShow !== false) toShow = "noTurbolifts" in document.documentElement.dataset ? true : hide;
    if (toShow) delete document.documentElement.dataset.noTurbolifts;
    else document.documentElement.dataset.noTurbolifts = "";
}
function $88becd1e1d3e4bd7$export$12ab491ecc4d1301() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    for(let i = 0; i < $88becd1e1d3e4bd7$var$numTurbolifts; i++)$88becd1e1d3e4bd7$var$turbolifts[i] = {
        d3node: d3.select(`#turbolift${i}`)
    };
    $88becd1e1d3e4bd7$var$turbolifts_setRandomLocations();
    if ($88becd1e1d3e4bd7$var$turboliftLogging) console.log("Turbolift System initiated");
}
function $88becd1e1d3e4bd7$var$turbolifts_setRandomLocations() {
    for(let i = 0; i < $88becd1e1d3e4bd7$var$numTurbolifts; i++){
        const newRandomCurrent = $88becd1e1d3e4bd7$var$randomTurboShaftSectionAndPoint();
        $88becd1e1d3e4bd7$var$turbolifts[i].currentSection = newRandomCurrent.section;
        $88becd1e1d3e4bd7$var$turbolifts[i].currentX = newRandomCurrent.x;
        $88becd1e1d3e4bd7$var$turbolifts[i].currentY = newRandomCurrent.y;
        // init svg turbolift position
        $88becd1e1d3e4bd7$var$turbolifts[i].d3node.attr("transform", `translate(${$88becd1e1d3e4bd7$var$turbolifts[i].currentX}, ${$88becd1e1d3e4bd7$var$turbolifts[i].currentY})`);
    }
}
/**
 * Setup new dest point. Previous dest point becomes the current point.
 * When app init, setup a random current point.
 * @param {*} ti turbolift index
 * @param {*} init default is null. Use 'init' when app is init
 */ function $88becd1e1d3e4bd7$var$initTurbolift(ti, systemStarted = null) {
    if (systemStarted !== "systemStarted") {
        $88becd1e1d3e4bd7$var$turbolifts[ti].currentSection = $88becd1e1d3e4bd7$var$turbolifts[ti].destSection;
        $88becd1e1d3e4bd7$var$turbolifts[ti].currentX = $88becd1e1d3e4bd7$var$turbolifts[ti].destX;
        $88becd1e1d3e4bd7$var$turbolifts[ti].currentY = $88becd1e1d3e4bd7$var$turbolifts[ti].destY;
    }
    // get a new random dest -- should be a different point from currentPoint, but could be the same section
    const randomDest = $88becd1e1d3e4bd7$var$randomTurboShaftSectionAndPoint($88becd1e1d3e4bd7$var$turbolifts[ti].currentX, $88becd1e1d3e4bd7$var$turbolifts[ti].currentY);
    $88becd1e1d3e4bd7$var$turbolifts[ti].destSection = randomDest.section;
    $88becd1e1d3e4bd7$var$turbolifts[ti].destX = randomDest.x;
    $88becd1e1d3e4bd7$var$turbolifts[ti].destY = randomDest.y;
    // store a temp array of junctions from currentSection to destSection
    const secFrom = $88becd1e1d3e4bd7$var$turbolifts[ti].currentSection;
    const secTo = $88becd1e1d3e4bd7$var$turbolifts[ti].destSection;
    $88becd1e1d3e4bd7$var$turbolifts[ti].junctions = [
        ...$88becd1e1d3e4bd7$var$turboshaft[`section${secFrom}`][`toSection${secTo}`]
    ];
    // set flag Complete to false
    $88becd1e1d3e4bd7$var$turbolifts[ti].destReached = false;
    $88becd1e1d3e4bd7$var$turbolifts[ti].prevJunction = null;
    $88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction = null;
    $88becd1e1d3e4bd7$var$turboliftMove(ti);
}
/**
 * return a random section+point that is different from input point
 */ function $88becd1e1d3e4bd7$var$randomTurboShaftSectionAndPoint(inputX = 0, inputY = 0) {
    let generateNewRandom = true;
    let section, x, y;
    while(generateNewRandom){
        section = (0, $771006645357c94f$export$de12a21935b7f164)($88becd1e1d3e4bd7$var$turboshaft.sections);
        x = (0, $771006645357c94f$export$de12a21935b7f164)($88becd1e1d3e4bd7$var$turboshaft[`section${section}`].doorX);
        y = (0, $771006645357c94f$export$de12a21935b7f164)($88becd1e1d3e4bd7$var$turboshaft[`section${section}`].doorY);
        generateNewRandom = x == inputX && y == inputY;
    }
    return {
        section: section,
        x: x,
        y: y
    };
}
/**
 * if turbolift is at its destination point, animate the 'arrival' effect, 
 *     then invoke initTurbolift() to reset.
 * Otherwise continue to move the turbolift by invoking turboliftMove() 
 * @param {*} tIndex turbolift index
 */ function $88becd1e1d3e4bd7$var$turboliftCheckProgress(tIndex) {
    if ($88becd1e1d3e4bd7$var$turbolifts[tIndex].destReached) {
        if ($88becd1e1d3e4bd7$var$turboliftLogging) console.log(`turbolift ${tIndex + 1}: destination reached`);
        // randomize the visibility of the human inside the turbolift ??
        $88becd1e1d3e4bd7$var$turbolifts[tIndex].d3node.transition().duration(600).attr("opacity", .5) // dest reached effect: slow blink
        .transition().duration(600).attr("opacity", 1).transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(4000, 8000)) // idle a bit before new dest setup
        .duration(100).attr("opacity", 0) // new dest effect: fast blink
        .transition().duration(100).attr("opacity", 1).transition().duration(100).attr("opacity", 0).transition().duration(100).attr("opacity", 1).on("end", ()=>{
            if ($88becd1e1d3e4bd7$var$turboliftLogging) console.log(`turbolift ${tIndex + 1}: new assignment. Moving...`);
            $88becd1e1d3e4bd7$var$initTurbolift(tIndex); // setup for new dest & move
        });
    } else $88becd1e1d3e4bd7$var$turboliftMove(tIndex);
}
/**
 * move the turbolift to its next junction or destination point
 * then invoke turboliftCheckProgress()
 * @param {*} ti turbolift index
 */ function $88becd1e1d3e4bd7$var$turboliftMove(ti) {
    const currentPos = $88becd1e1d3e4bd7$var$turbolifts[ti].d3node.attr("transform");
    let toX, toY;
    if ($88becd1e1d3e4bd7$var$turbolifts[ti].junctions.length != 0) {
        $88becd1e1d3e4bd7$var$turbolifts[ti].prevJunction = $88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction;
        $88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction = $88becd1e1d3e4bd7$var$turbolifts[ti].junctions.shift();
        toX = $88becd1e1d3e4bd7$var$turboshaft.junctions[$88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction].x;
        toY = $88becd1e1d3e4bd7$var$turboshaft.junctions[$88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction].y;
    } else {
        $88becd1e1d3e4bd7$var$turbolifts[ti].prevJunction = null;
        $88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction = null;
        toX = $88becd1e1d3e4bd7$var$turbolifts[ti].destX;
        toY = $88becd1e1d3e4bd7$var$turbolifts[ti].destY;
        $88becd1e1d3e4bd7$var$turbolifts[ti].destReached = true;
    }
    if (($88becd1e1d3e4bd7$var$turbolifts[ti].prevJunction == "j7" || $88becd1e1d3e4bd7$var$turbolifts[ti].prevJunction == "j8") && ($88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction == "j7" || $88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction == "j8")) // ** Special case: msd turbolift "jump" from on graph area to area with quick fade effect
    $88becd1e1d3e4bd7$var$turbolifts[ti].d3node.transition().delay(300).duration(150).attr("opacity", 0).transition().duration(0).attr("transform", `translate(${toX},${toY})`).transition().duration(150).attr("opacity", 1).on("end", ()=>{
        $88becd1e1d3e4bd7$var$turboliftCheckProgress(ti);
    });
    else {
        let dur1 = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2500, 5000);
        if (($88becd1e1d3e4bd7$var$turbolifts[ti].prevJunction == "j8" || $88becd1e1d3e4bd7$var$turbolifts[ti].prevJunction == "j9") && ($88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction == "j8" || $88becd1e1d3e4bd7$var$turbolifts[ti].nextJunction == "j9")) dur1 = 500;
        $88becd1e1d3e4bd7$var$turbolifts[ti].d3node.transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(300, 600)).ease(d3.easeCubicInOut)// .ease(randomAItem[d3.easeExpIn, d3.easeExpOut, d3.easeExpInOut, d3.easeLinear])
        // .duration(1000)
        .duration(dur1).attrTween("transform", function() {
            return d3.interpolateString(currentPos, `translate(${toX},${toY})`);
        }).on("end", ()=>{
            $88becd1e1d3e4bd7$var$turboliftCheckProgress(ti);
        });
    }
}





var $7b9a26c1115dcf2f$exports = {};


$7b9a26c1115dcf2f$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("2tzIf");


var $224ea1e4a832148c$exports = {};


$224ea1e4a832148c$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("gJ3bC");


var $c3baa442b2c3c62a$exports = {};


$c3baa442b2c3c62a$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("2unR5");


var $6089ebc3ec6c84cf$exports = {};


$6089ebc3ec6c84cf$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("aSwQf");


var $783a93b56f011d24$exports = {};


$783a93b56f011d24$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("cSXzX");


var $2ab975504f963738$exports = {};


$2ab975504f963738$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("lCEPu");


var $0fce36e1e05c56b3$exports = {};


$0fce36e1e05c56b3$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("f1yo5");


var $eab7b1a103739e30$exports = {};


$eab7b1a103739e30$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("k6TU9");


var $ce9a5bfaaadaa885$exports = {};


$ce9a5bfaaadaa885$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("gXDDR");


var $f8ff0b6a2b79e4ed$exports = {};


$f8ff0b6a2b79e4ed$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("7ni7n");


var $2bc0d0585b2d879f$exports = {};


$2bc0d0585b2d879f$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("bUy19");


var $14b4d780a11b1f37$exports = {};


$14b4d780a11b1f37$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("ektWr");


var $560e68b489eca0b1$exports = {};


$560e68b489eca0b1$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("9lu2J");


var $6eb7fed5d58248f2$exports = {};


$6eb7fed5d58248f2$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("dLPaH");


var $7d5b61556434c470$exports = {};


$7d5b61556434c470$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("a3DJZ");


var $04cbb418caec9628$exports = {};


$04cbb418caec9628$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("ald3j");


var $eed6c637b76936d1$exports = {};


$eed6c637b76936d1$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("6vNgY");


var $db267ea10376fef6$exports = {};


$db267ea10376fef6$exports = (parcelRequire("77BDW")).getBundleURL("h2OIq") + "sounds/" + (parcelRequire("2YYA6")).resolve("b3kCa");


function $da19c3c2cc082ca0$export$3d7e390f2650e949() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.sounds = {
        audioCtx: new AudioContext(),
        sfxMasterGainNode: null,
        sbgMasterGainNode: null,
        assetReady: false,
        bgTimerId: null,
        soundFilesLoaded: 0,
        clips: {},
        soundTrackBg: null,
        soundTrackFx: null,
        audioMainSwitch: CRapp.userSessionSettings.audioEnabled,
        tempSettingsAudioSwitch: null,
        // cache the audioMainSwitch status right before #setting is shown, to determine if audio should play when audio bg fx are muting, un-muting
        soundTrackBgMute: false,
        soundTrackFxMute: false,
        soundTrackBgVolume: .3,
        soundTrackFxVolume: CRapp.userSessionSettings.audioFxLevel,
        redAlertTrackNode: null,
        redAlertTrackNames: [],
        redAlertTrackNameCurrentIndex: null
    };
    // * =========== app startup: try resuming audioContext on intro about page
    CRapp.resumeAudioContext = ()=>{
        if (CRapp.sounds.audioCtx.state == "running") return;
        CRapp.sounds.audioCtx.resume();
        if (CRapp.sounds.audioMainSwitch) $da19c3c2cc082ca0$var$setAudioMainOn();
    // else not needed, because app default is off already
    };
    document.body.addEventListener("pointerdown", CRapp.resumeAudioContext, false);
    document.querySelector("#aboutPage").addEventListener("pointerdown", CRapp.resumeAudioContext, false);
    CRapp.stopStartUpAudioContextListener = ()=>{
        document.body.removeEventListener("pointerdown", CRapp.resumeAudioContext, false);
        document.querySelector("#aboutPage").removeEventListener("pointerdown", CRapp.resumeAudioContext, false);
    };
    // * =========== app startup: try resuming audioContext on intro about page
    // ! DEV
    // CRapp.sounds.audioCtx.onstatechange = () => {
    //     console.log('audioCtx.state', CRapp.sounds.audioCtx.state);
    // };
    const soundBgUrls = {};
    const soundFxUrls = {};
    let numSoundFilesLoaded = 0;
    // soundBgUrls.bg1 = new URL('./sounds/bg1.mp3', import.meta.url); // resolving a usable href object from Parcel
    // soundBgUrls.bg2 = new URL('./sounds/bg_single_quick_beep1.mp3', import.meta.url);
    soundFxUrls.c804 = new URL($7b9a26c1115dcf2f$exports);
    soundFxUrls.c805 = new URL($224ea1e4a832148c$exports);
    soundFxUrls.c806 = new URL($c3baa442b2c3c62a$exports);
    soundFxUrls.c807 = new URL($6089ebc3ec6c84cf$exports);
    soundFxUrls.c811 = new URL($783a93b56f011d24$exports); // ! rate =.8 lowTone warning
    soundFxUrls.c812 = new URL($2ab975504f963738$exports); // ! rate =.8 highTone warning; rate 1.08 sharp crisp beep  
    soundFxUrls.c813 = new URL($0fce36e1e05c56b3$exports); // ! rate =.8 lowTone double notification beeps
    soundFxUrls.c815 = new URL($eab7b1a103739e30$exports);
    soundFxUrls.c816 = new URL($ce9a5bfaaadaa885$exports);
    soundFxUrls.c817a = new URL($f8ff0b6a2b79e4ed$exports);
    soundFxUrls.c817b = new URL($2bc0d0585b2d879f$exports);
    soundFxUrls.c824 = new URL($14b4d780a11b1f37$exports);
    soundFxUrls.c826 = new URL($560e68b489eca0b1$exports);
    soundFxUrls.c829 = new URL($6eb7fed5d58248f2$exports); // ! rate =.8 lowTone multiBeep notification
    // soundFxUrls.v001 = new URL('./sounds/flyby1a.mp3', import.meta.url); // for vector camera view change
    // soundFxUrls.v002 = new URL('./sounds/flyby1b.mp3', import.meta.url); // for vector camera view change
    // soundFxUrls.v003 = new URL('./sounds/flyby1c.mp3', import.meta.url); // for vector camera view change
    // soundFxUrls.v004 = new URL('./sounds/flyby1d.mp3', import.meta.url); // for vector camera view change
    // soundFxUrls.v005 = new URL('./sounds/flyby1e.mp3', import.meta.url); // for vector camera view change
    // soundFxUrls.v006 = new URL('./sounds/flyby1f.mp3', import.meta.url); // for vector camera view change
    soundFxUrls.p001 = new URL($7d5b61556434c470$exports);
    soundFxUrls.p002 = new URL($04cbb418caec9628$exports);
    // * red alert sounds
    soundFxUrls.alert01 = new URL($eed6c637b76936d1$exports);
    soundFxUrls.alert02 = new URL($db267ea10376fef6$exports);
    CRapp.sounds.redAlertTrackNames.push("alert01");
    CRapp.sounds.redAlertTrackNames.push("alert02");
    // pick a random alert sound to use
    CRapp.sounds.redAlertTrackNameCurrentIndex = (0, $771006645357c94f$export$3c5f89dae98e900b)(CRapp.sounds.redAlertTrackNames.length);
    // //* feeding files into assetManager
    // preloadSoundFile('bg1', soundBgUrls.bg1.href, true, CRapp.sounds.soundTrackBg); // looping bg sound
    // preloadSoundFile('bg2', soundBgUrls.bg2.href, false, CRapp.sounds.soundTrackBg); // beeping
    async function getSoundFile(filepath) {
        const response = await fetch(filepath);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await CRapp.sounds.audioCtx.decodeAudioData(arrayBuffer);
        return audioBuffer;
    }
    async function loadSoundFile(filePath) {
        const track = await getSoundFile(filePath);
        return track;
    }
    for(const key in soundFxUrls)// preloadSoundFile(key, soundFxUrls[key].href, false, CRapp.sounds.soundTrackFx);
    loadSoundFile(soundFxUrls[key].href).then((track)=>{
        numSoundFilesLoaded++;
        CRapp.sounds.assetReady = numSoundFilesLoaded == Object.keys(soundFxUrls).length; //* preloading done, set assetReady to true
        // console.log(numSoundFilesLoaded, CRapp.sounds.assetReady);
        CRapp.sounds.clips[key] = track; // = audioBuffer
    });
    // ! =========================================
    // a laying sfx track tmp SOURCE NODE (has audio buffer from original track) --> a tmp GAIN NODE for this tmp source node
    //       --> SFX GAIN NODE  -->  Master GAIN NODE  -->  Audio Context
    // a playing sbg track tmp SOURCE NODE (has audio buffer from original track) --> a tmp GAIN NODE for this tmp source node
    //       --> SBG GAIN NODE  -->  Master GAIN NODE  -->  Audio Context
    // ! =========================================
    // * ===============================================================================
    // * init master volume control -- ON or OFF (1 or 0), that's it
    CRapp.sounds.masterGainNode = CRapp.sounds.audioCtx.createGain();
    CRapp.sounds.masterGainNode.connect(CRapp.sounds.audioCtx.destination);
    CRapp.sounds.masterGainNode.gain.value = CRapp.sounds.audioMainSwitch ? 1 : 0;
    // * init sfx volume level -- ranges: 0 to 1
    CRapp.sounds.sfxMasterGainNode = CRapp.sounds.audioCtx.createGain();
    CRapp.sounds.sfxMasterGainNode.connect(CRapp.sounds.masterGainNode);
    CRapp.sounds.sfxMasterGainNode.gain.value = CRapp.sounds.soundTrackFxVolume;
    // ini sbg volume level
    // ---------- toDo
    // * ===============================================================================
    const aboutIntroAudio = document.getElementById("aboutIntroAudio");
    aboutIntroAudio.style.opacity = 1;
    aboutIntroAudio.querySelector("span:first-child").addEventListener("pointerdown", (e)=>{
        $da19c3c2cc082ca0$export$c8cdacb776d3b001();
        e.stopPropagation();
    });
// ! ============== DEV ======== setup sound tests in ABOUT ##########################################################################
// if (CRapp.debugMode) {
//     const soundStyles = ['shortRandomBeep', 'shortBeep',
//     'beepX1Up', 'beepX1Upper', 'beepX1Down', 'beepX1Downer', 'beepX2Up', 'beepX2Upper', 'beepX2Down', 'beepX2Downer', 'beepX3Up', 'beepX3Upper', 'beepX3Down', 'beepX3Downer',
//     'negative', 'affirmative', 'awaiting', 'deployed', 'executing', 'processing',
//     'warningLow', 'warningHigh', 'warningLong', 'notification', 'exitTask', 'lowProfileTask', 'longTask', 'longTaskLow',
//     'powerUp', 'powerDown' ];
//     const tmpParent = document.querySelector('.aboutContentMain .aboutRitos');
//     tmpParent.append( document.createElement("br") );
//     tmpParent.append( document.createElement("br") );
//     soundStyles.forEach((style)=>{
//         const span = document.createElement("span");
//         span.onpointerdown = ()=>{
//             playSound(style);
//         }
//         span.append('['+style + `] . `);
//         tmpParent.append(span);
//     });
//     CRapp.playSound = playSound; // ! <<<<<<<<<<<<< DEV usage only
// }
}
function $da19c3c2cc082ca0$export$c8cdacb776d3b001(force) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.sounds.audioCtx.state != "running") {
        // if audioContext is suspended, it means that the "toggle" intention is to turn sound on
        CRapp.sounds.audioCtx.resume();
        CRapp.sounds.audioMainSwitch = true;
    } else {
        if (force === true) {
            if (CRapp.sounds.audioMainSwitch) return;
        } else if (force === false) {
            if (!CRapp.sounds.audioMainSwitch) return;
        }
        CRapp.sounds.audioMainSwitch = !CRapp.sounds.audioMainSwitch; // toggle main audio
    }
    if (CRapp.sounds.audioMainSwitch) {
        $da19c3c2cc082ca0$var$setAudioMainOn();
        if (document.documentElement.dataset.pageState == "init") $da19c3c2cc082ca0$export$80cb197f7ea4fe13("shortRandomBeep", 0, 0, 0, 0.65); // only for audio starting when app init
        else $da19c3c2cc082ca0$export$80cb197f7ea4fe13((0, $771006645357c94f$export$de12a21935b7f164)([
            "beepX1Up",
            "beepX1Upper",
            "beepX1Down",
            "beepX1Downer"
        ]), 0, 0, 0, 0.4);
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Audio is now enabled");
    } else {
        $da19c3c2cc082ca0$var$setAudioMainOff();
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Audio has been disabled");
    }
}
function $da19c3c2cc082ca0$var$setAudioMainOn() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    document.documentElement.dataset.audio = "";
    CRapp.sounds.masterGainNode.gain.value = 1;
    CRapp.userSessionSettings.audioEnabled = true;
}
function $da19c3c2cc082ca0$var$setAudioMainOff() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    delete document.documentElement.dataset.audio;
    CRapp.sounds.masterGainNode.gain.value = 0;
    CRapp.userSessionSettings.audioEnabled = false;
}
function $da19c3c2cc082ca0$export$521ad490824e86fd() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    return CRapp.sounds.sfxMasterGainNode.gain.value;
}
function $da19c3c2cc082ca0$export$6d762aca21a0d7bf(newValue) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.sounds.sfxMasterGainNode.gain.value = newValue;
    CRapp.userSessionSettings.audioFxLevel = newValue;
}
function $da19c3c2cc082ca0$export$a4c58835879e53bb(audioBuffer, delay = 0, offset = 0, duration, volume = 1, playbackRate = 1) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // ! Check if context is in suspended state (autoplay policy)
    if (CRapp.sounds.audioCtx.state === "suspended") CRapp.sounds.audioCtx.resume();
    // ! setting up sound buffer
    const trackSourceNode = CRapp.sounds.audioCtx.createBufferSource();
    trackSourceNode.buffer = audioBuffer;
    // trackSource.connect(CRapp.sounds.audioCtx.destination);   // connects   buffer ---> audioCtx    ! we don't have volume control here
    // instead, connects  buffer ---> gainNode ---> audioCtx   so that volume can be control for each clip
    const gainNode = CRapp.sounds.audioCtx.createGain();
    trackSourceNode.connect(gainNode);
    gainNode.connect(CRapp.sounds.sfxMasterGainNode);
    // ! apply various sound settings before playback
    gainNode.gain.value = volume; // 0~1 // 0 means mute
    trackSourceNode.playbackRate.value = playbackRate;
    // trackSource.detune.value = 100;  // changing pitch. Can use playbackRate for similar effect
    // trackSource.loop = true; // default = false.   For sound fx, no loop needed here. For bg engine sound, this will be needed.
    trackSourceNode.start(CRapp.sounds.audioCtx.currentTime + delay, offset, duration); // *  start(when, offset, duration)
    // ! ??? garbage collecting needed ??
    return trackSourceNode; // * optional return
}
function $da19c3c2cc082ca0$export$80cb197f7ea4fe13(soundClipKey, delay = 0, offset = 0, duration, volume = 1, playbackRate = 1) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (duration == 0) duration = undefined;
    if (soundClipKey == "shortRandomBeep") {
        const newClip = CRapp.sounds.clips[(0, $771006645357c94f$export$de12a21935b7f164)([
            "c811",
            "c812",
            "c813",
            "c829"
        ])];
        const newPlaybackRate = (0, $771006645357c94f$export$51e16a050e2bf069)(.93, 1.1);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip, delay, offset, duration, volume, newPlaybackRate * playbackRate);
    } else if (soundClipKey == "shortBeep") {
        const rndClip = (0, $771006645357c94f$export$3c5f89dae98e900b)(7);
        if (rndClip == 1) {
            const newClip1 = CRapp.sounds.clips["c811"];
            $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip1, 0.015, .155, duration, volume, playbackRate);
        } else if (rndClip == 2) {
            const newClip2 = CRapp.sounds.clips["c812"];
            $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip2, 0.015, .143, duration, volume, playbackRate);
        } else if (rndClip == 3) {
            const newClip3 = CRapp.sounds.clips["c812"];
            $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip3, 0.063, .146, duration, volume, playbackRate);
        } else if (rndClip == 4) {
            const newClip4 = CRapp.sounds.clips["c813"];
            $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip4, 0.172, 0, duration, volume, playbackRate);
        } else if (rndClip == 5) {
            const newClip5 = CRapp.sounds.clips["c824"];
            $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip5, 0, .266, duration, volume, playbackRate);
        } else if (rndClip == 6) {
            const newClip6 = CRapp.sounds.clips["c829"];
            $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip6, 0, .172, duration, volume, playbackRate);
        } else {
            const newClip7 = CRapp.sounds.clips["c829"];
            $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip7, 0, .115, duration, volume, playbackRate);
        }
    } else if (soundClipKey == "beepX1Up") {
        const newClip8 = CRapp.sounds.clips["c813"];
        const newPlaybackRate1 = (0, $771006645357c94f$export$51e16a050e2bf069)(1.1, 1.3);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip8, delay, 0.08, 0.06, volume, newPlaybackRate1); // contains 1 beep
    } else if (soundClipKey == "beepX1Upper") {
        const newClip9 = CRapp.sounds.clips["c813"];
        const newPlaybackRate2 = (0, $771006645357c94f$export$51e16a050e2bf069)(1.2, 1.5);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip9, delay, 0.08, 0.06, volume, newPlaybackRate2); // contains 1 beep
    } else if (soundClipKey == "beepX1Down") {
        const newClip10 = CRapp.sounds.clips["c813"];
        const newPlaybackRate3 = (0, $771006645357c94f$export$51e16a050e2bf069)(.65, .93);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip10, delay, 0.08, 0.06, volume, newPlaybackRate3); // contains 1 beep
    } else if (soundClipKey == "beepX1Downer") {
        const newClip11 = CRapp.sounds.clips["c813"];
        const newPlaybackRate4 = (0, $771006645357c94f$export$51e16a050e2bf069)(.5, .8);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip11, delay, 0.08, 0.06, volume, newPlaybackRate4); // contains 1 beep
    } else if (soundClipKey == "beepX2Up") {
        const newClip12 = CRapp.sounds.clips["c813"];
        const newPlaybackRate5 = (0, $771006645357c94f$export$51e16a050e2bf069)(1.1, 1.3);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip12, delay, 0.08, 0.15, volume, newPlaybackRate5); // contains 2 beeps
    } else if (soundClipKey == "beepX2Upper") {
        const newClip13 = CRapp.sounds.clips["c813"];
        const newPlaybackRate6 = (0, $771006645357c94f$export$51e16a050e2bf069)(1.2, 1.5);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip13, delay, 0.08, 0.15, volume, newPlaybackRate6); // contains 2 beeps
    } else if (soundClipKey == "beepX2Down") {
        const newClip14 = CRapp.sounds.clips["c813"];
        const newPlaybackRate7 = (0, $771006645357c94f$export$51e16a050e2bf069)(.85, .93);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip14, delay, 0.08, 0.15, volume, newPlaybackRate7); // contains 2 beeps
    } else if (soundClipKey == "beepX2Downer") {
        const newClip15 = CRapp.sounds.clips["c813"];
        const newPlaybackRate8 = (0, $771006645357c94f$export$51e16a050e2bf069)(.5, .8);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip15, delay, 0.08, 0.15, volume, newPlaybackRate8); // contains 2 beeps
    } else if (soundClipKey == "beepX3Up") {
        // 1st beep
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay, .08, .06, volume, playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(.95, 1.1));
        // 2nd & 3rd beeps
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay + (0, $771006645357c94f$export$51e16a050e2bf069)(.09, .3), .08, .15, volume * (0, $771006645357c94f$export$51e16a050e2bf069)(.7, 1), playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(1.1, 1.3));
    } else if (soundClipKey == "beepX3Upper") {
        // 1st beep
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay, .08, .06, volume, playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(1.1, 1.3));
        // 2nd & 3rd beeps
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay + (0, $771006645357c94f$export$51e16a050e2bf069)(.09, .3), .08, .15, volume * (0, $771006645357c94f$export$51e16a050e2bf069)(.7, 1), playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(1.2, 1.5));
    } else if (soundClipKey == "beepX3Down") {
        // 1st beep
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay, .08, .06, volume, playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(.93, 1));
        // 2nd & 3rd beeps
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay + 0.15, .08, .15, volume * 0.7, playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(0.85, 0.93));
    } else if (soundClipKey == "beepX3Downer") {
        // 1st beep
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay, .08, .06, volume, playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(.85, .93));
        // 2nd & 3rd beeps
        $da19c3c2cc082ca0$export$a4c58835879e53bb(CRapp.sounds.clips["c813"], delay + 0.15, .08, .15, volume * 0.7, playbackRate * (0, $771006645357c94f$export$51e16a050e2bf069)(0.5, 0.8));
    } else if (soundClipKey == "negative") {
        const newClip16 = CRapp.sounds.clips["c804"];
        const newPlaybackRate9 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .9,
            1,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.85, 1)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip16, delay, offset, duration, volume, newPlaybackRate9 * playbackRate);
    } else if (soundClipKey == "affirmative") {
        const newClip17 = CRapp.sounds.clips["c805"];
        const newPlaybackRate10 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .93,
            1.2,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.95, 1)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip17, delay, offset, duration, volume, newPlaybackRate10 * playbackRate);
    } else if (soundClipKey == "awaiting") {
        const newClip18 = CRapp.sounds.clips["c807"];
        const newPlaybackRate11 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .93,
            1.2,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.95, 1)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip18, delay, offset, duration, volume, newPlaybackRate11 * playbackRate);
    } else if (soundClipKey == "deployed") {
        const newClip19 = CRapp.sounds.clips["c816"];
        const newPlaybackRate12 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .95,
            1,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.9, 1.2)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip19, delay, offset, duration, volume, newPlaybackRate12 * playbackRate);
    } else if (soundClipKey == "executing") {
        const newClip20 = CRapp.sounds.clips["c817a"];
        const newPlaybackRate13 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .93,
            1.2,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.95, 1)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip20, delay, offset, duration, volume, newPlaybackRate13 * playbackRate);
    } else if (soundClipKey == "processing") {
        const newClip21 = CRapp.sounds.clips["c826"];
        const newPlaybackRate14 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .93,
            1,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.8, 1.2)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip21, delay, offset, duration, volume, newPlaybackRate14 * playbackRate);
    } else if (soundClipKey == "warningLow") {
        const newClip22 = CRapp.sounds.clips["c811"];
        const newPlaybackRate15 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .75,
            .85
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip22, delay, offset, duration, volume, newPlaybackRate15 * playbackRate);
    } else if (soundClipKey == "warningHigh") {
        const newClip23 = CRapp.sounds.clips["c812"];
        const newPlaybackRate16 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .75,
            .85
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip23, delay, offset, duration, volume, newPlaybackRate16 * playbackRate);
    } else if (soundClipKey == "warningLong") {
        const newClip24 = CRapp.sounds.clips["c817b"];
        const newPlaybackRate17 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .88,
            .94,
            1
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip24, delay, offset, duration, volume, newPlaybackRate17 * playbackRate);
    } else if (soundClipKey == "notification") {
        const newClip25 = CRapp.sounds.clips[(0, $771006645357c94f$export$de12a21935b7f164)([
            "c813",
            "c829"
        ])];
        const newPlaybackRate18 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .8,
            .85
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip25, delay, offset, duration, volume, newPlaybackRate18 * playbackRate);
    } else if (soundClipKey == "exitTask") {
        const newClip26 = CRapp.sounds.clips["c815"];
        const newPlaybackRate19 = (0, $771006645357c94f$export$de12a21935b7f164)([
            1,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.95, 1.1)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip26, delay, offset, duration, volume, newPlaybackRate19 * playbackRate);
    } else if (soundClipKey == "lowProfileTask") {
        const newClip27 = CRapp.sounds.clips["c806"];
        const newPlaybackRate20 = (0, $771006645357c94f$export$de12a21935b7f164)([
            1,
            (0, $771006645357c94f$export$51e16a050e2bf069)(.95, 1.1)
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip27, delay, offset, duration, volume, newPlaybackRate20 * playbackRate);
    } else if (soundClipKey == "longTask") {
        const newClip28 = CRapp.sounds.clips["c806"];
        const newPlaybackRate21 = (0, $771006645357c94f$export$de12a21935b7f164)([
            .93,
            1
        ]);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip28, delay, offset, duration, volume, newPlaybackRate21 * playbackRate);
    } else if (soundClipKey == "longTaskLow") {
        const newClip29 = CRapp.sounds.clips["c806"];
        const newPlaybackRate22 = (0, $771006645357c94f$export$51e16a050e2bf069)(.78, .85);
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip29, delay, offset, duration, volume, newPlaybackRate22 * playbackRate);
    } else if (soundClipKey == "powerUp") {
        const newClip30 = CRapp.sounds.clips["p001"];
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip30, delay, offset, duration, volume, playbackRate);
    } else if (soundClipKey == "powerDown") {
        const newClip31 = CRapp.sounds.clips["p002"];
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip31, delay, offset, duration, volume, playbackRate);
    } else if (soundClipKey == "startRedAlert") {
        if (CRapp.sounds.redAlertTrackNode != null) $da19c3c2cc082ca0$export$80cb197f7ea4fe13("stopRedAlert"); // make sure previous alert has stopped
        $da19c3c2cc082ca0$export$80cb197f7ea4fe13("warningLong");
        $da19c3c2cc082ca0$export$80cb197f7ea4fe13("executing", 1);
        const newClip32 = CRapp.sounds.clips[CRapp.sounds.redAlertTrackNames[CRapp.sounds.redAlertTrackNameCurrentIndex]];
        // update alert sound index for future, so the different alert sounds are iterated upon new Red Alert Activation
        CRapp.sounds.redAlertTrackNameCurrentIndex = (CRapp.sounds.redAlertTrackNameCurrentIndex + 1) % CRapp.sounds.redAlertTrackNames.length;
        // * the delay time & loopEnd time are in sync with CSS .redAlertBlink class
        CRapp.sounds.redAlertTrackNode = $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip32, 2.3, offset, duration, volume, playbackRate);
        CRapp.sounds.redAlertTrackNode.loop = true;
        CRapp.sounds.redAlertTrackNode.loopEnd = 2.9; // in sec. Make sure the source clip is longer than this set time. Otherwise loopEnd is set to the clip's end time
    } else if (soundClipKey == "stopRedAlert") {
        CRapp.sounds.redAlertTrackNode.stop();
        // CRapp.sounds.redAlertTrackNode.disconnect();  // shouldn't need this. After stop() plus no more reference, audioNode should be garbage-collected
        CRapp.sounds.redAlertTrackNode = null;
        $da19c3c2cc082ca0$export$80cb197f7ea4fe13("exitTask", 0.25, 0, 0, 0.6, 0.9);
    } else if (soundClipKey in CRapp.sounds.clips) {
        const newClip33 = CRapp.sounds.clips[soundClipKey];
        $da19c3c2cc082ca0$export$a4c58835879e53bb(newClip33, delay, offset, duration, volume, playbackRate);
    }
}


function $63a5b00227d0cbe7$export$43d4f9696d93e7dd() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // =================== set up ship zooming
    //* Don't apply transform to SVG element's 'transform' attribute. Firefox doesn't apply css transition animation on this attribute.
    //* Instead, apply transform changes to 'style' attribute
    CRapp.shipRef.shipD3 = d3.select("#msdContainer svg #ship");
    CRapp.shipRef.zoomInBoundaryBBox = CRapp.shipRef.shipD3.select("#zoomInBoundary").node().getBBox();
    CRapp.shipRef.zoomInBoundaryCX = CRapp.shipRef.zoomInBoundaryBBox.x + CRapp.shipRef.zoomInBoundaryBBox.width * .5;
    CRapp.shipRef.zoomInBoundaryCY = CRapp.shipRef.zoomInBoundaryBBox.y + CRapp.shipRef.zoomInBoundaryBBox.height * .5;
    // !!!!!  set ship's transform revolve around the Zoom Ref Box's center
    CRapp.shipRef.ttA = `translate(${CRapp.shipRef.zoomInBoundaryCX}px, ${CRapp.shipRef.zoomInBoundaryCY}px)`;
    CRapp.shipRef.ttB = `translate(-${CRapp.shipRef.zoomInBoundaryCX}px, -${CRapp.shipRef.zoomInBoundaryCY}px)`;
    (0, $a2757c1cf7e9a697$export$5f3b35c2b8474baf)(CRapp.shipRef.shipD3.node()); // special zoom (saucer, eng, nacelle) will use this reference data
    // * some hitarea is too small. We don't want to zoom in too much, but rather zoom to a bigger area.
    // A second hit rect is created in svg for accommodate this.
    // The pointer hitarea has id "hit_objId". The optional temporary rect node with id "hit_objId_zoomTo".
    // And this "hit_objId_zoomTo" rect generally will be a bigger rect.
    // Once its BBox() gets saved, this temporary rect node gets deleted.
    // Later zoom function will use this BBox value instead if it exists.
    CRapp.shipContentDom.querySelectorAll('#hitareas > *[id$="_zoomTo"]').forEach((element)=>{
        CRapp.shipHitareaZoomToBBox[element.getAttribute("id").replace("_zoomTo", "")] = element.getBBox();
        element.remove(); // ! actual node no longer needed
    });
    // console.log( CRapp.shipHitareaZoomToBBox );
    // ! ========== OLD CODE --- with many pointerdown events
    // CRapp.shipContentDom.querySelectorAll('#hitareas > *:not([id$="_zoomTo"])').forEach((element)=>{
    //     element.onpointerdown = function(){
    //         //ToDo: check if in full view & if labels are visible, then check if this hitarea has a corresponding label
    //         //ToDo: ...if Yes, highlight active label first and hide all others, then zoom in
    //         // if labels are visible & there's corresponding label, do label effect
    //         if (findCorrespondingLabel(this) === false) {
    //             toggleShipObjectZoom(this);
    //         }
    //     }
    // });
    // ! =========== *** NEW CODE -- with 1 pointerdown event for process
    CRapp.shipContentDom.querySelector("#hitareas").onpointerdown = (e)=>{
        //ToDo: check if in full view & if labels are visible, then check if this hitarea has a corresponding label
        //ToDo: ...if Yes, highlight active label first and hide all others, then zoom in
        // console.log(e.target.getAttribute("id"));
        if (e.target.getAttribute("id").indexOf("hit_") != 0) return; // <<<<< future proofing: making sure the target is a hit_*** element
        // if labels are visible & there's corresponding label, do label effect
        if ((0, $899111cd465e6cd4$export$54007cc6d00f8c3a)(e.target) === false) $63a5b00227d0cbe7$export$b9bb69d98eff82dd(e.target);
    };
    //* init zoom boundary for the SPECIAL HITAREAs (saucer, nacelle, eng hull)
    // ! Don't use "ship" node as the special boundary, due to flying shuttle bound, the bound's width becomes too wide (Firefox only).
    // ! Use ship's "wires" instead.
    const wires = CRapp.shipContentDom.querySelector("#wires");
    (0, $a2757c1cf7e9a697$export$5f3b35c2b8474baf)(wires);
    CRapp.shipRef.specialZoomInBoundaryBBox = wires.getBBox();
    CRapp.shipRef.specialZoomInBoundaryCX = wires.dataset.transformOriginX;
    CRapp.shipRef.specialZoomInBoundaryCY = wires.dataset.transformOriginY;
    CRapp.shipRef.specialZoomIn_ttA = `translate(${CRapp.shipRef.specialZoomInBoundaryCX}px, ${CRapp.shipRef.specialZoomInBoundaryCY}px)`;
    CRapp.shipRef.specialZoomIn_ttB = `translate(-${CRapp.shipRef.specialZoomInBoundaryCX}px, -${CRapp.shipRef.specialZoomInBoundaryCY}px)`;
    // ! ============================================================
    //* ######## SPECIAL HIT SPOTS #################################
    CRapp.shipContentDom.querySelector("#wcHatchHitspot").onpointerdown = function() {
        $63a5b00227d0cbe7$var$warpCoreEjectAnimation();
    };
}
function $63a5b00227d0cbe7$export$203cdef525f5b26e() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const shipD3 = CRapp.shipRef.shipD3;
    const currentZoomInObjId = shipD3.node().dataset.zoomObj;
    // * if zoom in already, make a small chance to zoom out completely 
    if (currentZoomInObjId !== undefined && Math.random() < 0.2) {
        $63a5b00227d0cbe7$export$867e02d6ef0e904();
        return;
    }
    // * pick a another random object to zoom in to
    const objList = document.querySelectorAll("#msdContainer svg #ship #hitareas > *");
    let randomIndex = (0, $771006645357c94f$export$3c5f89dae98e900b)(objList.length);
    if (objList[randomIndex].getAttribute("id") == currentZoomInObjId) randomIndex = (randomIndex + 1) % objList.length;
    const randomObj = objList[randomIndex];
    $63a5b00227d0cbe7$export$b9bb69d98eff82dd(randomObj);
}
function $63a5b00227d0cbe7$export$867e02d6ef0e904() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const shipD3 = CRapp.shipRef.shipD3;
    const currentZoomInObjId = shipD3.node().dataset.zoomObj;
    if (currentZoomInObjId !== undefined) {
        // zoom out
        const specialZoom = currentZoomInObjId === "hit_saucerModule" || currentZoomInObjId === "hit_starboardNacelle" || currentZoomInObjId === "hit_engineeringHull"; // ! <<<<<<<<< SPECIAL Zoom
        const currentZoomInObj = specialZoom ? currentZoomInObjId : document.querySelector(`#msdContainer svg #ship #hitareas #${currentZoomInObjId}`);
        $63a5b00227d0cbe7$export$b9bb69d98eff82dd(currentZoomInObj);
    } else {
        // already in full view    or in the progress of
        // zoom out a bit more than back in
        //* zoom out on the ship's parent container -- in case that the ship is still in progress of zooming
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("longTaskLow", 0, 0, 0, 0.3);
        if (Math.random() < 0.5) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0.5, 0, 0, 0.25);
        else (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)(`beepX${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 3)}${(0, $771006645357c94f$export$de12a21935b7f164)([
            "Down",
            "Downer",
            "Up",
            "Upper"
        ])}`, 0.5, 0, 0, 0.2);
        const hullOutlines = document.querySelectorAll("#msdContainer svg #outlines > path");
        const rndWidth = (0, $771006645357c94f$export$de12a21935b7f164)([
            0,
            1,
            2,
            4,
            6,
            10,
            16,
            20
        ]);
        const rndOpacity = (0, $771006645357c94f$export$de12a21935b7f164)([
            0,
            0.3,
            0.6,
            1,
            1,
            1,
            1
        ]);
        const rndColor = (0, $771006645357c94f$export$de12a21935b7f164)(CRapp.nonDarkColorCssVarNames);
        const contentShip = document.querySelector("#msdContainer svg #contentShip");
        const tta = `translate(${contentShip.dataset.transformOriginX}px, ${contentShip.dataset.transformOriginY}px)`;
        const ttb = `translate(-${contentShip.dataset.transformOriginX}px, -${contentShip.dataset.transformOriginY}px)`;
        d3.select(contentShip).transition().duration(600).ease(d3.easeCubicOut).style("transform", `${tta} scale(1.037) ${ttb}`).on("end", ()=>{
            (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(document.querySelector(`#msdContainer svg #ship #outlines`));
            hullOutlines.forEach((node)=>{
                node.setAttribute("stroke-width", rndWidth);
                node.setAttribute("stroke-opacity", rndOpacity);
                node.setAttribute("stroke", `var(--${rndColor})`);
            });
        }).transition().delay(500).ease(d3.easeCubicIn).duration(1200).style("transform", `${tta} scale(1) ${ttb}`).on("end", ()=>{
            hullOutlines.forEach((node)=>{
                node.setAttribute("stroke-width", node.getAttribute("data-stroke-width"));
                node.setAttribute("stroke", node.getAttribute("data-stroke"));
                node.removeAttribute("stroke-opacity");
            });
        });
    }
}
function $63a5b00227d0cbe7$export$71d9d5af3ae909a7() {
    // code below is like a simplified version of the zoom-out code from   toggleShipObjectZoom()
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const shipD3 = CRapp.shipRef.shipD3;
    shipD3.interrupt();
    shipD3.style("transform", `${CRapp.shipRef.ttA} scale(1) ${CRapp.shipRef.ttB}`); // reset zoom translate now
    shipD3.node().dataset.zoomScale = 1;
    delete shipD3.node().dataset.zoomObj;
    delete document.documentElement.dataset.zooming;
    shipD3.classed("zoomOut", false);
    CRapp.shipZoomMode = false;
    delete document.documentElement.dataset.shipZoomMode;
    delete document.documentElement.dataset.shipZoomObj;
}
function $63a5b00227d0cbe7$export$b9bb69d98eff82dd(domObj) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // =================== set up ship zooming
    //* Don't apply transform to SVG element's 'transform' attribute. Firefox doesn't apply css transition animation on this attribute.
    //* Instead, apply transform changes to 'style' attribute
    const shipD3 = CRapp.shipRef.shipD3;
    const specialZoom = domObj === "hit_saucerModule" || domObj === "hit_starboardNacelle" || domObj === "hit_engineeringHull"; // ! <<<<<<<<< SPECIAL Zoom
    const domObjId = specialZoom ? domObj : domObj.getAttribute("id");
    // ! Don't use "ship" node as the special boundary, due to flying shuttle bound, the bound's width becomes too wide (Firefox only).
    // ! Use ship's "wires" instead.
    const zoomInBoundaryBBox = specialZoom ? CRapp.shipRef.specialZoomInBoundaryBBox : CRapp.shipRef.zoomInBoundaryBBox;
    const zoomInBoundaryCX = specialZoom ? CRapp.shipRef.specialZoomInBoundaryCX : CRapp.shipRef.zoomInBoundaryCX;
    const zoomInBoundaryCY = specialZoom ? CRapp.shipRef.specialZoomInBoundaryCY : CRapp.shipRef.zoomInBoundaryCY;
    const shipRef = specialZoom ? {
        "ttA": CRapp.shipRef.specialZoomIn_ttA,
        "ttB": CRapp.shipRef.specialZoomIn_ttB
    } : {
        "ttA": CRapp.shipRef.ttA,
        "ttB": CRapp.shipRef.ttB
    };
    // for performance reason, using CSS transition here, not d3 transition
    // stopShipMiscAnimations(); // ! for performance, stop some animations
    let zoomObjBBox;
    if (domObjId in CRapp.shipHitareaZoomToBBox) zoomObjBBox = CRapp.shipHitareaZoomToBBox[domObjId];
    else zoomObjBBox = domObj.getBBox();
    const scaleDelayLong = 1100;
    const scaleDelayShort = 400;
    let scaleDelay = scaleDelayLong;
    const previousZoomObj = "zoomObj" in shipD3.node().dataset ? shipD3.node().dataset.zoomObj : undefined;
    var _zoomScale;
    const previousZoomScale = (_zoomScale = shipD3.node().dataset.zoomScale) !== null && _zoomScale !== void 0 ? _zoomScale : 1;
    var _zoomTranslate;
    const previousZoomTranslate = (_zoomTranslate = shipD3.node().dataset.zoomTranslate) !== null && _zoomTranslate !== void 0 ? _zoomTranslate : "0,0";
    // console.log('previousZoomScale = ' + previousZoomScale);
    // console.log('zoomObj ID = ' + domObjId);
    // pauseSvgRootAnimation();
    $63a5b00227d0cbe7$export$8a2e6fed9df8c3ad("forZooming"); //* <<<<<<< &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    delete document.documentElement.dataset.shipZoomObj;
    if (previousZoomObj == domObjId) {
        //* same obj clicked,   ZOOM OUT......................
        shipD3.node().dataset.zoomScale = 1;
        delete shipD3.node().dataset.zoomObj;
        document.documentElement.dataset.zooming = ""; // in progress
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
            "beepX1Upper",
            "beepX2Down",
            "beepX3Downer"
        ]), 0, 0, 0, 0.3);
        shipD3.style("transform", `${shipRef.ttA} scale(1) translate(${previousZoomTranslate}) ${shipRef.ttB}`) // initially reset scale, but still keep zoom translate
        .classed("zoomOut", true) // temporarily shorten css transition timing
        .transition().delay(300).duration(1).on("start", ()=>{
            delete document.documentElement.dataset.zooming;
            shipD3.style("transform", `${shipRef.ttA} scale(1) ${shipRef.ttB}`); // reset zoom translate now
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                "exitTask",
                "negative"
            ]), 0.2, 0, 0, 0.25, 0.9);
        }).on("end cancel interrupt", ()=>{
            delete document.documentElement.dataset.zooming;
            shipD3.classed("zoomOut", false); // remove temporary css override
        }).transition().delay(1200).duration(0).on("start", ()=>{
            // setShipMiscAnimations(); // ! restart previously stopped animations
            // unpauseSvgRootAnimation();
            $63a5b00227d0cbe7$export$f254544244e1cd1a("forZooming"); //* <<<<<<< &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
            if (shipD3.node().dataset.showLabelsOnZoomOut == "show") (0, $899111cd465e6cd4$export$8baee8e71bc8bf1)("faster");
            CRapp.shipZoomMode = false;
            delete document.documentElement.dataset.shipZoomMode; // for ani final state
        });
        (0, $a2757c1cf7e9a697$export$fa6d0396531d5260)();
        return; // ! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< break point
    } else {
        // log the ID of the new zoom obj
        shipD3.node().dataset.zoomObj = domObjId;
        if (previousZoomObj != undefined) scaleDelay = scaleDelayShort; // ! shorter delay between change of translate & scale while already Zoomed in
        else {
            // * brand new zoom in from full view
            // hide labels first .... and keep a record if labels were visible before zooming in, so that we can keep the same labels visibility when zoom out
            shipD3.node().dataset.showLabelsOnZoomOut = document.querySelector("#msdLabels").dataset.visible == "showing" ? "show" : "no";
            if (shipD3.node().dataset.labelsHideDelay == "delay") {
                shipD3.node().dataset.labelsHideDelay = null;
                setTimeout(()=>{
                    (0, $899111cd465e6cd4$export$9366dc6771d56232)("skipAnimation");
                }, 1000);
            } else (0, $899111cd465e6cd4$export$9366dc6771d56232)("skipAnimation");
        }
        let titleText = (0, $771006645357c94f$export$2af9aa02da5a4582)(domObjId.replace(/[^_]*_(.*)/g, "$1") // removing hitarea id's prefix of 'hit_' 
        ).toUpperCase();
        // ! special case: 'Main-Stage Flux Tuner' for the dash
        titleText = titleText.replace("MAIN STAGE", "MAIN-STAGE");
        titleText = titleText.replace("CAPTAINS YACHT", "CAPTAIN’S YACHT");
        titleText = titleText.replace("PTC EPS CONDUITS", "PTC / EPS CONDUITS");
        (0, $a2757c1cf7e9a697$export$fa6d0396531d5260)(titleText);
        shipD3.interrupt(); // ! stop any previous animation before proceeding to set new data values. Otherwise, new values might get overwritten
        CRapp.shipZoomMode = true;
        document.documentElement.dataset.shipZoomMode = ""; // for ani final state
    }
    const zoomObjCenterX = zoomObjBBox.x + zoomObjBBox.width * .5;
    const zoomObjCenterY = zoomObjBBox.y + zoomObjBBox.height * .5;
    const dX = zoomInBoundaryCX - zoomObjCenterX;
    const dY = zoomInBoundaryCY - zoomObjCenterY;
    const newZoomTranslate = `${dX}px, ${dY}px`;
    const newZoomInScale = Math.min(zoomInBoundaryBBox.width / zoomObjBBox.width, zoomInBoundaryBBox.height / zoomObjBBox.height);
    // * set translate change, gets animated via CSS transition property
    shipD3.style("transform", `${shipRef.ttA} scale(${previousZoomScale}) translate(${newZoomTranslate}) ${shipRef.ttB}`);
    // log the new zoom scale for later use if needed // ! -- only log it after new scale attribute is changed
    shipD3.node().dataset.zoomTranslate = newZoomTranslate;
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)(`beepX${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 3)}${(0, $771006645357c94f$export$de12a21935b7f164)([
        "Down",
        "Downer",
        "Up",
        "Upper"
    ])}`, 0, 0, 0, 0.45);
    if (Math.random() < 0.5 && previousZoomObj == undefined) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)(`beepX${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 3)}${(0, $771006645357c94f$export$de12a21935b7f164)([
        "Down",
        "Downer",
        "Up",
        "Upper"
    ])}`, 0.25, 0, 0, 0.15);
    // use d3.transition() here to delay scale change, so that it can be easily interrupt if another obj is clicked while zoom is in progress
    shipD3.transition().delay(scaleDelay) // wait for translate css transition to complete
    .duration(scaleDelayLong - scaleDelayShort) // 1100 - 400 = 700
    .on("start", ()=>{
        document.documentElement.dataset.zooming = ""; // for during ani progress
        shipD3.style("transform", `${shipRef.ttA} scale(${newZoomInScale}) translate(${newZoomTranslate}) ${shipRef.ttB}`); // ! important transform order: scale then translate
        // log the new zoom scale for later use if needed // ! -- only log it after new scale attribute is changed
        shipD3.node().dataset.zoomScale = newZoomInScale;
        if (previousZoomObj == undefined) {
            const tmpStyle = Math.random();
            if (tmpStyle < .5) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                "processing",
                "executing"
            ]), 0, 0.1, 0.4, 0.3, 0.8);
            else if (tmpStyle < .75) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("longTask", 0, 0.8, 0, 0.3, 1.2);
            else (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("notification", 0, 0, 0, 0.3);
        }
    }).on("end", ()=>{
        if (previousZoomObj != undefined) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)(`beepX${(0, $771006645357c94f$export$de12a21935b7f164)([
            "1",
            "1",
            "2"
        ])}${(0, $771006645357c94f$export$de12a21935b7f164)([
            "Down",
            "Downer",
            "Up",
            "Upper"
        ])}`, 0, 0, 0, 0.4);
    }).transition().delay(300).duration(0).on("start", ()=>{
        // setShipMiscAnimations(); // ! restart previously stopped animations
        delete document.documentElement.dataset.zooming;
        document.documentElement.dataset.shipZoomObj = domObjId.replace("hit_", "");
        // unpauseSvgRootAnimation();
        $63a5b00227d0cbe7$export$f254544244e1cd1a("forZooming"); //* <<<<<<< &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    });
}
function $63a5b00227d0cbe7$export$e5252ff02fc9962b(d3node, initDelayTime = 0, iterations = 1, iterationInterval = "short", initIterationFlag = true) {
    if (iterations == 0) return;
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    let delayTime = initDelayTime;
    if (!initIterationFlag) {
        if (iterationInterval == "short") delayTime = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(200, 600);
        else if (typeof iterationInterval === "number") delayTime = Math.floor((0, $771006645357c94f$export$51e16a050e2bf069)(iterationInterval * .7, iterationInterval * 1.3));
        else delayTime = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(800, 1200);
    }
    d3node.transition("randomColor").delay(delayTime).duration(1).attr("fill", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames)})`).on("end", ()=>{
        const newIteration = iterations > 0 ? iterations - 1 : iterations;
        $63a5b00227d0cbe7$export$e5252ff02fc9962b(d3node, 0, newIteration, iterationInterval, false);
    });
}
function $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(d3node) {
    d3node.interrupt("randomColor"); // this will 'interrupt' current transition, AND 'cancel' pending transition
}
function $63a5b00227d0cbe7$export$6a08326b8e10c7e4(d3node, initDelayTime = 0, iterations = 1, iterationInterval = "short", initIterationFlag = true) {
    if (iterations == 0) return;
    let delayTime = initDelayTime;
    if (!initIterationFlag) {
        if (iterationInterval == "short") delayTime = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(200, 600);
        else if (typeof iterationInterval === "number") delayTime = Math.floor((0, $771006645357c94f$export$51e16a050e2bf069)(iterationInterval * .7, iterationInterval * 1.3));
        else delayTime = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 3000);
    } else // any init iteration config to be done here:
    d3node.attr("opacity", 1);
    d3node.transition("blinking").delay(delayTime).duration(500).attr("opacity", 0).on("cancel interrupt", ()=>{
        // need both 'cancel' & 'interrupt':
        // 'interrupt' event won't get triggered while transition is in the 'delay' stage
        // 'cancel' cancel pending transition, not interrupting
        d3node.attr("opacity", 1);
    }).transition("blinking").delay(250).duration(1000).attr("opacity", 1).on("cancel interrupt", ()=>{
        // need both 'cancel' & 'interrupt':
        // 'interrupt' event won't get triggered while transition is in the 'delay' stage
        // 'cancel' cancel pending transition, not interrupting
        d3node.attr("opacity", 1);
    }).on("end", ()=>{
        const newIteration = iterations > 0 ? iterations - 1 : iterations;
        $63a5b00227d0cbe7$export$6a08326b8e10c7e4(d3node, 0, newIteration, iterationInterval, false);
    });
}
function $63a5b00227d0cbe7$export$2447af625794f715(d3node) {
    d3node.interrupt("blinking"); // this will 'interrupt' current transition, AND 'cancel' pending transition
}
function $63a5b00227d0cbe7$var$warpCoreEjectAnimation() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const warpCore = CRapp.shipContentDom.querySelector("#warpCore");
    //* check & set animation status
    if ("ejectionInProgress" in warpCore.dataset) {
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)((0, $771006645357c94f$export$de12a21935b7f164)([
            "Warp Core Ejection in Progress already",
            "Awaiting for a new warp core",
            "Ejection system is currently offline",
            "warp core status: ejected",
            "Warp Core is not ready to be ejected again",
            "seriously, the core is not ready",
            "Move away from the warp core ejection hatch"
        ]));
        return; //* status not good, exit
    }
    warpCore.dataset.ejectionInProgress = ""; //* set status
    (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Warp Core Ejection in Progress", "timePrefix");
    const warpCoreMatter = warpCore.querySelector("#wc_matter");
    const warpCoreAntiMatter = warpCore.querySelector("#wc_antimatter");
    const wcHatchL = CRapp.shipContentDom.querySelector("#msdContainer svg #ship #wcHatchL");
    const wcHatchR = CRapp.shipContentDom.querySelector("#msdContainer svg #ship #wcHatchR");
    const wcHatch = d3.selectAll([
        wcHatchL,
        wcHatchR
    ]);
    const miniWarpCoreD3 = d3.select(CRapp.svg2.querySelector("#miniWarpCore"));
    d3.select(warpCore).style("opacity", 3).transition().duration(500).on("start", ()=>{
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningLong", 0, 0.4, 0, 0.6);
        (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(warpCore, "blink3");
    }).on("end", ()=>{
        // hiding the gradient animation by setting style fill. Style fill overrides svg fill
        warpCoreMatter.style.fill = "var(--secondary)";
        warpCoreAntiMatter.style.fill = "var(--secondary)";
        //* open hatch
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("notification", 0.25);
        wcHatch.transition().duration(600).attr("transform", (d, i)=>{
            return `translate(${30 * (2 * i - 1)} 0)`; // (30 0)  &  (-30 0)
        });
    }).transition().delay(1000).duration(3000).attr("transform", "translate(0 600)") //* eject warpCore
    .style("opacity", 0).on("start", ()=>{
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("negative", 0.2, 0, 0, 1, 0.85);
        miniWarpCoreD3.style("opacity", 3).style("display", null).transition().duration(3000).attr("transform", "translate(0 145)").style("opacity", 0);
        setTimeout(()=>{
            (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Warp Core Ejected", "timePrefix");
        }, 1200);
    }).on("end", ()=>{
        // reset condition for reinsertion
        // warpCore.style.opacity = 0;
        warpCore.setAttribute("transform", "translate(0 250)");
    }).transition().delay(1000).duration(6000).ease(d3.easeCubicOut).on("start", ()=>{
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("awaiting", 0.3, 0, 0, 0.5, .75);
        //* re-inserting warpCore
        miniWarpCoreD3.attr("transform", "translate(0 90)").transition().duration(6000).ease(d3.easeCubicOut).attr("transform", "translate(0 0)").style("opacity", 3).on("end", function() {
            this.style.display = "none";
        });
        setTimeout(()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0, 0, 0, 0.7); //* warpCore almost being reattached
            //* closing hatch
            wcHatch.transition().delay(500).duration(1000).ease(d3.easeCubicInOut).attr("transform", "translate(0 0)").on("start", (d, i)=>{
                if (i == 0) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", 0.4, 0, 0, 0.3);
            });
        }, 4500);
    }).attr("transform", "translate(0 0)") //* reinsert warpCore
    .style("opacity", 2) // make it fully visible sooner by setting it to 2
    .on("end", ()=>{
        // * right before restarting of warpCore
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("powerUp", 0, 0.3, 0, 0.7);
    }).transition().delay(600).duration(250).on("start", ()=>{
        //* restart warpCore
        (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(warpCore, "blink1");
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Upper", 0, 0, 0, 0.3);
    }).on("end", function() {
        warpCoreMatter.style.fill = null;
        warpCoreAntiMatter.style.fill = null;
    }).transition().delay(500).duration(0).on("start", ()=>{
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)((0, $771006645357c94f$export$de12a21935b7f164)([
            "Warp Core replaced",
            "Warp Core Reinsertion Complete"
        ]), "timePrefix");
        //* reset animation status
        delete warpCore.dataset.ejectionInProgress;
    });
}
function $63a5b00227d0cbe7$export$f254544244e1cd1a(forZooming = null) {
    const zooming = forZooming == "forZooming";
    delete document.documentElement.dataset.aniZooming;
    //? if zooming but dataset not represent, do a full stop then start??
    if (!zooming) {
        // these will not restart with zooming. Their ani should still remain active from previous state.
        // their hidden state will be removed via CSS triggered by the above dataset
        (0, $88becd1e1d3e4bd7$export$863452630d3a69f5)();
        $63a5b00227d0cbe7$export$8d457bddbb9682c2();
        $63a5b00227d0cbe7$export$30bf6a931e8558b6();
        $63a5b00227d0cbe7$export$e650195b962e32f();
        $63a5b00227d0cbe7$var$shuttleLiftAnimation_start();
    }
    $63a5b00227d0cbe7$export$f12be6b3055d7000(true);
    $63a5b00227d0cbe7$export$390b2b428a870f7a();
    $63a5b00227d0cbe7$export$287f8a7b62d6b86();
    $63a5b00227d0cbe7$export$2e57723d70271d97();
    $63a5b00227d0cbe7$export$b9e2f45ec1738f00();
    $63a5b00227d0cbe7$export$3bc1210f46ea5e87();
// console.log('ship mini animations started');
}
function $63a5b00227d0cbe7$export$8a2e6fed9df8c3ad(forZooming = null) {
    const zooming = forZooming == "forZooming";
    if (zooming) document.documentElement.dataset.aniZooming = "";
    if (!zooming) {
        // full stop will NOT apply to these while zooming.
        // they will be hidden via CSS triggered by the above dataset
        (0, $88becd1e1d3e4bd7$export$80d17a45d63df6f2)();
        $63a5b00227d0cbe7$var$holodeckAnimation_stop();
        $63a5b00227d0cbe7$var$transporterAnimation_stop();
        $63a5b00227d0cbe7$var$shuttlecraftFlyingAnimation_stop();
        $63a5b00227d0cbe7$var$shuttleLiftAnimation_stop();
    }
    $63a5b00227d0cbe7$export$f12be6b3055d7000(false);
    $63a5b00227d0cbe7$export$428c8513657fadbd();
    $63a5b00227d0cbe7$export$e208cb55376d1d4b();
    $63a5b00227d0cbe7$export$6042103286502b70();
    $63a5b00227d0cbe7$export$7736dcfecdbe14bc();
    $63a5b00227d0cbe7$export$26005a9ab81e8a26();
// console.log('ship mini animations stopped');
}
function $63a5b00227d0cbe7$export$26005a9ab81e8a26() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.svg1.pauseAnimations(); // SVG root's built in function
}
function $63a5b00227d0cbe7$export$3bc1210f46ea5e87() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.svg1.unpauseAnimations(); // SVG root's built in function
}
function $63a5b00227d0cbe7$export$fcfbdb67292ec4e5() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const holodeck = CRapp.shipContentDom.querySelector("#holodeck"); // ! DOM obj
    // ! manually init 'opacity' attribute, otherwise d3js can't transition properly on the 1st loop
    holodeck.querySelector("#holodeckArch").setAttribute("opacity", 1);
    holodeck.querySelector("#holodeckGrid").setAttribute("opacity", 1);
    holodeck.querySelector("#holoDino").setAttribute("opacity", 0);
    holodeck.querySelector("#holoParis").setAttribute("opacity", 0);
    // holodeck.querySelector('#holoDuck').setAttribute('opacity', 0);
    holodeck.querySelector("#badgey").setAttribute("opacity", 0);
    holodeck.querySelector("#holoMovie").setAttribute("opacity", 0);
    holodeck.querySelector("#holoMovie #seqInit").style.transition = "opacity 400ms";
    holodeck.querySelectorAll('#holoMovie [id^="seq"]').forEach((node)=>{
        node.setAttribute("opacity", 0);
    });
}
function $63a5b00227d0cbe7$export$8d457bddbb9682c2() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const holodeck = CRapp.shipContentDom.querySelector("#holodeck"); // ! DOM obj
    const holodeckD3 = d3.select(holodeck);
    // cancel previous, just in case
    holodeckD3.selectAll("*").interrupt();
    const holodeckArch = holodeckD3.select("#holodeckArch");
    const holodeckGrid = holodeckD3.select("#holodeckGrid");
    const holoTitles = [
        "holoDino",
        "holoParis",
        "badgey",
        "holoMovie"
    ]; // holoDuck removed
    let holoTitleIndex = (0, $771006645357c94f$export$3c5f89dae98e900b)(holoTitles.length);
    if (parseInt(holodeck.dataset.previousTitleIndex) == holoTitleIndex) holoTitleIndex = (holoTitleIndex + 1) % holoTitles.length;
    holodeck.dataset.previousTitleIndex = holoTitleIndex;
    const holoTitle = holoTitles[holoTitleIndex];
    const holoObject = d3.select(`#msdContainer svg #${holoTitle}`);
    const holoMovie = holoTitle == "holoMovie";
    // console.log('message from transition ini');
    holodeckArch.transition().duration(910).attr("opacity", 0) // hiding the door
    .on("end", function() {
        if (holoMovie) {
            holoObject.attr("opacity", 1); // making the whole object visible
            holodeck.querySelector("#seqInit").setAttribute("opacity", 1); // show init's black bars
        }
        holodeckGrid.transition().delay(310).duration(970).attr("opacity", 0); // hiding the grid
        holoObject.transition().delay(0).duration(710).attr("opacity", 1) // also showing the holoObject
        .on("start", ()=>{
            if (holoMovie) holoObject.selectAll("[id^=seq_]").style("transition", ()=>{
                return `opacity ${(0, $771006645357c94f$export$de12a21935b7f164)([
                    300,
                    700
                ])}ms ease ${100 * (0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 30)}ms`;
            }) // delay 0 to 3000ms
            .attr("opacity", 1);
        }).on("end", function() {
            const extraDelay = holoMovie ? 3500 : 0;
            holodeckGrid.transition().delay(4000 + extraDelay) // after a while....
            .duration(900).attr("opacity", .6) // showing the grid
            .on("end", ()=>{
                holoObject.transition().delay(300).duration(650).attr("opacity", 0) // hiding the holoObject
                .on("start", ()=>{
                    if (holoMovie) holoObject.selectAll("[id^=seq]").attr("opacity", 0);
                }).on("end", ()=>{
                    holodeckArch.transition().delay(270).duration(600).attr("opacity", 1) // showing the door
                    .on("end", ()=>{
                        holodeck.dataset.timerId = setTimeout(()=>{
                            $63a5b00227d0cbe7$export$8d457bddbb9682c2(); // wait, then starting all over again
                        }, (0, $771006645357c94f$export$51e16a050e2bf069)(5800, 9500));
                    });
                });
            });
        });
    });
}
function $63a5b00227d0cbe7$var$holodeckAnimation_stop() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const holodeck = CRapp.shipContentDom.querySelector("#holodeck"); // ! DOM obj
    const timerId = Number(holodeck.dataset.timerId);
    if (!isNaN(timerId)) clearTimeout(timerId);
    d3.selectAll("#msdContainer svg #holodeck *").interrupt(); // dirty cleaning...
    $63a5b00227d0cbe7$export$fcfbdb67292ec4e5();
}
function $63a5b00227d0cbe7$export$30bf6a931e8558b6(init = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const ani1 = d3.select(CRapp.shipContentDom.querySelector("#transporterAni1"));
    const subject1 = d3.select(CRapp.shipContentDom.querySelector("#transporterSubject1"));
    const beam1 = d3.select(CRapp.shipContentDom.querySelector("#transporterBeam1"));
    init;
    // randomize for each cycle
    d3.selectAll("#msdContainer svg #transporterBeam1 line").style("stroke-dashoffset", ()=>{
        return (0, $771006645357c94f$export$51e16a050e2bf069)(-10, -45);
    }).style("animation-duration", ()=>{
        return (0, $771006645357c94f$export$51e16a050e2bf069)(3.5, 4.5) + "s";
    });
    const showBeam1 = ()=>{
        // using css 1-iteration animation -- slightly better performance: no beaming animation while it's hidden
        beam1.classed("beaming", false); // reset class to trigger animation to restart
        setTimeout(()=>{
            beam1.classed("beaming", true); // start beams, taking 4s from fade in to out
        }, 1);
    };
    // ========= one cycle animation: beaming out, then beaming back
    beam1.attr("opacity", 0);
    subject1.transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(6000, 12000)).duration(0).on("start", ()=>{
        showBeam1();
    }).transition().delay(2000).duration(0).attr("opacity", 0) // hiding subject
    .transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(6000, 12000)).duration(0) // long delay
    .on("start", ()=>{
        ani1.attr("transform", Math.random() < .5 ? null : "translate(15 0)");
        showBeam1();
    }).transition().delay(1000).duration(0).attr("opacity", 1) // showing subject
    .on("end", ()=>{
        $63a5b00227d0cbe7$export$30bf6a931e8558b6();
    });
}
function $63a5b00227d0cbe7$var$transporterAnimation_stop() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    d3.select(CRapp.shipContentDom.querySelector("#transporterSubject1")).interrupt();
}
//? ======================================================================================
//? ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function $63a5b00227d0cbe7$var$shuttlecraftFlyingAnimation_init(startFlying = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // Shuttlecraft Animation ===============================================
    // Attach animationMotion path to shuttlecraft.
    // Shuttlecraft's coordinates are ADDITIVE to path's coordinates, so we need to move shuttlecraft's center point
    // to svg's TopLeft origin since motionPath is created around shuttlecraft during design.
    // ! don't use mpath animation method, not supported by Safari
    const shuttlecraft1 = CRapp.shipContentDom.querySelector('[id^="shuttlecraft1Fly"]');
    const shuttlecraft1Path = CRapp.shipContentDom.querySelector('[id^="shuttlecraft1Path"]');
    const animateMotionNode = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
    if (startFlying === "startFlying") animateMotionNode.setAttribute("dur", "30s");
    else animateMotionNode.setAttribute("dur", "0"); // ! <<<<<<<<<<<<<<<<< *** this will stop animation at init point
    animateMotionNode.setAttribute("begin", `-${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 30)}s`); // use negative value to vary the starting position along the path
    animateMotionNode.setAttribute("repeatCount", "indefinite");
    // animateMotionNode.setAttribute('keyPoints', '1');
    animateMotionNode.setAttribute("path", shuttlecraft1Path.getAttribute("d"));
    shuttlecraft1.appendChild(animateMotionNode);
    // move shuttlecraft for mpath animation -- // ! getBBox ignores parent's transform?
    // because "animateMotion" always set the starting point to Top Left svg origin (?)
    const tmpBox = shuttlecraft1.getBBox();
    shuttlecraft1.style.transform = `translate(-${tmpBox.x + tmpBox.width * .5}px, -${tmpBox.y + tmpBox.height * .5}px)`;
    // hide the path
    shuttlecraft1Path.setAttribute("stroke", "none");
    shuttlecraft1.dataset.init = "";
}
function $63a5b00227d0cbe7$export$e650195b962e32f() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const shuttlecraft1 = CRapp.shipContentDom.querySelector('[id^="shuttlecraft1Fly"]');
    const animateMotionNode = shuttlecraft1.querySelector("animateMotion");
    if (animateMotionNode === null) {
        $63a5b00227d0cbe7$var$shuttlecraftFlyingAnimation_init("startFlying");
        return;
    }
    animateMotionNode.setAttribute("dur", "30s");
}
// this removes the svg "animateMotion" node... stop animation resources completely
function $63a5b00227d0cbe7$var$shuttlecraftFlyingAnimation_stop() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // seem that simply sets dur to 0 will stop & put object in init point
    const animateMotionNode = CRapp.shipContentDom.querySelector('[id^="shuttlecraft1Fly"] animateMotion');
    if (animateMotionNode !== null) animateMotionNode.setAttribute("dur", "0");
}
//? ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//? ======================================================================================
function $63a5b00227d0cbe7$var$shuttleLiftAnimation_start() {
    $63a5b00227d0cbe7$export$a390aa51a0f87c5d("init");
}
function $63a5b00227d0cbe7$var$shuttleLiftAnimation_stop() {
    const shuttle = d3.select("#msdContainer svg #shuttleOnLift");
    const shuttleLift = d3.select("#msdContainer svg #shuttleLift");
    const tmpId = Number(shuttleLift.node().dataset.timerId);
    if (!isNaN(tmpId)) clearTimeout(tmpId);
    delete shuttleLift.node().dataset.timerId;
    shuttle.interrupt();
    shuttleLift.interrupt();
}
function $63a5b00227d0cbe7$export$a390aa51a0f87c5d(init = null) {
    const shuttle = d3.select("#msdContainer svg #shuttleOnLift");
    const shuttleLift = d3.select("#msdContainer svg #shuttleLift");
    // shuttleLift.attr('transform', 'translate(0 0)');
    if (init == "init") {
        shuttle.attr("transform", "translate(0 44)");
        shuttleLift.attr("transform", "translate(0 44)");
    }
    const durShuttleLiftUp = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(3000, 6000);
    const durShuttleLiftDown = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(3000, 5000);
    shuttleLift.transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(1000, 2000)).duration(durShuttleLiftUp) // slow going up
    .ease(d3.easeCubicInOut).attr("transform", "translate(0 0)").on("start", ()=>{
        // matching duration/ease to shuttleLift's transition
        shuttle.transition().duration(durShuttleLiftUp).ease(d3.easeCubicInOut).attr("transform", "translate(0 0)");
    }).transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(200, 500)) // short delay before moving DOWN the lift
    .duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(1000, 4000)) // random dur
    .ease(d3.easeCubicInOut).attr("transform", "translate(0 44)").transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(2500, 6000)) // long delay before moving UP the lift
    .duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(1000, 4000)) // random dur
    .ease(d3.easeCubicInOut).attr("transform", "translate(0 0)").transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(300, 700)) // short delay before moving DOWN the lift
    .duration(durShuttleLiftDown) // random dur
    .ease(d3.easeCubicInOut).attr("transform", "translate(0 44)").on("start", ()=>{
        // matching duration/ease to shuttleLift's transition
        shuttle.transition().duration(durShuttleLiftDown).ease(d3.easeCubicInOut).attr("transform", "translate(0 44)").on("end", ()=>{
            // set shuttle to random colors
            $63a5b00227d0cbe7$export$e5252ff02fc9962b(shuttle.select("path"), 400, 4);
        // shuttle.select('path')
        // .transition()
        //     .delay( randomIntRange(800,1200) )
        //     .duration(0)
        //     .attr('fill', `var(--${randomAItem(CRapp.allColorCssVarNames)})`)
        // .transition()
        //     .delay( randomIntRange(200,600) )
        //     .duration(0)
        //     .attr('fill', `var(--${randomAItem(CRapp.allColorCssVarNames)})`)
        // .transition()
        //     .delay( randomIntRange(400,600) )
        //     .duration(0)
        //     .attr('fill', `var(--${randomAItem(CRapp.allColorCssVarNames)})`);
        });
    }).on("end", ()=>{
        shuttleLift.node().dataset.timerId = setTimeout(()=>{
            $63a5b00227d0cbe7$export$a390aa51a0f87c5d(); // wait, then starting all over again
        }, (0, $771006645357c94f$export$51e16a050e2bf069)(2500, 6000));
    });
}
function $63a5b00227d0cbe7$export$390b2b428a870f7a() {
    const plasmaStream = d3.select("#msdContainer svg #plasmaStream");
    const receiver = d3.select("#msdContainer svg #cylinderFront");
    plasmaStream.classed("active", true);
    if (plasmaStream.attr("data-init") == null) {
        // calculate and keep the transform origin data upon init, so that we can manipulate transformation later
        plasmaStream.attr("data-init", "");
        const tmpBox = plasmaStream.node().getBBox();
        plasmaStream.attr("transform-origin", `${tmpBox.x + tmpBox.width * .5} ${tmpBox.y + tmpBox.height * .5}`);
        // setup the stream lines so they seemed randomized
        plasmaStream.selectAll("line").attr("stroke-dashoffset", ()=>{
            return (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-100, 0);
        }).style("animation-duration", ()=>{
            return (0, $771006645357c94f$export$51e16a050e2bf069)(3, 6) + "s";
        });
        receiver.attr("opacity", 0.5);
    }
    const plasmaAnimationCycle = function() {
        plasmaStream.attr("opacity", 1).attr("visibility", "visible").attr("transform", "scale(.1 .2)").transition().duration(400).ease(d3.easeCubicOut).attr("transform", "scale(1 1)").transition().delay(5000).duration(1500) // * 1500
        .ease(d3.easeCubicIn).attr("transform", "translate(-242) scale(6 .3)").on("start", ()=>{
            // delay cylinder receiver animation to start slightly before plasmaStream ani ends
            receiver.transition().delay(1200) // * = 1500 - 200 
            .duration(300).attr("opacity", 1).on("cancel interrupt", ()=>{
                receiver.attr("opacity", 1);
            }).transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(800, 1600)) // random delay time before dispatching the cycle again
            .duration(800).attr("opacity", 0.5).on("end", ()=>{
                plasmaAnimationCycle();
            });
        }).on("end", ()=>{
            // reset plasma
            plasmaStream.attr("transform", null);
            plasmaStream.attr("opacity", 0).style("visibility", "visible");
        });
    };
    plasmaAnimationCycle();
}
function $63a5b00227d0cbe7$export$428c8513657fadbd() {
    const plasmaStream = d3.select("#msdContainer svg #plasmaStream");
    const receiver = d3.select("#msdContainer svg #cylinderFront");
    plasmaStream.interrupt();
    receiver.interrupt();
    plasmaStream.classed("active", false);
}
function $63a5b00227d0cbe7$export$287f8a7b62d6b86() {
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(d3.select("#msdContainer svg #magFieldGen"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(3500, 7000), -1, 5000); //                           ^^^ with specific settings
}
function $63a5b00227d0cbe7$export$e208cb55376d1d4b() {
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(d3.select("#msdContainer svg #magFieldGen"));
}
function $63a5b00227d0cbe7$export$2e57723d70271d97() {
    const d3node = d3.select("#msdContainer svg #bussardProcessor");
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(d3node, (0, $771006645357c94f$export$24d4d9f7cb1f68df)(5000, 7000), -1, 5000);
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(d3node, (0, $771006645357c94f$export$24d4d9f7cb1f68df)(3500, 7000), -1, 13000);
//                                           ^^^ with specific settings
}
function $63a5b00227d0cbe7$export$6042103286502b70() {
    const d3node = d3.select("#msdContainer svg #bussardProcessor");
    $63a5b00227d0cbe7$export$2447af625794f715(d3node);
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(d3node);
}
function $63a5b00227d0cbe7$export$f12be6b3055d7000(force) {
    const nacelleDisk = document.getElementById("nacelleDisk");
    const nacelleDiskMarker = document.getElementById("nacelleDiskMarker");
    nacelleDisk.classList.toggle("active", force);
    nacelleDiskMarker.classList.toggle("active", force);
// !!! ===== not
// setTransformOriginCenter(nacelleDiskMarker, nacelleDisk);
// nacelleDiskMarker.setAttribute('transform-origin', '0 0');
}
function $63a5b00227d0cbe7$export$b9e2f45ec1738f00() {
    // console.log('!!!!! STARTING ship misc animations ------>>>');
    const shipInternalsD3 = d3.select("#msdContainer svg #contentShip #internals");
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(shipInternalsD3.select("#shuttle1 path"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(3500, 7000), -1, 13000);
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(shipInternalsD3.select("#bay2shuttle1 path"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(5000, 11000), -1, 13000);
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(shipInternalsD3.select("#bay2shuttle2 path"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 5000), -1, 9000);
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(shipInternalsD3.select("#torpedoLauncher"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 5000), -1, 9000);
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(shipInternalsD3.select("#bridge"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 5000), -1, 9000);
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(shipInternalsD3.select("#transporterBase"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 5000), -1, 9000);
    $63a5b00227d0cbe7$export$e5252ff02fc9962b(shipInternalsD3.select("#transporterMid"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 5000), -1, 9000);
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(shipInternalsD3.select("#deuteriumTank1"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 8000), -1, 11000);
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(shipInternalsD3.select("#deuteriumTank2"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 8000), -1, 11000);
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(shipInternalsD3.select("#antimatterStorage"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(4000, 5000), -1, 12000);
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(shipInternalsD3.select("#tractorBeamMainForward"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 8000), -1, 8000);
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(shipInternalsD3.select("#tractorBeamMainAft"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 8000), -1, 8000);
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(shipInternalsD3.select("#tractorBeam2ndHull"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 8000), -1, 8000);
    $63a5b00227d0cbe7$export$6a08326b8e10c7e4(shipInternalsD3.select("#tardis"), (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2000, 8000), -1, 8000);
}
function $63a5b00227d0cbe7$export$7736dcfecdbe14bc() {
    // console.log('!!!!! STOPPING ship misc animations X X X X X X X X X X X ');
    const shipInternalsD3 = d3.select("#msdContainer svg #contentShip #internals");
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(shipInternalsD3.select("#shuttle1 path"));
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(shipInternalsD3.select("#bay2shuttle1 path"));
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(shipInternalsD3.select("#bay2shuttle2 path"));
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(shipInternalsD3.select("#torpedoLauncher"));
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(shipInternalsD3.select("#bridge"));
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(shipInternalsD3.select("#transporterBase"));
    $63a5b00227d0cbe7$export$8d9eb7bfa1fb6cf8(shipInternalsD3.select("#transporterMid"));
    $63a5b00227d0cbe7$export$2447af625794f715(shipInternalsD3.select("#deuteriumTank1"));
    $63a5b00227d0cbe7$export$2447af625794f715(shipInternalsD3.select("#deuteriumTank2"));
    $63a5b00227d0cbe7$export$2447af625794f715(shipInternalsD3.select("#antimatterStorage"));
    $63a5b00227d0cbe7$export$2447af625794f715(shipInternalsD3.select("#tractorBeamMainForward"));
    $63a5b00227d0cbe7$export$2447af625794f715(shipInternalsD3.select("#tractorBeamMainAft"));
    $63a5b00227d0cbe7$export$2447af625794f715(shipInternalsD3.select("#tractorBeam2ndHull"));
    $63a5b00227d0cbe7$export$2447af625794f715(shipInternalsD3.select("#tardis"));
} //? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




let $899111cd465e6cd4$var$msdLabelsGroup, $899111cd465e6cd4$var$labels, $899111cd465e6cd4$var$numLabels;
function $899111cd465e6cd4$var$randomizeAllLabelsColor() {
    $899111cd465e6cd4$var$labels.forEach((label)=>{
        const path = label.querySelector("path");
        const dot = label.querySelector('[id^="dot"]');
        const text = label.querySelector("text");
        const randomColor = `var(--${(0, $771006645357c94f$export$de12a21935b7f164)([
            "secondary",
            "secondaryBright",
            "secondaryBrighter",
            "secondaryBrightest",
            "primary",
            "primarySat"
        ])})`;
        path.setAttribute("stroke", randomColor);
        dot.setAttribute("stroke", randomColor);
        text.setAttribute("fill", randomColor);
    });
}
function $899111cd465e6cd4$export$e26511dac4440c6f() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    $899111cd465e6cd4$var$msdLabelsGroup = CRapp.shipContentDom.querySelector("#msdLabels");
    $899111cd465e6cd4$var$labels = $899111cd465e6cd4$var$msdLabelsGroup.querySelectorAll('[id^="label"]');
    $899111cd465e6cd4$var$numLabels = $899111cd465e6cd4$var$labels.length;
    $899111cd465e6cd4$var$labels.forEach((label)=>{
        const path = label.querySelector("path");
        const pathLength = path.getTotalLength();
        path.setAttribute("stroke-dasharray", pathLength);
        path.setAttribute("stroke-dashoffset", pathLength);
        path.setAttribute("visibility", "hidden");
        path.dataset.length = pathLength;
        const text = label.querySelector("text");
        text.setAttribute("visibility", "hidden");
        text.setAttribute("opacity", 0);
        const dot = label.querySelector('[id^="dot"]');
        dot.setAttribute("opacity", 0);
        dot.setAttribute("visibility", "hidden");
        label.style.display = "none";
    });
    $899111cd465e6cd4$var$msdLabelsGroup.dataset.status = "allHidden";
    $899111cd465e6cd4$var$randomizeAllLabelsColor();
}
function $899111cd465e6cd4$export$8baee8e71bc8bf1(faster = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // FIRST -- interrupt "show" animation
    d3.selectAll("#msdLabels *").interrupt();
    const labelsGroupD3 = d3.select("#msdLabels"); // use for delayed sfx so that it's cancelable
    labelsGroupD3.interrupt(); // stop sfx if any
    labelsGroupD3.node().dataset.visible = "showing";
    CRapp.shipLabelsVisible = false; // reset
    const aniSpeedFactor1 = faster === "faster" ? 0.4 : 1; // 1 normal, less than 1 means faster
    const aniSpeedFactor2 = faster === "faster" ? 0.1 : 1; // 1 normal, less than 1 means faster
    // ===== blink & fade in all the dots
    const allLabelsDots = d3.selectAll('#msdLabels [id^="dot"]');
    const labelsSize = allLabelsDots.size();
    let labelsSizeMid = Math.floor(labelsSize * 0.6);
    let labelsCount = 0;
    d3.selectAll("#msdLabels > g").style("display", null);
    if (faster !== "faster") {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Up", 0, 0, 0, 0.4);
        // use d3 for delayed sound so that it's easily cancelable
        labelsGroupD3.transition().delay(400).duration(350).on("start", ()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Downer", 0, 0, 0, 0.4);
        }).on("end", ()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0, 0, 0, 0.25, 0.8);
        }).transition().delay(250).duration(0).on("start", ()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("longTaskLow", 0, 0, 0, 0.2, 0.9);
        });
    } else {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Up", 0, 0, 0, 0.4);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0.15, 0.3, 0, 0.25, (0, $771006645357c94f$export$de12a21935b7f164)([
            0.8,
            0.7,
            0.6
        ]));
    }
    allLabelsDots.attr("visibility", "visible").transition().delay(()=>{
        return (0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 1500) * aniSpeedFactor2;
    }) // random delay start
    .duration(200 * aniSpeedFactor2).attr("opacity", 1).transition().duration(100 * aniSpeedFactor2).attr("opacity", 0).transition().duration(400 * aniSpeedFactor2).attr("opacity", 1).on("end", function(d, i) {
        labelsCount++;
        if (labelsCount == labelsSizeMid) {
            // ===> tasks here will only be run once on particular label, not on every label             
            document.documentElement.dataset.shipLabelsVisible = ""; // for css effect: fading out the tiny ship at TOP LEFT location
            d3.select(this).transition().delay(1000 * aniSpeedFactor1).duration(0) // set a delay to hide the tinyShip
            .on("start", ()=>{
                CRapp.shipLabelsVisible = true; // delay so that the label's "hot area" cannot be clicked too early
            });
        }
        // ====== animate this label line
        d3.select(this.parentNode).select("path").attr("visibility", "visible").transition().duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(800, 2000) * aniSpeedFactor1) // random duration
        .attr("stroke-dashoffset", 0).ease(d3.easeCubicInOut).on("end", function() {
            // ====== fade in this text
            d3.select(this.parentNode).select("text").attr("visibility", "visible").transition().duration(600 * aniSpeedFactor1).attr("opacity", 1);
        });
    });
}
function $899111cd465e6cd4$export$9366dc6771d56232(skipAnimation = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // FIRST -- interrupt "show" animation
    d3.selectAll("#msdLabels *").interrupt();
    const labelsGroupD3 = d3.select("#msdLabels");
    labelsGroupD3.interrupt(); // stop sfx if any
    labelsGroupD3.node().dataset.visible = "hiding";
    CRapp.shipLabelsVisible = false;
    const toSkipAnimation = skipAnimation === "skipAnimation";
    let numCompletion = 0;
    if (skipAnimation !== "skipAnimation") {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Downer", 0, 0, 0, 0.6);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningLong", 0, 0, 0, 0.3, 0.92);
    }
    d3.selectAll("#msdLabels text").transition().duration(()=>{
        return toSkipAnimation ? 0 : (0, $771006645357c94f$export$24d4d9f7cb1f68df)(50, 600);
    }) // random duration
    .attr("opacity", 0).on("end", function() {
        this.setAttribute("visibility", "hidden"); // "this" is a dom reference, not d3 obj
        const path = d3.select(this.parentNode).select("path");
        path.transition().duration(toSkipAnimation ? 0 : (0, $771006645357c94f$export$51e16a050e2bf069)(600, 1000)).ease(d3.easeCubicInOut).attr("stroke-dashoffset", path.node().dataset.length).on("end", function() {
            this.setAttribute("visibility", "hidden"); // "this" is a dom reference, not d3 obj
            d3.select(this.parentNode).select('[id^="dot"]').transition().duration(toSkipAnimation ? 0 : 400).attr("opacity", 0).on("end", function() {
                this.setAttribute("visibility", "hidden"); // "this" is a dom reference, not d3 obj
                numCompletion++;
                if (numCompletion == $899111cd465e6cd4$var$numLabels) {
                    // console.log('ALL HIDING COMPLETED!!!!!');
                    $899111cd465e6cd4$var$randomizeAllLabelsColor();
                    d3.selectAll("#msdLabels > g").style("display", "none");
                    delete document.documentElement.dataset.shipLabelsVisible;
                }
            });
        });
    });
}
function $899111cd465e6cd4$export$543099fd07e5174b() {
    const labelsVisibleStatus = document.querySelector("#msdLabels").dataset.visible;
    if (labelsVisibleStatus == "showing") $899111cd465e6cd4$export$9366dc6771d56232();
    else $899111cd465e6cd4$export$8baee8e71bc8bf1();
}
function $899111cd465e6cd4$export$db11f0672e3c0cc0() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    document.querySelectorAll("#msdLabels > g").forEach((label)=>{
        const hotNode = label.querySelector('[id^="hot_"]');
        if (hotNode !== null) {
            CRapp.shipLabelsHotArea.push({
                id: hotNode.getAttribute("id"),
                rect: hotNode.getBBox(),
                parentId: hotNode.parentElement.getAttribute("id")
            });
            hotNode.remove();
        }
    });
// console.log(CRapp.shipLabelsHotArea);
}
function $899111cd465e6cd4$export$c04e772a8363eccc(clientX, clientY) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // ! moved this check higher up to the caller ==============
    // if ((CRapp.pageState!=='ship') || (!CRapp.shipLabelsVisible) || (CRapp.shipZoomMode) || (CRapp.shipLabelGotHit)) return;
    // ! =======================================================
    // console.log('isShipLabelHit ======== PROCESSING...... ');
    const svgPointer = CRapp.getPointerLocationOnSvg(clientX, clientY);
    CRapp.shipLabelsHotArea.every((hotArea)=>{
        // check if the given clientX clientY point is inside this hotArea
        if (svgPointer.x >= hotArea.rect.x && svgPointer.x <= hotArea.rect.x + hotArea.rect.width && svgPointer.y >= hotArea.rect.y && svgPointer.y <= hotArea.rect.y + hotArea.rect.height) {
            //* found...!!!!!!!!!
            $899111cd465e6cd4$var$shipLabelZoomIn_animationSequence(hotArea);
            return false; // this breaks out the "every()" loop
        }
        return true; // need returning true to remain in the "every()" loop
    });
}
/**
 * 
 * @param {*} hotAreaObj -- one of the obj from CRapp.shipLabelsHotArea[]
 */ function $899111cd465e6cd4$var$shipLabelZoomIn_animationSequence(hotAreaObj) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // console.log( ' ============================================================ >>> Hit and FOUND         ' + hotArea.id );
    // CRapp.shipRef.shipD3.interrupt();
    CRapp.shipLabelGotHit = true; // ! this flag will suppress SVG's pointer detection on labels
    setTimeout(()=>{
        CRapp.shipLabelGotHit = false;
    }, 2000);
    const hotAreaLabel = document.querySelector("#msdContainer svg #ship #msdLabels #" + hotAreaObj.parentId);
    // set visibility hidden on all other labels, don't call the "hideLabels", it will set stroke dash as well
    // it's okay to set visibility here, because "hideLabels" will get called in "toggleShipObjectZoom"
    // and each label's visibility will get set to hidden anyway
    document.querySelectorAll("#msdLabels > g").forEach((label)=>{
        if (label !== hotAreaLabel) {
            label.style.display = "none";
            label.querySelectorAll("path, circle, text").forEach((node)=>{
                node.setAttribute("visibility", "hidden");
            });
        }
    });
    const hitAreaId = hotAreaObj.id.replace("hot_", "hit_");
    const hitAreaObj = document.querySelector("#msdContainer svg #ship #hitareas #" + hitAreaId);
    if (hitAreaObj !== null) {
        // chain the delay to the ship, so that it's easily cancellable
        CRapp.shipRef.shipD3.node().dataset.labelsHideDelay = "delay";
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
            "executing",
            "beepX2Down",
            "beepX3Downer",
            "beepX2Upper"
        ]), 0.3, 0, 0, 0.5);
        CRapp.shipRef.shipD3.transition().delay(350).duration(800).on("start", ()=>{
            (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(hotAreaLabel, "blink2");
        }).on("end", ()=>{
            (0, $63a5b00227d0cbe7$export$b9bb69d98eff82dd)(hitAreaObj);
        });
    }
}
function $899111cd465e6cd4$export$54007cc6d00f8c3a(hitElement) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.shipZoomMode || !CRapp.shipLabelsVisible) return false; // ! exit
    let foundLabelNode = null;
    const hotElementId = hitElement.getAttribute("id").replace("hit_", "hot_");
    let foundLabelObj = null;
    CRapp.shipLabelsHotArea.every((element)=>{
        if (element.id == hotElementId) {
            //* corresponding Label FOUND
            foundLabelNode = CRapp.shipContentDom.querySelector(`#msdLabels #${element.parentId}`);
            foundLabelObj = element;
            return false; // this breaks out the "every()" loop
        }
        return true; // need returning true to remain in the "every()" loop
    });
    $899111cd465e6cd4$var$shipLabelZoomIn_animationSequence(foundLabelObj);
    return true; // found
}







function $633bc24a33489d19$export$1eb886acfb38646b() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const ritosTop = document.querySelector("#msdContainer2 > svg #ritosTop");
    const saucer = ritosTop.querySelector("#saucer");
    let tmpColor;
    // all escape pods with the same color
    tmpColor = (0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames);
    saucer.querySelectorAll('[id^="escPod"]').forEach((node)=>{
        node.setAttribute("fill", `var(--${tmpColor})`);
    });
    // each plate could have a different color
    saucer.querySelectorAll('g[id^="plate"] path, path[id^="plate"]').forEach((node)=>{
        node.setAttribute("fill", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames)})`);
    });
    if (Math.random() < 0.3) {
        // * randomize ALL STROKES!!! in both saucer & hull !!!
        saucer.querySelectorAll("path, circle").forEach((node)=>{
            node.setAttribute("stroke", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames)})`);
        });
        ritosTop.querySelectorAll("#secondary path, #secondary circle").forEach((node)=>{
            node.setAttribute("stroke", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames)})`);
        });
    } else {
        // * SAUCER: all strokes will have the same color
        tmpColor = (0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames);
        saucer.querySelectorAll("path, circle").forEach((node)=>{
            node.setAttribute("stroke", `var(--${tmpColor})`);
        });
        // * SECONDARY HULL: all strokes will have the same color -- can be identical to Saucer or not
        tmpColor = Math.random() < 0.75 ? tmpColor : (0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames);
        ritosTop.querySelectorAll("#secondary path, #secondary circle").forEach((node)=>{
            node.setAttribute("stroke", `var(--${tmpColor})`);
        });
    }
// setBlinking( d3.select(ritosTop) );  // !! we don't want opacity to be hard reset back to 1
}
function $633bc24a33489d19$export$8e0e260f5562ebea(force) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const ritosTop = document.querySelector("#msdContainer2 > svg #ritosTop");
    const field = ritosTop.querySelector('[id^="fieldOutline"]');
    let startAnimation;
    if (force === true) startAnimation = true;
    else if (force === false) startAnimation = false;
    else startAnimation = !(ritosTop.classList.contains("dottedField") || ritosTop.classList.contains("expandingField"));
    // remove any existing field-animation classes
    ritosTop.classList.remove("dottedField", "expandingField");
    field.style.animationDirection = null;
    field.style.animationTimingFunction = null;
    // !  get calculated transform origin = 598 640
    const cx = Number(ritosTop.dataset.transformOriginX);
    const cy = Number(ritosTop.dataset.transformOriginY);
    // console.log('cx', ritosTop.dataset, cx);
    if (startAnimation) {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
            "deployed",
            "negative"
        ]), 0, 0, 0, 0.3);
        // * choose a random field animation
        const newAniClass = (0, $771006645357c94f$export$de12a21935b7f164)([
            "dottedField",
            "expandingField"
        ]);
        ritosTop.classList.add(newAniClass);
        // * output info to log
        const tmpRnd = Math.random();
        if (tmpRnd < 0.25) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`initiating SIF Level ${(0, $771006645357c94f$export$de12a21935b7f164)([
            "1",
            "2",
            "3",
            "4",
            "5",
            "10"
        ])} Diagnostic`);
        else if (tmpRnd < 0.5) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`extended hull plating magnetic shielding activated`);
        else if (tmpRnd < 0.75) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`SIF monitoring on secondary hull plating`);
        else (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`structural integrity field at ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(70, 99)}%`);
        // * css will animate in loops, until the following timer stops it
        clearTimeout(CRapp.ritosTopFieldTimer);
        CRapp.ritosTopFieldTimer = setTimeout(()=>{
            $633bc24a33489d19$export$44c657e682c0f9a8();
        }, 13000);
        // * randomize field stroke styles
        field.setAttribute("stroke", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.nonDarkColorCssVarNames)})`);
        field.setAttribute("stroke-width", (0, $771006645357c94f$export$24d4d9f7cb1f68df)(10, 35)); // max ideal width 35, min at 10
        // 20 15       50 30 
        field.setAttribute("stroke-dasharray", `${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 50)} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(15, 30)}`);
        field.style.animationDuration = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(3000, 7000) + "ms";
        // field.style.transition = `stroke-dashoffset ${randomIntRange(5,10)}s linear, stroke-width ${randomIntRange(500,1200)}ms ease-in-out`;    
        // applies only to one type of animation
        if (newAniClass == "dottedField") {
            field.style.animationDirection = (0, $771006645357c94f$export$de12a21935b7f164)([
                "normal",
                "reverse",
                "alternate",
                "alternate-reverse"
            ]);
            field.setAttribute("transform", `translate(${cx} ${cy}) scale(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(95, 115) * 0.01}) translate(-${cx} -${cy})`);
        } else // for 'expandingField'
        field.removeAttribute("transform");
        // applies to either class animation:
        field.style.animationTimingFunction = (0, $771006645357c94f$export$de12a21935b7f164)([
            "ease-in-out",
            "ease-in",
            "ease-out",
            "linear",
            "steps(10, end)",
            "steps(20, end)",
            "steps(40, end)"
        ]);
    } else {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Downer", 0, 0, 0, 0.3);
        $633bc24a33489d19$export$44c657e682c0f9a8();
    }
}
function $633bc24a33489d19$export$44c657e682c0f9a8() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    clearTimeout(CRapp.ritosTopFieldTimer);
    CRapp.ritosTopFieldTimer = null;
    // * turn off css animations
    document.querySelector("#msdContainer2 > svg #ritosTop").classList.remove("dottedField", "expandingField");
}
function $633bc24a33489d19$var$setBracketsWindowStyle() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // bracketsWindow -- randomize colors & bar lines's dasharray, etc.
    const bracketsWindow = document.querySelector("#msdContainer2 > svg #bracketsWindow");
    bracketsWindow.querySelectorAll("*").forEach((element)=>{
        if (element.hasAttribute("fill")) element.setAttribute("fill", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames)})`);
        if (element.hasAttribute("stroke")) element.setAttribute("stroke", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames)})`);
        if (element.getAttribute("id").includes("bar")) {
            element.setAttribute("stroke-dasharray", `72 6 ${(0, $771006645357c94f$export$de12a21935b7f164)([
                0,
                6
            ]) * 6} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 12) * 6} ${(0, $771006645357c94f$export$de12a21935b7f164)([
                0,
                6
            ]) * 6} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(6, 12) * 6}  ${(0, $771006645357c94f$export$de12a21935b7f164)([
                0,
                6
            ]) * 6} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 12) * 6} ${(0, $771006645357c94f$export$de12a21935b7f164)([
                0,
                6
            ]) * 6} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 12) * 6} ${(0, $771006645357c94f$export$de12a21935b7f164)([
                0,
                6
            ]) * 6} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 12) * 6}`);
            // element.setAttribute('stroke-opacity', `${randomIntRange(50,100)*0.01}`);
            element.style.animationDuration = (0, $771006645357c94f$export$de12a21935b7f164)([
                23,
                37,
                47,
                173,
                187,
                191
            ]) + "s";
            element.style.animationTimingFunction = `steps(${(0, $771006645357c94f$export$de12a21935b7f164)([
                (0, $771006645357c94f$export$24d4d9f7cb1f68df)(10, 30),
                (0, $771006645357c94f$export$24d4d9f7cb1f68df)(350, 500)
            ])})`;
        }
    });
}
function $633bc24a33489d19$export$a3c8ae47def8917d(force) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const ritosFront = document.querySelector("#msdContainer2 > svg #ritosFront");
    const bracketsWindow = document.querySelector("#msdContainer2 > svg #bracketsWindow");
    // const arcShield = ritosFront.querySelector('#arcRotate1');
    // const arcBBox = arcShield.getBBox();
    // * toggle to status of css animations
    const startAnimation = ritosFront.classList.toggle("rotateShield", force);
    document.documentElement.dataset.ritosFrontLarge = "";
    if (startAnimation) {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
            "warningLong",
            "executing"
        ]), 0, 0, 0, 0.4);
        //* also starts the bracketsWindow css animation
        $633bc24a33489d19$var$setBracketsWindowStyle();
        bracketsWindow.classList.add("activeAnimation");
        // * output info to log
        const tmpRnd = Math.random();
        if (tmpRnd < 0.3) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`Shield ${(0, $771006645357c94f$export$de12a21935b7f164)([
            "Modulation",
            "harmonic"
        ])} set at ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(200, 400)}.${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 9)} MHz frequency`);
        else if (tmpRnd < 0.6) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`Shield activated monitoring • space debris impact`);
        else (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`Shield strength at ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(60, 99)}% ${(0, $771006645357c94f$export$de12a21935b7f164)([
            "",
            "",
            "",
            "",
            "and holding",
            "and dropping!"
        ])}`);
        // * css will animate in loops, until the following timer stops it
        clearTimeout(CRapp.ritosFrontShieldTimer);
        CRapp.ritosFrontShieldTimer = setTimeout(()=>{
            $633bc24a33489d19$export$f88a5c091fd7827b();
        }, 13000);
        // * randomize arc shield colors, dash                         & speed & direction
        const newColor = (0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames);
        const newDashArray = Math.random() < 0.5 ? "none" : `${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 50)} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(5, 30)}`;
        const newDuration = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 6);
        const newDirection = Math.random() < 0.5;
        document.querySelectorAll('#msdContainer2 > svg #ritosFront [id^="arcRotate"]').forEach((node)=>{
            node.setAttribute("stroke", `var(--${newColor})`);
            node.setAttribute("stroke-dasharray", newDashArray);
            node.style.animationDuration = newDuration + "s";
            const nodeId = node.getAttribute("id");
            if (nodeId.includes("2") || nodeId.includes("4")) node.style.animationDelay = 0.5 * newDuration + "s";
            let dirString;
            if (nodeId.includes("1") || nodeId.includes("2")) dirString = newDirection ? "normal" : "reverse";
            else dirString = newDirection ? "reverse" : "normal";
            node.style.animationDirection = dirString;
        // node.style.transitionDelay = 0.5*newDuration + 's'; // ---- this won't help much. give up
        });
        // * randomize shield gradient bg color
        const shieldBg = document.querySelector("#msdContainer2 > svg #rotatingShieldBg1");
        let gradientId = shieldBg.getAttribute("fill"); // returns `url(#xxxxx)`
        gradientId = gradientId.replace("url(", "").replace(")", "");
        let gradientStopColor = document.querySelector(`#msdContainer2 > svg ${gradientId} stop:nth-child(2)`);
        gradientStopColor.setAttribute("stop-color", `var(--${CRapp.allColorCssVarNames})`);
        // * randomize shield bg's animation dur
        shieldBg.style.animationDuration = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1000, 6000) + "ms";
    } else {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Downer", 0, 0, 0, 0.3);
        //* also starts the bracketsWindow css animation
        bracketsWindow.classList.remove("activeAnimation");
        $633bc24a33489d19$export$f88a5c091fd7827b();
    }
}
function $633bc24a33489d19$export$f88a5c091fd7827b() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    clearTimeout(CRapp.ritosFrontShieldTimer);
    CRapp.ritosFrontShieldTimer = null;
    // * turn off css animations
    document.querySelector("#msdContainer2 > svg #ritosFront").classList.remove("rotateShield");
    delete document.documentElement.dataset.ritosFrontLarge;
    // also starts the bracketsWindow css animation
    document.querySelector("#msdContainer2 > svg #bracketsWindow").classList.remove("activeAnimation");
}







function $2149f20d5f49b011$export$c0676d6c9e7dce11() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // register current rubberDucky's position to be at zero index of the positions array
    const rDucky = document.querySelector("#msdContainer svg #rubberDucky");
    const rDuckyTarget = document.querySelector("#msdContainer svg #rubberDuckyTarget");
    const rDuckyBox = rDucky.getBBox();
    const rDuckyPositions = CRapp.rubberDuckyPositions;
    rDuckyPositions.push({
        x: rDuckyBox.x,
        y: rDuckyBox.y
    });
    rDucky.setAttribute("transform-origin", `${rDuckyBox.x + rDuckyBox.width * .5} ${rDuckyBox.y + rDuckyBox.height * .5}`);
    rDuckyTarget.setAttribute("transform-origin", rDucky.getAttribute("transform-origin"));
    rDuckyTarget.setAttribute("opacity", 0);
    // init 'transform' attr to later transition animation
    rDucky.setAttribute("transform", "translate(0 0) scale(1 1) rotate(0)");
    rDucky.setAttribute("opacity", 1);
    rDucky.dataset.rdIndex = 0;
    rDucky.dataset.translate = "0 0";
    rDucky.dataset.hFlip = 1;
    rDucky.dataset.aniInProgress = false;
    // get all possible rubber ducky reference positions from svg into array
    // then remove all svg elements on reference positions
    document.querySelectorAll("#msdContainer svg #rubberDuckyPositions > rect").forEach((element)=>{
        rDuckyPositions.push({
            x: Number(element.getAttribute("x")),
            y: Number(element.getAttribute("y"))
        });
    });
    document.querySelector("#msdContainer svg #rubberDuckyPositions").remove();
    // d3.select(rDucky).on('pointerdown', function(){
    document.querySelector("#msdContainer svg #rubberDucky_hotzone").onpointerdown = ()=>{
        rDucky.dataset.aniInProgress = true;
        var _translate;
        // const currentRdIndex = Number(rDucky.dataset.rdIndex ?? 0);
        const currentTranslate = (_translate = rDucky.dataset.translate) !== null && _translate !== void 0 ? _translate : "0 0";
        var _hFlip;
        const currentHFlip = Number((_hFlip = rDucky.dataset.hFlip) !== null && _hFlip !== void 0 ? _hFlip : 1);
        // // get new random position
        // let newIndex = randomInt( rDuckyPositions.length );
        // if (newIndex == currentRdIndex) {
        //     // if duplicate, shift the newIndex to right by amount of (1 to 0.7*arrayLength), the mod it
        //     newIndex = (newIndex + randomIntRange(1, Math.round(rDuckyPositions.length*.7) )) % rDuckyPositions.length;
        // }
        // rDucky.dataset.rdIndex = newIndex;
        // const newTranslate = (rDuckyPositions[newIndex].x - rDuckyPositions[0].x) + ' ' +
        //                      (rDuckyPositions[newIndex].y - rDuckyPositions[0].y);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
            "warningLong",
            "processing"
        ]), 0, 0, 0, 0.8, 1.4);
        // start animation ===================
        d3.select(rDucky).transition().duration(400).ease(d3.easeQuadIn).attr("transform", `translate(${currentTranslate}) scale(${currentHFlip * 8} 8) rotate(${(0, $771006645357c94f$export$a13251365167ea49)() * (0, $771006645357c94f$export$3c5f89dae98e900b)(0, 40)})`).on("end", function() {
            this.setAttribute("opacity", 0.2);
            setTimeout(()=>{
                this.setAttribute("opacity", .7);
            }, 150);
        }).transition().delay(300).on("start", function() {
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0, 0, 0, 0.8, 1.15);
        }).duration(300).ease(d3.easeQuadIn).attr("transform", `translate(${currentTranslate}) scale(${currentHFlip * .1} .1) rotate(${(0, $771006645357c94f$export$a13251365167ea49)() * (0, $771006645357c94f$export$3c5f89dae98e900b)(100, 350)})`).attr("opacity", 0).on("end", function() {
            // console.log(this);
            $2149f20d5f49b011$var$moveRubberDucky();
        });
    };
}
/**
 * * when calling this function, make sure   'rDucky.dataset.aniInProgress'  has been set to TRUE
 */ function $2149f20d5f49b011$var$moveRubberDucky() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const rDuckyPositions = CRapp.rubberDuckyPositions;
    const rDucky = document.querySelector("#msdContainer svg #rubberDucky");
    var _rdIndex;
    const currentRdIndex = Number((_rdIndex = rDucky.dataset.rdIndex) !== null && _rdIndex !== void 0 ? _rdIndex : 0);
    // get new random position
    let newIndex = (0, $771006645357c94f$export$3c5f89dae98e900b)(rDuckyPositions.length);
    if (newIndex == currentRdIndex) // if duplicate, shift the newIndex to right by amount of (1 to 0.7*arrayLength), the mod it
    newIndex = (newIndex + (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, Math.round(rDuckyPositions.length * .7))) % rDuckyPositions.length;
    rDucky.dataset.rdIndex = newIndex;
    const newTranslate = rDuckyPositions[newIndex].x - rDuckyPositions[0].x + " " + (rDuckyPositions[newIndex].y - rDuckyPositions[0].y);
    // reset ducky to another location while opacity = 0
    const newHFlip = (0, $771006645357c94f$export$a13251365167ea49)();
    rDucky.dataset.translate = newTranslate;
    rDucky.dataset.hFlip = newHFlip;
    rDucky.setAttribute("transform", `translate(${newTranslate}) scale(${newHFlip} 1) rotate(0)`);
    d3.select(rDucky).transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 1000)).duration((0, $771006645357c94f$export$de12a21935b7f164)([
        800,
        1200
    ])).attr("opacity", 1).on("end", ()=>{
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)((0, $771006645357c94f$export$de12a21935b7f164)([
            "Rubber Ducky has been beamed to another location!",
            "Rubber Ducky got transported to somewhere on the ship",
            "Rubber Ducky activated the Site-to-site transport..."
        ]));
        rDucky.dataset.aniInProgress = false;
    });
}
function $2149f20d5f49b011$export$53b47a456413a20() {
    const rDucky = document.querySelector("#msdContainer svg #rubberDucky");
    if (rDucky.dataset.aniInProgress === "true") return;
    rDucky.dataset.aniInProgress = true;
    const rDuckyTarget = document.querySelector("#msdContainer svg #rubberDuckyTarget");
    var _translate;
    const currentTranslate = (_translate = rDucky.dataset.translate) !== null && _translate !== void 0 ? _translate : "0 0";
    var _hFlip;
    const currentHFlip = Number((_hFlip = rDucky.dataset.hFlip) !== null && _hFlip !== void 0 ? _hFlip : 1);
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
        "warningHigh",
        "deployed",
        "affirmative"
    ]), 0, 0, 0, 0.6);
    d3.select(rDuckyTarget).attr("transform", `translate(${currentTranslate}) scale(3) rotate(0)`).attr("opacity", 1).attr("visibility", "visible").transition("blinking").delay(200).duration(0).attr("opacity", 0).transition("blinking").delay(200).on("start", ()=>{
        rDuckyTarget.setAttribute("opacity", .5);
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Rubber Ducky located", "timePrefix");
    }).duration(400).attr("transform", `translate(${currentTranslate}) scale(2) rotate(90)`).attr("opacity", 0).on("end", ()=>{
        rDuckyTarget.setAttribute("visibility", "hidden");
    });
    d3.select(rDucky).transition().delay(400).duration(700)// .ease(d3.easeCubicInOut)
    .attr("transform", `translate(${currentTranslate}) scale(${currentHFlip * 7} 7) rotate(0)`).on("start", ()=>{
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Upper", 0.4, 0, 0, 0.7);
    }).transition().delay(150).duration(1000).attr("transform", `translate(${currentTranslate}) scale(${currentHFlip} 1) rotate(0)`).transition().duration(100).attr("opacity", 0).on("start", ()=>{
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("notification", 0, 0, 0, 0.7);
    }).on("end", ()=>{
        $2149f20d5f49b011$var$moveRubberDucky();
    });
}









const $653c606c0d614d74$var$localStoragePrefix = "ProjectRITOS";
// * All Possible Settings & Options (first value = default)
const $653c606c0d614d74$var$allAvailableUserSettings = {
    // ! key: value --- value = [minNum, maxNum]  <<<< only use this format (two numbers in array) to present a range of lower/upper bounds
    // ! key: value --- value = ['text', minNum, maxNum]  <<<< only use this format to indicate that the value should be string within a number of chars
    useLastVisitSettings: [
        false,
        true
    ],
    shipName: [
        "text",
        5,
        50
    ],
    shipClass: [
        "text",
        1,
        30
    ],
    shipRegistry: [
        "text",
        3,
        20
    ],
    colorSchemeName: [
        "text",
        1,
        50
    ],
    bgHue: [
        0,
        360
    ],
    bgLevel: [
        0,
        16
    ],
    softVignette: [
        true,
        false
    ],
    ldGlare: [
        true,
        false
    ],
    audioEnabled: [
        false,
        true
    ],
    audioFxLevel: [
        0,
        1
    ],
    audioBgLevel: [
        0,
        1
    ],
    clockType: [
        "24hr",
        "12hr/Am.Pm",
        "12hr"
    ]
};
// * DEFAULT settings
const $653c606c0d614d74$var$allDefaultUserSettings = {
    useLastVisitSettings: $653c606c0d614d74$var$allAvailableUserSettings.useLastVisitSettings[0],
    shipName: `U.S.S. Cerritos`,
    shipClass: `California`,
    shipRegistry: `NCC-75567`,
    colorSchemeName: "Ritos Yellow",
    bgHue: $653c606c0d614d74$var$allAvailableUserSettings.bgHue[0],
    bgLevel: $653c606c0d614d74$var$allAvailableUserSettings.bgLevel[0],
    softVignette: $653c606c0d614d74$var$allAvailableUserSettings.softVignette[0],
    ldGlare: $653c606c0d614d74$var$allAvailableUserSettings.ldGlare[0],
    audioEnabled: $653c606c0d614d74$var$allAvailableUserSettings.audioEnabled[0],
    audioFxLevel: 0.47,
    audioBgLevel: 0.3,
    clockType: $653c606c0d614d74$var$allAvailableUserSettings.clockType[0]
};
function $653c606c0d614d74$export$62f74afbfe07916b(key, value) {
    if ($653c606c0d614d74$var$allAvailableUserSettings[key][0] == "text" && typeof value === "string") {
        if (value.length >= $653c606c0d614d74$var$allAvailableUserSettings[key][1] && value.length <= $653c606c0d614d74$var$allAvailableUserSettings[key][2]) return true;
        else return `error: ${key} text can only have ${$653c606c0d614d74$var$allAvailableUserSettings[key][1]} to ${$653c606c0d614d74$var$allAvailableUserSettings[key][2]} characters`;
    } else return `error: ${key} does not have a valid value`;
}
function $653c606c0d614d74$export$36c7bb024fc249a2() {
    // * Read Locally Saved Settings Values
    const userLocalStorageSettings = $653c606c0d614d74$var$readLocalSettings();
    // * set current user Session settings to default
    let userSessionSettings = {
        ...$653c606c0d614d74$var$allDefaultUserSettings
    };
    // * In Locally Saved Settings,    IF  "useLastVisitSettings"  is not specifically set to true, use default settings
    if ("useLastVisitSettings" in userLocalStorageSettings === false || userLocalStorageSettings["useLastVisitSettings"] !== true) return userSessionSettings; // ! early exit with all default values
    // * Use Locally Saved Settings ===============
    // go through each possible setting, and see if it needs to be overridden by user's pervious localStorage setting
    Object.keys($653c606c0d614d74$var$allAvailableUserSettings).forEach((key)=>{
        const availableValues = $653c606c0d614d74$var$allAvailableUserSettings[key];
        // check if previous local setting is still valid.
        // if yes, use it for this session. Otherwise, do nothing so that the default value will be used
        if (key in userLocalStorageSettings) {
            const localValue = userLocalStorageSettings[key];
            // * Special Case: "Range of Numbers" (represented by an array with 2 number items)
            if (availableValues.length == 2 && typeof availableValues[0] == "number" && typeof availableValues[1] == "number") {
                if (localValue >= availableValues[0] && localValue <= availableValues[1]) userSessionSettings[key] = localValue;
            } else if (availableValues.length == 3 && availableValues[0] === "text" && typeof availableValues[1] == "number" && typeof availableValues[2] == "number") {
                if (localValue.length >= availableValues[1] && localValue.length <= availableValues[2]) userSessionSettings[key] = localValue;
            } else if (availableValues.includes(localValue)) userSessionSettings[key] = localValue;
        }
    });
    // ! edge cases: Override user init settings...
    if (userSessionSettings.audioEnabled && userSessionSettings.audioFxLevel <= 0) {
        userSessionSettings.audioEnabled = false;
        userSessionSettings.audioFxLevel = $653c606c0d614d74$var$allDefaultUserSettings.audioFxLevel;
    }
    return userSessionSettings;
}
function $653c606c0d614d74$export$65454018d8d76fd3(exceptionKeys = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // only loop through user's localSettings (only modified settings)
    // applySingleUserSettingToApp(category, value);
    Object.keys(CRapp.userSessionSettings).forEach((key)=>{
        switch(key){
            case "shipName":
            case "shipClass":
            case "shipRegistry":
                (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)(key, CRapp.userSessionSettings[key]);
                break;
            case "colorSchemeName":
                (0, $a2757c1cf7e9a697$export$878a77c0bab57c97)(CRapp.userSessionSettings[key]);
                break;
            case "bgHue":
                (0, $a2757c1cf7e9a697$export$5cff1c8d974e3f0b)(Number(CRapp.userSessionSettings[key]));
                break;
            case "bgLevel":
                (0, $a2757c1cf7e9a697$export$1bda2b6d3dd4d993)(Number(CRapp.userSessionSettings[key]));
                break;
            case "softVignette":
                (0, $a2757c1cf7e9a697$export$6b9b218407705316)(CRapp.userSessionSettings[key], "noLog", "mute");
                break;
            case "ldGlare":
                if (!exceptionKeys.includes("ldGlare")) (0, $a2757c1cf7e9a697$export$4a4f808287652e93)(CRapp.userSessionSettings[key], "noLog", "mute");
                break;
            default:
                break;
        }
    });
}
/**
 * Apply action that is specific to the given valid users setting to the app.
 * @param {*} category 
 * @param {*} value -- value has been sanitized
 */ function $653c606c0d614d74$var$applySingleUserSettingToApp(category, value) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
// app
}
/**
 * Apply a specific user setting to the app AND store that setting in localStorage
 * @param {*} key 
 * @param {*} value -- value has been sanitized
 */ function $653c606c0d614d74$var$processUserSettingChange(key, value) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // // * special case for AUDIO #######################################
    // // ================================================================
    // if (key=='audioBg') { // * Audio BG MUTE ===============
    //     if (value=='mute') { // when 'mute' btn is clicked
    //         saveLocalSettings('audioBgMute', true);
    //         //* applying action...
    //         sf.sounds.muteBg();
    //     } else { // when 'level' btn is clicked
    //         saveLocalSettings('audioBgMute', false);
    //         saveLocalSettings('audioBgLevel', sf.sounds.soundTrackBgVolume);
    //         //* applying action...
    //         // action is handled during capturing of the LEVEL btn pointer event
    //     }
    //     // ! need to update sf.userSessionSettings ????
    //     return; // ! .... Exit
    // } else if (key=='audioFx') { // * Audio FX MUTE ===============
    //     if (value=='mute') { // when 'mute' btn is clicked
    //         saveLocalSettings('audioFxMute', true);
    //         //* applying action...
    //         sf.sounds.muteFx();
    //     } else { // when 'level' btn is clicked
    //         saveLocalSettings('audioFxMute', false);
    //         saveLocalSettings('audioFxLevel', sf.sounds.soundTrackFxVolume);
    //         //* applying action...
    //         // action is handled during capturing of the LEVEL btn pointer event
    //     }
    //     // ! need to update sf.userSessionSettings ????
    //     return; // ! .... Exit
    // }
    // update this single setting to within app
    CRapp.userSessionSettings[key] = value;
    // apply action based on this single setting change
    switch(key){
        case "shipName":
            if (value.trim() === "") (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)(key, "U.S.S. CERRITOS");
            else (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)(key, value);
            break;
        case "shipClass":
            if (value.trim() === "") (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)(key, "CALIFORNIA");
            else (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)(key, value);
            break;
        case "shipRegistry":
            if (value.trim() === "") (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)(key, "NCC-75567");
            else (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)(key, value);
            break;
        case "audioEnabled":
            if (value && (0, $da19c3c2cc082ca0$export$521ad490824e86fd)() == 0) {
                const newLevel = $653c606c0d614d74$var$allDefaultUserSettings.audioFxLevel * 0.33;
                (0, $da19c3c2cc082ca0$export$6d762aca21a0d7bf)(newLevel);
            }
            (0, $da19c3c2cc082ca0$export$c8cdacb776d3b001)(value);
            break;
        case "audioFxLevel":
            (0, $da19c3c2cc082ca0$export$6d762aca21a0d7bf)(value);
            break;
        case "usePreviousSettings":
            CRapp.userSessionSettings.useLastVisitSettings = value;
            break;
        // case 'resetAll':
        //     resetAllSettingsRestart();
        //     return;
        default:
            break;
    }
    // * write to user localStorage
    if (CRapp.userSessionSettings.useLastVisitSettings === true) {
        if (key == "usePreviousSettings") // ! save all settings to local
        Object.keys($653c606c0d614d74$var$allDefaultUserSettings).forEach((key)=>{
            $653c606c0d614d74$var$saveLocalSetting(key, CRapp.userSessionSettings[key]);
        });
        else // ! save this changed setting to local
        $653c606c0d614d74$var$saveLocalSetting(key, value);
    } else if (key == "usePreviousSettings") // ! clean out localStorage
    $653c606c0d614d74$var$deleteLocalSettings();
}
function $653c606c0d614d74$export$731cb1e997115006(key, value) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (key in CRapp.userSessionSettings == false) return;
    CRapp.userSessionSettings[key] = value;
    if (CRapp.userSessionSettings.useLastVisitSettings === true) $653c606c0d614d74$var$saveLocalSetting(key, value);
}
/**
 * Gets & returns settings from user localStorage.
 * Only changes a string boolean value to an actual boolean value. Not other sanitization was done here.
 */ function $653c606c0d614d74$var$readLocalSettings() {
    let userLocalStorageSettings;
    let foundPreviousLocalStorageSettings = false;
    try {
        userLocalStorageSettings = JSON.parse(localStorage.getItem($653c606c0d614d74$var$localStoragePrefix));
        if (userLocalStorageSettings != null) {
            if (typeof userLocalStorageSettings === "object") {
                if (Object.keys(userLocalStorageSettings).length > 0) foundPreviousLocalStorageSettings = true;
            }
        }
    } catch (error) {}
    if (!foundPreviousLocalStorageSettings) {
        userLocalStorageSettings = {};
        return userLocalStorageSettings; // ! early exit
    }
    // go through all values: if string, change it to boolean type if needed
    Object.keys(userLocalStorageSettings).forEach((key)=>{
        if (typeof userLocalStorageSettings[key] === "string") {
            const valueInLowerCase = userLocalStorageSettings[key].toLowerCase();
            if (valueInLowerCase == "true" || valueInLowerCase == "false") userLocalStorageSettings[key] = valueInLowerCase === "true";
        }
    });
    // console.log(userLocalStorageSettings);
    return userLocalStorageSettings;
}
/**
 * save ONE SPECIFIC SETTING of user settings into local storage
 */ function $653c606c0d614d74$var$saveLocalSetting(key, value) {
    let userLocalStorageSettings = $653c606c0d614d74$var$readLocalSettings();
    userLocalStorageSettings[key] = value;
    try {
        localStorage.setItem($653c606c0d614d74$var$localStoragePrefix, JSON.stringify(userLocalStorageSettings));
    } catch (error) {
        console.log("localStorage error");
        console.log(error);
    }
}
/**
 * move all settings of this app from localStorage
 */ function $653c606c0d614d74$var$deleteLocalSettings() {
    try {
        localStorage.removeItem($653c606c0d614d74$var$localStoragePrefix);
    } catch (error) {
        console.log("localStorage error");
        console.log(error);
    }
}
function $653c606c0d614d74$var$setShipPreSet(shipNameRef) {
    // console.log('preset == ' + shipNameRef);
    let shipName, shipClass, shipRegistry;
    switch(shipNameRef.toLowerCase()){
        case "merced":
            shipName = "U.S.S. MERCED";
            shipClass = "CALIFORNIA";
            shipRegistry = "NCC-87075";
            break;
        case "oakland":
            shipName = "U.S.S. OAKLAND";
            shipClass = "CALIFORNIA";
            shipRegistry = "NCC-75012";
            break;
        case "carlsbad":
            shipName = "U.S.S. CARLSBAD";
            shipClass = "CALIFORNIA";
            shipRegistry = "NCC-73110";
            break;
        case "inglewood":
            shipName = "U.S.S. INGLEWOOD";
            shipClass = "CALIFORNIA";
            shipRegistry = "NCC-90301";
            break;
        case "boaty":
            shipName = "BOATY MCBOATFACE II";
            shipClass = "ENGLAND";
            shipRegistry = "NOC-02017";
            break;
        case "yamato":
            shipName = "宇宙戦艦ヤマト";
            shipClass = "YAMATO";
            shipRegistry = "UNCF BBY-01";
            break;
        default:
            shipName = "";
            shipClass = "";
            shipRegistry = "";
            break;
    }
    document.querySelector(`#localSettings input[data-key="shipName"]`).value = shipName;
    document.querySelector(`#localSettings input[data-key="shipClass"]`).value = shipClass;
    document.querySelector(`#localSettings input[data-key="shipRegistry"]`).value = shipRegistry;
    $653c606c0d614d74$var$processUserSettingChange("shipName", shipName);
    $653c606c0d614d74$var$processUserSettingChange("shipClass", shipClass);
    $653c606c0d614d74$var$processUserSettingChange("shipRegistry", shipRegistry);
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Up", 0, 0, 0, 0.25);
}
/**
 * Detect if user is making a change on User Settings Page.
 * If a change is detected: playSound if needed; sanitize the value; update ui on User Settings Page.
 * Then call   processUserSettingChange()  to apply change to App & to localStorage
 * @param {*} e 
 * @returns 
 */ function $653c606c0d614d74$var$checkPointDownEvent(e) {
    if ("preset" in e.target.dataset) {
        $653c606c0d614d74$var$setShipPreSet(e.target.dataset.preset);
        return;
    }
    if (!("key" in e.target.dataset)) return;
    let value = e.target.dataset.value;
    // change boolean string value to real boolean if needed
    if (typeof value === "string") {
        const valueInLowerCase = value.toLowerCase();
        if (valueInLowerCase == "true" || valueInLowerCase == "false") value = valueInLowerCase === "true";
    }
    switch(e.target.dataset.key){
        case "usePreviousSettings":
        case "audioEnabled":
            e.target.parentNode.querySelectorAll(".selected").forEach((element)=>{
                element.classList.remove("selected");
            });
            e.target.classList.add("selected");
            if (typeof value !== "boolean") return;
            // * Use Last Settings =================
            if (e.target.dataset.key == "usePreviousSettings") {
                if (value) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Up");
                else (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Down");
                $653c606c0d614d74$var$processUserSettingChange("usePreviousSettings", value);
            } else {
                if (value) {
                    if ((0, $da19c3c2cc082ca0$export$521ad490824e86fd)() == 0) {
                        const newLevel = $653c606c0d614d74$var$allDefaultUserSettings.audioFxLevel * 0.33;
                        (0, $da19c3c2cc082ca0$export$6d762aca21a0d7bf)(newLevel);
                        $653c606c0d614d74$var$setVolumeLevelUi(document.getElementById("audioFxLevel"), Math.round(newLevel * 100));
                    }
                    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0, 0, 0, 0.6);
                } else (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(e.target, "blink2");
                $653c606c0d614d74$var$processUserSettingChange("audioEnabled", value);
            }
            break;
        case "audioFxLevel":
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const level = rect.width > 0 ? Math.round(100 * x / rect.width) : 0; // 0 to 100
            $653c606c0d614d74$var$setVolumeLevelUi(e.target, level);
            if (level > 0) {
                (0, $da19c3c2cc082ca0$export$c8cdacb776d3b001)(true); //* force audio on
                // update audioMainSwitch UI....
                const localSettingsContent = document.getElementById("localSettingsContent");
                localSettingsContent.querySelector(`div.btn[data-key="audioEnabled"][data-value="true"]`).classList.add("selected");
                localSettingsContent.querySelector(`div.btn[data-key="audioEnabled"][data-value="false"]`).classList.remove("selected");
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Up", 0, 0, 0, 0.8);
            } else {
                (0, $da19c3c2cc082ca0$export$c8cdacb776d3b001)(false); //* force audio off
                // update audioMainSwitch UI....
                const localSettingsContent1 = document.getElementById("localSettingsContent");
                localSettingsContent1.querySelector(`div.btn[data-key="audioEnabled"][data-value="true"]`).classList.remove("selected");
                localSettingsContent1.querySelector(`div.btn[data-key="audioEnabled"][data-value="false"]`).classList.add("selected");
            }
            $653c606c0d614d74$var$processUserSettingChange("audioFxLevel", level * 0.01);
            break;
        default:
            break;
    }
}
function $653c606c0d614d74$var$checkInputValueChangeEvent(e) {
    if (!("key" in e.target.dataset)) return;
    if (e.target.value.trim() == "") e.target.value = ""; // preventing blank empty string
    if (e.target.dataset.key == "shipName" || e.target.dataset.key == "shipClass" || e.target.dataset.key == "shipRegistry") $653c606c0d614d74$var$processUserSettingChange(e.target.dataset.key, e.target.value);
}
function $653c606c0d614d74$var$setVolumeLevelUi(node, newLevel) {
    node.style.setProperty("--audioLevel", newLevel + "%");
    node.dataset.audioLevel = `${newLevel}%`; // for ::after's content -- has to be string
}
function $653c606c0d614d74$var$addLocalSettingsEventListener() {
    const localSettings = document.getElementById("localSettings");
    localSettings.addEventListener("pointerdown", $653c606c0d614d74$var$checkPointDownEvent, false);
    localSettings.addEventListener("input", $653c606c0d614d74$var$checkInputValueChangeEvent, false);
}
function $653c606c0d614d74$var$removeLocalSettingsEventListener() {
    const localSettings = document.getElementById("localSettings");
    localSettings.removeEventListener("pointerdown", $653c606c0d614d74$var$checkPointDownEvent, false);
    localSettings.removeEventListener("input", $653c606c0d614d74$var$checkInputValueChangeEvent, false);
}
function $653c606c0d614d74$export$5262bb5d2849f15() {
    const localSettings = document.getElementById("localSettings");
    clearTimeout(Number(localSettings.dataset.timerId));
    if (localSettings.classList.contains("show")) {
        // * hide ====
        $653c606c0d614d74$var$removeLocalSettingsEventListener();
        localSettings.classList.remove("show");
        localSettings.dataset.timerId = setTimeout(()=>{
            localSettings.style.display = "none"; // * set to none so that input field cannot be access via keyboard etc.
        }, 650); // ! <<<<<< should not be less than css's transition duration
    } else {
        // * show ====
        $653c606c0d614d74$var$addLocalSettingsEventListener();
        localSettings.style.display = "block";
        localSettings.dataset.timerId = setTimeout(()=>{
            localSettings.classList.add("show");
        }, 50);
    }
}
function $653c606c0d614d74$export$131c68bd6f589ff1() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const localSettingsContent = document.getElementById("localSettingsContent");
    let tmpValue;
    tmpValue = CRapp.userSessionSettings.useLastVisitSettings ? "true" : "false";
    localSettingsContent.querySelector(`div.btn[data-key="usePreviousSettings"][data-value="${tmpValue}"]`).classList.add("selected");
    tmpValue = CRapp.userSessionSettings.audioEnabled ? "true" : "false";
    localSettingsContent.querySelector(`div.btn[data-key="audioEnabled"][data-value="${tmpValue}"]`).classList.add("selected");
    const audioFxLevel = localSettingsContent.querySelector(`#audioFxLevel`);
    const level = Math.round(CRapp.userSessionSettings.audioFxLevel * 100);
    audioFxLevel.style.setProperty("--audioLevel", level + "%");
    audioFxLevel.dataset.audioLevel = `${level}%`; // for ::after's content -- has to be string
    localSettingsContent.querySelector(`input[data-key="shipName"]`).value = CRapp.userSessionSettings.shipName.toUpperCase() == $653c606c0d614d74$var$allDefaultUserSettings.shipName.toUpperCase() ? "" : CRapp.userSessionSettings.shipName;
    localSettingsContent.querySelector(`input[data-key="shipClass"]`).value = CRapp.userSessionSettings.shipClass.toUpperCase() == $653c606c0d614d74$var$allDefaultUserSettings.shipClass.toUpperCase() ? "" : CRapp.userSessionSettings.shipClass;
    localSettingsContent.querySelector(`input[data-key="shipRegistry"]`).value = CRapp.userSessionSettings.shipRegistry.toUpperCase() == $653c606c0d614d74$var$allDefaultUserSettings.shipRegistry.toUpperCase() ? "" : CRapp.userSessionSettings.shipRegistry;
}


function $3197f154df3b8f49$export$66453c7132c7178e(textTime, textDate = null, ringClockParam = "noRingClock") {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // if ((displayTimeHM==null) || (displayTimeSS==null)) return;
    if (textTime == null) return;
    CRapp.currentDateCache = null;
    // const textHM = displayTimeHM.querySelector('tspan');
    // const textSS = displayTimeSS.querySelector('tspan');
    // const textHM_fullWidth = textHM.getBBox().width;
    // const textSS_fullWidth = textSS.getBBox().width;
    // HIDE clock ==============================================
    if (CRapp.userSessionSettings.clockType == "none") {
        clearInterval(CRapp.clockIntervalTimer);
        CRapp.clockIntervalTimer = null;
        // document.querySelector("#clockDisplay").classList.add("disabled");
        document.documentElement.dataset.clock = "off";
        // textHM.textContent = randomIntDigits(4);
        // textSS.textContent = ' ';
        textTime.textContent = (0, $771006645357c94f$export$cc4d98609e3a31e7)(6);
        return;
    }
    // SHOW clock ==============================================
    if (CRapp.clockIntervalTimer != null) return; // clock is already showing
    // document.querySelector("#clockDisplay").classList.remove("disabled");
    delete document.documentElement.dataset.clock;
    // RING CLOCK ======================
    let ringHour1, ringHour2, ringMinute1, ringMinute2, ringMinute3, ringSecond, ringRandom, ringCenter;
    if (ringClockParam == "hasRingClock") {
        ringHour1 = document.getElementById("ringHour1");
        ringHour2 = document.getElementById("ringHour2");
        ringMinute1 = document.getElementById("ringMinute1");
        ringMinute2 = document.getElementById("ringMinute2");
        ringMinute3 = document.getElementById("ringMinute3");
        ringSecond = document.getElementById("ringSecond");
        ringRandom = document.getElementById("ringRandom");
        ringCenter = document.getElementById("ringCenter");
    }
    CRapp.clockIntervalTimer = setInterval(()=>{
        // console.log(new Date()); // current client machine time
        let currentTime;
        if (CRapp.serverTime !== undefined) // using server time
        // -- current server time calculation = initial server time + time elapsed since server time marker
        currentTime = new Date(CRapp.serverTime.getTime() + (performance.now() - CRapp.performanceMarkerServer));
        else // using client machine time
        currentTime = new Date();
        let HH = currentTime.getHours();
        let AmPm = CRapp.userSessionSettings.clockType == "12hr/Am.Pm" ? "A" : "";
        if (CRapp.userSessionSettings.clockType != "24hr" && HH > 12) {
            HH = HH % 12;
            if (CRapp.userSessionSettings.clockType == "12hr/Am.Pm") AmPm = "P";
        }
        const paddingZeroHH = HH < 10 ? "0" : "";
        const MM = currentTime.getMinutes();
        const paddingZeroMM = MM < 10 ? "0" : "";
        // * for RIGHT ALIGNMENT on HH text block
        // const hmOffsetX = textHM_fullWidth - textHM.getBBox().width;
        // displayTimeHM.setAttribute('transform', `translate(${hmOffsetX} 0)`);
        const SS = currentTime.getSeconds();
        const paddingSS = SS < 10 ? "0" : "";
        textTime.textContent = paddingZeroHH + HH + ":" + paddingZeroMM + MM + `.` + paddingSS + SS + AmPm;
        //* update Date ##############
        //  -- only update date is date node is given, and only if current date value is different from cached date value
        if (textDate !== null) {
            const currentDateCheck = currentTime.toLocaleDateString();
            if (currentDateCheck != CRapp.currentDateCache) {
                // update cache
                CRapp.currentDateCache = currentDateCheck;
                // update the ui date string
                const options = {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    weekday: "long"
                };
                let dateArray = currentTime.toLocaleDateString("en-US", options) // Monday, Oct 17, 2022
                .replaceAll(",", "").toUpperCase().split(" ");
                // console.log(dateArray);
                textDate.textContent = `${dateArray[3]}.${dateArray[1]}.${dateArray[2]} • ${dateArray[0]}`;
            }
        }
        // * RING CLOCK ###############################
        if (ringClockParam == "noRingClock") {
            CRapp.ringClockCenterDom = null;
            return; //* early exit
        }
        CRapp.ringClockCenterDom = ringCenter;
        ringSecond.style.strokeDashoffset = 935 - (SS + 1) * (4084 / 60);
        // const frMM = MM + SS/60; // fractional MM
        ringMinute1.style.strokeDashoffset = 300 - MM * 57.5;
        ringMinute2.style.strokeDashoffset = 1153 - MM * (3613 / 60);
        ringMinute3.style.strokeDashoffset = 500 - MM * (3544 / 60) - MM * 1772; // 1772 = half of 3544;
        const frHH = HH % 12 + MM / 60;
        ringHour1.style.strokeDashoffset = 354 - frHH * (2495 / 12) + MM * 2495;
        // THIN HOUR RING =============================
        // Every 15 seconds, tick it by shifting its dash for 1/12 length, then reset.
        // During reset, no transition is desired. So using the 'class' method to accomplish this animation
        if (SS % 15 == 0) {
            ringHour2.classList.add("ticking");
            setTimeout(()=>{
                ringHour2.classList.remove("ticking");
            }, 1250);
        }
        // RANDOM RING rotation =============================
        if (Math.random() < .3) {
            ringRandom.style.strokeDashoffset = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-1438, 1438);
            ringRandom.style.transitionDuration = (0, $771006645357c94f$export$51e16a050e2bf069)(.4, 3) + "s";
            ringRandom.style.transitionTimingFunction = (0, $771006645357c94f$export$de12a21935b7f164)([
                "ease",
                "cubic-bezier(.8, 0, .2, 1)",
                "ease-in",
                "ease-out"
            ]);
        }
        // CENTER solid RING =============================
        // no dash, but with random radius change
        // * -- special animation when SS is about to hit 00
        if (SS == 58) {
            if (!CRapp.bufferTimeStatus) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Down", 0, 0, 0, 0.2);
            ringCenter.style.transitionDuration = "0.6s";
            ringCenter.style.transitionTimingFunction = "ease";
            d3.select(ringCenter).transition().delay(200).duration(0) // at 58.2
            .attr("r", 5).style("transition-timing-function", "ease-out").transition().delay(650).duration(0) // at 58.85
            .attr("r", 472).style("transition-duration", "0.8s").style("opacity", 0.3).style("transition-timing-function", "ease-out").transition().delay(850).duration(0) // at 59.7
            .attr("r", (0, $771006645357c94f$export$de12a21935b7f164)([
                154,
                (0, $771006645357c94f$export$24d4d9f7cb1f68df)(55, 175)
            ])).style("transition-duration", "0.9s").style("transition-timing-function", "ease-in-out").style("opacity", null);
        } else if (SS < 57 && SS > 1) {
            if (Math.random() < .2) {
                // ringCenter.style.r = randomAItem([154, randomIntRange(55,175)]);
                ringCenter.setAttribute("r", (0, $771006645357c94f$export$de12a21935b7f164)([
                    154,
                    (0, $771006645357c94f$export$24d4d9f7cb1f68df)(55, 175)
                ]));
                ringCenter.style.transitionDuration = null;
                ringCenter.style.transitionDuration = (0, $771006645357c94f$export$51e16a050e2bf069)(0.3, 1.7) + "s";
                ringCenter.style.transitionTimingFunction = (0, $771006645357c94f$export$de12a21935b7f164)([
                    "ease",
                    "cubic-bezier(.8, 0, .2, 1)",
                    "ease-in",
                    "ease-out"
                ]);
            }
        } else if (SS == 59) {
            if (!CRapp.bufferTimeStatus) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Down", 0, 0, 0, 0.3);
        } else if (SS == 0 && !CRapp.bufferTimeStatus) {
            if (MM == 0) {
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("lowProfileTask", 0, 0, 0, 0.3);
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 1.1, 0, 0, 0.5);
            } else (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                "affirmative",
                "negative"
            ]), 0, 0, 0, 0.3);
        }
    }, 1000);
}
function $3197f154df3b8f49$export$1ea5135a72d2338a() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    clearInterval(CRapp.clockIntervalTimer);
    CRapp.clockIntervalTimer = null;
}
function $3197f154df3b8f49$export$9504c7d42aa1dd15() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.ringClockCenterDom === null) return;
    // blink effect
    CRapp.ringClockCenterDom.classList.remove("blink2");
    setTimeout(()=>{
        CRapp.ringClockCenterDom.classList.add("blink2");
    }, 50);
}
function $3197f154df3b8f49$export$189cabd35bb0035c(clockNode) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(clockNode, "blink1");
    // Need to adjust shipClock position for esthetic, due to the element's confined width.
    // No need to change homeClock's.
    let newClockType;
    if (CRapp.userSessionSettings.clockType == "24hr") newClockType = "12hr/Am.Pm";
    else if (CRapp.userSessionSettings.clockType == "12hr/Am.Pm") newClockType = "12hr";
    else newClockType = "24hr";
    $3197f154df3b8f49$var$updateClockTypeUi(newClockType);
    (0, $653c606c0d614d74$export$731cb1e997115006)("clockType", newClockType);
    (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`Changing to ${newClockType} clock type`);
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", 0, 0, 0, 0.25);
}
function $3197f154df3b8f49$var$updateClockTypeUi(newClockType) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const shipClock = CRapp.shipFrameDom.querySelector("#shipClock");
    if (newClockType == "24hr") shipClock.setAttribute("transform", "translate(16 0)");
    else if (newClockType == "12hr") shipClock.setAttribute("transform", "translate(20 0)");
    else if (newClockType == "12hr/Am.Pm") shipClock.setAttribute("transform", "translate(2 0)");
}











/**
 * starts target scanning for several cycles.
 * replace image to a different one.
 * starts target scanning again.
 */ function $44a29584ad670e34$var$startTargetScan() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const target = document.querySelector("#msdContainer2 > svg #target");
    const targetOuter = target.querySelector("#targetOuter");
    const targetInnerH = target.querySelector("#targetInnerH");
    const targetInnerV = target.querySelector("#targetInnerV");
    const targetStar = document.querySelector("#msdContainer2 > svg #targetStar");
    const targetLines = document.querySelector("#msdContainer2 > svg #targetLines");
    const targetLineH = targetLines.querySelector("#targetLineH");
    const targetLineV = targetLines.querySelector("#targetLineV");
    const areaBox = document.querySelector("#msdContainer > svg #jwstImage_placeholder").getBBox();
    const targetLength = target.getBBox().width;
    const areaBoxXRange = [
        0.8 * targetLength,
        areaBox.width - 0.8 * targetLength
    ];
    const areaBoxYRange = [
        0.8 * targetLength,
        areaBox.height - 0.8 * targetLength
    ];
    const imageNode = document.querySelector("#msdContainer svg #jwstImage_placeholder + image");
    (0, $a2757c1cf7e9a697$export$c9e8cccd464b5a6c)(target);
    (0, $a2757c1cf7e9a697$export$c9e8cccd464b5a6c)(targetStar);
    (0, $a2757c1cf7e9a697$export$c9e8cccd464b5a6c)(targetOuter);
    (0, $a2757c1cf7e9a697$export$c9e8cccd464b5a6c)(targetInnerH);
    (0, $a2757c1cf7e9a697$export$c9e8cccd464b5a6c)(targetInnerV);
    // reset init conditions ============================
    target.setAttribute("transform", `translate(${0.5 * areaBox.width} ${0.5 * areaBox.height})`);
    // target.style.opacity = 0;
    // STAR - using css filter to shift to random color
    const setStarColor = ()=>{
        targetStar.style.filter = Math.random() < 0.5 ? //* glow + stay white
        "drop-shadow(0 0 8px #fff) drop-shadow(0 0 32px #fff)" : //* glow + color shift
        `drop-shadow(0 0 8px #fff) drop-shadow(0 0 32px #fff) brightness(0.6) sepia(1) saturate(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 8)}) hue-rotate(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 360)}deg)`;
    };
    targetStar.style.opacity = 0;
    targetOuter.setAttribute("opacity", 0);
    targetInnerV.setAttribute("opacity", 0);
    targetInnerH.setAttribute("fill", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.nonDarkColorCssVarNames)})`);
    targetLines.setAttribute("opacity", 0);
    targetLineH.setAttribute("opacity", 0);
    targetLineV.setAttribute("opacity", 0);
    target.style.opacity = 0;
    const starRotation = CRapp.jwstImg.starRotation[CRapp.jwstCurrentImgIndex];
    let remainingCycles = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(4, 10);
    // remainingCycles = 2; // ! DEV <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
    let coordinateX, coordinateY;
    //* CYCLE setup #########################################################################
    const scanningCycle = ()=>{
        // console.log('One SCANNING CYCLE is staring =======================================');
        coordinateX = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(areaBoxXRange[0], areaBoxXRange[1]);
        coordinateY = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(areaBoxYRange[0], areaBoxYRange[1]);
        const coordinate = `${coordinateX} ${coordinateY}`;
        const deg = (0, $771006645357c94f$export$a13251365167ea49)() * (0, $771006645357c94f$export$3c5f89dae98e900b)(4) * 180;
        const finalScale = (0, $771006645357c94f$export$51e16a050e2bf069)(0.2, 1.4);
        const showTargetLocking = Math.random() < 0.35;
        // const showTargetLocking = true; // ! DEV <<<<<<<<<<<<<<<<<<<<< !!!!!!!!!!!!!!!!!!!!!
        const targetLockingFactor = showTargetLocking ? 1 : 0;
        setStarColor(); //* set star color for this cycle
        //* move lines into upcoming coordinate
        setLinesAndBlink();
        const initDelay = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 2400);
        const initDuration = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(800, 4000);
        const initSoundDelay = initDelay + initDuration - 1600;
        // user timer here because the delay could be long
        CRapp.jwstSoundTimer = setTimeout(()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                "executing",
                "longTaskLow",
                "beepX3Downer"
            ]), 0, 0, 0, 0.25); // ? SOUND <<<<<<<<<<<<<<<<<<<<
        }, initSoundDelay);
        d3.select(target)// .style('opacity', 0.45) // <<<<<<<<<<<<< INIT Opacity
        .transition().delay(initDelay).duration(initDuration).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)())//* moving target into new coordinate
        .attr("transform", `translate(${coordinate}) rotate(0) scale(${(0, $771006645357c94f$export$51e16a050e2bf069)(0.6, 1.4)})`).style("opacity", 0.4).on("end", ()=>{
            // * target now in new location, lines start showing
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("deployed", 0, 0, 0, 0.25); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            // blink target
            target.style.opacity = 1;
            (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(target);
            // blink lines
            targetLines.setAttribute("opacity", 1);
            (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(targetLines); // blink the group of lines
            d3.select(targetLineH).transition().delay(350).duration(150).attr("opacity", 0);
            d3.select(targetLineV).transition().delay(350).duration(150).attr("opacity", 0);
            // inner targets: change to new matching color
            const newColor = `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.nonDarkColorCssVarNames)})`; // ! either primary or secondary color here
            targetInnerH.setAttribute("fill", newColor); // ! either primary or secondary color here
            if (showTargetLocking) targetInnerV.setAttribute("fill", newColor);
            // * START: fade in and out
            d3.select(targetStar).attr("transform", `translate(${coordinate}) rotate(${starRotation}) scale(${(0, $771006645357c94f$export$51e16a050e2bf069)(0.6, 1.4)})`).transition().delay(400).duration(700).on("start", ()=>{
                (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(targetStar);
            }).transition().duration(1000).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)()).style("opacity", (0, $771006645357c94f$export$51e16a050e2bf069)(0.6, 1.2)).transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(900, 3000)).duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(800, 3000)).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)()).style("opacity", 0);
        }).transition() // * LOCKING TARGET !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        .delay(1000 * targetLockingFactor).duration(9000 * targetLockingFactor).on("start", ()=>{
            if (!showTargetLocking) return; // ! <===== skipping if not showing target locking
            // * enter the outer target by blinking it
            targetOuter.setAttribute("opacity", 1);
            (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(targetOuter);
            // * INNER V TARGET: set to smallest scale
            targetInnerV.setAttribute("transform", "scale(0.1)");
            // * BOTH Inner TARGETs ==============================================
            // ! set to small scale & fade in
            d3.selectAll([
                targetInnerV,
                targetInnerH
            ]).transition().delay(1200).duration(1200).ease(d3.easeBackInOut.overshoot(4)).attr("transform", "scale(0.6)").attr("opacity", "1").on("start", (d, i)=>{
                // * inner targets start scaling to the same size
                if (i == 0) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                    "warningHigh",
                    "warningLow"
                ]), 0.75, 0, 0, 0.3); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            })// ! set to smaller scale & rotate
            .transition().delay(400).duration(1500).ease(d3.easeBackInOut.overshoot(4)).attr("transform", `scale(0.5) rotate(${(0, $771006645357c94f$export$a13251365167ea49)() * (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 10) * 90})`).on("end", function() {
                this.setAttribute("transform", "scale(0.5)"); // reset rotate back to zero, but keeping the scale
            })// ! set scale to normal
            .transition().delay(400).duration(1500).ease(d3.easeBackIn.overshoot(4)).attr("transform", `scale(1)`);
            // * OUTER TARGET ==============================================
            // ! expanding to bigger // from normal to big
            d3.select(targetOuter).attr("transform", "scale(1)").transition().delay(400).duration(1500).ease(d3.easeBackInOut.overshoot(6)).attr("transform", "scale(1.2)").attr("opacity", "1").on("start", ()=>{
                //* out targets scale outwards
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                    "affirmative",
                    "warningLow",
                    "deployed",
                    "exitTask",
                    "executing"
                ]), 0.5, 0, 0, 0.4); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            })// ! expanding to biggest & rotate
            .transition().delay(1200).duration(1500).ease(d3.easeBackInOut.overshoot(6)).attr("transform", `scale(1.3) rotate(${(0, $771006645357c94f$export$a13251365167ea49)() * (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 10) * 90})`).on("start", ()=>{
                // * both inner & outer targets start rotating
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0, 0.2, 0, 0.15, 0.9); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            }).on("end", function() {
                this.setAttribute("transform", "scale(1.3)"); // reset rotate back to zero, but keeping the scale
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Upper", 0, 0, 0, 0.5); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            })// ! set scale back to normal
            .transition().delay(400).duration(1500).ease(d3.easeBackInOut.overshoot(6)).on("start", ()=>{
                // * scale up image a bit from center of coordinate >>>>>>>>>>>>
                const tmpBBox = imageNode.getBBox();
                imageNode.setAttribute("transform-origin", `${tmpBBox.x + coordinateX} ${tmpBBox.y + coordinateY}`);
                d3.select(imageNode).transition().delay(950).duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(4, 15) * 100).ease(d3.easeBackOut).attr("transform", `scale(1.${(0, $771006645357c94f$export$dd918e842b943f50)((0, $771006645357c94f$export$24d4d9f7cb1f68df)(5, 17), 2)})`);
                // * inner & outer targets locked in
                CRapp.jwstSoundTimer = setTimeout(()=>{
                    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                        "exitTask",
                        "affirmative",
                        "beepX3Upper",
                        "executing"
                    ]), 0, 0, 0, 0.3); // ? SOUND <<<<<<<<<<<<<<<<<<<<     
                // don't use delay because it's a long delay. Use cancellable timer instead
                }, 1100);
            }).attr("transform", `scale(1)`).on("end", ()=>{
                // ! blink all target elements
                (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(targetInnerV);
                (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(targetInnerH);
                (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(targetOuter);
                d3.select(targetStar).interrupt().style("opacity", 0).transition().duration(800).style("opacity", 1);
                // outer target: blinking while changing color
                // ! either primary or secondary color here
                targetOuter.setAttribute("fill", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.nonDarkColorCssVarNames)})`);
                // ! OVERALL TARGET: rotate in 90x deg w/ offset by 45, with another random scale
                d3.select(target).transition("rotate1").duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(6, 12) * 100).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)()).attr("transform", `translate(${coordinate}) rotate(${(0, $771006645357c94f$export$a13251365167ea49)() * ((0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 2) * 90 + 45)}) scale(${(0, $771006645357c94f$export$51e16a050e2bf069)(0.6, 1.4)})`).on("start", ()=>{
                    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0, 0.4, 0, 0.13); // ? SOUND <<<<<<<<<<<<<<<<<<<< 
                }).on("end", ()=>{
                    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", 0, 0, 0, 0.25); // ? SOUND <<<<<<<<<<<<<<<<<<<< 
                });
            });
        })// .on('end', ()=>{
        //     if (!showTargetLocking) return; // ! <===== skipping if not showing target locking
        // })
        // ! TARGET: rotate to a random 90x deg & scale while keeping current coordinate
        .transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(50, 600)).duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(6, 20) * 100).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)()).on("start", ()=>{
            // * change IMAGE filter
            const rnd = Math.random();
            let imgFilter = "";
            if (rnd < 0.15) imgFilter = `invert(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(7, 10) * 0.1})`;
            if (rnd < 0.3) imgFilter = `saturate(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 7) * 0.1})`;
            else if (rnd < .45) imgFilter = `saturate(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(11, 20) * 0.1}) brightness(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(11, 20) * 0.1})`;
            else if (rnd < .6) imgFilter = "blur(8px)";
            else if (rnd < .75) imgFilter = `hur-rotate(${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(40, 330)})`;
            imageNode.style.filter = imgFilter;
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortBeep", 0, 0, 0, 0.3); // ? SOUND <<<<<<<<<<<<<<<<<<<<
        }).attr("transform", `translate(${coordinate}) rotate(${deg}) scale(${(0, $771006645357c94f$export$51e16a050e2bf069)(0.2, 1.4)})`).on("end", ()=>{
            if (!showTargetLocking) return; // ! <===== skipping if not showing target locking
            // * >>>>> STAR blinking after TARGET rotates & scales
            (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(targetStar);
        }).transition().duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 16) * 100).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)()).attr("transform", `translate(${coordinate}) rotate(${Math.random() < 0.5 ? deg : 0}) scale(${finalScale})`).on("start", ()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0, 0, 0, 0.2, 0.85); // ? SOUND <<<<<<<<<<<<<<<<<<<<
        }).on("end", ()=>{
            if (!showTargetLocking) return; // ! <===== skipping if not showing target locking
            // * >>>> set outer target to have the same color as the inner targets
            targetOuter.setAttribute("fill", targetInnerH.getAttribute("fill"));
            targetOuter.setAttribute("opacity", 0.7);
            // * reset image scale <<<<<<<<<<<<<<
            d3.select(imageNode).transition().delay(2000).duration((0, $771006645357c94f$export$24d4d9f7cb1f68df)(12, 25) * 100).ease(d3.easeCubicInOut).attr("transform", "scale(1)").on("start", ()=>{
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("negative", 0.3, 0, 0, 0.15, 0.9); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            }).on("end", ()=>{
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Down", 0, 0, 0, 0.3); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            });
        }).transition().delay((0, $771006645357c94f$export$24d4d9f7cb1f68df)(2500, 7000)).duration(3700) // duration should be longer than the animation dur within
        .on("start", ()=>{
            if (!showTargetLocking) return; // ! <===== skipping if not showing target locking
            // * >>>>> reset outer target & inner V target: by fading them out
            d3.selectAll([
                targetInnerV,
                targetOuter
            ]).transition().delay(()=>{
                return 100 * (0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 8); // max 800ms
            }).duration(()=>{
                return 100 * (0, $771006645357c94f$export$24d4d9f7cb1f68df)(4, 10); // max 1000ms
            }).attr("opacity", 0).on("start", ()=>{
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortBeep", 0, 0, 0, 0.2); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            });
            // * >>>>> reset STAR's opacity to 0
            d3.select(targetStar).transition().duration(1200).style("opacity", 0);
        // total duration within is 1800ms ???
        }).on("end", ()=>{
            remainingCycles--;
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //* huggy KOALA reference 
            if (remainingCycles == 0) delete document.documentElement.dataset.huggy;
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Downer", 0, 0, 0, 0.3); // ? SOUND <<<<<<<<<<<<<<<<<<<<
            // * reset rotation only back to zero, to avoid rotation animation when translate to the new coordinate in the next cycle
            // -- use pre-calculated "finalScale" to avoid sudden scale change
            target.setAttribute("transform", `translate(${coordinate}) rotate(0) scale(${finalScale})`);
            if (remainingCycles == 0) {
                // console.log('scanning cycle ended on this image ==================');
                // ! to do -- show full target -- make sure inner & outer colors are primary-secondary opposite
                target.style.opacity = 0;
                $44a29584ad670e34$var$jwstImageExitAnimation("restart");
            } else {
                (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(target, "blink1");
                scanningCycle();
            }
        // ! DEV ... tmp reset
        // targetOuter.setAttribute('opacity',0);
        // targetInnerV.setAttribute('opacity',0);
        // targetOuter.style.opacity = null;
        // targetInnerV.style.opacity = null;
        });
    };
    scanningCycle();
    function setLinesAndBlink() {
        // random color
        const newColor = `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.nonDarkColorCssVarNames)})`;
        targetLineV.setAttribute("stroke", newColor);
        targetLineH.setAttribute("stroke", newColor);
        // random stroke-dasharray
        const newDasharray = `${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(6, 40)} ${(0, $771006645357c94f$export$de12a21935b7f164)([
            0,
            (0, $771006645357c94f$export$24d4d9f7cb1f68df)(6, 40)
        ])}`;
        targetLineV.setAttribute("stroke-dasharray", newDasharray);
        targetLineH.setAttribute("stroke-dasharray", newDasharray);
        // random stroke-width
        const newWidth = Math.random() < 0.5 ? (0, $771006645357c94f$export$24d4d9f7cb1f68df)(4, 10) : (0, $771006645357c94f$export$24d4d9f7cb1f68df)(30, 100); // think or thick
        targetLineV.setAttribute("stroke-width", newWidth);
        targetLineH.setAttribute("stroke-width", newWidth);
        // prep lines opacity
        const newInitOpacity = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(3, 8) * 0.1;
        targetLineV.setAttribute("opacity", newInitOpacity);
        targetLineH.setAttribute("opacity", newInitOpacity);
        targetLines.setAttribute("opacity", 1);
        // different duration for each line's motion
        const durH = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(100, 1200);
        const durV = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(100, 1200);
        const durMax = Math.max(durH, durV);
        let durDelay = 0;
        if (durH > durV) durDelay = Math.abs(durH - durV);
        // * starting ################################################
        // move lines to coordinates. 
        // this line has shorter duration, so just do the movement on coordinates only.
        // the other line will continue withe the rest of animation sequence
        d3.select(targetLineH).transition().duration(durH).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)()).attr("y1", areaBox.y + coordinateY) // move to coordinate
        .attr("y2", areaBox.y + coordinateY);
        d3.select(targetLineV).transition().duration(durV).ease((0, $a2757c1cf7e9a697$export$f681ad6169264fc7)()).on("start", ()=>{
            d3.select(targetLines).transition().duration(durMax) // fade out the group of lines while moving to coordinate
            .attr("opacity", 0.5);
        }).attr("x1", areaBox.x + coordinateX) // move to coordinate
        .attr("x2", areaBox.x + coordinateX).transition().delay(150 + durDelay).duration(1500).on("start", ()=>{
            targetLines.setAttribute("opacity", 0); // hide the group of lines instantly
        }).on("end", ()=>{
            // prep each line to have higher opacity than init
            // will then blink when the target moves into the coordinate
            const brighterOpacity = (0, $771006645357c94f$export$51e16a050e2bf069)(newInitOpacity, 1);
            targetLineV.setAttribute("opacity", brighterOpacity);
            targetLineH.setAttribute("opacity", brighterOpacity);
        });
    }
}
function $44a29584ad670e34$var$stopTargetScan() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // const target =  document.querySelector('#msdContainer2 > svg #target'); // children: targetInnerV, targetInnerH, targetOuter
    // const targetStar =  document.querySelector('#msdContainer2 > svg #targetStar');
    // const targetLines =  document.querySelector('#msdContainer2 > svg #targetStar'); // targetLineV, targetLineH
    const jwstGroup = document.querySelector("#msdContainer > svg #jwstImageGroup");
    const imageNode = jwstGroup.querySelector("#jwstImage_placeholder + image");
    const target = document.querySelector("#msdContainer2 > svg #target");
    const targetOuter = target.querySelector("#targetOuter");
    const targetInnerH = target.querySelector("#targetInnerH");
    const targetInnerV = target.querySelector("#targetInnerV");
    const targetStar = document.querySelector("#msdContainer2 > svg #targetStar");
    const targetLines = document.querySelector("#msdContainer2 > svg #targetLines");
    const targetLineH = targetLines.querySelector("#targetLineH");
    const targetLineV = targetLines.querySelector("#targetLineV");
    // d3.selectAll('#msdContainer2 > svg [id^="target"]').interrupt();
    d3.selectAll([
        jwstGroup,
        imageNode,
        targetStar,
        target,
        targetInnerH,
        targetInnerV,
        targetOuter,
        targetLines,
        targetLineH,
        targetLineV
    ]).interrupt();
    target.style.visibility = "hidden";
    targetLines.style.visibility = "hidden";
    targetStar.style.visibility = "hidden";
}
function $44a29584ad670e34$var$loadNewJwstImage() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    //* make sure the new image has been preloaded, and preload next iteration's image
    //* if not yet preloaded, use one that's been preloaded instead. And make sure it's different from the current one if possible.
    //*
    let newImageIndex = CRapp.jwstNextImgIndex;
    if ((0, $956ef7417b7dd641$export$9ae4d28a04c72663)(newImageIndex)) {
        // plan for next iteration
        CRapp.jwstNextImgIndex = (0, $771006645357c94f$export$3c5f89dae98e900b)(CRapp.jwstImg.fileRef.length);
        if (CRapp.jwstNextImgIndex == newImageIndex) CRapp.jwstNextImgIndex = (CRapp.jwstNextImgIndex + 1) % CRapp.jwstImg.fileRef.length;
        (0, $956ef7417b7dd641$export$4ab67db1ad2f21ae)(CRapp.jwstNextImgIndex); // preload next iteration's image
    } else {
        // new image has not been reloaded. use one that's been preloaded instead. And make sure it's different from the current one if possible.
        let tmpIndex = (0, $771006645357c94f$export$3c5f89dae98e900b)(CRapp.preloadedIndexes.length);
        if (tmpIndex == CRapp.jwstCurrentImgIndex) tmpIndex = (tmpIndex + 1) % CRapp.preloadedIndexes.length; // make sure new index is different from current one
        newImageIndex = tmpIndex;
    }
    CRapp.jwstCurrentImgIndex = newImageIndex;
    // ========================================================================
    //* create new SVG image node & load new image into it.
    //* if exiting svg image node is present, just reuse it
    const imageNode = document.querySelector("#msdContainer svg #jwstImage_placeholder + image");
    if (imageNode == null) {
        // create new SVG image node
        const refNode = document.querySelector("#msdContainer svg #jwstImage_placeholder");
        const refNodeBBox = refNode.getBBox();
        var svgImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
        svgImage.setAttributeNS(null, "x", refNodeBBox.x);
        svgImage.setAttributeNS(null, "y", refNodeBBox.y);
        svgImage.setAttributeNS(null, "width", refNodeBBox.width);
        svgImage.setAttributeNS(null, "height", refNodeBBox.height);
        svgImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", CRapp.jwstImg.fileRef[newImageIndex]);
        // svgImage.setAttributeNS(null, 'visibility', 'visible');
        //* add image node next to the ref node
        refNode.parentNode.insertBefore(svgImage, refNode.nextSibling);
    } else // reuse current SVG image node
    imageNode.setAttributeNS("http://www.w3.org/1999/xlink", "href", CRapp.jwstImg.fileRef[newImageIndex]);
    (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("loading image from NASA’s James Webb Space Telescope...");
}
/**
 * image is present already, now fade it out
 */ function $44a29584ad670e34$var$jwstImageExitAnimation(restart = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const jwstGroup = document.querySelector("#msdContainer > svg #jwstImageGroup");
    const maskNode = jwstGroup.querySelector("mask");
    const roundCornerMask = maskNode.querySelector("#jwstMaskRef");
    const imageNode = jwstGroup.querySelector("#jwstImage_placeholder + image");
    // roundCornerMask.style.transition = 'opacity 0.3s';
    // roundCornerMask.style.opacity = 0;
    d3.select(roundCornerMask).interrupt().transition().duration(400).style("opacity", 0).on("end cancel interrupt", ()=>{
        if (restart === "restart") $44a29584ad670e34$var$jwstImageEnterAnimation();
        else {
            if (imageNode != null) imageNode.remove();
            maskNode.querySelectorAll("rect").forEach((element)=>{
                element.remove();
            });
            roundCornerMask.style.opacity = 0;
        }
    });
}
function $44a29584ad670e34$var$jwstImageEnterAnimation() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    $44a29584ad670e34$var$loadNewJwstImage();
    // prep init
    const jwstGroup = document.querySelector("#msdContainer > svg #jwstImageGroup");
    const maskNode = jwstGroup.querySelector("mask");
    const roundCornerMask = maskNode.querySelector("#jwstMaskRef");
    roundCornerMask.style.opacity = 0;
    const refBBox = jwstGroup.querySelector("#jwstImage_placeholder").getBBox();
    let remainingHeight = refBBox.height;
    let currentY = refBBox.y;
    const svgns = "http://www.w3.org/2000/svg";
    const imageNode = jwstGroup.querySelector("#jwstImage_placeholder + image");
    // !!! watch out -- firefox: getBBox() error or invalid data when used on mask elements
    //* make sure init settings are in place....
    maskNode.querySelectorAll("rect").forEach((element)=>{
        element.remove();
    });
    imageNode.style.filter = "blur(32px)";
    imageNode.style.transition = "none";
    document.documentElement.dataset.jwst = "";
    // * creating mini MASK with "TWO" styling options #################################################################################
    let removeAllMaskRectsAfterEnterAnimation = true; // for GRID effect only
    if (Math.random() < 0.5) {
        // * LINE-STRIPS EFFECT
        // * creating mini MASK / long wide RECTS with random height
        const rectHeight = Math.random() < .5 ? ()=>{
            return (0, $771006645357c94f$export$24d4d9f7cb1f68df)(90, 250);
        } : ()=>{
            return (0, $771006645357c94f$export$24d4d9f7cb1f68df)(10, 70);
        };
        while(remainingHeight > 0){
            let newHeight = rectHeight(); // more rects
            // let newHeight = randomIntRange(10,70); // more rects
            // let newHeight = randomIntRange(50,200);
            if (newHeight > remainingHeight) {
                newHeight = remainingHeight;
                remainingHeight = 0;
            } else remainingHeight -= newHeight;
            let newRect = document.createElementNS(svgns, "rect");
            newRect.setAttribute("x", refBBox.x);
            newRect.setAttribute("y", currentY);
            newRect.setAttribute("width", refBBox.width);
            newRect.setAttribute("height", newHeight);
            newRect.setAttribute("fill", "#fff");
            newRect.setAttribute("rx", 0);
            currentY += newHeight;
            //* add newRect inside MASK
            maskNode.appendChild(newRect);
            newRect.style.opacity = 0;
        }
    } else {
        // * GRID EFFECT
        // * creating mini MASK / little squares in  7 x 4 grid  (for future ref, can also use 9 x 5, though that's a lot of rects)
        removeAllMaskRectsAfterEnterAnimation = Math.random() < 0.5; // if false, some mask rects will stay remain during target scanning cycle
        const rectWidth = refBBox.width / 7;
        const rectHeight1 = refBBox.height / 4;
        for(let col = 0; col < 7; col++)for(let row = 0; row < 4; row++){
            let newRect1 = document.createElementNS(svgns, "rect");
            newRect1.setAttribute("x", refBBox.x + rectWidth * col);
            newRect1.setAttribute("y", refBBox.y + rectHeight1 * row);
            newRect1.setAttribute("width", rectWidth);
            newRect1.setAttribute("height", rectHeight1);
            newRect1.setAttribute("fill", "#fff");
            // newRect.setAttribute("rx", 0);
            //* add newRect inside MASK
            maskNode.appendChild(newRect1);
            newRect1.style.opacity = 0; // init condition
        }
    }
    // ! ===== chain up the init startup animation to jwstGroup for Enter & Exit, so that it can be interrupted easily
    //TODO ==== need to double check if animation is interrupted prematurely !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    d3.select(jwstGroup).transition().delay(200).duration(1750) // * delay start ======== for animation time sequence sync
    .on("start", ()=>{
        // randomize transition & animation settings for each MASK / rects 
        maskNode.querySelectorAll("rect").forEach((element)=>{
            element.style.transition = `opacity ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(100, 1000)}ms ${(0, $771006645357c94f$export$de12a21935b7f164)([
                "linear",
                "ease",
                "ease-in",
                "ease-out"
            ])} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 600)}ms`;
            if (removeAllMaskRectsAfterEnterAnimation) element.style.opacity = 1;
            else element.style.opacity = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 5) * 0.2; // opacity: 0.4 to 1 q 0.2
        });
        imageNode.style.filter = "none";
        imageNode.style.transition = "filter 1.4s ease 0.8s"; // slight delay to start removing blur filter effect
        CRapp.jwstSoundTimer = setTimeout(()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0, 0, 0, (0, $771006645357c94f$export$de12a21935b7f164)([
                0.15,
                0.3,
                0.5
            ]), (0, $771006645357c94f$export$de12a21935b7f164)([
                1,
                0.93,
                0.85
            ])); //* for image mask effect are dissolving
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0.37, 0, 0, (0, $771006645357c94f$export$de12a21935b7f164)([
                0.11,
                0.17,
                0.29
            ]), (0, $771006645357c94f$export$de12a21935b7f164)([
                1,
                0.93,
                0.85
            ]));
        }, 650);
    }).on("end", ()=>{
        //* at the end of "enter" animation, clean up mask rects, so that a complete image is fully visible without artifacts
        // show complete image by disabling the mask, to avoid thin links between the mask-rects.
        //     maskNode.style.display = 'none';  // ! <==  firefox has trouble with this, resulting incomplete unmasking
        //* Workaround: remove all rects inside the mask, except for the 1st one. And match this rect to the full mask area.
        //  -- removing rects is also good for the dom tree
        maskNode.querySelectorAll("rect").forEach((element)=>{
            if (removeAllMaskRectsAfterEnterAnimation) {
                roundCornerMask.style.opacity = 1;
                element.remove();
            }
        });
        //* logging out image info........
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(CRapp.jwstImg.description[CRapp.jwstCurrentImgIndex], null, true);
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //* huggy KOALA reference 
        if (CRapp.jwstCurrentImgIndex == CRapp.jwstHuggyIndex) document.documentElement.dataset.huggy = "";
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }).transition().delay(1000).duration(0).on("start", ()=>{
        $44a29584ad670e34$var$startTargetScan(); //* <<<<<<<<<<<<<<<<< <<<<<<<<<<<<<<<< <<<<<<<<<<<<<<<<<<<<
    });
}
function $44a29584ad670e34$export$f0abfad23975ce08() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    //todo -- blink the JWST BTN. disable buffer time. disable red alert too?
    //todo -- show image's reference text description
    //todo -- load images, auto slideshow
    //todo -- when prepping JPGs, add vignette
    //todo -- make mask to have round corner near top left
    // ! DEV only  *********************************
    // document.querySelector('#msdContainer > svg #ringClock').style.opacity = 0.3;
    // ! DEV only  *********************************
    // prep init
    const jwstGroup = document.querySelector("#msdContainer > svg #jwstImageGroup");
    const maskNode = jwstGroup.querySelector("mask");
    const roundCornerMask = maskNode.querySelector("#jwstMaskRef");
    const ringClock = document.querySelector("#msdContainer > svg #ringClock");
    const rcc = (0, $a2757c1cf7e9a697$export$2a9fee5f37bfd138)(ringClock); // ringClockCenter {x, y}
    const rccTa = `translate(${rcc.x}px, ${rcc.y}px)`; // !!! << need "px"
    const rccTb = `translate(-${rcc.x}px, -${rcc.y}px)`;
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //* huggy KOALA reference 
    delete document.documentElement.dataset.huggy; // always reset here for starting and exiting
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // * toggle to jwst status *********************
    if (CRapp.jwstStatus === true) {
        //* SET IT OFF NOW... ========================================================================
        CRapp.jwstStatus = false;
        clearTimeout(CRapp.jwstSoundTimer);
        CRapp.jwstSoundTimer = null;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Downer");
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0.3);
        (0, $a2757c1cf7e9a697$export$347205875fe8a919)();
        $44a29584ad670e34$var$jwstImageExitAnimation();
        (0, $a2757c1cf7e9a697$export$d620722169cc0b8f)("normal");
        (0, $a2757c1cf7e9a697$export$6257e3bc44d03c80)("normal");
        // * reset ringClock position
        ringClock.classList.remove("jwst");
        d3.select(ringClock).transition().delay(250).duration(800).ease(d3.easeBackInOut).style("opacity", 1).style("transform", `${rccTa} rotate(0) scale(1) ${rccTb}`) // ! <<< default transform
        .on("end cancel interrupt", function() {
            this.style.transition = null; // reset inline css transition
            this.style.transform = `${rccTa} rotate(0) scale(1) ${rccTb}`; // ! <<< default transform
        });
        delete document.documentElement.dataset.jwst;
        // stop scanning cycles
        $44a29584ad670e34$var$stopTargetScan();
        // remove residual rect mask that might be left due to grid effect
        maskNode.querySelectorAll("rect").forEach((element)=>{
            element.remove();
        });
    } else {
        //* SHOW IT.... ========================================================================
        CRapp.jwstStatus = true;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0, 0, 0, 0.5);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("executing", 0.15, 0, 0, 0.4);
        // prep init ====
        d3.select(roundCornerMask).interrupt();
        roundCornerMask.style.opacity = 0;
        //init target & lines
        const msd2 = document.querySelector("#msdContainer2 > svg");
        const target = msd2.querySelector("#target");
        const targetLines = msd2.querySelector("#targetLines");
        const targetStar = msd2.querySelector("#targetStar");
        target.style.visibility = "visible";
        target.style.opacity = 0;
        targetLines.style.visibility = "visible";
        targetLines.style.opacity = 0;
        targetStar.style.visibility = "visible";
        targetStar.style.opacity = 0;
        // home ui adjustments
        (0, $a2757c1cf7e9a697$export$6257e3bc44d03c80)("minimized");
        (0, $a2757c1cf7e9a697$export$d620722169cc0b8f)("minimized");
        // animate ringClock
        const jwstRingClockTransform = ringClock.dataset.jwstRingClockTransform;
        // ! note: for Firefox & Safari: css transition won't react to svg attribute changes
        // ! issue: ringClock's css transform can be in use at the very beginning during app start
        //* solution: use d3 animation to avoid conflict
        d3.select(ringClock).style("transition", "none") // disable css's transition via inline
        .transition().delay(80).duration(600).ease(d3.easeBackInOut.overshoot(1.05)).style("opacity", 0.55).style("transform", jwstRingClockTransform).on("end cancel interrupt", function() {
            this.style.transition = null; // reset inline css transition
            this.classList.add("jwst"); // !!!!! <<< this class will ensure the ringClock position is lock to top left corner
        // !!!! ex: while app is init & user goes into jwst, the app init can later reset ringClock's transform
        // !!!!     resulting ringClock to be in default location with large size
        });
        // =================== setup & load new image
        $44a29584ad670e34$var$jwstImageEnterAnimation();
    }
}
function $44a29584ad670e34$export$63951974ec882883(huggy) {
    (0, $a2757c1cf7e9a697$export$c9e8cccd464b5a6c)(huggy); // can't set it during ui init because huggy is set to display=none via css for safe guarding
    huggy.style.opacity = 0.35;
    huggy.setAttribute("fill", "#fff");
    (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(huggy, "blink2");
    const obfuscatingText1 = String.fromCharCode(75); // K
    const obfuscatingText2 = String.fromCharCode(97); // a
    d3.select(huggy).transition().delay(500).duration(1000).ease(d3.easeCubicOut).on("start", ()=>{
        huggy.style.opacity = 0.8;
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("you’ve found the  " + obfuscatingText1 + " o " + obfuscatingText2 + " l " + obfuscatingText2 + " ! !  " + "Con" + String.fromCharCode(103) + "rats ~"); // = "you've found the K o a l a ! ! Congrats ~""
    }).attr("transform", "scale(2)").on("end", ()=>{
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("A l l   h a i l   t h e   g r e a t    " + obfuscatingText1 + " o " + obfuscatingText2 + " l " + obfuscatingText2 + "  ! ! ! ! !") // = "All hail the great Koala ! ! ! ! !"
        ;
    }).transition().delay(800).duration(400).attr("transform", "scale(1)").on("end", ()=>{
        huggy.style.opacity = null;
        huggy.setAttribute("fill", "#666");
    });
} // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!







function $ef363846f0e7e61f$export$ac98d773e506b9d(force) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.bufferTimeStatus = !CRapp.bufferTimeStatus;
    const buffTimeHomeBtn = CRapp.svg1.querySelector("#homeBtn1c tspan:nth-child(2)");
    if (CRapp.bufferTimeStatus) {
        // turning effects ON
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningHigh", 0, 0, 0, 0.6);
        document.documentElement.dataset.bufferTime = "";
        // set frame BUFFER TIME btn to blinking
        // buffTimeHomeBtn.textContent = 'QUOTA • OFF';
        buffTimeHomeBtn.textContent = "ZERO QUOTA";
        // set ON related tasks
        CRapp.bufferTimeCountdown = 60;
        // set reference variables & init styles
        const redRing = CRapp.svg2.querySelector("#bufferTimeRings1");
        const bufferTimeText = CRapp.svg2.querySelector("#bufferTimeNumber");
        const bufferTimeTspan = bufferTimeText.querySelector("tspan");
        const redRingUnitTickLength = 43.25; // const redRingCircumference = 2595;
        redRing.style.strokeDasharray = "0 2595";
        const ring3 = CRapp.svg2.querySelector("#bufferTimeRings3");
        const ring4 = CRapp.svg2.querySelector("#bufferTimeRings4");
        ring3.style.strokeDashoffset = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-6000, 6000); // random init ring rotation
        ring4.style.strokeDashoffset = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-6000, 6000);
        const extraTicks = 1;
        let extraTicksRemaining = extraTicks; // when countdown at 60, keep a number of extra ticks. (init num and restart num can be different)
        const warningTextPrefix = [
            "warning",
            "warning",
            "warning",
            "warning",
            "hey!",
            "super warning",
            "final warning",
            "To all crews",
            "LD crew",
            "Per the captain",
            "special event",
            "To beta-shifters",
            "to all holonovel writers"
        ];
        const warningTextPostfix = [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "!",
            " !!",
            "...!!!",
            " seriously",
            ". shut up!",
            ", m’kay",
            ". absolutely zero.",
            ", except for androids",
            ", unless you’re Mike",
            ", not even for captains"
        ];
        const setBufferTimeTextTransform = (num)=>{
            bufferTimeText.setAttribute("transform", `translate(${CRapp.bufferTimeTextOrigin.x} ${CRapp.bufferTimeTextOrigin.y}) scale(1 0.85) ` + `translate(${-1 * CRapp.bufferTimeTextOrigin.x + CRapp.bufferTimeTextWidthOffset[num]} -${CRapp.bufferTimeTextOrigin.y})`);
        };
        bufferTimeTspan.textContent = "60";
        setBufferTimeTextTransform(60);
        CRapp.bufferTimeTimer = setInterval(()=>{
            // * keep at 00 for another 5 seconds
            if (CRapp.bufferTimeCountdown < -5) {
                CRapp.bufferTimeCountdown = 60; //*  restarting........
                extraTicksRemaining = extraTicks; // !!   <==== give extra ticks on subsequent new loops
            }
            let countdownNum = CRapp.bufferTimeCountdown < 0 ? 0 : CRapp.bufferTimeCountdown;
            // * update number text
            const displayedNumber = (0, $771006645357c94f$export$dd918e842b943f50)(countdownNum, 2);
            setBufferTimeTextTransform(countdownNum);
            bufferTimeTspan.textContent = displayedNumber;
            // red ring animation calc
            const lengthX = (60 - countdownNum) * redRingUnitTickLength;
            redRing.style.strokeDasharray = `${2595 - lengthX} ${lengthX}`;
            redRing.style.strokeDashoffset = 649 - lengthX;
            // outer rings
            ring3.style.strokeDashoffset = 1002 - 4009 / 60 * countdownNum;
            ring4.style.strokeDashoffset = 1221 - 4078 / 60 * countdownNum;
            // * blinks when number is less than 11
            if (CRapp.bufferTimeCountdown == 60) {
                if (extraTicksRemaining == extraTicks) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("executing");
            } else if (CRapp.bufferTimeCountdown >= 16) {
                const newVolume = 1 - CRapp.bufferTimeCountdown / 60 * .82;
                if (CRapp.bufferTimeCountdown % 10 == 0) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Upper", 0, 0, 0, newVolume);
                else (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Down", 0, 0, 0.08, Math.max(newVolume, 0.6));
            } else {
                let blinkClass;
                if (CRapp.bufferTimeCountdown >= 6) {
                    blinkClass = "blink1";
                    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Up");
                } else if (CRapp.bufferTimeCountdown >= 1) {
                    blinkClass = "blink2";
                    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Up");
                } else {
                    blinkClass = "blink3";
                    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                        "processing",
                        "warningHigh"
                    ]));
                }
                ring4.classList.add(blinkClass);
                if (CRapp.bufferTimeCountdown < 1) {
                    ring3.classList.add(blinkClass);
                    // random ring rotating
                    ring3.style.strokeDashoffset = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-6000, 6000);
                    ring4.style.strokeDashoffset = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-6000, 6000);
                }
                bufferTimeTspan.classList.add(blinkClass);
                setTimeout(()=>{
                    bufferTimeTspan.removeAttribute("class");
                    ring3.removeAttribute("class");
                    ring4.removeAttribute("class");
                }, 600);
            }
            if (countdownNum % 10 == 0) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`${(0, $771006645357c94f$export$de12a21935b7f164)(warningTextPrefix)} • No Buffer Time granted${(0, $771006645357c94f$export$de12a21935b7f164)(warningTextPostfix)}`, "timePrefix");
            if (extraTicksRemaining > 0) extraTicksRemaining--;
            else --CRapp.bufferTimeCountdown;
        }, 1000);
    } else {
        // turning effects OFF
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask");
        delete document.documentElement.dataset.bufferTime;
        // set OFF related tasks
        buffTimeHomeBtn.textContent = "QUOTA • ON";
        // turn off interval countdown timer ========
        clearInterval(CRapp.bufferTimeTimer);
        CRapp.bufferTimeTimer = null;
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Buffer Time Quota Restored", "timePrefix");
    }
}






function $6d58630e4469e477$var$toggleYouTubeMenu(force, mute = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    let toShowMenu;
    if (force === true) toShowMenu = true;
    else if (force === false) toShowMenu = false;
    else toShowMenu = !("ytMenu" in document.documentElement.dataset);
    if (toShowMenu) {
        document.documentElement.dataset.ytMenu = "";
        if (mute !== "mute") (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("notification", 0, 0, 0, 0.25);
    } else {
        delete document.documentElement.dataset.ytMenu;
        if (mute !== "mute") (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", 0, 0, 0, 0.3);
    }
}
/**
 * Creating iFrame youtube embedded video. Two different methods used to create he iframe video:
 * 
 * * If YouTubeAPI is successfully loaded, the iframe+player will be generated via this api.
 *  -- The entire player can be controlled vis js, including volume, start/pause, etc.
 * * If YouTubeAPI is not loaded for some reason, the iframe will be created vis js code with youtube's embed url as src.
 *  -- Volume & player state CANNOT be controlled via js afterwards.
 * 
 * 
 * @param {*} ytMediaId -- a youtube video id or playlist id
 */ function $6d58630e4469e477$var$addYouTubeVideo(ytMediaId) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // Safari bug: video inside foreignObject is not positioned nor scaled correctly. Fine on Firefox & Chrome
    // ref -- https://stackoverflow.com/questions/61895287/wrong-position-of-video-element-inside-svg-foreignobject-on-safari
    // >>>> at the end, use html iframe overlay on svg. Don't use foreignObject for iframe
    // end any existing video first, if nay
    $6d58630e4469e477$var$endYouTubeVideo("mute");
    (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("YouTube Channel Opened: Establishing connection...");
    const ytRect = $6d58630e4469e477$export$365bebd2e24b0755();
    if (CRapp.videoBox.youTubeApiReady) {
        // insert a placeholder div that will be replaced by YT API with a new iFrame // * Volume can be adjusted via javascript
        const iFrame = document.createElement("div");
        iFrame.setAttribute("id", "ytIframe2");
        document.body.appendChild(iFrame);
        // add iframe via YT API
        const playerParam = {
            height: ytRect.height,
            width: ytRect.width,
            // videoId: ytMediaId,
            playerVars: {
                // 'modestbranding': 1, // hides small YouTube logo on the controller
                // 'color': 'red',  // 'red' or 'white'. If set to 'white', 'modestbranding' will be disabled, making YouTube logo visible
                // 'controls': 0, // hides controller, but the a YouTube will be visible
                "playsinline": 1,
                "loop": 1,
                "disablekb": 1,
                "rel": 0
            },
            events: {
                "onReady": CRapp.videoBox.youTube_onPlayerReady,
                "onStateChange": CRapp.videoBox.youTube_onPlayerStateChange
            }
        };
        if (ytMediaId.length < 12) // single video
        playerParam.videoId = ytMediaId;
        else {
            // playlist
            playerParam.playerVars.listType = "playlist";
            playerParam.playerVars.list = ytMediaId;
        }
        CRapp.videoBox.youTubePlayer = new YT.Player("ytIframe2", playerParam); // creating & inserting iframe+video via youtube api
    } else {
        // add iframe via plain javascript // * CANNOT control YT Volume
        const iFrame1 = document.createElement("iframe");
        if (ytMediaId.length < 12) // single video
        iFrame1.setAttribute("src", `https://www.youtube.com/embed/${ytMediaId}?autoplay=1&enablejsapi=1&origin=https://www.mewho.com&modestbranding=1&disablekb=1&playsinline=1&rel=0`);
        else // playlist  
        iFrame1.setAttribute("src", `https://www.youtube.com/embed/videoseries?list=${ytMediaId}&autoplay=1&enablejsapi=1&origin=https://www.mewho.com&modestbranding=1&loop=1&disablekb=1&playsinline=1&rel=0`);
        iFrame1.setAttribute("id", "ytIframe2");
        iFrame1.setAttribute("frameborder", "0");
        iFrame1.setAttribute("width", ytRect.width); // ! To avoid small YT controllers: Making size in half, then scaling up via css
        iFrame1.setAttribute("height", ytRect.height);
        iFrame1.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iFrame1.setAttribute("allowfullscreen", "");
        document.body.appendChild(iFrame1);
    }
    document.documentElement.dataset.ytWindow = "";
    $6d58630e4469e477$var$toggleYouTubeMenu(false);
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0.15, 0.3, 0, 0.2);
}
function $6d58630e4469e477$export$365bebd2e24b0755(dest = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    let destPlaceholder;
    let toDest;
    if (dest == "ship" || dest == "home") toDest = dest;
    else toDest = document.documentElement.dataset.pageState;
    if (toDest == "ship") // * On ship page, ytIframe AND videoBox/window (#yt_windowShip) will get moved around via css transform.
    // * This placeholder is positioned in a fixed location (outside of #yt_windowShip) in svg, for easy css referencing.
    destPlaceholder = CRapp.shipFrameDom.querySelector("#yt_placeholderShipFixed");
    else destPlaceholder = CRapp.homeContentDom.querySelector("#yt_placeholder");
    const ytPlaceholderRect = destPlaceholder.getBoundingClientRect();
    document.documentElement.style.setProperty("--ytIframeTop", ytPlaceholderRect.top + "px");
    document.documentElement.style.setProperty("--ytIframeLeft", ytPlaceholderRect.left + "px");
    document.documentElement.style.setProperty("--ytIframeWidth", ytPlaceholderRect.width + "px");
    document.documentElement.style.setProperty("--ytIframeHeight", ytPlaceholderRect.height + "px");
    return ytPlaceholderRect;
}
function $6d58630e4469e477$export$1f03644a907fa072() {
    const iframe = document.getElementById("ytIframe2");
    if (iframe != null) iframe.classList.add("hide");
}
function $6d58630e4469e477$export$835fa8e7389197b5() {
    const iframe = document.getElementById("ytIframe2");
    if (iframe != null) iframe.classList.remove("hide");
}
function $6d58630e4469e477$var$endYouTubeVideo(mute = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // hard reset
    delete document.documentElement.dataset.ytWindow;
    CRapp.videoBox.youTubePlayer = null;
    // remove the entire svg foreignObject node
    const iFrame = document.getElementById("ytIframe2");
    if (iFrame !== null) iFrame.remove();
    $6d58630e4469e477$var$toggleYouTubeMenu(false, "mute");
    if (mute !== "mute") {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0, 0, 0, 0.6);
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("YouTube Video Window Terminated As Requested");
    }
}
function $6d58630e4469e477$export$1036761be95cb4cc() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.homeContentDom.querySelector("#ytMenu #menuBg").style.fillOpacity = 1; // override some colorScheme's setting
    CRapp.homeContentDom.querySelector("#ytMenu #menuBg").style.strokeWidth = 0; // override some colorScheme's setting
    CRapp.homeContentDom.querySelector("#ytMenu #menuBg").style.filter = "none"; // override some colorScheme's setting
    const ytInput_placeholder = document.getElementById("ytInput_placeholder");
    const ytInput_placeholderBBox = ytInput_placeholder.getBBox();
    // set up an input box inside svg foreignObject node
    const foreignObj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObj.setAttribute("width", ytInput_placeholderBBox.width);
    foreignObj.setAttribute("height", ytInput_placeholderBBox.height);
    foreignObj.setAttribute("x", ytInput_placeholderBBox.x);
    foreignObj.setAttribute("y", ytInput_placeholderBBox.y);
    ytInput_placeholder.parentNode.insertBefore(foreignObj, ytInput_placeholder.nextSibling);
    ytInput_placeholder.style.display = "none";
    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("id", "ytTextInput");
    textInput.setAttribute("placeholder", "ENTER A YOUTUBE VIDEO/PLAYLIST ID HERE");
    textInput.style.width = ytInput_placeholderBBox.width + "px";
    textInput.style.height = ytInput_placeholderBBox.height + "px";
    // textInput.value = 'ENTER A YOUTUBE VIDEO/PLAYLIST ID HERE';
    textInput.style.pointerEvents = "auto";
    foreignObj.appendChild(textInput);
    textInput.addEventListener("keyup", (event)=>{
        if (event.key === "Enter") {
            let videoId = $6d58630e4469e477$var$youTubeGetID(textInput.value.trim());
            if (videoId.length > 0) $6d58630e4469e477$var$addYouTubeVideo(videoId);
        }
    });
    CRapp.homeContentDom.querySelector('[id^="btnS47Menu"]').onpointerdown = ()=>{
        $6d58630e4469e477$var$toggleYouTubeMenu();
    };
    CRapp.homeContentDom.querySelector('[id^="btnS47End"]').onpointerdown = ()=>{
        $6d58630e4469e477$var$endYouTubeVideo();
    };
    CRapp.shipFrameDom.querySelector('#frameShipMain [id^="btnS47Close"]').onpointerdown = ()=>{
        $6d58630e4469e477$var$endYouTubeVideo();
    };
    CRapp.homeContentDom.querySelector('[id^="ytMenu"]').onpointerdown = (e)=>{
        const btnId = e.target.getAttribute("id");
        // console.log('pointerDown on btn', e.target.getAttribute("id"));
        // youtube video id is currently 11 chars long, though YT might change this in the future. No guarantee.
        // Playlist id is much longer.
        // To validate if an id's video exists, check status 200 on http://gdata.youtube.com/feeds/api/videos/VIDEO_ID
        // Ref -- https://webapps.stackexchange.com/questions/54443/format-for-id-of-youtube-video
        let videoId = null;
        if (btnId.includes("btnS47Yt6")) {
            //ToDo grab video Id from input box
            // videoId = 'SliBmD29dqY';
            videoId = $6d58630e4469e477$var$youTubeGetID(textInput.value.trim());
            if (videoId.length == 0) videoId = null;
        } else if (btnId.includes("btnS47Yt1")) videoId = "N9Sxyvz4lW4"; // S47
        else if (btnId.includes("btnS47Yt2")) videoId = "TepWfVIaWv8"; // S47 E-E
        else if (btnId.includes("btnS47Yt3")) videoId = "X3tKtrqsSBg"; // SF47
        else if (btnId.includes("btnS47Yt4")) videoId = "Kxrj7PYJMQY"; // SF47 mini Lcars
        else if (btnId.includes("btnS47Yt5")) videoId = "PLcKQG9ZuAQaTXcpM_C_i_9wXBra7tXRPF"; // Star Trek music "playlist" // !  <<<<<
        if (videoId !== null) $6d58630e4469e477$var$addYouTubeVideo(videoId);
    };
    // ! loading YouTube iFrame API script ================================================================
    const tag = document.createElement("script");
    // tag.id = 'iframe-demo';
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    CRapp.videoBox.youTube_onPlayerReady = (event)=>{
        const player = event.target;
        // console.log('playerReady event...', player);
        player.setVolume(CRapp.videoBox.defaultVolume);
        player.setShuffle(true);
        player.setLoop(true);
        player.playVideo();
    };
    CRapp.videoBox.youTube_onPlayerStateChange = (event)=>{
    // console.log('YT state changed to....', event.data);
    // const playerStatus = event.data;
    // (playerStatus == -1) // unstarted
    // (playerStatus == 0) // ended = yellow
    // (playerStatus == 1) // playing = green
    // (playerStatus == 2) // paused = red
    // (playerStatus == 3) // buffering = purple
    // (playerStatus == 5) // video cued = orange
    };
    // ! this "onYouTubeIframeAPIReady()" is required by YouTubeAPI. Don't change function name
    window.onYouTubeIframeAPIReady = ()=>{
        CRapp.videoBox.youTubeApiReady = true;
    };
}
// code obtained from: https://gist.github.com/takien/4077195
function $6d58630e4469e477$var$youTubeGetID(url) {
    url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}


function $fd9e36a62431ae9f$export$57f76693a5823e7b() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.pageStatus == "transitioning") return;
    // ! Page STATE ================= 'home'  <->   'ship'
    // page STATE will be referenced by css
    CRapp.setPageState("home");
    // ! Page STATUS ================ 'home'  <-> 'transitioning'  <->   'ship'
    // page STATUS is for internal blocking. Main btns functions should not process page is in 'transitioning' status
    // todo: ? this probably can be changed to a boolean
    CRapp.pageStatus = "transitioning";
    (0, $3197f154df3b8f49$export$1ea5135a72d2338a)();
    (0, $3197f154df3b8f49$export$66453c7132c7178e)(CRapp.homeContentDom.querySelector("#homeClock tspan"), CRapp.homeContentDom.querySelector("#homeDate tspan"), "hasRingClock");
    // setup log display
    CRapp.logPlaceholderDom = CRapp.homeContentDom.querySelector("#log_placeholder");
    (0, $a2757c1cf7e9a697$export$140a85b3298067e4)();
    CRapp.logDisplayDom.style.opacity = 1;
    const homeTopBar = CRapp.homeFrameDom.querySelector("#homeTopBar");
    const topRightBlock = CRapp.homeFrameDom.querySelector("#topRightBlock");
    // do init setup and revealing
    CRapp.homeContentDom.querySelector("#homeWindow").style.transform = "translate(70px,0)";
    CRapp.homeFrameDom.style.visibility = "visible";
    CRapp.homeFrameDom.style.opacity = 1;
    CRapp.homeContentDom.style.opacity = 1;
    CRapp.homeContentDom.style.visibility = "visible";
    CRapp.configContentDom.style.visibility = "hidden";
    CRapp.configContentDom.style.opacity = 0;
    (0, $a2757c1cf7e9a697$export$51e541a0222a493e)();
    const ringClock = CRapp.homeContentDom.querySelector("#ringClock");
    const homeWindow = CRapp.homeContentDom.querySelector("#homeWindow");
    const homeConfig = CRapp.homeContentDom.querySelector("#homeConfig");
    const frameTitleText = CRapp.homeFrameDom.querySelector("#frameTitleText");
    const rcc = (0, $a2757c1cf7e9a697$export$2a9fee5f37bfd138)(ringClock); // ringClockCenter {x, y}
    const rccTa = `translate(${rcc.x}px, ${rcc.y}px)`; // !! <<< need 'px'
    const rccTb = `translate(-${rcc.x}px, -${rcc.y}px)`;
    // * animation starting...........
    // * ====================================================================
    // *
    // show and blink-in top left corner
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", .15, 0, 0, 0.3);
    d3.select(CRapp.homeFrameDom.querySelector("#topLeftCorner")).style("opacity", 1).transition().delay(200).duration(200).on("start", function() {
        this.style.animationDuration = "0.7s";
        this.classList.add("blink2");
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            this.classList.remove("blink2");
        }, 500); // a setTimeout shorthand
    }).on("end", function() {
        //* slide topRightBlock to position
        topRightBlock.style.transition = null;
        topRightBlock.style.opacity = 1;
        topRightBlock.style.transform = "translate(0,0)";
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Down", .55);
    }).transition().delay(100).duration(700).on("start", function() {
        //* show & expand width of top bar
        homeTopBar.style.opacity = 1;
        homeTopBar.setAttribute("width", homeTopBar.dataset.width);
    }).on("end", function() {
        //* blink-in title text
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Up");
        frameTitleText.style.opacity = 1;
        frameTitleText.classList.add("blink2");
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            frameTitleText.classList.remove("blink2");
        }, 600);
        const homeBtns = CRapp.homeFrameDom.querySelectorAll('[id^="homeBtn1"]');
        //* frame btns: revealing
        homeBtns.forEach((element)=>{
            (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
                element.style.transition = `opacity ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(-100, 1200)}ms ease ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 200)}ms`;
                element.style.opacity = 1;
            }, (0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 600));
        });
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            // reset init transition
            homeBtns.forEach((element)=>{
                element.style.transition = null;
            });
        }, 1800);
    }).transition().delay(400).duration(800).on("start", function() {
        //* fade-in time & date
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("negative", 0, 0, 0, 0.5);
            CRapp.homeContentDom.querySelector("#homeDate").style.opacity = 1;
        }, 500);
        CRapp.homeContentDom.querySelector("#homeClock").style.opacity = 1;
    }).on("end", function() {
        //* SEMI show & slide-in home window box
        homeWindow.style.opacity = 0.3;
        homeWindow.style.transform = null;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("longTaskLow");
        // ! Page STATUS ================ 'home'  <-> 'transitioning'  <->   'ship'
        document.documentElement.dataset.currentPage = "home";
        CRapp.pageStatus = "home";
    }).transition().delay(800).duration(800).on("start", function() {
        //* SEMI show config box
        homeConfig.style.opacity = 0.15;
        CRapp.configContentDom.style.visibility = "visible";
        CRapp.configContentDom.style.opacity = 0.15;
    }).on("end", function() {
        //*  show ring clock animation -- fade-in scaling down, blinks, scale back out a little more, then bounce back to 1
        ringClock.style.opacity = 0.5;
        ringClock.style.transform = `${rccTa} rotate(${(0, $771006645357c94f$export$a13251365167ea49)() * (0, $771006645357c94f$export$24d4d9f7cb1f68df)(15, 50)}deg)  scale(0.5) ${rccTb}`;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Downer", 0, 0, 0, 0.5);
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            //temp reset dashoffset to create move animation movements. The offset gets added back in the clock second iteration
            //   .... selecting on:  #ringSecond, #ringMinute1, #ringMinute2, #ringMinute3
            ringClock.querySelectorAll('#ringSecond, [id^="ringMinute"]').forEach((node)=>{
                node.style.strokeDashoffset = null;
            });
            //* blink
            ringClock.classList.add("blink3");
            ringClock.style.opacity = 1;
            (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
                ringClock.classList.remove("blink3");
            }, 1000);
        }, 1000);
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("processing", 0, 0, 0, 0.3);
            ringClock.style.transform = `${rccTa} rotate(0) scale(1.1) ${rccTb}`;
            (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
                ringClock.style.transform = `${rccTa} rotate(0) scale(1) ${rccTb}`; // ! <<< default transform
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", .25, 0, 0, 0.3);
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("notification", 1, 0, 0, 0.5);
            }, 1000);
        }, 1500);
    }).transition().delay(850).duration(2000).on("start", function() {
        //* FULLY show window boxes -- by using css default
        homeWindow.style.opacity = null;
    }).on("end", function() {
        //* FULLY show config boxes -- by using css default
        homeConfig.style.opacity = null;
    }).transition().delay(600).duration(600).on("start", function() {
        //* FULLY show content inside config
        CRapp.configContentDom.style.opacity = 1;
        CRapp.configContentDom.classList.add("enabled");
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("LD LCARS is ready", "timePrefix");
    }).on("end", function() {
    // ! Page STATUS ================ 'home'  <-> 'transitioning'  <->   'ship'
    // CRapp.pageStatus = 'home';
    }).on("cancel interrupt", ()=>{
        ringClock.style.transform = `${rccTa} rotate(0) scale(1) ${rccTb}`; // ! <<< default transform
    });
    CRapp.shipContentDom.style.opacity = 0;
    CRapp.shipContentDom.style.visibility = "hidden";
    CRapp.shipFrameDom.style.opacity = 0;
    CRapp.shipFrameDom.style.visibility = "hidden";
}
function $fd9e36a62431ae9f$export$2cb9f69ba224823a() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.pageStatus == "transitioning") return;
    // ! Page STATUS ================ 'home'  <-> 'transitioning'  <->   'ship'
    CRapp.pageStatus = "transitioning";
    // stop possible previous page transitioning
    CRapp.pageTimers.forEach((timerId)=>{
        clearTimeout(timerId);
    });
    CRapp.pageTimers = [];
    (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("switching to LD Main screen", "timePrefix");
    (0, $3197f154df3b8f49$export$1ea5135a72d2338a)();
    (0, $3197f154df3b8f49$export$66453c7132c7178e)(CRapp.homeContentDom.querySelector("#homeClock tspan"), CRapp.homeContentDom.querySelector("#homeDate tspan"), "hasRingClock");
    // *making tiny ritos ships to fade out via css by removing 'tinyShips' dataset.
    delete document.documentElement.dataset.tinyShips;
    // do init setup and revealing
    // ....
    //* pre HOME elements
    const topLeftCorner = CRapp.homeFrameDom.querySelector("#topLeftCorner");
    topLeftCorner.setAttribute("fill", topLeftCorner.dataset.fill);
    topLeftCorner.setAttribute("d", topLeftCorner.dataset.d);
    const homeTopBar = CRapp.homeFrameDom.querySelector("#homeTopBar");
    homeTopBar.setAttribute("fill", homeTopBar.dataset.fill);
    homeTopBar.setAttribute("x", homeTopBar.dataset.x);
    homeTopBar.setAttribute("width", homeTopBar.dataset.width);
    const topRightBlock = CRapp.homeFrameDom.querySelector("#topRightBlock");
    topRightBlock.setAttribute("fill", topRightBlock.dataset.fill);
    topRightBlock.style.opacity = 1;
    CRapp.homeContentDom.querySelector("#homeClock").style.visibility = "visible";
    CRapp.homeContentDom.querySelector("#homeDate").style.visibility = "visible";
    CRapp.homeContentDom.querySelector("#homeConfig").style.opacity = 0;
    CRapp.homeContentDom.querySelector("#homeWindow").style.opacity = 0.4;
    // config content - set to init settings
    CRapp.configContentDom.removeAttribute("transform");
    CRapp.configContentDom.style.visibility = "hidden";
    CRapp.configContentDom.style.opacity = 0;
    CRapp.configContentDom.classList.remove("enabled");
    // CRapp.homeFrameDom.style.visibility = 'visible';
    // CRapp.homeFrameDom.style.opacity = 1;
    // CRapp.homeContentDom.style.opacity = 1;
    // CRapp.homeContentDom.style.visibility = 'visible';
    CRapp.homeContentDom.querySelector("#homeWindow").style.transform = "translate(-250px,0)";
    // ! temp hiding YouTube video node until new dest  === Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y
    (0, $6d58630e4469e477$export$1f03644a907fa072)();
    // * animation starting...........
    // * ====================================================================
    // *
    (0, $a2757c1cf7e9a697$export$51e541a0222a493e)();
    d3.select(CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner")).transition("main").duration(400).on("start", ()=>{
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningLow", 0, 0, 0, 0.6);
        //*  ship fading out
        CRapp.shipContentDom.style.transitionDuration = "0.3s";
        CRapp.shipContentDom.style.opacity = 0;
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            CRapp.shipContentDom.style.transitionDuration = null;
        }, 350);
        //* hiding the WITH-In-Frame BTNs, via css transition with delay
        CRapp.shipFrameDom.querySelector("#shipMsdBtns").style.opacity = 0;
    }).on("end", ()=>{
        // ! ===== reset ship ---- 
        //      !! there is a bug: When switching from ship to home, if ship labels on AND while obj zooming,
        //      !! the ship fullView might not get reset, and animations still running. No Resolution found yet.
        //      !! 
        //      !! Patch method: Run this "shipFullViewReset()" & "stopAllShipAnimations()" for the 2nd time
        //      !!               near the end of this page shipToHome transition sequence
        (0, $63a5b00227d0cbe7$export$71d9d5af3ae909a7)();
        // if (CRapp.shipZoomMode) shipFullViewReset();
        (0, $63a5b00227d0cbe7$export$8a2e6fed9df8c3ad)(); // ! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        //* hiding main frame top & bottom element from right to left in sequence
        CRapp.shipFrameDom.querySelector("#shipTopBar1c").style.opacity = 0;
        CRapp.shipFrameDom.querySelector("#shipFrame1e").style.opacity = 0;
        CRapp.shipFrameDom.querySelector("#shipClock").style.opacity = 0;
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            CRapp.shipFrameDom.querySelector("#shipTopBar1b").style.opacity = 0;
            CRapp.shipFrameDom.querySelector("#shipFrame1d").style.opacity = 0;
            CRapp.shipFrameDom.querySelector("#subTitle").style.opacity = 0;
            (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
                CRapp.shipFrameDom.querySelector("#shipTitle").style.opacity = 0;
                CRapp.shipFrameDom.querySelector("#subTitleBar").style.opacity = 0;
            }, 160);
        }, 160);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("negative", 0, 0.2, 0, 0.25, 1.1);
    }).transition("main").delay(480).duration(600).on("start", ()=>{
        // * SYNC
        // ! use mainT (main transition) -- to sync 3 separate elements' transition, and to chain up the rest of animations
        const syncT = d3.transition().duration(600).ease(d3.easeCubic);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("executing", 0, 0.4, 0, 0.3);
        // * change topLeftCorner color
        CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner").setAttribute("fill", CRapp.homeFrameDom.querySelector("#topLeftCorner").dataset.fill);
        d3.select(CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner")).transition(syncT).attr("d", CRapp.homeFrameDom.querySelector("#topLeftCorner").dataset.d);
        // * slide shipFrame1a to cover home btn1+btn2 area
        const tmpBBox1 = CRapp.homeFrameDom.querySelector("#homeBtn1a").getBBox();
        const tmpBBox2 = CRapp.homeFrameDom.querySelector("#homeBtn1b").getBBox();
        d3.select(CRapp.shipFrameDom.querySelector("#shipFrame1a")).transition(syncT).attr("x", tmpBBox1.x).attr("y", tmpBBox1.y).attr("width", tmpBBox1.width).attr("height", tmpBBox2.y + tmpBBox2.height - tmpBBox1.y);
        // * shrink shipFrame1b down
        d3.select(CRapp.shipFrameDom.querySelector("#shipFrame1b")).transition(syncT).attr("y", CRapp.shipFrameDom.querySelector("#shipFrame1c").getBBox().y).attr("height", 0).on("end", function() {
            this.style.opacity = 0;
        });
        // * semi fade out shipFrame1c
        d3.select(CRapp.shipFrameDom.querySelector("#shipFrame1c")).transition(syncT).style("opacity", 0);
        // * slide out ship's sub frame (top left region) -- use d3 to get better animation sync
        const dX = CRapp.shipFrameDom.querySelector("#frameShipSub").getBBox().x - CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner").getBBox().x;
        CRapp.shipFrameDom.querySelector("#frameShipSub").style.transition = null;
        d3.select(CRapp.shipFrameDom.querySelector("#frameShipSub")).transition(syncT).style("transform", `translate(${dX}px,0)`).style("opacity", 0);
        // * expand & match topBar
        d3.select(CRapp.shipFrameDom.querySelector("#shipTopBar1a")).transition(syncT).attr("x", CRapp.homeFrameDom.querySelector("#homeTopBar").dataset.x).attr("width", CRapp.homeFrameDom.querySelector("#homeTopBar").dataset.width);
    }).transition("main").delay(0).duration(300).on("start", ()=>{
        //* blink shipConfig
        CRapp.logDisplayDom.style.opacity = 0;
        CRapp.shipFrameDom.querySelector("#frameShipConfig").classList.add("blink2");
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0, 0, 0, 0.4, 1.2); //* earlier start to sync up Sliding of the shipConfig window
    }).on("end", ()=>{
        CRapp.shipFrameDom.querySelector("#frameShipConfig").classList.remove("blink2");
    }).transition("main").delay(30).duration(200).on("start", ()=>{
        //* slide shipConfig window to right, and fade out
        CRapp.shipFrameDom.querySelector("#frameShipConfig").style.transform = "translate(800px, 0)";
        CRapp.shipFrameDom.querySelector("#frameShipConfig").style.opacity = 0;
        // ! Page STATE ================ 'home'  <->   'ship'
        CRapp.setPageState("home"); //* ############################################################### 
        // setup log display
        CRapp.logPlaceholderDom = CRapp.homeContentDom.querySelector("#log_placeholder");
        (0, $a2757c1cf7e9a697$export$140a85b3298067e4)();
        CRapp.logDisplayDom.style.opacity = 1;
        // also hard set the visibility to visible....
        // in case the configsWidow is has the logs hidden to show configs btns.
        // This ensure the logs will be visible when landing on home
        CRapp.logDisplayDom.style.visibility = "visible";
    }).on("end", ()=>{
        CRapp.homeContentDom.querySelector("#homeWindow").style.transform = null;
        CRapp.homeContentDom.querySelector("#homeWindow").style.visibility = "visible";
        CRapp.homeContentDom.querySelector("#homeWindow").style.opacity = null;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
            "beepX2Upper",
            "beepX1Up",
            "beepX2Downer"
        ]), 0.2, 0, 0, 0.7);
        CRapp.homeFrameDom.style.visibility = "visible";
        CRapp.homeFrameDom.style.opacity = 1;
        CRapp.homeContentDom.style.opacity = 1;
        CRapp.homeContentDom.style.visibility = "visible";
        // fade in left side btns
        (0, $771006645357c94f$export$275509f970718c8a)(CRapp.pageTimers, ()=>{
            CRapp.homeFrameDom.querySelectorAll('[id^="homeBtn1"]').forEach((element)=>{
                element.style.opacity = 1;
            });
        }, 300);
        // fade out ship frame that's covering home's left 1st two btns
        d3.select(CRapp.shipFrameDom.querySelector("#shipFrame1a")).transition().duration(400).attr("height", 1300) // ! hardcoded number here.... :-(
        .style("opacity", 0);
        CRapp.homeContentDom.querySelector("#ringClock").style.opacity = 1;
        CRapp.homeContentDom.querySelector("#ringClock").style.visibility = "visible";
        CRapp.homeContentDom.querySelector("#homeConfig").style.visibility = "visible";
        CRapp.homeContentDom.querySelector("#homeConfig").style.opacity = 0.3;
        CRapp.configContentDom.style.visibility = "visible";
        CRapp.configContentDom.style.opacity = 0.2;
    }).transition("main").delay(300).duration(600).on("start", ()=>{
        CRapp.homeFrameDom.querySelector("#frameTitleText").style.visibility = "visible";
        CRapp.homeFrameDom.querySelector("#frameTitleText").style.opacity = 1;
        CRapp.homeFrameDom.querySelector("#frameTitleText").classList.add("blink2");
        CRapp.homeContentDom.querySelector("#homeConfig").style.opacity = null;
        CRapp.configContentDom.style.transitionDuration = "0.6s";
        CRapp.configContentDom.style.opacity = 1;
        CRapp.configContentDom.classList.add("enabled");
        CRapp.shipFrameDom.style.visibility = "hidden";
        CRapp.shipFrameDom.style.opacity = 0;
        CRapp.shipContentDom.style.opacity = 0;
        CRapp.shipContentDom.style.visibility = "hidden";
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("LD Main screen loaded", "timePrefix");
    }).on("end", ()=>{
        CRapp.homeFrameDom.querySelector("#frameTitleText").classList.remove("blink2");
        CRapp.configContentDom.style.transitionDuration = null;
        // * unhide YouTube iframe
        (0, $6d58630e4469e477$export$365bebd2e24b0755)("home");
        (0, $6d58630e4469e477$export$835fa8e7389197b5)();
        //* wrapping up final tasks ================
        // !!  ***  reset Ship for the 2ne time. See notes from above when these 2 functions were run for the 1st time.
        (0, $63a5b00227d0cbe7$export$71d9d5af3ae909a7)();
        (0, $63a5b00227d0cbe7$export$8a2e6fed9df8c3ad)(); // ! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        // ! Page STATUS ================ 'home'  <-> 'transitioning'  <->   'ship'
        CRapp.pageStatus = "home";
    });
    // transitioning from Ship
    //* disable & hide elements, with transition if needed
    //* stopping all ship animations & tasks
    //* transition to home
    //* reveal full home elements
    document.documentElement.dataset.currentPage = "home";
}
function $fd9e36a62431ae9f$export$304b0864fb001794() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.pageStatus == "transitioning") return;
    // CRapp.setPageState('ship');
    // ! Page STATUS ================ 'home'  <-> 'transitioning'  <->   'ship'
    CRapp.pageStatus = "transitioning";
    d3.select(CRapp.homeFrameDom.querySelector("#topLeftCorner")).interrupt();
    // stop possible previous page transitioning
    CRapp.pageTimers.forEach((timerId)=>{
        clearTimeout(timerId);
    });
    CRapp.pageTimers = [];
    if (CRapp.jwstStatus) (0, $44a29584ad670e34$export$f0abfad23975ce08)();
    // turn buffer time off first before stopping clock... because when buffer time ends it triggers clock to start again
    if (CRapp.bufferTimeStatus) (0, $ef363846f0e7e61f$export$ac98d773e506b9d)();
    (0, $3197f154df3b8f49$export$1ea5135a72d2338a)();
    (0, $3197f154df3b8f49$export$66453c7132c7178e)(document.querySelector("#msdContainer > svg #shipClock tspan"), null, "noRingClock");
    // hide ringClock quickly
    const ringClock = CRapp.homeContentDom.querySelector("#ringClock");
    d3.select(ringClock).interrupt();
    ringClock.style.opacity = 0;
    setTimeout(()=>{
        ringClock.style.visibility = "hidden";
    }, 600);
    (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Switching to USS Cerritos MAP", "timePrefix");
    //* pre SHIP elements
    const shipMainTopLeftCorner = CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner");
    shipMainTopLeftCorner.setAttribute("fill", shipMainTopLeftCorner.dataset.fill);
    shipMainTopLeftCorner.setAttribute("d", shipMainTopLeftCorner.dataset.d);
    const shipTopBar1a = CRapp.shipFrameDom.querySelector("#shipTopBar1a");
    shipTopBar1a.setAttribute("fill", shipTopBar1a.dataset.fill);
    shipTopBar1a.setAttribute("x", shipTopBar1a.dataset.x);
    shipTopBar1a.setAttribute("width", shipTopBar1a.dataset.width);
    CRapp.shipFrameDom.querySelector("#shipTitle").style.opacity = 0;
    CRapp.shipFrameDom.querySelector("#shipTopBar1b").style.opacity = null;
    const shipTopBar1c = CRapp.shipFrameDom.querySelector("#shipTopBar1c");
    shipTopBar1c.setAttribute("fill", shipTopBar1c.dataset.fill);
    shipTopBar1c.style.opacity = null;
    const shipFrame1a = CRapp.shipFrameDom.querySelector("#shipFrame1a");
    shipFrame1a.setAttribute("x", shipFrame1a.dataset.x);
    shipFrame1a.setAttribute("y", shipFrame1a.dataset.y);
    shipFrame1a.setAttribute("width", shipFrame1a.dataset.width);
    shipFrame1a.setAttribute("height", shipFrame1a.dataset.height);
    shipFrame1a.style = null;
    const shipFrame1b = CRapp.shipFrameDom.querySelector("#shipFrame1b");
    shipFrame1b.setAttribute("y", shipFrame1b.dataset.y);
    shipFrame1b.setAttribute("height", shipFrame1b.dataset.height);
    shipFrame1b.style = null;
    CRapp.shipFrameDom.querySelector("#shipFrame1c").style = null;
    CRapp.shipFrameDom.querySelector("#subTitleBar").style.opacity = null;
    CRapp.shipFrameDom.querySelector("#subTitle").style.opacity = null;
    CRapp.shipFrameDom.querySelector("#shipFrame1d").style.opacity = null;
    CRapp.shipFrameDom.querySelector("#shipClock").style.opacity = null;
    CRapp.shipFrameDom.querySelector("#shipFrame1e").style.opacity = null;
    CRapp.shipFrameDom.querySelector("#shipMsdBtns").style.opacity = 0;
    // tmp frames for transitioning to ship
    CRapp.homeFrameDom.querySelectorAll('[id^="tmpFrameHome1"]').forEach((element)=>{
        element.style.visibility = "hidden";
        element.style.opacity = 0;
        element.setAttribute("x", element.dataset.x);
        element.setAttribute("y", element.dataset.y);
        element.setAttribute("width", element.dataset.width);
        element.setAttribute("height", element.dataset.height);
    });
    // config window
    const frameShipConfig = CRapp.shipFrameDom.querySelector("#frameShipConfig");
    frameShipConfig.style.transform = null;
    frameShipConfig.style.opacity = null;
    frameShipConfig.classList.remove("configsEnabled");
    (0, $a2757c1cf7e9a697$export$54be3cd0bd47bcf0)();
    // ! temp hiding YouTube video node until new dest  === Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y
    (0, $6d58630e4469e477$export$1f03644a907fa072)();
    // semi fade hide title text
    CRapp.homeFrameDom.querySelector("#frameTitleText").style.opacity = 0.4;
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", 0, 0, 0, 0.8);
    d3.select(CRapp.homeFrameDom.querySelector("#topLeftCorner")).transition("main").delay(600).duration(300) // ! <====== use "named" transition for all
    .on("start", ()=>{
        // * hide config & window box quickly
        CRapp.homeContentDom.querySelector("#homeConfig").style.visibility = "hidden";
        CRapp.homeContentDom.querySelector("#homeWindow").style.visibility = "hidden";
        CRapp.configContentDom.style.visibility = "hidden";
        CRapp.configContentDom.style.opacity = 0;
        CRapp.configContentDom.classList.remove("enabled");
        // config content - resizing to fit into ship's config window
        CRapp.configContentDom.setAttribute("transform", CRapp.configContentDom.dataset.shipTransform);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0, 0, 0, 0.3);
    }).on("end", ()=>{
        // hide home clock
        CRapp.homeContentDom.querySelector("#homeClock").style.visibility = "hidden";
    }).transition("main").delay(150).duration(400).on("start", ()=>{
        // hide home date
        CRapp.homeContentDom.querySelector("#homeDate").style.visibility = "hidden";
    }).on("end", ()=>{
        // switch left side btns to blank blocks for transitioning movement purpose
        CRapp.homeFrameDom.querySelectorAll('[id^="tmpFrameHome1"]').forEach((element)=>{
            element.style.opacity = null;
            element.style.visibility = "visible";
        });
        CRapp.homeFrameDom.querySelectorAll('[id^="homeBtn1"]').forEach((element)=>{
            element.style.opacity = 0;
        });
    }).transition("main").delay(150).duration(400).on("start", function() {
        // change topLeft corner color -- get fill during run-time
        this.setAttribute("fill", CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner").dataset.fill);
        // change topBar color -- get fill during run-time
        CRapp.homeFrameDom.querySelector("#homeTopBar").setAttribute("fill", CRapp.shipFrameDom.querySelector("#shipTopBar1a").dataset.fill);
        // change topRight block color -- get fill during run-time
        CRapp.homeFrameDom.querySelector("#topRightBlock").setAttribute("fill", CRapp.shipFrameDom.querySelector("#shipTopBar1c").dataset.fill);
        // ! to do: switch to a temp block copy of ship's topRight Block
        //* 
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("loading MSD / Master System Display", "timePrefix");
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("affirmative", 0, 0, 0, 0.3);
    }).transition("main").delay(200).duration(550).on("start", function() {
        //* moving left side tmp btn blocks into ship frame positions
        // ! Was using css transition, but animation is not perfectly sync'ing with d3j3 animation on the topLeftCorner's morphing.
        // ! So using d3js on all 3 rect blocks' shift animations
        // * SYNC
        // ! use mainT (main transition) -- to sync 3 separate elements' transition, and to chain up the rest of animations
        const syncT = d3.transition().duration(500).ease(d3.easeCubicOut);
        //* SYNC --
        d3.select(this).transition(syncT).attr("d", CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner").getAttribute("d"));
        //* SYNC --
        const tmpBBox1 = CRapp.shipFrameDom.querySelector("#shipFrame1a").getBBox();
        d3.select(CRapp.homeFrameDom.querySelector("#tmpFrameHome1a")).transition(syncT).attr("x", tmpBBox1.x).attr("y", tmpBBox1.y).attr("width", tmpBBox1.width).attr("height", tmpBBox1.height);
        //* SYNC --
        const tmpBBox2 = CRapp.shipFrameDom.querySelector("#shipFrame1b").getBBox();
        d3.select(CRapp.homeFrameDom.querySelector("#tmpFrameHome1b")).transition(syncT).attr("x", tmpBBox2.x).attr("y", tmpBBox2.y).attr("width", tmpBBox2.width).attr("height", tmpBBox2.height);
        //* SYNC --
        const tmpBBox3 = CRapp.shipFrameDom.querySelector("#shipFrame1c").getBBox();
        d3.select(CRapp.homeFrameDom.querySelector("#tmpFrameHome1c")).transition(syncT).attr("x", tmpBBox3.x).attr("y", tmpBBox3.y).attr("width", tmpBBox2.width).attr("height", tmpBBox2.width);
        //* SYNC -- move top bar
        const refBBox = CRapp.shipFrameDom.querySelector("#shipTopBar1a").getBBox();
        const refBBox2 = CRapp.shipFrameDom.querySelector("#shipTopBar1b").getBBox();
        // ! temporary disable CSS transition since we're using d3 sync transition
        const homeTopBar = CRapp.homeFrameDom.querySelector("#homeTopBar");
        homeTopBar.style.transition = "none";
        d3.select(homeTopBar).transition(syncT).attr("x", refBBox.x)// .attr('y', refBBox.y) //* unchanged
        // .attr('height', refBBox.height) //* unchanged
        .attr("width", refBBox2.x + refBBox2.width - refBBox.x);
        //* hide title text
        CRapp.homeFrameDom.querySelector("#frameTitleText").style.visibility = "hidden";
        //* fade out top right corner
        CRapp.homeFrameDom.querySelector("#topRightBlock").style.opacity = 0;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningHigh", 0, 0, 0, 0.2);
    }).on("end", ()=>{
        //* fade out log display
        CRapp.logDisplayDom.style.opacity = 0;
    }).transition("main").delay(200).duration(400).on("start", ()=>{
        //* delay a little, then fully switching to SHIP page
        //* log display: hide & reset position
        CRapp.logDisplayDom.style.visibility = "hidden";
        CRapp.logPlaceholderDom = CRapp.shipFrameDom.querySelector("#logsConfig_placeholder"); // update reposition ref
        //* changing pageState to SHIP  ######################################################
        // ! Page STATE ================ 'home'  <->   'ship'
        CRapp.setPageState("ship");
        // disable HOME page
        CRapp.homeContentDom.style.opacity = 0;
        CRapp.homeContentDom.style.visibility = "hidden";
        CRapp.homeFrameDom.style.opacity = 0;
        CRapp.homeFrameDom.style.visibility = "hidden";
        // prepping SHIP page
        CRapp.shipFrameDom.querySelector("#frameShipMain").style.opacity = 1;
        CRapp.shipFrameDom.querySelector("#frameShipConfig").style.opacity = 0;
        CRapp.shipFrameDom.querySelector("#frameShipSub").style.opacity = 0;
        CRapp.shipFrameDom.querySelector("#frameShipSub").style.transform = "translate(-100px, 0)";
        // enable SHIP page
        CRapp.shipContentDom.style.opacity = 0;
        CRapp.shipContentDom.style.visibility = "visible";
        CRapp.shipFrameDom.style.opacity = 1;
        CRapp.shipFrameDom.style.visibility = "visible";
        // ! make sure Zoom level + Labels has reset                
        // ! start up ship animations
        // blink the subtitle
        CRapp.shipFrameDom.querySelector("#subTitle").classList.add("blink2");
        setTimeout(()=>{
            CRapp.shipFrameDom.querySelector("#subTitle").classList.remove("blink2");
        }, 800);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Down", 0, 0, 0, 0.3);
    }).on("end", ()=>{
        // slide in the left sub frame
        CRapp.shipFrameDom.querySelector("#frameShipSub").style.transition = "opacity 1s ease-in, transform 0.8s ease-out";
        CRapp.shipFrameDom.querySelector("#frameShipSub").style.opacity = 1;
        CRapp.shipFrameDom.querySelector("#frameShipSub").style.transform = null;
        CRapp.shipFrameDom.querySelector("#shipTitle").style.opacity = null;
        CRapp.shipFrameDom.querySelector("#shipTitle").classList.add("blink1");
        (0, $a2757c1cf7e9a697$export$140a85b3298067e4)(); // this function uses param from CRapp.pageState. So set it after pageState has been updated
        // fade in config box with logs
        CRapp.shipFrameDom.querySelector("#frameShipConfig").style.opacity = 1;
        CRapp.logDisplayDom.style.opacity = 1;
        CRapp.logDisplayDom.style.visibility = "visible";
        CRapp.logDisplayDom.style.opacity = 1;
        (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("USS Cerritos MSD loading complete", "timePrefix");
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0.2, 0, 0, 0.4);
    }).transition("main").delay(600).duration(1000).on("start", ()=>{
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("powerUp", 0, 0.35, 0, 0.5, (0, $771006645357c94f$export$de12a21935b7f164)([
            1.3,
            1.4,
            0.85
        ])); // * for revealing ship in the next transition, and that transition has a 600ms delay
        // * reveal the ship
        CRapp.shipContentDom.style.opacity = 1;
        CRapp.shipFrameDom.querySelector("#shipTitle").classList.remove("blink1");
        (0, $63a5b00227d0cbe7$export$f254544244e1cd1a)(); // ! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        // * unhide YouTube iframe
        (0, $6d58630e4469e477$export$365bebd2e24b0755)("ship");
        (0, $6d58630e4469e477$export$835fa8e7389197b5)();
    }).on("end", ()=>{
        // * reveal the With-In-Frame BTNs, via css transition with delay
        CRapp.shipFrameDom.querySelector("#shipMsdBtns").style.opacity = 1;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0, 0, 0, 0.3);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Up", 0.4, 0, 0, 0.1);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Downer", 0.8, 0, 0, 0.2);
        //* clean up transitional elements
        CRapp.homeFrameDom.querySelectorAll('[id^="tmpFrameHome1"]').forEach((element)=>{
            element.style.visibility = "hidden";
        });
        CRapp.homeContentDom.style.visibility = "hidden";
        CRapp.homeFrameDom.style.visibility = "hidden";
        // * ===== Remaining Tasks
        document.documentElement.dataset.tinyShips = "";
        // document.querySelector('#msdContainer2 > svg #ritosTop').style.opacity = 1; //* updated. Now set within css
        // document.querySelector('#msdContainer2 > svg #ritosFront').style.opacity = 1; //* updated. Now set within css
        (0, $633bc24a33489d19$export$1eb886acfb38646b)();
        // ! Page STATUS ================ 'home'  <-> 'transitioning'  <->   'ship'
        CRapp.pageStatus = "ship";
    });
    //* disable & hide elements, with transition if needed
    //* stopping all ship animations & tasks
    //* transition to home
    //* reveal full home elements
    document.documentElement.dataset.currentPage = "ship";
}








function $b3277151052e1261$export$30d8a1cfcadf29b() {
    // check if fullscreen is supported first. Safari & iPad use "webkitFullscreenEnabled" ==================
    // ! iPad uses "webkitFullscreenEnabled" but doesn't support fullscreen
    // workaround: if iOS, disable fullscreen
    if ((0, $771006645357c94f$export$fedb369cb70207f1)()) return;
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
        const btnFullscreen = document.querySelector("#msdContainer > svg #frameHeader #btnFullscreen");
        btnFullscreen.classList.add("capable");
        btnFullscreen.addEventListener("pointerdown", (e)=>{
            $b3277151052e1261$export$a25ea78e22395c66();
            e.stopPropagation();
        });
        document.querySelector("#aboutIntroFullscreen > span:first-child").addEventListener("pointerdown", (e)=>{
            $b3277151052e1261$export$a25ea78e22395c66();
            e.stopPropagation();
        });
        document.documentElement.dataset.fullscreenCapable = "";
    }
}
function $b3277151052e1261$export$a25ea78e22395c66() {
    if (document.fullscreenElement) document.exitFullscreen().then(()=>{
        $b3277151052e1261$var$fullscreenExited();
    }).catch((err)=>{
        console.error(err);
    });
    else if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
        $b3277151052e1261$var$fullscreenExited();
    } else {
        if (document.fullscreenEnabled) {
            document.documentElement.requestFullscreen();
            $b3277151052e1261$var$fullscreenStarted();
        } else if (document.webkitFullscreenEnabled) {
            document.documentElement.webkitRequestFullscreen();
            $b3277151052e1261$var$fullscreenStarted();
        } else {
            const tmpString = "Sorry. Fullscreen mode is not available on this device.";
            (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(tmpString);
            console.log(tmpString);
        }
    }
}
function $b3277151052e1261$var$fullscreenStarted() {
    document.documentElement.dataset.fullscreen = "on";
    // console.log("- fullscreen mode on");
    $b3277151052e1261$var$outputFullscreenLog(true);
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Upper", 0, 0, 0, 0.8);
}
function $b3277151052e1261$var$fullscreenExited() {
    delete document.documentElement.dataset.fullscreen;
    // console.log("- fullscreen mode exited");
    $b3277151052e1261$var$outputFullscreenLog(false);
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", 0, 0, 0, 0.8);
}
function $b3277151052e1261$var$outputFullscreenLog(fullscreenResult) {
    if (fullscreenResult === true) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Full screen mode is now enabled • Press <ESC> to Exit");
    else if (fullscreenResult === false) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Exited Full screen mode <CTRL+SHIFT+F>");
}









function $3e19511ba4493dfd$export$3851b34a6f183e48() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (!CRapp.serverApiConnection) return;
    CRapp.clientIsReady = true;
    // ! ============== init server handshake only with client uid data
    // !  so that the server can respond back only to this client with a callback/acknowledgement that contains json data of the server's current status
    console.log(`New client [uid=${CRapp.serverApiData.clientUid}] has been initialized, handshaking with server...`);
    $3e19511ba4493dfd$export$aac5c958cc8264ab("fetchStatus", {
        clientUid: CRapp.serverApiData.clientUid
    }, (response)=>{
        console.log("client: server response received...", response);
        if (typeof response !== "object") return;
        processServerEvent("responseToFetchStatus", response);
    // ! ========= below: OLD CODE.  Replaced by utilizing the  "processServerEvent()"
    // if (!('alertStatus' in response)) return;
    // if (  ((response.alertStatus.toLowerCase()==='red') && (!CRapp.redAlertStatus))  ||
    //       ((response.alertStatus.toLowerCase()==='normal') && (CRapp.redAlertStatus))   ) {
    //     toggleRedAlert(null, 'NotUpdatingServer');
    // }
    // const success = setColorSchemeName( response.colorSchemeName );
    // if (success) updateUserSessionSettings('colorSchemeName', response.colorSchemeName);
    });
}
function $3e19511ba4493dfd$export$7f0366e849f5576a() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.serverApiData.alertStatus = CRapp.redAlertStatus ? "red" : "normal";
    CRapp.serverApiData.colorSchemeName = CRapp.colorSchemeNames[CRapp.currentColorScheme];
    const tmpColor = CRapp.themeColors[CRapp.currentColorScheme]; // 'rgb(255, 15, 120)'
    // split out rgb values from rgb string 'rgb(255, 15, 120)'
    const matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    const rgb = matchColors.exec(tmpColor);
    if (rgb !== null) {
        CRapp.serverApiData.themeColor.r = Number(rgb[1]);
        CRapp.serverApiData.themeColor.g = Number(rgb[2]);
        CRapp.serverApiData.themeColor.b = Number(rgb[3]);
    }
    return CRapp.serverApiData;
}
function $3e19511ba4493dfd$export$aac5c958cc8264ab(eventType, data, callback) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (!CRapp.serverApiConnection) return;
    console.log(`Preflight checked: Ready to send [${eventType}] event to server`, data, callback);
    if (typeof window.updateServer === "function") window.updateServer(eventType, data, callback);
}
/**
 * this handler function is called from pi server's websocket
 * @param {*} eventType -- string
 * @param {*} data -- json object
 */ window.processServerEvent = function(eventType, data = {}) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (!CRapp.serverApiConnection) return;
    if (!CRapp.clientIsReady) {
        console.log("App is initializing. This client is not yet ready to process server event.");
        return;
    }
    if (typeof eventType !== "string") {
        console.log("error: server event name is not a valid type");
        return;
    }
    console.log(`Processing server event [${eventType}] with data:`);
    console.log(data);
    const eventTypeLowerCase = eventType.toLowerCase();
    if (eventTypeLowerCase == "updateState".toLowerCase() || eventTypeLowerCase == "responseToFetchStatus".toLowerCase()) {
        if (typeof data !== "object") {
            console.log("error: event data not found");
            return;
        }
        // set color scheme =====================================================
        if ("colorSchemeName" in data) {
            const success = (0, $a2757c1cf7e9a697$export$878a77c0bab57c97)(data.colorSchemeName);
            if (success) (0, $653c606c0d614d74$export$731cb1e997115006)("colorSchemeName", data.colorSchemeName);
        }
        // change ALERT status ==============================================
        if ("alertStatus" in data) {
            if (data["alertStatus"].toLowerCase() == "red") {
                // set to RED ALERT
                if (CRapp.redAlertStatus) console.log("Already in Red Alert. Alert status not changed.");
                else {
                    (0, $a2757c1cf7e9a697$export$27a97e56ea376f1e)(null, "NotUpdatingServer");
                    console.log("Switching to Red Alert");
                }
            } else if (data["alertStatus"].toLowerCase() == "normal") {
                // turn off RED ALERT
                if (!CRapp.redAlertStatus) console.log("Already in normal status. Alert status not changed.");
                else {
                    (0, $a2757c1cf7e9a697$export$27a97e56ea376f1e)(null, "NotUpdatingServer");
                    console.log("Switching Off Red Alert");
                }
            } else console.log("requested alert status is currently not available");
        }
        // change SHIP INFO ===================
        if ("shipName" in data) (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)("shipName", data.shipName);
        if ("shipClass" in data) (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)("shipClass", data.shipClass);
        if ("shipRegistry" in data) (0, $a2757c1cf7e9a697$export$f7d3c41002dae854)("shipRegistry", data.shipRegistry);
    } else if (eventTypeLowerCase == "updateSensorData".toLowerCase()) {
        if (typeof data !== "object") return;
        let temperature = null;
        let humidity = null;
        let pressure = null;
        Object.keys(data).forEach((key)=>{
            if (key.toLowerCase() == "temperature") temperature = Number(data[key]);
            if (key.toLowerCase() == "humidity") humidity = Number(data[key]);
            if (key.toLowerCase() == "pressure") pressure = Number(data[key]);
        });
        let outputString = "";
        if (typeof humidity == "number") {
            outputString = `Humidity: ${humidity.toFixed(1)}%`;
            if (typeof pressure == "number") outputString += ",  ";
        }
        if (typeof pressure == "number") outputString += `Pressure: ${pressure.toFixed(1)} hPa`;
        if (outputString.length > 0) (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(outputString);
        if (typeof temperature == "number") (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(`Current temperature is ${temperature.toFixed(1)}°C`, "timePrefix");
    } else if (eventTypeLowerCase == "remoteLogMsg".toLowerCase()) {
        if (typeof data !== "object") return;
        let message = "";
        let showTimePrefix = false;
        let toPlaySound = false;
        Object.keys(data).forEach((key)=>{
            switch(key.toLowerCase()){
                case "message":
                    message = String(data[key]);
                    break;
                case "showTimePrefix".toLowerCase():
                    showTimePrefix = Boolean(data[key]);
                    break;
                case "playSound".toLowerCase():
                    toPlaySound = Boolean(data[key]);
                    break;
                default:
                    break;
            }
        });
        if (message.trim().length > 0) {
            (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)(message, showTimePrefix ? "timePrefix" : null);
            if (toPlaySound) (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
                "affirmative",
                "awaiting"
            ]), 0, 0, 0, 0.6);
        }
    }
} // ! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< for DEV debugging
 // window.updateServer = function(eventType, data, callback=null){
 //     console.log(eventType, data, callback);
 // }
;


function $a2757c1cf7e9a697$export$b6b0e127fc71cc83() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.svg1 = document.querySelector("#msdContainer > svg");
    CRapp.svg2 = document.querySelector("#msdContainer2 > svg");
    CRapp.configContentDom = CRapp.svg1.querySelector("#contentConfig");
    CRapp.homeFrameDom = CRapp.svg1.querySelector("#frameHome");
    CRapp.homeContentDom = CRapp.svg1.querySelector("#contentHome");
    CRapp.shipFrameDom = CRapp.svg1.querySelector("#frameShip");
    CRapp.shipContentDom = CRapp.svg1.querySelector("#contentShip");
    CRapp.logDisplayDom = document.getElementById("logDisplay");
    CRapp.logPlaceholderDom = CRapp.homeContentDom.querySelector("#log_placeholder");
    // !=========================== bypass parcel issue <<<<<<<<<<<
    // ! when building a distro, Parcel removes the viewBox. Have not figured out how to disable that.
    // ! So here manually inserting/overwriting "viewBox" attribute
    // CRapp.svg1.setAttribute('viewBox', `0 0 ${CRapp.svg1.getAttribute('width')} ${CRapp.svg1.getAttribute('height')}`);
    // CRapp.svg2.setAttribute('viewBox', `0 0 ${CRapp.svg2.getAttribute('width')} ${CRapp.svg2.getAttribute('height')}`);
    // ! new process when building -- see "projectLogs.md" 
    //* ############################################################################
    //* hide all pages
    document.querySelectorAll("#frameHome, #frameShip, #contentHome, #contentShip").forEach((element)=>{
        element.style.visibility = "hidden";
        element.style.opacity = 0;
    });
    //* ############################################################################
    //* overall ui elements init...
    $a2757c1cf7e9a697$export$72eabe1fd7b85356(); // replace design colors to css classes
    // for non animated gradient override
    d3.select("#homeClock").attr("fill", "url(#gradientClock)");
    d3.select("#shipClock").attr("fill", "url(#gradientClock)");
    // move defs to the main SVG. For Safari, the defs have to be within the same svg
    CRapp.svg1.appendChild(document.querySelector("#svgAni > defs"));
    CRapp.svg2.appendChild(document.querySelector("#svgAni2 > defs"));
    // ============ scale up the Ship Pointer Blocker -- will be used when ship is zoomed in to block unwanted "pointer down"
    const shipPointerBlocker = CRapp.svg1.querySelector("#shipPointerBlocker");
    shipPointerBlocker.style.display = "unset"; // temporary - so that bbox data can be obtained
    const pbc = $a2757c1cf7e9a697$export$5f3b35c2b8474baf(shipPointerBlocker);
    shipPointerBlocker.style.transform = `translate(${pbc.x}px, ${pbc.y}px) scale(2) translate(-${pbc.x}px, -${pbc.y}px)`;
    shipPointerBlocker.style.display = null; // let css will control the display
    //* init CONFIG box position & btns ####################################################
    CRapp.configContentDom.querySelector("#configBtns").onpointerdown = (e)=>{
        const tmpId = e.target.getAttribute("id");
        if (typeof tmpId !== "string") return;
        if (tmpId.indexOf("btn0") == 0) $a2757c1cf7e9a697$export$f4ac3bcd1bdb936d();
        else if (tmpId.indexOf("btn1a") == 0) {
            $a2757c1cf7e9a697$export$5cff1c8d974e3f0b();
            (0, $653c606c0d614d74$export$731cb1e997115006)("bgHue", CRapp.bgHue);
        } else if (tmpId.indexOf("btn1b") == 0) {
            $a2757c1cf7e9a697$export$1bda2b6d3dd4d993();
            (0, $653c606c0d614d74$export$731cb1e997115006)("bgLevel", CRapp.bgLevel);
        } else if (tmpId.indexOf("btn2") == 0) {
            const result = $a2757c1cf7e9a697$export$6b9b218407705316();
            (0, $653c606c0d614d74$export$731cb1e997115006)("softVignette", result);
        } else if (tmpId.indexOf("btn3") == 0) {
            const result1 = $a2757c1cf7e9a697$export$4a4f808287652e93();
            (0, $653c606c0d614d74$export$731cb1e997115006)("ldGlare", result1);
        }
    };
    const tmpBBox1 = CRapp.configContentDom.getBBox(); // default position
    const cx1 = tmpBBox1.x + 0.5 * tmpBBox1.width;
    const cy1 = tmpBBox1.y + 0.5 * tmpBBox1.height;
    // CRapp.configContentDom.dataset.homeX = tmpBBox1.x;
    // CRapp.configContentDom.dataset.homeY = tmpBBox1.y;
    const tmpBBox2 = CRapp.shipFrameDom.querySelector("#logsConfig_placeholder").getBBox(); // optional position
    const cx2 = tmpBBox2.x + 0.5 * tmpBBox2.width;
    const cy2 = tmpBBox2.y + 0.5 * tmpBBox2.height;
    const tmpScale = Math.min(tmpBBox2.width / tmpBBox1.width, tmpBBox2.height / tmpBBox1.height);
    CRapp.configContentDom.setAttribute("transform-origin", `${cx1} ${cy1}`);
    CRapp.configContentDom.dataset.shipTransform = `translate(${cx2 - cx1} ${cy2 - cy1}) scale(${tmpScale})`;
    //* ############################################################################
    //* init HOME related content
    // frame btns: init to be all hidden
    CRapp.homeFrameDom.querySelectorAll('[id^="homeBtn1"]').forEach((element)=>{
        element.style.opacity = 0;
    });
    // frame topLeftCorner
    const homeTopLeftCorner = CRapp.homeFrameDom.querySelector("#topLeftCorner");
    homeTopLeftCorner.dataset.fill = homeTopLeftCorner.getAttribute("fill"); // save design fill
    homeTopLeftCorner.dataset.d = homeTopLeftCorner.getAttribute("d");
    // frame top bar
    const homeTopBar = CRapp.homeFrameDom.querySelector("#homeTopBar");
    homeTopBar.dataset.fill = homeTopBar.getAttribute("fill"); // save design fill
    homeTopBar.dataset.x = homeTopBar.getAttribute("x"); // save design fill
    homeTopBar.dataset.width = homeTopBar.getAttribute("width");
    homeTopBar.setAttribute("width", "1");
    // frame top right block
    const topRightBlock = CRapp.homeFrameDom.querySelector("#topRightBlock");
    topRightBlock.dataset.fill = topRightBlock.getAttribute("fill"); // save design fill
    const tmpDeltaX = homeTopBar.getBBox().x - topRightBlock.getBBox().x;
    topRightBlock.style.transition = "none";
    topRightBlock.style.transform = `translate(${tmpDeltaX}px,0)`;
    // tmp frames for transitioning to ship
    CRapp.homeFrameDom.querySelectorAll('[id^="tmpFrameHome1"]').forEach((element)=>{
        element.style.visibility = "hidden";
        element.style.opacity = 0;
        element.dataset.x = element.getAttribute("x");
        element.dataset.y = element.getAttribute("y");
        element.dataset.width = element.getAttribute("width");
        element.dataset.height = element.getAttribute("height");
    });
    // ring clock
    // ! transform origin = 1490 1108
    const ringClock = CRapp.homeContentDom.querySelector("#ringClock");
    const rcc = $a2757c1cf7e9a697$export$5f3b35c2b8474baf(ringClock);
    // ! use transform on "style", not to "attribute" so that it can be transitioned nice on all major browsers
    const rccTa = `translate(${rcc.x}px, ${rcc.y}px)`; // !!! << need "px"
    const rccTb = `translate(-${rcc.x}px, -${rcc.y}px)`;
    ringClock.style.transform = `${rccTa} rotate(${(0, $771006645357c94f$export$a13251365167ea49)() * (0, $771006645357c94f$export$24d4d9f7cb1f68df)(250, 380)}deg) scale(0.7) ${rccTb}`;
    // also, precalculate ringClock's transform for jwst section. And save it to CSS VAR & dataset for later use
    const refBBox = CRapp.svg1.querySelector("#jwstImageGroup #jwstImage_placeholder").getBBox();
    const ringClockBBox = ringClock.getBBox();
    const jwstRingClockTransform = `${rccTa} translate(${refBBox.x - (ringClockBBox.x + 0.5 * ringClockBBox.width) + 105}px, ${refBBox.y - (ringClockBBox.y + 0.5 * ringClockBBox.height) + 105}px) rotate(0deg) scale(0.25) ${rccTb}`;
    // !!   create a new CSS VAR that can be used in a class to force ringClock transform not being written by app init
    ringClock.style.setProperty("--jwstRingClockTransform", jwstRingClockTransform);
    ringClock.dataset.jwstRingClockTransform = jwstRingClockTransform;
    // config & window
    const configNode = CRapp.svg1.querySelector("#homeConfig");
    const configBBox = configNode.getBBox();
    const windowNode = CRapp.svg1.querySelector("#homeWindow");
    const windowNodeBBox = windowNode.getBBox();
    windowNode.dataset.x = windowNodeBBox.x;
    windowNode.style.opacity = 0;
    configNode.dataset.x = configBBox.x;
    configNode.dataset.y = configBBox.y;
    configNode.style.opacity = 0;
    // configNode.dataset.currentSize = 'normal';
    (0, $6d58630e4469e477$export$1036761be95cb4cc)();
    // home Clock
    const homeClock = CRapp.svg1.querySelector("#homeClock");
    homeClock.dataset.currentSize = "normal";
    // init transform, will be change scale later
    homeClock.setAttribute("transform-origin", "0 0");
    homeClock.setAttribute("transform", "translate(0 0) scale(1)");
    //* ############################################################################
    //* init SHIP related content
    // frame topLeftCorner
    const shipTopLeftCorner = CRapp.shipFrameDom.querySelector("#shipMainTopLeftCorner");
    shipTopLeftCorner.dataset.fill = shipTopLeftCorner.getAttribute("fill"); // save design fill
    shipTopLeftCorner.dataset.d = shipTopLeftCorner.getAttribute("d");
    // frame 1st topBar
    const shipTopBar1a = CRapp.shipFrameDom.querySelector("#shipTopBar1a");
    shipTopBar1a.dataset.fill = shipTopBar1a.getAttribute("fill"); // save design fill
    shipTopBar1a.dataset.x = shipTopBar1a.getAttribute("x"); // save design fill
    shipTopBar1a.dataset.width = shipTopBar1a.getAttribute("width"); // save design fill
    // frame last topBar
    const shipTopBar1c = CRapp.shipFrameDom.querySelector("#shipTopBar1c");
    shipTopBar1c.dataset.fill = shipTopBar1c.getAttribute("fill"); // save design fill
    shipTopBar1c.style = null;
    // vertical main frame a
    const shipFrame1a = CRapp.shipFrameDom.querySelector("#shipFrame1a");
    shipFrame1a.dataset.x = shipFrame1a.getAttribute("x"); // save design fill
    shipFrame1a.dataset.y = shipFrame1a.getAttribute("y"); // save design fill
    shipFrame1a.dataset.width = shipFrame1a.getAttribute("width"); // save design fill
    shipFrame1a.dataset.height = shipFrame1a.getAttribute("height"); // save design fill
    // vertical main frame b
    const shipFrame1b = CRapp.shipFrameDom.querySelector("#shipFrame1b");
    shipFrame1b.dataset.y = shipFrame1b.getAttribute("y"); // save design fill
    shipFrame1b.dataset.height = shipFrame1b.getAttribute("height"); // save design fill
    // make Tardis darker... use 'fill-opacity' attribute so that it won't conflict with color/blink animation
    CRapp.shipContentDom.querySelector("#tardis").setAttribute("fill-opacity", 0.5);
    CRapp.shipContentDom.querySelectorAll('[id^="deflectorBeamAni"]').forEach((node, index)=>{
        node.style.animationDelay = 0.3 * index + "s";
    });
    CRapp.shipContentDom.querySelectorAll('[id^="bussardGasAni"]').forEach((node, index)=>{
        node.style.animationDuration = (0, $771006645357c94f$export$51e16a050e2bf069)(6, 14).toFixed(1) + "s";
    });
    //* build number in ship's config <<<<<<<<<<<
    CRapp.shipFrameDom.querySelector('[id^="buildVersion"] tspan').textContent = `BUILD • ${CRapp.revisionDate}`;
    $a2757c1cf7e9a697$export$5f3b35c2b8474baf(document.querySelector("#msdContainer svg #contentShip"));
    // BTNS // ON the ship Frame
    CRapp.shipFrameDom.querySelector('#shipFrame1c [id^="btn1"]').onpointerdown = ()=>{
        (0, $63a5b00227d0cbe7$export$867e02d6ef0e904)();
    };
    CRapp.shipFrameDom.querySelector('#shipFrame1c [id^="btn2"]').onpointerdown = (e)=>{
        const rect = e.target.getBoundingClientRect();
        if (rect.width == 0) return; // ! <<<< need non-zero width for calculation below.  Note: if target is hidden, all values in rect will be zero.
        // !!! use below console info during dev, to determine how this button can be divided in percentage based on pointer clicking
        // console.log(  (((e.clientX - rect.left) / rect.width)*100).toFixed(1)  );
        // 0 --37,  41--66,  70-100
        const pointerDownX = Math.round((e.clientX - rect.left) / rect.width * 100); // a percentage integer based on pointer X position within the element from left
        if (pointerDownX <= 37) (0, $63a5b00227d0cbe7$export$b9bb69d98eff82dd)("hit_engineeringHull");
        else if (pointerDownX >= 41 && pointerDownX <= 66) (0, $63a5b00227d0cbe7$export$b9bb69d98eff82dd)("hit_starboardNacelle");
        else if (pointerDownX >= 70) (0, $63a5b00227d0cbe7$export$b9bb69d98eff82dd)("hit_saucerModule");
    };
    CRapp.shipFrameDom.querySelector('#shipFrame1c [id^="btn3"]').onpointerdown = ()=>{
        (0, $63a5b00227d0cbe7$export$203cdef525f5b26e)();
    };
    CRapp.shipFrameDom.querySelector('#frameShipMain [id^="btnMap"]').onpointerdown = ()=>{
        (0, $63a5b00227d0cbe7$export$867e02d6ef0e904)();
    };
    // BTNs // WITHIN the ship Frame ===========
    CRapp.shipFrameDom.querySelector('#shipMsdBtns [id^="btn1"]').onpointerdown = ()=>{
        (0, $899111cd465e6cd4$export$543099fd07e5174b)();
    };
    CRapp.shipFrameDom.querySelector('#shipMsdBtns [id^="btn2"]').onpointerdown = ()=>{
        (0, $2149f20d5f49b011$export$53b47a456413a20)();
    };
    // ship outlines stroke styles  -- stores design setting ==========
    CRapp.shipContentDom.querySelectorAll("#outlines > path").forEach((node)=>{
        node.dataset.stroke = node.getAttribute("stroke");
        node.dataset.strokeWidth = node.getAttribute("stroke-width");
    });
    //* ===== stores up the ship labels' "hot" area. Then remove the nodes
    // on main.js, main svg  has pointer-down listener event to check points. no cursor change though.
    // the points will only get processed when ship's labels are visible. And the pointer-down then gets check if it hits the labels from the data array
    (0, $899111cd465e6cd4$export$db11f0672e3c0cc0)();
    //* ############################################################################
    //* init MSD 2 related content
    const bufferTimeGroup1 = CRapp.svg2.querySelector("#bufferTimeGroup1");
    // setTransformOriginCenter( bufferTimeGroup1 ); // ! when using scale or rotate, don't rely transform origin due to Safari bug
    bufferTimeGroup1.querySelector("#bufferTimeRings1").style.strokeDasharray = "0 2595";
    // can't transform on <tspan>, do it on the parent <text>
    const bufferTimeText = bufferTimeGroup1.querySelector("#bufferTimeNumber");
    const tmpBBox = bufferTimeText.getBBox();
    // console.log('DEV testing on text vertical positioning #################################');
    // const tmpBBox22 = document.querySelector('#msdContainer2 > svg #bufferTimeRings1').getBBox();
    // console.log(tmpBBox, tmpBBox22);
    // console.log((tmpBBox.y +0.5*tmpBBox.height), (tmpBBox22.y +0.5*tmpBBox22.height));
    bufferTimeText.dataset.fullWidth = tmpBBox.width; // save a copy so that we can do offset adjustment    
    // bufferTimeText.setAttribute('transform-origin', `${tmpBBox.x +0.5*tmpBBox.width} ${tmpBBox.y +0.5*tmpBBox.height}`);
    const tmpO = $a2757c1cf7e9a697$export$73569430680496de(bufferTimeText);
    CRapp.bufferTimeTextOrigin = $a2757c1cf7e9a697$export$73569430680496de(bufferTimeText);
    bufferTimeText.setAttribute("transform", `translate(${tmpO.x} ${tmpO.y}) scale(1 0.85) translate(-${tmpO.x} -${tmpO.y})`); // shrink down vertically the text a bit
    //* precalculate the offset width differences -- 
    const bufferTimeTextTspan = bufferTimeText.querySelector("tspan"); // ! for pre-calculating width. Always hidden
    for(let i = 0; i <= 60; i++){
        bufferTimeTextTspan.textContent = (0, $771006645357c94f$export$dd918e842b943f50)(i, 2); // feed in the number with 2 digits
        //*             width offset =             (full width  - new text width) / 2
        CRapp.bufferTimeTextWidthOffset[i] = Number(((tmpBBox.width - bufferTimeText.getBBox().width) * 0.5).toFixed(2));
    }
    //* ---- SHIP / top view
    const ritosTop = CRapp.svg2.querySelector("#ritosTop");
    // set transform origin  to center with offset on X axis to right by 11% of element's width,
    // so that shield looks proper when scaling up
    const tmpBBoxRT = ritosTop.getBBox();
    // ! offset the outline's origin to right little, so that when scaling up, it won't seem off for the saucer section
    ritosTop.dataset.transformOriginX = (tmpBBoxRT.x + 0.61 * tmpBBoxRT.width).toFixed(2);
    ritosTop.dataset.transformOriginY = (tmpBBoxRT.y + 0.5 * tmpBBoxRT.height).toFixed(2);
    $a2757c1cf7e9a697$export$5f3b35c2b8474baf(ritosTop);
    // ! calculated transform origin = 598 640
    // when export, only fill was used from Figma. If using stroke, this particular element's stroke becomes weird
    // -- remove shield unused fill attr
    ritosTop.querySelector('[id^="fieldOutline"]').removeAttribute("fill");
    ritosTop.onpointerdown = ()=>{
        (0, $633bc24a33489d19$export$1eb886acfb38646b)();
        (0, $633bc24a33489d19$export$8e0e260f5562ebea)();
    };
    // ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Safari doesn't seem to honor transform-origin change in SVG elements. Workaround:
    // ! don't offset transform origin, keep it at default's 0 0. Then do [translate(cx, cy)  scale() rotate()  translate(-cx, -cy)  ]
    // ! Can apply this to CSS as well
    //* ---- SHIP / front view
    const ritosFront = CRapp.svg2.querySelector("#ritosFront");
    // setTransformOriginCenter( ritosFront.querySelector('#rotatingShieldBg1') );  // ! true origin = 3010 1671
    // const tmpOrigin = ritosFront.querySelector('#rotatingShieldBg1').getAttribute('transform-origin')
    // ritosFront.querySelector('#arcRotate1').setAttribute('transform-origin', tmpOrigin);
    // ritosFront.querySelector('#arcRotate2').setAttribute('transform-origin', tmpOrigin);
    // ritosFront.querySelector('#arcRotate3').setAttribute('transform-origin', tmpOrigin);
    // ritosFront.querySelector('#arcRotate4').setAttribute('transform-origin', tmpOrigin);
    ritosFront.querySelector("#miniWarpCore").style.display = "none";
    ritosFront.onpointerdown = ()=>{
        (0, $633bc24a33489d19$export$a3c8ae47def8917d)();
    };
    //* ------ BRACKETS WINDOW
    // const bracketsWindow = document.querySelector('#msdContainer2 > svg #bracketsWindow');    
    // setTransformOriginCenter( bracketsWindow );  // ! true origin = 3010 1671 --- currently this is hardcoded into CSS.
    // ! ..................                                           Maybe set up CSS VAR in the future, similar to RED ALERT symbol's method
    //* ------ RED ALERT
    const redAlertSymbol = document.querySelector("#redAlertSymbol");
    redAlertSymbol.querySelector("path").setAttribute("fill", "url(#gradientRedAlertSymbol)");
    const rac = $a2757c1cf7e9a697$export$5f3b35c2b8474baf(redAlertSymbol);
    // ! use transform on "style", not to "attribute" so that it can be transitioned nice on all major browsers
    const racTa = `translate(${rac.x}px, ${rac.y}px)`; // !!! << need "px"
    const racTb = `translate(-${rac.x}px, -${rac.y}px)`;
    // !!   create a new CSS VAR that can be used in a class to force ringClock transform not being written by app init
    redAlertSymbol.style.setProperty("--defaultTranslatePlus", racTa);
    redAlertSymbol.style.setProperty("--defaultTranslateMinus", racTb);
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //* huggy KOALA reference 
    delete document.documentElement.dataset.huggy; // always reset here for starting and exiting
    const huggy = CRapp.svg2.querySelector("#huggy");
    huggy.onpointerdown = ()=>{
        (0, $44a29584ad670e34$export$63951974ec882883)(huggy);
    };
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // init btn pointer events BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    //* page routing btns =========================================
    CRapp.homeFrameDom.querySelector("#homeBtn1a").onpointerdown = ()=>{
        if (CRapp.pageStatus !== "transitioning") (0, $fd9e36a62431ae9f$export$304b0864fb001794)();
    };
    document.getElementById("btnShipToHome").onpointerdown = ()=>{
        if (CRapp.pageStatus !== "transitioning") (0, $fd9e36a62431ae9f$export$2cb9f69ba224823a)();
    };
    //* page routing btns =========================================
    // * ########## MAIN BTNs
    document.getElementById("homeBtn1b").onpointerdown = ()=>{
        if (CRapp.pageStatus !== "transitioning") (0, $44a29584ad670e34$export$f0abfad23975ce08)();
    };
    document.getElementById("homeBtn1c").onpointerdown = ()=>{
        if (CRapp.pageStatus !== "transitioning") (0, $ef363846f0e7e61f$export$ac98d773e506b9d)();
    };
    document.getElementById("homeBtn1d").onpointerdown = ()=>{
        if (CRapp.pageStatus !== "transitioning") $a2757c1cf7e9a697$export$27a97e56ea376f1e();
    };
    document.getElementById("homeBtn1e").onpointerdown = ()=>{
        $a2757c1cf7e9a697$export$44ae1f4c32a29f68();
    };
    // * ========= ABOUT PAGE
    document.querySelectorAll("#aboutPage .aboutClose").forEach((node)=>{
        node.onpointerdown = ()=>{
            $a2757c1cf7e9a697$export$44ae1f4c32a29f68();
        };
    });
    document.querySelector("#aboutPage .btnSettings").onpointerdown = ()=>{
        (0, $653c606c0d614d74$export$5262bb5d2849f15)();
    };
    // * ===========================================================
    // * init sub BTN Pointer Events
    CRapp.homeContentDom.querySelector('#homeConfig [id^="btnAudio"]').onpointerdown = function() {
        (0, $da19c3c2cc082ca0$export$c8cdacb776d3b001)();
        $a2757c1cf7e9a697$export$bdc5a3df8001f263(this, "blink2");
    };
    CRapp.homeContentDom.querySelector('#homeConfig [id^="btnReset"]').onpointerdown = ()=>{
        $a2757c1cf7e9a697$export$fbcfaec45996d1ba();
    };
    CRapp.homeContentDom.querySelector("#homeConfig #homeConfigTabBtn").onpointerdown = ()=>{
        $a2757c1cf7e9a697$export$6257e3bc44d03c80();
    };
    // * frameSHIP  Config Logs btns ===========
    CRapp.shipFrameDom.querySelector("#frameShipConfig").onpointerdown = (e)=>{
        if (!e.target.hasAttribute("id")) return;
        const id = e.target.getAttribute("id");
        if (id.indexOf("btnLogs") == 0) {
            $a2757c1cf7e9a697$export$9d6e39bfd8070d15("logs");
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Down", 0, 0, 0, 0.5);
        } else if (id.indexOf("btnConfigs") == 0) {
            $a2757c1cf7e9a697$export$9d6e39bfd8070d15("configs");
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Up", 0, 0, 0, 0.4);
        } else if (id.indexOf("btnAudio") == 0) {
            (0, $da19c3c2cc082ca0$export$c8cdacb776d3b001)();
            $a2757c1cf7e9a697$export$bdc5a3df8001f263(e.target, "blink2");
        } else if (id.indexOf("btnReset") == 0) $a2757c1cf7e9a697$export$fbcfaec45996d1ba();
        else if (id.indexOf("btnBuildVersion") == 0) $a2757c1cf7e9a697$export$44ae1f4c32a29f68();
        else if (id.indexOf("btnRedAlert") == 0) {
            if (CRapp.pageStatus !== "transitioning") $a2757c1cf7e9a697$export$27a97e56ea376f1e();
        }
    };
    CRapp.homeContentDom.querySelector("#homeClock").onpointerdown = function() {
        (0, $3197f154df3b8f49$export$189cabd35bb0035c)(this);
    };
    CRapp.shipFrameDom.querySelector("#shipClock").onpointerdown = function() {
        (0, $3197f154df3b8f49$export$189cabd35bb0035c)(this);
    };
    (0, $899111cd465e6cd4$export$e26511dac4440c6f)();
    //* setup SVG FILL  "Gradient Animations" ============================================================
    // -- can be done via javascript or right in css file
    // d3.select('#computerCore').attr('fill', 'url(#gradient1_topToBottom)');
    // -- OR --
    // svg #computerCore {
    //     fill: url(#gradient1_topToBottom);
    // }
    CRapp.shipContentDom.querySelector("#computerCoreLeft").setAttribute("fill", "url(#gradient3_rightToLeft)");
    CRapp.shipContentDom.querySelector("#computerCoreRight").setAttribute("fill", "url(#gradient3_leftToRight)");
    CRapp.shipContentDom.querySelector("#wc_matter").setAttribute("fill", "url(#gradient1_topToBottom)");
    CRapp.shipContentDom.querySelector("#wc_antimatter").setAttribute("fill", "url(#gradient1_bottomToTop)");
    CRapp.shipContentDom.querySelector("#nacelle1").setAttribute("fill", "url(#gradient1_rightToLeft)");
    CRapp.shipContentDom.querySelector("#bussard1").setAttribute("fill", "url(#gradient2_rightToLeft)");
    CRapp.shipContentDom.querySelectorAll("#bussard1 path").forEach((node)=>{
        node.setAttribute("fill", "url(#gradient2_rightToLeft)");
    });
    CRapp.shipContentDom.querySelector("#dish").setAttribute("fill", "url(#gradient2_leftToRight)");
    CRapp.shipContentDom.querySelector("#cylinderMain").setAttribute("fill", "url(#gradient3_topToBottom)");
    CRapp.shipContentDom.querySelector("#impulseEngine").setAttribute("fill", "url(#gradient2_rightToLeft)");
    // ship animations related -- init
    (0, $63a5b00227d0cbe7$export$43d4f9696d93e7dd)();
    (0, $2149f20d5f49b011$export$c0676d6c9e7dce11)();
    $a2757c1cf7e9a697$export$6556b97061fcd918(); // setup width info
    (0, $88becd1e1d3e4bd7$export$12ab491ecc4d1301)(); // init & setup random locations. lifts ani not running yet.
    (0, $63a5b00227d0cbe7$export$fcfbdb67292ec4e5)(); // init styles
    (0, $63a5b00227d0cbe7$export$26005a9ab81e8a26)();
    // ! DEV ============================
    // CRapp.stopAni = ()=>{
    //     stopAllShipAnimations();
    // }
    // CRapp.startAni = ()=>{
    //     startAllShipAnimations();
    // }
    // ! DEV ============================
    //* ############################################################################
    //* hide reference elements that will be needed from time to time
    //* ############################################################################
    //* remove reference elements that are no longer needed
    CRapp.svg1.querySelector("#reference16x9").remove(); // remove 16x9 base reference
    CRapp.svg2.querySelector("#reference16x9").remove(); // remove 16x9 base reference
    // document.querySelector('#msdContainer svg #jwstMaskRef').remove(); // this was need so that its parent MASK node will have our desired height when exporting from Figma
    //* ############################ 
    //* HEADER TEXT -- save default width/position ref data before making any custom custom text change
    const shipNameNode = CRapp.svg1.querySelector("#frameHeader #shipName");
    shipNameNode.dataset.defaultWidth = shipNameNode.getBBox().width;
    const headerCenterBar = CRapp.svg1.querySelector("#frameHeader #headerCenterBar");
    headerCenterBar.dataset.defaultWidth = headerCenterBar.getBBox().width;
    headerCenterBar.dataset.defaultX = headerCenterBar.getBBox().x;
    const shipRegistryNode = CRapp.svg1.querySelector("#frameHeader #shipRegistry");
    shipRegistryNode.dataset.defaultWidth = shipRegistryNode.getBBox().width;
    shipRegistryNode.dataset.defaultX = shipRegistryNode.getBBox().x;
    CRapp.uiInitiated = true;
    //* ############################################################################
    //* call another function that will init Pages, and load/unload pages with transition
    //* Adjust Resizing "FOR THE 1st TIME" before revealing any ui that might be size sensitive
    $a2757c1cf7e9a697$export$d7b85a0d97268c94();
// DEV =============
// document.querySelector('#svgAni').pauseAnimations();
// setTimeout(() => {
// document.querySelector('#svgAni').unpauseAnimations();
// }, 2000);
}
function $a2757c1cf7e9a697$export$57e6a6d9b8e425d7(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue("--" + varName).trim();
}
function $a2757c1cf7e9a697$export$72eabe1fd7b85356() {
    // replacing svg colors from Figma to CSS VARs
    d3.selectAll("#msdContainer svg *").each(function(d, i, n) {
        switch(n[i].getAttribute("fill")){
            case "#763806":
                n[i].setAttribute("fill", "var(--primaryDarker)");
                break;
            case "#875025":
                n[i].setAttribute("fill", "var(--primaryDark)");
                break;
            case "#D34E03":
                n[i].setAttribute("fill", "var(--primarySat)");
                break;
            case "#DF8313":
                n[i].setAttribute("fill", "var(--primary)");
                break;
            case "#DA9A4D":
                n[i].setAttribute("fill", "var(--primaryBright)");
                break;
            case "#FFC996":
                n[i].setAttribute("fill", "var(--primaryBrighter)");
                break;
            case "#FFF5EB":
                n[i].setAttribute("fill", "var(--primaryBrightest)");
                break;
            case "#FFD300":
                n[i].setAttribute("fill", "var(--secondary)");
                break;
            case "#FFE359":
                n[i].setAttribute("fill", "var(--secondaryBright)");
                break;
            case "#FFEC92":
                n[i].setAttribute("fill", "var(--secondaryBrighter)");
                break;
            case "#FFF5C7":
                n[i].setAttribute("fill", "var(--secondaryBrightest)");
                break;
            case "#171E22":
                n[i].setAttribute("fill", "var(--bgColor)");
                break;
            default:
                break;
        }
        switch(n[i].getAttribute("stroke")){
            case "#763806":
                n[i].setAttribute("stroke", "var(--primaryDarker)");
                break;
            case "#875025":
                n[i].setAttribute("stroke", "var(--primaryDark)");
                break;
            case "#D34E03":
                n[i].setAttribute("stroke", "var(--primarySat)");
                break;
            case "#DF8313":
                n[i].setAttribute("stroke", "var(--primary)");
                break;
            case "#DA9A4D":
                n[i].setAttribute("stroke", "var(--primaryBright)");
                break;
            case "#FFC996":
                n[i].setAttribute("stroke", "var(--primaryBrighter)");
                break;
            case "#FFF5EB":
                n[i].setAttribute("stroke", "var(--primaryBrightest)");
                break;
            case "#FFD300":
                n[i].setAttribute("stroke", "var(--secondary)");
                break;
            case "#FFE359":
                n[i].setAttribute("stroke", "var(--secondaryBright)");
                break;
            case "#FFEC92":
                n[i].setAttribute("stroke", "var(--secondaryBrighter)");
                break;
            case "#FFF5C7":
                n[i].setAttribute("stroke", "var(--secondaryBrightest)");
                break;
            default:
                break;
        }
    });
}
function $a2757c1cf7e9a697$export$f4ac3bcd1bdb936d() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.redAlertStatus) {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("negative", 0, 0, 0, 0.5);
        $a2757c1cf7e9a697$export$915e86dc1242cd73(`unable to comply • red alert in progress`);
        return;
    }
    //* only change color scheme when RED ALERT it NOT on
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0, 0, 0, 0.3);
    const newColorIndex = (CRapp.currentColorScheme + 1) % (CRapp.colorSchemeNames.length - 1); // ! don't cycle through the last index, which is RED ALERT
    $a2757c1cf7e9a697$export$f2d00fe8ce80fd84(newColorIndex);
    $a2757c1cf7e9a697$export$915e86dc1242cd73(`color scheme <${CRapp.colorSchemeNames[newColorIndex]}> activated`);
    (0, $653c606c0d614d74$export$731cb1e997115006)("colorSchemeName", CRapp.colorSchemeNames[newColorIndex]);
    (0, $3e19511ba4493dfd$export$aac5c958cc8264ab)("setStatus", (0, $3e19511ba4493dfd$export$7f0366e849f5576a)());
}
function $a2757c1cf7e9a697$export$f2d00fe8ce80fd84(newIndex = 0) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    // !!! special case for BLUEPRINT =================================================
    if (CRapp.colorSchemeNames[newIndex] == "Shipyard Blueprint") document.documentElement.dataset.colorScheme = "blueprint";
    else if (CRapp.colorSchemeNames[newIndex] == "Shipyard Blueprint II") document.documentElement.dataset.colorScheme = "blueprint2";
    else document.documentElement.dataset.colorScheme = newIndex;
    CRapp.currentColorScheme = newIndex;
}
function $a2757c1cf7e9a697$export$878a77c0bab57c97(newColorSchemeName = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const newColorSchemeIndex = CRapp.colorSchemeNames.indexOf(newColorSchemeName);
    if (newColorSchemeIndex != -1) {
        $a2757c1cf7e9a697$export$f2d00fe8ce80fd84(newColorSchemeIndex);
        return true;
    } else {
        console.log(`Error: Requested color scheme change was not performed. [${newColorSchemeName}] is not a valid color scheme name.`);
        return false;
    }
}
function $a2757c1cf7e9a697$export$fbcfaec45996d1ba() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Up", 0, 0, 0, 0.5);
    (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("powerUp", 0, 0, 0, 0.5, 1.3);
    // reset COLOR SCHEME
    document.documentElement.dataset.colorScheme = 0;
    CRapp.currentColorScheme = 0;
    // reset BG HUE & LEVEL
    CRapp.bgHue = 0;
    CRapp.bgLevel = 0;
    CRapp.bgPreBlackLevel = 0;
    CRapp.bgShowingBlack = true;
    document.documentElement.style.setProperty("--bgColorHue", 0);
    document.documentElement.style.setProperty("--bgColorLevel", `0%`);
    delete document.documentElement.dataset.bgWithHue;
    // reset VIGNETTE
    delete document.documentElement.dataset.vignette;
    setTimeout(()=>{
        document.documentElement.dataset.vignette = "";
    }, 20);
    // reset GLARE
    delete document.documentElement.dataset.ldGlare;
    setTimeout(()=>{
        document.documentElement.dataset.ldGlare = "";
    }, 20);
    //* cancel RED ALERT
    if (CRapp.redAlertStatus) $a2757c1cf7e9a697$export$27a97e56ea376f1e();
    $a2757c1cf7e9a697$export$915e86dc1242cd73(`LCARS STYLES RESET COMPLETE`, "timePrefix");
    (0, $653c606c0d614d74$export$731cb1e997115006)("colorSchemeName", CRapp.colorSchemeNames[0]);
    (0, $653c606c0d614d74$export$731cb1e997115006)("bgHue", CRapp.bgHue);
    (0, $653c606c0d614d74$export$731cb1e997115006)("bgLevel", CRapp.bgLevel);
    (0, $653c606c0d614d74$export$731cb1e997115006)("softVignette", true);
    (0, $653c606c0d614d74$export$731cb1e997115006)("ldGlare", true);
    (0, $3e19511ba4493dfd$export$aac5c958cc8264ab)("setStatus", (0, $3e19511ba4493dfd$export$7f0366e849f5576a)());
}
function $a2757c1cf7e9a697$export$5cff1c8d974e3f0b(toThisNewBgHue = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (toThisNewBgHue === null) {
        if (CRapp.colorSchemeNames[CRapp.currentColorScheme].toLocaleLowerCase().includes("blueprint") || CRapp.colorSchemeNames[CRapp.currentColorScheme].toLocaleLowerCase().includes("beige")) {
            $a2757c1cf7e9a697$export$915e86dc1242cd73(`BG color cannot be changed with this color scheme`);
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("negative", 0, 0, 0, 0.5);
            return;
        }
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX1Up", 0, 0, 0, 0.4);
    } else if (toThisNewBgHue < 0 && toThisNewBgHue > 360) toThisNewBgHue = 0;
    const hueIncrement = 20;
    const defaultLevelWithHue = 8;
    let newBgHue = toThisNewBgHue === null ? CRapp.bgHue + hueIncrement : toThisNewBgHue; // * don't use mod here.. we might use some incremental values that won't reset back to exactly 0
    if (newBgHue > 360) {
        if (CRapp.bgShowingBlack) {
            // move away from BLACK color, and restart hue cycle change
            CRapp.bgShowingBlack = false;
            newBgHue = hueIncrement;
            CRapp.bgHue = newBgHue;
            document.documentElement.dataset.bgWithHue = "";
            CRapp.bgLevel = CRapp.bgPreBlackLevel;
            if (CRapp.bgLevel == 0) CRapp.bgLevel = defaultLevelWithHue;
            document.documentElement.style.setProperty("--bgColorLevel", `${CRapp.bgLevel}%`);
        } else {
            // reset hue to 0, and show black
            newBgHue = 0;
            CRapp.bgShowingBlack = true;
            CRapp.bgPreBlackLevel = CRapp.bgLevel;
            CRapp.bgLevel = 0;
            document.documentElement.style.setProperty("--bgColorLevel", `0%`);
            delete document.documentElement.dataset.bgWithHue;
        }
    } else {
        CRapp.bgShowingBlack = false;
        CRapp.bgHue = newBgHue;
        document.documentElement.dataset.bgWithHue = "";
        if (CRapp.bgLevel == 0) {
            CRapp.bgLevel = defaultLevelWithHue;
            document.documentElement.style.setProperty("--bgColorLevel", `${CRapp.bgLevel}%`);
        }
    }
    document.documentElement.style.setProperty("--bgColorHue", `${newBgHue}`);
    if (toThisNewBgHue === null) $a2757c1cf7e9a697$export$915e86dc1242cd73(`Background Hue set to ${newBgHue}`);
}
function $a2757c1cf7e9a697$export$1bda2b6d3dd4d993(toThisNewBgLevel = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (toThisNewBgLevel === null) {
        if (CRapp.colorSchemeNames[CRapp.currentColorScheme].toLocaleLowerCase().includes("blueprint") || CRapp.colorSchemeNames[CRapp.currentColorScheme].toLocaleLowerCase().includes("beige")) {
            $a2757c1cf7e9a697$export$915e86dc1242cd73(`bg level cannot be changed with this color scheme`);
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("negative", 0, 0, 0, 0.5);
            return;
        }
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX3Up", 0, 0, 0, 0.4);
    }
    CRapp.bgLevel = toThisNewBgLevel === null ? (CRapp.bgLevel + 4) % 20 : toThisNewBgLevel % 20;
    CRapp.bgPreBlackLevel = CRapp.bgLevel;
    document.documentElement.style.setProperty("--bgColorLevel", `${CRapp.bgLevel}%`);
    if (toThisNewBgLevel === null) $a2757c1cf7e9a697$export$915e86dc1242cd73(`Background Light Level set to ${CRapp.bgLevel}%`);
}
function $a2757c1cf7e9a697$export$6b9b218407705316(force = null, noLog = null, mute = null) {
    let setVignetteOn;
    if (force === true) setVignetteOn = true;
    else if (force === false) setVignetteOn = false;
    else setVignetteOn = !("vignette" in document.documentElement.dataset);
    if (setVignetteOn) {
        document.documentElement.dataset.vignette = "";
        if (noLog !== "noLog") $a2757c1cf7e9a697$export$915e86dc1242cd73(`soft vignette mode on`);
        if (mute !== "mute") (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("longTaskLow", 0, 1.2, 0, 0.3);
    } else {
        delete document.documentElement.dataset.vignette;
        if (noLog !== "noLog") $a2757c1cf7e9a697$export$915e86dc1242cd73(`soft vignette mode off`);
        if (mute !== "mute") (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Upper", 0, 0, 0, 0.3);
    }
    return setVignetteOn;
}
function $a2757c1cf7e9a697$export$4a4f808287652e93(force = null, noLog = null, mute = null) {
    let setGlareOn;
    if (force === true) setGlareOn = true;
    else if (force === false) setGlareOn = false;
    else setGlareOn = !("ldGlare" in document.documentElement.dataset);
    if (setGlareOn) {
        // randomize position & width
        // default is LEFT at 40%  with WIDTH 24.7%   ....... LEFT at 70.6%  with WIDTH 15.4%
        // resulting .....  @ 40%           @ 64.7%                 @ 70.6%           @ 86%
        // ================
        // good zone       @ 39%                                                        92%
        //                        92 - 39 = 53% wide =  large [20~31%]     gap [8~25%]       small[14~20%]
        if (mute !== "mute") (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("exitTask", 0, 0, 0, 0.3);
        const div1 = document.querySelector("#glare div:first-child");
        const div2 = document.querySelector("#glare div:nth-child(2)");
        const rndStyle = Math.random();
        if (rndStyle < 0.33) {
            // use design default
            div1.style.width = null;
            div1.style.left = null;
            div2.style.width = null;
            div2.style.left = null;
        } else if (rndStyle < 0.67) {
            let tmpLeft = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(39, 47);
            let tmpWidth = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(53, 67) - tmpLeft;
            div1.style.left = `${tmpLeft}%`;
            div1.style.width = `${tmpWidth}%`;
            tmpLeft = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(69, 76);
            tmpWidth = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(82, 92) - tmpLeft;
            div2.style.left = `${tmpLeft}%`;
            div2.style.width = `${tmpWidth}%`;
        } else {
            let tmpLeft1 = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(39, 47);
            let tmpWidth1 = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(53, 60) - tmpLeft1;
            div1.style.left = `${tmpLeft1}%`;
            div1.style.width = `${tmpWidth1}%`;
            tmpLeft1 = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(62, 76);
            tmpWidth1 = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(82, 92) - tmpLeft1;
            div2.style.left = `${tmpLeft1}%`;
            div2.style.width = `${tmpWidth1}%`;
        }
        document.documentElement.dataset.ldGlare = "";
        if (noLog !== "noLog") $a2757c1cf7e9a697$export$915e86dc1242cd73(`Lower Decks Screen Glare mode on`);
    } else {
        delete document.documentElement.dataset.ldGlare;
        if (noLog !== "noLog") $a2757c1cf7e9a697$export$915e86dc1242cd73(`Lower Decks Screen Glare mode off`);
        if (mute !== "mute") (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningLow", 0, 0, 0, 0.3);
    }
    return setGlareOn;
}
function $a2757c1cf7e9a697$export$d7b85a0d97268c94() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (!CRapp.uiInitiated) return;
    const docBBox = document.getElementById("msdContainer").getBoundingClientRect();
    const topOffsetAmount = .15; // shift up by 15%
    if (docBBox.width / docBBox.height > 16 / 9) {
        // if doc ratio is too wide, calc glareBox width based on doc height
        document.getElementById("glare").style.width = docBBox.height * 16 / 9 + "px";
        const newHeight = docBBox.height * (1 + topOffsetAmount);
        document.getElementById("glare").style.height = newHeight + "px";
        const topOffset = -newHeight * topOffsetAmount;
        document.getElementById("glare").style.top = topOffset + "px";
        document.getElementById("glare").style.left = (docBBox.width - docBBox.height * 16 / 9) * .5 + "px";
        document.getElementById("vignette").style.width = docBBox.height * 16 / 9 + "px";
        document.getElementById("vignette").style.height = docBBox.height + "px";
        document.getElementById("vignette").style.top = 0;
        document.getElementById("vignette").style.left = (docBBox.width - docBBox.height * 16 / 9) * .5 + "px";
    } else {
        // if doc ratio is too tall, .....
        document.getElementById("glare").style.width = "100%";
        const newHeight1 = docBBox.width * 9 / 16 * (1 + topOffsetAmount);
        document.getElementById("glare").style.height = newHeight1 + "px";
        const topOffset1 = -newHeight1 * topOffsetAmount;
        document.getElementById("glare").style.top = (docBBox.height - docBBox.width * 9 / 16) * .5 + topOffset1 + "px";
        document.getElementById("glare").style.left = 0;
        document.getElementById("vignette").style.width = "100%";
        document.getElementById("vignette").style.height = docBBox.width * 9 / 16 + "px";
        document.getElementById("vignette").style.top = (docBBox.height - docBBox.width * 9 / 16) * .5 + "px";
        document.getElementById("vignette").style.left = 0;
    }
    // LOG DISPLAY adjusting
    $a2757c1cf7e9a697$export$140a85b3298067e4();
    // get current svg scale
    document.getElementById("msdContainer");
    const clientRect = CRapp.svg1.querySelector("#msd").getBoundingClientRect();
    const svgBBox = CRapp.svg1.querySelector("#msd").getBBox();
    const svgScale = Number((clientRect.width / svgBBox.width).toFixed(3));
    // console.log('current scale: ' + svgScale );
    document.documentElement.style.setProperty("--svgScale", svgScale);
    // adjust YouTube Iframe
    (0, $6d58630e4469e477$export$365bebd2e24b0755)();
}
function $a2757c1cf7e9a697$export$44ae1f4c32a29f68(mute = null) {
    //* css controls the opacity of the about page.
    //* Visibility will get set in JS with delay so that opacity transition is shown to users
    const aboutPage = document.getElementById("aboutPage");
    if (document.documentElement.dataset.about !== undefined) {
        aboutPage.style.opacity = 0;
        setTimeout(()=>{
            delete document.documentElement.dataset.about;
            // aboutPage.style.visibility = 'hidden';
            aboutPage.style.display = "none";
        }, 400); //* css transition duration set to .4s
        if (mute !== "mute") (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)((0, $771006645357c94f$export$de12a21935b7f164)([
            "beepX3Downer",
            "beepX2Downer",
            "beepX1Downer"
        ]), 0, 0, 0, 0.3);
    } else {
        document.getElementById("updateLog").classList.remove("show"); // reset 
        document.documentElement.dataset.about = "show";
        // aboutPage.style.visibility = 'visible';
        aboutPage.style.display = null;
        aboutPage.style.opacity = 0;
        setTimeout(()=>{
            aboutPage.style.opacity = 1;
        }, 50);
        aboutPage.querySelector("div").scrollTop = 0; // reset scrolling to top (placed this after display != none)
        if (mute !== "mute") {
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Downer", 0, 0, 0, 0.4);
            (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningLow", 0.15, 0, 0, 0.3);
        }
    }
}
function $a2757c1cf7e9a697$export$140a85b3298067e4() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    if (CRapp.logPlaceholderDom == null) return;
    const placeholderRect = CRapp.logPlaceholderDom.getBoundingClientRect(); // ! get ref for html BBox, not svg BBox
    CRapp.logDisplayDom.style.top = placeholderRect.y + "px";
    CRapp.logDisplayDom.style.left = placeholderRect.x + "px";
    CRapp.logDisplayDom.style.width = placeholderRect.width + "px";
    CRapp.logDisplayDom.style.height = placeholderRect.height + "px";
    const fontSizeFactor = CRapp.pageState == "ship" ? 0.045 : 0.036;
    CRapp.logDisplayDom.style.fontSize = placeholderRect.width * fontSizeFactor + "px";
}
function $a2757c1cf7e9a697$export$5757c822a6ab549a() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    setInterval(()=>{
        // only generate & print log if [# seconds] has elapsed since any entry has been logged
        if (performance.now() - CRapp.mostRecentLogTime < 6000) return; // ! exit
        if (Math.random() < 0.5) return; // ! early exit
        $a2757c1cf7e9a697$var$createRandomLog();
        //* immediate create another log (back to back)
        if (Math.random() > 0.3) return; // ! exit
        setTimeout(()=>{
            $a2757c1cf7e9a697$var$createRandomLog();
        }, 550);
    }, 5573);
}
function $a2757c1cf7e9a697$var$createRandomLog() {
    const rndType = (0, $771006645357c94f$export$3c5f89dae98e900b)(8);
    let rndText = "";
    let showTimePrefix = false;
    if (rndType == 0) rndText = `${(0, $771006645357c94f$export$cc4d98609e3a31e7)(3, 5)} ${(0, $771006645357c94f$export$de12a21935b7f164)((0, $771006645357c94f$export$2f0ee02dbc24ab6e))} • ${(0, $771006645357c94f$export$cc4d98609e3a31e7)(2, 4)} ${(0, $771006645357c94f$export$de12a21935b7f164)((0, $771006645357c94f$export$d2eb0d710fd7e6a3))}`;
    else if (rndType == 1) rndText = `Task: ${(0, $771006645357c94f$export$de12a21935b7f164)((0, $771006645357c94f$export$6bc1c44d5e100318))} / ${(0, $771006645357c94f$export$cc4d98609e3a31e7)(2, 7)}.${(0, $771006645357c94f$export$cc4d98609e3a31e7)(1, 3)} ${(0, $771006645357c94f$export$cc4d98609e3a31e7)(2, 4)}`;
    else if (rndType == 2) rndText = `${(0, $771006645357c94f$export$de12a21935b7f164)([
        "Ensign",
        "Lt."
    ])} ${(0, $771006645357c94f$export$cc4d98609e3a31e7)(4)}: ${(0, $771006645357c94f$export$de12a21935b7f164)((0, $771006645357c94f$export$6bc1c44d5e100318))} ${(0, $771006645357c94f$export$cc4d98609e3a31e7)(2, 4)}`;
    else if (rndType == 3) {
        showTimePrefix = true;
        rndText = `${(0, $771006645357c94f$export$de12a21935b7f164)((0, $771006645357c94f$export$d2eb0d710fd7e6a3))} ${(0, $771006645357c94f$export$cc4d98609e3a31e7)(2, 4)} - ${(0, $771006645357c94f$export$de12a21935b7f164)((0, $771006645357c94f$export$d2eb0d710fd7e6a3))} ${(0, $771006645357c94f$export$cc4d98609e3a31e7)(2, 4)}`;
    } else if (rndType == 4) {
        const tmpRnd1 = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(9, 19);
        rndText = (0, $771006645357c94f$export$de12a21935b7f164)([
            `Current Heading: Starbase 80 • for ${(0, $771006645357c94f$export$de12a21935b7f164)([
                "crew exchange",
                "ship-wide maintenance"
            ])}`,
            `Drink H2O: Holodeck might be fake, dehydration is very real`,
            `${(0, $771006645357c94f$export$de12a21935b7f164)([
                "Apple",
                "Blueberry",
                "Raspberry"
            ])} Pie Eating Contest in ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 7)} days. Prize: A ${(0, $771006645357c94f$export$de12a21935b7f164)([
                "brand new",
                "slightly used"
            ])} ${(0, $771006645357c94f$export$de12a21935b7f164)([
                "Padd",
                "T88"
            ])}`,
            `Upcoming assignment: Holodeck ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 4)} waste removal`,
            `carbon filter maintenance on deck ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 13)} • section ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(11, 29)}`,
            `${(0, $771006645357c94f$export$de12a21935b7f164)([
                "PLASMA LEAK",
                "COOLANT LEAK",
                "ELEVATED TEMP.",
                "DECONTAMINATION"
            ])} IN JEFFERIES TUBE ON DECK ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(3, 13)} JUNCTIONS ${tmpRnd1}-${tmpRnd1 + 3}`
        ]);
    } else if (rndType == 5) rndText = (0, $771006645357c94f$export$de12a21935b7f164)([
        `Sonic Showers Advisory: Always replicate a larger towel`,
        `When in doubt, always use a medical tricorder`,
        `Engineering Reporting: Maximum Warp Me•Who`,
        `The purpose of life is a life of purpose`,
        `Reminder: Anomaly consolidation duty in ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 12)} hours`,
        `Warning • Water leak on deck 11 below the Cetacean Ops`,
        `Alert: Cosmic Koala has been spotted by ${(0, $771006645357c94f$export$de12a21935b7f164)([
            "Ensign",
            "Lt Junior"
        ])} ${(0, $771006645357c94f$export$de12a21935b7f164)([
            "Mitchell",
            "Stark",
            "Crichton",
            "Targaryen"
        ])}`
    ]);
    else if (rndType == 6) {
        const tmpRnd2 = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 7);
        rndText = (0, $771006645357c94f$export$de12a21935b7f164)([
            `Turboshaft lubing required between deck ${tmpRnd2} & deck ${tmpRnd2 + (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 6)} S•${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 20)}`,
            `duty call: Post Anomaly cleanup on deck ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 13)} section ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(10, 36)}`,
            `TRANSPORTER ROOM ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 5)} ${(0, $771006645357c94f$export$de12a21935b7f164)([
                "CURRENTLY IN USE",
                "REPAIRMENT NEEDED",
                "UNDER MAINTENANCE",
                "HEISENBERG COMPENSATOR STATUS: UNCERTAIN"
            ])}`,
            `Upper deckers rumor: Rubber Ducky room has vanished`,
            `Question of the week: Can a transporter transport a transporter?`,
            `Question from lower decks: Is holodeck Inception a thing?`,
            `Space news: Okudagram version 2383 beta ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 13)} testing underway`
        ]);
    } else {
        const rndType2 = (0, $771006645357c94f$export$3c5f89dae98e900b)(5);
        if (rndType2 == 0) rndText = (0, $771006645357c94f$export$de12a21935b7f164)([
            "DILITHIUM CHAMBER CONTAINMENT LEVEL",
            "ANTIMATTER GENERATOR EFFICIENCY",
            "FUSION REACTOR OUTPUT",
            "WARP COILS EFFICIENCY",
            "PLASMA INJECTOR STATUS"
        ]) + ": " + (0, $771006645357c94f$export$24d4d9f7cb1f68df)(70, 100) + "%";
        else if (rndType2 == 1) rndText = "TIME REMAINING ON LEVEL " + (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 5) + " DIAGNOSTIC: ≈ " + (0, $771006645357c94f$export$24d4d9f7cb1f68df)(0, 5) + "HR " + (0, $771006645357c94f$export$24d4d9f7cb1f68df)(2, 59) + "MIN";
        else if (rndType2 == 2) rndText = "ANOMALY DETECTED INSIDE HOLODECK " + (0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 3) + " >> " + (0, $771006645357c94f$export$de12a21935b7f164)([
            "BADGEY 2.0",
            "SUPER KNICK KNACK",
            "HOLO M.McMAHAN",
            "A FUNCTIONAL TOILET",
            "PROFESSOR MORIARTY",
            "COWBOY DATAS",
            "ENSIGN SESKA",
            "SMART BARCLAY",
            "DOCTOR CHAOTICA"
        ]);
        else if (rndType2 == 3) rndText = "WARNING • " + (0, $771006645357c94f$export$de12a21935b7f164)([
            `turbolift ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(1, 5)}`,
            `replicator A${(0, $771006645357c94f$export$cc4d98609e3a31e7)(2)}`
        ]) + " TEMPORARILY INOPERABLE";
        else rndText = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(17, 47) + " SUBSPACE FREQUENCIES " + (0, $771006645357c94f$export$de12a21935b7f164)([
            "ESTABLISHED",
            "DETECTED",
            "MONITORED",
            "LOGGED",
            "ARE CURRENTLY OPEN"
        ]);
    }
    $a2757c1cf7e9a697$export$915e86dc1242cd73(rndText, showTimePrefix ? "timePrefix" : null);
}
function $a2757c1cf7e9a697$export$347205875fe8a919() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.logPinned = false;
}
function $a2757c1cf7e9a697$export$915e86dc1242cd73(logText = " ", timePrefix = null, pinningRequest = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.mostRecentLogTime = performance.now();
    const logTextOutput = timePrefix === "timePrefix" ? `${(0, $771006645357c94f$export$1428f42a7de81803)()} • ${logText}` : logText;
    const logDisplay = document.getElementById("logDisplay");
    const newLog = document.createElement("span");
    newLog.textContent = logTextOutput.toUpperCase();
    // logDisplay.appendChild(newLog);
    // this log should be the 1st one & pinned, regardless if there's an active pinned log or not
    // only update status when there's a pinning request
    if (pinningRequest === true) CRapp.logPinned = true;
    if (pinningRequest !== true && CRapp.logPinned) logDisplay.insertBefore(newLog, logDisplay.firstChild.nextSibling);
    else logDisplay.insertBefore(newLog, logDisplay.firstChild);
    if (CRapp.logDisplayToConsole) console.log(logTextOutput);
    (0, $3197f154df3b8f49$export$9504c7d42aa1dd15)();
    // CLEAN UP span tag
    const logsCount = logDisplay.childElementCount;
    const logsCountToKeep = 10;
    if (logsCount > 2.5 * logsCountToKeep) for(let i = 0; i < logsCount - logsCountToKeep; i++)logDisplay.removeChild(logDisplay.lastElementChild);
}
function $a2757c1cf7e9a697$export$9d6e39bfd8070d15(toShow = "logs") {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const blinkClassStyle = (0, $771006645357c94f$export$de12a21935b7f164)([
        "blink1",
        "blink2"
    ]);
    if (toShow == "logs") {
        CRapp.configContentDom.style.visibility = "hidden";
        CRapp.configContentDom.style.opacity = 0;
        CRapp.configContentDom.classList.remove("enabled");
        CRapp.shipFrameDom.querySelector("#frameShipConfig").classList.remove("configsEnabled");
        CRapp.logDisplayDom.style.visibility = "visible";
        CRapp.logDisplayDom.style.opacity = 1;
        CRapp.logDisplayDom.classList.add(blinkClassStyle);
        setTimeout(()=>{
            CRapp.logDisplayDom.classList.remove(blinkClassStyle);
        }, 600);
    } else {
        CRapp.logDisplayDom.style.visibility = "hidden";
        CRapp.logDisplayDom.style.opacity = 0;
        CRapp.configContentDom.style.visibility = "visible";
        CRapp.configContentDom.style.opacity = 1;
        CRapp.configContentDom.classList.add("enabled");
        CRapp.shipFrameDom.querySelector("#frameShipConfig").classList.add("configsEnabled");
        CRapp.configContentDom.classList.add(blinkClassStyle);
        setTimeout(()=>{
            CRapp.configContentDom.classList.remove(blinkClassStyle);
        }, 600);
    }
}
function $a2757c1cf7e9a697$export$51e541a0222a493e() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.bubbleTextTimer = setInterval(()=>{
        CRapp.homeContentDom.querySelectorAll('[id^="bubbleText1"]').forEach((element)=>{
            if (Math.random() < .3) element.setAttribute("stroke-dashoffset", (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-450, 450));
            if (Math.random() < .3) element.setAttribute("stroke-dasharray", `${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 250)} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 120)} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 250)} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 120)} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 250)} ${(0, $771006645357c94f$export$24d4d9f7cb1f68df)(20, 120)}`);
            if (Math.random() < .3) element.setAttribute("stroke", `var(--${(0, $771006645357c94f$export$de12a21935b7f164)(CRapp.allColorCssVarNames)})`);
            element.style.transitionDelay = (0, $771006645357c94f$export$24d4d9f7cb1f68df)(-300, 900) + "ms"; // so that not all animation seem to start at the same time
            if (Math.random() < .2) element.classList.add("blink2");
            else element.classList.remove("blink2");
            element.style.opacity = (0, $771006645357c94f$export$51e16a050e2bf069)(0.3, 1);
        });
    }, 1700);
}
function $a2757c1cf7e9a697$export$54be3cd0bd47bcf0() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    clearInterval(CRapp.bubbleTextTimer);
    CRapp.bubbleTextTimer = null;
}
function $a2757c1cf7e9a697$var$redAlertWarningLogs() {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    $a2757c1cf7e9a697$export$915e86dc1242cd73("• A l e r t •");
    CRapp.redAlertTimer2 = setTimeout(()=>{
        $a2757c1cf7e9a697$export$915e86dc1242cd73(`• • A\u2002 l\u2002 e\u2002 r\u2002 t • •`);
        CRapp.redAlertTimer2 = setTimeout(()=>{
            $a2757c1cf7e9a697$export$915e86dc1242cd73(`• • • T h i s\u2002 i s\u2002 \u2002 R\u2002 e\u2002 d \u2002 \u2002 A\u2002 l\u2002 e\u2002 r\u2002 t • • •`);
        }, 1500);
    }, 1200);
}
function $a2757c1cf7e9a697$export$27a97e56ea376f1e(force, updatingServer = "updatingServer") {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    CRapp.redAlertStatus = !CRapp.redAlertStatus;
    if (CRapp.redAlertStatus) {
        // turning effects ON
        document.documentElement.dataset.redAlert = "";
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("startRedAlert");
        // set redAlert blink class to some elements
        CRapp.svg1.getElementById("frameHeader").classList.add("redAlertBlink");
        CRapp.svg2.getElementById("raBar").classList.add("redAlertBlink");
        CRapp.svg2.getElementById("raText").classList.add("redAlertBlink");
        CRapp.homeFrameDom.querySelector("#homeBtn1d > path").classList.add("redAlertBlink"); //* don't class on btn directly...
        // ... otherwise, transition opacity from home to ship can affect this btn
        CRapp.homeContentDom.querySelector("#homeClock").classList.add("redAlertBlink");
        CRapp.homeContentDom.querySelector("#homeDate").classList.add("redAlertBlink");
        CRapp.shipFrameDom.querySelectorAll("#subTitleBar, #subTitle, #shipFrame1d, #shipFrame1e, #shipClock, #btnRedAlert").forEach((element)=>{
            element.classList.add("redAlertBlink");
        });
        // start warning logs ========
        $a2757c1cf7e9a697$export$915e86dc1242cd73("W a r n i n g", "timePrefix");
        CRapp.redAlertTimer2 = setTimeout(()=>{
            $a2757c1cf7e9a697$var$redAlertWarningLogs();
        }, 1000);
        CRapp.redAlertTimer = setInterval(()=>{
            $a2757c1cf7e9a697$var$redAlertWarningLogs();
        }, 8000);
    } else {
        // turning effects OFF
        delete document.documentElement.dataset.redAlert;
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("stopRedAlert");
        // remove redAlert blink class to some elements
        CRapp.svg1.getElementById("frameHeader").classList.remove("redAlertBlink");
        CRapp.svg2.getElementById("raBar").classList.remove("redAlertBlink");
        CRapp.svg2.getElementById("raText").classList.remove("redAlertBlink");
        CRapp.homeFrameDom.querySelector("#homeBtn1d > path").classList.remove("redAlertBlink");
        CRapp.homeContentDom.querySelector("#homeClock").classList.remove("redAlertBlink");
        CRapp.homeContentDom.querySelector("#homeDate").classList.remove("redAlertBlink");
        CRapp.shipFrameDom.querySelectorAll("#subTitleBar, #subTitle, #shipFrame1d, #shipFrame1e, #shipClock, #btnRedAlert").forEach((element)=>{
            element.classList.remove("redAlertBlink");
        });
        // turn off warning logs ========
        clearInterval(CRapp.redAlertTimer);
        clearTimeout(CRapp.redAlertTimer2);
        CRapp.redAlertTimer = null;
        CRapp.redAlertTimer2 = null;
        $a2757c1cf7e9a697$export$915e86dc1242cd73("Alert Status: Normal", "timePrefix");
    }
    // * ============== update server on the new Red Alert status
    if (CRapp.serverApiConnection && updatingServer == "updatingServer") try {
        (0, $3e19511ba4493dfd$export$aac5c958cc8264ab)("setStatus", (0, $3e19511ba4493dfd$export$7f0366e849f5576a)());
    } catch (error) {}
}
function $a2757c1cf7e9a697$export$6257e3bc44d03c80(force = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const configNode = CRapp.svg1.querySelector("#homeConfig");
    const configTabBtn = configNode.querySelector("#homeConfigTabBtn");
    const configTabBtnBBox = configTabBtn.getBBox();
    const configBBox = configNode.getBBox();
    const windowNode = CRapp.svg1.querySelector("#homeWindow");
    const windowNodeBBox = windowNode.getBBox();
    let sizingTo;
    if (force == "normal") sizingTo = "normal";
    if (force == "minimized") sizingTo = "minimized";
    else sizingTo = "homeConfigMinimized" in document.documentElement.dataset ? "normal" : "minimized";
    // ==========================================================
    d3.selectAll([
        windowNode,
        configNode
    ]).interrupt();
    if (sizingTo == "minimized") {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("longTaskLow", 0, 0, 0, 0.3);
        document.documentElement.dataset.homeConfigMinimized = "init"; //* will trigger css opacity change
        // semi hide it
        CRapp.configContentDom.classList.add("hide");
        const dY = windowNodeBBox.height - (configTabBtnBBox.y - windowNodeBBox.y) - configTabBtnBBox.height;
        d3.select(windowNode).transition().duration(400).ease(d3.easeBackIn).attr("transform", `translate(${windowNodeBBox.width} 0)`);
        d3.select(configNode).transition().delay(100).duration(900).ease(d3.easeBackOut.overshoot(1.1)).attr("transform", `translate(${configBBox.width - configTabBtnBBox.width} 0)`).transition().delay(200).duration(900).ease(d3.easeCubicInOut).attr("transform", `translate(${configBBox.width - configTabBtnBBox.width} ${dY})`).on("end", ()=>{
            document.documentElement.dataset.homeConfigMinimized = "";
        });
    } else {
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0, 0, 0, 0.3);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("warningLow", 0.65, 0, 0, 0.5);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("beepX2Up", 1.3, 0, 0, 0.3);
        document.documentElement.dataset.homeConfigMinimized = "exit"; //* will trigger css opacity change
        d3.select(configNode).transition().duration(600).ease(d3.easeBackOut.overshoot(1.3)).attr("transform", `translate(0 55)`).transition().duration(600).ease(d3.easeCubicOut).attr("transform", `translate(0 0)`).on("end", ()=>{
            CRapp.configContentDom.classList.remove("hide");
        });
        if (windowNode.style.opacity < 0) windowNode.style.opacity = 0;
        d3.select(windowNode).transition().duration(300).ease(d3.easeCubicOut).attr("transform", `translate(0 0)`).transition().delay(300).duration(0).on("end", ()=>{
            delete document.documentElement.dataset.homeConfigMinimized;
        });
    }
}
function $a2757c1cf7e9a697$export$d620722169cc0b8f(force = null) {
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const homeClock = CRapp.svg1.querySelector("#homeClock");
    const homeDate = CRapp.svg1.querySelector("#homeDate");
    let sizingTo;
    if (force == "normal") sizingTo = "normal";
    if (force == "minimized") sizingTo = "minimized";
    else sizingTo = homeClock.dataset.currentSize == "normal" ? "minimized" : "normal";
    // ==========================================================
    if (sizingTo == "minimized") {
        homeClock.dataset.currentSize = "minimized";
        // * hide the date
        homeDate.style.visibility = "hidden";
        // * shrink the clock
        // ! transform origin is set to 0 0 to avoid Safari bug. The origin center is at  675 1815
        d3.select(homeClock).transition().delay(1000).duration(1000).ease(d3.easeCubicOut).attr("transform", "translate(675 1830) scale(0.7) translate(-675 -1815)").transition().delay(350).duration(800).ease(d3.easeCubicOut).attr("transform", `translate(682 1955) scale(0.6) translate(-675 -1815)`).on("end interrupt cancel", ()=>{
            homeDate.style.visibility = "hidden";
            homeClock.dataset.currentSize = "minimized";
        });
    } else {
        homeClock.dataset.currentSize = "normal";
        // * size clock back to normal
        d3.select(homeClock).transition().delay(1200).duration(1100).ease(d3.easeCubicInOut).attr("transform", "translate(0 0) scale(1)").on("end interrupt cancel", ()=>{
            // * show the date
            homeDate.style.visibility = "visible";
            homeClock.dataset.currentSize = "normal";
        });
    }
}
function $a2757c1cf7e9a697$export$73569430680496de(node) {
    const centerBox = node.getBBox();
    return {
        x: centerBox.x + 0.5 * centerBox.width,
        y: centerBox.y + 0.5 * centerBox.height
    };
}
function $a2757c1cf7e9a697$export$c9e8cccd464b5a6c(node1, nodeCenter = null) {
    let centerBox;
    if (nodeCenter !== null) centerBox = nodeCenter.getBBox();
    else centerBox = node1.getBBox();
    node1.setAttribute("transform-origin", `${centerBox.x + 0.5 * centerBox.width} ${centerBox.y + 0.5 * centerBox.height}`);
}
function $a2757c1cf7e9a697$export$5f3b35c2b8474baf(node1, nodeCenter = null) {
    let centerBox;
    if (nodeCenter !== null) centerBox = nodeCenter.getBBox();
    else centerBox = node1.getBBox();
    const x = centerBox.x + 0.5 * centerBox.width;
    const y = centerBox.y + 0.5 * centerBox.height;
    node1.dataset.transformOriginX = x;
    node1.dataset.transformOriginY = y;
    return {
        x: x,
        y: y
    };
}
function $a2757c1cf7e9a697$export$2a9fee5f37bfd138(node) {
    return {
        x: Number(node.dataset.transformOriginX),
        y: Number(node.dataset.transformOriginY)
    };
}
function $a2757c1cf7e9a697$var$removeBlinkClasses(node) {
    node.classList.remove("blink1", "blink2", "blink3");
}
function $a2757c1cf7e9a697$export$bdc5a3df8001f263(node, blinkType = "random") {
    if (node == null) {
        console.log("cannot blink - null node");
        return;
    }
    const blinkTypes = [
        "blink1",
        "blink2",
        "blink3"
    ];
    if (blinkType == "random") blinkType = (0, $771006645357c94f$export$de12a21935b7f164)(blinkTypes);
    $a2757c1cf7e9a697$var$removeBlinkClasses(node);
    setTimeout(()=>{
        node.classList.add(blinkType);
        setTimeout(()=>{
            $a2757c1cf7e9a697$var$removeBlinkClasses(node);
        }, 700);
    }, 50);
}
function $a2757c1cf7e9a697$export$f681ad6169264fc7() {
    const rnd = Math.random();
    if (rnd < .15) return d3.easeBackInOut.overshoot((0, $771006645357c94f$export$51e16a050e2bf069)(0.5, 3));
    else if (rnd < .3) return d3.easeElasticInOut.amplitude((0, $771006645357c94f$export$51e16a050e2bf069)(0.9, 1.5)).period((0, $771006645357c94f$export$51e16a050e2bf069)(0.2, 0.4));
    else if (rnd < .45) return d3.easeBounceInOut;
    else if (rnd < .6) return d3.easeCubicIn;
    else if (rnd < .75) return d3.easeCubicOut;
    else if (rnd < .9) return d3.easeCubicInOut;
    else return d3.easeLinear;
}
function $a2757c1cf7e9a697$export$f7d3c41002dae854(infoType = null, newValue = null) {
    // valid inputs ??
    if (typeof infoType !== "string" || typeof newValue !== "string") return;
    if (infoType !== "shipName" && infoType !== "shipClass" && infoType !== "shipRegistry") return;
    // validating.....
    const result = (0, $653c606c0d614d74$export$62f74afbfe07916b)(infoType, newValue);
    if (result !== true) {
        console.log(result);
        return;
    }
    const CRapp = (0, $956ef7417b7dd641$export$fd6634b1b91dc17e)();
    const frameHeader = CRapp.svg1.querySelector("#frameHeader");
    const shipNameNode = frameHeader.querySelector("#shipName");
    const shipRegistryNode = frameHeader.querySelector("#shipRegistry");
    const headerCenterBar = frameHeader.querySelector("#headerCenterBar");
    // DESIGN DEFAULT:  
    // CRapp.svg1.querySelector('#frameHeader #shipName tspan').textContent = 'U.S.S. CERRITOS / CALIFORNIA CLASS';
    // U.S.S. Merced / CALIFORNIA CLASS    NCC-87075
    // U.S.S. OAKLAND / CALIFORNIA CLASS   NCC-75012
    // U.S.S. Carlsbad / CALIFORNIA CLASS  NCC-73110
    // U.S.S. Inglewood / CALIFORNIA CLASS NCC-?????
    // * update user session data
    CRapp.userSessionSettings[infoType] = newValue;
    // * update text for ship name/class/registry
    if (infoType === "shipName") {
        let newShipFullName = CRapp.userSessionSettings.shipClass.length > 0 ? `${newValue} / ${CRapp.userSessionSettings.shipClass} CLASS` : newValue;
        shipNameNode.querySelector("tspan").textContent = newShipFullName.toUpperCase();
    } else if (infoType === "shipClass") {
        let newShipFullName1 = newValue.length > 0 ? `${CRapp.userSessionSettings.shipName} / ${newValue} CLASS` : `${CRapp.userSessionSettings.shipName}`;
        shipNameNode.querySelector("tspan").textContent = newShipFullName1.toUpperCase();
    } else shipRegistryNode.querySelector("tspan").textContent = newValue.toUpperCase();
    // * adjust svg position due to new text change
    setTimeout(()=>{
        const newShipNameWidth = shipNameNode.getBBox().width;
        const newShipRegistryWidth = shipRegistryNode.getBBox().width;
        if (infoType === "shipRegistry") shipRegistryNode.setAttribute("transform", `translate(${parseFloat(shipRegistryNode.dataset.defaultWidth) - newShipRegistryWidth} 0)`);
        headerCenterBar.setAttribute("x", parseFloat(headerCenterBar.dataset.defaultX) + (newShipNameWidth - parseFloat(shipNameNode.dataset.defaultWidth)));
        headerCenterBar.setAttribute("width", parseFloat(headerCenterBar.dataset.defaultWidth) - (newShipNameWidth - parseFloat(shipNameNode.dataset.defaultWidth)) + (parseFloat(shipRegistryNode.dataset.defaultWidth) - newShipRegistryWidth));
    }, 100); // delay for Firefox
}
function $a2757c1cf7e9a697$export$6556b97061fcd918() {
    const subTitle = document.querySelector("#msdContainer #subTitle");
    subTitle.dataset.defaultWidth = Number(subTitle.getBBox().width.toFixed(2));
    const subTitleBar = document.querySelector("#msdContainer #subTitleBar");
    subTitleBar.dataset.defaultWidth = Number(subTitleBar.getBBox().width.toFixed(2));
}
function $a2757c1cf7e9a697$export$fa6d0396531d5260(text = "MASTER SYSTEM DISPLAY") {
    const subTitleNode = document.querySelector("#msdContainer #subTitle");
    const subTitleTspanNode = subTitleNode.querySelector("tspan");
    subTitleTspanNode.textContent = text;
    const newWidth = Number(subTitleNode.getBBox().width.toFixed(2));
    const translateX = parseFloat(subTitleNode.dataset.defaultWidth) - newWidth;
    subTitleNode.setAttribute("transform", `translate(${translateX} 0)`);
    // fade in the subTitle
    d3.select(subTitleNode).attr("opacity", 0).attr("fill", "var(--secondary)").transition().duration(800).attr("opacity", 1).transition().delay(100).duration(0).on("end", function() {
        $a2757c1cf7e9a697$export$bdc5a3df8001f263(this, "blink2");
        this.setAttribute("fill", "var(--primaryBright)");
    });
    // animate the subTitleBar's width
    const subTitleBar = document.querySelector("#msdContainer #subTitleBar");
    d3.select("#msdContainer svg #subTitleBar").transition().ease(d3.easeCubicOut).duration(600).attr("width", parseFloat(subTitleBar.dataset.defaultWidth) + translateX);
}
function $a2757c1cf7e9a697$export$ba2069408edc72aa() {
    document.addEventListener("keydown", $a2757c1cf7e9a697$export$66dcc3fef956cd3f, false);
}
function $a2757c1cf7e9a697$export$66dcc3fef956cd3f(event) {
    // metaKey on Windows is Windows key
    // on Mac, it's the command key
    // firefox ignores meta key
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.code === "KeyF") (0, $b3277151052e1261$export$a25ea78e22395c66)();
    else if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.code === "KeyM") (0, $da19c3c2cc082ca0$export$c8cdacb776d3b001)();
}

















const $956ef7417b7dd641$var$CRapp = {
    userSessionSettings: (0, $653c606c0d614d74$export$36c7bb024fc249a2)(),
    primaryColorCssVarNames: [
        "primary",
        "primarySat",
        "primaryDark",
        "primaryDarker",
        "primaryBright",
        "primaryBrighter",
        "primaryBrightest"
    ],
    secondaryColorCssVarNames: [
        "secondary",
        "secondaryBright",
        "secondaryBrighter",
        "secondaryBrightest"
    ],
    allColorCssVarNames: [],
    nonDarkColorCssVarNames: [
        "primary",
        "primarySat",
        "primaryBright",
        "primaryBrighter",
        "primaryBrightest",
        "secondary",
        "secondaryBright",
        "secondaryBrighter",
        "secondaryBrightest"
    ],
    colorSchemeNames: [
        "Ritos Yellow",
        "Sickbay Aqua",
        "Picard Gray",
        "Nemesis Cyan",
        "Padd Blue",
        "Titan PurpleHead",
        "Vancouver Orange",
        "Merced Green",
        "Oakland Glory",
        "Inglewood Violet",
        "Carlsbad Nature",
        "Prodigy Blast",
        "Ketracel White",
        "Disco Beige",
        "Shipyard Blueprint",
        "Shipyard Blueprint II",
        "Red Alert"
    ],
    // ! ===== 2 shipyard blueprint styles are identical except to bg image,
    // !       using except of 'name' reference in dataset instead.
    // !    *** if changing 'Shipyard Blueprint' or 'Shipyard Blueprint II' text value, also update it in setColorScheme()
    themeColors: [
        "rgb(255, 211, 0)",
        "rgb(19, 183, 255)",
        "rgb(255, 59, 5)",
        "rgb(22, 155, 179)",
        "rgb(255, 211, 0)",
        "rgb(201, 191, 255)",
        "rgb(252, 80, 11)",
        "rgb(0, 242, 0)",
        "rgb(36, 22, 255)",
        "rgb(252, 34, 255)",
        "rgb(201, 255, 114)",
        "rgb(245, 138, 255)",
        "rgb(222, 222, 222)",
        "rgb(241, 220, 167)",
        "rgb(0, 32, 127)",
        "rgb(0, 32, 127)",
        "rgb(255, 0, 0)"
    ],
    // ! used for server api -- for actual physical ambient light
    currentColorScheme: 0,
    bgHue: 0,
    bgLevel: 0,
    bgPreBlackLevel: 0,
    bgShowingBlack: true,
    jwstImg: {
        fileRef: [
            (parcelRequire("91LJf")),
            (parcelRequire("dRVHh")),
            (parcelRequire("8z7tz")),
            (parcelRequire("eJdOC")),
            (parcelRequire("kOw2L")),
            (parcelRequire("9EgZ8")),
            (parcelRequire("61dh4")),
            (parcelRequire("2wDVO"))
        ],
        description: [
            "NGC 3324 in Carina Nebula / credits: NASA•JWST•STScI",
            "Southern Ring Nebula / credits: NASA•JWST•STScI",
            "The Pillars of Creation * Eagle Nebula / credits: NASA•JWST•STScI",
            "galaxy cluster SMACS 0723 / credits: NASA•JWST•STScI",
            "Stephan’s Quintet / credits: NASA•JWST•STScI",
            "Tarantula Nebula / credits: NASA•JWST•STScI",
            "Cartwheel Galaxy / credits: NASA•JWST•STScI",
            "galaxy pair VV 191 / credits: NASA•Hubble•JWST•STScI"
        ],
        starRotation: [
            0,
            0,
            0,
            0,
            30,
            0,
            0,
            0
        ],
        filePreloaded: [
            false,
            false,
            false
        ],
        preloadedIndexes: []
    },
    jwstCurrentImgIndex: null,
    jwstNextImgIndex: null,
    jwstHuggyIndex: 5,
    jwstSoundTimer: null,
    svgWidth: null,
    svgHeight: null,
    svg1: null,
    svg2: null,
    uiInitiated: false,
    pageState: "init",
    pageStatus: "init",
    pageTimers: [],
    configContentDom: null,
    homeFrameDom: null,
    homeContentDom: null,
    shipFrameDom: null,
    shipContentDom: null,
    shipRef: {
        shipD3: null,
        zoomInBoundaryBBox: null,
        zoomInBoundaryCX: null,
        zoomInBoundaryCY: null,
        ttA: null,
        ttB: null,
        specialZoomInBoundaryBBox: null,
        specialZoomInBoundaryCX: null,
        specialZoomInBoundaryCY: null,
        specialZoomIn_ttA: null,
        specialZoomIn_ttB: null
    },
    shipLabelsVisible: false,
    shipLabelsHotArea: [],
    shipLabelGotHit: false,
    shipZoomMode: false,
    shipHitareaZoomToBBox: {},
    // A hitarea's id is "hit_objId". Hitarea can have an optional node with id "hit_objId_zoomTo", this is for
    // when a hitarea is small, we don't want to zoom in too much, but rather zoom to a bigger area.
    // data structure:  {objId, hit_objId_zoomTo.getBBox()}
    // After init, the "hit_objId_zoomTo" node gets destroyed.
    logDisplayDom: null,
    logPlaceholderDom: null,
    logPinned: false,
    logDisplayToConsole: false,
    bubbleTextTimer: null,
    ringClockCenterDom: null,
    jwstStatus: false,
    sounds: null,
    redAlertStatus: false,
    redAlertTimer: null,
    redAlertTimer2: null,
    bufferTimeStatus: false,
    bufferTimeCountdown: 60,
    bufferTimeTimer: null,
    bufferTimeTextOrigin: null,
    bufferTimeTextWidthOffset: [],
    ritosTopFieldTimer: null,
    ritosFrontShieldTimer: null,
    mostRecentLogTime: 0,
    rubberDuckyPositions: [],
    videoBox: {
        youTubeApiReady: false,
        youTubePlayer: null,
        youTube_onPlayerReady: null,
        youTube_onPlayerStateChange: null,
        defaultVolume: 10
    },
    currentDateCache: null,
    clockIntervalTimer: null,
    serverTime: undefined,
    isSafari: false,
    revisionDate: document.getElementById("revisionDate").textContent,
    buildNumber: 20221114.1,
    buildFile: `./static/build_info.json`,
    buildCheckLastTime: 0,
    serverApiConnection: true,
    clientIsReady: false,
    serverApiData: null,
    debugMode: false
};
$956ef7417b7dd641$var$CRapp.serverApiData = {
    projectRITOS: `${$956ef7417b7dd641$var$CRapp.buildNumber}`,
    clientUid: (0, $771006645357c94f$export$cc4d98609e3a31e7)(7),
    alertStatus: "normal",
    colorSchemeName: "Ritos Yellow",
    themeColor: {
        r: 0,
        g: 0,
        b: 0
    }
};
$956ef7417b7dd641$var$CRapp.allColorCssVarNames = $956ef7417b7dd641$var$CRapp.primaryColorCssVarNames.concat($956ef7417b7dd641$var$CRapp.secondaryColorCssVarNames);
// Safari 3.0+ "[object HTMLElementConstructor]" 
$956ef7417b7dd641$var$CRapp.isSafari = /constructor/i.test(window.HTMLElement) || function(p) {
    return p.toString() === "[object SafariRemoteNotification]";
}(!window["safari"] || typeof safari !== "undefined" && window["safari"].pushNotification);
if ($956ef7417b7dd641$var$CRapp.isSafari) document.documentElement.dataset.safari = "";
function $956ef7417b7dd641$export$fd6634b1b91dc17e() {
    return $956ef7417b7dd641$var$CRapp;
}
document.body.style.backgroundColor = "#000"; // during app init, set bg to black to override user settings
(0, $653c606c0d614d74$export$131c68bd6f589ff1)();
// import svg from 'bundle-text:./msd.svg';
// document.getElementById('msdContainer').innerHTML = svg;
$956ef7417b7dd641$var$CRapp.setPageState = (page)=>{
    // during app init, the pageState is set to 'init' manually
    if (page == "home" || page == "ship") {
        $956ef7417b7dd641$var$CRapp.pageState = page;
        document.documentElement.dataset.pageState = page;
    } else return;
};
/**
 * server time check -- use server time for clock display, fallback to local time
 */ const $956ef7417b7dd641$var$serverTimeCheck = async function() {
    const requestURL = $956ef7417b7dd641$var$CRapp.buildFile + "?r1=" + Math.random();
    try {
        $956ef7417b7dd641$var$CRapp.performanceMarkerServer = performance.now();
        const response = await fetch(requestURL, {
            method: "HEAD"
        }); // undetermined amount of time to download header
        $956ef7417b7dd641$var$CRapp.performanceMarkerServer = ($956ef7417b7dd641$var$CRapp.performanceMarkerServer + performance.now()) / 2; // use avg time -- content dl time might be long
        const tempDateString = response.headers.get("date");
        //* sanitize this date string from server response header. There could be duplicate "date" entries in the headers,
        // resulting a single date key with its value containing multiple dates
        // ex:  date: Thu, 03 Nov 2022 12:24:01 GMT, Thu, 03 Nov 2022 12:24:01 GMT
        // ideally we want the response header to be simply like this:   date: Thu, 03 Nov 2022 12:24:01 GMT
        // Solution: since header response dates are always in GMT per web standard, we'll use GMT as a string splitter
        const tmpStringArray = tempDateString.split("GMT");
        $956ef7417b7dd641$var$CRapp.serverTime = new Date(tmpStringArray[0] + "GMT"); // "date" is server time when header was created right before sending
        if ($956ef7417b7dd641$var$CRapp.serverTime.toString().toLowerCase() == "invalid date") {
            // use client's local date time instead
            $956ef7417b7dd641$var$CRapp.serverTime = undefined;
            $956ef7417b7dd641$var$CRapp.performanceMarkerServer = undefined;
        }
    // console.log([...response.headers]);
    // console.log(CRapp.serverTime);
    // console.log(CRapp.performanceMarkerServer);
    // console.log(CRapp.serverTime);
    // console.log(new Date(CRapp.serverTime));
    // console.log(new Date());
    } catch (error) {
        // console.log("=== fetch Error");
        // console.log(error);
        // ! fetch error: use client's local date time
        $956ef7417b7dd641$var$CRapp.serverTime = undefined;
        $956ef7417b7dd641$var$CRapp.performanceMarkerServer = undefined;
        return;
    }
};
// build check ================================================================================================
// * on desktop, js timers will continue to work on inactive tab. browsers will auto adjust time interval to a minimum of 1 second
// * on mobile, javascript is paused when tab is inactive. when tab is active again, js timers will resume, but not "catch up"
// * on mobile, meta refresh will also pause on inactive tab, but it will "catch up" (recalculated) when tab becomes active
// don't use meta refresh as this might result an unnecessary refresh if the the current view is the latest build already.
// DO THIS: do a build check in a set time interval, in case the tab is always visible
// also do a build check when the browser tab becomes visible
/**
 * checking server for the latest build & refresh app if there's a newer build
 * -- a pre-check will disallow server fetch if the last time is not too long ago
 */ const $956ef7417b7dd641$var$buildCheck = async function(checkImmediately = false) {
    // pre-check 
    const serverCheckMinimumWaitPeriod = 43200000; // at least a 12-hour gap before checking with server
    // console.log("======= BUILD CHECK");
    if (!checkImmediately) {
        if (performance.now() - $956ef7417b7dd641$var$CRapp.buildCheckLastTime < serverCheckMinimumWaitPeriod) // console.log("======= too soon to check build. Abort");
        return; // abort -- too soon to do a build check
    }
    // check build info from server
    $956ef7417b7dd641$var$CRapp.buildCheckLastTime = performance.now();
    const requestURL = $956ef7417b7dd641$var$CRapp.buildFile + "?r2=" + Math.random();
    let buildInfoOnServer = {};
    // fetch ref: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
    try {
        const response = await fetch(requestURL);
        buildInfoOnServer = await response.json();
    } catch (error) {
        // console.log("=== fetch Error");
        // console.log(error);
        $956ef7417b7dd641$var$CRapp.buildCheckLastTime -= 0.8 * serverCheckMinimumWaitPeriod; // due to error, make the next allowed server check sooner
        return; // error in fetch server file -- abort the entire function
    }
    // set reload counter to avoid reload loop
    // abort if localStorage access produces error
    let reloadCounter;
    try {
        reloadCounter = parseInt(localStorage.getItem("cerritos_tmpReloadCounter"));
        if (isNaN(reloadCounter)) reloadCounter = 0;
        else if (reloadCounter < 0) reloadCounter = 0;
        else reloadCounter++;
        localStorage.setItem("cerritos_tmpReloadCounter", reloadCounter);
        if (reloadCounter > 0) {
            localStorage.removeItem("cerritos_tmpReloadCounter");
            return;
        }
    } catch (error1) {
        return; // error in accessing localStorage -- abort the entire function
    }
    if (buildInfoOnServer.buildNumber > $956ef7417b7dd641$var$CRapp.buildNumber) location.reload();
    else try {
        localStorage.removeItem("cerritos_tmpReloadCounter");
    } catch (error2) {
        return;
    }
};
setInterval(()=>{
    $956ef7417b7dd641$var$buildCheck();
}, 10800000); // every 3 hours to attempt
$956ef7417b7dd641$var$buildCheck(true);
/**
 * when browser tab returns to visible
 * -- handleVisibilityChange() ref: https://stackoverflow.com/questions/45383636/reload-page-after-returning-to-tab-window-but-only-with-x-minutes
 */ function $956ef7417b7dd641$var$handleVisibilityChange() {
    if (!document.hidden) $956ef7417b7dd641$var$buildCheck();
}
document.addEventListener("visibilitychange", $956ef7417b7dd641$var$handleVisibilityChange, false);
// build check ================================================================================================
function $956ef7417b7dd641$var$showNewVersionNotification() {
    try {
        let lastVisitVersion = parseFloat(localStorage.getItem("projectRitos_lastVisitVersion"));
        localStorage.setItem("projectRitos_lastVisitVersion", $956ef7417b7dd641$var$CRapp.buildNumber);
        if (isNaN(lastVisitVersion)) return; // abort - no previous visit record found
        // ignore if version difference is minor
        if (Math.floor($956ef7417b7dd641$var$CRapp.buildNumber) - Math.floor(lastVisitVersion) >= 1) // show notification
        // console.log('%%%%%%%%%%% NEW VERSION ' + CRapp.buildNumber);
        document.getElementById("revisionDate").classList.add("highlight");
    } catch (error) {
        return;
    }
}
// highlight the version on the loader page ==================================================
$956ef7417b7dd641$var$showNewVersionNotification(); // if this version if newer than the last visited version
// RESIZE handler ==================================================
window.addEventListener("resize", function() {
    // resizing tasks & functions
    // TODO ... need to throttle this
    // TODO ... don't do resize functions if UI is not done init
    (0, $a2757c1cf7e9a697$export$d7b85a0d97268c94)();
});
// run init functions
// pause to wait for webFont loading
// check if all preload assets are done
// start running the app
function $956ef7417b7dd641$var$sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
const $956ef7417b7dd641$var$asyncCheckWebFontIsReady = async function() {
    let root = document.documentElement;
    if (root.classList.contains("wf-active")) return true;
    // if has wf-inactive, either font is not found OR wf has waited for 5 sec already
    // if has wf-loading, but no wf-inactive, wf is still trying to load the font
    // if no wf-*, wf probably failed OR it's still trying to init itself
    const intervalCheckTime = 200;
    let totalWaitTime = 5000; // WebFontLoader default wait time is 5 sec
    if (root.classList.contains("wf-inactive")) totalWaitTime = 3000;
    for(let i = 0; i < totalWaitTime / intervalCheckTime; i++){
        await $956ef7417b7dd641$var$sleep(intervalCheckTime); // idle for x secs
        if (root.classList.contains("wf-active")) break; // checking font
    }
};
function $956ef7417b7dd641$var$startSvgPointerHit() {
    $956ef7417b7dd641$var$CRapp.svg1.onpointerdown = (e)=>{
        if ($956ef7417b7dd641$var$CRapp.pageState !== "ship" || !$956ef7417b7dd641$var$CRapp.shipLabelsVisible || $956ef7417b7dd641$var$CRapp.shipZoomMode || $956ef7417b7dd641$var$CRapp.shipLabelGotHit) return;
        (0, $899111cd465e6cd4$export$c04e772a8363eccc)(Number(e.clientX.toFixed(0)), Number(e.clientY.toFixed(0)));
    // console.log(
    //     document.documentElement.clientWidth,
    //     document.documentElement.clientHeight,
    //     document.querySelector('#msdContainer > svg').getBoundingClientRect().width,
    //     document.querySelector('#msdContainer > svg').getBoundingClientRect().height,
    //     Number(e.clientX.toFixed(0)),
    //     Number(e.clientY.toFixed(0))
    // );
    };
}
// CRapp.locateRubberDucky = locateRubberDucky;
// ====================== CHECK ASSET + INIT APP
const $956ef7417b7dd641$var$initApp = async function() {
    if ($956ef7417b7dd641$var$CRapp.debugMode) {
        // due to module scripts -- exposing objects for debug console after init's are done
        console.log("%c !!! debugMode is on {obj exposed} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", "color:#ff9999; background:#440000"); // debugger
        window.CRapp = $956ef7417b7dd641$var$CRapp;
    }
    if ($956ef7417b7dd641$var$CRapp.serverApiConnection) console.log("%c >>>>>>> WebSocket API Connection is permitted <<<<<<< ", "color:#ff9900; background:#442200"); // debugger
    (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("System Initiating . . .", "timePrefix");
    // preloadImageAsset();
    await $956ef7417b7dd641$var$serverTimeCheck();
    // awaiting for font loading status before continuing, in case we need to manipulate svg text that's font dimension sensitive
    await $956ef7417b7dd641$var$asyncCheckWebFontIsReady();
    $956ef7417b7dd641$var$CRapp.svgWidth = Number(document.querySelector("#msdContainer > svg").getAttribute("width"));
    $956ef7417b7dd641$var$CRapp.svgHeight = Number(document.querySelector("#msdContainer > svg").getAttribute("height"));
    // with a given pointer x y from client, return the x y that are corresponding to SVG coordinate
    $956ef7417b7dd641$var$CRapp.getPointerLocationOnSvg = (x, y)=>{
        // calculate svg-page resize reference
        const svgRatio = $956ef7417b7dd641$var$CRapp.svgWidth / $956ef7417b7dd641$var$CRapp.svgHeight;
        const pageWidth = document.documentElement.clientWidth;
        const pageHeight = document.documentElement.clientHeight;
        let svgScale, svgScaledWidth, svgScaledHeight;
        let svgOriginOnPageX, svgOriginOnPageY; // page coordinate of the svg's top left point
        if (pageWidth / pageHeight > svgRatio) {
            svgScale = pageHeight / $956ef7417b7dd641$var$CRapp.svgHeight;
            svgScaledWidth = $956ef7417b7dd641$var$CRapp.svgWidth * svgScale;
            svgScaledHeight = pageHeight;
            svgOriginOnPageX = (pageWidth - svgScaledWidth) * .5;
            svgOriginOnPageY = 0;
        } else {
            svgScale = pageWidth / $956ef7417b7dd641$var$CRapp.svgWidth;
            svgScaledWidth = pageWidth;
            svgScaledHeight = $956ef7417b7dd641$var$CRapp.svgHeight * svgScale;
            svgOriginOnPageX = 0;
            svgOriginOnPageY = (pageHeight - svgScaledHeight) * .5;
        }
        return {
            x: Number(((x - svgOriginOnPageX) / svgScale).toFixed(1)),
            y: Number(((y - svgOriginOnPageY) / svgScale).toFixed(1))
        };
    };
    // hide main elements during init
    (0, $a2757c1cf7e9a697$export$b6b0e127fc71cc83)();
    // apply all session settings to app, except 'ldGlare', before server handshake
    // 'ldGlare' will be done later for intro effect
    (0, $653c606c0d614d74$export$65454018d8d76fd3)("ldGlare");
    // setup fullscreen toggle
    (0, $b3277151052e1261$export$30d8a1cfcadf29b)();
    (0, $a2757c1cf7e9a697$export$ba2069408edc72aa)(); // for fullscreen & audio mute shortcuts
    document.querySelector("#updateLog > h1").onpointerdown = function() {
        document.querySelector("#updateLog").classList.toggle("show");
        (0, $a2757c1cf7e9a697$export$bdc5a3df8001f263)(this);
        (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("shortRandomBeep", 0, 0, 0, 0.25);
    };
// debugger
};
// ======================= EXIT INTRO, ENTER MAIN APP
const $956ef7417b7dd641$var$mainApp = function() {
    // exit intro
    // show main app
    document.querySelector("#aboutIntroLine").classList.add("active");
    setTimeout(()=>{
        // about page ============
        // about page acts as a loading page as well.
        // during init loading, dataset.about is present, hard coded to index html.
        // when init loading is done, an empty dataset.about will get removed.
        // if user is accessing more info on this about page, dataset.about will get set to 'show'. no longer empty
        // css controls the opacity of the about page. Visibility will get set in JS with delay so that opacity transition is shown to users
        // dataset.about = '' or 'ritos'
        if (document.documentElement.dataset.about !== "show") {
            // close about
            (0, $a2757c1cf7e9a697$export$44ae1f4c32a29f68)("mute");
            setTimeout(()=>{
                document.body.style.backgroundColor = null;
                document.querySelector("#aboutPage #aboutIntro").remove(); // intro text no longer needed
                document.querySelector("#aboutPage .aboutContent").style.display = null;
                // * remove app startup audioContext eventListener -- no longer needed after app intro
                $956ef7417b7dd641$var$CRapp.stopStartUpAudioContextListener();
                $956ef7417b7dd641$var$CRapp.resumeAudioContext = null;
                $956ef7417b7dd641$var$CRapp.stopStartUpAudioContextListener = null;
                delete $956ef7417b7dd641$var$CRapp.resumeAudioContext;
                delete $956ef7417b7dd641$var$CRapp.stopStartUpAudioContextListener;
            }, 200); // <<<<< sync with css transition duration
        }
        document.querySelector("#msdContainer > svg #frameHeader").style.opacity = 0;
        setTimeout(()=>{
            //* start showing APP -- opacity is set to 0 with default css
            document.querySelector("#msdContainer").style.opacity = 1;
            (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("BUILD VERSION " + $956ef7417b7dd641$var$CRapp.revisionDate);
            // toggleGlare(null, 'noLog', 'mute');
            if ($956ef7417b7dd641$var$CRapp.userSessionSettings.ldGlare) (0, $a2757c1cf7e9a697$export$4a4f808287652e93)(true, "noLog", "mute");
            // toggleVignette(); // default is ON by having it specified in html dataset. This will also prevent the initial vignette animation
            setTimeout(()=>{
                // * show header
                (0, $da19c3c2cc082ca0$export$80cb197f7ea4fe13)("powerUp");
                document.querySelector("#msdContainer > svg #frameHeader").style.opacity = 1;
            }, 500);
        }, 600);
        setTimeout(()=>{
            (0, $fd9e36a62431ae9f$export$57f76693a5823e7b)();
            // document.querySelector('#msdContainer > svg #frameHeader').style.opacity = .6;
            (0, $a2757c1cf7e9a697$export$915e86dc1242cd73)("Loading LD LCARS . . .", "timePrefix");
        }, 1800);
        // start up random log generator
        (0, $a2757c1cf7e9a697$export$5757c822a6ab549a)();
        (0, $3e19511ba4493dfd$export$3851b34a6f183e48)(); // ! <<<<<<<<<<<<<<<<<<<<<<<<
    }, 3000); //* <<<<<<< All preloads done. Make user wait on intro screen
    setTimeout(()=>{
        $956ef7417b7dd641$var$startSvgPointerHit();
    }, 6000); // delay start
};
window.stopAllShipAnimations = (0, $63a5b00227d0cbe7$export$8a2e6fed9df8c3ad); // ! <<<<<<<<<<<< ???????
function $956ef7417b7dd641$export$9ae4d28a04c72663(imgIndex = null) {
    if (imgIndex == null) return false;
    if ($956ef7417b7dd641$var$CRapp.jwstImg.filePreloaded[imgIndex]) return true;
    return false;
}
function $956ef7417b7dd641$var$jwstImgPreloadCallback(e) {
    const preloadedImgIndex = parseInt(e.currentTarget.dataset.jwstImgIndex);
    $956ef7417b7dd641$var$CRapp.jwstImg.filePreloaded[preloadedImgIndex] = true;
    $956ef7417b7dd641$var$CRapp.jwstImg.preloadedIndexes.push(preloadedImgIndex);
}
function $956ef7417b7dd641$export$4ab67db1ad2f21ae(newImgIndex = null) {
    if (newImgIndex == null) return false;
    if ($956ef7417b7dd641$var$CRapp.jwstImg.filePreloaded[newImgIndex] == true) return; // no need to preload again
    const tempImage = new Image();
    tempImage.dataset.jwstImgIndex = newImgIndex;
    tempImage.addEventListener("load", $956ef7417b7dd641$var$jwstImgPreloadCallback, true); // preload callback event
    tempImage.src = $956ef7417b7dd641$var$CRapp.jwstImg.fileRef[newImgIndex]; // loading it....
}
// pick a random image for the next jwst cycle, and preloading it
$956ef7417b7dd641$var$CRapp.jwstNextImgIndex = (0, $771006645357c94f$export$3c5f89dae98e900b)($956ef7417b7dd641$var$CRapp.jwstImg.fileRef.length);
$956ef7417b7dd641$export$4ab67db1ad2f21ae($956ef7417b7dd641$var$CRapp.jwstNextImgIndex);
(0, $da19c3c2cc082ca0$export$3d7e390f2650e949)();
let $956ef7417b7dd641$var$assetPreloaded = false;
function $956ef7417b7dd641$var$checkAssetPreloadProgress() {
    // add other future asset type preloads checking here
    if ($956ef7417b7dd641$export$9ae4d28a04c72663($956ef7417b7dd641$var$CRapp.jwstNextImgIndex) && $956ef7417b7dd641$var$CRapp.sounds.assetReady) $956ef7417b7dd641$var$assetPreloaded = true;
}
let $956ef7417b7dd641$var$pageReadyState_interval = setInterval(function() {
    $956ef7417b7dd641$var$checkAssetPreloadProgress();
    if (document.readyState === "complete" && $956ef7417b7dd641$var$assetPreloaded) {
        // all sub resources + preloadAssets have all been loaded
        clearInterval($956ef7417b7dd641$var$pageReadyState_interval);
        $956ef7417b7dd641$var$initApp().then(()=>{
            $956ef7417b7dd641$var$mainApp();
        });
    }
}, 800);

})();
