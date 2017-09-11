'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
function getDecimals(n) {
  n = n + '';
  var i = n.indexOf('.');
  return (i == -1) ? 0 : n.length - i - 1;
}

function getVF(n, opt_precision) {
  var v = opt_precision;

  if (undefined === v) {
    v = Math.min(getDecimals(n), 3);
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;
  return {v: v, f: f};
}

$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u200c\u0d1a",
      "\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u200c\u0d1a",
      "\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a",
      "\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u200c\u0d1a",
      "\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u200c\u0d1a",
      "\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u200c\u0d1a",
      "\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u200c\u0d1a"
    ],
    "ERANAMES": [
      "\u0d15\u0d4d\u0d30\u0d3f\u0d38\u0d4d\u200c\u0d24\u0d41\u0d35\u0d3f\u0d28\u0d4d \u0d2e\u0d41\u0d2e\u0d4d\u0d2a\u0d4d",
      "\u0d06\u0d28\u0d4d\u0d28\u0d4b \u0d21\u0d4a\u0d2e\u0d3f\u0d28\u0d3f"
    ],
    "ERAS": [
      "\u0d15\u0d4d\u0d30\u0d3f.\u0d2e\u0d41.",
      "\u0d0e\u0d21\u0d3f"
    ],
    "FIRSTDAYOFWEEK": 6,
    "MONTH": [
      "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f",
      "\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f",
      "\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d",
      "\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d",
      "\u0d2e\u0d47\u0d2f\u0d4d",
      "\u0d1c\u0d42\u0d7a",
      "\u0d1c\u0d42\u0d32\u0d48",
      "\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d",
      "\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c",
      "\u0d12\u0d15\u0d4d\u200c\u0d1f\u0d4b\u0d2c\u0d7c",
      "\u0d28\u0d35\u0d02\u0d2c\u0d7c",
      "\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c"
    ],
    "SHORTDAY": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "SHORTMONTH": [
      "\u0d1c\u0d28\u0d41",
      "\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41",
      "\u0d2e\u0d3e\u0d7c",
      "\u0d0f\u0d2a\u0d4d\u0d30\u0d3f",
      "\u0d2e\u0d47\u0d2f\u0d4d",
      "\u0d1c\u0d42\u0d7a",
      "\u0d1c\u0d42\u0d32\u0d48",
      "\u0d13\u0d17",
      "\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02",
      "\u0d12\u0d15\u0d4d\u0d1f\u0d4b",
      "\u0d28\u0d35\u0d02",
      "\u0d21\u0d3f\u0d38\u0d02"
    ],
    "STANDALONEMONTH": [
      "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f",
      "\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f",
      "\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d",
      "\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d",
      "\u0d2e\u0d47\u0d2f\u0d4d",
      "\u0d1c\u0d42\u0d7a",
      "\u0d1c\u0d42\u0d32\u0d48",
      "\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d",
      "\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c",
      "\u0d12\u0d15\u0d4d\u200c\u0d1f\u0d4b\u0d2c\u0d7c",
      "\u0d28\u0d35\u0d02\u0d2c\u0d7c",
      "\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE, MMMM d, y",
    "longDate": "MMMM d, y",
    "medium": "MMM d, y h:mm:ss a",
    "mediumDate": "MMM d, y",
    "mediumTime": "h:mm:ss a",
    "short": "M/d/yy h:mm a",
    "shortDate": "M/d/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "$",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-\u00a4",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "en",
  "localeID": "en",
  "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
