'use strict';

/**
 * @ngdoc service
 * @name generatorAngularTestApp.masterDataPopulator
 * @description
 * # masterDataPopulator
 * Factory in the generatorAngularTestApp.
 */
angular.module('janasanthwanamApp')
.factory('masterDataPopulator', function () {
  // Service logic
  // ...
  var villages = [
    {
      "E": "Kadakampally",
      "M": "കടകംപള്ളി",
      "TID": 1,
      "DID": 1,
      "VID": "58"
    },
    {
      "E": "Pettah",
      "M": "പേട്ട",
      "TID": 1,
      "DID": 1,
      "VID": "59"
    },
    {
      "E": "Muttathara",
      "M": "മുട്ടത്തറ",
      "TID": 1,
      "DID": 1,
      "VID": "60"
    },
    {
      "E": "Manacaud",
      "M": "മണക്കാട്",
      "TID": 1,
      "DID": 1,
      "VID": "61"
    },
    {
      "E": "Vanchiyoor",
      "M": "വഞ്ചിയൂര്‍",
      "TID": 1,
      "DID": 1,
      "VID": "62"
    },
    {
      "E": "Thycaud",
      "M": "തൈക്കാട്",
      "TID": 1,
      "DID": 1,
      "VID": "63"
    },
    {
      "E": "Thirumala",
      "M": "തിരുമല",
      "TID": 1,
      "DID": 1,
      "VID": "64"
    },
    {
      "E": "Vattoyoorkavu",
      "M": "വട്ടിയൂര്‍ക്കാവ്",
      "TID": 1,
      "DID": 1,
      "VID": "65"
    },
    {
      "E": "Peroorkada",
      "M": "പേരൂര്‍ക്കട",
      "TID": 1,
      "DID": 1,
      "VID": "66"
    },
    {
      "E": "Kudappanakunnu",
      "M": "കുടപ്പനക്കുന്ന്",
      "TID": 1,
      "DID": 1,
      "VID": "67"
    },
    {
      "E": "Pattom",
      "M": "പട്ടം",
      "TID": 1,
      "DID": 1,
      "VID": "68"
    },
    {
      "E": "Nemom",
      "M": "നേമം",
      "TID": 1,
      "DID": 1,
      "VID": "69"
    },
    {
      "E": "Thiruvallam",
      "M": "തിരുവല്ലം",
      "TID": 1,
      "DID": 1,
      "VID": "70"
    },
    {
      "E": "Sasthamangalam",
      "M": "ശാസ്തമംഗലം",
      "TID": 1,
      "DID": 1,
      "VID": "71"
    },
    {
      "E": "Kowdiar",
      "M": "കവടിയാര്‍",
      "TID": 1,
      "DID": 1,
      "VID": "72"
    },
    {
      "E": "Venganoor",
      "M": "വെങ്ങാനൂര്‍",
      "TID": 1,
      "DID": 1,
      "VID": "73"
    },
    {
      "E": "Kalliyoor",
      "M": "കല്ലിയൂര്‍",
      "TID": 1,
      "DID": 1,
      "VID": "74"
    },
    {
      "E": "Aayirupara",
      "M": "അയിരൂപ്പാറ",
      "TID": 1,
      "DID": 1,
      "VID": "75"
    },
    {
      "E": "Anthiyoorkonam",
      "M": "ആണ്ടൂര്‍ക്കോണം",
      "TID": 1,
      "DID": 1,
      "VID": "76"
    },
    {
      "E": "Pallipuram",
      "M": "പള്ളിപ്പുറം",
      "TID": 1,
      "DID": 1,
      "VID": "77"
    },
    {
      "E": "Kadinamkulam",
      "M": "കഠിനംകുളം",
      "TID": 1,
      "DID": 1,
      "VID": "78"
    },
    {
      "E": "Veyiloor",
      "M": "വെയിലൂര്‍",
      "TID": 1,
      "DID": 1,
      "VID": "79"
    },
    {
      "E": "Melthonackal",
      "M": "മേല്‍തോന്നക്കല്‍",
      "TID": 1,
      "DID": 1,
      "VID": "80"
    },
    {
      "E": "Ullor",
      "M": "ഉള്ളൂര്‍",
      "TID": 1,
      "DID": 1,
      "VID": "81"
    },
    {
      "E": "Uliyazhathura",
      "M": "ഉളിയാഴത്തുറ",
      "TID": 1,
      "DID": 1,
      "VID": "82"
    },
    {
      "E": "Pangappara",
      "M": "പാങ്ങപ്പാറ",
      "TID": 1,
      "DID": 1,
      "VID": "83"
    },
    {
      "E": "Cheruvakkal",
      "M": "ചെറുവക്കല്‍",
      "TID": 1,
      "DID": 1,
      "VID": "84"
    },
    {
      "E": "Attipra",
      "M": "ആറ്റിപ്ര",
      "TID": 1,
      "DID": 1,
      "VID": "85"
    },
    {
      "E": "Kazhakoottam",
      "M": "കഴക്കൂട്ടം",
      "TID": 1,
      "DID": 1,
      "VID": "86"
    },
    {
      "E": "Menamkulam",
      "M": "മേനംകുളം",
      "TID": 1,
      "DID": 1,
      "VID": "88"
    },
    {
      "E": "Keezhthonackal",
      "M": "കീഴ്തോന്നക്കല്‍",
      "TID": 1,
      "DID": 1,
      "VID": "87"
    },
    {
      "E": "Neyyattinkara",
      "M": "നെയ്യാറ്റിന്‍കര",
      "TID": 2,
      "DID": 1,
      "VID": "29"
    },
    {
      "E": "Athiyannoor",
      "M": "അതിയന്നൂര്‍",
      "TID": 2,
      "DID": 1,
      "VID": "8"
    },
    {
      "E": "Thirupuram",
      "M": "തിരുപുറം",
      "TID": 2,
      "DID": 1,
      "VID": "18"
    },
    {
      "E": "Karumkulam",
      "M": "കരുംകുളം",
      "TID": 2,
      "DID": 1,
      "VID": "23"
    },
    {
      "E": "Kottukal",
      "M": "കോട്ടുകാല്‍",
      "TID": 2,
      "DID": 1,
      "VID": "7"
    },
    {
      "E": "Pallichal",
      "M": "പള്ളിച്ചല്‍",
      "TID": 2,
      "DID": 1,
      "VID": "17"
    },
    {
      "E": "Kollayil",
      "M": "കൊല്ലയില്‍",
      "TID": 2,
      "DID": 1,
      "VID": "3"
    },
    {
      "E": "Perumpazhuthoor",
      "M": "പെരുമ്പഴുതൂര്‍",
      "TID": 2,
      "DID": 1,
      "VID": "28"
    },
    {
      "E": "Kanjiramkulam",
      "M": "കാഞ്ഞിരംകുളം",
      "TID": 2,
      "DID": 1,
      "VID": "16"
    },
    {
      "E": "Vizhinjam",
      "M": "വിഴിഞ്ഞം",
      "TID": 2,
      "DID": 1,
      "VID": "21"
    },
    {
      "E": "Kulathoor",
      "M": "കുളത്തൂര്‍",
      "TID": 2,
      "DID": 1,
      "VID": "15"
    },
    {
      "E": "Chenkal",
      "M": "ചെങ്കല്‍",
      "TID": 2,
      "DID": 1,
      "VID": "2"
    },
    {
      "E": "Parassala",
      "M": "പാറശ്ശാല",
      "TID": 2,
      "DID": 1,
      "VID": "12"
    },
    {
      "E": "Karode",
      "M": "കാരോട്",
      "TID": 2,
      "DID": 1,
      "VID": "9"
    },
    {
      "E": "Parasuvaikkal",
      "M": "പരശുവക്കല്‍",
      "TID": 2,
      "DID": 1,
      "VID": "10"
    },
    {
      "E": "Kunnathukal",
      "M": "കുന്നത്തുകാല്‍",
      "TID": 2,
      "DID": 1,
      "VID": "14"
    },
    {
      "E": "Vellarada",
      "M": "വെള്ളറട",
      "TID": 2,
      "DID": 1,
      "VID": "24"
    },
    {
      "E": "Anavoor ",
      "M": "ആനാവൂര്‍",
      "TID": 2,
      "DID": 1,
      "VID": "27"
    },
    {
      "E": "Perumkadavila",
      "M": "പെരുങ്കടവിള",
      "TID": 2,
      "DID": 1,
      "VID": "22"
    },
    {
      "E": "Poovar",
      "M": "പൂവാർ",
      "TID": 2,
      "DID": 1,
      "VID": "0"
    },
    {
      "E": "Balaramapuram",
      "M": "ബാലരാമപുരം",
      "TID": 2,
      "DID": 1,
      "VID": "0"
    },
    {
      "E": "Tholicode",
      "M": "തൊളിക്കോട്",
      "TID": 3,
      "DID": 1,
      "VID": "30"
    },
    {
      "E": "Uzhamalakkal",
      "M": "ഉഴമലക്കല്‍",
      "TID": 3,
      "DID": 1,
      "VID": "33"
    },
    {
      "E": "Aryanad",
      "M": "ആര്യനാട്",
      "TID": 3,
      "DID": 1,
      "VID": "34"
    },
    {
      "E": "Vithura",
      "M": "വിതുര",
      "TID": 3,
      "DID": 1,
      "VID": "35"
    },
    {
      "E": "Peringamala",
      "M": "പെരിങ്ങമ്മല",
      "TID": 3,
      "DID": 1,
      "VID": "38"
    },
    {
      "E": "Palode",
      "M": "പാലോട്",
      "TID": 3,
      "DID": 1,
      "VID": "39"
    },
    {
      "E": "Kallara",
      "M": "കല്ലറ",
      "TID": 3,
      "DID": 1,
      "VID": "40"
    },
    {
      "E": "Vamanapuram",
      "M": "വാമനപുരം",
      "TID": 3,
      "DID": 1,
      "VID": "41"
    },
    {
      "E": "Pullampara",
      "M": "പുല്ലംപാറ",
      "TID": 3,
      "DID": 1,
      "VID": "42"
    },
    {
      "E": "Thenoor",
      "M": "തെന്നൂര്‍",
      "TID": 3,
      "DID": 1,
      "VID": "43"
    },
    {
      "E": "Kurupuzha",
      "M": "കുറുപുഴ",
      "TID": 3,
      "DID": 1,
      "VID": "44"
    },
    {
      "E": "Pangode",
      "M": "പാങ്ങോട്",
      "TID": 3,
      "DID": 1,
      "VID": "45"
    },
    {
      "E": "Nellanad",
      "M": "നെല്ലനാട്",
      "TID": 3,
      "DID": 1,
      "VID": "46"
    },
    {
      "E": "Anad",
      "M": "ആനാട്",
      "TID": 3,
      "DID": 1,
      "VID": "47"
    },
    {
      "E": "Manickal ",
      "M": "മാണിക്കല്‍",
      "TID": 3,
      "DID": 1,
      "VID": "48"
    },
    {
      "E": "Panavoor",
      "M": "പനവൂര്‍",
      "TID": 3,
      "DID": 1,
      "VID": "49"
    },
    {
      "E": "Nedumangad",
      "M": "നെടുമങ്ങാട്",
      "TID": 3,
      "DID": 1,
      "VID": "50"
    },
    {
      "E": "Vembayam",
      "M": "വെമ്പായം",
      "TID": 3,
      "DID": 1,
      "VID": "51"
    },
    {
      "E": "Karakulam",
      "M": "കരകുളം",
      "TID": 3,
      "DID": 1,
      "VID": "52"
    },
    {
      "E": "Koliyakode",
      "M": "കോലിയക്കോട്",
      "TID": 3,
      "DID": 1,
      "VID": "53"
    },
    {
      "E": "Karipur ",
      "M": "കരിപൂര്‍",
      "TID": 3,
      "DID": 1,
      "VID": "54"
    },
    {
      "E": "Aruvikkara",
      "M": "അരുവിക്കര",
      "TID": 3,
      "DID": 1,
      "VID": "55"
    },
    {
      "E": "Vattappara",
      "M": "വട്ടപ്പാറ",
      "TID": 3,
      "DID": 1,
      "VID": "56"
    },
    {
      "E": "Thekkada",
      "M": "തേക്കട",
      "TID": 3,
      "DID": 1,
      "VID": "57"
    },
    {
      "E": "Azhoor",
      "M": "അഴൂര്‍",
      "TID": 4,
      "DID": 1,
      "VID": "89"
    },
    {
      "E": "Chirayinkeezhu",
      "M": "ചിറയിന്‍കീഴ്",
      "TID": 4,
      "DID": 1,
      "VID": "90"
    },
    {
      "E": "Sarkara",
      "M": "ശാര്‍ക്കര",
      "TID": 4,
      "DID": 1,
      "VID": "0"
    },
    {
      "E": "Keezhuvilam",
      "M": "കിഴുവിലം",
      "TID": 4,
      "DID": 1,
      "VID": "91"
    },
    {
      "E": "Kunthalloor",
      "M": "കുന്തള്ളൂര്‍",
      "TID": 4,
      "DID": 1,
      "VID": "0"
    },
    {
      "E": "Kadakkavoor",
      "M": "കടക്കാവൂര്‍",
      "TID": 4,
      "DID": 1,
      "VID": "92"
    },
    {
      "E": "Keezhattingal",
      "M": "കീഴാറ്റിങ്ങല്‍",
      "TID": 4,
      "DID": 1,
      "VID": "100"
    },
    {
      "E": "Vakkom",
      "M": "വക്കം",
      "TID": 4,
      "DID": 1,
      "VID": "101"
    },
    {
      "E": "Vellalloor",
      "M": "വെള്ളല്ലൂര്‍",
      "TID": 4,
      "DID": 1,
      "VID": "105"
    },
    {
      "E": "Nagroor",
      "M": "നഗരൂര്‍",
      "TID": 4,
      "DID": 1,
      "VID": "106"
    },
    {
      "E": "Koduvazhanoor",
      "M": "കൊടുവഴന്നൂര്‍",
      "TID": 4,
      "DID": 1,
      "VID": "107"
    },
    {
      "E": "Kilimanoor",
      "M": "കിളിമാനൂര്‍",
      "TID": 4,
      "DID": 1,
      "VID": "108"
    },
    {
      "E": "Pazhayakunnummel",
      "M": "പഴയകുന്നുമ്മല്‍",
      "TID": 4,
      "DID": 1,
      "VID": "109"
    },
    {
      "E": "Pulimath",
      "M": "പുളിമാത്ത്",
      "TID": 4,
      "DID": 1,
      "VID": "110"
    },
    {
      "E": "Alamcode",
      "M": "ആലംകോട്",
      "TID": 4,
      "DID": 1,
      "VID": "112"
    },
    {
      "E": "Attingal",
      "M": "ആറ്റിങ്ങല്‍",
      "TID": 4,
      "DID": 1,
      "VID": "113"
    },
    {
      "E": "Avanavanchery",
      "M": "അവനവഞ്ചേരി",
      "TID": 4,
      "DID": 1,
      "VID": "1608"
    },
    {
      "E": "Elamba",
      "M": "ഇളമ്പ",
      "TID": 4,
      "DID": 1,
      "VID": "115"
    },
    {
      "E": "Mudakkal",
      "M": "മുദാക്കല്‍",
      "TID": 4,
      "DID": 1,
      "VID": "1610"
    },
    {
      "E": "Edacode",
      "M": "ഇടക്കോട്",
      "TID": 4,
      "DID": 1,
      "VID": "116"
    },
    {
      "E": "Anjuthengu",
      "M": "അഞ്ചുതെങ്ങ്",
      "TID": 4,
      "DID": 1,
      "VID": "0"
    },
    {
      "E": "Vellanad",
      "M": "വെള്ളനാട്",
      "TID": 3,
      "DID": 1,
      "VID": "36"
    },
    {
      "E": "Kulathummal",
      "M": "കുളത്തുമ്മല്‍",
      "TID": 5,
      "DID": 1,
      "VID": "4"
    },
    {
      "E": "Maranalloor",
      "M": "മാറനല്ലൂര്‍",
      "TID": 5,
      "DID": 1,
      "VID": "5"
    },
    {
      "E": "Malayinkeezhu",
      "M": "മലയിന്‍കീഴ്",
      "TID": 5,
      "DID": 1,
      "VID": "1"
    },
    {
      "E": "Vilavoorkkal",
      "M": "വിളവൂര്‍ക്കല്‍",
      "TID": 5,
      "DID": 1,
      "VID": "20"
    },
    {
      "E": "Vilappil",
      "M": "വിളപ്പില്‍",
      "TID": 5,
      "DID": 1,
      "VID": "19"
    },
    {
      "E": "Ottasekharamangalam",
      "M": "ഒറ്റശേഖരമംഗലം",
      "TID": 5,
      "DID": 1,
      "VID": "13"
    },
    {
      "E": "Keezhattoor",
      "M": "കീഴാറൂര്‍",
      "TID": 5,
      "DID": 1,
      "VID": "25"
    },
    {
      "E": "Amboori",
      "M": "അമ്പൂരി",
      "TID": 5,
      "DID": 1,
      "VID": "26"
    },
    {
      "E": "Kallikode",
      "M": "കള്ളിക്കാട്",
      "TID": 5,
      "DID": 1,
      "VID": "6"
    },
    {
      "E": "Vazhichal",
      "M": "വാഴിച്ചല്‍",
      "TID": 5,
      "DID": 1,
      "VID": "11"
    },
    {
      "E": "Perumkulam",
      "M": "പെരുങ്കുളം",
      "TID": 5,
      "DID": 1,
      "VID": "37"
    },
    {
      "E": "Veeranakavu",
      "M": "വീരണകാവ്",
      "TID": 5,
      "DID": 1,
      "VID": "31"
    },
    {
      "E": "Mannoorkara",
      "M": "മണ്ണൂര്‍ക്കര",
      "TID": 5,
      "DID": 1,
      "VID": "32"
    },
    {
      "E": "Edava",
      "M": "ഇടവ",
      "TID": 6,
      "DID": 1,
      "VID": "97"
    },
    {
      "E": "Varkala",
      "M": "വര്‍ക്കല",
      "TID": 6,
      "DID": 1,
      "VID": "96"
    },
    {
      "E": "Vettoor",
      "M": "വെട്ടൂര്‍",
      "TID": 6,
      "DID": 1,
      "VID": "95"
    },
    {
      "E": "Cherunniyoor",
      "M": "ചെറുന്നിയൂര്‍",
      "TID": 6,
      "DID": 1,
      "VID": "1607"
    },
    {
      "E": "Ottoor",
      "M": "ഒറ്റൂര്‍",
      "TID": 6,
      "DID": 1,
      "VID": "94"
    },
    {
      "E": "Manamboor",
      "M": "മണമ്പൂര്‍",
      "TID": 6,
      "DID": 1,
      "VID": "93"
    },
    {
      "E": "Chemmaruthy",
      "M": "ചെമ്മരുതി",
      "TID": 6,
      "DID": 1,
      "VID": "99"
    },
    {
      "E": "Navaikulam",
      "M": "നാവായിക്കുളം",
      "TID": 6,
      "DID": 1,
      "VID": "102"
    },
    {
      "E": "Kudavoor",
      "M": "കുടവൂര്‍",
      "TID": 6,
      "DID": 1,
      "VID": "114"
    },
    {
      "E": "Pallickal",
      "M": "പള്ളിക്കല്‍",
      "TID": 6,
      "DID": 1,
      "VID": "1611"
    },
    {
      "E": "Madavoor",
      "M": "മടവൂര്‍",
      "TID": 6,
      "DID": 1,
      "VID": "103"
    },
    {
      "E": "Karavaram",
      "M": "കരവാരം",
      "TID": 4,
      "DID": 1,
      "VID": "111"
    },
    {
      "E": "Ayiroor",
      "M": "അയിരൂര്‍",
      "TID": 6,
      "DID": 1,
      "VID": "98"
    },
    {
      "E": "Kollam (west)",
      "M": "കൊല്ലം(വെസ്റ്റ്)",
      "TID": 7,
      "DID": 2,
      "VID": "117"
    },
    {
      "E": "Kollam (east)",
      "M": "കൊല്ലം(ഈസ്റ്റ്)",
      "TID": 7,
      "DID": 2,
      "VID": "118"
    },
    {
      "E": "Thrikkadavoor",
      "M": "തൃക്കടവൂര്‍",
      "TID": 7,
      "DID": 2,
      "VID": "119"
    },
    {
      "E": "Thrikkaruva",
      "M": "തൃക്കരുവ",
      "TID": 7,
      "DID": 2,
      "VID": "120"
    },
    {
      "E": "Kilikollur",
      "M": "കിളിക്കൊല്ലൂര്‍",
      "TID": 7,
      "DID": 2,
      "VID": "121"
    },
    {
      "E": "Sakthikulangara",
      "M": "ശക്തികുളങ്ങര",
      "TID": 7,
      "DID": 2,
      "VID": "122"
    },
    {
      "E": "Mangad",
      "M": "മങ്ങാട്",
      "TID": 7,
      "DID": 2,
      "VID": "123"
    },
    {
      "E": "Vadakkevila",
      "M": "വടക്കേവിള",
      "TID": 7,
      "DID": 2,
      "VID": "124"
    },
    {
      "E": "Mundakkal",
      "M": "മുണ്ടക്കല്‍",
      "TID": 7,
      "DID": 2,
      "VID": "125"
    },
    {
      "E": "Eravipuram",
      "M": "ഇരവിപുരം",
      "TID": 7,
      "DID": 2,
      "VID": "126"
    },
    {
      "E": "Mayyanad",
      "M": "മയ്യനാട്",
      "TID": 7,
      "DID": 2,
      "VID": "127"
    },
    {
      "E": "Paravur",
      "M": "പരവൂര്‍",
      "TID": 7,
      "DID": 2,
      "VID": "128"
    },
    {
      "E": "Poothakkulam",
      "M": "പൂതക്കുളം",
      "TID": 7,
      "DID": 2,
      "VID": "129"
    },
    {
      "E": "Meenadu",
      "M": "മീനാട്",
      "TID": 7,
      "DID": 2,
      "VID": "130"
    },
    {
      "E": "Kalluvathukkal",
      "M": "കല്ലുവാതുക്കല്‍",
      "TID": 7,
      "DID": 2,
      "VID": "131"
    },
    {
      "E": "Adichanalloor",
      "M": "ആദിച്ചനല്ലൂര്‍",
      "TID": 7,
      "DID": 2,
      "VID": "132"
    },
    {
      "E": "Parippally",
      "M": "പാരിപ്പള്ളി",
      "TID": 7,
      "DID": 2,
      "VID": "133"
    },
    {
      "E": "Kottappuram",
      "M": "കോട്ടപ്പുറം",
      "TID": 7,
      "DID": 2,
      "VID": "134"
    },
    {
      "E": "Chirakkara",
      "M": "ചിറക്കര",
      "TID": 7,
      "DID": 2,
      "VID": "135"
    },
    {
      "E": "Pallimon",
      "M": "പള്ളിമണ്‍",
      "TID": 7,
      "DID": 2,
      "VID": "136"
    },
    {
      "E": "Nedumpana",
      "M": "നെടുമ്പന",
      "TID": 7,
      "DID": 2,
      "VID": "137"
    },
    {
      "E": "Thrikkovilvattom",
      "M": "തൃക്കോവില്‍വട്ടം",
      "TID": 7,
      "DID": 2,
      "VID": "138"
    },
    {
      "E": "Thazhuthala",
      "M": "തഴുത്തല",
      "TID": 7,
      "DID": 2,
      "VID": "139"
    },
    {
      "E": "Panayam",
      "M": "പനയം",
      "TID": 7,
      "DID": 2,
      "VID": "140"
    },
    {
      "E": "Kottamkara (mamoodu)",
      "M": "കോറ്റംകര(മാമൂട്)",
      "TID": 7,
      "DID": 2,
      "VID": "141"
    },
    {
      "E": "Ilamballoor",
      "M": "ഇളമ്പള്ളൂര്‍",
      "TID": 7,
      "DID": 2,
      "VID": "142"
    },
    {
      "E": "Mulavana",
      "M": "മുളവന",
      "TID": 7,
      "DID": 2,
      "VID": "143"
    },
    {
      "E": "Perinad",
      "M": "പെരിനാട്",
      "TID": 7,
      "DID": 2,
      "VID": "144"
    },
    {
      "E": "Kizhake kallada",
      "M": "കിഴക്കേകല്ലട",
      "TID": 7,
      "DID": 2,
      "VID": "145"
    },
    {
      "E": "Mundrothuruthu",
      "M": "മണ്ട്രോത്തുരുത്ത്",
      "TID": 7,
      "DID": 2,
      "VID": "146"
    },
    {
      "E": "Perayam",
      "M": "പേരയം",
      "TID": 7,
      "DID": 2,
      "VID": "0"
    },
    {
      "E": "Ezhukon",
      "M": "എഴുകോണ്‍",
      "TID": 8,
      "DID": 2,
      "VID": "147"
    },
    {
      "E": "Neduvathoor",
      "M": "നെടുവത്തൂര്‍",
      "TID": 8,
      "DID": 2,
      "VID": "148"
    },
    {
      "E": "Pavithreswaram",
      "M": "പവിത്രേശ്വരം",
      "TID": 8,
      "DID": 2,
      "VID": "149"
    },
    {
      "E": "Kulakkada",
      "M": "കുളക്കട",
      "TID": 8,
      "DID": 2,
      "VID": "150"
    },
    {
      "E": "Mailam",
      "M": "മൈലം",
      "TID": 8,
      "DID": 2,
      "VID": "151"
    },
    {
      "E": "Kottarakkara",
      "M": "കൊട്ടാരക്കര",
      "TID": 8,
      "DID": 2,
      "VID": "152"
    },
    {
      "E": "Puthoor",
      "M": "പുത്തൂര്‍",
      "TID": 8,
      "DID": 2,
      "VID": "153"
    },
    {
      "E": "Kalayapuram",
      "M": "കലയപുരം",
      "TID": 8,
      "DID": 2,
      "VID": "154"
    },
    {
      "E": "Melila",
      "M": "മേലില",
      "TID": 8,
      "DID": 2,
      "VID": "155"
    },
    {
      "E": "Vettikkavala",
      "M": "വെട്ടിക്കവല",
      "TID": 8,
      "DID": 2,
      "VID": "156"
    },
    {
      "E": "Ummannoor",
      "M": "ഉമ്മന്നൂര്‍",
      "TID": 8,
      "DID": 2,
      "VID": "157"
    },
    {
      "E": "Veliyam",
      "M": "വെളിയം",
      "TID": 8,
      "DID": 2,
      "VID": "158"
    },
    {
      "E": "Pooyappally",
      "M": "പൂയപ്പള്ളി",
      "TID": 8,
      "DID": 2,
      "VID": "159"
    },
    {
      "E": "Kareepra",
      "M": "കരീപ്ര",
      "TID": 8,
      "DID": 2,
      "VID": "160"
    },
    {
      "E": "Odanavattom",
      "M": "ഓടനാവട്ടം",
      "TID": 8,
      "DID": 2,
      "VID": "161"
    },
    {
      "E": "Chakkuvarakkal",
      "M": "ചക്കുവരയ്ക്കല്‍",
      "TID": 8,
      "DID": 2,
      "VID": "162"
    },
    {
      "E": "Valakom",
      "M": "വാളകം",
      "TID": 8,
      "DID": 2,
      "VID": "163"
    },
    {
      "E": "Velinalloor",
      "M": "വെളിനല്ലൂര്‍",
      "TID": 8,
      "DID": 2,
      "VID": "164"
    },
    {
      "E": "Ilamadu",
      "M": "ഇളമാട്",
      "TID": 8,
      "DID": 2,
      "VID": "165"
    },
    {
      "E": "Kadakkal",
      "M": "കടക്കല്‍",
      "TID": 8,
      "DID": 2,
      "VID": "166"
    },
    {
      "E": "Chithara",
      "M": "ചിതറ",
      "TID": 8,
      "DID": 2,
      "VID": "167"
    },
    {
      "E": "Chadayamangalam",
      "M": "ചടയമംഗലം",
      "TID": 8,
      "DID": 2,
      "VID": "168"
    },
    {
      "E": "Mangodu",
      "M": "മാങ്കോട്",
      "TID": 8,
      "DID": 2,
      "VID": "169"
    },
    {
      "E": "Kummil",
      "M": "കുമ്മിള്‍",
      "TID": 8,
      "DID": 2,
      "VID": "170"
    },
    {
      "E": "Kottukkal",
      "M": "കോട്ടുക്കല്‍",
      "TID": 8,
      "DID": 2,
      "VID": "171"
    },
    {
      "E": "Nilamel",
      "M": "നിലമേല്‍",
      "TID": 8,
      "DID": 2,
      "VID": "172"
    },
    {
      "E": "Ittiva",
      "M": "ഇട്ടിവ",
      "TID": 8,
      "DID": 2,
      "VID": "173"
    },
    {
      "E": "Pattazhy",
      "M": "പട്ടാഴി",
      "TID": 9,
      "DID": 2,
      "VID": "186"
    },
    {
      "E": "Thalavoor",
      "M": "തലവൂര്‍",
      "TID": 9,
      "DID": 2,
      "VID": "187"
    },
    {
      "E": "Vilakkudy",
      "M": "വിളക്കുടി",
      "TID": 9,
      "DID": 2,
      "VID": "188"
    },
    {
      "E": "Pathanapuram",
      "M": "പത്തനാപുരം",
      "TID": 9,
      "DID": 2,
      "VID": "189"
    },
    {
      "E": "Pidavoor",
      "M": "പിടവൂര്‍",
      "TID": 9,
      "DID": 2,
      "VID": "190"
    },
    {
      "E": "Pattazhy vadakkekara",
      "M": "പട്ടാഴി വടക്കേക്കര",
      "TID": 9,
      "DID": 2,
      "VID": "191"
    },
    {
      "E": "Piravanthoor",
      "M": "പിറവന്തൂര്‍",
      "TID": 9,
      "DID": 2,
      "VID": "193"
    },
    {
      "E": "Punnala",
      "M": "പുന്നല",
      "TID": 9,
      "DID": 2,
      "VID": "195"
    },
    {
      "E": "Neendakara",
      "M": "നീണ്ടകര",
      "TID": 10,
      "DID": 2,
      "VID": "197"
    },
    {
      "E": "Thekkumbhagom",
      "M": "തെക്കുംഭാഗം",
      "TID": 10,
      "DID": 2,
      "VID": "198"
    },
    {
      "E": "Chavara",
      "M": "ചവറ",
      "TID": 10,
      "DID": 2,
      "VID": "199"
    },
    {
      "E": "Panmana",
      "M": "പന്മന",
      "TID": 10,
      "DID": 2,
      "VID": "200"
    },
    {
      "E": "Karunagapally",
      "M": "കരുനാഗപ്പള്ളി",
      "TID": 10,
      "DID": 2,
      "VID": "201"
    },
    {
      "E": "Thevalakkara",
      "M": "തേവലക്കര",
      "TID": 10,
      "DID": 2,
      "VID": "202"
    },
    {
      "E": "Vadakkumthala",
      "M": "വടക്കുംത്തല",
      "TID": 10,
      "DID": 2,
      "VID": "203"
    },
    {
      "E": "Ayinivelikkulangara",
      "M": "അയിണിവേലിക്കുളങ്ങര",
      "TID": 10,
      "DID": 2,
      "VID": "204"
    },
    {
      "E": "Kallelibhagom",
      "M": "കല്ലേലിഭാഗം",
      "TID": 10,
      "DID": 2,
      "VID": "205"
    },
    {
      "E": "Adinadu",
      "M": "ആദിനാട്",
      "TID": 10,
      "DID": 2,
      "VID": "206"
    },
    {
      "E": "Oachira",
      "M": "ഓച്ചിറ",
      "TID": 10,
      "DID": 2,
      "VID": "207"
    },
    {
      "E": "Alappad",
      "M": "ആലപ്പാട്",
      "TID": 10,
      "DID": 2,
      "VID": "208"
    },
    {
      "E": "Thodiyoor",
      "M": "തൊടിയൂര്‍",
      "TID": 10,
      "DID": 2,
      "VID": "209"
    },
    {
      "E": "Kulasekharapuram",
      "M": "കുലശേഖരപുരം",
      "TID": 10,
      "DID": 2,
      "VID": "210"
    },
    {
      "E": "Thazhava",
      "M": "തഴവ",
      "TID": 10,
      "DID": 2,
      "VID": "211"
    },
    {
      "E": "Klappana",
      "M": "ക്ലാപ്പന",
      "TID": 10,
      "DID": 2,
      "VID": "212"
    },
    {
      "E": "Pavumba",
      "M": "പാവുമ്പ",
      "TID": 10,
      "DID": 2,
      "VID": "213"
    },
    {
      "E": "Mynagappally",
      "M": "മൈനാഗപ്പള്ളി",
      "TID": 11,
      "DID": 2,
      "VID": "214"
    },
    {
      "E": "Padinjare kallada",
      "M": "പടിഞ്ഞാറെകല്ലട",
      "TID": 11,
      "DID": 2,
      "VID": "215"
    },
    {
      "E": "Sasthamkotta",
      "M": "ശാസ്താംകോട്ട",
      "TID": 11,
      "DID": 2,
      "VID": "216"
    },
    {
      "E": "Poruvazhy",
      "M": "പോരുവഴി",
      "TID": 11,
      "DID": 2,
      "VID": "217"
    },
    {
      "E": "Kunnathur",
      "M": "കുന്നത്തൂര്‍",
      "TID": 11,
      "DID": 2,
      "VID": "218"
    },
    {
      "E": "Sooranad north",
      "M": "ശൂരനാട്(നോര്‍ത്ത്)",
      "TID": 11,
      "DID": 2,
      "VID": "219"
    },
    {
      "E": "Sooranad south",
      "M": "ശൂരനാട്(സൗത്ത്)",
      "TID": 11,
      "DID": 2,
      "VID": "220"
    },
    {
      "E": "Punalur",
      "M": "പുനലൂര്‍",
      "TID": 12,
      "DID": 2,
      "VID": "174"
    },
    {
      "E": "Karavaloor",
      "M": "കരവാളൂര്‍",
      "TID": 12,
      "DID": 2,
      "VID": "175"
    },
    {
      "E": "Edamulackal",
      "M": "ഇടമുളക്കല്‍",
      "TID": 12,
      "DID": 2,
      "VID": "176"
    },
    {
      "E": "Arakkal",
      "M": "അറക്കല്‍",
      "TID": 12,
      "DID": 2,
      "VID": "177"
    },
    {
      "E": "Anchal",
      "M": "അഞ്ചല്‍",
      "TID": 12,
      "DID": 2,
      "VID": "178"
    },
    {
      "E": "Valakodu",
      "M": "വാളക്കോട്",
      "TID": 12,
      "DID": 2,
      "VID": "179"
    },
    {
      "E": "Alayaman",
      "M": "അലയമണ്‍",
      "TID": 12,
      "DID": 2,
      "VID": "180"
    },
    {
      "E": "Eroor",
      "M": "ഏരൂര്‍",
      "TID": 12,
      "DID": 2,
      "VID": "181"
    },
    {
      "E": "Kulathupuzha",
      "M": "കുളത്തുപുഴ",
      "TID": 12,
      "DID": 2,
      "VID": "182"
    },
    {
      "E": "Channapetta",
      "M": "ചണ്ണപ്പേട്ട",
      "TID": 12,
      "DID": 2,
      "VID": "184"
    },
    {
      "E": "Ayiranelloor",
      "M": "അയിരനെല്ലൂര്‍",
      "TID": 12,
      "DID": 2,
      "VID": "185"
    },
    {
      "E": "Idaman",
      "M": "ഇടമണ്‍",
      "TID": 12,
      "DID": 2,
      "VID": "192"
    },
    {
      "E": "Aryankavu",
      "M": "ആര്യങ്കാവ്",
      "TID": 12,
      "DID": 2,
      "VID": "194"
    },
    {
      "E": "Thenmala",
      "M": "തെന്മല",
      "TID": 12,
      "DID": 2,
      "VID": "196"
    },
    {
      "E": "Thinkalkarikkam",
      "M": "തിങ്കള്‍കരിക്കം",
      "TID": 12,
      "DID": 2,
      "VID": "183"
    },
    {
      "E": "Kozhancherry",
      "M": "കോഴഞ്ചേരി",
      "TID": 13,
      "DID": 3,
      "VID": "241"
    },
    {
      "E": "Pathanamthitta",
      "M": "പത്തനംതിട്ട",
      "TID": 13,
      "DID": 3,
      "VID": "222"
    },
    {
      "E": "Mallappuzhassery",
      "M": "മല്ലപ്പുഴശ്ശേരി",
      "TID": 13,
      "DID": 3,
      "VID": "238"
    },
    {
      "E": "Omallur",
      "M": "ഓമല്ലൂര്‍",
      "TID": 13,
      "DID": 3,
      "VID": "221"
    },
    {
      "E": "Aranmula",
      "M": "ആറന്മുള",
      "TID": 13,
      "DID": 3,
      "VID": "233"
    },
    {
      "E": "Kulanada",
      "M": "കുളനട",
      "TID": 13,
      "DID": 3,
      "VID": "236"
    },
    {
      "E": "Elanthoor",
      "M": "ഇലന്തൂര്‍",
      "TID": 13,
      "DID": 3,
      "VID": "237"
    },
    {
      "E": "Naranganam",
      "M": "നാരങ്ങാനം",
      "TID": 13,
      "DID": 3,
      "VID": "240"
    },
    {
      "E": "Kidangannoor",
      "M": "കിടങ്ങന്നൂര്‍",
      "TID": 13,
      "DID": 3,
      "VID": "234"
    },
    {
      "E": "Mezhuveli",
      "M": "മെഴുവേലി",
      "TID": 13,
      "DID": 3,
      "VID": "235"
    },
    {
      "E": "Chenneerkara",
      "M": "ചെന്നീര്‍കര",
      "TID": 13,
      "DID": 3,
      "VID": "239"
    },
    {
      "E": "Peringanadu",
      "M": "പെരിങ്ങനാട്",
      "TID": 14,
      "DID": 3,
      "VID": "242"
    },
    {
      "E": "Adoor",
      "M": "അ‍ടൂര്‍",
      "TID": 14,
      "DID": 3,
      "VID": "243"
    },
    {
      "E": "Erathu",
      "M": "ഏറത്ത്",
      "TID": 14,
      "DID": 3,
      "VID": "244"
    },
    {
      "E": "Kadampanad",
      "M": "കടമ്പനാട്",
      "TID": 14,
      "DID": 3,
      "VID": "245"
    },
    {
      "E": "Pallikkal",
      "M": "പള്ളിക്കല്‍",
      "TID": 14,
      "DID": 3,
      "VID": "246"
    },
    {
      "E": "Panthalam thekkekara",
      "M": "പന്തളം തെക്കേക്കര",
      "TID": 14,
      "DID": 3,
      "VID": "427"
    },
    {
      "E": "Panthalam",
      "M": "പന്തളം",
      "TID": 14,
      "DID": 3,
      "VID": "248"
    },
    {
      "E": "Ezhamkulam",
      "M": "ഏഴംകുളം",
      "TID": 14,
      "DID": 3,
      "VID": "249"
    },
    {
      "E": "Enadimangalam",
      "M": "ഏനാദിമംഗലം",
      "TID": 14,
      "DID": 3,
      "VID": "250"
    },
    {
      "E": "Enathu",
      "M": "ഏനാത്ത്",
      "TID": 14,
      "DID": 3,
      "VID": "252"
    },
    {
      "E": "Kodumon",
      "M": "കൊടുമണ്‍",
      "TID": 14,
      "DID": 3,
      "VID": "254"
    },
    {
      "E": "Angadickal",
      "M": "അങ്ങാടിക്കല്‍",
      "TID": 14,
      "DID": 3,
      "VID": "255"
    },
    {
      "E": "Kurampala",
      "M": "കുരമ്പാല",
      "TID": 14,
      "DID": 3,
      "VID": "256"
    },
    {
      "E": "Thumpamon",
      "M": "തുമ്പമണ്‍",
      "TID": 14,
      "DID": 3,
      "VID": "1648"
    },
    {
      "E": "Kalanjoor",
      "M": "കലഞ്ഞൂര്‍",
      "TID": 15,
      "DID": 3,
      "VID": "251"
    },
    {
      "E": "Koodal",
      "M": "കൂടൽ",
      "TID": 15,
      "DID": 3,
      "VID": "253"
    },
    {
      "E": "Aruvappulam",
      "M": "അരുവാപ്പുലം",
      "TID": 15,
      "DID": 3,
      "VID": "231"
    },
    {
      "E": "Airavan",
      "M": "ഐരവണ്‍",
      "TID": 15,
      "DID": 3,
      "VID": "230"
    },
    {
      "E": "Konni",
      "M": "കോന്നി",
      "TID": 15,
      "DID": 3,
      "VID": "228"
    },
    {
      "E": "Konni thazham",
      "M": "കോന്നിത്താഴം",
      "TID": 15,
      "DID": 3,
      "VID": "229"
    },
    {
      "E": "Pramadom",
      "M": "പ്രമാടം",
      "TID": 15,
      "DID": 3,
      "VID": "224"
    },
    {
      "E": "Vallicode kottayam",
      "M": "വള്ളിക്കോട് കോട്ടയം",
      "TID": 15,
      "DID": 3,
      "VID": "225"
    },
    {
      "E": "Vallicode",
      "M": "വള്ളിക്കോട്",
      "TID": 15,
      "DID": 3,
      "VID": "223"
    },
    {
      "E": "Mylapra",
      "M": "മൈലപ്ര",
      "TID": 15,
      "DID": 3,
      "VID": "226"
    },
    {
      "E": "Malayalappuzha",
      "M": "മലയാലപ്പുഴ",
      "TID": 15,
      "DID": 3,
      "VID": "227"
    },
    {
      "E": "Thannithode",
      "M": "തണ്ണിത്തോട്",
      "TID": 15,
      "DID": 3,
      "VID": "232"
    },
    {
      "E": "Chittar",
      "M": "ചിറ്റാര്‍",
      "TID": 15,
      "DID": 3,
      "VID": "278"
    },
    {
      "E": "Seethathodu",
      "M": "സീതത്തോട്",
      "TID": 15,
      "DID": 3,
      "VID": "287"
    },
    {
      "E": "Niranam",
      "M": "നിരണം",
      "TID": 16,
      "DID": 3,
      "VID": "257"
    },
    {
      "E": "Kadapra",
      "M": "കടപ്ര",
      "TID": 16,
      "DID": 3,
      "VID": "258"
    },
    {
      "E": "Nedumbram",
      "M": "നെടുമ്പ്രം",
      "TID": 16,
      "DID": 3,
      "VID": "259"
    },
    {
      "E": "Peringara",
      "M": "പെരിങ്ങര",
      "TID": 16,
      "DID": 3,
      "VID": "260"
    },
    {
      "E": "Kavumbhagam",
      "M": "കാവുംഭാഗം",
      "TID": 16,
      "DID": 3,
      "VID": "261"
    },
    {
      "E": "Thiruvalla (municipality)",
      "M": "തിരുവല്ല (മുനിസിപ്പാലിറ്റി)",
      "TID": 16,
      "DID": 3,
      "VID": "262"
    },
    {
      "E": "Kuttapuzha",
      "M": "കുറ്റപ്പുഴ",
      "TID": 16,
      "DID": 3,
      "VID": "263"
    },
    {
      "E": "Eraviperoor",
      "M": "ഇരവിപേരൂര്‍",
      "TID": 16,
      "DID": 3,
      "VID": "264"
    },
    {
      "E": "Koyipram",
      "M": "കോയിപ്രം",
      "TID": 16,
      "DID": 3,
      "VID": "265"
    },
    {
      "E": "Thottapuzhassery",
      "M": "തോട്ടപ്പുഴശ്ശേരി",
      "TID": 16,
      "DID": 3,
      "VID": "266"
    },
    {
      "E": "Kuttoor",
      "M": "കുട്ടൂര്‍",
      "TID": 16,
      "DID": 3,
      "VID": "267"
    },
    {
      "E": "Kaviyoor",
      "M": "കവിയൂര്‍",
      "TID": 16,
      "DID": 3,
      "VID": "268"
    },
    {
      "E": "Ranni",
      "M": "റാന്നി",
      "TID": 17,
      "DID": 3,
      "VID": "269"
    },
    {
      "E": "Cherukole",
      "M": "ചെറുകോല്‍",
      "TID": 17,
      "DID": 3,
      "VID": "270"
    },
    {
      "E": "Ayroor",
      "M": "അയിരൂര്‍",
      "TID": 17,
      "DID": 3,
      "VID": "271"
    },
    {
      "E": "Kollamula",
      "M": "കൊല്ലമുള",
      "TID": 17,
      "DID": 3,
      "VID": "272"
    },
    {
      "E": "Angadi",
      "M": "അങ്ങാടി ",
      "TID": 17,
      "DID": 3,
      "VID": "273"
    },
    {
      "E": "Pazhavangadi",
      "M": "പഴവങ്ങാടി",
      "TID": 17,
      "DID": 3,
      "VID": "274"
    },
    {
      "E": "Chethakkal",
      "M": "ചേത്തക്കല്‍",
      "TID": 17,
      "DID": 3,
      "VID": "275"
    },
    {
      "E": "Perinad",
      "M": "പെരിനാട്",
      "TID": 17,
      "DID": 3,
      "VID": "276"
    },
    {
      "E": "Vadaserikara",
      "M": "വടശ്ശേരിക്കര",
      "TID": 17,
      "DID": 3,
      "VID": "277"
    },
    {
      "E": "Athikkayam",
      "M": "അത്തിക്കയം",
      "TID": 17,
      "DID": 3,
      "VID": "279"
    },
    {
      "E": "Mallapally",
      "M": "മല്ലപ്പള്ളി",
      "TID": 18,
      "DID": 3,
      "VID": "280"
    },
    {
      "E": "Aanikkadu",
      "M": "ആനിക്കാട്",
      "TID": 18,
      "DID": 3,
      "VID": "281"
    },
    {
      "E": "Kunnamthanam",
      "M": "കുന്നന്താനം",
      "TID": 18,
      "DID": 3,
      "VID": "282"
    },
    {
      "E": "Kallooppara",
      "M": "കല്ലുപാറ",
      "TID": 18,
      "DID": 3,
      "VID": "283"
    },
    {
      "E": "Puramattom",
      "M": "പുറമറ്റം",
      "TID": 18,
      "DID": 3,
      "VID": "284"
    },
    {
      "E": "Kottangal",
      "M": "കോട്ടാങ്ങല്‍",
      "TID": 18,
      "DID": 3,
      "VID": "285"
    },
    {
      "E": "Perumbatti",
      "M": "പെരുമ്പട്ടി",
      "TID": 18,
      "DID": 3,
      "VID": "286"
    },
    {
      "E": "Ezhumattoor",
      "M": "എഴുമറ്റൂര്‍",
      "TID": 18,
      "DID": 3,
      "VID": "1577"
    },
    {
      "E": "Thelliyoor",
      "M": "തെള്ളിയൂര്‍",
      "TID": 18,
      "DID": 3,
      "VID": "288"
    },
    {
      "E": "Puthuppally",
      "M": "പുതുപ്പള്ളി",
      "TID": 19,
      "DID": 4,
      "VID": "289"
    },
    {
      "E": "Kayamkulam",
      "M": "കായംകുളം",
      "TID": 19,
      "DID": 4,
      "VID": "290"
    },
    {
      "E": "Pathiyoor",
      "M": "പത്തിയൂര്‍",
      "TID": 19,
      "DID": 4,
      "VID": "291"
    },
    {
      "E": "Keerikkad",
      "M": "കീരിക്കാട്",
      "TID": 19,
      "DID": 4,
      "VID": "292"
    },
    {
      "E": "Kandalloor",
      "M": "കണ്ടല്ലൂര്‍",
      "TID": 19,
      "DID": 4,
      "VID": "293"
    },
    {
      "E": "Arattupuzha",
      "M": "ആറാട്ടുപുഴ",
      "TID": 19,
      "DID": 4,
      "VID": "294"
    },
    {
      "E": "Muthukulam",
      "M": "മുതുകുളം",
      "TID": 19,
      "DID": 4,
      "VID": "295"
    },
    {
      "E": "Cheppad",
      "M": "ചേപ്പാട്",
      "TID": 19,
      "DID": 4,
      "VID": "296"
    },
    {
      "E": "Krishnapuram",
      "M": "കൃഷ്ണപുരം",
      "TID": 19,
      "DID": 4,
      "VID": "297"
    },
    {
      "E": "Chingoli",
      "M": "ചിങ്ങോലി",
      "TID": 19,
      "DID": 4,
      "VID": "298"
    },
    {
      "E": "Pallippad",
      "M": "പള്ളിപ്പാട്",
      "TID": 19,
      "DID": 4,
      "VID": "299"
    },
    {
      "E": "Harippad",
      "M": "ഹരിപ്പാട്",
      "TID": 19,
      "DID": 4,
      "VID": "300"
    },
    {
      "E": "Veeyapuram",
      "M": "വിയപുരം",
      "TID": 19,
      "DID": 4,
      "VID": "301"
    },
    {
      "E": "Cheruthana",
      "M": "ചെറുതന",
      "TID": 19,
      "DID": 4,
      "VID": "302"
    },
    {
      "E": "Karthikappally",
      "M": "കാര്‍ത്തികപ്പള്ളി",
      "TID": 19,
      "DID": 4,
      "VID": "303"
    },
    {
      "E": "Kumarapuram",
      "M": "കുമാരപുരം",
      "TID": 19,
      "DID": 4,
      "VID": "304"
    },
    {
      "E": "Karuvatta",
      "M": "കരുവാറ്റ",
      "TID": 19,
      "DID": 4,
      "VID": "305"
    },
    {
      "E": "Thrikkunnapuzha",
      "M": "തൃക്കുന്നപുഴ",
      "TID": 19,
      "DID": 4,
      "VID": "306"
    },
    {
      "E": "Peringala",
      "M": "പെരിങ്ങാല",
      "TID": 20,
      "DID": 4,
      "VID": "307"
    },
    {
      "E": "Kannamangalam",
      "M": "കണ്ണമംഗലം",
      "TID": 20,
      "DID": 4,
      "VID": "308"
    },
    {
      "E": "Thripperunthura",
      "M": "തൃപ്പെരുന്തുറ",
      "TID": 20,
      "DID": 4,
      "VID": "309"
    },
    {
      "E": "Chennithala",
      "M": "ചെന്നിത്തല",
      "TID": 20,
      "DID": 4,
      "VID": "310"
    },
    {
      "E": "Mavelikkara",
      "M": "മാവേലിക്കര",
      "TID": 20,
      "DID": 4,
      "VID": "311"
    },
    {
      "E": "Thekkekkara",
      "M": "തെക്കേക്കര",
      "TID": 20,
      "DID": 4,
      "VID": "312"
    },
    {
      "E": "Thazhakkara",
      "M": "തഴക്കര",
      "TID": 20,
      "DID": 4,
      "VID": "313"
    },
    {
      "E": "Vettiyar",
      "M": "വെട്ടിയാര്‍",
      "TID": 20,
      "DID": 4,
      "VID": "314"
    },
    {
      "E": "Vallikunnam",
      "M": "വള്ളിക്കുന്നം",
      "TID": 20,
      "DID": 4,
      "VID": "315"
    },
    {
      "E": "Thamarakkulam",
      "M": "താമരക്കുളം",
      "TID": 20,
      "DID": 4,
      "VID": "316"
    },
    {
      "E": "Bharanikkavu",
      "M": "ഭരണിക്കാവ്",
      "TID": 20,
      "DID": 4,
      "VID": "317"
    },
    {
      "E": "Kattanam",
      "M": "കറ്റാനം",
      "TID": 20,
      "DID": 4,
      "VID": "318"
    },
    {
      "E": "Noornad",
      "M": "നൂറനാട്",
      "TID": 20,
      "DID": 4,
      "VID": "319"
    },
    {
      "E": "Paramel",
      "M": "പാറമേല്‍",
      "TID": 20,
      "DID": 4,
      "VID": "320"
    },
    {
      "E": "Chunakkara",
      "M": "ചുനക്കര",
      "TID": 20,
      "DID": 4,
      "VID": "321"
    },
    {
      "E": "Chengannur",
      "M": "ചെങ്ങന്നൂര്‍",
      "TID": 21,
      "DID": 4,
      "VID": "322"
    },
    {
      "E": "Mulakkuzha",
      "M": "മുളക്കുഴ",
      "TID": 21,
      "DID": 4,
      "VID": "323"
    },
    {
      "E": "Venmani",
      "M": "വെണ്‍മണി",
      "TID": 21,
      "DID": 4,
      "VID": "324"
    },
    {
      "E": "Pandanad",
      "M": "പാണ്ടനാട്",
      "TID": 21,
      "DID": 4,
      "VID": "325"
    },
    {
      "E": "Thiruvanvandoor",
      "M": "തിരുവന്‍വണ്ടൂര്‍",
      "TID": 21,
      "DID": 4,
      "VID": "326"
    },
    {
      "E": "Mannar",
      "M": "മാന്നാര്‍",
      "TID": 21,
      "DID": 4,
      "VID": "327"
    },
    {
      "E": "Kurattiserry",
      "M": "കുരട്ടിശ്ശേരി",
      "TID": 21,
      "DID": 4,
      "VID": "328"
    },
    {
      "E": "Puliyoor",
      "M": "പുലിയൂര്‍",
      "TID": 21,
      "DID": 4,
      "VID": "329"
    },
    {
      "E": "Cheriyanad",
      "M": "ചെറിയനാട്",
      "TID": 21,
      "DID": 4,
      "VID": "330"
    },
    {
      "E": "Ala",
      "M": "ആലാ",
      "TID": 21,
      "DID": 4,
      "VID": "331"
    },
    {
      "E": "Ennakkad",
      "M": "എണ്ണക്കാട്",
      "TID": 21,
      "DID": 4,
      "VID": "332"
    },
    {
      "E": "Thalavazhy",
      "M": "തലവടി",
      "TID": 22,
      "DID": 4,
      "VID": "333"
    },
    {
      "E": "Thakazhy",
      "M": "തകഴി",
      "TID": 22,
      "DID": 4,
      "VID": "334"
    },
    {
      "E": "Chambakulam",
      "M": "ചമ്പക്കുളം",
      "TID": 22,
      "DID": 4,
      "VID": "335"
    },
    {
      "E": "Nedumudy",
      "M": "നെടുമുടി",
      "TID": 22,
      "DID": 4,
      "VID": "336"
    },
    {
      "E": "Muttar",
      "M": "മുട്ടാര്‍",
      "TID": 22,
      "DID": 4,
      "VID": "337"
    },
    {
      "E": "Edathua",
      "M": "എടത്വാ",
      "TID": 22,
      "DID": 4,
      "VID": "338"
    },
    {
      "E": "Kainakary south",
      "M": "കൈനകരി സൗത്ത്",
      "TID": 22,
      "DID": 4,
      "VID": "339"
    },
    {
      "E": "Kainakary north",
      "M": "കൈനകരി നോര്‍ത്ത്",
      "TID": 22,
      "DID": 4,
      "VID": "340"
    },
    {
      "E": "Pulinkunnu",
      "M": "പുളിങ്കുന്ന്",
      "TID": 22,
      "DID": 4,
      "VID": "341"
    },
    {
      "E": "Kavalam",
      "M": "കാവാലം",
      "TID": 22,
      "DID": 4,
      "VID": "342"
    },
    {
      "E": "Ramankary",
      "M": "രാമങ്കരി",
      "TID": 22,
      "DID": 4,
      "VID": "343"
    },
    {
      "E": "Kunnumma",
      "M": "കുന്നുമ്മ",
      "TID": 22,
      "DID": 4,
      "VID": "344"
    },
    {
      "E": "Neelamperoor",
      "M": "നീലംപേരൂര്‍",
      "TID": 22,
      "DID": 4,
      "VID": "345"
    },
    {
      "E": "Veliyanad",
      "M": "വെളിയനാട്",
      "TID": 22,
      "DID": 4,
      "VID": "346"
    },
    {
      "E": "Ambalapuzha",
      "M": "അമ്പലപ്പുഴ",
      "TID": 23,
      "DID": 4,
      "VID": "347"
    },
    {
      "E": "Ambalapuzha north",
      "M": "അമ്പലപ്പുഴ നോര്‍ത്ത്",
      "TID": 23,
      "DID": 4,
      "VID": "0"
    },
    {
      "E": "Pathirappally",
      "M": "പാതിരപ്പള്ളി ",
      "TID": 23,
      "DID": 4,
      "VID": "348"
    },
    {
      "E": "Mullakkal",
      "M": "മുല്ലക്കല്‍",
      "TID": 23,
      "DID": 4,
      "VID": "349"
    },
    {
      "E": "Paravoor",
      "M": "പരവൂര്‍",
      "TID": 23,
      "DID": 4,
      "VID": "350"
    },
    {
      "E": "Punnapra",
      "M": "പുന്നപ്ര",
      "TID": 23,
      "DID": 4,
      "VID": "351"
    },
    {
      "E": "Alappuzha west",
      "M": "ആലപ്പുഴ വെസ്റ്റ്",
      "TID": 23,
      "DID": 4,
      "VID": "352"
    },
    {
      "E": "Komalapuram",
      "M": "കോമളപുരം",
      "TID": 23,
      "DID": 4,
      "VID": "353"
    },
    {
      "E": "Purakkad",
      "M": "പുറക്കാട്",
      "TID": 23,
      "DID": 4,
      "VID": "354"
    },
    {
      "E": "Aryad south",
      "M": "ആര്യാട് സൗത്ത്",
      "TID": 23,
      "DID": 4,
      "VID": "355"
    },
    {
      "E": "Kalavoor",
      "M": "കലവൂര്‍",
      "TID": 23,
      "DID": 4,
      "VID": "356"
    },
    {
      "E": "Karumadi",
      "M": "കരുമാടി",
      "TID": 23,
      "DID": 4,
      "VID": "357"
    },
    {
      "E": "Pazhaveedu",
      "M": "പഴവീട്",
      "TID": 23,
      "DID": 4,
      "VID": "358"
    },
    {
      "E": "Mannanjeri",
      "M": "മണ്ണഞ്ചേരി",
      "TID": 23,
      "DID": 4,
      "VID": "359"
    },
    {
      "E": "Vayalar east",
      "M": "വയലാര്‍ ഈസ്റ്റ്",
      "TID": 24,
      "DID": 4,
      "VID": "360"
    },
    {
      "E": "Cherthala north",
      "M": "ചേര്‍ത്തല നോര്‍ത്ത്",
      "TID": 24,
      "DID": 4,
      "VID": "361"
    },
    {
      "E": "Cherthala south",
      "M": "ചേര്‍ത്തല സൗത്ത്",
      "TID": 24,
      "DID": 4,
      "VID": "362"
    },
    {
      "E": "Thanneermukkam north",
      "M": "തണ്ണീര്‍മുക്കം നോര്‍ത്ത്",
      "TID": 24,
      "DID": 4,
      "VID": "363"
    },
    {
      "E": "Thanneermukkam south",
      "M": "തണ്ണീര്‍മുക്കം സൗത്ത്",
      "TID": 24,
      "DID": 4,
      "VID": "364"
    },
    {
      "E": "Pattanakkad",
      "M": "പട്ടണക്കാട്",
      "TID": 24,
      "DID": 4,
      "VID": "365"
    },
    {
      "E": "Kokkothamangalam",
      "M": "കൊക്കോതമംഗലം",
      "TID": 24,
      "DID": 4,
      "VID": "366"
    },
    {
      "E": "Kanjikuzhy",
      "M": "കഞ്ഞിക്കുഴി",
      "TID": 24,
      "DID": 4,
      "VID": "367"
    },
    {
      "E": "Mararikulam north",
      "M": "മാരാരിക്കുളം നോര്‍ത്ത്",
      "TID": 24,
      "DID": 4,
      "VID": "368"
    },
    {
      "E": "Kadakkarappally",
      "M": "കടക്കരപ്പള്ളി",
      "TID": 24,
      "DID": 4,
      "VID": "369"
    },
    {
      "E": "Aroor",
      "M": "അരൂര്‍",
      "TID": 24,
      "DID": 4,
      "VID": "370"
    },
    {
      "E": "Kuthiyathodu",
      "M": "കുത്തിയതോട്",
      "TID": 24,
      "DID": 4,
      "VID": "371"
    },
    {
      "E": "Thuravoor south",
      "M": "തുറവൂര്‍ സൗത്ത്",
      "TID": 24,
      "DID": 4,
      "VID": "372"
    },
    {
      "E": "Pallippuram",
      "M": "പള്ളിപ്പുറം",
      "TID": 24,
      "DID": 4,
      "VID": "373"
    },
    {
      "E": "Thaikkattussery",
      "M": "തൈക്കാട്ടുശ്ശേരി",
      "TID": 24,
      "DID": 4,
      "VID": "374"
    },
    {
      "E": "Panavally",
      "M": "പാണാവള്ളി",
      "TID": 24,
      "DID": 4,
      "VID": "375"
    },
    {
      "E": "Arukkutty",
      "M": "അരുക്കുറ്റി",
      "TID": 24,
      "DID": 4,
      "VID": "376"
    },
    {
      "E": "Ezhupunna",
      "M": "ഏഴുപുന്ന",
      "TID": 24,
      "DID": 4,
      "VID": "377"
    },
    {
      "E": "Kodamthuruth",
      "M": "കോടംതുരുത്ത്",
      "TID": 24,
      "DID": 4,
      "VID": "378"
    },
    {
      "E": "Perumbalam",
      "M": "പെരുമ്പളം",
      "TID": 24,
      "DID": 4,
      "VID": "379"
    },
    {
      "E": "Arthunkal",
      "M": "അറുത്തുങ്കല്‍",
      "TID": 24,
      "DID": 4,
      "VID": "0"
    },
    {
      "E": "Vazhappilly west",
      "M": "വാഴപ്പള്ളി പടിഞ്ഞാറ്",
      "TID": 25,
      "DID": 5,
      "VID": "380"
    },
    {
      "E": "Kurichy",
      "M": "കുറിച്ചി",
      "TID": 25,
      "DID": 5,
      "VID": "381"
    },
    {
      "E": "Vazhappilly east",
      "M": "വാഴപ്പള്ളി കിഴക്ക്",
      "TID": 25,
      "DID": 5,
      "VID": "382"
    },
    {
      "E": "Changanassery",
      "M": "ചങ്ങനാശ്ശേരി",
      "TID": 25,
      "DID": 5,
      "VID": "383"
    },
    {
      "E": "Thrikkodithanam",
      "M": "തൃക്കൊടിത്താനം",
      "TID": 25,
      "DID": 5,
      "VID": "384"
    },
    {
      "E": "Chethippuzha",
      "M": "ചെത്തിപ്പുഴ",
      "TID": 25,
      "DID": 5,
      "VID": "385"
    },
    {
      "E": "Payippad",
      "M": "പായിപ്പാട്",
      "TID": 25,
      "DID": 5,
      "VID": "386"
    },
    {
      "E": "Madappally",
      "M": "മാടപ്പള്ളി",
      "TID": 25,
      "DID": 5,
      "VID": "387"
    },
    {
      "E": "Vakathanam",
      "M": "വാകത്താനം",
      "TID": 25,
      "DID": 5,
      "VID": "388"
    },
    {
      "E": "Nedumkunnam",
      "M": "നെടുങ്കുന്നം",
      "TID": 25,
      "DID": 5,
      "VID": "389"
    },
    {
      "E": "Karukachal",
      "M": "കറുകച്ചാല്‍",
      "TID": 25,
      "DID": 5,
      "VID": "390"
    },
    {
      "E": "Vazhoor",
      "M": "വാഴൂര്‍",
      "TID": 25,
      "DID": 5,
      "VID": "391"
    },
    {
      "E": "Kanghazha",
      "M": "കങ്ങഴ",
      "TID": 25,
      "DID": 5,
      "VID": "392"
    },
    {
      "E": "Vellavoor",
      "M": "വെള്ളാവൂര്‍",
      "TID": 25,
      "DID": 5,
      "VID": "393"
    },
    {
      "E": "Thottaykad",
      "M": "തോട്ടക്കാട്",
      "TID": 25,
      "DID": 5,
      "VID": "394"
    },
    {
      "E": "Kanjirappally",
      "M": "കാഞ്ഞിരപ്പള്ളി",
      "TID": 26,
      "DID": 5,
      "VID": "395"
    },
    {
      "E": "Mundackayam",
      "M": "മുണ്ടക്കയം",
      "TID": 26,
      "DID": 5,
      "VID": "396"
    },
    {
      "E": "Chirakadavu",
      "M": "ചിറക്കടവ്",
      "TID": 26,
      "DID": 5,
      "VID": "397"
    },
    {
      "E": "Elikulam",
      "M": "എലിക്കുളം",
      "TID": 26,
      "DID": 5,
      "VID": "398"
    },
    {
      "E": "Koovappally",
      "M": "കൂവപ്പള്ളി",
      "TID": 26,
      "DID": 5,
      "VID": "399"
    },
    {
      "E": "Idakkunnam",
      "M": "ഇടക്കുന്നം",
      "TID": 26,
      "DID": 5,
      "VID": "400"
    },
    {
      "E": "Ilamkulam",
      "M": "ഇളംകുളം",
      "TID": 26,
      "DID": 5,
      "VID": "401"
    },
    {
      "E": "Koottikkal",
      "M": "കൂട്ടിക്കല്‍",
      "TID": 26,
      "DID": 5,
      "VID": "402"
    },
    {
      "E": "Manimala",
      "M": "മണിമല",
      "TID": 26,
      "DID": 5,
      "VID": "403"
    },
    {
      "E": "Erumely south",
      "M": "എരുമേലി സൗത്ത്",
      "TID": 26,
      "DID": 5,
      "VID": "404"
    },
    {
      "E": "Cheruvally",
      "M": "ചെറുവള്ളി",
      "TID": 26,
      "DID": 5,
      "VID": "405"
    },
    {
      "E": "Erumely north",
      "M": "എരുമേലി നോര്‍ത്ത്",
      "TID": 26,
      "DID": 5,
      "VID": "406"
    },
    {
      "E": "Koruthodu",
      "M": "കോരുത്തോട്",
      "TID": 26,
      "DID": 5,
      "VID": "0"
    },
    {
      "E": "Kottayam town block",
      "M": "കോട്ടയം ഠൗണ്‍ ബ്ളോക്ക്",
      "TID": 27,
      "DID": 5,
      "VID": "407"
    },
    {
      "E": "Thiruvarpu",
      "M": "തിരുവാര്‍പ്പ്",
      "TID": 27,
      "DID": 5,
      "VID": "408"
    },
    {
      "E": "Vijayapuram",
      "M": "വിജയപുരം",
      "TID": 27,
      "DID": 5,
      "VID": "409"
    },
    {
      "E": "Veloor",
      "M": "വേളൂര്‍",
      "TID": 27,
      "DID": 5,
      "VID": "410"
    },
    {
      "E": "Muttambalam town block",
      "M": "മുട്ടമ്പലം ഠൗണ്‍ ബ്ളോക്ക്",
      "TID": 27,
      "DID": 5,
      "VID": "411"
    },
    {
      "E": "Chengalam south",
      "M": "ചെങ്ങളം സൗത്ത്",
      "TID": 27,
      "DID": 5,
      "VID": "412"
    },
    {
      "E": "Kumarakam",
      "M": "കുമരകം",
      "TID": 27,
      "DID": 5,
      "VID": "413"
    },
    {
      "E": "Ettumanoor",
      "M": "ഏറ്റുമാനൂര്‍",
      "TID": 27,
      "DID": 5,
      "VID": "414"
    },
    {
      "E": "Athirampuzha",
      "M": "അതിരമ്പുഴ",
      "TID": 27,
      "DID": 5,
      "VID": "415"
    },
    {
      "E": "Kaippuzha",
      "M": "കൈപ്പുഴ",
      "TID": 27,
      "DID": 5,
      "VID": "416"
    },
    {
      "E": "Arpookkara",
      "M": "ആര്‍പ്പൂക്കര",
      "TID": 27,
      "DID": 5,
      "VID": "417"
    },
    {
      "E": "Aymanam",
      "M": "അയ്മനം",
      "TID": 27,
      "DID": 5,
      "VID": "418"
    },
    {
      "E": "Onamthuruthu",
      "M": "ഓണംതുരുത്ത്",
      "TID": 27,
      "DID": 5,
      "VID": "419"
    },
    {
      "E": "Peroor",
      "M": "പേരൂര്‍",
      "TID": 27,
      "DID": 5,
      "VID": "420"
    },
    {
      "E": "Perumbayikkad",
      "M": "പെരുമ്പായിക്കാട്",
      "TID": 27,
      "DID": 5,
      "VID": "421"
    },
    {
      "E": "Puthuppally",
      "M": "പുതുപ്പള്ളി",
      "TID": 27,
      "DID": 5,
      "VID": "422"
    },
    {
      "E": "Pampady",
      "M": "പാമ്പാടി",
      "TID": 27,
      "DID": 5,
      "VID": "423"
    },
    {
      "E": "Nattakam",
      "M": "നാട്ടകം",
      "TID": 27,
      "DID": 5,
      "VID": "424"
    },
    {
      "E": "Panachikkad",
      "M": "പനച്ചിക്കാട്",
      "TID": 27,
      "DID": 5,
      "VID": "425"
    },
    {
      "E": "Manarkkad",
      "M": "മണര്‍കാട്",
      "TID": 27,
      "DID": 5,
      "VID": "426"
    },
    {
      "E": "Meenadam",
      "M": "മീനടം",
      "TID": 27,
      "DID": 5,
      "VID": "427"
    },
    {
      "E": "Anikkad",
      "M": "ആനിക്കാട്",
      "TID": 27,
      "DID": 5,
      "VID": "428"
    },
    {
      "E": "Kooroppada",
      "M": "കൂരോപ്പട",
      "TID": 27,
      "DID": 5,
      "VID": "429"
    },
    {
      "E": "Akalakkunnam",
      "M": "അകലക്കുന്നം",
      "TID": 27,
      "DID": 5,
      "VID": "430"
    },
    {
      "E": "Ayarkkunnam",
      "M": "അയര്‍കുന്നം",
      "TID": 27,
      "DID": 5,
      "VID": "431"
    },
    {
      "E": "Chengalam east",
      "M": "ചെങ്ങളം ഈസ്റ്റ്",
      "TID": 27,
      "DID": 5,
      "VID": "432"
    },
    {
      "E": "Kuravilangadu",
      "M": "കുറുവിലങ്ങാട്",
      "TID": 28,
      "DID": 5,
      "VID": "433"
    },
    {
      "E": "Veliyannoor",
      "M": "വെളിയന്നൂര്‍",
      "TID": 28,
      "DID": 5,
      "VID": "434"
    },
    {
      "E": "Vellilappally",
      "M": "വെള്ളിലാപ്പള്ളി",
      "TID": 28,
      "DID": 5,
      "VID": "435"
    },
    {
      "E": "Kidangoor",
      "M": "കിടങ്ങൂര്‍",
      "TID": 28,
      "DID": 5,
      "VID": "436"
    },
    {
      "E": "Kanakkary",
      "M": "കാണക്കാരി",
      "TID": 28,
      "DID": 5,
      "VID": "437"
    },
    {
      "E": "Elakkad",
      "M": "ഇലക്കാട്",
      "TID": 28,
      "DID": 5,
      "VID": "438"
    },
    {
      "E": "Kurichithanam",
      "M": "കുറിച്ചിത്താനം",
      "TID": 28,
      "DID": 5,
      "VID": "439"
    },
    {
      "E": "Uzhavoor",
      "M": "ഉഴവൂര്‍",
      "TID": 28,
      "DID": 5,
      "VID": "440"
    },
    {
      "E": "Ramapuram",
      "M": "രാമപുരം",
      "TID": 28,
      "DID": 5,
      "VID": "441"
    },
    {
      "E": "Monippilly",
      "M": "മോനിപ്പള്ളി",
      "TID": 28,
      "DID": 5,
      "VID": "442"
    },
    {
      "E": "Lalam",
      "M": "ളാലം",
      "TID": 28,
      "DID": 5,
      "VID": "443"
    },
    {
      "E": "Puliyannoor",
      "M": "പുലിയന്നൂര്‍",
      "TID": 28,
      "DID": 5,
      "VID": "444"
    },
    {
      "E": "Meenachil",
      "M": "മീനച്ചില്‍",
      "TID": 28,
      "DID": 5,
      "VID": "445"
    },
    {
      "E": "Bharananganam",
      "M": "ഭരണങ്ങാനം",
      "TID": 28,
      "DID": 5,
      "VID": "446"
    },
    {
      "E": "Poovarany",
      "M": "പൂവരണി",
      "TID": 28,
      "DID": 5,
      "VID": "447"
    },
    {
      "E": "Vallichira",
      "M": "വള്ളിച്ചിറ",
      "TID": 28,
      "DID": 5,
      "VID": "448"
    },
    {
      "E": "Kadanadu",
      "M": "കടനാട്",
      "TID": 28,
      "DID": 5,
      "VID": "449"
    },
    {
      "E": "Kondoor",
      "M": "കൊണ്ടൂര്‍",
      "TID": 28,
      "DID": 5,
      "VID": "450"
    },
    {
      "E": "Thalanad",
      "M": "തലനാട്",
      "TID": 28,
      "DID": 5,
      "VID": "451"
    },
    {
      "E": "Poonjar nadubhagam",
      "M": "പൂഞ്ഞാര്‍ നടുഭാഗം",
      "TID": 28,
      "DID": 5,
      "VID": "452"
    },
    {
      "E": "Poonjar thekkekkara",
      "M": "പൂഞ്ഞാര്‍ തെക്കേക്കര",
      "TID": 28,
      "DID": 5,
      "VID": "453"
    },
    {
      "E": "Melukavu",
      "M": "മേലുക്കാവ്",
      "TID": 28,
      "DID": 5,
      "VID": "454"
    },
    {
      "E": "Thalappalam",
      "M": "തലപ്പാലം",
      "TID": 28,
      "DID": 5,
      "VID": "455"
    },
    {
      "E": "Teekoy",
      "M": "തീക്കോയി",
      "TID": 28,
      "DID": 5,
      "VID": "456"
    },
    {
      "E": "Erattupetta",
      "M": "ഈരാറ്റുപേട്ട",
      "TID": 28,
      "DID": 5,
      "VID": "457"
    },
    {
      "E": "Moonnilavu",
      "M": "മൂന്നിലവ്",
      "TID": 28,
      "DID": 5,
      "VID": "458"
    },
    {
      "E": "Kadaplamattom",
      "M": "കടപ്ലാമറ്റം",
      "TID": 28,
      "DID": 5,
      "VID": "0"
    },
    {
      "E": "Vaikom",
      "M": "വൈക്കം",
      "TID": 29,
      "DID": 5,
      "VID": "459"
    },
    {
      "E": "Naduvila",
      "M": "നടുവില",
      "TID": 29,
      "DID": 5,
      "VID": "460"
    },
    {
      "E": "Vadakkemury",
      "M": "വടക്കേമുറി",
      "TID": 29,
      "DID": 5,
      "VID": "461"
    },
    {
      "E": "Chempu",
      "M": "ചെമ്പ്",
      "TID": 29,
      "DID": 5,
      "VID": "462"
    },
    {
      "E": "Kulasekharamangalam",
      "M": "കുലശേഖരമംഗലം",
      "TID": 29,
      "DID": 5,
      "VID": "463"
    },
    {
      "E": "Thalayazham",
      "M": "തലയാഴം",
      "TID": 29,
      "DID": 5,
      "VID": "464"
    },
    {
      "E": "Vechoor",
      "M": "വെച്ചൂര്‍",
      "TID": 29,
      "DID": 5,
      "VID": "465"
    },
    {
      "E": "Vadayar",
      "M": "വടയാര്‍",
      "TID": 29,
      "DID": 5,
      "VID": "466"
    },
    {
      "E": "Velloor",
      "M": "വെള്ളൂര്‍",
      "TID": 29,
      "DID": 5,
      "VID": "467"
    },
    {
      "E": "Mulakulam",
      "M": "മുളക്കുളം",
      "TID": 29,
      "DID": 5,
      "VID": "468"
    },
    {
      "E": "Kaduthuruthy",
      "M": "കടുത്തുരുത്തി",
      "TID": 29,
      "DID": 5,
      "VID": "469"
    },
    {
      "E": "Manjoor",
      "M": "മാഞ്ഞൂര്‍",
      "TID": 29,
      "DID": 5,
      "VID": "470"
    },
    {
      "E": "Njeezhoor",
      "M": "ഞീഴൂര്‍",
      "TID": 29,
      "DID": 5,
      "VID": "471"
    },
    {
      "E": "Kallara",
      "M": "കല്ലറ",
      "TID": 29,
      "DID": 5,
      "VID": "472"
    },
    {
      "E": "Muttuchira",
      "M": "മുട്ടുച്ചിറ",
      "TID": 29,
      "DID": 5,
      "VID": "473"
    },
    {
      "E": "Kothanalloor",
      "M": "കോതനല്ലൂര്‍",
      "TID": 29,
      "DID": 5,
      "VID": "474"
    },
    {
      "E": "Udayanapuram",
      "M": "ഉദയനാപുരം",
      "TID": 29,
      "DID": 5,
      "VID": "0"
    },
    {
      "E": "TV Puram",
      "M": "റ്റി വി പുരം",
      "TID": 29,
      "DID": 5,
      "VID": "1649"
    },
    {
      "E": "Thodupuzha",
      "M": "തൊടുപുഴ",
      "TID": 30,
      "DID": 6,
      "VID": "475"
    },
    {
      "E": "Muttom",
      "M": "മുട്ടം",
      "TID": 30,
      "DID": 6,
      "VID": "476"
    },
    {
      "E": "Karikkode",
      "M": "കാരിക്കോട്",
      "TID": 30,
      "DID": 6,
      "VID": "477"
    },
    {
      "E": "Alacode",
      "M": "ആലക്കോട്",
      "TID": 30,
      "DID": 6,
      "VID": "478"
    },
    {
      "E": "Kumaramangalam",
      "M": "കുമാരമംഗലം",
      "TID": 30,
      "DID": 6,
      "VID": "479"
    },
    {
      "E": "Manakkad",
      "M": "മണക്കാട്",
      "TID": 30,
      "DID": 6,
      "VID": "480"
    },
    {
      "E": "Karimkunnam",
      "M": "കരിങ്കുന്നം",
      "TID": 30,
      "DID": 6,
      "VID": "481"
    },
    {
      "E": "Purapuzha",
      "M": "പുറപ്പുഴ",
      "TID": 30,
      "DID": 6,
      "VID": "482"
    },
    {
      "E": "Karimannoor",
      "M": "കരിമണ്ണൂര്‍",
      "TID": 30,
      "DID": 6,
      "VID": "483"
    },
    {
      "E": "Udumbannoor",
      "M": "ഉടുമ്പന്നൂര്‍",
      "TID": 30,
      "DID": 6,
      "VID": "484"
    },
    {
      "E": "Neyyasseri",
      "M": "നെയ്യശ്ശേരി",
      "TID": 30,
      "DID": 6,
      "VID": "485"
    },
    {
      "E": "Vannapuram",
      "M": "വണ്ണപുറം",
      "TID": 30,
      "DID": 6,
      "VID": "486"
    },
    {
      "E": "Kodikulam",
      "M": "കൊടിക്കുളം",
      "TID": 30,
      "DID": 6,
      "VID": "487"
    },
    {
      "E": "Kudayathoor",
      "M": "കുടയത്തൂര്‍",
      "TID": 30,
      "DID": 6,
      "VID": "488"
    },
    {
      "E": "Velliyamattom",
      "M": "വെള്ളിയാമറ്റം",
      "TID": 30,
      "DID": 6,
      "VID": "489"
    },
    {
      "E": "Arakkulam",
      "M": "അറക്കുളം",
      "TID": 30,
      "DID": 6,
      "VID": "491"
    },
    {
      "E": "Elappally",
      "M": "ഇലപ്പള്ളി",
      "TID": 30,
      "DID": 6,
      "VID": "492"
    },
    {
      "E": "Idukki",
      "M": "ഇടുക്കി",
      "TID": 31,
      "DID": 6,
      "VID": "490"
    },
    {
      "E": "Kanjikuzhy",
      "M": "കഞ്ഞിക്കുഴി",
      "TID": 31,
      "DID": 6,
      "VID": "493"
    },
    {
      "E": "Upputhode",
      "M": "ഉപ്പുതോട്",
      "TID": 31,
      "DID": 6,
      "VID": "524"
    },
    {
      "E": "Thankamany",
      "M": "തങ്കമണി",
      "TID": 31,
      "DID": 6,
      "VID": "529"
    },
    {
      "E": "Vathikudy",
      "M": "വാത്തിക്കുടി",
      "TID": 31,
      "DID": 6,
      "VID": "523"
    },
    {
      "E": "Konnathady",
      "M": "കൊന്നത്തടി",
      "TID": 31,
      "DID": 6,
      "VID": "519"
    },
    {
      "E": "Kattappana",
      "M": "കട്ടപ്പന",
      "TID": 31,
      "DID": 6,
      "VID": "535"
    },
    {
      "E": "Ayyappancoil",
      "M": "അയ്യപ്പന്‍കോവില്‍",
      "TID": 31,
      "DID": 6,
      "VID": "531"
    },
    {
      "E": "Kanchiyar",
      "M": "കാഞ്ചിയാര്‍",
      "TID": 31,
      "DID": 6,
      "VID": "1644"
    },
    {
      "E": "Peruvanthanam",
      "M": "പെരുവന്താനം",
      "TID": 32,
      "DID": 6,
      "VID": "494"
    },
    {
      "E": "Kokkayar",
      "M": "കൊക്കയാര്‍",
      "TID": 32,
      "DID": 6,
      "VID": "495"
    },
    {
      "E": "Vagamon",
      "M": "വാഗമണ്‍",
      "TID": 32,
      "DID": 6,
      "VID": "496"
    },
    {
      "E": "Elappara",
      "M": "ഏലപ്പാറ",
      "TID": 32,
      "DID": 6,
      "VID": "497"
    },
    {
      "E": "Upputhara",
      "M": "ഉപ്പുതറ",
      "TID": 32,
      "DID": 6,
      "VID": "498"
    },
    {
      "E": "Peerumade",
      "M": "പീരുമേട്",
      "TID": 32,
      "DID": 6,
      "VID": "499"
    },
    {
      "E": "Mlappara",
      "M": "മ്ളാപ്പാറ",
      "TID": 32,
      "DID": 6,
      "VID": "500"
    },
    {
      "E": "Periyar",
      "M": "പെരിയാര്‍",
      "TID": 32,
      "DID": 6,
      "VID": "501"
    },
    {
      "E": "Manjumala",
      "M": "മഞ്ചുമല",
      "TID": 32,
      "DID": 6,
      "VID": "502"
    },
    {
      "E": "Kumily",
      "M": "കുമിളി",
      "TID": 32,
      "DID": 6,
      "VID": "1581"
    },
    {
      "E": "Mannamkandam",
      "M": "മന്നാംകണ്ടം",
      "TID": 33,
      "DID": 6,
      "VID": "504"
    },
    {
      "E": "Vellathuval",
      "M": "വെള്ളത്തൂവല്‍",
      "TID": 33,
      "DID": 6,
      "VID": "505"
    },
    {
      "E": "Pallivasal",
      "M": "പള്ളിവാസല്‍",
      "TID": 33,
      "DID": 6,
      "VID": "506"
    },
    {
      "E": "Kunjithanny",
      "M": "കുഞ്ചിത്തണ്ണി",
      "TID": 33,
      "DID": 6,
      "VID": "507"
    },
    {
      "E": "Anaviratty",
      "M": "ആനവിരട്ടി",
      "TID": 33,
      "DID": 6,
      "VID": "508"
    },
    {
      "E": "Kannan Devan Hills Munnar",
      "M": "കണ്ണന്‍ദേവന്‍ ഹില്‍സ്  മൂന്നാർ",
      "TID": 33,
      "DID": 6,
      "VID": "509"
    },
    {
      "E": "Marayoor",
      "M": "മറയൂര്‍",
      "TID": 33,
      "DID": 6,
      "VID": "510"
    },
    {
      "E": "Keezhanthoor",
      "M": "കീഴാന്തൂര്‍",
      "TID": 33,
      "DID": 6,
      "VID": "511"
    },
    {
      "E": "Kanthalloor",
      "M": "കാന്തല്ലൂര്‍",
      "TID": 33,
      "DID": 6,
      "VID": "512"
    },
    {
      "E": "Kottakamboor",
      "M": "കൊട്ടാകമ്പൂര്‍",
      "TID": 33,
      "DID": 6,
      "VID": "513"
    },
    {
      "E": "Vattavada",
      "M": "വട്ടവട",
      "TID": 33,
      "DID": 6,
      "VID": "514"
    },
    {
      "E": "Mankulam",
      "M": "മാങ്കുളം",
      "TID": 33,
      "DID": 6,
      "VID": "1582"
    },
    {
      "E": "Munnar",
      "M": "മൂന്നാര്‍",
      "TID": 33,
      "DID": 6,
      "VID": "0"
    },
    {
      "E": "Edamalakudy",
      "M": "ഇടമലക്കുടി",
      "TID": 33,
      "DID": 6,
      "VID": "0"
    },
    {
      "E": "Santhanpara",
      "M": "ശാന്തമ്പാറ",
      "TID": 34,
      "DID": 6,
      "VID": "516"
    },
    {
      "E": "Chinnakanal",
      "M": "ചിന്നക്കനാല്‍",
      "TID": 34,
      "DID": 6,
      "VID": "517"
    },
    {
      "E": "Rajakkad",
      "M": "രാജാക്കാട്",
      "TID": 34,
      "DID": 6,
      "VID": "518"
    },
    {
      "E": "Poopara",
      "M": "പൂപ്പാറ",
      "TID": 34,
      "DID": 6,
      "VID": "520"
    },
    {
      "E": "Rajakumari",
      "M": "രാജകുമാരി",
      "TID": 34,
      "DID": 6,
      "VID": "521"
    },
    {
      "E": "Baisonvally",
      "M": "ബൈസന്‍വാലി",
      "TID": 34,
      "DID": 6,
      "VID": "522"
    },
    {
      "E": "Kalkoonthal",
      "M": "കല്‍കൂന്തല്‍",
      "TID": 34,
      "DID": 6,
      "VID": "525"
    },
    {
      "E": "Parathodu",
      "M": "പാറത്തോട്",
      "TID": 34,
      "DID": 6,
      "VID": "526"
    },
    {
      "E": "Udumbanchola",
      "M": "ഉടുമ്പന്‍ചോല",
      "TID": 34,
      "DID": 6,
      "VID": "527"
    },
    {
      "E": "Kanthippara",
      "M": "കാന്തിപ്പാറ",
      "TID": 34,
      "DID": 6,
      "VID": "528"
    },
    {
      "E": "Chathurangapara",
      "M": "ചതുരംഗപ്പാറ",
      "TID": 34,
      "DID": 6,
      "VID": "530"
    },
    {
      "E": "Chakkupallam",
      "M": "ചക്കുപള്ളം",
      "TID": 34,
      "DID": 6,
      "VID": "532"
    },
    {
      "E": "Vandanmedu",
      "M": "വണ്ടന്‍മേട്",
      "TID": 34,
      "DID": 6,
      "VID": "533"
    },
    {
      "E": "Pampadumpara",
      "M": "പാമ്പാടുംപാറ",
      "TID": 34,
      "DID": 6,
      "VID": "534"
    },
    {
      "E": "Karunapuram",
      "M": "കരുണാപുരം",
      "TID": 34,
      "DID": 6,
      "VID": "536"
    },
    {
      "E": "Anavilasam",
      "M": "ആനവിലാസം",
      "TID": 34,
      "DID": 6,
      "VID": "537"
    },
    {
      "E": "Anakkara",
      "M": "അണക്കര",
      "TID": 34,
      "DID": 6,
      "VID": "538"
    },
    {
      "E": "Erattayar",
      "M": "ഇരട്ടയാര്‍",
      "TID": 34,
      "DID": 6,
      "VID": "1643"
    },
    {
      "E": "Kothamangalam",
      "M": "കോതമംഗലം",
      "TID": 35,
      "DID": 7,
      "VID": "539"
    },
    {
      "E": "Eramalloor",
      "M": "ഇരമല്ലൂര്‍",
      "TID": 35,
      "DID": 7,
      "VID": "540"
    },
    {
      "E": "Keerampara",
      "M": "കീരമ്പാറ",
      "TID": 35,
      "DID": 7,
      "VID": "541"
    },
    {
      "E": "Pindimana",
      "M": "പിണ്ടിമന",
      "TID": 35,
      "DID": 7,
      "VID": "542"
    },
    {
      "E": "Kottappady",
      "M": "കോട്ടപ്പടി",
      "TID": 35,
      "DID": 7,
      "VID": "543"
    },
    {
      "E": "Thrikkariyoor",
      "M": "തൃക്കാരിയൂര്‍",
      "TID": 35,
      "DID": 7,
      "VID": "544"
    },
    {
      "E": "Kuttampuzha",
      "M": "കുട്ടന്‍പുഴ",
      "TID": 35,
      "DID": 7,
      "VID": "545"
    },
    {
      "E": "Neriamangalam",
      "M": "നേര്യമംഗലം",
      "TID": 35,
      "DID": 7,
      "VID": "546"
    },
    {
      "E": "Kuttamangalam",
      "M": "കുട്ടമംഗലം",
      "TID": 35,
      "DID": 7,
      "VID": "547"
    },
    {
      "E": "Varappetty",
      "M": "വാരപെട്ടി",
      "TID": 35,
      "DID": 7,
      "VID": "548"
    },
    {
      "E": "Kedavoor",
      "M": "കടവൂര്‍",
      "TID": 35,
      "DID": 7,
      "VID": "549"
    },
    {
      "E": "Pothanikkad",
      "M": "പോത്താനിക്കാട്",
      "TID": 35,
      "DID": 7,
      "VID": "550"
    },
    {
      "E": "Pallarimangalam",
      "M": "പല്ലാരിമംഗലം",
      "TID": 35,
      "DID": 7,
      "VID": "1647"
    },
    {
      "E": "Marady",
      "M": "മാറാടി",
      "TID": 36,
      "DID": 7,
      "VID": "551"
    },
    {
      "E": "Velloorkunnam",
      "M": "വെള്ളൂര്‍കുന്നം",
      "TID": 36,
      "DID": 7,
      "VID": "552"
    },
    {
      "E": "Valakam",
      "M": "വാളകം",
      "TID": 36,
      "DID": 7,
      "VID": "553"
    },
    {
      "E": "Mulavoor",
      "M": "മുളവൂര്‍",
      "TID": 36,
      "DID": 7,
      "VID": "554"
    },
    {
      "E": "Muvattupuzha",
      "M": "മൂവാറ്റുപുഴ",
      "TID": 36,
      "DID": 7,
      "VID": "555"
    },
    {
      "E": "Enanalloor",
      "M": "ഏനാനെല്ലൂര്‍",
      "TID": 36,
      "DID": 7,
      "VID": "556"
    },
    {
      "E": "Kalloorkkad",
      "M": "കല്ലൂര്‍ക്കാട്",
      "TID": 36,
      "DID": 7,
      "VID": "557"
    },
    {
      "E": "Manjalloor",
      "M": "മഞ്ഞള്ളൂര്‍",
      "TID": 36,
      "DID": 7,
      "VID": "558"
    },
    {
      "E": "Ramamangalam",
      "M": "രാമമംഗലം",
      "TID": 36,
      "DID": 7,
      "VID": "559"
    },
    {
      "E": "Piravam",
      "M": "പിറവം",
      "TID": 36,
      "DID": 7,
      "VID": "560"
    },
    {
      "E": "Onakkoor",
      "M": "ഓണക്കൂര്‍",
      "TID": 36,
      "DID": 7,
      "VID": "561"
    },
    {
      "E": "Memury",
      "M": "മേമുറി",
      "TID": 36,
      "DID": 7,
      "VID": "562"
    },
    {
      "E": "Maneed",
      "M": "മണീട്",
      "TID": 36,
      "DID": 7,
      "VID": "563"
    },
    {
      "E": "Thirumarady",
      "M": "തിരുമാറാടി",
      "TID": 36,
      "DID": 7,
      "VID": "564"
    },
    {
      "E": "Koothattukulam",
      "M": "കൂത്താട്ടുകുളം",
      "TID": 36,
      "DID": 7,
      "VID": "565"
    },
    {
      "E": "Arakuzha",
      "M": "അരക്കുഴ",
      "TID": 36,
      "DID": 7,
      "VID": "566"
    },
    {
      "E": "Elanji",
      "M": "ഇലഞ്ഞി",
      "TID": 36,
      "DID": 7,
      "VID": "567"
    },
    {
      "E": "Palakkuzha",
      "M": "പാലക്കുഴ",
      "TID": 36,
      "DID": 7,
      "VID": "568"
    },
    {
      "E": "Permbavoor",
      "M": "പെരുമ്പാവൂര്‍",
      "TID": 37,
      "DID": 7,
      "VID": "569"
    },
    {
      "E": "Koovappady",
      "M": "കൂവപ്പടി",
      "TID": 37,
      "DID": 7,
      "VID": "570"
    },
    {
      "E": "Vengoor",
      "M": "വേങ്ങൂര്‍",
      "TID": 37,
      "DID": 7,
      "VID": "571"
    },
    {
      "E": "Vengoor west",
      "M": "വേങ്ങൂര്‍ വെസ്റ്റ്",
      "TID": 37,
      "DID": 7,
      "VID": "572"
    },
    {
      "E": "Chelamattom",
      "M": "ചേലാമറ്റം",
      "TID": 37,
      "DID": 7,
      "VID": "573"
    },
    {
      "E": "Kodanad",
      "M": "കോടനാട്",
      "TID": 37,
      "DID": 7,
      "VID": "574"
    },
    {
      "E": "Kombanad",
      "M": "കൊമ്പനാട്",
      "TID": 37,
      "DID": 7,
      "VID": "575"
    },
    {
      "E": "Asamannoor",
      "M": "അശമന്നൂര്‍",
      "TID": 37,
      "DID": 7,
      "VID": "576"
    },
    {
      "E": "Rayamangalam",
      "M": "രായമംഗലം",
      "TID": 37,
      "DID": 7,
      "VID": "577"
    },
    {
      "E": "Vengola",
      "M": "വെങ്ങോല",
      "TID": 37,
      "DID": 7,
      "VID": "578"
    },
    {
      "E": "Vazhakulam",
      "M": "വാഴക്കുളം",
      "TID": 37,
      "DID": 7,
      "VID": "579"
    },
    {
      "E": "Arakapady",
      "M": "അറക്കപ്പടി",
      "TID": 37,
      "DID": 7,
      "VID": "580"
    },
    {
      "E": "Manampilly",
      "M": "മാനമ്പിള്ളി",
      "TID": 37,
      "DID": 7,
      "VID": "581"
    },
    {
      "E": "Mazhuvannoor south",
      "M": "മഴുവന്നൂര്‍ സൗത്ത്",
      "TID": 37,
      "DID": 7,
      "VID": "582"
    },
    {
      "E": "Vadavukode",
      "M": "വടുവുക്കോട്",
      "TID": 37,
      "DID": 7,
      "VID": "583"
    },
    {
      "E": "Aikaranad north",
      "M": "ഐക്കരനാട് നോര്‍ത്ത്",
      "TID": 37,
      "DID": 7,
      "VID": "584"
    },
    {
      "E": "Aikaranad south",
      "M": "ഐക്കരനാട് സൗത്ത്",
      "TID": 37,
      "DID": 7,
      "VID": "585"
    },
    {
      "E": "Irapuram",
      "M": "ഐരാപുരം",
      "TID": 37,
      "DID": 7,
      "VID": "586"
    },
    {
      "E": "Kunnathunad",
      "M": "കുന്നത്തുനാട്",
      "TID": 37,
      "DID": 7,
      "VID": "587"
    },
    {
      "E": "Kizhakkambalam",
      "M": "കിഴക്കമ്പലം",
      "TID": 37,
      "DID": 7,
      "VID": "588"
    },
    {
      "E": "Thiruvaniyoor",
      "M": "തിരുവാണിയൂര്‍",
      "TID": 37,
      "DID": 7,
      "VID": "589"
    },
    {
      "E": "Puthencruz",
      "M": "പുത്തന്‍കുരിശ്ശ്",
      "TID": 37,
      "DID": 7,
      "VID": "590"
    },
    {
      "E": "Pattimattom",
      "M": "പട്ടിമറ്റം",
      "TID": 37,
      "DID": 7,
      "VID": "591"
    },
    {
      "E": "Aluva east",
      "M": "ആലുവ ഈസ്റ്റ്",
      "TID": 38,
      "DID": 7,
      "VID": "592"
    },
    {
      "E": "Aluva west",
      "M": "ആലുവ വെസ്റ്റ്",
      "TID": 38,
      "DID": 7,
      "VID": "593"
    },
    {
      "E": "Chowwara",
      "M": "ചൊവ്വര",
      "TID": 38,
      "DID": 7,
      "VID": "594"
    },
    {
      "E": "Thekkumbhagom(Chowwara)",
      "M": "തെക്കുംഭാഗം (ചൊവ്വര)",
      "TID": 38,
      "DID": 7,
      "VID": "1618"
    },
    {
      "E": "Chengamanad",
      "M": "ചെങ്ങമനാട്",
      "TID": 38,
      "DID": 7,
      "VID": "595"
    },
    {
      "E": "Nedumbassery",
      "M": "നെടുമ്പാശ്ശേരി",
      "TID": 38,
      "DID": 7,
      "VID": "596"
    },
    {
      "E": "Angamaly",
      "M": "അങ്കമാലി",
      "TID": 38,
      "DID": 7,
      "VID": "597"
    },
    {
      "E": "Karukutty",
      "M": "കുറുകുറ്റി",
      "TID": 38,
      "DID": 7,
      "VID": "598"
    },
    {
      "E": "Parakkadavu",
      "M": "പാറക്കടവ്",
      "TID": 38,
      "DID": 7,
      "VID": "599"
    },
    {
      "E": "Manjapra",
      "M": "മഞ്ഞപ്ര",
      "TID": 38,
      "DID": 7,
      "VID": "600"
    },
    {
      "E": "Malayattoor",
      "M": "മലയാറ്റൂര്‍",
      "TID": 38,
      "DID": 7,
      "VID": "601"
    },
    {
      "E": "Kalady",
      "M": "കാലടി",
      "TID": 38,
      "DID": 7,
      "VID": "602"
    },
    {
      "E": "Thuravoor",
      "M": "തുറവൂര്‍",
      "TID": 38,
      "DID": 7,
      "VID": "603"
    },
    {
      "E": "Mookkannoor",
      "M": "മൂക്കന്നൂര്‍",
      "TID": 38,
      "DID": 7,
      "VID": "604"
    },
    {
      "E": "Ayyampuzha",
      "M": "അയ്യപുഴ",
      "TID": 38,
      "DID": 7,
      "VID": "605"
    },
    {
      "E": "Mattoor",
      "M": "മറ്റൂര്‍",
      "TID": 38,
      "DID": 7,
      "VID": "606"
    },
    {
      "E": "Vadakkumbhagom",
      "M": "വടക്കുംഭാഗം ",
      "TID": 38,
      "DID": 7,
      "VID": "607"
    },
    {
      "E": "Kizhakkumbhagom",
      "M": "കിഴക്കുംഭാഗം ",
      "TID": 38,
      "DID": 7,
      "VID": "1612"
    },
    {
      "E": "Choornikkara",
      "M": "ചൂര്‍ണിക്കര",
      "TID": 38,
      "DID": 7,
      "VID": "1646"
    },
    {
      "E": "Keezhmad",
      "M": "കീഴ്മാട്",
      "TID": 38,
      "DID": 7,
      "VID": "1645"
    },
    {
      "E": "Ernakulam",
      "M": "എറണാകുളം",
      "TID": 39,
      "DID": 7,
      "VID": "608"
    },
    {
      "E": "Elamkulam",
      "M": "എളംകുളം",
      "TID": 39,
      "DID": 7,
      "VID": "609"
    },
    {
      "E": "Poonithura",
      "M": "പൂണിത്തുറ",
      "TID": 39,
      "DID": 7,
      "VID": "610"
    },
    {
      "E": "Edappally south",
      "M": "ഇടപ്പള്ളി തെക്ക്",
      "TID": 39,
      "DID": 7,
      "VID": "611"
    },
    {
      "E": "Edappally north",
      "M": "ഇടപ്പള്ളി വടക്കു",
      "TID": 39,
      "DID": 7,
      "VID": "612"
    },
    {
      "E": "Kadamakkudy",
      "M": "കടമക്കുടി",
      "TID": 39,
      "DID": 7,
      "VID": "613"
    },
    {
      "E": "Mulavukad",
      "M": "മുളവുക്കാട്",
      "TID": 39,
      "DID": 7,
      "VID": "614"
    },
    {
      "E": "Cheranallur",
      "M": "ചേരാനെല്ലൂര്‍",
      "TID": 39,
      "DID": 7,
      "VID": "615"
    },
    {
      "E": "Amballur",
      "M": "ആമ്പല്ലൂര്‍",
      "TID": 39,
      "DID": 7,
      "VID": "616"
    },
    {
      "E": "Keecherry",
      "M": "കീച്ചേരി ",
      "TID": 39,
      "DID": 7,
      "VID": "1615"
    },
    {
      "E": "Kulayettikara",
      "M": "കുലയേറ്റിക്കര ",
      "TID": 39,
      "DID": 7,
      "VID": "1616"
    },
    {
      "E": "Nadama",
      "M": "നടമ ",
      "TID": 39,
      "DID": 7,
      "VID": "617"
    },
    {
      "E": "Thekkumbhagom(Nadama)",
      "M": "തെക്കുംഭാഗം (നടമ )",
      "TID": 39,
      "DID": 7,
      "VID": "1613"
    },
    {
      "E": "Manakunnam",
      "M": "മണക്കുന്നം",
      "TID": 39,
      "DID": 7,
      "VID": "618"
    },
    {
      "E": "Kumbalam",
      "M": "കുമ്പളം",
      "TID": 39,
      "DID": 7,
      "VID": "619"
    },
    {
      "E": "Mulamthuruthy",
      "M": "മുളന്തുരുത്തി",
      "TID": 39,
      "DID": 7,
      "VID": "620"
    },
    {
      "E": "Thiruvankulam",
      "M": "തിരുവാങ്കുളം",
      "TID": 39,
      "DID": 7,
      "VID": "621"
    },
    {
      "E": "Kanayannur",
      "M": "കണയന്നൂര്‍",
      "TID": 39,
      "DID": 7,
      "VID": "622"
    },
    {
      "E": "Kureekkad",
      "M": "കൂരിക്കാട്",
      "TID": 39,
      "DID": 7,
      "VID": "1617"
    },
    {
      "E": "Maradu",
      "M": "മരട്",
      "TID": 39,
      "DID": 7,
      "VID": "623"
    },
    {
      "E": "Vazhakkala",
      "M": "വാഴക്കാല",
      "TID": 39,
      "DID": 7,
      "VID": "624"
    },
    {
      "E": "Thrikkakara north",
      "M": "തൃക്കാക്കര വടക്ക്",
      "TID": 39,
      "DID": 7,
      "VID": "625"
    },
    {
      "E": "Edakkattuvayal",
      "M": "എടക്കാട് വയല്‍ ",
      "TID": 39,
      "DID": 7,
      "VID": "626"
    },
    {
      "E": "Kaippattur",
      "M": "കൈപ്പട്ടൂര്‍ ",
      "TID": 39,
      "DID": 7,
      "VID": "1614"
    },
    {
      "E": "Kakkanad",
      "M": "കാക്കനാട്",
      "TID": 39,
      "DID": 7,
      "VID": "627"
    },
    {
      "E": "Fort kochi",
      "M": "ഫോര്‍ട്ട് കൊച്ചി",
      "TID": 40,
      "DID": 7,
      "VID": "628"
    },
    {
      "E": "Mattancherry",
      "M": "മട്ടാഞ്ചേരി",
      "TID": 40,
      "DID": 7,
      "VID": "629"
    },
    {
      "E": "Rameshwaram",
      "M": "രാമേശ്വരം",
      "TID": 40,
      "DID": 7,
      "VID": "630"
    },
    {
      "E": "Palluruthy",
      "M": "പള്ളുരുത്തി",
      "TID": 40,
      "DID": 7,
      "VID": "631"
    },
    {
      "E": "Kumbalangy",
      "M": "കുമ്പളങ്ങി",
      "TID": 40,
      "DID": 7,
      "VID": "632"
    },
    {
      "E": "Chellanam",
      "M": "ചെല്ലാനം",
      "TID": 40,
      "DID": 7,
      "VID": "633"
    },
    {
      "E": "Thoppumpady",
      "M": "തോപ്പുംപടി",
      "TID": 40,
      "DID": 7,
      "VID": "634"
    },
    {
      "E": "Edakochi",
      "M": "ഇടക്കൊച്ചി",
      "TID": 40,
      "DID": 7,
      "VID": "635"
    },
    {
      "E": "Elamkunnapuzha",
      "M": "എളങ്കുന്നപ്പുഴ",
      "TID": 40,
      "DID": 7,
      "VID": "636"
    },
    {
      "E": "Njarackal",
      "M": "ഞാറക്കല്‍",
      "TID": 40,
      "DID": 7,
      "VID": "637"
    },
    {
      "E": "Nayarambalam",
      "M": "നായരമ്പലം",
      "TID": 40,
      "DID": 7,
      "VID": "638"
    },
    {
      "E": "Edavanakkad",
      "M": "എടവനക്കാട്",
      "TID": 40,
      "DID": 7,
      "VID": "639"
    },
    {
      "E": "Kuzhuppilly",
      "M": "കുഴിപ്പിള്ളി",
      "TID": 40,
      "DID": 7,
      "VID": "640"
    },
    {
      "E": "Pallippuram",
      "M": "പള്ളിപ്പുറം",
      "TID": 40,
      "DID": 7,
      "VID": "641"
    },
    {
      "E": "Puthuvype",
      "M": "പുതുവയ്പ്",
      "TID": 40,
      "DID": 7,
      "VID": "642"
    },
    {
      "E": "Paravur",
      "M": "പറവൂര്‍",
      "TID": 41,
      "DID": 7,
      "VID": "643"
    },
    {
      "E": "Chedamangalam",
      "M": "ചേന്ദമംഗലം",
      "TID": 41,
      "DID": 7,
      "VID": "644"
    },
    {
      "E": "Moothakunnam",
      "M": "മൂത്തകുന്നം",
      "TID": 41,
      "DID": 7,
      "VID": "645"
    },
    {
      "E": "Varappuzha",
      "M": "വാരാപ്പുഴ",
      "TID": 41,
      "DID": 7,
      "VID": "646"
    },
    {
      "E": "Vadakkekara",
      "M": "വടക്കേക്കര",
      "TID": 41,
      "DID": 7,
      "VID": "647"
    },
    {
      "E": "Kottuvally",
      "M": "കോട്ടുവള്ളി",
      "TID": 41,
      "DID": 7,
      "VID": "648"
    },
    {
      "E": "Ezhikkara",
      "M": "ഏഴിക്കര",
      "TID": 41,
      "DID": 7,
      "VID": "649"
    },
    {
      "E": "Eloor",
      "M": "ഏലൂര്‍",
      "TID": 41,
      "DID": 7,
      "VID": "650"
    },
    {
      "E": "Alangad",
      "M": "ആലങ്ങാട്",
      "TID": 41,
      "DID": 7,
      "VID": "651"
    },
    {
      "E": "Kadungalloor",
      "M": "കിടങ്ങല്ലൂര്‍",
      "TID": 41,
      "DID": 7,
      "VID": "652"
    },
    {
      "E": "Kunnukara",
      "M": "കുന്നുകര",
      "TID": 41,
      "DID": 7,
      "VID": "653"
    },
    {
      "E": "Karumalloor",
      "M": "കരുമാലൂര്‍",
      "TID": 41,
      "DID": 7,
      "VID": "654"
    },
    {
      "E": "Puthenvelikkara",
      "M": "പുത്തന്‍വേലിക്കര",
      "TID": 41,
      "DID": 7,
      "VID": "655"
    },
    {
      "E": "Edathiruthy",
      "M": "എടത്തുരുത്തി",
      "TID": 42,
      "DID": 8,
      "VID": "656"
    },
    {
      "E": "Chentrappinni",
      "M": "ചെന്ത്രാപ്പിന്നി",
      "TID": 42,
      "DID": 8,
      "VID": "670"
    },
    {
      "E": "Pappinivattom",
      "M": "പാപ്പിനിവട്ടം",
      "TID": 42,
      "DID": 8,
      "VID": "657"
    },
    {
      "E": "Kulimuttom",
      "M": "കുളിമുട്ടം",
      "TID": 42,
      "DID": 8,
      "VID": "668"
    },
    {
      "E": "Kaipamangalam",
      "M": "കയ്പ്പമംഗലം",
      "TID": 42,
      "DID": 8,
      "VID": "658"
    },
    {
      "E": "Perinjanam",
      "M": "പെരിഞ്ഞനം",
      "TID": 42,
      "DID": 8,
      "VID": "659"
    },
    {
      "E": "Padinjare vemballur",
      "M": "പടിഞ്ഞാറെ വേമ്പല്ലൂര്‍",
      "TID": 42,
      "DID": 8,
      "VID": "660"
    },
    {
      "E": "Aala",
      "M": "ആല",
      "TID": 42,
      "DID": 8,
      "VID": "671"
    },
    {
      "E": "Panangad",
      "M": "പനങ്ങാട്",
      "TID": 42,
      "DID": 8,
      "VID": "669"
    },
    {
      "E": "Azhikode",
      "M": "അഴിക്കോട്",
      "TID": 42,
      "DID": 8,
      "VID": "661"
    },
    {
      "E": "Eriyad",
      "M": "എറിയാട്",
      "TID": 42,
      "DID": 8,
      "VID": "662"
    },
    {
      "E": "Pullut",
      "M": "പുല്ലൂറ്റ്",
      "TID": 42,
      "DID": 8,
      "VID": "663"
    },
    {
      "E": "Lokamaleswaram",
      "M": "ലോകമല്ലേശ്വരം",
      "TID": 42,
      "DID": 8,
      "VID": "664"
    },
    {
      "E": "Poyya",
      "M": "പൊയ്യ",
      "TID": 42,
      "DID": 8,
      "VID": "665"
    },
    {
      "E": "Pallippuram",
      "M": "പള്ളിപ്പുറം",
      "TID": 42,
      "DID": 8,
      "VID": "672"
    },
    {
      "E": "Madathumpady",
      "M": "മടത്തുംപ്പടി",
      "TID": 42,
      "DID": 8,
      "VID": "673"
    },
    {
      "E": "Methala",
      "M": "മേത്തല",
      "TID": 42,
      "DID": 8,
      "VID": "666"
    },
    {
      "E": "Edavilangu",
      "M": "എടവിലങ്ങ്",
      "TID": 42,
      "DID": 8,
      "VID": "667"
    },
    {
      "E": "Irinjalakuda",
      "M": "ഇരിങ്ങാലക്കുട",
      "TID": 43,
      "DID": 8,
      "VID": "674"
    },
    {
      "E": "Porathissery",
      "M": "പൊറത്തിശ്ശേരി",
      "TID": 43,
      "DID": 8,
      "VID": "675"
    },
    {
      "E": "Vallivattom",
      "M": "വള്ളിവട്ടം",
      "TID": 43,
      "DID": 8,
      "VID": "676"
    },
    {
      "E": "Kaduppassery",
      "M": "കടുപ്പശ്ശേരി",
      "TID": 43,
      "DID": 8,
      "VID": "677"
    },
    {
      "E": "Kattoor",
      "M": "കാട്ടൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "678"
    },
    {
      "E": "Edathirinji",
      "M": "എടത്തിരിഞ്ഞി",
      "TID": 43,
      "DID": 8,
      "VID": "679"
    },
    {
      "E": "Kottanellur",
      "M": "കൊറ്റനെല്ലൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "1579"
    },
    {
      "E": "Kaaralam",
      "M": "കാറളം",
      "TID": 43,
      "DID": 8,
      "VID": "681"
    },
    {
      "E": "Vadakkumkara",
      "M": "വടക്കുംകര",
      "TID": 43,
      "DID": 8,
      "VID": "682"
    },
    {
      "E": "Pullur",
      "M": "പുല്ലൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "683"
    },
    {
      "E": "Thekkumkara",
      "M": "തെക്കുംകര",
      "TID": 43,
      "DID": 8,
      "VID": "684"
    },
    {
      "E": "Manavalassery",
      "M": "മനവലശ്ശേരി",
      "TID": 43,
      "DID": 8,
      "VID": "685"
    },
    {
      "E": "Nellayi",
      "M": "നെല്ലായി",
      "TID": 43,
      "DID": 8,
      "VID": "687"
    },
    {
      "E": "Anandapuram",
      "M": "ആനന്ദപുരം",
      "TID": 43,
      "DID": 8,
      "VID": "688"
    },
    {
      "E": "Parappukkara",
      "M": "പറപ്പൂക്കര",
      "TID": 43,
      "DID": 8,
      "VID": "690"
    },
    {
      "E": "Amballur",
      "M": "ആമ്പല്ലൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "691"
    },
    {
      "E": "Kallur",
      "M": "കല്ലൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "692"
    },
    {
      "E": "Thrikkur",
      "M": "തൃക്കൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "719"
    },
    {
      "E": "Thoravu",
      "M": "തൊറവ്",
      "TID": 43,
      "DID": 8,
      "VID": "693"
    },
    {
      "E": "Nenmanikkara",
      "M": "നെന്മണിക്കര",
      "TID": 43,
      "DID": 8,
      "VID": "720"
    },
    {
      "E": "Puthenchira",
      "M": "പുത്തന്‍ചിറ",
      "TID": 43,
      "DID": 8,
      "VID": "701"
    },
    {
      "E": "Padiyur",
      "M": "പടിയൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "710"
    },
    {
      "E": "Velookkara",
      "M": "വേളൂര്‍ക്കര",
      "TID": 43,
      "DID": 8,
      "VID": "711"
    },
    {
      "E": "Madayikonam",
      "M": "മാടായിക്കോണം",
      "TID": 43,
      "DID": 8,
      "VID": "712"
    },
    {
      "E": "Chengaloor",
      "M": "ചെങ്ങാലൂര്‍",
      "TID": 43,
      "DID": 8,
      "VID": "713"
    },
    {
      "E": "Muriyad",
      "M": "മുരിയാട്",
      "TID": 43,
      "DID": 8,
      "VID": "714"
    },
    {
      "E": "Thottippal",
      "M": "തോട്ടിപാള്‍",
      "TID": 43,
      "DID": 8,
      "VID": "715"
    },
    {
      "E": "Poomangalam",
      "M": "പൂമംഗലം",
      "TID": 43,
      "DID": 8,
      "VID": "726"
    },
    {
      "E": "Karumathra",
      "M": "കരുമാത്ര",
      "TID": 43,
      "DID": 8,
      "VID": "730"
    },
    {
      "E": "Anjoor",
      "M": "അഞ്ഞൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "1580"
    },
    {
      "E": "Thangalur",
      "M": "തങ്ങാലൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "758"
    },
    {
      "E": "Kaiparamba",
      "M": "കൈപ്പറമ്പ്",
      "TID": 44,
      "DID": 8,
      "VID": "771"
    },
    {
      "E": "Avanur",
      "M": "അവണൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "734"
    },
    {
      "E": "Velappaya",
      "M": "വളപ്പായ",
      "TID": 44,
      "DID": 8,
      "VID": "772"
    },
    {
      "E": "Choolissery",
      "M": "ചൂലിശ്ശേരി",
      "TID": 44,
      "DID": 8,
      "VID": "776"
    },
    {
      "E": "Peramangalam",
      "M": "പേരാമംഗലം",
      "TID": 44,
      "DID": 8,
      "VID": "735"
    },
    {
      "E": "Chittilappilly",
      "M": "ചിറ്റിലപ്പിള്ളി",
      "TID": 44,
      "DID": 8,
      "VID": "778"
    },
    {
      "E": "Tholur",
      "M": "തോളൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "736"
    },
    {
      "E": "Chalakkal",
      "M": "ചാലക്കല്‍",
      "TID": 44,
      "DID": 8,
      "VID": "780"
    },
    {
      "E": "Puzhakkal",
      "M": "പുഴക്കല്‍",
      "TID": 44,
      "DID": 8,
      "VID": "737"
    },
    {
      "E": "Puranattukara",
      "M": "പുറനാട്ടുകര",
      "TID": 44,
      "DID": 8,
      "VID": "781"
    },
    {
      "E": "Kuttoor",
      "M": "കുറ്റൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "738"
    },
    {
      "E": "Pottore",
      "M": "പോട്ടോര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "0"
    },
    {
      "E": "Kolazhy",
      "M": "കോലഴി",
      "TID": 44,
      "DID": 8,
      "VID": "739"
    },
    {
      "E": "Adat",
      "M": "അടാട്ട്",
      "TID": 44,
      "DID": 8,
      "VID": "740"
    },
    {
      "E": "Viyyur",
      "M": "വീയൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "741"
    },
    {
      "E": "Ollukkara",
      "M": "ഒല്ലൂക്കര",
      "TID": 44,
      "DID": 8,
      "VID": "742"
    },
    {
      "E": "Nettissery",
      "M": "നെട്ടിശ്ശേരി",
      "TID": 44,
      "DID": 8,
      "VID": "783"
    },
    {
      "E": "Madakkathara",
      "M": "മാടക്കത്തറ",
      "TID": 44,
      "DID": 8,
      "VID": "743"
    },
    {
      "E": "Kurichikkara",
      "M": "കുറിച്ചിക്കര",
      "TID": 44,
      "DID": 8,
      "VID": "777"
    },
    {
      "E": "Pananchery",
      "M": "പാണഞ്ചേരി",
      "TID": 44,
      "DID": 8,
      "VID": "744"
    },
    {
      "E": "Ayyanthole",
      "M": "അയ്യന്തോള്‍",
      "TID": 44,
      "DID": 8,
      "VID": "745"
    },
    {
      "E": "Punkunnam",
      "M": "പൂങ്കുന്നം",
      "TID": 44,
      "DID": 8,
      "VID": "784"
    },
    {
      "E": "Peechi",
      "M": "പീച്ചി",
      "TID": 44,
      "DID": 8,
      "VID": "746"
    },
    {
      "E": "Nadathara",
      "M": "നടത്തറ",
      "TID": 44,
      "DID": 8,
      "VID": "747"
    },
    {
      "E": "Thrissur",
      "M": "തൃശ്ശൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "748"
    },
    {
      "E": "Aranattukara",
      "M": "അരനാട്ടുകര",
      "TID": 44,
      "DID": 8,
      "VID": "749"
    },
    {
      "E": "Pullazhi",
      "M": "പുല്ലഴി",
      "TID": 44,
      "DID": 8,
      "VID": "786"
    },
    {
      "E": "Kanimangalam",
      "M": "കണിമംഗലം",
      "TID": 44,
      "DID": 8,
      "VID": "750"
    },
    {
      "E": "Chembukavu",
      "M": "ചെമ്പുക്കാവ്",
      "TID": 44,
      "DID": 8,
      "VID": "751"
    },
    {
      "E": "Chiyyaram",
      "M": "ചിയ്യാരം",
      "TID": 44,
      "DID": 8,
      "VID": "752"
    },
    {
      "E": "Oorakam",
      "M": "ഊരകം",
      "TID": 44,
      "DID": 8,
      "VID": "753"
    },
    {
      "E": "Cherpu",
      "M": "ചേര്‍പ്പ്",
      "TID": 44,
      "DID": 8,
      "VID": "802"
    },
    {
      "E": "Chevvoor",
      "M": "ചെവ്വൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "754"
    },
    {
      "E": "Vallachira",
      "M": "വല്ലച്ചിറ",
      "TID": 44,
      "DID": 8,
      "VID": "800"
    },
    {
      "E": "Paralam",
      "M": "പാറളം",
      "TID": 44,
      "DID": 8,
      "VID": "755"
    },
    {
      "E": "Pallippuram",
      "M": "പള്ളിപ്പുറം",
      "TID": 44,
      "DID": 8,
      "VID": "799"
    },
    {
      "E": "Kodannur",
      "M": "കോടന്നൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "795"
    },
    {
      "E": "Puthur",
      "M": "പുത്തൂര്‍  ",
      "TID": 44,
      "DID": 8,
      "VID": "756"
    },
    {
      "E": "Mannamangalam",
      "M": "മാന്നാമംഗലം",
      "TID": 44,
      "DID": 8,
      "VID": "788"
    },
    {
      "E": "Palissery",
      "M": "പാലിശ്ശേരി",
      "TID": 44,
      "DID": 8,
      "VID": "759"
    },
    {
      "E": "Avinissery",
      "M": "അവിണിശ്ശേരി",
      "TID": 44,
      "DID": 8,
      "VID": "796"
    },
    {
      "E": "Olloor",
      "M": "ഒല്ലൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "760"
    },
    {
      "E": "Parakkad",
      "M": "പരക്കാട്",
      "TID": 44,
      "DID": 8,
      "VID": "789"
    },
    {
      "E": "Eravu",
      "M": "എറവ്",
      "TID": 44,
      "DID": 8,
      "VID": "791"
    },
    {
      "E": "Manaloor",
      "M": "മണലൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "762"
    },
    {
      "E": "Karamukku",
      "M": "കാരമുക്ക്",
      "TID": 44,
      "DID": 8,
      "VID": "763"
    },
    {
      "E": "Anthikad",
      "M": "അന്തിക്കാട്",
      "TID": 44,
      "DID": 8,
      "VID": "764"
    },
    {
      "E": "Pullu",
      "M": "പുള്ള്",
      "TID": 44,
      "DID": 8,
      "VID": "798"
    },
    {
      "E": "Padiyam",
      "M": "പാടിയം",
      "TID": 44,
      "DID": 8,
      "VID": "765"
    },
    {
      "E": "Chazhoor",
      "M": "ചാഴൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "766"
    },
    {
      "E": "Thanniyam",
      "M": "താന്ന്യം",
      "TID": 44,
      "DID": 8,
      "VID": "767"
    },
    {
      "E": "Vadakkummuri",
      "M": "വടക്കുംമുറി",
      "TID": 44,
      "DID": 8,
      "VID": "768"
    },
    {
      "E": "Kizhakkummuri",
      "M": "കിഴക്കുമുറി",
      "TID": 44,
      "DID": 8,
      "VID": "803"
    },
    {
      "E": "Kurumbilavu",
      "M": "കുറിമ്പിലാവ്",
      "TID": 44,
      "DID": 8,
      "VID": "769"
    },
    {
      "E": "Injamudi",
      "M": "ഇഞ്ചമുടി",
      "TID": 44,
      "DID": 8,
      "VID": "804"
    },
    {
      "E": "Manakkodi",
      "M": "മനക്കൊടി",
      "TID": 44,
      "DID": 8,
      "VID": "792"
    },
    {
      "E": "Veluthoor",
      "M": "വെളുത്തൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "793"
    },
    {
      "E": "Peringavu",
      "M": "പെരിങ്ങാവ്",
      "TID": 44,
      "DID": 8,
      "VID": "773"
    },
    {
      "E": "Killannur",
      "M": "കിള്ളന്നൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "774"
    },
    {
      "E": "Edakkalathur",
      "M": "എടക്കളത്തൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "775"
    },
    {
      "E": "Vilvattom",
      "M": "വില്‍വട്ടം",
      "TID": 44,
      "DID": 8,
      "VID": "779"
    },
    {
      "E": "Vellanikkara",
      "M": "വെള്ളാനിക്കര",
      "TID": 44,
      "DID": 8,
      "VID": "782"
    },
    {
      "E": "Mulayam",
      "M": "മുളയം",
      "TID": 44,
      "DID": 8,
      "VID": "785"
    },
    {
      "E": "Kainoor",
      "M": "കൈനൂര്‍",
      "TID": 44,
      "DID": 8,
      "VID": "757"
    },
    {
      "E": "Kozhukkully",
      "M": "കൊഴുക്കുള്ളി",
      "TID": 44,
      "DID": 8,
      "VID": "787"
    },
    {
      "E": "Koorkenchery",
      "M": "കൂര്‍ക്കഞ്ചേരി",
      "TID": 44,
      "DID": 8,
      "VID": "790"
    },
    {
      "E": "Marathakkara",
      "M": "മരത്താക്കര",
      "TID": 44,
      "DID": 8,
      "VID": "1573"
    },
    {
      "E": "Edakkunni",
      "M": "എടക്കന്നി",
      "TID": 44,
      "DID": 8,
      "VID": "794"
    },
    {
      "E": "Venginissery",
      "M": "വെങ്ങിണിശ്ശേരി",
      "TID": 44,
      "DID": 8,
      "VID": "797"
    },
    {
      "E": "Alappad",
      "M": "ആലപ്പാട്",
      "TID": 44,
      "DID": 8,
      "VID": "801"
    },
    {
      "E": "Arattupuzha",
      "M": "ആറാട്ടുപുഴ",
      "TID": 44,
      "DID": 8,
      "VID": "805"
    },
    {
      "E": "Kizhuppillikara",
      "M": "കിഴുപിള്ളിക്കര",
      "TID": 44,
      "DID": 8,
      "VID": "806"
    },
    {
      "E": "Punnayurkulam",
      "M": "പുന്നയൂര്‍ക്കുളം",
      "TID": 45,
      "DID": 8,
      "VID": "807"
    },
    {
      "E": "Kadikkad",
      "M": "കടിക്കാട്",
      "TID": 45,
      "DID": 8,
      "VID": "824"
    },
    {
      "E": "Punnayur",
      "M": "പുന്നയൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "808"
    },
    {
      "E": "Vadakkekad",
      "M": "വടക്കേക്കാട്",
      "TID": 45,
      "DID": 8,
      "VID": "809"
    },
    {
      "E": "Vailattur",
      "M": "വൈലത്തൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "825"
    },
    {
      "E": "Pookode",
      "M": "പൂക്കോട്",
      "TID": 45,
      "DID": 8,
      "VID": "810"
    },
    {
      "E": "Perakam",
      "M": "പേരകം",
      "TID": 45,
      "DID": 8,
      "VID": "827"
    },
    {
      "E": "Guruvayur",
      "M": "ഗുരുവായൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "811"
    },
    {
      "E": "Iringapurom",
      "M": "ഇരിങ്ങപുറം",
      "TID": 45,
      "DID": 8,
      "VID": "828"
    },
    {
      "E": "Manathala",
      "M": "മണത്തല",
      "TID": 45,
      "DID": 8,
      "VID": "812"
    },
    {
      "E": "Elavally",
      "M": "എളവള്ളി",
      "TID": 45,
      "DID": 8,
      "VID": "813"
    },
    {
      "E": "Brahmakulam",
      "M": "ബ്രഹ്മകുളം",
      "TID": 45,
      "DID": 8,
      "VID": "830"
    },
    {
      "E": "Thalikulam",
      "M": "തളിക്കുളം",
      "TID": 45,
      "DID": 8,
      "VID": "814"
    },
    {
      "E": "Nattika",
      "M": "നാട്ടിക",
      "TID": 45,
      "DID": 8,
      "VID": "815"
    },
    {
      "E": "Valapad",
      "M": "വലപ്പാട്",
      "TID": 45,
      "DID": 8,
      "VID": "816"
    },
    {
      "E": "Mullassery",
      "M": "മുല്ലശ്ശേരി",
      "TID": 45,
      "DID": 8,
      "VID": "817"
    },
    {
      "E": "Anakkara",
      "M": "അന്നക്കര",
      "TID": 45,
      "DID": 8,
      "VID": "831"
    },
    {
      "E": "Venkitangu",
      "M": "വെങ്കിടങ്ങ്",
      "TID": 45,
      "DID": 8,
      "VID": "818"
    },
    {
      "E": "Kundaliyur",
      "M": "കുണ്ടലിയൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "834"
    },
    {
      "E": "Irimbranelloor",
      "M": "ഇരിമ്പ്രനെല്ലൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "1619"
    },
    {
      "E": "Engandiyur",
      "M": "എങ്ങണ്ടിയൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "819"
    },
    {
      "E": "Vadanappally",
      "M": "വാടാനപ്പള്ളി",
      "TID": 45,
      "DID": 8,
      "VID": "820"
    },
    {
      "E": "Orumanayur",
      "M": "ഒരുമനയൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "821"
    },
    {
      "E": "Pavaratty",
      "M": "പാവറട്ടി",
      "TID": 45,
      "DID": 8,
      "VID": "822"
    },
    {
      "E": "Venmanad",
      "M": "വെണ്മേനാട്",
      "TID": 45,
      "DID": 8,
      "VID": "833"
    },
    {
      "E": "Chavakkad",
      "M": "ചാവക്കാട്",
      "TID": 45,
      "DID": 8,
      "VID": "823"
    },
    {
      "E": "Thaikkad",
      "M": "തൈക്കാട്",
      "TID": 45,
      "DID": 8,
      "VID": "829"
    },
    {
      "E": "Edakkazhiyoor",
      "M": "ഇടക്കഴിയൂര്‍",
      "TID": 45,
      "DID": 8,
      "VID": "826"
    },
    {
      "E": "Kadappuram",
      "M": "കടപ്പുറം",
      "TID": 45,
      "DID": 8,
      "VID": "832"
    },
    {
      "E": "Kaniyarkode",
      "M": "കണിയാര്‍ക്കോട്",
      "TID": 46,
      "DID": 8,
      "VID": "836"
    },
    {
      "E": "Pampady",
      "M": "പാമ്പാടി",
      "TID": 46,
      "DID": 8,
      "VID": "876"
    },
    {
      "E": "Tiruviluamala",
      "M": "തിരുവില്വാമല",
      "TID": 46,
      "DID": 8,
      "VID": "837"
    },
    {
      "E": "Elanad",
      "M": "എളനാട്",
      "TID": 46,
      "DID": 8,
      "VID": "838"
    },
    {
      "E": "Vennur",
      "M": "വെണ്ണൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "900"
    },
    {
      "E": "Vadakkethara",
      "M": "വടക്കേത്തറ",
      "TID": 46,
      "DID": 8,
      "VID": "839"
    },
    {
      "E": "Pazhayannur",
      "M": "പഴയന്നൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "840"
    },
    {
      "E": "Kondazhy",
      "M": "കൊണ്ടാഴി",
      "TID": 46,
      "DID": 8,
      "VID": "841"
    },
    {
      "E": "Mayannur",
      "M": "മായന്നൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "873"
    },
    {
      "E": "Chelakkara",
      "M": "ചേലക്കര",
      "TID": 46,
      "DID": 8,
      "VID": "842"
    },
    {
      "E": "Thonoorkara",
      "M": "തോന്നൂര്‍ക്കര",
      "TID": 46,
      "DID": 8,
      "VID": "887"
    },
    {
      "E": "Pulakode",
      "M": "പുലാക്കോട്",
      "TID": 46,
      "DID": 8,
      "VID": "892"
    },
    {
      "E": "Kurumala",
      "M": "കുറുമല",
      "TID": 46,
      "DID": 8,
      "VID": "843"
    },
    {
      "E": "Pangarappilly",
      "M": "പങ്ങാരപ്പിള്ളി",
      "TID": 46,
      "DID": 8,
      "VID": "894"
    },
    {
      "E": "Kumaranellur",
      "M": "കുമരനെല്ലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "844"
    },
    {
      "E": "Kanjirakode",
      "M": "കാഞ്ഞിരക്കോട്",
      "TID": 46,
      "DID": 8,
      "VID": "883"
    },
    {
      "E": "Vadakkencherry",
      "M": "വടക്കാഞ്ചേരി",
      "TID": 46,
      "DID": 8,
      "VID": "845"
    },
    {
      "E": "Parlikad",
      "M": "പാര്‍ളിക്കാട്",
      "TID": 46,
      "DID": 8,
      "VID": "905"
    },
    {
      "E": "Desamangalam",
      "M": "ദേശമംഗലം",
      "TID": 46,
      "DID": 8,
      "VID": "846"
    },
    {
      "E": "Pallur",
      "M": "പല്ലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "872"
    },
    {
      "E": "Panjal",
      "M": "പാഞ്ഞാള്‍",
      "TID": 46,
      "DID": 8,
      "VID": "847"
    },
    {
      "E": "Painkulam",
      "M": "പൈങ്കുളം",
      "TID": 46,
      "DID": 8,
      "VID": "874"
    },
    {
      "E": "Venganellur",
      "M": "വെങ്ങാനെല്ലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "848"
    },
    {
      "E": "Killimangalam",
      "M": "കിള്ളിമംഗലം",
      "TID": 46,
      "DID": 8,
      "VID": "880"
    },
    {
      "E": "Cheruthuruthi",
      "M": "ചെറുത്തുരുത്തി",
      "TID": 46,
      "DID": 8,
      "VID": "849"
    },
    {
      "E": "Nedumpura",
      "M": "നെടുമ്പുര",
      "TID": 46,
      "DID": 8,
      "VID": "877"
    },
    {
      "E": "Varavoor",
      "M": "വരവൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "850"
    },
    {
      "E": "Pilakkad",
      "M": "പിലക്കാട്",
      "TID": 46,
      "DID": 8,
      "VID": "878"
    },
    {
      "E": "Thekkumkara",
      "M": "തെക്കുംകര",
      "TID": 46,
      "DID": 8,
      "VID": "851"
    },
    {
      "E": "Manalithara",
      "M": "മണലിത്തറ",
      "TID": 46,
      "DID": 8,
      "VID": "899"
    },
    {
      "E": "Mullurkara",
      "M": "മുള്ളൂര്‍ക്കര",
      "TID": 46,
      "DID": 8,
      "VID": "852"
    },
    {
      "E": "Attur",
      "M": "ആറ്റൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "882"
    },
    {
      "E": "Enkakkad",
      "M": "എങ്കക്കാട്",
      "TID": 46,
      "DID": 8,
      "VID": "853"
    },
    {
      "E": "Karumathra",
      "M": "കരുമത്ര",
      "TID": 46,
      "DID": 8,
      "VID": "902"
    },
    {
      "E": "Veeruppakka",
      "M": "വീരുപ്പാക്ക",
      "TID": 46,
      "DID": 8,
      "VID": "903"
    },
    {
      "E": "Mundathikode",
      "M": "മുണ്ടത്തിക്കോട്",
      "TID": 46,
      "DID": 8,
      "VID": "854"
    },
    {
      "E": "Puthuruthy",
      "M": "പുതുരുത്തി",
      "TID": 46,
      "DID": 8,
      "VID": "898"
    },
    {
      "E": "Peringandoor",
      "M": "പെരുങ്ങണ്ടൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "855"
    },
    {
      "E": "Minalur",
      "M": "മിണാല്ലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "871"
    },
    {
      "E": "Velur",
      "M": "വേലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "856"
    },
    {
      "E": "Thayyur",
      "M": "തയ്യൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "895"
    },
    {
      "E": "Kiralur",
      "M": "കീരാലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "907"
    },
    {
      "E": "Arangottukara",
      "M": "ആറങ്ങോട്ടുകര",
      "TID": 46,
      "DID": 8,
      "VID": "857"
    },
    {
      "E": "Thalassery",
      "M": "തലശ്ശേരി",
      "TID": 46,
      "DID": 8,
      "VID": "875"
    },
    {
      "E": "Thichur",
      "M": "തിച്ചൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "879"
    },
    {
      "E": "Kottappuram",
      "M": "കോട്ടപ്പുറം",
      "TID": 46,
      "DID": 8,
      "VID": "858"
    },
    {
      "E": "Chittanda",
      "M": "ചിറ്റണ്ട",
      "TID": 46,
      "DID": 8,
      "VID": "885"
    },
    {
      "E": "Nelluvai ",
      "M": "നെല്ലുവായ്",
      "TID": 46,
      "DID": 8,
      "VID": "859"
    },
    {
      "E": "Kariyannur",
      "M": "കരിയന്നൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "889"
    },
    {
      "E": "Kadangode",
      "M": "കടങ്ങോട്",
      "TID": 46,
      "DID": 8,
      "VID": "860"
    },
    {
      "E": "Chermanangad",
      "M": "ചിറമനങ്ങാട്",
      "TID": 46,
      "DID": 8,
      "VID": "888"
    },
    {
      "E": "Vellarakkad",
      "M": "വെള്ളറക്കാട്",
      "TID": 46,
      "DID": 8,
      "VID": "891"
    },
    {
      "E": "Iyyal",
      "M": "ഇയ്യാല്‍",
      "TID": 46,
      "DID": 8,
      "VID": "861"
    },
    {
      "E": "Chiranellur",
      "M": "ചിറനെല്ലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "906"
    },
    {
      "E": "Pazhanji",
      "M": "പഴഞ്ഞി",
      "TID": 46,
      "DID": 8,
      "VID": "862"
    },
    {
      "E": "Kattakampal",
      "M": "കാട്ടകാമ്പാല്‍",
      "TID": 46,
      "DID": 8,
      "VID": "886"
    },
    {
      "E": "Karikkad",
      "M": "കരിക്കാട്",
      "TID": 46,
      "DID": 8,
      "VID": "863"
    },
    {
      "E": "Perumpilavu",
      "M": "പെരുമ്പിലാവ്",
      "TID": 46,
      "DID": 8,
      "VID": "881"
    },
    {
      "E": "Kadavallur",
      "M": "കടവല്ലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "870"
    },
    {
      "E": "Porkkulam",
      "M": "പോര്‍ക്കുളം",
      "TID": 46,
      "DID": 8,
      "VID": "864"
    },
    {
      "E": "Mangad",
      "M": "മങ്ങാട്",
      "TID": 46,
      "DID": 8,
      "VID": "893"
    },
    {
      "E": "Akathiyoor",
      "M": "അകതിയൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "890"
    },
    {
      "E": "Kunnamkulam",
      "M": "കുന്ദംകുളം",
      "TID": 46,
      "DID": 8,
      "VID": "865"
    },
    {
      "E": "Arthat",
      "M": "ആര്‍ത്താറ്റ്",
      "TID": 46,
      "DID": 8,
      "VID": "866"
    },
    {
      "E": "Aloor",
      "M": "ആളൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "867"
    },
    {
      "E": "Kandanassery",
      "M": "കണ്ടാണശ്ശേരി",
      "TID": 46,
      "DID": 8,
      "VID": "908"
    },
    {
      "E": "Choondal",
      "M": "ചൂണ്ടല്‍",
      "TID": 46,
      "DID": 8,
      "VID": "868"
    },
    {
      "E": "Chowannur",
      "M": "ചൊവ്വന്നൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "869"
    },
    {
      "E": "Chemmanthatta",
      "M": "ചെമ്മന്തിട്ട",
      "TID": 46,
      "DID": 8,
      "VID": "901"
    },
    {
      "E": "Vellattanjur",
      "M": "വെള്ളാറ്റഞ്ഞൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "896"
    },
    {
      "E": "Anjur",
      "M": "അഞ്ഞൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "897"
    },
    {
      "E": "Kanipayyur",
      "M": "കാണിപ്പയ്യൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "904"
    },
    {
      "E": "Chelakkad",
      "M": "ചേലക്കോട്",
      "TID": 46,
      "DID": 8,
      "VID": "884"
    },
    {
      "E": "Eranellur",
      "M": "എരനെല്ലൂര്‍",
      "TID": 46,
      "DID": 8,
      "VID": "0"
    },
    {
      "E": "Aloor",
      "M": "ആളൂര്‍",
      "TID": 47,
      "DID": 8,
      "VID": "707"
    },
    {
      "E": "Kallettumkara",
      "M": "കല്ലേറ്റുംകര",
      "TID": 47,
      "DID": 8,
      "VID": "702"
    },
    {
      "E": "Thazhekkad",
      "M": "താഴെക്കാട്",
      "TID": 47,
      "DID": 8,
      "VID": "724"
    },
    {
      "E": "Annallur",
      "M": "അണ്ണല്ലൂര്‍",
      "TID": 47,
      "DID": 8,
      "VID": "727"
    },
    {
      "E": "Vadakkumbagam",
      "M": "വടക്കുംഭാഗം",
      "TID": 47,
      "DID": 8,
      "VID": "728"
    },
    {
      "E": "Vadama",
      "M": "വടമ",
      "TID": 47,
      "DID": 8,
      "VID": "700"
    },
    {
      "E": "Kuruvilassery",
      "M": "കുരുവിലശ്ശേരി",
      "TID": 47,
      "DID": 8,
      "VID": "731"
    },
    {
      "E": "Alathur",
      "M": "ആലത്തൂര്‍",
      "TID": 47,
      "DID": 8,
      "VID": "698"
    },
    {
      "E": "Kallur thekkummuri",
      "M": "കല്ലൂര്‍ തെക്കുംമുറി",
      "TID": 47,
      "DID": 8,
      "VID": "695"
    },
    {
      "E": "Kallur vadakkummuri",
      "M": "കല്ലൂര്‍ വടക്കുംമുറി",
      "TID": 47,
      "DID": 8,
      "VID": "696"
    },
    {
      "E": "Kakkulissery",
      "M": "കാക്കുളിശ്ശേരി",
      "TID": 47,
      "DID": 8,
      "VID": "732"
    },
    {
      "E": "Thirumukkalam",
      "M": "തിരുമുക്കുളം",
      "TID": 47,
      "DID": 8,
      "VID": "699"
    },
    {
      "E": "Kizhakkummuri (Koraty)",
      "M": "കിഴക്കുംമുറി(കൊരട്ടി) ",
      "TID": 47,
      "DID": 8,
      "VID": "697"
    },
    {
      "E": "Muringur thekkummuri",
      "M": "മുരിങ്ങൂര്‍ തെക്കുംമുറി ",
      "TID": 47,
      "DID": 8,
      "VID": "729"
    },
    {
      "E": "Meloor",
      "M": "മേലൂര്‍ ",
      "TID": 47,
      "DID": 8,
      "VID": "708"
    },
    {
      "E": "Muringoor vadakkummuri",
      "M": "മുരിങ്ങൂര്‍ വടക്കുംമ്മുറി ",
      "TID": 47,
      "DID": 8,
      "VID": "718"
    },
    {
      "E": "West chalakudy",
      "M": "പടിഞ്ഞാറെ ചാലക്കുടി",
      "TID": 47,
      "DID": 8,
      "VID": "704"
    },
    {
      "E": "East chalakudy",
      "M": "കിഴക്കേ ചാലക്കുടി ",
      "TID": 47,
      "DID": 8,
      "VID": "703"
    },
    {
      "E": "Potta",
      "M": "പോട്ട ",
      "TID": 47,
      "DID": 8,
      "VID": "723"
    },
    {
      "E": "Perambra",
      "M": "പേരാമ്പ്ര ",
      "TID": 47,
      "DID": 8,
      "VID": "722"
    },
    {
      "E": "Pariyaram",
      "M": "പരിയാരം ",
      "TID": 47,
      "DID": 8,
      "VID": "717"
    },
    {
      "E": "Kuttichira",
      "M": "കുറ്റിച്ചിറ",
      "TID": 47,
      "DID": 8,
      "VID": "709"
    },
    {
      "E": "Elinipra",
      "M": "എലഞ്ഞിപ്ര",
      "TID": 47,
      "DID": 8,
      "VID": "725"
    },
    {
      "E": "Kodasseri",
      "M": "കോടശ്ശേരി",
      "TID": 47,
      "DID": 8,
      "VID": "706"
    },
    {
      "E": "Mattathur",
      "M": "മറ്റത്തൂര്‍",
      "TID": 47,
      "DID": 8,
      "VID": "686"
    },
    {
      "E": "Vellikulangara",
      "M": "വെള്ളികുളങ്ങര",
      "TID": 47,
      "DID": 8,
      "VID": "694"
    },
    {
      "E": "Kodakara",
      "M": "കൊടകര",
      "TID": 47,
      "DID": 8,
      "VID": "705"
    },
    {
      "E": "Varandarappilly",
      "M": "വരന്തരപ്പിള്ളി",
      "TID": 47,
      "DID": 8,
      "VID": "689"
    },
    {
      "E": "Mupliyam",
      "M": "മുപ്ലിയം",
      "TID": 47,
      "DID": 8,
      "VID": "721"
    },
    {
      "E": "Nandipulam",
      "M": "നന്ദിപുലം",
      "TID": 47,
      "DID": 8,
      "VID": "716"
    },
    {
      "E": "Athirapally",
      "M": "ആതിരപ്പള്ളി",
      "TID": 47,
      "DID": 8,
      "VID": "0"
    },
    {
      "E": "Vadakarapathy",
      "M": "വടകരപ്പതി",
      "TID": 48,
      "DID": 9,
      "VID": "909"
    },
    {
      "E": "Ozhalapathy",
      "M": "ഒഴലപതി",
      "TID": 48,
      "DID": 9,
      "VID": "910"
    },
    {
      "E": "Eruthenpathy",
      "M": "എരുത്തംപതി",
      "TID": 48,
      "DID": 9,
      "VID": "911"
    },
    {
      "E": "Kozhipathi",
      "M": "കോഴിപ്പതി",
      "TID": 48,
      "DID": 9,
      "VID": "912"
    },
    {
      "E": "Valiyavallampathi",
      "M": "വലിയവള്ളംപതി",
      "TID": 48,
      "DID": 9,
      "VID": "913"
    },
    {
      "E": "Kozhinjampara",
      "M": "കൊഴിഞ്ഞാമ്പാറ",
      "TID": 48,
      "DID": 9,
      "VID": "914"
    },
    {
      "E": "Nalleppilly",
      "M": "നല്ലേപ്പിള്ളി",
      "TID": 48,
      "DID": 9,
      "VID": "915"
    },
    {
      "E": "Tathamangalam",
      "M": "തത്തമംഗലം",
      "TID": 48,
      "DID": 9,
      "VID": "916"
    },
    {
      "E": "Moolathara",
      "M": "മൂലത്തറ",
      "TID": 48,
      "DID": 9,
      "VID": "917"
    },
    {
      "E": "Chittur",
      "M": "ചിറ്റൂര്‍",
      "TID": 48,
      "DID": 9,
      "VID": "918"
    },
    {
      "E": "Perumatty",
      "M": "പെരുമാട്ടി",
      "TID": 48,
      "DID": 9,
      "VID": "919"
    },
    {
      "E": "Thekkedesham",
      "M": "തെക്കേ ദേശം",
      "TID": 48,
      "DID": 9,
      "VID": "920"
    },
    {
      "E": "Pattanchery",
      "M": "പട്ടഞ്ചേരി",
      "TID": 48,
      "DID": 9,
      "VID": "921"
    },
    {
      "E": "Vandithavalam",
      "M": "വണ്ടിത്താവളം",
      "TID": 48,
      "DID": 9,
      "VID": "922"
    },
    {
      "E": "Koduvayur -1",
      "M": "കൊടുവായൂര്‍ 1",
      "TID": 48,
      "DID": 9,
      "VID": "923"
    },
    {
      "E": "Koduvayur -2",
      "M": "കൊടുവായൂര്‍ 2",
      "TID": 48,
      "DID": 9,
      "VID": "924"
    },
    {
      "E": "Muthalamada -1",
      "M": "മുതലമട 1",
      "TID": 48,
      "DID": 9,
      "VID": "925"
    },
    {
      "E": "Muthalamada -2",
      "M": "മുതലമട 2",
      "TID": 48,
      "DID": 9,
      "VID": "926"
    },
    {
      "E": "Pallassena",
      "M": "പല്ലശ്ശന",
      "TID": 48,
      "DID": 9,
      "VID": "927"
    },
    {
      "E": "Kollengode-1",
      "M": "കൊല്ലങ്കോട് 1",
      "TID": 48,
      "DID": 9,
      "VID": "928"
    },
    {
      "E": "Vadavannur",
      "M": "വടവന്നൂര്‍",
      "TID": 48,
      "DID": 9,
      "VID": "929"
    },
    {
      "E": "Kollengode-2",
      "M": "കൊല്ലങ്കോട് 2",
      "TID": 48,
      "DID": 9,
      "VID": "930"
    },
    {
      "E": "Elavancherry",
      "M": "എലവഞ്ചേരി",
      "TID": 48,
      "DID": 9,
      "VID": "931"
    },
    {
      "E": "Puthunagaram",
      "M": "പുതുനഗരം",
      "TID": 48,
      "DID": 9,
      "VID": "932"
    },
    {
      "E": "Nemmara",
      "M": "നെന്മാറ",
      "TID": 48,
      "DID": 9,
      "VID": "933"
    },
    {
      "E": "Valangi",
      "M": "വല്ലങ്ങി",
      "TID": 48,
      "DID": 9,
      "VID": "934"
    },
    {
      "E": "Kayaradi",
      "M": "കയറാടി",
      "TID": 48,
      "DID": 9,
      "VID": "935"
    },
    {
      "E": "Nelliampathi",
      "M": "നെല്ലിയാമ്പതി",
      "TID": 48,
      "DID": 9,
      "VID": "936"
    },
    {
      "E": "Thiruvazhiyode",
      "M": "തിരുവഴിയാട്",
      "TID": 48,
      "DID": 9,
      "VID": "937"
    },
    {
      "E": "Ayalur",
      "M": "അയിലൂര്‍",
      "TID": 48,
      "DID": 9,
      "VID": "938"
    },
    {
      "E": "Alathur",
      "M": "ആലത്തൂര്‍",
      "TID": 49,
      "DID": 9,
      "VID": "939"
    },
    {
      "E": "Erimayur -1",
      "M": "എരുമയൂര്‍ 1",
      "TID": 49,
      "DID": 9,
      "VID": "940"
    },
    {
      "E": "Erimayur -2",
      "M": "എരുമയൂര്‍ 2",
      "TID": 49,
      "DID": 9,
      "VID": "941"
    },
    {
      "E": "Melarcode",
      "M": "മേലാര്‍കോട്",
      "TID": 49,
      "DID": 9,
      "VID": "942"
    },
    {
      "E": "Vandayi-1",
      "M": "വണ്ടാഴി 1",
      "TID": 49,
      "DID": 9,
      "VID": "943"
    },
    {
      "E": "Vandayi-2",
      "M": "വണ്ടാഴി 2",
      "TID": 49,
      "DID": 9,
      "VID": "944"
    },
    {
      "E": "Kizhakkencherry-1",
      "M": "കിഴക്കഞ്ചേരി 1",
      "TID": 49,
      "DID": 9,
      "VID": "945"
    },
    {
      "E": "Kizhakkencherry-2",
      "M": "കിഴക്കഞ്ചേരി 2",
      "TID": 49,
      "DID": 9,
      "VID": "946"
    },
    {
      "E": "Vadakkanchery-1",
      "M": "വടക്കാഞ്ചേരി 1",
      "TID": 49,
      "DID": 9,
      "VID": "947"
    },
    {
      "E": "Vadakkanchery-2",
      "M": "വടക്കാഞ്ചേരി 2",
      "TID": 49,
      "DID": 9,
      "VID": "948"
    },
    {
      "E": "Kannambra-1",
      "M": "കണ്ണമ്പ്ര 1",
      "TID": 49,
      "DID": 9,
      "VID": "949"
    },
    {
      "E": "Kannambra-2",
      "M": "കണ്ണമ്പ്ര 2",
      "TID": 49,
      "DID": 9,
      "VID": "950"
    },
    {
      "E": "Puducode",
      "M": "പുതുക്കോട്",
      "TID": 49,
      "DID": 9,
      "VID": "951"
    },
    {
      "E": "Kavasseri -1",
      "M": "കാവശ്ശേരി 1",
      "TID": 49,
      "DID": 9,
      "VID": "952"
    },
    {
      "E": "Kavasseri-2",
      "M": "കാവശ്ശേരി 2",
      "TID": 49,
      "DID": 9,
      "VID": "953"
    },
    {
      "E": "Tharoor-1",
      "M": "തരൂര്‍ 1",
      "TID": 49,
      "DID": 9,
      "VID": "954"
    },
    {
      "E": "Tharoor-2",
      "M": "തരൂര്‍ 2",
      "TID": 49,
      "DID": 9,
      "VID": "955"
    },
    {
      "E": "Mangalam dam",
      "M": "മംഗലം ഡാം",
      "TID": 49,
      "DID": 9,
      "VID": "956"
    },
    {
      "E": "Thenkurissi -1",
      "M": "തേന്‍കുറിശ്ശി 1",
      "TID": 49,
      "DID": 9,
      "VID": "957"
    },
    {
      "E": "Thenkurissi -2",
      "M": "തേന്‍കുറിശ്ശി 2",
      "TID": 49,
      "DID": 9,
      "VID": "958"
    },
    {
      "E": "Kuzhalmannam-1",
      "M": "കുഴല്‍മന്ദം 1",
      "TID": 49,
      "DID": 9,
      "VID": "959"
    },
    {
      "E": "Kuzhalmannam-2",
      "M": "കുഴല്‍മന്ദം 2",
      "TID": 49,
      "DID": 9,
      "VID": "960"
    },
    {
      "E": "Mathur-1",
      "M": "മാത്തൂര്‍ 1",
      "TID": 49,
      "DID": 9,
      "VID": "961"
    },
    {
      "E": "Mathur-2",
      "M": "മാത്തൂര്‍ 2",
      "TID": 49,
      "DID": 9,
      "VID": "962"
    },
    {
      "E": "Kuthannoor -1",
      "M": "കുത്തനൂര്‍ 1",
      "TID": 49,
      "DID": 9,
      "VID": "963"
    },
    {
      "E": "Kuthannoor -2",
      "M": "കൂത്തനൂര്‍ 2",
      "TID": 49,
      "DID": 9,
      "VID": "964"
    },
    {
      "E": "Peringottukurissi-1",
      "M": "പെരിങ്ങോട്ടുകുറിശ്ശി 1",
      "TID": 49,
      "DID": 9,
      "VID": "965"
    },
    {
      "E": "Peringottukurissi -2",
      "M": "പെരിങ്ങോട്ടുകുറിശ്ശി 2",
      "TID": 49,
      "DID": 9,
      "VID": "966"
    },
    {
      "E": "Kottayi-1",
      "M": "കോട്ടായി 1",
      "TID": 49,
      "DID": 9,
      "VID": "967"
    },
    {
      "E": "Kottayi-2",
      "M": "കോട്ടായി 2",
      "TID": 49,
      "DID": 9,
      "VID": "968"
    },
    {
      "E": "Palakkad-1",
      "M": "പാലക്കാട് 1",
      "TID": 50,
      "DID": 9,
      "VID": "969"
    },
    {
      "E": "Palakkad-2",
      "M": "പാലക്കാട് 2",
      "TID": 50,
      "DID": 9,
      "VID": "970"
    },
    {
      "E": "Palakkad-3",
      "M": "പാലക്കാട് 3",
      "TID": 50,
      "DID": 9,
      "VID": "971"
    },
    {
      "E": "Akathethara",
      "M": "അകത്തേത്തറ",
      "TID": 50,
      "DID": 9,
      "VID": "972"
    },
    {
      "E": "Malampuzha -1",
      "M": "മലമ്പുഴ 1",
      "TID": 50,
      "DID": 9,
      "VID": "973"
    },
    {
      "E": "Malampuzha -2",
      "M": "മലമ്പുഴ 2",
      "TID": 50,
      "DID": 9,
      "VID": "974"
    },
    {
      "E": "Marutharoad",
      "M": "മരുതാറോഡ്",
      "TID": 50,
      "DID": 9,
      "VID": "975"
    },
    {
      "E": "Pirayiri",
      "M": "പിരായിരി",
      "TID": 50,
      "DID": 9,
      "VID": "976"
    },
    {
      "E": "Kannadi-1",
      "M": "കണ്ണാടി 1",
      "TID": 50,
      "DID": 9,
      "VID": "977"
    },
    {
      "E": "Kannadi -2",
      "M": "കണ്ണാടി 2",
      "TID": 50,
      "DID": 9,
      "VID": "978"
    },
    {
      "E": "Yakkara",
      "M": "യാക്കര",
      "TID": 50,
      "DID": 9,
      "VID": "979"
    },
    {
      "E": "Parli -1",
      "M": "പറളി 1",
      "TID": 50,
      "DID": 9,
      "VID": "980"
    },
    {
      "E": "Parli-2",
      "M": "പറളി 2",
      "TID": 50,
      "DID": 9,
      "VID": "981"
    },
    {
      "E": "Mankara",
      "M": "മങ്കര",
      "TID": 50,
      "DID": 9,
      "VID": "982"
    },
    {
      "E": "Mannur",
      "M": "മണ്ണൂര്‍",
      "TID": 50,
      "DID": 9,
      "VID": "983"
    },
    {
      "E": "Keralassery",
      "M": "കേരളശ്ശേരി",
      "TID": 50,
      "DID": 9,
      "VID": "984"
    },
    {
      "E": "Kongad -1",
      "M": "കൊങ്ങാട് 1",
      "TID": 50,
      "DID": 9,
      "VID": "985"
    },
    {
      "E": "Kongad -2",
      "M": "കൊങ്ങാട് 2",
      "TID": 50,
      "DID": 9,
      "VID": "986"
    },
    {
      "E": "Mundur -1",
      "M": "മുണ്ടൂര്‍ 1",
      "TID": 50,
      "DID": 9,
      "VID": "987"
    },
    {
      "E": "Mundur -2",
      "M": "മുണ്ടൂര്‍ 2",
      "TID": 50,
      "DID": 9,
      "VID": "988"
    },
    {
      "E": "Puduppariyaram-1",
      "M": "പുതുപരിയാരം 1",
      "TID": 50,
      "DID": 9,
      "VID": "989"
    },
    {
      "E": "Puduppariyaram-2",
      "M": "പുതുപരിയാരം 2",
      "TID": 50,
      "DID": 9,
      "VID": "990"
    },
    {
      "E": "Elappully -1",
      "M": "എലപ്പുള്ളു 1",
      "TID": 50,
      "DID": 9,
      "VID": "991"
    },
    {
      "E": "Elappully -2",
      "M": "എലപ്പുള്ളി 2",
      "TID": 50,
      "DID": 9,
      "VID": "992"
    },
    {
      "E": "Pudussery east",
      "M": "പുതുശ്ശേരി ഈസ്റ്റ്",
      "TID": 50,
      "DID": 9,
      "VID": "993"
    },
    {
      "E": "Pudussery central",
      "M": "പുതുശ്ശേരി സെന്‍ട്രല്‍",
      "TID": 50,
      "DID": 9,
      "VID": "994"
    },
    {
      "E": "Pudussery west",
      "M": "പുതുശ്ശേരി വെസ്റ്റ്",
      "TID": 50,
      "DID": 9,
      "VID": "995"
    },
    {
      "E": "Kodumba",
      "M": "കൊടുമ്പ്",
      "TID": 50,
      "DID": 9,
      "VID": "996"
    },
    {
      "E": "Peruvemba",
      "M": "പെരുവേമ്പ",
      "TID": 50,
      "DID": 9,
      "VID": "997"
    },
    {
      "E": "Polpully",
      "M": "പൊല്‍പ്പുള്ളി",
      "TID": 50,
      "DID": 9,
      "VID": "998"
    },
    {
      "E": "Ottapalam-1",
      "M": "ഒറ്റപ്പാലം 1",
      "TID": 51,
      "DID": 9,
      "VID": "999"
    },
    {
      "E": "Ottapalam-2",
      "M": "ഒറ്റപ്പാലം 2",
      "TID": 51,
      "DID": 9,
      "VID": "1000"
    },
    {
      "E": "Shoranur-1",
      "M": "ഷൊര്‍ണൂര്‍ 1",
      "TID": 51,
      "DID": 9,
      "VID": "1001"
    },
    {
      "E": "Shoranur-2",
      "M": "ഷൊര്‍ണൂര്‍ 2",
      "TID": 51,
      "DID": 9,
      "VID": "1002"
    },
    {
      "E": "Vaniyamkulam-1",
      "M": "വാണിയംകുളം 1",
      "TID": 51,
      "DID": 9,
      "VID": "1003"
    },
    {
      "E": "Vaniyamkulam-2",
      "M": "വാണിയംകുളം 2",
      "TID": 51,
      "DID": 9,
      "VID": "1004"
    },
    {
      "E": "Anangadi",
      "M": "അനങ്ങാടി",
      "TID": 51,
      "DID": 9,
      "VID": "1005"
    },
    {
      "E": "Chalavara",
      "M": "ചളവറ",
      "TID": 51,
      "DID": 9,
      "VID": "1006"
    },
    {
      "E": "Lakkidi-perur-1",
      "M": "ലക്കിടി പേരൂര്‍ 1",
      "TID": 51,
      "DID": 9,
      "VID": "1007"
    },
    {
      "E": "Lakkidi-perur-2",
      "M": "ലക്കിടി പേരൂര്‍ 2",
      "TID": 51,
      "DID": 9,
      "VID": "1008"
    },
    {
      "E": "Ambalapara-1",
      "M": "അമ്പലപ്പാറ 1",
      "TID": 51,
      "DID": 9,
      "VID": "1009"
    },
    {
      "E": "Ambalapara-2",
      "M": "അമ്പലപ്പാറ 2",
      "TID": 51,
      "DID": 9,
      "VID": "1010"
    },
    {
      "E": "Sreekrishnapuram-1",
      "M": "ശ്രീകൃഷ്ണപുരം 1",
      "TID": 51,
      "DID": 9,
      "VID": "1011"
    },
    {
      "E": "Sreekrishnapuram-2",
      "M": "ശ്രീകൃഷ്ണപുരം 2",
      "TID": 51,
      "DID": 9,
      "VID": "1012"
    },
    {
      "E": "Karimpuzha-1",
      "M": "കരിമ്പുഴ1",
      "TID": 51,
      "DID": 9,
      "VID": "1013"
    },
    {
      "E": "Karimpuzha-2",
      "M": "കരിമ്പുഴ2",
      "TID": 51,
      "DID": 9,
      "VID": "1014"
    },
    {
      "E": "Kadampazhipuram-1",
      "M": "കടമ്പഴിപ്പുറം 1",
      "TID": 51,
      "DID": 9,
      "VID": "1015"
    },
    {
      "E": "Kadampazhipuram-2",
      "M": "കടമ്പഴിപ്പുറം 2",
      "TID": 51,
      "DID": 9,
      "VID": "1016"
    },
    {
      "E": "Vellinezhi",
      "M": "വെള്ളിനേഴി",
      "TID": 51,
      "DID": 9,
      "VID": "1017"
    },
    {
      "E": "Cherpulassery",
      "M": "ചേര്‍പ്ലശ്ശേരി",
      "TID": 51,
      "DID": 9,
      "VID": "1018"
    },
    {
      "E": "Thrikkadeeri-1",
      "M": "തൃക്കാടിരി 1",
      "TID": 51,
      "DID": 9,
      "VID": "1019"
    },
    {
      "E": "Thrikkadeeri-2",
      "M": "തൃക്കാടിരി 2",
      "TID": 51,
      "DID": 9,
      "VID": "1020"
    },
    {
      "E": "Nellaya",
      "M": "നെല്ലായ",
      "TID": 51,
      "DID": 9,
      "VID": "1028"
    },
    {
      "E": "Pookkottukavu",
      "M": "പൂക്കോട്ടുകാവ്",
      "TID": 51,
      "DID": 9,
      "VID": "0"
    },
    {
      "E": "Alanallur-1",
      "M": "അലനല്ലൂര്‍ 1",
      "TID": 52,
      "DID": 9,
      "VID": "1040"
    },
    {
      "E": "Alanallur-2",
      "M": "അലനല്ലൂര്‍ 2",
      "TID": 52,
      "DID": 9,
      "VID": "1041"
    },
    {
      "E": "Alanallur-3",
      "M": "അലനല്ലൂര്‍ 3",
      "TID": 52,
      "DID": 9,
      "VID": "1042"
    },
    {
      "E": "Thachanattukara-1",
      "M": "തച്ചനാട്ടുകര 1",
      "TID": 52,
      "DID": 9,
      "VID": "1043"
    },
    {
      "E": "Thachanattukara-2",
      "M": "തച്ചനാട്ടുകര 2",
      "TID": 52,
      "DID": 9,
      "VID": "1044"
    },
    {
      "E": "Kottoppadam-1",
      "M": "കോട്ടോപ്പാടം 1",
      "TID": 52,
      "DID": 9,
      "VID": "1045"
    },
    {
      "E": "Kottoppadam-2",
      "M": "കോട്ടോപ്പാടം 2",
      "TID": 52,
      "DID": 9,
      "VID": "1046"
    },
    {
      "E": "Kottoppadam-3",
      "M": "കോട്ടോപ്പാടം 3",
      "TID": 52,
      "DID": 9,
      "VID": "1047"
    },
    {
      "E": "Kumaramputhur",
      "M": "കുമരംപുത്തൂര്‍",
      "TID": 52,
      "DID": 9,
      "VID": "1048"
    },
    {
      "E": "Mannarkkad-1",
      "M": "മണ്ണാര്‍ക്കാട്1",
      "TID": 52,
      "DID": 9,
      "VID": "1049"
    },
    {
      "E": "Mannarkkad-2",
      "M": "മണ്ണാര്‍ക്കാട്2",
      "TID": 52,
      "DID": 9,
      "VID": "1050"
    },
    {
      "E": "Pottassery-1",
      "M": "പൊറ്റശ്ശേരി 1",
      "TID": 52,
      "DID": 9,
      "VID": "1051"
    },
    {
      "E": "Pottassery-2",
      "M": "പൊറ്റശ്ശേരി 2",
      "TID": 52,
      "DID": 9,
      "VID": "1052"
    },
    {
      "E": "Karimba-1",
      "M": "കരിമ്പ1",
      "TID": 52,
      "DID": 9,
      "VID": "1053"
    },
    {
      "E": "Karimba-2",
      "M": "കരിമ്പ2",
      "TID": 52,
      "DID": 9,
      "VID": "1054"
    },
    {
      "E": "Karakurissi",
      "M": "കാരക്കുറിശ്ശി",
      "TID": 52,
      "DID": 9,
      "VID": "1055"
    },
    {
      "E": "Payyanadam",
      "M": "പയ്യനേടം",
      "TID": 52,
      "DID": 9,
      "VID": "1056"
    },
    {
      "E": "Palakkayam",
      "M": "പാലക്കയം",
      "TID": 52,
      "DID": 9,
      "VID": "1057"
    },
    {
      "E": "Tachampara",
      "M": "തച്ചമ്പാറ",
      "TID": 52,
      "DID": 9,
      "VID": "1058"
    },
    {
      "E": "Agali",
      "M": "അഗളി",
      "TID": 52,
      "DID": 9,
      "VID": "1059"
    },
    {
      "E": "Puthur",
      "M": "പുതൂര്‍",
      "TID": 52,
      "DID": 9,
      "VID": "1060"
    },
    {
      "E": "Sholayur",
      "M": "ഷോളയൂര്‍",
      "TID": 52,
      "DID": 9,
      "VID": "1061"
    },
    {
      "E": "Kottathara",
      "M": "കോട്ടത്തറ",
      "TID": 52,
      "DID": 9,
      "VID": "1062"
    },
    {
      "E": "Paadavayal",
      "M": "പാടവയല്‍",
      "TID": 52,
      "DID": 9,
      "VID": "1063"
    },
    {
      "E": "Kallamala",
      "M": "കള്ളമല",
      "TID": 52,
      "DID": 9,
      "VID": "1064"
    },
    {
      "E": "Pattambi",
      "M": "പട്ടാമ്പി",
      "TID": 53,
      "DID": 9,
      "VID": "1021"
    },
    {
      "E": "Ongallur-1",
      "M": "ഓങ്ങല്ലൂര്‍ 1",
      "TID": 53,
      "DID": 9,
      "VID": "1022"
    },
    {
      "E": "Ongallur-2",
      "M": "ഓങ്ങല്ലൂര്‍ 2",
      "TID": 53,
      "DID": 9,
      "VID": "1023"
    },
    {
      "E": "Muthuthala",
      "M": "മുതുതല",
      "TID": 53,
      "DID": 9,
      "VID": "1576"
    },
    {
      "E": "Thiruvegappura",
      "M": "തിരുവേഗപുറ",
      "TID": 53,
      "DID": 9,
      "VID": "1025"
    },
    {
      "E": "Koppam",
      "M": "കൊപ്പം",
      "TID": 53,
      "DID": 9,
      "VID": "1026"
    },
    {
      "E": "Kulukkallur",
      "M": "കുലുക്കല്ലൂര്‍",
      "TID": 53,
      "DID": 9,
      "VID": "1027"
    },
    {
      "E": "Vallapuzha",
      "M": "വല്ലപുഴ",
      "TID": 53,
      "DID": 9,
      "VID": "1029"
    },
    {
      "E": "Vilayoor",
      "M": "വിളയൂര്‍",
      "TID": 53,
      "DID": 9,
      "VID": "1030"
    },
    {
      "E": "Paruthur",
      "M": "പരുതൂര്‍",
      "TID": 53,
      "DID": 9,
      "VID": "1031"
    },
    {
      "E": "Thrithala",
      "M": "തൃത്താല",
      "TID": 53,
      "DID": 9,
      "VID": "1032"
    },
    {
      "E": "Pattithara",
      "M": "പട്ടിത്തറ",
      "TID": 53,
      "DID": 9,
      "VID": "1033"
    },
    {
      "E": "Kapoor",
      "M": "കപ്പൂര്‍",
      "TID": 53,
      "DID": 9,
      "VID": "1034"
    },
    {
      "E": "Anakkara",
      "M": "ആനക്കര",
      "TID": 53,
      "DID": 9,
      "VID": "1035"
    },
    {
      "E": "Chalissery",
      "M": "ചാലിശ്ശേരി",
      "TID": 53,
      "DID": 9,
      "VID": "1036"
    },
    {
      "E": "Nagalassery",
      "M": "നാഗലശ്ശേരി",
      "TID": 53,
      "DID": 9,
      "VID": "1037"
    },
    {
      "E": "Thirumittacode – 1",
      "M": "തിരുമിറ്റക്കോട് 1",
      "TID": 53,
      "DID": 9,
      "VID": "1038"
    },
    {
      "E": "Thirumittacode – 2",
      "M": "തിരുമിറ്റക്കോട് 2",
      "TID": 53,
      "DID": 9,
      "VID": "1039"
    },
    {
      "E": "Ponnani town",
      "M": "പൊന്നാനി നഗരം",
      "TID": 54,
      "DID": 10,
      "VID": "1065"
    },
    {
      "E": "Ezhavathiruthy",
      "M": "ഈഴുവതിരുത്തി",
      "TID": 54,
      "DID": 10,
      "VID": "1066"
    },
    {
      "E": "Edappal",
      "M": "എടപ്പാള്‍",
      "TID": 54,
      "DID": 10,
      "VID": "1067"
    },
    {
      "E": "Vattamkulam",
      "M": "വട്ടംകുളം",
      "TID": 54,
      "DID": 10,
      "VID": "1068"
    },
    {
      "E": "Kaladi",
      "M": "കാലടി",
      "TID": 54,
      "DID": 10,
      "VID": "1069"
    },
    {
      "E": "Tavanur",
      "M": "തവനൂര്‍",
      "TID": 54,
      "DID": 10,
      "VID": "1070"
    },
    {
      "E": "Maranchery",
      "M": "മാറഞ്ചേരി",
      "TID": 54,
      "DID": 10,
      "VID": "1071"
    },
    {
      "E": "Veliyancode",
      "M": "വെളിയംകോട്",
      "TID": 54,
      "DID": 10,
      "VID": "1072"
    },
    {
      "E": "Perumpadappu",
      "M": "പെരുമ്പടപ്പ്",
      "TID": 54,
      "DID": 10,
      "VID": "1073"
    },
    {
      "E": "Alankode",
      "M": "ആലങ്കോട്",
      "TID": 54,
      "DID": 10,
      "VID": "1074"
    },
    {
      "E": "Nannamukku",
      "M": "നന്നംമുക്ക്",
      "TID": 54,
      "DID": 10,
      "VID": "1075"
    },
    {
      "E": "Tirur",
      "M": "തിരൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1076"
    },
    {
      "E": "Thalakkadu",
      "M": "തലക്കാട്",
      "TID": 55,
      "DID": 10,
      "VID": "1077"
    },
    {
      "E": "Triprangode",
      "M": "തൃപ്രങ്ങോട്",
      "TID": 55,
      "DID": 10,
      "VID": "1078"
    },
    {
      "E": "Mangalam",
      "M": "മംഗലം",
      "TID": 55,
      "DID": 10,
      "VID": "1079"
    },
    {
      "E": "Vettam",
      "M": "വെട്ടം",
      "TID": 55,
      "DID": 10,
      "VID": "1080"
    },
    {
      "E": "Purathur",
      "M": "പുറത്തൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1081"
    },
    {
      "E": "Thirunavaya",
      "M": "തിരുനാവായ",
      "TID": 55,
      "DID": 10,
      "VID": "1082"
    },
    {
      "E": "Ananthavoor",
      "M": "അനന്താവൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1083"
    },
    {
      "E": "Trikkandiyur",
      "M": "തൃക്കണ്ടിയൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1084"
    },
    {
      "E": "Tanalur",
      "M": "താനാളൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1085"
    },
    {
      "E": "Tanur",
      "M": "താനൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1086"
    },
    {
      "E": "Ozhur",
      "M": "ഒഴൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1087"
    },
    {
      "E": "Ponmundam",
      "M": "പൊന്‍മുണ്ടം",
      "TID": 55,
      "DID": 10,
      "VID": "1088"
    },
    {
      "E": "Cheriyamundam",
      "M": "ചെറിയമുണ്ടം",
      "TID": 55,
      "DID": 10,
      "VID": "1089"
    },
    {
      "E": "Valavannur",
      "M": "വളവന്നൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1090"
    },
    {
      "E": "Kalpakanchery",
      "M": "കല്‍പ്പകഞ്ചേരി",
      "TID": 55,
      "DID": 10,
      "VID": "1091"
    },
    {
      "E": "Perumanna",
      "M": "പെരുമണ്ണ",
      "TID": 55,
      "DID": 10,
      "VID": "1092"
    },
    {
      "E": "Niramaruthur",
      "M": "നിറമരുതൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1093"
    },
    {
      "E": "Pariyapuram",
      "M": "പരിയാപുരം",
      "TID": 55,
      "DID": 10,
      "VID": "1094"
    },
    {
      "E": "Kottakkal",
      "M": "കോട്ടക്കല്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1095"
    },
    {
      "E": "Ponmala",
      "M": "പൊന്‍മള",
      "TID": 55,
      "DID": 10,
      "VID": "1096"
    },
    {
      "E": "Athavanad",
      "M": "ആതവനാട്",
      "TID": 55,
      "DID": 10,
      "VID": "1097"
    },
    {
      "E": "Kattiparuthi",
      "M": "കാട്ടിപ്പരുത്തി",
      "TID": 55,
      "DID": 10,
      "VID": "0"
    },
    {
      "E": "Edayur",
      "M": "എടയൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1099"
    },
    {
      "E": "Irumbiliyam",
      "M": "ഇരുമ്പിളിയം",
      "TID": 55,
      "DID": 10,
      "VID": "1100"
    },
    {
      "E": "Melmuri",
      "M": "മേല്‍മുറി",
      "TID": 55,
      "DID": 10,
      "VID": "1101"
    },
    {
      "E": "Kurumbathur",
      "M": "കുറുമ്പത്തൂര്‍",
      "TID": 55,
      "DID": 10,
      "VID": "1102"
    },
    {
      "E": "Marakkara",
      "M": "മാറാക്കര",
      "TID": 55,
      "DID": 10,
      "VID": "1103"
    },
    {
      "E": "Kuttippuram",
      "M": "കുറ്റിപ്പുറം",
      "TID": 55,
      "DID": 10,
      "VID": "1104"
    },
    {
      "E": "Naduvattam",
      "M": "നടുവട്ടം",
      "TID": 55,
      "DID": 10,
      "VID": "1105"
    },
    {
      "E": "Parappanangadi",
      "M": "പരപ്പനങ്ങാടി",
      "TID": 56,
      "DID": 10,
      "VID": "1106"
    },
    {
      "E": "Tirurangadi",
      "M": "തിരൂരങ്ങാടി",
      "TID": 56,
      "DID": 10,
      "VID": "1107"
    },
    {
      "E": "Vallikkunnu",
      "M": "വള്ളിക്കുന്ന്",
      "TID": 56,
      "DID": 10,
      "VID": "1108"
    },
    {
      "E": "Ariyallur",
      "M": "അരിയല്ലൂര്‍",
      "TID": 56,
      "DID": 10,
      "VID": "1109"
    },
    {
      "E": "Thenjippalam",
      "M": "തേഞ്ഞിപ്പലം",
      "TID": 56,
      "DID": 10,
      "VID": "1110"
    },
    {
      "E": "Munniyur",
      "M": "മൂന്നിയൂര്‍",
      "TID": 56,
      "DID": 10,
      "VID": "1111"
    },
    {
      "E": "Neduva",
      "M": "നെടുവ",
      "TID": 56,
      "DID": 10,
      "VID": "1114"
    },
    {
      "E": "Oorakam",
      "M": "ഊരകം",
      "TID": 56,
      "DID": 10,
      "VID": "1115"
    },
    {
      "E": "Thennala",
      "M": "തെന്നല",
      "TID": 56,
      "DID": 10,
      "VID": "1116"
    },
    {
      "E": "Vengara",
      "M": "വേങ്ങര",
      "TID": 56,
      "DID": 10,
      "VID": "1117"
    },
    {
      "E": "Othukkungal",
      "M": "ഒതുക്കുങ്ങല്‍",
      "TID": 56,
      "DID": 10,
      "VID": "1118"
    },
    {
      "E": "Kannamangalam",
      "M": "കണ്ണമംഗലം",
      "TID": 56,
      "DID": 10,
      "VID": "1119"
    },
    {
      "E": "A R nagar",
      "M": "എ ആര്‍ നഗര്‍",
      "TID": 56,
      "DID": 10,
      "VID": "1120"
    },
    {
      "E": "Parappur",
      "M": "പറപ്പൂര്‍",
      "TID": 56,
      "DID": 10,
      "VID": "1121"
    },
    {
      "E": "Peruvallur",
      "M": "പെരുവള്ളൂര്‍",
      "TID": 56,
      "DID": 10,
      "VID": "1122"
    },
    {
      "E": "Nannambra",
      "M": "നന്നമ്പ്ര",
      "TID": 56,
      "DID": 10,
      "VID": "1123"
    },
    {
      "E": "Edarikode",
      "M": "എടരിക്കോട്",
      "TID": 56,
      "DID": 10,
      "VID": "1583"
    },
    {
      "E": "Morayur",
      "M": "മൊറയൂര്‍",
      "TID": 57,
      "DID": 10,
      "VID": "1168"
    },
    {
      "E": "Vazhayur",
      "M": "വാഴയൂര്‍",
      "TID": 57,
      "DID": 10,
      "VID": "1179"
    },
    {
      "E": "Vazhakkadu",
      "M": "വാഴക്കാട്",
      "TID": 57,
      "DID": 10,
      "VID": "1175"
    },
    {
      "E": "Cherukavu",
      "M": "ചെറുകാവ്",
      "TID": 57,
      "DID": 10,
      "VID": "1178"
    },
    {
      "E": "Pulikkal",
      "M": "പള്ളിക്കല്‍",
      "TID": 57,
      "DID": 10,
      "VID": "1112"
    },
    {
      "E": "Kondotty",
      "M": "കൊണ്ടോട്ടി",
      "TID": 57,
      "DID": 10,
      "VID": "1170"
    },
    {
      "E": "Nedriyirippu",
      "M": "നെടിയിരിപ്പ്",
      "TID": 57,
      "DID": 10,
      "VID": "1167"
    },
    {
      "E": "Muthuvallur",
      "M": "മുതുവല്ലൂര്‍",
      "TID": 57,
      "DID": 10,
      "VID": "1177"
    },
    {
      "E": "Cheekode",
      "M": "ചീക്കോട്",
      "TID": 57,
      "DID": 10,
      "VID": "1176"
    },
    {
      "E": "Kuzhimanna",
      "M": "കുഴിമണ്ണ",
      "TID": 57,
      "DID": 10,
      "VID": "1171"
    },
    {
      "E": "Pallikkal",
      "M": "പുളിക്കല്‍",
      "TID": 57,
      "DID": 10,
      "VID": "1172"
    },
    {
      "E": "Chelembra",
      "M": "ചേലേമ്പ്ര",
      "TID": 57,
      "DID": 10,
      "VID": "1113"
    },
    {
      "E": "Perinthalmanna",
      "M": "പെരിന്തല്‍മണ്ണ",
      "TID": 58,
      "DID": 10,
      "VID": "1124"
    },
    {
      "E": "Pathakkara",
      "M": "പാതാക്കര",
      "TID": 58,
      "DID": 10,
      "VID": "1125"
    },
    {
      "E": "Melattur",
      "M": "മേലാറ്റൂര്‍",
      "TID": 58,
      "DID": 10,
      "VID": "1126"
    },
    {
      "E": "Arakkuparamba",
      "M": "അരക്കുപറമ്പ",
      "TID": 58,
      "DID": 10,
      "VID": "1127"
    },
    {
      "E": "Thazhekode",
      "M": "താഴെക്കോട്",
      "TID": 58,
      "DID": 10,
      "VID": "1128"
    },
    {
      "E": "Keezhattur",
      "M": "കീഴാറ്റൂര്‍",
      "TID": 58,
      "DID": 10,
      "VID": "1129"
    },
    {
      "E": "Nenmini",
      "M": "നെന്മിനി",
      "TID": 58,
      "DID": 10,
      "VID": "1130"
    },
    {
      "E": "Vettathur",
      "M": "വെട്ടത്തൂര്‍",
      "TID": 58,
      "DID": 10,
      "VID": "1131"
    },
    {
      "E": "Kariavattom",
      "M": "കാര്യവട്ടം",
      "TID": 58,
      "DID": 10,
      "VID": "1132"
    },
    {
      "E": "Edappatta",
      "M": "എടപ്പറ്റ",
      "TID": 58,
      "DID": 10,
      "VID": "1133"
    },
    {
      "E": "Elamkulam",
      "M": "ഏലംകുളം",
      "TID": 58,
      "DID": 10,
      "VID": "1134"
    },
    {
      "E": "Alipparambu",
      "M": "ആലിപ്പറമ്പ്",
      "TID": 58,
      "DID": 10,
      "VID": "1135"
    },
    {
      "E": "Anamangadu",
      "M": "ആനമങ്ങാട്",
      "TID": 58,
      "DID": 10,
      "VID": "1136"
    },
    {
      "E": "Angadipuram",
      "M": "അങ്ങാടിപ്പുറം",
      "TID": 58,
      "DID": 10,
      "VID": "1137"
    },
    {
      "E": "Valambur",
      "M": "വലമ്പൂര്‍",
      "TID": 58,
      "DID": 10,
      "VID": "1138"
    },
    {
      "E": "Vadakkangara",
      "M": "വടക്കാങ്ങര",
      "TID": 58,
      "DID": 10,
      "VID": "1139"
    },
    {
      "E": "Mankada",
      "M": "മങ്കട",
      "TID": 58,
      "DID": 10,
      "VID": "1140"
    },
    {
      "E": "Kodur",
      "M": "കോഡൂര്‍",
      "TID": 58,
      "DID": 10,
      "VID": "1141"
    },
    {
      "E": "Pulamanthole",
      "M": "പുലാമന്തോള്‍",
      "TID": 58,
      "DID": 10,
      "VID": "1142"
    },
    {
      "E": "Kuruvambalam",
      "M": "കുറുവമ്പലം",
      "TID": 58,
      "DID": 10,
      "VID": "1143"
    },
    {
      "E": "Koottilangadi",
      "M": "കൂട്ടിലങ്ങാടി",
      "TID": 58,
      "DID": 10,
      "VID": "1144"
    },
    {
      "E": "Moorkanad",
      "M": "മൂര്‍ക്കനാട്",
      "TID": 58,
      "DID": 10,
      "VID": "1145"
    },
    {
      "E": "Kuruva",
      "M": "കുറുവ",
      "TID": 58,
      "DID": 10,
      "VID": "1146"
    },
    {
      "E": "Puzhakkattiri",
      "M": "പുഴക്കാട്ടിരി",
      "TID": 58,
      "DID": 10,
      "VID": "1147"
    },
    {
      "E": "Manjeri",
      "M": "മഞ്ചേരി",
      "TID": 59,
      "DID": 10,
      "VID": "1148"
    },
    {
      "E": "Payyanad",
      "M": "പയ്യനാട്",
      "TID": 59,
      "DID": 10,
      "VID": "1149"
    },
    {
      "E": "Narukara",
      "M": "നറുകര",
      "TID": 59,
      "DID": 10,
      "VID": "1150"
    },
    {
      "E": "Thrikkalangodu",
      "M": "തൃക്കങ്ങോട്",
      "TID": 59,
      "DID": 10,
      "VID": "1151"
    },
    {
      "E": "Karakkunnu",
      "M": "കാരക്കുന്ന്",
      "TID": 59,
      "DID": 10,
      "VID": "1152"
    },
    {
      "E": "Edavanna",
      "M": "എടവണ്ണ",
      "TID": 59,
      "DID": 10,
      "VID": "1153"
    },
    {
      "E": "Kavanur",
      "M": "കാവന്നൂര്‍",
      "TID": 59,
      "DID": 10,
      "VID": "1154"
    },
    {
      "E": "Pulpatta",
      "M": "പുല്‍പറ്റ",
      "TID": 59,
      "DID": 10,
      "VID": "1155"
    },
    {
      "E": "Vettikkattiri",
      "M": "വെട്ടിക്കാട്ടിരി",
      "TID": 59,
      "DID": 10,
      "VID": "1156"
    },
    {
      "E": "Perakamanna",
      "M": "പെരകമണ്ണ",
      "TID": 59,
      "DID": 10,
      "VID": "1157"
    },
    {
      "E": "Elankur",
      "M": "എളങ്കൂര്‍",
      "TID": 59,
      "DID": 10,
      "VID": "1158"
    },
    {
      "E": "Areekode",
      "M": "അരീക്കോട്",
      "TID": 59,
      "DID": 10,
      "VID": "1159"
    },
    {
      "E": "Pandikkad",
      "M": "പാണ്ടിക്കാട്",
      "TID": 59,
      "DID": 10,
      "VID": "1160"
    },
    {
      "E": "Chembrasseri",
      "M": "ചെമ്പ്രശ്ശേരി",
      "TID": 59,
      "DID": 10,
      "VID": "1161"
    },
    {
      "E": "Malappuram",
      "M": "മലപ്പുറം",
      "TID": 59,
      "DID": 10,
      "VID": "1162"
    },
    {
      "E": "Melmuri",
      "M": "മേല്‍മുറി",
      "TID": 59,
      "DID": 10,
      "VID": "1163"
    },
    {
      "E": "Pukkottur",
      "M": "പൂക്കോട്ടൂര്‍",
      "TID": 59,
      "DID": 10,
      "VID": "1164"
    },
    {
      "E": "Anakkayam",
      "M": "ആനക്കയം",
      "TID": 59,
      "DID": 10,
      "VID": "1165"
    },
    {
      "E": "Panthalloor",
      "M": "പാന്തല്ലൂര്‍",
      "TID": 59,
      "DID": 10,
      "VID": "1166"
    },
    {
      "E": "Panakkad",
      "M": "പാണക്കാട്",
      "TID": 59,
      "DID": 10,
      "VID": "1169"
    },
    {
      "E": "Urangattiri",
      "M": "ഊര്‍ങ്ങാട്ടിരി",
      "TID": 59,
      "DID": 10,
      "VID": "1173"
    },
    {
      "E": "Kizhuparamba",
      "M": "കീഴുപറമ്പ",
      "TID": 59,
      "DID": 10,
      "VID": "1174"
    },
    {
      "E": "Vettilappara",
      "M": "വെറ്റിലപ്പാറ",
      "TID": 59,
      "DID": 10,
      "VID": "1180"
    },
    {
      "E": "Chokkad",
      "M": "ചോക്കാട്",
      "TID": 60,
      "DID": 10,
      "VID": "1181"
    },
    {
      "E": "Karulai",
      "M": "കരുളായി",
      "TID": 60,
      "DID": 10,
      "VID": "1182"
    },
    {
      "E": "Akampadam",
      "M": "അകമ്പാടം",
      "TID": 60,
      "DID": 10,
      "VID": "1183"
    },
    {
      "E": "Vazhikkadavu",
      "M": "വഴിക്കടവ്",
      "TID": 60,
      "DID": 10,
      "VID": "1184"
    },
    {
      "E": "Kurumbalangodu",
      "M": "കുറുമ്പിലങ്ങോട്",
      "TID": 60,
      "DID": 10,
      "VID": "1185"
    },
    {
      "E": "Kerala estate",
      "M": "കേരളാ എസ്റ്റേറ്റ്",
      "TID": 60,
      "DID": 10,
      "VID": "1186"
    },
    {
      "E": "Amarambalam",
      "M": "അമരമ്പലം",
      "TID": 60,
      "DID": 10,
      "VID": "1187"
    },
    {
      "E": "Nilambur",
      "M": "നിലമ്പൂര്‍",
      "TID": 60,
      "DID": 10,
      "VID": "1188"
    },
    {
      "E": "Edakkara",
      "M": "എടക്കര",
      "TID": 60,
      "DID": 10,
      "VID": "1189"
    },
    {
      "E": "Chungathara",
      "M": "ചുങ്കത്തറ",
      "TID": 60,
      "DID": 10,
      "VID": "1190"
    },
    {
      "E": "Karuvarakund",
      "M": "കരുവാരക്കുണ്ട്",
      "TID": 60,
      "DID": 10,
      "VID": "1191"
    },
    {
      "E": "Mampad",
      "M": "മാമ്പാട്",
      "TID": 60,
      "DID": 10,
      "VID": "1192"
    },
    {
      "E": "Pullipadam",
      "M": "പള്ളിപ്പാടം",
      "TID": 60,
      "DID": 10,
      "VID": "1193"
    },
    {
      "E": "Porur",
      "M": "പൊരൂര്‍",
      "TID": 60,
      "DID": 10,
      "VID": "1194"
    },
    {
      "E": "Tuvvur",
      "M": "തുവ്വൂര്‍",
      "TID": 60,
      "DID": 10,
      "VID": "1195"
    },
    {
      "E": "Wandoor",
      "M": "വണ്ടൂര്‍",
      "TID": 60,
      "DID": 10,
      "VID": "1196"
    },
    {
      "E": "Vellayur",
      "M": "വെള്ളയൂര്‍",
      "TID": 60,
      "DID": 10,
      "VID": "1197"
    },
    {
      "E": "Kalikavu",
      "M": "കാളിക്കാവ്",
      "TID": 60,
      "DID": 10,
      "VID": "1198"
    },
    {
      "E": "Thiruvali",
      "M": "തിരുവാലി",
      "TID": 60,
      "DID": 10,
      "VID": "1199"
    },
    {
      "E": "Moothedam",
      "M": "മൂത്തേടം",
      "TID": 60,
      "DID": 10,
      "VID": "1584"
    },
    {
      "E": "Pothukal",
      "M": "പോത്തുകല്ല്",
      "TID": 60,
      "DID": 10,
      "VID": "1585"
    },
    {
      "E": "Ramanattukara",
      "M": "രാമനാട്ടുകര",
      "TID": 61,
      "DID": 11,
      "VID": "1200"
    },
    {
      "E": "Farook",
      "M": "ഫറോക്ക്",
      "TID": 61,
      "DID": 11,
      "VID": "1201"
    },
    {
      "E": "Kadalundi",
      "M": "കടലുണ്ടി",
      "TID": 61,
      "DID": 11,
      "VID": "1202"
    },
    {
      "E": "Cheruvannur",
      "M": "ചെറുവണ്ണൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1203"
    },
    {
      "E": "Beypore",
      "M": "ബേപ്പൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1204"
    },
    {
      "E": "Panniyankara",
      "M": "പന്നിയങ്കര",
      "TID": 61,
      "DID": 11,
      "VID": "1205"
    },
    {
      "E": "Nagaram",
      "M": "നഗരം",
      "TID": 61,
      "DID": 11,
      "VID": "1206"
    },
    {
      "E": "Kasaba",
      "M": "കസബ",
      "TID": 61,
      "DID": 11,
      "VID": "1207"
    },
    {
      "E": "Kacheri",
      "M": "കച്ചേരി",
      "TID": 61,
      "DID": 11,
      "VID": "1208"
    },
    {
      "E": "Karuvanthiruthy",
      "M": "കരുവന്തുരുത്തി",
      "TID": 61,
      "DID": 11,
      "VID": "1209"
    },
    {
      "E": "Valayanadu",
      "M": "വളയനാട്",
      "TID": 61,
      "DID": 11,
      "VID": "1210"
    },
    {
      "E": "Puthiyangadi",
      "M": "പുതിയങ്ങാടി",
      "TID": 61,
      "DID": 11,
      "VID": "1211"
    },
    {
      "E": "Elathur",
      "M": "ഏലത്തൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1212"
    },
    {
      "E": "Thalakkulathur",
      "M": "തലക്കുളത്തൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1213"
    },
    {
      "E": "Kakkodi",
      "M": "കാക്കോടി",
      "TID": 61,
      "DID": 11,
      "VID": "1214"
    },
    {
      "E": "Chelannur",
      "M": "ചെലന്നൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1215"
    },
    {
      "E": "Vengeri",
      "M": "വേങ്ങേരി",
      "TID": 61,
      "DID": 11,
      "VID": "1216"
    },
    {
      "E": "Chevayur",
      "M": "ചേവായൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1217"
    },
    {
      "E": "Chelavoor",
      "M": "ചെലവൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1218"
    },
    {
      "E": "Nellikode",
      "M": "നെല്ലിക്കോട്",
      "TID": 61,
      "DID": 11,
      "VID": "1219"
    },
    {
      "E": "Olavanna",
      "M": "ഒളവണ്ണ",
      "TID": 61,
      "DID": 11,
      "VID": "1220"
    },
    {
      "E": "Kottooli",
      "M": "കോട്ടൂള്ളി",
      "TID": 61,
      "DID": 11,
      "VID": "1221"
    },
    {
      "E": "Pantheerankavu",
      "M": "പന്തീരാങ്കാവ്",
      "TID": 61,
      "DID": 11,
      "VID": "1222"
    },
    {
      "E": "Kuruvattoor",
      "M": "കുരുവട്ടൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1223"
    },
    {
      "E": "Kunnamangalam",
      "M": "കുന്ദമംഗലം",
      "TID": 61,
      "DID": 11,
      "VID": "1224"
    },
    {
      "E": "Chathamangalam",
      "M": "ചാത്തമംഗലം",
      "TID": 61,
      "DID": 11,
      "VID": "1225"
    },
    {
      "E": "Neeleswaram",
      "M": "നീലേശ്വരം",
      "TID": 61,
      "DID": 11,
      "VID": "1226"
    },
    {
      "E": "Kumaranellur",
      "M": "കുമാരനെല്ലൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1229"
    },
    {
      "E": "Kodiyathur",
      "M": "കൊടിയത്തൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1230"
    },
    {
      "E": "Kakkodi",
      "M": "കക്കാട്",
      "TID": 61,
      "DID": 11,
      "VID": "1231"
    },
    {
      "E": "Thazhekode",
      "M": "താഴെക്കോട്",
      "TID": 61,
      "DID": 11,
      "VID": "1232"
    },
    {
      "E": "Poolakkodu",
      "M": "പൂലക്കോട്",
      "TID": 61,
      "DID": 11,
      "VID": "1233"
    },
    {
      "E": "Mavoor",
      "M": "മാവൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1234"
    },
    {
      "E": "Peruvayal",
      "M": "പെരുവയല്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1235"
    },
    {
      "E": "Perumanna",
      "M": "പെരുമണ്ണ",
      "TID": 61,
      "DID": 11,
      "VID": "1236"
    },
    {
      "E": "Kuttikkattoor",
      "M": "കുറ്റിക്കാട്ടൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1238"
    },
    {
      "E": "Kakkur",
      "M": "കാക്കൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1245"
    },
    {
      "E": "Nanminda",
      "M": "നന്മണ്ട",
      "TID": 61,
      "DID": 11,
      "VID": "1246"
    },
    {
      "E": "Madavoor",
      "M": "മടവൂര്‍",
      "TID": 61,
      "DID": 11,
      "VID": "1249"
    },
    {
      "E": "Chemancheri",
      "M": "ചേമന്‍ചേരി",
      "TID": 62,
      "DID": 11,
      "VID": "1253"
    },
    {
      "E": "Chengottukavu",
      "M": "ചേങ്ങോട്ടുകാവ്",
      "TID": 62,
      "DID": 11,
      "VID": "1254"
    },
    {
      "E": "Panthalayani",
      "M": "പന്തലായിനി",
      "TID": 62,
      "DID": 11,
      "VID": "1255"
    },
    {
      "E": "Viyyur",
      "M": "വിയ്യൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1256"
    },
    {
      "E": "Moodadi",
      "M": "മുടാടി",
      "TID": 62,
      "DID": 11,
      "VID": "1257"
    },
    {
      "E": "Thikkodi",
      "M": "തിക്കോടി",
      "TID": 62,
      "DID": 11,
      "VID": "1258"
    },
    {
      "E": "Thuraiyur",
      "M": "തുറയൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1259"
    },
    {
      "E": "Payyoli",
      "M": "പയ്യോളി",
      "TID": 62,
      "DID": 11,
      "VID": "1260"
    },
    {
      "E": "Keezhariyur",
      "M": "കീഴാരിയൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1261"
    },
    {
      "E": "Arikkulam",
      "M": "അരിക്കുളം",
      "TID": 62,
      "DID": 11,
      "VID": "1262"
    },
    {
      "E": "Kozhukkallur",
      "M": "കൊഴുക്കല്ലൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1263"
    },
    {
      "E": "Iringal",
      "M": "ഇരിങ്ങല്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1264"
    },
    {
      "E": "Changarothu",
      "M": "ചങ്ങരോത്തു",
      "TID": 62,
      "DID": 11,
      "VID": "1265"
    },
    {
      "E": "Eravattur",
      "M": "എരവട്ടൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1266"
    },
    {
      "E": "Paleri",
      "M": "പാലേരി",
      "TID": 62,
      "DID": 11,
      "VID": "1267"
    },
    {
      "E": "Koothali",
      "M": "കൂത്താളി",
      "TID": 62,
      "DID": 11,
      "VID": "1268"
    },
    {
      "E": "Cheruvannur",
      "M": "ചെറുവണ്ണൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1269"
    },
    {
      "E": "Perambra",
      "M": "പേരാമ്പ്ര",
      "TID": 62,
      "DID": 11,
      "VID": "1270"
    },
    {
      "E": "Nochad",
      "M": "നൊച്ചാട്",
      "TID": 62,
      "DID": 11,
      "VID": "1271"
    },
    {
      "E": "Meppayur",
      "M": "മേപ്പയ്യൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1272"
    },
    {
      "E": "Chempanoda",
      "M": "ചെമ്പനോട",
      "TID": 62,
      "DID": 11,
      "VID": "1273"
    },
    {
      "E": "Menjanyam",
      "M": "മേഞ്ഞാണ്യം",
      "TID": 62,
      "DID": 11,
      "VID": "1274"
    },
    {
      "E": "Chakkittapara",
      "M": "ചിക്കിട്ടപ്പാറ",
      "TID": 62,
      "DID": 11,
      "VID": "1275"
    },
    {
      "E": "Avitanallur",
      "M": "അവിട്ടനെല്ലൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1276"
    },
    {
      "E": "Kottur",
      "M": "കോട്ടൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1277"
    },
    {
      "E": "Kayanna",
      "M": "കായണ്ണ",
      "TID": 62,
      "DID": 11,
      "VID": "1279"
    },
    {
      "E": "Naduvannur",
      "M": "നടുവണ്ണൂര്‍",
      "TID": 62,
      "DID": 11,
      "VID": "1280"
    },
    {
      "E": "Ulliyeri",
      "M": "ഉള്ളിയേരി",
      "TID": 62,
      "DID": 11,
      "VID": "1281"
    },
    {
      "E": "Atholi",
      "M": "അത്തോളി",
      "TID": 62,
      "DID": 11,
      "VID": "1282"
    },
    {
      "E": "Balussery",
      "M": "ബാലുശ്ശേരി",
      "TID": 62,
      "DID": 11,
      "VID": "1283"
    },
    {
      "E": "Koorachund",
      "M": "കുരാച്ചുണ്ട്",
      "TID": 62,
      "DID": 11,
      "VID": "1288"
    },
    {
      "E": "Azhiyur",
      "M": "അഴിയൂര്‍",
      "TID": 63,
      "DID": 11,
      "VID": "1289"
    },
    {
      "E": "Onchiyam",
      "M": "ഒഞ്ചിയം",
      "TID": 63,
      "DID": 11,
      "VID": "1290"
    },
    {
      "E": "Cherodu",
      "M": "ചേറോട്",
      "TID": 63,
      "DID": 11,
      "VID": "1291"
    },
    {
      "E": "Eramala",
      "M": "ഏറാമല",
      "TID": 63,
      "DID": 11,
      "VID": "1292"
    },
    {
      "E": "Vadakara",
      "M": "വടകര",
      "TID": 63,
      "DID": 11,
      "VID": "1293"
    },
    {
      "E": "Nadakkuthazha",
      "M": "നടക്കുതാഴ",
      "TID": 63,
      "DID": 11,
      "VID": "1294"
    },
    {
      "E": "Maniyur",
      "M": "മണിയൂര്‍",
      "TID": 63,
      "DID": 11,
      "VID": "1295"
    },
    {
      "E": "Kottapalli",
      "M": "കോട്ടപ്പള്ളി",
      "TID": 63,
      "DID": 11,
      "VID": "1296"
    },
    {
      "E": "Thiruvallur",
      "M": "തിരുവല്ലൂര്‍",
      "TID": 63,
      "DID": 11,
      "VID": "1297"
    },
    {
      "E": "Palayadu",
      "M": "പാലയാട്",
      "TID": 63,
      "DID": 11,
      "VID": "1298"
    },
    {
      "E": "Ayancheri",
      "M": "ആയഞ്ചേരി",
      "TID": 63,
      "DID": 11,
      "VID": "1299"
    },
    {
      "E": "Vilyapalli",
      "M": "വില്യാപ്പള്ളി",
      "TID": 63,
      "DID": 11,
      "VID": "1300"
    },
    {
      "E": "Velam",
      "M": "വേളം",
      "TID": 63,
      "DID": 11,
      "VID": "1301"
    },
    {
      "E": "Edacheri",
      "M": "എടച്ചേരി",
      "TID": 63,
      "DID": 11,
      "VID": "1302"
    },
    {
      "E": "Thuneri",
      "M": "തുണേരി",
      "TID": 63,
      "DID": 11,
      "VID": "1303"
    },
    {
      "E": "Chekyadu",
      "M": "ചെക്ക്യാട്",
      "TID": 63,
      "DID": 11,
      "VID": "1304"
    },
    {
      "E": "Vanimel",
      "M": "വാണിമേല്‍",
      "TID": 63,
      "DID": 11,
      "VID": "1305"
    },
    {
      "E": "Valayam",
      "M": "വളയം",
      "TID": 63,
      "DID": 11,
      "VID": "1306"
    },
    {
      "E": "Purameri",
      "M": "പുറമേരി",
      "TID": 63,
      "DID": 11,
      "VID": "1307"
    },
    {
      "E": "Kavilumpara",
      "M": "കാവിലുംപാറ",
      "TID": 63,
      "DID": 11,
      "VID": "1308"
    },
    {
      "E": "Maruthonkara",
      "M": "മരുതോന്‍കര",
      "TID": 63,
      "DID": 11,
      "VID": "1309"
    },
    {
      "E": "Kuttiyadi",
      "M": "കുറ്റിയാടി",
      "TID": 63,
      "DID": 11,
      "VID": "1310"
    },
    {
      "E": "Kayakkodi",
      "M": "കായക്കോടി",
      "TID": 63,
      "DID": 11,
      "VID": "1311"
    },
    {
      "E": "Kunnummal",
      "M": "കുന്നുമ്മല്‍",
      "TID": 63,
      "DID": 11,
      "VID": "1312"
    },
    {
      "E": "Nadapuram",
      "M": "നാദാപുരം",
      "TID": 63,
      "DID": 11,
      "VID": "1313"
    },
    {
      "E": "Narippatta",
      "M": "നരിപ്പറ്റ",
      "TID": 63,
      "DID": 11,
      "VID": "1314"
    },
    {
      "E": "Vilangad",
      "M": "വിലങ്ങാട്",
      "TID": 63,
      "DID": 11,
      "VID": "1315"
    },
    {
      "E": "Thinur",
      "M": "തിനൂര്‍",
      "TID": 63,
      "DID": 11,
      "VID": "1316"
    },
    {
      "E": "Puthuppady",
      "M": "പുതുപ്പാടി",
      "TID": 64,
      "DID": 11,
      "VID": "1247"
    },
    {
      "E": "Engapuzha",
      "M": "ഈങ്ങാപ്പുഴ",
      "TID": 64,
      "DID": 11,
      "VID": "1250"
    },
    {
      "E": "Nellipoyil",
      "M": "നെല്ലിപോയില്‍",
      "TID": 64,
      "DID": 11,
      "VID": "1239"
    },
    {
      "E": "Kodenchery",
      "M": "കോടന്‍ചേരി",
      "TID": 64,
      "DID": 11,
      "VID": "1228"
    },
    {
      "E": "Koodathai",
      "M": "കൂടത്തായ്",
      "TID": 64,
      "DID": 11,
      "VID": "1248"
    },
    {
      "E": "Puthoor",
      "M": "പുതൂര്‍",
      "TID": 64,
      "DID": 11,
      "VID": "1241"
    },
    {
      "E": "Kedavoor",
      "M": "കെടവൂര്‍",
      "TID": 64,
      "DID": 11,
      "VID": "1606"
    },
    {
      "E": "Raroth",
      "M": "രാരോത്ത്",
      "TID": 64,
      "DID": 11,
      "VID": "1244"
    },
    {
      "E": "Koduvally",
      "M": "കൊടുവള്ളി",
      "TID": 64,
      "DID": 11,
      "VID": "1240"
    },
    {
      "E": "Vavadu",
      "M": "വാവാട്",
      "TID": 64,
      "DID": 11,
      "VID": "1251"
    },
    {
      "E": "Kizhakothu",
      "M": "കിഴക്കോത്ത്",
      "TID": 64,
      "DID": 11,
      "VID": "1242"
    },
    {
      "E": "Narikkuni",
      "M": "നരിക്കുനി",
      "TID": 64,
      "DID": 11,
      "VID": "1243"
    },
    {
      "E": "Thiruvambadi",
      "M": "തിരുവമ്പാടി",
      "TID": 64,
      "DID": 11,
      "VID": "1227"
    },
    {
      "E": "Koodaranji",
      "M": "കൂടരഞ്ഞി",
      "TID": 64,
      "DID": 11,
      "VID": "1237"
    },
    {
      "E": "Unnikulam",
      "M": "ഉണ്ണിക്കുളം",
      "TID": 64,
      "DID": 11,
      "VID": "1286"
    },
    {
      "E": "Sivapuram",
      "M": "ശിവപുരം",
      "TID": 64,
      "DID": 11,
      "VID": "1285"
    },
    {
      "E": "Kinalur",
      "M": "കിനാലൂര്‍",
      "TID": 64,
      "DID": 11,
      "VID": "1284"
    },
    {
      "E": "Kanthaladu",
      "M": "കാന്തലാട്",
      "TID": 64,
      "DID": 11,
      "VID": "1287"
    },
    {
      "E": "Panagad",
      "M": "പനങ്ങാട്",
      "TID": 64,
      "DID": 11,
      "VID": "1278"
    },
    {
      "E": "Kattippara",
      "M": "കട്ടിപ്പാറ",
      "TID": 64,
      "DID": 11,
      "VID": "0"
    },
    {
      "E": "Nenmeni",
      "M": "നെന്‍മേനി",
      "TID": 65,
      "DID": 12,
      "VID": "1317"
    },
    {
      "E": "Ambalavayal",
      "M": "അമ്പലവയല്‍",
      "TID": 65,
      "DID": 12,
      "VID": "1318"
    },
    {
      "E": "Sulthan Bathery",
      "M": "സുല്‍ത്താന്‍ ബത്തേരി",
      "TID": 65,
      "DID": 12,
      "VID": "1319"
    },
    {
      "E": "Kidanganad",
      "M": "കിടങ്ങനാട്",
      "TID": 65,
      "DID": 12,
      "VID": "1320"
    },
    {
      "E": "Noolpuzha",
      "M": "നൂല്‍പുഴ",
      "TID": 65,
      "DID": 12,
      "VID": "1321"
    },
    {
      "E": "Thomattuchal",
      "M": "തോമാട്ടുച്ചാല്‍",
      "TID": 65,
      "DID": 12,
      "VID": "1322"
    },
    {
      "E": "Kuppadi",
      "M": "കുപ്പാടി",
      "TID": 65,
      "DID": 12,
      "VID": "1323"
    },
    {
      "E": "Cheeral",
      "M": "ചീരാല്‍",
      "TID": 65,
      "DID": 12,
      "VID": "1324"
    },
    {
      "E": "Purakkadi",
      "M": "പുറക്കാടി",
      "TID": 65,
      "DID": 12,
      "VID": "1325"
    },
    {
      "E": "Poothadi",
      "M": "പൂതാടി",
      "TID": 65,
      "DID": 12,
      "VID": "1326"
    },
    {
      "E": "Pulpalli",
      "M": "പുല്‍പ്പള്ളി",
      "TID": 65,
      "DID": 12,
      "VID": "1327"
    },
    {
      "E": "Padichira",
      "M": "പാടിച്ചിറ",
      "TID": 65,
      "DID": 12,
      "VID": "1328"
    },
    {
      "E": "Irulam",
      "M": "ഇരുളം",
      "TID": 65,
      "DID": 12,
      "VID": "1329"
    },
    {
      "E": "Krishnagiri",
      "M": "കൃഷ്ണഗിരി",
      "TID": 65,
      "DID": 12,
      "VID": "1330"
    },
    {
      "E": "Nadavayal",
      "M": "നടവയല്‍",
      "TID": 65,
      "DID": 12,
      "VID": "1331"
    },
    {
      "E": "Kunnathidavaka",
      "M": "കുന്നത്തിടവക",
      "TID": 66,
      "DID": 12,
      "VID": "1332"
    },
    {
      "E": "Achooranam",
      "M": "അച്ചൂരാനം",
      "TID": 66,
      "DID": 12,
      "VID": "1333"
    },
    {
      "E": "Thariyode",
      "M": "തരിയോട്",
      "TID": 66,
      "DID": 12,
      "VID": "1334"
    },
    {
      "E": "Kottathara",
      "M": "കോട്ടത്തറ",
      "TID": 66,
      "DID": 12,
      "VID": "1335"
    },
    {
      "E": "Kuppadithara",
      "M": "കുപ്പാടിത്തറ",
      "TID": 66,
      "DID": 12,
      "VID": "1336"
    },
    {
      "E": "Padinharethara",
      "M": "പടിഞ്ഞാറത്തറ",
      "TID": 66,
      "DID": 12,
      "VID": "1337"
    },
    {
      "E": "Chundale",
      "M": "ചുണ്ടേല്‍",
      "TID": 66,
      "DID": 12,
      "VID": "1338"
    },
    {
      "E": "Vengappally",
      "M": "വെങ്ങപ്പള്ളി",
      "TID": 66,
      "DID": 12,
      "VID": "1339"
    },
    {
      "E": "Kavumannam",
      "M": "കാവുമ്മന്ദം",
      "TID": 66,
      "DID": 12,
      "VID": "1340"
    },
    {
      "E": "Pozhuthana",
      "M": "പൊഴുതന",
      "TID": 66,
      "DID": 12,
      "VID": "1341"
    },
    {
      "E": "Kaniambetta",
      "M": "കണിയാംപറ്റ",
      "TID": 66,
      "DID": 12,
      "VID": "1342"
    },
    {
      "E": "Muttil North",
      "M": "മുട്ടില്‍ നോര്‍ത്ത്",
      "TID": 66,
      "DID": 12,
      "VID": "1343"
    },
    {
      "E": "Muttil South",
      "M": "മുട്ടില്‍ സൗത്ത്",
      "TID": 66,
      "DID": 12,
      "VID": "1344"
    },
    {
      "E": "Kottappadi",
      "M": "കോട്ടപ്പടി",
      "TID": 66,
      "DID": 12,
      "VID": "1345"
    },
    {
      "E": "Kalpetta",
      "M": "കല്‍പ്പറ്റ",
      "TID": 66,
      "DID": 12,
      "VID": "1346"
    },
    {
      "E": "Muppainad",
      "M": "മുപ്പൈനാട്",
      "TID": 66,
      "DID": 12,
      "VID": "1347"
    },
    {
      "E": "Vellarimala",
      "M": "വെള്ളാരിമല",
      "TID": 66,
      "DID": 12,
      "VID": "1348"
    },
    {
      "E": "Thrikkaipatta",
      "M": "തൃക്കൈപ്പറ്റ",
      "TID": 66,
      "DID": 12,
      "VID": "1349"
    },
    {
      "E": "Anchukunnu",
      "M": "അഞ്ചുകുന്ന്",
      "TID": 67,
      "DID": 12,
      "VID": "1350"
    },
    {
      "E": "Porunnanore",
      "M": "പൊരുന്നന്നൂര്‍",
      "TID": 67,
      "DID": 12,
      "VID": "1351"
    },
    {
      "E": "Nalloornad",
      "M": "നല്ലൂര്‍നാട്",
      "TID": 67,
      "DID": 12,
      "VID": "1352"
    },
    {
      "E": "Mananthavady",
      "M": "മാനന്തവാടി",
      "TID": 67,
      "DID": 12,
      "VID": "1353"
    },
    {
      "E": "Thirunelly",
      "M": "തിരുനെല്ലി",
      "TID": 67,
      "DID": 12,
      "VID": "1354"
    },
    {
      "E": "Thrissilery",
      "M": "തൃശ്ശിലേരി",
      "TID": 67,
      "DID": 12,
      "VID": "1355"
    },
    {
      "E": "Payyampally",
      "M": "പയ്യമ്പള്ളി",
      "TID": 67,
      "DID": 12,
      "VID": "1356"
    },
    {
      "E": "Cherukottur",
      "M": "ചെറുകാട്ടൂര്‍",
      "TID": 67,
      "DID": 12,
      "VID": "1357"
    },
    {
      "E": "Panamaram",
      "M": "പനമരം",
      "TID": 67,
      "DID": 12,
      "VID": "1358"
    },
    {
      "E": "Periya",
      "M": "പേരിയ",
      "TID": 67,
      "DID": 12,
      "VID": "1359"
    },
    {
      "E": "Thondernad",
      "M": "തൊണ്ടര്‍നാട്",
      "TID": 67,
      "DID": 12,
      "VID": "1360"
    },
    {
      "E": "Vellamunda",
      "M": "വെള്ളമുണ്ട",
      "TID": 67,
      "DID": 12,
      "VID": "1361"
    },
    {
      "E": "Thavinhal",
      "M": "തവിഞ്ഞാല്‍",
      "TID": 67,
      "DID": 12,
      "VID": "1362"
    },
    {
      "E": "Edavaka",
      "M": "എടവക",
      "TID": 67,
      "DID": 12,
      "VID": "1363"
    },
    {
      "E": "Valat",
      "M": "വാളാട്",
      "TID": 67,
      "DID": 12,
      "VID": "1364"
    },
    {
      "E": "Kanjirangad",
      "M": "കാഞ്ഞിരങ്ങാട്",
      "TID": 67,
      "DID": 12,
      "VID": "1365"
    },
    {
      "E": "Kadamkunne",
      "M": "കണ്ടംകുന്ന്",
      "TID": 68,
      "DID": 13,
      "VID": "1366"
    },
    {
      "E": "Kuthuparamba",
      "M": "കൂത്തുപറമ്പ്",
      "TID": 68,
      "DID": 13,
      "VID": "1367"
    },
    {
      "E": "Thrippangottur",
      "M": "തൃപ്രങ്ങോട്ടൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1368"
    },
    {
      "E": "Kolavalloor",
      "M": "കൊളവല്ലൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1369"
    },
    {
      "E": "Panoor",
      "M": "പാനൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1370"
    },
    {
      "E": "Puthoor",
      "M": "പുത്തൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1371"
    },
    {
      "E": "Cheruvanchery",
      "M": "ചെറുവാഞ്ചേരി",
      "TID": 68,
      "DID": 13,
      "VID": "1372"
    },
    {
      "E": "Manantheri",
      "M": "മാനന്തേരി",
      "TID": 68,
      "DID": 13,
      "VID": "1373"
    },
    {
      "E": "Kannavam",
      "M": "കണ്ണവം",
      "TID": 68,
      "DID": 13,
      "VID": "1374"
    },
    {
      "E": "Kolayad",
      "M": "കൊളയാട്",
      "TID": 68,
      "DID": 13,
      "VID": "1375"
    },
    {
      "E": "Tholambra",
      "M": "തോലംപ്ര",
      "TID": 68,
      "DID": 13,
      "VID": "1376"
    },
    {
      "E": "Vekkalam",
      "M": "വേക്കളം",
      "TID": 68,
      "DID": 13,
      "VID": "1377"
    },
    {
      "E": "Paatyam",
      "M": "പാട്യം",
      "TID": 68,
      "DID": 13,
      "VID": "1380"
    },
    {
      "E": "Mokari",
      "M": "മൊകേരി",
      "TID": 68,
      "DID": 13,
      "VID": "1381"
    },
    {
      "E": "Panniyannur",
      "M": "പന്ന്യന്നൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1382"
    },
    {
      "E": "Thiruvangad",
      "M": "തിരുവങ്ങാട്",
      "TID": 68,
      "DID": 13,
      "VID": "1386"
    },
    {
      "E": "Thalassery",
      "M": "തലശ്ശേരി",
      "TID": 68,
      "DID": 13,
      "VID": "1387"
    },
    {
      "E": "Kottayam",
      "M": "കോട്ടയം",
      "TID": 68,
      "DID": 13,
      "VID": "1388"
    },
    {
      "E": "Pathiriyad",
      "M": "പാതിരിയാട്",
      "TID": 68,
      "DID": 13,
      "VID": "1389"
    },
    {
      "E": "Eruvatty",
      "M": "എരുവട്ടി",
      "TID": 68,
      "DID": 13,
      "VID": "1390"
    },
    {
      "E": "Eranjoli",
      "M": "എരഞ്ഞോളി",
      "TID": 68,
      "DID": 13,
      "VID": "1391"
    },
    {
      "E": "Pinarayi",
      "M": "പിണറായി",
      "TID": 68,
      "DID": 13,
      "VID": "1392"
    },
    {
      "E": "Kodiyeri",
      "M": "കോടിയേരി",
      "TID": 68,
      "DID": 13,
      "VID": "1393"
    },
    {
      "E": "Dharmadam",
      "M": "ധര്‍മ്മടം",
      "TID": 68,
      "DID": 13,
      "VID": "1394"
    },
    {
      "E": "Kathiroor",
      "M": "കതീരൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1395"
    },
    {
      "E": "Chokli",
      "M": "ചൊക്ലി",
      "TID": 68,
      "DID": 13,
      "VID": "1396"
    },
    {
      "E": "Peringathur",
      "M": "പെരിങ്ങത്തൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1397"
    },
    {
      "E": "Koodali",
      "M": "കൂടാളി",
      "TID": 68,
      "DID": 13,
      "VID": "1398"
    },
    {
      "E": "Keezhallur",
      "M": "കീഴല്ലൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1399"
    },
    {
      "E": "Sivapuram",
      "M": "ശിവപുരം",
      "TID": 68,
      "DID": 13,
      "VID": "1407"
    },
    {
      "E": "Paduvilayi",
      "M": "പടുവിലായി",
      "TID": 68,
      "DID": 13,
      "VID": "1409"
    },
    {
      "E": "Mangattidam",
      "M": "മങ്ങാട്ടിടം",
      "TID": 68,
      "DID": 13,
      "VID": "1410"
    },
    {
      "E": "Pattannur",
      "M": "പട്ടാന്നൂര്‍",
      "TID": 68,
      "DID": 13,
      "VID": "1411"
    },
    {
      "E": "Peringalam",
      "M": "പെരിങ്ങളം",
      "TID": 68,
      "DID": 13,
      "VID": "0"
    },
    {
      "E": "Kannur-1",
      "M": "കണ്ണൂര്‍ 1",
      "TID": 69,
      "DID": 13,
      "VID": "1414"
    },
    {
      "E": "Kannur-1",
      "M": "കണ്ണൂര്‍ 2",
      "TID": 69,
      "DID": 13,
      "VID": "1415"
    },
    {
      "E": "Azhikode-south",
      "M": "അഴിക്കോട് സൗത്ത്",
      "TID": 69,
      "DID": 13,
      "VID": "1416"
    },
    {
      "E": "Valapattanam",
      "M": "വളപ്പട്ടണം",
      "TID": 69,
      "DID": 13,
      "VID": "1417"
    },
    {
      "E": "Chirakkal",
      "M": "ചിറക്കല്‍",
      "TID": 69,
      "DID": 13,
      "VID": "1418"
    },
    {
      "E": "Puzhathi",
      "M": "പുഴാതി",
      "TID": 69,
      "DID": 13,
      "VID": "1419"
    },
    {
      "E": "Pallikunnu",
      "M": "പള്ളിക്കുന്ന്",
      "TID": 69,
      "DID": 13,
      "VID": "1420"
    },
    {
      "E": "Elayavoor",
      "M": "എളയാവൂര്‍",
      "TID": 69,
      "DID": 13,
      "VID": "1421"
    },
    {
      "E": "Munderi",
      "M": "മുണ്ടേരി",
      "TID": 69,
      "DID": 13,
      "VID": "1422"
    },
    {
      "E": "Kanhirode",
      "M": "കാഞ്ഞിരോട്",
      "TID": 69,
      "DID": 13,
      "VID": "1423"
    },
    {
      "E": "Anjarakandy",
      "M": "അഞ്ചരക്കണ്ടി",
      "TID": 69,
      "DID": 13,
      "VID": "1424"
    },
    {
      "E": "Eriveri",
      "M": "ഇരിവേരി",
      "TID": 69,
      "DID": 13,
      "VID": "1425"
    },
    {
      "E": "Chelora",
      "M": "ചേലോറ",
      "TID": 69,
      "DID": 13,
      "VID": "1426"
    },
    {
      "E": "Kadambur",
      "M": "കടമ്പൂര്‍",
      "TID": 69,
      "DID": 13,
      "VID": "1427"
    },
    {
      "E": "Chembilode",
      "M": "ചെമ്പിലോട്",
      "TID": 69,
      "DID": 13,
      "VID": "1428"
    },
    {
      "E": "Muzhappilangad",
      "M": "മുഴുപ്പിലങ്ങാട്",
      "TID": 69,
      "DID": 13,
      "VID": "1429"
    },
    {
      "E": "Azhikode-north",
      "M": "അഴിക്കോട് നോര്‍ത്ത്",
      "TID": 69,
      "DID": 13,
      "VID": "1430"
    },
    {
      "E": "Edakkad",
      "M": "എടക്കാട്",
      "TID": 69,
      "DID": 13,
      "VID": "1431"
    },
    {
      "E": "Makreri",
      "M": "മാക്രേരി",
      "TID": 69,
      "DID": 13,
      "VID": "1432"
    },
    {
      "E": "Maavilai",
      "M": "മാവിലായി",
      "TID": 69,
      "DID": 13,
      "VID": "1433"
    },
    {
      "E": "Panapuzha",
      "M": "പാണപ്പുഴ",
      "TID": 69,
      "DID": 13,
      "VID": "1434"
    },
    {
      "E": "Cheruthazham",
      "M": "ചെറുതാഴം",
      "TID": 69,
      "DID": 13,
      "VID": "1435"
    },
    {
      "E": "Kadannappally",
      "M": "കടന്നപ്പള്ളി",
      "TID": 69,
      "DID": 13,
      "VID": "1436"
    },
    {
      "E": "Kunhimangalam",
      "M": "കുഞ്ഞിമംഗലം",
      "TID": 69,
      "DID": 13,
      "VID": "1437"
    },
    {
      "E": "Madai",
      "M": "മാടായി",
      "TID": 69,
      "DID": 13,
      "VID": "1438"
    },
    {
      "E": "Matool",
      "M": "മാട്ടൂല്‍",
      "TID": 69,
      "DID": 13,
      "VID": "1439"
    },
    {
      "E": "Ezhome",
      "M": "ഏഴോം",
      "TID": 69,
      "DID": 13,
      "VID": "1440"
    },
    {
      "E": "Cherukunnu",
      "M": "ചെറുകുന്ന്",
      "TID": 69,
      "DID": 13,
      "VID": "1441"
    },
    {
      "E": "Kannapuram",
      "M": "കണ്ണപുരം",
      "TID": 69,
      "DID": 13,
      "VID": "1442"
    },
    {
      "E": "Pappinisseri",
      "M": "പാപ്പിനിശ്ശേരി",
      "TID": 69,
      "DID": 13,
      "VID": "1443"
    },
    {
      "E": "Narath",
      "M": "നാറാത്ത്",
      "TID": 69,
      "DID": 13,
      "VID": "1444"
    },
    {
      "E": "Kalliasseri",
      "M": "കല്ല്യാശ്ശേരി",
      "TID": 69,
      "DID": 13,
      "VID": "1445"
    },
    {
      "E": "Kannadiparamba",
      "M": "കണ്ണാടിപറമ്പ്",
      "TID": 69,
      "DID": 13,
      "VID": "1446"
    },
    {
      "E": "Valiyannur",
      "M": "വലിയന്നൂര്‍",
      "TID": 69,
      "DID": 13,
      "VID": "1447"
    },
    {
      "E": "Payyanur",
      "M": "പയ്യന്നൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1448"
    },
    {
      "E": "Karivellur",
      "M": "കരിവള്ളൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1449"
    },
    {
      "E": "Peralam",
      "M": "പെരളം",
      "TID": 70,
      "DID": 13,
      "VID": "1450"
    },
    {
      "E": "Alappadamba",
      "M": "ആലപ്പടമ്പ്",
      "TID": 70,
      "DID": 13,
      "VID": "1451"
    },
    {
      "E": "Peringome",
      "M": "പെരിങ്ങോം",
      "TID": 70,
      "DID": 13,
      "VID": "1452"
    },
    {
      "E": "Vayakkara",
      "M": "വയക്കര",
      "TID": 70,
      "DID": 13,
      "VID": "1453"
    },
    {
      "E": "Thirumeni",
      "M": "തിരുമേനി",
      "TID": 70,
      "DID": 13,
      "VID": "1454"
    },
    {
      "E": "Kuttur",
      "M": "കുറ്റൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1455"
    },
    {
      "E": "Eramam",
      "M": "എരമം",
      "TID": 70,
      "DID": 13,
      "VID": "1456"
    },
    {
      "E": "Kangol",
      "M": "കാങ്കോല്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1457"
    },
    {
      "E": "Korome",
      "M": "കോറോം",
      "TID": 70,
      "DID": 13,
      "VID": "1458"
    },
    {
      "E": "Vellur",
      "M": "വെള്ളൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1459"
    },
    {
      "E": "Ramanthali",
      "M": "രാമന്തളി",
      "TID": 70,
      "DID": 13,
      "VID": "1460"
    },
    {
      "E": "Vellora",
      "M": "വെള്ളോറ",
      "TID": 70,
      "DID": 13,
      "VID": "1461"
    },
    {
      "E": "Perinthatta",
      "M": "പെരിന്തട്ട",
      "TID": 70,
      "DID": 13,
      "VID": "1462"
    },
    {
      "E": "Pulingome",
      "M": "പുളിങ്ങോം",
      "TID": 70,
      "DID": 13,
      "VID": "1463"
    },
    {
      "E": "Chuzhali",
      "M": "ചുഴലി",
      "TID": 70,
      "DID": 13,
      "VID": "1464"
    },
    {
      "E": "Panniyur",
      "M": "പന്നിയൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1465"
    },
    {
      "E": "Kutyari",
      "M": "കുറ്റ്യേരി",
      "TID": 70,
      "DID": 13,
      "VID": "1466"
    },
    {
      "E": "Taliparamba",
      "M": "തളിപറമ്പ്",
      "TID": 70,
      "DID": 13,
      "VID": "1467"
    },
    {
      "E": "Pattuvam",
      "M": "പട്ടുവം",
      "TID": 70,
      "DID": 13,
      "VID": "1468"
    },
    {
      "E": "Morazha",
      "M": "മോറാഴ",
      "TID": 70,
      "DID": 13,
      "VID": "1469"
    },
    {
      "E": "Kurumathoor",
      "M": "കുറുമാത്തൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1470"
    },
    {
      "E": "Chengalai",
      "M": "ചെങ്ങളായി",
      "TID": 70,
      "DID": 13,
      "VID": "1471"
    },
    {
      "E": "New naduvil",
      "M": "ന്യൂ നടുവില്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1472"
    },
    {
      "E": "Pariyaram",
      "M": "പരിയാരം",
      "TID": 70,
      "DID": 13,
      "VID": "1473"
    },
    {
      "E": "Kuveri",
      "M": "കൂവേരി",
      "TID": 70,
      "DID": 13,
      "VID": "1474"
    },
    {
      "E": "Vellad",
      "M": "വെള്ളാട്",
      "TID": 70,
      "DID": 13,
      "VID": "1475"
    },
    {
      "E": "Alakode",
      "M": "ആലക്കോട്",
      "TID": 70,
      "DID": 13,
      "VID": "1476"
    },
    {
      "E": "Thimiri",
      "M": "തിമിരി",
      "TID": 70,
      "DID": 13,
      "VID": "1477"
    },
    {
      "E": "Anthoor",
      "M": "ആന്തൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1478"
    },
    {
      "E": "Kolachery",
      "M": "കൊളച്ചേരി",
      "TID": 70,
      "DID": 13,
      "VID": "1479"
    },
    {
      "E": "Cheleri",
      "M": "ചേലേരി",
      "TID": 70,
      "DID": 13,
      "VID": "1480"
    },
    {
      "E": "Maaniyur",
      "M": "മാണിയൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1481"
    },
    {
      "E": "Mayyil",
      "M": "മയ്യില്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1482"
    },
    {
      "E": "Kuttiattoor",
      "M": "കുറ്റ്യാട്ടൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1483"
    },
    {
      "E": "Malapattam",
      "M": "മലപ്പട്ടം",
      "TID": 70,
      "DID": 13,
      "VID": "1484"
    },
    {
      "E": "Sreekandapuram",
      "M": "ശ്രീകണ്ഠപുരം",
      "TID": 70,
      "DID": 13,
      "VID": "1485"
    },
    {
      "E": "Irikoor",
      "M": "ഇരിക്കൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1486"
    },
    {
      "E": "Payyavoor",
      "M": "പയ്യാവൂര്‍",
      "TID": 70,
      "DID": 13,
      "VID": "1489"
    },
    {
      "E": "Kayaralam",
      "M": "കയരളം",
      "TID": 70,
      "DID": 13,
      "VID": "1492"
    },
    {
      "E": "Eruvasseri",
      "M": "എരുവശ്ശേരി",
      "TID": 70,
      "DID": 13,
      "VID": "1493"
    },
    {
      "E": "Nediyanga",
      "M": "നിടിയങ്ങ",
      "TID": 70,
      "DID": 13,
      "VID": "1494"
    },
    {
      "E": "Udayagiri",
      "M": "ഉദയഗിരി",
      "TID": 70,
      "DID": 13,
      "VID": "0"
    },
    {
      "E": "Vilamana",
      "M": "വിളമന",
      "TID": 71,
      "DID": 13,
      "VID": "1588"
    },
    {
      "E": "Payam",
      "M": "പായം",
      "TID": 71,
      "DID": 13,
      "VID": "1589"
    },
    {
      "E": "Ayyankunnu",
      "M": "അയ്യന്‍കുന്ന്",
      "TID": 71,
      "DID": 13,
      "VID": "1586"
    },
    {
      "E": "Aralam",
      "M": "ആറളം",
      "TID": 71,
      "DID": 13,
      "VID": "1587"
    },
    {
      "E": "Keezhur",
      "M": "കീഴുര്‍",
      "TID": 71,
      "DID": 13,
      "VID": "1594"
    },
    {
      "E": "Chavassery",
      "M": "ചാവശ്ശേരി",
      "TID": 71,
      "DID": 13,
      "VID": "1602"
    },
    {
      "E": "Thillenkery",
      "M": "തില്ലങ്കേരി",
      "TID": 71,
      "DID": 13,
      "VID": "1595"
    },
    {
      "E": "Muzhakkunnu",
      "M": "മുഴക്കുന്ന്",
      "TID": 71,
      "DID": 13,
      "VID": "1596"
    },
    {
      "E": "Vellarvally",
      "M": "വെള്ളാര്‍വള്ളി",
      "TID": 71,
      "DID": 13,
      "VID": "1601"
    },
    {
      "E": "Manathana",
      "M": "മണത്തണ",
      "TID": 71,
      "DID": 13,
      "VID": "1597"
    },
    {
      "E": "Kanichar",
      "M": "കണിച്ചാര്‍",
      "TID": 71,
      "DID": 13,
      "VID": "1599"
    },
    {
      "E": "Kelakam",
      "M": "കേളകം",
      "TID": 71,
      "DID": 13,
      "VID": "1598"
    },
    {
      "E": "Kottiyoor",
      "M": "കൊട്ടീയൂര്‍",
      "TID": 71,
      "DID": 13,
      "VID": "1600"
    },
    {
      "E": "Padiyoor",
      "M": "പടിയൂര്‍",
      "TID": 71,
      "DID": 13,
      "VID": "1592"
    },
    {
      "E": "Kalyattu",
      "M": "കല്ല്യാട്ട്",
      "TID": 71,
      "DID": 13,
      "VID": "1593"
    },
    {
      "E": "Nuchyadu",
      "M": "നുച്യാട്",
      "TID": 71,
      "DID": 13,
      "VID": "1590"
    },
    {
      "E": "Vayathur",
      "M": "വയത്തൂര്‍",
      "TID": 71,
      "DID": 13,
      "VID": "1591"
    },
    {
      "E": "Pazhassi",
      "M": "പഴശ്ശി",
      "TID": 71,
      "DID": 13,
      "VID": "1604"
    },
    {
      "E": "Kolari",
      "M": "കോളാരി",
      "TID": 71,
      "DID": 13,
      "VID": "1603"
    },
    {
      "E": "Udma",
      "M": "ഉദുമ",
      "TID": 72,
      "DID": 14,
      "VID": "1495"
    },
    {
      "E": "Panayal",
      "M": "പനയാല്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1496"
    },
    {
      "E": "Pallikkara",
      "M": "പള്ളിക്കര",
      "TID": 72,
      "DID": 14,
      "VID": "1497"
    },
    {
      "E": "Keekan",
      "M": "കീക്കാൻ",
      "TID": 72,
      "DID": 14,
      "VID": "1625"
    },
    {
      "E": "Chithari",
      "M": "ചിത്താരി",
      "TID": 72,
      "DID": 14,
      "VID": "1498"
    },
    {
      "E": "Ajanur",
      "M": "അജാനൂര്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1499"
    },
    {
      "E": "Pullur",
      "M": "പുല്ലൂര്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1500"
    },
    {
      "E": "Periya",
      "M": "പെരിയ",
      "TID": 72,
      "DID": 14,
      "VID": "1501"
    },
    {
      "E": "Madikai",
      "M": "മടിക്കൈ",
      "TID": 72,
      "DID": 14,
      "VID": "1502"
    },
    {
      "E": "Hosdurg",
      "M": "ഹോസ്ദുര്‍ഗ്",
      "TID": 72,
      "DID": 14,
      "VID": "1504"
    },
    {
      "E": "Kanhangad",
      "M": "കാഞ്ഞങ്ങാട്",
      "TID": 72,
      "DID": 14,
      "VID": "1507"
    },
    {
      "E": "Ambalathara",
      "M": "അമ്പലത്തറ",
      "TID": 72,
      "DID": 14,
      "VID": "1511"
    },
    {
      "E": "Nileshwar",
      "M": "നീലേശ്വരം",
      "TID": 72,
      "DID": 14,
      "VID": "1512"
    },
    {
      "E": "Cheruvathur",
      "M": "ചെറുവത്തൂര്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1516"
    },
    {
      "E": "Kilayikode",
      "M": "ക്ലായിക്കോട്",
      "TID": 72,
      "DID": 14,
      "VID": "1626"
    },
    {
      "E": "Thimiri",
      "M": "തിമിരി",
      "TID": 72,
      "DID": 14,
      "VID": "1629"
    },
    {
      "E": "Pilicode",
      "M": "പിലിക്കോട്",
      "TID": 72,
      "DID": 14,
      "VID": "1518"
    },
    {
      "E": "Maniyat",
      "M": "മാണിയാട്ട്",
      "TID": 72,
      "DID": 14,
      "VID": "1627"
    },
    {
      "E": "Cheemeni",
      "M": "ചീമേനി",
      "TID": 72,
      "DID": 14,
      "VID": "1623"
    },
    {
      "E": "Balla",
      "M": "ബല്ല",
      "TID": 72,
      "DID": 14,
      "VID": "1622"
    },
    {
      "E": "Puthukkai",
      "M": "പുതുക്കൈ",
      "TID": 72,
      "DID": 14,
      "VID": "1574"
    },
    {
      "E": "Kayyur",
      "M": "കയ്യൂര്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1624"
    },
    {
      "E": "Udinoor",
      "M": "ഉദിനൂര്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1630"
    },
    {
      "E": "Bare",
      "M": "ബാര",
      "TID": 72,
      "DID": 14,
      "VID": "1621"
    },
    {
      "E": "Pallikkara",
      "M": "പള്ളിക്കര II",
      "TID": 72,
      "DID": 14,
      "VID": "1628"
    },
    {
      "E": "North thrikkaripur",
      "M": "വടക്കേ തൃക്കരിപ്പൂര്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1520"
    },
    {
      "E": "South thrikkaripur",
      "M": "തെക്കേ തൃക്കരിപ്പൂര്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1521"
    },
    {
      "E": "Padne",
      "M": "പടന്ന",
      "TID": 72,
      "DID": 14,
      "VID": "1522"
    },
    {
      "E": "Kodakkad",
      "M": "കൊടക്കാട്",
      "TID": 72,
      "DID": 14,
      "VID": "1523"
    },
    {
      "E": "Perole",
      "M": "പേരോല്‍",
      "TID": 72,
      "DID": 14,
      "VID": "1524"
    },
    {
      "E": "Valiyaparambu",
      "M": "വലിയപറമ്പ്",
      "TID": 72,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Madhur",
      "M": "മധൂര്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1545"
    },
    {
      "E": "Patla",
      "M": "പട്ള",
      "TID": 73,
      "DID": 14,
      "VID": "1638"
    },
    {
      "E": "Bela",
      "M": "ബേള",
      "TID": 73,
      "DID": 14,
      "VID": "1546"
    },
    {
      "E": "Nirchal",
      "M": "നീര്‍ച്ചാല്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1548"
    },
    {
      "E": "Badiyadka",
      "M": "ബദിയഡുക്ക",
      "TID": 73,
      "DID": 14,
      "VID": "1549"
    },
    {
      "E": "Nettanige",
      "M": "നെട്ടണിഗെ",
      "TID": 73,
      "DID": 14,
      "VID": "1551"
    },
    {
      "E": "Bellur",
      "M": "ബെള്ളൂര്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1632"
    },
    {
      "E": "Kumbadaje",
      "M": "കുംബടാജേ",
      "TID": 73,
      "DID": 14,
      "VID": "1552"
    },
    {
      "E": "Ubrangala",
      "M": "ഉബ്രംങ്കള",
      "TID": 73,
      "DID": 14,
      "VID": "1642"
    },
    {
      "E": "Kudlu",
      "M": "കുഡ്ലു",
      "TID": 73,
      "DID": 14,
      "VID": "1553"
    },
    {
      "E": "Mogral puthur",
      "M": "മോഗ്രാല്‍ പുത്തൂര്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1635"
    },
    {
      "E": "Shiribagilu",
      "M": "ഷിറി ബാഗിലു",
      "TID": 73,
      "DID": 14,
      "VID": "1640"
    },
    {
      "E": "Pady",
      "M": "പാടി",
      "TID": 73,
      "DID": 14,
      "VID": "1554"
    },
    {
      "E": "Nekraje",
      "M": "നെക്രാജെ",
      "TID": 73,
      "DID": 14,
      "VID": "1637"
    },
    {
      "E": "Chengala",
      "M": "ചെങ്കള",
      "TID": 73,
      "DID": 14,
      "VID": "1555"
    },
    {
      "E": "Muttathody",
      "M": "മുട്ടത്തൊടി",
      "TID": 73,
      "DID": 14,
      "VID": "1636"
    },
    {
      "E": "Kalnadu",
      "M": "കളനാട്",
      "TID": 73,
      "DID": 14,
      "VID": "1556"
    },
    {
      "E": "Chemnad",
      "M": "ചെമ്മനാട്",
      "TID": 73,
      "DID": 14,
      "VID": "1633"
    },
    {
      "E": "Thekkil",
      "M": "തെക്കില്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1557"
    },
    {
      "E": "Perumbala",
      "M": "പെരുമ്പള",
      "TID": 73,
      "DID": 14,
      "VID": "1639"
    },
    {
      "E": "Kolathur",
      "M": "കൊളത്തൂര്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1558"
    },
    {
      "E": "Muliyar",
      "M": "മൂളിയാര്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1559"
    },
    {
      "E": "Badiyadka",
      "M": "ബേഡഡുക്ക",
      "TID": 73,
      "DID": 14,
      "VID": "1560"
    },
    {
      "E": "Kuttikole",
      "M": "കുറ്റിക്കോല്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1561"
    },
    {
      "E": "Bandadka",
      "M": "ബന്തടുക്ക",
      "TID": 73,
      "DID": 14,
      "VID": "1562"
    },
    {
      "E": "Adoor",
      "M": "അഡൂര്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1563"
    },
    {
      "E": "Delampady",
      "M": "ദേലംപാടി",
      "TID": 73,
      "DID": 14,
      "VID": "1564"
    },
    {
      "E": "Kasargod",
      "M": "കാസറഗോഡ്",
      "TID": 73,
      "DID": 14,
      "VID": "1565"
    },
    {
      "E": "Adukath bayal",
      "M": "അടുക്കത്ത് ബയല്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1631"
    },
    {
      "E": "Thalankara",
      "M": "തളങ്കര",
      "TID": 73,
      "DID": 14,
      "VID": "1641"
    },
    {
      "E": "Adhur",
      "M": "ആദൂര്‍",
      "TID": 73,
      "DID": 14,
      "VID": "1567"
    },
    {
      "E": "Karadka",
      "M": "കാറടുക്ക",
      "TID": 73,
      "DID": 14,
      "VID": "1634"
    },
    {
      "E": "Munnad",
      "M": "മൂന്നാട്",
      "TID": 73,
      "DID": 14,
      "VID": "1568"
    },
    {
      "E": "Karivedakam",
      "M": "കരിവേടകം",
      "TID": 73,
      "DID": 14,
      "VID": "1569"
    },
    {
      "E": "Kunjathoor",
      "M": "കുഞ്ചത്തൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "1529"
    },
    {
      "E": "Udyavar",
      "M": "ഉദ്യാവര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Vorkady",
      "M": "വോര്‍ക്കാടി",
      "TID": 74,
      "DID": 14,
      "VID": "1530"
    },
    {
      "E": "Pavoor",
      "M": "പാവൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": " kodlamogaru",
      "M": "കൊടലമൊഗറു",
      "TID": 74,
      "DID": 14,
      "VID": "1531"
    },
    {
      "E": "Pathur",
      "M": "പാത്തൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Meenja",
      "M": "മീഞ്ച",
      "TID": 74,
      "DID": 14,
      "VID": "1532"
    },
    {
      "E": "Kaliyur",
      "M": "കളിയൂർ",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Koliyoor",
      "M": "കോളിയൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Thalakkala",
      "M": "തലക്കള",
      "TID": 74,
      "DID": 14,
      "VID": "1566"
    },
    {
      "E": "Kadambar",
      "M": "കടമ്പാര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "1533"
    },
    {
      "E": "Kuloor",
      "M": "കുളൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Majibayal",
      "M": "മജിബയല്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Moodambail",
      "M": "മൂഡമബയല്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Hosabettu",
      "M": "ഹൊസബെട്ടു",
      "TID": 74,
      "DID": 14,
      "VID": "1534"
    },
    {
      "E": "Bankara manjeswaram",
      "M": "ബങ്കര മഞ്ചേശ്വരം",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Badje",
      "M": "ബാഡജെ",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Uppala",
      "M": "ഉപ്പള",
      "TID": 74,
      "DID": 14,
      "VID": "1535"
    },
    {
      "E": "Kodibail",
      "M": "കോഡിബയല്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Mangalpady",
      "M": "മംഗല്‍പാടി",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Mulinja",
      "M": "മുളിഞ്ചെ",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Ichilamkod",
      "M": "ഇച്ചിലംങ്കോട്",
      "TID": 74,
      "DID": 14,
      "VID": "1536"
    },
    {
      "E": "Bekur",
      "M": "ബേക്കൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Heroor",
      "M": "ഹേരൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Shiriya",
      "M": "ഷിറിയ",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Kubanoor",
      "M": "കുബണൂര",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Kayyar",
      "M": "കയ്യാര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "1537"
    },
    {
      "E": "Kudal merkala",
      "M": "കൂടാല്‍ മേര്‍ക്കള",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Paivalike",
      "M": "പൈവളിക",
      "TID": 74,
      "DID": 14,
      "VID": "1538"
    },
    {
      "E": "Chippar",
      "M": "ചിപ്പാർ",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Bayar",
      "M": "ബായാര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "1539"
    },
    {
      "E": "Enmakaje",
      "M": "എണ്‍മകജെ",
      "TID": 74,
      "DID": 14,
      "VID": "1540"
    },
    {
      "E": "Sheni",
      "M": "ഷേണി",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Edanad",
      "M": "എടനാട്",
      "TID": 74,
      "DID": 14,
      "VID": "1542"
    },
    {
      "E": "Kannur",
      "M": "കണ്ണൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Puthige",
      "M": "പുത്തിഗെ",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Koippady",
      "M": "കോയിപ്പാടി",
      "TID": 74,
      "DID": 14,
      "VID": "1543"
    },
    {
      "E": "Ichilampady",
      "M": "ഇച്ചിലംപാടി",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Mogral",
      "M": "മൊഗ്രാല്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Badoor",
      "M": "ബാഡൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "1544"
    },
    {
      "E": "Angadimuguru",
      "M": "അംഗഡിമുഗറു",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Mugu",
      "M": "മുഗു",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Bambarana",
      "M": "ബംബ്രാണ",
      "TID": 74,
      "DID": 14,
      "VID": "1547"
    },
    {
      "E": "Aarikkady",
      "M": "ആരിക്കാടി",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Kidoor",
      "M": "കിദൂര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Ujarulvar",
      "M": "ഉജാറുള്‍വാര്‍",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Pandre",
      "M": "പാഡ്രെ",
      "TID": 74,
      "DID": 14,
      "VID": "1550"
    },
    {
      "E": "Kattukukke",
      "M": "കാട്ടുകുക്കെ",
      "TID": 74,
      "DID": 14,
      "VID": "0"
    },
    {
      "E": "Balal",
      "M": "ബെളാല്‍",
      "TID": 75,
      "DID": 14,
      "VID": "1510"
    },
    {
      "E": "Beemanady",
      "M": "ഭീമനടി",
      "TID": 75,
      "DID": 14,
      "VID": "1526"
    },
    {
      "E": "Belur",
      "M": "ബേളൂര്‍",
      "TID": 75,
      "DID": 14,
      "VID": "1503"
    },
    {
      "E": "Cheemeni 2",
      "M": "ചീമേനി 2",
      "TID": 75,
      "DID": 14,
      "VID": "1519"
    },
    {
      "E": "Karinthalam",
      "M": "കരിന്തളം",
      "TID": 75,
      "DID": 14,
      "VID": "1514"
    },
    {
      "E": "Chittarikkal",
      "M": "ചിറ്റാരിക്കാല്‍",
      "TID": 75,
      "DID": 14,
      "VID": "1527"
    },
    {
      "E": "Kinanur",
      "M": "കിനാനൂര്‍",
      "TID": 75,
      "DID": 14,
      "VID": "1513"
    },
    {
      "E": "Kodoth",
      "M": "കോടോത്ത്",
      "TID": 75,
      "DID": 14,
      "VID": "1605"
    },
    {
      "E": "Maloth",
      "M": "മാലോത്ത്",
      "TID": 75,
      "DID": 14,
      "VID": "1506"
    },
    {
      "E": "Palavayal",
      "M": "പാലാവയല്‍",
      "TID": 75,
      "DID": 14,
      "VID": "1528"
    },
    {
      "E": "Parappa",
      "M": "പരപ്പ",
      "TID": 75,
      "DID": 14,
      "VID": "1525"
    },
    {
      "E": "Thayannur",
      "M": "തായനൂര്‍",
      "TID": 75,
      "DID": 14,
      "VID": "1508"
    },
    {
      "E": "West eleri",
      "M": "വെസ്റ്റേളേരി",
      "TID": 75,
      "DID": 14,
      "VID": "1515"
    },
    {
      "E": "Kallar",
      "M": "കള്ളാര്‍",
      "TID": 75,
      "DID": 14,
      "VID": "1509"
    },
    {
      "E": "Panathady",
      "M": "പനത്തടി",
      "TID": 75,
      "DID": 14,
      "VID": "1505"
    },
    {
      "E": "Poonjar",
      "M": "പൂഞ്ഞാര്‍",
      "TID": 28,
      "DID": 5,
      "VID": "0"
    },
    {
      "E": "New Mahe",
      "M": "ന്യൂ മാഹി",
      "TID": 68,
      "DID": 13,
      "VID": null
    },
    {
      "E": "Kannan Devan Hills Devikulam",
      "M": "കണ്ണന്‍ദേവന്‍ ഹില്‍സ്  ദേവികുള൦",
      "TID": 33,
      "DID": 6,
      "VID": null
    },
    {
      "E": "Kannan Devan Hills Thalayar",
      "M": "കണ്ണന്‍ദേവന്‍ ഹില്‍സ്  തലയാർ",
      "TID": 33,
      "DID": 6,
      "VID": null
    },
    {
      "E": "Kannan Devan Hills Sevenmala",
      "M": "കണ്ണന്‍ദേവന്‍ ഹില്‍സ്  സെവൺമല",
      "TID": 33,
      "DID": 6,
      "VID": null
    },
    {
      "E": "Kannan Devan Hills Edamalakudy",
      "M": "കണ്ണന്‍ദേവന്‍ ഹില്‍സ് ഇടമലകുടി",
      "TID": 33,
      "DID": 6,
      "VID": null
    },
    {
      "E": "Kannan Devan Hills Mattupetty",
      "M": "കണ്ണന്‍ദേവന്‍ ഹില്‍സ്  മാട്ടുപ്പെട്ടി",
      "TID": 33,
      "DID": 6,
      "VID": null
    }
   ];
  var taluks = [
    {
      "E": "Thiruvananthapuram",
      "M": "തിരുവനന്തപുരം",
      "DID": 1,
      "TID": 3
    },
    {
      "E": "Neyyattinkara",
      "M": "നെയ്യാറ്റിന്‍കര",
      "DID": 1,
      "TID": 1
    },
    {
      "E": "Nedumangad",
      "M": "നെടുമങ്ങാട്",
      "DID": 1,
      "TID": 2
    },
    {
      "E": "Chirayinkeezhu",
      "M": "ചിറയിന്‍കീഴ്",
      "DID": 1,
      "TID": 4
    },
    {
      "E": "Kattakada",
      "M": "കാട്ടാക്കട",
      "DID": 1,
      "TID": 64
    },
    {
      "E": "Varkala",
      "M": "വര്‍ക്കല",
      "DID": 1,
      "TID": 65
    },
    {
      "E": "Kollam",
      "M": "കൊല്ലം",
      "DID": 2,
      "TID": 5
    },
    {
      "E": "Kottarakara",
      "M": "കൊട്ടാരക്കര",
      "DID": 2,
      "TID": 6
    },
    {
      "E": "Pathanapuram",
      "M": "പത്തനാപുരം",
      "DID": 2,
      "TID": 7
    },
    {
      "E": "Karunagappally",
      "M": "കരുനാഗപ്പള്ളി",
      "DID": 2,
      "TID": 8
    },
    {
      "E": "Kunnathoor",
      "M": "കുന്നത്തൂര്‍",
      "DID": 2,
      "TID": 9
    },
    {
      "E": "Punalur",
      "M": "പുനലൂര്‍",
      "DID": 2,
      "TID": 66
    },
    {
      "E": "Kozhencherry",
      "M": "കോഴഞ്ചേരി",
      "DID": 3,
      "TID": 10
    },
    {
      "E": "Adoor",
      "M": "അടൂര്‍",
      "DID": 3,
      "TID": 11
    },
    {
      "E": "Konni",
      "M": "കോന്നി",
      "DID": 3,
      "TID": 67
    },
    {
      "E": "Thiruvalla",
      "M": "തിരുവല്ല",
      "DID": 3,
      "TID": 12
    },
    {
      "E": "Ranni",
      "M": "റാന്നി",
      "DID": 3,
      "TID": 13
    },
    {
      "E": "Mallappally",
      "M": "മല്ലപ്പള്ളി",
      "DID": 3,
      "TID": 14
    },
    {
      "E": "Karthikappally",
      "M": "കാര്‍ത്തികപ്പള്ളി",
      "DID": 4,
      "TID": 15
    },
    {
      "E": "Mavelikara",
      "M": "മാവേലിക്കര",
      "DID": 4,
      "TID": 16
    },
    {
      "E": "Chengannur",
      "M": "ചെങ്ങന്നൂര്‍",
      "DID": 4,
      "TID": 17
    },
    {
      "E": "Kuttanad",
      "M": "കുട്ടനാട്",
      "DID": 4,
      "TID": 18
    },
    {
      "E": "Ambalappuzha",
      "M": "അമ്പലപ്പുഴ",
      "DID": 4,
      "TID": 19
    },
    {
      "E": "Cherthala",
      "M": "ചേര്‍ത്തല",
      "DID": 4,
      "TID": 20
    },
    {
      "E": "Changanaseri",
      "M": "ചങ്ങനാശ്ശേരി",
      "DID": 5,
      "TID": 21
    },
    {
      "E": "Kanjirappally",
      "M": "കാഞ്ഞിരപ്പള്ളി",
      "DID": 5,
      "TID": 22
    },
    {
      "E": "Kottayam",
      "M": "കോട്ടയം",
      "DID": 5,
      "TID": 23
    },
    {
      "E": "Meenachil",
      "M": "മീനച്ചില്‍",
      "DID": 5,
      "TID": 24
    },
    {
      "E": "Vaikom",
      "M": "വൈക്കം",
      "DID": 5,
      "TID": 25
    },
    {
      "E": "Thodupuzha",
      "M": "തൊടുപുഴ",
      "DID": 6,
      "TID": 26
    },
    {
      "E": "Idukki",
      "M": "ഇടുക്കി",
      "DID": 6,
      "TID": 68
    },
    {
      "E": "Peermade",
      "M": "പീരുമേട്",
      "DID": 6,
      "TID": 27
    },
    {
      "E": "Devikulam",
      "M": "ദേവികുളം",
      "DID": 6,
      "TID": 28
    },
    {
      "E": "Udumbanchola",
      "M": "ഉടുമ്പന്‍ചോല",
      "DID": 6,
      "TID": 29
    },
    {
      "E": "Kothamangalam",
      "M": "കോതമംഗലം",
      "DID": 7,
      "TID": 30
    },
    {
      "E": "Muvattupuzha",
      "M": "മൂവാറ്റുപുഴ",
      "DID": 7,
      "TID": 31
    },
    {
      "E": "Kunnathunad",
      "M": "കുന്നത്തുനാട്",
      "DID": 7,
      "TID": 32
    },
    {
      "E": "Aluva",
      "M": "ആലുവ",
      "DID": 7,
      "TID": 33
    },
    {
      "E": "Kanayannur",
      "M": "കണയന്നൂര്‍",
      "DID": 7,
      "TID": 34
    },
    {
      "E": "Kochi",
      "M": "കൊച്ചി",
      "DID": 7,
      "TID": 35
    },
    {
      "E": "Paravur",
      "M": "പരവൂര്‍",
      "DID": 7,
      "TID": 36
    },
    {
      "E": "Kodungallur",
      "M": "കൊടുങ്ങല്ലൂര്‍",
      "DID": 8,
      "TID": 37
    },
    {
      "E": "Mukundapuram",
      "M": "മുകുന്ദപുരം",
      "DID": 8,
      "TID": 38
    },
    {
      "E": "Thrissur",
      "M": "തൃശ്ശൂര്‍",
      "DID": 8,
      "TID": 39
    },
    {
      "E": "Chavakkad",
      "M": "ചാവക്കാട്",
      "DID": 8,
      "TID": 40
    },
    {
      "E": "Thalappilly",
      "M": "തലപ്പിള്ളി",
      "DID": 8,
      "TID": 41
    },
    {
      "E": "Chalakudy",
      "M": "ചാലക്കുടി",
      "DID": 8,
      "TID": 69
    },
    {
      "E": "Chittur",
      "M": "ചിറ്റൂര്‍",
      "DID": 9,
      "TID": 42
    },
    {
      "E": "Alathur",
      "M": "ആലത്തൂര്‍",
      "DID": 9,
      "TID": 43
    },
    {
      "E": "Palakkad",
      "M": "പാലക്കാട്",
      "DID": 9,
      "TID": 44
    },
    {
      "E": "Ottapalam",
      "M": "ഒറ്റപ്പാലം",
      "DID": 9,
      "TID": 45
    },
    {
      "E": "Mannarkad",
      "M": "മണ്ണാര്‍ക്കാട്",
      "DID": 9,
      "TID": 46
    },
    {
      "E": "Pattambi",
      "M": "പട്ടാമ്പി",
      "DID": 9,
      "TID": 70
    },
    {
      "E": "Ponnani",
      "M": "പൊന്നാനി",
      "DID": 10,
      "TID": 47
    },
    {
      "E": "Tirur",
      "M": "തിരൂര്‍",
      "DID": 10,
      "TID": 48
    },
    {
      "E": "Tirurangadi",
      "M": "തിരൂരങ്ങാടി",
      "DID": 10,
      "TID": 49
    },
    {
      "E": "Kondotty",
      "M": "കൊണ്ടോട്ടി",
      "DID": 10,
      "TID": 71
    },
    {
      "E": "Perinthalmanna",
      "M": "പെരിന്തല്‍മണ്ണ",
      "DID": 10,
      "TID": 50
    },
    {
      "E": "Ernad",
      "M": "ഏറനാട്",
      "DID": 10,
      "TID": 51
    },
    {
      "E": "Nilambur",
      "M": "നിലമ്പൂര്‍",
      "DID": 10,
      "TID": 52
    },
    {
      "E": "Kozhikkode",
      "M": "കോഴിക്കോട്",
      "DID": 11,
      "TID": 53
    },
    {
      "E": "Koyilandy",
      "M": "കൊയിലാണ്ടി",
      "DID": 11,
      "TID": 54
    },
    {
      "E": "Vatakara",
      "M": "വടകര",
      "DID": 11,
      "TID": 55
    },
    {
      "E": "Thamarassery",
      "M": "താമരശ്ശേരി",
      "DID": 11,
      "TID": 72
    },
    {
      "E": "Sulthan Bathery",
      "M": "സുല്‍ത്താന്‍ ബത്തേരി",
      "DID": 12,
      "TID": 56
    },
    {
      "E": "Vythiri",
      "M": "വൈത്തിരി",
      "DID": 12,
      "TID": 57
    },
    {
      "E": "Mananthavady",
      "M": "മാനന്തവാടി",
      "DID": 12,
      "TID": 58
    },
    {
      "E": "Thalassery",
      "M": "തലശ്ശേരി",
      "DID": 13,
      "TID": 59
    },
    {
      "E": "Kannur",
      "M": "കണ്ണൂര്‍",
      "DID": 13,
      "TID": 60
    },
    {
      "E": "Taliparamba",
      "M": "തളിപ്പറമ്പ്",
      "DID": 13,
      "TID": 61
    },
    {
      "E": "Iritty",
      "M": "ഇരിട്ടി",
      "DID": 13,
      "TID": 73
    },
    {
      "E": "Hosdurg",
      "M": "ഹോസ്ദുര്‍ഗ്",
      "DID": 14,
      "TID": 62
    },
    {
      "E": "Kasaragod",
      "M": "കാസര്‍കോഡ്",
      "DID": 14,
      "TID": 63
    },
    {
      "E": "Manjeshwar",
      "M": "മഞ്ചേശ്വരം",
      "DID": 14,
      "TID": 75
    },
    {
      "E": "Vellarikundu",
      "M": "വെള്ളരിക്കുണ്ട്",
      "DID": 14,
      "TID": 74
    }
   ];
  var postoffices = [
    {
      "POSTID": 1,
      "E": "Kannur",
      "M": "കണ്ണൂര്‍ ",
      "PIN": "670001",
      "DID": "13"
    },
    {
      "POSTID": 2,
      "E": "Civil Station Kannur",
      "M": "സിവില്‍ സ്റ്റേഷന്‍ കണ്ണൂര്‍",
      "PIN": "670002",
      "DID": "13"
    },
    {
      "POSTID": 3,
      "E": "Kannur City",
      "M": "കണ്ണൂര്‍ സിറ്റി",
      "PIN": "670003",
      "DID": "13"
    },
    {
      "POSTID": 4,
      "E": "Pallikkunnu",
      "M": "പള്ളിക്കുന്ന്",
      "PIN": "670004",
      "DID": "13"
    },
    {
      "POSTID": 5,
      "E": "Kakkat",
      "M": "കക്കാട്",
      "PIN": "670005",
      "DID": "13"
    },
    {
      "POSTID": 6,
      "E": "Attadappa",
      "M": "ആറ്റടപ്പ",
      "PIN": "670006",
      "DID": "13"
    },
    {
      "POSTID": 7,
      "E": "Kappad",
      "M": "കാപ്പാട്",
      "PIN": "670006",
      "DID": "13"
    },
    {
      "POSTID": 8,
      "E": "Chovva",
      "M": "ചൊവ്വ",
      "PIN": "670006",
      "DID": "13"
    },
    {
      "POSTID": 9,
      "E": "Kizhunna",
      "M": "കിഴുന്ന",
      "PIN": "670007",
      "DID": "13"
    },
    {
      "POSTID": 10,
      "E": "Kadalayi",
      "M": "കടലായി",
      "PIN": "670003",
      "DID": "13"
    },
    {
      "POSTID": 11,
      "E": "Thottada",
      "M": "തോട്ടട",
      "PIN": "670007",
      "DID": "13"
    },
    {
      "POSTID": 12,
      "E": "Alavil",
      "M": "അലവില്‍",
      "PIN": "670008",
      "DID": "13"
    },
    {
      "POSTID": 13,
      "E": "Azhikkal",
      "M": "അഴീക്കല്‍",
      "PIN": "670009",
      "DID": "13"
    },
    {
      "POSTID": 14,
      "E": "Azhikode-Kannur",
      "M": "അഴീക്കോട്",
      "PIN": "670009",
      "DID": "13"
    },
    {
      "POSTID": 15,
      "E": "Azhikode South",
      "M": "അഴീക്കോട്  സൗത്ത്",
      "PIN": "670009",
      "DID": "13"
    },
    {
      "POSTID": 16,
      "E": "Valapattanam",
      "M": "വളപട്ടണം",
      "PIN": "670010",
      "DID": "13"
    },
    {
      "POSTID": 17,
      "E": "Chirakkal",
      "M": "ചിറക്കല്‍",
      "PIN": "670011",
      "DID": "13"
    },
    {
      "POSTID": 18,
      "E": "Chirakkal",
      "M": "ചിറക്കല്‍ ആര്‍ എസ്",
      "PIN": "670011",
      "DID": "13"
    },
    {
      "POSTID": 19,
      "E": "Kannookara",
      "M": "കണ്ണൂക്കര",
      "PIN": "670012",
      "DID": "13"
    },
    {
      "POSTID": 20,
      "E": "Kannur Thana",
      "M": "കണ്ണൂര്‍-താണ",
      "PIN": "670012",
      "DID": "13"
    },
    {
      "POSTID": 21,
      "E": "Burnacherry",
      "M": "ബര്‍ണ്ണശ്ശേരി",
      "PIN": "670013",
      "DID": "13"
    },
    {
      "POSTID": 22,
      "E": "Chalad",
      "M": "ചാലാട്",
      "PIN": "670014",
      "DID": "13"
    },
    {
      "POSTID": 23,
      "E": "Kattampally",
      "M": "കാട്ടാമ്പള്ളി",
      "PIN": "670011",
      "DID": "13"
    },
    {
      "POSTID": 24,
      "E": "Kottali",
      "M": "കൊറ്റാളി",
      "PIN": "670005",
      "DID": "13"
    },
    {
      "POSTID": 25,
      "E": "Kannur District Hospital",
      "M": "കണ്ണൂര്‍ ഡിസ്ട്രിക്റ്റ് ഹോസ്പിറ്റല്‍",
      "PIN": "670017",
      "DID": "13"
    },
    {
      "POSTID": 26,
      "E": "Thazhe Chovva",
      "M": "താഴെചൊവ്വ",
      "PIN": "670018",
      "DID": "13"
    },
    {
      "POSTID": 27,
      "E": "Thalassery",
      "M": "തലശ്ശേരി",
      "PIN": "670101",
      "DID": "13"
    },
    {
      "POSTID": 28,
      "E": "Punnol",
      "M": "പുന്നോല്‍",
      "PIN": "670102",
      "DID": "13"
    },
    {
      "POSTID": 29,
      "E": "Kurichiyil",
      "M": "കുറിച്ചിയില്‍",
      "PIN": "670102",
      "DID": "13"
    },
    {
      "POSTID": 30,
      "E": "Temple Gate",
      "M": "ടെമ്പിള്‍ ഗേറ്റ്",
      "PIN": "670102",
      "DID": "13"
    },
    {
      "POSTID": 31,
      "E": "Tiruvangad",
      "M": "തിരുവങ്ങാട്",
      "PIN": "670103",
      "DID": "13"
    },
    {
      "POSTID": 32,
      "E": "Cherakkara",
      "M": "ചിറക്കര",
      "PIN": "670104",
      "DID": "13"
    },
    {
      "POSTID": 33,
      "E": "Nettur",
      "M": "നെട്ടൂര്‍",
      "PIN": "670105",
      "DID": "13"
    },
    {
      "POSTID": 34,
      "E": "Dharmadom",
      "M": "ധര്‍മ്മടം",
      "PIN": "670106",
      "DID": "13"
    },
    {
      "POSTID": 35,
      "E": "Eranholi",
      "M": "എരഞ്ഞോളി",
      "PIN": "670107",
      "DID": "13"
    },
    {
      "POSTID": 36,
      "E": "Perundattil",
      "M": "പെരുന്താറ്റില്‍",
      "PIN": "670107",
      "DID": "13"
    },
    {
      "POSTID": 37,
      "E": "Vadakkumbad",
      "M": "വടക്കുമ്പാട്",
      "PIN": "670105",
      "DID": "13"
    },
    {
      "POSTID": 38,
      "E": "Kavumbhagom",
      "M": "കാവുംഭാഗം",
      "PIN": "670110",
      "DID": "13"
    },
    {
      "POSTID": 39,
      "E": "Moozhikkara",
      "M": "മൂഴിക്കര",
      "PIN": "670103",
      "DID": "13"
    },
    {
      "POSTID": 40,
      "E": "Kuttikkol ",
      "M": "കുറ്റിക്കോല്‍",
      "PIN": "670562",
      "DID": "13"
    },
    {
      "POSTID": 41,
      "E": "Kuttiyeri ",
      "M": "കുറ്റ്യേരി",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 42,
      "E": "Taliparamba",
      "M": "തളിപ്പറമ്പ്",
      "PIN": "670141",
      "DID": "13"
    },
    {
      "POSTID": 43,
      "E": "Thiruvattoor",
      "M": "തിരുവട്ടൂര്‍",
      "PIN": "670502",
      "DID": "13"
    },
    {
      "POSTID": 44,
      "E": "Trichambaram",
      "M": "തൃച്ചംബരം",
      "PIN": "670141",
      "DID": "13"
    },
    {
      "POSTID": 45,
      "E": "Panniyur",
      "M": "പന്നിയൂര്‍",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 46,
      "E": "Pallivayal",
      "M": "പള്ളിവയല്‍",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 47,
      "E": "Muyyam",
      "M": "മുയ്യം",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 48,
      "E": "Karimbam",
      "M": "കരിമ്പം",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 49,
      "E": "Kanhirangad",
      "M": "കാഞ്ഞിരങ്ങാട്",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 50,
      "E": "Kurumathur",
      "M": "കുറുമാത്തൂര്‍",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 51,
      "E": "Koyyam",
      "M": "കൊയ്യം",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 52,
      "E": "Pattuvam",
      "M": "പട്ടുവം",
      "PIN": "670143",
      "DID": "13"
    },
    {
      "POSTID": 53,
      "E": "Ariyil",
      "M": "അരിയില്‍",
      "PIN": "670143",
      "DID": "13"
    },
    {
      "POSTID": 54,
      "E": "Kuppam-Taliparamba",
      "M": "കുപ്പം-തളിപ്പറമ്പ്",
      "PIN": "670502",
      "DID": "13"
    },
    {
      "POSTID": 55,
      "E": "Irinava",
      "M": "ഇരിണാവ്",
      "PIN": "670301",
      "DID": "13"
    },
    {
      "POSTID": 56,
      "E": "Othayammadam",
      "M": "ഒതയമ്മാടം",
      "PIN": "670301",
      "DID": "13"
    },
    {
      "POSTID": 57,
      "E": "Keezhara",
      "M": "കീഴറ",
      "PIN": "670301",
      "DID": "13"
    },
    {
      "POSTID": 58,
      "E": "Cherukunnu",
      "M": "ചെറുകുന്ന് ",
      "PIN": "670301",
      "DID": "13"
    },
    {
      "POSTID": 59,
      "E": "Cherukunnu R S",
      "M": "ചെറുകുന്ന് ആര്‍ എസ് ",
      "PIN": "670301",
      "DID": "13"
    },
    {
      "POSTID": 60,
      "E": "Thekkumbad",
      "M": "തെക്കുമ്പാട്",
      "PIN": "670301",
      "DID": "13"
    },
    {
      "POSTID": 61,
      "E": "Thavam",
      "M": "താവം",
      "PIN": "670301",
      "DID": "13"
    },
    {
      "POSTID": 62,
      "E": "Mattul",
      "M": "മാട്ടൂല്‍",
      "PIN": "670302",
      "DID": "13"
    },
    {
      "POSTID": 63,
      "E": "Payangadi",
      "M": "പഴയങ്ങാടി",
      "PIN": "670303",
      "DID": "13"
    },
    {
      "POSTID": 64,
      "E": "Sreestha",
      "M": "ശ്രീസ്ഥ",
      "PIN": "670303",
      "DID": "13"
    },
    {
      "POSTID": 65,
      "E": "Madayi",
      "M": "മാടായി",
      "PIN": "670304",
      "DID": "13"
    },
    {
      "POSTID": 66,
      "E": "Palakkod",
      "M": "പാലക്കോട്",
      "PIN": "670305",
      "DID": "13"
    },
    {
      "POSTID": 67,
      "E": "Vengara CNR",
      "M": "വെങ്ങര-കണ്ണൂര്‍",
      "PIN": "670305",
      "DID": "13"
    },
    {
      "POSTID": 68,
      "E": "Panapuzha",
      "M": "പാണപ്പുഴ",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 69,
      "E": "Mathamangalam",
      "M": "മാതമംഗലം ",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 70,
      "E": "Mathamangalam Bazar",
      "M": "മാതമംഗലം ബസാര്‍",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 71,
      "E": "Eriam",
      "M": "ഏര്യം",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 72,
      "E": "Olayambadi",
      "M": "ഓലയമ്പാടി",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 73,
      "E": "Kakkara",
      "M": "കക്കറ",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 74,
      "E": "Kanayi ",
      "M": "കാനായി",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 75,
      "E": "Kuttur",
      "M": "കുറ്റൂര്‍",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 76,
      "E": "Porakunnu",
      "M": "പൊറക്കുന്ന്",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 77,
      "E": "Vellora",
      "M": "വെള്ളോറ",
      "PIN": "670306",
      "DID": "13"
    },
    {
      "POSTID": 78,
      "E": "Payyannur",
      "M": "പയ്യന്നൂര്‍",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 79,
      "E": "Payyannur R.S.",
      "M": "പയ്യന്നൂര്‍ ആര്‍ എസ്",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 80,
      "E": "Padiotchal",
      "M": "പാടിയോട്ടുചാല്‍",
      "PIN": "670353",
      "DID": "13"
    },
    {
      "POSTID": 81,
      "E": "Aravanchal",
      "M": "അരവഞ്ചാല്‍",
      "PIN": "670353",
      "DID": "13"
    },
    {
      "POSTID": 82,
      "E": "Eramam Desom",
      "M": "എരമം ദേശം",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 83,
      "E": "Kandoth",
      "M": "കണ്ടോത്ത്",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 84,
      "E": "Chalakkode",
      "M": "ചാലക്കോട്",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 85,
      "E": "Nhekli",
      "M": "ഞെക്ലി",
      "PIN": "670353",
      "DID": "13"
    },
    {
      "POSTID": 86,
      "E": "Korome",
      "M": "കോറോം",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 87,
      "E": "Ramantali",
      "M": "രാമന്തളി",
      "PIN": "670308",
      "DID": "13"
    },
    {
      "POSTID": 88,
      "E": "Ettikulam",
      "M": "എട്ടിക്കുളം",
      "PIN": "670308",
      "DID": "13"
    },
    {
      "POSTID": 89,
      "E": "Karanthat",
      "M": "കാരന്താട്",
      "PIN": "670308",
      "DID": "13"
    },
    {
      "POSTID": 90,
      "E": "Ezhilode",
      "M": "ഏഴിലോട്",
      "PIN": "670309",
      "DID": "13"
    },
    {
      "POSTID": 91,
      "E": "Kunhimangalam",
      "M": "കുഞ്ഞിമംഗലം",
      "PIN": "670309",
      "DID": "13"
    },
    {
      "POSTID": 92,
      "E": "Kovvapuram",
      "M": "കൊവ്വപ്പുറം",
      "PIN": "670309",
      "DID": "13"
    },
    {
      "POSTID": 93,
      "E": "Mattul North",
      "M": "മാട്ടൂല്‍ നോര്‍ത്ത്",
      "PIN": "670325",
      "DID": "13"
    },
    {
      "POSTID": 94,
      "E": "Edat",
      "M": "എടാട്ട്",
      "PIN": "670327",
      "DID": "13"
    },
    {
      "POSTID": 95,
      "E": "Vadakkumbad-Ramanthali",
      "M": "വടക്കുമ്പാട്-രാമന്തളി",
      "PIN": "670330",
      "DID": "13"
    },
    {
      "POSTID": 96,
      "E": "Anchampeedika",
      "M": "അഞ്ചാംപീടിക",
      "PIN": "670331",
      "DID": "13"
    },
    {
      "POSTID": 97,
      "E": "Mottammal",
      "M": "മൊട്ടമ്മല്‍",
      "PIN": "670331",
      "DID": "13"
    },
    {
      "POSTID": 98,
      "E": "Morazha",
      "M": "മൊറാഴ",
      "PIN": "670331",
      "DID": "13"
    },
    {
      "POSTID": 99,
      "E": "Annur ",
      "M": "അന്നൂര്",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 100,
      "E": "Kandankali ",
      "M": "കണ്ടങ്കാളി",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 101,
      "E": "Ezhome",
      "M": "ഏഴോം",
      "PIN": "670334",
      "DID": "13"
    },
    {
      "POSTID": 102,
      "E": "Kottila",
      "M": "കൊട്ടില",
      "PIN": "670334",
      "DID": "13"
    },
    {
      "POSTID": 103,
      "E": "Kankol ",
      "M": "കാങ്കോല്‍",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 104,
      "E": "Palachode",
      "M": "പാലച്ചോട്",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 105,
      "E": "Kavvayi ",
      "M": "കവ്വായി",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 106,
      "E": "Mathil ",
      "M": "മാത്തില്‍",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 107,
      "E": "Vellur ",
      "M": "വെള്ളൂര്‍",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 108,
      "E": "Peringome",
      "M": "പെരിങ്ങോം",
      "PIN": "670353",
      "DID": "13"
    },
    {
      "POSTID": 109,
      "E": "Payangadi R.S",
      "M": "പഴയങ്ങാടി ആര്‍ എസ്",
      "PIN": "670358",
      "DID": "13"
    },
    {
      "POSTID": 110,
      "E": "Nareekamvalli",
      "M": "നരീക്കാംവള്ളി ",
      "PIN": "670504",
      "DID": "13"
    },
    {
      "POSTID": 111,
      "E": "Pilathara ",
      "M": "പിലാത്തറ",
      "PIN": "670504",
      "DID": "13"
    },
    {
      "POSTID": 112,
      "E": "Mandur-Cnr",
      "M": "മണ്ട‍ൂര്‍ കണ്ണൂര്‍",
      "PIN": "670501",
      "DID": "13"
    },
    {
      "POSTID": 113,
      "E": "Vilayancode ",
      "M": "വിളയാങ്കോട്",
      "PIN": "670504",
      "DID": "13"
    },
    {
      "POSTID": 114,
      "E": "Kadannappally",
      "M": "കടന്നപ്പള്ളി",
      "PIN": "670504",
      "DID": "13"
    },
    {
      "POSTID": 115,
      "E": "Pariyaram Kannur",
      "M": "പരിയാരം-കണ്ണൂര്‍",
      "PIN": "670502",
      "DID": "13"
    },
    {
      "POSTID": 116,
      "E": "Chithapilapoyil",
      "M": "ചിതപ്പിലെപൊയില്‍",
      "PIN": "670502",
      "DID": "13"
    },
    {
      "POSTID": 117,
      "E": "Pariyaram Medical College",
      "M": "പരിയാരം മെഡിക്കല്‍ കോളേജ്",
      "PIN": "670503",
      "DID": "13"
    },
    {
      "POSTID": 118,
      "E": "Palavayal",
      "M": "പാലാവയല്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 119,
      "E": "Prapoyil",
      "M": "പ്രാപ്പൊയില്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 120,
      "E": "Edavaramba",
      "M": "ഇടവരമ്പ്",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 121,
      "E": "Kannivayal",
      "M": "കണ്ണിവയല്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 122,
      "E": "Kamballur",
      "M": "കമ്പല്ലൂര്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 123,
      "E": "Kanamvayal",
      "M": "കാനംവയല്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 124,
      "E": "Kadumeni",
      "M": "കടുമേനി",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 125,
      "E": "Chunda",
      "M": "ചുണ്ട",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 126,
      "E": "Cherupuzha",
      "M": "ചെറുപുഴ",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 127,
      "E": "Kozhichal",
      "M": "കോഴിച്ചാല്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 128,
      "E": "Josegiri",
      "M": "ജോസ്ഗിരി",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 129,
      "E": "Thattummal",
      "M": "തട്ടുമ്മല്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 130,
      "E": "Thabore",
      "M": "താബോര്‍",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 131,
      "E": "Thirumeni",
      "M": "തിരുമേനി",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 132,
      "E": "Thayyeni",
      "M": "തയ്യേനി",
      "PIN": "670511",
      "DID": "13"
    },
    {
      "POSTID": 133,
      "E": "Ettukudukka",
      "M": "ഏറ്റുകുടുക്ക",
      "PIN": "670521",
      "DID": "13"
    },
    {
      "POSTID": 134,
      "E": "Karivellur",
      "M": "കരിവെള്ളൂര്‍",
      "PIN": "670521",
      "DID": "13"
    },
    {
      "POSTID": 135,
      "E": "Kozhummal",
      "M": "കൊഴുമ്മല്‍",
      "PIN": "670522",
      "DID": "13"
    },
    {
      "POSTID": 136,
      "E": "Pappinisseri",
      "M": "പാപ്പിനിശ്ശേരി ",
      "PIN": "670561",
      "DID": "13"
    },
    {
      "POSTID": 137,
      "E": "Kalliasseri",
      "M": "കല്ല്യാശ്ശേരി",
      "PIN": "670562",
      "DID": "13"
    },
    {
      "POSTID": 138,
      "E": "Nanicheri",
      "M": "നണിച്ചേരി",
      "PIN": "670563",
      "DID": "13"
    },
    {
      "POSTID": 139,
      "E": "Parassinikadavu",
      "M": "പറശ്ശിനിക്കടവ്",
      "PIN": "670563",
      "DID": "13"
    },
    {
      "POSTID": 140,
      "E": "Kanul ",
      "M": "കാനൂല്‍",
      "PIN": "670562",
      "DID": "13"
    },
    {
      "POSTID": 141,
      "E": "Pappinisseri West",
      "M": "പാപ്പിനിശ്ശേരി വെസ്റ്റ്",
      "PIN": "670565",
      "DID": "13"
    },
    {
      "POSTID": 142,
      "E": "Aroli",
      "M": "അരോളി",
      "PIN": "670566",
      "DID": "13"
    },
    {
      "POSTID": 143,
      "E": "Kannur University Campus",
      "M": "കണ്ണൂര്‍ യൂണിവേഴ്സിറ്റി ക്യാമ്പസ്",
      "PIN": "670567",
      "DID": "13"
    },
    {
      "POSTID": 144,
      "E": "Pathanpara ",
      "M": "പാത്തന്‍പാറ",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 145,
      "E": "Arivilanjapoil",
      "M": "അരിവിളഞ്ഞപൊയില്‍",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 146,
      "E": "Manakadavu",
      "M": "മണക്കടവ്",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 147,
      "E": "Alakode",
      "M": "ആലക്കോട്",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 148,
      "E": "Alakode Kuttaramba",
      "M": "ആലക്കോട്-കുട്ടാരമ്പ",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 149,
      "E": "Rayarom",
      "M": "രയറോം",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 150,
      "E": "Udayagiri",
      "M": "ഉദയഗിരി",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 151,
      "E": "Ottathai",
      "M": "ഒറ്റത്തൈ",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 152,
      "E": "Vijayagiri",
      "M": "വിജയഗിരി",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 153,
      "E": "Karuvanchal ",
      "M": "കരുവന്‍ചാല്‍",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 154,
      "E": "Karthikapuram",
      "M": "കാര്‍ത്തികപുരം",
      "PIN": "670572",
      "DID": "13"
    },
    {
      "POSTID": 155,
      "E": "Chittadi",
      "M": "ചിറ്റടി",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 156,
      "E": "Nellipara",
      "M": "നെല്ലിപ്പാറ",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 157,
      "E": "Vellad",
      "M": "വെള്ളാട്",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 158,
      "E": "Kottayad",
      "M": "കൊട്ടയാട്",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 159,
      "E": "Therthally",
      "M": "തേര്‍ത്തല്ലി",
      "PIN": "670571",
      "DID": "13"
    },
    {
      "POSTID": 160,
      "E": "Padappangad",
      "M": "പടപ്പേങ്ങാട്",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 161,
      "E": "Eruvatty",
      "M": "എരുവാട്ടി",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 162,
      "E": "Edakkom",
      "M": "എടക്കോം",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 163,
      "E": "Karippal",
      "M": "കരിപ്പാല്‍",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 164,
      "E": "Kooveri",
      "M": "കൂവേരി",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 165,
      "E": "Chapparapadava",
      "M": "ചപ്പാരപ്പടവ്",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 166,
      "E": "Thadikkadava",
      "M": "തടിക്കടവ്",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 167,
      "E": "Thimiri",
      "M": "തിമിരി",
      "PIN": "670581",
      "DID": "13"
    },
    {
      "POSTID": 168,
      "E": "Naduvil",
      "M": "നടുവില്‍",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 169,
      "E": "Pulikurumba",
      "M": "പുലിക്കുരുമ്പ",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 170,
      "E": "Arang",
      "M": "അരങ്ങ്",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 171,
      "E": "Areekamala",
      "M": "അരീക്കമല",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 172,
      "E": "Mandalam",
      "M": "മണ്ടളം",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 173,
      "E": "Vayattuparamba",
      "M": "വായാട്ടുപറമ്പ",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 174,
      "E": "Kudiyanmala",
      "M": "കുടിയാന്‍മല",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 175,
      "E": "Pottanplavu ",
      "M": "പൊട്ടന്‍പ്ലാവ്",
      "PIN": "670582",
      "DID": "13"
    },
    {
      "POSTID": 176,
      "E": "Munderi",
      "M": "മുണ്ടേരി",
      "PIN": "670591",
      "DID": "13"
    },
    {
      "POSTID": 177,
      "E": "Eachur",
      "M": "ഏച്ചൂര്‍",
      "PIN": "670591",
      "DID": "13"
    },
    {
      "POSTID": 178,
      "E": "Kannirode",
      "M": "",
      "PIN": "670592",
      "DID": "13"
    },
    {
      "POSTID": 179,
      "E": "Kanhirode",
      "M": "കാഞ്ഞിരോട്",
      "PIN": "670592",
      "DID": "13"
    },
    {
      "POSTID": 180,
      "E": "Koodali",
      "M": "കൂടാളി",
      "PIN": "670592",
      "DID": "13"
    },
    {
      "POSTID": 181,
      "E": "Chattuvapara",
      "M": "ചട്ടുവപ്പാറ",
      "PIN": "670592",
      "DID": "13"
    },
    {
      "POSTID": 182,
      "E": "Chekkikulam",
      "M": "ചെക്കിക്കുളം",
      "PIN": "670592",
      "DID": "13"
    },
    {
      "POSTID": 183,
      "E": "Irukkur",
      "M": "ഇരിക്കൂര്‍",
      "PIN": "670593",
      "DID": "13"
    },
    {
      "POSTID": 184,
      "E": "Kalliad",
      "M": "കല്ല്യാട്",
      "PIN": "670593",
      "DID": "13"
    },
    {
      "POSTID": 185,
      "E": "Kusavanvayal",
      "M": "കൊശവന്‍ വയല്‍",
      "PIN": "670593",
      "DID": "13"
    },
    {
      "POSTID": 186,
      "E": "Peruvalathparamba",
      "M": "പെരുവളത്തുപറമ്പ്",
      "PIN": "670593",
      "DID": "13"
    },
    {
      "POSTID": 187,
      "E": "Varam",
      "M": "വാരം",
      "PIN": "670594",
      "DID": "13"
    },
    {
      "POSTID": 188,
      "E": "Pattanur",
      "M": "പട്ടാന്നൂര്‍",
      "PIN": "670595",
      "DID": "13"
    },
    {
      "POSTID": 189,
      "E": "Elampara",
      "M": "എളമ്പാറ",
      "PIN": "670595",
      "DID": "13"
    },
    {
      "POSTID": 190,
      "E": "Edayannur",
      "M": "എടയന്നൂര്‍",
      "PIN": "670595",
      "DID": "13"
    },
    {
      "POSTID": 191,
      "E": "Mundayad",
      "M": "മുണ്ടയാട്",
      "PIN": "670594",
      "DID": "13"
    },
    {
      "POSTID": 192,
      "E": "Kolacherry",
      "M": "കൊളച്ചേരി",
      "PIN": "670601",
      "DID": "13"
    },
    {
      "POSTID": 193,
      "E": "Cherupazhasi",
      "M": "ചെറുപഴശ്ശി",
      "PIN": "670601",
      "DID": "13"
    },
    {
      "POSTID": 194,
      "E": "Pavannur Motta",
      "M": "പാവന്നൂര്‍മൊട്ട",
      "PIN": "670602",
      "DID": "13"
    },
    {
      "POSTID": 195,
      "E": "Mayyil",
      "M": "മയ്യില്‍",
      "PIN": "670602",
      "DID": "13"
    },
    {
      "POSTID": 196,
      "E": "Mullakodi",
      "M": "മുല്ലക്കൊടി",
      "PIN": "670602",
      "DID": "13"
    },
    {
      "POSTID": 197,
      "E": "Kayaralam",
      "M": "കയരളം",
      "PIN": "670602",
      "DID": "13"
    },
    {
      "POSTID": 198,
      "E": "Kandakai",
      "M": "കണ്ടക്കൈ",
      "PIN": "670602",
      "DID": "13"
    },
    {
      "POSTID": 199,
      "E": "Kuttiattoor",
      "M": "കുറ്റ്യാട്ടൂര്‍",
      "PIN": "670602",
      "DID": "13"
    },
    {
      "POSTID": 200,
      "E": "Narath",
      "M": "നാറാത്ത്",
      "PIN": "670603",
      "DID": "13"
    },
    {
      "POSTID": 201,
      "E": "Kannadiparamba",
      "M": "കണ്ണാടിപ്പറമ്പ്",
      "PIN": "670604",
      "DID": "13"
    },
    {
      "POSTID": 202,
      "E": "Cheleri",
      "M": "ചേലേരി",
      "PIN": "670604",
      "DID": "13"
    },
    {
      "POSTID": 203,
      "E": "Mamba",
      "M": "മാമ്പ",
      "PIN": "670611",
      "DID": "13"
    },
    {
      "POSTID": 204,
      "E": "Muzhappala",
      "M": "മുഴപ്പാല",
      "PIN": "670611",
      "DID": "13"
    },
    {
      "POSTID": 205,
      "E": "Anjarakandy",
      "M": "അഞ്ചരക്കണ്ടി",
      "PIN": "670612",
      "DID": "13"
    },
    {
      "POSTID": 206,
      "E": "Muringeri",
      "M": "മുരിങ്ങേരി",
      "PIN": "670612",
      "DID": "13"
    },
    {
      "POSTID": 207,
      "E": "Keezhallur",
      "M": "കീഴല്ലൂര്‍",
      "PIN": "670612",
      "DID": "13"
    },
    {
      "POSTID": 208,
      "E": "Vengad",
      "M": "വേങ്ങാട്",
      "PIN": "670612",
      "DID": "13"
    },
    {
      "POSTID": 209,
      "E": "Mowancherri",
      "M": "മൗവ്വഞ്ചേരി",
      "PIN": "670613",
      "DID": "13"
    },
    {
      "POSTID": 210,
      "E": "Iriveri",
      "M": "ഇരിവേരി",
      "PIN": "670614",
      "DID": "13"
    },
    {
      "POSTID": 211,
      "E": "Kadachira",
      "M": "കാടാച്ചിറ",
      "PIN": "670621",
      "DID": "13"
    },
    {
      "POSTID": 212,
      "E": "Chala East",
      "M": "ചാല ഈസ്റ്റ്",
      "PIN": "670621",
      "DID": "13"
    },
    {
      "POSTID": 213,
      "E": "Poduvacheri",
      "M": "പൊതുവാച്ചേരി",
      "PIN": "670621",
      "DID": "13"
    },
    {
      "POSTID": 214,
      "E": "Koyyode",
      "M": "കോയ്യോട്",
      "PIN": "670621",
      "DID": "13"
    },
    {
      "POSTID": 215,
      "E": "Bavode",
      "M": "ബാവോട്",
      "PIN": "670622",
      "DID": "13"
    },
    {
      "POSTID": 216,
      "E": "Mavilayi",
      "M": "മാവിലായി",
      "PIN": "670622",
      "DID": "13"
    },
    {
      "POSTID": 217,
      "E": "Mundalur",
      "M": "മുണ്ടല്ലൂര്‍ ",
      "PIN": "670622",
      "DID": "13"
    },
    {
      "POSTID": 218,
      "E": "Makreri",
      "M": "മക്രേരി",
      "PIN": "670622",
      "DID": "13"
    },
    {
      "POSTID": 219,
      "E": "Sreekandapuram",
      "M": "ശ്രീകണ്ഠാപുരം",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 220,
      "E": "Malapattam",
      "M": "മലപ്പട്ടം",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 221,
      "E": "Koottumugham",
      "M": "കൂട്ടുമുഖം",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 222,
      "E": "Chuzhali",
      "M": "ചുഴലി",
      "PIN": "670142",
      "DID": "13"
    },
    {
      "POSTID": 223,
      "E": "Nediyanga",
      "M": "നെടിയേങ്ങ",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 224,
      "E": "Nedungome",
      "M": "നെടുങ്ങോം",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 225,
      "E": "Chengalayi",
      "M": "ചെങ്ങളായി",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 226,
      "E": "Chempanthotty",
      "M": "ചെമ്പന്‍തൊട്ടി",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 227,
      "E": "Cherikode",
      "M": "ചെരിക്കോട്",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 228,
      "E": "Kaithapram",
      "M": "കൈതപ്രം",
      "PIN": "670631",
      "DID": "13"
    },
    {
      "POSTID": 229,
      "E": "Eruvassi",
      "M": "എരുവേശ്ശി",
      "PIN": "670632",
      "DID": "13"
    },
    {
      "POSTID": 230,
      "E": "Kayalampara",
      "M": "കായലുംപാറ",
      "PIN": "670632",
      "DID": "13"
    },
    {
      "POSTID": 231,
      "E": "Kuniyampuzha",
      "M": "കുനിയമ്പുഴ",
      "PIN": "670632",
      "DID": "13"
    },
    {
      "POSTID": 232,
      "E": "Chundakkunnu",
      "M": "ചുണ്ടക്കുന്ന്",
      "PIN": "670632",
      "DID": "13"
    },
    {
      "POSTID": 233,
      "E": "Nellikutty",
      "M": "നെല്ലിക്കുറ്റി",
      "PIN": "670632",
      "DID": "13"
    },
    {
      "POSTID": 234,
      "E": "Chemperi",
      "M": "ചെമ്പേരി",
      "PIN": "670632",
      "DID": "13"
    },
    {
      "POSTID": 235,
      "E": "Payyavur",
      "M": "പയ്യാവൂര്‍",
      "PIN": "670633",
      "DID": "13"
    },
    {
      "POSTID": 236,
      "E": "Kanhirakolly",
      "M": "കാഞ്ഞിരക്കൊല്ലി",
      "PIN": "670633",
      "DID": "13"
    },
    {
      "POSTID": 237,
      "E": "Chandanakampara",
      "M": "ചന്ദനക്കാംപാറ",
      "PIN": "670633",
      "DID": "13"
    },
    {
      "POSTID": 238,
      "E": "Chamathachal",
      "M": "ചമതച്ചാല്‍",
      "PIN": "670633",
      "DID": "13"
    },
    {
      "POSTID": 239,
      "E": "Pazhassikkari",
      "M": "പൈസക്കരി",
      "PIN": "670633",
      "DID": "13"
    },
    {
      "POSTID": 240,
      "E": "Ponniam ",
      "M": "പൊന്ന്യം",
      "PIN": "670641",
      "DID": "13"
    },
    {
      "POSTID": 241,
      "E": "Kizhakkekadirur",
      "M": "ഈസ്റ്റ് കതിരൂര്‍",
      "PIN": "670642",
      "DID": "13"
    },
    {
      "POSTID": 242,
      "E": "Kadirur",
      "M": "കതിരൂര്‍",
      "PIN": "670642",
      "DID": "13"
    },
    {
      "POSTID": 243,
      "E": "Pachapoika",
      "M": "പാച്ചപൊയ്ക",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 244,
      "E": "Manantheri",
      "M": "മാനന്തേരി",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 245,
      "E": "Mangattidam",
      "M": "മാങ്ങാട്ടിടം",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 246,
      "E": "Mooriyad",
      "M": "മൂരിയാട്",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 247,
      "E": "Ayithara Mambram",
      "M": "ആയിത്തറ മമ്പ്രം",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 248,
      "E": "Sankaranellur",
      "M": "ശങ്കരനെല്ലൂര്‍",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 249,
      "E": "Kuthuparamba",
      "M": "കൂത്തുപറമ്പ്",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 250,
      "E": "Kottayam Malabar",
      "M": "കോട്ടയം മലബാര്‍",
      "PIN": "670643",
      "DID": "13"
    },
    {
      "POSTID": 251,
      "E": "Alattil",
      "M": "ആലാറ്റില്‍",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 252,
      "E": "Varayal",
      "M": "വരയാല്‍",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 253,
      "E": "Valad",
      "M": "വാളാട്",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 254,
      "E": "Kappattumala",
      "M": "കാപ്പാട്ടുമല",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 255,
      "E": "Kampatti",
      "M": "കാമ്പട്ടി",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 256,
      "E": "Cherakkara Wayanad",
      "M": "ചിറക്കര - വയനാട്",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 257,
      "E": "Periya",
      "M": "പേരിയ",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 258,
      "E": "Poroor Wayanad",
      "M": "പോരൂര്‍ വയനാട്",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 259,
      "E": "Thalapuzha",
      "M": "തലപ്പുഴ",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 260,
      "E": "Tavinhal",
      "M": "തവിഞ്ഞാല്‍",
      "PIN": "670644",
      "DID": "12"
    },
    {
      "POSTID": 261,
      "E": "Nalloornad",
      "M": "നല്ലൂര്‍നാട്",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 262,
      "E": "Pilakkavu",
      "M": "",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 263,
      "E": "Pudussery",
      "M": "പുതുശ്ശേരി",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 264,
      "E": "Pudusserikadavu",
      "M": "പുതുശ്ശേരിക്കടവ്",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 265,
      "E": "Anjukunnu",
      "M": "അഞ്ചുകുന്ന്",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 266,
      "E": "Mananthavady",
      "M": "",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 267,
      "E": "Mundakutty",
      "M": "മുണ്ടക്കുറ്റി",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 268,
      "E": "Arattuthara",
      "M": "",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 269,
      "E": "Ellumannam",
      "M": "ഏള്ളുമന്ദം",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 270,
      "E": "Edavaka",
      "M": "എടവക",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 271,
      "E": "Valery",
      "M": "വാളേരി",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 272,
      "E": "Vimalanagar",
      "M": "വിമലനഗര്‍",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 273,
      "E": "Kammana",
      "M": "കമ്മന",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 274,
      "E": "Karakkamala",
      "M": "കാരക്കാമല",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 275,
      "E": "Kunnamangalam Wayanad",
      "M": "കുന്ദമംഗലം-വയനാട്",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 276,
      "E": "Kellur",
      "M": "കെല്ലൂര്‍",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 277,
      "E": "Vemom",
      "M": "",
      "PIN": "670645",
      "DID": "12"
    },
    {
      "POSTID": 278,
      "E": "Panavally",
      "M": "പനവല്ലി",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 279,
      "E": "Payyampally",
      "M": "",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 280,
      "E": "Bavali",
      "M": "ബാവലി",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 281,
      "E": "Vavali",
      "M": "",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 282,
      "E": "Kartikulam",
      "M": "കാര്‍ട്ടിക്കുളം",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 283,
      "E": "Tholpetty",
      "M": "തോല്‍പ്പെട്ടി",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 284,
      "E": "Thirunelly",
      "M": "തിരുനെല്ലി",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 285,
      "E": "Thirunelly Temple",
      "M": "തിരുനെല്ലി ടെമ്പിള്‍",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 286,
      "E": "Thrissilery",
      "M": "തൃശ്ശിലേരി",
      "PIN": "670646",
      "DID": "12"
    },
    {
      "POSTID": 287,
      "E": "Eruvatty",
      "M": "എരുവട്ടി",
      "PIN": "670647",
      "DID": "13"
    },
    {
      "POSTID": 288,
      "E": "Ummanchira",
      "M": "ഉമ്മന്‍ചിറ",
      "PIN": "670649",
      "DID": "13"
    },
    {
      "POSTID": 289,
      "E": "Nedumpoil",
      "M": "നിടുംപൊയില്‍",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 290,
      "E": "Poolakutty",
      "M": "പൂളക്കുറ്റി",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 291,
      "E": "Alacherry",
      "M": "ആലച്ചേരി",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 292,
      "E": "Vayannur",
      "M": "വായന്നൂര്‍",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 293,
      "E": "Kannavam Colony",
      "M": "കണ്ണവം കോളനി",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 294,
      "E": "Kannoth",
      "M": "കണ്ണോത്ത്",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 295,
      "E": "Chittariparamba",
      "M": "ചിറ്റാരിപ്പറമ്പ്",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 296,
      "E": "Peruva",
      "M": "പെരുവ",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 297,
      "E": "Cheruvancheri",
      "M": "ചെറുവാഞ്ചേരി",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 298,
      "E": "Kolayad",
      "M": "കോളയാട്",
      "PIN": "670650",
      "DID": "13"
    },
    {
      "POSTID": 299,
      "E": "Kottiyur",
      "M": "കൊട്ടിയൂര്‍",
      "PIN": "670651",
      "DID": "13"
    },
    {
      "POSTID": 300,
      "E": "Palayad",
      "M": "പാലയാട്",
      "PIN": "670661",
      "DID": "13"
    },
    {
      "POSTID": 301,
      "E": "Melur Tellichery",
      "M": "മേലൂര്‍-തലശ്ശേരി",
      "PIN": "670661",
      "DID": "13"
    },
    {
      "POSTID": 302,
      "E": "Muzhappilangad",
      "M": "മുഴപ്പിലങ്ങാട്",
      "PIN": "670662",
      "DID": "13"
    },
    {
      "POSTID": 303,
      "E": "Edakkad",
      "M": "എടക്കാട്",
      "PIN": "670663",
      "DID": "13"
    },
    {
      "POSTID": 304,
      "E": "Kadambur",
      "M": "കടമ്പൂര്‍",
      "PIN": "670663",
      "DID": "13"
    },
    {
      "POSTID": 305,
      "E": "Paral",
      "M": "പാറാല്‍",
      "PIN": "670671",
      "DID": "13"
    },
    {
      "POSTID": 306,
      "E": "Aniyaram",
      "M": "അണിയാരം",
      "PIN": "670672",
      "DID": "13"
    },
    {
      "POSTID": 307,
      "E": "Chokli",
      "M": "ചൊക്ലി",
      "PIN": "670672",
      "DID": "13"
    },
    {
      "POSTID": 308,
      "E": "Muzhakunnu",
      "M": "മുഴക്കുന്ന്",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 309,
      "E": "Muzhakunnu Bazar",
      "M": "",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 310,
      "E": "Aralam Farm",
      "M": "ആറളംഫാം",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 311,
      "E": "Perumpunna",
      "M": "പെരുമ്പുന്ന",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 312,
      "E": "Vellarvally",
      "M": "വെള്ളാര്‍വള്ളി",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 313,
      "E": "Kolakkad",
      "M": "കൊളക്കാട്",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 314,
      "E": "Thondiyil",
      "M": "തൊണ്ടിയില്‍",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 315,
      "E": "Peravoor",
      "M": "പേരാവൂര്‍",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 316,
      "E": "Melmuringodi",
      "M": "മേല്‍മുരിങ്ങോടി",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 317,
      "E": "Tholambra",
      "M": "തോലമ്പ്ര",
      "PIN": "670673",
      "DID": "13"
    },
    {
      "POSTID": 318,
      "E": "Atakkathode",
      "M": "",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 319,
      "E": "Ambayathode",
      "M": "അമ്പായത്തോട്",
      "PIN": "670651",
      "DID": "13"
    },
    {
      "POSTID": 320,
      "E": "Malayampadi",
      "M": "മലയാംപടി",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 321,
      "E": "Adakkathode",
      "M": "അടക്കാത്തോട്",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 322,
      "E": "Kalayampadi",
      "M": "",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 323,
      "E": "Santhgiri",
      "M": "ശാന്തിഗിരി",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 324,
      "E": "Kanichar",
      "M": "കണിച്ചാര്‍",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 325,
      "E": "Chungakkunnu",
      "M": "ചുങ്കക്കുന്ന്",
      "PIN": "670651",
      "DID": "13"
    },
    {
      "POSTID": 326,
      "E": "Vellunni",
      "M": "വെള്ളൂന്നി",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 327,
      "E": "Chettiamparamba",
      "M": "ചെട്ടിയാംപറമ്പ്",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 328,
      "E": "Kelakom",
      "M": "കേളകം",
      "PIN": "670674",
      "DID": "13"
    },
    {
      "POSTID": 329,
      "E": "Puliyanambram",
      "M": "പുളിയനമ്പ്രം",
      "PIN": "670675",
      "DID": "13"
    },
    {
      "POSTID": 330,
      "E": "Kidanhi",
      "M": "കിടഞ്ഞി",
      "PIN": "670675",
      "DID": "13"
    },
    {
      "POSTID": 331,
      "E": "Peringathur",
      "M": "പെരിങ്ങത്തൂര്‍",
      "PIN": "670675",
      "DID": "13"
    },
    {
      "POSTID": 332,
      "E": "Mekkunnu",
      "M": "മേക്കുന്ന്",
      "PIN": "670675",
      "DID": "13"
    },
    {
      "POSTID": 333,
      "E": "Kadavathur",
      "M": "കടവത്തൂര്‍",
      "PIN": "670676",
      "DID": "13"
    },
    {
      "POSTID": 334,
      "E": "Manathana",
      "M": "മണത്തണ",
      "PIN": "670677",
      "DID": "13"
    },
    {
      "POSTID": 335,
      "E": "Pullookkara",
      "M": "പുല്ലൂക്കര",
      "PIN": "670678",
      "DID": "13"
    },
    {
      "POSTID": 336,
      "E": "Panniyannur",
      "M": "പന്ന്യന്നൂര്‍",
      "PIN": "670679",
      "DID": "13"
    },
    {
      "POSTID": 337,
      "E": "Pathayakunnu",
      "M": "പത്തായക്കുന്ന്",
      "PIN": "670691",
      "DID": "13"
    },
    {
      "POSTID": 338,
      "E": "Pukkot Kuthuparamba",
      "M": "പൂക്കോട്",
      "PIN": "670691",
      "DID": "13"
    },
    {
      "POSTID": 339,
      "E": "Mudiyanga",
      "M": "മുതിയങ്ങ",
      "PIN": "670691",
      "DID": "13"
    },
    {
      "POSTID": 340,
      "E": "Kottayampoil",
      "M": "കോട്ടയംപൊയില്‍",
      "PIN": "670691",
      "DID": "13"
    },
    {
      "POSTID": 341,
      "E": "Panoor",
      "M": "പാനൂര്‍",
      "PIN": "670692",
      "DID": "13"
    },
    {
      "POSTID": 342,
      "E": "Puthur Panoor",
      "M": "പുത്തൂര്‍",
      "PIN": "670692",
      "DID": "13"
    },
    {
      "POSTID": 343,
      "E": "Elangot",
      "M": "എലാങ്കോട്",
      "PIN": "670692",
      "DID": "13"
    },
    {
      "POSTID": 344,
      "E": "Mokeri",
      "M": "മൊകേരി",
      "PIN": "670692",
      "DID": "13"
    },
    {
      "POSTID": 345,
      "E": "Chendayad",
      "M": "ചെണ്ടയാട്",
      "PIN": "670692",
      "DID": "13"
    },
    {
      "POSTID": 346,
      "E": "Narikodemala",
      "M": "നരിക്കോട് മല",
      "PIN": "670693",
      "DID": "13"
    },
    {
      "POSTID": 347,
      "E": "Vilakottur",
      "M": "വിളക്കോട്ടൂര്‍",
      "PIN": "670693",
      "DID": "13"
    },
    {
      "POSTID": 348,
      "E": "Kallickandy",
      "M": "കല്ലിക്കണ്ടി",
      "PIN": "670693",
      "DID": "13"
    },
    {
      "POSTID": 349,
      "E": "Poyilur",
      "M": "പൊയിലൂര്‍",
      "PIN": "670693",
      "DID": "13"
    },
    {
      "POSTID": 350,
      "E": "Cheruparamba",
      "M": "ചെറുപറമ്പ്",
      "PIN": "670693",
      "DID": "13"
    },
    {
      "POSTID": 351,
      "E": "Thuvakunnu",
      "M": "തൂവക്കുന്ന്",
      "PIN": "670693",
      "DID": "13"
    },
    {
      "POSTID": 352,
      "E": "Koorara",
      "M": "കൂരാറ",
      "PIN": "670694",
      "DID": "13"
    },
    {
      "POSTID": 353,
      "E": "Champad",
      "M": "ചമ്പാട്",
      "PIN": "670694",
      "DID": "13"
    },
    {
      "POSTID": 354,
      "E": "Nirmalagiri",
      "M": "നിര്‍മ്മലഗിരി",
      "PIN": "670701",
      "DID": "13"
    },
    {
      "POSTID": 355,
      "E": "Neerveli",
      "M": "നീര്‍വേലി",
      "PIN": "670701",
      "DID": "13"
    },
    {
      "POSTID": 356,
      "E": "Palaparamba",
      "M": "പാലാപ്പറമ്പ്",
      "PIN": "670701",
      "DID": "13"
    },
    {
      "POSTID": 357,
      "E": "Mallannur",
      "M": "മള്ളന്നൂര്‍",
      "PIN": "670701",
      "DID": "13"
    },
    {
      "POSTID": 358,
      "E": "Naduvanad",
      "M": "നടുവനാട്",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 359,
      "E": "Pazhassi Raja Nagar",
      "M": "പഴശ്ശിരാജ നഗര്‍",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 360,
      "E": "Mattanur",
      "M": "മട്ടന്നൂര്‍",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 361,
      "E": "Mattanur College",
      "M": "മട്ടന്നൂര്‍ കോളേജ്",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 362,
      "E": "Malur",
      "M": "മാലൂര്‍",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 363,
      "E": "Uruvachal",
      "M": "ഉരുവച്ചാല്‍",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 364,
      "E": "Uliyil",
      "M": "ഉളിയില്‍",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 365,
      "E": "Kayani",
      "M": "കയനി",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 366,
      "E": "Kanhileri",
      "M": "കാഞ്ഞിലേരി",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 367,
      "E": "Kara-Peravoor",
      "M": "കാര പേരാവൂര്‍",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 368,
      "E": "Sivapuram",
      "M": "ശിവപുരം",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 369,
      "E": "Chavasseri",
      "M": "ചാവശ്ശേരി",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 370,
      "E": "Porora",
      "M": "പൊറോറ",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 371,
      "E": "Kolari",
      "M": "കോളാരി",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 372,
      "E": "Thilenkeri",
      "M": "തില്ലങ്കേരി",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 373,
      "E": "Punnad",
      "M": "പുന്നാട്",
      "PIN": "670703",
      "DID": "13"
    },
    {
      "POSTID": 374,
      "E": "Padiyur Cannanore",
      "M": "പടിയൂര്‍ കണ്ണൂര്‍",
      "PIN": "670703",
      "DID": "13"
    },
    {
      "POSTID": 375,
      "E": "Madathil",
      "M": "മാടത്തില്‍",
      "PIN": "670703",
      "DID": "13"
    },
    {
      "POSTID": 376,
      "E": "Iritty",
      "M": "ഇരിട്ടി",
      "PIN": "670703",
      "DID": "13"
    },
    {
      "POSTID": 377,
      "E": "Vilakode",
      "M": "വിളക്കോട്",
      "PIN": "670703",
      "DID": "13"
    },
    {
      "POSTID": 378,
      "E": "Kalluvayal",
      "M": "കല്ലുവയല്‍",
      "PIN": "670703",
      "DID": "13"
    },
    {
      "POSTID": 379,
      "E": "Keezhur Iritty",
      "M": "കീഴൂര്‍ ഇരിട്ടി",
      "PIN": "670703",
      "DID": "13"
    },
    {
      "POSTID": 380,
      "E": "Payam",
      "M": "പായം ",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 381,
      "E": "Payam East",
      "M": "പായം ഈസ്റ്റ്",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 382,
      "E": "Mundayamparamba",
      "M": "മുണ്ടയാംപറമ്പ്",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 383,
      "E": "Aralam",
      "M": "ആറളം",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 384,
      "E": "Edapuzha",
      "M": "എടപ്പുഴ",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 385,
      "E": "Veerpad",
      "M": "വീര്‍പ്പാട്",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 386,
      "E": "Keezhpally",
      "M": "കീഴ്പ്പള്ളി",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 387,
      "E": "Koomanthodu",
      "M": "കൂമന്‍തോട്",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 388,
      "E": "Velimanam",
      "M": "വെളിമാനം",
      "PIN": "670704",
      "DID": "13"
    },
    {
      "POSTID": 389,
      "E": "Nuchiyad",
      "M": "നുച്ചിയാട്",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 390,
      "E": "Parikkalam",
      "M": "പരിക്കളം",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 391,
      "E": "Arabi",
      "M": "അറബി",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 392,
      "E": "Manippara",
      "M": "മണിപ്പാറ",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 393,
      "E": "Manikkadavu",
      "M": "മണിക്കടവ്",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 394,
      "E": "Ulikkal",
      "M": "ഉളിക്കല്‍",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 395,
      "E": "Vattiamthode",
      "M": "വട്ടിയാംതോട്",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 396,
      "E": "Kalanki",
      "M": "കാലാങ്കി",
      "PIN": "670705",
      "DID": "13"
    },
    {
      "POSTID": 397,
      "E": "Angadikadavu",
      "M": "അങ്ങാടിക്കടവ്",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 398,
      "E": "Randamkadavu",
      "M": "രണ്ടാംകടവ്",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 399,
      "E": "Kiliyanthara",
      "M": "കിളിയന്തറ",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 400,
      "E": "Koottupuzha",
      "M": "കൂട്ടുപുഴ",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 401,
      "E": "Kacherikkadavu",
      "M": "കച്ചേരിക്കടവ്",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 402,
      "E": "Charal",
      "M": "ചരള്‍",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 403,
      "E": "Perinkeri",
      "M": "പെരിങ്കരി",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 404,
      "E": "Kolithattu",
      "M": "കോളിത്തട്ട്",
      "PIN": "670706",
      "DID": "13"
    },
    {
      "POSTID": 405,
      "E": "Nadavayal",
      "M": "നടവയല്‍",
      "PIN": "670721",
      "DID": "12"
    },
    {
      "POSTID": 406,
      "E": "Panamaram",
      "M": "പനമരം",
      "PIN": "670721",
      "DID": "12"
    },
    {
      "POSTID": 407,
      "E": "Arinjerumal",
      "M": "അരിഞ്ചേര്‍മല",
      "PIN": "670721",
      "DID": "12"
    },
    {
      "POSTID": 408,
      "E": "Echchame",
      "M": "ഏച്ചോം",
      "PIN": "670721",
      "DID": "12"
    },
    {
      "POSTID": 409,
      "E": "Kayakunnu",
      "M": "കായക്കുന്ന്",
      "PIN": "670721",
      "DID": "12"
    },
    {
      "POSTID": 410,
      "E": "Cherukattor",
      "M": "ചെറുകാട്ടൂര്‍",
      "PIN": "670721",
      "DID": "12"
    },
    {
      "POSTID": 411,
      "E": "Makkiad",
      "M": "മക്കിയാട്",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 412,
      "E": "Mattilayam",
      "M": "മട്ടിലയം",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 413,
      "E": "Vanhode",
      "M": "വഞ്ഞോട്",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 414,
      "E": "Kattayad",
      "M": "കട്ടയാട്",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 415,
      "E": "Kunhome",
      "M": "കുഞ്ഞോം",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 416,
      "E": "Vellamunda",
      "M": "വെള്ളമുണ്ട",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 417,
      "E": "Kottarakkunnu",
      "M": "കൊട്ടാരക്കുന്ന്",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 418,
      "E": "Thondernad",
      "M": "തൊണ്ടര്‍നാട്",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 419,
      "E": "Thettamala",
      "M": "തേറ്റമല",
      "PIN": "670731",
      "DID": "12"
    },
    {
      "POSTID": 420,
      "E": "Tharuvana",
      "M": "തരുവണ",
      "PIN": "670732",
      "DID": "12"
    },
    {
      "POSTID": 421,
      "E": "Parapram",
      "M": "പാറപ്രം",
      "PIN": "670741",
      "DID": "13"
    },
    {
      "POSTID": 422,
      "E": "Pinarayi",
      "M": "പിണറായി",
      "PIN": "670741",
      "DID": "13"
    },
    {
      "POSTID": 423,
      "E": "Pathiriyad",
      "M": "പാതിരിയാട്",
      "PIN": "670741",
      "DID": "13"
    },
    {
      "POSTID": 424,
      "E": "Mambram",
      "M": "മമ്പറം",
      "PIN": "670741",
      "DID": "13"
    },
    {
      "POSTID": 425,
      "E": "Neervaram",
      "M": "നീര്‍വാരം",
      "PIN": "670721",
      "DID": "12"
    },
    {
      "POSTID": 426,
      "E": "Adakathbali",
      "M": "അടുക്കത്ത് ബയില്‍",
      "PIN": "671121",
      "DID": "14"
    },
    {
      "POSTID": 427,
      "E": "Kasaragod",
      "M": "കാസര്‍കോഡ്",
      "PIN": "671121",
      "DID": "14"
    },
    {
      "POSTID": 428,
      "E": "Talangara",
      "M": "തളങ്കര",
      "PIN": "671122",
      "DID": "14"
    },
    {
      "POSTID": 429,
      "E": "Muttathody",
      "M": "മുട്ടത്തോടി",
      "PIN": "671123",
      "DID": "14"
    },
    {
      "POSTID": 430,
      "E": "Alampady",
      "M": "ആലംപാടി",
      "PIN": "671123",
      "DID": "14"
    },
    {
      "POSTID": 431,
      "E": "Vidhya Nagar",
      "M": "വിദ്യാ നഗര്‍",
      "PIN": "671123",
      "DID": "14"
    },
    {
      "POSTID": 432,
      "E": "Kallakatta",
      "M": "കല്ലക്കട്ട",
      "PIN": "671123",
      "DID": "14"
    },
    {
      "POSTID": 433,
      "E": "Hidayath Nagar",
      "M": "ഹിദായത്ത് നഗര്‍",
      "PIN": "671123",
      "DID": "14"
    },
    {
      "POSTID": 434,
      "E": "Cheroor",
      "M": "ചേരൂര്‍",
      "PIN": "671123",
      "DID": "14"
    },
    {
      "POSTID": 435,
      "E": "Patla",
      "M": "പട്ള",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 436,
      "E": "Madhur",
      "M": "മധൂര്‍",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 437,
      "E": "Shiribagilu",
      "M": "ഷിരിബാഗിലു",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 438,
      "E": "Kudlu",
      "M": "കുഡ്ലു",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 439,
      "E": "Bedradka",
      "M": "ബദ്രടുക്ക",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 440,
      "E": "Mayipady",
      "M": "മായിപ്പാടി",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 441,
      "E": "Ramdas Nagar",
      "M": "രാംദാസ് നഗര്‍",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 442,
      "E": "Mogral Puthur",
      "M": "മൊഗ്രാല്‍ പുത്തൂര്‍",
      "PIN": "671124",
      "DID": "14"
    },
    {
      "POSTID": 443,
      "E": "Maniyat",
      "M": "മാണിയാട്ട്",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 444,
      "E": "Edachakai",
      "M": "എടച്ചാക്കൈ",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 445,
      "E": "Olat",
      "M": "ഓലാട്ട്",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 446,
      "E": "Vellap",
      "M": "വെള്ളാപ്പ്",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 447,
      "E": "Trikarpur",
      "M": "തൃക്കരിപ്പൂര്‍",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 448,
      "E": "Trikarpur Kadapuram",
      "M": "തൃക്കരിപ്പൂര്‍ കടപ്പുറം",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 449,
      "E": "Elambachi",
      "M": "ഇളംബച്ചി",
      "PIN": "671311",
      "DID": "14"
    },
    {
      "POSTID": 450,
      "E": "Trikarpur South",
      "M": "തെക്കേ തൃക്കരിപ്പൂര്‍",
      "PIN": "671311",
      "DID": "14"
    },
    {
      "POSTID": 451,
      "E": "Padne",
      "M": "പടന്ന",
      "PIN": "671312",
      "DID": "14"
    },
    {
      "POSTID": 452,
      "E": "Valiyaparamba",
      "M": "വലിയപറമ്പ",
      "PIN": "671312",
      "DID": "14"
    },
    {
      "POSTID": 453,
      "E": "Valiapoil",
      "M": "വലിയപൊയില്‍",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 454,
      "E": "Kayyur",
      "M": "കയ്യൂര്‍",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 455,
      "E": "Kilakote",
      "M": "ക്ലായിക്കോട്",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 456,
      "E": "Chimeni",
      "M": "ചീമേനി",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 457,
      "E": "Pettikundu",
      "M": "പെട്ടിക്കുണ്ട്",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 458,
      "E": "Perumbatta",
      "M": "പെരുമ്പട്ട",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 459,
      "E": "Podavur",
      "M": "പൊതാവൂര്‍",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 460,
      "E": "Cheruvathur",
      "M": "ചെറുവത്തൂര്‍",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 461,
      "E": "Kaithakkad",
      "M": "കൈതക്കാട്",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 462,
      "E": "Timiri-Cheruvathur",
      "M": "തിമിരി-ചെറുവത്തൂര്‍",
      "PIN": "671313",
      "DID": "14"
    },
    {
      "POSTID": 463,
      "E": "Nileshwar",
      "M": "നീലേശ്വരം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 464,
      "E": "Puthariadukkam",
      "M": "പുത്തരിയടുക്കം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 465,
      "E": "Pudukai",
      "M": "പുതുക്കൈ",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 466,
      "E": "Bangalam",
      "M": "ബങ്കളം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 467,
      "E": "Bheemanadi",
      "M": "ഭീമനടി",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 468,
      "E": "Madikai",
      "M": "മടിക്കൈ",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 469,
      "E": "Uppilikai ",
      "M": "ഉപ്പിലിക്കൈ",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 470,
      "E": "Erikulam",
      "M": "എരിക്കുളം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 471,
      "E": "Elerithattu",
      "M": "എളേരിത്തട്ട്",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 472,
      "E": "Ozhinha Valappu",
      "M": "ഒഴിഞ്ഞവളപ്പ്",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 473,
      "E": "Karindala",
      "M": "കരിന്തളം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 474,
      "E": "Kattipoll",
      "M": "കാട്ടിപ്പൊയില്‍",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 475,
      "E": "Kalichanadukam",
      "M": "കാലിച്ചാനടുക്കം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 476,
      "E": "Chathamath Nileshwar",
      "M": "ചാത്തമത്ത്",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 477,
      "E": "Chayoth",
      "M": "ചായ്യോത്ത്",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 478,
      "E": "Periyanganam",
      "M": "പെരിയങ്ങാനം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 479,
      "E": "West Eleri",
      "M": "വെസ്റ്റ് എളേരി",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 480,
      "E": "Kollampara",
      "M": "കൊല്ലംപാറ",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 481,
      "E": "Thaikadapuram",
      "M": "തൈക്കടപ്പുറം",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 482,
      "E": "Kottamala Estate",
      "M": "കോട്ടമല എസ്റ്റേറ്റ്",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 483,
      "E": "Kanhangad",
      "M": "കാഞ്ഞങ്ങാട്",
      "PIN": "671315",
      "DID": "14"
    },
    {
      "POSTID": 484,
      "E": "Kanhangad South",
      "M": "കാഞ്ഞങ്ങാട് സൗത്ത്",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 485,
      "E": "Bekal Fort",
      "M": "പള്ളിക്കര",
      "PIN": "671316",
      "DID": "14"
    },
    {
      "POSTID": 486,
      "E": "Pakkom",
      "M": "പാക്കം",
      "PIN": "671316",
      "DID": "14"
    },
    {
      "POSTID": 487,
      "E": "Movval",
      "M": "മൗവ്വല്‍",
      "PIN": "671316",
      "DID": "14"
    },
    {
      "POSTID": 488,
      "E": "Ravaneswaram",
      "M": "രാവണേശ്വരം",
      "PIN": "671316",
      "DID": "14"
    },
    {
      "POSTID": 489,
      "E": "Keekan",
      "M": "കീക്കാന്‍",
      "PIN": "671316",
      "DID": "14"
    },
    {
      "POSTID": 490,
      "E": "Chittari",
      "M": "ചിത്താരി",
      "PIN": "671316",
      "DID": "14"
    },
    {
      "POSTID": 491,
      "E": "Periye",
      "M": "പെരിയ",
      "PIN": "671316",
      "DID": "14"
    },
    {
      "POSTID": 492,
      "E": "Paravanadukam ",
      "M": "പരവനടുക്കം",
      "PIN": "671317",
      "DID": "14"
    },
    {
      "POSTID": 493,
      "E": "Kalanad",
      "M": "കളനാട്",
      "PIN": "671317",
      "DID": "14"
    },
    {
      "POSTID": 494,
      "E": "Chandragiri",
      "M": "ചന്ദ്രഗിരി",
      "PIN": "671317",
      "DID": "14"
    },
    {
      "POSTID": 495,
      "E": "Perumbala",
      "M": "പെരുമ്പള",
      "PIN": "671317",
      "DID": "14"
    },
    {
      "POSTID": 496,
      "E": "Panayal",
      "M": "പനയാല്‍",
      "PIN": "671318",
      "DID": "14"
    },
    {
      "POSTID": 497,
      "E": "Bekal",
      "M": "ബേക്കല്‍",
      "PIN": "671318",
      "DID": "14"
    },
    {
      "POSTID": 498,
      "E": "Udma",
      "M": "ഉദുമ",
      "PIN": "671319",
      "DID": "14"
    },
    {
      "POSTID": 499,
      "E": "Udma-Padinhare ",
      "M": "ഉദുമ - പടിഞ്ഞാറ്",
      "PIN": "671319",
      "DID": "14"
    },
    {
      "POSTID": 500,
      "E": "Mylatty",
      "M": "മൈലാട്ടി",
      "PIN": "671319",
      "DID": "14"
    },
    {
      "POSTID": 501,
      "E": "Chemnad",
      "M": "ചെമ്മനാട്",
      "PIN": "671317",
      "DID": "14"
    },
    {
      "POSTID": 502,
      "E": "Dharmathadka",
      "M": "ധര്‍മ്മത്തടുക്ക",
      "PIN": "671324",
      "DID": "14"
    },
    {
      "POSTID": 503,
      "E": "Nirchal",
      "M": "നീര്‍ച്ചാല്‍",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 504,
      "E": "Puthige",
      "M": "പുത്തിഗെ",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 505,
      "E": "Badur",
      "M": "ബാഡൂര്‍",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 506,
      "E": "Arikadi",
      "M": "ആരിക്കാടി",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 507,
      "E": "Mugu",
      "M": "മുഗു",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 508,
      "E": "Angadimogaru",
      "M": "അംഗടിമൊഗര്‍",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 509,
      "E": "Ichalampady",
      "M": "ഇച്ചിലംപാടി",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 510,
      "E": "Ullody",
      "M": "ഉള്ളോടി",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 511,
      "E": "Ednad",
      "M": "എടനാട്",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 512,
      "E": "Kannur",
      "M": "കണ്ണൂര്‍",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 513,
      "E": "Kidoor",
      "M": "കിദൂര്‍",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 514,
      "E": "Kumbla",
      "M": "കുമ്പള",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 515,
      "E": "Kudalmerkala",
      "M": "കുടല്‍മെര്‍ക്കല",
      "PIN": "671324",
      "DID": "14"
    },
    {
      "POSTID": 516,
      "E": "Shiriya",
      "M": "ഷിറിയ",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 517,
      "E": "Permude",
      "M": "പെര്‍മുദേ",
      "PIN": "671324",
      "DID": "14"
    },
    {
      "POSTID": 518,
      "E": "Bombrana",
      "M": "ബംബ്രാണ",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 519,
      "E": "Mogral",
      "M": "മൊഗ്രാല്‍",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 520,
      "E": "Kodiamme",
      "M": "കൊടിയമ്മ",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 521,
      "E": "Bela",
      "M": "ബേള",
      "PIN": "671321",
      "DID": "14"
    },
    {
      "POSTID": 522,
      "E": "Ammeri",
      "M": "അമ്മേരി",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 523,
      "E": "Uppala",
      "M": "ഉപ്പള",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 524,
      "E": "Uppala Gate",
      "M": "ഉപ്പള ഗേറ്റ്",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 525,
      "E": "Kayyar",
      "M": "കയ്യാര്‍",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 526,
      "E": "Kurudapadavu",
      "M": "കുരുടപദവ്",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 527,
      "E": "Chippar",
      "M": "ചിപ്പാര്‍",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 528,
      "E": "Beripadavu",
      "M": "ബെരിപദവ്",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 529,
      "E": "Bekur",
      "M": "ബേക്കൂര്‍",
      "PIN": "671322",
      "DID": "14"
    },
    {
      "POSTID": 530,
      "E": "Pathoor",
      "M": "പാത്തൂര്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 531,
      "E": "Pavoor",
      "M": "പാവൂര്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 532,
      "E": "Badaje",
      "M": "ബഡാജെ",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 533,
      "E": "Miyapadavu",
      "M": "മിയപദവ്",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 534,
      "E": "Majibail",
      "M": "മജിബൈല്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 535,
      "E": "Moodambail",
      "M": "മൂടംബയില്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 536,
      "E": "Manjeshwar",
      "M": "മഞ്ചേശ്വരം",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 537,
      "E": "Anakallu",
      "M": "ആനക്കല്ല്",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 538,
      "E": "Udayavara",
      "M": "ഉദ്യവാര്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 539,
      "E": "Kunjathur",
      "M": "കുഞ്ചത്തൂര്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 540,
      "E": "Kadambar",
      "M": "കടമ്പാര്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 541,
      "E": "Charla",
      "M": "ചാര്‍ള",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 542,
      "E": "Kodlamogaru",
      "M": "കൊട്ലമൊഗ്റു",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 543,
      "E": "Vorkadi",
      "M": "വോര്‍ക്കാടി",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 544,
      "E": "Koliyur",
      "M": "കോളിയൂര്‍",
      "PIN": "671323",
      "DID": "14"
    },
    {
      "POSTID": 545,
      "E": "Mangalpady",
      "M": "മംഗല്‍പാടി",
      "PIN": "671324",
      "DID": "14"
    },
    {
      "POSTID": 546,
      "E": "Ichilangodu",
      "M": "ഇച്ചിലംകോട്",
      "PIN": "671324",
      "DID": "14"
    },
    {
      "POSTID": 547,
      "E": "Heroor",
      "M": "ഹേറൂര്‍",
      "PIN": "671324",
      "DID": "14"
    },
    {
      "POSTID": 548,
      "E": "Manikoth",
      "M": "മാണിക്കോത്ത്",
      "PIN": "671326",
      "DID": "14"
    },
    {
      "POSTID": 549,
      "E": "Mandapam",
      "M": "മണ്ഡപം",
      "PIN": "671326",
      "DID": "14"
    },
    {
      "POSTID": 550,
      "E": "Chittarikkal",
      "M": "ചിറ്റാരിക്കല്‍",
      "PIN": "671326",
      "DID": "14"
    },
    {
      "POSTID": 551,
      "E": "Padnekkad ",
      "M": "പടന്നക്കാട്",
      "PIN": "671314",
      "DID": "14"
    },
    {
      "POSTID": 552,
      "E": "Kottapuram-Kanhangad",
      "M": "കോട്ടപ്പുറം",
      "PIN": "671341",
      "DID": "14"
    },
    {
      "POSTID": 553,
      "E": "Mavila Kadapuram ",
      "M": "മാവില കടപ്പുറം",
      "PIN": "671312",
      "DID": "14"
    },
    {
      "POSTID": 554,
      "E": "Padne Kadapuram ",
      "M": "പടന്ന കടപ്പുറം",
      "PIN": "671312",
      "DID": "14"
    },
    {
      "POSTID": 555,
      "E": "Bayar",
      "M": "ബായാര്‍",
      "PIN": "671348",
      "DID": "14"
    },
    {
      "POSTID": 556,
      "E": "Paivalike",
      "M": "പൈവളികെ",
      "PIN": "671348",
      "DID": "14"
    },
    {
      "POSTID": 557,
      "E": "Udinur",
      "M": "ഉദിനൂര്‍",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 558,
      "E": "Udumbumthala",
      "M": "ഉടുമ്പുന്തല",
      "PIN": "671311",
      "DID": "14"
    },
    {
      "POSTID": 559,
      "E": "Achanthuruthi",
      "M": "അച്ചാംതുരുത്തി",
      "PIN": "671351",
      "DID": "14"
    },
    {
      "POSTID": 560,
      "E": "Thuruthi",
      "M": "തുരുത്തി",
      "PIN": "671351",
      "DID": "14"
    },
    {
      "POSTID": 561,
      "E": "Pilicodes",
      "M": "പിലിക്കോട്",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 562,
      "E": "Kodakkad",
      "M": "കൊടക്കാട്",
      "PIN": "671310",
      "DID": "14"
    },
    {
      "POSTID": 563,
      "E": "Parakalayi",
      "M": "പറക്കളായി",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 564,
      "E": "Pullur",
      "M": "പുല്ലൂര്‍",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 565,
      "E": "Padimaruth",
      "M": "പടിമരുത്",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 566,
      "E": "Balla",
      "M": "ബല്ല",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 567,
      "E": "Achikanam",
      "M": "ഏച്ചിക്കാനം",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 568,
      "E": "Ajanur",
      "M": "അജാനൂര്‍",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 569,
      "E": "Attenganam",
      "M": "അട്ടേങ്ങാനം",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 570,
      "E": "Anandashrama",
      "M": "ആനന്ദാശ്രമം",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 571,
      "E": "Iriya",
      "M": "ഇരിയ",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 572,
      "E": "Kanhirapoil",
      "M": "കാഞ്ഞിരപ്പൊയില്‍",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 573,
      "E": "Kanhiradukam ",
      "M": "കാഞ്ഞിരടുക്കം",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 574,
      "E": "Haripuram",
      "M": "ഹരിപുരം",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 575,
      "E": "Kolavayal",
      "M": "കൊളവയല്‍",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 576,
      "E": "Kodoth",
      "M": "കോടോത്ത്",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 577,
      "E": "Thayanoor",
      "M": "തായന്നൂര്‍",
      "PIN": "671531",
      "DID": "14"
    },
    {
      "POSTID": 578,
      "E": "Panathady",
      "M": "പനത്തടി",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 579,
      "E": "Panathur",
      "M": "പാണത്തൂര്‍",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 580,
      "E": "Balanthode",
      "M": "ബളാന്തോട്",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 581,
      "E": "Malakallu",
      "M": "മാലക്കല്ല്",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 582,
      "E": "Rajapuram",
      "M": "രാജപുരം",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 583,
      "E": "Ranipuram",
      "M": "റാണിപുരം",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 584,
      "E": "Kallappally",
      "M": "കല്ലപ്പള്ളി",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 585,
      "E": "Chamundikunnu",
      "M": "ചാമുണ്ഡിക്കുന്ന്",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 586,
      "E": "Kottody",
      "M": "കൊട്ടോടി",
      "PIN": "671532",
      "DID": "14"
    },
    {
      "POSTID": 587,
      "E": "Natakkal",
      "M": "നാട്ടക്കല്‍",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 588,
      "E": "Parappa",
      "M": "പരപ്പ",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 589,
      "E": "Paramba",
      "M": "പറമ്പ",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 590,
      "E": "Punnakkunnu",
      "M": "പുന്നക്കുന്ന്",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 591,
      "E": "Balal",
      "M": "ബളാല്‍",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 592,
      "E": "Plachikara",
      "M": "പ്ലാച്ചിക്കര",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 593,
      "E": "Muttom Kadavil",
      "M": "മുട്ടോംകടവില്‍",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 594,
      "E": "Vallikadavu",
      "M": "വള്ളിക്കടവ്",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 595,
      "E": "Kanakappally",
      "M": "കനകപള്ളി",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 596,
      "E": "Kinanur",
      "M": "കിനാനൂര്‍",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 597,
      "E": "Chully",
      "M": "ചുള്ളി",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 598,
      "E": "Vellarikundu",
      "M": "വെള്ളരിക്കുണ്ട്",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 599,
      "E": "Konnakkad",
      "M": "കൊന്നക്കാട്",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 600,
      "E": "Darkas",
      "M": "ദര്‍ക്കാസ്",
      "PIN": "671533",
      "DID": "14"
    },
    {
      "POSTID": 601,
      "E": "Bandadka",
      "M": "ബന്തടുക്ക",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 602,
      "E": "Manadukam",
      "M": "മാനടുക്കം",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 603,
      "E": "Manimoola",
      "M": "മാണിമൂല",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 604,
      "E": "Munnad",
      "M": "മുന്നാട്",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 605,
      "E": "Edneer",
      "M": "ഇടനീര്‍",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 606,
      "E": "Sankarampady",
      "M": "ശങ്കരംപാടി",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 607,
      "E": "Karivedakam",
      "M": "കരിവേടകം",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 608,
      "E": "Kuttikol",
      "M": "കുറ്റിക്കോല്‍",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 609,
      "E": "Kundankuzhy",
      "M": "കുണ്ടംകുഴി",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 610,
      "E": "Samakochi",
      "M": "ചാമക്കൊച്ചി",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 611,
      "E": "Kolathur",
      "M": "കൊളത്തൂര്‍",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 612,
      "E": "Changala",
      "M": "ചെങ്കള",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 613,
      "E": "Thekkil",
      "M": "തെക്കില്‍",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 614,
      "E": "Bedadka",
      "M": "ബേഡഡുക്ക",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 615,
      "E": "Malla",
      "M": "മല്ല",
      "PIN": "671542",
      "DID": "14"
    },
    {
      "POSTID": 616,
      "E": "Muliyar",
      "M": "മുളിയാര്‍",
      "PIN": "671542",
      "DID": "14"
    },
    {
      "POSTID": 617,
      "E": "Iriyanni",
      "M": "ഇരിയണ്ണി",
      "PIN": "671542",
      "DID": "14"
    },
    {
      "POSTID": 618,
      "E": "Vattamthatta",
      "M": "വട്ടംതട്ട",
      "PIN": "671542",
      "DID": "14"
    },
    {
      "POSTID": 619,
      "E": "Kanathur",
      "M": "കാനത്തൂര്‍",
      "PIN": "671542",
      "DID": "14"
    },
    {
      "POSTID": 620,
      "E": "Karadaka",
      "M": "കാറഡുക്ക",
      "PIN": "671542",
      "DID": "14"
    },
    {
      "POSTID": 621,
      "E": "Kotoor",
      "M": "കോട്ടൂര്‍",
      "PIN": "671542",
      "DID": "14"
    },
    {
      "POSTID": 622,
      "E": "Panjikkal",
      "M": "പഞ്ചിക്കല്‍",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 623,
      "E": "Parappa Delampady",
      "M": "പരപ്പ ദേലംപാടി",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 624,
      "E": "Pandi",
      "M": "പാണ്ടി",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 625,
      "E": "Mulleria",
      "M": "മുള്ളേരിയ",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 626,
      "E": "Adur",
      "M": "ആദൂര്‍",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 627,
      "E": "Movvar",
      "M": "മവ്വാര്‍",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 628,
      "E": "Urdur",
      "M": "ഉര്‍ദൂര്‍",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 629,
      "E": "Kinningar",
      "M": "കിന്നിംഗാര്‍",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 630,
      "E": "Kuntar",
      "M": "കുണ്ടാര്‍",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 631,
      "E": "Kakkebettu",
      "M": "കക്കെബെട്ടു",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 632,
      "E": "Nettanige",
      "M": "നെട്ടണിഗ",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 633,
      "E": "Belluru",
      "M": "ബെള്ളൂര്‍",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 634,
      "E": "Delampady",
      "M": "ദേലംപാടി",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 635,
      "E": "Nekraje ",
      "M": "നെക്രാജെ",
      "PIN": "671543",
      "DID": "14"
    },
    {
      "POSTID": 636,
      "E": "Thekkil Ferry",
      "M": "തെക്കില്‍ ഫെറി",
      "PIN": "671541",
      "DID": "14"
    },
    {
      "POSTID": 637,
      "E": "Pallathadka",
      "M": "പള്ളത്തടുക്ക",
      "PIN": "671551",
      "DID": "14"
    },
    {
      "POSTID": 638,
      "E": "Ariyapady",
      "M": "അരിയപ്പാടി",
      "PIN": "671551",
      "DID": "14"
    },
    {
      "POSTID": 639,
      "E": "Yethadka",
      "M": "ഏത്തടുക്ക",
      "PIN": "671551",
      "DID": "14"
    },
    {
      "POSTID": 640,
      "E": "Kumbdaje",
      "M": "കുംബഡാജെ",
      "PIN": "671551",
      "DID": "14"
    },
    {
      "POSTID": 641,
      "E": "Kuntikana",
      "M": "കുണ്ടിക്കാന",
      "PIN": "671551",
      "DID": "14"
    },
    {
      "POSTID": 642,
      "E": "Perdala",
      "M": "പെര്‍ഡാല",
      "PIN": "671551",
      "DID": "14"
    },
    {
      "POSTID": 643,
      "E": "Padre",
      "M": "പഡ്രെ",
      "PIN": "671552",
      "DID": "14"
    },
    {
      "POSTID": 644,
      "E": "Balemoola",
      "M": "ബാലമൂല",
      "PIN": "671552",
      "DID": "14"
    },
    {
      "POSTID": 645,
      "E": "Ukkinada",
      "M": "ഉക്കിനടുക്ക",
      "PIN": "671552",
      "DID": "14"
    },
    {
      "POSTID": 646,
      "E": "Vaninagar",
      "M": "വാണിനഗര്‍",
      "PIN": "671552",
      "DID": "14"
    },
    {
      "POSTID": 647,
      "E": "Kattukukke",
      "M": "കാട്ടുകുക്കേ",
      "PIN": "671552",
      "DID": "14"
    },
    {
      "POSTID": 648,
      "E": "Perla",
      "M": "പെര്‍ള",
      "PIN": "671552",
      "DID": "14"
    },
    {
      "POSTID": 649,
      "E": "Maire",
      "M": "മൈരെ",
      "PIN": "671552",
      "DID": "14"
    },
    {
      "POSTID": 650,
      "E": "Achooranam",
      "M": "അച്ചൂരാനം",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 651,
      "E": "Calicut",
      "M": "കാലിക്കറ്റ്",
      "PIN": "673001",
      "DID": "11"
    },
    {
      "POSTID": 652,
      "E": "Chalapuram",
      "M": "ചാലപ്പുറം",
      "PIN": "673002",
      "DID": "11"
    },
    {
      "POSTID": 653,
      "E": "Kallai",
      "M": "കല്ലായി",
      "PIN": "673003",
      "DID": "11"
    },
    {
      "POSTID": 654,
      "E": "Kundungal",
      "M": "കുണ്ടുങ്ങല്‍",
      "PIN": "673003",
      "DID": "11"
    },
    {
      "POSTID": 655,
      "E": "Puthiyara",
      "M": "പുതിയറ",
      "PIN": "673004",
      "DID": "11"
    },
    {
      "POSTID": 656,
      "E": "Thiruthiyad",
      "M": "തിരുത്തിയാട്",
      "PIN": "673004",
      "DID": "11"
    },
    {
      "POSTID": 657,
      "E": "Edakkad",
      "M": "എടക്കാട്-വെസ്റ്റ് ഹില്‍",
      "PIN": "673005",
      "DID": "11"
    },
    {
      "POSTID": 658,
      "E": "West Hill",
      "M": "വെസ്റ്റ് ഹില്‍",
      "PIN": "673005",
      "DID": "11"
    },
    {
      "POSTID": 659,
      "E": "West Hill Chungam",
      "M": "വെസ്റ്റ് ഹില്‍ ചുങ്കം",
      "PIN": "673005",
      "DID": "11"
    },
    {
      "POSTID": 660,
      "E": "West Hill CLT",
      "M": "വെസ്റ്റ് ഹില്‍ ബീച്ച്",
      "PIN": "673005",
      "DID": "11"
    },
    {
      "POSTID": 661,
      "E": "Eranhipalam",
      "M": "എരഞ്ഞിപ്പാലം",
      "PIN": "673006",
      "DID": "11"
    },
    {
      "POSTID": 662,
      "E": "St. Vincent\\'s Colony",
      "M": "സെന്റ് വിന്‍സെന്റ് കോളനി",
      "PIN": "673006",
      "DID": "11"
    },
    {
      "POSTID": 663,
      "E": "Mankavu",
      "M": "മാങ്കാവ്",
      "PIN": "673007",
      "DID": "11"
    },
    {
      "POSTID": 664,
      "E": "Mankavu East",
      "M": "മാങ്കാവ് ഈസ്റ്റ്",
      "PIN": "673007",
      "DID": "11"
    },
    {
      "POSTID": 665,
      "E": "Kommeri",
      "M": "കോമ്മേരി",
      "PIN": "673007",
      "DID": "11"
    },
    {
      "POSTID": 666,
      "E": "Poovattuparamba",
      "M": "പൂവാട്ടുപ്പറമ്പ്",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 667,
      "E": "Mayanad",
      "M": "മായനാട്",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 668,
      "E": "Calicut Medical College",
      "M": "കാലിക്കറ്റ്  മെഡിക്കല്‍ കോളേജ്",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 669,
      "E": "Kuttikattur",
      "M": "കുറ്റിക്കാട്ടൂര്‍",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 670,
      "E": "Velliparamba",
      "M": "വെള്ളിപ്പറമ്പ്",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 671,
      "E": "Cherukulathur",
      "M": "ചെറുകുളത്തൂര്‍",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 672,
      "E": "Kottamparamba",
      "M": "കോട്ടാംപറമ്പ്",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 673,
      "E": "Devagiri College Calicut",
      "M": "ദേവഗിരി കോളേജ്",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 674,
      "E": "Malaparamba",
      "M": "മലപ്പറമ്പ്",
      "PIN": "673009",
      "DID": "11"
    },
    {
      "POSTID": 675,
      "E": "Karuvaseri",
      "M": "കരുവശ്ശേരി",
      "PIN": "673010",
      "DID": "11"
    },
    {
      "POSTID": 676,
      "E": "Karaparamba",
      "M": "കാരപ്പറമ്പ്",
      "PIN": "673010",
      "DID": "11"
    },
    {
      "POSTID": 677,
      "E": "Vengeri",
      "M": "വേങ്ങേരി",
      "PIN": "673010",
      "DID": "11"
    },
    {
      "POSTID": 678,
      "E": "Nadakav",
      "M": "നടക്കാവ്",
      "PIN": "673011",
      "DID": "11"
    },
    {
      "POSTID": 679,
      "E": "Vellayil",
      "M": "വെള്ളയില്‍",
      "PIN": "673011",
      "DID": "11"
    },
    {
      "POSTID": 680,
      "E": "Parambil",
      "M": "പറമ്പില്‍",
      "PIN": "673012",
      "DID": "11"
    },
    {
      "POSTID": 681,
      "E": "Paropadi",
      "M": "പാറോപ്പടി",
      "PIN": "673012",
      "DID": "11"
    },
    {
      "POSTID": 682,
      "E": "Marikunnu",
      "M": "മേരിക്കുന്ന്",
      "PIN": "673012",
      "DID": "11"
    },
    {
      "POSTID": 683,
      "E": "Pokkunnu",
      "M": "പൊക്കുന്ന്",
      "PIN": "673007",
      "DID": "11"
    },
    {
      "POSTID": 684,
      "E": "Iringallur",
      "M": "ഇരിങ്ങല്ലൂര്‍",
      "PIN": "673014",
      "DID": "11"
    },
    {
      "POSTID": 685,
      "E": "Guruvayurappan College",
      "M": "ഗുരുവായൂരപ്പന്‍ കോളേജ്",
      "PIN": "673014",
      "DID": "11"
    },
    {
      "POSTID": 686,
      "E": "Beypore",
      "M": "ബേപ്പൂര്‍",
      "PIN": "673015",
      "DID": "11"
    },
    {
      "POSTID": 687,
      "E": "Beypore North",
      "M": "ബേപ്പൂര്‍ നോര്‍ത്ത്",
      "PIN": "673015",
      "DID": "11"
    },
    {
      "POSTID": 688,
      "E": "Kuthiravattom",
      "M": "കുതിരവട്ടം",
      "PIN": "673016",
      "DID": "11"
    },
    {
      "POSTID": 689,
      "E": "Nellicode",
      "M": "നെല്ലിക്കോട്",
      "PIN": "673016",
      "DID": "11"
    },
    {
      "POSTID": 690,
      "E": "Kottuli",
      "M": "കോട്ടൂളി",
      "PIN": "673016",
      "DID": "11"
    },
    {
      "POSTID": 691,
      "E": "Govindapuram",
      "M": "ഗോവിന്ദപുരം",
      "PIN": "673016",
      "DID": "11"
    },
    {
      "POSTID": 692,
      "E": "Chevarambalam",
      "M": "ചേവരമ്പലം",
      "PIN": "673017",
      "DID": "11"
    },
    {
      "POSTID": 693,
      "E": "Chevayur",
      "M": "ചേവായൂര്‍",
      "PIN": "673017",
      "DID": "11"
    },
    {
      "POSTID": 694,
      "E": "Calicut Art & Science College",
      "M": "കാലിക്കറ്റ് ആര്‍ട്സ് ആന്റ് സയന്‍സ് കോളേജ്",
      "PIN": "673018",
      "DID": "11"
    },
    {
      "POSTID": 695,
      "E": "Pantheerankavu",
      "M": "പന്തീരാങ്കാവ്",
      "PIN": "673019",
      "DID": "11"
    },
    {
      "POSTID": 696,
      "E": "Vellayicode",
      "M": "വെള്ളായിക്കോട്",
      "PIN": "673019",
      "DID": "11"
    },
    {
      "POSTID": 697,
      "E": "Calicut Civil Station",
      "M": "കാലിക്കറ്റ് സിവില്‍ സ്റ്റേഷന്‍",
      "PIN": "673020",
      "DID": "11"
    },
    {
      "POSTID": 698,
      "E": "Puthiyangadi",
      "M": "പുതിയങ്ങാടി",
      "PIN": "673021",
      "DID": "11"
    },
    {
      "POSTID": 699,
      "E": "Kaithapoyil",
      "M": "കൈതപ്പൊയില്‍",
      "PIN": "673586",
      "DID": "11"
    },
    {
      "POSTID": 700,
      "E": "Peruvayal",
      "M": "പെരുവയല്‍",
      "PIN": "673008",
      "DID": "11"
    },
    {
      "POSTID": 701,
      "E": "Olavanna",
      "M": "ഒളവണ്ണ",
      "PIN": "673019",
      "DID": "11"
    },
    {
      "POSTID": 702,
      "E": "Perumanna",
      "M": "പെരുമണ്ണ",
      "PIN": "673019",
      "DID": "11"
    },
    {
      "POSTID": 703,
      "E": "Nallalam",
      "M": "നല്ലളം",
      "PIN": "673027",
      "DID": "11"
    },
    {
      "POSTID": 704,
      "E": "Arakkinar",
      "M": "അരക്കിണര്‍",
      "PIN": "673028",
      "DID": "11"
    },
    {
      "POSTID": 705,
      "E": "Tiruvannur",
      "M": "തിരുവണ്ണൂര്‍",
      "PIN": "673029",
      "DID": "11"
    },
    {
      "POSTID": 706,
      "E": "Tiruvannurnada",
      "M": "തിരുവണ്ണൂര്‍നട",
      "PIN": "673029",
      "DID": "11"
    },
    {
      "POSTID": 707,
      "E": "Calicut Beach",
      "M": "കാലിക്കറ്റ് ബീച്ച്",
      "PIN": "673032",
      "DID": "11"
    },
    {
      "POSTID": 708,
      "E": "Vadakara Bazar",
      "M": "",
      "PIN": "673101",
      "DID": "11"
    },
    {
      "POSTID": 709,
      "E": "Vatakara",
      "M": "",
      "PIN": "673101",
      "DID": "11"
    },
    {
      "POSTID": 710,
      "E": "Madappally College",
      "M": "മടപ്പള്ളി കോളേജ്",
      "PIN": "673102",
      "DID": "11"
    },
    {
      "POSTID": 711,
      "E": "Rayaranth",
      "M": "രയരങ്ങോത്ത്",
      "PIN": "673102",
      "DID": "11"
    },
    {
      "POSTID": 712,
      "E": "Kannoorkkara",
      "M": "കണ്ണൂക്കര",
      "PIN": "673102",
      "DID": "11"
    },
    {
      "POSTID": 713,
      "E": "Vatakara Beach",
      "M": "",
      "PIN": "673103",
      "DID": "11"
    },
    {
      "POSTID": 714,
      "E": "Nut Street",
      "M": "",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 715,
      "E": "Puthur",
      "M": "",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 716,
      "E": "Keezhal",
      "M": "കീഴല്‍",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 717,
      "E": "Kurikkilad",
      "M": "കുരിക്കിലാട്",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 718,
      "E": "Sidha Samaj",
      "M": "സിദ്ധ സമാജം",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 719,
      "E": "Chemmarathur",
      "M": "ചെമ്മരത്തൂര്‍",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 720,
      "E": "Vaikkilassery",
      "M": "വൈക്കിലശ്ശേരി",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 721,
      "E": "Memunda",
      "M": "മേമുണ്ട",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 722,
      "E": "Puthuppanam",
      "M": "",
      "PIN": "673105",
      "DID": "11"
    },
    {
      "POSTID": 723,
      "E": "Mandarathur",
      "M": "മന്തരത്തൂര്‍",
      "PIN": "673105",
      "DID": "11"
    },
    {
      "POSTID": 724,
      "E": "Muttungal West",
      "M": "മുട്ടുങ്ങല്‍ വെസ്റ്റ്",
      "PIN": "673106",
      "DID": "11"
    },
    {
      "POSTID": 725,
      "E": "Chorode",
      "M": "ചോറോട്",
      "PIN": "673106",
      "DID": "11"
    },
    {
      "POSTID": 726,
      "E": "Chorode East",
      "M": "ചോറോട്  ഈസ്റ്റ്",
      "PIN": "673106",
      "DID": "11"
    },
    {
      "POSTID": 727,
      "E": "Mayyannur",
      "M": "മയ്യന്നൂര്‍",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 728,
      "E": "Thodannur",
      "M": "തോടന്നൂര്‍",
      "PIN": "673541",
      "DID": "11"
    },
    {
      "POSTID": 729,
      "E": "Meppayil",
      "M": "",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 730,
      "E": "Muttungal",
      "M": "മുട്ടുങ്ങല്‍",
      "PIN": "673106",
      "DID": "11"
    },
    {
      "POSTID": 731,
      "E": "Pathiyarakkara",
      "M": "പതിയാരക്കര",
      "PIN": "673105",
      "DID": "11"
    },
    {
      "POSTID": 732,
      "E": "Nadakkuthazha",
      "M": "",
      "PIN": "673104",
      "DID": "11"
    },
    {
      "POSTID": 733,
      "E": "Pallikunnu Wayanad ",
      "M": "പള്ളിക്കുന്ന് വയനാട്",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 734,
      "E": "Puthoorvayal",
      "M": "പുത്തൂര്‍വയല്‍",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 735,
      "E": "Puzhamutti",
      "M": "പുഴമുട്ടി",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 736,
      "E": "Madakkunnu",
      "M": "മാടക്കുന്ന്",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 737,
      "E": "Madakkimala",
      "M": "മടക്കിമല",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 738,
      "E": "Varadoor",
      "M": "വരദൂര്‍",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 739,
      "E": "Kambalakkad",
      "M": "കമ്പളക്കാട്",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 740,
      "E": "Karinkutty",
      "M": "കരിങ്കുറ്റി",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 741,
      "E": "Kalpetta",
      "M": "",
      "PIN": "673121",
      "DID": "12"
    },
    {
      "POSTID": 742,
      "E": "Kavumannam ",
      "M": "കാവുമന്ദം",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 743,
      "E": "Chennalode ",
      "M": "ചെന്നലോട്",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 744,
      "E": "Thekkumthara ",
      "M": "തെക്കുംതറ",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 745,
      "E": "Vengapally",
      "M": "വേങ്ങപ്പള്ളി",
      "PIN": "673121",
      "DID": "12"
    },
    {
      "POSTID": 746,
      "E": "Kottathara",
      "M": "കോട്ടത്തറ",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 747,
      "E": "Pariyaram Wynad",
      "M": "പരിയാരം",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 748,
      "E": "Mandad",
      "M": "മാണ്ടാട്",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 749,
      "E": "Muttil",
      "M": "മുട്ടില്‍",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 750,
      "E": "Maniyangode",
      "M": "മണിയങ്കോട്",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 751,
      "E": "Vazhavatta",
      "M": "വാഴവറ്റ",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 752,
      "E": "Kalpetta North",
      "M": "",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 753,
      "E": "Kakavayal",
      "M": "കാക്ക വയല്‍",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 754,
      "E": "Kunnambetta",
      "M": "കുന്നമ്പറ്റ",
      "PIN": "673123",
      "DID": "12"
    },
    {
      "POSTID": 755,
      "E": "Chundale",
      "M": "ചുണ്ടേല്‍",
      "PIN": "673123",
      "DID": "12"
    },
    {
      "POSTID": 756,
      "E": "Kaniyambetta",
      "M": "കണിയാമ്പറ്റ",
      "PIN": "673122",
      "DID": "12"
    },
    {
      "POSTID": 757,
      "E": "Chaliyam",
      "M": "ചാലിയം",
      "PIN": "673301",
      "DID": "11"
    },
    {
      "POSTID": 758,
      "E": "Kadalundi",
      "M": "കടലുണ്ടി",
      "PIN": "673302",
      "DID": "11"
    },
    {
      "POSTID": 759,
      "E": "Puthiyanirahu",
      "M": "പുതിയനിരത്ത്",
      "PIN": "673303",
      "DID": "11"
    },
    {
      "POSTID": 760,
      "E": "Eranhikkal",
      "M": "എരഞ്ഞിക്കല്‍",
      "PIN": "673303",
      "DID": "11"
    },
    {
      "POSTID": 761,
      "E": "Elathur",
      "M": "എലത്തൂര്‍",
      "PIN": "673303",
      "DID": "11"
    },
    {
      "POSTID": 762,
      "E": "Vengalam",
      "M": "വെങ്ങളം",
      "PIN": "673303",
      "DID": "11"
    },
    {
      "POSTID": 763,
      "E": "Kappad",
      "M": "കാപ്പാട്",
      "PIN": "673304",
      "DID": "11"
    },
    {
      "POSTID": 764,
      "E": "Chemancheri",
      "M": "ചേമഞ്ചേരി",
      "PIN": "673304",
      "DID": "11"
    },
    {
      "POSTID": 765,
      "E": "Thuvakkode",
      "M": "തുവ്വക്കോട്",
      "PIN": "673304",
      "DID": "11"
    },
    {
      "POSTID": 766,
      "E": "Quilandy",
      "M": "കൊയിലാണ്ടി",
      "PIN": "673305",
      "DID": "11"
    },
    {
      "POSTID": 767,
      "E": "Edakulam-Quilandy",
      "M": "എടക്കുളം-കൊയിലാണ്ടി",
      "PIN": "673306",
      "DID": "11"
    },
    {
      "POSTID": 768,
      "E": "Cheliya",
      "M": "ചേലിയ",
      "PIN": "673306",
      "DID": "11"
    },
    {
      "POSTID": 769,
      "E": "Muchukunnu",
      "M": "മുചുകുന്ന്",
      "PIN": "673307",
      "DID": "11"
    },
    {
      "POSTID": 770,
      "E": "Mudadi North",
      "M": "മൂടാടി നോര്‍ത്ത്",
      "PIN": "673307",
      "DID": "11"
    },
    {
      "POSTID": 771,
      "E": "Kollam Qdy",
      "M": "കൊല്ലം",
      "PIN": "673307",
      "DID": "11"
    },
    {
      "POSTID": 772,
      "E": "Onchiyam",
      "M": "ഒഞ്ചിയം",
      "PIN": "673308",
      "DID": "11"
    },
    {
      "POSTID": 773,
      "E": "Kunnummakkara",
      "M": "കുന്നുമ്മക്കര",
      "PIN": "673308",
      "DID": "11"
    },
    {
      "POSTID": 774,
      "E": "Chombala",
      "M": "ചോമ്പാല",
      "PIN": "673308",
      "DID": "11"
    },
    {
      "POSTID": 775,
      "E": "Azhiyur",
      "M": "അഴിയൂര്‍",
      "PIN": "673309",
      "DID": "11"
    },
    {
      "POSTID": 776,
      "E": "Koroth Road",
      "M": "കോറത്തുറോഡ്",
      "PIN": "673309",
      "DID": "11"
    },
    {
      "POSTID": 777,
      "E": "Pandakkal",
      "M": "",
      "PIN": "673310",
      "DID": "11"
    },
    {
      "POSTID": 778,
      "E": "Mahe",
      "M": "മാഹി",
      "PIN": "673310",
      "DID": "11"
    },
    {
      "POSTID": 779,
      "E": "New Mahe",
      "M": "ന്യൂ മാഹി",
      "PIN": "673311",
      "DID": "13"
    },
    {
      "POSTID": 780,
      "E": "Peringadi",
      "M": "പെരിങ്ങാടി",
      "PIN": "673312",
      "DID": "13"
    },
    {
      "POSTID": 781,
      "E": "Olavilam",
      "M": "ഒളവിലം",
      "PIN": "673313",
      "DID": "13"
    },
    {
      "POSTID": 782,
      "E": "Vallikkunnu",
      "M": "വള്ളിക്കുന്ന്",
      "PIN": "673314",
      "DID": "10"
    },
    {
      "POSTID": 783,
      "E": "Vallikkunnu North",
      "M": "വള്ളിക്കുന്ന്  നോര്‍ത്ത്",
      "PIN": "673314",
      "DID": "10"
    },
    {
      "POSTID": 784,
      "E": "Kadalundi Nagaram",
      "M": "കടലുണ്ടിനഗരം",
      "PIN": "673314",
      "DID": "10"
    },
    {
      "POSTID": 785,
      "E": "Atholi",
      "M": "അത്തോളി",
      "PIN": "673315",
      "DID": "11"
    },
    {
      "POSTID": 786,
      "E": "Cheekilode",
      "M": "ചീക്കിലോട്",
      "PIN": "673315",
      "DID": "11"
    },
    {
      "POSTID": 787,
      "E": "Kongannur",
      "M": "കൊങ്ങന്നൂര്‍",
      "PIN": "673315",
      "DID": "11"
    },
    {
      "POSTID": 788,
      "E": "Kolakkad",
      "M": "കൊളക്കാട്",
      "PIN": "673315",
      "DID": "11"
    },
    {
      "POSTID": 789,
      "E": "Kolathur",
      "M": "കൊളത്തൂര്‍",
      "PIN": "673315",
      "DID": "11"
    },
    {
      "POSTID": 790,
      "E": "Velur West",
      "M": "വേളൂര്‍ വെസ്റ്റ്",
      "PIN": "673315",
      "DID": "11"
    },
    {
      "POSTID": 791,
      "E": "Kariyad South",
      "M": "കരിയാട് സൗത്ത്",
      "PIN": "673316",
      "DID": "13"
    },
    {
      "POSTID": 792,
      "E": "Annasseri",
      "M": "അന്നശ്ശേരി",
      "PIN": "673317",
      "DID": "11"
    },
    {
      "POSTID": 793,
      "E": "Thalakulathur",
      "M": "തലക്കുളത്തൂര്‍",
      "PIN": "673317",
      "DID": "11"
    },
    {
      "POSTID": 794,
      "E": "Thiruvanor",
      "M": "തിരുവങ്ങൂര്‍",
      "PIN": "673304",
      "DID": "11"
    },
    {
      "POSTID": 795,
      "E": "Melur ",
      "M": "മേലൂര്‍",
      "PIN": "673306",
      "DID": "11"
    },
    {
      "POSTID": 796,
      "E": "Naluthara",
      "M": "നാലുതറ",
      "PIN": "673310",
      "DID": "13"
    },
    {
      "POSTID": 797,
      "E": "Modakkallur",
      "M": "മൊടക്കല്ലൂര്‍",
      "PIN": "673323",
      "DID": "11"
    },
    {
      "POSTID": 798,
      "E": "Arikkulam",
      "M": "അരിക്കുളം",
      "PIN": "673620",
      "DID": "11"
    },
    {
      "POSTID": 799,
      "E": "Ulliyeri",
      "M": "ഉള്ളിയേരി",
      "PIN": "673323",
      "DID": "11"
    },
    {
      "POSTID": 800,
      "E": "Keezhariyur",
      "M": "കീഴരിയൂര്‍",
      "PIN": "673307",
      "DID": "11"
    },
    {
      "POSTID": 801,
      "E": "Moodadi ",
      "M": "മൂടാടി",
      "PIN": "673307",
      "DID": "11"
    },
    {
      "POSTID": 802,
      "E": "Naderi ",
      "M": "നടേരി",
      "PIN": "673620",
      "DID": "11"
    },
    {
      "POSTID": 803,
      "E": "Kunnathara",
      "M": "കുന്നത്തറ",
      "PIN": "673323",
      "DID": "11"
    },
    {
      "POSTID": 804,
      "E": "Mannur",
      "M": "മണ്ണൂര്‍",
      "PIN": "673328",
      "DID": "11"
    },
    {
      "POSTID": 805,
      "E": "Naduvathur",
      "M": "നടുവത്തൂര്‍",
      "PIN": "673620",
      "DID": "11"
    },
    {
      "POSTID": 806,
      "E": "Porur",
      "M": "പോരൂര്‍",
      "PIN": "673339",
      "DID": "10"
    },
    {
      "POSTID": 807,
      "E": "Eramala",
      "M": "ഏറാമല",
      "PIN": "673501",
      "DID": "11"
    },
    {
      "POSTID": 808,
      "E": "Orkatteri",
      "M": "ഓര്‍ക്കാട്ടേരി",
      "PIN": "673501",
      "DID": "11"
    },
    {
      "POSTID": 809,
      "E": "Edacheri",
      "M": "എടച്ചേരി",
      "PIN": "673502",
      "DID": "11"
    },
    {
      "POSTID": 810,
      "E": "Katcheri",
      "M": "കച്ചേരി",
      "PIN": "673502",
      "DID": "11"
    },
    {
      "POSTID": 811,
      "E": "Purameri",
      "M": "പുറമേരി",
      "PIN": "673503",
      "DID": "11"
    },
    {
      "POSTID": 812,
      "E": "Muthuvadathur",
      "M": "മുതുവടത്തൂര്‍",
      "PIN": "673503",
      "DID": "11"
    },
    {
      "POSTID": 813,
      "E": "Kuningad",
      "M": "കുനിങ്ങാട്",
      "PIN": "673503",
      "DID": "11"
    },
    {
      "POSTID": 814,
      "E": "Kotancherri",
      "M": "കോടഞ്ചേരി",
      "PIN": "673503",
      "DID": "11"
    },
    {
      "POSTID": 815,
      "E": "Nadapuram",
      "M": "നാദാപുരം",
      "PIN": "673504",
      "DID": "11"
    },
    {
      "POSTID": 816,
      "E": "Iyyangode",
      "M": "ഇയ്യങ്കോട്",
      "PIN": "673504",
      "DID": "11"
    },
    {
      "POSTID": 817,
      "E": "Perode",
      "M": "പേരോട്",
      "PIN": "673504",
      "DID": "11"
    },
    {
      "POSTID": 818,
      "E": "Mudavantheri",
      "M": "മുടവന്തേരി",
      "PIN": "673505",
      "DID": "11"
    },
    {
      "POSTID": 819,
      "E": "Kayappanichi",
      "M": "കായപ്പനിച്ചി",
      "PIN": "673505",
      "DID": "11"
    },
    {
      "POSTID": 820,
      "E": "Tuneri",
      "M": "തൂണേരി",
      "PIN": "673505",
      "DID": "11"
    },
    {
      "POSTID": 821,
      "E": "Naripetta",
      "M": "നരിപ്പറ്റ",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 822,
      "E": "Indira Nagar",
      "M": "ഇന്ദിരാ നഗര്‍",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 823,
      "E": "Varikkoli",
      "M": "വരിക്കോളി",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 824,
      "E": "Vanimal",
      "M": "വാണിമല്‍",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 825,
      "E": "Vishnumangalam",
      "M": "വിഷ്ണുമംഗലം",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 826,
      "E": "Kallachi",
      "M": "കല്ലാച്ചി",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 827,
      "E": "Nedumparamba",
      "M": "നെടുംപറമ്പ്",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 828,
      "E": "Velliyode",
      "M": "വെള്ളിയോട്",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 829,
      "E": "Chelakkad",
      "M": "ചേലക്കാട്",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 830,
      "E": "Nitumannur",
      "M": "നിടുമണ്ണൂര്‍",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 831,
      "E": "Nittur",
      "M": "നിട്ടൂര്‍",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 832,
      "E": "Padiripeetta",
      "M": "പാതിരിപ്പറ്റ",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 833,
      "E": "Padiripetta",
      "M": "പാതിരിയാട്",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 834,
      "E": "Poolakkul",
      "M": "പൂളക്കൂല്‍",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 835,
      "E": "Arur",
      "M": "അരൂര്‍",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 836,
      "E": "Mullambath",
      "M": "മുള്ളമ്പത്ത്",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 837,
      "E": "Kakkattil",
      "M": "കക്കട്ടില്‍",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 838,
      "E": "Cheekunnummal West",
      "M": "ചീക്കോന്നുമ്മല്‍ വെസ്റ്റ്",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 839,
      "E": "Thinur",
      "M": "തിനൂര്‍",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 840,
      "E": "Paleri.",
      "M": "പാലേരി ",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 841,
      "E": "Paleri Town",
      "M": "പാലേരി ടൗണ്‍",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 842,
      "E": "Muthuvannacha",
      "M": "മുതുവണ്ണാച്ച",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 843,
      "E": "Adukkath",
      "M": "അടുക്കത്ത്",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 844,
      "E": "Karandode",
      "M": "കരണ്ടോട്",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 845,
      "E": "Kuttiadi",
      "M": "കുറ്റ്യാടി",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 846,
      "E": "Kurichagam",
      "M": "കുറിച്ചകം",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 847,
      "E": "Velom",
      "M": "വേളം",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 848,
      "E": "Velom Peruvayal",
      "M": "വേളം പെരുവയല്‍",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 849,
      "E": "Taliyil",
      "M": "തളിയില്‍",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 850,
      "E": "Parakkadavu",
      "M": "പാറക്കടവ്",
      "PIN": "673509",
      "DID": "11"
    },
    {
      "POSTID": 851,
      "E": "Puliyavil",
      "M": "പുളിയാവില്‍",
      "PIN": "673509",
      "DID": "11"
    },
    {
      "POSTID": 852,
      "E": "Chekkiad",
      "M": "ചെക്യാട്",
      "PIN": "673509",
      "DID": "11"
    },
    {
      "POSTID": 853,
      "E": "Thanakkottur",
      "M": "താനക്കോട്ടൂര്‍",
      "PIN": "673509",
      "DID": "11"
    },
    {
      "POSTID": 854,
      "E": "Vattoli",
      "M": "വട്ടോളി ",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 855,
      "E": "Cheekunnummal",
      "M": "ചീക്കോന്നുമ്മല്‍ ",
      "PIN": "673511",
      "DID": "11"
    },
    {
      "POSTID": 856,
      "E": "Cherapuram",
      "M": "ചേരാപുരം",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 857,
      "E": "Pasukkadavu",
      "M": "പശുക്കടവ്",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 858,
      "E": "Poothampara",
      "M": "പൂതംപാറ",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 859,
      "E": "Marudonkara",
      "M": "മരുതോങ്കര",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 860,
      "E": "Akkal",
      "M": "ആക്കല്‍",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 861,
      "E": "Vannathichira",
      "M": "വണ്ണാത്തിച്ചിറ",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 862,
      "E": "Karingad",
      "M": "കരിങ്ങാട്",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 863,
      "E": "Kavilumpara",
      "M": "കാവിലുമ്പാറ",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 864,
      "E": "Kuringad",
      "M": "കുറിങ്ങാട്",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 865,
      "E": "Kunduthode",
      "M": "കുണ്ടുതോട്",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 866,
      "E": "Chathangottunada",
      "M": "ചാത്തങ്ങോട്ടുനട",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 867,
      "E": "Chappanthottam",
      "M": "ചാപ്പന്‍തോട്ടം",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 868,
      "E": "Moyilothara",
      "M": "മൊയിലോത്തറ",
      "PIN": "673513",
      "DID": "11"
    },
    {
      "POSTID": 869,
      "E": "Iringath",
      "M": "ഇരിങ്ങത്ത്",
      "PIN": "673523",
      "DID": "11"
    },
    {
      "POSTID": 870,
      "E": "Iringannur",
      "M": "ഇരിങ്ങണ്ണൂര്‍",
      "PIN": "673514",
      "DID": "11"
    },
    {
      "POSTID": 871,
      "E": "Kodiyura",
      "M": "കൊടിയൂറ",
      "PIN": "673506",
      "DID": "11"
    },
    {
      "POSTID": 872,
      "E": "Mokeri",
      "M": "മൊകേരി",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 873,
      "E": "Bhoomivathukkal",
      "M": "ഭൂമിവാതുക്കല്‍",
      "PIN": "673517",
      "DID": "11"
    },
    {
      "POSTID": 874,
      "E": "Abhayagiri",
      "M": "അഭയഗിരി",
      "PIN": "673517",
      "DID": "11"
    },
    {
      "POSTID": 875,
      "E": "Valayam",
      "M": "വളയം",
      "PIN": "673517",
      "DID": "11"
    },
    {
      "POSTID": 876,
      "E": "Kallunira",
      "M": "കല്ലുനിര",
      "PIN": "673517",
      "DID": "11"
    },
    {
      "POSTID": 877,
      "E": "Chuzhali",
      "M": "ചുഴലി",
      "PIN": "673517",
      "DID": "11"
    },
    {
      "POSTID": 878,
      "E": "Cherumoth",
      "M": "ചെറുമോത്ത്",
      "PIN": "673517",
      "DID": "11"
    },
    {
      "POSTID": 879,
      "E": "Vatayam",
      "M": "വടയം",
      "PIN": "673507",
      "DID": "11"
    },
    {
      "POSTID": 880,
      "E": "Kayakkody",
      "M": "കായക്കൊടി",
      "PIN": "673508",
      "DID": "11"
    },
    {
      "POSTID": 881,
      "E": "Edacheri North",
      "M": "എടച്ചേരി നോര്‍ത്ത്",
      "PIN": "673520",
      "DID": "11"
    },
    {
      "POSTID": 882,
      "E": "Kuruvangad ",
      "M": "കുറുവങ്ങാട്",
      "PIN": "673620",
      "DID": "11"
    },
    {
      "POSTID": 883,
      "E": "Ayinikkad",
      "M": "അയനിക്കാട്",
      "PIN": "673521",
      "DID": "11"
    },
    {
      "POSTID": 884,
      "E": "Iringal",
      "M": "ഇരിങ്ങല്‍",
      "PIN": "673521",
      "DID": "11"
    },
    {
      "POSTID": 885,
      "E": "Kottakkal Iringal",
      "M": "കോട്ടക്കല്‍ ഇരിങ്ങല്‍",
      "PIN": "673521",
      "DID": "11"
    },
    {
      "POSTID": 886,
      "E": "Pallikkara",
      "M": "പള്ളിക്കര",
      "PIN": "673522",
      "DID": "11"
    },
    {
      "POSTID": 887,
      "E": "Purakkad",
      "M": "പുറക്കാട്",
      "PIN": "673522",
      "DID": "11"
    },
    {
      "POSTID": 888,
      "E": "Kizhur Meladi",
      "M": "കിഴൂര്‍ ",
      "PIN": "673522",
      "DID": "11"
    },
    {
      "POSTID": 889,
      "E": "Meladi",
      "M": "",
      "PIN": "673522",
      "DID": "11"
    },
    {
      "POSTID": 890,
      "E": "Payyoli",
      "M": "പയ്യോളി ",
      "PIN": "673522",
      "DID": "11"
    },
    {
      "POSTID": 891,
      "E": "Muthuvana",
      "M": "മുതുവന",
      "PIN": "673523",
      "DID": "11"
    },
    {
      "POSTID": 892,
      "E": "Maniyur",
      "M": "മണിയൂര്‍",
      "PIN": "673523",
      "DID": "11"
    },
    {
      "POSTID": 893,
      "E": "Muyipoth",
      "M": "മുയിപ്പോത്ത്",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 894,
      "E": "Avala",
      "M": "ആവള",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 895,
      "E": "Kalpathur",
      "M": "കല്‍പ്പത്തൂര്‍",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 896,
      "E": "Karayad",
      "M": "കാരയാട്",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 897,
      "E": "Kizhpayur",
      "M": "കീഴ്പ്പയൂര്‍",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 898,
      "E": "Kuttoth",
      "M": "കുട്ടോത്ത്",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 899,
      "E": "Kozhukkallur",
      "M": "കൊഴുക്കല്ലൂര്‍",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 900,
      "E": "Cheruvannur Meladi",
      "M": "ചെറുവണ്ണൂര്‍ മേപ്പയൂര്‍",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 901,
      "E": "Meppayur",
      "M": "മേപ്പയൂര്‍",
      "PIN": "673524",
      "DID": "11"
    },
    {
      "POSTID": 902,
      "E": "Eravattoor",
      "M": "എരവട്ടൂര്‍",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 903,
      "E": "Edavarad",
      "M": "എടവരാട്",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 904,
      "E": "Kayanna Bazar",
      "M": "കായണ്ണ ബസാര്‍",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 905,
      "E": "Kilinnanyam",
      "M": "കിഴിഞ്ഞാണ്യം",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 906,
      "E": "Kadiyangad",
      "M": "കടിയങ്ങാട്",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 907,
      "E": "Perampra",
      "M": "പേരാമ്പ്ര",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 908,
      "E": "Mennaniam",
      "M": "മേഞ്ഞാണ്യം",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 909,
      "E": "Chenoli",
      "M": "ചേനോളി",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 910,
      "E": "Kayanna",
      "M": "കായണ്ണ",
      "PIN": "673526",
      "DID": "11"
    },
    {
      "POSTID": 911,
      "E": "Chakkittapara",
      "M": "ചക്കിട്ടപ്പാറ",
      "PIN": "673526",
      "DID": "11"
    },
    {
      "POSTID": 912,
      "E": "Thandorappara",
      "M": "തണ്ടോറപ്പാറ",
      "PIN": "673526",
      "DID": "11"
    },
    {
      "POSTID": 913,
      "E": "Athiyodi",
      "M": "അത്തിയോടി",
      "PIN": "673527",
      "DID": "11"
    },
    {
      "POSTID": 914,
      "E": "Mattanode",
      "M": "മാട്ടനോട്",
      "PIN": "673527",
      "DID": "11"
    },
    {
      "POSTID": 915,
      "E": "Mathanode",
      "M": "മാതനോട്",
      "PIN": "673527",
      "DID": "11"
    },
    {
      "POSTID": 916,
      "E": "Cherukkad",
      "M": "ചെറുക്കാട്",
      "PIN": "673527",
      "DID": "11"
    },
    {
      "POSTID": 917,
      "E": "Poozhithode",
      "M": "പൂഴിത്തോട്",
      "PIN": "673528",
      "DID": "11"
    },
    {
      "POSTID": 918,
      "E": "Muthukad",
      "M": "മുതുകാട്",
      "PIN": "673528",
      "DID": "11"
    },
    {
      "POSTID": 919,
      "E": "Avadukka",
      "M": "ആവടുക്ക",
      "PIN": "673528",
      "DID": "11"
    },
    {
      "POSTID": 920,
      "E": "Peruvannamuzhi",
      "M": "പെരുവണ്ണാമൂഴി",
      "PIN": "673528",
      "DID": "11"
    },
    {
      "POSTID": 921,
      "E": "Chengaroth",
      "M": "ചങ്ങരോത്ത്",
      "PIN": "673528",
      "DID": "11"
    },
    {
      "POSTID": 922,
      "E": "Chempanoda",
      "M": "ചെമ്പനോട",
      "PIN": "673528",
      "DID": "11"
    },
    {
      "POSTID": 923,
      "E": "Chingapuram",
      "M": "ചിങ്ങപുരം",
      "PIN": "673529",
      "DID": "11"
    },
    {
      "POSTID": 924,
      "E": "Thikkodi",
      "M": "തിക്കോടി",
      "PIN": "673529",
      "DID": "11"
    },
    {
      "POSTID": 925,
      "E": "Palayadnada",
      "M": "പാലയാട്നട",
      "PIN": "673521",
      "DID": "11"
    },
    {
      "POSTID": 926,
      "E": "Kadaloor",
      "M": "കടലൂര്‍‌",
      "PIN": "673529",
      "DID": "11"
    },
    {
      "POSTID": 927,
      "E": "Koothali",
      "M": "കൂത്താളി",
      "PIN": "673525",
      "DID": "11"
    },
    {
      "POSTID": 928,
      "E": "Chaniyamkadavu",
      "M": "ചാനിയംകടവ്",
      "PIN": "673541",
      "DID": "11"
    },
    {
      "POSTID": 929,
      "E": "Ponmeri",
      "M": "പൊന്മേരി ",
      "PIN": "673541",
      "DID": "11"
    },
    {
      "POSTID": 930,
      "E": "Cherandathur",
      "M": "ചെരണ്ടത്തൂര്‍",
      "PIN": "673541",
      "DID": "11"
    },
    {
      "POSTID": 931,
      "E": "Tharopoyil",
      "M": "തറോപൊയില്‍",
      "PIN": "673541",
      "DID": "11"
    },
    {
      "POSTID": 932,
      "E": "Valliad",
      "M": "വള്ള്യാട്",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 933,
      "E": "Villiappally",
      "M": "വില്യാപ്പള്ളി",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 934,
      "E": "Karthikappally",
      "M": "കാര്‍ത്തികപ്പള്ളി",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 935,
      "E": "Kurinhaliyode",
      "M": "കുറുഞ്ഞാലിയോട്",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 936,
      "E": "Kadameri",
      "M": "കടമേരി",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 937,
      "E": "Ponmeri Parambil",
      "M": "പൊന്മേരി പറമ്പില്‍",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 938,
      "E": "Kottappalli",
      "M": "കോട്ടപ്പള്ളി",
      "PIN": "673542",
      "DID": "11"
    },
    {
      "POSTID": 939,
      "E": "Ayancheri",
      "M": "ആയഞ്ചേരി",
      "PIN": "673541",
      "DID": "11"
    },
    {
      "POSTID": 940,
      "E": "Payambra",
      "M": "പയമ്പ്ര",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 941,
      "E": "Pilasseri",
      "M": "പിലാശ്ശേരി",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 942,
      "E": "Padanilam",
      "M": "പടനിലം",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 943,
      "E": "Karanthur",
      "M": "കാരന്തൂര്‍",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 944,
      "E": "Kunnamangalam Mini Industrial Estate",
      "M": "കുന്ദമംഗലം മിനി ഇന്‍ഡസ്ട്രിയല്‍",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 945,
      "E": "Kunnamangalam",
      "M": "കുന്ദമംഗലം",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 946,
      "E": "Peringolam",
      "M": "പെരിങ്ങളം",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 947,
      "E": "Chelavur",
      "M": "ചെലവൂര്‍",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 948,
      "E": "Konott",
      "M": "കോണോട്ട്",
      "PIN": "673571",
      "DID": "11"
    },
    {
      "POSTID": 949,
      "E": "Neeleswaram",
      "M": "നീലേശ്വരം",
      "PIN": "673582",
      "DID": "11"
    },
    {
      "POSTID": 950,
      "E": "Pannikottur",
      "M": "പന്നിക്കോട്ടൂര്‍",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 951,
      "E": "Puthur",
      "M": "പുത്തൂര്‍ ",
      "PIN": "673582",
      "DID": "11"
    },
    {
      "POSTID": 952,
      "E": "Avilora",
      "M": "ആവിലോറ",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 953,
      "E": "Elettil",
      "M": "എളേറ്റില്‍",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 954,
      "E": "Valiaparamba",
      "M": "വലിയപറമ്പ്",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 955,
      "E": "Omassery",
      "M": "ഓമശ്ശേരി",
      "PIN": "673582",
      "DID": "11"
    },
    {
      "POSTID": 956,
      "E": "Vavad",
      "M": "വാവാട്",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 957,
      "E": "Karuvampoil",
      "M": "കരുവന്‍പൊയില്‍",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 958,
      "E": "Kilakkoth",
      "M": "കിഴക്കോത്ത്",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 959,
      "E": "Koduvally",
      "M": "കൊടുവള്ളി",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 960,
      "E": "Venappara",
      "M": "വേനപ്പാറ",
      "PIN": "673582",
      "DID": "11"
    },
    {
      "POSTID": 961,
      "E": "Venappara",
      "M": "",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 962,
      "E": "Parappanpoyil ",
      "M": "പരപ്പന്‍പൊയില്‍",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 963,
      "E": "Kattipara",
      "M": "കട്ടിപ്പാറ",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 964,
      "E": "Santhinagar",
      "M": "ശാന്തിനഗര്‍",
      "PIN": "673582",
      "DID": "11"
    },
    {
      "POSTID": 965,
      "E": "Kudathai",
      "M": "കൂടത്തായ് ",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 966,
      "E": "Koodathai Bazar",
      "M": "കൂടത്തായ്  ബസാര്‍",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 967,
      "E": "Chamal",
      "M": "ചമല്‍",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 968,
      "E": "Velimanna",
      "M": "വെളിമണ്ണ",
      "PIN": "673582",
      "DID": "11"
    },
    {
      "POSTID": 969,
      "E": "Maikavu",
      "M": "മൈക്കാവ്",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 970,
      "E": "Mailellampara",
      "M": "മൈലെള്ളംപാറ",
      "PIN": "673586",
      "DID": "11"
    },
    {
      "POSTID": 971,
      "E": "Tachmpoil",
      "M": "തച്ചംപൊയില്‍",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 972,
      "E": "Thamarassery",
      "M": "താമരശ്ശേരി",
      "PIN": "673573",
      "DID": "11"
    },
    {
      "POSTID": 973,
      "E": "Mangad",
      "M": "മങ്ങാട്",
      "PIN": "673574",
      "DID": "11"
    },
    {
      "POSTID": 974,
      "E": "Unnikulam",
      "M": "ഉണ്ണികുളം",
      "PIN": "673574",
      "DID": "11"
    },
    {
      "POSTID": 975,
      "E": "Emmamparamba",
      "M": "എമ്മംപറമ്പ്",
      "PIN": "673574",
      "DID": "11"
    },
    {
      "POSTID": 976,
      "E": "Ekarool",
      "M": "എകരൂല്‍",
      "PIN": "673574",
      "DID": "11"
    },
    {
      "POSTID": 977,
      "E": "Vayalada",
      "M": "വയലട ",
      "PIN": "673574",
      "DID": "11"
    },
    {
      "POSTID": 978,
      "E": "Thalayad",
      "M": "തലയാട്",
      "PIN": "673574",
      "DID": "11"
    },
    {
      "POSTID": 979,
      "E": "Padinjarethara",
      "M": "പടിഞ്ഞാറത്തറ",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 980,
      "E": "Manjoora",
      "M": "മഞ്ഞൂറ",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 981,
      "E": "Arambattukunnu",
      "M": "അരമ്പറ്റ കുന്ന്",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 982,
      "E": "Varambatta",
      "M": "വാരമ്പറ്റ",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 983,
      "E": "Pozhuthana",
      "M": "പൊഴുതന",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 984,
      "E": "Bibleland",
      "M": "ബൈബിള്‍ലാന്റ്",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 985,
      "E": "Thariote North",
      "M": "തരിയോട്  നോര്‍ത്ത്",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 986,
      "E": "Lakidi",
      "M": "ലക്കിടി",
      "PIN": "673576",
      "DID": "12"
    },
    {
      "POSTID": 987,
      "E": "Sugandhagiri",
      "M": "സുഗന്ധഗിരി",
      "PIN": "673576",
      "DID": "12"
    },
    {
      "POSTID": 988,
      "E": "Vythiri",
      "M": "വൈത്തിരി",
      "PIN": "673576",
      "DID": "12"
    },
    {
      "POSTID": 989,
      "E": "Nathamkuni",
      "M": "നത്തംകുനി",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 990,
      "E": "Puthumala",
      "M": "പുതുമല",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 991,
      "E": "Mundakai",
      "M": "മുണ്ടകൈ",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 992,
      "E": "Rippon",
      "M": "റിപ്പണ്‍",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 993,
      "E": "Chembra",
      "M": "ചെമ്പ്ര",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 994,
      "E": "Meppadi",
      "M": "മേപ്പാടി",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 995,
      "E": "Cottanad",
      "M": "കോട്ടനാട്",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 996,
      "E": "Trikkaipetta",
      "M": "തൃക്കൈപ്പറ്റ",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 997,
      "E": "Vellarmala",
      "M": "വെള്ളാര്‍മല",
      "PIN": "673577",
      "DID": "12"
    },
    {
      "POSTID": 998,
      "E": "Pakkom",
      "M": "പാക്കം",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 999,
      "E": "Palakolli",
      "M": "പാളക്കൊല്ലി",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1000,
      "E": "Padichira",
      "M": "പാടിച്ചിറ",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1001,
      "E": "Pulpalli",
      "M": "പുല്‍പ്പള്ളി",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1002,
      "E": "Bhoodanam Colony",
      "M": "ഭൂദാനം കോളനി",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1003,
      "E": "Amarakuni",
      "M": "അമരക്കുനി",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1004,
      "E": "Marakadavu",
      "M": "മരക്കടവ്",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1005,
      "E": "Mullankolli",
      "M": "മുള്ളന്‍കൊല്ലി",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1006,
      "E": "Manalvayal",
      "M": "മണല്‍ വയല്‍",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1007,
      "E": "Kabanigiri",
      "M": "കബനിഗിരി",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1008,
      "E": "Kalanadikolli",
      "M": "കളനാടിക്കൊല്ലി",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1009,
      "E": "Sasimala",
      "M": "ശശിമല",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1010,
      "E": "Seethamount-Pulpalli",
      "M": "സീതാമൗണ്ട്",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1011,
      "E": "Cheeyambam",
      "M": "ചീയമ്പം",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1012,
      "E": "Perikkallur",
      "M": "പെരിക്കല്ലൂര്‍",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1013,
      "E": "Chettapalam",
      "M": "ചെറ്റപ്പാലം",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1014,
      "E": "Veliyambam",
      "M": "വേലിയമ്പം",
      "PIN": "673579",
      "DID": "12"
    },
    {
      "POSTID": 1015,
      "E": "Meemutty",
      "M": "മീമുട്ടി",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1016,
      "E": "Murampahty",
      "M": "മുറംപാത്തി",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1017,
      "E": "Mundoor Kozhikode",
      "M": "മുണ്ട‍ൂര്‍",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1018,
      "E": "Kuppayakode",
      "M": "കുപ്പായക്കോട്",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1019,
      "E": "Kannoth",
      "M": "കണ്ണോത്ത്",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1020,
      "E": "Chembukadavu",
      "M": "ചെമ്പുകടവ്",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1021,
      "E": "Theyyappara",
      "M": "തെയ്യപ്പാറ",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1022,
      "E": "Velancode",
      "M": "വേളങ്കോട്",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1023,
      "E": "Kodanchery-Thamarassery",
      "M": "കോടഞ്ചേരി-താമരശ്ശേരി",
      "PIN": "673580",
      "DID": "11"
    },
    {
      "POSTID": 1024,
      "E": "Vaduvanchal",
      "M": "വടുവന്‍ചാല്‍",
      "PIN": "673581",
      "DID": "12"
    },
    {
      "POSTID": 1025,
      "E": "Kadalmad",
      "M": "കടല്‍മാട്",
      "PIN": "673581",
      "DID": "12"
    },
    {
      "POSTID": 1026,
      "E": "Chellande",
      "M": "ചെല്ലങ്കോട്",
      "PIN": "673581",
      "DID": "12"
    },
    {
      "POSTID": 1027,
      "E": "Madavoor ",
      "M": "മടവൂര്‍",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1028,
      "E": "Manipuram",
      "M": "മാനിപുരം",
      "PIN": "673572",
      "DID": "11"
    },
    {
      "POSTID": 1029,
      "E": "Narikunni",
      "M": "നരിക്കുനി",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1030,
      "E": "Parannur",
      "M": "പാറന്നൂര്‍",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1031,
      "E": "Punnur Cherupalam",
      "M": "പുന്നൂര്‍ ചെറുപാലം ",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1032,
      "E": "Punnasseri",
      "M": "പുന്നശ്ശേരി",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1033,
      "E": "Muttancheri ",
      "M": "മുട്ടാഞ്ചേരി",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1034,
      "E": "Eravannur",
      "M": "എരവന്നൂര്‍",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1035,
      "E": "Cherupalam",
      "M": "ചെറുപാലം",
      "PIN": "673585",
      "DID": "11"
    },
    {
      "POSTID": 1036,
      "E": "Nooramthode",
      "M": "നൂറംതോട്",
      "PIN": "673586",
      "DID": "11"
    },
    {
      "POSTID": 1037,
      "E": "Pudupadi",
      "M": "പുതുപ്പാടി",
      "PIN": "673586",
      "DID": "11"
    },
    {
      "POSTID": 1038,
      "E": "Adivaram Pudupadi",
      "M": "അടിവാരം പുതുപ്പാടി",
      "PIN": "673586",
      "DID": "11"
    },
    {
      "POSTID": 1039,
      "E": "Kakkad Puthupadi",
      "M": "കക്കാട് പുതുപ്പാടി",
      "PIN": "673586",
      "DID": "11"
    },
    {
      "POSTID": 1040,
      "E": "Iyyad",
      "M": "ഇയ്യാട്",
      "PIN": "673574",
      "DID": "11"
    },
    {
      "POSTID": 1041,
      "E": "Thariode",
      "M": "തരിയോട്",
      "PIN": "673575",
      "DID": "12"
    },
    {
      "POSTID": 1042,
      "E": "Meenangadi",
      "M": "മീനങ്ങാടി",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1043,
      "E": "Karani",
      "M": "കരണി",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1044,
      "E": "Karachal",
      "M": "കാരച്ചാല്‍",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1045,
      "E": "Kariyambadi",
      "M": "കാര്യമ്പാടി",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1046,
      "E": "Kumbaleri",
      "M": "കുമ്പളേരി",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1047,
      "E": "Krishnagiri",
      "M": "കൃഷ്ണഗിരി",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1048,
      "E": "Kolagappara",
      "M": "കൊളഗപ്പാറ",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1049,
      "E": "Mylambadi",
      "M": "മൈലമ്പാടി",
      "PIN": "673591",
      "DID": "12"
    },
    {
      "POSTID": 1050,
      "E": "Naiketty",
      "M": "നായ്ക്കട്ടി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1051,
      "E": "Nulpuzha",
      "M": "നൂല്‍പ്പുഴ",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1052,
      "E": "Pazhupathur",
      "M": "പഴുപ്പത്തൂര്‍",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1053,
      "E": "Pambra",
      "M": "പാമ്പ്ര",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1054,
      "E": "Poomulla",
      "M": "പൂമുല്ല",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1055,
      "E": "Beenachi",
      "M": "ബീനാച്ചി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1056,
      "E": "Muthanga",
      "M": "മുത്തങ്ങ",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1057,
      "E": "Modakolly",
      "M": "മുടക്കൊല്ലി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1058,
      "E": "Moolankav",
      "M": "മൂലങ്കാവ്",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1059,
      "E": "Valluvady",
      "M": "വള്ളുവാടി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1060,
      "E": "Vakeri",
      "M": "വാകേരി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1061,
      "E": "Kidanganad",
      "M": "കിടങ്ങനാട്",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1062,
      "E": "Kuppadi",
      "M": "കുപ്പാടി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1063,
      "E": "Sultan\\'s Bathery",
      "M": "സുല്‍ത്താന്‍ ബത്തേരി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1064,
      "E": "Chulliote",
      "M": "ചുള്ളിയോട്",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1065,
      "E": "Nenmeni",
      "M": "നെന്മേനി",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1066,
      "E": "Chedalath",
      "M": "ചെദ്ലത്ത്",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1067,
      "E": "Thovarimala",
      "M": "തൊവരിമല",
      "PIN": "673592",
      "DID": "12"
    },
    {
      "POSTID": 1068,
      "E": "Narikundu",
      "M": "നരിക്കുണ്ട്",
      "PIN": "673593",
      "DID": "12"
    },
    {
      "POSTID": 1069,
      "E": "Nallarchal",
      "M": "നെല്ലാറച്ചാല്‍",
      "PIN": "673593",
      "DID": "12"
    },
    {
      "POSTID": 1070,
      "E": "Ambalavayal",
      "M": "അമ്പലവയല്‍",
      "PIN": "673593",
      "DID": "12"
    },
    {
      "POSTID": 1071,
      "E": "Karadipara",
      "M": "കരടിപ്പാറ",
      "PIN": "673593",
      "DID": "12"
    },
    {
      "POSTID": 1072,
      "E": "Kalathuvayal",
      "M": "കളത്തുവയല്‍",
      "PIN": "673593",
      "DID": "12"
    },
    {
      "POSTID": 1073,
      "E": "Cheengeri",
      "M": "ചീങ്ങേരി",
      "PIN": "673593",
      "DID": "12"
    },
    {
      "POSTID": 1074,
      "E": "Nambiarkunnu",
      "M": "നമ്പ്യാര്‍ കുന്ന്",
      "PIN": "673595",
      "DID": "12"
    },
    {
      "POSTID": 1075,
      "E": "Puthenkunnu",
      "M": "പുത്തന്‍കുന്ന്",
      "PIN": "673595",
      "DID": "12"
    },
    {
      "POSTID": 1076,
      "E": "Mookuthikunnu",
      "M": "മുക്കുത്തിക്കുന്ന്",
      "PIN": "673595",
      "DID": "12"
    },
    {
      "POSTID": 1077,
      "E": "Cheeral",
      "M": "ചീരാല്‍",
      "PIN": "673595",
      "DID": "12"
    },
    {
      "POSTID": 1078,
      "E": "Nenmenikunnu",
      "M": "നെന്മേനിക്കുന്ന്",
      "PIN": "673595",
      "DID": "12"
    },
    {
      "POSTID": 1079,
      "E": "Thazhathoor",
      "M": "താഴത്തൂര്‍",
      "PIN": "673595",
      "DID": "12"
    },
    {
      "POSTID": 1080,
      "E": "Poothadi",
      "M": "പൂതാടി",
      "PIN": "673596",
      "DID": "12"
    },
    {
      "POSTID": 1081,
      "E": "Athirattukunnu",
      "M": "അതിരാറ്റുകുന്ന്",
      "PIN": "673596",
      "DID": "12"
    },
    {
      "POSTID": 1082,
      "E": "Valavayal",
      "M": "വാളവയല്‍",
      "PIN": "673596",
      "DID": "12"
    },
    {
      "POSTID": 1083,
      "E": "Choothupara",
      "M": "ചൂതുപാറ",
      "PIN": "673596",
      "DID": "12"
    },
    {
      "POSTID": 1084,
      "E": "Koleri",
      "M": "കോളേരി",
      "PIN": "673596",
      "DID": "12"
    },
    {
      "POSTID": 1085,
      "E": "Kenichira",
      "M": "കേണിച്ചിറ",
      "PIN": "673596",
      "DID": "12"
    },
    {
      "POSTID": 1086,
      "E": "Thazhamunda",
      "M": "താഴമുണ്ട",
      "PIN": "673596",
      "DID": "12"
    },
    {
      "POSTID": 1087,
      "E": "Nayarkuzhi",
      "M": "നായര്‍കുഴി",
      "PIN": "673601",
      "DID": "11"
    },
    {
      "POSTID": 1088,
      "E": "Malayamma",
      "M": "മലയമ്മ",
      "PIN": "673601",
      "DID": "11"
    },
    {
      "POSTID": 1089,
      "E": "Calicut Regional Eng. College",
      "M": "കാലിക്കറ്റ് റീജിയണല്‍ ഇഞ്ചിനീയറിംഗ് കോളേജ്",
      "PIN": "673601",
      "DID": "11"
    },
    {
      "POSTID": 1090,
      "E": "Chathamangalam",
      "M": "ചാത്തമംഗലം",
      "PIN": "673601",
      "DID": "11"
    },
    {
      "POSTID": 1091,
      "E": "Choolur",
      "M": "ചൂലൂര്‍",
      "PIN": "673601",
      "DID": "11"
    },
    {
      "POSTID": 1092,
      "E": "Vellalasseri",
      "M": "വെള്ളലശ്ശേരി",
      "PIN": "673601",
      "DID": "11"
    },
    {
      "POSTID": 1093,
      "E": "Pannicode",
      "M": "പന്നിക്കോട്",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1094,
      "E": "Alli",
      "M": "അള്ളി",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1095,
      "E": "Mokkam",
      "M": "മുക്കം",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1096,
      "E": "Manasseri",
      "M": "മണാശ്ശേരി",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1097,
      "E": "Karasseri",
      "M": "കാരശ്ശേരി",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1098,
      "E": "Kumaranallur",
      "M": "കുമാരനെല്ലൂര്‍",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1099,
      "E": "Nellikkaparamba",
      "M": "നെല്ലിക്കാപറമ്പ്",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1100,
      "E": "Kodiyathur",
      "M": "കൊടിയത്തൂര്‍",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1101,
      "E": "Mysoremala",
      "M": "മൈസൂര്‍മല",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1102,
      "E": "Chennamangalur",
      "M": "ചേന്നമംഗല്ലൂര്‍",
      "PIN": "673602",
      "DID": "11"
    },
    {
      "POSTID": 1103,
      "E": "Punnakkal",
      "M": "പുന്നയ്ക്കല്‍",
      "PIN": "673603",
      "DID": "11"
    },
    {
      "POSTID": 1104,
      "E": "Pullurampara",
      "M": "പുല്ലൂരാംപാറ",
      "PIN": "673603",
      "DID": "11"
    },
    {
      "POSTID": 1105,
      "E": "Muthappanpuzha",
      "M": "മുത്തപ്പന്‍പുഴ",
      "PIN": "673603",
      "DID": "11"
    },
    {
      "POSTID": 1106,
      "E": "Anackampoyil",
      "M": "ആനക്കാംപൊയില്‍",
      "PIN": "673603",
      "DID": "11"
    },
    {
      "POSTID": 1107,
      "E": "Kallurutty",
      "M": "കല്ലുരുട്ടി",
      "PIN": "673582",
      "DID": "11"
    },
    {
      "POSTID": 1108,
      "E": "Ponnankayam",
      "M": "പൊന്നാങ്കയം",
      "PIN": "673603",
      "DID": "11"
    },
    {
      "POSTID": 1109,
      "E": "Thambalamanna",
      "M": "തമ്പലമണ്ണ",
      "PIN": "673603",
      "DID": "11"
    },
    {
      "POSTID": 1110,
      "E": "Tiruvambadi",
      "M": "തിരുവമ്പാടി",
      "PIN": "673603",
      "DID": "11"
    },
    {
      "POSTID": 1111,
      "E": "Poovaramthodu",
      "M": "പൂവാറംതോട്",
      "PIN": "673604",
      "DID": "11"
    },
    {
      "POSTID": 1112,
      "E": "Manhakadavu",
      "M": "മഞ്ഞക്കടവ്",
      "PIN": "673604",
      "DID": "11"
    },
    {
      "POSTID": 1113,
      "E": "Kakkadampoyil",
      "M": "കക്കാടംപൊയില്‍",
      "PIN": "673604",
      "DID": "10"
    },
    {
      "POSTID": 1114,
      "E": "Koodaranhi",
      "M": "കൂടരഞ്ഞി",
      "PIN": "673604",
      "DID": "11"
    },
    {
      "POSTID": 1115,
      "E": "Kuliramutty",
      "M": "കുളിരാമുട്ടി",
      "PIN": "673604",
      "DID": "11"
    },
    {
      "POSTID": 1116,
      "E": "Koombara",
      "M": "കൂമ്പാറ",
      "PIN": "673604",
      "DID": "11"
    },
    {
      "POSTID": 1117,
      "E": "Koombara Bazar",
      "M": "കൂമ്പാറ ബസാര്‍",
      "PIN": "673604",
      "DID": "11"
    },
    {
      "POSTID": 1118,
      "E": "Palath",
      "M": "പാലത്ത്",
      "PIN": "673611",
      "DID": "11"
    },
    {
      "POSTID": 1119,
      "E": "Kizhakkumuri",
      "M": "കിഴക്കുമുറി",
      "PIN": "673611",
      "DID": "11"
    },
    {
      "POSTID": 1120,
      "E": "Kuruvattoor",
      "M": "കുരുവട്ടൂര്‍",
      "PIN": "673611",
      "DID": "11"
    },
    {
      "POSTID": 1121,
      "E": "Kakkodi",
      "M": "കക്കോടി",
      "PIN": "673611",
      "DID": "11"
    },
    {
      "POSTID": 1122,
      "E": "Morikkara",
      "M": "മോരിക്കര",
      "PIN": "673611",
      "DID": "11"
    },
    {
      "POSTID": 1123,
      "E": "Panangad",
      "M": "പനങ്ങാട്",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1124,
      "E": "Balusseri",
      "M": "ബാലുശ്ശേരി",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1125,
      "E": "Eramangalam",
      "M": "എരമംഗലം",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1126,
      "E": "Kannadipoyil",
      "M": "കണ്ണാടിപൊയില്‍",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1127,
      "E": "Kariyathankavu",
      "M": "കരിയാത്തന്‍കാവ്",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1128,
      "E": "Karumala",
      "M": "കരുമല",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1129,
      "E": "Kokkallur",
      "M": "കോക്കല്ലൂര്‍",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1130,
      "E": "Thurutiyad",
      "M": "തുരുത്തിയാട്",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1131,
      "E": "Nanminda",
      "M": "നന്മണ്ട",
      "PIN": "673613",
      "DID": "11"
    },
    {
      "POSTID": 1132,
      "E": "Pavandur",
      "M": "പാവണ്ട‍ൂര്‍",
      "PIN": "673613",
      "DID": "11"
    },
    {
      "POSTID": 1133,
      "E": "Naduvannur",
      "M": "നടുവണ്ണൂര്‍",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1134,
      "E": "Poonath",
      "M": "പൂനത്ത്",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1135,
      "E": "Mannankavu",
      "M": "മന്ദന്‍കാവ്",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1136,
      "E": "Moolad",
      "M": "മൂലാട്",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1137,
      "E": "Oravil",
      "M": "ഒറവില്‍",
      "PIN": "673323",
      "DID": "11"
    },
    {
      "POSTID": 1138,
      "E": "Vakayad",
      "M": "വാകയാട്",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1139,
      "E": "Karuvannur",
      "M": "കരുവണ്ണൂര്‍",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1140,
      "E": "Kavil",
      "M": "കാവില്‍",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1141,
      "E": "Kottur",
      "M": "കോട്ടൂര്‍",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1142,
      "E": "Thiruvode",
      "M": "തിരുവോട്",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1143,
      "E": "Kakkayam",
      "M": "കക്കയം",
      "PIN": "673527",
      "DID": "11"
    },
    {
      "POSTID": 1144,
      "E": "Kallanode",
      "M": "കല്ലാനോട്",
      "PIN": "673527",
      "DID": "11"
    },
    {
      "POSTID": 1145,
      "E": "Irivallur",
      "M": "ഇരിവള്ളൂര്‍",
      "PIN": "673616",
      "DID": "11"
    },
    {
      "POSTID": 1146,
      "E": "Edakkara",
      "M": "എടക്കര",
      "PIN": "673616",
      "DID": "11"
    },
    {
      "POSTID": 1147,
      "E": "Kannankara",
      "M": "കണ്ണങ്കര",
      "PIN": "673616",
      "DID": "11"
    },
    {
      "POSTID": 1148,
      "E": "Chelannur",
      "M": "ചേളന്നൂര്‍",
      "PIN": "673616",
      "DID": "11"
    },
    {
      "POSTID": 1149,
      "E": "Makkada",
      "M": "മക്കട",
      "PIN": "673611",
      "DID": "11"
    },
    {
      "POSTID": 1150,
      "E": "Avidanallur ",
      "M": "അവിടനല്ലൂര്‍",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1151,
      "E": "Kakkur",
      "M": "കാക്കൂര്‍",
      "PIN": "673613",
      "DID": "11"
    },
    {
      "POSTID": 1152,
      "E": "Urallur",
      "M": "ഊരള്ളൂര്‍",
      "PIN": "673620",
      "DID": "11"
    },
    {
      "POSTID": 1153,
      "E": "Kakkancheri",
      "M": "കക്കഞ്ചേരി",
      "PIN": "673323",
      "DID": "11"
    },
    {
      "POSTID": 1154,
      "E": "Peruvattoor",
      "M": "പെരുവട്ടൂര്‍",
      "PIN": "673620",
      "DID": "11"
    },
    {
      "POSTID": 1155,
      "E": "Quilandy Bazar",
      "M": "കൊയിലാണ്ടി ബസാര്‍",
      "PIN": "673620",
      "DID": "11"
    },
    {
      "POSTID": 1156,
      "E": "Kinalur",
      "M": "കിനാലൂര്‍",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1157,
      "E": "Vattoli Bazar",
      "M": "വട്ടോളി ബസാര്‍",
      "PIN": "673612",
      "DID": "11"
    },
    {
      "POSTID": 1158,
      "E": "Nochad ",
      "M": "നൊച്ചാട്",
      "PIN": "673614",
      "DID": "11"
    },
    {
      "POSTID": 1159,
      "E": "Perumukham",
      "M": "പെരുമുഖം",
      "PIN": "673631",
      "DID": "11"
    },
    {
      "POSTID": 1160,
      "E": "Feroke",
      "M": "ഫറോക്ക്",
      "PIN": "673631",
      "DID": "11"
    },
    {
      "POSTID": 1161,
      "E": "Farook College",
      "M": "ഫറോക്ക് കോളേജ്",
      "PIN": "673632",
      "DID": "11"
    },
    {
      "POSTID": 1162,
      "E": "Karadparamba",
      "M": "കാരാട് പറമ്പ്",
      "PIN": "673632",
      "DID": "10"
    },
    {
      "POSTID": 1163,
      "E": "Puthucode",
      "M": "പുതുക്കോട്",
      "PIN": "673633",
      "DID": "10"
    },
    {
      "POSTID": 1164,
      "E": "Ramanattukara",
      "M": "രാമനാട്ടുകര",
      "PIN": "673633",
      "DID": "11"
    },
    {
      "POSTID": 1165,
      "E": "Vazhayur",
      "M": "വാഴയൂര്‍",
      "PIN": "673633",
      "DID": "10"
    },
    {
      "POSTID": 1166,
      "E": "Vazhayur East",
      "M": "വാഴയൂര്‍ ഈസ്റ്റ്",
      "PIN": "673633",
      "DID": "10"
    },
    {
      "POSTID": 1167,
      "E": "Vaidyarangadi",
      "M": "വൈദ്യരങ്ങാടി",
      "PIN": "673633",
      "DID": "11"
    },
    {
      "POSTID": 1168,
      "E": "Pulliparamba",
      "M": "പുല്ലിപ്പറമ്പ്",
      "PIN": "673634",
      "DID": "10"
    },
    {
      "POSTID": 1169,
      "E": "Kolakkatchali",
      "M": "കൊളക്കാട്ടുചാലി",
      "PIN": "673634",
      "DID": "10"
    },
    {
      "POSTID": 1170,
      "E": "Chelembra",
      "M": "ചേലേമ്പ്ര",
      "PIN": "673634",
      "DID": "10"
    },
    {
      "POSTID": 1171,
      "E": "Calicut University",
      "M": "കാലിക്കറ്റ് യൂണിവേഴ്സിറ്റി",
      "PIN": "673635",
      "DID": "10"
    },
    {
      "POSTID": 1172,
      "E": "Puthur Pallikkal",
      "M": "പുത്തൂര്‍ പള്ളിക്കല്‍",
      "PIN": "673636",
      "DID": "10"
    },
    {
      "POSTID": 1173,
      "E": "Chenakkalangadi",
      "M": "ചെനക്കലങ്ങാടി",
      "PIN": "673636",
      "DID": "10"
    },
    {
      "POSTID": 1174,
      "E": "Thenhipalam",
      "M": "തേഞ്ഞിപ്പലം",
      "PIN": "673636",
      "DID": "10"
    },
    {
      "POSTID": 1175,
      "E": "Pulikkal",
      "M": "പുളിക്കല്‍",
      "PIN": "673637",
      "DID": "10"
    },
    {
      "POSTID": 1176,
      "E": "Andiyoorkunnu",
      "M": "ആന്തിയൂര്‍ക്കുന്ന്",
      "PIN": "673637",
      "DID": "10"
    },
    {
      "POSTID": 1177,
      "E": "Ayikkarapadi",
      "M": "ഐക്കരപ്പടി",
      "PIN": "673637",
      "DID": "10"
    },
    {
      "POSTID": 1178,
      "E": "Valiyaparamba",
      "M": "വലിയപറമ്പ്",
      "PIN": "673637",
      "DID": "10"
    },
    {
      "POSTID": 1179,
      "E": "Kannamvettikavu",
      "M": "കണ്ണംവെട്ടിക്കാവ്",
      "PIN": "673637",
      "DID": "10"
    },
    {
      "POSTID": 1180,
      "E": "Arimbra",
      "M": "അരിമ്പ്ര",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1181,
      "E": "Muthuvalloor",
      "M": "മുതുവല്ലൂര്‍",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1182,
      "E": "Olavattur",
      "M": "ഒളവട്ടൂര്‍",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1183,
      "E": "Kuminiparamba",
      "M": "കുമ്മിണിപറമ്പ്",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1184,
      "E": "Chirayil",
      "M": "ചിറയില്‍",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1185,
      "E": "Nediyirippu",
      "M": "നെടിയിരുപ്പ്",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1186,
      "E": "Peruvallur",
      "M": "പെരുവള്ളൂര്‍",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1187,
      "E": "Kondotty",
      "M": "കൊണ്ടോട്ടി",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1188,
      "E": "Thurakkal",
      "M": "തുറക്കല്‍",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1189,
      "E": "Panampilavu",
      "M": "പനംപിലാവ്",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1190,
      "E": "Poovathikkal",
      "M": "പൂവത്തിക്കല്‍",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1191,
      "E": "Areacode",
      "M": "അരീക്കോട്",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1192,
      "E": "Iruvetty",
      "M": "ഇരുവേറ്റി",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1193,
      "E": "Urangattiri",
      "M": "ഊര്‍ങ്ങാട്ടിരി",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1194,
      "E": "Valillapuzha",
      "M": "വാലില്ലാപ്പുഴ",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1195,
      "E": "Kizhuppillikkara",
      "M": "കിഴുപ്പിള്ളിക്കര",
      "PIN": "680702",
      "DID": "8"
    },
    {
      "POSTID": 1196,
      "E": "Kizhuparamba",
      "M": "കീഴുപറമ്പ്",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1197,
      "E": "Perumparamba Ugrapuram",
      "M": "പെരുംപറമ്പ് - ഉഗ്രപുരം",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1198,
      "E": "Vettilapara",
      "M": "വെറ്റിലപ്പാറ",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1199,
      "E": "Chembrakkottur",
      "M": "",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1200,
      "E": "Chemrakattur",
      "M": "ചെമ്രക്കാട്ടൂര്‍",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1201,
      "E": "Maithara",
      "M": "മൈത്ര",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1202,
      "E": "Thottilangady",
      "M": "തോട്ടിലങ്ങാടി",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1203,
      "E": "Thottumukkam",
      "M": "തോട്ടുമുക്കം",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1204,
      "E": "Mundakkal ",
      "M": "മുണ്ടയ്ക്കല്‍",
      "PIN": "673645",
      "DID": "10"
    },
    {
      "POSTID": 1205,
      "E": "Omanoor ",
      "M": "ഓമാനൂര്‍",
      "PIN": "673645",
      "DID": "10"
    },
    {
      "POSTID": 1206,
      "E": "Vazhkkad",
      "M": "വാഴക്കാട്",
      "PIN": "673640",
      "DID": "10"
    },
    {
      "POSTID": 1207,
      "E": "Karumarakkad",
      "M": "കരുമരക്കാട്",
      "PIN": "673640",
      "DID": "10"
    },
    {
      "POSTID": 1208,
      "E": "Cheacode",
      "M": "ചീക്കോട്",
      "PIN": "673645",
      "DID": "10"
    },
    {
      "POSTID": 1209,
      "E": "Palakkad-Malappuram",
      "M": "പാലക്കാട്",
      "PIN": "673641",
      "DID": "10"
    },
    {
      "POSTID": 1210,
      "E": "Puliyakode",
      "M": "പുളിയക്കോട്",
      "PIN": "673641",
      "DID": "10"
    },
    {
      "POSTID": 1211,
      "E": "Akkaparamba",
      "M": "ആക്കപ്പറമ്പ്",
      "PIN": "673641",
      "DID": "10"
    },
    {
      "POSTID": 1212,
      "E": "Kuzhimanna",
      "M": "കുഴിമണ്ണ",
      "PIN": "673641",
      "DID": "10"
    },
    {
      "POSTID": 1213,
      "E": "Tavanur Feroke",
      "M": "തവനൂര്‍-ഫറോക്ക്",
      "PIN": "673641",
      "DID": "10"
    },
    {
      "POSTID": 1214,
      "E": "Trippanachi",
      "M": "തൃപ്പനച്ചി",
      "PIN": "673641",
      "DID": "10"
    },
    {
      "POSTID": 1215,
      "E": "Ozhukur",
      "M": "ഒഴുകൂര്‍",
      "PIN": "673642",
      "DID": "10"
    },
    {
      "POSTID": 1216,
      "E": "Olamathil",
      "M": "ഒളമതില്‍",
      "PIN": "673642",
      "DID": "10"
    },
    {
      "POSTID": 1217,
      "E": "Mongam",
      "M": "മോങ്ങം",
      "PIN": "673642",
      "DID": "10"
    },
    {
      "POSTID": 1218,
      "E": "Karuvanthiruthy",
      "M": "കരുവന്‍തിരുത്തി",
      "PIN": "673631",
      "DID": "11"
    },
    {
      "POSTID": 1219,
      "E": "Kavanur",
      "M": "കാവനൂര്‍",
      "PIN": "673639",
      "DID": "10"
    },
    {
      "POSTID": 1220,
      "E": "Cheruvayur",
      "M": "ചെറുവായൂര്‍",
      "PIN": "673645",
      "DID": "10"
    },
    {
      "POSTID": 1221,
      "E": "Karippur",
      "M": "കരിപ്പൂര്‍",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1222,
      "E": "Calicut Airport",
      "M": "കാലിക്കറ്റ് എയര്‍പോര്‍ട്ട്",
      "PIN": "673647",
      "DID": "10"
    },
    {
      "POSTID": 1223,
      "E": "Melangadi",
      "M": "മേലങ്ങാടി",
      "PIN": "673638",
      "DID": "10"
    },
    {
      "POSTID": 1224,
      "E": "Morayur",
      "M": "മൊറയൂര്‍",
      "PIN": "673642",
      "DID": "10"
    },
    {
      "POSTID": 1225,
      "E": "Valluvambram",
      "M": "വള്ളുവമ്പ്രം",
      "PIN": "673642",
      "DID": "10"
    },
    {
      "POSTID": 1226,
      "E": "Vilayil",
      "M": "വിളയില്‍",
      "PIN": "673641",
      "DID": "10"
    },
    {
      "POSTID": 1227,
      "E": "Pallikkal",
      "M": "പള്ളിക്കല്‍",
      "PIN": "673634",
      "DID": "10"
    },
    {
      "POSTID": 1228,
      "E": "Azhinhilam",
      "M": "അഴിഞ്ഞിലം",
      "PIN": "673632",
      "DID": "10"
    },
    {
      "POSTID": 1229,
      "E": "Kolathara",
      "M": "കൊളത്തറ",
      "PIN": "673655",
      "DID": "11"
    },
    {
      "POSTID": 1230,
      "E": "Pazhur.",
      "M": "പാഴൂര്‍",
      "PIN": "673661",
      "DID": "11"
    },
    {
      "POSTID": 1231,
      "E": "Mavoor",
      "M": "മാവൂര്‍",
      "PIN": "673661",
      "DID": "11"
    },
    {
      "POSTID": 1232,
      "E": "Kanniparamba",
      "M": "കണ്ണിപ്പറമ്പ്",
      "PIN": "673661",
      "DID": "11"
    },
    {
      "POSTID": 1233,
      "E": "Kayalam",
      "M": "കായലം",
      "PIN": "673661",
      "DID": "11"
    },
    {
      "POSTID": 1234,
      "E": "Cheruppa",
      "M": "ചെറുപ്പ",
      "PIN": "673661",
      "DID": "11"
    },
    {
      "POSTID": 1235,
      "E": "Cheruvadi",
      "M": "ചെറുവാടി",
      "PIN": "673661",
      "DID": "11"
    },
    {
      "POSTID": 1236,
      "E": "Tirur",
      "M": "തിരൂര്‍",
      "PIN": "676101",
      "DID": "10"
    },
    {
      "POSTID": 1237,
      "E": "Purathur",
      "M": "പുറത്തൂര്‍",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1238,
      "E": "Pudupalli",
      "M": "പുതുപ്പള്ളി",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1239,
      "E": "Alathiyur",
      "M": "ആലത്തിയൂര്‍",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1240,
      "E": "Poyilisseri",
      "M": "പൊയിലിശ്ശേരി",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1241,
      "E": "Bettath Pudiangadi",
      "M": "ബെട്ടത്ത് പുതിയങ്ങാടി",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1242,
      "E": "Vettom",
      "M": "വെട്ടം ",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1243,
      "E": "Vettom Pallipuram",
      "M": "വെട്ടം-പള്ളിപ്പുറം",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1244,
      "E": "Vengallur",
      "M": "വെങ്ങാലൂര്‍",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1245,
      "E": "Talakadathur",
      "M": "തലക്കടത്തൂര്‍",
      "PIN": "676103",
      "DID": "10"
    },
    {
      "POSTID": 1246,
      "E": "Trikandiyur",
      "M": "തൃക്കണ്ടിയൂര്‍",
      "PIN": "676104",
      "DID": "10"
    },
    {
      "POSTID": 1247,
      "E": "Pachattiri",
      "M": "പച്ചാട്ടിരി",
      "PIN": "676105",
      "DID": "10"
    },
    {
      "POSTID": 1248,
      "E": "Mangattiri.",
      "M": "മാങ്ങാട്ടിരി",
      "PIN": "676105",
      "DID": "10"
    },
    {
      "POSTID": 1249,
      "E": "Thekkummuri",
      "M": "തെക്കുംമുറി",
      "PIN": "676105",
      "DID": "10"
    },
    {
      "POSTID": 1250,
      "E": "Athrisseri",
      "M": "ആതൃശ്ശേരി",
      "PIN": "676106",
      "DID": "10"
    },
    {
      "POSTID": 1251,
      "E": "Ponmundam",
      "M": "പൊന്മുണ്ടം",
      "PIN": "676106",
      "DID": "10"
    },
    {
      "POSTID": 1252,
      "E": "Pookayil Bazar",
      "M": "പൂക്കയില്‍ ബസാര്‍",
      "PIN": "676107",
      "DID": "10"
    },
    {
      "POSTID": 1253,
      "E": "Codacal",
      "M": "കൊടക്കല്‍",
      "PIN": "676108",
      "DID": "10"
    },
    {
      "POSTID": 1254,
      "E": "Triprangode",
      "M": "തൃപ്രങ്ങോട്",
      "PIN": "676108",
      "DID": "10"
    },
    {
      "POSTID": 1255,
      "E": "Niramarudur",
      "M": "നിറമരുതൂര്‍",
      "PIN": "676109",
      "DID": "10"
    },
    {
      "POSTID": 1256,
      "E": "Chamravattom",
      "M": "ചമ്രവട്ടം",
      "PIN": "676102",
      "DID": "10"
    },
    {
      "POSTID": 1257,
      "E": "Cheriyamundam",
      "M": "ചെറിയമുണ്ടം",
      "PIN": "676106",
      "DID": "10"
    },
    {
      "POSTID": 1258,
      "E": "Manjeri",
      "M": "മഞ്ചേരി",
      "PIN": "676121",
      "DID": "10"
    },
    {
      "POSTID": 1259,
      "E": "Manjeri Bazar",
      "M": "മഞ്ചേരി ബസാര്‍",
      "PIN": "676121",
      "DID": "10"
    },
    {
      "POSTID": 1260,
      "E": "Vakkethody",
      "M": "വാക്കേത്തൊടി",
      "PIN": "676121",
      "DID": "10"
    },
    {
      "POSTID": 1261,
      "E": "Kadambode",
      "M": "കടമ്പോട്",
      "PIN": "676521",
      "DID": "10"
    },
    {
      "POSTID": 1262,
      "E": "Narukara",
      "M": "നറുകര",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1263,
      "E": "Payyanad",
      "M": "പയ്യനാട്",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1264,
      "E": "Pappinipara",
      "M": "പാപ്പിനിപ്പാറ",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1265,
      "E": "Pullancheri",
      "M": "പുല്ലഞ്ചേരി",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1266,
      "E": "Mariyad",
      "M": "മാരിയാട്",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1267,
      "E": "Manjeri College",
      "M": "മഞ്ചേരി കോളേജ്",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1268,
      "E": "Elankur",
      "M": "എളങ്കൂര്‍",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1269,
      "E": "Nellikuthu",
      "M": "നെല്ലിക്കുത്ത്",
      "PIN": "676122",
      "DID": "10"
    },
    {
      "POSTID": 1270,
      "E": "Pathapiriyam",
      "M": "പത്തപ്പിരിയം",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1271,
      "E": "Pathiriyal",
      "M": "പത്തിരിയാല്‍",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1272,
      "E": "Manhapatta",
      "M": "മഞ്ഞപ്പറ്റ",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1273,
      "E": "Amayur MLP",
      "M": "ആമയൂര്‍",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1274,
      "E": "Karuvambram",
      "M": "കരുവമ്പ്രം",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1275,
      "E": "Karuvambram West",
      "M": "കരുവമ്പ്രം വെസ്റ്റ്",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1276,
      "E": "Karakunnu",
      "M": "കാരക്കുന്ന്",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1277,
      "E": "Koomankulam",
      "M": "കൂമന്‍കുളം",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1278,
      "E": "Pulpatta",
      "M": "പുല്‍പ്പറ്റ",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1279,
      "E": "Thrikkalandu",
      "M": "തൃക്കലങ്ങോട്",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1280,
      "E": "Ananthavoor",
      "M": "അനന്താവൂര്‍",
      "PIN": "676301",
      "DID": "10"
    },
    {
      "POSTID": 1281,
      "E": "Kurumbathur",
      "M": "കുറുമ്പത്തൂര്‍",
      "PIN": "676301",
      "DID": "10"
    },
    {
      "POSTID": 1282,
      "E": "Vyrancode",
      "M": "വൈരങ്കോട്",
      "PIN": "676301",
      "DID": "10"
    },
    {
      "POSTID": 1283,
      "E": "Tirunavaya",
      "M": "തിരുനാവായ",
      "PIN": "676301",
      "DID": "10"
    },
    {
      "POSTID": 1284,
      "E": "Panagattoor",
      "M": "പനങ്ങാട്ടൂര്‍",
      "PIN": "676302",
      "DID": "10"
    },
    {
      "POSTID": 1285,
      "E": "Pariyapuram",
      "M": "പരിയാപുരം",
      "PIN": "676302",
      "DID": "10"
    },
    {
      "POSTID": 1286,
      "E": "Puthiyakadapuram",
      "M": "പുതിയകടപ്പുറം",
      "PIN": "676302",
      "DID": "10"
    },
    {
      "POSTID": 1287,
      "E": "Tanur",
      "M": "താനൂര്‍",
      "PIN": "676302",
      "DID": "10"
    },
    {
      "POSTID": 1288,
      "E": "Parappanangadi",
      "M": "പരപ്പനങ്ങാടി",
      "PIN": "676303",
      "DID": "10"
    },
    {
      "POSTID": 1289,
      "E": "Anjapura",
      "M": "അഞ്ചപ്പുര",
      "PIN": "676303",
      "DID": "10"
    },
    {
      "POSTID": 1290,
      "E": "Ullanam",
      "M": "ഉള്ളണം ",
      "PIN": "676303",
      "DID": "10"
    },
    {
      "POSTID": 1291,
      "E": "Ullanam North",
      "M": "ഉള്ളണം നോര്‍ത്ത്",
      "PIN": "676303",
      "DID": "10"
    },
    {
      "POSTID": 1292,
      "E": "Neduva",
      "M": "നെടുവ",
      "PIN": "676303",
      "DID": "10"
    },
    {
      "POSTID": 1293,
      "E": "Achanambalam",
      "M": "",
      "PIN": "676304",
      "DID": "10"
    },
    {
      "POSTID": 1294,
      "E": "Iringallur",
      "M": "ഇരിങ്ങല്ലൂര്‍",
      "PIN": "676304",
      "DID": "10"
    },
    {
      "POSTID": 1295,
      "E": "Kannattipadi",
      "M": "കണ്ണാട്ടിപ്പടി",
      "PIN": "676304",
      "DID": "10"
    },
    {
      "POSTID": 1296,
      "E": "Vengara",
      "M": "വേങ്ങര",
      "PIN": "676304",
      "DID": "10"
    },
    {
      "POSTID": 1297,
      "E": "Abdurahiman Nagar",
      "M": "അബ്ദുറഹിമാന്‍ നഗര്‍",
      "PIN": "676305",
      "DID": "10"
    },
    {
      "POSTID": 1298,
      "E": "Kannamangalam West",
      "M": "കണ്ണമംഗലം വെസ്റ്റ്",
      "PIN": "676305",
      "DID": "10"
    },
    {
      "POSTID": 1299,
      "E": "Kuttur North",
      "M": "കുറ്റൂര്‍ നോര്‍ത്ത്",
      "PIN": "676305",
      "DID": "10"
    },
    {
      "POSTID": 1300,
      "E": "Pandarangadi",
      "M": "പന്താരങ്ങാടി",
      "PIN": "676306",
      "DID": "10"
    },
    {
      "POSTID": 1301,
      "E": "Mampuram",
      "M": "മമ്പുറം",
      "PIN": "676306",
      "DID": "10"
    },
    {
      "POSTID": 1302,
      "E": "Olakara",
      "M": "ഒളകര",
      "PIN": "676306",
      "DID": "10"
    },
    {
      "POSTID": 1303,
      "E": "Kakkad",
      "M": "കക്കാട്",
      "PIN": "676306",
      "DID": "10"
    },
    {
      "POSTID": 1304,
      "E": "Kooriyad",
      "M": "കൂരിയാട്",
      "PIN": "676306",
      "DID": "10"
    },
    {
      "POSTID": 1305,
      "E": "Cherumukku",
      "M": "ചെറുമുക്ക്",
      "PIN": "676306",
      "DID": "10"
    },
    {
      "POSTID": 1306,
      "E": "Tirurangadi",
      "M": "തിരൂരങ്ങാടി",
      "PIN": "676306",
      "DID": "10"
    },
    {
      "POSTID": 1307,
      "E": "Meenadathur",
      "M": "മീനടത്തൂര്‍",
      "PIN": "676307",
      "DID": "10"
    },
    {
      "POSTID": 1308,
      "E": "Keraladeeswarapuram",
      "M": "കേരളാധീശ്വരപുരം",
      "PIN": "676307",
      "DID": "10"
    },
    {
      "POSTID": 1309,
      "E": "Tanalur",
      "M": "താനാളൂര്‍",
      "PIN": "676307",
      "DID": "10"
    },
    {
      "POSTID": 1310,
      "E": "Valiyora ",
      "M": "വലിയോറ",
      "PIN": "676304",
      "DID": "10"
    },
    {
      "POSTID": 1311,
      "E": "Kodinhi",
      "M": "കൊടിഞ്ഞി",
      "PIN": "676309",
      "DID": "10"
    },
    {
      "POSTID": 1312,
      "E": "Athavanad",
      "M": "ആതവനാട്",
      "PIN": "676301",
      "DID": "10"
    },
    {
      "POSTID": 1313,
      "E": "Moonniyur",
      "M": "മൂന്നിയൂര്‍",
      "PIN": "676311",
      "DID": "10"
    },
    {
      "POSTID": 1314,
      "E": "Ariyallur",
      "M": "അരിയല്ലൂര്‍",
      "PIN": "676312",
      "DID": "10"
    },
    {
      "POSTID": 1315,
      "E": "Ozhur",
      "M": "ഒഴൂര്‍",
      "PIN": "676307",
      "DID": "10"
    },
    {
      "POSTID": 1316,
      "E": "Moonniyur South",
      "M": "മൂന്നിയൂര്‍ സൗത്ത്",
      "PIN": "676314",
      "DID": "10"
    },
    {
      "POSTID": 1317,
      "E": "Cherur",
      "M": "ചേറൂര്‍",
      "PIN": "676304",
      "DID": "10"
    },
    {
      "POSTID": 1318,
      "E": "Parambilpeedika",
      "M": "പറമ്പില്‍ പീടിക",
      "PIN": "676317",
      "DID": "10"
    },
    {
      "POSTID": 1319,
      "E": "Velimukku",
      "M": "വെളിമുക്ക് ",
      "PIN": "676317",
      "DID": "10"
    },
    {
      "POSTID": 1320,
      "E": "Velimukku South",
      "M": "വെളിമുക്ക് സൗത്ത്",
      "PIN": "676317",
      "DID": "10"
    },
    {
      "POSTID": 1321,
      "E": "Kannamangalam",
      "M": "കണ്ണമംഗലം",
      "PIN": "676304",
      "DID": "10"
    },
    {
      "POSTID": 1322,
      "E": "Kottakkad",
      "M": "കൊടക്കാട്",
      "PIN": "676319",
      "DID": "10"
    },
    {
      "POSTID": 1323,
      "E": "Chettipadi",
      "M": "ചെട്ടിപടി",
      "PIN": "676319",
      "DID": "10"
    },
    {
      "POSTID": 1324,
      "E": "Nannambra",
      "M": "നന്നമ്പ്ര",
      "PIN": "676320",
      "DID": "10"
    },
    {
      "POSTID": 1325,
      "E": "Omachapuzha",
      "M": "ഓമച്ചപ്പുഴ",
      "PIN": "676320",
      "DID": "10"
    },
    {
      "POSTID": 1326,
      "E": "Tayyalingal",
      "M": "തെയ്യാലിങ്ങല്‍",
      "PIN": "676320",
      "DID": "10"
    },
    {
      "POSTID": 1327,
      "E": "Vadakkangara",
      "M": "വടക്കാങ്ങര",
      "PIN": "679324",
      "DID": "10"
    },
    {
      "POSTID": 1328,
      "E": "Puthuparamba",
      "M": "പുതുപറമ്പ്",
      "PIN": "676501",
      "DID": "10"
    },
    {
      "POSTID": 1329,
      "E": "Klari",
      "M": "ക്ലാരി",
      "PIN": "676501",
      "DID": "10"
    },
    {
      "POSTID": 1330,
      "E": "Edarikode",
      "M": "എടരിക്കോട്",
      "PIN": "676501",
      "DID": "10"
    },
    {
      "POSTID": 1331,
      "E": "Kuttipala",
      "M": "കുറ്റിപ്പാല",
      "PIN": "676501",
      "DID": "10"
    },
    {
      "POSTID": 1332,
      "E": "Paravanna",
      "M": "പറവണ്ണ",
      "PIN": "676502",
      "DID": "10"
    },
    {
      "POSTID": 1333,
      "E": "Vakkadu",
      "M": "വാക്കാട്",
      "PIN": "676502",
      "DID": "10"
    },
    {
      "POSTID": 1334,
      "E": "Parappur",
      "M": "പറപ്പൂര്‍",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1335,
      "E": "Pandamangalam",
      "M": "പാണ്ടമംഗലം ",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1336,
      "E": "Puthur",
      "M": "പുത്തൂര്‍ ",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1337,
      "E": "Indianoor",
      "M": "ഇന്ത്യനൂര്‍",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1338,
      "E": "Kuttipuram - Kottakkal",
      "M": "കുറ്റിപ്പുറം-കോട്ടക്കല്‍",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1339,
      "E": "Chappanangady",
      "M": "ചാപ്പനങ്ങാടി",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1340,
      "E": "Kottakkal",
      "M": "കോട്ടക്കല്‍",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1341,
      "E": "Chengottur",
      "M": "ചേങ്ങോട്ടൂര്‍",
      "PIN": "676503",
      "DID": "10"
    },
    {
      "POSTID": 1342,
      "E": "Chattiparamba",
      "M": "ചട്ടിപ്പറമ്പ്",
      "PIN": "676504",
      "DID": "10"
    },
    {
      "POSTID": 1343,
      "E": "Kodur",
      "M": "കോഡൂര്‍",
      "PIN": "676504",
      "DID": "10"
    },
    {
      "POSTID": 1344,
      "E": "Malappuram",
      "M": "മലപ്പുറം ",
      "PIN": "676505",
      "DID": "10"
    },
    {
      "POSTID": 1345,
      "E": "Pazhamallur",
      "M": "പഴമള്ളൂര്‍",
      "PIN": "676506",
      "DID": "10"
    },
    {
      "POSTID": 1346,
      "E": "Padinhattumuri",
      "M": "പടിഞ്ഞാറ്റുമുറി",
      "PIN": "676506",
      "DID": "10"
    },
    {
      "POSTID": 1347,
      "E": "Koottilangadi",
      "M": "കൂട്ടിലങ്ങാടി",
      "PIN": "676506",
      "DID": "10"
    },
    {
      "POSTID": 1348,
      "E": "Makkaraparamba",
      "M": "മക്കരപറമ്പ്",
      "PIN": "676507",
      "DID": "10"
    },
    {
      "POSTID": 1349,
      "E": "Vattallur",
      "M": "വറ്റല്ലൂര്‍",
      "PIN": "676507",
      "DID": "10"
    },
    {
      "POSTID": 1350,
      "E": "Perinthattiri",
      "M": "പെരിന്താറ്റിരി",
      "PIN": "676507",
      "DID": "10"
    },
    {
      "POSTID": 1351,
      "E": "Valakolam",
      "M": "വാളകുളം",
      "PIN": "676508",
      "DID": "10"
    },
    {
      "POSTID": 1352,
      "E": "Chullippara",
      "M": "ചുള്ളിപ്പാറ",
      "PIN": "676508",
      "DID": "10"
    },
    {
      "POSTID": 1353,
      "E": "Venniyur",
      "M": "വെന്നിയൂര്‍",
      "PIN": "676508",
      "DID": "10"
    },
    {
      "POSTID": 1354,
      "E": "Munduparamba",
      "M": "മുണ്ടുപറമ്പ",
      "PIN": "676509",
      "DID": "10"
    },
    {
      "POSTID": 1355,
      "E": "Anakkayam",
      "M": "ആനക്കയം",
      "PIN": "676509",
      "DID": "10"
    },
    {
      "POSTID": 1356,
      "E": "Perimbalm",
      "M": "പെരിമ്പലം",
      "PIN": "676509",
      "DID": "10"
    },
    {
      "POSTID": 1357,
      "E": "Randathani",
      "M": "രണ്ടത്താണി",
      "PIN": "676510",
      "DID": "10"
    },
    {
      "POSTID": 1358,
      "E": "Cherushola",
      "M": "ചെറുശ്ശോല",
      "PIN": "676510",
      "DID": "10"
    },
    {
      "POSTID": 1359,
      "E": "Irumbuzhi",
      "M": "ഇരുമ്പുഴി",
      "PIN": "676509",
      "DID": "10"
    },
    {
      "POSTID": 1360,
      "E": "Melmuri",
      "M": "മേല്‍മുറി",
      "PIN": "676517",
      "DID": "10"
    },
    {
      "POSTID": 1361,
      "E": "Oorakam Keezhmuri",
      "M": "ഊരകം കീഴ്മുറി",
      "PIN": "676519",
      "DID": "10"
    },
    {
      "POSTID": 1362,
      "E": "Panayi",
      "M": "",
      "PIN": "676516",
      "DID": "4"
    },
    {
      "POSTID": 1363,
      "E": "Pookkottur",
      "M": "പൂക്കോട്ടൂര്‍",
      "PIN": "676517",
      "DID": "10"
    },
    {
      "POSTID": 1364,
      "E": "Vellur",
      "M": "വെള്ളൂര്‍",
      "PIN": "676517",
      "DID": "10"
    },
    {
      "POSTID": 1365,
      "E": "Marakkara",
      "M": "മാറാക്കര",
      "PIN": "676553",
      "DID": "10"
    },
    {
      "POSTID": 1366,
      "E": "Pattarkadavu",
      "M": "പട്ടര്‍ക്കടവ്",
      "PIN": "676519",
      "DID": "10"
    },
    {
      "POSTID": 1367,
      "E": "Oorakam Melmuri",
      "M": "ഊരകം ",
      "PIN": "676519",
      "DID": "10"
    },
    {
      "POSTID": 1368,
      "E": "Hajiarpalli",
      "M": "ഹാജിയാര്‍ പള്ളി",
      "PIN": "676519",
      "DID": "10"
    },
    {
      "POSTID": 1369,
      "E": "Down Hill",
      "M": "ഡൗണ്‍ഹില്‍",
      "PIN": "676519",
      "DID": "10"
    },
    {
      "POSTID": 1370,
      "E": "‍Pandallur",
      "M": "പന്തല്ലൂര്‍",
      "PIN": "676521",
      "DID": "10"
    },
    {
      "POSTID": 1371,
      "E": "Pandalur Hills",
      "M": "പന്തല്ലൂര്‍ ഹില്‍സ്",
      "PIN": "676521",
      "DID": "10"
    },
    {
      "POSTID": 1372,
      "E": "Pandikkad",
      "M": "പാണ്ടിക്കാട്",
      "PIN": "676521",
      "DID": "10"
    },
    {
      "POSTID": 1373,
      "E": "Valluvangad",
      "M": "",
      "PIN": "676521",
      "DID": "10"
    },
    {
      "POSTID": 1374,
      "E": "Valluvangad South",
      "M": "വള്ളുവങ്ങാട് സൗത്ത്",
      "PIN": "676521",
      "DID": "10"
    },
    {
      "POSTID": 1375,
      "E": "Chembrasseri",
      "M": "ചെമ്പ്രശ്ശേരി ",
      "PIN": "676521",
      "DID": "10"
    },
    {
      "POSTID": 1376,
      "E": "Punnathala",
      "M": "പുന്നത്തല",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1377,
      "E": "Kolaparamba",
      "M": "കൊളപ്പറമ്പ",
      "PIN": "676522",
      "DID": "10"
    },
    {
      "POSTID": 1378,
      "E": "Pulvetta",
      "M": "പുല്‍വെട്ട",
      "PIN": "676523",
      "DID": "10"
    },
    {
      "POSTID": 1379,
      "E": "Iringatteri",
      "M": "ഇരിങ്ങാട്ടിരി",
      "PIN": "676523",
      "DID": "10"
    },
    {
      "POSTID": 1380,
      "E": "Iringavur ",
      "M": "ഇരിങ്ങാവൂര്‍",
      "PIN": "676103",
      "DID": "10"
    },
    {
      "POSTID": 1381,
      "E": "Karuvarakundu",
      "M": "കരുവാരകുണ്ട്",
      "PIN": "676523",
      "DID": "10"
    },
    {
      "POSTID": 1382,
      "E": "Kalkundu",
      "M": "കല്‍ക്കുണ്ട്",
      "PIN": "676523",
      "DID": "10"
    },
    {
      "POSTID": 1383,
      "E": "Kuttathy",
      "M": "കുട്ടത്തി",
      "PIN": "676523",
      "DID": "10"
    },
    {
      "POSTID": 1384,
      "E": "Tharis",
      "M": "തരിശ്",
      "PIN": "676523",
      "DID": "10"
    },
    {
      "POSTID": 1385,
      "E": "Neelancheri",
      "M": "നീലാഞ്ചേരി",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1386,
      "E": "Pullende",
      "M": "പുല്ലങ്ങോട്",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1387,
      "E": "Anchachavadi",
      "M": "അഞ്ചച്ചാവിടി",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1388,
      "E": "Ambalakadavu",
      "M": "അമ്പലക്കടവ്",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1389,
      "E": "Arimanal",
      "M": "അരിമണല്‍",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1390,
      "E": "Ezhupathekar",
      "M": "70 ഏക്കര്‍",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1391,
      "E": "Kalikavu",
      "M": "കാളികാവ്",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1392,
      "E": "Kerala Estate",
      "M": "കേരള എസ്റ്റേറ്റ്",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1393,
      "E": "Mattathur",
      "M": "മറ്റത്തൂര്‍",
      "PIN": "676528",
      "DID": "10"
    },
    {
      "POSTID": 1394,
      "E": "Othukkungal",
      "M": "ഒതുക്കുങ്ങല്‍",
      "PIN": "676528",
      "DID": "10"
    },
    {
      "POSTID": 1395,
      "E": "Ponmala",
      "M": "പൊന്‍മള",
      "PIN": "676528",
      "DID": "10"
    },
    {
      "POSTID": 1396,
      "E": "Pannipara",
      "M": "പന്നിപ്പാറ",
      "PIN": "676541",
      "DID": "10"
    },
    {
      "POSTID": 1397,
      "E": "Eranhikode",
      "M": "എരഞ്ഞിക്കോട്",
      "PIN": "676541",
      "DID": "10"
    },
    {
      "POSTID": 1398,
      "E": "Edavanna",
      "M": "എടവണ്ണ",
      "PIN": "676541",
      "DID": "10"
    },
    {
      "POSTID": 1399,
      "E": "Chathallur",
      "M": "ചാത്തല്ലൂര്‍",
      "PIN": "676541",
      "DID": "10"
    },
    {
      "POSTID": 1400,
      "E": "Perakamanna",
      "M": "പെരകമണ്ണ",
      "PIN": "676541",
      "DID": "10"
    },
    {
      "POSTID": 1401,
      "E": "Pullipadam",
      "M": "പുള്ളിപ്പാടം",
      "PIN": "676542",
      "DID": "10"
    },
    {
      "POSTID": 1402,
      "E": "Mampad",
      "M": "മമ്പാട്",
      "PIN": "676542",
      "DID": "10"
    },
    {
      "POSTID": 1403,
      "E": "Mampad College",
      "M": "എം ഇ എസ് മമ്പാട് കോളേജ്",
      "PIN": "676542",
      "DID": "10"
    },
    {
      "POSTID": 1404,
      "E": "Vadapuram",
      "M": "വടപുറം",
      "PIN": "676542",
      "DID": "10"
    },
    {
      "POSTID": 1405,
      "E": "Meppadam",
      "M": "മേപ്പാടം",
      "PIN": "676542",
      "DID": "10"
    },
    {
      "POSTID": 1406,
      "E": "Paramalangadi",
      "M": "പാറന്മലങ്ങാടി",
      "PIN": "676551",
      "DID": "10"
    },
    {
      "POSTID": 1407,
      "E": "Valavannur",
      "M": "വളവന്നൂര്‍",
      "PIN": "676551",
      "DID": "10"
    },
    {
      "POSTID": 1408,
      "E": "Kanmanam Thekkumuri",
      "M": "കന്മനം തെക്കുംമുറി",
      "PIN": "676551",
      "DID": "10"
    },
    {
      "POSTID": 1409,
      "E": "Kalpakancherri",
      "M": "കല്‍പകഞ്ചേരി",
      "PIN": "676551",
      "DID": "10"
    },
    {
      "POSTID": 1410,
      "E": "Kuruga",
      "M": "കുറുക",
      "PIN": "676551",
      "DID": "10"
    },
    {
      "POSTID": 1411,
      "E": "Thekkankuttur",
      "M": "തെക്കന്‍-കുറ്റൂര്‍",
      "PIN": "676551",
      "DID": "10"
    },
    {
      "POSTID": 1412,
      "E": "Puramannur",
      "M": "പുറമണ്ണൂര്‍",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1413,
      "E": "Edayur North",
      "M": "എടയൂര്‍ നോര്‍ത്ത്",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1414,
      "E": "Valiakunnu",
      "M": "വലിയകുന്ന്",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1415,
      "E": "Valanchery",
      "M": "വളാഞ്ചേരി",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1416,
      "E": "Vadakkumbram",
      "M": "വടക്കുംപുറം",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1417,
      "E": "Karippol",
      "M": "കരിപ്പോള്‍",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1418,
      "E": "Kadambuzha",
      "M": "കാടാമ്പുഴ",
      "PIN": "676553",
      "DID": "10"
    },
    {
      "POSTID": 1419,
      "E": "Kallarmangalam",
      "M": "കല്ലാര്‍മംഗലം",
      "PIN": "676553",
      "DID": "10"
    },
    {
      "POSTID": 1420,
      "E": "Karekkad",
      "M": "കരേക്കാട്",
      "PIN": "676553",
      "DID": "10"
    },
    {
      "POSTID": 1421,
      "E": "Edayur",
      "M": "എടയൂര്‍",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1422,
      "E": "Kanmanam",
      "M": "കന്മനം ",
      "PIN": "676551",
      "DID": "10"
    },
    {
      "POSTID": 1423,
      "E": "Thozhuvanoor ",
      "M": "തൊഴുവാനൂര്‍",
      "PIN": "676552",
      "DID": "10"
    },
    {
      "POSTID": 1424,
      "E": "Mangalam Malapuram",
      "M": "മംഗലം",
      "PIN": "676561",
      "DID": "10"
    },
    {
      "POSTID": 1425,
      "E": "Mattanur",
      "M": "",
      "PIN": "676561",
      "DID": "10"
    },
    {
      "POSTID": 1426,
      "E": "Muttanur",
      "M": "മുട്ടന്നൂര്‍",
      "PIN": "676561",
      "DID": "10"
    },
    {
      "POSTID": 1427,
      "E": "Kavancheri",
      "M": "കാവഞ്ചേരി",
      "PIN": "676561",
      "DID": "10"
    },
    {
      "POSTID": 1428,
      "E": "Chennara",
      "M": "ചേന്നര",
      "PIN": "676561",
      "DID": "10"
    },
    {
      "POSTID": 1429,
      "E": "Padinjarekara",
      "M": "പടിഞ്ഞാറേക്കര",
      "PIN": "676562",
      "DID": "10"
    },
    {
      "POSTID": 1430,
      "E": "Kuttayi",
      "M": "കൂട്ടായി",
      "PIN": "676562",
      "DID": "10"
    },
    {
      "POSTID": 1431,
      "E": "Adakkaakundu",
      "M": "അടക്കാക്കുണ്ട്",
      "PIN": "676525",
      "DID": "10"
    },
    {
      "POSTID": 1432,
      "E": "Palakkad HO",
      "M": "പാലക്കാട്",
      "PIN": "678001",
      "DID": "9"
    },
    {
      "POSTID": 1433,
      "E": "Yakkara",
      "M": "യാക്കര",
      "PIN": "678701",
      "DID": "9"
    },
    {
      "POSTID": 1434,
      "E": "Olavakkot",
      "M": "ഒലവക്കോട്",
      "PIN": "678002",
      "DID": "9"
    },
    {
      "POSTID": 1435,
      "E": "New Kalpathi",
      "M": "ന്യൂകല്‍പാത്തി",
      "PIN": "678003",
      "DID": "9"
    },
    {
      "POSTID": 1436,
      "E": "Kalpathi",
      "M": "കല്‍പാത്തി",
      "PIN": "678003",
      "DID": "9"
    },
    {
      "POSTID": 1437,
      "E": "Nurani",
      "M": "നൂറണി",
      "PIN": "678004",
      "DID": "9"
    },
    {
      "POSTID": 1438,
      "E": "Nurani Agraharam",
      "M": "നൂറണി അഗ്രഹാരം",
      "PIN": "678004",
      "DID": "9"
    },
    {
      "POSTID": 1439,
      "E": "Kodunthirapulli",
      "M": "കൊടുന്തിരപ്പുള്ളി",
      "PIN": "678004",
      "DID": "9"
    },
    {
      "POSTID": 1440,
      "E": "Puthur-Palakkad",
      "M": "പുത്തൂര്‍ പാലക്കാട്",
      "PIN": "678005",
      "DID": "9"
    },
    {
      "POSTID": 1441,
      "E": "Kadukkamkunnu",
      "M": "കടുക്കാംകുന്ന്",
      "PIN": "678651",
      "DID": "9"
    },
    {
      "POSTID": 1442,
      "E": "Chokkanathapuram",
      "M": "ചൊക്കനാഥപുരം",
      "PIN": "678005",
      "DID": "9"
    },
    {
      "POSTID": 1443,
      "E": "Pallipuram Palakkad",
      "M": "പള്ളിപ്പുറം പാലക്കാട്",
      "PIN": "678006",
      "DID": "9"
    },
    {
      "POSTID": 1444,
      "E": "Pallathieri",
      "M": "പള്ളത്തേരി",
      "PIN": "678007",
      "DID": "9"
    },
    {
      "POSTID": 1445,
      "E": "Pudusseri",
      "M": "പുതുശ്ശേരി",
      "PIN": "678623",
      "DID": "9"
    },
    {
      "POSTID": 1446,
      "E": "Marudarode",
      "M": "മരുതറോഡ്",
      "PIN": "678007",
      "DID": "9"
    },
    {
      "POSTID": 1447,
      "E": "Chandranagar",
      "M": "ചന്ദ്രനഗര്‍",
      "PIN": "678007",
      "DID": "9"
    },
    {
      "POSTID": 1448,
      "E": "Palakkad Engg.College",
      "M": "പാലക്കാട് ഇഞ്ചിനീയറിംഗ് കോളേജ്",
      "PIN": "678008",
      "DID": "9"
    },
    {
      "POSTID": 1449,
      "E": "Akathethara",
      "M": "അകത്തേത്തറ",
      "PIN": "678008",
      "DID": "9"
    },
    {
      "POSTID": 1450,
      "E": "Kallekulangara",
      "M": "കല്ലേകുളങ്ങര",
      "PIN": "678009",
      "DID": "9"
    },
    {
      "POSTID": 1451,
      "E": "Dhoni",
      "M": "ധോണി",
      "PIN": "678009",
      "DID": "9"
    },
    {
      "POSTID": 1452,
      "E": "Sekharipuram",
      "M": "ശേഖരീപുരം",
      "PIN": "678010",
      "DID": "9"
    },
    {
      "POSTID": 1453,
      "E": "Ambikapuram",
      "M": "അംബികാപുരം",
      "PIN": "678011",
      "DID": "9"
    },
    {
      "POSTID": 1454,
      "E": "Moothanthara",
      "M": "മൂത്തന്‍തറ",
      "PIN": "678012",
      "DID": "9"
    },
    {
      "POSTID": 1455,
      "E": "Vadakkanthara",
      "M": "വടക്കന്തറ",
      "PIN": "678012",
      "DID": "9"
    },
    {
      "POSTID": 1456,
      "E": "Kunnathurmedu",
      "M": "കുന്നത്തൂര്‍മേട്",
      "PIN": "678013",
      "DID": "9"
    },
    {
      "POSTID": 1457,
      "E": "Palakkad City",
      "M": "പാലക്കാട് സിറ്റി",
      "PIN": "678014",
      "DID": "9"
    },
    {
      "POSTID": 1458,
      "E": "Kallekkad",
      "M": "കല്ലേക്കാട്",
      "PIN": "678006",
      "DID": "9"
    },
    {
      "POSTID": 1459,
      "E": "Kavilpad",
      "M": "കാവില്‍പാട്",
      "PIN": "678012",
      "DID": "9"
    },
    {
      "POSTID": 1460,
      "E": "Kallepully ",
      "M": "കല്ലേപ്പുള്ളി",
      "PIN": "678005",
      "DID": "9"
    },
    {
      "POSTID": 1461,
      "E": "Pirayiri ",
      "M": "പിരായിരി",
      "PIN": "678004",
      "DID": "9"
    },
    {
      "POSTID": 1462,
      "E": "Thirunellayi",
      "M": "തിരുനെല്ലായി",
      "PIN": "678004",
      "DID": "9"
    },
    {
      "POSTID": 1463,
      "E": "Kunnamkattupathy",
      "M": "കുന്നംകാട്ടുപതി",
      "PIN": "678101",
      "DID": "9"
    },
    {
      "POSTID": 1464,
      "E": "Kuttipalam",
      "M": "കുറ്റിപ്പള്ളം",
      "PIN": "678101",
      "DID": "9"
    },
    {
      "POSTID": 1465,
      "E": "Chittur Pgt",
      "M": "ചിറ്റൂര്‍ പാലക്കാട്",
      "PIN": "678101",
      "DID": "9"
    },
    {
      "POSTID": 1466,
      "E": "Tattamangalam",
      "M": "തത്തമംഗലം",
      "PIN": "678102",
      "DID": "9"
    },
    {
      "POSTID": 1467,
      "E": "Vilayodi",
      "M": "വിളയോടി",
      "PIN": "678103",
      "DID": "9"
    },
    {
      "POSTID": 1468,
      "E": "Thekke Gramam",
      "M": "തെക്കേഗ്രാമം",
      "PIN": "678103",
      "DID": "9"
    },
    {
      "POSTID": 1469,
      "E": "Chittur College",
      "M": "ചിറ്റൂര്‍ കോളേജ്",
      "PIN": "678104",
      "DID": "9"
    },
    {
      "POSTID": 1470,
      "E": "Koduvayur",
      "M": "കൊടുവായൂര്‍",
      "PIN": "678501",
      "DID": "9"
    },
    {
      "POSTID": 1471,
      "E": "Thannisserry",
      "M": "തണ്ണിശ്ശേരി",
      "PIN": "678501",
      "DID": "9"
    },
    {
      "POSTID": 1472,
      "E": "Ettanur",
      "M": "എത്തനൂര്‍",
      "PIN": "678502",
      "DID": "9"
    },
    {
      "POSTID": 1473,
      "E": "Vembalur",
      "M": "വെമ്പലൂര്‍",
      "PIN": "678502",
      "DID": "9"
    },
    {
      "POSTID": 1474,
      "E": "Pudunagaram",
      "M": "പുതുനഗരം",
      "PIN": "678503",
      "DID": "9"
    },
    {
      "POSTID": 1475,
      "E": "Karipode",
      "M": "കരിപ്പോട്",
      "PIN": "678503",
      "DID": "9"
    },
    {
      "POSTID": 1476,
      "E": "Kairady",
      "M": "കയറാടി",
      "PIN": "678510",
      "DID": "9"
    },
    {
      "POSTID": 1477,
      "E": "Vadavannur",
      "M": "വടവന്നൂര്‍",
      "PIN": "678504",
      "DID": "9"
    },
    {
      "POSTID": 1478,
      "E": "Pallassana",
      "M": "പല്ലശ്ശന",
      "PIN": "678505",
      "DID": "9"
    },
    {
      "POSTID": 1479,
      "E": "Panangattiri",
      "M": "പനങ്ങാട്ടിരി",
      "PIN": "678506",
      "DID": "9"
    },
    {
      "POSTID": 1480,
      "E": "Payyalur",
      "M": "പയ്യല്ലൂര്‍",
      "PIN": "678506",
      "DID": "9"
    },
    {
      "POSTID": 1481,
      "E": "Anamari",
      "M": "ആനമാറി",
      "PIN": "678506",
      "DID": "9"
    },
    {
      "POSTID": 1482,
      "E": "Vattekad",
      "M": "വട്ടേക്കാട്",
      "PIN": "678506",
      "DID": "9"
    },
    {
      "POSTID": 1483,
      "E": "Nenmeni",
      "M": "നെന്മേനി",
      "PIN": "678506",
      "DID": "9"
    },
    {
      "POSTID": 1484,
      "E": "Kollengode",
      "M": "കൊല്ലങ്കോട്",
      "PIN": "678506",
      "DID": "9"
    },
    {
      "POSTID": 1485,
      "E": "Meenkara Dam",
      "M": "മീന്‍കര ഡാം",
      "PIN": "678507",
      "DID": "9"
    },
    {
      "POSTID": 1486,
      "E": "Muthalamada",
      "M": "മുതലമട",
      "PIN": "678507",
      "DID": "9"
    },
    {
      "POSTID": 1487,
      "E": "vindapuram",
      "M": "ഗോവിന്ദാപുരം",
      "PIN": "678507",
      "DID": "9"
    },
    {
      "POSTID": 1488,
      "E": "Elavancheri",
      "M": "എലവഞ്ചേരി",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1489,
      "E": "Vallanghy",
      "M": "വല്ലങ്ങി",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1490,
      "E": "Kizhakkumuri",
      "M": "കിഴക്കുമുറി",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1491,
      "E": "Chathamangalam",
      "M": "ചാത്തമംഗലം",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1492,
      "E": "Nemmara",
      "M": "നെമ്മാറ ",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1493,
      "E": "Nemmara Old Village",
      "M": "നെമ്മാറ പഴയ ഗ്രാമം",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1494,
      "E": "Nemmara College",
      "M": "നെമ്മാറ കോളേജ്",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1495,
      "E": "Pothundy Dam",
      "M": "പോത്തുണ്ടി ഡാം",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1496,
      "E": "Padagiri",
      "M": "പാടഗിരി",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1497,
      "E": "Ayalur",
      "M": "അയിലൂര്‍",
      "PIN": "678510",
      "DID": "9"
    },
    {
      "POSTID": 1498,
      "E": "Thiruvazhiyad",
      "M": "തിരുവഴിയാട്",
      "PIN": "678510",
      "DID": "9"
    },
    {
      "POSTID": 1499,
      "E": "Sitharkunda",
      "M": "സീതാര്‍ക്കുണ്ട്",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1500,
      "E": "Chandramala Estate",
      "M": "ചന്ദ്രമല എസ്റ്റേറ്റ്",
      "PIN": "678511",
      "DID": "9"
    },
    {
      "POSTID": 1501,
      "E": "Nelliyampathy",
      "M": "നെല്ലിയാമ്പതി",
      "PIN": "678508",
      "DID": "9"
    },
    {
      "POSTID": 1502,
      "E": "Kakkayur",
      "M": "കാക്കയൂര്‍",
      "PIN": "678512",
      "DID": "9"
    },
    {
      "POSTID": 1503,
      "E": "Mannalur",
      "M": "മണ്ണലൂര്‍",
      "PIN": "678502",
      "DID": "9"
    },
    {
      "POSTID": 1504,
      "E": "Peruvemba",
      "M": "പെരുവെമ്പ്",
      "PIN": "678531",
      "DID": "9"
    },
    {
      "POSTID": 1505,
      "E": "Pattancherry",
      "M": "പട്ടഞ്ചേരി",
      "PIN": "678532",
      "DID": "9"
    },
    {
      "POSTID": 1506,
      "E": "Karippali",
      "M": "കരിപ്പാലി",
      "PIN": "678532",
      "DID": "9"
    },
    {
      "POSTID": 1507,
      "E": "Meenakshipuram",
      "M": "മീനാക്ഷിപുരം",
      "PIN": "678533",
      "DID": "9"
    },
    {
      "POSTID": 1508,
      "E": "Nanniyode",
      "M": "നന്ദിയോട്",
      "PIN": "678534",
      "DID": "9"
    },
    {
      "POSTID": 1509,
      "E": "Vandithavalam",
      "M": "വണ്ടിത്താവളം",
      "PIN": "678534",
      "DID": "9"
    },
    {
      "POSTID": 1510,
      "E": "Kannimari",
      "M": "കന്നിമാരി",
      "PIN": "678534",
      "DID": "9"
    },
    {
      "POSTID": 1511,
      "E": "Alathur MBR",
      "M": "ആലത്തൂര്‍ മലബാര്‍",
      "PIN": "678541",
      "DID": "9"
    },
    {
      "POSTID": 1512,
      "E": "Kattusseri",
      "M": "കാട്ടുശ്ശേരി",
      "PIN": "678542",
      "DID": "9"
    },
    {
      "POSTID": 1513,
      "E": "Perinkulam",
      "M": "പെരിങ്കുളം",
      "PIN": "678542",
      "DID": "9"
    },
    {
      "POSTID": 1514,
      "E": "Vavulliapuram",
      "M": "വാവുള്ള്യാപുരം",
      "PIN": "678543",
      "DID": "9"
    },
    {
      "POSTID": 1515,
      "E": "Kavasseri",
      "M": "കാവശ്ശേരി",
      "PIN": "678543",
      "DID": "9"
    },
    {
      "POSTID": 1516,
      "E": "Palambalakode",
      "M": "പഴമ്പാലക്കോട്",
      "PIN": "678544",
      "DID": "9"
    },
    {
      "POSTID": 1517,
      "E": "Athipotta",
      "M": "അത്തിപ്പൊറ്റ",
      "PIN": "678544",
      "DID": "9"
    },
    {
      "POSTID": 1518,
      "E": "Nechur",
      "M": "നെച്ചൂര്‍",
      "PIN": "678722",
      "DID": "9"
    },
    {
      "POSTID": 1519,
      "E": "Pullode",
      "M": "പുള്ളോട്",
      "PIN": "678545",
      "DID": "9"
    },
    {
      "POSTID": 1520,
      "E": "Pudiyankam",
      "M": "പുതിയങ്കം",
      "PIN": "678545",
      "DID": "9"
    },
    {
      "POSTID": 1521,
      "E": "Erimayur",
      "M": "എരിമയൂര്‍",
      "PIN": "678546",
      "DID": "9"
    },
    {
      "POSTID": 1522,
      "E": "Tarur",
      "M": "തരൂര്‍",
      "PIN": "678544",
      "DID": "9"
    },
    {
      "POSTID": 1523,
      "E": "Padoor Kavassery",
      "M": "പാടൂര്‍ കാവശ്ശേരി",
      "PIN": "678543",
      "DID": "9"
    },
    {
      "POSTID": 1524,
      "E": "Olasseri",
      "M": "ഓലശ്ശേരി",
      "PIN": "678551",
      "DID": "9"
    },
    {
      "POSTID": 1525,
      "E": "Kodumbu",
      "M": "കൊടുമ്പ്",
      "PIN": "678551",
      "DID": "9"
    },
    {
      "POSTID": 1526,
      "E": "Thiruvalathur",
      "M": "തിരുവാലത്തൂര്‍",
      "PIN": "678551",
      "DID": "9"
    },
    {
      "POSTID": 1527,
      "E": "Panayur",
      "M": "പനയൂര്‍",
      "PIN": "678552",
      "DID": "9"
    },
    {
      "POSTID": 1528,
      "E": "Polpulli",
      "M": "പൊല്‍പ്പുള്ളി",
      "PIN": "678552",
      "DID": "9"
    },
    {
      "POSTID": 1529,
      "E": "Verkoli",
      "M": "വേര്‍ക്കൊലി",
      "PIN": "678552",
      "DID": "9"
    },
    {
      "POSTID": 1530,
      "E": "Nallepilly",
      "M": "നല്ലേപ്പിള്ളി",
      "PIN": "678553",
      "DID": "9"
    },
    {
      "POSTID": 1531,
      "E": "Thekke Desam",
      "M": "തെക്കേദേശം",
      "PIN": "678553",
      "DID": "9"
    },
    {
      "POSTID": 1532,
      "E": "Nattukal",
      "M": "നാട്ടുകല്‍",
      "PIN": "678554",
      "DID": "9"
    },
    {
      "POSTID": 1533,
      "E": "Athicode",
      "M": "അത്തിക്കോട്",
      "PIN": "678554",
      "DID": "9"
    },
    {
      "POSTID": 1534,
      "E": "Palaniyara Palayam",
      "M": "പഴനിയാര്‍ പാളയം",
      "PIN": "678555",
      "DID": "9"
    },
    {
      "POSTID": 1535,
      "E": "Ramavarmapuram Pudur",
      "M": "ആര്‍ വി പി പുതൂര്‍",
      "PIN": "678555",
      "DID": "9"
    },
    {
      "POSTID": 1536,
      "E": "Vannamada",
      "M": "വണ്ണാമട",
      "PIN": "678555",
      "DID": "9"
    },
    {
      "POSTID": 1537,
      "E": "Kozhinjampara",
      "M": "കൊഴിഞ്ഞാമ്പാറ",
      "PIN": "678555",
      "DID": "9"
    },
    {
      "POSTID": 1538,
      "E": "Parassikal",
      "M": "പരിശക്കല്‍",
      "PIN": "678556",
      "DID": "9"
    },
    {
      "POSTID": 1539,
      "E": "Attempathy",
      "M": "ആട്ടാംപതി",
      "PIN": "678556",
      "DID": "9"
    },
    {
      "POSTID": 1540,
      "E": "Eduppukulam",
      "M": "എടുപ്പുകുളം",
      "PIN": "678556",
      "DID": "9"
    },
    {
      "POSTID": 1541,
      "E": "Menonpara",
      "M": "മേനോന്‍പാറ",
      "PIN": "678556",
      "DID": "9"
    },
    {
      "POSTID": 1542,
      "E": "Ozhalapathy",
      "M": "ഒഴലപ്പതി",
      "PIN": "678557",
      "DID": "9"
    },
    {
      "POSTID": 1543,
      "E": "Velanthavalam",
      "M": "വേലന്താവളം",
      "PIN": "678557",
      "DID": "9"
    },
    {
      "POSTID": 1544,
      "E": "Kozhipara",
      "M": "കോഴിപ്പാറ",
      "PIN": "678557",
      "DID": "9"
    },
    {
      "POSTID": 1545,
      "E": "Eruthenpathy ",
      "M": "എരുത്തേമ്പതി",
      "PIN": "678555",
      "DID": "9"
    },
    {
      "POSTID": 1546,
      "E": "Karingarapully",
      "M": "കരിങ്കരപുള്ളി",
      "PIN": "678559",
      "DID": "9"
    },
    {
      "POSTID": 1547,
      "E": "Mathur Agraharam",
      "M": "മാത്തൂര്‍ അഗ്രഹാരം",
      "PIN": "678571",
      "DID": "9"
    },
    {
      "POSTID": 1548,
      "E": "Mathur Palakkad",
      "M": "മാത്തൂര്‍ പാലക്കാട്",
      "PIN": "678571",
      "DID": "9"
    },
    {
      "POSTID": 1549,
      "E": "Thachangad",
      "M": "തച്ചങ്കാട്",
      "PIN": "678571",
      "DID": "9"
    },
    {
      "POSTID": 1550,
      "E": "Pulinelli",
      "M": "പുളിനെല്ലി",
      "PIN": "678572",
      "DID": "9"
    },
    {
      "POSTID": 1551,
      "E": "Varode Kottayi",
      "M": "വറോട് കോട്ടായി",
      "PIN": "678572",
      "DID": "9"
    },
    {
      "POSTID": 1552,
      "E": "Kariyancode",
      "M": "കരിയംകോട്",
      "PIN": "678572",
      "DID": "9"
    },
    {
      "POSTID": 1553,
      "E": "Kizhakkencherry",
      "M": "കിഴക്കഞ്ചേരി",
      "PIN": "678684",
      "DID": "9"
    },
    {
      "POSTID": 1554,
      "E": "Cherukulam",
      "M": "ചെറുകുളം",
      "PIN": "678572",
      "DID": "9"
    },
    {
      "POSTID": 1555,
      "E": "Kottayi",
      "M": "കോട്ടായി",
      "PIN": "678572",
      "DID": "9"
    },
    {
      "POSTID": 1556,
      "E": "Paruthipulli",
      "M": "പരുത്തിപ്പുള്ളി",
      "PIN": "678573",
      "DID": "9"
    },
    {
      "POSTID": 1557,
      "E": "Chennangad",
      "M": "ചേന്നങ്കാട്",
      "PIN": "678573",
      "DID": "9"
    },
    {
      "POSTID": 1558,
      "E": "Naduvathupara",
      "M": "നടുവത്തപ്പാറ",
      "PIN": "678574",
      "DID": "9"
    },
    {
      "POSTID": 1559,
      "E": "Chulanur",
      "M": "ചൂലനൂര്‍",
      "PIN": "678574",
      "DID": "9"
    },
    {
      "POSTID": 1560,
      "E": "Peringottukurissi",
      "M": "പെരിങ്ങോട്ടുകുറിശ്ശി",
      "PIN": "678574",
      "DID": "9"
    },
    {
      "POSTID": 1561,
      "E": "Pallanchathannur",
      "M": "പല്ലന്‍ചാത്തനൂര്‍",
      "PIN": "678575",
      "DID": "9"
    },
    {
      "POSTID": 1562,
      "E": "Pudur ",
      "M": "പുതൂര്‍",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1563,
      "E": "Mattathukad",
      "M": "മട്ടത്തുകാട്",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1564,
      "E": "Agali",
      "M": "അഗളി",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1565,
      "E": "Karara",
      "M": "കാരറ",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1566,
      "E": "Kavundikkal ",
      "M": "കാവുണ്ടിക്കല്‍",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1567,
      "E": "Chavadiyoor",
      "M": "ചാവടിയൂര്‍",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1568,
      "E": "Chittur Agali",
      "M": "ചിറ്റൂര്‍ - അഗളി",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1569,
      "E": "Kottathara",
      "M": "കോട്ടത്തറ",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1570,
      "E": "Sholayur-Palakkad",
      "M": "ഷോളയൂര്‍-പാലക്കാട്",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1571,
      "E": "Paloor",
      "M": "പാലൂര്‍",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1572,
      "E": "Pullisseri",
      "M": "പുല്ലിശ്ശേരി",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1573,
      "E": "Mannarkad",
      "M": "മണ്ണാര്‍ക്കാട്",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1574,
      "E": "Mukkali",
      "M": "മുക്കാലി",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1575,
      "E": "Kallamala",
      "M": "കള്ളമല",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1576,
      "E": "Kalkandy",
      "M": "കല്‍ക്കണ്ടി",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1577,
      "E": "Chindakki",
      "M": "ചിണ്ടക്കി",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1578,
      "E": "Jellippara ",
      "M": "ജെല്ലിപ്പാറ",
      "PIN": "678581",
      "DID": "9"
    },
    {
      "POSTID": 1579,
      "E": "Kaithachira ",
      "M": "കൈതച്ചിറ",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1580,
      "E": "Nattukal",
      "M": "നാട്ടുകല്‍",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1581,
      "E": "Payyanadam",
      "M": "പയ്യനെടം",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1582,
      "E": "Pallikunnu Mgt",
      "M": "പള്ളിക്കുന്ന്",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1583,
      "E": "Palode",
      "M": "പാലോട്",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1584,
      "E": "Mannarkad College",
      "M": "മണ്ണാര്‍ക്കാട് കോളേജ്",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1585,
      "E": "Ariyur",
      "M": "അരിയൂര്‍",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1586,
      "E": "Kandamangalam",
      "M": "കണ്ടമംഗലം",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1587,
      "E": "Kumaranputhur",
      "M": "കുമരംപുത്തൂര്‍",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1588,
      "E": "Kundurkunnu",
      "M": "കുണ്ട‍ൂര്‍ക്കുന്ന്",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1589,
      "E": "Kodakkad",
      "M": "കൊടക്കാട്",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1590,
      "E": "Kottoppadam",
      "M": "കോട്ടോപ്പാടം",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1591,
      "E": "Thavalam",
      "M": "താവളം",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1592,
      "E": "Palakayam",
      "M": "പാലക്കയം",
      "PIN": "678591",
      "DID": "9"
    },
    {
      "POSTID": 1593,
      "E": "Irumbakachola",
      "M": "ഇരുമ്പകച്ചോല",
      "PIN": "678591",
      "DID": "9"
    },
    {
      "POSTID": 1594,
      "E": "Kanhirapuzha",
      "M": "കാഞ്ഞിരപുഴ",
      "PIN": "678591",
      "DID": "9"
    },
    {
      "POSTID": 1595,
      "E": "Kanhirapuzha Dam",
      "M": "കാഞ്ഞിരപുഴ ഡാം",
      "PIN": "678591",
      "DID": "9"
    },
    {
      "POSTID": 1596,
      "E": "Nambullipara",
      "M": "നാമ്പുള്ളിപ്പുര",
      "PIN": "678592",
      "DID": "9"
    },
    {
      "POSTID": 1597,
      "E": "Pudanur",
      "M": "പൂതനൂര്‍",
      "PIN": "678592",
      "DID": "9"
    },
    {
      "POSTID": 1598,
      "E": "Mundur Palakkad",
      "M": "മുണ്ട‍ൂര്‍ പാലക്കാട്",
      "PIN": "678592",
      "DID": "9"
    },
    {
      "POSTID": 1599,
      "E": "Nochippully",
      "M": "നൊച്ചിപ്പുള്ളി",
      "PIN": "678592",
      "DID": "9"
    },
    {
      "POSTID": 1600,
      "E": "Velikkad",
      "M": "വേലിക്കാട്",
      "PIN": "678592",
      "DID": "9"
    },
    {
      "POSTID": 1601,
      "E": "Pallikurup ",
      "M": "പള്ളിക്കുറുപ്പ്",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1602,
      "E": "Muthukurissi",
      "M": "മുതുകുറുശ്ശി",
      "PIN": "678593",
      "DID": "9"
    },
    {
      "POSTID": 1603,
      "E": "Mudukurissi",
      "M": "",
      "PIN": "678593",
      "DID": "9"
    },
    {
      "POSTID": 1604,
      "E": "Viyyakurissi",
      "M": "വിയ്യക്കുറിശ്ശി",
      "PIN": "678593",
      "DID": "9"
    },
    {
      "POSTID": 1605,
      "E": "Tachampara",
      "M": "തച്ചമ്പാറ",
      "PIN": "678593",
      "DID": "9"
    },
    {
      "POSTID": 1606,
      "E": "Trikkalur",
      "M": "തൃക്കളൂര്‍",
      "PIN": "678593",
      "DID": "9"
    },
    {
      "POSTID": 1607,
      "E": "Muttikulangara",
      "M": "മുട്ടിക്കുളങ്ങര",
      "PIN": "678594",
      "DID": "9"
    },
    {
      "POSTID": 1608,
      "E": "Vallikode",
      "M": "വള്ളിക്കോട്",
      "PIN": "678594",
      "DID": "9"
    },
    {
      "POSTID": 1609,
      "E": "Vakkadapuram",
      "M": "വാക്കടപ്പുറം",
      "PIN": "678595",
      "DID": "9"
    },
    {
      "POSTID": 1610,
      "E": "Vazhumbram",
      "M": "വാഴമ്പുറം",
      "PIN": "678595",
      "DID": "9"
    },
    {
      "POSTID": 1611,
      "E": "Karakurissi",
      "M": "കാരാകുറുശ്ശി",
      "PIN": "678595",
      "DID": "9"
    },
    {
      "POSTID": 1612,
      "E": "Pombra",
      "M": "പൊമ്പ്ര",
      "PIN": "678595",
      "DID": "9"
    },
    {
      "POSTID": 1613,
      "E": "Kanhikulam",
      "M": "കാഞ്ഞിക്കുളം",
      "PIN": "678596",
      "DID": "9"
    },
    {
      "POSTID": 1614,
      "E": "Kalladikode",
      "M": "കല്ലടിക്കോട്",
      "PIN": "678596",
      "DID": "9"
    },
    {
      "POSTID": 1615,
      "E": "Moonekkar",
      "M": "മൂന്നേക്കര്‍",
      "PIN": "678597",
      "DID": "9"
    },
    {
      "POSTID": 1616,
      "E": "Karimba",
      "M": "കരിമ്പ",
      "PIN": "678597",
      "DID": "9"
    },
    {
      "POSTID": 1617,
      "E": "Poonchola",
      "M": "പൂഞ്ചോല",
      "PIN": "678598",
      "DID": "9"
    },
    {
      "POSTID": 1618,
      "E": "Pottasseri",
      "M": "പൊറ്റശ്ശേരി",
      "PIN": "678598",
      "DID": "9"
    },
    {
      "POSTID": 1619,
      "E": "Ezhakkad ",
      "M": "എഴക്കാട്",
      "PIN": "678631",
      "DID": "9"
    },
    {
      "POSTID": 1620,
      "E": "Bhimanad",
      "M": "ഭീമനാട്",
      "PIN": "678601",
      "DID": "9"
    },
    {
      "POSTID": 1621,
      "E": "Alanallur",
      "M": "അലനല്ലൂര്‍",
      "PIN": "678601",
      "DID": "9"
    },
    {
      "POSTID": 1622,
      "E": "Uppukulam",
      "M": "ഉപ്പുകുളം",
      "PIN": "678601",
      "DID": "9"
    },
    {
      "POSTID": 1623,
      "E": "Edathanattukara",
      "M": "എടത്തനാട്ടുകര",
      "PIN": "678601",
      "DID": "9"
    },
    {
      "POSTID": 1624,
      "E": "Vattamannapuram",
      "M": "വട്ടമണ്ണപ്പുറം",
      "PIN": "678601",
      "DID": "9"
    },
    {
      "POSTID": 1625,
      "E": "Kacheriparambu",
      "M": "കച്ചേരിപ്പറമ്പ്",
      "PIN": "678601",
      "DID": "9"
    },
    {
      "POSTID": 1626,
      "E": "Tiruvalamkunnu",
      "M": "തിരുവിഴാംകുന്ന്",
      "PIN": "678601",
      "DID": "9"
    },
    {
      "POSTID": 1627,
      "E": "Karkitamkunnu",
      "M": "കര്‍ക്കിടാംകുന്ന്",
      "PIN": "678605",
      "DID": "9"
    },
    {
      "POSTID": 1628,
      "E": "Chethallur",
      "M": "ചെത്തല്ലൂര്‍",
      "PIN": "678583",
      "DID": "9"
    },
    {
      "POSTID": 1629,
      "E": "Edathara",
      "M": "എടത്തറ",
      "PIN": "678611",
      "DID": "9"
    },
    {
      "POSTID": 1630,
      "E": "Chandrasekharapuram",
      "M": "ചന്ദ്രശേഖരപുരം",
      "PIN": "678611",
      "DID": "9"
    },
    {
      "POSTID": 1631,
      "E": "Parli Palghat",
      "M": "പറളി",
      "PIN": "678612",
      "DID": "9"
    },
    {
      "POSTID": 1632,
      "E": "Mankara",
      "M": "മങ്കര",
      "PIN": "678613",
      "DID": "9"
    },
    {
      "POSTID": 1633,
      "E": "Mankurussi",
      "M": "മാങ്കുറുശ്ശി",
      "PIN": "678613",
      "DID": "9"
    },
    {
      "POSTID": 1634,
      "E": "Kozhencherry Thekkemala",
      "M": "മങ്കര ആര്‍ എസ്",
      "PIN": "689654",
      "DID": "9"
    },
    {
      "POSTID": 1635,
      "E": "Kinavallur",
      "M": "കിണാവല്ലൂര്‍",
      "PIN": "678612",
      "DID": "9"
    },
    {
      "POSTID": 1636,
      "E": "Tenur",
      "M": "തേനൂര്‍",
      "PIN": "678612",
      "DID": "9"
    },
    {
      "POSTID": 1637,
      "E": "Pampampallam",
      "M": "പാമ്പാംപള്ളം",
      "PIN": "678621",
      "DID": "9"
    },
    {
      "POSTID": 1638,
      "E": "Kanjikode",
      "M": "കഞ്ചിക്കോട്",
      "PIN": "678621",
      "DID": "9"
    },
    {
      "POSTID": 1639,
      "E": "Ramasseri",
      "M": "രാമശ്ശേരി",
      "PIN": "678622",
      "DID": "9"
    },
    {
      "POSTID": 1640,
      "E": "Erattakulam",
      "M": "ഇരട്ടക്കുളം",
      "PIN": "678622",
      "DID": "9"
    },
    {
      "POSTID": 1641,
      "E": "Elappully",
      "M": "എലപ്പുള്ളി",
      "PIN": "678622",
      "DID": "9"
    },
    {
      "POSTID": 1642,
      "E": "Elappully South",
      "M": "എലപ്പുള്ളി സൗത്ത് ",
      "PIN": "678622",
      "DID": "9"
    },
    {
      "POSTID": 1643,
      "E": "Vengodi",
      "M": "വേങ്ങോടി",
      "PIN": "678622",
      "DID": "9"
    },
    {
      "POSTID": 1644,
      "E": "Tenari",
      "M": "തേനാരി",
      "PIN": "678622",
      "DID": "9"
    },
    {
      "POSTID": 1645,
      "E": "Kanjikode West",
      "M": "കഞ്ചിക്കോട് വെസ്റ്റ്",
      "PIN": "678623",
      "DID": "9"
    },
    {
      "POSTID": 1646,
      "E": "Walayar Dam",
      "M": "വാളയാര്‍ ഡാം",
      "PIN": "678624",
      "DID": "9"
    },
    {
      "POSTID": 1647,
      "E": "Chandrapuram",
      "M": "ചന്ദ്രാപുരം",
      "PIN": "678624",
      "DID": "9"
    },
    {
      "POSTID": 1648,
      "E": "Parasseri",
      "M": "പാറശ്ശേരി",
      "PIN": "678631",
      "DID": "9"
    },
    {
      "POSTID": 1649,
      "E": "Mucheeri",
      "M": "മുച്ചീരി",
      "PIN": "678631",
      "DID": "9"
    },
    {
      "POSTID": 1650,
      "E": "Manikkasseri",
      "M": "മണിക്കശ്ശേരി",
      "PIN": "678631",
      "DID": "9"
    },
    {
      "POSTID": 1651,
      "E": "Kongad",
      "M": "കോങ്ങാട്",
      "PIN": "678631",
      "DID": "9"
    },
    {
      "POSTID": 1652,
      "E": "Pulapatta",
      "M": "പുലാപ്പറ്റ",
      "PIN": "678632",
      "DID": "9"
    },
    {
      "POSTID": 1653,
      "E": "Ummanazhi",
      "M": "ഉമ്മനഴി",
      "PIN": "678632",
      "DID": "9"
    },
    {
      "POSTID": 1654,
      "E": "Konikazhi",
      "M": "കോണിക്കഴി",
      "PIN": "678632",
      "DID": "9"
    },
    {
      "POSTID": 1655,
      "E": "Azhiyannur",
      "M": "അഴിയന്നൂര്‍",
      "PIN": "678633",
      "DID": "9"
    },
    {
      "POSTID": 1656,
      "E": "Kulakkattukurissi",
      "M": "കുളക്കാട്ടുകുറുശ്ശി",
      "PIN": "678633",
      "DID": "9"
    },
    {
      "POSTID": 1657,
      "E": "Kunduvampadam",
      "M": "കുണ്ടുവംപാടം",
      "PIN": "678633",
      "DID": "9"
    },
    {
      "POSTID": 1658,
      "E": "Katambazhipuram",
      "M": "കടമ്പഴിപ്പുറം",
      "PIN": "678633",
      "DID": "9"
    },
    {
      "POSTID": 1659,
      "E": "Vettekara",
      "M": "വേട്ടേക്കര",
      "PIN": "678633",
      "DID": "9"
    },
    {
      "POSTID": 1660,
      "E": "Punchapadam",
      "M": "പുഞ്ചപ്പാടം",
      "PIN": "678634",
      "DID": "9"
    },
    {
      "POSTID": 1661,
      "E": "Cheraya",
      "M": "ചെറായ",
      "PIN": "678635",
      "DID": "9"
    },
    {
      "POSTID": 1662,
      "E": "Alangad",
      "M": "ആലങ്ങാട്",
      "PIN": "678637",
      "DID": "9"
    },
    {
      "POSTID": 1663,
      "E": "Kallur -Palakkad",
      "M": "കല്ലൂര്‍ - പാലക്കാട്",
      "PIN": "678613",
      "DID": "9"
    },
    {
      "POSTID": 1664,
      "E": "Kundalasseri",
      "M": "കുണ്ടളശ്ശേരി",
      "PIN": "678641",
      "DID": "9"
    },
    {
      "POSTID": 1665,
      "E": "Keralassery",
      "M": "കേരളശ്ശേരി",
      "PIN": "678641",
      "DID": "9"
    },
    {
      "POSTID": 1666,
      "E": "Vadassery",
      "M": "വടശ്ശേരി",
      "PIN": "678641",
      "DID": "9"
    },
    {
      "POSTID": 1667,
      "E": "Thadukkasseri",
      "M": "തടുക്കശ്ശേരി",
      "PIN": "678641",
      "DID": "9"
    },
    {
      "POSTID": 1668,
      "E": "Nagaripuram",
      "M": "നഗരിപ്പുറം",
      "PIN": "678642",
      "DID": "9"
    },
    {
      "POSTID": 1669,
      "E": "Mannur",
      "M": "മണ്ണൂര്‍",
      "PIN": "678642",
      "DID": "9"
    },
    {
      "POSTID": 1670,
      "E": "Mannur West",
      "M": "മണ്ണൂര്‍ വെസ്റ്റ്",
      "PIN": "678642",
      "DID": "9"
    },
    {
      "POSTID": 1671,
      "E": "Kilakkumbram",
      "M": "കിഴക്കുംപുറം",
      "PIN": "678642",
      "DID": "9"
    },
    {
      "POSTID": 1672,
      "E": "Malampuzha Dam",
      "M": "മലമ്പുഴ ഡാം",
      "PIN": "678651",
      "DID": "9"
    },
    {
      "POSTID": 1673,
      "E": "Anakkal",
      "M": "ആനക്കല്‍",
      "PIN": "678651",
      "DID": "9"
    },
    {
      "POSTID": 1674,
      "E": "Parambikulam",
      "M": "പറമ്പിക്കുളം",
      "PIN": "678661",
      "DID": "9"
    },
    {
      "POSTID": 1675,
      "E": "Thoonakadavu",
      "M": "തൂണക്കടവ്",
      "PIN": "678661",
      "DID": "9"
    },
    {
      "POSTID": 1676,
      "E": "Vilayannur",
      "M": "വിളയന്നൂര്‍",
      "PIN": "678671",
      "DID": "9"
    },
    {
      "POSTID": 1677,
      "E": "Thenkurissi",
      "M": "തേങ്കുറിശ്ശി",
      "PIN": "678671",
      "DID": "9"
    },
    {
      "POSTID": 1678,
      "E": "Kunisseri",
      "M": "കുനിശ്ശേരി",
      "PIN": "678681",
      "DID": "9"
    },
    {
      "POSTID": 1679,
      "E": "Koottala",
      "M": "കൂട്ടാല",
      "PIN": "678681",
      "DID": "9"
    },
    {
      "POSTID": 1680,
      "E": "Anjumoorthy",
      "M": "അഞ്ചുമൂര്‍ത്തി",
      "PIN": "678682",
      "DID": "9"
    },
    {
      "POSTID": 1681,
      "E": "Erattakulam Alathur",
      "M": "ഇരട്ടക്കുളം ആലത്തൂര്‍",
      "PIN": "678682",
      "DID": "9"
    },
    {
      "POSTID": 1682,
      "E": "Thannilapuram",
      "M": "തെന്നിലാപുരം",
      "PIN": "678682",
      "DID": "9"
    },
    {
      "POSTID": 1683,
      "E": "Panniankara Vadakancherry-MBR",
      "M": "പന്നിയങ്കര",
      "PIN": "678683",
      "DID": "9"
    },
    {
      "POSTID": 1684,
      "E": "Ayakkad",
      "M": "ആയക്കാട്",
      "PIN": "678683",
      "DID": "9"
    },
    {
      "POSTID": 1685,
      "E": "Vadakancherry Malabar",
      "M": "വടക്കഞ്ചേരി മലബാര്‍",
      "PIN": "678683",
      "DID": "9"
    },
    {
      "POSTID": 1686,
      "E": "Kanakkanthuruthy",
      "M": "കണക്കന്‍തുരുത്തി",
      "PIN": "678683",
      "DID": "9"
    },
    {
      "POSTID": 1687,
      "E": "Mulangot",
      "M": "മൂലങ്കോട്",
      "PIN": "678684",
      "DID": "9"
    },
    {
      "POSTID": 1688,
      "E": "Koranchira",
      "M": "കോരഞ്ചിറ",
      "PIN": "678684",
      "DID": "9"
    },
    {
      "POSTID": 1689,
      "E": "Mannapra",
      "M": "മഞ്ഞപ്ര",
      "PIN": "678685",
      "DID": "9"
    },
    {
      "POSTID": 1690,
      "E": "Paruvasseri",
      "M": "പരുവാശ്ശേരി",
      "PIN": "678686",
      "DID": "9"
    },
    {
      "POSTID": 1691,
      "E": "Kannambra",
      "M": "കണ്ണമ്പ്ര",
      "PIN": "678686",
      "DID": "9"
    },
    {
      "POSTID": 1692,
      "E": "Puducode",
      "M": "പുതുക്കോട്",
      "PIN": "678687",
      "DID": "9"
    },
    {
      "POSTID": 1693,
      "E": "Thekkepotta",
      "M": "തെക്കേപ്പൊറ്റ",
      "PIN": "678687",
      "DID": "9"
    },
    {
      "POSTID": 1694,
      "E": "Pallavur",
      "M": "പല്ലാവൂര്‍",
      "PIN": "678688",
      "DID": "9"
    },
    {
      "POSTID": 1695,
      "E": "Kudallur",
      "M": "കൂടല്ലൂര്‍",
      "PIN": "678688",
      "DID": "9"
    },
    {
      "POSTID": 1696,
      "E": "Manappadam",
      "M": "മണപ്പാടം",
      "PIN": "678687",
      "DID": "9"
    },
    {
      "POSTID": 1697,
      "E": "Kannadi-Palakkad",
      "M": "കണ്ണാടി",
      "PIN": "678701",
      "DID": "9"
    },
    {
      "POSTID": 1698,
      "E": "Olive Mount",
      "M": "ഒലീവ്മൗണ്ട്",
      "PIN": "678702",
      "DID": "9"
    },
    {
      "POSTID": 1699,
      "E": "Kannanur",
      "M": "കണ്ണനൂര്‍",
      "PIN": "678702",
      "DID": "9"
    },
    {
      "POSTID": 1700,
      "E": "Kalapatti",
      "M": "കളപ്പെട്ടി",
      "PIN": "678702",
      "DID": "9"
    },
    {
      "POSTID": 1701,
      "E": "Chithali",
      "M": "ചിതലി",
      "PIN": "678702",
      "DID": "9"
    },
    {
      "POSTID": 1702,
      "E": "Nochully",
      "M": "നൊച്ചുള്ളി",
      "PIN": "678702",
      "DID": "9"
    },
    {
      "POSTID": 1703,
      "E": "Perinkunnu",
      "M": "പെരുങ്കുന്നം",
      "PIN": "678702",
      "DID": "9"
    },
    {
      "POSTID": 1704,
      "E": "Kuzhalmannam",
      "M": "കുഴല്‍മന്ദം",
      "PIN": "678702",
      "DID": "9"
    },
    {
      "POSTID": 1705,
      "E": "Melarcode",
      "M": "മേലാര്‍കോട്",
      "PIN": "678703",
      "DID": "9"
    },
    {
      "POSTID": 1706,
      "E": "Cheramangalam",
      "M": "ചേരാമംഗലം",
      "PIN": "678703",
      "DID": "9"
    },
    {
      "POSTID": 1707,
      "E": "Chittalancherry",
      "M": "ചിറ്റിലഞ്ചേരി",
      "PIN": "678704",
      "DID": "9"
    },
    {
      "POSTID": 1708,
      "E": "Mudappallur",
      "M": "മുടപ്പല്ലൂര്‍",
      "PIN": "678705",
      "DID": "9"
    },
    {
      "POSTID": 1709,
      "E": "Mangalam Dam",
      "M": "മംഗലം ഡാം",
      "PIN": "678706",
      "DID": "9"
    },
    {
      "POSTID": 1710,
      "E": "Olimkadavu",
      "M": "ഒലിംകടവ്",
      "PIN": "678706",
      "DID": "9"
    },
    {
      "POSTID": 1711,
      "E": "Vandazhy",
      "M": "വണ്ടാഴി",
      "PIN": "678706",
      "DID": "9"
    },
    {
      "POSTID": 1712,
      "E": "Karinkayam",
      "M": "കരിങ്കയം",
      "PIN": "678706",
      "DID": "9"
    },
    {
      "POSTID": 1713,
      "E": "Chittady",
      "M": "ചിറ്റടി",
      "PIN": "678706",
      "DID": "9"
    },
    {
      "POSTID": 1714,
      "E": "Kinasseri ",
      "M": "കിണാശ്ശേരി",
      "PIN": "678701",
      "DID": "9"
    },
    {
      "POSTID": 1715,
      "E": "Elavampadam",
      "M": "ഇളവംപാടം",
      "PIN": "678684",
      "DID": "9"
    },
    {
      "POSTID": 1716,
      "E": "Kuttanur",
      "M": "കുത്തന്നൂര്‍",
      "PIN": "678721",
      "DID": "9"
    },
    {
      "POSTID": 1717,
      "E": "Chimbukal",
      "M": "ചിമ്പുകാട്",
      "PIN": "678721",
      "DID": "9"
    },
    {
      "POSTID": 1718,
      "E": "Tolanur",
      "M": "തോലനൂര്‍",
      "PIN": "678722",
      "DID": "9"
    },
    {
      "POSTID": 1719,
      "E": "Palakkad Industrial Estate",
      "M": "പാലക്കാട് ഇന്‍ഡസ്ട്രിയല്‍ എസ്റ്റേറ്റ്",
      "PIN": "678731",
      "DID": "9"
    },
    {
      "POSTID": 1720,
      "E": "Kottekad",
      "M": "കൊട്ടേക്കാട്",
      "PIN": "678732",
      "DID": "9"
    },
    {
      "POSTID": 1721,
      "E": "Puduppariyaram",
      "M": "പുതുപ്പരിയാരം",
      "PIN": "678731",
      "DID": "9"
    },
    {
      "POSTID": 1722,
      "E": "Elambulasseri",
      "M": "എളമ്പുലാശ്ശേരി",
      "PIN": "678595",
      "DID": "9"
    },
    {
      "POSTID": 1723,
      "E": "Thenkara",
      "M": "തെങ്കര",
      "PIN": "678582",
      "DID": "9"
    },
    {
      "POSTID": 1724,
      "E": "Perimbadari",
      "M": "പെരിമ്പടാരി",
      "PIN": "678762",
      "DID": "9"
    },
    {
      "POSTID": 1725,
      "E": "Changileri",
      "M": "ചങ്ങലീരി",
      "PIN": "678762",
      "DID": "9"
    },
    {
      "POSTID": 1726,
      "E": "Ottapalam",
      "M": "ഒറ്റപ്പാലം",
      "PIN": "679101",
      "DID": "9"
    },
    {
      "POSTID": 1727,
      "E": "Varode",
      "M": "വരോട്",
      "PIN": "679102",
      "DID": "9"
    },
    {
      "POSTID": 1728,
      "E": "Thottakara",
      "M": "തോട്ടക്കര",
      "PIN": "679102",
      "DID": "9"
    },
    {
      "POSTID": 1729,
      "E": "Palappuram",
      "M": "പാലപ്പുറം",
      "PIN": "679103",
      "DID": "9"
    },
    {
      "POSTID": 1730,
      "E": "Sri Ramakrishna Nagar",
      "M": "ശ്രീരാമകൃഷ്ണനഗര്‍",
      "PIN": "679103",
      "DID": "9"
    },
    {
      "POSTID": 1731,
      "E": "Kanniyampuram",
      "M": "കണ്ണിയംപുറം",
      "PIN": "679104",
      "DID": "9"
    },
    {
      "POSTID": 1732,
      "E": "Mayannur",
      "M": "മായന്നൂര്‍",
      "PIN": "679105",
      "DID": "8"
    },
    {
      "POSTID": 1733,
      "E": "South Kondazhy",
      "M": "സൗത്ത് കൊണ്ടാഴി",
      "PIN": "679106",
      "DID": "8"
    },
    {
      "POSTID": 1734,
      "E": "Kondazhy",
      "M": "കൊണ്ടാഴി",
      "PIN": "679106",
      "DID": "8"
    },
    {
      "POSTID": 1735,
      "E": "Paruthipara",
      "M": "പരുത്തിപ്ര",
      "PIN": "679121",
      "DID": "9"
    },
    {
      "POSTID": 1736,
      "E": "Shoranur",
      "M": "ഷൊര്‍ണ്ണൂര്‍",
      "PIN": "679121",
      "DID": "9"
    },
    {
      "POSTID": 1737,
      "E": "Mundakkottukurussi",
      "M": "മുണ്ടക്കോട്ടുകുറുശ്ശി",
      "PIN": "679122",
      "DID": "9"
    },
    {
      "POSTID": 1738,
      "E": "Kayiliad",
      "M": "കയിലിയാട്",
      "PIN": "679122",
      "DID": "9"
    },
    {
      "POSTID": 1739,
      "E": "Kallipadam",
      "M": "കല്ലിപ്പാടം",
      "PIN": "679122",
      "DID": "9"
    },
    {
      "POSTID": 1740,
      "E": "Kulapully",
      "M": "കുളപ്പുള്ളി",
      "PIN": "679122",
      "DID": "9"
    },
    {
      "POSTID": 1741,
      "E": "Shoranur Govt.Press",
      "M": "ഷൊര്‍ണ്ണൂര്‍ ഗവണ്‍മെന്റ് പ്രസ്സ്",
      "PIN": "679122",
      "DID": "9"
    },
    {
      "POSTID": 1742,
      "E": "Ganeshgiri",
      "M": "ഗണേഷ്ഗിരി",
      "PIN": "679123",
      "DID": "9"
    },
    {
      "POSTID": 1743,
      "E": "Vadanamkurussi",
      "M": "വാടാനംകുറുശ്ശി",
      "PIN": "679121",
      "DID": "9"
    },
    {
      "POSTID": 1744,
      "E": "Kanayam",
      "M": "കണയം",
      "PIN": "679125",
      "DID": "9"
    },
    {
      "POSTID": 1745,
      "E": "Mangalam Ottapalam",
      "M": "മംഗലം ഒറ്റപ്പാലം",
      "PIN": "679301",
      "DID": "9"
    },
    {
      "POSTID": 1746,
      "E": "Lakidi",
      "M": "ലെക്കിടി",
      "PIN": "679301",
      "DID": "9"
    },
    {
      "POSTID": 1747,
      "E": "Akalur",
      "M": "അകലൂര്‍",
      "PIN": "679302",
      "DID": "9"
    },
    {
      "POSTID": 1748,
      "E": "Gandhi Seva Sadan",
      "M": "ഗാന്ധിസേവാ സദനം",
      "PIN": "679302",
      "DID": "9"
    },
    {
      "POSTID": 1749,
      "E": "Perur Ottappalam",
      "M": "പേരൂര്‍ ഒറ്റപ്പാലം",
      "PIN": "679302",
      "DID": "9"
    },
    {
      "POSTID": 1750,
      "E": "Pattambi",
      "M": "പട്ടാമ്പി",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1751,
      "E": "Sankaramangalam",
      "M": "ശങ്കരമംഗലം",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1752,
      "E": "Kizhayur",
      "M": "കിഴായൂര്‍",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1753,
      "E": "Perumudiyur",
      "M": "പെരുമുടിയൂര്‍",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1754,
      "E": "Kondurkara",
      "M": "കൊണ്ട‍ൂര്‍ക്കര",
      "PIN": "679313",
      "DID": "9"
    },
    {
      "POSTID": 1755,
      "E": "Kodumunda",
      "M": "കൊടുമുണ്ട",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1756,
      "E": "Kozhikkottusseri ",
      "M": "കോഴിക്കോട്ടുശ്ശേരി",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1757,
      "E": "Vilathur",
      "M": "വിളത്തൂര്‍",
      "PIN": "679304",
      "DID": "9"
    },
    {
      "POSTID": 1758,
      "E": "Chembra",
      "M": "ചെമ്പ്ര",
      "PIN": "679304",
      "DID": "9"
    },
    {
      "POSTID": 1759,
      "E": "Thiruvegappura",
      "M": "തിരുവേഗപ്പുറ",
      "PIN": "679304",
      "DID": "9"
    },
    {
      "POSTID": 1760,
      "E": "Pallipuram Pattambi",
      "M": "പള്ളിപ്പുറം ",
      "PIN": "679305",
      "DID": "9"
    },
    {
      "POSTID": 1761,
      "E": "Karambathur",
      "M": "കാരമ്പത്തൂര്‍",
      "PIN": "679305",
      "DID": "9"
    },
    {
      "POSTID": 1762,
      "E": "Cherukutangad",
      "M": "ചെറുകുടങ്ങാട്",
      "PIN": "679305",
      "DID": "9"
    },
    {
      "POSTID": 1763,
      "E": "Maruthur",
      "M": "മരുതൂര്‍",
      "PIN": "679306",
      "DID": "9"
    },
    {
      "POSTID": 1764,
      "E": "Melepattambi",
      "M": "മേലേപട്ടാമ്പി",
      "PIN": "679306",
      "DID": "9"
    },
    {
      "POSTID": 1765,
      "E": "Pulasseri",
      "M": "പുലാശ്ശേരി",
      "PIN": "679307",
      "DID": "9"
    },
    {
      "POSTID": 1766,
      "E": "Mannengode",
      "M": "മണ്ണേങ്ങോട്",
      "PIN": "679307",
      "DID": "9"
    },
    {
      "POSTID": 1767,
      "E": "Keezhmuri",
      "M": "കീഴ്മുറി",
      "PIN": "679307",
      "DID": "9"
    },
    {
      "POSTID": 1768,
      "E": "Melmuri",
      "M": "മേല്‍മുറി",
      "PIN": "679307",
      "DID": "9"
    },
    {
      "POSTID": 1769,
      "E": "Naduvattom Pattambi",
      "M": "നടുവട്ടം",
      "PIN": "679308",
      "DID": "9"
    },
    {
      "POSTID": 1770,
      "E": "Eruvatty",
      "M": "",
      "PIN": "679308",
      "DID": "9"
    },
    {
      "POSTID": 1771,
      "E": "Edappalam",
      "M": "എടപ്പലം",
      "PIN": "679308",
      "DID": "9"
    },
    {
      "POSTID": 1772,
      "E": "Nedungottur",
      "M": "നെടുങ്ങോട്ടൂര്‍",
      "PIN": "679308",
      "DID": "9"
    },
    {
      "POSTID": 1773,
      "E": "Kaipuram",
      "M": "കൈപ്പുറം",
      "PIN": "679308",
      "DID": "9"
    },
    {
      "POSTID": 1774,
      "E": "Vilayur",
      "M": "വിളയൂര്‍",
      "PIN": "679309",
      "DID": "9"
    },
    {
      "POSTID": 1775,
      "E": "Vilayur West",
      "M": "വിളയൂര്‍ വെസ്റ്റ്",
      "PIN": "679309",
      "DID": "9"
    },
    {
      "POSTID": 1776,
      "E": "Thathanampully ",
      "M": "തത്തനംപുള്ളി",
      "PIN": "679337",
      "DID": "9"
    },
    {
      "POSTID": 1777,
      "E": "Amayur",
      "M": "ആമയൂര്‍",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1778,
      "E": "Nhangattiri",
      "M": "ഞാങ്ങാട്ടിരി",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1779,
      "E": "Paruthur ",
      "M": "പരുതൂര്‍",
      "PIN": "679305",
      "DID": "9"
    },
    {
      "POSTID": 1780,
      "E": "Kalladipatta",
      "M": "കള്ളാടിപ്പറ്റ",
      "PIN": "679313",
      "DID": "9"
    },
    {
      "POSTID": 1781,
      "E": "Muthuthala ",
      "M": "മുതുതല",
      "PIN": "679303",
      "DID": "9"
    },
    {
      "POSTID": 1782,
      "E": "Pariyapuram",
      "M": "പരിയാപുരം",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1783,
      "E": "Puthanangadi",
      "M": "പുത്തനങ്ങാടി",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1784,
      "E": "Puzhakkattri",
      "M": "പുഴക്കാട്ടിരി",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1785,
      "E": "Angadippuram",
      "M": "അങ്ങാടിപ്പുറം",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1786,
      "E": "Aripra",
      "M": "അരിപ്ര",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1787,
      "E": "Kadungapuram",
      "M": "കടുങ്ങപുരം",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1788,
      "E": "Cherakkaparamba",
      "M": "ചെരക്കാപറമ്പ്",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1789,
      "E": "Pathaikara",
      "M": "പാതായ്ക്കര",
      "PIN": "679322",
      "DID": "10"
    },
    {
      "POSTID": 1790,
      "E": "Amminikkad",
      "M": "അമ്മിനിക്കാട്",
      "PIN": "679322",
      "DID": "10"
    },
    {
      "POSTID": 1791,
      "E": "Arakkuparamba",
      "M": "അരക്കുപറമ്പ്",
      "PIN": "679341",
      "DID": "10"
    },
    {
      "POSTID": 1792,
      "E": "Mattarakkal",
      "M": "മാട്ടറക്കല്‍",
      "PIN": "679341",
      "DID": "10"
    },
    {
      "POSTID": 1793,
      "E": "Perinthalmanna",
      "M": "പെരിന്തല്‍മണ്ണ",
      "PIN": "679322",
      "DID": "10"
    },
    {
      "POSTID": 1794,
      "E": "Perinthalmanna Bazaar",
      "M": "പെരിന്തല്‍മണ്ണ ബസാര്‍",
      "PIN": "679322",
      "DID": "10"
    },
    {
      "POSTID": 1795,
      "E": "Ponniyamkuirssi",
      "M": "പൊന്ന്യാകുര്‍ശി",
      "PIN": "679322",
      "DID": "10"
    },
    {
      "POSTID": 1796,
      "E": "Thazhekkode",
      "M": "താഴെക്കോട്",
      "PIN": "679341",
      "DID": "10"
    },
    {
      "POSTID": 1797,
      "E": "Pulamanthole",
      "M": "പുലാമന്തോള്‍",
      "PIN": "679323",
      "DID": "10"
    },
    {
      "POSTID": 1798,
      "E": "Valapuram",
      "M": "വളപുരം",
      "PIN": "679323",
      "DID": "10"
    },
    {
      "POSTID": 1799,
      "E": "Chemmalasseri",
      "M": "ചെമ്മലശ്ശേരി",
      "PIN": "679323",
      "DID": "10"
    },
    {
      "POSTID": 1800,
      "E": "Chelakkad",
      "M": "ചേലക്കാട്",
      "PIN": "679323",
      "DID": "10"
    },
    {
      "POSTID": 1801,
      "E": "Mankada",
      "M": "മങ്കട",
      "PIN": "679324",
      "DID": "10"
    },
    {
      "POSTID": 1802,
      "E": "Mankada Pallipuram",
      "M": "മങ്കട പള്ളിപ്പുറം",
      "PIN": "679324",
      "DID": "10"
    },
    {
      "POSTID": 1803,
      "E": "Vallikkappatta",
      "M": "",
      "PIN": "679324",
      "DID": "10"
    },
    {
      "POSTID": 1804,
      "E": "Koottil",
      "M": "കൂട്ടില്‍",
      "PIN": "679324",
      "DID": "10"
    },
    {
      "POSTID": 1805,
      "E": "Kadannamanna",
      "M": "കടന്നമണ്ണ",
      "PIN": "679324",
      "DID": "10"
    },
    {
      "POSTID": 1806,
      "E": "Vellila",
      "M": "വെള്ളില",
      "PIN": "679324",
      "DID": "10"
    },
    {
      "POSTID": 1807,
      "E": "Pattikkad",
      "M": "പട്ടിക്കാട്",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1808,
      "E": "Poonthavanam ",
      "M": "പൂന്താവനം",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1809,
      "E": "Mannarmala",
      "M": "മണ്ണാര്‍മല",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1810,
      "E": "Valambur",
      "M": "വലമ്പൂര്‍",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1811,
      "E": "Keezhattur",
      "M": "കീഴാറ്റൂര്‍",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1812,
      "E": "Chemmaniyode",
      "M": "ചെമ്മാണിയോട്",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1813,
      "E": "Thelakkad",
      "M": "തേലക്കാട്",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1814,
      "E": "Vengoor",
      "M": "വേങ്ങൂര്‍",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1815,
      "E": "Thachinganadam",
      "M": "തച്ചിങ്ങനാടം",
      "PIN": "679325",
      "DID": "10"
    },
    {
      "POSTID": 1816,
      "E": "Pathirikode ",
      "M": "പാതിരിക്കോട്",
      "PIN": "679326",
      "DID": "10"
    },
    {
      "POSTID": 1817,
      "E": "Edappatta",
      "M": "എടപ്പറ്റ",
      "PIN": "679326",
      "DID": "10"
    },
    {
      "POSTID": 1818,
      "E": "Edayattur",
      "M": "എടയാറ്റൂര്‍",
      "PIN": "679326",
      "DID": "10"
    },
    {
      "POSTID": 1819,
      "E": "Vettathur",
      "M": "വെട്ടത്തൂര്‍",
      "PIN": "679326",
      "DID": "10"
    },
    {
      "POSTID": 1820,
      "E": "Velliyanchery",
      "M": "വെള്ളിയഞ്ചേരി",
      "PIN": "679326",
      "DID": "10"
    },
    {
      "POSTID": 1821,
      "E": "Melattur",
      "M": "മേലാറ്റൂര്‍",
      "PIN": "679326",
      "DID": "10"
    },
    {
      "POSTID": 1822,
      "E": "Palakkalvetta",
      "M": "പാലക്കല്‍വെട്ട",
      "PIN": "679327",
      "DID": "10"
    },
    {
      "POSTID": 1823,
      "E": "Poolamanna",
      "M": "പുളമണ്ണ",
      "PIN": "679327",
      "DID": "10"
    },
    {
      "POSTID": 1824,
      "E": "Poongodu",
      "M": "പൂങ്ങോട്",
      "PIN": "679327",
      "DID": "10"
    },
    {
      "POSTID": 1825,
      "E": "Vellayur",
      "M": "വെള്ളയൂര്‍",
      "PIN": "679327",
      "DID": "10"
    },
    {
      "POSTID": 1826,
      "E": "Chembrasseri East",
      "M": "ചെമ്പ്രശ്ശേരി ഈസ്റ്റ്",
      "PIN": "679327",
      "DID": "10"
    },
    {
      "POSTID": 1827,
      "E": "Tuvvur",
      "M": "തുവ്വൂര്‍",
      "PIN": "679327",
      "DID": "10"
    },
    {
      "POSTID": 1828,
      "E": "Naduvath",
      "M": "നടുവത്ത്",
      "PIN": "679328",
      "DID": "10"
    },
    {
      "POSTID": 1829,
      "E": "Punnappala",
      "M": "പുന്നപ്പാല",
      "PIN": "679328",
      "DID": "10"
    },
    {
      "POSTID": 1830,
      "E": "Wandoor",
      "M": "വണ്ട‍ൂര്‍",
      "PIN": "679328",
      "DID": "10"
    },
    {
      "POSTID": 1831,
      "E": "Kappil",
      "M": "കാപ്പില്‍",
      "PIN": "679328",
      "DID": "10"
    },
    {
      "POSTID": 1832,
      "E": "Chathangottupuram",
      "M": "ചാത്തങ്ങോട്ടുപുറം",
      "PIN": "679328",
      "DID": "10"
    },
    {
      "POSTID": 1833,
      "E": "Nilambur",
      "M": "നിലമ്പൂര്‍ ",
      "PIN": "679329",
      "DID": "10"
    },
    {
      "POSTID": 1834,
      "E": "Edivanna",
      "M": "ഇടിവണ്ണ",
      "PIN": "679329",
      "DID": "10"
    },
    {
      "POSTID": 1835,
      "E": "Nilambur",
      "M": "നിലമ്പൂര്‍ ആര്‍ എസ്",
      "PIN": "679330",
      "DID": "10"
    },
    {
      "POSTID": 1836,
      "E": "Nallanthani",
      "M": "നല്ലംതണ്ണി",
      "PIN": "679330",
      "DID": "10"
    },
    {
      "POSTID": 1837,
      "E": "Palengara",
      "M": "പാലാങ്കര",
      "PIN": "679330",
      "DID": "10"
    },
    {
      "POSTID": 1838,
      "E": "Ramankuth",
      "M": "രാമന്‍കുത്ത്",
      "PIN": "679330",
      "DID": "10"
    },
    {
      "POSTID": 1839,
      "E": "Palemad",
      "M": "പാലേമാട്",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1840,
      "E": "Munda",
      "M": "മുണ്ട",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1841,
      "E": "Moothedom",
      "M": "മൂത്തേടം",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1842,
      "E": "Edakkara",
      "M": "എടക്കര",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1843,
      "E": "Karapuram",
      "M": "കാരപ്പുറം",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1844,
      "E": "Kunnummalpotti",
      "M": "കുന്നുമ്മല്‍പൊട്ടി",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1845,
      "E": "Modapoika",
      "M": "മൊടപ്പൊയ്ക",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1846,
      "E": "Theyyathumpadam",
      "M": "തെയ്യത്തുംപാടം",
      "PIN": "679331",
      "DID": "10"
    },
    {
      "POSTID": 1847,
      "E": "Pookkottumpadam",
      "M": "പൂക്കോട്ടുംപാടം",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1848,
      "E": "Mannathipoyil",
      "M": "മണ്ണാത്തിപ്പൊയില്‍",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1849,
      "E": "Mampattumoola",
      "M": "മമ്പാട്ട്മൂല",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1850,
      "E": "Amarambalam",
      "M": "അമരമ്പലം",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1851,
      "E": "Kavalamukkatta ",
      "M": "കവളമുക്കട്ട",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1852,
      "E": "Chulliyode",
      "M": "ചുള്ളിയോട്",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1853,
      "E": "Chettipadam",
      "M": "ചെട്ടിപ്പാടം",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1854,
      "E": "Thulappankai-Colony",
      "M": "തുളപ്പന്‍കൈ കോളനി",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1855,
      "E": "Nambooripotti",
      "M": "നമ്പൂരിപ്പൊട്ടി",
      "PIN": "679333",
      "DID": "10"
    },
    {
      "POSTID": 1856,
      "E": "Marutha",
      "M": "മരുത",
      "PIN": "679333",
      "DID": "10"
    },
    {
      "POSTID": 1857,
      "E": "Manimooly",
      "M": "മണിമൂളി",
      "PIN": "679333",
      "DID": "10"
    },
    {
      "POSTID": 1858,
      "E": "Vazhikadavu",
      "M": "വഴിക്കടവ്",
      "PIN": "679333",
      "DID": "10"
    },
    {
      "POSTID": 1859,
      "E": "Karacode",
      "M": "കാരക്കോട്",
      "PIN": "679333",
      "DID": "10"
    },
    {
      "POSTID": 1860,
      "E": "Kambalakkallu ",
      "M": "കമ്പളക്കല്ല്",
      "PIN": "679333",
      "DID": "10"
    },
    {
      "POSTID": 1861,
      "E": "Pallikuth",
      "M": "പള്ളിക്കുത്ത്",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1862,
      "E": "Pathar",
      "M": "പാതാര്‍",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1863,
      "E": "Pathirippadam",
      "M": "പാതിരിപ്പാടം",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1864,
      "E": "Pookkottumanna",
      "M": "പൂക്കോട്ടുമണ്ണ",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1865,
      "E": "Bhoodan Colony",
      "M": "ഭൂദാനം കോളനി",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1866,
      "E": "Munderi",
      "M": "മുണ്ടേരി",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1867,
      "E": "Erumamunda",
      "M": "എരുമമുണ്ട",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1868,
      "E": "Kurumbalangode",
      "M": "കുറുമ്പലങ്ങോട്",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1869,
      "E": "Chungathara",
      "M": "ചുങ്കത്തറ",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1870,
      "E": "Marayamangalam South",
      "M": "മാരായമംഗലം  സൗത്ത്",
      "PIN": "679335",
      "DID": "9"
    },
    {
      "POSTID": 1871,
      "E": "Irimbalasseri",
      "M": "ഇരുമ്പാലശ്ശേരി",
      "PIN": "679335",
      "DID": "9"
    },
    {
      "POSTID": 1872,
      "E": "Ezhuvanthala",
      "M": "എഴുവന്തല",
      "PIN": "679335",
      "DID": "9"
    },
    {
      "POSTID": 1873,
      "E": "Nellaya",
      "M": "നെല്ലായ",
      "PIN": "679335",
      "DID": "9"
    },
    {
      "POSTID": 1874,
      "E": "Pombilaya",
      "M": "പൊമ്പിലായ",
      "PIN": "679335",
      "DID": "9"
    },
    {
      "POSTID": 1875,
      "E": "Vallapuzha",
      "M": "വല്ലപ്പുഴ",
      "PIN": "679336",
      "DID": "9"
    },
    {
      "POSTID": 1876,
      "E": "Kuruvattur",
      "M": "കുറുവട്ടൂര്‍",
      "PIN": "679336",
      "DID": "9"
    },
    {
      "POSTID": 1877,
      "E": "Choorakode",
      "M": "ചൂരക്കോട്",
      "PIN": "679336",
      "DID": "9"
    },
    {
      "POSTID": 1878,
      "E": "Cherukode",
      "M": "ചെറുകോട്",
      "PIN": "679336",
      "DID": "9"
    },
    {
      "POSTID": 1879,
      "E": "Mulayankavu",
      "M": "മുളയങ്കാവ്",
      "PIN": "679337",
      "DID": "9"
    },
    {
      "POSTID": 1880,
      "E": "Kulukkallur",
      "M": "കുലുക്കല്ലൂര്‍",
      "PIN": "679337",
      "DID": "9"
    },
    {
      "POSTID": 1881,
      "E": "Pang",
      "M": "പാങ്ങ്",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1882,
      "E": "Pang South ",
      "M": "പാങ്ങ് സൗത്ത്",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1883,
      "E": "Pang Chendy ",
      "M": "പാങ്ങ് ചേണ്ടി",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1884,
      "E": "Moorkand",
      "M": "മൂര്‍ക്കനാട്",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1885,
      "E": "Kuruvambalam",
      "M": "കുരുവമ്പലം",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1886,
      "E": "Kolathur",
      "M": "കൊളത്തൂര്‍",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1887,
      "E": "Chendi",
      "M": "",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1888,
      "E": "Vengad",
      "M": "വെങ്ങാട്",
      "PIN": "679338",
      "DID": "10"
    },
    {
      "POSTID": 1889,
      "E": "Amarambalam South",
      "M": "അമരമ്പലം സൗത്ത്",
      "PIN": "679339",
      "DID": "10"
    },
    {
      "POSTID": 1890,
      "E": "Vallambram",
      "M": "",
      "PIN": "679339",
      "DID": "10"
    },
    {
      "POSTID": 1891,
      "E": "Vaniyambalm",
      "M": "വാണിയമ്പലം",
      "PIN": "679339",
      "DID": "10"
    },
    {
      "POSTID": 1892,
      "E": "Vadakkumpadam",
      "M": "വടക്കുംപാടം",
      "PIN": "679339",
      "DID": "10"
    },
    {
      "POSTID": 1893,
      "E": "Karad",
      "M": "കാരാട്",
      "PIN": "679339",
      "DID": "10"
    },
    {
      "POSTID": 1894,
      "E": "Koorad",
      "M": "കൂരാട്",
      "PIN": "679339",
      "DID": "10"
    },
    {
      "POSTID": 1895,
      "E": "Palathole",
      "M": "പാലത്തോള്‍",
      "PIN": "679340",
      "DID": "10"
    },
    {
      "POSTID": 1896,
      "E": "Eravimangalam",
      "M": "എരവിമംഗലം",
      "PIN": "679340",
      "DID": "10"
    },
    {
      "POSTID": 1897,
      "E": "Elad",
      "M": "എളാട്",
      "PIN": "679340",
      "DID": "10"
    },
    {
      "POSTID": 1898,
      "E": "Kunnakav",
      "M": "കുന്നക്കാവ്",
      "PIN": "679340",
      "DID": "10"
    },
    {
      "POSTID": 1899,
      "E": "Kunnapilly",
      "M": "കുന്നപ്പള്ളി",
      "PIN": "679322",
      "DID": "10"
    },
    {
      "POSTID": 1900,
      "E": "Cherukara",
      "M": "ചെറുകര",
      "PIN": "679340",
      "DID": "10"
    },
    {
      "POSTID": 1901,
      "E": "Chandakkunnu",
      "M": "ചന്തക്കുന്ന്",
      "PIN": "679329",
      "DID": "10"
    },
    {
      "POSTID": 1902,
      "E": "Eranhimangad",
      "M": "എരഞ്ഞിമങ്ങാട്",
      "PIN": "679329",
      "DID": "10"
    },
    {
      "POSTID": 1903,
      "E": "Karulai",
      "M": "കരുളായ്",
      "PIN": "679330",
      "DID": "10"
    },
    {
      "POSTID": 1904,
      "E": "Thiruvali",
      "M": "തിരുവാലി",
      "PIN": "676123",
      "DID": "10"
    },
    {
      "POSTID": 1905,
      "E": "Ramapuram",
      "M": "രാമപുരം",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1906,
      "E": "Valamkulam",
      "M": "വളാംകുളം",
      "PIN": "679351",
      "DID": "10"
    },
    {
      "POSTID": 1907,
      "E": "Tirurkad",
      "M": "തിരൂര്‍ക്കാട്",
      "PIN": "679321",
      "DID": "10"
    },
    {
      "POSTID": 1908,
      "E": "Thazhekkode West",
      "M": "താഴെക്കോട് വെസ്റ്റ്",
      "PIN": "679341",
      "DID": "10"
    },
    {
      "POSTID": 1909,
      "E": "Uppada ",
      "M": "ഉപ്പട",
      "PIN": "679334",
      "DID": "10"
    },
    {
      "POSTID": 1910,
      "E": "Chokkad",
      "M": "ചോക്കാട്",
      "PIN": "679332",
      "DID": "10"
    },
    {
      "POSTID": 1911,
      "E": "Marayamangalam ",
      "M": "മാരായമംഗലം",
      "PIN": "679335",
      "DID": "9"
    },
    {
      "POSTID": 1912,
      "E": "Aliparamba",
      "M": "ആലിപ്പറമ്പ്",
      "PIN": "679357",
      "DID": "10"
    },
    {
      "POSTID": 1913,
      "E": "Manalaya",
      "M": "മണലായ",
      "PIN": "679357",
      "DID": "10"
    },
    {
      "POSTID": 1914,
      "E": "Anamangad",
      "M": "ആനമങ്ങാട്",
      "PIN": "679357",
      "DID": "10"
    },
    {
      "POSTID": 1915,
      "E": "Vazhenkada",
      "M": "വാഴേങ്കട",
      "PIN": "679357",
      "DID": "10"
    },
    {
      "POSTID": 1916,
      "E": "Thootha",
      "M": "തൂത",
      "PIN": "679357",
      "DID": "10"
    },
    {
      "POSTID": 1917,
      "E": "Panamanna",
      "M": "പനമണ്ണ",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1918,
      "E": "Panamanna South",
      "M": "പനമണ്ണ സൗത്ത്",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1919,
      "E": "Pathamkulam",
      "M": "പത്തംകുളം",
      "PIN": "679522",
      "DID": "9"
    },
    {
      "POSTID": 1920,
      "E": "Ambalavattom",
      "M": "അമ്പലവട്ടം",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1921,
      "E": "Kizhur",
      "M": "കിഴൂര്‍",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1922,
      "E": "Melur",
      "M": "മേലൂര്‍",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1923,
      "E": "Cherambattakavu",
      "M": "ചേറമ്പറ്റകാവ്",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1924,
      "E": "Tharuvakkonam",
      "M": "തരുവക്കോണം",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1925,
      "E": "Taruvakonam",
      "M": "",
      "PIN": "679501",
      "DID": "9"
    },
    {
      "POSTID": 1926,
      "E": "Munnurkode",
      "M": "മുന്നൂര്‍ക്കോട്",
      "PIN": "679502",
      "DID": "9"
    },
    {
      "POSTID": 1927,
      "E": "Veeramangalam",
      "M": "വീരമംഗലം",
      "PIN": "679503",
      "DID": "9"
    },
    {
      "POSTID": 1928,
      "E": "Trikatiri",
      "M": "തൃക്കടീരി",
      "PIN": "679502",
      "DID": "9"
    },
    {
      "POSTID": 1929,
      "E": "Panniyamkurissi",
      "M": "പന്നിയാംകുറിശ്ശി",
      "PIN": "679503",
      "DID": "9"
    },
    {
      "POSTID": 1930,
      "E": "Mangode",
      "M": "മാങ്ങോട്",
      "PIN": "679503",
      "DID": "9"
    },
    {
      "POSTID": 1931,
      "E": "Adakkaputhur",
      "M": "അടക്കാപുത്തൂര്‍",
      "PIN": "679503",
      "DID": "9"
    },
    {
      "POSTID": 1932,
      "E": "Karattukurissi",
      "M": "കാരാട്ടുകുറിശ്ശി",
      "PIN": "679503",
      "DID": "9"
    },
    {
      "POSTID": 1933,
      "E": "Kulakkad",
      "M": "കുളക്കാട്",
      "PIN": "679503",
      "DID": "9"
    },
    {
      "POSTID": 1934,
      "E": "Cherpalcheri",
      "M": "ചെര്‍പുളശ്ശേരി",
      "PIN": "679503",
      "DID": "9"
    },
    {
      "POSTID": 1935,
      "E": "Karumanakurissi",
      "M": "കരുമാനാംകുറിശ്ശി",
      "PIN": "679504",
      "DID": "9"
    },
    {
      "POSTID": 1936,
      "E": "Vellinezhi",
      "M": "വെള്ളിനേഴി",
      "PIN": "679504",
      "DID": "9"
    },
    {
      "POSTID": 1937,
      "E": "Puliyanamkunnu",
      "M": "പുലിയാനംകുന്ന്",
      "PIN": "679505",
      "DID": "9"
    },
    {
      "POSTID": 1938,
      "E": "Chalavara",
      "M": "ചളവറ",
      "PIN": "679505",
      "DID": "9"
    },
    {
      "POSTID": 1939,
      "E": "Karalmanna",
      "M": "കാറല്‍മണ്ണ",
      "PIN": "679506",
      "DID": "9"
    },
    {
      "POSTID": 1940,
      "E": "Thekkummuri",
      "M": "തെക്കുംമുറി",
      "PIN": "679506",
      "DID": "9"
    },
    {
      "POSTID": 1941,
      "E": "Mulannur",
      "M": "മുളഞ്ഞൂര്‍",
      "PIN": "679511",
      "DID": "9"
    },
    {
      "POSTID": 1942,
      "E": "Chunangad",
      "M": "ചുനങ്ങാട്",
      "PIN": "679511",
      "DID": "9"
    },
    {
      "POSTID": 1943,
      "E": "Ambalapara PGT",
      "M": "അമ്പലപ്പാറ",
      "PIN": "679512",
      "DID": "9"
    },
    {
      "POSTID": 1944,
      "E": "Cherumundasseri",
      "M": "ചെറുമുണ്ടശ്ശേരി",
      "PIN": "679512",
      "DID": "9"
    },
    {
      "POSTID": 1945,
      "E": "Srikrishnapuram",
      "M": "ശ്രീകൃഷ്ണപുരം",
      "PIN": "679513",
      "DID": "9"
    },
    {
      "POSTID": 1946,
      "E": "Attasseri",
      "M": "ആറ്റാശ്ശേരി",
      "PIN": "679513",
      "DID": "9"
    },
    {
      "POSTID": 1947,
      "E": "Valambilimangalam",
      "M": "വലമ്പിലിമംഗലം",
      "PIN": "679513",
      "DID": "9"
    },
    {
      "POSTID": 1948,
      "E": "Karimpuzha",
      "M": "കരിമ്പുഴ",
      "PIN": "679513",
      "DID": "9"
    },
    {
      "POSTID": 1949,
      "E": "Kattukulam",
      "M": "കാട്ടുകുളം",
      "PIN": "679514",
      "DID": "9"
    },
    {
      "POSTID": 1950,
      "E": "Kattukulam South",
      "M": "കാട്ടുകുളം സൗത്ത്",
      "PIN": "679514",
      "DID": "9"
    },
    {
      "POSTID": 1951,
      "E": "Kalluvazhi",
      "M": "കല്ലുവഴി",
      "PIN": "679514",
      "DID": "9"
    },
    {
      "POSTID": 1952,
      "E": "Kuttanasseri",
      "M": "കുറ്റാനശ്ശേരി",
      "PIN": "679514",
      "DID": "9"
    },
    {
      "POSTID": 1953,
      "E": "Thirunarayanapuram",
      "M": "തിരുനാരായണപുരം",
      "PIN": "679514",
      "DID": "9"
    },
    {
      "POSTID": 1954,
      "E": "Thiruvazhiyode",
      "M": "തിരുവാഴിയോട്",
      "PIN": "679514",
      "DID": "9"
    },
    {
      "POSTID": 1955,
      "E": "Kadambur -Palakkad",
      "M": "കടമ്പൂര്‍",
      "PIN": "679515",
      "DID": "9"
    },
    {
      "POSTID": 1956,
      "E": "Vengasseri",
      "M": "വെങ്ങശ്ശേരി",
      "PIN": "679516",
      "DID": "9"
    },
    {
      "POSTID": 1957,
      "E": "Mannampetta",
      "M": "മണ്ണംമ്പറ്റ",
      "PIN": "679517",
      "DID": "9"
    },
    {
      "POSTID": 1958,
      "E": "Kottappuram ",
      "M": "കോട്ടപ്പുറം",
      "PIN": "679513",
      "DID": "9"
    },
    {
      "POSTID": 1959,
      "E": "Manisseri",
      "M": "മനിശ്ശേരി",
      "PIN": "679521",
      "DID": "9"
    },
    {
      "POSTID": 1960,
      "E": "Cherottur",
      "M": "ചോറോട്ടൂര്‍",
      "PIN": "679521",
      "DID": "9"
    },
    {
      "POSTID": 1961,
      "E": "Panayur",
      "M": "പനയൂര്‍",
      "PIN": "679522",
      "DID": "9"
    },
    {
      "POSTID": 1962,
      "E": "Vaniamkulam",
      "M": "വാണിയംകുളം",
      "PIN": "679522",
      "DID": "9"
    },
    {
      "POSTID": 1963,
      "E": "Cherukattupulam",
      "M": "ചെറുകാട്ടുപുലം",
      "PIN": "679522",
      "DID": "9"
    },
    {
      "POSTID": 1964,
      "E": "Mannanur",
      "M": "മാന്നന്നൂര്‍",
      "PIN": "679523",
      "DID": "9"
    },
    {
      "POSTID": 1965,
      "E": "Kavalappara",
      "M": "കവളപ്പാറ",
      "PIN": "679523",
      "DID": "9"
    },
    {
      "POSTID": 1966,
      "E": "Koonathara",
      "M": "കൂനത്തറ",
      "PIN": "679523",
      "DID": "9"
    },
    {
      "POSTID": 1967,
      "E": "Panjal",
      "M": "പാഞ്ഞാള്‍",
      "PIN": "679531",
      "DID": "8"
    },
    {
      "POSTID": 1968,
      "E": "Nedumpura",
      "M": "നെടുമ്പുര",
      "PIN": "679531",
      "DID": "8"
    },
    {
      "POSTID": 1969,
      "E": "Vettikattiri",
      "M": "വെട്ടിക്കാട്ടിരി",
      "PIN": "679531",
      "DID": "8"
    },
    {
      "POSTID": 1970,
      "E": "Cheruthuruthy",
      "M": "ചെറുതുരുത്തി",
      "PIN": "679531",
      "DID": "8"
    },
    {
      "POSTID": 1971,
      "E": "Painkulam",
      "M": "പൈങ്കുളം",
      "PIN": "679531",
      "DID": "8"
    },
    {
      "POSTID": 1972,
      "E": "Pallur",
      "M": "പല്ലൂര്‍",
      "PIN": "679532",
      "DID": "8"
    },
    {
      "POSTID": 1973,
      "E": "Desamangalam",
      "M": "ദേശമംഗലം",
      "PIN": "679532",
      "DID": "8"
    },
    {
      "POSTID": 1974,
      "E": "Thalassery",
      "M": "തലശ്ശേരി",
      "PIN": "679532",
      "DID": "8"
    },
    {
      "POSTID": 1975,
      "E": "Nagalasseri",
      "M": "നാഗലശ്ശേരി",
      "PIN": "679533",
      "DID": "9"
    },
    {
      "POSTID": 1976,
      "E": "Koottanad",
      "M": "കൂറ്റനാട്",
      "PIN": "679533",
      "DID": "9"
    },
    {
      "POSTID": 1977,
      "E": "Nellikkatiri",
      "M": "നെല്ലിക്കാട്ടിരി",
      "PIN": "679533",
      "DID": "9"
    },
    {
      "POSTID": 1978,
      "E": "Thekkevavanur",
      "M": "തെക്കേ വാവനൂര്‍",
      "PIN": "679533",
      "DID": "9"
    },
    {
      "POSTID": 1979,
      "E": "Thirumittacode ",
      "M": "തിരുമിറ്റക്കോട്",
      "PIN": "679533",
      "DID": "9"
    },
    {
      "POSTID": 1980,
      "E": "Pattithara",
      "M": "പട്ടിത്തറ",
      "PIN": "679534",
      "DID": "9"
    },
    {
      "POSTID": 1981,
      "E": "Mala",
      "M": "മല",
      "PIN": "679534",
      "DID": "9"
    },
    {
      "POSTID": 1982,
      "E": "Othalur",
      "M": "ഒതളൂര്‍",
      "PIN": "679534",
      "DID": "9"
    },
    {
      "POSTID": 1983,
      "E": "Mezhathur",
      "M": "മേഴത്തൂര്‍",
      "PIN": "679534",
      "DID": "9"
    },
    {
      "POSTID": 1984,
      "E": "Trithala",
      "M": "തൃത്താല",
      "PIN": "679534",
      "DID": "9"
    },
    {
      "POSTID": 1985,
      "E": "Chazhiyattiri ",
      "M": "ചാഴിയാട്ടിരി",
      "PIN": "679535",
      "DID": "9"
    },
    {
      "POSTID": 1986,
      "E": "Peringannur",
      "M": "പെരിങ്കന്നൂര്‍",
      "PIN": "679535",
      "DID": "9"
    },
    {
      "POSTID": 1987,
      "E": "Perinde",
      "M": "പെരിങ്ങോട്",
      "PIN": "679535",
      "DID": "9"
    },
    {
      "POSTID": 1988,
      "E": "Kothachira",
      "M": "കോതച്ചിറ",
      "PIN": "679535",
      "DID": "9"
    },
    {
      "POSTID": 1989,
      "E": "Thanneercode",
      "M": "കവുക്കോട്",
      "PIN": "679536",
      "DID": "9"
    },
    {
      "POSTID": 1990,
      "E": "Chalisseri",
      "M": "ചാലിശ്ശേരി",
      "PIN": "679536",
      "DID": "9"
    },
    {
      "POSTID": 1991,
      "E": "Perumannur",
      "M": "പെരുമണ്ണൂര്‍",
      "PIN": "679536",
      "DID": "9"
    },
    {
      "POSTID": 1992,
      "E": "Chathannur",
      "M": "ചാത്തന്നൂര്‍",
      "PIN": "679537",
      "DID": "9"
    },
    {
      "POSTID": 1993,
      "E": "Thalakkasseri",
      "M": "തലക്കശ്ശേരി",
      "PIN": "679534",
      "DID": "9"
    },
    {
      "POSTID": 1994,
      "E": "Anakkara",
      "M": "ആനക്കര",
      "PIN": "679551",
      "DID": "9"
    },
    {
      "POSTID": 1995,
      "E": "Angadi",
      "M": "അങ്ങാടി",
      "PIN": "679552",
      "DID": "9"
    },
    {
      "POSTID": 1996,
      "E": "Eravakkad",
      "M": "എറവക്കാട്",
      "PIN": "679552",
      "DID": "9"
    },
    {
      "POSTID": 1997,
      "E": "Kappur",
      "M": "കപ്പൂര്‍",
      "PIN": "679552",
      "DID": "9"
    },
    {
      "POSTID": 1998,
      "E": "Kalladathur",
      "M": "കല്ലടത്തൂര്‍",
      "PIN": "679552",
      "DID": "9"
    },
    {
      "POSTID": 1999,
      "E": "Kumaranellur",
      "M": "കുമരനെല്ലൂര്‍",
      "PIN": "679552",
      "DID": "9"
    },
    {
      "POSTID": 2000,
      "E": "Kumbidi",
      "M": "കുമ്പിടി",
      "PIN": "679553",
      "DID": "9"
    },
    {
      "POSTID": 2001,
      "E": "Malamalkkavu",
      "M": "മലമല്‍കാവ്",
      "PIN": "679554",
      "DID": "9"
    },
    {
      "POSTID": 2002,
      "E": "Kudallur",
      "M": "കൂടല്ലൂര്‍",
      "PIN": "679554",
      "DID": "9"
    },
    {
      "POSTID": 2003,
      "E": "Alamkode",
      "M": "ആലംകോട്",
      "PIN": "679585",
      "DID": "10"
    },
    {
      "POSTID": 2004,
      "E": "Punnayurkulam",
      "M": "പുന്നയൂര്‍ക്കുളം",
      "PIN": "679561",
      "DID": "8"
    },
    {
      "POSTID": 2005,
      "E": "Chammannur",
      "M": "ചമ്മണ്ണൂര്‍",
      "PIN": "679561",
      "DID": "8"
    },
    {
      "POSTID": 2006,
      "E": "Punnayur",
      "M": "പുന്നയൂര്‍",
      "PIN": "679562",
      "DID": "8"
    },
    {
      "POSTID": 2007,
      "E": "Vadakkekkad",
      "M": "വടക്കേക്കാട്",
      "PIN": "679562",
      "DID": "8"
    },
    {
      "POSTID": 2008,
      "E": "Kallur-Vadakkekkad",
      "M": "കല്ലൂര്‍-വടക്കേക്കാട്",
      "PIN": "679562",
      "DID": "8"
    },
    {
      "POSTID": 2009,
      "E": "Kochannur",
      "M": "കൊച്ചന്നൂര്‍",
      "PIN": "679562",
      "DID": "8"
    },
    {
      "POSTID": 2010,
      "E": "Vylathur",
      "M": "വൈലത്തൂര്‍",
      "PIN": "679563",
      "DID": "8"
    },
    {
      "POSTID": 2011,
      "E": "Nhamanghat",
      "M": "ഞമനേങ്ങാട്",
      "PIN": "679563",
      "DID": "8"
    },
    {
      "POSTID": 2012,
      "E": "Andathode",
      "M": "അണ്ടത്തോട്",
      "PIN": "679564",
      "DID": "8"
    },
    {
      "POSTID": 2013,
      "E": "Pazhur",
      "M": "പാഴൂര്‍",
      "PIN": "679571",
      "DID": "10"
    },
    {
      "POSTID": 2014,
      "E": "Karthala",
      "M": "കാര്‍ത്തല",
      "PIN": "679571",
      "DID": "10"
    },
    {
      "POSTID": 2015,
      "E": "Kuttipuram",
      "M": "കുറ്റിപ്പുറം",
      "PIN": "679571",
      "DID": "10"
    },
    {
      "POSTID": 2016,
      "E": "Irimbiliyam",
      "M": "ഇരിമ്പിളിയം",
      "PIN": "679572",
      "DID": "10"
    },
    {
      "POSTID": 2017,
      "E": "Nariparamba",
      "M": "നരിപ്പറമ്പ്",
      "PIN": "679573",
      "DID": "10"
    },
    {
      "POSTID": 2018,
      "E": "Athalur",
      "M": "അതളൂര്‍",
      "PIN": "679573",
      "DID": "10"
    },
    {
      "POSTID": 2019,
      "E": "Iswaramangalam",
      "M": "ഈശ്വരമംഗലം",
      "PIN": "679573",
      "DID": "10"
    },
    {
      "POSTID": 2020,
      "E": "Tavanur",
      "M": "തവനൂര്‍",
      "PIN": "679573",
      "DID": "10"
    },
    {
      "POSTID": 2021,
      "E": "Trikkanapuram",
      "M": "തൃക്കണാപുരം",
      "PIN": "679573",
      "DID": "10"
    },
    {
      "POSTID": 2022,
      "E": "Pidavannur",
      "M": "പിടാവന്നൂര്‍",
      "PIN": "679574",
      "DID": "10"
    },
    {
      "POSTID": 2023,
      "E": "Mookuthala",
      "M": "മൂക്കുതല",
      "PIN": "679574",
      "DID": "10"
    },
    {
      "POSTID": 2024,
      "E": "Nannamukku",
      "M": "നന്നംമുക്ക്",
      "PIN": "679575",
      "DID": "10"
    },
    {
      "POSTID": 2025,
      "E": "Nannamukku South",
      "M": "നന്നംമുക്ക് സൗത്ത്",
      "PIN": "679575",
      "DID": "10"
    },
    {
      "POSTID": 2026,
      "E": "Cheravallur",
      "M": "ചെറവല്ലൂര്‍",
      "PIN": "679575",
      "DID": "10"
    },
    {
      "POSTID": 2027,
      "E": "Ayilakkad",
      "M": "അയിലക്കാട്",
      "PIN": "679576",
      "DID": "10"
    },
    {
      "POSTID": 2028,
      "E": "Edapal",
      "M": "എടപ്പാള്‍",
      "PIN": "679576",
      "DID": "10"
    },
    {
      "POSTID": 2029,
      "E": "Sugapuram",
      "M": "ശുകപുരം",
      "PIN": "679576",
      "DID": "10"
    },
    {
      "POSTID": 2030,
      "E": "Perumparamba ",
      "M": "പെരുമ്പറമ്പ് ",
      "PIN": "679576",
      "DID": "10"
    },
    {
      "POSTID": 2031,
      "E": "Polpakkara",
      "M": "പൊല്‍പ്പാക്കര",
      "PIN": "679576",
      "DID": "10"
    },
    {
      "POSTID": 2032,
      "E": "Kololamba",
      "M": "കോലൊളമ്പ്",
      "PIN": "679576",
      "DID": "10"
    },
    {
      "POSTID": 2033,
      "E": "Ponani",
      "M": "പൊന്നാനി ",
      "PIN": "679577",
      "DID": "10"
    },
    {
      "POSTID": 2034,
      "E": "Mudur",
      "M": "മുതൂര്‍",
      "PIN": "679578",
      "DID": "10"
    },
    {
      "POSTID": 2035,
      "E": "Vattamkulam",
      "M": "വട്ടംകുളം",
      "PIN": "679578",
      "DID": "10"
    },
    {
      "POSTID": 2036,
      "E": "Pazhanji Malappuram",
      "M": "പഴഞ്ഞി",
      "PIN": "679579",
      "DID": "10"
    },
    {
      "POSTID": 2037,
      "E": "Palappetty",
      "M": "പാലപ്പെട്ടി",
      "PIN": "679579",
      "DID": "10"
    },
    {
      "POSTID": 2038,
      "E": "Gramam",
      "M": "ഗ്രാമം",
      "PIN": "679579",
      "DID": "10"
    },
    {
      "POSTID": 2039,
      "E": "Veliyancode",
      "M": "വെളിയങ്കോട്",
      "PIN": "679579",
      "DID": "10"
    },
    {
      "POSTID": 2040,
      "E": "Ayirur",
      "M": "അയിരൂര്‍",
      "PIN": "679580",
      "DID": "10"
    },
    {
      "POSTID": 2041,
      "E": "Perumpadappa",
      "M": "പെരുമ്പടപ്പ്",
      "PIN": "679580",
      "DID": "10"
    },
    {
      "POSTID": 2042,
      "E": "Maranchery",
      "M": "മാറഞ്ചേരി",
      "PIN": "679581",
      "DID": "10"
    },
    {
      "POSTID": 2043,
      "E": "Kaladi Mpm",
      "M": "കാലടി",
      "PIN": "679582",
      "DID": "10"
    },
    {
      "POSTID": 2044,
      "E": "Kadancheri",
      "M": "കാടഞ്ചേരി",
      "PIN": "679582",
      "DID": "10"
    },
    {
      "POSTID": 2045,
      "E": "Ponani Nagaram",
      "M": "പൊന്നാനി നഗരം",
      "PIN": "679583",
      "DID": "10"
    },
    {
      "POSTID": 2046,
      "E": "Purangu",
      "M": "പുറങ്ങ്",
      "PIN": "679584",
      "DID": "10"
    },
    {
      "POSTID": 2047,
      "E": "Kanhiramukku",
      "M": "കാഞ്ഞിരമുക്ക്",
      "PIN": "679584",
      "DID": "10"
    },
    {
      "POSTID": 2048,
      "E": "Kadavanad",
      "M": "കടവനാട്",
      "PIN": "679586",
      "DID": "10"
    },
    {
      "POSTID": 2049,
      "E": "Ponani South",
      "M": "പൊന്നാനി സൗത്ത്",
      "PIN": "679586",
      "DID": "10"
    },
    {
      "POSTID": 2050,
      "E": "Eramangalam",
      "M": "എരമംഗലം",
      "PIN": "679587",
      "DID": "10"
    },
    {
      "POSTID": 2051,
      "E": "Perassannur ",
      "M": "പേരശന്നൂര്‍",
      "PIN": "679571",
      "DID": "10"
    },
    {
      "POSTID": 2052,
      "E": "Biyyam ",
      "M": "ബിയ്യം",
      "PIN": "679576",
      "DID": "10"
    },
    {
      "POSTID": 2053,
      "E": "Painkannur ",
      "M": "പൈങ്കണ്ണൂര്‍",
      "PIN": "679571",
      "DID": "10"
    },
    {
      "POSTID": 2054,
      "E": "Othalur West",
      "M": "ഒതളൂര്‍ വെസ്റ്റ്",
      "PIN": "679591",
      "DID": "10"
    },
    {
      "POSTID": 2055,
      "E": "Kokkur-Malappuram",
      "M": "കോക്കൂര്‍",
      "PIN": "679591",
      "DID": "10"
    },
    {
      "POSTID": 2056,
      "E": "Naduvattom",
      "M": "നടുവട്ടം",
      "PIN": "679592",
      "DID": "10"
    },
    {
      "POSTID": 2057,
      "E": "Ayankalam",
      "M": "അയങ്കലം",
      "PIN": "679573",
      "DID": "10"
    },
    {
      "POSTID": 2058,
      "E": "Thiruvambady-Thrissur",
      "M": "",
      "PIN": "680022",
      "DID": "8"
    },
    {
      "POSTID": 2059,
      "E": "Thrissur",
      "M": "",
      "PIN": "680001",
      "DID": "8"
    },
    {
      "POSTID": 2060,
      "E": "Thrissur Central",
      "M": "",
      "PIN": "680001",
      "DID": "8"
    },
    {
      "POSTID": 2061,
      "E": "Round West Trissur",
      "M": "",
      "PIN": "680001",
      "DID": "10"
    },
    {
      "POSTID": 2062,
      "E": "Punkunnu",
      "M": "",
      "PIN": "680002",
      "DID": "8"
    },
    {
      "POSTID": 2063,
      "E": "Ayyanthole",
      "M": "",
      "PIN": "680003",
      "DID": "8"
    },
    {
      "POSTID": 2064,
      "E": "Ayyanthole North Ayyanthole",
      "M": "",
      "PIN": "680003",
      "DID": "8"
    },
    {
      "POSTID": 2065,
      "E": "Poothole",
      "M": "",
      "PIN": "680004",
      "DID": "8"
    },
    {
      "POSTID": 2066,
      "E": "West Fort",
      "M": "",
      "PIN": "680004",
      "DID": "8"
    },
    {
      "POSTID": 2067,
      "E": "Nellikunnu",
      "M": "",
      "PIN": "680005",
      "DID": "8"
    },
    {
      "POSTID": 2068,
      "E": "Thrissur East",
      "M": "",
      "PIN": "680005",
      "DID": "8"
    },
    {
      "POSTID": 2069,
      "E": "Ancheri",
      "M": "",
      "PIN": "680006",
      "DID": "8"
    },
    {
      "POSTID": 2070,
      "E": "Kuriachira",
      "M": "",
      "PIN": "680006",
      "DID": "8"
    },
    {
      "POSTID": 2071,
      "E": "Nehru Nagar",
      "M": "",
      "PIN": "680006",
      "DID": "8"
    },
    {
      "POSTID": 2072,
      "E": "Vadookara",
      "M": "",
      "PIN": "680007",
      "DID": "8"
    },
    {
      "POSTID": 2073,
      "E": "Kurkancherri",
      "M": "",
      "PIN": "680007",
      "DID": "8"
    },
    {
      "POSTID": 2074,
      "E": "Cherur",
      "M": "",
      "PIN": "680008",
      "DID": "8"
    },
    {
      "POSTID": 2075,
      "E": "Thrissur Engg.College",
      "M": "",
      "PIN": "680009",
      "DID": "8"
    },
    {
      "POSTID": 2076,
      "E": "Viyyur",
      "M": "",
      "PIN": "680010",
      "DID": "8"
    },
    {
      "POSTID": 2077,
      "E": "Kolazhy",
      "M": "കോലഴി",
      "PIN": "680010",
      "DID": "8"
    },
    {
      "POSTID": 2078,
      "E": "Kanattukara",
      "M": "",
      "PIN": "680011",
      "DID": "8"
    },
    {
      "POSTID": 2079,
      "E": "Pullazhi",
      "M": "",
      "PIN": "680012",
      "DID": "8"
    },
    {
      "POSTID": 2080,
      "E": "Kuttur",
      "M": "കുറ്റൂര്‍",
      "PIN": "680013",
      "DID": "8"
    },
    {
      "POSTID": 2081,
      "E": "Puthur-Thrissur",
      "M": "പുത്തൂര്‍-തൃശ്ശൂര്‍",
      "PIN": "680014",
      "DID": "8"
    },
    {
      "POSTID": 2082,
      "E": "Mannamangalam",
      "M": "മാന്ദാമംഗലം",
      "PIN": "680014",
      "DID": "8"
    },
    {
      "POSTID": 2083,
      "E": "Marottichal",
      "M": "മരോട്ടിച്ചാല്‍",
      "PIN": "680014",
      "DID": "8"
    },
    {
      "POSTID": 2084,
      "E": "Kuttanallur",
      "M": "കുട്ടനെല്ലൂര്‍",
      "PIN": "680014",
      "DID": "8"
    },
    {
      "POSTID": 2085,
      "E": "Ponnukara",
      "M": "പൊന്നൂക്കര",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2086,
      "E": "Vettukad",
      "M": "വെട്ടുകാട്",
      "PIN": "680014",
      "DID": "8"
    },
    {
      "POSTID": 2087,
      "E": "Kainoor",
      "M": "കൈനൂര്‍",
      "PIN": "680014",
      "DID": "8"
    },
    {
      "POSTID": 2088,
      "E": "Nedupuzha",
      "M": "",
      "PIN": "680015",
      "DID": "8"
    },
    {
      "POSTID": 2089,
      "E": "Veluthur",
      "M": "വെളുത്തൂര്‍",
      "PIN": "680012",
      "DID": "8"
    },
    {
      "POSTID": 2090,
      "E": "Manakodi",
      "M": "മനക്കൊടി",
      "PIN": "680012",
      "DID": "8"
    },
    {
      "POSTID": 2091,
      "E": "Peringavu",
      "M": "",
      "PIN": "680018",
      "DID": "8"
    },
    {
      "POSTID": 2092,
      "E": "Thrissur City",
      "M": "",
      "PIN": "680020",
      "DID": "8"
    },
    {
      "POSTID": 2093,
      "E": "Thrissur R.S",
      "M": "",
      "PIN": "680021",
      "DID": "8"
    },
    {
      "POSTID": 2094,
      "E": "Chiyyaram",
      "M": "",
      "PIN": "680026",
      "DID": "8"
    },
    {
      "POSTID": 2095,
      "E": "Palisseri",
      "M": "പാലിശ്ശേരി",
      "PIN": "680027",
      "DID": "8"
    },
    {
      "POSTID": 2096,
      "E": "Kanimangalam",
      "M": "",
      "PIN": "680027",
      "DID": "8"
    },
    {
      "POSTID": 2097,
      "E": "Chevoor",
      "M": "ചെവ്വൂര്‍",
      "PIN": "680027",
      "DID": "8"
    },
    {
      "POSTID": 2098,
      "E": "Kattilapoovam",
      "M": "കട്ടിലപൂവ്വം",
      "PIN": "680028",
      "DID": "8"
    },
    {
      "POSTID": 2099,
      "E": "Kuruchikkara",
      "M": "കുറുച്ചിക്കര",
      "PIN": "680028",
      "DID": "8"
    },
    {
      "POSTID": 2100,
      "E": "Kundukad",
      "M": "കുണ്ടുകാട്",
      "PIN": "680028",
      "DID": "8"
    },
    {
      "POSTID": 2101,
      "E": "Guruvayur",
      "M": "ഗുരുവായൂര്‍ ",
      "PIN": "680101",
      "DID": "8"
    },
    {
      "POSTID": 2102,
      "E": "Guruvayur West",
      "M": "ഗുരുവായൂര്‍ വെസ്റ്റ്",
      "PIN": "680101",
      "DID": "8"
    },
    {
      "POSTID": 2103,
      "E": "Guruvayur Temple",
      "M": "ഗുരുവായൂര്‍-ടെമ്പിള്‍",
      "PIN": "680101",
      "DID": "8"
    },
    {
      "POSTID": 2104,
      "E": "Thiruvenkitam",
      "M": "തിരുവെങ്കിടം",
      "PIN": "680101",
      "DID": "8"
    },
    {
      "POSTID": 2105,
      "E": "Ariyannur",
      "M": "അരിയന്നൂര്‍",
      "PIN": "680102",
      "DID": "8"
    },
    {
      "POSTID": 2106,
      "E": "Kandanasseri",
      "M": "കണ്ടാണശ്ശേരി",
      "PIN": "680102",
      "DID": "8"
    },
    {
      "POSTID": 2107,
      "E": "Puthanpalli",
      "M": "പുത്തമ്പല്ലി",
      "PIN": "680103",
      "DID": "8"
    },
    {
      "POSTID": 2108,
      "E": "Iringapuram",
      "M": "ഇരിങ്ങപ്പുറം",
      "PIN": "680103",
      "DID": "8"
    },
    {
      "POSTID": 2109,
      "E": "Brahmakulam",
      "M": "ബ്രഹ്മകുളം",
      "PIN": "680104",
      "DID": "8"
    },
    {
      "POSTID": 2110,
      "E": "Nemmini",
      "M": "നെന്മിനി",
      "PIN": "680104",
      "DID": "8"
    },
    {
      "POSTID": 2111,
      "E": "Thaikkad",
      "M": "തൈക്കാട്",
      "PIN": "680104",
      "DID": "8"
    },
    {
      "POSTID": 2112,
      "E": "Irinjalakuda",
      "M": "ഇരിങ്ങാലക്കുട",
      "PIN": "680121",
      "DID": "8"
    },
    {
      "POSTID": 2113,
      "E": "Edakulam",
      "M": "എടക്കുളം",
      "PIN": "680688",
      "DID": "8"
    },
    {
      "POSTID": 2114,
      "E": "Edathirinji",
      "M": "എടതിരിഞ്ഞി",
      "PIN": "680122",
      "DID": "8"
    },
    {
      "POSTID": 2115,
      "E": "Karumathara",
      "M": "കരുമാത്ര",
      "PIN": "680123",
      "DID": "8"
    },
    {
      "POSTID": 2116,
      "E": "Konathukunnu",
      "M": "കോണത്തുകുന്ന്",
      "PIN": "680123",
      "DID": "8"
    },
    {
      "POSTID": 2117,
      "E": "Vallivattom",
      "M": "വള്ളിവട്ടം",
      "PIN": "680123",
      "DID": "8"
    },
    {
      "POSTID": 2118,
      "E": "Porathissery",
      "M": "പൊറത്തിശ്ശേരി",
      "PIN": "680125",
      "DID": "8"
    },
    {
      "POSTID": 2119,
      "E": "Irinjalakuda North",
      "M": "ഇരിങ്ങാലക്കുട നോര്‍ത്ത്",
      "PIN": "680125",
      "DID": "8"
    },
    {
      "POSTID": 2120,
      "E": "Nandikkara",
      "M": "നന്ദിക്കര",
      "PIN": "680301",
      "DID": "8"
    },
    {
      "POSTID": 2121,
      "E": "Pazhayi",
      "M": "പാഴായി",
      "PIN": "680301",
      "DID": "8"
    },
    {
      "POSTID": 2122,
      "E": "Pudukad",
      "M": "പുതുക്കാട്",
      "PIN": "680301",
      "DID": "8"
    },
    {
      "POSTID": 2123,
      "E": "Chittissery",
      "M": "ചിറ്റിശ്ശേരി",
      "PIN": "680301",
      "DID": "8"
    },
    {
      "POSTID": 2124,
      "E": "Nemminikara",
      "M": "നെന്‍മണിക്കര",
      "PIN": "680301",
      "DID": "8"
    },
    {
      "POSTID": 2125,
      "E": "Alagappa nagar",
      "M": "അളഗപ്പനഗര്‍",
      "PIN": "680302",
      "DID": "8"
    },
    {
      "POSTID": 2126,
      "E": "Vattanathara",
      "M": "വട്ടണാത്തറ",
      "PIN": "680302",
      "DID": "8"
    },
    {
      "POSTID": 2127,
      "E": "Varandarapilly",
      "M": "വരന്തരപ്പിള്ളി",
      "PIN": "680303",
      "DID": "8"
    },
    {
      "POSTID": 2128,
      "E": "Velupadam",
      "M": "വേലുപാടം",
      "PIN": "680303",
      "DID": "8"
    },
    {
      "POSTID": 2129,
      "E": "Palappilly",
      "M": "പാലപ്പിള്ളി",
      "PIN": "680304",
      "DID": "8"
    },
    {
      "POSTID": 2130,
      "E": "Chimoni Dam",
      "M": "ചിമ്മിനി ഡാം",
      "PIN": "680304",
      "DID": "8"
    },
    {
      "POSTID": 2131,
      "E": "Nellai-Trichur",
      "M": "നെല്ലായി-തൃശ്ശൂര്‍",
      "PIN": "680305",
      "DID": "8"
    },
    {
      "POSTID": 2132,
      "E": "Ollur",
      "M": "ഒല്ലൂര്‍",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2133,
      "E": "Ollur - North .N.D",
      "M": "",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2134,
      "E": "Perinchery",
      "M": "പെരിഞ്ചേരി",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2135,
      "E": "Konikara",
      "M": "കോനിക്കര",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2136,
      "E": "Thalore",
      "M": "തലോര്‍",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2137,
      "E": "Annallur ",
      "M": "അണ്ണല്ലൂര്‍",
      "PIN": "680731",
      "DID": "8"
    },
    {
      "POSTID": 2138,
      "E": "Chalakudi",
      "M": "ചാലക്കുടി",
      "PIN": "680307",
      "DID": "8"
    },
    {
      "POSTID": 2139,
      "E": "Kottat",
      "M": "കൊറ്റാട്ട്",
      "PIN": "680307",
      "DID": "8"
    },
    {
      "POSTID": 2140,
      "E": "Potta",
      "M": "പോട്ട",
      "PIN": "680722",
      "DID": "8"
    },
    {
      "POSTID": 2141,
      "E": "Nalukettu",
      "M": "നാലുകെട്ട്",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2142,
      "E": "Mambra",
      "M": "മാമ്പ്ര",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2143,
      "E": "Erayamkudy",
      "M": "എരയാംകുടി",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2144,
      "E": "Kathikutam",
      "M": "കാതികുടം",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2145,
      "E": "Koratti",
      "M": "കൊരട്ടി",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2146,
      "E": "Koratty Kizhakkemuri",
      "M": "കൊരട്ടി കിഴക്കുംമുറി",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2147,
      "E": "Koratty South",
      "M": "കൊരട്ടി സൗത്ത്",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2148,
      "E": "Kinfra Park-Koratty",
      "M": "ഖന്നനഗര്‍-കൊരട്ടി",
      "PIN": "680309",
      "DID": "8"
    },
    {
      "POSTID": 2149,
      "E": "Parappukkara",
      "M": "പറപ്പൂക്കര",
      "PIN": "680310",
      "DID": "8"
    },
    {
      "POSTID": 2150,
      "E": "Thottippal",
      "M": "തൊട്ടിപ്പാള്‍",
      "PIN": "680310",
      "DID": "8"
    },
    {
      "POSTID": 2151,
      "E": "Kunnappilly",
      "M": "കുന്നപ്പിള്ളി",
      "PIN": "680311",
      "DID": "8"
    },
    {
      "POSTID": 2152,
      "E": "Koovakkattukunnu",
      "M": "കൂവക്കാട്ടുകുന്ന്",
      "PIN": "680311",
      "DID": "8"
    },
    {
      "POSTID": 2153,
      "E": "Meloor",
      "M": "മേലൂര്‍",
      "PIN": "680311",
      "DID": "8"
    },
    {
      "POSTID": 2154,
      "E": "Muppliyam",
      "M": "മുപ്ലിയം",
      "PIN": "680312",
      "DID": "8"
    },
    {
      "POSTID": 2155,
      "E": "Inchakundu",
      "M": "ഇഞ്ചക്കുണ്ട്",
      "PIN": "680312",
      "DID": "8"
    },
    {
      "POSTID": 2156,
      "E": "Chengaloor",
      "M": "ചെങ്ങാലൂര്‍",
      "PIN": "680312",
      "DID": "8"
    },
    {
      "POSTID": 2157,
      "E": "Avinissery",
      "M": "അവിണിശ്ശേരി",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2158,
      "E": "Thrikkur",
      "M": "തൃക്കൂര്‍",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2159,
      "E": "Kadukutty ",
      "M": "കാടുകുറ്റി",
      "PIN": "680309",
      "DID": "8"
    },
    {
      "POSTID": 2160,
      "E": "Murinor Vadakkummuri",
      "M": "മുരിങ്ങൂര്‍ വടക്കുംമുറി",
      "PIN": "680309",
      "DID": "8"
    },
    {
      "POSTID": 2161,
      "E": "Muttithadi",
      "M": "മുട്ടിത്തടി",
      "PIN": "680317",
      "DID": "8"
    },
    {
      "POSTID": 2162,
      "E": "Kallur",
      "M": "കല്ലൂര്‍",
      "PIN": "680317",
      "DID": "8"
    },
    {
      "POSTID": 2163,
      "E": "Nandipulam",
      "M": "നന്തിപുലം",
      "PIN": "680319",
      "DID": "8"
    },
    {
      "POSTID": 2164,
      "E": "Marathakkara",
      "M": "മരത്താക്കര",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2165,
      "E": "Cheruvaloor",
      "M": "ചെറുവാളൂര്‍",
      "PIN": "680308",
      "DID": "8"
    },
    {
      "POSTID": 2166,
      "E": "Ollur-Thaikkattussery",
      "M": "ഒല്ലൂര്‍-തൈക്കാട്ടുശ്ശേരി",
      "PIN": "680306",
      "DID": "8"
    },
    {
      "POSTID": 2167,
      "E": "Anandapuram",
      "M": "ആനന്ദപുരം",
      "PIN": "680305",
      "DID": "8"
    },
    {
      "POSTID": 2168,
      "E": "Annanad",
      "M": "അന്നനാട്",
      "PIN": "680309",
      "DID": "8"
    },
    {
      "POSTID": 2169,
      "E": "Varakara",
      "M": "വരാക്കര",
      "PIN": "680302",
      "DID": "8"
    },
    {
      "POSTID": 2170,
      "E": "Eyyal",
      "M": "ഇയ്യാല്‍",
      "PIN": "680501",
      "DID": "8"
    },
    {
      "POSTID": 2171,
      "E": "Eranellur",
      "M": "എരനെല്ലൂര്‍",
      "PIN": "680501",
      "DID": "8"
    },
    {
      "POSTID": 2172,
      "E": "Chiranellur",
      "M": "ചിറനെല്ലൂര്‍",
      "PIN": "680501",
      "DID": "8"
    },
    {
      "POSTID": 2173,
      "E": "Chemmanthatta",
      "M": "ചെമ്മന്തട്ട",
      "PIN": "680501",
      "DID": "8"
    },
    {
      "POSTID": 2174,
      "E": "Kecheri",
      "M": "കേച്ചേരി",
      "PIN": "680501",
      "DID": "8"
    },
    {
      "POSTID": 2175,
      "E": "Thalakkottukara",
      "M": "തലക്കോട്ടുകര",
      "PIN": "680501",
      "DID": "8"
    },
    {
      "POSTID": 2176,
      "E": "Choondal",
      "M": "ചൂണ്ടല്‍",
      "PIN": "680502",
      "DID": "8"
    },
    {
      "POSTID": 2177,
      "E": "Parayil Bazar",
      "M": "പാറയില്‍ ബസാര്‍",
      "PIN": "680503",
      "DID": "8"
    },
    {
      "POSTID": 2178,
      "E": "Akathiyoor",
      "M": "അകതിയൂര്‍",
      "PIN": "680519",
      "DID": "8"
    },
    {
      "POSTID": 2179,
      "E": "Kunnamkulam",
      "M": "കുന്നംകുളം",
      "PIN": "680503",
      "DID": "8"
    },
    {
      "POSTID": 2180,
      "E": "Chowannur",
      "M": "ചൊവ്വന്നൂര്‍",
      "PIN": "680517",
      "DID": "8"
    },
    {
      "POSTID": 2181,
      "E": "Koonamoochi",
      "M": "കൂനംമൂച്ചി",
      "PIN": "680504",
      "DID": "8"
    },
    {
      "POSTID": 2182,
      "E": "Pookode",
      "M": "പൂക്കോട്",
      "PIN": "680505",
      "DID": "8"
    },
    {
      "POSTID": 2183,
      "E": "Kaveedu",
      "M": "കാവീട്",
      "PIN": "680505",
      "DID": "8"
    },
    {
      "POSTID": 2184,
      "E": "Kottapadi",
      "M": "കോട്ടപ്പടി",
      "PIN": "680505",
      "DID": "8"
    },
    {
      "POSTID": 2185,
      "E": "Thamarayur",
      "M": "താമരയൂര്‍",
      "PIN": "680505",
      "DID": "8"
    },
    {
      "POSTID": 2186,
      "E": "Palayur",
      "M": "പാലയൂര്‍",
      "PIN": "680506",
      "DID": "8"
    },
    {
      "POSTID": 2187,
      "E": "Blangad",
      "M": "ബ്ലാങ്ങാട്",
      "PIN": "680506",
      "DID": "8"
    },
    {
      "POSTID": 2188,
      "E": "Muduvattur",
      "M": "മുതുവട്ടൂര്‍",
      "PIN": "680506",
      "DID": "8"
    },
    {
      "POSTID": 2189,
      "E": "Kuranjiyur",
      "M": "കുരഞ്ഞിയൂര്‍",
      "PIN": "680506",
      "DID": "8"
    },
    {
      "POSTID": 2190,
      "E": "Chavakkad",
      "M": "ചാവക്കാട്",
      "PIN": "680506",
      "DID": "8"
    },
    {
      "POSTID": 2191,
      "E": "Perakam",
      "M": "പേരകം",
      "PIN": "680506",
      "DID": "8"
    },
    {
      "POSTID": 2192,
      "E": "Pavaratty",
      "M": "പാവറട്ടി",
      "PIN": "680507",
      "DID": "8"
    },
    {
      "POSTID": 2193,
      "E": "Maruthayur",
      "M": "മരുതയൂര്‍",
      "PIN": "680507",
      "DID": "8"
    },
    {
      "POSTID": 2194,
      "E": "Venmanad",
      "M": "വെന്മനാട്",
      "PIN": "680507",
      "DID": "8"
    },
    {
      "POSTID": 2195,
      "E": "Puvathur",
      "M": "പൂവത്തൂര്‍",
      "PIN": "680508",
      "DID": "8"
    },
    {
      "POSTID": 2196,
      "E": "Annakara",
      "M": "അന്നകര",
      "PIN": "680508",
      "DID": "8"
    },
    {
      "POSTID": 2197,
      "E": "Peruvallur",
      "M": "പെരുവല്ലൂര്‍",
      "PIN": "680508",
      "DID": "8"
    },
    {
      "POSTID": 2198,
      "E": "Thirunellur",
      "M": "തിരുനെല്ലൂര്‍",
      "PIN": "680508",
      "DID": "8"
    },
    {
      "POSTID": 2199,
      "E": "Mullasseri",
      "M": "മുല്ലശ്ശേരി",
      "PIN": "680509",
      "DID": "8"
    },
    {
      "POSTID": 2200,
      "E": "Enamakkal",
      "M": "ഏനാമാക്കല്‍",
      "PIN": "680510",
      "DID": "8"
    },
    {
      "POSTID": 2201,
      "E": "Kannoth",
      "M": "കണ്ണോത്ത്",
      "PIN": "680510",
      "DID": "8"
    },
    {
      "POSTID": 2202,
      "E": "Venkitangu",
      "M": "വെങ്കിടങ്ങ്",
      "PIN": "680510",
      "DID": "8"
    },
    {
      "POSTID": 2203,
      "E": "Elavally",
      "M": "എളവള്ളി",
      "PIN": "680511",
      "DID": "8"
    },
    {
      "POSTID": 2204,
      "E": "Elavally South",
      "M": "എളവള്ളി സൗത്ത്",
      "PIN": "680511",
      "DID": "8"
    },
    {
      "POSTID": 2205,
      "E": "Kakkasseri",
      "M": "കാക്കശ്ശേരി",
      "PIN": "680511",
      "DID": "8"
    },
    {
      "POSTID": 2206,
      "E": "Chittattukara",
      "M": "ചിറ്റാട്ടുകര",
      "PIN": "680511",
      "DID": "8"
    },
    {
      "POSTID": 2207,
      "E": "Madu",
      "M": "മാട്",
      "PIN": "680512",
      "DID": "8"
    },
    {
      "POSTID": 2208,
      "E": "Orumanayur",
      "M": "ഒരുമനയൂര്‍",
      "PIN": "680512",
      "DID": "8"
    },
    {
      "POSTID": 2209,
      "E": "Vattekad",
      "M": "വട്ടേക്കാട്",
      "PIN": "680512",
      "DID": "8"
    },
    {
      "POSTID": 2210,
      "E": "Toyakavu",
      "M": "തൊയക്കാവ്",
      "PIN": "680513",
      "DID": "8"
    },
    {
      "POSTID": 2211,
      "E": "Kadappuram",
      "M": "കടപ്പുറം",
      "PIN": "680514",
      "DID": "8"
    },
    {
      "POSTID": 2212,
      "E": "Edakkazhiyoor",
      "M": "എടക്കഴിയൂര്‍",
      "PIN": "680515",
      "DID": "8"
    },
    {
      "POSTID": 2213,
      "E": "Thiruvatra",
      "M": "തിരുവത്ര",
      "PIN": "680516",
      "DID": "8"
    },
    {
      "POSTID": 2214,
      "E": "Kanippayyur",
      "M": "കാണിപ്പയ്യൂര്‍",
      "PIN": "680517",
      "DID": "8"
    },
    {
      "POSTID": 2215,
      "E": "Chemmannur",
      "M": "ചെമ്മണ്ണൂര്‍",
      "PIN": "680517",
      "DID": "8"
    },
    {
      "POSTID": 2216,
      "E": "Porkolangad",
      "M": "പോര്‍കുളങ്ങാട്",
      "PIN": "680517",
      "DID": "8"
    },
    {
      "POSTID": 2217,
      "E": "Mannalamkunnu",
      "M": "മന്ദലാംകുന്ന്",
      "PIN": "680518",
      "DID": "8"
    },
    {
      "POSTID": 2218,
      "E": "Agalad",
      "M": "അകലാട്",
      "PIN": "680518",
      "DID": "8"
    },
    {
      "POSTID": 2219,
      "E": "Edakara-TCR",
      "M": "എടക്കര",
      "PIN": "680518",
      "DID": "8"
    },
    {
      "POSTID": 2220,
      "E": "Akkikavu",
      "M": "അക്കിക്കാവ്",
      "PIN": "680519",
      "DID": "8"
    },
    {
      "POSTID": 2221,
      "E": "Karikkad",
      "M": "കരിക്കാട്",
      "PIN": "680519",
      "DID": "8"
    },
    {
      "POSTID": 2222,
      "E": "Perumpilavu",
      "M": "പെരുമ്പിലാവ്",
      "PIN": "680519",
      "DID": "8"
    },
    {
      "POSTID": 2223,
      "E": "Thippilassery",
      "M": "തിപ്പിലശ്ശേരി",
      "PIN": "680519",
      "DID": "8"
    },
    {
      "POSTID": 2224,
      "E": "Thozhiyur",
      "M": "തൊഴിയൂര്‍",
      "PIN": "680520",
      "DID": "8"
    },
    {
      "POSTID": 2225,
      "E": "Arthat",
      "M": "ആര്‍ത്താറ്റ്",
      "PIN": "680521",
      "DID": "8"
    },
    {
      "POSTID": 2226,
      "E": "Paluvai",
      "M": "പാലുവായ്",
      "PIN": "680522",
      "DID": "8"
    },
    {
      "POSTID": 2227,
      "E": "Chakkumkandam",
      "M": "ചക്കംകണ്ടം",
      "PIN": "680522",
      "DID": "8"
    },
    {
      "POSTID": 2228,
      "E": "Anjur Kunnamkulam",
      "M": "അഞ്ഞൂര്‍-കുന്നംകുളം",
      "PIN": "680523",
      "DID": "8"
    },
    {
      "POSTID": 2229,
      "E": "Kizhur",
      "M": "കിഴൂര്‍",
      "PIN": "680523",
      "DID": "8"
    },
    {
      "POSTID": 2230,
      "E": "Kunnamkulam - city",
      "M": "കുന്നംകുളം സിറ്റി",
      "PIN": "680523",
      "DID": "8"
    },
    {
      "POSTID": 2231,
      "E": "Chittanjur",
      "M": "ചിറ്റഞ്ഞൂര്‍",
      "PIN": "680523",
      "DID": "8"
    },
    {
      "POSTID": 2232,
      "E": "Padoor",
      "M": "പാടൂര്‍",
      "PIN": "680524",
      "DID": "8"
    },
    {
      "POSTID": 2233,
      "E": "Mundur",
      "M": "മുണ്ട‍ൂര്‍",
      "PIN": "680541",
      "DID": "8"
    },
    {
      "POSTID": 2234,
      "E": "Choolissery",
      "M": "ചൂലിശ്ശേരി",
      "PIN": "680541",
      "DID": "8"
    },
    {
      "POSTID": 2235,
      "E": "Pazhanji",
      "M": "പഴഞ്ഞി",
      "PIN": "680542",
      "DID": "8"
    },
    {
      "POSTID": 2236,
      "E": "Mangad Pazhanji",
      "M": "മങ്ങാട് പഴഞ്ഞി",
      "PIN": "680542",
      "DID": "8"
    },
    {
      "POSTID": 2237,
      "E": "Perumthuruthy",
      "M": "പെരുന്തുരുത്തി",
      "PIN": "680542",
      "DID": "8"
    },
    {
      "POSTID": 2238,
      "E": "Porkulam",
      "M": "പോര്‍ക്കുളം",
      "PIN": "680542",
      "DID": "8"
    },
    {
      "POSTID": 2239,
      "E": "Kadavallur",
      "M": "കടവല്ലൂര്‍",
      "PIN": "680543",
      "DID": "8"
    },
    {
      "POSTID": 2240,
      "E": "Korattikara",
      "M": "കൊരട്ടിക്കര",
      "PIN": "680543",
      "DID": "8"
    },
    {
      "POSTID": 2241,
      "E": "Kattakampal",
      "M": "കാട്ടകാമ്പാല്‍",
      "PIN": "680544",
      "DID": "8"
    },
    {
      "POSTID": 2242,
      "E": "Pengamuck",
      "M": "പെങ്ങാമുക്ക്",
      "PIN": "680544",
      "DID": "8"
    },
    {
      "POSTID": 2243,
      "E": "Peramangalam",
      "M": "പേരാമംഗലം",
      "PIN": "680545",
      "DID": "8"
    },
    {
      "POSTID": 2244,
      "E": "Kaiparambu",
      "M": "കൈപ്പറമ്പ്",
      "PIN": "680546",
      "DID": "8"
    },
    {
      "POSTID": 2245,
      "E": "Avanur",
      "M": "അവണൂര്‍",
      "PIN": "680541",
      "DID": "8"
    },
    {
      "POSTID": 2246,
      "E": "Anjur Mundur",
      "M": "അഞ്ഞൂര്‍ - മുണ്ട‍ൂര്‍",
      "PIN": "680541",
      "DID": "8"
    },
    {
      "POSTID": 2247,
      "E": "Puranattukara",
      "M": "പുറനാട്ടുകര",
      "PIN": "680551",
      "DID": "8"
    },
    {
      "POSTID": 2248,
      "E": "Chittilappilly",
      "M": "ചിറ്റിലപ്പിള്ളി",
      "PIN": "680551",
      "DID": "8"
    },
    {
      "POSTID": 2249,
      "E": "Parappur",
      "M": "പറപ്പൂര്‍",
      "PIN": "680552",
      "DID": "8"
    },
    {
      "POSTID": 2250,
      "E": "Pathiyakulangara",
      "M": "പതിയാര്‍കുളങ്ങര",
      "PIN": "680552",
      "DID": "8"
    },
    {
      "POSTID": 2251,
      "E": "Edakkalathur",
      "M": "ഇടക്കളത്തൂര്‍",
      "PIN": "680552",
      "DID": "8"
    },
    {
      "POSTID": 2252,
      "E": "Ponnore",
      "M": "പോന്നോര്‍",
      "PIN": "680552",
      "DID": "8"
    },
    {
      "POSTID": 2253,
      "E": "Tholur",
      "M": "തോളൂര്‍",
      "PIN": "680552",
      "DID": "8"
    },
    {
      "POSTID": 2254,
      "E": "Puzhakkal",
      "M": "പുഴയ്ക്കല്‍",
      "PIN": "680553",
      "DID": "8"
    },
    {
      "POSTID": 2255,
      "E": "Amalanagar",
      "M": "അമലാനഗര്‍",
      "PIN": "680555",
      "DID": "8"
    },
    {
      "POSTID": 2256,
      "E": "Adat",
      "M": "അടാട്ട്",
      "PIN": "680551",
      "DID": "8"
    },
    {
      "POSTID": 2257,
      "E": "Pootharakkal",
      "M": "പൂത്തറയ്ക്കല്‍",
      "PIN": "680561",
      "DID": "8"
    },
    {
      "POSTID": 2258,
      "E": "Cherpu",
      "M": "ചേര്‍പ്പ്",
      "PIN": "680561",
      "DID": "8"
    },
    {
      "POSTID": 2259,
      "E": "Arattupuzha",
      "M": "ആറാട്ടുപുഴ",
      "PIN": "680562",
      "DID": "8"
    },
    {
      "POSTID": 2260,
      "E": "Urakam",
      "M": "ഊരകം",
      "PIN": "680562",
      "DID": "8"
    },
    {
      "POSTID": 2261,
      "E": "Vallachira",
      "M": "വല്ലച്ചിറ",
      "PIN": "680562",
      "DID": "8"
    },
    {
      "POSTID": 2262,
      "E": "Ammadam",
      "M": "അമ്മാടം",
      "PIN": "680563",
      "DID": "8"
    },
    {
      "POSTID": 2263,
      "E": "Pazhuvil",
      "M": "പഴുവില്‍",
      "PIN": "680564",
      "DID": "8"
    },
    {
      "POSTID": 2264,
      "E": "Pazhuvil West",
      "M": "പഴുവില്‍ വെസ്റ്റ്",
      "PIN": "680564",
      "DID": "8"
    },
    {
      "POSTID": 2265,
      "E": "Inchamudi ",
      "M": "ഇഞ്ചമുടി",
      "PIN": "680564",
      "DID": "8"
    },
    {
      "POSTID": 2266,
      "E": "Kurumbilavu",
      "M": "കുറുമ്പിലാവ്",
      "PIN": "680564",
      "DID": "8"
    },
    {
      "POSTID": 2267,
      "E": "Peringottukara",
      "M": "പെരിങ്ങോട്ടുകര",
      "PIN": "680565",
      "DID": "8"
    },
    {
      "POSTID": 2268,
      "E": "Thirannikavu",
      "M": "",
      "PIN": "680565",
      "DID": "8"
    },
    {
      "POSTID": 2269,
      "E": "Nattika",
      "M": "നാട്ടിക ",
      "PIN": "680566",
      "DID": "8"
    },
    {
      "POSTID": 2270,
      "E": "Valapad",
      "M": "വലപ്പാട്",
      "PIN": "680567",
      "DID": "8"
    },
    {
      "POSTID": 2271,
      "E": "Valapad Beach",
      "M": "വലപ്പാട് ബീച്ച്",
      "PIN": "680567",
      "DID": "8"
    },
    {
      "POSTID": 2272,
      "E": "Karayamvattam",
      "M": "കരയാംവട്ടം",
      "PIN": "680567",
      "DID": "8"
    },
    {
      "POSTID": 2273,
      "E": "Chulur",
      "M": "ചൂലൂര്‍",
      "PIN": "680567",
      "DID": "8"
    },
    {
      "POSTID": 2274,
      "E": "Triprayar",
      "M": "തൃപ്രയാര്‍",
      "PIN": "680567",
      "DID": "8"
    },
    {
      "POSTID": 2275,
      "E": "Edamuttam",
      "M": "എടമുട്ടം",
      "PIN": "680568",
      "DID": "8"
    },
    {
      "POSTID": 2276,
      "E": "Ign{¼w",
      "M": "കഴിമ്പ്രം",
      "PIN": "680568",
      "DID": "8"
    },
    {
      "POSTID": 2277,
      "E": "Edasseri",
      "M": "ഇടശ്ശേരി",
      "PIN": "680569",
      "DID": "8"
    },
    {
      "POSTID": 2278,
      "E": "Thambankadavu",
      "M": "താമ്പാംകടവ്",
      "PIN": "680569",
      "DID": "8"
    },
    {
      "POSTID": 2279,
      "E": "Talikulam",
      "M": "തളിക്കുളം",
      "PIN": "680569",
      "DID": "8"
    },
    {
      "POSTID": 2280,
      "E": "Vadakkummuri",
      "M": "വടക്കുംമുറി",
      "PIN": "680570",
      "DID": "8"
    },
    {
      "POSTID": 2281,
      "E": "Kizhakkummuri‍",
      "M": "കിഴക്കുംമുറി",
      "PIN": "680571",
      "DID": "8"
    },
    {
      "POSTID": 2282,
      "E": "Chazhur",
      "M": "ചാഴൂര്‍",
      "PIN": "680571",
      "DID": "8"
    },
    {
      "POSTID": 2283,
      "E": "Nattika Beach",
      "M": "നാട്ടിക ബീച്ച്",
      "PIN": "680566",
      "DID": "8"
    },
    {
      "POSTID": 2284,
      "E": "Cherpu Padinjattummuri",
      "M": "ചേര്‍പ്പ് പടിഞ്ഞാറ്റുമുറി",
      "PIN": "680573",
      "DID": "8"
    },
    {
      "POSTID": 2285,
      "E": "Kodannur",
      "M": "കോടന്നൂര്‍",
      "PIN": "680563",
      "DID": "8"
    },
    {
      "POSTID": 2286,
      "E": "Paralam",
      "M": "പാറളം",
      "PIN": "680563",
      "DID": "8"
    },
    {
      "POSTID": 2287,
      "E": "Poomala",
      "M": "പൂമല",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2288,
      "E": "Minalur",
      "M": "മിണാലൂര്‍",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2289,
      "E": "Mulagunnathukavu",
      "M": "മുളകുന്നത്തുകാവ്",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2290,
      "E": "Peringandur",
      "M": "പെരിങ്ങണ്ട‍ൂര്‍",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2291,
      "E": "Pottore",
      "M": "പോട്ടോര്‍",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2292,
      "E": "Chottupara",
      "M": "ചോറ്റുപാറ",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2293,
      "E": "Thangalur ",
      "M": "തങ്ങാലൂര്‍",
      "PIN": "680596",
      "DID": "8"
    },
    {
      "POSTID": 2294,
      "E": "Tirur",
      "M": "തിരൂര്‍",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2295,
      "E": "Wadakancheri-Thrissur",
      "M": "വടക്കാഞ്ചേരി",
      "PIN": "680582",
      "DID": "8"
    },
    {
      "POSTID": 2296,
      "E": "Mullurkara",
      "M": "മുള്ളൂര്‍ക്കര",
      "PIN": "680583",
      "DID": "8"
    },
    {
      "POSTID": 2297,
      "E": "Irunilamcode",
      "M": "ഇരുനിലംകോട്",
      "PIN": "680583",
      "DID": "8"
    },
    {
      "POSTID": 2298,
      "E": "Erumapetty",
      "M": "എരുമപ്പെട്ടി",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2299,
      "E": "Kuttanchery",
      "M": "കുട്ടഞ്ചേരി",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2300,
      "E": "Kadande",
      "M": "കടങ്ങോട്",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2301,
      "E": "Nelluvaya",
      "M": "നെല്ലുവായ്",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2302,
      "E": "Vellarakkad",
      "M": "വെള്ളറക്കാട്",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2303,
      "E": "Kottapuram Wadakancherry",
      "M": "കോട്ടപ്പുറം വടക്കാഞ്ചേരി",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2304,
      "E": "Thayyur",
      "M": "തയ്യൂര്‍",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2305,
      "E": "Pulakad",
      "M": "പിലക്കാട്",
      "PIN": "680585",
      "DID": "8"
    },
    {
      "POSTID": 2306,
      "E": "Varavur",
      "M": "വരവൂര്‍",
      "PIN": "680585",
      "DID": "8"
    },
    {
      "POSTID": 2307,
      "E": "Kumarapanal",
      "M": "കുമരപ്പനാല്‍",
      "PIN": "680585",
      "DID": "8"
    },
    {
      "POSTID": 2308,
      "E": "Tali",
      "M": "തളി",
      "PIN": "680585",
      "DID": "8"
    },
    {
      "POSTID": 2309,
      "E": "Pangarappilly",
      "M": "പങ്ങാരപ്പിള്ളി",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2310,
      "E": "Pulakode",
      "M": "പുലാക്കോട്",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2311,
      "E": "Elanad",
      "M": "എളനാട്",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2312,
      "E": "Kaliyarode",
      "M": "കാളിയാറോഡ്",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2313,
      "E": "Kurumala",
      "M": "കുറുമല",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2314,
      "E": "Thozhupadam",
      "M": "തൊഴുപ്പാടം",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2315,
      "E": "Venganellur",
      "M": "വെങ്ങാനെല്ലൂര്‍",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2316,
      "E": "Chelakara",
      "M": "ചേലക്കര",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2317,
      "E": "Pazhayannur",
      "M": "പഴയന്നൂര്‍",
      "PIN": "680587",
      "DID": "8"
    },
    {
      "POSTID": 2318,
      "E": "Vadakethara",
      "M": "വടക്കേത്തറ",
      "PIN": "680587",
      "DID": "8"
    },
    {
      "POSTID": 2319,
      "E": "Kumbalakode",
      "M": "കുമ്പളക്കോട്",
      "PIN": "680587",
      "DID": "8"
    },
    {
      "POSTID": 2320,
      "E": "Kallepadam",
      "M": "കല്ലേപ്പാടം",
      "PIN": "680587",
      "DID": "8"
    },
    {
      "POSTID": 2321,
      "E": "Vennur",
      "M": "വെന്നൂര്‍",
      "PIN": "680587",
      "DID": "8"
    },
    {
      "POSTID": 2322,
      "E": "Chelakode",
      "M": "ചേലക്കോട്",
      "PIN": "680587",
      "DID": "8"
    },
    {
      "POSTID": 2323,
      "E": "Pattiparamba",
      "M": "പട്ടിപ്പറമ്പ്",
      "PIN": "680588",
      "DID": "8"
    },
    {
      "POSTID": 2324,
      "E": "Pampady East",
      "M": "പാമ്പാടി ഈസ്റ്റ്",
      "PIN": "680588",
      "DID": "8"
    },
    {
      "POSTID": 2325,
      "E": "Malavattom",
      "M": "മലവട്ടം",
      "PIN": "680588",
      "DID": "8"
    },
    {
      "POSTID": 2326,
      "E": "Malesamangalam",
      "M": "മലേശമംഗലം",
      "PIN": "680588",
      "DID": "8"
    },
    {
      "POSTID": 2327,
      "E": "Thiruvilwamala",
      "M": "തിരുവില്വാമല",
      "PIN": "680588",
      "DID": "8"
    },
    {
      "POSTID": 2328,
      "E": "Manalithara",
      "M": "മണലിത്തറ",
      "PIN": "680589",
      "DID": "8"
    },
    {
      "POSTID": 2329,
      "E": "Enkakad",
      "M": "എങ്കക്കാട്",
      "PIN": "680589",
      "DID": "8"
    },
    {
      "POSTID": 2330,
      "E": "Vazhani",
      "M": "വാഴാനി",
      "PIN": "680589",
      "DID": "8"
    },
    {
      "POSTID": 2331,
      "E": "Karumathara",
      "M": "കരുമാത്ര",
      "PIN": "680589",
      "DID": "8"
    },
    {
      "POSTID": 2332,
      "E": "Kanjirakode",
      "M": "കാഞ്ഞിരക്കോട്",
      "PIN": "680590",
      "DID": "8"
    },
    {
      "POSTID": 2333,
      "E": "Kumaranallur-Tcr",
      "M": "കുമരനെല്ലൂര്‍ -തൃശ്ശൂര്‍",
      "PIN": "680590",
      "DID": "8"
    },
    {
      "POSTID": 2334,
      "E": "Kundannur",
      "M": "കുണ്ടന്നൂര്‍",
      "PIN": "680590",
      "DID": "8"
    },
    {
      "POSTID": 2335,
      "E": "Killimangalam",
      "M": "കിള്ളിമംഗലം",
      "PIN": "680591",
      "DID": "8"
    },
    {
      "POSTID": 2336,
      "E": "Attur",
      "M": "ആറ്റൂര്‍",
      "PIN": "680583",
      "DID": "8"
    },
    {
      "POSTID": 2337,
      "E": "Arangottukara",
      "M": "ആറങ്ങോട്ടുകര",
      "PIN": "680593",
      "DID": "8"
    },
    {
      "POSTID": 2338,
      "E": "Kuthampully",
      "M": "കുത്താമ്പുള്ളി",
      "PIN": "680594",
      "DID": "8"
    },
    {
      "POSTID": 2339,
      "E": "Kaniyarkode",
      "M": "കണിയാര്‍ക്കോട്",
      "PIN": "680594",
      "DID": "8"
    },
    {
      "POSTID": 2340,
      "E": "Mundathicode",
      "M": "മുണ്ടത്തിക്കോട്",
      "PIN": "680601",
      "DID": "8"
    },
    {
      "POSTID": 2341,
      "E": "Velappaya",
      "M": "",
      "PIN": "680596",
      "DID": "8"
    },
    {
      "POSTID": 2342,
      "E": "Pampady West",
      "M": "പാമ്പാടി വെസ്റ്റ്",
      "PIN": "680588",
      "DID": "8"
    },
    {
      "POSTID": 2343,
      "E": "Chittanda",
      "M": "ചിറ്റണ്ട",
      "PIN": "680585",
      "DID": "8"
    },
    {
      "POSTID": 2344,
      "E": "Kiralur",
      "M": "കിരാലൂര്‍",
      "PIN": "680601",
      "DID": "8"
    },
    {
      "POSTID": 2345,
      "E": "Kurumal",
      "M": "കുറുമാല്‍",
      "PIN": "680601",
      "DID": "8"
    },
    {
      "POSTID": 2346,
      "E": "Vellattanjur",
      "M": "വെള്ളാറ്റഞ്ഞൂര്‍",
      "PIN": "680601",
      "DID": "8"
    },
    {
      "POSTID": 2347,
      "E": "Velur Bazar",
      "M": "വേലൂര്‍ ബസാര്‍",
      "PIN": "680601",
      "DID": "8"
    },
    {
      "POSTID": 2348,
      "E": "Velur Thrissur",
      "M": "വേലൂര്‍-തൃശ്ശൂര്‍",
      "PIN": "680601",
      "DID": "8"
    },
    {
      "POSTID": 2349,
      "E": "Nambazhikad",
      "M": "നമ്പഴിക്കാട്",
      "PIN": "680602",
      "DID": "8"
    },
    {
      "POSTID": 2350,
      "E": "Mattom",
      "M": "മറ്റം",
      "PIN": "680602",
      "DID": "8"
    },
    {
      "POSTID": 2351,
      "E": "Vaka",
      "M": "വാക",
      "PIN": "680602",
      "DID": "8"
    },
    {
      "POSTID": 2352,
      "E": "Alur-Mattom",
      "M": "ആളൂര്‍മറ്റം",
      "PIN": "680603",
      "DID": "8"
    },
    {
      "POSTID": 2353,
      "E": "Marathamcode",
      "M": "മരത്തംകോട്",
      "PIN": "680604",
      "DID": "8"
    },
    {
      "POSTID": 2354,
      "E": "Chiramanangad",
      "M": "ചിറമനങ്ങാട്",
      "PIN": "680604",
      "DID": "8"
    },
    {
      "POSTID": 2355,
      "E": "Thekkumkara",
      "M": "തെക്കുംകര",
      "PIN": "680589",
      "DID": "8"
    },
    {
      "POSTID": 2356,
      "E": "Thichur",
      "M": "തിച്ചൂര്‍",
      "PIN": "680584",
      "DID": "8"
    },
    {
      "POSTID": 2357,
      "E": "Thonnoorkara ",
      "M": "തോന്നൂര്‍ക്കര",
      "PIN": "680586",
      "DID": "8"
    },
    {
      "POSTID": 2358,
      "E": "Elthuruth",
      "M": "",
      "PIN": "680611",
      "DID": "8"
    },
    {
      "POSTID": 2359,
      "E": "Kanjany",
      "M": "കാഞ്ഞാണി",
      "PIN": "680612",
      "DID": "8"
    },
    {
      "POSTID": 2360,
      "E": "Kandasankadavu",
      "M": "കണ്ടശ്ശാംകടവ്",
      "PIN": "680613",
      "DID": "8"
    },
    {
      "POSTID": 2361,
      "E": "Naduvilkara",
      "M": "നടുവില്‍ക്കര",
      "PIN": "680614",
      "DID": "8"
    },
    {
      "POSTID": 2362,
      "E": "Vatanapalli",
      "M": "വാടാനപ്പള്ളി",
      "PIN": "680614",
      "DID": "8"
    },
    {
      "POSTID": 2363,
      "E": "Vatanapalli Beach",
      "M": "വാടാനപ്പള്ളി ബീച്ച്",
      "PIN": "680614",
      "DID": "8"
    },
    {
      "POSTID": 2364,
      "E": "Engandiyur",
      "M": "ഏങ്ങണ്ടിയൂര്‍",
      "PIN": "680615",
      "DID": "8"
    },
    {
      "POSTID": 2365,
      "E": "Kundaliyur",
      "M": "കുണ്ടലിയൂര്‍",
      "PIN": "680616",
      "DID": "8"
    },
    {
      "POSTID": 2366,
      "E": "Manalur",
      "M": "മണലൂര്‍",
      "PIN": "680617",
      "DID": "8"
    },
    {
      "POSTID": 2367,
      "E": "Manalur Hs",
      "M": "മണലൂര്‍ എച്ച് എസ്",
      "PIN": "680617",
      "DID": "8"
    },
    {
      "POSTID": 2368,
      "E": "Aranattukara",
      "M": "",
      "PIN": "680618",
      "DID": "8"
    },
    {
      "POSTID": 2369,
      "E": "Trithallur",
      "M": "തൃത്തല്ലൂര്‍",
      "PIN": "680619",
      "DID": "8"
    },
    {
      "POSTID": 2370,
      "E": "Trithallur West",
      "M": "തൃത്തല്ലൂര്‍ വെസ്റ്റ്",
      "PIN": "680619",
      "DID": "8"
    },
    {
      "POSTID": 2371,
      "E": "Arimpur",
      "M": "അരിമ്പൂര്‍",
      "PIN": "680620",
      "DID": "8"
    },
    {
      "POSTID": 2372,
      "E": "Eravu",
      "M": "എറവ്",
      "PIN": "680620",
      "DID": "8"
    },
    {
      "POSTID": 2373,
      "E": "Chettupuzha",
      "M": "",
      "PIN": "680621",
      "DID": "9"
    },
    {
      "POSTID": 2374,
      "E": "Panangauttakara",
      "M": "പനങ്ങാട്ടുകര",
      "PIN": "680623",
      "DID": "8"
    },
    {
      "POSTID": 2375,
      "E": "Parlikad",
      "M": "പാര്‍ളിക്കാട്",
      "PIN": "680623",
      "DID": "8"
    },
    {
      "POSTID": 2376,
      "E": "Puthuruthy",
      "M": "പുതുരുത്തി",
      "PIN": "680623",
      "DID": "8"
    },
    {
      "POSTID": 2377,
      "E": "Mundathicode West",
      "M": "മുണ്ടത്തിക്കോട്  വെസ്റ്റ്",
      "PIN": "680623",
      "DID": "8"
    },
    {
      "POSTID": 2378,
      "E": "Wadakancherri Thrissur RS",
      "M": "വടക്കാഞ്ചേരി റെയില്‍വെ സ്റ്റേഷന്‍",
      "PIN": "680623",
      "DID": "8"
    },
    {
      "POSTID": 2379,
      "E": "Vyasagiri",
      "M": "വ്യാസഗിരി",
      "PIN": "680623",
      "DID": "8"
    },
    {
      "POSTID": 2380,
      "E": "Ramavarmapuram",
      "M": "",
      "PIN": "680631",
      "DID": "8"
    },
    {
      "POSTID": 2381,
      "E": "Pullu",
      "M": "പുള്ള്",
      "PIN": "680641",
      "DID": "8"
    },
    {
      "POSTID": 2382,
      "E": "Antikad",
      "M": "അന്തിക്കാട്",
      "PIN": "680641",
      "DID": "8"
    },
    {
      "POSTID": 2383,
      "E": "Alappad",
      "M": "ആലപ്പാട്",
      "PIN": "680641",
      "DID": "8"
    },
    {
      "POSTID": 2384,
      "E": "Puthenpeedika",
      "M": "പുത്തന്‍പീടിക",
      "PIN": "680642",
      "DID": "8"
    },
    {
      "POSTID": 2385,
      "E": "Mannuthy",
      "M": "മണ്ണുത്തി",
      "PIN": "680651",
      "DID": "8"
    },
    {
      "POSTID": 2386,
      "E": "Madakkathara",
      "M": "മാടക്കത്തറ",
      "PIN": "680651",
      "DID": "8"
    },
    {
      "POSTID": 2387,
      "E": "Pattikad-TCR",
      "M": "പട്ടിക്കാട്",
      "PIN": "680652",
      "DID": "8"
    },
    {
      "POSTID": 2388,
      "E": "Poovanchira",
      "M": "പൂവ്വന്‍ച്ചിറ",
      "PIN": "680652",
      "DID": "8"
    },
    {
      "POSTID": 2389,
      "E": "Vaniyampara",
      "M": "വാണിയമ്പാറ",
      "PIN": "680652",
      "DID": "8"
    },
    {
      "POSTID": 2390,
      "E": "Kannara",
      "M": "കണ്ണാറ",
      "PIN": "680652",
      "DID": "8"
    },
    {
      "POSTID": 2391,
      "E": "Koottala",
      "M": "കൂട്ടാല-തൃശ്ശൂര്‍",
      "PIN": "680652",
      "DID": "8"
    },
    {
      "POSTID": 2392,
      "E": "Chuvannamannu",
      "M": "ചുവന്നമണ്ണ്",
      "PIN": "680652",
      "DID": "8"
    },
    {
      "POSTID": 2393,
      "E": "Peechi",
      "M": "പീച്ചി",
      "PIN": "680653",
      "DID": "8"
    },
    {
      "POSTID": 2394,
      "E": "Chennaipara",
      "M": "ചെന്നായ്പ്പാറ",
      "PIN": "680653",
      "DID": "8"
    },
    {
      "POSTID": 2395,
      "E": "Vellanikkara",
      "M": "വെള്ളാനിക്കര",
      "PIN": "680654",
      "DID": "8"
    },
    {
      "POSTID": 2396,
      "E": "Ollukara",
      "M": "",
      "PIN": "680655",
      "DID": "8"
    },
    {
      "POSTID": 2397,
      "E": "Perinjanam",
      "M": "പെരിഞ്ഞനം  ",
      "PIN": "680686",
      "DID": "8"
    },
    {
      "POSTID": 2398,
      "E": "Kerala Agri. University",
      "M": "കേരളാ അഗ്രിക്കള്‍ച്ചറല്‍ യൂണിവേഴ്സിറ്റി",
      "PIN": "680656",
      "DID": "8"
    },
    {
      "POSTID": 2399,
      "E": "Nettissery",
      "M": "നെട്ടിശ്ശേരി",
      "PIN": "680651",
      "DID": "8"
    },
    {
      "POSTID": 2400,
      "E": "Nadavaramba",
      "M": "നടവരമ്പ്",
      "PIN": "680661",
      "DID": "8"
    },
    {
      "POSTID": 2401,
      "E": "Vellangallur",
      "M": "വെള്ളാങ്ങല്ലൂര്‍",
      "PIN": "680662",
      "DID": "8"
    },
    {
      "POSTID": 2402,
      "E": "Thumbur",
      "M": "തുമ്പൂര്‍",
      "PIN": "680662",
      "DID": "8"
    },
    {
      "POSTID": 2403,
      "E": "Pullut",
      "M": "പുല്ലൂറ്റ്",
      "PIN": "680663",
      "DID": "8"
    },
    {
      "POSTID": 2404,
      "E": "Pullut North",
      "M": "പുല്ലൂറ്റ്  നോര്‍ത്ത്",
      "PIN": "680663",
      "DID": "8"
    },
    {
      "POSTID": 2405,
      "E": "Kodungallur",
      "M": "കൊടുങ്ങല്ലൂര്‍",
      "PIN": "680664",
      "DID": "8"
    },
    {
      "POSTID": 2406,
      "E": "Thiruvanchikulam",
      "M": "തിരുവഞ്ചിക്കുളം",
      "PIN": "680664",
      "DID": "8"
    },
    {
      "POSTID": 2407,
      "E": "Panangad",
      "M": "പനങ്ങാട്",
      "PIN": "680665",
      "DID": "8"
    },
    {
      "POSTID": 2408,
      "E": "Azhikode Jetty",
      "M": "അഴീക്കോട് ജെട്ടി",
      "PIN": "680666",
      "DID": "8"
    },
    {
      "POSTID": 2409,
      "E": "Madavana",
      "M": "മാടവന",
      "PIN": "680666",
      "DID": "8"
    },
    {
      "POSTID": 2410,
      "E": "Eriyad",
      "M": "എറിയാട്",
      "PIN": "680666",
      "DID": "8"
    },
    {
      "POSTID": 2411,
      "E": "Anapuzha",
      "M": "ആനപ്പുഴ",
      "PIN": "680667",
      "DID": "8"
    },
    {
      "POSTID": 2412,
      "E": "Kottapuram",
      "M": "കോട്ടപ്പുറം",
      "PIN": "680667",
      "DID": "8"
    },
    {
      "POSTID": 2413,
      "E": "Thuruthippuram",
      "M": "തുരുത്തിപ്പുറം",
      "PIN": "680667",
      "DID": "7"
    },
    {
      "POSTID": 2414,
      "E": "Pathazhakad",
      "M": "പത്താഴക്കാട്",
      "PIN": "680668",
      "DID": "8"
    },
    {
      "POSTID": 2415,
      "E": "Santhipuram",
      "M": "ശാന്തിപുരം",
      "PIN": "680668",
      "DID": "8"
    },
    {
      "POSTID": 2416,
      "E": "Kothaparamba",
      "M": "കോതപറമ്പ്",
      "PIN": "680668",
      "DID": "8"
    },
    {
      "POSTID": 2417,
      "E": "Kandamkulam",
      "M": "കണ്ടംകുളം",
      "PIN": "680669",
      "DID": "8"
    },
    {
      "POSTID": 2418,
      "E": "Methala",
      "M": "മേത്തല",
      "PIN": "680669",
      "DID": "8"
    },
    {
      "POSTID": 2419,
      "E": "Karupadanna",
      "M": "കരൂപ്പടന്ന",
      "PIN": "680670",
      "DID": "8"
    },
    {
      "POSTID": 2420,
      "E": "Padinjare Vemballur",
      "M": "പടിഞ്ഞാറെ വെമ്പല്ലൂര്‍",
      "PIN": "680671",
      "DID": "8"
    },
    {
      "POSTID": 2421,
      "E": "Edavilangu",
      "M": "എടവിലങ്ങ്",
      "PIN": "680671",
      "DID": "8"
    },
    {
      "POSTID": 2422,
      "E": "Kara",
      "M": "കാര",
      "PIN": "680671",
      "DID": "8"
    },
    {
      "POSTID": 2423,
      "E": "Kottanallur",
      "M": "കൊറ്റനല്ലൂര്‍",
      "PIN": "680662",
      "DID": "8"
    },
    {
      "POSTID": 2424,
      "E": "Azhikode-Thrissur",
      "M": "അഴീക്കോട്-തൃശ്ശൂര്‍",
      "PIN": "680666",
      "DID": "8"
    },
    {
      "POSTID": 2425,
      "E": "Kaippamangalam",
      "M": "കൈപ്പമംഗലം",
      "PIN": "680681",
      "DID": "8"
    },
    {
      "POSTID": 2426,
      "E": "Kaippamangalam Beach",
      "M": "കൈപ്പമംഗലം ബീച്ച്",
      "PIN": "680681",
      "DID": "8"
    },
    {
      "POSTID": 2427,
      "E": "Koorikuzhy",
      "M": "കൂരിക്കുഴി",
      "PIN": "680681",
      "DID": "8"
    },
    {
      "POSTID": 2428,
      "E": "Chalingad",
      "M": "ചളിങ്ങാട്",
      "PIN": "680681",
      "DID": "8"
    },
    {
      "POSTID": 2429,
      "E": "Puthenchira",
      "M": "പുത്തന്‍ചിറ ",
      "PIN": "680682",
      "DID": "8"
    },
    {
      "POSTID": 2430,
      "E": "Puthenchira-Kizhakkumuni",
      "M": "പുത്തന്‍ചിറ കിഴക്കുംമുറി",
      "PIN": "680682",
      "DID": "8"
    },
    {
      "POSTID": 2431,
      "E": "Puthenchira-Thekkumuri",
      "M": "പുത്തന്‍ചിറ തെക്കുംമുറി",
      "PIN": "680682",
      "DID": "8"
    },
    {
      "POSTID": 2432,
      "E": "Kannikulangara",
      "M": "കണ്ണികുളങ്ങര",
      "PIN": "680682",
      "DID": "8"
    },
    {
      "POSTID": 2433,
      "E": "Kombathukadavu",
      "M": "കൊമ്പത്തുകടവ്",
      "PIN": "680682",
      "DID": "8"
    },
    {
      "POSTID": 2434,
      "E": "Pullur",
      "M": "പുല്ലൂര്‍",
      "PIN": "680683",
      "DID": "8"
    },
    {
      "POSTID": 2435,
      "E": "Avittathur",
      "M": "അവിട്ടത്തൂര്‍",
      "PIN": "680683",
      "DID": "8"
    },
    {
      "POSTID": 2436,
      "E": "Aloor",
      "M": "ആളൂര്‍",
      "PIN": "680683",
      "DID": "8"
    },
    {
      "POSTID": 2437,
      "E": "Karoor",
      "M": "കാരൂര്‍",
      "PIN": "680697",
      "DID": "8"
    },
    {
      "POSTID": 2438,
      "E": "Kuzhikkattussery ",
      "M": "കുഴിക്കാട്ടുശ്ശേരി",
      "PIN": "680697",
      "DID": "8"
    },
    {
      "POSTID": 2439,
      "E": "Kaduppassery South",
      "M": "കടുപ്പശ്ശേരി സൗത്ത്",
      "PIN": "680683",
      "DID": "8"
    },
    {
      "POSTID": 2440,
      "E": "Kallettumkara",
      "M": "കല്ലേറ്റുംകര",
      "PIN": "680683",
      "DID": "8"
    },
    {
      "POSTID": 2441,
      "E": "Vellanchira",
      "M": "വെള്ളാഞ്ചിറ",
      "PIN": "680697",
      "DID": "8"
    },
    {
      "POSTID": 2442,
      "E": "Manakulangara",
      "M": "മനക്കുളങ്ങര",
      "PIN": "680684",
      "DID": "8"
    },
    {
      "POSTID": 2443,
      "E": "Mattathurkunnu",
      "M": "മറ്റത്തൂര്‍കുന്ന്",
      "PIN": "680684",
      "DID": "8"
    },
    {
      "POSTID": 2444,
      "E": "Kodakara",
      "M": "കൊടകര",
      "PIN": "680684",
      "DID": "8"
    },
    {
      "POSTID": 2445,
      "E": "Chembuchira",
      "M": "ചെമ്പുച്ചിറ",
      "PIN": "680684",
      "DID": "8"
    },
    {
      "POSTID": 2446,
      "E": "Mathilakam",
      "M": "മതിലകം",
      "PIN": "680685",
      "DID": "8"
    },
    {
      "POSTID": 2447,
      "E": "Chakkarapadam",
      "M": "ചക്കരപ്പാടം",
      "PIN": "680686",
      "DID": "8"
    },
    {
      "POSTID": 2448,
      "E": "Perinjanam West",
      "M": "പെരിഞ്ഞനം  വെസ്റ്റ്",
      "PIN": "680686",
      "DID": "8"
    },
    {
      "POSTID": 2449,
      "E": "Kannampullipuram",
      "M": "കണ്ണംപള്ളിപുറം",
      "PIN": "680687",
      "DID": "8"
    },
    {
      "POSTID": 2450,
      "E": "Chamakkala",
      "M": "ചാമക്കാല",
      "PIN": "680687",
      "DID": "8"
    },
    {
      "POSTID": 2451,
      "E": "Chentrappinni",
      "M": "ചെന്ത്രാപ്പിന്നി ",
      "PIN": "680687",
      "DID": "8"
    },
    {
      "POSTID": 2452,
      "E": "Chentrappinni East",
      "M": "ചെന്ത്രാപ്പിന്നി ഈസ്റ്റ്",
      "PIN": "680687",
      "DID": "8"
    },
    {
      "POSTID": 2453,
      "E": "Aripalam",
      "M": "അരിപ്പാലം",
      "PIN": "680688",
      "DID": "8"
    },
    {
      "POSTID": 2454,
      "E": "Kalparamba",
      "M": "കല്‍പറമ്പ്",
      "PIN": "680688",
      "DID": "8"
    },
    {
      "POSTID": 2455,
      "E": "Kanakamala",
      "M": "കനകമല",
      "PIN": "680689",
      "DID": "8"
    },
    {
      "POSTID": 2456,
      "E": "Perambra Tcr",
      "M": "പേരാമ്പ്ര-തൃശ്ശൂര്‍",
      "PIN": "680689",
      "DID": "8"
    },
    {
      "POSTID": 2457,
      "E": "Koolimuttam",
      "M": "കൂളിമുട്ടം",
      "PIN": "680691",
      "DID": "8"
    },
    {
      "POSTID": 2458,
      "E": "Mattathur",
      "M": "മറ്റത്തൂര്‍",
      "PIN": "680684",
      "DID": "8"
    },
    {
      "POSTID": 2459,
      "E": "Vellikulangara",
      "M": "വെള്ളികുളങ്ങര",
      "PIN": "680699",
      "DID": "8"
    },
    {
      "POSTID": 2460,
      "E": "Muriyad",
      "M": "മുരിയാട്",
      "PIN": "680683",
      "DID": "8"
    },
    {
      "POSTID": 2461,
      "E": "Padiyur",
      "M": "പടിയൂര്‍",
      "PIN": "680688",
      "DID": "8"
    },
    {
      "POSTID": 2462,
      "E": "Padiyam",
      "M": "പടിയം",
      "PIN": "680641",
      "DID": "8"
    },
    {
      "POSTID": 2463,
      "E": "Kadupassery",
      "M": "കടുപ്പശ്ശേരി ",
      "PIN": "680683",
      "DID": "8"
    },
    {
      "POSTID": 2464,
      "E": "Pady",
      "M": "പാഡി",
      "PIN": "680699",
      "DID": "8"
    },
    {
      "POSTID": 2465,
      "E": "Murikkungal",
      "M": "മുരിക്കുങ്ങല്‍",
      "PIN": "680699",
      "DID": "8"
    },
    {
      "POSTID": 2466,
      "E": "Chokkana",
      "M": "ചൊക്കന",
      "PIN": "680699",
      "DID": "8"
    },
    {
      "POSTID": 2467,
      "E": "Vellani",
      "M": "വെള്ളാനി",
      "PIN": "680701",
      "DID": "8"
    },
    {
      "POSTID": 2468,
      "E": "Thanissery",
      "M": "താണിശ്ശേരി",
      "PIN": "680701",
      "DID": "8"
    },
    {
      "POSTID": 2469,
      "E": "Karanchira",
      "M": "കരാഞ്ചിറ",
      "PIN": "680702",
      "DID": "8"
    },
    {
      "POSTID": 2470,
      "E": "Kattoor",
      "M": "കാട്ടൂര്‍",
      "PIN": "680702",
      "DID": "8"
    },
    {
      "POSTID": 2471,
      "E": "Ponjanam",
      "M": "പൊഞ്ഞനം",
      "PIN": "680702",
      "DID": "8"
    },
    {
      "POSTID": 2472,
      "E": "Ponjanam",
      "M": "",
      "PIN": "680702",
      "DID": "8"
    },
    {
      "POSTID": 2473,
      "E": "Edathuruthi",
      "M": "എടത്തിരുത്തി",
      "PIN": "680703",
      "DID": "8"
    },
    {
      "POSTID": 2474,
      "E": "Moorkanad",
      "M": "മൂര്‍ക്കനാട്",
      "PIN": "680711",
      "DID": "8"
    },
    {
      "POSTID": 2475,
      "E": "Karuvannur",
      "M": "കരുവന്നൂര്‍",
      "PIN": "680711",
      "DID": "8"
    },
    {
      "POSTID": 2476,
      "E": "Karalam",
      "M": "കാറളം",
      "PIN": "680711",
      "DID": "8"
    },
    {
      "POSTID": 2477,
      "E": "Madayikonam",
      "M": "മാടായിക്കോണം",
      "PIN": "680712",
      "DID": "8"
    },
    {
      "POSTID": 2478,
      "E": "Pariyaram Thrissur",
      "M": "പരിയാരം-തൃശ്ശൂര്‍",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2479,
      "E": "Ambalapara",
      "M": "അമ്പലപ്പാറ",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2480,
      "E": "Elinjipra",
      "M": "എലിഞ്ഞിപ്ര",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2481,
      "E": "Kanjirappilly Thrissur",
      "M": "കാഞ്ഞിരപ്പിള്ളി തൃശ്ശൂര്‍",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2482,
      "E": "Kuttichira",
      "M": "കുറ്റിച്ചിറ",
      "PIN": "680724",
      "DID": "8"
    },
    {
      "POSTID": 2483,
      "E": "Kuttikkad",
      "M": "കുറ്റിക്കാട്",
      "PIN": "680724",
      "DID": "8"
    },
    {
      "POSTID": 2484,
      "E": "Chattikulam",
      "M": "ചട്ടിക്കുളം",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2485,
      "E": "Chaipankuzhi",
      "M": "ചായ്പന്‍കുഴി",
      "PIN": "680724",
      "DID": "8"
    },
    {
      "POSTID": 2486,
      "E": "Poringalkuthu",
      "M": "പൊരിങ്ങല്‍കുത്ത്",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2487,
      "E": "Vettilapara",
      "M": "വെറ്റിലപ്പാറ",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2488,
      "E": "Konnakuzhy",
      "M": "കൊന്നക്കുഴി",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2489,
      "E": "Mothirakkanni",
      "M": "മോതിരക്കണ്ണി",
      "PIN": "680724",
      "DID": "8"
    },
    {
      "POSTID": 2490,
      "E": "Vijayaraghavapuram",
      "M": "വി ആര്‍ പുരം",
      "PIN": "680722",
      "DID": "8"
    },
    {
      "POSTID": 2491,
      "E": "Malakkappara",
      "M": "മലക്കപ്പാറ",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2492,
      "E": "Kodassery",
      "M": "കോടശ്ശേരി",
      "PIN": "680721",
      "DID": "8"
    },
    {
      "POSTID": 2493,
      "E": "Ashtamichira",
      "M": "അഷ്ടമിച്ചിറ",
      "PIN": "680731",
      "DID": "8"
    },
    {
      "POSTID": 2494,
      "E": "MALA PALLIPPURAM",
      "M": "പള്ളിപ്പുറം",
      "PIN": "680732",
      "DID": "8"
    },
    {
      "POSTID": 2495,
      "E": "MALA",
      "M": "മാള-തൃശ്ശൂര്‍",
      "PIN": "680732",
      "DID": "8"
    },
    {
      "POSTID": 2496,
      "E": "Kottamuri",
      "M": "കോട്ടമുറി",
      "PIN": "680732",
      "DID": "8"
    },
    {
      "POSTID": 2497,
      "E": "POOPPATHY",
      "M": "പൂപ്പത്തി",
      "PIN": "680733",
      "DID": "8"
    },
    {
      "POSTID": 2498,
      "E": "MADATHUMPADY",
      "M": "മടത്തുംപടി",
      "PIN": "680733",
      "DID": "8"
    },
    {
      "POSTID": 2499,
      "E": "Krishnankotta",
      "M": "കൃഷ്ണന്‍കോട്ട",
      "PIN": "680733",
      "DID": "8"
    },
    {
      "POSTID": 2500,
      "E": "Poyya",
      "M": "പൊയ്യ",
      "PIN": "680733",
      "DID": "8"
    },
    {
      "POSTID": 2501,
      "E": "IRANIKULAM",
      "M": "ഐരാണിക്കുളം",
      "PIN": "680734",
      "DID": "8"
    },
    {
      "POSTID": 2502,
      "E": "Eravathoor",
      "M": "എരവത്തൂര്‍",
      "PIN": "680734",
      "DID": "8"
    },
    {
      "POSTID": 2503,
      "E": "Kuzhur",
      "M": "കുഴൂര്‍",
      "PIN": "680734",
      "DID": "8"
    },
    {
      "POSTID": 2504,
      "E": "KUNDUR",
      "M": "തിരുമുക്കുളം",
      "PIN": "680734",
      "DID": "8"
    },
    {
      "POSTID": 2505,
      "E": "Kuruvilassery ",
      "M": "കുരുവിലശ്ശേരി",
      "PIN": "680732",
      "DID": "8"
    },
    {
      "POSTID": 2506,
      "E": "Vadama ",
      "M": "വടമ",
      "PIN": "680732",
      "DID": "8"
    },
    {
      "POSTID": 2507,
      "E": "Palayamparambu",
      "M": "പാളയംപറമ്പ്",
      "PIN": "680741",
      "DID": "8"
    },
    {
      "POSTID": 2508,
      "E": "Poovathusseri",
      "M": "പൂവത്തുശ്ശേരി",
      "PIN": "680741",
      "DID": "8"
    },
    {
      "POSTID": 2509,
      "E": "Annamanada",
      "M": "അന്നമനട",
      "PIN": "680741",
      "DID": "8"
    },
    {
      "POSTID": 2510,
      "E": "Alathur-Thrissur ",
      "M": "ആലത്തൂര്‍-തൃശ്ശൂര്‍",
      "PIN": "680741",
      "DID": "8"
    },
    {
      "POSTID": 2511,
      "E": "Nadathara",
      "M": "നടത്തറ",
      "PIN": "680751",
      "DID": "8"
    },
    {
      "POSTID": 2512,
      "E": "Ayyappankavu",
      "M": "അയ്യപ്പന്‍കാവ്",
      "PIN": "680751",
      "DID": "8"
    },
    {
      "POSTID": 2513,
      "E": "Mulayam",
      "M": "മുളയം",
      "PIN": "680751",
      "DID": "8"
    },
    {
      "POSTID": 2514,
      "E": "Assarikad",
      "M": "ആശാരിക്കാട്",
      "PIN": "680751",
      "DID": "8"
    },
    {
      "POSTID": 2515,
      "E": "Eravimangalam",
      "M": "ഇരവിമംഗലം",
      "PIN": "680751",
      "DID": "8"
    },
    {
      "POSTID": 2516,
      "E": "Kozhukkully",
      "M": "കൊഴുക്കുള്ളി",
      "PIN": "680752",
      "DID": "8"
    },
    {
      "POSTID": 2517,
      "E": "Athani -Thrissur",
      "M": "അത്താണി-തൃശ്ശൂര്‍",
      "PIN": "680581",
      "DID": "8"
    },
    {
      "POSTID": 2518,
      "E": "Kochi",
      "M": "കൊച്ചി",
      "PIN": "682001",
      "DID": "7"
    },
    {
      "POSTID": 2519,
      "E": "Mattancherry bazaar",
      "M": "മത്സ്യപുരി ബസാര്‍",
      "PIN": "682002",
      "DID": "7"
    },
    {
      "POSTID": 2520,
      "E": "Willington Island",
      "M": "വെല്ലിംഗ്ടണ്‍ ഐലന്റ്",
      "PIN": "682003",
      "DID": "7"
    },
    {
      "POSTID": 2521,
      "E": "Kochi Naval Base",
      "M": "കൊച്ചി നേവല്‍ ബേസ്",
      "PIN": "682004",
      "DID": "7"
    },
    {
      "POSTID": 2522,
      "E": "Thoppumpady",
      "M": "തോപ്പുംപടി",
      "PIN": "682005",
      "DID": "7"
    },
    {
      "POSTID": 2523,
      "E": "Palluruthi South",
      "M": "പള്ളുരുത്തി സൗത്ത്",
      "PIN": "682006",
      "DID": "7"
    },
    {
      "POSTID": 2524,
      "E": "Edakochi",
      "M": "ഇടക്കൊച്ചി",
      "PIN": "682010",
      "DID": "7"
    },
    {
      "POSTID": 2525,
      "E": "Kumbalanghi",
      "M": "കുമ്പളങ്ങി",
      "PIN": "682007",
      "DID": "7"
    },
    {
      "POSTID": 2526,
      "E": "Kumbalanghi South",
      "M": "കുമ്പളങ്ങി സൗത്ത്",
      "PIN": "682007",
      "DID": "7"
    },
    {
      "POSTID": 2527,
      "E": "Andikadavu",
      "M": "അണ്ടിക്കടവ്",
      "PIN": "682008",
      "DID": "7"
    },
    {
      "POSTID": 2528,
      "E": "Kannamali",
      "M": "കണ്ണമാലി",
      "PIN": "682008",
      "DID": "7"
    },
    {
      "POSTID": 2529,
      "E": "South Chellanam",
      "M": "സൗത്ത് ചെല്ലാനം",
      "PIN": "682008",
      "DID": "7"
    },
    {
      "POSTID": 2530,
      "E": "Chellanam",
      "M": "ചെല്ലാനം ",
      "PIN": "682008",
      "DID": "7"
    },
    {
      "POSTID": 2531,
      "E": "North End",
      "M": "നോര്‍ത്ത് എന്റ്",
      "PIN": "682009",
      "DID": "7"
    },
    {
      "POSTID": 2532,
      "E": "Ernakulam",
      "M": "എറണാകുളം",
      "PIN": "682011",
      "DID": "7"
    },
    {
      "POSTID": 2533,
      "E": "Pachalam",
      "M": "പച്ചാളം",
      "PIN": "682012",
      "DID": "7"
    },
    {
      "POSTID": 2534,
      "E": "Thevara",
      "M": "തേവര",
      "PIN": "682013",
      "DID": "7"
    },
    {
      "POSTID": 2535,
      "E": "Perumannur",
      "M": "പെരുമാന്നൂര്‍",
      "PIN": "682015",
      "DID": "7"
    },
    {
      "POSTID": 2536,
      "E": "Kochi-Mahatma Gandhi Road",
      "M": "കൊച്ചി എം.ജി.റോഡ്",
      "PIN": "682016",
      "DID": "7"
    },
    {
      "POSTID": 2537,
      "E": "Kaloor",
      "M": "കലൂര്‍",
      "PIN": "682017",
      "DID": "7"
    },
    {
      "POSTID": 2538,
      "E": "Ernakulam North",
      "M": "എറണാകുളം നോര്‍ത്ത്",
      "PIN": "682018",
      "DID": "7"
    },
    {
      "POSTID": 2539,
      "E": "Vyttila",
      "M": "വൈറ്റില",
      "PIN": "682019",
      "DID": "7"
    },
    {
      "POSTID": 2540,
      "E": "Kadavanthara",
      "M": "കടവന്തറ",
      "PIN": "682020",
      "DID": "7"
    },
    {
      "POSTID": 2541,
      "E": "Vadacode ",
      "M": "വടകോട്",
      "PIN": "682021",
      "DID": "7"
    },
    {
      "POSTID": 2542,
      "E": "Vadacode-Kailas Colony ",
      "M": "വടകോട് കൈലാസ് കോളനി",
      "PIN": "682021",
      "DID": "7"
    },
    {
      "POSTID": 2543,
      "E": "Thrikakara",
      "M": "തൃക്കാക്കര",
      "PIN": "682021",
      "DID": "7"
    },
    {
      "POSTID": 2544,
      "E": "Kochi University",
      "M": "കൊച്ചി യൂണിവേഴ്സിറ്റി",
      "PIN": "682022",
      "DID": "7"
    },
    {
      "POSTID": 2545,
      "E": "Vaduthala",
      "M": "വടുതല",
      "PIN": "682023",
      "DID": "7"
    },
    {
      "POSTID": 2546,
      "E": "Edapally",
      "M": "ഇടപ്പള്ളി ",
      "PIN": "682024",
      "DID": "7"
    },
    {
      "POSTID": 2547,
      "E": "Edapally North",
      "M": "ഇടപ്പള്ളി നോര്‍ത്ത്",
      "PIN": "682024",
      "DID": "7"
    },
    {
      "POSTID": 2548,
      "E": "Palarivattom",
      "M": "പാലാരിവട്ടം",
      "PIN": "682025",
      "DID": "7"
    },
    {
      "POSTID": 2549,
      "E": "Elamakara",
      "M": "എളമക്കര",
      "PIN": "682026",
      "DID": "7"
    },
    {
      "POSTID": 2550,
      "E": "Pizhala",
      "M": "പിഴല",
      "PIN": "682027",
      "DID": "7"
    },
    {
      "POSTID": 2551,
      "E": "Kadamakudi",
      "M": "കടമക്കുടി",
      "PIN": "682027",
      "DID": "7"
    },
    {
      "POSTID": 2552,
      "E": "Chittoor-Ernakulam(South Chittoor)",
      "M": "ചിറ്റൂര്‍‍-എറണാകുളം(സൗത്ത് ചിറ്റൂര്‍)",
      "PIN": "682027",
      "DID": "7"
    },
    {
      "POSTID": 2553,
      "E": "Kothad",
      "M": "കോതാട്",
      "PIN": "682027",
      "DID": "7"
    },
    {
      "POSTID": 2554,
      "E": "Vennala",
      "M": "വെണ്ണല",
      "PIN": "682028",
      "DID": "7"
    },
    {
      "POSTID": 2555,
      "E": "Matsyapuri",
      "M": "മത്സ്യപുരി",
      "PIN": "682029",
      "DID": "7"
    },
    {
      "POSTID": 2556,
      "E": "Kakkanad",
      "M": "കാക്കനാട്",
      "PIN": "682030",
      "DID": "7"
    },
    {
      "POSTID": 2557,
      "E": "Kakkanad West",
      "M": "കാക്കനാട് വെസ്റ്റ്",
      "PIN": "682030",
      "DID": "7"
    },
    {
      "POSTID": 2558,
      "E": "Kusumagiri",
      "M": "കുസുമഗിരി",
      "PIN": "682030",
      "DID": "7"
    },
    {
      "POSTID": 2559,
      "E": "Thengode",
      "M": "തെങ്ങോട്",
      "PIN": "682030",
      "DID": "7"
    },
    {
      "POSTID": 2560,
      "E": "Vallarpadam ",
      "M": "വല്ലാര്‍പാടം",
      "PIN": "682504",
      "DID": "7"
    },
    {
      "POSTID": 2561,
      "E": "Shanmughom Road",
      "M": "ഷണ്‍മുഖം റോഡ്",
      "PIN": "682031",
      "DID": "7"
    },
    {
      "POSTID": 2562,
      "E": "Thammanam",
      "M": "തമ്മനം",
      "PIN": "682032",
      "DID": "7"
    },
    {
      "POSTID": 2563,
      "E": "Changampuzha Nagar",
      "M": "ചങ്ങമ്പുഴ നഗര്‍",
      "PIN": "682033",
      "DID": "7"
    },
    {
      "POSTID": 2564,
      "E": "Cheranalloor",
      "M": "ചേരാനല്ലൂര്‍ ",
      "PIN": "682034",
      "DID": "7"
    },
    {
      "POSTID": 2565,
      "E": "Ernakulam College",
      "M": "എറണാകുളം കോളേജ്",
      "PIN": "682035",
      "DID": "7"
    },
    {
      "POSTID": 2566,
      "E": "Panampilly Nagar",
      "M": "പനമ്പിള്ളി നഗര്‍",
      "PIN": "682036",
      "DID": "7"
    },
    {
      "POSTID": 2567,
      "E": "Kochi Palace",
      "M": "കൊച്ചി പാലസ്",
      "PIN": "682301",
      "DID": "7"
    },
    {
      "POSTID": 2568,
      "E": "Thekkumbhagom",
      "M": "തെക്കുംഭാഗം",
      "PIN": "682301",
      "DID": "7"
    },
    {
      "POSTID": 2569,
      "E": "Tripunithura",
      "M": "തൃപ്പൂണിത്തുറ ",
      "PIN": "682301",
      "DID": "7"
    },
    {
      "POSTID": 2570,
      "E": "Tripunithura Fort",
      "M": "തൃപ്പൂണിത്തുറ ഫോര്‍ട്ട്",
      "PIN": "682301",
      "DID": "7"
    },
    {
      "POSTID": 2571,
      "E": "Ambalamukal",
      "M": "അമ്പലമുകള്‍",
      "PIN": "682302",
      "DID": "7"
    },
    {
      "POSTID": 2572,
      "E": "Brahmapuram",
      "M": "ബ്രഹ്മപുരം",
      "PIN": "682303",
      "DID": "7"
    },
    {
      "POSTID": 2573,
      "E": "Ambalamedu",
      "M": "അമ്പലമേട്",
      "PIN": "682303",
      "DID": "7"
    },
    {
      "POSTID": 2574,
      "E": "Maradu",
      "M": "മരട്",
      "PIN": "682304",
      "DID": "7"
    },
    {
      "POSTID": 2575,
      "E": "Nettoor",
      "M": "നെട്ടൂര്‍",
      "PIN": "682040",
      "DID": "7"
    },
    {
      "POSTID": 2576,
      "E": "Mamala",
      "M": "മാമല",
      "PIN": "682305",
      "DID": "7"
    },
    {
      "POSTID": 2577,
      "E": "Kandanad",
      "M": "കണ്ടനാട്",
      "PIN": "682305",
      "DID": "7"
    },
    {
      "POSTID": 2578,
      "E": "Kureekad",
      "M": "കുരീക്കാട്",
      "PIN": "682305",
      "DID": "7"
    },
    {
      "POSTID": 2579,
      "E": "Kadungamangalam",
      "M": "കടുങ്ങമംഗലം",
      "PIN": "682305",
      "DID": "7"
    },
    {
      "POSTID": 2580,
      "E": "Kokkappilly",
      "M": "കോക്കാപ്പിള്ളി",
      "PIN": "682305",
      "DID": "7"
    },
    {
      "POSTID": 2581,
      "E": "Thiruvankulam",
      "M": "തിരുവാങ്കുളം",
      "PIN": "682305",
      "DID": "7"
    },
    {
      "POSTID": 2582,
      "E": "Eroor South",
      "M": "എരൂര്‍ സൗത്ത്",
      "PIN": "682306",
      "DID": "7"
    },
    {
      "POSTID": 2583,
      "E": "Eroor West",
      "M": "എരൂര്‍ വെസ്റ്റ്",
      "PIN": "682306",
      "DID": "7"
    },
    {
      "POSTID": 2584,
      "E": "Eroor",
      "M": "എരൂര്‍ ",
      "PIN": "682306",
      "DID": "7"
    },
    {
      "POSTID": 2585,
      "E": "Nadakkavu",
      "M": "നടക്കാവ്",
      "PIN": "682307",
      "DID": "7"
    },
    {
      "POSTID": 2586,
      "E": "Poothotta",
      "M": "പൂത്തോട്ട",
      "PIN": "682307",
      "DID": "7"
    },
    {
      "POSTID": 2587,
      "E": "Udayamperoor",
      "M": "ഉദയംപേരൂര്‍",
      "PIN": "682307",
      "DID": "7"
    },
    {
      "POSTID": 2588,
      "E": "Puthencruz",
      "M": "പുത്തന്‍കുരിശ്",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2589,
      "E": "Poothrika",
      "M": "പൂത്തൃക്ക",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2590,
      "E": "Bhakthanadapuram",
      "M": "ഭക്താനന്ദപുരം",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2591,
      "E": "Meempara",
      "M": "മീമ്പാറ",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2592,
      "E": "Ezhakaranad",
      "M": "ഏഴക്കരനാട്",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2593,
      "E": "Ezhakaranad South",
      "M": "ഏഴക്കരനാട് സൗത്ത്",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2594,
      "E": "Varikoli",
      "M": "വരിക്കോലി",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2595,
      "E": "Vadayampadi",
      "M": "വടയമ്പാടി",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2596,
      "E": "Thiruvaniyur",
      "M": "തിരുവാണിയൂര്‍",
      "PIN": "682308",
      "DID": "7"
    },
    {
      "POSTID": 2597,
      "E": "Irimpanam",
      "M": "ഇരുമ്പനം",
      "PIN": "682309",
      "DID": "7"
    },
    {
      "POSTID": 2598,
      "E": "Pancode",
      "M": "പാങ്കോട്",
      "PIN": "682310",
      "DID": "7"
    },
    {
      "POSTID": 2599,
      "E": "Vadavucode",
      "M": "വടവുകോട്",
      "PIN": "682310",
      "DID": "7"
    },
    {
      "POSTID": 2600,
      "E": "Kaninad",
      "M": "കാണിനാട്",
      "PIN": "682310",
      "DID": "7"
    },
    {
      "POSTID": 2601,
      "E": "Karukapally",
      "M": "കറുകപ്പിള്ളി",
      "PIN": "682311",
      "DID": "7"
    },
    {
      "POSTID": 2602,
      "E": "Kadackanad",
      "M": "കടക്കനാട്",
      "PIN": "682311",
      "DID": "7"
    },
    {
      "POSTID": 2603,
      "E": "Kadamattam",
      "M": "കടമറ്റം",
      "PIN": "682311",
      "DID": "7"
    },
    {
      "POSTID": 2604,
      "E": "Kadayirippu",
      "M": "കടയിരുപ്പ്",
      "PIN": "682311",
      "DID": "7"
    },
    {
      "POSTID": 2605,
      "E": "Kolencherry",
      "M": "കോലഞ്ചേരി",
      "PIN": "682311",
      "DID": "7"
    },
    {
      "POSTID": 2606,
      "E": "Kinginimattam",
      "M": "കിങ്ങിണിമറ്റം",
      "PIN": "682311",
      "DID": "7"
    },
    {
      "POSTID": 2607,
      "E": "Kuzhiyara",
      "M": "കുഴിയറ",
      "PIN": "682312",
      "DID": "7"
    },
    {
      "POSTID": 2608,
      "E": "Chottanikkara",
      "M": "ചോറ്റാനിക്കര",
      "PIN": "682312",
      "DID": "7"
    },
    {
      "POSTID": 2609,
      "E": "Arakunnam",
      "M": "ആരക്കുന്നം",
      "PIN": "682313",
      "DID": "7"
    },
    {
      "POSTID": 2610,
      "E": "Edakkattuvayal",
      "M": "എടയ്ക്കാട്ടുവയല്‍",
      "PIN": "682313",
      "DID": "7"
    },
    {
      "POSTID": 2611,
      "E": "Kaipattur",
      "M": "കൈപ്പട്ടൂര്‍",
      "PIN": "682313",
      "DID": "7"
    },
    {
      "POSTID": 2612,
      "E": "Thirumarayoor",
      "M": "തിരുമറയൂര്‍",
      "PIN": "682313",
      "DID": "7"
    },
    {
      "POSTID": 2613,
      "E": "Pulickamaly",
      "M": "പുളിക്കമാലി",
      "PIN": "682314",
      "DID": "7"
    },
    {
      "POSTID": 2614,
      "E": "Mulanthuruthy",
      "M": "മുളന്തുരുത്തി",
      "PIN": "682314",
      "DID": "7"
    },
    {
      "POSTID": 2615,
      "E": "Perumpilli",
      "M": "പെരുമ്പിള്ളി",
      "PIN": "682314",
      "DID": "7"
    },
    {
      "POSTID": 2616,
      "E": "Vettikkal",
      "M": "വെട്ടിക്കല്‍",
      "PIN": "682314",
      "DID": "7"
    },
    {
      "POSTID": 2617,
      "E": "Paingarapally",
      "M": "പൈങ്ങാരപ്പിള്ളി",
      "PIN": "682314",
      "DID": "7"
    },
    {
      "POSTID": 2618,
      "E": "Thalacode",
      "M": "തലക്കോട്",
      "PIN": "682314",
      "DID": "7"
    },
    {
      "POSTID": 2619,
      "E": "Marithazham",
      "M": "മാരിത്താഴം",
      "PIN": "682315",
      "DID": "7"
    },
    {
      "POSTID": 2620,
      "E": "Amballoor",
      "M": "ആമ്പല്ലൂര്‍",
      "PIN": "682315",
      "DID": "7"
    },
    {
      "POSTID": 2621,
      "E": "Kanjiramattom",
      "M": "കാഞ്ഞിരമറ്റം",
      "PIN": "682315",
      "DID": "7"
    },
    {
      "POSTID": 2622,
      "E": "Kulayettikkara",
      "M": "കുലയേറ്റിക്കര",
      "PIN": "682315",
      "DID": "7"
    },
    {
      "POSTID": 2623,
      "E": "Chethicode",
      "M": "ചെത്തിക്കോട്",
      "PIN": "682315",
      "DID": "7"
    },
    {
      "POSTID": 2624,
      "E": "Kunnackal",
      "M": "കുന്നയ്ക്കാല്‍",
      "PIN": "682316",
      "DID": "7"
    },
    {
      "POSTID": 2625,
      "E": "Mekkadambu",
      "M": "മേക്കടമ്പ്",
      "PIN": "682316",
      "DID": "7"
    },
    {
      "POSTID": 2626,
      "E": "Poonithura",
      "M": "പൂണിത്തുറ",
      "PIN": "682038",
      "DID": "7"
    },
    {
      "POSTID": 2627,
      "E": "Veliyanad",
      "M": "വെളിയനാട്",
      "PIN": "682319",
      "DID": "7"
    },
    {
      "POSTID": 2628,
      "E": "South Paravoor",
      "M": "സൗത്ത് പരവൂര്‍",
      "PIN": "682307",
      "DID": "7"
    },
    {
      "POSTID": 2629,
      "E": "Ayyampilly",
      "M": "അയ്യമ്പിള്ളി",
      "PIN": "682501",
      "DID": "7"
    },
    {
      "POSTID": 2630,
      "E": "Edavanakad",
      "M": "എടവനക്കാട്",
      "PIN": "682502",
      "DID": "7"
    },
    {
      "POSTID": 2631,
      "E": "Elamkunnapuzha",
      "M": "എളങ്കുന്നപ്പുഴ",
      "PIN": "682503",
      "DID": "7"
    },
    {
      "POSTID": 2632,
      "E": "Mulavukad",
      "M": "മുളവുകാട്",
      "PIN": "682504",
      "DID": "7"
    },
    {
      "POSTID": 2633,
      "E": "Narakkal",
      "M": "ഞാറക്കല്‍",
      "PIN": "682505",
      "DID": "7"
    },
    {
      "POSTID": 2634,
      "E": "Panangad",
      "M": "പനങ്ങാട്",
      "PIN": "682506",
      "DID": "7"
    },
    {
      "POSTID": 2635,
      "E": "Kumbalam",
      "M": "കുമ്പളം",
      "PIN": "682506",
      "DID": "7"
    },
    {
      "POSTID": 2636,
      "E": "Nazareth",
      "M": "നസ്രേത്ത്",
      "PIN": "682507",
      "DID": "7"
    },
    {
      "POSTID": 2637,
      "E": "Mundenveli",
      "M": "മുണ്ടംവേലി",
      "PIN": "682507",
      "DID": "7"
    },
    {
      "POSTID": 2638,
      "E": "Puthuvype",
      "M": "പുതുവൈപ്പ്",
      "PIN": "682508",
      "DID": "7"
    },
    {
      "POSTID": 2639,
      "E": "Ochanthuruthu",
      "M": "ഓച്ചന്‍തുരുത്ത്",
      "PIN": "682508",
      "DID": "7"
    },
    {
      "POSTID": 2640,
      "E": "Nayarambalam",
      "M": "നായരമ്പലം",
      "PIN": "682509",
      "DID": "7"
    },
    {
      "POSTID": 2641,
      "E": "Nedumgad",
      "M": "നെടുങ്ങാട്",
      "PIN": "682509",
      "DID": "7"
    },
    {
      "POSTID": 2642,
      "E": "Azheekal",
      "M": "അഴീക്കല്‍",
      "PIN": "682508",
      "DID": "7"
    },
    {
      "POSTID": 2643,
      "E": "Malipuram",
      "M": "മാലിപ്പുറം",
      "PIN": "682511",
      "DID": "7"
    },
    {
      "POSTID": 2644,
      "E": "West Veliyathunad ",
      "M": "വെസ്റ്റ് വെളിയത്തുനാട്",
      "PIN": "683511",
      "DID": "7"
    },
    {
      "POSTID": 2645,
      "E": "Androth",
      "M": "",
      "PIN": "682551",
      "DID": "7"
    },
    {
      "POSTID": 2646,
      "E": "Amini",
      "M": "",
      "PIN": "682552",
      "DID": "7"
    },
    {
      "POSTID": 2647,
      "E": "Agathi",
      "M": "",
      "PIN": "682553",
      "DID": "7"
    },
    {
      "POSTID": 2648,
      "E": "Chetlat",
      "M": "",
      "PIN": "682554",
      "DID": "7"
    },
    {
      "POSTID": 2649,
      "E": "Bitra",
      "M": "",
      "PIN": "682555",
      "DID": "7"
    },
    {
      "POSTID": 2650,
      "E": "Kavaratti",
      "M": "",
      "PIN": "682555",
      "DID": "7"
    },
    {
      "POSTID": 2651,
      "E": "Kadamat",
      "M": "",
      "PIN": "682556",
      "DID": "7"
    },
    {
      "POSTID": 2652,
      "E": "Kalpeni",
      "M": "",
      "PIN": "682557",
      "DID": "7"
    },
    {
      "POSTID": 2653,
      "E": "Kiltan",
      "M": "",
      "PIN": "682558",
      "DID": "7"
    },
    {
      "POSTID": 2654,
      "E": "Minicoy",
      "M": "",
      "PIN": "682559",
      "DID": "7"
    },
    {
      "POSTID": 2655,
      "E": "Aluva",
      "M": "ആലുവ",
      "PIN": "683101",
      "DID": "7"
    },
    {
      "POSTID": 2656,
      "E": "Union Christian College",
      "M": "യൂണിയന്‍ ക്രിസ്ത്യന്‍ കോളേജ്",
      "PIN": "683102",
      "DID": "7"
    },
    {
      "POSTID": 2657,
      "E": "West Kadungalloor",
      "M": "വെസ്റ്റ് കടുങ്ങല്ലൂര്‍",
      "PIN": "683110",
      "DID": "7"
    },
    {
      "POSTID": 2658,
      "E": "Aluva North",
      "M": "",
      "PIN": "683103",
      "DID": "7"
    },
    {
      "POSTID": 2659,
      "E": "Desom",
      "M": "ദേശം",
      "PIN": "683102",
      "DID": "7"
    },
    {
      "POSTID": 2660,
      "E": "Rajagiri",
      "M": "രാജഗിരി ",
      "PIN": "683104",
      "DID": "7"
    },
    {
      "POSTID": 2661,
      "E": "Kalamasseri",
      "M": "കളമശ്ശേരി",
      "PIN": "683104",
      "DID": "7"
    },
    {
      "POSTID": 2662,
      "E": "Erumathala",
      "M": "എരുമത്തല",
      "PIN": "683112",
      "DID": "7"
    },
    {
      "POSTID": 2663,
      "E": "South Vazhakulam",
      "M": "സൗത്ത് വാഴക്കുളം",
      "PIN": "683105",
      "DID": "7"
    },
    {
      "POSTID": 2664,
      "E": "Thottumugham",
      "M": "തോട്ടുംമുഖം",
      "PIN": "683105",
      "DID": "7"
    },
    {
      "POSTID": 2665,
      "E": "Thaikkattukara",
      "M": "തായ്ക്കാട്ടുകര",
      "PIN": "683106",
      "DID": "7"
    },
    {
      "POSTID": 2666,
      "E": "Marampilly",
      "M": "മാറംപള്ളി",
      "PIN": "683105",
      "DID": "7"
    },
    {
      "POSTID": 2667,
      "E": "Uliyannoor",
      "M": "ഉളിയന്നൂര്‍",
      "PIN": "683108",
      "DID": "7"
    },
    {
      "POSTID": 2668,
      "E": "Thottakattukara",
      "M": "തോട്ടയ്ക്കാട്ടുകര",
      "PIN": "683108",
      "DID": "7"
    },
    {
      "POSTID": 2669,
      "E": "Kalamesseri Development plot",
      "M": "കളമശ്ശേരി ഡവ:പ്ലോട്ട്",
      "PIN": "683104",
      "DID": "7"
    },
    {
      "POSTID": 2670,
      "E": "Muppathadam",
      "M": "മുപ്പത്തടം",
      "PIN": "683110",
      "DID": "7"
    },
    {
      "POSTID": 2671,
      "E": "Kochi Air Port",
      "M": "കൊച്ചി എയര്‍പോര്‍ട്ട്",
      "PIN": "683111",
      "DID": "7"
    },
    {
      "POSTID": 2672,
      "E": "Manjummel",
      "M": "മഞ്ഞുമ്മല്‍",
      "PIN": "683501",
      "DID": "7"
    },
    {
      "POSTID": 2673,
      "E": "Udyogamandal",
      "M": "ഉദ്യോഗമണ്ഡല്‍",
      "PIN": "683501",
      "DID": "7"
    },
    {
      "POSTID": 2674,
      "E": "Binanipuram",
      "M": "ബിനാനിപുരം",
      "PIN": "683502",
      "DID": "7"
    },
    {
      "POSTID": 2675,
      "E": "H M T Colony",
      "M": "എച്ച്.എം.റ്റി കോളനി",
      "PIN": "683503",
      "DID": "7"
    },
    {
      "POSTID": 2676,
      "E": "Kuttikattukara",
      "M": "കുറ്റിക്കാട്ടുകര",
      "PIN": "683501",
      "DID": "7"
    },
    {
      "POSTID": 2677,
      "E": "Neerikode",
      "M": "നീറിക്കോട്",
      "PIN": "683511",
      "DID": "7"
    },
    {
      "POSTID": 2678,
      "E": "Panayikulam",
      "M": "പാനായിക്കുളം",
      "PIN": "683511",
      "DID": "7"
    },
    {
      "POSTID": 2679,
      "E": "Alangad",
      "M": "ആലങ്ങാട്",
      "PIN": "683511",
      "DID": "7"
    },
    {
      "POSTID": 2680,
      "E": "Karumallur",
      "M": "കരുമാല്ലൂര്‍",
      "PIN": "683511",
      "DID": "7"
    },
    {
      "POSTID": 2681,
      "E": "Puthenvelikara",
      "M": "",
      "PIN": "683512",
      "DID": "7"
    },
    {
      "POSTID": 2682,
      "E": "Chendamangalam",
      "M": "ചേന്ദമംഗലം",
      "PIN": "683512",
      "DID": "7"
    },
    {
      "POSTID": 2683,
      "E": "Nanthiattukunnam",
      "M": "നന്ത്യാട്ടുകുന്നം",
      "PIN": "683513",
      "DID": "7"
    },
    {
      "POSTID": 2684,
      "E": "North Paravur",
      "M": "നോര്‍ത്ത് പരവൂര്‍",
      "PIN": "683513",
      "DID": "7"
    },
    {
      "POSTID": 2685,
      "E": "Ezhikara",
      "M": "ഏഴിക്കര",
      "PIN": "683513",
      "DID": "7"
    },
    {
      "POSTID": 2686,
      "E": "Cherai",
      "M": "ചെറായി",
      "PIN": "683514",
      "DID": "7"
    },
    {
      "POSTID": 2687,
      "E": "Palliport",
      "M": "പള്ളിപോര്‍ട്ട്",
      "PIN": "683515",
      "DID": "7"
    },
    {
      "POSTID": 2688,
      "E": "Maliyankara",
      "M": "മാല്യങ്കര",
      "PIN": "683516",
      "DID": "7"
    },
    {
      "POSTID": 2689,
      "E": "Moothakunnam",
      "M": "മൂത്തകുന്നം",
      "PIN": "683516",
      "DID": "7"
    },
    {
      "POSTID": 2690,
      "E": "Varapuzha",
      "M": "വരാപ്പുഴ ",
      "PIN": "683517",
      "DID": "7"
    },
    {
      "POSTID": 2691,
      "E": "Varapuzha Landing",
      "M": "വരാപ്പുഴ ലാന്‍ഡിംഗ്",
      "PIN": "683517",
      "DID": "7"
    },
    {
      "POSTID": 2692,
      "E": "Koonammavu",
      "M": "കൂനമ്മാവ്",
      "PIN": "683518",
      "DID": "7"
    },
    {
      "POSTID": 2693,
      "E": "Kaitharam",
      "M": "കൈതാരം",
      "PIN": "683519",
      "DID": "7"
    },
    {
      "POSTID": 2694,
      "E": "Mannam Paravur",
      "M": "മന്നം പരവൂര്‍",
      "PIN": "683520",
      "DID": "7"
    },
    {
      "POSTID": 2695,
      "E": "Thathappilly",
      "M": "തത്തപ്പിള്ളി",
      "PIN": "683520",
      "DID": "7"
    },
    {
      "POSTID": 2696,
      "E": "Vadakkumpuram",
      "M": "വടക്കുംപുറം",
      "PIN": "683521",
      "DID": "7"
    },
    {
      "POSTID": 2697,
      "E": "Vadakkekara",
      "M": "വടക്കേക്കര",
      "PIN": "683522",
      "DID": "7"
    },
    {
      "POSTID": 2698,
      "E": "Kunjithai",
      "M": "കുഞ്ഞിത്തൈ",
      "PIN": "683522",
      "DID": "7"
    },
    {
      "POSTID": 2699,
      "E": "Manikoth",
      "M": "ഗോതുരുത്ത്",
      "PIN": "671316",
      "DID": "7"
    },
    {
      "POSTID": 2700,
      "E": "Kunnukara",
      "M": "കുന്നുകര",
      "PIN": "683578",
      "DID": "7"
    },
    {
      "POSTID": 2701,
      "E": "Konrpilly",
      "M": "കൊങ്ങോര്‍പ്പിള്ളി",
      "PIN": "683518",
      "DID": "7"
    },
    {
      "POSTID": 2702,
      "E": "Pulluvazhi",
      "M": "പുല്ലുവഴി",
      "PIN": "683541",
      "DID": "7"
    },
    {
      "POSTID": 2703,
      "E": "Keezhillam",
      "M": "കീഴില്ലം",
      "PIN": "683541",
      "DID": "7"
    },
    {
      "POSTID": 2704,
      "E": "Airapuram",
      "M": "ഐരാപുരം",
      "PIN": "683541",
      "DID": "7"
    },
    {
      "POSTID": 2705,
      "E": "Kuruppampady",
      "M": "കുറുപ്പംപടി",
      "PIN": "683545",
      "DID": "7"
    },
    {
      "POSTID": 2706,
      "E": "Perumbavoor",
      "M": "പെരുമ്പാവൂര്‍",
      "PIN": "683542",
      "DID": "7"
    },
    {
      "POSTID": 2707,
      "E": "Rayonpuram",
      "M": "റയോണ്‍പുരം",
      "PIN": "683543",
      "DID": "7"
    },
    {
      "POSTID": 2708,
      "E": "Alattuchira",
      "M": "ആലാട്ടുചിറ",
      "PIN": "683544",
      "DID": "7"
    },
    {
      "POSTID": 2709,
      "E": "Elambakappilly ",
      "M": "ഇളമ്പകപ്പിള്ളി",
      "PIN": "683544",
      "DID": "7"
    },
    {
      "POSTID": 2710,
      "E": "Edavoor",
      "M": "ഇടവൂര്‍",
      "PIN": "683544",
      "DID": "7"
    },
    {
      "POSTID": 2711,
      "E": "Koovappady",
      "M": "കൂവപ്പടി",
      "PIN": "683544",
      "DID": "7"
    },
    {
      "POSTID": 2712,
      "E": "Aimurikara",
      "M": "ഐമുറിക്കര",
      "PIN": "683544",
      "DID": "7"
    },
    {
      "POSTID": 2713,
      "E": "Kodanad",
      "M": "കോടനാട്",
      "PIN": "683544",
      "DID": "7"
    },
    {
      "POSTID": 2714,
      "E": "Cheranalloor",
      "M": "ചേരാനല്ലൂര്‍ പെരുമ്പാവൂര്‍",
      "PIN": "683544",
      "DID": "7"
    },
    {
      "POSTID": 2715,
      "E": "Aruvappara",
      "M": "അരുവപ്പാറ",
      "PIN": "683545",
      "DID": "7"
    },
    {
      "POSTID": 2716,
      "E": "Rayamangalam",
      "M": "രായമംഗലം",
      "PIN": "683545",
      "DID": "7"
    },
    {
      "POSTID": 2717,
      "E": "Nedungapra",
      "M": "നെടുങ്ങപ്ര",
      "PIN": "683545",
      "DID": "7"
    },
    {
      "POSTID": 2718,
      "E": "Methala",
      "M": "മേതല",
      "PIN": "683545",
      "DID": "7"
    },
    {
      "POSTID": 2719,
      "E": "Thuruthy",
      "M": "തുരുത്തി",
      "PIN": "683545",
      "DID": "7"
    },
    {
      "POSTID": 2720,
      "E": "Paniely",
      "M": "പാണിയേലി",
      "PIN": "683546",
      "DID": "7"
    },
    {
      "POSTID": 2721,
      "E": "Mudakuzha",
      "M": "മുടക്കുഴ",
      "PIN": "683546",
      "DID": "7"
    },
    {
      "POSTID": 2722,
      "E": "Chundakuzhy",
      "M": "ചുണ്ടക്കുഴി",
      "PIN": "683546",
      "DID": "7"
    },
    {
      "POSTID": 2723,
      "E": "Vengoor",
      "M": "വേങ്ങൂര്‍",
      "PIN": "683546",
      "DID": "7"
    },
    {
      "POSTID": 2724,
      "E": "Mudickal",
      "M": "മുടിക്കല്‍",
      "PIN": "683547",
      "DID": "7"
    },
    {
      "POSTID": 2725,
      "E": "Ponjassery",
      "M": "പോഞ്ഞാശ്ശേരി",
      "PIN": "683547",
      "DID": "7"
    },
    {
      "POSTID": 2726,
      "E": "Iringole",
      "M": "ഇരിങ്ങോള്‍",
      "PIN": "683548",
      "DID": "7"
    },
    {
      "POSTID": 2727,
      "E": "Asamannoor",
      "M": "അശമന്നൂര്‍",
      "PIN": "683549",
      "DID": "7"
    },
    {
      "POSTID": 2728,
      "E": "Vaikara",
      "M": "വായ്ക്കര",
      "PIN": "683549",
      "DID": "7"
    },
    {
      "POSTID": 2729,
      "E": "Okkal",
      "M": "ഒക്കല്‍",
      "PIN": "683550",
      "DID": "7"
    },
    {
      "POSTID": 2730,
      "E": "Allapra",
      "M": "അല്ലപ്ര",
      "PIN": "683553",
      "DID": "7"
    },
    {
      "POSTID": 2731,
      "E": "Vengola",
      "M": "വെങ്ങോല",
      "PIN": "683554",
      "DID": "7"
    },
    {
      "POSTID": 2732,
      "E": "Kombanad",
      "M": "കൊമ്പനാട്",
      "PIN": "683546",
      "DID": "7"
    },
    {
      "POSTID": 2733,
      "E": "Valayanchirangara",
      "M": "വളയന്‍ചിറങ്ങര",
      "PIN": "683556",
      "DID": "7"
    },
    {
      "POSTID": 2734,
      "E": "Vengola West",
      "M": "വെസ്റ്റ് വെങ്ങോല",
      "PIN": "683556",
      "DID": "7"
    },
    {
      "POSTID": 2735,
      "E": "Thrikkalathoor ",
      "M": "തൃക്കളത്തൂര്‍",
      "PIN": "683541",
      "DID": "7"
    },
    {
      "POSTID": 2736,
      "E": "Malayidamthuruth",
      "M": "മലയിടംതുരുത്ത്",
      "PIN": "683561",
      "DID": "7"
    },
    {
      "POSTID": 2737,
      "E": "Edathala",
      "M": "എടത്തല ",
      "PIN": "683561",
      "DID": "7"
    },
    {
      "POSTID": 2738,
      "E": "Vilangu",
      "M": "വിലങ്ങ്",
      "PIN": "683561",
      "DID": "7"
    },
    {
      "POSTID": 2739,
      "E": "Pattimattom",
      "M": "പട്ടിമറ്റം",
      "PIN": "683562",
      "DID": "7"
    },
    {
      "POSTID": 2740,
      "E": "Kizhakkambalam",
      "M": "കിഴക്കമ്പലം",
      "PIN": "683562",
      "DID": "7"
    },
    {
      "POSTID": 2741,
      "E": "Naval Armament Depot.",
      "M": "നേവല്‍ അര്‍മമെന്റ് ഡിപ്പോ - ആലുവ",
      "PIN": "683563",
      "DID": "7"
    },
    {
      "POSTID": 2742,
      "E": "Edathala North",
      "M": "എടത്തല നോര്‍ത്ത്",
      "PIN": "683564",
      "DID": "7"
    },
    {
      "POSTID": 2743,
      "E": "Pazhamthottam",
      "M": "പഴന്തോട്ടം",
      "PIN": "683565",
      "DID": "7"
    },
    {
      "POSTID": 2744,
      "E": "Kumarapuram",
      "M": "കുമാരപുരം",
      "PIN": "683565",
      "DID": "7"
    },
    {
      "POSTID": 2745,
      "E": "Peringala",
      "M": "പെരിങ്ങാല",
      "PIN": "683565",
      "DID": "7"
    },
    {
      "POSTID": 2746,
      "E": "Vembilly",
      "M": "വെമ്പിള്ളി",
      "PIN": "683565",
      "DID": "7"
    },
    {
      "POSTID": 2747,
      "E": "Chowwera",
      "M": "ചൊവ്വര",
      "PIN": "683571",
      "DID": "7"
    },
    {
      "POSTID": 2748,
      "E": "Nayathode",
      "M": "നായത്തോട്",
      "PIN": "683572",
      "DID": "7"
    },
    {
      "POSTID": 2749,
      "E": "Puliyanam ",
      "M": "പുളിയനം",
      "PIN": "683572",
      "DID": "7"
    },
    {
      "POSTID": 2750,
      "E": "Angamally",
      "M": "അങ്കമാലി ",
      "PIN": "683572",
      "DID": "7"
    },
    {
      "POSTID": 2751,
      "E": "Elavoor",
      "M": "എളവൂര്‍",
      "PIN": "683572",
      "DID": "7"
    },
    {
      "POSTID": 2752,
      "E": "Vappalassery",
      "M": "വാപ്പാലശ്ശേരി",
      "PIN": "683572",
      "DID": "7"
    },
    {
      "POSTID": 2753,
      "E": "Kidangoor",
      "M": "കിടങ്ങൂര്‍",
      "PIN": "683572",
      "DID": "7"
    },
    {
      "POSTID": 2754,
      "E": "Angamally South",
      "M": "അങ്കമാലി സൗത്ത്",
      "PIN": "683573",
      "DID": "7"
    },
    {
      "POSTID": 2755,
      "E": "Piraroor",
      "M": "പിരാരൂര്‍",
      "PIN": "683574",
      "DID": "7"
    },
    {
      "POSTID": 2756,
      "E": "Mattoor",
      "M": "മറ്റൂര്‍",
      "PIN": "683574",
      "DID": "7"
    },
    {
      "POSTID": 2757,
      "E": "Manickamangalam",
      "M": "മാണിക്കമംഗലം",
      "PIN": "683574",
      "DID": "7"
    },
    {
      "POSTID": 2758,
      "E": "Kalady",
      "M": "കാലടി ",
      "PIN": "683574",
      "DID": "7"
    },
    {
      "POSTID": 2759,
      "E": "Yordhanapuram",
      "M": "യോര്‍ദ്ദനാപുരം",
      "PIN": "683574",
      "DID": "7"
    },
    {
      "POSTID": 2760,
      "E": "Kanjoor",
      "M": "കാഞ്ഞൂര്‍",
      "PIN": "683575",
      "DID": "7"
    },
    {
      "POSTID": 2761,
      "E": "Thuravumkara",
      "M": "തുറവുങ്കര",
      "PIN": "683575",
      "DID": "7"
    },
    {
      "POSTID": 2762,
      "E": "Karukutty",
      "M": "കറുകുറ്റി",
      "PIN": "683576",
      "DID": "7"
    },
    {
      "POSTID": 2763,
      "E": "Mookkannur",
      "M": "മൂക്കന്നൂര്‍",
      "PIN": "683577",
      "DID": "7"
    },
    {
      "POSTID": 2764,
      "E": "Azhakam",
      "M": "ആഴകം",
      "PIN": "683577",
      "DID": "7"
    },
    {
      "POSTID": 2765,
      "E": "Ezhattummugham",
      "M": "ഏഴാറ്റുമുഖം",
      "PIN": "683577",
      "DID": "7"
    },
    {
      "POSTID": 2766,
      "E": "Thabore",
      "M": "താബോര്‍",
      "PIN": "683577",
      "DID": "7"
    },
    {
      "POSTID": 2767,
      "E": "South Aduvassery",
      "M": "സൗത്ത് അടുവാശ്ശേരി",
      "PIN": "683578",
      "DID": "7"
    },
    {
      "POSTID": 2768,
      "E": "Chengamanad",
      "M": "ചെങ്ങമനാട്",
      "PIN": "683578",
      "DID": "7"
    },
    {
      "POSTID": 2769,
      "E": "Parakkadavu ",
      "M": "പാറക്കടവ്",
      "PIN": "683579",
      "DID": "7"
    },
    {
      "POSTID": 2770,
      "E": "Airoor",
      "M": "അയിരൂര്‍",
      "PIN": "683579",
      "DID": "7"
    },
    {
      "POSTID": 2771,
      "E": "Vattaparambu ",
      "M": "വട്ടപ്പറമ്പ്",
      "PIN": "683579",
      "DID": "7"
    },
    {
      "POSTID": 2772,
      "E": "Kurumassery",
      "M": "കുറുമശ്ശേരി",
      "PIN": "683579",
      "DID": "7"
    },
    {
      "POSTID": 2773,
      "E": "Sreemoolanagaram",
      "M": "ശ്രീമൂലനഗരം",
      "PIN": "683580",
      "DID": "7"
    },
    {
      "POSTID": 2774,
      "E": "Vellarappilly South",
      "M": "വെള്ളാരപ്പിള്ളി സൗത്ത്",
      "PIN": "683580",
      "DID": "7"
    },
    {
      "POSTID": 2775,
      "E": "Ayyampuzha",
      "M": "അയ്യമ്പുഴ",
      "PIN": "683581",
      "DID": "7"
    },
    {
      "POSTID": 2776,
      "E": "Manjapra",
      "M": "മഞ്ഞപ്ര",
      "PIN": "683581",
      "DID": "7"
    },
    {
      "POSTID": 2777,
      "E": "Anappara",
      "M": "ആനപ്പാറ",
      "PIN": "683581",
      "DID": "7"
    },
    {
      "POSTID": 2778,
      "E": "Chully",
      "M": "ചുള്ളി",
      "PIN": "683581",
      "DID": "7"
    },
    {
      "POSTID": 2779,
      "E": "Paduvapuram",
      "M": "പാദുവാപുരം",
      "PIN": "683582",
      "DID": "7"
    },
    {
      "POSTID": 2780,
      "E": "Kalady Plantation",
      "M": "കാലടി പ്ലാന്റേഷന്‍",
      "PIN": "683583",
      "DID": "7"
    },
    {
      "POSTID": 2781,
      "E": "Neeleeswaram",
      "M": "നീലീശ്വരം",
      "PIN": "683574",
      "DID": "7"
    },
    {
      "POSTID": 2782,
      "E": "Athani",
      "M": "അത്താണി",
      "PIN": "683585",
      "DID": "7"
    },
    {
      "POSTID": 2783,
      "E": "Nedumbasseri",
      "M": "നെടുമ്പാശ്ശേരി",
      "PIN": "683585",
      "DID": "7"
    },
    {
      "POSTID": 2784,
      "E": "Thuravoor",
      "M": "തുറവൂര്‍",
      "PIN": "683572",
      "DID": "7"
    },
    {
      "POSTID": 2785,
      "E": "Malayattoor ",
      "M": "മലയാറ്റൂര്‍",
      "PIN": "683587",
      "DID": "7"
    },
    {
      "POSTID": 2786,
      "E": "Mekkad",
      "M": "മേക്കാട്",
      "PIN": "683589",
      "DID": "7"
    },
    {
      "POSTID": 2787,
      "E": "Parappuram",
      "M": "പാറപ്പുറം",
      "PIN": "683593",
      "DID": "7"
    },
    {
      "POSTID": 2788,
      "E": "Puthenvelikkara",
      "M": "പുത്തന്‍വേലിക്കര",
      "PIN": "683594",
      "DID": "7"
    },
    {
      "POSTID": 2789,
      "E": "Elanthikara",
      "M": "ഇളന്തിക്കര",
      "PIN": "683594",
      "DID": "7"
    },
    {
      "POSTID": 2790,
      "E": "Kuthiathode-Ekm",
      "M": "എന്‍ കുത്തിയതോട് ",
      "PIN": "683594",
      "DID": "7"
    },
    {
      "POSTID": 2791,
      "E": "Manjamala",
      "M": "",
      "PIN": "685313",
      "DID": "1"
    },
    {
      "POSTID": 2792,
      "E": "Elappara",
      "M": "ഏലപ്പാറ",
      "PIN": "685501",
      "DID": "6"
    },
    {
      "POSTID": 2793,
      "E": "Chinnar",
      "M": "ചിന്നാര്‍",
      "PIN": "685501",
      "DID": "6"
    },
    {
      "POSTID": 2794,
      "E": "Kochukarumtharuvi ",
      "M": "കൊച്ചുകരുന്തരുവി",
      "PIN": "685501",
      "DID": "6"
    },
    {
      "POSTID": 2795,
      "E": "Hailey Buria",
      "M": "ഹെലിബറിയ",
      "PIN": "685501",
      "DID": "6"
    },
    {
      "POSTID": 2796,
      "E": "Passupara",
      "M": "പശുപ്പാറ",
      "PIN": "685501",
      "DID": "6"
    },
    {
      "POSTID": 2797,
      "E": "Cheenthalar ",
      "M": "ചീന്തലാര്‍",
      "PIN": "685501",
      "DID": "6"
    },
    {
      "POSTID": 2798,
      "E": "Pullikanam",
      "M": "പുള്ളിക്കാനം",
      "PIN": "685503",
      "DID": "6"
    },
    {
      "POSTID": 2799,
      "E": "Vagamon",
      "M": "വാഗമണ്‍‌",
      "PIN": "685503",
      "DID": "6"
    },
    {
      "POSTID": 2800,
      "E": "Kottamala",
      "M": "കോട്ടമല",
      "PIN": "685503",
      "DID": "6"
    },
    {
      "POSTID": 2801,
      "E": "Fairfield",
      "M": "ഫെയര്‍ ഫീല്‍ഡ്",
      "PIN": "685504",
      "DID": "6"
    },
    {
      "POSTID": 2802,
      "E": "Kolahalamedu",
      "M": "കോലാഹലമേട്",
      "PIN": "685504",
      "DID": "6"
    },
    {
      "POSTID": 2803,
      "E": "Mathaipara",
      "M": "മത്തായിപ്പാറ",
      "PIN": "685505",
      "DID": "6"
    },
    {
      "POSTID": 2804,
      "E": "Mattuthavalam",
      "M": "മാട്ടുതാവളം",
      "PIN": "685505",
      "DID": "6"
    },
    {
      "POSTID": 2805,
      "E": "Upputhara",
      "M": "ഉപ്പുതറ",
      "PIN": "685505",
      "DID": "6"
    },
    {
      "POSTID": 2806,
      "E": "Lonetree",
      "M": "ലോണ്‍ട്രി",
      "PIN": "685505",
      "DID": "6"
    },
    {
      "POSTID": 2807,
      "E": "Karimkulam Chappath",
      "M": "കരിംകുളം ചപ്പാത്ത്",
      "PIN": "685505",
      "DID": "6"
    },
    {
      "POSTID": 2808,
      "E": "Ayyappancoil",
      "M": "അയ്യപ്പന്‍ കോവില്‍",
      "PIN": "685507",
      "DID": "6"
    },
    {
      "POSTID": 2809,
      "E": "Kalthotty",
      "M": "കല്‍ത്തൊട്ടി",
      "PIN": "685507",
      "DID": "6"
    },
    {
      "POSTID": 2810,
      "E": "Kattapana",
      "M": "കട്ടപ്പന",
      "PIN": "685508",
      "DID": "6"
    },
    {
      "POSTID": 2811,
      "E": "Attappallam",
      "M": "അട്ടപ്പള്ളം",
      "PIN": "685509",
      "DID": "6"
    },
    {
      "POSTID": 2812,
      "E": "Amaravathy",
      "M": "അമരാവതി",
      "PIN": "685509",
      "DID": "6"
    },
    {
      "POSTID": 2813,
      "E": "Kumily",
      "M": "കുമിളി",
      "PIN": "685509",
      "DID": "6"
    },
    {
      "POSTID": 2814,
      "E": "Spring Valley",
      "M": "സ് പ്രിംഗ്  വാലി",
      "PIN": "685509",
      "DID": "6"
    },
    {
      "POSTID": 2815,
      "E": "Chakkupallam",
      "M": "ചക്കുപള്ളം",
      "PIN": "685509",
      "DID": "6"
    },
    {
      "POSTID": 2816,
      "E": "Chellarcoil ",
      "M": "ചെല്ലാര്‍കോവില്‍",
      "PIN": "685512",
      "DID": "6"
    },
    {
      "POSTID": 2817,
      "E": "Erattayar North",
      "M": "ഇരട്ടയാര്‍ നോര്‍ത്ത്",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2818,
      "E": "Idinjamala ",
      "M": "ഇടിഞ്ഞമല",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2819,
      "E": "Ettithope",
      "M": "ഈട്ടിത്തോപ്പ്",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2820,
      "E": "Uppukandam",
      "M": "ഉപ്പുകണ്ടം",
      "PIN": "685510",
      "DID": "6"
    },
    {
      "POSTID": 2821,
      "E": "Valiyathovala",
      "M": "വലിയതോവാള",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2822,
      "E": "Santhigram",
      "M": "ശാന്തിഗ്രാം",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2823,
      "E": "Bethel",
      "M": "ബഥേല്‍",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2824,
      "E": "Kochuthovala",
      "M": "കൊച്ചുതോവാള",
      "PIN": "685510",
      "DID": "6"
    },
    {
      "POSTID": 2825,
      "E": "Chempakapara",
      "M": "ചെമ്പകപ്പാറ",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2826,
      "E": "Melekuppachampady",
      "M": "മേലേകുപ്പച്ചാംപടി",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2827,
      "E": "Nariyampara",
      "M": "നരിയമ്പാറ",
      "PIN": "685511",
      "DID": "6"
    },
    {
      "POSTID": 2828,
      "E": "Kanchiyar",
      "M": "കാഞ്ചിയാര്‍",
      "PIN": "685511",
      "DID": "6"
    },
    {
      "POSTID": 2829,
      "E": "Thoppipala",
      "M": "തൊപ്പിപ്പാള",
      "PIN": "685511",
      "DID": "6"
    },
    {
      "POSTID": 2830,
      "E": "Thovarayar",
      "M": "തൊവരയാര്‍",
      "PIN": "685511",
      "DID": "6"
    },
    {
      "POSTID": 2831,
      "E": "Anakkara",
      "M": "അണക്കര",
      "PIN": "685512",
      "DID": "6"
    },
    {
      "POSTID": 2832,
      "E": "Erattayar",
      "M": "ഇരട്ടയാര്‍",
      "PIN": "685514",
      "DID": "6"
    },
    {
      "POSTID": 2833,
      "E": "Pandipara",
      "M": "പാണ്ടിപ്പാറ",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2834,
      "E": "Puliyanamala",
      "M": "പുളിയന്‍മല",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2835,
      "E": "Padamugham",
      "M": "പടമുഖം",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 2836,
      "E": "Prakash",
      "M": "പ്രകാശ്",
      "PIN": "685609",
      "DID": "6"
    },
    {
      "POSTID": 2837,
      "E": "Anniyartholu",
      "M": "അന്യാര്‍തൊളു",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2838,
      "E": "Mulakaramedu",
      "M": "മുളകരമേട്",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2839,
      "E": "Vazhavara",
      "M": "വാഴവര",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2840,
      "E": "Kattapana South",
      "M": "കട്ടപ്പന സൗത്ത്",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2841,
      "E": "Kamakshy",
      "M": "കാമാക്ഷി",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2842,
      "E": "Calvary Mount",
      "M": "കാല്‍വരി മൗണ്ട്",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2843,
      "E": "Kadamakuzhi",
      "M": "കടമാക്കുഴി",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2844,
      "E": "Nellipara",
      "M": "നെല്ലിപ്പാറ",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2845,
      "E": "Perumthotty",
      "M": "പെരുംതൊട്ടി",
      "PIN": "685609",
      "DID": "6"
    },
    {
      "POSTID": 2846,
      "E": "Vellayamkudy",
      "M": "വെള്ളയാംകുടി",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2847,
      "E": "Konnackamali",
      "M": "കൊന്നയ്ക്കാമാലി",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 2848,
      "E": "Marigiri ",
      "M": "മേരിഗിരി",
      "PIN": "685609",
      "DID": "6"
    },
    {
      "POSTID": 2849,
      "E": "Thopramkudy",
      "M": "തോപ്രാംകുടി",
      "PIN": "685609",
      "DID": "6"
    },
    {
      "POSTID": 2850,
      "E": "Thankamony",
      "M": "തങ്കമണി",
      "PIN": "685515",
      "DID": "6"
    },
    {
      "POSTID": 2851,
      "E": "Pallikunnu",
      "M": "പള്ളിക്കുന്ന്",
      "PIN": "685531",
      "DID": "6"
    },
    {
      "POSTID": 2852,
      "E": "Peermade",
      "M": "പീരുമേട്",
      "PIN": "685531",
      "DID": "6"
    },
    {
      "POSTID": 2853,
      "E": "Lakshmicoil",
      "M": "ലക്ഷ്മികോവില്‍",
      "PIN": "685531",
      "DID": "6"
    },
    {
      "POSTID": 2854,
      "E": "Karadikuzhy",
      "M": "കരടിക്കുഴി",
      "PIN": "685531",
      "DID": "6"
    },
    {
      "POSTID": 2855,
      "E": "Kuttikkanam",
      "M": "കുട്ടിക്കാനം",
      "PIN": "685531",
      "DID": "6"
    },
    {
      "POSTID": 2856,
      "E": "Glenmary",
      "M": "ഗ്ലെന്‍മേരി",
      "PIN": "685531",
      "DID": "6"
    },
    {
      "POSTID": 2857,
      "E": "Paloorkavu",
      "M": "പാലൂര്‍ക്കാവ് ",
      "PIN": "685532",
      "DID": "6"
    },
    {
      "POSTID": 2858,
      "E": "Paloorkavu Central",
      "M": "പാലൂര്‍ക്കാവ് സെന്‍ട്രല്‍",
      "PIN": "685532",
      "DID": "6"
    },
    {
      "POSTID": 2859,
      "E": "Murinjapuzha",
      "M": "മുറിഞ്ഞപുഴ",
      "PIN": "685532",
      "DID": "6"
    },
    {
      "POSTID": 2860,
      "E": "Kanayankavayal",
      "M": "കണയങ്കവയല്‍",
      "PIN": "685532",
      "DID": "6"
    },
    {
      "POSTID": 2861,
      "E": "Peruvanthanam",
      "M": "പെരുവന്താനം",
      "PIN": "685532",
      "DID": "6"
    },
    {
      "POSTID": 2862,
      "E": "Meloram",
      "M": "മേലോരം",
      "PIN": "685532",
      "DID": "6"
    },
    {
      "POSTID": 2863,
      "E": "Pachakanam",
      "M": "പച്ചക്കാനം",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2864,
      "E": "Pampa Dam",
      "M": "പമ്പ ഡാം",
      "PIN": "685533",
      "DID": "3"
    },
    {
      "POSTID": 2865,
      "E": "Gramby",
      "M": "ഗ്രാംബി",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2866,
      "E": "Arnakal",
      "M": "അരണക്കല്‍",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2867,
      "E": "Moongalar",
      "M": "മൂങ്ങലാര്‍",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2868,
      "E": "Mount",
      "M": "മൗണ്ട്",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2869,
      "E": "Vallakkadavoo(Periyar)",
      "M": "വള്ളക്കടവ് പെരിയാര്‍",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2870,
      "E": "Vandiperiyar",
      "M": "വണ്ടിപ്പെരിയാര്‍",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2871,
      "E": "Wallardie",
      "M": "വാളാര്‍ഡി",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2872,
      "E": "Keerikara",
      "M": "കീരിക്കര",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2873,
      "E": "Gavi",
      "M": "ഗവി",
      "PIN": "685533",
      "DID": "3"
    },
    {
      "POSTID": 2874,
      "E": "Dymock",
      "M": "ഡൈമോക്ക്",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2875,
      "E": "Chottupara",
      "M": "ചോറ്റുപാറ പെരിയാര്‍",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2876,
      "E": "Murukady",
      "M": "മുരുക്കടി",
      "PIN": "685535",
      "DID": "6"
    },
    {
      "POSTID": 2877,
      "E": "Anavilasom",
      "M": "ആനവിലാസം",
      "PIN": "685535",
      "DID": "6"
    },
    {
      "POSTID": 2878,
      "E": "Sasthanoda",
      "M": "ശാസ്താനട",
      "PIN": "685535",
      "DID": "6"
    },
    {
      "POSTID": 2879,
      "E": "Vellaramkunnu",
      "M": "വെള്ളാരംകുന്ന്",
      "PIN": "685535",
      "DID": "6"
    },
    {
      "POSTID": 2880,
      "E": "Periyar Lake",
      "M": "പെരിയാര്‍ ലേക്ക്",
      "PIN": "685536",
      "DID": "6"
    },
    {
      "POSTID": 2881,
      "E": "Thekkady",
      "M": "തേക്കടി",
      "PIN": "685536",
      "DID": "6"
    },
    {
      "POSTID": 2882,
      "E": "Pambanar",
      "M": "പാമ്പനാര്‍",
      "PIN": "685537",
      "DID": "6"
    },
    {
      "POSTID": 2883,
      "E": "Thengakal",
      "M": "തേങ്ങാക്കല്‍",
      "PIN": "685538",
      "DID": "6"
    },
    {
      "POSTID": 2884,
      "E": "Chenkara",
      "M": "ചെങ്കര",
      "PIN": "685533",
      "DID": "6"
    },
    {
      "POSTID": 2885,
      "E": "Pampupara",
      "M": "പാമ്പുപാറ",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2886,
      "E": "Puttady",
      "M": "പുറ്റടി",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2887,
      "E": "Mali",
      "M": "മാലി",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2888,
      "E": "Rajakandam",
      "M": "രാജാക്കണ്ടം",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2889,
      "E": "Vandanmettu",
      "M": "വണ്ടന്‍മേട്",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2890,
      "E": "Cumbummettu",
      "M": "കുമ്പംമെട്ട്",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2891,
      "E": "Kuzhithozhu",
      "M": "കുഴിത്തൊളു",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2892,
      "E": "Nettithozhu",
      "M": "നെറ്റിത്തൊഴു",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2893,
      "E": "Kochara",
      "M": "കൊച്ചറ",
      "PIN": "685551",
      "DID": "6"
    },
    {
      "POSTID": 2894,
      "E": "Pushpakandom",
      "M": "പുഷ്പക്കണ്ടം",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2895,
      "E": "Balagram",
      "M": "ബാലഗ്രാം",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2896,
      "E": "Ramakkalmettu",
      "M": "രാമയ്ക്കല്‍മെട്ട്",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2897,
      "E": "Karunapuram",
      "M": "കരുണാപുരം",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2898,
      "E": "Kallar",
      "M": "കല്ലാര്‍",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2899,
      "E": "Sanniasioda",
      "M": "സന്യാസിയോട",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2900,
      "E": "Combayar",
      "M": "കോമ്പയാര്‍",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2901,
      "E": "Chottupara",
      "M": "ചോറ്റുപാറ ",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2902,
      "E": "Pachady",
      "M": "പച്ചടി",
      "PIN": "685553",
      "DID": "6"
    },
    {
      "POSTID": 2903,
      "E": "Manjappara",
      "M": "മഞ്ഞപ്പാറ",
      "PIN": "685553",
      "DID": "6"
    },
    {
      "POSTID": 2904,
      "E": "Mavadi",
      "M": "മാവടി",
      "PIN": "685553",
      "DID": "6"
    },
    {
      "POSTID": 2905,
      "E": "Ezhukumvayal",
      "M": "എഴുകുംവയല്‍",
      "PIN": "685553",
      "DID": "6"
    },
    {
      "POSTID": 2906,
      "E": "Nedumkandam",
      "M": "നെടുങ്കണ്ടം",
      "PIN": "685553",
      "DID": "6"
    },
    {
      "POSTID": 2907,
      "E": "Chembalam",
      "M": "ചേമ്പളം",
      "PIN": "685553",
      "DID": "6"
    },
    {
      "POSTID": 2908,
      "E": "Udumbanchola",
      "M": "ഉടുമ്പന്‍ചോല",
      "PIN": "685554",
      "DID": "6"
    },
    {
      "POSTID": 2909,
      "E": "Chathurangapara",
      "M": "ചതുരംഗപ്പാറ",
      "PIN": "685554",
      "DID": "6"
    },
    {
      "POSTID": 2910,
      "E": "Chemmannar",
      "M": "ചെമ്മണ്ണാര്‍",
      "PIN": "685554",
      "DID": "6"
    },
    {
      "POSTID": 2911,
      "E": "Pampadumpara",
      "M": "പാമ്പാടുംപാറ",
      "PIN": "685556",
      "DID": "6"
    },
    {
      "POSTID": 2912,
      "E": "Koottar ",
      "M": "കൂട്ടാര്‍",
      "PIN": "685552",
      "DID": "6"
    },
    {
      "POSTID": 2913,
      "E": "Padicup",
      "M": "പടിക്കപ്പ്",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2914,
      "E": "Machiplavu",
      "M": "മച്ചിപ്ലാവ്",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2915,
      "E": "Mannamkandam",
      "M": "മന്നാംകണ്ടം",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2916,
      "E": "Adimali",
      "M": "അടിമാലി",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2917,
      "E": "Anaveratty",
      "M": "ആനവിരട്ടി",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2918,
      "E": "Valara",
      "M": "വാളറ",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2919,
      "E": "Koompanpara",
      "M": "കൂമ്പന്‍പാറ",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2920,
      "E": "Korangatty",
      "M": "കൊരങ്ങാട്ടി",
      "PIN": "685561",
      "DID": "6"
    },
    {
      "POSTID": 2921,
      "E": "Panamkutty",
      "M": "പനംകുട്ടി",
      "PIN": "685562",
      "DID": "6"
    },
    {
      "POSTID": 2922,
      "E": "Mankuva ",
      "M": "മങ്കുവ",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 2923,
      "E": "Mukkudam",
      "M": "മുക്കുടം",
      "PIN": "685562",
      "DID": "6"
    },
    {
      "POSTID": 2924,
      "E": "Kallarkutty",
      "M": "കല്ലാര്‍കുട്ടി",
      "PIN": "685562",
      "DID": "6"
    },
    {
      "POSTID": 2925,
      "E": "South Kathipara",
      "M": "തെക്കേ കത്തിപ്പാറ",
      "PIN": "685562",
      "DID": "6"
    },
    {
      "POSTID": 2926,
      "E": "Perinchankutty ",
      "M": "പെരിഞ്ചാന്‍കുട്ടി",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 2927,
      "E": "Selliampara",
      "M": "ശല്യാംപാറ",
      "PIN": "685563",
      "DID": "6"
    },
    {
      "POSTID": 2928,
      "E": "Cheeppunkal",
      "M": "ചീപ്പുങ്കല്‍",
      "PIN": "686563",
      "DID": "5"
    },
    {
      "POSTID": 2929,
      "E": "Vellathooval",
      "M": "വെള്ളത്തൂവല്‍",
      "PIN": "685563",
      "DID": "6"
    },
    {
      "POSTID": 2930,
      "E": "Konnathady",
      "M": "കൊന്നത്തടി",
      "PIN": "685563",
      "DID": "6"
    },
    {
      "POSTID": 2931,
      "E": "Panickankudy ",
      "M": "പണിക്കന്‍കുടി",
      "PIN": "685571",
      "DID": "6"
    },
    {
      "POSTID": 2932,
      "E": "Muniyara ",
      "M": "മുനിയറ",
      "PIN": "685571",
      "DID": "6"
    },
    {
      "POSTID": 2933,
      "E": "Ponmudi",
      "M": "പൊന്‍മുടി",
      "PIN": "685564",
      "DID": "6"
    },
    {
      "POSTID": 2934,
      "E": "Pallivasal",
      "M": "പള്ളിവാസല്‍ ",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2935,
      "E": "Mankulam",
      "M": "മാങ്കുളം",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2936,
      "E": "Meencut",
      "M": "മീന്‍കട്ട്",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2937,
      "E": "Anakulam",
      "M": "ആനക്കുളം",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2938,
      "E": "Ellackal",
      "M": "എല്ലക്കല്‍",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2939,
      "E": "Kunjithanni ",
      "M": "കുഞ്ചിത്തണ്ണി",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2940,
      "E": "Chithirapuram",
      "M": "ചിത്തിരപുരം",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2941,
      "E": "Sengulam",
      "M": "ശെങ്കുളം",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2942,
      "E": "Bison Valley",
      "M": "ബൈസണ്‍വാലി",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2943,
      "E": "Josegiri",
      "M": "ജോസ്ഗിരി",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2944,
      "E": "Thokkupara",
      "M": "തോക്കുപാറ",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2945,
      "E": "Mammattikanam",
      "M": "മമ്മട്ടിക്കാനം",
      "PIN": "685566",
      "DID": "6"
    },
    {
      "POSTID": 2946,
      "E": "Mukkudi",
      "M": "മുക്കുടില്‍",
      "PIN": "685566",
      "DID": "6"
    },
    {
      "POSTID": 2947,
      "E": "Rajakad",
      "M": "രാജക്കാട്",
      "PIN": "685566",
      "DID": "6"
    },
    {
      "POSTID": 2948,
      "E": "NRCity",
      "M": "എന്‍ ആര്‍ സിറ്റി",
      "PIN": "685566",
      "DID": "6"
    },
    {
      "POSTID": 2949,
      "E": "Chemmannar Kuthumkal",
      "M": "ചെമ്മണ്ണാര്‍-കുത്തുങ്കല്‍",
      "PIN": "685566",
      "DID": "6"
    },
    {
      "POSTID": 2950,
      "E": "Pottankad ",
      "M": "പൊട്ടന്‍കാട്",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 2951,
      "E": "Parathode-Idukky",
      "M": "പാറത്തോട്",
      "PIN": "685571",
      "DID": "6"
    },
    {
      "POSTID": 2952,
      "E": "Pannoor",
      "M": "പന്നൂര്‍",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2953,
      "E": "Malayinchi",
      "M": "മലയിഞ്ചി",
      "PIN": "685595",
      "DID": "6"
    },
    {
      "POSTID": 2954,
      "E": "Mulappuram",
      "M": "മുളപ്പുറം",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2955,
      "E": "Moolakkad",
      "M": "മൂലക്കാട്",
      "PIN": "685595",
      "DID": "6"
    },
    {
      "POSTID": 2956,
      "E": "Karimannur",
      "M": "കരിമണ്ണൂര്‍",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2957,
      "E": "Cheenikuzhi",
      "M": "ചീനിക്കുഴി",
      "PIN": "685595",
      "DID": "6"
    },
    {
      "POSTID": 2958,
      "E": "Neyyasseri",
      "M": "നെയ്യശ്ശേരി",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2959,
      "E": "Peringassery",
      "M": "പെരിങ്ങാശ്ശേരി",
      "PIN": "685595",
      "DID": "6"
    },
    {
      "POSTID": 2960,
      "E": "Cheppukulam",
      "M": "ചെപ്പുകുളം",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2961,
      "E": "Thommankuthu",
      "M": "തൊമ്മന്‍കുത്ത്",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2962,
      "E": "Thattakuzha",
      "M": "തട്ടക്കുഴ",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2963,
      "E": "Parapuzha",
      "M": "പാറപ്പുഴ",
      "PIN": "685582",
      "DID": "6"
    },
    {
      "POSTID": 2964,
      "E": "Pulickathotty",
      "M": "പുളിക്കത്തൊട്ടി",
      "PIN": "685607",
      "DID": "6"
    },
    {
      "POSTID": 2965,
      "E": "Mullaringadu",
      "M": "മുള്ളരിങ്ങാട്",
      "PIN": "685607",
      "DID": "6"
    },
    {
      "POSTID": 2966,
      "E": "Mundanmudy",
      "M": "മുണ്ടന്‍മുടി",
      "PIN": "685607",
      "DID": "6"
    },
    {
      "POSTID": 2967,
      "E": "Vannappuram",
      "M": "വണ്ണപ്പുറം",
      "PIN": "685607",
      "DID": "6"
    },
    {
      "POSTID": 2968,
      "E": "Vandamattam",
      "M": "വണ്ടമറ്റം",
      "PIN": "685582",
      "DID": "6"
    },
    {
      "POSTID": 2969,
      "E": "Kaliyar",
      "M": "കാളിയാര്‍",
      "PIN": "685607",
      "DID": "6"
    },
    {
      "POSTID": 2970,
      "E": "West Kodikulam",
      "M": "പടിഞ്ഞാറെ കോടിക്കുളം",
      "PIN": "685582",
      "DID": "6"
    },
    {
      "POSTID": 2971,
      "E": "Koduveli",
      "M": "കൊടുവേലി",
      "PIN": "685581",
      "DID": "6"
    },
    {
      "POSTID": 2972,
      "E": "Kodikulam",
      "M": "കോടിക്കുളം",
      "PIN": "685582",
      "DID": "6"
    },
    {
      "POSTID": 2973,
      "E": "Purapuzha",
      "M": "പുറപ്പുഴ",
      "PIN": "685583",
      "DID": "6"
    },
    {
      "POSTID": 2974,
      "E": "Vazhithala",
      "M": "വഴിത്തല",
      "PIN": "685583",
      "DID": "6"
    },
    {
      "POSTID": 2975,
      "E": "Kuninji",
      "M": "കുണിഞ്ഞി",
      "PIN": "685583",
      "DID": "6"
    },
    {
      "POSTID": 2976,
      "E": "Arikuzha",
      "M": "അരിക്കുഴ",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2977,
      "E": "Manakkad",
      "M": "മണക്കാട്",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2978,
      "E": "East Kaloor",
      "M": "ഈസ്റ്റ് കലൂര്‍",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2979,
      "E": "Nediyasala",
      "M": "നെടിയശാല",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2980,
      "E": "Vengalloor",
      "M": "വെങ്ങല്ലൂര്‍",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2981,
      "E": "Mailacombu",
      "M": "മൈലക്കൊമ്പ്",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2982,
      "E": "Thodupuzha",
      "M": "തൊടുപുഴ ",
      "PIN": "685584",
      "DID": "6"
    },
    {
      "POSTID": 2983,
      "E": "Puthupariyaram",
      "M": "പുതുപ്പരിയാരം",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2984,
      "E": "Kolani ",
      "M": "കോലാനി",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 2985,
      "E": "Anchiri",
      "M": "അഞ്ചിരി",
      "PIN": "685585",
      "DID": "6"
    },
    {
      "POSTID": 2986,
      "E": "Thekkumbhagam",
      "M": "തെക്കുംഭാഗം",
      "PIN": "685585",
      "DID": "6"
    },
    {
      "POSTID": 2987,
      "E": "Thodupuzha Bazaar",
      "M": "തൊടുപുഴ ബസാര്‍",
      "PIN": "685585",
      "DID": "6"
    },
    {
      "POSTID": 2988,
      "E": "Thodupuzha East",
      "M": "തൊടുപുഴ ഈസ്റ്റ്",
      "PIN": "685585",
      "DID": "6"
    },
    {
      "POSTID": 2989,
      "E": "Ottalloor",
      "M": "ഒറ്റല്ലൂര്‍",
      "PIN": "685586",
      "DID": "6"
    },
    {
      "POSTID": 2990,
      "E": "Vadakkummury",
      "M": "വടക്കുംമുറി",
      "PIN": "685586",
      "DID": "6"
    },
    {
      "POSTID": 2991,
      "E": "Karimkunnam",
      "M": "കരിങ്കുന്നം",
      "PIN": "685586",
      "DID": "6"
    },
    {
      "POSTID": 2992,
      "E": "Thattarathatta",
      "M": "തട്ടാരത്തട്ട",
      "PIN": "685586",
      "DID": "6"
    },
    {
      "POSTID": 2993,
      "E": "Mrala",
      "M": "മ്രാല",
      "PIN": "685587",
      "DID": "6"
    },
    {
      "POSTID": 2994,
      "E": "Muttom-Ek",
      "M": "മുട്ടം ",
      "PIN": "685587",
      "DID": "6"
    },
    {
      "POSTID": 2995,
      "E": "Ellumpuram",
      "M": "എള്ളുംപുറം",
      "PIN": "685587",
      "DID": "6"
    },
    {
      "POSTID": 2996,
      "E": "Thudanganad",
      "M": "തുടങ്ങനാട്",
      "PIN": "685587",
      "DID": "6"
    },
    {
      "POSTID": 2997,
      "E": "Pannimattom",
      "M": "പന്നിമറ്റം",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 2998,
      "E": "Alakode",
      "M": "ആലക്കോട്",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 2999,
      "E": "Elamdesam",
      "M": "ഇളംദേശം",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 3000,
      "E": "Edavetty ",
      "M": "ഇടവെട്ടി",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 3001,
      "E": "Kalayanthani",
      "M": "കലയന്താനി",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 3002,
      "E": "Koovakandam",
      "M": "കൂവകണ്ടം",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 3003,
      "E": "Chilavu",
      "M": "ചിലവ്",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 3004,
      "E": "Devarupara",
      "M": "ദേവരുപാറ",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 3005,
      "E": "Pathipally",
      "M": "പതിപ്പള്ളി",
      "PIN": "685589",
      "DID": "6"
    },
    {
      "POSTID": 3006,
      "E": "Moolamattom",
      "M": "മൂലമറ്റം",
      "PIN": "685589",
      "DID": "6"
    },
    {
      "POSTID": 3007,
      "E": "Moolamattom East",
      "M": "മൂലമറ്റം ഈസ്റ്റ്",
      "PIN": "685589",
      "DID": "6"
    },
    {
      "POSTID": 3008,
      "E": "Ilapilly",
      "M": "ഇലപ്പിള്ളി",
      "PIN": "685589",
      "DID": "6"
    },
    {
      "POSTID": 3009,
      "E": "Edad-Idukki",
      "M": "എടാട്",
      "PIN": "685589",
      "DID": "6"
    },
    {
      "POSTID": 3010,
      "E": "Kannickal",
      "M": "കണ്ണിക്കല്‍",
      "PIN": "685589",
      "DID": "6"
    },
    {
      "POSTID": 3011,
      "E": "Adoormala",
      "M": "അടൂര്‍മല",
      "PIN": "685590",
      "DID": "6"
    },
    {
      "POSTID": 3012,
      "E": "Kudayathoor",
      "M": "കുടയത്തൂര്‍",
      "PIN": "685590",
      "DID": "6"
    },
    {
      "POSTID": 3013,
      "E": "Koovappally",
      "M": "കൂവപ്പള്ളി",
      "PIN": "685590",
      "DID": "6"
    },
    {
      "POSTID": 3014,
      "E": "Arakulam",
      "M": "അറക്കുളം",
      "PIN": "685591",
      "DID": "6"
    },
    {
      "POSTID": 3015,
      "E": "Kanjar ",
      "M": "കാഞ്ഞാര്‍",
      "PIN": "685590",
      "DID": "6"
    },
    {
      "POSTID": 3016,
      "E": "Udumbanoor",
      "M": "ഉടുമ്പന്നൂര്‍",
      "PIN": "685595",
      "DID": "6"
    },
    {
      "POSTID": 3017,
      "E": "Kumaramangalam",
      "M": "കുമാരമംഗലം",
      "PIN": "685608",
      "DID": "6"
    },
    {
      "POSTID": 3018,
      "E": "Kariplangadu",
      "M": "കരിപ്പലങ്ങാട്",
      "PIN": "685601",
      "DID": "6"
    },
    {
      "POSTID": 3019,
      "E": "Kulamavu",
      "M": "കുളമാവ്",
      "PIN": "685601",
      "DID": "6"
    },
    {
      "POSTID": 3020,
      "E": "Nayarupara",
      "M": "നായരുപാറ",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3021,
      "E": "Narakakkanam",
      "M": "നാരകക്കാനം",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3022,
      "E": "Pazhayarikandam",
      "M": "പഴയരിക്കണ്ടം",
      "PIN": "685606",
      "DID": "6"
    },
    {
      "POSTID": 3023,
      "E": "Mariyapuram",
      "M": "മരിയാപുരം",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3024,
      "E": "Mulakuvally",
      "M": "മുളകുവള്ളി",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3025,
      "E": "Manipara",
      "M": "മണിപ്പാറ",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3026,
      "E": "Maniyarangudi",
      "M": "മണിയാറംകുടി",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3027,
      "E": "Alpara",
      "M": "ആല്‍പ്പാറ",
      "PIN": "685606",
      "DID": "6"
    },
    {
      "POSTID": 3028,
      "E": "Rajapuram",
      "M": "രാജപുരം",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 3029,
      "E": "Rajamudi",
      "M": "രാജമുടി",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 3030,
      "E": "Idukki Colony",
      "M": "ഇടുക്കി കോളനി",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3031,
      "E": "Upputhode",
      "M": "ഉപ്പുതോട്",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 3032,
      "E": "Vimalagiri",
      "M": "വിമലഗിരി",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3033,
      "E": "Kanjikuzhi Idukky",
      "M": "കഞ്ഞിക്കുഴി ഇടുക്കി",
      "PIN": "685606",
      "DID": "6"
    },
    {
      "POSTID": 3034,
      "E": "Keerithode",
      "M": "കീരിത്തോട്",
      "PIN": "685606",
      "DID": "6"
    },
    {
      "POSTID": 3035,
      "E": "Venmony Idukki",
      "M": "വെണ്‍മണി",
      "PIN": "685606",
      "DID": "6"
    },
    {
      "POSTID": 3036,
      "E": "Chelachuvadu",
      "M": "ചേലച്ചുവട്",
      "PIN": "685606",
      "DID": "6"
    },
    {
      "POSTID": 3037,
      "E": "Thadiyampad",
      "M": "തടിയംപാട്",
      "PIN": "685602",
      "DID": "6"
    },
    {
      "POSTID": 3038,
      "E": "Thattekanni",
      "M": "തട്ടേക്കണ്ണി",
      "PIN": "685606",
      "DID": "6"
    },
    {
      "POSTID": 3039,
      "E": "Idukki Painavu",
      "M": "ഇടുക്കി പൈനാവ്",
      "PIN": "685603",
      "DID": "6"
    },
    {
      "POSTID": 3040,
      "E": "Murickassery",
      "M": "മുരിയ്ക്കാശ്ശേരി",
      "PIN": "685604",
      "DID": "6"
    },
    {
      "POSTID": 3041,
      "E": "Muthalakodam",
      "M": "മുതലക്കോടം",
      "PIN": "685605",
      "DID": "6"
    },
    {
      "POSTID": 3042,
      "E": "Ezhumuttom",
      "M": "ഏഴുമുട്ടം",
      "PIN": "685605",
      "DID": "6"
    },
    {
      "POSTID": 3043,
      "E": "Ezhallur",
      "M": "ഏഴല്ലൂര്‍",
      "PIN": "685605",
      "DID": "6"
    },
    {
      "POSTID": 3044,
      "E": "Perumpillichira",
      "M": "പെരുമ്പിള്ളിച്ചിറ",
      "PIN": "685605",
      "DID": "6"
    },
    {
      "POSTID": 3045,
      "E": "Vattiar ",
      "M": "വട്ടിയാര്‍",
      "PIN": "685565",
      "DID": "6"
    },
    {
      "POSTID": 3046,
      "E": "Pallivasal Estate",
      "M": "പള്ളിവാസല്‍ എസ്റ്റേറ്റ്",
      "PIN": "685612",
      "DID": "6"
    },
    {
      "POSTID": 3047,
      "E": "Munnar",
      "M": "മൂന്നാര്‍ ",
      "PIN": "685612",
      "DID": "6"
    },
    {
      "POSTID": 3048,
      "E": "Munnar Colony",
      "M": "മൂന്നാര്‍ കോളനി",
      "PIN": "685612",
      "DID": "6"
    },
    {
      "POSTID": 3049,
      "E": "Gudarale",
      "M": "ഗുഡാറള",
      "PIN": "685612",
      "DID": "6"
    },
    {
      "POSTID": 3050,
      "E": "Anayirankal",
      "M": "ആനയിറങ്കല്‍",
      "PIN": "685613",
      "DID": "6"
    },
    {
      "POSTID": 3051,
      "E": "Devikulam",
      "M": "ദേവികുളം",
      "PIN": "685613",
      "DID": "6"
    },
    {
      "POSTID": 3052,
      "E": "Chattamannar",
      "M": "ചട്ടമൂന്നാര്‍",
      "PIN": "685614",
      "DID": "6"
    },
    {
      "POSTID": 3053,
      "E": "Talliar",
      "M": "തലയാര്‍",
      "PIN": "685614",
      "DID": "6"
    },
    {
      "POSTID": 3054,
      "E": "Ellapatti",
      "M": "എല്ലപ്പെട്ടി",
      "PIN": "685615",
      "DID": "6"
    },
    {
      "POSTID": 3055,
      "E": "Kottakamboor",
      "M": "കൊട്ടാകൊമ്പൂര്‍",
      "PIN": "685615",
      "DID": "6"
    },
    {
      "POSTID": 3056,
      "E": "Koviloor",
      "M": "കോവിലൂര്‍‌",
      "PIN": "685615",
      "DID": "6"
    },
    {
      "POSTID": 3057,
      "E": "Mattupatti",
      "M": "മാട്ടുപ്പെട്ടി",
      "PIN": "685616",
      "DID": "6"
    },
    {
      "POSTID": 3058,
      "E": "Mattupatti Indo Swiss Project",
      "M": "മാട്ടുപ്പെട്ടി ഇന്‍ഡോസ്വിസ് പ്രോജക്റ്റ്",
      "PIN": "685616",
      "DID": "6"
    },
    {
      "POSTID": 3059,
      "E": "Sethuparvathipuram",
      "M": "സേതുപാര്‍വ്വതീപുരം ",
      "PIN": "685617",
      "DID": "6"
    },
    {
      "POSTID": 3060,
      "E": "Surianalle",
      "M": "സൂര്യനെല്ലി",
      "PIN": "685618",
      "DID": "6"
    },
    {
      "POSTID": 3061,
      "E": "Chinnakanal",
      "M": "ചിന്നക്കനാല്‍",
      "PIN": "685618",
      "DID": "6"
    },
    {
      "POSTID": 3062,
      "E": "Pooppara",
      "M": "പൂപ്പാറ",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3063,
      "E": "Puthady",
      "M": "പുത്തടി",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3064,
      "E": "Aruvilanchal",
      "M": "അരിവിളംചാല്‍",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3065,
      "E": "Rajakumari",
      "M": "രാജകുമാരി ",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3066,
      "E": "Rajakumari South",
      "M": "രാജകുമാരി സൗത്ത്",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3067,
      "E": "Vattappara",
      "M": "വട്ടപ്പാറ",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3068,
      "E": "Santhanpara",
      "M": "ശാന്തന്‍പാറ",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3069,
      "E": "Khajanapara",
      "M": "ഖജനാപ്പാറ",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3070,
      "E": "Kulaparachal",
      "M": "കുളപ്പാറച്ചാല്‍",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3071,
      "E": "Pethotty",
      "M": "പേത്തൊട്ടി",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3072,
      "E": "Senapathy",
      "M": "സേനാപതി",
      "PIN": "685619",
      "DID": "6"
    },
    {
      "POSTID": 3073,
      "E": "Pius Nagar",
      "M": "പയസ് നഗര്‍",
      "PIN": "685620",
      "DID": "6"
    },
    {
      "POSTID": 3074,
      "E": "Maraiyur",
      "M": "മറയൂര്‍",
      "PIN": "685620",
      "DID": "6"
    },
    {
      "POSTID": 3075,
      "E": "Kanthallur",
      "M": "കാന്തല്ലൂര്‍",
      "PIN": "685620",
      "DID": "6"
    },
    {
      "POSTID": 3076,
      "E": "Sahayagiri",
      "M": "സഹായഗിരി",
      "PIN": "685620",
      "DID": "6"
    },
    {
      "POSTID": 3077,
      "E": "Michelgiri",
      "M": "മൈക്കിള്‍ഗിരി",
      "PIN": "685620",
      "DID": "6"
    },
    {
      "POSTID": 3078,
      "E": "Panniar Estate",
      "M": "പന്നിയാര്‍ എസ്റ്റേറ്റ്",
      "PIN": "685621",
      "DID": "6"
    },
    {
      "POSTID": 3079,
      "E": "North Piramadom ",
      "M": "നോര്‍ത്ത് പിറമാടം",
      "PIN": "686667",
      "DID": "7"
    },
    {
      "POSTID": 3080,
      "E": "Kottayam",
      "M": "കോട്ടയം",
      "PIN": "686001",
      "DID": "5"
    },
    {
      "POSTID": 3081,
      "E": "Kottayam Collectorate",
      "M": "കോട്ടയം കളക്ടറേറ്റ്",
      "PIN": "686002",
      "DID": "5"
    },
    {
      "POSTID": 3082,
      "E": "Kottayam West",
      "M": "കോട്ടയം വെസ്റ്റ്",
      "PIN": "686003",
      "DID": "5"
    },
    {
      "POSTID": 3083,
      "E": "Muttambalam",
      "M": "മുട്ടമ്പലം",
      "PIN": "686004",
      "DID": "5"
    },
    {
      "POSTID": 3084,
      "E": "Nattassery S.H.Mount",
      "M": "എസ് എച്ച്  മൗണ്ട്",
      "PIN": "686006",
      "DID": "5"
    },
    {
      "POSTID": 3085,
      "E": "Pallom",
      "M": "പള്ളം",
      "PIN": "686007",
      "DID": "5"
    },
    {
      "POSTID": 3086,
      "E": "Arpookara",
      "M": "ആര്‍പ്പൂക്കര വെസ്റ്റ്",
      "PIN": "686008",
      "DID": "5"
    },
    {
      "POSTID": 3087,
      "E": "Arpookara East",
      "M": "ആര്‍പ്പൂക്കര  ഈസ്റ്റ്",
      "PIN": "686008",
      "DID": "5"
    },
    {
      "POSTID": 3088,
      "E": "Villoonni",
      "M": "വില്ലൂന്നി",
      "PIN": "686008",
      "DID": "5"
    },
    {
      "POSTID": 3089,
      "E": "Gandhi Nagar Kottayam",
      "M": "ഗാന്ധി നഗര്‍",
      "PIN": "686008",
      "DID": "5"
    },
    {
      "POSTID": 3090,
      "E": "Rubber Board",
      "M": "റബ്ബര്‍ ബോര്‍ഡ്",
      "PIN": "686009",
      "DID": "5"
    },
    {
      "POSTID": 3091,
      "E": "Vadavathoor",
      "M": "വടവാതൂര്‍",
      "PIN": "686010",
      "DID": "5"
    },
    {
      "POSTID": 3092,
      "E": "Puthupally",
      "M": "പുതുപ്പള്ളി",
      "PIN": "686011",
      "DID": "5"
    },
    {
      "POSTID": 3093,
      "E": "Eravinalloor",
      "M": "ഇരവിനെല്ലൂര്‍",
      "PIN": "686011",
      "DID": "5"
    },
    {
      "POSTID": 3094,
      "E": "Thrikothamangalam",
      "M": "തൃക്കോതമംഗലം",
      "PIN": "686011",
      "DID": "5"
    },
    {
      "POSTID": 3095,
      "E": "Pakkil",
      "M": "പാക്കില്‍",
      "PIN": "686012",
      "DID": "5"
    },
    {
      "POSTID": 3096,
      "E": "Poovanthuruthu",
      "M": "പൂവന്തുരുത്ത്",
      "PIN": "686012",
      "DID": "5"
    },
    {
      "POSTID": 3097,
      "E": "Nattakom ",
      "M": "നാട്ടകം",
      "PIN": "686013",
      "DID": "5"
    },
    {
      "POSTID": 3098,
      "E": "Olassa",
      "M": "ഒളശ്ശ",
      "PIN": "686014",
      "DID": "5"
    },
    {
      "POSTID": 3099,
      "E": "Pulikkuttissery",
      "M": "പുലിക്കുട്ടിശ്ശേരി",
      "PIN": "686015",
      "DID": "5"
    },
    {
      "POSTID": 3100,
      "E": "Aymanam",
      "M": "അയ്മനം",
      "PIN": "686015",
      "DID": "5"
    },
    {
      "POSTID": 3101,
      "E": "Kumaranalloor",
      "M": "കുമാരനല്ലൂര്‍",
      "PIN": "686016",
      "DID": "5"
    },
    {
      "POSTID": 3102,
      "E": "Thellakom ",
      "M": "തെള്ളകം",
      "PIN": "686630",
      "DID": "5"
    },
    {
      "POSTID": 3103,
      "E": "Kudamaloor",
      "M": "കുടമാളൂര്‍",
      "PIN": "686017",
      "DID": "5"
    },
    {
      "POSTID": 3104,
      "E": "Manganam",
      "M": "മാങ്ങാനം",
      "PIN": "686018",
      "DID": "5"
    },
    {
      "POSTID": 3105,
      "E": "Manarcad",
      "M": "മണര്‍കാട്",
      "PIN": "686019",
      "DID": "5"
    },
    {
      "POSTID": 3106,
      "E": "Kiliroor North",
      "M": "കിളിരൂര്‍ നോര്‍ത്ത്",
      "PIN": "686020",
      "DID": "5"
    },
    {
      "POSTID": 3107,
      "E": "Pariyaram",
      "M": "പരിയാരം",
      "PIN": "686021",
      "DID": "5"
    },
    {
      "POSTID": 3108,
      "E": "Chengalam South",
      "M": "ചെങ്ങളം സൗത്ത്",
      "PIN": "686022",
      "DID": "5"
    },
    {
      "POSTID": 3109,
      "E": "Mariappally",
      "M": "മറിയപ്പള്ളി",
      "PIN": "686013",
      "DID": "5"
    },
    {
      "POSTID": 3110,
      "E": "Parippu",
      "M": "പരിപ്പ്",
      "PIN": "686024",
      "DID": "5"
    },
    {
      "POSTID": 3111,
      "E": "Amayannur ",
      "M": "അമയന്നൂര്‍",
      "PIN": "686019",
      "DID": "5"
    },
    {
      "POSTID": 3112,
      "E": "Moolavattom",
      "M": "മൂലവട്ടം",
      "PIN": "686012",
      "DID": "5"
    },
    {
      "POSTID": 3113,
      "E": "Mariathuruthu",
      "M": "മര്യാത്തുരുത്ത്",
      "PIN": "686017",
      "DID": "5"
    },
    {
      "POSTID": 3114,
      "E": "Perumbaikkad",
      "M": "പെരുമ്പായിക്കാട്",
      "PIN": "686016",
      "DID": "5"
    },
    {
      "POSTID": 3115,
      "E": "Kollad",
      "M": "കൊല്ലാട്",
      "PIN": "686004",
      "DID": "5"
    },
    {
      "POSTID": 3116,
      "E": "Kanjiram",
      "M": "കാഞ്ഞിരം",
      "PIN": "686030",
      "DID": "5"
    },
    {
      "POSTID": 3117,
      "E": "Malam",
      "M": "മാലം",
      "PIN": "686019",
      "DID": "5"
    },
    {
      "POSTID": 3118,
      "E": "Parampuzha",
      "M": "പാറമ്പുഴ",
      "PIN": "686004",
      "DID": "5"
    },
    {
      "POSTID": 3119,
      "E": "Thiruvarpu",
      "M": "തിരുവാര്‍പ്പ്",
      "PIN": "686033",
      "DID": "5"
    },
    {
      "POSTID": 3120,
      "E": "Payyappady",
      "M": "പയ്യപ്പാടി",
      "PIN": "686011",
      "DID": "5"
    },
    {
      "POSTID": 3121,
      "E": "Kummanam",
      "M": "കുമ്മനം",
      "PIN": "686035",
      "DID": "5"
    },
    {
      "POSTID": 3122,
      "E": "Amalagiri",
      "M": "അമലഗിരി",
      "PIN": "686561",
      "DID": "5"
    },
    {
      "POSTID": 3123,
      "E": "Malam",
      "M": "തിരുവഞ്ചൂര്‍",
      "PIN": "686019",
      "DID": "5"
    },
    {
      "POSTID": 3124,
      "E": "Devalokam ",
      "M": "ദേവലോകം",
      "PIN": "686004",
      "DID": "5"
    },
    {
      "POSTID": 3125,
      "E": "Kottayam South",
      "M": "കോട്ടയം സൗത്ത്",
      "PIN": "686039",
      "DID": "5"
    },
    {
      "POSTID": 3126,
      "E": "Malloosery",
      "M": "മള്ളുശ്ശേരി",
      "PIN": "686041",
      "DID": "5"
    },
    {
      "POSTID": 3127,
      "E": "Changanasserry",
      "M": "ചങ്ങനാശ്ശേരി",
      "PIN": "686101",
      "DID": "5"
    },
    {
      "POSTID": 3128,
      "E": "Changanassery Market",
      "M": "ചങ്ങനാശ്ശേരി മാര്‍ക്കറ്റ്",
      "PIN": "686101",
      "DID": "5"
    },
    {
      "POSTID": 3129,
      "E": "Changanassery College",
      "M": "ചങ്ങനാശ്ശേരി കോളേജ്",
      "PIN": "686101",
      "DID": "5"
    },
    {
      "POSTID": 3130,
      "E": "Panachikavu",
      "M": "പനച്ചിക്കാവ്",
      "PIN": "686102",
      "DID": "5"
    },
    {
      "POSTID": 3131,
      "E": "Kunnamkeri",
      "M": "കുന്നംകരി",
      "PIN": "686102",
      "DID": "4"
    },
    {
      "POSTID": 3132,
      "E": "Perunna",
      "M": "പെരുന്ന",
      "PIN": "686102",
      "DID": "5"
    },
    {
      "POSTID": 3133,
      "E": "Ruby Nagar",
      "M": "റൂബി നഗര്‍",
      "PIN": "686103",
      "DID": "5"
    },
    {
      "POSTID": 3134,
      "E": "Vazhapally West",
      "M": "വാഴപ്പള്ളി വെസ്റ്റ്",
      "PIN": "686103",
      "DID": "5"
    },
    {
      "POSTID": 3135,
      "E": "Kumarankary",
      "M": "കുമരംകരി",
      "PIN": "686103",
      "DID": "4"
    },
    {
      "POSTID": 3136,
      "E": "Kurisummood",
      "M": "കുരിശുംമൂട്",
      "PIN": "686104",
      "DID": "5"
    },
    {
      "POSTID": 3137,
      "E": "Veroor",
      "M": "വെരൂര്‍",
      "PIN": "686104",
      "DID": "5"
    },
    {
      "POSTID": 3138,
      "E": "Kottamurickal",
      "M": "കോട്ടമുറി",
      "PIN": "686105",
      "DID": "5"
    },
    {
      "POSTID": 3139,
      "E": "Thrikodithanam",
      "M": "തൃക്കൊടിത്താനം",
      "PIN": "686105",
      "DID": "5"
    },
    {
      "POSTID": 3140,
      "E": "Changanassery Industrial Nagar",
      "M": "ഇന്‍ഡസ്ട്രിയല്‍ നഗര്‍ ചങ്ങനാശ്ശേരി",
      "PIN": "686106",
      "DID": "5"
    },
    {
      "POSTID": 3141,
      "E": "Cheeranchira",
      "M": "ചീരഞ്ചിറ",
      "PIN": "686106",
      "DID": "5"
    },
    {
      "POSTID": 3142,
      "E": "Kidangara",
      "M": "കിടങ്ങറ",
      "PIN": "686107",
      "DID": "4"
    },
    {
      "POSTID": 3143,
      "E": "Erattupetta",
      "M": "ഈരാറ്റുപേട്ട-1",
      "PIN": "686121",
      "DID": "5"
    },
    {
      "POSTID": 3144,
      "E": "Aruvithura",
      "M": "അരുവിത്തുറ",
      "PIN": "686122",
      "DID": "5"
    },
    {
      "POSTID": 3145,
      "E": "Thidanad",
      "M": "തിടനാട്",
      "PIN": "686123",
      "DID": "5"
    },
    {
      "POSTID": 3146,
      "E": "Nadackal",
      "M": "നടയ്ക്കല്‍",
      "PIN": "686124",
      "DID": "5"
    },
    {
      "POSTID": 3147,
      "E": "Vaikom",
      "M": "വൈക്കം",
      "PIN": "686141",
      "DID": "5"
    },
    {
      "POSTID": 3148,
      "E": "Vaikom Thekkenada",
      "M": "വൈക്കം തെക്കേനട",
      "PIN": "686141",
      "DID": "5"
    },
    {
      "POSTID": 3149,
      "E": "Vaikaprayar",
      "M": "വൈക്ക പ്രയാര്‍",
      "PIN": "686142",
      "DID": "5"
    },
    {
      "POSTID": 3150,
      "E": "Akkarapadam",
      "M": "അക്കരപ്പാടം",
      "PIN": "686143",
      "DID": "5"
    },
    {
      "POSTID": 3151,
      "E": "Udayanapuram",
      "M": "ഉദയനാപുരം",
      "PIN": "686143",
      "DID": "5"
    },
    {
      "POSTID": 3152,
      "E": "Ambika Market",
      "M": "അംബികാ മാര്‍ക്കറ്റ്",
      "PIN": "686144",
      "DID": "5"
    },
    {
      "POSTID": 3153,
      "E": "Kudavechoor",
      "M": "കുടവെച്ചൂര്‍",
      "PIN": "686144",
      "DID": "5"
    },
    {
      "POSTID": 3154,
      "E": "Vechoor",
      "M": "വെച്ചൂര്‍",
      "PIN": "686144",
      "DID": "5"
    },
    {
      "POSTID": 3155,
      "E": "Thottakom",
      "M": "തോട്ടകം",
      "PIN": "686607",
      "DID": "5"
    },
    {
      "POSTID": 3156,
      "E": "Areeparambu",
      "M": "അരീപ്പറമ്പ്",
      "PIN": "686501",
      "DID": "5"
    },
    {
      "POSTID": 3157,
      "E": "Velloor",
      "M": "വെള്ളൂര്‍",
      "PIN": "686501",
      "DID": "5"
    },
    {
      "POSTID": 3158,
      "E": "Pangada",
      "M": "പങ്ങട",
      "PIN": "686502",
      "DID": "5"
    },
    {
      "POSTID": 3159,
      "E": "Pampady",
      "M": "പാമ്പാടി",
      "PIN": "686502",
      "DID": "5"
    },
    {
      "POSTID": 3160,
      "E": "Lakkattoor",
      "M": "ളാക്കാട്ടൂര്‍",
      "PIN": "686502",
      "DID": "5"
    },
    {
      "POSTID": 3161,
      "E": "Kooroppada",
      "M": "കൂരോപ്പട",
      "PIN": "686502",
      "DID": "5"
    },
    {
      "POSTID": 3162,
      "E": "Surianarayanapuram",
      "M": "സൂര്യനാരായണപുരം",
      "PIN": "686502",
      "DID": "5"
    },
    {
      "POSTID": 3163,
      "E": "Pothenpuram",
      "M": "പൊത്തന്‍പുറം",
      "PIN": "686502",
      "DID": "5"
    },
    {
      "POSTID": 3164,
      "E": "Kothala",
      "M": "കോത്തല",
      "PIN": "686502",
      "DID": "5"
    },
    {
      "POSTID": 3165,
      "E": "Aruvikuzhi",
      "M": "അരുവിക്കുഴി",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3166,
      "E": "Moozhoor",
      "M": "മൂഴൂര്‍",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3167,
      "E": "Manalunkal",
      "M": "മണലുങ്കല്‍",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3168,
      "E": "Anickad East",
      "M": "ആനിക്കാട് ഈസ്റ്റ്",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3169,
      "E": "Elampally",
      "M": "ആനിക്കാട് ",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3170,
      "E": "Anickad West",
      "M": "ആനിക്കാട് വെസ്റ്റ്",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3171,
      "E": "Cfw]Ån",
      "M": "ഇളംപള്ളി",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3172,
      "E": "Kalloorkulam",
      "M": "കല്ലൂര്‍ക്കുളം",
      "PIN": "686503",
      "DID": "5"
    },
    {
      "POSTID": 3173,
      "E": "Vazhoor",
      "M": "വാഴൂര്‍",
      "PIN": "686504",
      "DID": "5"
    },
    {
      "POSTID": 3174,
      "E": "Vazhoor East",
      "M": "വാഴൂര്‍ ഈസ്റ്റ്",
      "PIN": "686504",
      "DID": "5"
    },
    {
      "POSTID": 3175,
      "E": "Theerthapadapuram",
      "M": "തീര്‍ത്ഥപാദപുരം",
      "PIN": "686505",
      "DID": "5"
    },
    {
      "POSTID": 3176,
      "E": "Nariyanani ",
      "M": "നരിയനാനി",
      "PIN": "686506",
      "DID": "5"
    },
    {
      "POSTID": 3177,
      "E": "Ponkunnam-KTM",
      "M": "പൊന്‍കുന്നം ",
      "PIN": "686506",
      "DID": "5"
    },
    {
      "POSTID": 3178,
      "E": "Ponkunnam Court",
      "M": "പൊന്‍കുന്നം കോര്‍ട്ട്",
      "PIN": "686506",
      "DID": "5"
    },
    {
      "POSTID": 3179,
      "E": "Chennakunnu",
      "M": "ചെന്നാക്കുന്ന്",
      "PIN": "686506",
      "DID": "5"
    },
    {
      "POSTID": 3180,
      "E": "Thambalakad",
      "M": "തമ്പലക്കാട്",
      "PIN": "686506",
      "DID": "5"
    },
    {
      "POSTID": 3181,
      "E": "Mannarkayam",
      "M": "മണ്ണാര്‍കയം",
      "PIN": "686506",
      "DID": "5"
    },
    {
      "POSTID": 3182,
      "E": "Anakkallu",
      "M": "ആനക്കല്ല്",
      "PIN": "686508",
      "DID": "5"
    },
    {
      "POSTID": 3183,
      "E": "Kanjirapally",
      "M": "കാഞ്ഞിരപ്പള്ളി",
      "PIN": "686507",
      "DID": "5"
    },
    {
      "POSTID": 3184,
      "E": "Kanjirapally West NDBO",
      "M": "കാഞ്ഞിരപ്പള്ളി വെസ്റ്റ്",
      "PIN": "686507",
      "DID": "5"
    },
    {
      "POSTID": 3185,
      "E": "Vanchimala",
      "M": "വഞ്ചിമല",
      "PIN": "686508",
      "DID": "5"
    },
    {
      "POSTID": 3186,
      "E": "Kappadu",
      "M": "കപ്പാട്",
      "PIN": "686508",
      "DID": "5"
    },
    {
      "POSTID": 3187,
      "E": "Kalaketty",
      "M": "കാളകെട്ടി",
      "PIN": "686508",
      "DID": "5"
    },
    {
      "POSTID": 3188,
      "E": "Chettuthode",
      "M": "ചേറ്റുതോട്",
      "PIN": "686508",
      "DID": "5"
    },
    {
      "POSTID": 3189,
      "E": "Erumeli",
      "M": "എരുമേലി",
      "PIN": "686509",
      "DID": "5"
    },
    {
      "POSTID": 3190,
      "E": "Kanakapalam",
      "M": "കനകപ്പലം",
      "PIN": "686509",
      "DID": "5"
    },
    {
      "POSTID": 3191,
      "E": "Kannimala",
      "M": "കണ്ണിമല",
      "PIN": "686509",
      "DID": "5"
    },
    {
      "POSTID": 3192,
      "E": "Kuruvamoozhy",
      "M": "കുറുവാമൂഴി",
      "PIN": "686509",
      "DID": "5"
    },
    {
      "POSTID": 3193,
      "E": "Propose",
      "M": "പ്രൊപോസ്",
      "PIN": "686509",
      "DID": "5"
    },
    {
      "POSTID": 3194,
      "E": "Pampa Valley North",
      "M": "പമ്പാവാലി നോര്‍ത്ത്",
      "PIN": "686510",
      "DID": "5"
    },
    {
      "POSTID": 3195,
      "E": "Mukkoottuthara",
      "M": "മുക്കൂട്ടുതറ",
      "PIN": "686510",
      "DID": "3"
    },
    {
      "POSTID": 3196,
      "E": "Muttappally",
      "M": "മുട്ടപ്പള്ളി",
      "PIN": "686510",
      "DID": "5"
    },
    {
      "POSTID": 3197,
      "E": "Edakadathy",
      "M": "ഇടകടത്തി",
      "PIN": "686510",
      "DID": "3"
    },
    {
      "POSTID": 3198,
      "E": "Kanamala",
      "M": "കണമല",
      "PIN": "686510",
      "DID": "5"
    },
    {
      "POSTID": 3199,
      "E": "Chathenthara",
      "M": "ചാത്തന്‍തറ",
      "PIN": "686510",
      "DID": "3"
    },
    {
      "POSTID": 3200,
      "E": "Venkurinji",
      "M": "വെണ്‍കുറിഞ്ഞി",
      "PIN": "686510",
      "DID": "3"
    },
    {
      "POSTID": 3201,
      "E": "Thulapally",
      "M": "തുലാപ്പള്ളി",
      "PIN": "686510",
      "DID": "3"
    },
    {
      "POSTID": 3202,
      "E": "Mannadisala",
      "M": "മണ്ണടിശാല",
      "PIN": "686511",
      "DID": "3"
    },
    {
      "POSTID": 3203,
      "E": "Kunnam Vechoochira",
      "M": "കുന്നം വെച്ചൂച്ചിറ",
      "PIN": "686511",
      "DID": "3"
    },
    {
      "POSTID": 3204,
      "E": "Parathode",
      "M": "പാറത്തോട്",
      "PIN": "686512",
      "DID": "5"
    },
    {
      "POSTID": 3205,
      "E": "Inchiyani",
      "M": "ഇഞ്ചിയാനി",
      "PIN": "686512",
      "DID": "5"
    },
    {
      "POSTID": 3206,
      "E": "Edakkunnam",
      "M": "ഇടക്കുന്നം",
      "PIN": "686512",
      "DID": "5"
    },
    {
      "POSTID": 3207,
      "E": "Urakanadu",
      "M": "ഊരക്കനാട്",
      "PIN": "686512",
      "DID": "5"
    },
    {
      "POSTID": 3208,
      "E": "Vengathanam",
      "M": "വേങ്ങത്താനം",
      "PIN": "686512",
      "DID": "5"
    },
    {
      "POSTID": 3209,
      "E": "Punchavayal",
      "M": "പുഞ്ചവയല്‍",
      "PIN": "686513",
      "DID": "5"
    },
    {
      "POSTID": 3210,
      "E": "Mundakayam",
      "M": "മുണ്ടക്കയം",
      "PIN": "686513",
      "DID": "5"
    },
    {
      "POSTID": 3211,
      "E": "Mundakayam East",
      "M": "മുണ്ടക്കയം ഈസ്റ്റ്",
      "PIN": "686513",
      "DID": "6"
    },
    {
      "POSTID": 3212,
      "E": "Madukka",
      "M": "മടുക്ക",
      "PIN": "686513",
      "DID": "5"
    },
    {
      "POSTID": 3213,
      "E": "Rajendraprasad Colony",
      "M": "രാജേന്ദ്രപ്രസാദ് കോളനി",
      "PIN": "686513",
      "DID": "5"
    },
    {
      "POSTID": 3214,
      "E": "Karinilam",
      "M": "കരിനിലം",
      "PIN": "686513",
      "DID": "5"
    },
    {
      "POSTID": 3215,
      "E": "Kuppakkayam",
      "M": "കുപ്പക്കയം",
      "PIN": "686513",
      "DID": "5"
    },
    {
      "POSTID": 3216,
      "E": "Koruthode",
      "M": "കോരുത്തോട്",
      "PIN": "686513",
      "DID": "5"
    },
    {
      "POSTID": 3217,
      "E": "Parathanam",
      "M": "പറത്താനം",
      "PIN": "686514",
      "DID": "5"
    },
    {
      "POSTID": 3218,
      "E": "Mukkulam",
      "M": "മുക്കുളം ",
      "PIN": "686514",
      "DID": "6"
    },
    {
      "POSTID": 3219,
      "E": "Mukkulam East.",
      "M": "മുക്കുളം ഈസ്റ്റ്",
      "PIN": "686514",
      "DID": "6"
    },
    {
      "POSTID": 3220,
      "E": "Elankad",
      "M": "ഇളങ്കാട്",
      "PIN": "686514",
      "DID": "5"
    },
    {
      "POSTID": 3221,
      "E": "Yendayar Edbo",
      "M": "ഏന്തയാര്‍",
      "PIN": "686514",
      "DID": "5"
    },
    {
      "POSTID": 3222,
      "E": "Koottickal",
      "M": "കൂട്ടിക്കല്‍",
      "PIN": "686514",
      "DID": "5"
    },
    {
      "POSTID": 3223,
      "E": "Wembly",
      "M": "വെംബ്ലി",
      "PIN": "686514",
      "DID": "6"
    },
    {
      "POSTID": 3224,
      "E": "Velanilam",
      "M": "വേലനിലം",
      "PIN": "686514",
      "DID": "5"
    },
    {
      "POSTID": 3225,
      "E": "Thalunkal",
      "M": "താളുങ്കല്‍",
      "PIN": "686514",
      "DID": "5"
    },
    {
      "POSTID": 3226,
      "E": "Pulickakavala",
      "M": "പുളിക്കല്‍കവല",
      "PIN": "686515",
      "DID": "5"
    },
    {
      "POSTID": 3227,
      "E": "Kanam",
      "M": "കാനം",
      "PIN": "686515",
      "DID": "5"
    },
    {
      "POSTID": 3228,
      "E": "Meenadom",
      "M": "മീനടം",
      "PIN": "686516",
      "DID": "5"
    },
    {
      "POSTID": 3229,
      "E": "Vattakunnu",
      "M": "വട്ടക്കുന്ന്",
      "PIN": "686516",
      "DID": "5"
    },
    {
      "POSTID": 3230,
      "E": "Chakompathal",
      "M": "ചാക്കൊംപതാല്‍",
      "PIN": "686517",
      "DID": "5"
    },
    {
      "POSTID": 3231,
      "E": "Panachappally",
      "M": "പനച്ചേപ്പള്ളി",
      "PIN": "686518",
      "DID": "5"
    },
    {
      "POSTID": 3232,
      "E": "Palampra",
      "M": "പാലമ്പ്ര",
      "PIN": "686518",
      "DID": "5"
    },
    {
      "POSTID": 3233,
      "E": "Koovapally",
      "M": "കൂവപ്പള്ളി",
      "PIN": "686518",
      "DID": "5"
    },
    {
      "POSTID": 3234,
      "E": "Kavumbhagam",
      "M": "കാവുംഭാഗം",
      "PIN": "686519",
      "DID": "5"
    },
    {
      "POSTID": 3235,
      "E": "Chirakadavu Centre",
      "M": "ചിറക്കടവ് സെന്റര്‍",
      "PIN": "686519",
      "DID": "5"
    },
    {
      "POSTID": 3236,
      "E": "Thekkethukavala",
      "M": "തെക്കേത്തുകവല",
      "PIN": "686519",
      "DID": "5"
    },
    {
      "POSTID": 3237,
      "E": "Pazhayadom",
      "M": "പഴയിടം",
      "PIN": "686520",
      "DID": "5"
    },
    {
      "POSTID": 3238,
      "E": "Chirakadavu",
      "M": "ചിറക്കടവ്",
      "PIN": "686520",
      "DID": "5"
    },
    {
      "POSTID": 3239,
      "E": "Chirakadavu East",
      "M": "ചിറക്കടവ് ഈസ്റ്റ്",
      "PIN": "686520",
      "DID": "5"
    },
    {
      "POSTID": 3240,
      "E": "Chenapadi",
      "M": "ചേനപ്പാടി",
      "PIN": "686520",
      "DID": "5"
    },
    {
      "POSTID": 3241,
      "E": "Pampady South",
      "M": "പാമ്പാടി സൗത്ത്",
      "PIN": "686521",
      "DID": "5"
    },
    {
      "POSTID": 3242,
      "E": "Poothakuzhy",
      "M": "പൂതക്കുഴി",
      "PIN": "686521",
      "DID": "5"
    },
    {
      "POSTID": 3243,
      "E": "Panamattom",
      "M": "പനമറ്റം",
      "PIN": "686522",
      "DID": "5"
    },
    {
      "POSTID": 3244,
      "E": "Koorali",
      "M": "കൂരാലി",
      "PIN": "686522",
      "DID": "5"
    },
    {
      "POSTID": 3245,
      "E": "Kozhuvanal",
      "M": "കൊഴുവനാല്‍",
      "PIN": "686523",
      "DID": "5"
    },
    {
      "POSTID": 3246,
      "E": "Chittadi",
      "M": "ചിറ്റടി",
      "PIN": "686512",
      "DID": "5"
    },
    {
      "POSTID": 3247,
      "E": "Vizhikkithode",
      "M": "വിഴിക്കിത്തോട്",
      "PIN": "686518",
      "DID": "5"
    },
    {
      "POSTID": 3248,
      "E": "Chemmalamattom ",
      "M": "ചെമ്മലമറ്റം",
      "PIN": "686508",
      "DID": "5"
    },
    {
      "POSTID": 3249,
      "E": "Chingavanam",
      "M": "ചിങ്ങവനം",
      "PIN": "686531",
      "DID": "5"
    },
    {
      "POSTID": 3250,
      "E": "Pathamuttom",
      "M": "പാത്താമുട്ടം",
      "PIN": "686532",
      "DID": "5"
    },
    {
      "POSTID": 3251,
      "E": "Sachivothamapuram",
      "M": "സചിവോത്തമപുരം",
      "PIN": "686532",
      "DID": "5"
    },
    {
      "POSTID": 3252,
      "E": "Kuzhimattom",
      "M": "കുഴിമറ്റം",
      "PIN": "686533",
      "DID": "5"
    },
    {
      "POSTID": 3253,
      "E": "Channanikad",
      "M": "ചാന്നാനിക്കാട്",
      "PIN": "686533",
      "DID": "5"
    },
    {
      "POSTID": 3254,
      "E": "Neelamperoor",
      "M": "നീലംപേരൂര്‍",
      "PIN": "686534",
      "DID": "4"
    },
    {
      "POSTID": 3255,
      "E": "Era-North",
      "M": "",
      "PIN": "686534",
      "DID": "4"
    },
    {
      "POSTID": 3256,
      "E": "Eara North",
      "M": "ഈര",
      "PIN": "686534",
      "DID": "4"
    },
    {
      "POSTID": 3257,
      "E": "Kainady",
      "M": "കൈനടി",
      "PIN": "686534",
      "DID": "4"
    },
    {
      "POSTID": 3258,
      "E": "Ithithanam",
      "M": "ഇത്തിത്താനം",
      "PIN": "686535",
      "DID": "5"
    },
    {
      "POSTID": 3259,
      "E": "Thuruthy",
      "M": "തുരുത്തി",
      "PIN": "686535",
      "DID": "5"
    },
    {
      "POSTID": 3260,
      "E": "Kurumbanadom",
      "M": "കുറുമ്പനാടം",
      "PIN": "686536",
      "DID": "5"
    },
    {
      "POSTID": 3261,
      "E": "Perumpanachy",
      "M": "പെരുംപനച്ചി",
      "PIN": "686536",
      "DID": "5"
    },
    {
      "POSTID": 3262,
      "E": "Pallickachirakavala",
      "M": "പള്ളിക്കച്ചിറക്കവല",
      "PIN": "686537",
      "DID": "5"
    },
    {
      "POSTID": 3263,
      "E": "Nalunnakkal",
      "M": "നാലുന്നാക്കല്‍",
      "PIN": "686538",
      "DID": "5"
    },
    {
      "POSTID": 3264,
      "E": "Puthenchantha",
      "M": "പുത്തന്‍ചന്ത",
      "PIN": "686538",
      "DID": "5"
    },
    {
      "POSTID": 3265,
      "E": "Vakathanam",
      "M": "വാകത്താനം ",
      "PIN": "686538",
      "DID": "5"
    },
    {
      "POSTID": 3266,
      "E": "Njalikuzhy NDBO Vakathanam",
      "M": "",
      "PIN": "686538",
      "DID": "5"
    },
    {
      "POSTID": 3267,
      "E": "Ponganthanam ",
      "M": "പൊങ്ങന്താനം",
      "PIN": "686538",
      "DID": "5"
    },
    {
      "POSTID": 3268,
      "E": "Eravuchira",
      "M": "ഇരവുചിറ",
      "PIN": "686539",
      "DID": "5"
    },
    {
      "POSTID": 3269,
      "E": "Umbidi",
      "M": "ഉമ്പിടി",
      "PIN": "686539",
      "DID": "5"
    },
    {
      "POSTID": 3270,
      "E": "Thottakkad",
      "M": "തോട്ടയ്ക്കാട്",
      "PIN": "686539",
      "DID": "5"
    },
    {
      "POSTID": 3271,
      "E": "Thottakkad West",
      "M": "തോട്ടയ്ക്കാട് വെസ്റ്റ്",
      "PIN": "686539",
      "DID": "5"
    },
    {
      "POSTID": 3272,
      "E": "Karukachal",
      "M": "കറുകച്ചാല്‍",
      "PIN": "686540",
      "DID": "5"
    },
    {
      "POSTID": 3273,
      "E": "Koothrappally",
      "M": "കൂത്രപ്പള്ളി",
      "PIN": "686540",
      "DID": "5"
    },
    {
      "POSTID": 3274,
      "E": "Champakara",
      "M": "ചമ്പക്കര",
      "PIN": "686540",
      "DID": "5"
    },
    {
      "POSTID": 3275,
      "E": "Chelacombu",
      "M": "ചേലക്കൊമ്പ്",
      "PIN": "686540",
      "DID": "5"
    },
    {
      "POSTID": 3276,
      "E": "Mundathanam",
      "M": "മുണ്ടത്താനം",
      "PIN": "686541",
      "DID": "5"
    },
    {
      "POSTID": 3277,
      "E": "Edayirkkapuzha",
      "M": "ഇടയിരിക്കപ്പുഴ",
      "PIN": "686541",
      "DID": "5"
    },
    {
      "POSTID": 3278,
      "E": "Kangazha",
      "M": "കങ്ങഴ",
      "PIN": "686541",
      "DID": "5"
    },
    {
      "POSTID": 3279,
      "E": "Kulathuprayar",
      "M": "കുളത്തൂര്‍-പ്രയാര്‍",
      "PIN": "686541",
      "DID": "5"
    },
    {
      "POSTID": 3280,
      "E": "Vellavoor",
      "M": "വെള്ളാവൂര്‍",
      "PIN": "686541",
      "DID": "5"
    },
    {
      "POSTID": 3281,
      "E": "Thazhathu Vadakara",
      "M": "താഴത്തുവടകര",
      "PIN": "686541",
      "DID": "5"
    },
    {
      "POSTID": 3282,
      "E": "Manthuruthy",
      "M": "മാന്തുരുത്തി",
      "PIN": "686542",
      "DID": "5"
    },
    {
      "POSTID": 3283,
      "E": "Nedumanny",
      "M": "നെടുമണ്ണി",
      "PIN": "686542",
      "DID": "5"
    },
    {
      "POSTID": 3284,
      "E": "Nedumkunnam",
      "M": "നെടുംകുന്നം",
      "PIN": "686542",
      "DID": "5"
    },
    {
      "POSTID": 3285,
      "E": "Manimala",
      "M": "മണിമല",
      "PIN": "686543",
      "DID": "5"
    },
    {
      "POSTID": 3286,
      "E": "Erathuvadakara",
      "M": "എറത്തുവടകര",
      "PIN": "686543",
      "DID": "5"
    },
    {
      "POSTID": 3287,
      "E": "Cheruvally",
      "M": "ചെറുവള്ളി",
      "PIN": "686543",
      "DID": "5"
    },
    {
      "POSTID": 3288,
      "E": "Pulikallu",
      "M": "പുലിക്കല്ല്",
      "PIN": "686544",
      "DID": "5"
    },
    {
      "POSTID": 3289,
      "E": "Poovatholy",
      "M": "പൂവത്തോലി",
      "PIN": "686544",
      "DID": "5"
    },
    {
      "POSTID": 3290,
      "E": "Mukkada",
      "M": "മുക്കട",
      "PIN": "686544",
      "DID": "5"
    },
    {
      "POSTID": 3291,
      "E": "Alapra",
      "M": "ആലപ്ര",
      "PIN": "686544",
      "DID": "5"
    },
    {
      "POSTID": 3292,
      "E": "Karikkattoor",
      "M": "കറിക്കാട്ടൂര്‍ ",
      "PIN": "686544",
      "DID": "5"
    },
    {
      "POSTID": 3293,
      "E": "Karikkattoor Centre",
      "M": "കറിക്കാട്ടൂര്‍ സെന്റര്‍",
      "PIN": "686544",
      "DID": "5"
    },
    {
      "POSTID": 3294,
      "E": "Ponthanpuzha",
      "M": "പൊന്തന്‍പുഴ",
      "PIN": "686544",
      "DID": "5"
    },
    {
      "POSTID": 3295,
      "E": "Santhipuram",
      "M": "ശാന്തിപുരം",
      "PIN": "686545",
      "DID": "5"
    },
    {
      "POSTID": 3296,
      "E": "Nedungadapally",
      "M": "നെടുങ്ങാടപ്പള്ളി  ",
      "PIN": "686545",
      "DID": "3"
    },
    {
      "POSTID": 3297,
      "E": "Amara",
      "M": "അമര",
      "PIN": "686546",
      "DID": "5"
    },
    {
      "POSTID": 3298,
      "E": "Madappally",
      "M": "മാടപ്പള്ളി",
      "PIN": "686546",
      "DID": "5"
    },
    {
      "POSTID": 3299,
      "E": "Chungapara",
      "M": "ചുങ്കപ്പാറ",
      "PIN": "686547",
      "DID": "3"
    },
    {
      "POSTID": 3300,
      "E": "Kottangal",
      "M": "കോട്ടാങ്ങല്‍",
      "PIN": "686547",
      "DID": "3"
    },
    {
      "POSTID": 3301,
      "E": "Nalukody",
      "M": "നാലുകോടി",
      "PIN": "686548",
      "DID": "5"
    },
    {
      "POSTID": 3302,
      "E": "Kurichy",
      "M": "കുറിച്ചി",
      "PIN": "686532",
      "DID": "5"
    },
    {
      "POSTID": 3303,
      "E": "Kadayanickad",
      "M": "കടയനിക്കാട്",
      "PIN": "686541",
      "DID": "5"
    },
    {
      "POSTID": 3304,
      "E": "Malakunnam",
      "M": "മലകുന്നം",
      "PIN": "686535",
      "DID": "5"
    },
    {
      "POSTID": 3305,
      "E": "Mammoodu ",
      "M": "മാമ്മൂട്",
      "PIN": "686536",
      "DID": "5"
    },
    {
      "POSTID": 3306,
      "E": "Kanjirappara ",
      "M": "കാഞ്ഞിരപ്പാറ ",
      "PIN": "686555",
      "DID": "5"
    },
    {
      "POSTID": 3307,
      "E": "Devagiri",
      "M": "ദേവഗിരി",
      "PIN": "686555",
      "DID": "5"
    },
    {
      "POSTID": 3308,
      "E": "Priyadarsini Hills",
      "M": "പ്രിയദര്‍ശിനി ഹില്‍സ്",
      "PIN": "686560",
      "DID": "5"
    },
    {
      "POSTID": 3309,
      "E": "Mannanam",
      "M": "മാന്നാനം",
      "PIN": "686561",
      "DID": "5"
    },
    {
      "POSTID": 3310,
      "E": "Sreekantamangalam",
      "M": "ശ്രീകണ്ഠമംഗലം",
      "PIN": "686562",
      "DID": "5"
    },
    {
      "POSTID": 3311,
      "E": "Athirampuzha",
      "M": "അതിരമ്പുഴ",
      "PIN": "686562",
      "DID": "5"
    },
    {
      "POSTID": 3312,
      "E": "Kumarakom",
      "M": "കുമരകം",
      "PIN": "686563",
      "DID": "5"
    },
    {
      "POSTID": 3313,
      "E": "Kumarakom East",
      "M": "കുമരകം ഈസ്റ്റ്",
      "PIN": "686563",
      "DID": "5"
    },
    {
      "POSTID": 3314,
      "E": "Kumarakom South",
      "M": "കുമരകം സൗത്ത്",
      "PIN": "686563",
      "DID": "5"
    },
    {
      "POSTID": 3315,
      "E": "Neerikad",
      "M": "നീറിക്കാട്",
      "PIN": "686564",
      "DID": "5"
    },
    {
      "POSTID": 3316,
      "E": "Paduva",
      "M": "പാദുവ",
      "PIN": "686564",
      "DID": "5"
    },
    {
      "POSTID": 3317,
      "E": "Mattakkara",
      "M": "മറ്റക്കര",
      "PIN": "686564",
      "DID": "5"
    },
    {
      "POSTID": 3318,
      "E": "Ayarkunnam",
      "M": "അയര്‍കുന്നം",
      "PIN": "686564",
      "DID": "5"
    },
    {
      "POSTID": 3319,
      "E": "Mullarikudy ",
      "M": "മുള്ളരിക്കുടി",
      "PIN": "685571",
      "DID": "6"
    },
    {
      "POSTID": 3320,
      "E": "Karimpani",
      "M": "കരിമ്പാനി",
      "PIN": "686564",
      "DID": "5"
    },
    {
      "POSTID": 3321,
      "E": "Kongandoor",
      "M": "കൊങ്ങാണ്ട‍ൂര്‍",
      "PIN": "686564",
      "DID": "5"
    },
    {
      "POSTID": 3322,
      "E": "Kumarakam North ",
      "M": "കുമരകം നോര്‍ത്ത്",
      "PIN": "686563",
      "DID": "5"
    },
    {
      "POSTID": 3323,
      "E": "Arumanur",
      "M": "അറുമാനൂര്‍",
      "PIN": "686568",
      "DID": "5"
    },
    {
      "POSTID": 3324,
      "E": "Padinjattinkara",
      "M": "പടിഞ്ഞാറ്റിന്‍കര",
      "PIN": "686571",
      "DID": "5"
    },
    {
      "POSTID": 3325,
      "E": "Kadaplamattom",
      "M": "കടപ്ലാമറ്റം",
      "PIN": "686571",
      "DID": "5"
    },
    {
      "POSTID": 3326,
      "E": "Kattachira",
      "M": "കട്ടച്ചിറ",
      "PIN": "686572",
      "DID": "5"
    },
    {
      "POSTID": 3327,
      "E": "Kidangoor",
      "M": "കിടങ്ങൂര്‍ ",
      "PIN": "686572",
      "DID": "5"
    },
    {
      "POSTID": 3328,
      "E": "Puliyannoor",
      "M": "പുലിയന്നൂര്‍",
      "PIN": "686573",
      "DID": "5"
    },
    {
      "POSTID": 3329,
      "E": "Thodanal",
      "M": "തോടനാല്‍",
      "PIN": "686573",
      "DID": "5"
    },
    {
      "POSTID": 3330,
      "E": "Arunapuram",
      "M": "അരുണാപുരം",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3331,
      "E": "Mundankal",
      "M": "മുണ്ടാങ്കല്‍",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3332,
      "E": "Edanad",
      "M": "ഇടനാട്",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3333,
      "E": "Kizhathadiyoor",
      "M": "കിഴതടിയൂര്‍",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3334,
      "E": "Kadapattoor",
      "M": "കടപ്പാട്ടൂര്‍",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3335,
      "E": "Chakampuzha",
      "M": "ചക്കംമ്പുഴ",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3336,
      "E": "Nechipuzhoor",
      "M": "നെച്ചിപ്പുഴൂര്‍",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3337,
      "E": "Velliyeppally",
      "M": "വെള്ളിയേപ്പള്ളി",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3338,
      "E": "Palai",
      "M": "പാലാ",
      "PIN": "686575",
      "DID": "5"
    },
    {
      "POSTID": 3339,
      "E": "Amanakara",
      "M": "അമനകര",
      "PIN": "686576",
      "DID": "5"
    },
    {
      "POSTID": 3340,
      "E": "Ramapuram Bazar",
      "M": "രാമപുരം ബസ്സാര്‍",
      "PIN": "686576",
      "DID": "5"
    },
    {
      "POSTID": 3341,
      "E": "Idiyanal",
      "M": "ഇടിയനാല്‍",
      "PIN": "686576",
      "DID": "5"
    },
    {
      "POSTID": 3342,
      "E": "Kizhathiri",
      "M": "കിഴതിരി",
      "PIN": "686576",
      "DID": "5"
    },
    {
      "POSTID": 3343,
      "E": "Kurinji",
      "M": "കുറിഞ്ഞി",
      "PIN": "686576",
      "DID": "5"
    },
    {
      "POSTID": 3344,
      "E": "Koodapalam",
      "M": "കൂടപ്പലം",
      "PIN": "686576",
      "DID": "5"
    },
    {
      "POSTID": 3345,
      "E": "Mediri",
      "M": "മേതിരി",
      "PIN": "686576",
      "DID": "5"
    },
    {
      "POSTID": 3346,
      "E": "Poovarani",
      "M": "പൂവരണി",
      "PIN": "686577",
      "DID": "5"
    },
    {
      "POSTID": 3347,
      "E": "Mallikasseri",
      "M": "മല്ലികശ്ശേരി",
      "PIN": "686577",
      "DID": "5"
    },
    {
      "POSTID": 3348,
      "E": "Madukkakunnu",
      "M": "മടുക്കക്കുന്ന്",
      "PIN": "686577",
      "DID": "5"
    },
    {
      "POSTID": 3349,
      "E": "Elikulam",
      "M": "എലിക്കുളം",
      "PIN": "686577",
      "DID": "5"
    },
    {
      "POSTID": 3350,
      "E": "Njandupara",
      "M": "ഞണ്ടുപാറ",
      "PIN": "686577",
      "DID": "5"
    },
    {
      "POSTID": 3351,
      "E": "Poovathode",
      "M": "പൂവത്തോട്",
      "PIN": "686578",
      "DID": "5"
    },
    {
      "POSTID": 3352,
      "E": "Bharanaganam",
      "M": "ഭരണങ്ങാനം",
      "PIN": "686578",
      "DID": "5"
    },
    {
      "POSTID": 3353,
      "E": "Ambalanirapel",
      "M": "",
      "PIN": "686578",
      "DID": "5"
    },
    {
      "POSTID": 3354,
      "E": "Amparanirappel",
      "M": "അമ്പാറനിരപ്പേല്‍",
      "PIN": "686578",
      "DID": "5"
    },
    {
      "POSTID": 3355,
      "E": "Edappady",
      "M": "ഇടപ്പാടി",
      "PIN": "686578",
      "DID": "5"
    },
    {
      "POSTID": 3356,
      "E": "Kizhaparayar",
      "M": "കിഴപറയാര്‍",
      "PIN": "686578",
      "DID": "5"
    },
    {
      "POSTID": 3357,
      "E": "Narianganam",
      "M": "നരിയങ്ങാനം",
      "PIN": "686579",
      "DID": "5"
    },
    {
      "POSTID": 3358,
      "E": "Plassanal",
      "M": "പ്ലാശനാല്‍",
      "PIN": "686579",
      "DID": "5"
    },
    {
      "POSTID": 3359,
      "E": "Anjoottimangalam",
      "M": "അഞ്ഞൂറ്റിമംഗലം",
      "PIN": "686579",
      "DID": "5"
    },
    {
      "POSTID": 3360,
      "E": "Kalathukadavu",
      "M": "കളത്തൂക്കടവ്",
      "PIN": "686579",
      "DID": "5"
    },
    {
      "POSTID": 3361,
      "E": "Choondacherry",
      "M": "ചൂണ്ടച്ചേരി",
      "PIN": "686579",
      "DID": "5"
    },
    {
      "POSTID": 3362,
      "E": "Adukom",
      "M": "അടുക്കം",
      "PIN": "686580",
      "DID": "5"
    },
    {
      "POSTID": 3363,
      "E": "Vellikulam",
      "M": "വെള്ളികുളം",
      "PIN": "686580",
      "DID": "5"
    },
    {
      "POSTID": 3364,
      "E": "Velathusseri",
      "M": "വേലത്തുശ്ശേരി",
      "PIN": "686580",
      "DID": "5"
    },
    {
      "POSTID": 3365,
      "E": "Thalanad",
      "M": "തലനാട്",
      "PIN": "686580",
      "DID": "5"
    },
    {
      "POSTID": 3366,
      "E": "Teekoy",
      "M": "തീക്കോയി",
      "PIN": "686580",
      "DID": "5"
    },
    {
      "POSTID": 3367,
      "E": "Poonjar",
      "M": "പൂഞ്ഞാര്‍",
      "PIN": "686581",
      "DID": "5"
    },
    {
      "POSTID": 3368,
      "E": "Chennad",
      "M": "ചേന്നാട്",
      "PIN": "686581",
      "DID": "5"
    },
    {
      "POSTID": 3369,
      "E": "Poonjar Thekkekara",
      "M": "പൂഞ്ഞാര്‍ തെക്കേക്കര",
      "PIN": "686582",
      "DID": "5"
    },
    {
      "POSTID": 3370,
      "E": "Adivaram",
      "M": "അടിവാരം",
      "PIN": "686582",
      "DID": "5"
    },
    {
      "POSTID": 3371,
      "E": "Kunnonni",
      "M": "കുന്നോന്നി",
      "PIN": "686582",
      "DID": "5"
    },
    {
      "POSTID": 3372,
      "E": "Peringulam",
      "M": "പെരിങ്ങുളം",
      "PIN": "686582",
      "DID": "5"
    },
    {
      "POSTID": 3373,
      "E": "Kaipally",
      "M": "കൈപ്പള്ളി",
      "PIN": "686582",
      "DID": "5"
    },
    {
      "POSTID": 3374,
      "E": "Cholathadam",
      "M": "ചോലത്തടം",
      "PIN": "686582",
      "DID": "5"
    },
    {
      "POSTID": 3375,
      "E": "Punnathura",
      "M": "പുന്നത്തുറ ഈസ്റ്റ്",
      "PIN": "686583",
      "DID": "5"
    },
    {
      "POSTID": 3376,
      "E": "Kidangoor South",
      "M": "കിടങ്ങൂര്‍ സൗത്ത്",
      "PIN": "686583",
      "DID": "5"
    },
    {
      "POSTID": 3377,
      "E": "Kezhuvamkulam",
      "M": "കെഴുവംകുളം",
      "PIN": "686584",
      "DID": "5"
    },
    {
      "POSTID": 3378,
      "E": "Chempilavu",
      "M": "ചെമ്പിളാവ്",
      "PIN": "686584",
      "DID": "5"
    },
    {
      "POSTID": 3379,
      "E": "Cherpunkal",
      "M": "ചേര്‍പ്പുങ്കല്‍",
      "PIN": "686584",
      "DID": "5"
    },
    {
      "POSTID": 3380,
      "E": "Kanjiramattom",
      "M": "കാഞ്ഞിരമറ്റം",
      "PIN": "686585",
      "DID": "5"
    },
    {
      "POSTID": 3381,
      "E": "Chengalam",
      "M": "ചെങ്ങളം",
      "PIN": "686585",
      "DID": "5"
    },
    {
      "POSTID": 3382,
      "E": "Moonnilavu",
      "M": "മൂന്നിലവ്",
      "PIN": "686586",
      "DID": "5"
    },
    {
      "POSTID": 3383,
      "E": "Erumapramattom",
      "M": "ഇരുമാപ്രമറ്റം",
      "PIN": "686586",
      "DID": "5"
    },
    {
      "POSTID": 3384,
      "E": "Chovvoor",
      "M": "ചൊവ്വൂര്‍",
      "PIN": "686586",
      "DID": "5"
    },
    {
      "POSTID": 3385,
      "E": "Mechal",
      "M": "മേച്ചാല്‍",
      "PIN": "686586",
      "DID": "5"
    },
    {
      "POSTID": 3386,
      "E": "Elakad",
      "M": "ഇലയ്ക്കാട്",
      "PIN": "686587",
      "DID": "5"
    },
    {
      "POSTID": 3387,
      "E": "Vayala",
      "M": "വയല",
      "PIN": "686587",
      "DID": "5"
    },
    {
      "POSTID": 3388,
      "E": "Idamattom",
      "M": "ഇടമറ്റം",
      "PIN": "686588",
      "DID": "5"
    },
    {
      "POSTID": 3389,
      "E": "Velliamattom",
      "M": "വെള്ളിയാമറ്റം",
      "PIN": "685588",
      "DID": "6"
    },
    {
      "POSTID": 3390,
      "E": "Meenachil",
      "M": "മീനച്ചില്‍",
      "PIN": "686589",
      "DID": "5"
    },
    {
      "POSTID": 3391,
      "E": "Ponad Karoor",
      "M": "പോണാട് കരൂര്‍",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3392,
      "E": "Ramapuram",
      "M": "രാമപുരം",
      "PIN": "686591",
      "DID": "5"
    },
    {
      "POSTID": 3393,
      "E": "Vallichira ",
      "M": "വള്ളിച്ചിറ",
      "PIN": "686574",
      "DID": "5"
    },
    {
      "POSTID": 3394,
      "E": "Melampara ",
      "M": "മേലമ്പാറ",
      "PIN": "686578",
      "DID": "5"
    },
    {
      "POSTID": 3395,
      "E": "Koodallur",
      "M": "കൂടല്ലൂര്‍",
      "PIN": "686595",
      "DID": "5"
    },
    {
      "POSTID": 3396,
      "E": "Vattukulam",
      "M": "വട്ടുക്കുളം",
      "PIN": "686596",
      "DID": "5"
    },
    {
      "POSTID": 3397,
      "E": "Mutholy",
      "M": "മുത്തോലി",
      "PIN": "686573",
      "DID": "5"
    },
    {
      "POSTID": 3398,
      "E": "Pathampuzha",
      "M": "പാതാമ്പുഴ",
      "PIN": "686600",
      "DID": "5"
    },
    {
      "POSTID": 3399,
      "E": "Neendoor",
      "M": "നീണ്ട‍ൂര്‍",
      "PIN": "686601",
      "DID": "5"
    },
    {
      "POSTID": 3400,
      "E": "Moozhikulangara",
      "M": "മൂഴിക്കുളങ്ങര",
      "PIN": "686601",
      "DID": "5"
    },
    {
      "POSTID": 3401,
      "E": "Onamthuruthu",
      "M": "ഓണംതുരുത്ത്",
      "PIN": "686602",
      "DID": "5"
    },
    {
      "POSTID": 3402,
      "E": "Kaipuzha",
      "M": "കൈപ്പുഴ",
      "PIN": "686602",
      "DID": "5"
    },
    {
      "POSTID": 3403,
      "E": "Manjoor",
      "M": "മാഞ്ഞൂര്‍",
      "PIN": "686603",
      "DID": "5"
    },
    {
      "POSTID": 3404,
      "E": "Manjoor South",
      "M": "മാഞ്ഞൂര്‍ സൗത്ത്",
      "PIN": "686603",
      "DID": "5"
    },
    {
      "POSTID": 3405,
      "E": "Kanjirathanam",
      "M": "കാഞ്ഞിരത്താനം",
      "PIN": "686603",
      "DID": "5"
    },
    {
      "POSTID": 3406,
      "E": "Kuruppanthara",
      "M": "കുറുപ്പംതറ",
      "PIN": "686603",
      "DID": "5"
    },
    {
      "POSTID": 3407,
      "E": "Chamakala",
      "M": "ചാമക്കാല",
      "PIN": "686603",
      "DID": "5"
    },
    {
      "POSTID": 3408,
      "E": "Puzhikol",
      "M": "പൂഴിക്കോല്‍",
      "PIN": "686604",
      "DID": "5"
    },
    {
      "POSTID": 3409,
      "E": "Arunoottimangalam",
      "M": "അറുനൂറ്റിമംഗലം",
      "PIN": "686604",
      "DID": "5"
    },
    {
      "POSTID": 3410,
      "E": "Kaduthuruthy",
      "M": "കടുത്തുരുത്തി",
      "PIN": "686604",
      "DID": "5"
    },
    {
      "POSTID": 3411,
      "E": "Midayikunnu",
      "M": "മിടായിക്കുന്ന്",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3412,
      "E": "Irumpayam",
      "M": "ഇറുമ്പയം",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3413,
      "E": "Edavattom",
      "M": "ഇടവട്ടം",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3414,
      "E": "Vadayar",
      "M": "വടയാര്‍",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3415,
      "E": "Vadakara",
      "M": "വടകര ",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3416,
      "E": "Karipadam",
      "M": "കരിപ്പാടം",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3417,
      "E": "Keezhoor",
      "M": "കീഴൂര്‍",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3418,
      "E": "Thalayolaparambu",
      "M": "തലയോലപ്പറമ്പ്",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3419,
      "E": "Pallipurathussery",
      "M": "പള്ളിപ്പുറത്തുശ്ശേരി",
      "PIN": "686606",
      "DID": "5"
    },
    {
      "POSTID": 3420,
      "E": "Chemmanattukara",
      "M": "ചെമ്മനത്തുകര",
      "PIN": "686606",
      "DID": "5"
    },
    {
      "POSTID": 3421,
      "E": "Thirumonivenkitapuram",
      "M": "ടി.വി.പുരം",
      "PIN": "686606",
      "DID": "5"
    },
    {
      "POSTID": 3422,
      "E": "Kothavara",
      "M": "കൊതവറ",
      "PIN": "686607",
      "DID": "5"
    },
    {
      "POSTID": 3423,
      "E": "Thalayazham",
      "M": "തലയാഴം",
      "PIN": "686607",
      "DID": "5"
    },
    {
      "POSTID": 3424,
      "E": "Maravanthuruthu",
      "M": "മറവന്‍തുരുത്ത്",
      "PIN": "686608",
      "DID": "5"
    },
    {
      "POSTID": 3425,
      "E": "Enadi",
      "M": "ഏനാദി",
      "PIN": "686608",
      "DID": "5"
    },
    {
      "POSTID": 3426,
      "E": "Kulasekharamangalam",
      "M": "കുലശേഖരമംഗലം",
      "PIN": "686608",
      "DID": "5"
    },
    {
      "POSTID": 3427,
      "E": "Mevelloor",
      "M": "മേവെള്ളൂര്‍",
      "PIN": "686609",
      "DID": "5"
    },
    {
      "POSTID": 3428,
      "E": "Mulakulam",
      "M": "മുളക്കുളം ",
      "PIN": "686610",
      "DID": "5"
    },
    {
      "POSTID": 3429,
      "E": "Mulakulam South",
      "M": "മുളക്കുളം സൗത്ത്",
      "PIN": "686610",
      "DID": "5"
    },
    {
      "POSTID": 3430,
      "E": "Karikode",
      "M": "കാരിക്കോട്",
      "PIN": "686610",
      "DID": "5"
    },
    {
      "POSTID": 3431,
      "E": "Peruva",
      "M": "പെരുവ",
      "PIN": "686610",
      "DID": "5"
    },
    {
      "POSTID": 3432,
      "E": "Kallara ",
      "M": "കല്ലറ",
      "PIN": "686611",
      "DID": "5"
    },
    {
      "POSTID": 3433,
      "E": "Kallara South",
      "M": "കല്ലറ സൗത്ത്",
      "PIN": "686611",
      "DID": "5"
    },
    {
      "POSTID": 3434,
      "E": "Perumthuruthu",
      "M": "പെരുന്തുരുത്ത്",
      "PIN": "686611",
      "DID": "5"
    },
    {
      "POSTID": 3435,
      "E": "Marangoli",
      "M": "മരങ്ങോലി",
      "PIN": "686612",
      "DID": "5"
    },
    {
      "POSTID": 3436,
      "E": "Vadakkenirappu",
      "M": "വടക്കേനിരപ്പ്",
      "PIN": "686612",
      "DID": "5"
    },
    {
      "POSTID": 3437,
      "E": "Kattampauk",
      "M": "കാട്ടാംപാക്ക്",
      "PIN": "686612",
      "DID": "5"
    },
    {
      "POSTID": 3438,
      "E": "Njizhoor",
      "M": "ഞീഴൂര്‍",
      "PIN": "686612",
      "DID": "5"
    },
    {
      "POSTID": 3439,
      "E": "Thiruvambadi",
      "M": "തിരുവമ്പാടി",
      "PIN": "686612",
      "DID": "5"
    },
    {
      "POSTID": 3440,
      "E": "Muttuchira",
      "M": "മുട്ടുചിറ",
      "PIN": "686613",
      "DID": "5"
    },
    {
      "POSTID": 3441,
      "E": "Ayamkudi",
      "M": "ആയാംകുടി",
      "PIN": "686613",
      "DID": "5"
    },
    {
      "POSTID": 3442,
      "E": "Eravimangalam",
      "M": "ഇരവിമംഗലം",
      "PIN": "686613",
      "DID": "5"
    },
    {
      "POSTID": 3443,
      "E": "Ezhumanthuruthu",
      "M": "എഴുമാന്തുരുത്ത്",
      "PIN": "686613",
      "DID": "5"
    },
    {
      "POSTID": 3444,
      "E": "Kappumthala",
      "M": "കാപ്പുംതല",
      "PIN": "686613",
      "DID": "5"
    },
    {
      "POSTID": 3445,
      "E": "Brahmamangalam",
      "M": "ബ്രഹ്മമംഗലം",
      "PIN": "686605",
      "DID": "5"
    },
    {
      "POSTID": 3446,
      "E": "Chempu",
      "M": "ചെമ്പ്",
      "PIN": "686608",
      "DID": "5"
    },
    {
      "POSTID": 3447,
      "E": "Newsprint Nagar",
      "M": "ന്യൂസ് പ്രിന്റ് നഗര്‍",
      "PIN": "686616",
      "DID": "5"
    },
    {
      "POSTID": 3448,
      "E": "Memuri ",
      "M": "മേമുറി",
      "PIN": "686611",
      "DID": "5"
    },
    {
      "POSTID": 3449,
      "E": "Mevada",
      "M": "മേവട",
      "PIN": "686573",
      "DID": "5"
    },
    {
      "POSTID": 3450,
      "E": "Pattithanam",
      "M": "പട്ടിത്താനം",
      "PIN": "686631",
      "DID": "5"
    },
    {
      "POSTID": 3451,
      "E": "Punnathura West",
      "M": "പുന്നത്തുറ വെസ്റ്റ്",
      "PIN": "686631",
      "DID": "5"
    },
    {
      "POSTID": 3452,
      "E": "Ettumanur",
      "M": "ഏറ്റുമാനൂര്‍",
      "PIN": "686631",
      "DID": "5"
    },
    {
      "POSTID": 3453,
      "E": "Vettimukal",
      "M": "വെട്ടിമുകള്‍",
      "PIN": "686631",
      "DID": "5"
    },
    {
      "POSTID": 3454,
      "E": "Kanakkary",
      "M": "കാണക്കാരി",
      "PIN": "686632",
      "DID": "5"
    },
    {
      "POSTID": 3455,
      "E": "Kurumulloor",
      "M": "കുറുമുള്ളൂര്‍",
      "PIN": "686632",
      "DID": "5"
    },
    {
      "POSTID": 3456,
      "E": "Kothanallur",
      "M": "കോതനല്ലൂര്‍",
      "PIN": "686632",
      "DID": "5"
    },
    {
      "POSTID": 3457,
      "E": "Nazareth Hill",
      "M": "നസ്രത്ത് ഹില്‍",
      "PIN": "686633",
      "DID": "5"
    },
    {
      "POSTID": 3458,
      "E": "Mannackanad",
      "M": "മണ്ണയ്ക്കനാട്",
      "PIN": "686633",
      "DID": "5"
    },
    {
      "POSTID": 3459,
      "E": "Kalathoor ",
      "M": "കളത്തൂര്‍",
      "PIN": "686633",
      "DID": "5"
    },
    {
      "POSTID": 3460,
      "E": "Kuravilangad",
      "M": "കുറവിലങ്ങാട്",
      "PIN": "686633",
      "DID": "5"
    },
    {
      "POSTID": 3461,
      "E": "Vempally",
      "M": "വെമ്പള്ളി",
      "PIN": "686633",
      "DID": "5"
    },
    {
      "POSTID": 3462,
      "E": "Uzhavoor East",
      "M": "ഉഴവൂര്‍ ഈസ്റ്റ്",
      "PIN": "686634",
      "DID": "5"
    },
    {
      "POSTID": 3463,
      "E": "Uzhavoor",
      "M": "ഉഴവൂര്‍",
      "PIN": "686634",
      "DID": "5"
    },
    {
      "POSTID": 3464,
      "E": "Kurichithanam",
      "M": "കുറിച്ചിത്താനം",
      "PIN": "686634",
      "DID": "5"
    },
    {
      "POSTID": 3465,
      "E": "Palakkattumala",
      "M": "പാലയ്ക്കാട്ടുമല",
      "PIN": "686635",
      "DID": "5"
    },
    {
      "POSTID": 3466,
      "E": "Marangattupilly",
      "M": "മരങ്ങാട്ടുപിള്ളി",
      "PIN": "686635",
      "DID": "5"
    },
    {
      "POSTID": 3467,
      "E": "Valavoor",
      "M": "വലവൂര്‍",
      "PIN": "686635",
      "DID": "5"
    },
    {
      "POSTID": 3468,
      "E": "Kudukachira",
      "M": "കുടക്കച്ചിറ",
      "PIN": "686635",
      "DID": "5"
    },
    {
      "POSTID": 3469,
      "E": "Pious Mount",
      "M": "പയസ് മൗണ്ട്",
      "PIN": "686636",
      "DID": "5"
    },
    {
      "POSTID": 3470,
      "E": "Vakkad",
      "M": "വാക്കാട്",
      "PIN": "686636",
      "DID": "5"
    },
    {
      "POSTID": 3471,
      "E": "Kurianad",
      "M": "കുര്യനാട്",
      "PIN": "686636",
      "DID": "5"
    },
    {
      "POSTID": 3472,
      "E": "Monippally",
      "M": "മോനിപ്പള്ളി",
      "PIN": "686636",
      "DID": "5"
    },
    {
      "POSTID": 3473,
      "E": "Peroor",
      "M": "പേരൂര്‍",
      "PIN": "686637",
      "DID": "5"
    },
    {
      "POSTID": 3474,
      "E": "Veliyannoor ",
      "M": "വെളിയന്നൂര്‍",
      "PIN": "686634",
      "DID": "5"
    },
    {
      "POSTID": 3475,
      "E": "Kozha",
      "M": "കോഴ",
      "PIN": "686633",
      "DID": "5"
    },
    {
      "POSTID": 3476,
      "E": "Puthuvely",
      "M": "പുതുവേലി",
      "PIN": "686636",
      "DID": "5"
    },
    {
      "POSTID": 3477,
      "E": "Pakalomattom",
      "M": "പകലോമറ്റം",
      "PIN": "686633",
      "DID": "5"
    },
    {
      "POSTID": 3478,
      "E": "Neeloor",
      "M": "നീലൂര്‍",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3479,
      "E": "Payappar",
      "M": "പായപ്പാര്‍",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3480,
      "E": "Pravithanam",
      "M": "പ്രവിത്താനം",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3481,
      "E": "Anthinad",
      "M": "അന്തിനാട്",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3482,
      "E": "Mattathippara",
      "M": "മറ്റത്തിപ്പാറ",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3483,
      "E": "Alanad",
      "M": "അളനാട്",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3484,
      "E": "Ullanad",
      "M": "ഉള്ളനാട്",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3485,
      "E": "Ezhacherry",
      "M": "ഏഴാച്ചേരി",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3486,
      "E": "Kayoor",
      "M": "കയ്യൂര്‍",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3487,
      "E": "Kodumpidy",
      "M": "കൊടുംബിടി",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3488,
      "E": "Edamaruku",
      "M": "ഇടമറുക്",
      "PIN": "686652",
      "DID": "5"
    },
    {
      "POSTID": 3489,
      "E": "Kizhakkanmattom",
      "M": "കിഴക്കന്‍മറ്റം",
      "PIN": "686652",
      "DID": "5"
    },
    {
      "POSTID": 3490,
      "E": "Mary Land ",
      "M": "മേരി ലാന്റ്",
      "PIN": "686652",
      "DID": "5"
    },
    {
      "POSTID": 3491,
      "E": "Melukavumattom",
      "M": "മേലുകാവുമറ്റം",
      "PIN": "686652",
      "DID": "5"
    },
    {
      "POSTID": 3492,
      "E": "Melukavu",
      "M": "മേലുകാവ്",
      "PIN": "686652",
      "DID": "5"
    },
    {
      "POSTID": 3493,
      "E": "Konipad",
      "M": "കോണിപ്പാട്",
      "PIN": "686652",
      "DID": "5"
    },
    {
      "POSTID": 3494,
      "E": "Kadanad Meenachil",
      "M": "കടനാട് മീനച്ചില്‍",
      "PIN": "686653",
      "DID": "5"
    },
    {
      "POSTID": 3495,
      "E": "Kurumannu",
      "M": "കുറുമണ്ണ്",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3496,
      "E": "Pizhaku",
      "M": "പിഴക്",
      "PIN": "686651",
      "DID": "5"
    },
    {
      "POSTID": 3497,
      "E": "Muvattupuzha",
      "M": "മൂവാറ്റുപുഴ",
      "PIN": "686661",
      "DID": "7"
    },
    {
      "POSTID": 3498,
      "E": "Marika",
      "M": "മാറിക",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3499,
      "E": "Edayar",
      "M": "ഇടയാര്‍",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3500,
      "E": "Karimpana",
      "M": "കരിമ്പന",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3501,
      "E": "Kakkoor",
      "M": "കാക്കൂര്‍",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3502,
      "E": "Karamala",
      "M": "കാരമല",
      "PIN": "686662",
      "DID": "5"
    },
    {
      "POSTID": 3503,
      "E": "Kizhakombu",
      "M": "കിഴകൊമ്പ്",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3504,
      "E": "Koothattukulam",
      "M": "കൂത്താട്ടുകുളം",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3505,
      "E": "Mammalassery ",
      "M": "മാമ്മലശ്ശേരി",
      "PIN": "686663",
      "DID": "7"
    },
    {
      "POSTID": 3506,
      "E": "Ramamangalam",
      "M": "രാമമംഗലം",
      "PIN": "686663",
      "DID": "7"
    },
    {
      "POSTID": 3507,
      "E": "Kizhumury ",
      "M": "കിഴുമുറി",
      "PIN": "686663",
      "DID": "7"
    },
    {
      "POSTID": 3508,
      "E": "Pazhoor",
      "M": "പാഴൂര്‍",
      "PIN": "686664",
      "DID": "7"
    },
    {
      "POSTID": 3509,
      "E": "Piravam ",
      "M": "പിറവം",
      "PIN": "686664",
      "DID": "7"
    },
    {
      "POSTID": 3510,
      "E": "Kalampoor ",
      "M": "കക്കാട്",
      "PIN": "686664",
      "DID": "7"
    },
    {
      "POSTID": 3511,
      "E": "Kalampoor",
      "M": "കളമ്പൂര്‍",
      "PIN": "686664",
      "DID": "7"
    },
    {
      "POSTID": 3512,
      "E": "Nechoor",
      "M": "നെച്ചൂര്‍",
      "PIN": "686664",
      "DID": "7"
    },
    {
      "POSTID": 3513,
      "E": "Mutholapuram",
      "M": "മുത്തോലപുരം",
      "PIN": "686665",
      "DID": "7"
    },
    {
      "POSTID": 3514,
      "E": "Elanji",
      "M": "ഇലഞ്ഞി",
      "PIN": "686665",
      "DID": "7"
    },
    {
      "POSTID": 3515,
      "E": "Perumpadavam",
      "M": "പെരുമ്പടവം",
      "PIN": "686665",
      "DID": "5"
    },
    {
      "POSTID": 3516,
      "E": "Kothamangalam College",
      "M": "കോതമംഗലം കോളേജ്",
      "PIN": "686666",
      "DID": "7"
    },
    {
      "POSTID": 3517,
      "E": "Pampakuda",
      "M": "പാമ്പാക്കുട",
      "PIN": "686667",
      "DID": "7"
    },
    {
      "POSTID": 3518,
      "E": "Parapuram",
      "M": "പാറപ്പുറം",
      "PIN": "686667",
      "DID": "7"
    },
    {
      "POSTID": 3519,
      "E": "Anchalpetty",
      "M": "അഞ്ചല്‍പ്പെട്ടി",
      "PIN": "686667",
      "DID": "7"
    },
    {
      "POSTID": 3520,
      "E": "Avoly",
      "M": "ആവോലി",
      "PIN": "686670",
      "DID": "7"
    },
    {
      "POSTID": 3521,
      "E": "Onakkoor",
      "M": "ഓണക്കൂര്‍",
      "PIN": "686667",
      "DID": "7"
    },
    {
      "POSTID": 3522,
      "E": "Periyappuram ",
      "M": "പെരിയപ്പുറം",
      "PIN": "686667",
      "DID": "7"
    },
    {
      "POSTID": 3523,
      "E": "Nagapuzha",
      "M": "നാഗപ്പുഴ",
      "PIN": "686668",
      "DID": "7"
    },
    {
      "POSTID": 3524,
      "E": "Kaloor",
      "M": "കലൂര്‍",
      "PIN": "686668",
      "DID": "7"
    },
    {
      "POSTID": 3525,
      "E": "Kavakkad",
      "M": "കാവക്കാട്",
      "PIN": "686668",
      "DID": "7"
    },
    {
      "POSTID": 3526,
      "E": "Kalloorkad",
      "M": "കല്ലൂര്‍ക്കാട്",
      "PIN": "686668",
      "DID": "7"
    },
    {
      "POSTID": 3527,
      "E": "Thazhuvamkunnu",
      "M": "തഴുവംകുന്ന്",
      "PIN": "686668",
      "DID": "7"
    },
    {
      "POSTID": 3528,
      "E": "Mazhuvannur South",
      "M": "സൗത്ത് മഴുവന്നൂര്‍",
      "PIN": "686669",
      "DID": "7"
    },
    {
      "POSTID": 3529,
      "E": "Mudavoor",
      "M": "മുടവൂര്‍",
      "PIN": "686669",
      "DID": "7"
    },
    {
      "POSTID": 3530,
      "E": "Mullapuzhachal",
      "M": "മുല്ലപ്പുഴച്ചാല്‍",
      "PIN": "686670",
      "DID": "7"
    },
    {
      "POSTID": 3531,
      "E": "Madakkathanam",
      "M": "മടക്കത്താനം",
      "PIN": "686670",
      "DID": "7"
    },
    {
      "POSTID": 3532,
      "E": "Vazhakulam",
      "M": "വാഴക്കുളം",
      "PIN": "686670",
      "DID": "7"
    },
    {
      "POSTID": 3533,
      "E": "Vadacode-Vazhakulam",
      "M": "വടകോട്-വാഴക്കുളം",
      "PIN": "686670",
      "DID": "7"
    },
    {
      "POSTID": 3534,
      "E": "Kadalikad",
      "M": "കദളിക്കാട്",
      "PIN": "686670",
      "DID": "7"
    },
    {
      "POSTID": 3535,
      "E": "Pallarimangalam",
      "M": "പല്ലാരിമംഗലം",
      "PIN": "686671",
      "DID": "7"
    },
    {
      "POSTID": 3536,
      "E": "Pulinthanam",
      "M": "പുളിന്താനം",
      "PIN": "686671",
      "DID": "7"
    },
    {
      "POSTID": 3537,
      "E": "Padinjarekkara",
      "M": "പടിഞ്ഞാറേക്കര",
      "PIN": "686146",
      "DID": "5"
    },
    {
      "POSTID": 3538,
      "E": "Koovalloor",
      "M": "കൂവള്ളൂര്‍",
      "PIN": "686671",
      "DID": "7"
    },
    {
      "POSTID": 3539,
      "E": "Kadavoor",
      "M": "കടവൂര്‍",
      "PIN": "686671",
      "DID": "7"
    },
    {
      "POSTID": 3540,
      "E": "Chathamattom",
      "M": "ചാത്തമറ്റം",
      "PIN": "686671",
      "DID": "7"
    },
    {
      "POSTID": 3541,
      "E": "Painttoor",
      "M": "പൈങ്ങോട്ടൂര്‍",
      "PIN": "686671",
      "DID": "7"
    },
    {
      "POSTID": 3542,
      "E": "Pothanicad",
      "M": "പോത്താനിക്കാട്",
      "PIN": "686671",
      "DID": "7"
    },
    {
      "POSTID": 3543,
      "E": "Pandappilly",
      "M": "പണ്ടപ്പിള്ളി",
      "PIN": "686672",
      "DID": "7"
    },
    {
      "POSTID": 3544,
      "E": "Meenkunnam",
      "M": "മീങ്കുന്നം",
      "PIN": "686672",
      "DID": "7"
    },
    {
      "POSTID": 3545,
      "E": "Arakuzha",
      "M": "ആരക്കുഴ",
      "PIN": "686672",
      "DID": "7"
    },
    {
      "POSTID": 3546,
      "E": "Memadangu",
      "M": "മേമ്മടങ്ങ്",
      "PIN": "686672",
      "DID": "7"
    },
    {
      "POSTID": 3547,
      "E": "Nirmala",
      "M": "നിര്‍മ്മല",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3548,
      "E": "Puthupady",
      "M": "പുതുപ്പാടി",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3549,
      "E": "Manary",
      "M": "മാനാറി",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3550,
      "E": "East Marady",
      "M": "ഈസ്റ്റ് മാറാടി",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3551,
      "E": "Mulavoor",
      "M": "മുളവൂര്‍",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3552,
      "E": "Muvattupuzha Market",
      "M": "മൂവാറ്റുപുഴ മാര്‍ക്കറ്റ്",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3553,
      "E": "Randar",
      "M": "രണ്ടാര്‍",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3554,
      "E": "Enanalloor",
      "M": "ഏനാനല്ലൂര്‍",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3555,
      "E": "Vazhapilly East",
      "M": "വാഴപ്പിള്ളി ഈസ്റ്റ്",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3556,
      "E": "Perumballoor",
      "M": "പെരുമ്പല്ലൂര്‍",
      "PIN": "686673",
      "DID": "7"
    },
    {
      "POSTID": 3557,
      "E": "Pezhakapally",
      "M": "പേഴയ്ക്കാപ്പിള്ളി",
      "PIN": "686674",
      "DID": "7"
    },
    {
      "POSTID": 3558,
      "E": "Ayavana",
      "M": "ആയവന",
      "PIN": "686668",
      "DID": "7"
    },
    {
      "POSTID": 3559,
      "E": "Oliyappuram",
      "M": "ഒലിയപ്പുറം",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3560,
      "E": "Chelad Junction",
      "M": "ചേലാട് ജംഗ്ഷന്‍",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3561,
      "E": "Palakuzha",
      "M": "പാലക്കുഴ",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3562,
      "E": "Thirumarady",
      "M": "തിരുമാറാടി",
      "PIN": "686662",
      "DID": "7"
    },
    {
      "POSTID": 3563,
      "E": "Mazhuvannur",
      "M": "നോര്‍ത്ത് മഴുവന്നൂര്‍",
      "PIN": "686689",
      "DID": "7"
    },
    {
      "POSTID": 3564,
      "E": "Nadukani",
      "M": "നാടുകാണി",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3565,
      "E": "Pooyamkutty ",
      "M": "പൂയംകുട്ടി",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3566,
      "E": "Bhoothathankettu",
      "M": "ഭൂതത്താന്‍കെട്ട്",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3567,
      "E": "Mamalakandam ",
      "M": "മാമലക്കണ്ടം",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3568,
      "E": "Malippara",
      "M": "മാലിപ്പാറ",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3569,
      "E": "Inchathotty ",
      "M": "ഇഞ്ചത്തൊട്ടി",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3570,
      "E": "Urulanthanny ",
      "M": "ഉരുളന്‍തണ്ണി",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3571,
      "E": "Eramalloor",
      "M": "ഇരമല്ലൂര്‍",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3572,
      "E": "Varapetty",
      "M": "വാരപ്പെട്ടി",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3573,
      "E": "Karukadam",
      "M": "കറുകടം",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3574,
      "E": "Keerampara ",
      "M": "കീരംപാറ",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3575,
      "E": "Kuthukuzhi",
      "M": "കുത്തുകുഴി",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3576,
      "E": "Kuttampuzha ",
      "M": "കുട്ടമ്പുഴ",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3577,
      "E": "Koovappara ",
      "M": "കൂവപ്പാറ",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3578,
      "E": "Nellikuzhi",
      "M": "നെല്ലിക്കുഴി",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3579,
      "E": "Cheruvattoor",
      "M": "ചെറുവട്ടൂര്‍",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3580,
      "E": "Vettampara",
      "M": "വേട്ടാംപാറ",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3581,
      "E": "Kozhippilly",
      "M": "കോഴിപ്പിള്ളി",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3582,
      "E": "Kothamangalam",
      "M": "കോതമംഗലം ",
      "PIN": "686691",
      "DID": "7"
    },
    {
      "POSTID": 3583,
      "E": "Thattekkad ",
      "M": "തട്ടേക്കാട്",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3584,
      "E": "Panipra",
      "M": "പാനിപ്ര",
      "PIN": "686692",
      "DID": "7"
    },
    {
      "POSTID": 3585,
      "E": "Plamudy",
      "M": "പ്ലാമുടി",
      "PIN": "686692",
      "DID": "7"
    },
    {
      "POSTID": 3586,
      "E": "Ayiroorpadam",
      "M": "അയിരൂര്‍പാടം",
      "PIN": "686692",
      "DID": "7"
    },
    {
      "POSTID": 3587,
      "E": "Thrikkariyoor",
      "M": "തൃക്കാരിയൂര്‍",
      "PIN": "686692",
      "DID": "7"
    },
    {
      "POSTID": 3588,
      "E": "Pareekanni",
      "M": "പരീക്കണ്ണി",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 3589,
      "E": "Manikinar",
      "M": "മണിക്കിണര്‍",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 3590,
      "E": "Oonnukal",
      "M": "ഊന്നുകല്‍",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 3591,
      "E": "Nellimattom",
      "M": "നെല്ലിമറ്റം",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 3592,
      "E": "Perumannoor",
      "M": "പെരുമണ്ണൂര്‍",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 3593,
      "E": "Neriamangalam",
      "M": "നേര്യമംഗലം",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 3594,
      "E": "Thalakode",
      "M": "തലക്കോട്",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 3595,
      "E": "Idamalayar",
      "M": "ഇടമലയാര്‍",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3596,
      "E": "Vadattupara ",
      "M": "വടാട്ടുപാറ",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3597,
      "E": "Kottappady",
      "M": "കോട്ടപ്പടി",
      "PIN": "686692",
      "DID": "7"
    },
    {
      "POSTID": 3598,
      "E": "Njayappilly ",
      "M": "ഞായപ്പിള്ളി",
      "PIN": "686681",
      "DID": "7"
    },
    {
      "POSTID": 3599,
      "E": "Thazhekkad",
      "M": "തഴേക്കാട്",
      "PIN": "680697",
      "DID": "8"
    },
    {
      "POSTID": 3600,
      "E": "Pindimana",
      "M": "പിണ്ടിമന",
      "PIN": "686692",
      "DID": "7"
    },
    {
      "POSTID": 3601,
      "E": "Nellad",
      "M": "നെല്ലാട്",
      "PIN": "686721",
      "DID": "7"
    },
    {
      "POSTID": 3602,
      "E": "Mannathoor",
      "M": "മണ്ണത്തൂര്‍",
      "PIN": "686667",
      "DID": "7"
    },
    {
      "POSTID": 3603,
      "E": "Manidu",
      "M": "മണീട്",
      "PIN": "686664",
      "DID": "7"
    },
    {
      "POSTID": 3604,
      "E": "Ooramana ",
      "M": "ഊരമന",
      "PIN": "686663",
      "DID": "7"
    },
    {
      "POSTID": 3605,
      "E": "Alappuzha",
      "M": "ആലപ്പുഴ",
      "PIN": "688001",
      "DID": "4"
    },
    {
      "POSTID": 3606,
      "E": "Alappuzha District Hospital",
      "M": "ആലപ്പുഴ ഡിസ്ട്രിക്റ്റ് ഹോസ്പിറ്റല്‍",
      "PIN": "688001",
      "DID": "4"
    },
    {
      "POSTID": 3607,
      "E": "Alappuzha",
      "M": "",
      "PIN": "688001",
      "DID": "4"
    },
    {
      "POSTID": 3608,
      "E": "Thiruvambadi Jn",
      "M": "തിരുവമ്പാടി ജംഗ്ഷന്‍",
      "PIN": "688002",
      "DID": "4"
    },
    {
      "POSTID": 3609,
      "E": "Vadackal",
      "M": "വാടയ്ക്കല്‍",
      "PIN": "688003",
      "DID": "4"
    },
    {
      "POSTID": 3610,
      "E": "Sanathanapuram",
      "M": "സനാതനപുരം",
      "PIN": "688003",
      "DID": "4"
    },
    {
      "POSTID": 3611,
      "E": "Punnapra",
      "M": "പുന്നപ്ര",
      "PIN": "688004",
      "DID": "4"
    },
    {
      "POSTID": 3612,
      "E": "Alappuzha Medical College",
      "M": "T D M C",
      "PIN": "ആലപ്പുഴ മെഡിക്കല്‍കോളേജ്",
      "DID": null
    },
    {
      "POSTID": 3613,
      "E": "Kakkazhom",
      "M": "കാക്കാഴം",
      "PIN": "688005",
      "DID": "4"
    },
    {
      "POSTID": 3614,
      "E": "Kanjipadom",
      "M": "കഞ്ഞിപ്പാടം",
      "PIN": "688005",
      "DID": "4"
    },
    {
      "POSTID": 3615,
      "E": "Avalookunnu",
      "M": "അവലൂക്കുന്ന്",
      "PIN": "688006",
      "DID": "4"
    },
    {
      "POSTID": 3616,
      "E": "Vembanad Kayal",
      "M": "വേമ്പനാട് കായല്‍",
      "PIN": "688006",
      "DID": "4"
    },
    {
      "POSTID": 3617,
      "E": "Komalapuram",
      "M": "കോമളപുരം",
      "PIN": "688006",
      "DID": "4"
    },
    {
      "POSTID": 3618,
      "E": "Alappuzha North",
      "M": "ആലപ്പുഴ നോര്‍ത്ത് ",
      "PIN": "688007",
      "DID": "4"
    },
    {
      "POSTID": 3619,
      "E": "Kanjiramchira NDBO Alappuzha North",
      "M": "കാഞ്ഞിരംചിറ",
      "PIN": "688007",
      "DID": "4"
    },
    {
      "POSTID": 3620,
      "E": "Kommady Ward",
      "M": "കൊമ്മടി വാര്‍ഡ്",
      "PIN": "688007",
      "DID": "4"
    },
    {
      "POSTID": 3621,
      "E": "Thumpoly",
      "M": "തുമ്പോളി",
      "PIN": "688008",
      "DID": "4"
    },
    {
      "POSTID": 3622,
      "E": "Pazhaveedu",
      "M": "പഴവീട്",
      "PIN": "688009",
      "DID": "4"
    },
    {
      "POSTID": 3623,
      "E": "Alappuzha Mullacakal",
      "M": "ആലപ്പുഴ മുല്ലയ്ക്കല്‍",
      "PIN": "688011",
      "DID": "4"
    },
    {
      "POSTID": 3624,
      "E": "Alappuzha IB NDBO",
      "M": "",
      "PIN": "688011",
      "DID": "4"
    },
    {
      "POSTID": 3625,
      "E": "Alappuzha Iron Bridge",
      "M": "ആലപ്പുഴ അയണ്‍ ബ്രിഡ്ജ്",
      "PIN": "688011",
      "DID": "4"
    },
    {
      "POSTID": 3626,
      "E": "Kuppappuram",
      "M": "കുപ്പപ്പുറം",
      "PIN": "688011",
      "DID": "4"
    },
    {
      "POSTID": 3627,
      "E": "Alappuzha Bazar",
      "M": "ആലപ്പുഴ ബസ്സാര്‍",
      "PIN": "688012",
      "DID": "4"
    },
    {
      "POSTID": 3628,
      "E": "Thondenkulangara",
      "M": "തോണ്ടന്‍കുളങ്ങര",
      "PIN": "688013",
      "DID": "4"
    },
    {
      "POSTID": 3629,
      "E": "Thathampally",
      "M": "തത്തംപള്ളി",
      "PIN": "688013",
      "DID": "4"
    },
    {
      "POSTID": 3630,
      "E": "Punnapra North",
      "M": "പുന്നപ്ര വടക്ക്",
      "PIN": "688014",
      "DID": "4"
    },
    {
      "POSTID": 3631,
      "E": "Kuttamangalam",
      "M": "കുട്ടമംഗലം",
      "PIN": "688501",
      "DID": "4"
    },
    {
      "POSTID": 3632,
      "E": "Kainakary",
      "M": "കൈനകരി",
      "PIN": "688501",
      "DID": "4"
    },
    {
      "POSTID": 3633,
      "E": "Kainakary East",
      "M": "കൈനകരി ഈസ്റ്റ്",
      "PIN": "688501",
      "DID": "4"
    },
    {
      "POSTID": 3634,
      "E": "Chennamkary",
      "M": "ചേന്നംങ്കരി",
      "PIN": "688501",
      "DID": "4"
    },
    {
      "POSTID": 3635,
      "E": "Moncombu",
      "M": "മങ്കൊമ്പ് ",
      "PIN": "688502",
      "DID": "4"
    },
    {
      "POSTID": 3636,
      "E": "Moncombu Thekkekara",
      "M": "മങ്കൊമ്പ് തെക്കേക്കര",
      "PIN": "688503",
      "DID": "4"
    },
    {
      "POSTID": 3637,
      "E": "Punnakkunnathussery",
      "M": "പുന്നകുന്നത്തുശ്ശേരി",
      "PIN": "688504",
      "DID": "4"
    },
    {
      "POSTID": 3638,
      "E": "Punnakunnathussery South",
      "M": "പുന്നകുന്നത്തുശ്ശേരി സൗത്ത്",
      "PIN": "688504",
      "DID": "4"
    },
    {
      "POSTID": 3639,
      "E": "Pulincunnoo",
      "M": "പുളിങ്കുന്ന്",
      "PIN": "688504",
      "DID": "4"
    },
    {
      "POSTID": 3640,
      "E": "Kannadi West",
      "M": "കണ്ണാടി വെസ്റ്റ്",
      "PIN": "688504",
      "DID": "4"
    },
    {
      "POSTID": 3641,
      "E": "Kayalpuram NDBO Pulincunnu",
      "M": "കായല്‍പുറം",
      "PIN": "688504",
      "DID": "4"
    },
    {
      "POSTID": 3642,
      "E": "Pullangadi",
      "M": "പുല്ലങ്ങടി",
      "PIN": "688505",
      "DID": "4"
    },
    {
      "POSTID": 3643,
      "E": "Champakulam",
      "M": "ചമ്പക്കുളം",
      "PIN": "688505",
      "DID": "4"
    },
    {
      "POSTID": 3644,
      "E": "Champakulam East",
      "M": "ചമ്പക്കുളം ഈസ്റ്റ്",
      "PIN": "688505",
      "DID": "4"
    },
    {
      "POSTID": 3645,
      "E": "Chempumpuram",
      "M": "ചേമ്പുംപുറം",
      "PIN": "688505",
      "DID": "4"
    },
    {
      "POSTID": 3646,
      "E": "Vysyambhagom ",
      "M": "വൈശ്യംഭാഗം",
      "PIN": "688005",
      "DID": "4"
    },
    {
      "POSTID": 3647,
      "E": "Narakathara",
      "M": "നാരകത്തറ",
      "PIN": "688506",
      "DID": "4"
    },
    {
      "POSTID": 3648,
      "E": "Kavalam",
      "M": "കാവാലം",
      "PIN": "688506",
      "DID": "4"
    },
    {
      "POSTID": 3649,
      "E": "Kavalam North",
      "M": "കാവാലം നോര്‍ത്ത്",
      "PIN": "688506",
      "DID": "4"
    },
    {
      "POSTID": 3650,
      "E": "Cherukara Kuttanad",
      "M": "ചെറുകര കുട്ടനാട്",
      "PIN": "688506",
      "DID": "4"
    },
    {
      "POSTID": 3651,
      "E": "Chennamkary East",
      "M": "ചേന്നംങ്കരി ഈസ്റ്റ്",
      "PIN": "688506",
      "DID": "4"
    },
    {
      "POSTID": 3652,
      "E": "Kannady",
      "M": "കണ്ണാടി",
      "PIN": "688504",
      "DID": "4"
    },
    {
      "POSTID": 3653,
      "E": "Nedumudi ",
      "M": "നെടുമുടി",
      "PIN": "688503",
      "DID": "4"
    },
    {
      "POSTID": 3654,
      "E": "Chathurthyakary",
      "M": "ചതുര്‍ത്ഥ്യാകരി",
      "PIN": "688502",
      "DID": "4"
    },
    {
      "POSTID": 3655,
      "E": "Thottuvathala ",
      "M": "തോട്ടുവാത്തല",
      "PIN": "688501",
      "DID": "4"
    },
    {
      "POSTID": 3656,
      "E": "Ponga ",
      "M": "പൊങ്ങ",
      "PIN": "688503",
      "DID": "4"
    },
    {
      "POSTID": 3657,
      "E": "Pathirapally",
      "M": "പാതിരപ്പള്ളി",
      "PIN": "688521",
      "DID": "4"
    },
    {
      "POSTID": 3658,
      "E": "Kalavoor",
      "M": "കലവൂര്‍",
      "PIN": "688522",
      "DID": "4"
    },
    {
      "POSTID": 3659,
      "E": "Sethulekshmipuram",
      "M": "സേതുലക്ഷ്മീപുരം (എസ് എല്‍ പുരം)",
      "PIN": "688523",
      "DID": "4"
    },
    {
      "POSTID": 3660,
      "E": "Cherthala",
      "M": "ചേര്‍ത്തല ",
      "PIN": "688524",
      "DID": "4"
    },
    {
      "POSTID": 3661,
      "E": "Cherthala Cutcheri",
      "M": "ചേര്‍ത്തല കച്ചേരി",
      "PIN": "688524",
      "DID": "4"
    },
    {
      "POSTID": 3662,
      "E": "Muhamma",
      "M": "മുഹമ്മ",
      "PIN": "688525",
      "DID": "4"
    },
    {
      "POSTID": 3663,
      "E": "Poochackal",
      "M": "പൂച്ചാക്കല്‍",
      "PIN": "688526",
      "DID": "4"
    },
    {
      "POSTID": 3664,
      "E": "Olavaipu",
      "M": "ഉളവയ്പ്",
      "PIN": "688526",
      "DID": "4"
    },
    {
      "POSTID": 3665,
      "E": "Muttathiparambu",
      "M": "മുട്ടത്തിപറമ്പ്",
      "PIN": "688527",
      "DID": "4"
    },
    {
      "POSTID": 3666,
      "E": "Kannankara",
      "M": "കണ്ണങ്കര",
      "PIN": "688527",
      "DID": "4"
    },
    {
      "POSTID": 3667,
      "E": "Karikad",
      "M": "കരിക്കാട്",
      "PIN": "688527",
      "DID": "4"
    },
    {
      "POSTID": 3668,
      "E": "Thanneermukkom",
      "M": "തണ്ണീര്‍മുക്കം",
      "PIN": "688527",
      "DID": "4"
    },
    {
      "POSTID": 3669,
      "E": "Thycattussery",
      "M": "തൈക്കാട്ടുശ്ശേരി",
      "PIN": "688528",
      "DID": "4"
    },
    {
      "POSTID": 3670,
      "E": "Kadakkarappally",
      "M": "കടക്കരപ്പള്ളി",
      "PIN": "688529",
      "DID": "4"
    },
    {
      "POSTID": 3671,
      "E": "Arthinkal",
      "M": "അര്‍ത്തുങ്കല്‍",
      "PIN": "688530",
      "DID": "4"
    },
    {
      "POSTID": 3672,
      "E": "Chethy",
      "M": "ചെത്തി",
      "PIN": "688530",
      "DID": "4"
    },
    {
      "POSTID": 3673,
      "E": "Pattanacaud",
      "M": "പട്ടണക്കാട്",
      "PIN": "688531",
      "DID": "4"
    },
    {
      "POSTID": 3674,
      "E": "Andhakaranazhi",
      "M": "അന്ധകാരനഴി",
      "PIN": "688531",
      "DID": "4"
    },
    {
      "POSTID": 3675,
      "E": "Valamangalam",
      "M": "വളമംഗലം",
      "PIN": "688532",
      "DID": "4"
    },
    {
      "POSTID": 3676,
      "E": "Thuravoor South",
      "M": "തുറവൂര്‍ സൗത്ത്",
      "PIN": "688532",
      "DID": "4"
    },
    {
      "POSTID": 3677,
      "E": "Thuravoor",
      "M": "തുറവൂര്‍",
      "PIN": "688532",
      "DID": "4"
    },
    {
      "POSTID": 3678,
      "E": "Kuthiathode",
      "M": "കുത്തിയതോട്",
      "PIN": "688533",
      "DID": "4"
    },
    {
      "POSTID": 3679,
      "E": "Thuravoor South",
      "M": "",
      "PIN": "688533",
      "DID": "4"
    },
    {
      "POSTID": 3680,
      "E": "Aroor",
      "M": "അരൂര്‍",
      "PIN": "688534",
      "DID": "4"
    },
    {
      "POSTID": 3681,
      "E": "Arookutty",
      "M": "അരൂക്കുറ്റി",
      "PIN": "688535",
      "DID": "4"
    },
    {
      "POSTID": 3682,
      "E": "Vaduthala Jetty",
      "M": "വടുതല ജെട്ടി",
      "PIN": "688535",
      "DID": "4"
    },
    {
      "POSTID": 3683,
      "E": "Vayalar",
      "M": "വയലാര്‍",
      "PIN": "688536",
      "DID": "4"
    },
    {
      "POSTID": 3684,
      "E": "Eramalloor",
      "M": "എരമല്ലൂര്‍",
      "PIN": "688537",
      "DID": "4"
    },
    {
      "POSTID": 3685,
      "E": "Mannamcherry",
      "M": "മണ്ണഞ്ചേരി",
      "PIN": "688538",
      "DID": "4"
    },
    {
      "POSTID": 3686,
      "E": "Ponnad",
      "M": "പൊന്നാട്",
      "PIN": "688538",
      "DID": "4"
    },
    {
      "POSTID": 3687,
      "E": "Mayithara Market",
      "M": "മായിത്തറ മാര്‍ക്കറ്റ്",
      "PIN": "688539",
      "DID": "4"
    },
    {
      "POSTID": 3688,
      "E": "Kuruppangulangara",
      "M": "കുറുപ്പന്‍കുളങ്ങര",
      "PIN": "688539",
      "DID": "4"
    },
    {
      "POSTID": 3689,
      "E": "Parayakad",
      "M": "പറയകാട്",
      "PIN": "688540",
      "DID": "4"
    },
    {
      "POSTID": 3690,
      "E": "Thirumalabhagom",
      "M": "തിരുമലഭാഗം",
      "PIN": "688540",
      "DID": "4"
    },
    {
      "POSTID": 3691,
      "E": "Pallippuram",
      "M": "പള്ളിപ്പുറം",
      "PIN": "688541",
      "DID": "4"
    },
    {
      "POSTID": 3692,
      "E": "Aryad North",
      "M": "ആര്യാട്  വടക്ക്",
      "PIN": "688538",
      "DID": "4"
    },
    {
      "POSTID": 3693,
      "E": "Varanad ",
      "M": "വാരനാട്",
      "PIN": "688539",
      "DID": "4"
    },
    {
      "POSTID": 3694,
      "E": "Kanichukulangara",
      "M": "കണിച്ചുകുളങ്ങര",
      "PIN": "688544",
      "DID": "4"
    },
    {
      "POSTID": 3695,
      "E": "Maruthorvattom",
      "M": "മരുത്തോര്‍വട്ടം",
      "PIN": "688545",
      "DID": "4"
    },
    {
      "POSTID": 3696,
      "E": "Kattoor-Kalavoor",
      "M": "കാട്ടൂര്‍ കലവൂര്‍",
      "PIN": "688546",
      "DID": "4"
    },
    {
      "POSTID": 3697,
      "E": "Chandiroor",
      "M": "ചന്തിരൂര്‍",
      "PIN": "688547",
      "DID": "4"
    },
    {
      "POSTID": 3698,
      "E": "Ezhupunna",
      "M": "എഴുപുന്ന ",
      "PIN": "688537",
      "DID": "4"
    },
    {
      "POSTID": 3699,
      "E": "Mararikulam North",
      "M": "മാരാരിക്കുളം വടക്ക്",
      "PIN": "688549",
      "DID": "4"
    },
    {
      "POSTID": 3700,
      "E": "Ezhupunna South",
      "M": "എഴുപുന്ന സൗത്ത്",
      "PIN": "688550",
      "DID": "4"
    },
    {
      "POSTID": 3701,
      "E": "Cherthala South",
      "M": "ചേര്‍ത്തല തെക്ക്",
      "PIN": "688552",
      "DID": "4"
    },
    {
      "POSTID": 3702,
      "E": "Thaickal",
      "M": "തൈയ്ക്കല്‍",
      "PIN": "688554",
      "DID": "4"
    },
    {
      "POSTID": 3703,
      "E": "Varanam",
      "M": "വാരണം",
      "PIN": "688555",
      "DID": "4"
    },
    {
      "POSTID": 3704,
      "E": "Kochuramapuram",
      "M": "കെ ആര്‍ പുരം",
      "PIN": "688556",
      "DID": "4"
    },
    {
      "POSTID": 3705,
      "E": "Thirunalloor ",
      "M": "തിരുനെല്ലൂര്‍",
      "PIN": "688541",
      "DID": "4"
    },
    {
      "POSTID": 3706,
      "E": "Manappuram",
      "M": "മണപ്പുറം",
      "PIN": "688558",
      "DID": "4"
    },
    {
      "POSTID": 3707,
      "E": "Naduvathunagar",
      "M": "നടുവത്തുനഗര്‍",
      "PIN": "688526",
      "DID": "4"
    },
    {
      "POSTID": 3708,
      "E": "Ambalapuzha",
      "M": "അമ്പലപ്പുഴ",
      "PIN": "688561",
      "DID": "4"
    },
    {
      "POSTID": 3709,
      "E": "Ambalapuzha East",
      "M": "അമ്പലപ്പുഴ കിഴക്ക്",
      "PIN": "688561",
      "DID": "4"
    },
    {
      "POSTID": 3710,
      "E": "Illichira",
      "M": "ഇല്ലിച്ചിറ",
      "PIN": "688561",
      "DID": "4"
    },
    {
      "POSTID": 3711,
      "E": "Kunnumma Thakazhi",
      "M": "കുന്നുമ്മ",
      "PIN": "688562",
      "DID": "4"
    },
    {
      "POSTID": 3712,
      "E": "Chirayakom",
      "M": "ചിറയകം",
      "PIN": "688562",
      "DID": "4"
    },
    {
      "POSTID": 3713,
      "E": "Kelamangalam",
      "M": "കേളമംഗലം",
      "PIN": "688562",
      "DID": "4"
    },
    {
      "POSTID": 3714,
      "E": "Thakazhy",
      "M": "തകഴി",
      "PIN": "688562",
      "DID": "4"
    },
    {
      "POSTID": 3715,
      "E": "Thottapaly",
      "M": "തോട്ടപ്പള്ളി",
      "PIN": "688563",
      "DID": "4"
    },
    {
      "POSTID": 3716,
      "E": "Karumady",
      "M": "കരുമാടി",
      "PIN": "688561",
      "DID": "4"
    },
    {
      "POSTID": 3717,
      "E": "Panavally",
      "M": "പാണാവള്ളി",
      "PIN": "688526",
      "DID": "4"
    },
    {
      "POSTID": 3718,
      "E": "Pollathai",
      "M": "പൊള്ളേത്തൈ",
      "PIN": "688567",
      "DID": "4"
    },
    {
      "POSTID": 3719,
      "E": "Perumbalam",
      "M": "പെരുമ്പളം",
      "PIN": "688570",
      "DID": "4"
    },
    {
      "POSTID": 3720,
      "E": "Thrichattukulam",
      "M": "തൃച്ചാറ്റുകുളം",
      "PIN": "688526",
      "DID": "4"
    },
    {
      "POSTID": 3721,
      "E": "Sreenarayanapuram",
      "M": "ശ്രീനാരായണപുരം (എസ് എന്‍ പുരം)",
      "PIN": "688582",
      "DID": "4"
    },
    {
      "POSTID": 3722,
      "E": "Kokkothamangalam",
      "M": "കൊക്കോതമംഗലം",
      "PIN": "688527",
      "DID": "4"
    },
    {
      "POSTID": 3723,
      "E": "Pallithodu ",
      "M": "പള്ളിത്തോട്",
      "PIN": "688540",
      "DID": "4"
    },
    {
      "POSTID": 3724,
      "E": "Kalavamkodam",
      "M": "കളവംകോടം",
      "PIN": "688524",
      "DID": "4"
    },
    {
      "POSTID": 3725,
      "E": "Vettackal",
      "M": "വെട്ടയ്ക്കല്‍",
      "PIN": "688587",
      "DID": "4"
    },
    {
      "POSTID": 3726,
      "E": "Pushpagiri-Tiruvalla",
      "M": "പുഷ്പഗിരി-തിരുവല്ല",
      "PIN": "689101",
      "DID": "3"
    },
    {
      "POSTID": 3727,
      "E": "Tiruvalla",
      "M": "തിരുവല്ല ",
      "PIN": "689101",
      "DID": "3"
    },
    {
      "POSTID": 3728,
      "E": "Tiruvalla Market Jn.",
      "M": "തിരുവല്ല മാര്‍ക്കറ്റ് ജംഗ്ഷന്‍",
      "PIN": "689101",
      "DID": "3"
    },
    {
      "POSTID": 3729,
      "E": "Thiruvalla R S",
      "M": "തിരുവല്ല ആര്‍ എസ്",
      "PIN": "689111",
      "DID": "3"
    },
    {
      "POSTID": 3730,
      "E": "Kavumbhagom Tla",
      "M": "കാവുംഭാഗം",
      "PIN": "689102",
      "DID": "3"
    },
    {
      "POSTID": 3731,
      "E": "Kallumkal",
      "M": "കല്ലുങ്കല്‍",
      "PIN": "689102",
      "DID": "3"
    },
    {
      "POSTID": 3732,
      "E": "Kuttapuzha",
      "M": "കുറ്റപ്പുഴ",
      "PIN": "689103",
      "DID": "3"
    },
    {
      "POSTID": 3733,
      "E": "Chumitra",
      "M": "ചുമത്ര",
      "PIN": "689103",
      "DID": "3"
    },
    {
      "POSTID": 3734,
      "E": "Valanjavattom",
      "M": "വളഞ്ഞവട്ടം",
      "PIN": "689104",
      "DID": "3"
    },
    {
      "POSTID": 3735,
      "E": "Valanjavattom East",
      "M": "വളഞ്ഞവട്ടം കിഴക്ക്",
      "PIN": "689104",
      "DID": "3"
    },
    {
      "POSTID": 3736,
      "E": "Manjadi Jn.",
      "M": "മഞ്ഞാടി",
      "PIN": "689105",
      "DID": "3"
    },
    {
      "POSTID": 3737,
      "E": "Kattode",
      "M": "കറ്റോഡ്",
      "PIN": "689105",
      "DID": "3"
    },
    {
      "POSTID": 3738,
      "E": "Kuttur",
      "M": "കുറ്റൂര്‍",
      "PIN": "689106",
      "DID": "3"
    },
    {
      "POSTID": 3739,
      "E": "Thengely",
      "M": "തെങ്ങേലി",
      "PIN": "689106",
      "DID": "3"
    },
    {
      "POSTID": 3740,
      "E": "Muthur",
      "M": "മുത്തൂര്‍",
      "PIN": "689107",
      "DID": "3"
    },
    {
      "POSTID": 3741,
      "E": "Perumthuruthy",
      "M": "പെരുംതുരുത്തി",
      "PIN": "689107",
      "DID": "3"
    },
    {
      "POSTID": 3742,
      "E": "Karakkal",
      "M": "കാരയ്ക്കല്‍",
      "PIN": "689108",
      "DID": "3"
    },
    {
      "POSTID": 3743,
      "E": "Peringara",
      "M": "പെരിങ്ങര",
      "PIN": "689108",
      "DID": "3"
    },
    {
      "POSTID": 3744,
      "E": "Eramallikara",
      "M": "ഇരമല്ലിക്കര",
      "PIN": "689109",
      "DID": "4"
    },
    {
      "POSTID": 3745,
      "E": "Thiruvanvandoor",
      "M": "തിരുവന്‍വണ്ട‍ൂര്‍",
      "PIN": "689109",
      "DID": "4"
    },
    {
      "POSTID": 3746,
      "E": "Podiyadi",
      "M": "പൊടിയാടി",
      "PIN": "689110",
      "DID": "3"
    },
    {
      "POSTID": 3747,
      "E": "Amichakari",
      "M": "അമിച്ചകരി",
      "PIN": "689112",
      "DID": "3"
    },
    {
      "POSTID": 3748,
      "E": "Chathankari",
      "M": "ചാത്തങ്കരി",
      "PIN": "689112",
      "DID": "3"
    },
    {
      "POSTID": 3749,
      "E": "Azhiyidathuchira",
      "M": "അഴിയിടത്തുചിറ",
      "PIN": "689113",
      "DID": "3"
    },
    {
      "POSTID": 3750,
      "E": "Alamthurithy",
      "M": "ആലംതുരുത്തി",
      "PIN": "689113",
      "DID": "3"
    },
    {
      "POSTID": 3751,
      "E": "Vempala",
      "M": "വെണ്‍പാല",
      "PIN": "689114",
      "DID": "3"
    },
    {
      "POSTID": 3752,
      "E": "Thirumoolapuram",
      "M": "തിരുമൂലപുരം",
      "PIN": "689115",
      "DID": "3"
    },
    {
      "POSTID": 3753,
      "E": "Chengannur",
      "M": "ചെങ്ങന്നൂര്‍",
      "PIN": "689121",
      "DID": "4"
    },
    {
      "POSTID": 3754,
      "E": "Chengannur R.S",
      "M": "ചെങ്ങന്നൂര്‍  ആര്‍ എസ്",
      "PIN": "689121",
      "DID": "4"
    },
    {
      "POSTID": 3755,
      "E": "Neervilakom",
      "M": "നീര്‍വിളാകം",
      "PIN": "689122",
      "DID": "3"
    },
    {
      "POSTID": 3756,
      "E": "Piralasseri",
      "M": "പിരളശ്ശേരി",
      "PIN": "689122",
      "DID": "4"
    },
    {
      "POSTID": 3757,
      "E": "Angadical-Chengannur",
      "M": "അങ്ങാടിക്കല്‍ ചെങ്ങന്നൂര്‍",
      "PIN": "689122",
      "DID": "4"
    },
    {
      "POSTID": 3758,
      "E": "Puthencave",
      "M": "പുത്തന്‍കാവ്",
      "PIN": "689123",
      "DID": "4"
    },
    {
      "POSTID": 3759,
      "E": "Arattupuzha-Chengannur",
      "M": "ആറാട്ടുപുഴ",
      "PIN": "689123",
      "DID": "3"
    },
    {
      "POSTID": 3760,
      "E": "Edanad",
      "M": "ഇടനാട്",
      "PIN": "689123",
      "DID": "4"
    },
    {
      "POSTID": 3761,
      "E": "Pandanad North",
      "M": "പാണ്ടനാട് നോര്‍ത്ത്",
      "PIN": "689124",
      "DID": "4"
    },
    {
      "POSTID": 3762,
      "E": "Mundancavu",
      "M": "മുണ്ടന്‍കാവ്",
      "PIN": "689124",
      "DID": "4"
    },
    {
      "POSTID": 3763,
      "E": "Kallisseri",
      "M": "കല്ലിശ്ശേരി",
      "PIN": "689124",
      "DID": "4"
    },
    {
      "POSTID": 3764,
      "E": "Vazhamangalam",
      "M": "വാഴാര്‍മംഗലം",
      "PIN": "689125",
      "DID": "4"
    },
    {
      "POSTID": 3765,
      "E": "Ala",
      "M": "ആല",
      "PIN": "689126",
      "DID": "4"
    },
    {
      "POSTID": 3766,
      "E": "Perissery",
      "M": "പേരിശ്ശേരി",
      "PIN": "689126",
      "DID": "4"
    },
    {
      "POSTID": 3767,
      "E": "Pandalam",
      "M": "പന്തളം",
      "PIN": "689501",
      "DID": "3"
    },
    {
      "POSTID": 3768,
      "E": "Pandalam Medical Mission",
      "M": "പന്തളം മെഡിക്കല്‍ മിഷന്‍",
      "PIN": "689501",
      "DID": "3"
    },
    {
      "POSTID": 3769,
      "E": "Mannamnagar",
      "M": "മന്നം നഗര്‍",
      "PIN": "689501",
      "DID": "3"
    },
    {
      "POSTID": 3770,
      "E": "Mannam Sugar Mills",
      "M": "മന്നം ഷുഗര്‍ മില്‍സ്",
      "PIN": "689501",
      "DID": "3"
    },
    {
      "POSTID": 3771,
      "E": "Kurampala South",
      "M": "കുരമ്പാല സൗത്ത്",
      "PIN": "689501",
      "DID": "3"
    },
    {
      "POSTID": 3772,
      "E": "Muttom Thumpamon",
      "M": "മുട്ടം തുമ്പമണ്‍",
      "PIN": "689502",
      "DID": "3"
    },
    {
      "POSTID": 3773,
      "E": "Keerukuzhi",
      "M": "കീരുകുഴി",
      "PIN": "689502",
      "DID": "3"
    },
    {
      "POSTID": 3774,
      "E": "Thumpamon",
      "M": "തുമ്പമണ്‍",
      "PIN": "689502",
      "DID": "3"
    },
    {
      "POSTID": 3775,
      "E": "Panangad Kulanada",
      "M": "പനങ്ങാട് ",
      "PIN": "689503",
      "DID": "3"
    },
    {
      "POSTID": 3776,
      "E": "Punthala",
      "M": "പുന്തല",
      "PIN": "689509",
      "DID": "4"
    },
    {
      "POSTID": 3777,
      "E": "Ullannur",
      "M": "ഉള്ളന്നൂര്‍",
      "PIN": "689503",
      "DID": "3"
    },
    {
      "POSTID": 3778,
      "E": "Ulanad",
      "M": "ഉളനാട്",
      "PIN": "689503",
      "DID": "3"
    },
    {
      "POSTID": 3779,
      "E": "Kulanada",
      "M": "കുളനട",
      "PIN": "689503",
      "DID": "3"
    },
    {
      "POSTID": 3780,
      "E": "Kaippuzha North",
      "M": "കൈപ്പുഴ നോര്‍ത്ത്",
      "PIN": "689503",
      "DID": "3"
    },
    {
      "POSTID": 3781,
      "E": "Karakkad",
      "M": "കാരക്കാട്",
      "PIN": "689504",
      "DID": "3"
    },
    {
      "POSTID": 3782,
      "E": "Kotta",
      "M": "കോട്ട",
      "PIN": "689504",
      "DID": "3"
    },
    {
      "POSTID": 3783,
      "E": "Areekara",
      "M": "അരീക്കര",
      "PIN": "689505",
      "DID": "4"
    },
    {
      "POSTID": 3784,
      "E": "Mulakuzha",
      "M": "മുളക്കുഴ",
      "PIN": "689505",
      "DID": "4"
    },
    {
      "POSTID": 3785,
      "E": "Peringala",
      "M": "പെരിങ്ങാല",
      "PIN": "689505",
      "DID": "4"
    },
    {
      "POSTID": 3786,
      "E": "Pandanad West",
      "M": "പാണ്ടനാട് വെസ്റ്റ്",
      "PIN": "689506",
      "DID": "4"
    },
    {
      "POSTID": 3787,
      "E": "Pandanad",
      "M": "പാണ്ടനാട്",
      "PIN": "689506",
      "DID": "3"
    },
    {
      "POSTID": 3788,
      "E": "Karithotta",
      "M": "",
      "PIN": "689507",
      "DID": "3"
    },
    {
      "POSTID": 3789,
      "E": "Mezhuvelli",
      "M": "മെഴുവേലി",
      "PIN": "689507",
      "DID": "3"
    },
    {
      "POSTID": 3790,
      "E": "Mampra",
      "M": "മാമ്പ്ര",
      "PIN": "689508",
      "DID": "4"
    },
    {
      "POSTID": 3791,
      "E": "Neduvarancode",
      "M": "നെടുവരംകോട്",
      "PIN": "689508",
      "DID": "4"
    },
    {
      "POSTID": 3792,
      "E": "Kodukulanji",
      "M": "കോടുകുളഞ്ഞി",
      "PIN": "689508",
      "DID": "4"
    },
    {
      "POSTID": 3793,
      "E": "Venmoney",
      "M": "വെണ്മണി",
      "PIN": "689509",
      "DID": "4"
    },
    {
      "POSTID": 3794,
      "E": "Puliyoor",
      "M": "പുലിയൂര്‍",
      "PIN": "689510",
      "DID": "4"
    },
    {
      "POSTID": 3795,
      "E": "Bhudhanoor",
      "M": "ബുധനൂര്‍",
      "PIN": "689510",
      "DID": "4"
    },
    {
      "POSTID": 3796,
      "E": "Elanjimel",
      "M": "ഇലഞ്ഞിമേല്‍",
      "PIN": "689511",
      "DID": "4"
    },
    {
      "POSTID": 3797,
      "E": "Cherianad",
      "M": "ചെറിയനാട്",
      "PIN": "689511",
      "DID": "4"
    },
    {
      "POSTID": 3798,
      "E": "Thonakkad",
      "M": "തോന്നയ്ക്കാട്",
      "PIN": "689511",
      "DID": "4"
    },
    {
      "POSTID": 3799,
      "E": "Kudassanad",
      "M": "കുടശ്ശനാട്",
      "PIN": "689512",
      "DID": "3"
    },
    {
      "POSTID": 3800,
      "E": "Nariapuram",
      "M": "നരിയാപുരം",
      "PIN": "689513",
      "DID": "3"
    },
    {
      "POSTID": 3801,
      "E": "Mammoodu",
      "M": "മാമ്മൂട്",
      "PIN": "689513",
      "DID": "3"
    },
    {
      "POSTID": 3802,
      "E": "Karithotta",
      "M": "കാരിത്തോട്ട",
      "PIN": "689514",
      "DID": "3"
    },
    {
      "POSTID": 3803,
      "E": "Kidangannur",
      "M": "കിടങ്ങന്നൂര്‍",
      "PIN": "689514",
      "DID": "3"
    },
    {
      "POSTID": 3804,
      "E": "Iranikudy",
      "M": "ഐരാണിക്കുടി",
      "PIN": "690558",
      "DID": "4"
    },
    {
      "POSTID": 3805,
      "E": "Mudiyoorkonam",
      "M": "മുടിയൂര്‍‌ക്കോണം",
      "PIN": "689516",
      "DID": "3"
    },
    {
      "POSTID": 3806,
      "E": "Pathirikode ",
      "M": "ചെന്നീര്‍ക്കര",
      "PIN": "689503",
      "DID": "3"
    },
    {
      "POSTID": 3807,
      "E": "Paranthal ",
      "M": "പറന്തല്‍",
      "PIN": "689501",
      "DID": "3"
    },
    {
      "POSTID": 3808,
      "E": "Manthuka",
      "M": "മാന്തുക",
      "PIN": "689503",
      "DID": "3"
    },
    {
      "POSTID": 3809,
      "E": "Poomala",
      "M": "പൂമല",
      "PIN": "689520",
      "DID": "4"
    },
    {
      "POSTID": 3810,
      "E": "Pennukara",
      "M": "പെണ്ണുക്കര",
      "PIN": "689520",
      "DID": "4"
    },
    {
      "POSTID": 3811,
      "E": "Kozhuvallur",
      "M": "കൊഴുവല്ലൂര്‍",
      "PIN": "689521",
      "DID": "4"
    },
    {
      "POSTID": 3812,
      "E": "Varayannoor ",
      "M": "വരയന്നൂര്‍",
      "PIN": "689548",
      "DID": "3"
    },
    {
      "POSTID": 3813,
      "E": "Poovathoor",
      "M": "പൂവത്തൂര്‍",
      "PIN": "689531",
      "DID": "3"
    },
    {
      "POSTID": 3814,
      "E": "Koipuram",
      "M": "കോയിപ്രം",
      "PIN": "689531",
      "DID": "3"
    },
    {
      "POSTID": 3815,
      "E": "Malakara",
      "M": "മാലക്കര",
      "PIN": "689532",
      "DID": "3"
    },
    {
      "POSTID": 3816,
      "E": "Edayaranmula",
      "M": "ഇടയാറന്മുള ",
      "PIN": "689532",
      "DID": "3"
    },
    {
      "POSTID": 3817,
      "E": "Edayaranmula West",
      "M": "ഇടയാറന്മുള വെസ്റ്റ്",
      "PIN": "689532",
      "DID": "3"
    },
    {
      "POSTID": 3818,
      "E": "Erumakkad",
      "M": "എരുമക്കാട്",
      "PIN": "689532",
      "DID": "3"
    },
    {
      "POSTID": 3819,
      "E": "Kurichimuttom",
      "M": "കുറിച്ചിമുട്ടം",
      "PIN": "689532",
      "DID": "3"
    },
    {
      "POSTID": 3820,
      "E": "Nalkalikal",
      "M": "നാല്‍ക്കാലിക്കല്‍",
      "PIN": "689533",
      "DID": "3"
    },
    {
      "POSTID": 3821,
      "E": "Mallapuzhassery",
      "M": "മല്ലപ്പുഴശ്ശേരി",
      "PIN": "689533",
      "DID": "3"
    },
    {
      "POSTID": 3822,
      "E": "Aranmula",
      "M": "ആറന്മുള",
      "PIN": "689533",
      "DID": "3"
    },
    {
      "POSTID": 3823,
      "E": "Vallamkulam",
      "M": "വള്ളംകുളം ",
      "PIN": "689541",
      "DID": "3"
    },
    {
      "POSTID": 3824,
      "E": "Vallamkulam East",
      "M": "വള്ളംകുളം ഈസ്റ്റ്",
      "PIN": "689541",
      "DID": "3"
    },
    {
      "POSTID": 3825,
      "E": "Kozimala",
      "M": "കോഴിമല",
      "PIN": "689541",
      "DID": "3"
    },
    {
      "POSTID": 3826,
      "E": "Thottabhagom",
      "M": "തോട്ടഭാഗം",
      "PIN": "689541",
      "DID": "3"
    },
    {
      "POSTID": 3827,
      "E": "Eraviperoor",
      "M": "ഇരവിപേരൂര്‍",
      "PIN": "689542",
      "DID": "3"
    },
    {
      "POSTID": 3828,
      "E": "Eraviperoor East NDBO Eraviperoor",
      "M": "ഇരവിപേരൂര്‍ ഈസ്റ്റ്",
      "PIN": "689542",
      "DID": "3"
    },
    {
      "POSTID": 3829,
      "E": "Nellimala",
      "M": "നെല്ലിമല",
      "PIN": "689542",
      "DID": "3"
    },
    {
      "POSTID": 3830,
      "E": "Puramattom",
      "M": "പുറമറ്റം",
      "PIN": "689543",
      "DID": "3"
    },
    {
      "POSTID": 3831,
      "E": "Mundamala",
      "M": "മുണ്ടമല",
      "PIN": "689543",
      "DID": "3"
    },
    {
      "POSTID": 3832,
      "E": "Madathumbhagom North",
      "M": "മടത്തുംഭാഗം നോര്‍‌ത്ത്",
      "PIN": "689543",
      "DID": "3"
    },
    {
      "POSTID": 3833,
      "E": "Kavungumprayar",
      "M": "കവുങ്ങുംപ്രയാര്‍",
      "PIN": "689543",
      "DID": "3"
    },
    {
      "POSTID": 3834,
      "E": "Narakathani",
      "M": "നാരകത്താനി",
      "PIN": "689544",
      "DID": "3"
    },
    {
      "POSTID": 3835,
      "E": "Paduthode",
      "M": "പടുതോട്",
      "PIN": "689544",
      "DID": "3"
    },
    {
      "POSTID": 3836,
      "E": "Valakuzhy",
      "M": "വാളക്കുഴി",
      "PIN": "689544",
      "DID": "3"
    },
    {
      "POSTID": 3837,
      "E": "Vennikulam",
      "M": "വെണ്ണിക്കുളം",
      "PIN": "689544",
      "DID": "3"
    },
    {
      "POSTID": 3838,
      "E": "Thelliyoor",
      "M": "തെള്ളിയൂര്‍",
      "PIN": "689544",
      "DID": "3"
    },
    {
      "POSTID": 3839,
      "E": "Kolabhagom Jn.",
      "M": "കോളഭാഗം",
      "PIN": "689545",
      "DID": "3"
    },
    {
      "POSTID": 3840,
      "E": "Thadiyoor",
      "M": "തടിയൂര്‍",
      "PIN": "689545",
      "DID": "3"
    },
    {
      "POSTID": 3841,
      "E": "Othara",
      "M": "ഓതറ ",
      "PIN": "689546",
      "DID": "3"
    },
    {
      "POSTID": 3842,
      "E": "Kunnathukara HSE",
      "M": "കുന്നത്തുംകര",
      "PIN": "689546",
      "DID": "3"
    },
    {
      "POSTID": 3843,
      "E": "Muttumon NDBO Kumbanad",
      "M": "മുട്ടുമണ്‍",
      "PIN": "689547",
      "DID": "3"
    },
    {
      "POSTID": 3844,
      "E": "Kumbanad",
      "M": "കുമ്പനാട്",
      "PIN": "689547",
      "DID": "3"
    },
    {
      "POSTID": 3845,
      "E": "Kadapra Kumbanad",
      "M": "കടപ്ര കുമ്പനാട്",
      "PIN": "689547",
      "DID": "3"
    },
    {
      "POSTID": 3846,
      "E": "Pullad",
      "M": "പുല്ലാട്",
      "PIN": "689548",
      "DID": "3"
    },
    {
      "POSTID": 3847,
      "E": "Kuravankuzhi",
      "M": "കുറവന്‍കുഴി",
      "PIN": "689548",
      "DID": "3"
    },
    {
      "POSTID": 3848,
      "E": "Kurungazhabhagom",
      "M": "കുറുങ്ങഴ",
      "PIN": "689548",
      "DID": "3"
    },
    {
      "POSTID": 3849,
      "E": "Maramon",
      "M": "മാരാമണ്‍",
      "PIN": "689549",
      "DID": "3"
    },
    {
      "POSTID": 3850,
      "E": "Chirayirambu",
      "M": "ചിറയിറമ്പ്",
      "PIN": "689549",
      "DID": "3"
    },
    {
      "POSTID": 3851,
      "E": "Kurianoor",
      "M": "കുറിയന്നൂര്‍",
      "PIN": "689550",
      "DID": "3"
    },
    {
      "POSTID": 3852,
      "E": "Othara West",
      "M": "ഓതറ വെസ്റ്റ്",
      "PIN": "689551",
      "DID": "3"
    },
    {
      "POSTID": 3853,
      "E": "Neerattupuram",
      "M": "നീരേറ്റുപുറം",
      "PIN": "689571",
      "DID": "3"
    },
    {
      "POSTID": 3854,
      "E": "Karikuzhy",
      "M": "കാരിക്കുഴി",
      "PIN": "689571",
      "DID": "4"
    },
    {
      "POSTID": 3855,
      "E": "Thalavady",
      "M": "തലവടി",
      "PIN": "689572",
      "DID": "4"
    },
    {
      "POSTID": 3856,
      "E": "Edathua",
      "M": "എടത്വാ",
      "PIN": "689573",
      "DID": "3"
    },
    {
      "POSTID": 3857,
      "E": "Chekkidikkad",
      "M": "ചെക്കിടിക്കാട്",
      "PIN": "689573",
      "DID": "4"
    },
    {
      "POSTID": 3858,
      "E": "Muttar",
      "M": "മുട്ടാര്‍",
      "PIN": "689574",
      "DID": "4"
    },
    {
      "POSTID": 3859,
      "E": "Kunthirickal",
      "M": "കുന്തിരിക്കല്‍",
      "PIN": "689575",
      "DID": "4"
    },
    {
      "POSTID": 3860,
      "E": "Anaparambal",
      "M": "ആനപ്രമ്പാല്‍ ",
      "PIN": "689576",
      "DID": "4"
    },
    {
      "POSTID": 3861,
      "E": "Anapparambal North",
      "M": "ആനപ്രമ്പാല്‍ വടക്ക്",
      "PIN": "689577",
      "DID": "4"
    },
    {
      "POSTID": 3862,
      "E": "Nedumpuram ",
      "M": "നെടുമ്പ്രം",
      "PIN": "689110",
      "DID": "3"
    },
    {
      "POSTID": 3863,
      "E": "Changankary",
      "M": "ചങ്ങങ്കരി",
      "PIN": "689573",
      "DID": "4"
    },
    {
      "POSTID": 3864,
      "E": "Palackal Thakady",
      "M": "പാലയ്ക്കാതകിടി",
      "PIN": "689581",
      "DID": "3"
    },
    {
      "POSTID": 3865,
      "E": "Manthanam",
      "M": "മാന്താനം",
      "PIN": "689581",
      "DID": "3"
    },
    {
      "POSTID": 3866,
      "E": "Kunnamthanam",
      "M": "കുന്നന്താനം",
      "PIN": "689581",
      "DID": "3"
    },
    {
      "POSTID": 3867,
      "E": "Anjilithanam",
      "M": "ആഞ്ഞിലിത്താനം",
      "PIN": "689582",
      "DID": "3"
    },
    {
      "POSTID": 3868,
      "E": "Kaviyur",
      "M": "കവിയൂര്‍",
      "PIN": "689582",
      "DID": "3"
    },
    {
      "POSTID": 3869,
      "E": "Kottoor",
      "M": "കോട്ടൂര്‍",
      "PIN": "689582",
      "DID": "3"
    },
    {
      "POSTID": 3870,
      "E": "Kalloopara",
      "M": "കല്ലൂപ്പാറ",
      "PIN": "689583",
      "DID": "3"
    },
    {
      "POSTID": 3871,
      "E": "Mallapally East",
      "M": "മല്ലപ്പള്ളി ഈസ്റ്റ്",
      "PIN": "689584",
      "DID": "3"
    },
    {
      "POSTID": 3872,
      "E": "Mallapally West",
      "M": "മല്ലപ്പള്ളി വെസ്റ്റ്",
      "PIN": "689585",
      "DID": "3"
    },
    {
      "POSTID": 3873,
      "E": "Anickad Mallapally",
      "M": "ആനിക്കാട്",
      "PIN": "689585",
      "DID": "3"
    },
    {
      "POSTID": 3874,
      "E": "Ezhumattoor",
      "M": "എഴുമറ്റൂര്‍",
      "PIN": "689586",
      "DID": "3"
    },
    {
      "POSTID": 3875,
      "E": "Chalapally",
      "M": "ചാലാപ്പള്ളി",
      "PIN": "689586",
      "DID": "3"
    },
    {
      "POSTID": 3876,
      "E": "Padimon",
      "M": "പാടിമണ്‍",
      "PIN": "689587",
      "DID": "3"
    },
    {
      "POSTID": 3877,
      "E": "Keezhvaipur",
      "M": "കീഴ്വായ്പ്പൂര്‍",
      "PIN": "689587",
      "DID": "3"
    },
    {
      "POSTID": 3878,
      "E": "Perumparamavu",
      "M": "പെരുമ്പ്രമാവ്",
      "PIN": "689587",
      "DID": "3"
    },
    {
      "POSTID": 3879,
      "E": "Vaipur",
      "M": "വായ്പൂര്‍",
      "PIN": "689588",
      "DID": "3"
    },
    {
      "POSTID": 3880,
      "E": "Kulathur Tla",
      "M": "കുളത്തൂര്‍",
      "PIN": "689588",
      "DID": "3"
    },
    {
      "POSTID": 3881,
      "E": "Noorommavu",
      "M": "നൂറോമ്മാവ്",
      "PIN": "689589",
      "DID": "3"
    },
    {
      "POSTID": 3882,
      "E": "Punnaveli",
      "M": "പുന്നവേലി",
      "PIN": "689589",
      "DID": "3"
    },
    {
      "POSTID": 3883,
      "E": "Veliyanad",
      "M": "വെളിയനാട്",
      "PIN": "689590",
      "DID": "4"
    },
    {
      "POSTID": 3884,
      "E": "Veliyanad West",
      "M": "വെളിയനാട് വെസ്റ്റ്",
      "PIN": "689590",
      "DID": "4"
    },
    {
      "POSTID": 3885,
      "E": "Veliyanad North",
      "M": "വെളിയനാട് വടക്ക്",
      "PIN": "689590",
      "DID": "4"
    },
    {
      "POSTID": 3886,
      "E": "Mepral",
      "M": "മേപ്രാല്‍",
      "PIN": "689591",
      "DID": "3"
    },
    {
      "POSTID": 3887,
      "E": "Perumpatty",
      "M": "പെരുമ്പെട്ടി",
      "PIN": "689592",
      "DID": "3"
    },
    {
      "POSTID": 3888,
      "E": "Mundiappalli",
      "M": "മുണ്ടിയപ്പള്ളി",
      "PIN": "689593",
      "DID": "3"
    },
    {
      "POSTID": 3889,
      "E": "Mallapally North",
      "M": "മല്ലപ്പള്ളി നോര്‍ത്ത്",
      "PIN": "689594",
      "DID": "3"
    },
    {
      "POSTID": 3890,
      "E": "Chengaroor",
      "M": "ചെങ്ങരൂര്‍",
      "PIN": "689594",
      "DID": "3"
    },
    {
      "POSTID": 3891,
      "E": "Ramankary",
      "M": "രാമങ്കരി",
      "PIN": "689595",
      "DID": "4"
    },
    {
      "POSTID": 3892,
      "E": "Urukary",
      "M": "ഊരുക്കരി",
      "PIN": "689595",
      "DID": "3"
    },
    {
      "POSTID": 3893,
      "E": "Koduppunna",
      "M": "കൊടുപ്പുന്ന",
      "PIN": "689595",
      "DID": "4"
    },
    {
      "POSTID": 3894,
      "E": "Pariyaram",
      "M": "പരിയാരം",
      "PIN": "689596",
      "DID": "3"
    },
    {
      "POSTID": 3895,
      "E": "Thuruthicad",
      "M": "തുരുത്തിക്കാട്",
      "PIN": "689597",
      "DID": "3"
    },
    {
      "POSTID": 3896,
      "E": "Mithrakari",
      "M": "മിത്രക്കരി",
      "PIN": "689595",
      "DID": "4"
    },
    {
      "POSTID": 3897,
      "E": "Vezhapra",
      "M": "വേഴപ്ര",
      "PIN": "689595",
      "DID": "4"
    },
    {
      "POSTID": 3898,
      "E": "Puthusserri South",
      "M": "പുതുശ്ശേരി സൗത്ത്",
      "PIN": "689602",
      "DID": "3"
    },
    {
      "POSTID": 3899,
      "E": "Kadamankulam",
      "M": "കടമാന്‍കുളം",
      "PIN": "689603",
      "DID": "3"
    },
    {
      "POSTID": 3900,
      "E": "Ayroor South",
      "M": "അയിരൂര്‍ സൗത്ത്",
      "PIN": "689611",
      "DID": "3"
    },
    {
      "POSTID": 3901,
      "E": "Ayroor North",
      "M": "അയിരൂര്‍ നോര്‍ത്ത്",
      "PIN": "689612",
      "DID": "3"
    },
    {
      "POSTID": 3902,
      "E": "Velliyara",
      "M": "വെള്ളിയറ",
      "PIN": "689612",
      "DID": "3"
    },
    {
      "POSTID": 3903,
      "E": "Vellayil",
      "M": "വെള്ളയില്‍",
      "PIN": "689613",
      "DID": "3"
    },
    {
      "POSTID": 3904,
      "E": "Theodical",
      "M": "തിയാടിക്കല്‍",
      "PIN": "689613",
      "DID": "3"
    },
    {
      "POSTID": 3905,
      "E": "Edappavur",
      "M": "ഇടപ്പാവൂര്‍",
      "PIN": "689614",
      "DID": "3"
    },
    {
      "POSTID": 3906,
      "E": "Kaithakody",
      "M": "കൈതക്കോടി",
      "PIN": "689614",
      "DID": "3"
    },
    {
      "POSTID": 3907,
      "E": "Kottathur",
      "M": "കോറ്റാത്തൂര്‍",
      "PIN": "689614",
      "DID": "3"
    },
    {
      "POSTID": 3908,
      "E": "Thekkumkal",
      "M": "തേക്കുംകല്‍",
      "PIN": "689614",
      "DID": "3"
    },
    {
      "POSTID": 3909,
      "E": "Kariamplavu",
      "M": "കരിയംപ്ലാവ്",
      "PIN": "689615",
      "DID": "3"
    },
    {
      "POSTID": 3910,
      "E": "Kottanad",
      "M": "കൊറ്റനാട്",
      "PIN": "689615",
      "DID": "3"
    },
    {
      "POSTID": 3911,
      "E": "Kanjettukara",
      "M": "കാഞ്ഞീറ്റുകര",
      "PIN": "689616",
      "DID": "3"
    },
    {
      "POSTID": 3912,
      "E": "Kizhakkumbhagom",
      "M": "കിഴക്കുംഭാഗം",
      "PIN": "689620",
      "DID": "3"
    },
    {
      "POSTID": 3913,
      "E": "Niranam",
      "M": "നിരണം",
      "PIN": "689621",
      "DID": "3"
    },
    {
      "POSTID": 3914,
      "E": "Vadakkumbhagom",
      "M": "നിരണം വടക്കുംഭാഗം",
      "PIN": "689621",
      "DID": "3"
    },
    {
      "POSTID": 3915,
      "E": "Pavukkara",
      "M": "പാവുക്കര",
      "PIN": "689622",
      "DID": "4"
    },
    {
      "POSTID": 3916,
      "E": "Mannar-Alp",
      "M": "മാന്നാര്‍",
      "PIN": "689622",
      "DID": "4"
    },
    {
      "POSTID": 3917,
      "E": "Eramathoor",
      "M": "ഇരമത്തൂര്‍",
      "PIN": "689622",
      "DID": "4"
    },
    {
      "POSTID": 3918,
      "E": "Kumaramperoor-Thekkekara",
      "M": "കുമരംപേരൂര്‍-തെക്കേക്കര",
      "PIN": "689622",
      "DID": "3"
    },
    {
      "POSTID": 3919,
      "E": "Kuttamperoor",
      "M": "കുട്ടംപേരൂര്‍",
      "PIN": "689623",
      "DID": "4"
    },
    {
      "POSTID": 3920,
      "E": "Ennakad",
      "M": "എണ്ണയ്ക്കാട്",
      "PIN": "689624",
      "DID": "4"
    },
    {
      "POSTID": 3921,
      "E": "Peringalipuram",
      "M": "പെരിങ്ങിലിപുറം",
      "PIN": "689624",
      "DID": "4"
    },
    {
      "POSTID": 3922,
      "E": "Muttathukonam - Elavumthitta",
      "M": "മുട്ടത്തുകോണം - ഇലവുംതിട്ട",
      "PIN": "689625",
      "DID": "3"
    },
    {
      "POSTID": 3923,
      "E": "Elavumthitta",
      "M": "ഇലവുംതിട്ട",
      "PIN": "689625",
      "DID": "3"
    },
    {
      "POSTID": 3924,
      "E": "Thumpamon North",
      "M": "തുമ്പമണ്‍ നോര്‍ത്ത്",
      "PIN": "689625",
      "DID": "3"
    },
    {
      "POSTID": 3925,
      "E": "Parumala",
      "M": "പരുമല",
      "PIN": "689626",
      "DID": "3"
    },
    {
      "POSTID": 3926,
      "E": "Melpadom",
      "M": "മേല്‍പ്പാടം",
      "PIN": "689627",
      "DID": "4"
    },
    {
      "POSTID": 3927,
      "E": "Niranam West",
      "M": "നിരണം വെസ്റ്റ്",
      "PIN": "689629",
      "DID": "3"
    },
    {
      "POSTID": 3928,
      "E": "Kadapra Mannar",
      "M": "കടപ്ര മാന്നാര്‍",
      "PIN": "689630",
      "DID": "3"
    },
    {
      "POSTID": 3929,
      "E": "Thumpamon Thazham",
      "M": "തുമ്പമണ്‍ താഴം",
      "PIN": "689625",
      "DID": "3"
    },
    {
      "POSTID": 3930,
      "E": "Melukara",
      "M": "മേലുകര",
      "PIN": "689641",
      "DID": "3"
    },
    {
      "POSTID": 3931,
      "E": "Kozhecherry",
      "M": "",
      "PIN": "689641",
      "DID": "3"
    },
    {
      "POSTID": 3932,
      "E": "Kozhencherry",
      "M": "കോഴഞ്ചേരി ",
      "PIN": "689641",
      "DID": "3"
    },
    {
      "POSTID": 3933,
      "E": "Kozhencherry East",
      "M": "കോഴഞ്ചേരി ഈസ്റ്റ്",
      "PIN": "689641",
      "DID": "3"
    },
    {
      "POSTID": 3934,
      "E": "Naranganam",
      "M": "നാരങ്ങാനം ",
      "PIN": "689642",
      "DID": "3"
    },
    {
      "POSTID": 3935,
      "E": "Naranganam North",
      "M": "നാരങ്ങാനം നോര്‍ത്ത്",
      "PIN": "689642",
      "DID": "3"
    },
    {
      "POSTID": 3936,
      "E": "Naranganam West ",
      "M": "നാരങ്ങാനം വെസ്റ്റ്",
      "PIN": "689642",
      "DID": "3"
    },
    {
      "POSTID": 3937,
      "E": "Prakkanam",
      "M": "പ്രക്കാനം",
      "PIN": "689643",
      "DID": "3"
    },
    {
      "POSTID": 3938,
      "E": "Elanthoor",
      "M": "ഇലന്തൂര്‍",
      "PIN": "689643",
      "DID": "3"
    },
    {
      "POSTID": 3939,
      "E": "Elanthur Pariyaram",
      "M": "ഇലന്തൂര്‍ പരിയാരം",
      "PIN": "689643",
      "DID": "3"
    },
    {
      "POSTID": 3940,
      "E": "Elanthur East",
      "M": "ഇലന്തൂര്‍ ഈസ്റ്റ്",
      "PIN": "689643",
      "DID": "3"
    },
    {
      "POSTID": 3941,
      "E": "Edapariyaram",
      "M": "ഇടപ്പരിയാരം",
      "PIN": "689643",
      "DID": "3"
    },
    {
      "POSTID": 3942,
      "E": "Karamvely",
      "M": "കാരംവേലി",
      "PIN": "689643",
      "DID": "3"
    },
    {
      "POSTID": 3943,
      "E": "Nellikala",
      "M": "നെല്ലിക്കാല",
      "PIN": "689643",
      "DID": "3"
    },
    {
      "POSTID": 3944,
      "E": "Kuzhikala",
      "M": "കുഴിക്കാല",
      "PIN": "689644",
      "DID": "3"
    },
    {
      "POSTID": 3945,
      "E": "Pathanamthitta",
      "M": "പത്തനംതിട്ട",
      "PIN": "689645",
      "DID": "3"
    },
    {
      "POSTID": 3946,
      "E": "Makkankunnu Pathanamthitta",
      "M": "മക്കാന്‍കുന്ന്",
      "PIN": "689645",
      "DID": "3"
    },
    {
      "POSTID": 3947,
      "E": "Angamoozhy",
      "M": "ആങ്ങമൂഴി",
      "PIN": "689645",
      "DID": "3"
    },
    {
      "POSTID": 3948,
      "E": "Uthimoodu ",
      "M": "ഉതിമൂട്",
      "PIN": "689672",
      "DID": "3"
    },
    {
      "POSTID": 3949,
      "E": "Mallassery",
      "M": "മല്ലശ്ശേരി",
      "PIN": "689646",
      "DID": "3"
    },
    {
      "POSTID": 3950,
      "E": "Vazhamuttom East",
      "M": "വാഴമുട്ടം ഈസ്റ്റ്",
      "PIN": "689646",
      "DID": "3"
    },
    {
      "POSTID": 3951,
      "E": "Thengumkavu",
      "M": "തെങ്ങുംകാവ് ",
      "PIN": "689646",
      "DID": "3"
    },
    {
      "POSTID": 3952,
      "E": "Oonnukal",
      "M": "ഊന്നുകല്‍",
      "PIN": "689647",
      "DID": "3"
    },
    {
      "POSTID": 3953,
      "E": "Omalloor ",
      "M": "ഓമല്ലൂര്‍",
      "PIN": "689647",
      "DID": "3"
    },
    {
      "POSTID": 3954,
      "E": "Vazhamuttom",
      "M": "വാഴമുട്ടം",
      "PIN": "689647",
      "DID": "3"
    },
    {
      "POSTID": 3955,
      "E": "Angadical North",
      "M": "അങ്ങാടിക്കല്‍ വടക്ക്",
      "PIN": "689648",
      "DID": "3"
    },
    {
      "POSTID": 3956,
      "E": "Chandanapally",
      "M": "ചന്ദനപ്പള്ളി",
      "PIN": "689648",
      "DID": "3"
    },
    {
      "POSTID": 3957,
      "E": "Kaipattur",
      "M": "കൈപ്പട്ടൂര്‍",
      "PIN": "689648",
      "DID": "3"
    },
    {
      "POSTID": 3958,
      "E": "Anthiyalankavu",
      "M": "അന്ത്യാളന്‍കാവ്",
      "PIN": "689649",
      "DID": "3"
    },
    {
      "POSTID": 3959,
      "E": "Mundukottackal",
      "M": "മുണ്ടുകോട്ടയ്ക്കല്‍",
      "PIN": "689649",
      "DID": "3"
    },
    {
      "POSTID": 3960,
      "E": "Kadammanitta",
      "M": "കടമ്മനിട്ട",
      "PIN": "689649",
      "DID": "3"
    },
    {
      "POSTID": 3961,
      "E": "Kattoor Kozhencherry",
      "M": "കാട്ടൂര്‍ കോഴഞ്ചേരി",
      "PIN": "689650",
      "DID": "3"
    },
    {
      "POSTID": 3962,
      "E": "Cherukole Kozhencherry",
      "M": "ചെറുകോല്‍ കോഴഞ്ചേരി",
      "PIN": "689650",
      "DID": "3"
    },
    {
      "POSTID": 3963,
      "E": "Punnakkad",
      "M": "പുന്നയ്ക്കാട്",
      "PIN": "689652",
      "DID": "3"
    },
    {
      "POSTID": 3964,
      "E": "Vadakkupuram",
      "M": "വടക്കുപുറം",
      "PIN": "689653",
      "DID": "3"
    },
    {
      "POSTID": 3965,
      "E": "Kizhakkupuram",
      "M": "കിഴക്കുപുറം",
      "PIN": "689653",
      "DID": "3"
    },
    {
      "POSTID": 3966,
      "E": "Kumbazhamuri",
      "M": "കുമ്പഴമുറി",
      "PIN": "689653",
      "DID": "3"
    },
    {
      "POSTID": 3967,
      "E": "Vettoor Kumbazha",
      "M": "വെട്ടൂര്‍ കുമ്പഴ",
      "PIN": "689653",
      "DID": "3"
    },
    {
      "POSTID": 3968,
      "E": "Mankara R S",
      "M": "കോഴഞ്ചേരി തെക്കേമല",
      "PIN": "678613",
      "DID": "3"
    },
    {
      "POSTID": 3969,
      "E": "Elappupara",
      "M": "ഇളപ്പുപാറ",
      "PIN": "689656",
      "DID": "3"
    },
    {
      "POSTID": 3970,
      "E": "Vallicode Kottayam",
      "M": "വി കോട്ടയം",
      "PIN": "689656",
      "DID": "3"
    },
    {
      "POSTID": 3971,
      "E": "Njakkunilam",
      "M": "ഞക്കുനിലം",
      "PIN": "689656",
      "DID": "3"
    },
    {
      "POSTID": 3972,
      "E": "Mathur ",
      "M": "മാത്തൂര്‍",
      "PIN": "689647",
      "DID": "3"
    },
    {
      "POSTID": 3973,
      "E": "Vallicode ",
      "M": "വള്ളിക്കോട്",
      "PIN": "689648",
      "DID": "3"
    },
    {
      "POSTID": 3974,
      "E": "Vayalathala",
      "M": "വയലത്തല",
      "PIN": "689660",
      "DID": "3"
    },
    {
      "POSTID": 3975,
      "E": "Kumpalampoika",
      "M": "കുമ്പളാംപൊയ്ക",
      "PIN": "689661",
      "DID": "3"
    },
    {
      "POSTID": 3976,
      "E": "Pamba Triveni",
      "M": "പമ്പ ത്രിവേണി",
      "PIN": "689662",
      "DID": "3"
    },
    {
      "POSTID": 3977,
      "E": "Moozhiyar",
      "M": "മൂഴിയാര്‍",
      "PIN": "689662",
      "DID": "3"
    },
    {
      "POSTID": 3978,
      "E": "Maniyar",
      "M": "മണിയാര്‍",
      "PIN": "689662",
      "DID": "3"
    },
    {
      "POSTID": 3979,
      "E": "Lahai",
      "M": "ളാഹ",
      "PIN": "689662",
      "DID": "3"
    },
    {
      "POSTID": 3980,
      "E": "Vadasserikara",
      "M": "വടശ്ശേരിക്കര",
      "PIN": "689662",
      "DID": "3"
    },
    {
      "POSTID": 3981,
      "E": "Pezhumpara",
      "M": "പേഴുംപാറ",
      "PIN": "689662",
      "DID": "3"
    },
    {
      "POSTID": 3982,
      "E": "Neeliplavu",
      "M": "നീലിപിലാവ്",
      "PIN": "689663",
      "DID": "3"
    },
    {
      "POSTID": 3983,
      "E": "Pampini",
      "M": "പാമ്പിനി",
      "PIN": "689663",
      "DID": "3"
    },
    {
      "POSTID": 3984,
      "E": "Vayyattupuzha",
      "M": "വയ്യാറ്റുപുഴ",
      "PIN": "689663",
      "DID": "3"
    },
    {
      "POSTID": 3985,
      "E": "Karikayam",
      "M": "കാരികയം",
      "PIN": "689663",
      "DID": "3"
    },
    {
      "POSTID": 3986,
      "E": "Chittar",
      "M": "ചിറ്റാര്‍",
      "PIN": "689663",
      "DID": "3"
    },
    {
      "POSTID": 3987,
      "E": "Malayalapuzha Eram",
      "M": "മലയാലപ്പുഴ ഏറം",
      "PIN": "689664",
      "DID": "3"
    },
    {
      "POSTID": 3988,
      "E": "Chengara",
      "M": "ചെങ്ങറ",
      "PIN": "689664",
      "DID": "3"
    },
    {
      "POSTID": 3989,
      "E": "Thalachira Eram",
      "M": "തലച്ചിറ ഏറം",
      "PIN": "689664",
      "DID": "3"
    },
    {
      "POSTID": 3990,
      "E": "Madamon",
      "M": "മാടമണ്‍",
      "PIN": "689665",
      "DID": "3"
    },
    {
      "POSTID": 3991,
      "E": "Malayalapuzha Thazham",
      "M": "മലയാലപ്പുഴ താഴം",
      "PIN": "689666",
      "DID": "3"
    },
    {
      "POSTID": 3992,
      "E": "Seethathodu",
      "M": "സീതത്തോട്",
      "PIN": "689667",
      "DID": "3"
    },
    {
      "POSTID": 3993,
      "E": "Gurunathanmannu",
      "M": "ഗുരുനാഥന്‍മണ്ണ്",
      "PIN": "689667",
      "DID": "3"
    },
    {
      "POSTID": 3994,
      "E": "Kochukoickal",
      "M": "കൊച്ചുകോയിക്കല്‍",
      "PIN": "689667",
      "DID": "3"
    },
    {
      "POSTID": 3995,
      "E": "Kottamonpara",
      "M": "കോട്ടമണ്‍പാറ",
      "PIN": "689667",
      "DID": "3"
    },
    {
      "POSTID": 3996,
      "E": "Churulicode",
      "M": "ചുരുളിക്കോട്",
      "PIN": "689668",
      "DID": "3"
    },
    {
      "POSTID": 3997,
      "E": "Thonniamala ",
      "M": "തോന്ന്യാമല",
      "PIN": "689668",
      "DID": "3"
    },
    {
      "POSTID": 3998,
      "E": "Cheenkalthadam",
      "M": "ചീങ്കല്‍ത്തടം",
      "PIN": "689671",
      "DID": "3"
    },
    {
      "POSTID": 3999,
      "E": "Mylapra",
      "M": "മൈലപ്രാ",
      "PIN": "689671",
      "DID": "3"
    },
    {
      "POSTID": 4000,
      "E": "Puthusserimala",
      "M": "പുതുശ്ശേരിമല",
      "PIN": "689672",
      "DID": "3"
    },
    {
      "POSTID": 4001,
      "E": "Mandiram Jn.Ranny",
      "M": "മന്ദിരം",
      "PIN": "689672",
      "DID": "3"
    },
    {
      "POSTID": 4002,
      "E": "Edakulam",
      "M": "ഇടക്കുളം",
      "PIN": "689672",
      "DID": "3"
    },
    {
      "POSTID": 4003,
      "E": "Ranny",
      "M": "റാന്നി ",
      "PIN": "689672",
      "DID": "3"
    },
    {
      "POSTID": 4004,
      "E": "Keekozhur",
      "M": "കീക്കൊഴൂര്‍",
      "PIN": "689672",
      "DID": "3"
    },
    {
      "POSTID": 4005,
      "E": "Ranny Pazhavangadi",
      "M": "റാന്നി പഴവങ്ങാടി",
      "PIN": "689673",
      "DID": "3"
    },
    {
      "POSTID": 4006,
      "E": "Iyethala",
      "M": "ഐത്തല",
      "PIN": "689673",
      "DID": "3"
    },
    {
      "POSTID": 4007,
      "E": "Cherukulanji",
      "M": "ചെറുകുളഞ്ഞി",
      "PIN": "689673",
      "DID": "3"
    },
    {
      "POSTID": 4008,
      "E": "Pulloopram ",
      "M": "പുല്ലൂപ്രം",
      "PIN": "689674",
      "DID": "3"
    },
    {
      "POSTID": 4009,
      "E": "Angadi",
      "M": "അങ്ങാടി",
      "PIN": "689674",
      "DID": "3"
    },
    {
      "POSTID": 4010,
      "E": "Oonakkavu",
      "M": "ഉന്നക്കാവ്",
      "PIN": "689674",
      "DID": "3"
    },
    {
      "POSTID": 4011,
      "E": "Ettichuvadu",
      "M": "ഈട്ടിച്ചുവട്",
      "PIN": "689675",
      "DID": "3"
    },
    {
      "POSTID": 4012,
      "E": "Valiakavu",
      "M": "വലിയകാവ്",
      "PIN": "689675",
      "DID": "3"
    },
    {
      "POSTID": 4013,
      "E": "Makkapuzha",
      "M": "മക്കപ്പുഴ",
      "PIN": "689676",
      "DID": "3"
    },
    {
      "POSTID": 4014,
      "E": "Thombikandam",
      "M": "തോമ്പിക്കണ്ടം",
      "PIN": "689676",
      "DID": "3"
    },
    {
      "POSTID": 4015,
      "E": "Chellakad",
      "M": "ചെല്ലയ്ക്കാട്",
      "PIN": "689677",
      "DID": "3"
    },
    {
      "POSTID": 4016,
      "E": "Chethakkal",
      "M": "ചേത്തയ്ക്കല്‍",
      "PIN": "689677",
      "DID": "3"
    },
    {
      "POSTID": 4017,
      "E": "Mannarakulanji",
      "M": "മണ്ണാറക്കുളഞ്ഞി",
      "PIN": "689678",
      "DID": "3"
    },
    {
      "POSTID": 4018,
      "E": "Mylapra Town",
      "M": "മൈലപ്രാ ടൗണ്‍",
      "PIN": "689678",
      "DID": "3"
    },
    {
      "POSTID": 4019,
      "E": "Mekkozhoor",
      "M": "മേക്കൊഴൂര്‍",
      "PIN": "689678",
      "DID": "3"
    },
    {
      "POSTID": 4020,
      "E": "Nellikamon",
      "M": "നെല്ലിക്കാമണ്‍",
      "PIN": "689680",
      "DID": "3"
    },
    {
      "POSTID": 4021,
      "E": "Ranny Edamon",
      "M": "ഇടമണ്‍",
      "PIN": "689681",
      "DID": "3"
    },
    {
      "POSTID": 4022,
      "E": "Karikulam",
      "M": "കരികുളം",
      "PIN": "689682",
      "DID": "3"
    },
    {
      "POSTID": 4023,
      "E": "Iravon",
      "M": "ഐരവണ്‍",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4024,
      "E": "Aruvappulam",
      "M": "അരുവാപ്പുലം",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4025,
      "E": "Oottupara",
      "M": "ഊട്ടുപാറ",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4026,
      "E": "Kummannoor",
      "M": "കുമ്മണ്ണൂര്‍",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4027,
      "E": "Kallely",
      "M": "കല്ലേലി",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4028,
      "E": "Kallelythottam",
      "M": "കല്ലേലിതോട്ടം",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4029,
      "E": "Nellikkapara",
      "M": "നെല്ലിക്കാപ്പാറ",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4030,
      "E": "Kokkathode",
      "M": "കൊക്കാത്തോട്",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4031,
      "E": "Konny",
      "M": "കോന്നി",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4032,
      "E": "Payyanamon",
      "M": "പയ്യനാമണ്‍",
      "PIN": "689692",
      "DID": "3"
    },
    {
      "POSTID": 4033,
      "E": "Attachakkal",
      "M": "അട്ടച്ചാക്കല്‍",
      "PIN": "689692",
      "DID": "3"
    },
    {
      "POSTID": 4034,
      "E": "Athumpumkulam",
      "M": "അതുമ്പുംകുളം",
      "PIN": "689692",
      "DID": "3"
    },
    {
      "POSTID": 4035,
      "E": "Elimullumplackal",
      "M": "എലിമുള്ളുംപ്ലാക്കല്‍",
      "PIN": "689692",
      "DID": "3"
    },
    {
      "POSTID": 4036,
      "E": "Perinjottakkal ",
      "M": "പെരിഞൊട്ടയ്ക്കല്‍",
      "PIN": "689692",
      "DID": "3"
    },
    {
      "POSTID": 4037,
      "E": "Nirathupara",
      "M": "നിരത്തുപാറ",
      "PIN": "689693",
      "DID": "3"
    },
    {
      "POSTID": 4038,
      "E": "Murinjakal",
      "M": "മുറിഞ്ഞകല്‍",
      "PIN": "689693",
      "DID": "3"
    },
    {
      "POSTID": 4039,
      "E": "Athirumkal",
      "M": "അതിരുങ്കല്‍",
      "PIN": "689693",
      "DID": "3"
    },
    {
      "POSTID": 4040,
      "E": "Kulathumon",
      "M": "കുളത്തുമണ്‍",
      "PIN": "689693",
      "DID": "3"
    },
    {
      "POSTID": 4041,
      "E": "Koodal",
      "M": "കൂടല്‍",
      "PIN": "689693",
      "DID": "3"
    },
    {
      "POSTID": 4042,
      "E": "Nedumoncavu",
      "M": "നെടുമണ്‍കാവ്",
      "PIN": "689693",
      "DID": "3"
    },
    {
      "POSTID": 4043,
      "E": "Padam",
      "M": "പാടം",
      "PIN": "689694",
      "DID": "3"
    },
    {
      "POSTID": 4044,
      "E": "Mancode",
      "M": "മാങ്കോട്",
      "PIN": "689694",
      "DID": "3"
    },
    {
      "POSTID": 4045,
      "E": "Kalanjoor",
      "M": "കലഞ്ഞൂര്‍",
      "PIN": "689694",
      "DID": "3"
    },
    {
      "POSTID": 4046,
      "E": "Pathanapuram",
      "M": "പത്തനാപുരം",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4047,
      "E": "Pathirickal",
      "M": "പാതിരിയ്ക്കല്‍",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4048,
      "E": "Poomkulanji",
      "M": "പൂങ്കുളഞ്ഞി",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4049,
      "E": "Maloor",
      "M": "മാലൂര്‍ ",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4050,
      "E": "Maloor College",
      "M": "മാലൂര്‍ കോളേജ്",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4051,
      "E": "Manchallur Pathanapuram",
      "M": "മഞ്ചള്ളൂര്‍-പത്തനാപുരം",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4052,
      "E": "Kurumbakara",
      "M": "കുറുമ്പകര",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4053,
      "E": "Kundayam",
      "M": "കുണ്ടയം",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4054,
      "E": "Piravanthur",
      "M": "പിറവന്തൂര്‍",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4055,
      "E": "Achencoil",
      "M": "അച്ചന്‍കോവില്‍",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4056,
      "E": "Elikkattoor",
      "M": "എലിക്കാട്ടൂര്‍",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4057,
      "E": "Kamukumcherry",
      "M": "കമുകുംചേരി",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4058,
      "E": "Karavoor",
      "M": "കറവൂര്‍",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4059,
      "E": "Kumaramkudy",
      "M": "കുമരന്‍കുടി",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4060,
      "E": "Vettithitta",
      "M": "വെട്ടിത്തിട്ട",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4061,
      "E": "Chembanaruvi",
      "M": "ചെമ്പനരുവി",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4062,
      "E": "Muthupezhumkal",
      "M": "മുതുപേഴുങ്കല്‍ ",
      "PIN": "689698",
      "DID": "3"
    },
    {
      "POSTID": 4063,
      "E": "Vakayar",
      "M": "വകയാര്‍",
      "PIN": "689698",
      "DID": "3"
    },
    {
      "POSTID": 4064,
      "E": "Manneera",
      "M": "മണ്ണീറ",
      "PIN": "689699",
      "DID": "3"
    },
    {
      "POSTID": 4065,
      "E": "Thekkuthode",
      "M": "തേക്കുതോട്",
      "PIN": "689699",
      "DID": "3"
    },
    {
      "POSTID": 4066,
      "E": "Thannithode",
      "M": "തണ്ണിത്തോട്",
      "PIN": "689699",
      "DID": "3"
    },
    {
      "POSTID": 4067,
      "E": "Elakolloor ",
      "M": "ഇളകൊള്ളൂര്‍",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4068,
      "E": "Vellappara ",
      "M": "വെള്ളപ്പാറ",
      "PIN": "689691",
      "DID": "3"
    },
    {
      "POSTID": 4069,
      "E": "Punnala",
      "M": "പുന്നല",
      "PIN": "689696",
      "DID": "2"
    },
    {
      "POSTID": 4070,
      "E": "Naranamoozhi",
      "M": "നാറാണംമൂഴി",
      "PIN": "689711",
      "DID": "3"
    },
    {
      "POSTID": 4071,
      "E": "Mampara",
      "M": "മാമ്പാറ",
      "PIN": "689711",
      "DID": "3"
    },
    {
      "POSTID": 4072,
      "E": "Adichipuzha",
      "M": "അടിച്ചിപ്പുഴ",
      "PIN": "689711",
      "DID": "3"
    },
    {
      "POSTID": 4073,
      "E": "Ranny Perinad",
      "M": "റാന്നി പെരുനാട്",
      "PIN": "689711",
      "DID": "3"
    },
    {
      "POSTID": 4074,
      "E": "Kakkudumon",
      "M": "കക്കുടുമണ്‍",
      "PIN": "689711",
      "DID": "3"
    },
    {
      "POSTID": 4075,
      "E": "Kudamurutty",
      "M": "കുടമുരുട്ടി",
      "PIN": "689711",
      "DID": "3"
    },
    {
      "POSTID": 4076,
      "E": "Koonamkara",
      "M": "കൂനംകര",
      "PIN": "689711",
      "DID": "3"
    },
    {
      "POSTID": 4077,
      "E": "Sabarimala (Seasonal)",
      "M": "ശബരിമല (സീസണല്‍)",
      "PIN": "689713",
      "DID": "3"
    },
    {
      "POSTID": 4078,
      "E": "Pandankary ",
      "M": "പാണ്ടങ്കരി",
      "PIN": "689573",
      "DID": "4"
    },
    {
      "POSTID": 4079,
      "E": "Thayankary",
      "M": "തായങ്കരി",
      "PIN": "689573",
      "DID": "4"
    },
    {
      "POSTID": 4080,
      "E": "Thalavady South",
      "M": "തലവടി സൗത്ത്",
      "PIN": "689723",
      "DID": "4"
    },
    {
      "POSTID": 4081,
      "E": "Punnamood",
      "M": "പുന്നമൂട്",
      "PIN": "690101",
      "DID": "4"
    },
    {
      "POSTID": 4082,
      "E": "Puthiakavu",
      "M": "",
      "PIN": "690101",
      "DID": "4"
    },
    {
      "POSTID": 4083,
      "E": "Mavelikara",
      "M": "മാവേലിക്കര",
      "PIN": "690101",
      "DID": "4"
    },
    {
      "POSTID": 4084,
      "E": "Mavelikara Cutcherry",
      "M": "",
      "PIN": "690101",
      "DID": "4"
    },
    {
      "POSTID": 4085,
      "E": "Mavelikara Court",
      "M": "",
      "PIN": "690101",
      "DID": "4"
    },
    {
      "POSTID": 4086,
      "E": "Vettiyur",
      "M": "",
      "PIN": "690101",
      "DID": "4"
    },
    {
      "POSTID": 4087,
      "E": "Arunoottimangalam",
      "M": "അറുനൂറ്റിമംഗലം",
      "PIN": "690110",
      "DID": "4"
    },
    {
      "POSTID": 4088,
      "E": "Arnoorttimangalam",
      "M": "",
      "PIN": "690102",
      "DID": "4"
    },
    {
      "POSTID": 4089,
      "E": "Thazhakara",
      "M": "തഴക്കര",
      "PIN": "690102",
      "DID": "4"
    },
    {
      "POSTID": 4090,
      "E": "Kandiyoor",
      "M": "",
      "PIN": "690103",
      "DID": "4"
    },
    {
      "POSTID": 4091,
      "E": "Pela",
      "M": "പേള",
      "PIN": "690103",
      "DID": "4"
    },
    {
      "POSTID": 4092,
      "E": "Thattarambalam",
      "M": "തട്ടാരമ്പലം",
      "PIN": "690103",
      "DID": "4"
    },
    {
      "POSTID": 4093,
      "E": "Ezhakadavu",
      "M": "ഈഴക്കടവ്",
      "PIN": "690104",
      "DID": "4"
    },
    {
      "POSTID": 4094,
      "E": "Valiyakulangara",
      "M": "വലിയകുളങ്ങര ",
      "PIN": "690104",
      "DID": "4"
    },
    {
      "POSTID": 4095,
      "E": "Cherukole",
      "M": "ചെറുകോല്‍",
      "PIN": "690104",
      "DID": "4"
    },
    {
      "POSTID": 4096,
      "E": "Chennithala",
      "M": "ചെന്നിത്തല",
      "PIN": "690105",
      "DID": "4"
    },
    {
      "POSTID": 4097,
      "E": "Chennithala South",
      "M": "ചെന്നിത്തല തെക്ക്",
      "PIN": "690105",
      "DID": "4"
    },
    {
      "POSTID": 4098,
      "E": "Thripperumthura",
      "M": "തൃപ്പെരുന്തുറ",
      "PIN": "690105",
      "DID": "4"
    },
    {
      "POSTID": 4099,
      "E": "Erezha South",
      "M": "ഈരേഴ തെക്ക്",
      "PIN": "690106",
      "DID": "4"
    },
    {
      "POSTID": 4100,
      "E": "Erezha North",
      "M": "ഈരേഴ വടക്ക്",
      "PIN": "690106",
      "DID": "4"
    },
    {
      "POSTID": 4101,
      "E": "Kannamangalam-Mavelikara",
      "M": "കണ്ണമംഗലം",
      "PIN": "690106",
      "DID": "4"
    },
    {
      "POSTID": 4102,
      "E": "Chettikulangara",
      "M": "ചെട്ടികുളങ്ങര",
      "PIN": "690106",
      "DID": "4"
    },
    {
      "POSTID": 4103,
      "E": "Pallarimangalam",
      "M": "പല്ലാരിമംഗലം",
      "PIN": "690107",
      "DID": "4"
    },
    {
      "POSTID": 4104,
      "E": "Thekkekara",
      "M": "തെക്കേക്കര",
      "PIN": "690107",
      "DID": "4"
    },
    {
      "POSTID": 4105,
      "E": "Eravankara",
      "M": "ഇറവങ്കര",
      "PIN": "690108",
      "DID": "4"
    },
    {
      "POSTID": 4106,
      "E": "Kunnam",
      "M": "കുന്നം",
      "PIN": "690108",
      "DID": "4"
    },
    {
      "POSTID": 4107,
      "E": "Karipuzha",
      "M": "കരിപ്പുഴ",
      "PIN": "690103",
      "DID": "4"
    },
    {
      "POSTID": 4108,
      "E": "Kallumala",
      "M": "കല്ലുമല",
      "PIN": "690110",
      "DID": "4"
    },
    {
      "POSTID": 4109,
      "E": "Puthenchantha-Mavelikara",
      "M": "പുത്തന്‍ ചന്ത",
      "PIN": "690501",
      "DID": "4"
    },
    {
      "POSTID": 4110,
      "E": "Vallikunnam",
      "M": "വള്ളികുന്നം",
      "PIN": "690501",
      "DID": "4"
    },
    {
      "POSTID": 4111,
      "E": "Kaduvinal",
      "M": "കടുവിനാല്‍",
      "PIN": "690501",
      "DID": "4"
    },
    {
      "POSTID": 4112,
      "E": "Kayamkulam Bazar",
      "M": "",
      "PIN": "690502",
      "DID": "4"
    },
    {
      "POSTID": 4113,
      "E": "Kayamkulam",
      "M": "കായംകുളം",
      "PIN": "690502",
      "DID": "4"
    },
    {
      "POSTID": 4114,
      "E": "Pallickal",
      "M": "പള്ളിയ്ക്കല്‍",
      "PIN": "690503",
      "DID": "3"
    },
    {
      "POSTID": 4115,
      "E": "Pallickal Naduvilemuri",
      "M": "പള്ളിയ്ക്കല്‍ നടുവിലേമുറി",
      "PIN": "690503",
      "DID": "4"
    },
    {
      "POSTID": 4116,
      "E": "Illippakulam",
      "M": "ഇലിപ്പക്കുളം",
      "PIN": "690503",
      "DID": "4"
    },
    {
      "POSTID": 4117,
      "E": "Kattanam",
      "M": "കറ്റാനം",
      "PIN": "690503",
      "DID": "4"
    },
    {
      "POSTID": 4118,
      "E": "Vetticode",
      "M": "വെട്ടിക്കോട്",
      "PIN": "690503",
      "DID": "4"
    },
    {
      "POSTID": 4119,
      "E": "Nooranad",
      "M": "നൂറനാട്",
      "PIN": "690504",
      "DID": "3"
    },
    {
      "POSTID": 4120,
      "E": "Pallickal Nooranad",
      "M": "പള്ളിയ്ക്കല്‍-നൂറനാട്",
      "PIN": "690504",
      "DID": "3"
    },
    {
      "POSTID": 4121,
      "E": "Panayil",
      "M": "പണയില്‍",
      "PIN": "690504",
      "DID": "4"
    },
    {
      "POSTID": 4122,
      "E": "Athikattukulangara",
      "M": "ആദിക്കാട്ടുകുളങ്ങര",
      "PIN": "690504",
      "DID": "4"
    },
    {
      "POSTID": 4123,
      "E": "Kannanakuzhi",
      "M": "കണ്ണനാകുഴി",
      "PIN": "690505",
      "DID": "4"
    },
    {
      "POSTID": 4124,
      "E": "Charummoodu",
      "M": "ചാരുംമൂട്",
      "PIN": "690505",
      "DID": "4"
    },
    {
      "POSTID": 4125,
      "E": "Vadaraplavu",
      "M": "വേടരപ്ലാവ്",
      "PIN": "690505",
      "DID": "4"
    },
    {
      "POSTID": 4126,
      "E": "Komallur",
      "M": "കോമല്ലൂര്‍",
      "PIN": "690505",
      "DID": "4"
    },
    {
      "POSTID": 4127,
      "E": "Muthukulam South",
      "M": "മുതുകുളം  സൗത്ത്",
      "PIN": "690506",
      "DID": "4"
    },
    {
      "POSTID": 4128,
      "E": "Choolatheruvu",
      "M": "ചൂളത്തെരുവ്",
      "PIN": "690506",
      "DID": "4"
    },
    {
      "POSTID": 4129,
      "E": "Cheppad",
      "M": "ചേപ്പാട്",
      "PIN": "690507",
      "DID": "4"
    },
    {
      "POSTID": 4130,
      "E": "Keerikad",
      "M": "കീരിക്കാട്",
      "PIN": "690508",
      "DID": "4"
    },
    {
      "POSTID": 4131,
      "E": "Kollakadavu",
      "M": "കൊല്ലകടവ്",
      "PIN": "690509",
      "DID": "4"
    },
    {
      "POSTID": 4132,
      "E": "Olakettiambalam",
      "M": "ഓലകെട്ടിയമ്പലം",
      "PIN": "690510",
      "DID": "4"
    },
    {
      "POSTID": 4133,
      "E": "Muttom",
      "M": "മുട്ടം ആലപ്പുഴ",
      "PIN": "690511",
      "DID": "4"
    },
    {
      "POSTID": 4134,
      "E": "Naduvattom‍",
      "M": "നടുവട്ടം",
      "PIN": "690512",
      "DID": "4"
    },
    {
      "POSTID": 4135,
      "E": "Pallipad",
      "M": "പള്ളിപ്പാട്",
      "PIN": "690512",
      "DID": "4"
    },
    {
      "POSTID": 4136,
      "E": "Nangiarkulangara",
      "M": "നങ്ങ്യാര്‍കുളങ്ങര",
      "PIN": "690513",
      "DID": "4"
    },
    {
      "POSTID": 4137,
      "E": "Akamkudi",
      "M": "അകംകുടി",
      "PIN": "690513",
      "DID": "4"
    },
    {
      "POSTID": 4138,
      "E": "Veeyapuram",
      "M": "വീയപുരം",
      "PIN": "690514",
      "DID": "4"
    },
    {
      "POSTID": 4139,
      "E": "Haripad",
      "M": "ഹരിപ്പാട്",
      "PIN": "690514",
      "DID": "4"
    },
    {
      "POSTID": 4140,
      "E": "Thamallakkal North",
      "M": "താമല്ലാക്കല്‍ നോര്‍ത്ത്",
      "PIN": "690548",
      "DID": "4"
    },
    {
      "POSTID": 4141,
      "E": "Pallana",
      "M": "പല്ലന",
      "PIN": "690515",
      "DID": "4"
    },
    {
      "POSTID": 4142,
      "E": "Mangalam",
      "M": "മംഗലം",
      "PIN": "690515",
      "DID": "4"
    },
    {
      "POSTID": 4143,
      "E": "Arattupuzha North",
      "M": "ആറാട്ടുപുഴ നോര്‍ത്ത്",
      "PIN": "690515",
      "DID": "4"
    },
    {
      "POSTID": 4144,
      "E": "Trikkunnapuzha",
      "M": "തൃക്കുന്നപ്പുഴ",
      "PIN": "690515",
      "DID": "4"
    },
    {
      "POSTID": 4145,
      "E": "Erikkavu",
      "M": "എരിയ്ക്കാവ്",
      "PIN": "690516",
      "DID": "4"
    },
    {
      "POSTID": 4146,
      "E": "Karthikappally",
      "M": "കാര്‍ത്തികപ്പള്ളി",
      "PIN": "690516",
      "DID": "4"
    },
    {
      "POSTID": 4147,
      "E": "Pandy",
      "M": "പാണ്ടി",
      "PIN": "690517",
      "DID": "4"
    },
    {
      "POSTID": 4148,
      "E": "Ayaparambu",
      "M": "ആയാപറമ്പ്",
      "PIN": "690517",
      "DID": "4"
    },
    {
      "POSTID": 4149,
      "E": "Karuvatta",
      "M": "കരുവാറ്റ",
      "PIN": "690517",
      "DID": "4"
    },
    {
      "POSTID": 4150,
      "E": "Karunagapally",
      "M": "",
      "PIN": "690518",
      "DID": "2"
    },
    {
      "POSTID": 4151,
      "E": "Mynagappally",
      "M": "മൈനാഗപ്പള്ളി",
      "PIN": "690519",
      "DID": "2"
    },
    {
      "POSTID": 4152,
      "E": "Mynagappally North",
      "M": "വടക്കന്‍ മൈനാഗപ്പള്ളി",
      "PIN": "690519",
      "DID": "2"
    },
    {
      "POSTID": 4153,
      "E": "Thottumukhom-Qn",
      "M": "തോട്ടുമുഖം",
      "PIN": "690519",
      "DID": "2"
    },
    {
      "POSTID": 4154,
      "E": "Ambalathumbhagom",
      "M": "അമ്പലത്തുംഭാഗം",
      "PIN": "690520",
      "DID": "2"
    },
    {
      "POSTID": 4155,
      "E": "Muthupilakad",
      "M": "മുതുപിലാക്കാട്",
      "PIN": "690520",
      "DID": "2"
    },
    {
      "POSTID": 4156,
      "E": "Chathakulam",
      "M": "ചാത്താകുളം",
      "PIN": "690520",
      "DID": "2"
    },
    {
      "POSTID": 4157,
      "E": "Poruvazhi",
      "M": "പോരുവഴി",
      "PIN": "690520",
      "DID": "2"
    },
    {
      "POSTID": 4158,
      "E": "Pallisserical",
      "M": "പള്ളിശ്ശേരിക്കല്‍",
      "PIN": "690521",
      "DID": "2"
    },
    {
      "POSTID": 4159,
      "E": "Vilanthara Jn.",
      "M": "വിളന്തറ",
      "PIN": "690521",
      "DID": "2"
    },
    {
      "POSTID": 4160,
      "E": "Sasthamcottah",
      "M": "ശാസ്താംകോട്ട",
      "PIN": "690521",
      "DID": "2"
    },
    {
      "POSTID": 4161,
      "E": "Kakkakunnu",
      "M": "കക്കാക്കുന്ന്",
      "PIN": "690522",
      "DID": "2"
    },
    {
      "POSTID": 4162,
      "E": "Sooranad",
      "M": "ശൂരനാട് ",
      "PIN": "690522",
      "DID": "2"
    },
    {
      "POSTID": 4163,
      "E": "Thengamom",
      "M": "തെങ്ങമം",
      "PIN": "690522",
      "DID": "3"
    },
    {
      "POSTID": 4164,
      "E": "Kuthirapanthi",
      "M": "കുതിരപ്പന്തി",
      "PIN": "690523",
      "DID": "2"
    },
    {
      "POSTID": 4165,
      "E": "Kadathur Ward",
      "M": "കടത്തൂര്‍ വാര്‍ഡ്",
      "PIN": "690523",
      "DID": "2"
    },
    {
      "POSTID": 4166,
      "E": "Thodiyoor North",
      "M": "തൊടിയൂര്‍ നോര്‍ത്ത്",
      "PIN": "690523",
      "DID": "2"
    },
    {
      "POSTID": 4167,
      "E": "Thazhava",
      "M": "തഴവ",
      "PIN": "690523",
      "DID": "2"
    },
    {
      "POSTID": 4168,
      "E": "Padinjattakkara Thevalakkara",
      "M": "പടിഞ്ഞാറ്റക്കര-തേവലക്കര",
      "PIN": "690524",
      "DID": "2"
    },
    {
      "POSTID": 4169,
      "E": "Thevalakkara",
      "M": "തേവലക്കര",
      "PIN": "690524",
      "DID": "2"
    },
    {
      "POSTID": 4170,
      "E": "Clappana",
      "M": "ക്ലാപ്പന",
      "PIN": "690525",
      "DID": "2"
    },
    {
      "POSTID": 4171,
      "E": "Amrithapuri",
      "M": "അമൃതപുരി",
      "PIN": "690525",
      "DID": "2"
    },
    {
      "POSTID": 4172,
      "E": "Madathilkaranma",
      "M": "മഠത്തില്‍കാരാണ്മ",
      "PIN": "690526",
      "DID": "2"
    },
    {
      "POSTID": 4173,
      "E": "Oachira",
      "M": "ഓച്ചിറ",
      "PIN": "690526",
      "DID": "2"
    },
    {
      "POSTID": 4174,
      "E": "Puthupally",
      "M": "പുതുപ്പള്ളി",
      "PIN": "690527",
      "DID": "4"
    },
    {
      "POSTID": 4175,
      "E": "Govindamuttom",
      "M": "ഗോവിന്ദമുട്ടം",
      "PIN": "690527",
      "DID": "4"
    },
    {
      "POSTID": 4176,
      "E": "Vavvakkavu",
      "M": "വവ്വാക്കാവ്",
      "PIN": "690528",
      "DID": "2"
    },
    {
      "POSTID": 4177,
      "E": "Varavila",
      "M": "വരവിള",
      "PIN": "690528",
      "DID": "2"
    },
    {
      "POSTID": 4178,
      "E": "Pattoor",
      "M": "പാറ്റൂര്‍",
      "PIN": "690529",
      "DID": "4"
    },
    {
      "POSTID": 4179,
      "E": "Padanilam",
      "M": "പടനിലം",
      "PIN": "690529",
      "DID": "4"
    },
    {
      "POSTID": 4180,
      "E": "Thamarakulam",
      "M": "താമരക്കുളം",
      "PIN": "690530",
      "DID": "4"
    },
    {
      "POSTID": 4181,
      "E": "Puthiyavila",
      "M": "പുതിയവിള",
      "PIN": "690531",
      "DID": "4"
    },
    {
      "POSTID": 4182,
      "E": "Pattoli Market",
      "M": "പട്ടോളി മാര്‍ക്കറ്റ്",
      "PIN": "690531",
      "DID": "4"
    },
    {
      "POSTID": 4183,
      "E": "Chingoli",
      "M": "ചിങ്ങോലി",
      "PIN": "690532",
      "DID": "4"
    },
    {
      "POSTID": 4184,
      "E": "Kappil East",
      "M": "കാപ്പില്‍ കിഴക്ക്",
      "PIN": "690533",
      "DID": "4"
    },
    {
      "POSTID": 4185,
      "E": "Krishnapuram",
      "M": "കൃഷ്ണപുരം",
      "PIN": "690533",
      "DID": "4"
    },
    {
      "POSTID": 4186,
      "E": "Njakkanal",
      "M": "ഞക്കനാല്‍",
      "PIN": "690533",
      "DID": "2"
    },
    {
      "POSTID": 4187,
      "E": "Chunakara",
      "M": "ചുനക്കര",
      "PIN": "690534",
      "DID": "4"
    },
    {
      "POSTID": 4188,
      "E": "Valiazheekal",
      "M": "വലിയഴീക്കല്‍",
      "PIN": "690535",
      "DID": "4"
    },
    {
      "POSTID": 4189,
      "E": "Kandallur",
      "M": "കണ്ടല്ലൂര്‍",
      "PIN": "690535",
      "DID": "4"
    },
    {
      "POSTID": 4190,
      "E": "Vadakkumthala East",
      "M": "വടക്കുംതല കിഴക്ക്",
      "PIN": "690536",
      "DID": "2"
    },
    {
      "POSTID": 4191,
      "E": "Kollaka",
      "M": "കൊല്ലക",
      "PIN": "690536",
      "DID": "2"
    },
    {
      "POSTID": 4192,
      "E": "Pullikkanakku",
      "M": "പുള്ളിക്കണക്ക്",
      "PIN": "690537",
      "DID": "4"
    },
    {
      "POSTID": 4193,
      "E": "Arinallur",
      "M": "അരിനല്ലൂര്‍ ",
      "PIN": "690538",
      "DID": "2"
    },
    {
      "POSTID": 4194,
      "E": "Arinallur South",
      "M": "അരിനല്ലൂര്‍ സൗത്ത്",
      "PIN": "690538",
      "DID": "2"
    },
    {
      "POSTID": 4195,
      "E": "Perungalam",
      "M": "പെരുങ്ങാലം",
      "PIN": "690538",
      "DID": "2"
    },
    {
      "POSTID": 4196,
      "E": "Sree Ramapuram Market",
      "M": "ശ്രീരാമപുരം മാര്‍ക്കറ്റ്",
      "PIN": "690539",
      "DID": "2"
    },
    {
      "POSTID": 4197,
      "E": "Puthanambalam",
      "M": "പുത്തനമ്പലം",
      "PIN": "691553",
      "DID": "2"
    },
    {
      "POSTID": 4198,
      "E": "Manampuzha",
      "M": "മാനാമ്പുഴ",
      "PIN": "691553",
      "DID": "2"
    },
    {
      "POSTID": 4199,
      "E": "Karimthottuva",
      "M": "കരിന്തോട്ടുവ",
      "PIN": "690540",
      "DID": "2"
    },
    {
      "POSTID": 4200,
      "E": "Kunnathoor East",
      "M": "കുന്നത്തൂര്‍ ഈസ്റ്റ്",
      "PIN": "690540",
      "DID": "2"
    },
    {
      "POSTID": 4201,
      "E": "Thuruthikara",
      "M": "തുരുത്തിക്കര",
      "PIN": "690540",
      "DID": "2"
    },
    {
      "POSTID": 4202,
      "E": "Bharanickavu",
      "M": "ഭരണിക്കാവ്",
      "PIN": "690541",
      "DID": "4"
    },
    {
      "POSTID": 4203,
      "E": "Athinad North",
      "M": "ആദിനാട് വടക്ക്",
      "PIN": "690542",
      "DID": "2"
    },
    {
      "POSTID": 4204,
      "E": "Kattilkadavu",
      "M": "കാട്ടില്‍കടവ്",
      "PIN": "690542",
      "DID": "2"
    },
    {
      "POSTID": 4205,
      "E": "Kuzhithura",
      "M": "കുഴിത്തുറ",
      "PIN": "690542",
      "DID": "2"
    },
    {
      "POSTID": 4206,
      "E": "Karali Junction",
      "M": "കാരാളി ജംഗ്ഷന്‍",
      "PIN": "690521",
      "DID": "2"
    },
    {
      "POSTID": 4207,
      "E": "Karunagapally North",
      "M": "കരുനാഗപ്പള്ളി നോര്‍ത്ത്",
      "PIN": "690544",
      "DID": "2"
    },
    {
      "POSTID": 4208,
      "E": "Kulasekharapuram",
      "M": "കുലശേഖരപുരം",
      "PIN": "690544",
      "DID": "2"
    },
    {
      "POSTID": 4209,
      "E": "Kallelibhagom",
      "M": "കല്ലേലിഭാഗം",
      "PIN": "690519",
      "DID": "2"
    },
    {
      "POSTID": 4210,
      "E": "Prayar",
      "M": "പ്രയാര്‍",
      "PIN": "690547",
      "DID": "2"
    },
    {
      "POSTID": 4211,
      "E": "Azheekalthura",
      "M": "അഴീക്കല്‍ത്തുറ",
      "PIN": "690547",
      "DID": "2"
    },
    {
      "POSTID": 4212,
      "E": "Alumpeedika",
      "M": "ആലുംപീടിക",
      "PIN": "690547",
      "DID": "2"
    },
    {
      "POSTID": 4213,
      "E": "Thattakkatu Market",
      "M": "തട്ടക്കാട്ട്  മാര്‍ക്കറ്റ്",
      "PIN": "690547",
      "DID": "2"
    },
    {
      "POSTID": 4214,
      "E": "Kumarapuram",
      "M": "കുമാരപുരം",
      "PIN": "690548",
      "DID": "4"
    },
    {
      "POSTID": 4215,
      "E": "Thamallakkal",
      "M": "താമല്ലാക്കല്‍ ",
      "PIN": "690548",
      "DID": "4"
    },
    {
      "POSTID": 4216,
      "E": "Mannarasala",
      "M": "മണ്ണാറശ്ശാല",
      "PIN": "690514",
      "DID": "4"
    },
    {
      "POSTID": 4217,
      "E": "Purakad",
      "M": "പുറക്കാട്",
      "PIN": "690551",
      "DID": "4"
    },
    {
      "POSTID": 4218,
      "E": "Pathiyoor",
      "M": "പത്തിയൂര്‍",
      "PIN": "690508",
      "DID": "4"
    },
    {
      "POSTID": 4219,
      "E": "Evoor",
      "M": "ഏവൂര്‍",
      "PIN": "690507",
      "DID": "4"
    },
    {
      "POSTID": 4220,
      "E": "Karuvatta North",
      "M": "കരുവാറ്റ നോര്‍ത്ത്",
      "PIN": "690517",
      "DID": "4"
    },
    {
      "POSTID": 4221,
      "E": "Mahadevikadu",
      "M": "മഹാദേവികാട്",
      "PIN": "690516",
      "DID": "4"
    },
    {
      "POSTID": 4222,
      "E": "Paippad",
      "M": "പായിപ്പാട്",
      "PIN": "690514",
      "DID": "4"
    },
    {
      "POSTID": 4223,
      "E": "Vettiyar",
      "M": "വെട്ടിയാര്‍",
      "PIN": "690558",
      "DID": "4"
    },
    {
      "POSTID": 4224,
      "E": "Mankamkuzhy",
      "M": "മാങ്കാംകുഴി",
      "PIN": "690558",
      "DID": "4"
    },
    {
      "POSTID": 4225,
      "E": "Perungala",
      "M": "പെരുങ്ങാല",
      "PIN": "690559",
      "DID": "4"
    },
    {
      "POSTID": 4226,
      "E": "Muthukulam",
      "M": "മുതുകുളം ",
      "PIN": "690506",
      "DID": "4"
    },
    {
      "POSTID": 4227,
      "E": "Parakadavu",
      "M": "പാറക്കടവ്",
      "PIN": "690561",
      "DID": "2"
    },
    {
      "POSTID": 4228,
      "E": "Anayadi",
      "M": "ആനയടി",
      "PIN": "690561",
      "DID": "2"
    },
    {
      "POSTID": 4229,
      "E": "Soornad North",
      "M": "ശൂരനാട് നോര്‍ത്ത്",
      "PIN": "690561",
      "DID": "2"
    },
    {
      "POSTID": 4230,
      "E": "Edakulangara",
      "M": "ഇടക്കുളങ്ങര",
      "PIN": "690523",
      "DID": "2"
    },
    {
      "POSTID": 4231,
      "E": "Cheruthana",
      "M": "ചെറുതന",
      "PIN": "690517",
      "DID": "4"
    },
    {
      "POSTID": 4232,
      "E": "Eruva",
      "M": "എരുവ",
      "PIN": "690572",
      "DID": "4"
    },
    {
      "POSTID": 4233,
      "E": "Arattupuzha",
      "M": "ആറാട്ടുപുഴ ",
      "PIN": "690535",
      "DID": "4"
    },
    {
      "POSTID": 4234,
      "E": "Valiaparambu",
      "M": "വലിയപറമ്പ്",
      "PIN": "690516",
      "DID": "4"
    },
    {
      "POSTID": 4235,
      "E": "Patharam",
      "M": "പതാരം",
      "PIN": "690567",
      "DID": "2"
    },
    {
      "POSTID": 4236,
      "E": "Thodiyoor",
      "M": "തൊടിയൂര്‍",
      "PIN": "690523",
      "DID": "2"
    },
    {
      "POSTID": 4237,
      "E": "Venga ",
      "M": "വേങ്ങ",
      "PIN": "690521",
      "DID": "2"
    },
    {
      "POSTID": 4238,
      "E": "Kallimel",
      "M": "കല്ലിമേല്‍",
      "PIN": "690570",
      "DID": "4"
    },
    {
      "POSTID": 4239,
      "E": "Nooranad Sanatorium",
      "M": "നൂറനാട് ലപ്രസി സാനട്ടോറിയം",
      "PIN": "690571",
      "DID": "4"
    },
    {
      "POSTID": 4240,
      "E": "Kareelakulangara",
      "M": "കരീലകുളങ്ങര",
      "PIN": "690572",
      "DID": "4"
    },
    {
      "POSTID": 4241,
      "E": "Alumkadavu",
      "M": "",
      "PIN": "690573",
      "DID": "2"
    },
    {
      "POSTID": 4242,
      "E": "S V Market",
      "M": "",
      "PIN": "690573",
      "DID": "2"
    },
    {
      "POSTID": 4243,
      "E": "Cheriyazeekal",
      "M": "ചെറിയഴീക്കല്‍",
      "PIN": "690573",
      "DID": "2"
    },
    {
      "POSTID": 4244,
      "E": "Pavumba",
      "M": "പാവുമ്പ",
      "PIN": "690574",
      "DID": "2"
    },
    {
      "POSTID": 4245,
      "E": "Manappally North",
      "M": "മണപ്പള്ളി നോര്‍ത്ത്",
      "PIN": "690574",
      "DID": "2"
    },
    {
      "POSTID": 4246,
      "E": "Kollam",
      "M": "കൊല്ലം",
      "PIN": "691001",
      "DID": "2"
    },
    {
      "POSTID": 4247,
      "E": "Asramom",
      "M": "ആശ്രാമം",
      "PIN": "691002",
      "DID": "2"
    },
    {
      "POSTID": 4248,
      "E": "Maruthadi",
      "M": "മരുത്തടി",
      "PIN": "691003",
      "DID": "2"
    },
    {
      "POSTID": 4249,
      "E": "Kavanad",
      "M": "കാവനാട്",
      "PIN": "691003",
      "DID": "2"
    },
    {
      "POSTID": 4250,
      "E": "Kilikollur",
      "M": "കിളിക്കൊല്ലൂര്‍",
      "PIN": "691004",
      "DID": "2"
    },
    {
      "POSTID": 4251,
      "E": "Kallumthazham",
      "M": "കല്ലുംതാഴം",
      "PIN": "691004",
      "DID": "2"
    },
    {
      "POSTID": 4252,
      "E": "T K M College",
      "M": "ടി കെ എം കോളേജ് (ടികെഎംസി)",
      "PIN": "691005",
      "DID": "2"
    },
    {
      "POSTID": 4253,
      "E": "Thattarkonam",
      "M": "തട്ടാര്‍കോണം",
      "PIN": "691005",
      "DID": "2"
    },
    {
      "POSTID": 4254,
      "E": "Pallithottam",
      "M": "പള്ളിത്തോട്ടം",
      "PIN": "691006",
      "DID": "2"
    },
    {
      "POSTID": 4255,
      "E": "Thangasseri",
      "M": "തങ്കശ്ശേരി",
      "PIN": "691007",
      "DID": "2"
    },
    {
      "POSTID": 4256,
      "E": "Kadappakada",
      "M": "കടപ്പാക്കട",
      "PIN": "691008",
      "DID": "2"
    },
    {
      "POSTID": 4257,
      "E": "Thevally",
      "M": "തേവള്ളി",
      "PIN": "691009",
      "DID": "2"
    },
    {
      "POSTID": 4258,
      "E": "Mundakkal",
      "M": "മുണ്ടയ്ക്കല്‍",
      "PIN": "691010",
      "DID": "2"
    },
    {
      "POSTID": 4259,
      "E": "Vadakkevila",
      "M": "വടക്കേവിള",
      "PIN": "691010",
      "DID": "2"
    },
    {
      "POSTID": 4260,
      "E": "Eravipuram",
      "M": "ഇരവിപുരം",
      "PIN": "691011",
      "DID": "2"
    },
    {
      "POSTID": 4261,
      "E": "Thirumullavaram",
      "M": "തിരുമുല്ലവാരം",
      "PIN": "691012",
      "DID": "2"
    },
    {
      "POSTID": 4262,
      "E": "Kollam Cutcherry",
      "M": "കൊല്ലം കച്ചേരി",
      "PIN": "691013",
      "DID": "2"
    },
    {
      "POSTID": 4263,
      "E": "Chandanathope",
      "M": "ചന്ദനത്തോപ്പ്",
      "PIN": "691014",
      "DID": "2"
    },
    {
      "POSTID": 4264,
      "E": "Mangad",
      "M": "മങ്ങാട്",
      "PIN": "691015",
      "DID": "2"
    },
    {
      "POSTID": 4265,
      "E": "Thekkevila",
      "M": "തെക്കേവിള",
      "PIN": "691016",
      "DID": "2"
    },
    {
      "POSTID": 4266,
      "E": "Ayathil",
      "M": "അയത്തില്‍",
      "PIN": "691017",
      "DID": "2"
    },
    {
      "POSTID": 4267,
      "E": "Valathungal",
      "M": "വാളത്തുങ്കല്‍",
      "PIN": "691018",
      "DID": "2"
    },
    {
      "POSTID": 4268,
      "E": "Uliyakovil",
      "M": "ഉളിയക്കോവില്‍",
      "PIN": "691019",
      "DID": "2"
    },
    {
      "POSTID": 4269,
      "E": "Kootikada",
      "M": "കൂട്ടിക്കട",
      "PIN": "691020",
      "DID": "2"
    },
    {
      "POSTID": 4270,
      "E": "Thattamala",
      "M": "തട്ടാമല",
      "PIN": "691020",
      "DID": "2"
    },
    {
      "POSTID": 4271,
      "E": "Pattathanam",
      "M": "പട്ടത്താനം",
      "PIN": "691021",
      "DID": "2"
    },
    {
      "POSTID": 4272,
      "E": "Paravur-Kollam",
      "M": "പരവൂര്‍",
      "PIN": "691301",
      "DID": "2"
    },
    {
      "POSTID": 4273,
      "E": "Pozhikara",
      "M": "പൊഴിക്കര",
      "PIN": "691301",
      "DID": "2"
    },
    {
      "POSTID": 4274,
      "E": "Bhoothakulam",
      "M": "പൂതക്കുളം",
      "PIN": "691302",
      "DID": "2"
    },
    {
      "POSTID": 4275,
      "E": "Kalakode",
      "M": "കലയ്ക്കോട്",
      "PIN": "691302",
      "DID": "2"
    },
    {
      "POSTID": 4276,
      "E": "Nellettil",
      "M": "നെല്ലേറ്റില്‍",
      "PIN": "691302",
      "DID": "2"
    },
    {
      "POSTID": 4277,
      "E": "Mayyanad",
      "M": "മയ്യനാട്",
      "PIN": "691303",
      "DID": "2"
    },
    {
      "POSTID": 4278,
      "E": "Pullichira",
      "M": "പുല്ലിച്ചിറ",
      "PIN": "691304",
      "DID": "2"
    },
    {
      "POSTID": 4279,
      "E": "Punalur",
      "M": "പുനലൂര്‍",
      "PIN": "691305",
      "DID": "2"
    },
    {
      "POSTID": 4280,
      "E": "Vilakkuvattom",
      "M": "വിളക്കുവെട്ടം",
      "PIN": "691305",
      "DID": "2"
    },
    {
      "POSTID": 4281,
      "E": "Chaliyakkara Estate",
      "M": "ചാലിയക്കര എസ്റ്റേറ്റ്",
      "PIN": "691305",
      "DID": "2"
    },
    {
      "POSTID": 4282,
      "E": "Nellipally",
      "M": "നെല്ലിപ്പള്ളി",
      "PIN": "691305",
      "DID": "2"
    },
    {
      "POSTID": 4283,
      "E": "Anchal",
      "M": "അഞ്ചല്‍",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4284,
      "E": "Ezhiyam Vattatharamalamukku",
      "M": "എഴിയം വട്ടത്തറമലമുക്ക്",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4285,
      "E": "Vayala - Anchal",
      "M": "വയല-അഞ്ചല്‍",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4286,
      "E": "Vadamon",
      "M": "വടമണ്‍",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4287,
      "E": "Nediyara",
      "M": "നെടിയറ",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4288,
      "E": "Cherukulam",
      "M": "ചെറുകുളം",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4289,
      "E": "Thadicaud",
      "M": "തടിക്കാട്",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4290,
      "E": "Ayiranallur",
      "M": "അയിരനല്ലൂര്‍",
      "PIN": "691307",
      "DID": "2"
    },
    {
      "POSTID": 4291,
      "E": "Mampazhathara",
      "M": "മാമ്പഴത്തറ",
      "PIN": "691307",
      "DID": "2"
    },
    {
      "POSTID": 4292,
      "E": "Anapettakongal",
      "M": "ആനപെട്ടകൊംഗല്‍",
      "PIN": "691307",
      "DID": "2"
    },
    {
      "POSTID": 4293,
      "E": "Edamon",
      "M": "ഇടമണ്‍",
      "PIN": "691307",
      "DID": "2"
    },
    {
      "POSTID": 4294,
      "E": "Ottakal",
      "M": "ഒറ്റക്കല്‍",
      "PIN": "691308",
      "DID": "2"
    },
    {
      "POSTID": 4295,
      "E": "Kakkottumoola NDBO Mayyand",
      "M": "കാക്കോട്ടുമൂല",
      "PIN": "691308",
      "DID": "2"
    },
    {
      "POSTID": 4296,
      "E": "Kallada Irrigation Project",
      "M": "കല്ലട ഇറിഗേഷന്‍ പ്രോജക്ട് ഡാം",
      "PIN": "691308",
      "DID": "2"
    },
    {
      "POSTID": 4297,
      "E": "Thenmala",
      "M": "തെന്മല",
      "PIN": "691308",
      "DID": "2"
    },
    {
      "POSTID": 4298,
      "E": "Ambanad",
      "M": "അമ്പനാട്",
      "PIN": "691309",
      "DID": "2"
    },
    {
      "POSTID": 4299,
      "E": "Edapalayam",
      "M": "ഇടപ്പാളയം",
      "PIN": "691309",
      "DID": "2"
    },
    {
      "POSTID": 4300,
      "E": "Kazhuthurutty",
      "M": "കഴുതുരുട്ടി",
      "PIN": "691309",
      "DID": "2"
    },
    {
      "POSTID": 4301,
      "E": "Venture",
      "M": "വെഞ്ചര്‍",
      "PIN": "691309",
      "DID": "2"
    },
    {
      "POSTID": 4302,
      "E": "Rosemala",
      "M": "റോസ്മല",
      "PIN": "691309",
      "DID": "2"
    },
    {
      "POSTID": 4303,
      "E": "Villumala",
      "M": "വില്ലുമല",
      "PIN": "691310",
      "DID": "2"
    },
    {
      "POSTID": 4304,
      "E": "Kulathupuzha",
      "M": "കുളത്തൂപ്പുഴ",
      "PIN": "691310",
      "DID": "2"
    },
    {
      "POSTID": 4305,
      "E": "Koovakkad",
      "M": "കൂവക്കാട്",
      "PIN": "691310",
      "DID": "2"
    },
    {
      "POSTID": 4306,
      "E": "Sam Nagar",
      "M": "സാം നഗര്‍",
      "PIN": "691310",
      "DID": "2"
    },
    {
      "POSTID": 4307,
      "E": "Dally",
      "M": "ഡാലി",
      "PIN": "691310",
      "DID": "2"
    },
    {
      "POSTID": 4308,
      "E": "Thingalkarikom",
      "M": "തിങ്കള്‍കരിയ്ക്കം",
      "PIN": "691310",
      "DID": "2"
    },
    {
      "POSTID": 4309,
      "E": "Mannur Anchal",
      "M": "മണ്ണൂര്‍-അഞ്ചല്‍",
      "PIN": "691311",
      "DID": "2"
    },
    {
      "POSTID": 4310,
      "E": "Anakulam",
      "M": "ആനക്കുളം",
      "PIN": "691311",
      "DID": "2"
    },
    {
      "POSTID": 4311,
      "E": "Channapettah",
      "M": "ചണ്ണപ്പേട്ട",
      "PIN": "691311",
      "DID": "2"
    },
    {
      "POSTID": 4312,
      "E": "Ayilara",
      "M": "അയിലറ",
      "PIN": "691312",
      "DID": "2"
    },
    {
      "POSTID": 4313,
      "E": "Marthandankara",
      "M": "മാര്‍ത്താണ്ഡങ്കര",
      "PIN": "691312",
      "DID": "2"
    },
    {
      "POSTID": 4314,
      "E": "Manalil",
      "M": "മണലില്‍",
      "PIN": "691312",
      "DID": "2"
    },
    {
      "POSTID": 4315,
      "E": "Eroor",
      "M": "ഏരൂര്‍",
      "PIN": "691312",
      "DID": "2"
    },
    {
      "POSTID": 4316,
      "E": "Vilakupara",
      "M": "വിളക്കുപാറ",
      "PIN": "691312",
      "DID": "2"
    },
    {
      "POSTID": 4317,
      "E": "Kadamancode",
      "M": "കടമാന്‍കോട്",
      "PIN": "691312",
      "DID": "2"
    },
    {
      "POSTID": 4318,
      "E": "Mathra ",
      "M": "മാത്ര",
      "PIN": "691333",
      "DID": "2"
    },
    {
      "POSTID": 4319,
      "E": "Aryankavu",
      "M": "ആര്യങ്കാവ്",
      "PIN": "691309",
      "DID": "2"
    },
    {
      "POSTID": 4320,
      "E": "Chozhiyakodu",
      "M": "ചോഴിയക്കോട്",
      "PIN": "691310",
      "DID": "1"
    },
    {
      "POSTID": 4321,
      "E": "Karavaloor",
      "M": "കരവാളൂര്‍",
      "PIN": "691333",
      "DID": "2"
    },
    {
      "POSTID": 4322,
      "E": "Thekkumbhagom",
      "M": "തെക്കുംഭാഗം",
      "PIN": "691319",
      "DID": "2"
    },
    {
      "POSTID": 4323,
      "E": "Alayamon",
      "M": "അലയമണ്‍",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4324,
      "E": "Edamulackal",
      "M": "ഇടമുളയ്ക്കല്‍",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4325,
      "E": "Elampal",
      "M": "ഇളമ്പല്‍",
      "PIN": "691322",
      "DID": "2"
    },
    {
      "POSTID": 4326,
      "E": "Elicode",
      "M": "എലിക്കോട്",
      "PIN": "691322",
      "DID": "2"
    },
    {
      "POSTID": 4327,
      "E": "Kottavattom",
      "M": "കോട്ടവട്ടം",
      "PIN": "691322",
      "DID": "2"
    },
    {
      "POSTID": 4328,
      "E": "Karukone ",
      "M": "കരുകോണ്‍",
      "PIN": "691306",
      "DID": "2"
    },
    {
      "POSTID": 4329,
      "E": "Maniyar-Punalur ",
      "M": "മണിയാര്‍-പുനലൂര്‍",
      "PIN": "691333",
      "DID": "2"
    },
    {
      "POSTID": 4330,
      "E": "Narickal ",
      "M": "നരിയ്ക്കല്‍",
      "PIN": "691322",
      "DID": "2"
    },
    {
      "POSTID": 4331,
      "E": "Urukunnu",
      "M": "ഉറുകുന്ന്",
      "PIN": "691329",
      "DID": "2"
    },
    {
      "POSTID": 4332,
      "E": "Bharatheepuram",
      "M": "ഭാരതീപുരം",
      "PIN": "691312",
      "DID": "2"
    },
    {
      "POSTID": 4333,
      "E": "Placherry",
      "M": "പ്ലാച്ചേരി",
      "PIN": "691331",
      "DID": "2"
    },
    {
      "POSTID": 4334,
      "E": "Valacode",
      "M": "വാളക്കോട്",
      "PIN": "691331",
      "DID": "2"
    },
    {
      "POSTID": 4335,
      "E": "Kakkode",
      "M": "കക്കോട്",
      "PIN": "691331",
      "DID": "2"
    },
    {
      "POSTID": 4336,
      "E": "Punalur Paper Mills",
      "M": "പുനലൂര്‍ പേപ്പര്‍മില്‍ (പി പി എം)",
      "PIN": "691332",
      "DID": "2"
    },
    {
      "POSTID": 4337,
      "E": "Kariyara",
      "M": "കാര്യറ",
      "PIN": "691332",
      "DID": "2"
    },
    {
      "POSTID": 4338,
      "E": "Areeplachy",
      "M": "അരീപ്ലാച്ചി",
      "PIN": "691333",
      "DID": "2"
    },
    {
      "POSTID": 4339,
      "E": "Venchembu ",
      "M": "വെഞ്ചേമ്പ്",
      "PIN": "691333",
      "DID": "2"
    },
    {
      "POSTID": 4340,
      "E": "Tholicode Punalur",
      "M": "തൊളിക്കോട്",
      "PIN": "691333",
      "DID": "2"
    },
    {
      "POSTID": 4341,
      "E": "Nedumgolam",
      "M": "നെടുങ്ങോലം",
      "PIN": "691334",
      "DID": "2"
    },
    {
      "POSTID": 4342,
      "E": "Polachira",
      "M": "പോളച്ചിറ",
      "PIN": "691334",
      "DID": "2"
    },
    {
      "POSTID": 4343,
      "E": "Puthenkulam",
      "M": "പുത്തന്‍കുളം",
      "PIN": "691302",
      "DID": "2"
    },
    {
      "POSTID": 4344,
      "E": "West Kallada",
      "M": "വെസ്റ്റ് കല്ലട",
      "PIN": "691500",
      "DID": "2"
    },
    {
      "POSTID": 4345,
      "E": "Ambipoika",
      "M": "അമ്പിപൊയ്ക",
      "PIN": "691501",
      "DID": "2"
    },
    {
      "POSTID": 4346,
      "E": "Kundara",
      "M": "കുണ്ടറ ",
      "PIN": "691501",
      "DID": "2"
    },
    {
      "POSTID": 4347,
      "E": "Kundara East",
      "M": "കുണ്ടറ ഈസ്റ്റ്",
      "PIN": "691501",
      "DID": "2"
    },
    {
      "POSTID": 4348,
      "E": "Munroethuruthu",
      "M": "മണ്‍റോതുരുത്ത്",
      "PIN": "691502",
      "DID": "2"
    },
    {
      "POSTID": 4349,
      "E": "Muppathadam East Kallada",
      "M": "",
      "PIN": "691502",
      "DID": "2"
    },
    {
      "POSTID": 4350,
      "E": "East Kallada",
      "M": "കിഴക്കേ കല്ലട",
      "PIN": "691502",
      "DID": "2"
    },
    {
      "POSTID": 4351,
      "E": "Peruvelikkara ",
      "M": "പെരുവേലിക്കര",
      "PIN": "691500",
      "DID": "2"
    },
    {
      "POSTID": 4352,
      "E": "Koduvila",
      "M": "കൊടുവിള",
      "PIN": "691502",
      "DID": "2"
    },
    {
      "POSTID": 4353,
      "E": "Padappakkara",
      "M": "പടപ്പക്കര",
      "PIN": "691503",
      "DID": "2"
    },
    {
      "POSTID": 4354,
      "E": "Mukkodu",
      "M": "മുക്കൂട്",
      "PIN": "691503",
      "DID": "2"
    },
    {
      "POSTID": 4355,
      "E": "Mulavana",
      "M": "മുളവന",
      "PIN": "691503",
      "DID": "2"
    },
    {
      "POSTID": 4356,
      "E": "Kanjiracode",
      "M": "കാഞ്ഞിരകോട്",
      "PIN": "691503",
      "DID": "2"
    },
    {
      "POSTID": 4357,
      "E": "Kumbalam",
      "M": "കുമ്പളം",
      "PIN": "691503",
      "DID": "2"
    },
    {
      "POSTID": 4358,
      "E": "Perumpuzha",
      "M": "പെരുമ്പുഴ",
      "PIN": "691504",
      "DID": "2"
    },
    {
      "POSTID": 4359,
      "E": "Ambalathumkala",
      "M": "അമ്പലത്തുംകാല",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4360,
      "E": "Maranad",
      "M": "മാറനാട്",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4361,
      "E": "Anakottoor",
      "M": "ആനക്കോട്ടൂര്‍",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4362,
      "E": "Irumpanagad",
      "M": "ഇരുമ്പനങ്ങാട്",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4363,
      "E": "Idakkadom",
      "M": "ഇടയ്ക്കിടം",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4364,
      "E": "Ezhukone",
      "M": "എഴുകോണ്‍",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4365,
      "E": "Karuvelil",
      "M": "കാരുവേലില്‍",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4366,
      "E": "Kadakkode",
      "M": "കടയ്ക്കോട്",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4367,
      "E": "Neeleswaram",
      "M": "നീലേശ്വരം",
      "PIN": "691505",
      "DID": "2"
    },
    {
      "POSTID": 4368,
      "E": "Kottarakara",
      "M": "കൊട്ടാരക്കര",
      "PIN": "691506",
      "DID": "2"
    },
    {
      "POSTID": 4369,
      "E": "Puthoor-Kollam",
      "M": "പുത്തൂര്‍-കൊല്ലം",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4370,
      "E": "Mavadi",
      "M": "മാവടി",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4371,
      "E": "Iverkala East",
      "M": "ഐവര്‍കാല കിഴക്ക്",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4372,
      "E": "Vendar",
      "M": "വെണ്ടാര്‍",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4373,
      "E": "Cherupoika ",
      "M": "ചെറുപൊയ്ക",
      "PIN": "691543",
      "DID": "2"
    },
    {
      "POSTID": 4374,
      "E": "Kaithakode",
      "M": "",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4375,
      "E": "Thevalappuram",
      "M": "തേവലപ്പുറം",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4376,
      "E": "Ambalathinnirappu",
      "M": "അമ്പലത്തിന്‍നിരപ്പ്",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4377,
      "E": "Manjakala",
      "M": "മഞ്ഞക്കാല",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4378,
      "E": "Avaneeswaram",
      "M": "ആവണീശ്വരം ",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4379,
      "E": "Vilakkudy",
      "M": "വിളക്കുടി",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4380,
      "E": "Kunnicode",
      "M": "കുന്നിക്കോട്",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4381,
      "E": "Chakkuvarakkal",
      "M": "ചക്കുവരയ്ക്കല്‍",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4382,
      "E": "Melila",
      "M": "മേലില",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4383,
      "E": "Vakkanad",
      "M": "വാക്കനാട്",
      "PIN": "691509",
      "DID": "2"
    },
    {
      "POSTID": 4384,
      "E": "Kuzhimanathicaud",
      "M": "കുഴിമതിക്കാട്",
      "PIN": "691509",
      "DID": "2"
    },
    {
      "POSTID": 4385,
      "E": "Nellimukku",
      "M": "നെല്ലിമുക്ക്",
      "PIN": "691509",
      "DID": "2"
    },
    {
      "POSTID": 4386,
      "E": "Nedumoncavu",
      "M": "നെടുമണ്‍കാവ്",
      "PIN": "691509",
      "DID": "2"
    },
    {
      "POSTID": 4387,
      "E": "Thripalashikom",
      "M": "തൃപ്പലഴികം",
      "PIN": "691509",
      "DID": "2"
    },
    {
      "POSTID": 4388,
      "E": "Meeyana",
      "M": "മീയന",
      "PIN": "691510",
      "DID": "2"
    },
    {
      "POSTID": 4389,
      "E": "Oyur",
      "M": "ഓയൂര്‍",
      "PIN": "691510",
      "DID": "2"
    },
    {
      "POSTID": 4390,
      "E": "Chenkulam",
      "M": "ചെങ്കുളം",
      "PIN": "691510",
      "DID": "2"
    },
    {
      "POSTID": 4391,
      "E": "Vellimon",
      "M": "വെള്ളിമണ്‍ ",
      "PIN": "691511",
      "DID": "2"
    },
    {
      "POSTID": 4392,
      "E": "Vellimon West",
      "M": "വെള്ളിമണ്‍ വെസ്റ്റ്",
      "PIN": "691511",
      "DID": "2"
    },
    {
      "POSTID": 4393,
      "E": "Thennala",
      "M": "തെന്നല",
      "PIN": "676508",
      "DID": "10"
    },
    {
      "POSTID": 4394,
      "E": "Muttara",
      "M": "മുട്ടറ",
      "PIN": "691512",
      "DID": "2"
    },
    {
      "POSTID": 4395,
      "E": "Valiyode ",
      "M": "വാളിയോട്",
      "PIN": "691520",
      "DID": "2"
    },
    {
      "POSTID": 4396,
      "E": "Odanavattom",
      "M": "ഓടനാവട്ടം",
      "PIN": "691512",
      "DID": "2"
    },
    {
      "POSTID": 4397,
      "E": "Kudavattor",
      "M": "കുടവട്ടൂര്‍",
      "PIN": "691512",
      "DID": "2"
    },
    {
      "POSTID": 4398,
      "E": "Cheppara ",
      "M": "ചെപ്ര",
      "PIN": "691520",
      "DID": "2"
    },
    {
      "POSTID": 4399,
      "E": "Karimpinpuzha",
      "M": "കരിമ്പിന്‍പുഴ",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4400,
      "E": "Thalavoor",
      "M": "തലവൂര്‍",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4401,
      "E": "Nallila",
      "M": "നല്ലില",
      "PIN": "691515",
      "DID": "2"
    },
    {
      "POSTID": 4402,
      "E": "Akkal",
      "M": "ആക്കല്‍",
      "PIN": "691516",
      "DID": "2"
    },
    {
      "POSTID": 4403,
      "E": "Karingannur",
      "M": "കരിങ്ങന്നൂര്‍",
      "PIN": "691516",
      "DID": "2"
    },
    {
      "POSTID": 4404,
      "E": "Cheriyavelinallur",
      "M": "ചെറിയവെളിനല്ലൂര്‍",
      "PIN": "691516",
      "DID": "2"
    },
    {
      "POSTID": 4405,
      "E": "Avaneeswaram R S",
      "M": "ആവണീശ്വരം ആര്‍ എസ്",
      "PIN": "691508",
      "DID": "2"
    },
    {
      "POSTID": 4406,
      "E": "Kottathala ",
      "M": "കോട്ടാത്തല",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4407,
      "E": "Kottukkal",
      "M": "കോട്ടുക്കല്‍",
      "PIN": "691519",
      "DID": "2"
    },
    {
      "POSTID": 4408,
      "E": "Kulakada",
      "M": "കുളക്കട",
      "PIN": "691521",
      "DID": "2"
    },
    {
      "POSTID": 4409,
      "E": "Kulakada East",
      "M": "കുളക്കട കിഴക്ക്",
      "PIN": "691521",
      "DID": "2"
    },
    {
      "POSTID": 4410,
      "E": "Kulakada Tazham",
      "M": "കുളക്കട താഴം",
      "PIN": "691521",
      "DID": "2"
    },
    {
      "POSTID": 4411,
      "E": "Panthaplavu",
      "M": "പന്തപ്ലാവ്",
      "PIN": "691522",
      "DID": "2"
    },
    {
      "POSTID": 4412,
      "E": "Pattazhy",
      "M": "പട്ടാഴി",
      "PIN": "691522",
      "DID": "2"
    },
    {
      "POSTID": 4413,
      "E": "Thekketheri",
      "M": "തെക്കേത്തേരി",
      "PIN": "691522",
      "DID": "2"
    },
    {
      "POSTID": 4414,
      "E": "Adoor ",
      "M": "അടൂര്‍",
      "PIN": "691523",
      "DID": "3"
    },
    {
      "POSTID": 4415,
      "E": "Anandapally",
      "M": "ആനന്ദപ്പള്ളി",
      "PIN": "691525",
      "DID": "3"
    },
    {
      "POSTID": 4416,
      "E": "Karuvatta",
      "M": "കരുവാറ്റ അടൂര്‍",
      "PIN": "691523",
      "DID": "3"
    },
    {
      "POSTID": 4417,
      "E": "Melood",
      "M": "മേലൂട്",
      "PIN": "691523",
      "DID": "3"
    },
    {
      "POSTID": 4418,
      "E": "Marur",
      "M": "മാരൂര്‍ ",
      "PIN": "691524",
      "DID": "3"
    },
    {
      "POSTID": 4419,
      "E": "Elamannur",
      "M": "ഇളമണ്ണൂര്‍",
      "PIN": "691524",
      "DID": "3"
    },
    {
      "POSTID": 4420,
      "E": "Parakara",
      "M": "പാറക്കര",
      "PIN": "691525",
      "DID": "3"
    },
    {
      "POSTID": 4421,
      "E": "Thattayil",
      "M": "തട്ടയില്‍",
      "PIN": "691525",
      "DID": "3"
    },
    {
      "POSTID": 4422,
      "E": "Enathu",
      "M": "ഏനാത്ത്",
      "PIN": "691526",
      "DID": "3"
    },
    {
      "POSTID": 4423,
      "E": "Kaithaparambu",
      "M": "കൈതപ്പറമ്പ്",
      "PIN": "691526",
      "DID": "3"
    },
    {
      "POSTID": 4424,
      "E": "Thazhathu Vadakku",
      "M": "താഴത്തുവടക്ക്",
      "PIN": "691526",
      "DID": "2"
    },
    {
      "POSTID": 4425,
      "E": "Pazhakulam ",
      "M": "പഴകുളം",
      "PIN": "691523",
      "DID": "3"
    },
    {
      "POSTID": 4426,
      "E": "Peringanad ",
      "M": "പെരിങ്ങനാട്",
      "PIN": "691551",
      "DID": "3"
    },
    {
      "POSTID": 4427,
      "E": "Vadakkadathukavu",
      "M": "വടക്കടത്തുകാവ്",
      "PIN": "691529",
      "DID": "3"
    },
    {
      "POSTID": 4428,
      "E": "Mannady",
      "M": "മണ്ണടി",
      "PIN": "691530",
      "DID": "3"
    },
    {
      "POSTID": 4429,
      "E": "Pulamon",
      "M": "പുലമണ്‍",
      "PIN": "691531",
      "DID": "2"
    },
    {
      "POSTID": 4430,
      "E": "Plappally",
      "M": "പ്ലാപ്പള്ളി",
      "PIN": "691531",
      "DID": "2"
    },
    {
      "POSTID": 4431,
      "E": "Extension Training Centre",
      "M": "എക്സ്റ്റന്‍ഷന്‍ ട്രെയിനിംഗ് സെന്റര്‍ (ഇ റ്റി സി)",
      "PIN": "691531",
      "DID": "2"
    },
    {
      "POSTID": 4432,
      "E": "Karickom",
      "M": "കരിയ്ക്കം",
      "PIN": "691531",
      "DID": "2"
    },
    {
      "POSTID": 4433,
      "E": "Thrikkannamangal",
      "M": "",
      "PIN": "691531",
      "DID": "2"
    },
    {
      "POSTID": 4434,
      "E": "Ambalakara",
      "M": "അമ്പലക്കര",
      "PIN": "691532",
      "DID": "2"
    },
    {
      "POSTID": 4435,
      "E": "Andoor",
      "M": "അണ്ട‍ൂര്‍",
      "PIN": "691532",
      "DID": "2"
    },
    {
      "POSTID": 4436,
      "E": "Valakom",
      "M": "വാളകം",
      "PIN": "691532",
      "DID": "2"
    },
    {
      "POSTID": 4437,
      "E": "Podiyattuvila",
      "M": "പൊടിയാട്ടുവിള",
      "PIN": "691532",
      "DID": "2"
    },
    {
      "POSTID": 4438,
      "E": "Arkannur",
      "M": "അര്‍ക്കന്നൂര്‍",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4439,
      "E": "Manjappara",
      "M": "മഞ്ഞപ്പാറ",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4440,
      "E": "Ayur",
      "M": "ആയൂര്‍",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4441,
      "E": "Vayyanam",
      "M": "വയ്യാനം",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4442,
      "E": "Ozhukuparackal",
      "M": "ഒഴുകുപാറയ്ക്കല്‍",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4443,
      "E": "Cheruvakkal",
      "M": "ചെറുവക്കല്‍",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4444,
      "E": "Thevannur",
      "M": "തേവന്നൂര്‍",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4445,
      "E": "Elampazhannur",
      "M": "ഇളമ്പഴന്നൂര്‍",
      "PIN": "691534",
      "DID": "2"
    },
    {
      "POSTID": 4446,
      "E": "Kuriyod",
      "M": "കുരിയോട്",
      "PIN": "691534",
      "DID": "2"
    },
    {
      "POSTID": 4447,
      "E": "Chadayamangalam",
      "M": "ചടയമംഗലം",
      "PIN": "691534",
      "DID": "2"
    },
    {
      "POSTID": 4448,
      "E": "Poredom",
      "M": "പോരേടം",
      "PIN": "691534",
      "DID": "2"
    },
    {
      "POSTID": 4449,
      "E": "Nilamel",
      "M": "നിലമേല്‍",
      "PIN": "691535",
      "DID": "2"
    },
    {
      "POSTID": 4450,
      "E": "Kaithode",
      "M": "കൈതോട്",
      "PIN": "691535",
      "DID": "2"
    },
    {
      "POSTID": 4451,
      "E": "Pullipara",
      "M": "",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4452,
      "E": "Pulippara Jn",
      "M": "പുലിപ്പാറ",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4453,
      "E": "Pullupana",
      "M": "പുല്ലുപണ",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4454,
      "E": "Mathira",
      "M": "മതിര",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4455,
      "E": "Edathara",
      "M": "ഇടത്തറ",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4456,
      "E": "Vattathamara",
      "M": "വട്ടത്താമര",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4457,
      "E": "Kummil",
      "M": "കുമ്മിള്‍",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4458,
      "E": "Kuttikkadu",
      "M": "കുറ്റിക്കാട്",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4459,
      "E": "Kadakkal",
      "M": "കടയ്ക്കല്‍",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4460,
      "E": "Charipparambu",
      "M": "ചരിപ്പറമ്പ്",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4461,
      "E": "Chanappara",
      "M": "ചാണപ്പാറ",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4462,
      "E": "Venkolla",
      "M": "വേങ്കൊല്ല",
      "PIN": "691541",
      "DID": "1"
    },
    {
      "POSTID": 4463,
      "E": "Thudayannur",
      "M": "തുടയന്നൂര്‍",
      "PIN": "691536",
      "DID": "2"
    },
    {
      "POSTID": 4464,
      "E": "Pooyapally",
      "M": "പൂയപ്പള്ളി",
      "PIN": "691537",
      "DID": "2"
    },
    {
      "POSTID": 4465,
      "E": "Miyannur",
      "M": "മീയണ്ണൂര്‍",
      "PIN": "691537",
      "DID": "2"
    },
    {
      "POSTID": 4466,
      "E": "Kattadi Jn",
      "M": "കാറ്റാടി ജംഗ്ഷന്‍",
      "PIN": "691537",
      "DID": "2"
    },
    {
      "POSTID": 4467,
      "E": "Nettayam",
      "M": "നെട്ടയം",
      "PIN": "695013",
      "DID": "1"
    },
    {
      "POSTID": 4468,
      "E": "Mailode",
      "M": "മൈലോട്",
      "PIN": "691537",
      "DID": "2"
    },
    {
      "POSTID": 4469,
      "E": "Vettikavala",
      "M": "വെട്ടിക്കവല",
      "PIN": "691538",
      "DID": "2"
    },
    {
      "POSTID": 4470,
      "E": "Kokkad",
      "M": "കോക്കാട്",
      "PIN": "691538",
      "DID": "2"
    },
    {
      "POSTID": 4471,
      "E": "Elamadu",
      "M": "ഇളമാട്",
      "PIN": "691533",
      "DID": "2"
    },
    {
      "POSTID": 4472,
      "E": "Ilamadu",
      "M": "",
      "PIN": "691539",
      "DID": "2"
    },
    {
      "POSTID": 4473,
      "E": "Veliyam",
      "M": "വെളിയം",
      "PIN": "691540",
      "DID": "2"
    },
    {
      "POSTID": 4474,
      "E": "Veliyam West",
      "M": "വെളിയം വെസ്റ്റ്",
      "PIN": "691540",
      "DID": "2"
    },
    {
      "POSTID": 4475,
      "E": "Madathara",
      "M": "മടത്തറ",
      "PIN": "691541",
      "DID": "1"
    },
    {
      "POSTID": 4476,
      "E": "Kollayil",
      "M": "കൊല്ലയില്‍",
      "PIN": "691541",
      "DID": "1"
    },
    {
      "POSTID": 4477,
      "E": "Kizhakketheruvu Jn.",
      "M": "കിഴക്കേതെരുവ്",
      "PIN": "691542",
      "DID": "2"
    },
    {
      "POSTID": 4478,
      "E": "Kaithacode",
      "M": "കൈതക്കോട്",
      "PIN": "691543",
      "DID": "2"
    },
    {
      "POSTID": 4479,
      "E": "Panaveli",
      "M": "പനവേലി",
      "PIN": "691544",
      "DID": "2"
    },
    {
      "POSTID": 4480,
      "E": "Perumannur",
      "M": "പെരുമണ്ണൂര്‍",
      "PIN": "691545",
      "DID": "2"
    },
    {
      "POSTID": 4481,
      "E": "Thalachira ",
      "M": "തലച്ചിറ",
      "PIN": "691538",
      "DID": "2"
    },
    {
      "POSTID": 4482,
      "E": "Ummannoor ",
      "M": "ഉമ്മന്നൂര്‍",
      "PIN": "691520",
      "DID": "2"
    },
    {
      "POSTID": 4483,
      "E": "Vayakkal ",
      "M": "വയയ്ക്കല്‍",
      "PIN": "691532",
      "DID": "2"
    },
    {
      "POSTID": 4484,
      "E": "Sadanandapuram ",
      "M": "സദാനന്ദപുരം",
      "PIN": "691531",
      "DID": "2"
    },
    {
      "POSTID": 4485,
      "E": "Parakootom",
      "M": "പാറക്കൂട്ടം",
      "PIN": "691551",
      "DID": "3"
    },
    {
      "POSTID": 4486,
      "E": "Manakala",
      "M": "മണക്കാല",
      "PIN": "691551",
      "DID": "3"
    },
    {
      "POSTID": 4487,
      "E": "Choorakode",
      "M": "ചൂരക്കോട്",
      "PIN": "691551",
      "DID": "3"
    },
    {
      "POSTID": 4488,
      "E": "Nellimukal",
      "M": "നെല്ലിമുകള്‍",
      "PIN": "691551",
      "DID": "3"
    },
    {
      "POSTID": 4489,
      "E": "Edakkad",
      "M": "ഇടയ്ക്കാട്",
      "PIN": "691552",
      "DID": "2"
    },
    {
      "POSTID": 4490,
      "E": "Kadambanad",
      "M": "കടമ്പനാട്",
      "PIN": "691552",
      "DID": "3"
    },
    {
      "POSTID": 4491,
      "E": "Thuvayoor South",
      "M": "തുവയൂര്‍ തെക്ക്",
      "PIN": "691552",
      "DID": "3"
    },
    {
      "POSTID": 4492,
      "E": "Kadambanad South",
      "M": "കടമ്പനാട്  സൗത്ത്",
      "PIN": "691553",
      "DID": "3"
    },
    {
      "POSTID": 4493,
      "E": "Parakode",
      "M": "പറക്കോട്",
      "PIN": "691554",
      "DID": "3"
    },
    {
      "POSTID": 4494,
      "E": "Puthumala",
      "M": "പുതുമല",
      "PIN": "691554",
      "DID": "3"
    },
    {
      "POSTID": 4495,
      "E": "Vayala Parakode",
      "M": "വയല പറക്കോട്",
      "PIN": "691558",
      "DID": "3"
    },
    {
      "POSTID": 4496,
      "E": "Theppupara",
      "M": "തേപ്പുപാറ",
      "PIN": "691554",
      "DID": "3"
    },
    {
      "POSTID": 4497,
      "E": "Angadical South",
      "M": "അങ്ങാടിക്കല്‍ സൗത്ത്",
      "PIN": "691555",
      "DID": "3"
    },
    {
      "POSTID": 4498,
      "E": "Edathitta",
      "M": "ഇടത്തിട്ട",
      "PIN": "691555",
      "DID": "3"
    },
    {
      "POSTID": 4499,
      "E": "Kodumon",
      "M": "കൊടുമണ്‍ ",
      "PIN": "691555",
      "DID": "3"
    },
    {
      "POSTID": 4500,
      "E": "Kodumon East",
      "M": "കൊടുമണ്‍ ഈസ്റ്റ്",
      "PIN": "691555",
      "DID": "3"
    },
    {
      "POSTID": 4501,
      "E": "Chayalode",
      "M": "ചായലോട്",
      "PIN": "691556",
      "DID": "3"
    },
    {
      "POSTID": 4502,
      "E": "Nedumon",
      "M": "നെടുമണ്‍",
      "PIN": "691556",
      "DID": "3"
    },
    {
      "POSTID": 4503,
      "E": "Chelikuzhi",
      "M": "ചെളിക്കുഴി",
      "PIN": "691556",
      "DID": "2"
    },
    {
      "POSTID": 4504,
      "E": "Kura",
      "M": "കുര",
      "PIN": "691557",
      "DID": "2"
    },
    {
      "POSTID": 4505,
      "E": "Chengamanad Jn",
      "M": "ചെങ്ങമനാട്",
      "PIN": "691557",
      "DID": "2"
    },
    {
      "POSTID": 4506,
      "E": "Mancode-Kadakkal",
      "M": "മാങ്കോട്-ചിതറ",
      "PIN": "691559",
      "DID": "2"
    },
    {
      "POSTID": 4507,
      "E": "Ayirakuzhy",
      "M": "അയിരക്കുഴി",
      "PIN": "691559",
      "DID": "2"
    },
    {
      "POSTID": 4508,
      "E": "Valavupacha",
      "M": "വളവുപച്ച",
      "PIN": "691559",
      "DID": "2"
    },
    {
      "POSTID": 4509,
      "E": "Chithara",
      "M": "ചിതറ",
      "PIN": "691559",
      "DID": "2"
    },
    {
      "POSTID": 4510,
      "E": "Kalayapuram",
      "M": "കലയപുരം",
      "PIN": "691560",
      "DID": "2"
    },
    {
      "POSTID": 4511,
      "E": "Mailom",
      "M": "മൈലം",
      "PIN": "691560",
      "DID": "2"
    },
    {
      "POSTID": 4512,
      "E": "Thamarakudi",
      "M": "താമരക്കുടി",
      "PIN": "691560",
      "DID": "2"
    },
    {
      "POSTID": 4513,
      "E": "Pallikal",
      "M": "പള്ളിക്കല്‍",
      "PIN": "691566",
      "DID": "2"
    },
    {
      "POSTID": 4514,
      "E": "Perumkulam",
      "M": "പെരുംകുളം",
      "PIN": "691566",
      "DID": "2"
    },
    {
      "POSTID": 4515,
      "E": "Kottiyam",
      "M": "കൊട്ടിയം",
      "PIN": "691571",
      "DID": "2"
    },
    {
      "POSTID": 4516,
      "E": "Mylakad",
      "M": "മൈലക്കാട്",
      "PIN": "691571",
      "DID": "2"
    },
    {
      "POSTID": 4517,
      "E": "Chathannur",
      "M": "ചാത്തന്നൂര്‍",
      "PIN": "691572",
      "DID": "2"
    },
    {
      "POSTID": 4518,
      "E": "Adichanallur",
      "M": "ആദിച്ചനല്ലൂര്‍",
      "PIN": "691573",
      "DID": "2"
    },
    {
      "POSTID": 4519,
      "E": "Kummallur",
      "M": "കുമ്മല്ലൂര്‍",
      "PIN": "691573",
      "DID": "2"
    },
    {
      "POSTID": 4520,
      "E": "Velichikala",
      "M": "വെളിച്ചിക്കാല",
      "PIN": "691573",
      "DID": "2"
    },
    {
      "POSTID": 4521,
      "E": "Parippally",
      "M": "പാരിപ്പള്ളി",
      "PIN": "691574",
      "DID": "1"
    },
    {
      "POSTID": 4522,
      "E": "Kizhakkanela",
      "M": "കിഴക്കനേല",
      "PIN": "691574",
      "DID": "1"
    },
    {
      "POSTID": 4523,
      "E": "Velamanur",
      "M": "വേളമാനൂര്‍",
      "PIN": "691574",
      "DID": "2"
    },
    {
      "POSTID": 4524,
      "E": "Pallimon",
      "M": "പള്ളിമണ്‍",
      "PIN": "691576",
      "DID": "2"
    },
    {
      "POSTID": 4525,
      "E": "Kannanallur",
      "M": "കണ്ണനല്ലൂര്‍",
      "PIN": "691576",
      "DID": "2"
    },
    {
      "POSTID": 4526,
      "E": "Mukhathala",
      "M": "മുഖത്തല",
      "PIN": "691577",
      "DID": "2"
    },
    {
      "POSTID": 4527,
      "E": "Alummoodu",
      "M": "ആലുംമൂട്",
      "PIN": "691577",
      "DID": "2"
    },
    {
      "POSTID": 4528,
      "E": "Decent Jn",
      "M": "ഡീസന്റ് ജംഗ്ഷന്‍",
      "PIN": "691577",
      "DID": "2"
    },
    {
      "POSTID": 4529,
      "E": "Vilavoorkonam",
      "M": "വിളവൂര്‍ക്കോണം",
      "PIN": "691578",
      "DID": "2"
    },
    {
      "POSTID": 4530,
      "E": "Kalluvathukkal",
      "M": "കല്ലുവാതുക്കല്‍",
      "PIN": "691578",
      "DID": "2"
    },
    {
      "POSTID": 4531,
      "E": "Chirakkara",
      "M": "ചിറക്കര",
      "PIN": "691578",
      "DID": "2"
    },
    {
      "POSTID": 4532,
      "E": "Chirakkera Thazham",
      "M": "ചിറക്കരത്താഴം",
      "PIN": "691578",
      "DID": "2"
    },
    {
      "POSTID": 4533,
      "E": "Aduthala",
      "M": "അടുതല",
      "PIN": "691579",
      "DID": "2"
    },
    {
      "POSTID": 4534,
      "E": "Edanad",
      "M": "ഇടനാട്",
      "PIN": "691579",
      "DID": "2"
    },
    {
      "POSTID": 4535,
      "E": "Karamcode",
      "M": "കാരംകോട്",
      "PIN": "691579",
      "DID": "2"
    },
    {
      "POSTID": 4536,
      "E": "Nedumpana",
      "M": "നെടുമ്പന",
      "PIN": "691576",
      "DID": "2"
    },
    {
      "POSTID": 4537,
      "E": "Sakthikulangara",
      "M": "ശക്തികുളങ്ങര",
      "PIN": "691581",
      "DID": "2"
    },
    {
      "POSTID": 4538,
      "E": "Neendakara",
      "M": "നീണ്ടകര",
      "PIN": "691582",
      "DID": "2"
    },
    {
      "POSTID": 4539,
      "E": "Panmana",
      "M": "പന്‍മന ",
      "PIN": "691583",
      "DID": "2"
    },
    {
      "POSTID": 4540,
      "E": "Edapallicotta",
      "M": "ഇടപ്പള്ളിക്കോട്ട",
      "PIN": "691583",
      "DID": "2"
    },
    {
      "POSTID": 4541,
      "E": "Chavara",
      "M": "ചവറ",
      "PIN": "691583",
      "DID": "2"
    },
    {
      "POSTID": 4542,
      "E": "Chavara Bridge",
      "M": "ചവറ ബ്രിഡ്ജ്",
      "PIN": "691583",
      "DID": "2"
    },
    {
      "POSTID": 4543,
      "E": "Vadakkumbhagam",
      "M": "വടക്കുംഭാഗം",
      "PIN": "691584",
      "DID": "2"
    },
    {
      "POSTID": 4544,
      "E": "Chavara South",
      "M": "ചവറ സൗത്ത്",
      "PIN": "691584",
      "DID": "2"
    },
    {
      "POSTID": 4545,
      "E": "Pudukkadukara",
      "M": "പുതുക്കാട്ടുകര",
      "PIN": "691585",
      "DID": "2"
    },
    {
      "POSTID": 4546,
      "E": "Mukundapuram",
      "M": "മുകുന്ദപുരം",
      "PIN": "691585",
      "DID": "2"
    },
    {
      "POSTID": 4547,
      "E": "Panmana Puthenchantha",
      "M": "പന്‍മന പുത്തന്‍ചന്ത",
      "PIN": "691583",
      "DID": "2"
    },
    {
      "POSTID": 4548,
      "E": "Puthenthura",
      "M": "പുത്തന്‍തുറ",
      "PIN": "691582",
      "DID": "2"
    },
    {
      "POSTID": 4549,
      "E": "Umayanallur Ind Estate",
      "M": "ഉമയനല്ലൂര്‍ എസ്റ്റേറ്റ്",
      "PIN": "691589",
      "DID": "2"
    },
    {
      "POSTID": 4550,
      "E": "Koivila",
      "M": "കോയിവിള",
      "PIN": "691590",
      "DID": "2"
    },
    {
      "POSTID": 4551,
      "E": "Panayam",
      "M": "പനയം",
      "PIN": "691601",
      "DID": "2"
    },
    {
      "POSTID": 4552,
      "E": "Pattom Thuruthu",
      "M": "പട്ടംതുരുത്ത്",
      "PIN": "691601",
      "DID": "2"
    },
    {
      "POSTID": 4553,
      "E": "Mathilil",
      "M": "മതിലില്‍",
      "PIN": "691601",
      "DID": "2"
    },
    {
      "POSTID": 4554,
      "E": "Inchavila",
      "M": "ഇഞ്ചവിള",
      "PIN": "691601",
      "DID": "2"
    },
    {
      "POSTID": 4555,
      "E": "Perinad",
      "M": "പെരിനാട്",
      "PIN": "691601",
      "DID": "2"
    },
    {
      "POSTID": 4556,
      "E": "Perumon",
      "M": "പെരുമണ്‍",
      "PIN": "691601",
      "DID": "2"
    },
    {
      "POSTID": 4557,
      "E": "Prakulam",
      "M": "പ്രാക്കുളം",
      "PIN": "691602",
      "DID": "2"
    },
    {
      "POSTID": 4558,
      "E": "Ashtamudi",
      "M": "അഷ്ടമുടി",
      "PIN": "691602",
      "DID": "2"
    },
    {
      "POSTID": 4559,
      "E": "Kanjaveli",
      "M": "കാഞ്ഞാവെളി",
      "PIN": "691602",
      "DID": "2"
    },
    {
      "POSTID": 4560,
      "E": "Chemmakkad",
      "M": "ചെമ്മക്കാട്",
      "PIN": "691603",
      "DID": "2"
    },
    {
      "POSTID": 4561,
      "E": "Kureepuzha",
      "M": "കുരീപ്പുഴ",
      "PIN": "691604",
      "DID": "2"
    },
    {
      "POSTID": 4562,
      "E": "Nellikunnam ",
      "M": "നെല്ലിക്കുന്നം",
      "PIN": "691527",
      "DID": "2"
    },
    {
      "POSTID": 4563,
      "E": "Pavithreswaram",
      "M": "പവിത്രേശ്വരം",
      "PIN": "691507",
      "DID": "2"
    },
    {
      "POSTID": 4564,
      "E": "Pidavoor",
      "M": "പിടവൂര്‍",
      "PIN": "689695",
      "DID": "2"
    },
    {
      "POSTID": 4565,
      "E": "Thiruvananthapuram G.P.O.",
      "M": "തിരുവനന്തപുരം ജി പി ഒ",
      "PIN": "695001",
      "DID": "1"
    },
    {
      "POSTID": 4566,
      "E": "Karamana",
      "M": "കരമന",
      "PIN": "695002",
      "DID": "1"
    },
    {
      "POSTID": 4567,
      "E": "Karumam",
      "M": "കരുമം",
      "PIN": "695002",
      "DID": "1"
    },
    {
      "POSTID": 4568,
      "E": "Nanthancode",
      "M": "",
      "PIN": "695003",
      "DID": "1"
    },
    {
      "POSTID": 4569,
      "E": "Kaudiar",
      "M": "കവടിയാര്‍ ",
      "PIN": "695003",
      "DID": "1"
    },
    {
      "POSTID": 4570,
      "E": "Kaudiar Square",
      "M": "കവടിയാര്‍ സ്ക്വയര്‍",
      "PIN": "695003",
      "DID": "1"
    },
    {
      "POSTID": 4571,
      "E": "Kuravanakonam",
      "M": "കുറവന്‍കോണം",
      "PIN": "695003",
      "DID": "1"
    },
    {
      "POSTID": 4572,
      "E": "Pattom",
      "M": "പട്ടം",
      "PIN": "695004",
      "DID": "1"
    },
    {
      "POSTID": 4573,
      "E": "Pattom Palace",
      "M": "പട്ടം പാലസ്",
      "PIN": "695004",
      "DID": "1"
    },
    {
      "POSTID": 4574,
      "E": "Mahatma Gandhi College",
      "M": "മഹാത്മ ഗാന്ധി കോളേജ്",
      "PIN": "695004",
      "DID": "1"
    },
    {
      "POSTID": 4575,
      "E": "Goureesapattam",
      "M": "ഗൗരീശപട്ടം",
      "PIN": "695004",
      "DID": "1"
    },
    {
      "POSTID": 4576,
      "E": "Ambalamukku",
      "M": "അമ്പലമുക്ക്",
      "PIN": "695005",
      "DID": "1"
    },
    {
      "POSTID": 4577,
      "E": "Oolampara",
      "M": "ഊളമ്പാറ",
      "PIN": "695005",
      "DID": "1"
    },
    {
      "POSTID": 4578,
      "E": "Perurkada",
      "M": "പേരൂര്‍ക്കട",
      "PIN": "695005",
      "DID": "1"
    },
    {
      "POSTID": 4579,
      "E": "Valiavila",
      "M": "വലിയവിള",
      "PIN": "695006",
      "DID": "1"
    },
    {
      "POSTID": 4580,
      "E": "Tirumala",
      "M": "തിരുമല",
      "PIN": "695006",
      "DID": "1"
    },
    {
      "POSTID": 4581,
      "E": "Tvm Beach",
      "M": "തിരുവനന്തപുരം ബീച്ച്",
      "PIN": "695007",
      "DID": "1"
    },
    {
      "POSTID": 4582,
      "E": "Vallakkadavu",
      "M": "വള്ളക്കടവ്",
      "PIN": "695008",
      "DID": "1"
    },
    {
      "POSTID": 4583,
      "E": "Valiathura",
      "M": "വലിയതുറ",
      "PIN": "695008",
      "DID": "1"
    },
    {
      "POSTID": 4584,
      "E": "Perunthanni",
      "M": "",
      "PIN": "695008",
      "DID": "1"
    },
    {
      "POSTID": 4585,
      "E": "Thope",
      "M": "തോപ്പ്",
      "PIN": "695008",
      "DID": "1"
    },
    {
      "POSTID": 4586,
      "E": "Ayiranimuttom",
      "M": "",
      "PIN": "695009",
      "DID": "1"
    },
    {
      "POSTID": 4587,
      "E": "Manacaud",
      "M": "മണക്കാട്",
      "PIN": "695009",
      "DID": "1"
    },
    {
      "POSTID": 4588,
      "E": "TVM R.K Mission",
      "M": "തിരുവനന്തപുരം ആര്‍ കെ മിഷന്‍",
      "PIN": "695010",
      "DID": "1"
    },
    {
      "POSTID": 4589,
      "E": "Sasthamangalam",
      "M": "ശാസ്തമംഗലം",
      "PIN": "695010",
      "DID": "1"
    },
    {
      "POSTID": 4590,
      "E": "Ulloor",
      "M": "ഉള്ളൂര്‍",
      "PIN": "695011",
      "DID": "1"
    },
    {
      "POSTID": 4591,
      "E": "Cheruvikkal",
      "M": "ചെറുവയ്ക്കല്‍",
      "PIN": "695011",
      "DID": "1"
    },
    {
      "POSTID": 4592,
      "E": "Thiruvananthapuram Medical College",
      "M": "തിരുവനന്തപുരം മെഡിക്കല്‍ കോളേജ്",
      "PIN": "695011",
      "DID": "1"
    },
    {
      "POSTID": 4593,
      "E": "Poojapura",
      "M": "പൂജപ്പുര",
      "PIN": "695012",
      "DID": "1"
    },
    {
      "POSTID": 4594,
      "E": "Poojapura Jn.",
      "M": "പൂജപ്പുര ജംഗ്ഷന്‍",
      "PIN": "695012",
      "DID": "1"
    },
    {
      "POSTID": 4595,
      "E": "Thamalam",
      "M": "തമലം",
      "PIN": "695012",
      "DID": "1"
    },
    {
      "POSTID": 4596,
      "E": "Manikanteswaram",
      "M": "മണികണ്ഠേശ്വരം",
      "PIN": "695013",
      "DID": "1"
    },
    {
      "POSTID": 4597,
      "E": "Vattiyoorkavu",
      "M": "വട്ടിയൂര്‍ക്കാവ്",
      "PIN": "695013",
      "DID": "1"
    },
    {
      "POSTID": 4598,
      "E": "Kachani",
      "M": "കാച്ചാണി",
      "PIN": "695013",
      "DID": "1"
    },
    {
      "POSTID": 4599,
      "E": "Kodunganur",
      "M": "കൊടുങ്ങാനൂര്‍",
      "PIN": "695013",
      "DID": "1"
    },
    {
      "POSTID": 4600,
      "E": "Cheriyakonni",
      "M": "ചെറിയകൊണ്ണി",
      "PIN": "695013",
      "DID": "1"
    },
    {
      "POSTID": 4601,
      "E": "Danamukku",
      "M": "",
      "PIN": "695014",
      "DID": "1"
    },
    {
      "POSTID": 4602,
      "E": "Jagathy",
      "M": "ജഗതി",
      "PIN": "695014",
      "DID": "1"
    },
    {
      "POSTID": 4603,
      "E": "Thycaud",
      "M": "തൈക്കാട്",
      "PIN": "695014",
      "DID": "1"
    },
    {
      "POSTID": 4604,
      "E": "Nalanchira",
      "M": "നാലാഞ്ചിറ",
      "PIN": "695015",
      "DID": "1"
    },
    {
      "POSTID": 4605,
      "E": "Mannanthala",
      "M": "മണ്ണന്തല",
      "PIN": "695015",
      "DID": "1"
    },
    {
      "POSTID": 4606,
      "E": "Tvm Engg College",
      "M": "തിരുവനന്തപുരം ഇഞ്ചിനീയറിംഗ് കോളേജ്",
      "PIN": "695016",
      "DID": "1"
    },
    {
      "POSTID": 4607,
      "E": "Sreekariyam",
      "M": "ശ്രീകാര്യം",
      "PIN": "695017",
      "DID": "1"
    },
    {
      "POSTID": 4608,
      "E": "Pappanamcode",
      "M": "പാപ്പനംകോട്",
      "PIN": "695018",
      "DID": "1"
    },
    {
      "POSTID": 4609,
      "E": "Industrial Estate",
      "M": "ഇന്‍ഡസ്ട്രിയല്‍ എസ്റ്റേറ്റ് ",
      "PIN": "695019",
      "DID": "1"
    },
    {
      "POSTID": 4610,
      "E": "Naruvamoodu",
      "M": "നരുവാമൂട്",
      "PIN": "695528",
      "DID": "1"
    },
    {
      "POSTID": 4611,
      "E": "Pallichal",
      "M": "പള്ളിച്ചല്‍",
      "PIN": "695020",
      "DID": "1"
    },
    {
      "POSTID": 4612,
      "E": "Pravachambalam",
      "M": "പ്രാവച്ചമ്പലം",
      "PIN": "695020",
      "DID": "1"
    },
    {
      "POSTID": 4613,
      "E": "Ookode",
      "M": "ഊക്കോട്",
      "PIN": "695020",
      "DID": "1"
    },
    {
      "POSTID": 4614,
      "E": "Nemom",
      "M": "നേമം",
      "PIN": "695020",
      "DID": "1"
    },
    {
      "POSTID": 4615,
      "E": "Valiaveli",
      "M": "വലിയവേളി",
      "PIN": "695021",
      "DID": "1"
    },
    {
      "POSTID": 4616,
      "E": "Titanium",
      "M": "റ്റൈറ്റാനിയം",
      "PIN": "695021",
      "DID": "1"
    },
    {
      "POSTID": 4617,
      "E": "Tvm Isro",
      "M": "തിരുവനന്തപുരം ഐഎസ്ആര്‍ഒ",
      "PIN": "695022",
      "DID": "1"
    },
    {
      "POSTID": 4618,
      "E": "Tvm Fort",
      "M": "തിരുവനന്തപുരം ഫോര്‍ട്ട്",
      "PIN": "695023",
      "DID": "1"
    },
    {
      "POSTID": 4619,
      "E": "Thiruvananthapuram Pettah",
      "M": "തിരുവനന്തപുരം പേട്ട",
      "PIN": "695024",
      "DID": "1"
    },
    {
      "POSTID": 4620,
      "E": "Muttada",
      "M": "മുട്ടട",
      "PIN": "695025",
      "DID": "1"
    },
    {
      "POSTID": 4621,
      "E": "Poonthura",
      "M": "പൂന്തുറ",
      "PIN": "695026",
      "DID": "1"
    },
    {
      "POSTID": 4622,
      "E": "Pachallur",
      "M": "പാച്ചല്ലൂര്‍",
      "PIN": "695027",
      "DID": "1"
    },
    {
      "POSTID": 4623,
      "E": "Thiruvallam",
      "M": "തിരുവല്ലം",
      "PIN": "695027",
      "DID": "1"
    },
    {
      "POSTID": 4624,
      "E": "Pandalakode",
      "M": "പന്തലക്കോട്",
      "PIN": "695028",
      "DID": "1"
    },
    {
      "POSTID": 4625,
      "E": "Vattapara",
      "M": "വട്ടപ്പാറ",
      "PIN": "695028",
      "DID": "1"
    },
    {
      "POSTID": 4626,
      "E": "Venkode",
      "M": "വേങ്കോട്",
      "PIN": "695028",
      "DID": "1"
    },
    {
      "POSTID": 4627,
      "E": "Anayara",
      "M": "ആനയറ",
      "PIN": "695029",
      "DID": "1"
    },
    {
      "POSTID": 4628,
      "E": "Kanjirampara",
      "M": "കാഞ്ഞിരംപാറ",
      "PIN": "695030",
      "DID": "1"
    },
    {
      "POSTID": 4629,
      "E": "Thuruvikkal",
      "M": "തുറുവിക്കല്‍",
      "PIN": "695011",
      "DID": "1"
    },
    {
      "POSTID": 4630,
      "E": "Aramada",
      "M": "ആറാമട",
      "PIN": "695032",
      "DID": "1"
    },
    {
      "POSTID": 4631,
      "E": "Vikas Bhavan",
      "M": "വികാസ് ഭവന്‍",
      "PIN": "695033",
      "DID": "1"
    },
    {
      "POSTID": 4632,
      "E": "Tvm University",
      "M": "തിരുവനന്തപുരം യൂണിവേഴ്സിറ്റി",
      "PIN": "695034",
      "DID": "1"
    },
    {
      "POSTID": 4633,
      "E": "Vanchiyur",
      "M": "വഞ്ചിയൂര്‍",
      "PIN": "695035",
      "DID": "1"
    },
    {
      "POSTID": 4634,
      "E": "Tvm Chalai",
      "M": "തിരുവനന്തപുരം ചാല",
      "PIN": "695036",
      "DID": "1"
    },
    {
      "POSTID": 4635,
      "E": "P T P Nagar",
      "M": "പിറ്റിപി നഗര്‍",
      "PIN": "695038",
      "DID": "1"
    },
    {
      "POSTID": 4636,
      "E": "Tvm Account General Office",
      "M": "തിരുവനന്തപുരം അക്കൗണ്ടന്റ് ജനറല്‍ ഓഫീസ്",
      "PIN": "695039",
      "DID": "1"
    },
    {
      "POSTID": 4637,
      "E": "Kaimanam",
      "M": "കൈമനം",
      "PIN": "695040",
      "DID": "1"
    },
    {
      "POSTID": 4638,
      "E": "Kalliyoor",
      "M": "കല്ലിയൂര്‍",
      "PIN": "695042",
      "DID": "1"
    },
    {
      "POSTID": 4639,
      "E": "Kallayam",
      "M": "കല്ലയം",
      "PIN": "695043",
      "DID": "1"
    },
    {
      "POSTID": 4640,
      "E": "Kudappanakunnu",
      "M": "കുടപ്പനക്കുന്ന്",
      "PIN": "695043",
      "DID": "1"
    },
    {
      "POSTID": 4641,
      "E": "Mukkolakkal",
      "M": "മുക്കോലയ്ക്കല്‍",
      "PIN": "695044",
      "DID": "1"
    },
    {
      "POSTID": 4642,
      "E": "Kerala Governor\\'s Camp",
      "M": "കേരള ഗവര്‍ണേഴ്സ് ക്യാമ്പ്",
      "PIN": "695099",
      "DID": "1"
    },
    {
      "POSTID": 4643,
      "E": "Attingal",
      "M": "ആറ്റിങ്ങല്‍",
      "PIN": "695101",
      "DID": "1"
    },
    {
      "POSTID": 4644,
      "E": "Vilayilmoola",
      "M": "വിളയില്‍മൂല",
      "PIN": "695101",
      "DID": "1"
    },
    {
      "POSTID": 4645,
      "E": "Keezhattingal ",
      "M": "കീഴാറ്റിങ്ങല്‍",
      "PIN": "695306",
      "DID": "1"
    },
    {
      "POSTID": 4646,
      "E": "Altharamoodu",
      "M": "ആല്‍ത്തറമൂട്",
      "PIN": "695102",
      "DID": "1"
    },
    {
      "POSTID": 4647,
      "E": "Alamcode",
      "M": "ആലംകോട്",
      "PIN": "695102",
      "DID": "1"
    },
    {
      "POSTID": 4648,
      "E": "Vanchiyoor",
      "M": "വഞ്ചിയൂര്‍-ആറ്റിങ്ങല്‍",
      "PIN": "695102",
      "DID": "1"
    },
    {
      "POSTID": 4649,
      "E": "Nedumparambu",
      "M": "നെടുമ്പറമ്പ്",
      "PIN": "695102",
      "DID": "1"
    },
    {
      "POSTID": 4650,
      "E": "Perumkulam",
      "M": "പെരുംകുളം",
      "PIN": "695102",
      "DID": "1"
    },
    {
      "POSTID": 4651,
      "E": "Ayilam",
      "M": "അയിലം",
      "PIN": "695103",
      "DID": "1"
    },
    {
      "POSTID": 4652,
      "E": "Avanavancherry",
      "M": "അവനവഞ്ചേരി",
      "PIN": "695103",
      "DID": "1"
    },
    {
      "POSTID": 4653,
      "E": "Mudakkal",
      "M": "മുദാക്കല്‍",
      "PIN": "695103",
      "DID": "1"
    },
    {
      "POSTID": 4654,
      "E": "Ilamba",
      "M": "ഇളമ്പ",
      "PIN": "695103",
      "DID": "1"
    },
    {
      "POSTID": 4655,
      "E": "Poikamukku",
      "M": "പൊയ്കമുക്ക്",
      "PIN": "695103",
      "DID": "1"
    },
    {
      "POSTID": 4656,
      "E": "Parayathukonam.",
      "M": "പറയത്തുകോണം",
      "PIN": "695104",
      "DID": "1"
    },
    {
      "POSTID": 4657,
      "E": "Edakkode",
      "M": "ഇടയ്ക്കോട്",
      "PIN": "695104",
      "DID": "1"
    },
    {
      "POSTID": 4658,
      "E": "Oorupoika",
      "M": "ഊരുപൊയ്ക",
      "PIN": "695104",
      "DID": "1"
    },
    {
      "POSTID": 4659,
      "E": "Kizhuvilam",
      "M": "കിഴുവിലം",
      "PIN": "695104",
      "DID": "1"
    },
    {
      "POSTID": 4660,
      "E": "Kurakada",
      "M": "കുറക്കട",
      "PIN": "695104",
      "DID": "1"
    },
    {
      "POSTID": 4661,
      "E": "Neyyattinkara",
      "M": "നെയ്യാറ്റിന്‍കര",
      "PIN": "695121",
      "DID": "1"
    },
    {
      "POSTID": 4662,
      "E": "Amaravila",
      "M": "അമരവിള",
      "PIN": "695122",
      "DID": "1"
    },
    {
      "POSTID": 4663,
      "E": "Arayur",
      "M": "ആറയൂര്‍",
      "PIN": "695122",
      "DID": "1"
    },
    {
      "POSTID": 4664,
      "E": "Chaikottukonam",
      "M": "ചായ്ക്കോട്ടുകോണം",
      "PIN": "695122",
      "DID": "1"
    },
    {
      "POSTID": 4665,
      "E": "Aralummoodu",
      "M": "ആറാലുമ്മൂട്",
      "PIN": "695123",
      "DID": "1"
    },
    {
      "POSTID": 4666,
      "E": "Venpakal",
      "M": "വെണ്‍പകല്‍",
      "PIN": "695123",
      "DID": "1"
    },
    {
      "POSTID": 4667,
      "E": "Kodungavilla",
      "M": "കൊടങ്ങാവിള",
      "PIN": "695123",
      "DID": "1"
    },
    {
      "POSTID": 4668,
      "E": "Thannimmoodu",
      "M": "താന്നിമൂട്",
      "PIN": "695123",
      "DID": "1"
    },
    {
      "POSTID": 4669,
      "E": "Anavoor",
      "M": "ആനാവൂര്‍",
      "PIN": "695124",
      "DID": "1"
    },
    {
      "POSTID": 4670,
      "E": "Perumkadavila",
      "M": "പെരുങ്കടവിള",
      "PIN": "695124",
      "DID": "1"
    },
    {
      "POSTID": 4671,
      "E": "Kottakkal",
      "M": "കോട്ടയ്ക്കല്‍ തിരുവനന്തപുരം",
      "PIN": "695124",
      "DID": "1"
    },
    {
      "POSTID": 4672,
      "E": "Poozhanad",
      "M": "പൂഴനാട്",
      "PIN": "695125",
      "DID": "1"
    },
    {
      "POSTID": 4673,
      "E": "Manchamcode",
      "M": "മഞ്ചംകോട്",
      "PIN": "695125",
      "DID": "1"
    },
    {
      "POSTID": 4674,
      "E": "Mannamconam",
      "M": "മണ്ണാംകോണം",
      "PIN": "695125",
      "DID": "1"
    },
    {
      "POSTID": 4675,
      "E": "Ottasekharamangalam",
      "M": "ഒറ്റശേഖരമംഗലം",
      "PIN": "695125",
      "DID": "1"
    },
    {
      "POSTID": 4676,
      "E": "Vazhichal",
      "M": "വാഴിച്ചല്‍",
      "PIN": "695125",
      "DID": "1"
    },
    {
      "POSTID": 4677,
      "E": "Dalummugham ",
      "M": "ഡാലുംമുഖം",
      "PIN": "695125",
      "DID": "1"
    },
    {
      "POSTID": 4678,
      "E": "Aruvipuram",
      "M": "അരുവിപ്പുറം",
      "PIN": "695126",
      "DID": "1"
    },
    {
      "POSTID": 4679,
      "E": "Perumpazhuthur",
      "M": "പെരുമ്പഴുതൂര്‍",
      "PIN": "695126",
      "DID": "1"
    },
    {
      "POSTID": 4680,
      "E": "Mariyapuram ",
      "M": "മരിയാപുരം",
      "PIN": "695122",
      "DID": "1"
    },
    {
      "POSTID": 4681,
      "E": "Plamoottukada ",
      "M": "പ്ലാമൂട്ടുകട",
      "PIN": "695122",
      "DID": "1"
    },
    {
      "POSTID": 4682,
      "E": "Keezharoor",
      "M": "കീഴാറൂര്‍",
      "PIN": "695124",
      "DID": "1"
    },
    {
      "POSTID": 4683,
      "E": "Marayamuttom ",
      "M": "മാരായമുട്ടം",
      "PIN": "695124",
      "DID": "1"
    },
    {
      "POSTID": 4684,
      "E": "Vattavila",
      "M": "വട്ടവിള",
      "PIN": "695132",
      "DID": "1"
    },
    {
      "POSTID": 4685,
      "E": "Chenkal",
      "M": "ചെങ്കല്‍",
      "PIN": "695132",
      "DID": "1"
    },
    {
      "POSTID": 4686,
      "E": "Mulluvila",
      "M": "മുള്ളുവിള",
      "PIN": "695133",
      "DID": "1"
    },
    {
      "POSTID": 4687,
      "E": "Olathanni",
      "M": "ഓലത്താന്നി",
      "PIN": "695133",
      "DID": "1"
    },
    {
      "POSTID": 4688,
      "E": "Tirupuram",
      "M": "തിരുപുറം",
      "PIN": "695133",
      "DID": "1"
    },
    {
      "POSTID": 4689,
      "E": "Varkala",
      "M": "വര്‍ക്കല",
      "PIN": "695141",
      "DID": "1"
    },
    {
      "POSTID": 4690,
      "E": "Chilakur",
      "M": "ചിലക്കൂര്‍",
      "PIN": "695141",
      "DID": "1"
    },
    {
      "POSTID": 4691,
      "E": "Janardhanapuram NDBO Varkala",
      "M": "ജനാര്‍ദ്ദനപുരം എന്‍ ഡി ബി ഒ വര്‍ക്കല",
      "PIN": "695141",
      "DID": "1"
    },
    {
      "POSTID": 4692,
      "E": "Cherunniyur",
      "M": "ചെറുന്നിയൂര്‍",
      "PIN": "695142",
      "DID": "1"
    },
    {
      "POSTID": 4693,
      "E": "Palachira",
      "M": "പാലച്ചിറ",
      "PIN": "695143",
      "DID": "1"
    },
    {
      "POSTID": 4694,
      "E": "Vadasserikonam",
      "M": "വടശ്ശേരികോണം",
      "PIN": "695143",
      "DID": "1"
    },
    {
      "POSTID": 4695,
      "E": "Thokkadu",
      "M": "തോക്കാട്",
      "PIN": "695143",
      "DID": "1"
    },
    {
      "POSTID": 4696,
      "E": "Moongode",
      "M": "മൂങ്ങോട്",
      "PIN": "695144",
      "DID": "1"
    },
    {
      "POSTID": 4697,
      "E": "Kavalayur",
      "M": "കവലയൂര്‍",
      "PIN": "695144",
      "DID": "1"
    },
    {
      "POSTID": 4698,
      "E": "Kulamuttom",
      "M": "കുളമുട്ടം",
      "PIN": "695144",
      "DID": "1"
    },
    {
      "POSTID": 4699,
      "E": "Panayara",
      "M": "പനയറ",
      "PIN": "695145",
      "DID": "1"
    },
    {
      "POSTID": 4700,
      "E": "Sreenivasapuram",
      "M": "ശ്രീനിവാസപുരം",
      "PIN": "695145",
      "DID": "1"
    },
    {
      "POSTID": 4701,
      "E": "Muttappalam",
      "M": "മുട്ടപ്പാലം",
      "PIN": "695145",
      "DID": "1"
    },
    {
      "POSTID": 4702,
      "E": "Palayamkunnu",
      "M": "പാളയംകുന്ന്",
      "PIN": "695146",
      "DID": "1"
    },
    {
      "POSTID": 4703,
      "E": "Muthana",
      "M": "മുത്താന",
      "PIN": "695146",
      "DID": "1"
    },
    {
      "POSTID": 4704,
      "E": "Kaniyapuram",
      "M": "കണിയാപുരം",
      "PIN": "695301",
      "DID": "1"
    },
    {
      "POSTID": 4705,
      "E": "Murukkumpuzha",
      "M": "മുരുക്കുംപുഴ",
      "PIN": "695302",
      "DID": "1"
    },
    {
      "POSTID": 4706,
      "E": "Puthenkurichy",
      "M": "പുത്തന്‍കുറിച്ചി",
      "PIN": "695303",
      "DID": "1"
    },
    {
      "POSTID": 4707,
      "E": "Perumathura",
      "M": "പെരുമാതുറ",
      "PIN": "695303",
      "DID": "1"
    },
    {
      "POSTID": 4708,
      "E": "Koonnthallur",
      "M": "കുന്തള്ളൂര്‍",
      "PIN": "695304",
      "DID": "1"
    },
    {
      "POSTID": 4709,
      "E": "Katakam",
      "M": "കടകം",
      "PIN": "695304",
      "DID": "1"
    },
    {
      "POSTID": 4710,
      "E": "Chirayinkeezh",
      "M": "ചിറയിന്‍കീഴ്",
      "PIN": "695304",
      "DID": "1"
    },
    {
      "POSTID": 4711,
      "E": "Azhur Market",
      "M": "അഴൂര്‍ മാര്‍ക്കറ്റ്",
      "PIN": "695305",
      "DID": "1"
    },
    {
      "POSTID": 4712,
      "E": "Sasthavattom",
      "M": "ശാസ്തവട്ടം",
      "PIN": "695305",
      "DID": "1"
    },
    {
      "POSTID": 4713,
      "E": "Perunguzhi",
      "M": "പെരുങ്ങുഴി",
      "PIN": "695305",
      "DID": "1"
    },
    {
      "POSTID": 4714,
      "E": "Nilakkamukku NDBO Kadakkavur",
      "M": "നിലക്കാമുക്ക്",
      "PIN": "695306",
      "DID": "1"
    },
    {
      "POSTID": 4715,
      "E": "Anathalavattom",
      "M": "ആനത്തലവട്ടം",
      "PIN": "695306",
      "DID": "1"
    },
    {
      "POSTID": 4716,
      "E": "Kadakkavur",
      "M": "കടയ്ക്കാവൂര്‍",
      "PIN": "695306",
      "DID": "1"
    },
    {
      "POSTID": 4717,
      "E": "Melkadakkavur",
      "M": "മേല്‍കടയ്ക്കാവൂര്‍",
      "PIN": "695306",
      "DID": "1"
    },
    {
      "POSTID": 4718,
      "E": "Kaikara",
      "M": "കായിക്കര",
      "PIN": "695307",
      "DID": "1"
    },
    {
      "POSTID": 4719,
      "E": "Nedunganda",
      "M": "നെടുങ്ങണ്ട",
      "PIN": "695307",
      "DID": "1"
    },
    {
      "POSTID": 4720,
      "E": "Vakkom",
      "M": "വക്കം",
      "PIN": "695308",
      "DID": "1"
    },
    {
      "POSTID": 4721,
      "E": "Poothura",
      "M": "പൂതുറ",
      "PIN": "695309",
      "DID": "1"
    },
    {
      "POSTID": 4722,
      "E": "Anjengo",
      "M": "അഞ്ചുതെങ്ങ്",
      "PIN": "695309",
      "DID": "1"
    },
    {
      "POSTID": 4723,
      "E": "Ayroor Varkala",
      "M": "അയിരൂര്‍-വര്‍ക്കല",
      "PIN": "695310",
      "DID": "1"
    },
    {
      "POSTID": 4724,
      "E": "Elakamon",
      "M": "ഇലകമണ്‍",
      "PIN": "695310",
      "DID": "1"
    },
    {
      "POSTID": 4725,
      "E": "Elakamon",
      "M": "ഇലകമണ്‍ കിഴക്കേപുറം",
      "PIN": "695310",
      "DID": "1"
    },
    {
      "POSTID": 4726,
      "E": "Hariharapuram",
      "M": "ഹരിഹരപുരം",
      "PIN": "695310",
      "DID": "1"
    },
    {
      "POSTID": 4727,
      "E": "Pullanicode",
      "M": "പുല്ലാനികോട്",
      "PIN": "695311",
      "DID": "1"
    },
    {
      "POSTID": 4728,
      "E": "Edava",
      "M": "ഇടവ",
      "PIN": "695311",
      "DID": "1"
    },
    {
      "POSTID": 4729,
      "E": "Odayam NDBO Edava",
      "M": "ഒടയം",
      "PIN": "695311",
      "DID": "1"
    },
    {
      "POSTID": 4730,
      "E": "Kappil",
      "M": "കാപ്പില്‍",
      "PIN": "695311",
      "DID": "1"
    },
    {
      "POSTID": 4731,
      "E": "Venkulam",
      "M": "വെണ്‍കുളം",
      "PIN": "695311",
      "DID": "1"
    },
    {
      "POSTID": 4732,
      "E": "Vettoor",
      "M": "വെട്ടൂര്‍",
      "PIN": "695312",
      "DID": "1"
    },
    {
      "POSTID": 4733,
      "E": "Melvettoor",
      "M": "മേല്‍വെട്ടൂര്‍",
      "PIN": "695312",
      "DID": "1"
    },
    {
      "POSTID": 4734,
      "E": "Kudavoor",
      "M": "കുടവൂര്‍",
      "PIN": "695313",
      "DID": "1"
    },
    {
      "POSTID": 4735,
      "E": "Mudapuram",
      "M": "മുടപുരം",
      "PIN": "695304",
      "DID": "1"
    },
    {
      "POSTID": 4736,
      "E": "Channamkara",
      "M": "ചാന്നാങ്കര",
      "PIN": "695301",
      "DID": "1"
    },
    {
      "POSTID": 4737,
      "E": "Pallipuram Tvm",
      "M": "പള്ളിപ്പുറം ",
      "PIN": "695316",
      "DID": "1"
    },
    {
      "POSTID": 4738,
      "E": "Thonnakkal",
      "M": "തോന്നയ്ക്കല്‍",
      "PIN": "695317",
      "DID": "1"
    },
    {
      "POSTID": 4739,
      "E": "Vennicode",
      "M": "വെന്നിക്കോട്",
      "PIN": "695318",
      "DID": "1"
    },
    {
      "POSTID": 4740,
      "E": "Payattuvila",
      "M": "പയറ്റുവിള",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4741,
      "E": "Balaramapuram",
      "M": "ബാലരാമപുരം",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4742,
      "E": "Bhagavathinada",
      "M": "ഭഗവതിനട",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4743,
      "E": "Russelpuram",
      "M": "റസ്സല്‍പുരം",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4744,
      "E": "Vedivechancoil",
      "M": "വെടിവെച്ചാന്‍കോവില്‍",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4745,
      "E": "Chowara Trivandrum",
      "M": "ചൊവ്വര",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4746,
      "E": "Kottukal",
      "M": "കോട്ടുകാല്‍",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4747,
      "E": "Parassala",
      "M": "പാറശ്ശാല",
      "PIN": "695502",
      "DID": "1"
    },
    {
      "POSTID": 4748,
      "E": "Ayira",
      "M": "അയിര",
      "PIN": "695502",
      "DID": "1"
    },
    {
      "POSTID": 4749,
      "E": "Dhanuvachapuram",
      "M": "ധനുവച്ചപുരം",
      "PIN": "695503",
      "DID": "1"
    },
    {
      "POSTID": 4750,
      "E": "Manchavilakom",
      "M": "മഞ്ചവിളാകം",
      "PIN": "695503",
      "DID": "1"
    },
    {
      "POSTID": 4751,
      "E": "Elluvila",
      "M": "എള്ളുവിള",
      "PIN": "695504",
      "DID": "1"
    },
    {
      "POSTID": 4752,
      "E": "Karakonam",
      "M": "കാരക്കോണം",
      "PIN": "695504",
      "DID": "1"
    },
    {
      "POSTID": 4753,
      "E": "Kunnathukal",
      "M": "കുന്നത്തുകാല്‍",
      "PIN": "695504",
      "DID": "1"
    },
    {
      "POSTID": 4754,
      "E": "Cheriakolla",
      "M": "ചെറിയകൊല്ല",
      "PIN": "695504",
      "DID": "1"
    },
    {
      "POSTID": 4755,
      "E": "Panachamoodu",
      "M": "പനച്ചമൂട്",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4756,
      "E": "Amboori",
      "M": "അമ്പൂരി",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4757,
      "E": "Mayam",
      "M": "മായം",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4758,
      "E": "Manali",
      "M": "മണലി",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4759,
      "E": "Karikuzhi",
      "M": "കാരിക്കുഴി",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4760,
      "E": "Kuttamala",
      "M": "കുട്ടമല",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4761,
      "E": "Kudayal",
      "M": "കുടയല്‍",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4762,
      "E": "Koothali ",
      "M": "കൂതാളി ",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4763,
      "E": "Vellarada",
      "M": "വെള്ളറട",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4764,
      "E": "Thekkupara",
      "M": "തേക്കുപ്പാറ",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4765,
      "E": "Uchakada",
      "M": "ഉച്ചക്കട",
      "PIN": "695506",
      "DID": "1"
    },
    {
      "POSTID": 4766,
      "E": "Kakkavila",
      "M": "കാക്കവിള",
      "PIN": "695506",
      "DID": "1"
    },
    {
      "POSTID": 4767,
      "E": "Karode",
      "M": "കാരോട്",
      "PIN": "695506",
      "DID": "1"
    },
    {
      "POSTID": 4768,
      "E": "Venkadambu",
      "M": "വെങ്കടമ്പ്",
      "PIN": "695506",
      "DID": "1"
    },
    {
      "POSTID": 4769,
      "E": "Ooruttambalam",
      "M": "ഊരൂട്ടമ്പലം",
      "PIN": "695507",
      "DID": "1"
    },
    {
      "POSTID": 4770,
      "E": "Parasuvaikal",
      "M": "പരശുവയ്ക്കല്‍",
      "PIN": "695508",
      "DID": "1"
    },
    {
      "POSTID": 4771,
      "E": "Kattachalkuzhy",
      "M": "കട്ടച്ചല്‍ക്കുഴി",
      "PIN": "695501",
      "DID": "1"
    },
    {
      "POSTID": 4772,
      "E": "Kudappanamoodu",
      "M": "കുടപ്പനമൂട്",
      "PIN": "695505",
      "DID": "1"
    },
    {
      "POSTID": 4773,
      "E": "Kandala",
      "M": "കണ്ടല",
      "PIN": "695512",
      "DID": "1"
    },
    {
      "POSTID": 4774,
      "E": "Kuvalassery",
      "M": "കൂവളശ്ശേരി",
      "PIN": "695512",
      "DID": "1"
    },
    {
      "POSTID": 4775,
      "E": "Veliamcode",
      "M": "വെളിയംകോട്",
      "PIN": "695512",
      "DID": "1"
    },
    {
      "POSTID": 4776,
      "E": "Pozhiyur",
      "M": "പൊഴിയൂര്‍",
      "PIN": "695513",
      "DID": "1"
    },
    {
      "POSTID": 4777,
      "E": "Mullur",
      "M": "മുല്ലൂര്‍",
      "PIN": "695521",
      "DID": "1"
    },
    {
      "POSTID": 4778,
      "E": "Vizhinjam",
      "M": "വിഴിഞ്ഞം",
      "PIN": "695521",
      "DID": "1"
    },
    {
      "POSTID": 4779,
      "E": "Kottapuram",
      "M": "കോട്ടപ്പുറം",
      "PIN": "695521",
      "DID": "1"
    },
    {
      "POSTID": 4780,
      "E": "Vellayani",
      "M": "വെള്ളായണി",
      "PIN": "695522",
      "DID": "1"
    },
    {
      "POSTID": 4781,
      "E": "Muttakadu",
      "M": "മുട്ടയ്ക്കാട്",
      "PIN": "695523",
      "DID": "1"
    },
    {
      "POSTID": 4782,
      "E": "Kidarakuzhi",
      "M": "കിടാരക്കുഴി",
      "PIN": "695523",
      "DID": "1"
    },
    {
      "POSTID": 4783,
      "E": "Nellivila",
      "M": "നെല്ലിവിള",
      "PIN": "695523",
      "DID": "1"
    },
    {
      "POSTID": 4784,
      "E": "Venganoor",
      "M": "വെങ്ങാനൂര്‍",
      "PIN": "695523",
      "DID": "1"
    },
    {
      "POSTID": 4785,
      "E": "Kanjiramkulam",
      "M": "കാഞ്ഞിരംകുളം",
      "PIN": "695524",
      "DID": "1"
    },
    {
      "POSTID": 4786,
      "E": "Nellimoodu",
      "M": "നെല്ലിമൂട്",
      "PIN": "695524",
      "DID": "1"
    },
    {
      "POSTID": 4787,
      "E": "Puvar",
      "M": "പൂവാര്‍",
      "PIN": "695525",
      "DID": "1"
    },
    {
      "POSTID": 4788,
      "E": "Arumanur",
      "M": "അരുമാനൂര്‍",
      "PIN": "695525",
      "DID": "1"
    },
    {
      "POSTID": 4789,
      "E": "Kanjampazhanji",
      "M": "കഞ്ചാംപഴഞ്ഞി",
      "PIN": "695525",
      "DID": "1"
    },
    {
      "POSTID": 4790,
      "E": "Puthiyathura",
      "M": "പുതിയതുറ",
      "PIN": "695526",
      "DID": "1"
    },
    {
      "POSTID": 4791,
      "E": "Lourdupuram",
      "M": "ലൂര്‍ദുപുരം",
      "PIN": "695526",
      "DID": "1"
    },
    {
      "POSTID": 4792,
      "E": "Kazhavur",
      "M": "കഴവൂര്‍",
      "PIN": "695526",
      "DID": "1"
    },
    {
      "POSTID": 4793,
      "E": "Kovalam",
      "M": "കോവളം",
      "PIN": "695527",
      "DID": "1"
    },
    {
      "POSTID": 4794,
      "E": "Kovalam Beech",
      "M": "കോവളം ബീച്ച്",
      "PIN": "695527",
      "DID": "1"
    },
    {
      "POSTID": 4795,
      "E": "Paruthikuzhy",
      "M": "പരുത്തിക്കുഴി",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4796,
      "E": "Puthukulangara",
      "M": "പുതുക്കുളങ്ങര",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4797,
      "E": "Mancha",
      "M": "മഞ്ച",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4798,
      "E": "Mannoorkonam",
      "M": "മന്നൂര്‍കോണം",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4799,
      "E": "Karipur",
      "M": "കരിപ്പൂര്",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4800,
      "E": "Chullimanur",
      "M": "ചുള്ളിമാനൂര്‍",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4801,
      "E": "Nedumangad",
      "M": "നെടുമങ്ങാട്",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4802,
      "E": "Tholicode",
      "M": "തൊളിക്കോട്",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4803,
      "E": "Perumala",
      "M": "",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4804,
      "E": "Panacode",
      "M": "പനയ്ക്കോട്",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4805,
      "E": "Parandode",
      "M": "പറണ്ടോട്",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4806,
      "E": "Marangad",
      "M": "മരങ്ങാട്",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4807,
      "E": "Meenankal",
      "M": "മീനാങ്കല്‍",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4808,
      "E": "Aryanad",
      "M": "ആര്യനാട്",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4809,
      "E": "Vinobanikethan",
      "M": "വിനോബാനികേതന്‍",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4810,
      "E": "Kulappada",
      "M": "കുളപ്പട",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4811,
      "E": "Changa",
      "M": "ചാങ്ങ",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4812,
      "E": "Kokottella",
      "M": "കൊക്കോട്ടേല",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4813,
      "E": "Kottakkakom",
      "M": "കോട്ടയ്ക്കകം",
      "PIN": "695542",
      "DID": "1"
    },
    {
      "POSTID": 4814,
      "E": "Mithranikethan",
      "M": "മിത്രനികേതന്‍",
      "PIN": "695543",
      "DID": "1"
    },
    {
      "POSTID": 4815,
      "E": "Mulayara",
      "M": "മുളയറ",
      "PIN": "695543",
      "DID": "1"
    },
    {
      "POSTID": 4816,
      "E": "Mundela",
      "M": "മുണ്ടേല",
      "PIN": "695543",
      "DID": "1"
    },
    {
      "POSTID": 4817,
      "E": "Uriakode",
      "M": "ഉറിയാക്കോട്",
      "PIN": "695543",
      "DID": "1"
    },
    {
      "POSTID": 4818,
      "E": "Kuthirakalam",
      "M": "കുതിരകളം",
      "PIN": "695543",
      "DID": "1"
    },
    {
      "POSTID": 4819,
      "E": "Vellanad",
      "M": "വെള്ളനാട്",
      "PIN": "695543",
      "DID": "1"
    },
    {
      "POSTID": 4820,
      "E": "Veliyannur",
      "M": "വെളിയന്നൂര്‍",
      "PIN": "695543",
      "DID": "1"
    },
    {
      "POSTID": 4821,
      "E": "Anad ",
      "M": "ആനാട്",
      "PIN": "695541",
      "DID": "1"
    },
    {
      "POSTID": 4822,
      "E": "Valiamala PSLV Project",
      "M": "വലിയമല",
      "PIN": "695547",
      "DID": "1"
    },
    {
      "POSTID": 4823,
      "E": "Parappara",
      "M": "പരപ്പാറ",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4824,
      "E": "Maruthamala",
      "M": "മരുതാമല",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4825,
      "E": "Anappara",
      "M": "ആനപ്പാറ",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4826,
      "E": "Vithura",
      "M": "വിതുര",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4827,
      "E": "Kallar Tvm",
      "M": "കല്ലാര്‍ തിരുവനന്തപുരം",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4828,
      "E": "Ponmudi",
      "M": "പൊന്‍മുടി",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4829,
      "E": "Chetachal",
      "M": "ചെറ്റച്ചല്‍",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4830,
      "E": "Peppara Dam",
      "M": "പേപ്പാറ ഡാം",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4831,
      "E": "Bonaccord",
      "M": "ബോണക്കാട്",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4832,
      "E": "Memala",
      "M": "മേമല",
      "PIN": "695551",
      "DID": "1"
    },
    {
      "POSTID": 4833,
      "E": "Panayamuttom",
      "M": "പനയമുട്ടം",
      "PIN": "695561",
      "DID": "1"
    },
    {
      "POSTID": 4834,
      "E": "Pazhakutty",
      "M": "പഴകുറ്റി",
      "PIN": "695561",
      "DID": "1"
    },
    {
      "POSTID": 4835,
      "E": "Irinchayam",
      "M": "ഇരിഞ്ചയം",
      "PIN": "695561",
      "DID": "1"
    },
    {
      "POSTID": 4836,
      "E": "Pacha",
      "M": "പച്ച",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4837,
      "E": "Paluvally",
      "M": "പാലുവള്ളി",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4838,
      "E": "Panayam",
      "M": "പാണയം",
      "PIN": "695568",
      "DID": "1"
    },
    {
      "POSTID": 4839,
      "E": "Meenmutty",
      "M": "മീന്‍മുട്ടി",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4840,
      "E": "Elavattom",
      "M": "ഇളവട്ടം",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4841,
      "E": "Ex-Servicemen\\'s Colony",
      "M": "എക്സ് സര്‍വ്വീസ് മെന്‍സ് കോളനി",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4842,
      "E": "Vattakarikkakom",
      "M": "വട്ടക്കരിക്കകം",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4843,
      "E": "Karimancode",
      "M": "കരിമണ്‍കോട്",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4844,
      "E": "Perayam",
      "M": "പേരയം",
      "PIN": "695562",
      "DID": "1"
    },
    {
      "POSTID": 4845,
      "E": "Panangod",
      "M": "പനങ്ങോട്",
      "PIN": "695563",
      "DID": "1"
    },
    {
      "POSTID": 4846,
      "E": "Ilanchiyam",
      "M": "ഇലഞ്ചിയം",
      "PIN": "695563",
      "DID": "1"
    },
    {
      "POSTID": 4847,
      "E": "Idinjar",
      "M": "ഇടിഞ്ഞാര്‍",
      "PIN": "695563",
      "DID": "1"
    },
    {
      "POSTID": 4848,
      "E": "Peringamala",
      "M": "പെരിങ്ങമ്മല",
      "PIN": "695563",
      "DID": "1"
    },
    {
      "POSTID": 4849,
      "E": "Daivapura",
      "M": "ദൈവപ്പുര",
      "PIN": "695563",
      "DID": "1"
    },
    {
      "POSTID": 4850,
      "E": "Thennur",
      "M": "തെന്നൂര്‍",
      "PIN": "695563",
      "DID": "1"
    },
    {
      "POSTID": 4851,
      "E": "Aruvikara",
      "M": "അരുവിക്കര",
      "PIN": "695564",
      "DID": "1"
    },
    {
      "POSTID": 4852,
      "E": "Karakulam",
      "M": "കരകുളം",
      "PIN": "695564",
      "DID": "1"
    },
    {
      "POSTID": 4853,
      "E": "Chekkakonam",
      "M": "ചെക്കക്കോണം",
      "PIN": "695564",
      "DID": "1"
    },
    {
      "POSTID": 4854,
      "E": "Panavoor",
      "M": "പനവൂര്‍",
      "PIN": "695568",
      "DID": "1"
    },
    {
      "POSTID": 4855,
      "E": "Koonanvenga",
      "M": "കൂനന്‍വേങ്ങ",
      "PIN": "695568",
      "DID": "1"
    },
    {
      "POSTID": 4856,
      "E": "Malayinkeezh",
      "M": "മലയിന്‍കീഴ്",
      "PIN": "695571",
      "DID": "1"
    },
    {
      "POSTID": 4857,
      "E": "Malayam",
      "M": "മലയം",
      "PIN": "695571",
      "DID": "1"
    },
    {
      "POSTID": 4858,
      "E": "Machel",
      "M": "മച്ചേല്‍",
      "PIN": "695571",
      "DID": "1"
    },
    {
      "POSTID": 4859,
      "E": "Kollode",
      "M": "കൊല്ലോട്",
      "PIN": "695571",
      "DID": "1"
    },
    {
      "POSTID": 4860,
      "E": "Pantha",
      "M": "പന്ത",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4861,
      "E": "Ambalathumkala",
      "M": "അമ്പലത്തിന്‍കാല",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4862,
      "E": "Amachal",
      "M": "ആമച്ചല്‍",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4863,
      "E": "Veeranakavu",
      "M": "വീരണകാവ്",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4864,
      "E": "Kattacode",
      "M": "കട്ടയ്ക്കോട്",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4865,
      "E": "Kattakada",
      "M": "കാട്ടാക്കട",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4866,
      "E": "Kuruthamcode",
      "M": "കുരുതംകോട്",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4867,
      "E": "Neyyar Dam",
      "M": "നെയ്യാര്‍ ഡാം",
      "PIN": "695572",
      "DID": "1"
    },
    {
      "POSTID": 4868,
      "E": "Mylakkara",
      "M": "മൈലക്കര",
      "PIN": "695570",
      "DID": "1"
    },
    {
      "POSTID": 4869,
      "E": "Puliyarakonam",
      "M": "പുളിയറക്കോണം",
      "PIN": "695573",
      "DID": "1"
    },
    {
      "POSTID": 4870,
      "E": "Moongode",
      "M": "മൂങ്ങോട്",
      "PIN": "695573",
      "DID": "1"
    },
    {
      "POSTID": 4871,
      "E": "Vilappilsala",
      "M": "വിളപ്പില്‍ശാല",
      "PIN": "695573",
      "DID": "1"
    },
    {
      "POSTID": 4872,
      "E": "Perukavu",
      "M": "പെരുകാവ്",
      "PIN": "695573",
      "DID": "1"
    },
    {
      "POSTID": 4873,
      "E": "Peyad",
      "M": "പേയാട്",
      "PIN": "695573",
      "DID": "1"
    },
    {
      "POSTID": 4874,
      "E": "Paruthupally",
      "M": "പരുത്തിപ്പള്ളി",
      "PIN": "695574",
      "DID": "1"
    },
    {
      "POSTID": 4875,
      "E": "Mannurkara",
      "M": "",
      "PIN": "695574",
      "DID": "1"
    },
    {
      "POSTID": 4876,
      "E": "Kalliyal",
      "M": "കള്ളിയല്‍",
      "PIN": "695574",
      "DID": "1"
    },
    {
      "POSTID": 4877,
      "E": "Kuttichal",
      "M": "കുറ്റിച്ചല്‍",
      "PIN": "695574",
      "DID": "1"
    },
    {
      "POSTID": 4878,
      "E": "Kottoor Tvm",
      "M": "കോട്ടൂര്‍ തിരുവനന്തപുരം",
      "PIN": "695574",
      "DID": "1"
    },
    {
      "POSTID": 4879,
      "E": "Panniyode",
      "M": "പന്നിയോട്",
      "PIN": "695575",
      "DID": "1"
    },
    {
      "POSTID": 4880,
      "E": "Punalal",
      "M": "പുനലാല്‍",
      "PIN": "695575",
      "DID": "1"
    },
    {
      "POSTID": 4881,
      "E": "Poovachal",
      "M": "പൂവച്ചല്‍",
      "PIN": "695575",
      "DID": "1"
    },
    {
      "POSTID": 4882,
      "E": "Pangappara",
      "M": "പാങ്ങപ്പാറ",
      "PIN": "695581",
      "DID": "1"
    },
    {
      "POSTID": 4883,
      "E": "Alinera",
      "M": "",
      "PIN": "695581",
      "DID": "1"
    },
    {
      "POSTID": 4884,
      "E": "Kariyavattom",
      "M": "കാര്യവട്ടം",
      "PIN": "695581",
      "DID": "1"
    },
    {
      "POSTID": 4885,
      "E": "Kazhakuttom",
      "M": "കഴക്കൂട്ടം",
      "PIN": "695582",
      "DID": "1"
    },
    {
      "POSTID": 4886,
      "E": "Karimanal",
      "M": "കരിമണല്‍",
      "PIN": "695583",
      "DID": "1"
    },
    {
      "POSTID": 4887,
      "E": "Kulathur",
      "M": "കുളത്തൂര്‍",
      "PIN": "695583",
      "DID": "1"
    },
    {
      "POSTID": 4888,
      "E": "Iroopara",
      "M": "അയിരൂപ്പാറ",
      "PIN": "695584",
      "DID": "1"
    },
    {
      "POSTID": 4889,
      "E": "Andoorkonam",
      "M": "അണ്ട‍ൂര്‍ക്കോണം",
      "PIN": "695584",
      "DID": "1"
    },
    {
      "POSTID": 4890,
      "E": "Kattaikonam",
      "M": "കാട്ടായിക്കോണം",
      "PIN": "695584",
      "DID": "1"
    },
    {
      "POSTID": 4891,
      "E": "Koithoorkonam",
      "M": "കൊയ്ത്തൂര്‍ക്കോണം",
      "PIN": "695584",
      "DID": "1"
    },
    {
      "POSTID": 4892,
      "E": "Nethajipuram",
      "M": "നേതാജിപുരം",
      "PIN": "695589",
      "DID": "1"
    },
    {
      "POSTID": 4893,
      "E": "Pothencode",
      "M": "പോത്തന്‍കോട്",
      "PIN": "695584",
      "DID": "1"
    },
    {
      "POSTID": 4894,
      "E": "Sainik School",
      "M": "സൈനിക സ്കൂള്‍",
      "PIN": "695585",
      "DID": "1"
    },
    {
      "POSTID": 4895,
      "E": "Pallithura",
      "M": "പള്ളിത്തുറ",
      "PIN": "695586",
      "DID": "1"
    },
    {
      "POSTID": 4896,
      "E": "Puthenthope",
      "M": "പുത്തന്‍തോപ്പ്",
      "PIN": "695586",
      "DID": "1"
    },
    {
      "POSTID": 4897,
      "E": "St.Xavier\\'s College",
      "M": "സെന്റ് സേവ്യേഴ്സ്  കോളേജ്",
      "PIN": "695586",
      "DID": "1"
    },
    {
      "POSTID": 4898,
      "E": "Powdikonam",
      "M": "പൗഡിക്കോണം",
      "PIN": "695587",
      "DID": "1"
    },
    {
      "POSTID": 4899,
      "E": "Chempazhanthi",
      "M": "ചെമ്പഴന്തി",
      "PIN": "695587",
      "DID": "1"
    },
    {
      "POSTID": 4900,
      "E": "Chittattumukku",
      "M": "ചിറ്റാറ്റുമുക്ക്",
      "PIN": "695301",
      "DID": "1"
    },
    {
      "POSTID": 4901,
      "E": "Pullayil",
      "M": "പുല്ലയില്‍",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4902,
      "E": "Kilimanur",
      "M": "കിളിമാനൂര്‍",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4903,
      "E": "Kilimanur Palace",
      "M": "കിളിമാനൂര്‍ പാലസ്",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4904,
      "E": "Charupara",
      "M": "ചാരുപാറ",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4905,
      "E": "Peroor",
      "M": "പേരൂര്‍",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4906,
      "E": "Vellalur",
      "M": "വെള്ളല്ലൂര്‍",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4907,
      "E": "Ponganad",
      "M": "പോങ്ങനാട്",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4908,
      "E": "Malakkal",
      "M": "മലക്കല്‍",
      "PIN": "695602",
      "DID": "1"
    },
    {
      "POSTID": 4909,
      "E": "Madavoor Pallickal",
      "M": "മടവൂര്‍- പള്ളിക്കല്‍",
      "PIN": "695602",
      "DID": "1"
    },
    {
      "POSTID": 4910,
      "E": "Njarayilkonam",
      "M": "ഞാറയില്‍കോണം",
      "PIN": "695602",
      "DID": "1"
    },
    {
      "POSTID": 4911,
      "E": "Navaikulam",
      "M": "നാവായിക്കുളം",
      "PIN": "695603",
      "DID": "1"
    },
    {
      "POSTID": 4912,
      "E": "Parakunnu",
      "M": "പറകുന്ന്",
      "PIN": "695603",
      "DID": "1"
    },
    {
      "POSTID": 4913,
      "E": "Maruthikunnu",
      "M": "മാരുതിക്കുന്ന്",
      "PIN": "695603",
      "DID": "1"
    },
    {
      "POSTID": 4914,
      "E": "Vettiyara",
      "M": "വെട്ടിയറ",
      "PIN": "695603",
      "DID": "1"
    },
    {
      "POSTID": 4915,
      "E": "Pallickal",
      "M": "പള്ളിക്കല്‍",
      "PIN": "695604",
      "DID": "1"
    },
    {
      "POSTID": 4916,
      "E": "Pakalkuri",
      "M": "പകല്‍ക്കുറി",
      "PIN": "695604",
      "DID": "1"
    },
    {
      "POSTID": 4917,
      "E": "Puliyurkonam",
      "M": "പുലിയൂര്‍ക്കോണം",
      "PIN": "695604",
      "DID": "1"
    },
    {
      "POSTID": 4918,
      "E": "Moothala",
      "M": "മൂതല",
      "PIN": "695604",
      "DID": "1"
    },
    {
      "POSTID": 4919,
      "E": "Kokottukonam",
      "M": "കെ കെ കോണം",
      "PIN": "695604",
      "DID": "1"
    },
    {
      "POSTID": 4920,
      "E": "Puthussermukku",
      "M": "പുതുശ്ശേരിമുക്ക് ",
      "PIN": "695605",
      "DID": "1"
    },
    {
      "POSTID": 4921,
      "E": "Karavaram",
      "M": "കരവാരം",
      "PIN": "695605",
      "DID": "1"
    },
    {
      "POSTID": 4922,
      "E": "Kallambalam",
      "M": "കല്ലമ്പലം",
      "PIN": "695605",
      "DID": "1"
    },
    {
      "POSTID": 4923,
      "E": "Thottakkad",
      "M": "തോട്ടയ്ക്കാട്",
      "PIN": "695605",
      "DID": "1"
    },
    {
      "POSTID": 4924,
      "E": "Anakudi",
      "M": "ആനാകുടി",
      "PIN": "695606",
      "DID": "1"
    },
    {
      "POSTID": 4925,
      "E": "Valluvambram",
      "M": "",
      "PIN": "695606",
      "DID": "1"
    },
    {
      "POSTID": 4926,
      "E": "Vamanapuram",
      "M": "വാമനപുരം",
      "PIN": "695606",
      "DID": "1"
    },
    {
      "POSTID": 4927,
      "E": "Karimkuttikara",
      "M": "കരിംകുറ്റികര",
      "PIN": "695606",
      "DID": "1"
    },
    {
      "POSTID": 4928,
      "E": "Kalamachal",
      "M": "കളമച്ചല്‍",
      "PIN": "695606",
      "DID": "1"
    },
    {
      "POSTID": 4929,
      "E": "Nellanad",
      "M": "നെല്ലനാട്",
      "PIN": "695606",
      "DID": "1"
    },
    {
      "POSTID": 4930,
      "E": "Kottukunnam",
      "M": "കോട്ടുകുന്നം",
      "PIN": "695606",
      "DID": "1"
    },
    {
      "POSTID": 4931,
      "E": "Palamkonam",
      "M": "പാലാംകോണം",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4932,
      "E": "Pirappancode",
      "M": "പിരപ്പന്‍കോട്",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4933,
      "E": "Pullampara",
      "M": "പുല്ലമ്പാറ",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4934,
      "E": "Aliyadu",
      "M": "ആലിയാട്",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4935,
      "E": "Mukkudil",
      "M": "മുക്കുടില്‍",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4936,
      "E": "Venjaramoodu",
      "M": "വെഞ്ഞാറമൂട്",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4937,
      "E": "Vellumannady",
      "M": "വെള്ളുമണ്ണടി",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4938,
      "E": "Koliakode",
      "M": "കോലിയക്കോട്",
      "PIN": "695607",
      "DID": "1"
    },
    {
      "POSTID": 4939,
      "E": "Kattumpuram",
      "M": "കാട്ടുംപുറം",
      "PIN": "695608",
      "DID": "1"
    },
    {
      "POSTID": 4940,
      "E": "Kallara",
      "M": "കല്ലറ",
      "PIN": "695608",
      "DID": "1"
    },
    {
      "POSTID": 4941,
      "E": "Kurumbayam",
      "M": "കുറുമ്പയം",
      "PIN": "695608",
      "DID": "1"
    },
    {
      "POSTID": 4942,
      "E": "Kodithookiyakunnu",
      "M": "കൊടിതൂക്കിയകുന്ന് ",
      "PIN": "695608",
      "DID": "1"
    },
    {
      "POSTID": 4943,
      "E": "Pangode",
      "M": "പാങ്ങോട്",
      "PIN": "695609",
      "DID": "1"
    },
    {
      "POSTID": 4944,
      "E": "Moonnumukku",
      "M": "മൂന്ന്മുക്ക്",
      "PIN": "695609",
      "DID": "1"
    },
    {
      "POSTID": 4945,
      "E": "Kanchinada",
      "M": "കാഞ്ചിനട",
      "PIN": "695609",
      "DID": "1"
    },
    {
      "POSTID": 4946,
      "E": "Mylamode",
      "M": "മൈലമൂട്",
      "PIN": "695609",
      "DID": "1"
    },
    {
      "POSTID": 4947,
      "E": "Neeramankadavu",
      "M": "നിറമണ്‍കടവ്",
      "PIN": "695610",
      "DID": "1"
    },
    {
      "POSTID": 4948,
      "E": "Mithirmala",
      "M": "മിതൃമല",
      "PIN": "695610",
      "DID": "1"
    },
    {
      "POSTID": 4949,
      "E": "Muthuvila",
      "M": "മുതുവിള",
      "PIN": "695610",
      "DID": "1"
    },
    {
      "POSTID": 4950,
      "E": "Manambur",
      "M": "മണമ്പൂര്‍",
      "PIN": "695611",
      "DID": "1"
    },
    {
      "POSTID": 4951,
      "E": "Pulimath",
      "M": "പുളിമാത്ത്",
      "PIN": "695612",
      "DID": "1"
    },
    {
      "POSTID": 4952,
      "E": "Koduvazhannur",
      "M": "കൊടുവഴന്നൂര്‍",
      "PIN": "695612",
      "DID": "1"
    },
    {
      "POSTID": 4953,
      "E": "Thalikuzhi",
      "M": "താളിക്കുഴി",
      "PIN": "695612",
      "DID": "1"
    },
    {
      "POSTID": 4954,
      "E": "Mulakkalthukavu",
      "M": "മുളയ്ക്കലത്തുകാവ്",
      "PIN": "695614",
      "DID": "1"
    },
    {
      "POSTID": 4955,
      "E": "Adayamon",
      "M": "അടയമണ്‍",
      "PIN": "695614",
      "DID": "1"
    },
    {
      "POSTID": 4956,
      "E": "Thattathumala",
      "M": "തട്ടത്തുമല",
      "PIN": "695614",
      "DID": "1"
    },
    {
      "POSTID": 4957,
      "E": "Tulakkalathukavu",
      "M": "",
      "PIN": "695614",
      "DID": "1"
    },
    {
      "POSTID": 4958,
      "E": "Moonnanakuzhy",
      "M": "മൂന്നാനകുഴി",
      "PIN": "695615",
      "DID": "1"
    },
    {
      "POSTID": 4959,
      "E": "Kuthirakulam",
      "M": "കുതിരകുളം",
      "PIN": "695615",
      "DID": "1"
    },
    {
      "POSTID": 4960,
      "E": "Cheeranikara",
      "M": "ചീരാണിക്കര",
      "PIN": "695615",
      "DID": "1"
    },
    {
      "POSTID": 4961,
      "E": "Vembayam",
      "M": "വെമ്പായം",
      "PIN": "695615",
      "DID": "1"
    },
    {
      "POSTID": 4962,
      "E": "Konchira",
      "M": "കൊഞ്ചിറ",
      "PIN": "695615",
      "DID": "1"
    },
    {
      "POSTID": 4963,
      "E": "Bharathannur",
      "M": "ഭരതന്നൂര്‍",
      "PIN": "695616",
      "DID": "1"
    },
    {
      "POSTID": 4964,
      "E": "Nagaroor",
      "M": "നഗരൂര്‍",
      "PIN": "695601",
      "DID": "1"
    },
    {
      "POSTID": 4965,
      "E": "Kochuvila",
      "M": "കൊച്ചുവിള",
      "PIN": "695563",
      "DID": "1"
    },
    {
      "POSTID": 4966,
      "E": "Thazhathangadi",
      "M": "താഴത്തങ്ങാടി",
      "PIN": "686005",
      "DID": "5"
    },
    {
      "POSTID": 4967,
      "E": "Payyambalam",
      "M": "പയ്യമ്പാലം",
      "PIN": "670001",
      "DID": "13"
    },
    {
      "POSTID": 4968,
      "E": "Kannur RS",
      "M": "കണ്ണൂര്‍ ആര്‍ എസ്",
      "PIN": "670001",
      "DID": "13"
    },
    {
      "POSTID": 4969,
      "E": "Talap",
      "M": "തളാപ്പ്",
      "PIN": "670002",
      "DID": "13"
    },
    {
      "POSTID": 4970,
      "E": "Thayil",
      "M": "തയ്യില്‍",
      "PIN": "670003",
      "DID": "13"
    },
    {
      "POSTID": 4971,
      "E": "Kokkanissery",
      "M": "കൊക്കാനിശ്ശേരി",
      "PIN": "670307",
      "DID": "13"
    },
    {
      "POSTID": 4972,
      "E": "V R Puram",
      "M": "",
      "PIN": "680722",
      "DID": "8"
    },
    {
      "POSTID": 4973,
      "E": "Veeloor",
      "M": "വേളൂര്‍",
      "PIN": "686003",
      "DID": "5"
    },
    {
      "POSTID": 4974,
      "E": "Varkala South",
      "M": "വര്‍ക്കല സൗത്ത് പുത്തന്‍ചന്ത",
      "PIN": "695141",
      "DID": "1"
    },
    {
      "POSTID": 4975,
      "E": "Fathimapuram",
      "M": "ഫാത്തിമപുരം",
      "PIN": "686102",
      "DID": "5"
    },
    {
      "POSTID": 4976,
      "E": "Poovathur",
      "M": "പൂവത്തൂര്‍",
      "PIN": "695561",
      "DID": "1"
    },
    {
      "POSTID": 4977,
      "E": "Thazhepalam",
      "M": "താഴേപ്പാലം",
      "PIN": "676101",
      "DID": "10"
    },
    {
      "POSTID": 4978,
      "E": "Tirur East Bazar",
      "M": "തിരൂര്‍ ഈസ്റ്റ് ബസാര്‍",
      "PIN": "676101",
      "DID": "10"
    },
    {
      "POSTID": 4979,
      "E": "Palakkad Collectorate",
      "M": "പാലക്കാട് കളക്ട്രേറ്റ്",
      "PIN": "678001",
      "DID": "9"
    },
    {
      "POSTID": 4980,
      "E": "Palakkad College",
      "M": "പാലക്കാട് കോളേജ്",
      "PIN": "678001",
      "DID": "9"
    },
    {
      "POSTID": 4981,
      "E": "Puthur",
      "M": "",
      "PIN": "678001",
      "DID": "9"
    },
    {
      "POSTID": 4982,
      "E": "Palakkad Fort",
      "M": "പാലക്കാട് ഫോര്‍ട്ട്",
      "PIN": "678001",
      "DID": "9"
    },
    {
      "POSTID": 4983,
      "E": "Thiruvallur",
      "M": "തിരുവള്ളൂര്‍",
      "PIN": "673541",
      "DID": "11"
    },
    {
      "POSTID": 4984,
      "E": "Keecheri",
      "M": "കാക്കയങ്ങാട്",
      "PIN": "670702",
      "DID": "13"
    },
    {
      "POSTID": 4985,
      "E": "Pavukkonam",
      "M": "പൊന്ന്യം വെസ്റ്റ്",
      "PIN": "679522",
      "DID": "13"
    },
    {
      "POSTID": 4986,
      "E": "P.H.Center",
      "M": "കൈലാസനാട്",
      "PIN": "686667",
      "DID": "6"
    },
    {
      "POSTID": 4987,
      "E": "Kottappadam",
      "M": "പള്ളം കൊറ്റംബത്തൂര്‍",
      "PIN": "679534",
      "DID": "8"
    },
    {
      "POSTID": 4988,
      "E": "Ponniam West",
      "M": "കിഴക്കുംപാടം",
      "PIN": "670641",
      "DID": "10"
    },
    {
      "POSTID": 4989,
      "E": "Thiruvallur",
      "M": "താന്നികുന്ന്",
      "PIN": "673541",
      "DID": "4"
    },
    {
      "POSTID": 4990,
      "E": "Kailasanadu",
      "M": "നീണ്ടപാറ",
      "PIN": "685553",
      "DID": "7"
    },
    {
      "POSTID": 4991,
      "E": "Pallam Kottambathur",
      "M": "പുല്ലുവിള",
      "PIN": "679532",
      "DID": "1"
    },
    {
      "POSTID": 4992,
      "E": "Thanneercode",
      "M": "പയ്യോളി അങ്ങാടി",
      "PIN": "679536",
      "DID": "11"
    },
    {
      "POSTID": 4993,
      "E": "Kizhakkumpadam",
      "M": "കൂരാച്ചുണ്ട്",
      "PIN": "679326",
      "DID": "11"
    },
    {
      "POSTID": 4994,
      "E": "Chengalam",
      "M": "പെരുംമ്പള്ളി",
      "PIN": "686585",
      "DID": "11"
    },
    {
      "POSTID": 4995,
      "E": "Kakkengad",
      "M": "ചെറുവാരക്കോണം",
      "PIN": "670673",
      "DID": "1"
    },
    {
      "POSTID": 4996,
      "E": "Thannikunnu",
      "M": "പയ്യനല്ലൂര്‍",
      "PIN": "690534",
      "DID": "3"
    },
    {
      "POSTID": 4997,
      "E": "Sree Ramapuram Market",
      "M": "കണയന്നൂര്‍",
      "PIN": "690539",
      "DID": "7"
    },
    {
      "POSTID": 4998,
      "E": "Pulluvila",
      "M": "മഞ്ഞമല",
      "PIN": "695526",
      "DID": "1"
    },
    {
      "POSTID": 4999,
      "E": "Koorachundu",
      "M": "തുണ്ടത്തില്‍",
      "PIN": "673527",
      "DID": "1"
    },
    {
      "POSTID": 5000,
      "E": "Payyoli Angadi",
      "M": "എന്‍ഐറ്റി ക്യാമ്പസ് കോഴിക്കോട്",
      "PIN": "673523",
      "DID": "11"
    },
    {
      "POSTID": 5001,
      "E": "Iringavur",
      "M": "കരിമുകള്‍",
      "PIN": "676103",
      "DID": "7"
    },
    {
      "POSTID": 5002,
      "E": "Cheruvarakonam",
      "M": "വിലങ്ങാട്",
      "PIN": "695502",
      "DID": "11"
    },
    {
      "POSTID": 5003,
      "E": "Payanallur",
      "M": "ശാന്തിഗിരി",
      "PIN": "690504",
      "DID": "1"
    },
    {
      "POSTID": 5004,
      "E": "Kanayannur",
      "M": "നടുവട്ടം",
      "PIN": "682312",
      "DID": "7"
    },
    {
      "POSTID": 5005,
      "E": "Manjamala",
      "M": "കോളിച്ചാല്‍",
      "PIN": "695313",
      "DID": "14"
    },
    {
      "POSTID": 5006,
      "E": "Thundathil",
      "M": "നെട്ടയം",
      "PIN": "695581",
      "DID": "2"
    },
    {
      "POSTID": 5007,
      "E": "NIT Campus Kozhikode",
      "M": "വള്ളിക്കാപറ്റ",
      "PIN": "673601",
      "DID": "10"
    },
    {
      "POSTID": 5008,
      "E": "Karimukal",
      "M": "വേങ്ങൂര്‍",
      "PIN": "682303",
      "DID": "2"
    },
    {
      "POSTID": 5009,
      "E": "Mankara R S",
      "M": "പനയപ്പിള്ളി",
      "PIN": "678614",
      "DID": "7"
    },
    {
      "POSTID": 5010,
      "E": "Kuttikkakam",
      "M": "ആലുവ അശോകപുരം",
      "PIN": "670663",
      "DID": "7"
    },
    {
      "POSTID": 5011,
      "E": "Vilangad",
      "M": "മുതുപറമ്പ്",
      "PIN": "673506",
      "DID": "10"
    },
    {
      "POSTID": 5012,
      "E": "Santhigiri",
      "M": "നിരണം സെന്‍ട്രല്‍",
      "PIN": "695589",
      "DID": "3"
    },
    {
      "POSTID": 5013,
      "E": "Naduvattom",
      "M": "തെക്കന്‍മാറാടി",
      "PIN": "683574",
      "DID": "7"
    },
    {
      "POSTID": 5014,
      "E": "Kolichal",
      "M": "അമ്പലത്തറ",
      "PIN": "671532",
      "DID": "1"
    },
    {
      "POSTID": 5015,
      "E": "Nettayam",
      "M": "അട്ടക്കുളങ്ങര",
      "PIN": "691537",
      "DID": "1"
    },
    {
      "POSTID": 5016,
      "E": "Karekkad",
      "M": "ആറ്റുകാല്‍",
      "PIN": "676553",
      "DID": "1"
    },
    {
      "POSTID": 5017,
      "E": "Kandanad",
      "M": "ബീമാപള്ളി",
      "PIN": "682305",
      "DID": "1"
    },
    {
      "POSTID": 5018,
      "E": "South Paravur",
      "M": "സിജിഒ കോംപ്ലക്സ് പൂങ്കുളം",
      "PIN": "682320",
      "DID": "1"
    },
    {
      "POSTID": 5019,
      "E": "Panayappilly",
      "M": "ചാക്ക",
      "PIN": "682002",
      "DID": "1"
    },
    {
      "POSTID": 5020,
      "E": "Aluva Asokapuram",
      "M": "കോട്ടണ്‍ ഹില്‍",
      "PIN": "683101",
      "DID": "1"
    },
    {
      "POSTID": 5021,
      "E": "Muthuparamba",
      "M": "കൈതമുക്ക്",
      "PIN": "673638",
      "DID": "1"
    },
    {
      "POSTID": 5022,
      "E": "Thekkenmarady",
      "M": "നെയ്യാറ്റിന്‍കര ടൗണ്‍",
      "PIN": "686673",
      "DID": "1"
    },
    {
      "POSTID": 5023,
      "E": "Ambalathara",
      "M": "പാല്‍ക്കുളങ്ങര",
      "PIN": "695026",
      "DID": "1"
    },
    {
      "POSTID": 5024,
      "E": "Attakulangara",
      "M": "പഴയകുന്നുമ്മേല്‍",
      "PIN": "695023",
      "DID": "1"
    },
    {
      "POSTID": 5025,
      "E": "Attukal",
      "M": "പിഎംജി ജംഗ്ഷന്‍",
      "PIN": "695009",
      "DID": "1"
    },
    {
      "POSTID": 5026,
      "E": "Beemapally",
      "M": "പ്രശാന്ത് നഗര്‍",
      "PIN": "695008",
      "DID": "1"
    },
    {
      "POSTID": 5027,
      "E": "C Complex Poonkulam",
      "M": "പിറ്റിപി ജംഗ്ഷന്‍",
      "PIN": "695522",
      "DID": "1"
    },
    {
      "POSTID": 5028,
      "E": "Chakkai",
      "M": "പബ്ലിക് ഓഫീസ്",
      "PIN": "695024",
      "DID": "1"
    },
    {
      "POSTID": 5029,
      "E": "Cotton Hill",
      "M": "തിരുവനന്തപുരം ഗവണ്‍മെന്റ്  പ്രസ്സ്",
      "PIN": "695014",
      "DID": "1"
    },
    {
      "POSTID": 5030,
      "E": "Kaithamukku",
      "M": "തിരുവനന്തപുരം തമ്പാനൂര്‍",
      "PIN": "695024",
      "DID": "1"
    },
    {
      "POSTID": 5031,
      "E": "Neyyattinkara Town",
      "M": "വഞ്ചിയൂര്‍ ജംഗ്ഷന്‍",
      "PIN": "695121",
      "DID": "1"
    },
    {
      "POSTID": 5032,
      "E": "Palkulangara",
      "M": "ഇടയം",
      "PIN": "695024",
      "DID": "2"
    },
    {
      "POSTID": 5033,
      "E": "Pazhayakunnumel",
      "M": "കിളിക്കൊല്ലൂര്‍ ഈസ്റ്റ്",
      "PIN": "695601",
      "DID": "2"
    },
    {
      "POSTID": 5034,
      "E": "PMG Junction",
      "M": "കൊല്ലം ബസാര്‍",
      "PIN": "695033",
      "DID": "2"
    },
    {
      "POSTID": 5035,
      "E": "Prasanth Nagar",
      "M": "കൊല്ലം കന്റോണ്‍മെന്റ്",
      "PIN": "695011",
      "DID": "2"
    },
    {
      "POSTID": 5036,
      "E": "PTP Junction",
      "M": "കൊല്ലം സിവില്‍ സ്റ്റേഷന്‍",
      "PIN": "695004",
      "DID": "2"
    },
    {
      "POSTID": 5037,
      "E": "Public Office",
      "M": "കൊല്ലം താലൂക്ക് കച്ചേരി",
      "PIN": "695033",
      "DID": "2"
    },
    {
      "POSTID": 5038,
      "E": "Ponmana",
      "M": "പൊന്മന",
      "PIN": "691583",
      "DID": "2"
    },
    {
      "POSTID": 5039,
      "E": "Thiruvananthapuram Thampanoor",
      "M": "ആലുംതുരുത്തി",
      "PIN": "695014",
      "DID": "3"
    },
    {
      "POSTID": 5040,
      "E": "Vanchiyoor Junction",
      "M": "കോഴഞ്ചേരി കോളേജ്",
      "PIN": "695035",
      "DID": "3"
    },
    {
      "POSTID": 5041,
      "E": "Thrissur Medical College",
      "M": "ആലപ്പുഴ കളക്ട്രേറ്റ്",
      "PIN": "680596",
      "DID": "4"
    },
    {
      "POSTID": 5042,
      "E": "Kummannoor",
      "M": "ചുങ്കം",
      "PIN": "686572",
      "DID": "4"
    },
    {
      "POSTID": 5043,
      "E": "Kinfra Park-Koratty",
      "M": "കാവാലം വെസ്റ്റ്",
      "PIN": "680309",
      "DID": "4"
    },
    {
      "POSTID": 5044,
      "E": "Singukandam",
      "M": "കായംകുളം കോളേജ്",
      "PIN": "685618",
      "DID": "4"
    },
    {
      "POSTID": 5045,
      "E": "Thodupuzha North",
      "M": "കോട്ടന്‍കുളങ്ങര",
      "PIN": "685584",
      "DID": "4"
    },
    {
      "POSTID": 5046,
      "E": "Aluva Bazar",
      "M": "മറ്റം",
      "PIN": "683101",
      "DID": "4"
    },
    {
      "POSTID": 5047,
      "E": "Aluva Town Bus Stand",
      "M": "വരേണിക്കല്‍",
      "PIN": "683101",
      "DID": "4"
    },
    {
      "POSTID": 5048,
      "E": "Banerji Road",
      "M": "വട്ടയല്‍ വാര്‍ഡ്",
      "PIN": "682018",
      "DID": "4"
    },
    {
      "POSTID": 5049,
      "E": "Dry Dock",
      "M": "അയ്യര്‍കുളങ്ങര",
      "PIN": "682029",
      "DID": "5"
    },
    {
      "POSTID": 5050,
      "E": "Ernakulam High Court",
      "M": "ഏറ്റുമാനൂര്‍ ജംഗ്ഷന്‍",
      "PIN": "682031",
      "DID": "5"
    },
    {
      "POSTID": 5051,
      "E": "Ernakulam Hindi Prachar Sabha",
      "M": "കോട്ടക്കപ്പുറം",
      "PIN": "682016",
      "DID": "5"
    },
    {
      "POSTID": 5052,
      "E": "Kochi Special Economic Zone",
      "M": "കോട്ടയം നോര്‍ത്ത്",
      "PIN": "682037",
      "DID": "5"
    },
    {
      "POSTID": 5053,
      "E": "Kothamangalam Bazar",
      "M": "കുമ്മണ്ണൂര്‍",
      "PIN": "686691",
      "DID": "5"
    },
    {
      "POSTID": 5054,
      "E": "Ayyarkulangara",
      "M": "പാലാ മാര്‍ക്കറ്റ് ജംഗ്ഷന്‍",
      "PIN": "686142",
      "DID": "5"
    },
    {
      "POSTID": 5055,
      "E": "Ettumanoor Junction",
      "M": "പാലാ ടൗണ്‍",
      "PIN": "686631",
      "DID": "5"
    },
    {
      "POSTID": 5056,
      "E": "Kottakkapuram",
      "M": "തിരുനക്കര",
      "PIN": "686631",
      "DID": "5"
    },
    {
      "POSTID": 5057,
      "E": "Kottayam North",
      "M": "വാകത്താനം സൗത്ത്",
      "PIN": "686001",
      "DID": "5"
    },
    {
      "POSTID": 5058,
      "E": "Pala Market Junction",
      "M": "സിങ്കണ്ടം",
      "PIN": "686575",
      "DID": "6"
    },
    {
      "POSTID": 5059,
      "E": "Pala Town",
      "M": "തൊടുപുഴ നോര്‍ത്ത്",
      "PIN": "686575",
      "DID": "6"
    },
    {
      "POSTID": 5060,
      "E": "Thirunakkara",
      "M": "ആലുവ ബസാര്‍",
      "PIN": "686001",
      "DID": "7"
    },
    {
      "POSTID": 5061,
      "E": "Vakathanam South",
      "M": "ആലുവ ടൗണ്‍ ബസ് സ്റ്റാന്റ്",
      "PIN": "686538",
      "DID": "7"
    },
    {
      "POSTID": 5062,
      "E": "Alappuzha Collectorate",
      "M": "ബാനര്‍ജി റോഡ് ",
      "PIN": "688001",
      "DID": "7"
    },
    {
      "POSTID": 5063,
      "E": "Chunm",
      "M": "ഡ്രൈ ഡോക്ക്",
      "PIN": "688011",
      "DID": "7"
    },
    {
      "POSTID": 5064,
      "E": "Kavalam West",
      "M": "എറണാകുളം ഹൈ കോര്‍ട്ട്",
      "PIN": "688506",
      "DID": "7"
    },
    {
      "POSTID": 5065,
      "E": "Kayamkulam College",
      "M": "എറണാകുളം ഹിന്ദി പ്രചാര സഭ",
      "PIN": "690502",
      "DID": "7"
    },
    {
      "POSTID": 5066,
      "E": "Kottankulangara",
      "M": "കൊച്ചി സ്പെഷ്യല്‍ ഇക്കണോമിക് സോണ്‍",
      "PIN": "688006",
      "DID": "7"
    },
    {
      "POSTID": 5067,
      "E": "Mattam",
      "M": "കോതമംഗലം ബസാര്‍",
      "PIN": "690103",
      "DID": "7"
    },
    {
      "POSTID": 5068,
      "E": "Varenikkal",
      "M": "കോട്ടുവള്ളി",
      "PIN": "690107",
      "DID": "7"
    },
    {
      "POSTID": 5069,
      "E": "Vattayal Ward",
      "M": "മട്ടാഞ്ചേരി",
      "PIN": "688002",
      "DID": "7"
    },
    {
      "POSTID": 5070,
      "E": "AIMS Ponekkara",
      "M": "മട്ടാഞ്ചേരി ബസാര്‍",
      "PIN": "682041",
      "DID": "7"
    },
    {
      "POSTID": 5071,
      "E": "Perumbally",
      "M": "മട്ടാഞ്ചേരി ജെട്ടി",
      "PIN": "673586",
      "DID": "7"
    },
    {
      "POSTID": 5072,
      "E": "Neendapara",
      "M": "മട്ടാഞ്ചേരി ടൗണ്‍",
      "PIN": "686693",
      "DID": "7"
    },
    {
      "POSTID": 5073,
      "E": "Mulakulam North",
      "M": "മൂവാറ്റുപുഴ ബസാര്‍",
      "PIN": "686664",
      "DID": "7"
    },
    {
      "POSTID": 5074,
      "E": "Kozhimala",
      "M": "പരവൂര്‍ മാര്‍ക്കറ്റ്",
      "PIN": "685511",
      "DID": "7"
    },
    {
      "POSTID": 5075,
      "E": "Vlathankara",
      "M": "പരവൂര്‍ ടൗണ്‍",
      "PIN": "695134",
      "DID": "7"
    },
    {
      "POSTID": 5076,
      "E": "Edayam",
      "M": "രാജഗിരി വാലി",
      "PIN": "691532",
      "DID": "7"
    },
    {
      "POSTID": 5077,
      "E": "Rajagiri Valley",
      "M": "വെളി കൊച്ചി",
      "PIN": "682039",
      "DID": "7"
    },
    {
      "POSTID": 5078,
      "E": "Amayapra",
      "M": "ചാലക്കുടി റെയില്‍വേ സ്റ്റേഷന്‍",
      "PIN": "685595",
      "DID": "8"
    },
    {
      "POSTID": 5079,
      "E": "Keezhavoor",
      "M": "ചാലക്കുടി സൗത്ത്",
      "PIN": "695584",
      "DID": "8"
    },
    {
      "POSTID": 5080,
      "E": "Vengoor",
      "M": "ചാലക്കുടി ടൗണ്‍",
      "PIN": "691533",
      "DID": "8"
    },
    {
      "POSTID": 5081,
      "E": "Tirurangadi Bazar",
      "M": "കാക്കുളിശ്ശേരി",
      "PIN": "676306",
      "DID": "8"
    },
    {
      "POSTID": 5082,
      "E": "Karikkakom",
      "M": "കോട്ടായി",
      "PIN": "695021",
      "DID": "8"
    },
    {
      "POSTID": 5083,
      "E": "Pinangode",
      "M": "കുണ്ട‍ൂര്‍",
      "PIN": "673122",
      "DID": "8"
    },
    {
      "POSTID": 5084,
      "E": "Chundampatta",
      "M": "കുട്ടമംഗലം",
      "PIN": "679337",
      "DID": "8"
    },
    {
      "POSTID": 5085,
      "E": "Gothuruthy",
      "M": "",
      "PIN": "683516",
      "DID": "7"
    },
    {
      "POSTID": 5086,
      "E": "Paravur Market",
      "M": "പനംകുളം",
      "PIN": "683513",
      "DID": "8"
    },
    {
      "POSTID": 5087,
      "E": "Paravur Town",
      "M": "ശൃംഗപുരം",
      "PIN": "683513",
      "DID": "8"
    },
    {
      "POSTID": 5088,
      "E": "Kilikollur East",
      "M": "തൃശ്ശൂര്‍ മെഡിക്കല്‍ കോളേജ്",
      "PIN": "691004",
      "DID": "8"
    },
    {
      "POSTID": 5089,
      "E": "Kollam Bazar",
      "M": "ആലംപള്ളം",
      "PIN": "691001",
      "DID": "9"
    },
    {
      "POSTID": 5090,
      "E": "Kollam Cantonment",
      "M": "ചെന്താമരനഗര്‍",
      "PIN": "691001",
      "DID": "9"
    },
    {
      "POSTID": 5091,
      "E": "Kollam Taluk Cutchery",
      "M": "ചിറ്റൂര്‍ കോര്‍ട്ട്സ്",
      "PIN": "691001",
      "DID": "9"
    },
    {
      "POSTID": 5092,
      "E": "Kollam Civil Station",
      "M": "കണിമംഗലം",
      "PIN": "691013",
      "DID": "9"
    },
    {
      "POSTID": 5093,
      "E": "Thalassery Bazar",
      "M": "കഞ്ചിക്കോട് ഇന്‍ഡസ്ട്രിയല്‍ എസ്റ്റേറ്റ്",
      "PIN": "670101",
      "DID": "9"
    },
    {
      "POSTID": 5094,
      "E": "Thalassery Courts",
      "M": "കഴനി",
      "PIN": "670101",
      "DID": "9"
    },
    {
      "POSTID": 5095,
      "E": "Tattamangalam South",
      "M": "കൊടുവായൂര്‍ അഗ്രഹാരം",
      "PIN": "678102",
      "DID": "9"
    },
    {
      "POSTID": 5096,
      "E": "Chenthamaranagar",
      "M": "കൊല്ലങ്കോട് ആര്‍ എസ്",
      "PIN": "678102",
      "DID": "9"
    },
    {
      "POSTID": 5097,
      "E": "Chalil",
      "M": "കൊല്ലങ്കോട്  വെസ്റ്റ്",
      "PIN": "670102",
      "DID": "9"
    },
    {
      "POSTID": 5098,
      "E": "Feroke Pettah",
      "M": "കോട്ടപ്പാടം തൃത്താല",
      "PIN": "673631",
      "DID": "9"
    },
    {
      "POSTID": 5099,
      "E": "Parappil",
      "M": "കുഴല്‍മന്ദം അഗ്രഹാരം",
      "PIN": "673001",
      "DID": "9"
    },
    {
      "POSTID": 5100,
      "E": "Calicut R.S",
      "M": "മെറ്റ്  ഇന്‍ഡ് നഗര്‍",
      "PIN": "673001",
      "DID": "9"
    },
    {
      "POSTID": 5101,
      "E": "Nadackal",
      "M": "പാലക്കുഴി",
      "PIN": "686121",
      "DID": "9"
    },
    {
      "POSTID": 5102,
      "E": "Chalakudi South",
      "M": "തത്തമംഗലം സൗത്ത്",
      "PIN": "680307",
      "DID": "9"
    },
    {
      "POSTID": 5103,
      "E": "Chalakudi Town",
      "M": "വീട്ടാംപാറ",
      "PIN": "680307",
      "DID": "9"
    },
    {
      "POSTID": 5104,
      "E": "Kottukkal",
      "M": "അര്‍വാക്കോട്",
      "PIN": "691306",
      "DID": "10"
    },
    {
      "POSTID": 5105,
      "E": "Bare",
      "M": "കറുകാതിരുത്തി",
      "PIN": "671319",
      "DID": "10"
    },
    {
      "POSTID": 5106,
      "E": "Pathayakallu",
      "M": "മലപ്പുറം സിവില്‍ സ്റ്റേഷന്‍",
      "PIN": "676553",
      "DID": "10"
    },
    {
      "POSTID": 5107,
      "E": "Porur",
      "M": "പത്തായക്കല്ല്",
      "PIN": "679339",
      "DID": "10"
    },
    {
      "POSTID": 5108,
      "E": "Irinjalakuda Market",
      "M": "താനൂര്‍ നഗരം",
      "PIN": "680121",
      "DID": "10"
    },
    {
      "POSTID": 5109,
      "E": "Chelur",
      "M": "താഴെക്കോട് ഈസ്റ്റ്",
      "PIN": "680121",
      "DID": "10"
    },
    {
      "POSTID": 5110,
      "E": "East Hill",
      "M": "തിരൂരങ്ങാടി ബസാര്‍",
      "PIN": "673005",
      "DID": "10"
    },
    {
      "POSTID": 5111,
      "E": "Cheruvannur",
      "M": "വെള്ളച്ചാല്‍",
      "PIN": "673655",
      "DID": "10"
    },
    {
      "POSTID": 5112,
      "E": "Alangad",
      "M": "കാലിക്കറ്റ് സിറ്റി",
      "PIN": "678633",
      "DID": "11"
    },
    {
      "POSTID": 5113,
      "E": "Kuniyan",
      "M": "കാലിക്കറ്റ് കളക്ട്രേറ്റ്",
      "PIN": "670521",
      "DID": "11"
    }
   ];
  
  
  var districts = [
    {
      "distID": 1,
      "malDistName": "തിരുവനന്തപുരം",
      "engDistName": "Thiruvananthapuram"
    },
    {
      "distID": 2,
      "malDistName": "കൊല്ലം",
      "engDistName": "Kollam"
    },
    {
      "distID": 3,
      "malDistName": "പത്തനംതിട്ട",
      "engDistName": "Pathanamthitta"
    },
    {
      "distID": 4,
      "malDistName": "ആലപ്പുഴ",
      "engDistName": "Alappuzha"
    },
    {
      "distID": 5,
      "malDistName": "കോട്ടയം",
      "engDistName": "Kottayam"
    },
    {
      "distID": 6,
      "malDistName": "ഇടുക്കി",
      "engDistName": "Idukki"
    },
    {
      "distID": 7,
      "malDistName": "എറണാകുളം",
      "engDistName": "Ernakulam"
    },
    {
      "distID": 8,
      "malDistName": "തൃശ്ശൂര്‍",
      "engDistName": "Thrissur"
    },
    {
      "distID": 9,
      "malDistName": "പാലക്കാട്",
      "engDistName": "Palakkad"
    },
    {
      "distID": 10,
      "malDistName": "മലപ്പുറം",
      "engDistName": "Malappuram"
    },
    {
      "distID": 11,
      "malDistName": "കോഴിക്കോട്",
      "engDistName": "Kozhikkode"
    },
    {
      "distID": 12,
      "malDistName": "വയനാട്",
      "engDistName": "Wayanad"
    },
    {
      "distID": 13,
      "malDistName": "കണ്ണൂര്‍",
      "engDistName": "Kannur"
    },
    {
      "distID": 14,
      "malDistName": "കാസര്‍ഗോഡ്",
      "engDistName": "Kasargod"
    }
   ];
  var blocks = [
    {
      "E": "Aryancode",
      "M": "ആര്യങ്കോട്",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Varkala",
      "M": "വര്‍ക്കല",
      "BT": "2",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Vellanad",
      "M": "വെള്ളനാട്",
      "BT": "2",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Nedumangad",
      "M": "നെടുമങ്ങാട്",
      "BT": "2",
      "BID": "6",
      "DID": "1"
    },
    {
      "E": "Kazhakuttom",
      "M": "കഴക്കൂട്ടം",
      "BT": "2",
      "BID": "7",
      "DID": "1"
    },
    {
      "E": "Nemom",
      "M": "നേമം",
      "BT": "2",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Perumkadavila",
      "M": "പെരുങ്കടവിള",
      "BT": "2",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Athiyannoor",
      "M": "അതിയന്നൂര്‍",
      "BT": "2",
      "BID": "11",
      "DID": "1"
    },
    {
      "E": "Parassala",
      "M": "പാറശ്ശാല",
      "BT": "2",
      "BID": "12",
      "DID": "1"
    },
    {
      "E": "Poovar",
      "M": "പൂവാര്‍",
      "BT": "5",
      "BID": "12",
      "DID": "1"
    },
    {
      "E": "Thirupuram",
      "M": "തിരുപുറം",
      "BT": "5",
      "BID": "12",
      "DID": "1"
    },
    {
      "E": "Parassala",
      "M": "പാറശ്ശാല",
      "BT": "5",
      "BID": "12",
      "DID": "1"
    },
    {
      "E": "Kulathoor",
      "M": "കുളത്തൂര്‍",
      "BT": "5",
      "BID": "12",
      "DID": "1"
    },
    {
      "E": "Karode",
      "M": "കാരോട്",
      "BT": "5",
      "BID": "12",
      "DID": "1"
    },
    {
      "E": "Chenkal",
      "M": "ചെങ്കല്‍",
      "BT": "5",
      "BID": "12",
      "DID": "1"
    },
    {
      "E": "Venganoor",
      "M": "വെങ്ങാനൂര്‍",
      "BT": "5",
      "BID": "11",
      "DID": "1"
    },
    {
      "E": "Kottukal",
      "M": "കോട്ടുകാല്‍",
      "BT": "5",
      "BID": "11",
      "DID": "1"
    },
    {
      "E": "Karumkulam",
      "M": "കരുംകുളം ",
      "BT": "5",
      "BID": "11",
      "DID": "1"
    },
    {
      "E": "Kanjiramkulam",
      "M": "കാഞ്ഞിരംകുളം",
      "BT": "5",
      "BID": "11",
      "DID": "1"
    },
    {
      "E": "Athiyannoor",
      "M": "അതിയന്നൂര്‍",
      "BT": "5",
      "BID": "11",
      "DID": "1"
    },
    {
      "E": "Amboori",
      "M": "അമ്പൂരി",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Vellarada",
      "M": "വെള്ളറട",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Kunnathukal",
      "M": "കുന്നത്തുകാല്‍",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Kallikkadu",
      "M": "കള്ളിക്കാട്",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Vamanapuram",
      "M": "വാമനപുരം",
      "BT": "2",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Ottasekharamangalam",
      "M": "ഒറ്റശേഖരമംഗലം",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Kollayil",
      "M": "കൊല്ലയില്‍",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Perumkadavila",
      "M": "പെരുങ്കടവിള",
      "BT": "5",
      "BID": "10",
      "DID": "1"
    },
    {
      "E": "Kalliyoor",
      "M": "കല്ലിയൂര്‍",
      "BT": "5",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Vilavoorkal",
      "M": "വിളവൂര്‍ക്കല്‍",
      "BT": "5",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Vilappil",
      "M": "വിളപ്പില്‍",
      "BT": "5",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Malayinkeezh",
      "M": "മലയിന്‍കീഴ്",
      "BT": "5",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Maranalloor",
      "M": "മാറനല്ലൂര്‍",
      "BT": "5",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Thiruvananthapuram",
      "M": "തിരുവനന്തപുരം",
      "BT": "1",
      "BID": null,
      "DID": "1"
    },
    {
      "E": "Pallichal",
      "M": "പള്ളിച്ചല്‍",
      "BT": "5",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Balaramapuram",
      "M": "ബാലരാമപുരം",
      "BT": "5",
      "BID": "9",
      "DID": "1"
    },
    {
      "E": "Chirayinkeezhu",
      "M": "ചിറയിന്‍കീഴ്",
      "BT": "2",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Thiruvananthapuram",
      "M": "തിരുവനന്തപുരം",
      "BT": "4",
      "BID": null,
      "DID": "1"
    },
    {
      "E": "Pothencode",
      "M": "പോത്തന്‍കോട്",
      "BT": "5",
      "BID": "7",
      "DID": "1"
    },
    {
      "E": "Varkala",
      "M": "വര്‍ക്കല",
      "BT": "3",
      "BID": null,
      "DID": "1"
    },
    {
      "E": "Attingal",
      "M": "ആറ്റിങ്ങല്‍",
      "BT": "3",
      "BID": null,
      "DID": "1"
    },
    {
      "E": "Nedumangad",
      "M": "നെടുമങ്ങാട്",
      "BT": "3",
      "BID": null,
      "DID": "1"
    },
    {
      "E": "Neyyattinkara",
      "M": "നെയ്യാറ്റിന്‍കര",
      "BT": "3",
      "BID": null,
      "DID": "1"
    },
    {
      "E": "Mangalapuram",
      "M": "മംഗലപുരം",
      "BT": "5",
      "BID": "7",
      "DID": "1"
    },
    {
      "E": "Kadinamkulam",
      "M": "കഠിനംകുളം",
      "BT": "5",
      "BID": "7",
      "DID": "1"
    },
    {
      "E": "Andoorkonam",
      "M": "അണ്ടൂര്‍ക്കോണം",
      "BT": "5",
      "BID": "7",
      "DID": "1"
    },
    {
      "E": "Vembayam",
      "M": "വെമ്പായം",
      "BT": "5",
      "BID": "6",
      "DID": "1"
    },
    {
      "E": "Karakulam",
      "M": "കരകുളം",
      "BT": "5",
      "BID": "6",
      "DID": "1"
    },
    {
      "E": "Panavoor",
      "M": "പനവൂര്‍",
      "BT": "5",
      "BID": "6",
      "DID": "1"
    },
    {
      "E": "Aruvikkara",
      "M": "അരുവിക്കര",
      "BT": "5",
      "BID": "6",
      "DID": "1"
    },
    {
      "E": "Anad",
      "M": "ആനാട്",
      "BT": "5",
      "BID": "6",
      "DID": "1"
    },
    {
      "E": "Kattakada",
      "M": "കാട്ടാക്കട",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Tholicode",
      "M": "തൊളിക്കോട്",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Kuttichal",
      "M": "കുറ്റിച്ചല്‍",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Uzhamalakkal",
      "M": "ഉഴമലയ്ക്കല്‍",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Vithura",
      "M": "വിതുര",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Vellanad",
      "M": "വെള്ളനാട്",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Poovachal",
      "M": "പൂവച്ചല്‍",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Aryanad",
      "M": "ആര്യനാട്",
      "BT": "5",
      "BID": "5",
      "DID": "1"
    },
    {
      "E": "Manickal",
      "M": "മാണിക്കല്‍",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Peringammala",
      "M": "പെരിങ്ങമ്മല",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Nanniyode",
      "M": "നന്ദിയോട്",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Kilimanoor",
      "M": "കിളിമാനൂര്‍",
      "BT": "2",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Chemmaruthy",
      "M": "ചെമ്മരുതി",
      "BT": "5",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Edava",
      "M": "ഇടവ",
      "BT": "5",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Elakamon",
      "M": "ഇലകമണ്‍",
      "BT": "5",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Manamboor",
      "M": "മണമ്പൂര്‍",
      "BT": "5",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Ottoor",
      "M": "ഒറ്റൂര്‍",
      "BT": "5",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Cherunniyoor",
      "M": "ചെറുന്നിയൂര്‍",
      "BT": "5",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Vettoor",
      "M": "വെട്ടൂര്‍",
      "BT": "5",
      "BID": "1",
      "DID": "1"
    },
    {
      "E": "Kilimanoor",
      "M": "കിളിമാനൂര്‍",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Pazhayakunnumel",
      "M": "പഴയകുന്നുമ്മേല്‍",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Karavaram",
      "M": "കരവാരം",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Madavoor",
      "M": "മടവൂര്‍",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Pallickal",
      "M": "പള്ളിക്കല്‍",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Nagaroor",
      "M": "നഗരൂര്‍",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Navaikulam",
      "M": "നാവായിക്കുളം",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Pulimath",
      "M": "പുളിമാത്ത്",
      "BT": "5",
      "BID": "2",
      "DID": "1"
    },
    {
      "E": "Azhoor",
      "M": "അഴൂര്‍",
      "BT": "5",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Anchuthengu",
      "M": "അഞ്ചുതെങ്ങ്",
      "BT": "5",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Vakkom",
      "M": "വക്കം",
      "BT": "5",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Chirayinkeezhu",
      "M": "ചിറയിന്‍കീഴ്",
      "BT": "5",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Kizhuvilam",
      "M": "കിഴുവിലം",
      "BT": "5",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Mudakkal",
      "M": "മുദാക്കല്‍",
      "BT": "5",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Kadakkavoor",
      "M": "കടയ്ക്കാവൂര്‍",
      "BT": "5",
      "BID": "3",
      "DID": "1"
    },
    {
      "E": "Kallara",
      "M": "കല്ലറ",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Nellanad",
      "M": "നെല്ലനാട്",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Pullampara",
      "M": "പുല്ലമ്പാറ",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Vamanapuram",
      "M": "വാമനപുരം",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Pangode",
      "M": "പാങ്ങോട്",
      "BT": "5",
      "BID": "4",
      "DID": "1"
    },
    {
      "E": "Pattazhi Vadakkekara",
      "M": "പട്ടാഴി വടക്കേക്കര",
      "BT": "5",
      "BID": "17",
      "DID": "2"
    },
    {
      "E": "Edamulackal",
      "M": "ഇടമുളയ്ക്കല്‍",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Paravur",
      "M": "പരവൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "2"
    },
    {
      "E": "Kollam",
      "M": "കൊല്ലം",
      "BT": "4",
      "BID": null,
      "DID": "2"
    },
    {
      "E": "Kollam",
      "M": "കൊല്ലം",
      "BT": "1",
      "BID": null,
      "DID": "2"
    },
    {
      "E": "Chirakkara",
      "M": "ചിറക്കര",
      "BT": "5",
      "BID": "24",
      "DID": "2"
    },
    {
      "E": "Kummil",
      "M": "കുമ്മിള്‍",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Karunagappally",
      "M": "കരുനാഗപ്പള്ളി ",
      "BT": "3",
      "BID": null,
      "DID": "2"
    },
    {
      "E": "Kottarakara",
      "M": "കൊട്ടാരക്കര",
      "BT": "3",
      "BID": null,
      "DID": "2"
    },
    {
      "E": "Chadayamangalam",
      "M": "ചടയമംഗലം",
      "BT": "2",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Ithikkara",
      "M": "ഇത്തിക്കര",
      "BT": "2",
      "BID": "24",
      "DID": "2"
    },
    {
      "E": "Mukhathala",
      "M": "മുഖത്തല",
      "BT": "2",
      "BID": "23",
      "DID": "2"
    },
    {
      "E": "Chavara",
      "M": "ചവറ",
      "BT": "2",
      "BID": "21",
      "DID": "2"
    },
    {
      "E": "Chittumala",
      "M": "ചിറ്റുമല",
      "BT": "2",
      "BID": "20",
      "DID": "2"
    },
    {
      "E": "Kottarakara",
      "M": "കൊട്ടാരക്കര",
      "BT": "2",
      "BID": "19",
      "DID": "2"
    },
    {
      "E": "Anchal",
      "M": "അഞ്ചല്‍",
      "BT": "2",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Pathanapuram",
      "M": "പത്തനാപുരം",
      "BT": "2",
      "BID": "17",
      "DID": "2"
    },
    {
      "E": "Vettikavala",
      "M": "വെട്ടിക്കവല",
      "BT": "2",
      "BID": "16",
      "DID": "2"
    },
    {
      "E": "Sasthamcotta",
      "M": "ശാസ്താംകോട്ട",
      "BT": "2",
      "BID": "15",
      "DID": "2"
    },
    {
      "E": "Oachira",
      "M": "ഓച്ചിറ",
      "BT": "2",
      "BID": "13",
      "DID": "2"
    },
    {
      "E": "Oachira",
      "M": "ഓച്ചിറ",
      "BT": "5",
      "BID": "13",
      "DID": "2"
    },
    {
      "E": "Kulasekharapuram",
      "M": "കുലശേഖരപുരം",
      "BT": "5",
      "BID": "13",
      "DID": "2"
    },
    {
      "E": "Clappana",
      "M": "ക്ളാപ്പന",
      "BT": "5",
      "BID": "13",
      "DID": "2"
    },
    {
      "E": "Thazhava",
      "M": "തഴവ",
      "BT": "5",
      "BID": "13",
      "DID": "2"
    },
    {
      "E": "Mynagappally",
      "M": "മൈനാഗപ്പള്ളി",
      "BT": "5",
      "BID": "14",
      "DID": "2"
    },
    {
      "E": "Alappad",
      "M": "ആലപ്പാട്",
      "BT": "5",
      "BID": "14",
      "DID": "2"
    },
    {
      "E": "Thodiyoor",
      "M": "തൊടിയൂര്‍",
      "BT": "5",
      "BID": "14",
      "DID": "2"
    },
    {
      "E": "Sasthamcotta",
      "M": "ശാസ്താംകോട്ട",
      "BT": "5",
      "BID": "15",
      "DID": "2"
    },
    {
      "E": "West Kallada",
      "M": "വെസ്റ് കല്ലട",
      "BT": "5",
      "BID": "15",
      "DID": "2"
    },
    {
      "E": "Sooranad South",
      "M": "ശൂരനാട് സൌത്ത്",
      "BT": "5",
      "BID": "15",
      "DID": "2"
    },
    {
      "E": "Poruvazhy",
      "M": "പോരുവഴി",
      "BT": "5",
      "BID": "15",
      "DID": "2"
    },
    {
      "E": "Kunnathoor",
      "M": "കുന്നത്തൂര്‍",
      "BT": "5",
      "BID": "15",
      "DID": "2"
    },
    {
      "E": "Sooranad North",
      "M": "ശൂരനാട് നോര്‍ത്ത്",
      "BT": "5",
      "BID": "15",
      "DID": "2"
    },
    {
      "E": "Ummannoor",
      "M": "ഉമ്മന്നൂര്‍",
      "BT": "5",
      "BID": "16",
      "DID": "2"
    },
    {
      "E": "Vettikavala",
      "M": "വെട്ടിക്കവല",
      "BT": "5",
      "BID": "16",
      "DID": "2"
    },
    {
      "E": "Melila",
      "M": "മേലില",
      "BT": "5",
      "BID": "16",
      "DID": "2"
    },
    {
      "E": "Mylom",
      "M": "മൈലം",
      "BT": "5",
      "BID": "16",
      "DID": "2"
    },
    {
      "E": "Kulakkada",
      "M": "കുളക്കട",
      "BT": "5",
      "BID": "16",
      "DID": "2"
    },
    {
      "E": "Pavithreswaram",
      "M": "പവിത്രേശ്വരം",
      "BT": "5",
      "BID": "16",
      "DID": "2"
    },
    {
      "E": "Vilakkudy",
      "M": "വിളക്കുടി",
      "BT": "5",
      "BID": "17",
      "DID": "2"
    },
    {
      "E": "Thalavoor",
      "M": "തലവൂര്‍",
      "BT": "5",
      "BID": "17",
      "DID": "2"
    },
    {
      "E": "Piravanthoor",
      "M": "പിറവന്തൂര്‍",
      "BT": "5",
      "BID": "17",
      "DID": "2"
    },
    {
      "E": "Punalur",
      "M": "പുനലൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "2"
    },
    {
      "E": "Pattazhi",
      "M": "പട്ടാഴി",
      "BT": "5",
      "BID": "17",
      "DID": "2"
    },
    {
      "E": "Pathanapuram",
      "M": "പത്തനാപുരം",
      "BT": "5",
      "BID": "17",
      "DID": "2"
    },
    {
      "E": "Kulathupuzha",
      "M": "കുളത്തൂപ്പുഴ",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Yeroor",
      "M": "ഏരൂര്‍",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Alayamon",
      "M": "അലയമണ്‍",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Anchal",
      "M": "അഞ്ചല്‍",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Karavaloor",
      "M": "കരവാളൂര്‍",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Thenmala",
      "M": "തെന്മല",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Aryankavu",
      "M": "ആര്യങ്കാവ്",
      "BT": "5",
      "BID": "18",
      "DID": "2"
    },
    {
      "E": "Veliyam",
      "M": "വെളിയം",
      "BT": "5",
      "BID": "19",
      "DID": "2"
    },
    {
      "E": "Pooyappally",
      "M": "പൂയപ്പള്ളി",
      "BT": "5",
      "BID": "19",
      "DID": "2"
    },
    {
      "E": "Kareepra",
      "M": "കരീപ്ര",
      "BT": "5",
      "BID": "19",
      "DID": "2"
    },
    {
      "E": "Ezhukone",
      "M": "എഴുകോണ്‍",
      "BT": "5",
      "BID": "19",
      "DID": "2"
    },
    {
      "E": "Neduvathoor",
      "M": "നെടുവത്തൂര്‍",
      "BT": "5",
      "BID": "19",
      "DID": "2"
    },
    {
      "E": "Perinad",
      "M": "പെരിനാട്",
      "BT": "5",
      "BID": "20",
      "DID": "2"
    },
    {
      "E": "Kundara",
      "M": "കുണ്ടറ",
      "BT": "5",
      "BID": "20",
      "DID": "2"
    },
    {
      "E": "East Kallada",
      "M": "കിഴക്കേ കല്ലട",
      "BT": "5",
      "BID": "20",
      "DID": "2"
    },
    {
      "E": "Perayam",
      "M": "പേരയം",
      "BT": "5",
      "BID": "20",
      "DID": "2"
    },
    {
      "E": "Munroethuruth",
      "M": "മണ്‍റോതുരുത്ത്",
      "BT": "5",
      "BID": "20",
      "DID": "2"
    },
    {
      "E": "Panayam",
      "M": "പനയം",
      "BT": "5",
      "BID": "20",
      "DID": "2"
    },
    {
      "E": "Thekkumbhagom",
      "M": "തെക്കുംഭാഗം",
      "BT": "5",
      "BID": "21",
      "DID": "2"
    },
    {
      "E": "Chavara",
      "M": "ചവറ",
      "BT": "5",
      "BID": "21",
      "DID": "2"
    },
    {
      "E": "Thevalakkara",
      "M": "തേവലക്കര",
      "BT": "5",
      "BID": "21",
      "DID": "2"
    },
    {
      "E": "Panmana",
      "M": "പന്‍മന",
      "BT": "5",
      "BID": "21",
      "DID": "2"
    },
    {
      "E": "Neendakara",
      "M": "നീണ്ടകര",
      "BT": "5",
      "BID": "21",
      "DID": "2"
    },
    {
      "E": "Thrikkaruva",
      "M": "തൃക്കരുവ",
      "BT": "5",
      "BID": "22",
      "DID": "2"
    },
    {
      "E": "Mayyanad",
      "M": "മയ്യനാട്",
      "BT": "5",
      "BID": "23",
      "DID": "2"
    },
    {
      "E": "Thrikkovilvattom",
      "M": "തൃക്കോവില്‍വട്ടം",
      "BT": "5",
      "BID": "23",
      "DID": "2"
    },
    {
      "E": "Kottamkara",
      "M": "കൊറ്റങ്കര",
      "BT": "5",
      "BID": "23",
      "DID": "2"
    },
    {
      "E": "Elampalloor",
      "M": "ഇളംപള്ളൂര്‍",
      "BT": "5",
      "BID": "23",
      "DID": "2"
    },
    {
      "E": "Poothakulam",
      "M": "പൂതക്കുളം",
      "BT": "5",
      "BID": "24",
      "DID": "2"
    },
    {
      "E": "Kalluvathukkal",
      "M": "കല്ലുവാതുക്കല്‍",
      "BT": "5",
      "BID": "24",
      "DID": "2"
    },
    {
      "E": "Chathannoor",
      "M": "ചാത്തന്നൂര്‍",
      "BT": "5",
      "BID": "24",
      "DID": "2"
    },
    {
      "E": "Adichanalloor",
      "M": "ആദിച്ചനല്ലൂര്‍",
      "BT": "5",
      "BID": "24",
      "DID": "2"
    },
    {
      "E": "Nedumpana",
      "M": "നെടുമ്പന",
      "BT": "5",
      "BID": "24",
      "DID": "2"
    },
    {
      "E": "Chithara",
      "M": "ചിതറ",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Kadakkal",
      "M": "കടയ്ക്കല്‍",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Chadayamangalam",
      "M": "ചടയമംഗലം",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Ittiva",
      "M": "ഇട്ടിവ",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Velinalloor",
      "M": "വെളിനല്ലൂര്‍",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Elamadu",
      "M": "ഇളമാട്",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Nilamel",
      "M": "നിലമേല്‍",
      "BT": "5",
      "BID": "25",
      "DID": "2"
    },
    {
      "E": "Koipuram",
      "M": "കോയിപ്രം",
      "BT": "2",
      "BID": "28",
      "DID": "3"
    },
    {
      "E": "Pulikeezhu",
      "M": "പുളിക്കീഴ്",
      "BT": "2",
      "BID": "27",
      "DID": "3"
    },
    {
      "E": "Mallappally",
      "M": "മല്ലപ്പള്ളി",
      "BT": "2",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Kodumon",
      "M": "കൊടുമണ്‍",
      "BT": "5",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Pallickal",
      "M": "പള്ളിയ്ക്കല്‍",
      "BT": "5",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Aranmula",
      "M": "ആറന്മുള",
      "BT": "5",
      "BID": "34",
      "DID": "3"
    },
    {
      "E": "Mezhuveli",
      "M": "മെഴുവേലി",
      "BT": "5",
      "BID": "34",
      "DID": "3"
    },
    {
      "E": "Kulanada",
      "M": "കുളനട",
      "BT": "5",
      "BID": "34",
      "DID": "3"
    },
    {
      "E": "Pathanamthitta",
      "M": "പത്തനംതിട്ട",
      "BT": "3",
      "BID": null,
      "DID": "3"
    },
    {
      "E": "Thiruvalla",
      "M": "തിരുവല്ല",
      "BT": "3",
      "BID": null,
      "DID": "3"
    },
    {
      "E": "Adoor",
      "M": "അടൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "3"
    },
    {
      "E": "Thannithodu",
      "M": "തണ്ണിത്തോട്",
      "BT": "5",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Pandalam Thekkekara",
      "M": "പന്തളം തെക്കേക്കര",
      "BT": "5",
      "BID": "32",
      "DID": "3"
    },
    {
      "E": "Thumpamon",
      "M": "തുമ്പമണ്‍",
      "BT": "5",
      "BID": "32",
      "DID": "3"
    },
    {
      "E": "Pathanamthitta",
      "M": "പത്തനംതിട്ട",
      "BT": "1",
      "BID": null,
      "DID": "3"
    },
    {
      "E": "Enadimangalam",
      "M": "ഏനാദിമംഗലം",
      "BT": "5",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Erathu",
      "M": "ഏറത്ത്",
      "BT": "5",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Malayalapuzha",
      "M": "മലയാലപ്പുഴ",
      "BT": "5",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Ezhamkulam",
      "M": "ഏഴംകുളം",
      "BT": "5",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Kadampanad",
      "M": "കടമ്പനാട്",
      "BT": "5",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Kalanjoor",
      "M": "കലഞ്ഞൂര്‍",
      "BT": "5",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Pandalam",
      "M": "പന്തളം",
      "BT": "3",
      "BID": null,
      "DID": "3"
    },
    {
      "E": "Parakkode",
      "M": "പറക്കോട്",
      "BT": "2",
      "BID": "33",
      "DID": "3"
    },
    {
      "E": "Pandalam",
      "M": "പന്തളം",
      "BT": "2",
      "BID": "32",
      "DID": "3"
    },
    {
      "E": "Konni",
      "M": "കോന്നി",
      "BT": "2",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Ranni",
      "M": "റാന്നി",
      "BT": "2",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Elanthoor",
      "M": "ഇലന്തൂര്‍",
      "BT": "2",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Anicadu",
      "M": "ആനിക്കാട്",
      "BT": "5",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Kaviyoor",
      "M": "കവിയൂര്‍",
      "BT": "5",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Kottanad",
      "M": "കൊറ്റനാട്",
      "BT": "5",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Kottangal",
      "M": "കോട്ടാങ്ങല്‍",
      "BT": "5",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Kallooppara",
      "M": "കല്ലൂപ്പാറ",
      "BT": "5",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Kunnamthanam",
      "M": "കുന്നന്താനം",
      "BT": "5",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Mallappally",
      "M": "മല്ലപ്പള്ളി",
      "BT": "5",
      "BID": "26",
      "DID": "3"
    },
    {
      "E": "Kadapra",
      "M": "കടപ്ര",
      "BT": "5",
      "BID": "27",
      "DID": "3"
    },
    {
      "E": "Kuttoor",
      "M": "കുറ്റൂര്‍",
      "BT": "5",
      "BID": "27",
      "DID": "3"
    },
    {
      "E": "Niranam",
      "M": "നിരണം",
      "BT": "5",
      "BID": "27",
      "DID": "3"
    },
    {
      "E": "Nedumpuram",
      "M": "നെടുമ്പ്രം",
      "BT": "5",
      "BID": "27",
      "DID": "3"
    },
    {
      "E": "Peringara",
      "M": "പെരിങ്ങര",
      "BT": "5",
      "BID": "27",
      "DID": "3"
    },
    {
      "E": "Ayroor",
      "M": "അയിരൂര്‍",
      "BT": "5",
      "BID": "28",
      "DID": "3"
    },
    {
      "E": "Eraviperoor",
      "M": "ഇരവിപേരൂര്‍",
      "BT": "5",
      "BID": "28",
      "DID": "3"
    },
    {
      "E": "Koipuram",
      "M": "കോയിപ്രം",
      "BT": "5",
      "BID": "28",
      "DID": "3"
    },
    {
      "E": "Thottappuzhassery",
      "M": "തോട്ടപ്പുഴശ്ശേരി",
      "BT": "5",
      "BID": "28",
      "DID": "3"
    },
    {
      "E": "Ezhumattoor",
      "M": "എഴുമറ്റൂര്‍",
      "BT": "5",
      "BID": "28",
      "DID": "3"
    },
    {
      "E": "Puramattom",
      "M": "പുറമറ്റം",
      "BT": "5",
      "BID": "28",
      "DID": "3"
    },
    {
      "E": "Omalloor",
      "M": "ഓമല്ലൂര്‍",
      "BT": "5",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Chenneerkara",
      "M": "ചെന്നീര്‍ക്കര",
      "BT": "5",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Elanthoor",
      "M": "ഇലന്തൂര്‍",
      "BT": "5",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Cherukole",
      "M": "ചെറുകോല്‍",
      "BT": "5",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Kozhencherry",
      "M": "കോഴഞ്ചരി",
      "BT": "5",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Mallappuzhassery",
      "M": "മല്ലപ്പുഴശ്ശേരി",
      "BT": "5",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Naranganam",
      "M": "നാരങ്ങാനം",
      "BT": "5",
      "BID": "29",
      "DID": "3"
    },
    {
      "E": "Ranni Pazhavangadi",
      "M": "റാന്നി പഴവങ്ങാടി",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Ranni",
      "M": "റാന്നി",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Ranni Angadi",
      "M": "റാന്നി അങ്ങാടി",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Ranni Perunadu",
      "M": "റാന്നി പെരുനാട്",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Vadaserikara",
      "M": "വടശ്ശേരിക്കര",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Chittar",
      "M": "ചിറ്റാര്‍",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Seethathodu",
      "M": "സീതത്തോട്",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Naranammoozhy",
      "M": "നാറാണംമൂഴി",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Vechoochira",
      "M": "വെച്ചൂച്ചിറ",
      "BT": "5",
      "BID": "30",
      "DID": "3"
    },
    {
      "E": "Konni",
      "M": "കോന്നി",
      "BT": "5",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Aruvappulam",
      "M": "അരുവാപ്പുലം",
      "BT": "5",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Pramadom",
      "M": "പ്രമാടം",
      "BT": "5",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Mylapra",
      "M": "മൈലപ്രാ",
      "BT": "5",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Vallicode",
      "M": "വള്ളിക്കോട്",
      "BT": "5",
      "BID": "31",
      "DID": "3"
    },
    {
      "E": "Cheruthana",
      "M": "ചെറുതന",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Pallippad",
      "M": "പള്ളിപ്പാട്",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Karuvatta",
      "M": "കരുവാറ്റ",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Kumarapuram",
      "M": "കുമാരപുരം",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Thrikkunnappuzha",
      "M": "തൃക്കുന്നപ്പുഴ",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Karthikappally",
      "M": "കാര്‍ത്തികപ്പള്ളി",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Chingoli",
      "M": "ചിങ്ങോലി",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Thiruvanvandoor",
      "M": "തിരുവന്‍വണ്ടൂര്‍",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Pandanad",
      "M": "പാണ്ടനാട്",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Mannar",
      "M": "മാന്നാര്‍",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Budhanoor",
      "M": "ബുധനൂര്‍",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Puliyoor",
      "M": "പുലിയൂര്‍",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Ala",
      "M": "ആല",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Cheriyanad",
      "M": "ചെറിയനാട്",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Venmoney",
      "M": "വെണ്മണി",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Mulakuzha",
      "M": "മുളക്കുഴ",
      "BT": "5",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Ramankary",
      "M": "രാമങ്കരി",
      "BT": "5",
      "BID": "41",
      "DID": "4"
    },
    {
      "E": "Pulincunnoo",
      "M": "പുളിങ്കുന്ന്",
      "BT": "5",
      "BID": "41",
      "DID": "4"
    },
    {
      "E": "Kavalam",
      "M": "കാവാലം",
      "BT": "5",
      "BID": "41",
      "DID": "4"
    },
    {
      "E": "Neelamperoor",
      "M": "നീലംപേരൂര്‍",
      "BT": "5",
      "BID": "41",
      "DID": "4"
    },
    {
      "E": "Veliyanad",
      "M": "വെളിയനാട്",
      "BT": "5",
      "BID": "41",
      "DID": "4"
    },
    {
      "E": "Muttar",
      "M": "മുട്ടാര്‍",
      "BT": "5",
      "BID": "41",
      "DID": "4"
    },
    {
      "E": "Kainakary",
      "M": "കൈനകരി",
      "BT": "5",
      "BID": "40",
      "DID": "4"
    },
    {
      "E": "Champakulam",
      "M": "ചമ്പക്കുളം",
      "BT": "5",
      "BID": "40",
      "DID": "4"
    },
    {
      "E": "Nedumudi",
      "M": "നെടുമുടി",
      "BT": "5",
      "BID": "40",
      "DID": "4"
    },
    {
      "E": "Thakazhy",
      "M": "തകഴി",
      "BT": "5",
      "BID": "40",
      "DID": "4"
    },
    {
      "E": "Edathua",
      "M": "എടത്വാ",
      "BT": "5",
      "BID": "40",
      "DID": "4"
    },
    {
      "E": "Thalavady",
      "M": "തലവടി",
      "BT": "5",
      "BID": "40",
      "DID": "4"
    },
    {
      "E": "Punnapra North",
      "M": "പുന്നപ്ര വടക്ക്",
      "BT": "5",
      "BID": "39",
      "DID": "4"
    },
    {
      "E": "Ambalapuzha North",
      "M": "അമ്പലപ്പുഴ വടക്ക്",
      "BT": "5",
      "BID": "39",
      "DID": "4"
    },
    {
      "E": "Punnapra South",
      "M": "പുന്നപ്ര തെക്ക്",
      "BT": "5",
      "BID": "39",
      "DID": "4"
    },
    {
      "E": "Ambalapuzha South",
      "M": "അമ്പലപ്പുഴ തെക്ക്",
      "BT": "5",
      "BID": "39",
      "DID": "4"
    },
    {
      "E": "Purakkad",
      "M": "പുറക്കാട്",
      "BT": "5",
      "BID": "39",
      "DID": "4"
    },
    {
      "E": "Mararikulam South",
      "M": "മാരാരിക്കുളം തെക്ക്",
      "BT": "5",
      "BID": "38",
      "DID": "4"
    },
    {
      "E": "Mannancherry",
      "M": "മണ്ണഞ്ചരി",
      "BT": "5",
      "BID": "38",
      "DID": "4"
    },
    {
      "E": "Aryad",
      "M": "ആര്യാട്",
      "BT": "5",
      "BID": "38",
      "DID": "4"
    },
    {
      "E": "Cherthala South",
      "M": "ചേര്‍ത്തല തെക്ക്",
      "BT": "5",
      "BID": "37",
      "DID": "4"
    },
    {
      "E": "Haripad",
      "M": "ഹരിപ്പാട്",
      "BT": "3",
      "BID": null,
      "DID": "4"
    },
    {
      "E": "Pattanakkad",
      "M": "പട്ടണക്കാട്",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Thycattussery",
      "M": "തൈക്കാട്ടുശ്ശേരി",
      "BT": "2",
      "BID": "35",
      "DID": "4"
    },
    {
      "E": "Muhamma",
      "M": "മുഹമ്മ",
      "BT": "5",
      "BID": "37",
      "DID": "4"
    },
    {
      "E": "Thanneermukkom",
      "M": "തണ്ണീര്‍മുക്കം",
      "BT": "5",
      "BID": "37",
      "DID": "4"
    },
    {
      "E": "Kanjikuzhy",
      "M": "കഞ്ഞിക്കുഴി",
      "BT": "5",
      "BID": "37",
      "DID": "4"
    },
    {
      "E": "Mararikulam North",
      "M": "മാരാരിക്കുളം വടക്ക്",
      "BT": "5",
      "BID": "37",
      "DID": "4"
    },
    {
      "E": "Pattanakkad",
      "M": "പട്ടണക്കാട്",
      "BT": "2",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Aroor",
      "M": "അരൂര്‍",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Ezhupunna",
      "M": "എഴുപുന്ന",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Kanjikuzhy",
      "M": "കഞ്ഞിക്കുഴി",
      "BT": "2",
      "BID": "37",
      "DID": "4"
    },
    {
      "E": "Aryad",
      "M": "ആര്യാട്",
      "BT": "2",
      "BID": "38",
      "DID": "4"
    },
    {
      "E": "Ambalapuzha",
      "M": "അമ്പലപ്പുഴ",
      "BT": "2",
      "BID": "39",
      "DID": "4"
    },
    {
      "E": "Champakulam",
      "M": "ചമ്പക്കുളം",
      "BT": "2",
      "BID": "40",
      "DID": "4"
    },
    {
      "E": "Veliyanad",
      "M": "വെളിയനാട്",
      "BT": "2",
      "BID": "41",
      "DID": "4"
    },
    {
      "E": "Alappuzha",
      "M": "ആലപ്പുഴ",
      "BT": "1",
      "BID": null,
      "DID": "4"
    },
    {
      "E": "Kodamthuruth",
      "M": "കോടംതുരുത്ത്",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Kuthiathod",
      "M": "കുത്തിയതോട്",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Thuravoor",
      "M": "തുറവൂര്‍",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Chengannur",
      "M": "ചെങ്ങന്നൂര്‍",
      "BT": "2",
      "BID": "42",
      "DID": "4"
    },
    {
      "E": "Haripad",
      "M": "ഹരിപ്പാട്",
      "BT": "2",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Mavelikara",
      "M": "മാവേലിക്കര",
      "BT": "2",
      "BID": "44",
      "DID": "4"
    },
    {
      "E": "Vayalar",
      "M": "വയലാര്‍",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Kadakkarappally",
      "M": "കടക്കരപ്പള്ളി",
      "BT": "5",
      "BID": "36",
      "DID": "4"
    },
    {
      "E": "Bharanickavu",
      "M": "ഭരണിക്കാവ്",
      "BT": "2",
      "BID": "45",
      "DID": "4"
    },
    {
      "E": "Muthukulam",
      "M": "മുതുകുളം",
      "BT": "2",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Devikulangara",
      "M": "ദേവികുളങ്ങര",
      "BT": "5",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Krishnapuram",
      "M": "കൃഷ്ണപുരം",
      "BT": "5",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Arattupuzha",
      "M": "ആറാട്ടുപുഴ",
      "BT": "5",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Muthukulam",
      "M": "മുതുകുളം",
      "BT": "5",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Cheppad",
      "M": "ചേപ്പാട്",
      "BT": "5",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Kandalloor",
      "M": "കണ്ടല്ലൂര്‍",
      "BT": "5",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Pathiyoor",
      "M": "പത്തിയൂര്‍",
      "BT": "5",
      "BID": "46",
      "DID": "4"
    },
    {
      "E": "Chengannur",
      "M": "ചെങ്ങന്നൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "4"
    },
    {
      "E": "Mavelikara",
      "M": "മാവേലിക്കര",
      "BT": "3",
      "BID": null,
      "DID": "4"
    },
    {
      "E": "Cherthala",
      "M": "ചേര്‍ത്തല",
      "BT": "3",
      "BID": null,
      "DID": "4"
    },
    {
      "E": "Kayamkulam",
      "M": "കായംകുളം",
      "BT": "3",
      "BID": null,
      "DID": "4"
    },
    {
      "E": "Alappuzha",
      "M": "ആലപ്പുഴ",
      "BT": "3",
      "BID": null,
      "DID": "4"
    },
    {
      "E": "Thycattussery",
      "M": "തൈക്കാട്ടുശ്ശേരി",
      "BT": "5",
      "BID": "35",
      "DID": "4"
    },
    {
      "E": "Perumpalam",
      "M": "പെരുമ്പളം",
      "BT": "5",
      "BID": "35",
      "DID": "4"
    },
    {
      "E": "Panavally",
      "M": "പാണാവള്ളി",
      "BT": "5",
      "BID": "35",
      "DID": "4"
    },
    {
      "E": "Chennam Pallippuram",
      "M": "ചേന്നം പള്ളിപ്പുറം",
      "BT": "5",
      "BID": "35",
      "DID": "4"
    },
    {
      "E": "Arookutty",
      "M": "അരൂക്കുറ്റി",
      "BT": "5",
      "BID": "35",
      "DID": "4"
    },
    {
      "E": "Palamel",
      "M": "പാലമേല്‍",
      "BT": "5",
      "BID": "45",
      "DID": "4"
    },
    {
      "E": "Chunakara",
      "M": "ചുനക്കര",
      "BT": "5",
      "BID": "45",
      "DID": "4"
    },
    {
      "E": "Mavelikara Thamarakulam",
      "M": "മാവേലിക്കര താമരക്കുളം",
      "BT": "5",
      "BID": "45",
      "DID": "4"
    },
    {
      "E": "Bharanickavu",
      "M": "ഭരണിക്കാവ്",
      "BT": "5",
      "BID": "45",
      "DID": "4"
    },
    {
      "E": "Vallikunnam",
      "M": "വള്ളികുന്നം",
      "BT": "5",
      "BID": "45",
      "DID": "4"
    },
    {
      "E": "Nooranad",
      "M": "നൂറനാട്",
      "BT": "5",
      "BID": "45",
      "DID": "4"
    },
    {
      "E": "Thazhakara",
      "M": "തഴക്കര",
      "BT": "5",
      "BID": "44",
      "DID": "4"
    },
    {
      "E": "Chennithala-Thripperumthura",
      "M": "ചെന്നിത്തല- തൃപ്പെരുന്തുറ",
      "BT": "5",
      "BID": "44",
      "DID": "4"
    },
    {
      "E": "Chettikulangara",
      "M": "ചെട്ടികുളങ്ങര",
      "BT": "5",
      "BID": "44",
      "DID": "4"
    },
    {
      "E": "Mavelikara Thekkekara",
      "M": "മാവേലിക്കര തെക്കേക്കര",
      "BT": "5",
      "BID": "44",
      "DID": "4"
    },
    {
      "E": "Veeyapuram",
      "M": "വീയപുരം",
      "BT": "5",
      "BID": "43",
      "DID": "4"
    },
    {
      "E": "Ramapuram",
      "M": "രാമപുരം",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Parathodu",
      "M": "പാറത്തോട്",
      "BT": "5",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Changanassery",
      "M": "ചങ്ങനാശ്ശേരി",
      "BT": "3",
      "BID": null,
      "DID": "5"
    },
    {
      "E": "Vaikom",
      "M": "വൈക്കം",
      "BT": "3",
      "BID": null,
      "DID": "5"
    },
    {
      "E": "Pala",
      "M": "പാലാ",
      "BT": "3",
      "BID": null,
      "DID": "5"
    },
    {
      "E": "Kottayam",
      "M": "കോട്ടയം",
      "BT": "1",
      "BID": null,
      "DID": "5"
    },
    {
      "E": "Koruthodu",
      "M": "കോരുത്തോട്",
      "BT": "5",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Ettumanoor",
      "M": "ഏറ്റുമാനൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "5"
    },
    {
      "E": "Erattupetta",
      "M": "ഈരാറ്റുപേട്ട",
      "BT": "3",
      "BID": null,
      "DID": "5"
    },
    {
      "E": "Kanjirappally",
      "M": "കാഞ്ഞിരപ്പള്ളി",
      "BT": "2",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Vazhoor",
      "M": "വാഴൂര്‍",
      "BT": "2",
      "BID": "56",
      "DID": "5"
    },
    {
      "E": "Madappally",
      "M": "മാടപ്പള്ളി",
      "BT": "2",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Pallom",
      "M": "പള്ളം",
      "BT": "2",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Pampady",
      "M": "പാമ്പാടി",
      "BT": "2",
      "BID": "53",
      "DID": "5"
    },
    {
      "E": "Erattupetta",
      "M": "ഈരാറ്റുപേട്ട",
      "BT": "2",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Lalam",
      "M": "ളാലം",
      "BT": "2",
      "BID": "51",
      "DID": "5"
    },
    {
      "E": "Uzhavoor",
      "M": "ഉഴവൂര്‍",
      "BT": "2",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Ettumanoor",
      "M": "ഏറ്റുമാനൂര്‍",
      "BT": "2",
      "BID": "49",
      "DID": "5"
    },
    {
      "E": "Kaduthuruthy",
      "M": "കടുത്തുരുത്തി",
      "BT": "2",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Vaikom",
      "M": "വൈക്കം",
      "BT": "2",
      "BID": "47",
      "DID": "5"
    },
    {
      "E": "Thalayazham",
      "M": "തലയാഴം",
      "BT": "5",
      "BID": "47",
      "DID": "5"
    },
    {
      "E": "Chempu",
      "M": "ചെമ്പ്",
      "BT": "5",
      "BID": "47",
      "DID": "5"
    },
    {
      "E": "Maravanthuruthu",
      "M": "മറവന്‍തുരുത്ത്",
      "BT": "5",
      "BID": "47",
      "DID": "5"
    },
    {
      "E": "TV Puram",
      "M": "ടി.വി.പുരം",
      "BT": "5",
      "BID": "47",
      "DID": "5"
    },
    {
      "E": "Vechoor",
      "M": "വെച്ചൂര്‍",
      "BT": "5",
      "BID": "47",
      "DID": "5"
    },
    {
      "E": "Udayanapuram",
      "M": "ഉദയനാപുരം",
      "BT": "5",
      "BID": "47",
      "DID": "5"
    },
    {
      "E": "Kaduthuruthy",
      "M": "കടുത്തുരുത്തി",
      "BT": "5",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Kallara",
      "M": "കല്ലറ",
      "BT": "5",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Manjoor",
      "M": "മാഞ്ഞൂര്‍",
      "BT": "5",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Mulakulam",
      "M": "മുളക്കുളം",
      "BT": "5",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Neezhoor",
      "M": "ഞീഴൂര്‍",
      "BT": "5",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Thalayolaparambu",
      "M": "തലയോലപ്പറമ്പ്",
      "BT": "5",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Velloor",
      "M": "വെള്ളൂര്‍",
      "BT": "5",
      "BID": "48",
      "DID": "5"
    },
    {
      "E": "Aymanam",
      "M": "അയ്മനം",
      "BT": "5",
      "BID": "49",
      "DID": "5"
    },
    {
      "E": "Athirampuzha",
      "M": "അതിരമ്പുഴ",
      "BT": "5",
      "BID": "49",
      "DID": "5"
    },
    {
      "E": "Arpookara",
      "M": "ആര്‍പ്പൂക്കര",
      "BT": "5",
      "BID": "49",
      "DID": "5"
    },
    {
      "E": "Neendoor",
      "M": "നീണ്ടൂര്‍",
      "BT": "5",
      "BID": "49",
      "DID": "5"
    },
    {
      "E": "Kadaplamattom",
      "M": "കടപ്ളാമറ്റം",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Marangattupilly",
      "M": "മരങ്ങാട്ടുപിള്ളി",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Kanakkary",
      "M": "കാണക്കാരി",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Veliyannoor",
      "M": "വെളിയന്നൂര്‍",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Kidangoor",
      "M": "കിടങ്ങൂര്‍",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Kuravilangad",
      "M": "കുറവിലങ്ങാട്",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Uzhavoor",
      "M": "ഉഴവൂര്‍",
      "BT": "5",
      "BID": "50",
      "DID": "5"
    },
    {
      "E": "Kottayam",
      "M": "കോട്ടയം",
      "BT": "3",
      "BID": null,
      "DID": "5"
    },
    {
      "E": "Bharananganam",
      "M": "ഭരണങ്ങാനം",
      "BT": "5",
      "BID": "51",
      "DID": "5"
    },
    {
      "E": "Karoor",
      "M": "കരൂര്‍",
      "BT": "5",
      "BID": "51",
      "DID": "5"
    },
    {
      "E": "Kozhuvanal",
      "M": "കൊഴുവനാല്‍",
      "BT": "5",
      "BID": "51",
      "DID": "5"
    },
    {
      "E": "Kadanad",
      "M": "കടനാട്",
      "BT": "5",
      "BID": "51",
      "DID": "5"
    },
    {
      "E": "Meenachil",
      "M": "മീനച്ചില്‍",
      "BT": "5",
      "BID": "51",
      "DID": "5"
    },
    {
      "E": "Mutholy",
      "M": "മുത്തോലി",
      "BT": "5",
      "BID": "51",
      "DID": "5"
    },
    {
      "E": "Melukavu",
      "M": "മേലുകാവ്",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Moonnilavu",
      "M": "മൂന്നിലവ്",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Poonjar",
      "M": "പൂഞ്ഞാര്‍",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Poonjar Thekkekara",
      "M": "പൂഞ്ഞാര്‍ തെക്കേക്കര",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Thalappalam",
      "M": "തലപ്പലം",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Teekoy",
      "M": "തീക്കോയി",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Thalanad",
      "M": "തലനാട്",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Thidanad",
      "M": "തിടനാട്",
      "BT": "5",
      "BID": "52",
      "DID": "5"
    },
    {
      "E": "Akalakunnam",
      "M": "അകലക്കുന്നം",
      "BT": "5",
      "BID": "53",
      "DID": "5"
    },
    {
      "E": "Elikulam",
      "M": "എലിക്കുളം",
      "BT": "5",
      "BID": "53",
      "DID": "5"
    },
    {
      "E": "Kooroppada",
      "M": "കൂരോപ്പട",
      "BT": "5",
      "BID": "53",
      "DID": "5"
    },
    {
      "E": "Pampady",
      "M": "പാമ്പാടി",
      "BT": "5",
      "BID": "53",
      "DID": "5"
    },
    {
      "E": "Pallickathodu",
      "M": "പള്ളിക്കത്തോട്",
      "BT": "5",
      "BID": "53",
      "DID": "5"
    },
    {
      "E": "Meenadom",
      "M": "മീനടം",
      "BT": "5",
      "BID": "53",
      "DID": "5"
    },
    {
      "E": "Ayarkunnam",
      "M": "അയര്‍കുന്നം",
      "BT": "5",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Kumarakom",
      "M": "കുമരകം",
      "BT": "5",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Puthuppally",
      "M": "പുതുപ്പള്ളി",
      "BT": "5",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Panachikkad",
      "M": "പനച്ചിക്കാട്",
      "BT": "5",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Thiruvarppu",
      "M": "തിരുവാര്‍പ്പ്",
      "BT": "5",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Vijayapuram",
      "M": "വിജയപുരം",
      "BT": "5",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Manarcadu",
      "M": "മണര്‍കാട്",
      "BT": "5",
      "BID": "54",
      "DID": "5"
    },
    {
      "E": "Karukachal",
      "M": "കറുകച്ചാല്‍",
      "BT": "5",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Kurichy",
      "M": "കുറിച്ചി",
      "BT": "5",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Madappally",
      "M": "മാടപ്പള്ളി",
      "BT": "5",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Paippad",
      "M": "പായിപ്പാട്",
      "BT": "5",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Thrickodithanam",
      "M": "തൃക്കൊടിത്താനം",
      "BT": "5",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Vakathanam",
      "M": "വാകത്താനം",
      "BT": "5",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Vazhappally",
      "M": "വാഴപ്പള്ളി",
      "BT": "5",
      "BID": "55",
      "DID": "5"
    },
    {
      "E": "Chirakkadavu",
      "M": "ചിറക്കടവ്",
      "BT": "5",
      "BID": "56",
      "DID": "5"
    },
    {
      "E": "Kangazha",
      "M": "കങ്ങഴ",
      "BT": "5",
      "BID": "56",
      "DID": "5"
    },
    {
      "E": "Nedumkunnam",
      "M": "നെടുംകുന്നം",
      "BT": "5",
      "BID": "56",
      "DID": "5"
    },
    {
      "E": "Vellavoor",
      "M": "വെള്ളാവൂര്‍",
      "BT": "5",
      "BID": "56",
      "DID": "5"
    },
    {
      "E": "Vazhoor",
      "M": "വാഴൂര്‍",
      "BT": "5",
      "BID": "56",
      "DID": "5"
    },
    {
      "E": "Erumely",
      "M": "എരുമേലി",
      "BT": "5",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Kanjirappally",
      "M": "കാഞ്ഞിരപ്പള്ളി",
      "BT": "5",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Koottickal",
      "M": "കൂട്ടിക്കല്‍",
      "BT": "5",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Manimala",
      "M": "മണിമല",
      "BT": "5",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Mundakayam",
      "M": "മുണ്ടക്കയം",
      "BT": "5",
      "BID": "57",
      "DID": "5"
    },
    {
      "E": "Elemdesam",
      "M": "ഇളംദേശം",
      "BT": "2",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Nedumkandam",
      "M": "നെടുങ്കണ്ടം",
      "BT": "2",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Devikulam",
      "M": "ദേവികുളം",
      "BT": "2",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Adimaly",
      "M": "അടിമാലി",
      "BT": "2",
      "BID": "58",
      "DID": "6"
    },
    {
      "E": "Thodupuzha",
      "M": "തൊടുപുഴ",
      "BT": "3",
      "BID": null,
      "DID": "6"
    },
    {
      "E": "Mariyapuram",
      "M": "മരിയാപുരം",
      "BT": "5",
      "BID": "62",
      "DID": "6"
    },
    {
      "E": "Vandiperiyar",
      "M": "വണ്ടിപ്പെരിയാര്‍",
      "BT": "5",
      "BID": "65",
      "DID": "6"
    },
    {
      "E": "Elappara",
      "M": "ഏലപ്പാറ",
      "BT": "5",
      "BID": "65",
      "DID": "6"
    },
    {
      "E": "Peermade",
      "M": "പീരുമേട്",
      "BT": "5",
      "BID": "65",
      "DID": "6"
    },
    {
      "E": "Manakkad",
      "M": "മണക്കാട്",
      "BT": "5",
      "BID": "64",
      "DID": "6"
    },
    {
      "E": "Karimkunnam",
      "M": "കരിങ്കുന്നം",
      "BT": "5",
      "BID": "64",
      "DID": "6"
    },
    {
      "E": "Idukki",
      "M": "ഇടുക്കി",
      "BT": "1",
      "BID": null,
      "DID": "6"
    },
    {
      "E": "Kokkayar",
      "M": "കൊക്കയാര്‍",
      "BT": "5",
      "BID": "65",
      "DID": "6"
    },
    {
      "E": "Kumily",
      "M": "കുമിളി",
      "BT": "5",
      "BID": "65",
      "DID": "6"
    },
    {
      "E": "Devikulam",
      "M": "ദേവികുളം",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Edavetty",
      "M": "ഇടവെട്ടി",
      "BT": "5",
      "BID": "64",
      "DID": "6"
    },
    {
      "E": "Kumaramangalam",
      "M": "കുമാരമംഗലം",
      "BT": "5",
      "BID": "64",
      "DID": "6"
    },
    {
      "E": "Muttom",
      "M": "മുട്ടം",
      "BT": "5",
      "BID": "64",
      "DID": "6"
    },
    {
      "E": "Edamalakkudy ",
      "M": "ഇടമലക്കുടി ",
      "BT": "5",
      "BID": null,
      "DID": "6"
    },
    {
      "E": "Peruvanthanam",
      "M": "പെരുവന്താനം",
      "BT": "5",
      "BID": "65",
      "DID": "6"
    },
    {
      "E": "Purapuzha",
      "M": "പുറപ്പുഴ",
      "BT": "5",
      "BID": "64",
      "DID": "6"
    },
    {
      "E": "Kattappana",
      "M": "കട്ടപ്പന",
      "BT": "3",
      "BID": null,
      "DID": "6"
    },
    {
      "E": "Chakkupallam",
      "M": "ചക്കുപള്ളം",
      "BT": "5",
      "BID": "63",
      "DID": "6"
    },
    {
      "E": "AyyappanCoil",
      "M": "അയ്യപ്പന്‍ കോവില്‍",
      "BT": "5",
      "BID": "63",
      "DID": "6"
    },
    {
      "E": "Erattayar",
      "M": "ഇരട്ടയാര്‍",
      "BT": "5",
      "BID": "63",
      "DID": "6"
    },
    {
      "E": "Kanchiyar",
      "M": "കാഞ്ചിയാര്‍",
      "BT": "5",
      "BID": "63",
      "DID": "6"
    },
    {
      "E": "Vandanmedu",
      "M": "വണ്ടന്‍മേട്",
      "BT": "5",
      "BID": "63",
      "DID": "6"
    },
    {
      "E": "Upputhara",
      "M": "ഉപ്പുതറ",
      "BT": "5",
      "BID": "63",
      "DID": "6"
    },
    {
      "E": "Vazhathope",
      "M": "വാഴത്തോപ്പ്",
      "BT": "5",
      "BID": "62",
      "DID": "6"
    },
    {
      "E": "Kamakshy",
      "M": "കാമാക്ഷി",
      "BT": "5",
      "BID": "62",
      "DID": "6"
    },
    {
      "E": "Arakulam",
      "M": "അറക്കുളം",
      "BT": "5",
      "BID": "62",
      "DID": "6"
    },
    {
      "E": "Vathikudy",
      "M": "വാത്തിക്കുടി",
      "BT": "5",
      "BID": "62",
      "DID": "6"
    },
    {
      "E": "IdukkiKanjikuzhy",
      "M": "ഇടുക്കി കഞ്ഞിക്കുഴി",
      "BT": "5",
      "BID": "62",
      "DID": "6"
    },
    {
      "E": "Kudayathoor",
      "M": "കുടയത്തൂര്‍",
      "BT": "5",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Karimannoor",
      "M": "കരിമണ്ണൂര്‍",
      "BT": "5",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Velliyamattom",
      "M": "വെളളിയാമറ്റം",
      "BT": "5",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Alakode",
      "M": "ആലക്കോട്",
      "BT": "5",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Kodikulam",
      "M": "കോടിക്കുളം",
      "BT": "5",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Azhutha",
      "M": "അഴുത",
      "BT": "2",
      "BID": "65",
      "DID": "6"
    },
    {
      "E": "Thodupuzha",
      "M": "തൊടുപുഴ",
      "BT": "2",
      "BID": "64",
      "DID": "6"
    },
    {
      "E": "Kattappana",
      "M": "കട്ടപ്പന",
      "BT": "2",
      "BID": "63",
      "DID": "6"
    },
    {
      "E": "Idukki",
      "M": "ഇടുക്കി",
      "BT": "2",
      "BID": "62",
      "DID": "6"
    },
    {
      "E": "Udumbanoor",
      "M": "ഉടുമ്പന്നൂര്‍",
      "BT": "5",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Adimaly",
      "M": "അടിമാലി",
      "BT": "5",
      "BID": "58",
      "DID": "6"
    },
    {
      "E": "Konnathady",
      "M": "കൊന്നത്തടി",
      "BT": "5",
      "BID": "58",
      "DID": "6"
    },
    {
      "E": "BysonValley",
      "M": "ബൈസണ്‍ വാലി",
      "BT": "5",
      "BID": "58",
      "DID": "6"
    },
    {
      "E": "Vellathooval",
      "M": "വെള്ളത്തൂവല്‍",
      "BT": "5",
      "BID": "58",
      "DID": "6"
    },
    {
      "E": "Pallivasal",
      "M": "പള്ളിവാസല്‍",
      "BT": "5",
      "BID": "58",
      "DID": "6"
    },
    {
      "E": "Marayoor",
      "M": "മറയൂര്‍",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Munnar",
      "M": "മൂന്നാര്‍",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Kanthalloor",
      "M": "കാന്തല്ലൂര്‍",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Vattavada",
      "M": "വട്ടവട",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Santhanpara",
      "M": "ശാന്തന്‍പാറ",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Chinnakanal",
      "M": "ചിന്നക്കനാല്‍",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Mankulam",
      "M": "മാങ്കുളം",
      "BT": "5",
      "BID": "59",
      "DID": "6"
    },
    {
      "E": "Pampadumpara",
      "M": "പാമ്പാടുംപാറ",
      "BT": "5",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Senapathy",
      "M": "സേനാപതി",
      "BT": "5",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Karunapuram",
      "M": "കരുണാപുരം",
      "BT": "5",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Rajakkad",
      "M": "രാജക്കാട്",
      "BT": "5",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Nedumkandam",
      "M": "നെടുങ്കണ്ടം",
      "BT": "5",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Udumbanchola",
      "M": "ഉടുമ്പന്‍ചോല",
      "BT": "5",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Rajakumary",
      "M": "രാജകുമാരി",
      "BT": "5",
      "BID": "60",
      "DID": "6"
    },
    {
      "E": "Vannappuram",
      "M": "വണ്ണപ്പുറം",
      "BT": "5",
      "BID": "61",
      "DID": "6"
    },
    {
      "E": "Kizhakkambalam",
      "M": "കിഴക്കമ്പലം",
      "BT": "5",
      "BID": "70",
      "DID": "7"
    },
    {
      "E": "Aluva",
      "M": "ആലുവ",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Alangad",
      "M": "ആലങ്ങാട്",
      "BT": "2",
      "BID": "67",
      "DID": "7"
    },
    {
      "E": "Angamaly",
      "M": "അങ്കമാലി",
      "BT": "2",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Koovappady",
      "M": "കൂവപ്പടി",
      "BT": "2",
      "BID": "69",
      "DID": "7"
    },
    {
      "E": "Vazhakulam",
      "M": "വാഴക്കുളം",
      "BT": "2",
      "BID": "70",
      "DID": "7"
    },
    {
      "E": "Edappally",
      "M": "ഇടപ്പള്ളി",
      "BT": "2",
      "BID": "71",
      "DID": "7"
    },
    {
      "E": "Vypin",
      "M": "വൈപ്പിന്‍",
      "BT": "2",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Palluruthy",
      "M": "പള്ളുരുത്തി",
      "BT": "2",
      "BID": "73",
      "DID": "7"
    },
    {
      "E": "Mulanthuruthy",
      "M": "മുളന്തുരുത്തി",
      "BT": "2",
      "BID": "75",
      "DID": "7"
    },
    {
      "E": "Vadavucode",
      "M": "വടവുകോട്",
      "BT": "2",
      "BID": "76",
      "DID": "7"
    },
    {
      "E": "Kothamangalam",
      "M": "കോതമംഗലം",
      "BT": "2",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Pampakuda",
      "M": "പാമ്പാക്കുട",
      "BT": "2",
      "BID": "78",
      "DID": "7"
    },
    {
      "E": "Parakkadavu",
      "M": "പാറക്കടവ്",
      "BT": "2",
      "BID": "79",
      "DID": "7"
    },
    {
      "E": "Muvattupuzha",
      "M": "മൂവാറ്റുപുഴ",
      "BT": "2",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Piravom",
      "M": "പിറവം",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Koothattukulam",
      "M": "കൂത്താട്ടുകുളം",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Maradu ",
      "M": "മരട് ",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Eloor ",
      "M": "ഏലൂര്‍ ",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Thrikkakara ",
      "M": "തൃക്കാക്കര ",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Ernakulam",
      "M": "എറണാകുളം",
      "BT": "1",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Cochin",
      "M": "കൊച്ചി",
      "BT": "4",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Kalamassery",
      "M": "കളമശ്ശേരി",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Kothamangalam",
      "M": "കോതമംഗലം",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Angamaly",
      "M": "അങ്കമാലി",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Tripunithura",
      "M": "തൃപ്പൂണിത്തുറ",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Muvattupuzha",
      "M": "മൂവാറ്റുപുഴ",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "North Paravur",
      "M": "വടക്കന്‍ പറവൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Perumbavoor",
      "M": "പെരുമ്പാവൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "7"
    },
    {
      "E": "Chendamangalam",
      "M": "ചേന്ദമംഗലം ",
      "BT": "5",
      "BID": "66",
      "DID": "7"
    },
    {
      "E": "Kottuvally",
      "M": "കോട്ടുവള്ളി",
      "BT": "5",
      "BID": "66",
      "DID": "7"
    },
    {
      "E": "Ezhikkara",
      "M": "ഏഴിക്കര",
      "BT": "5",
      "BID": "66",
      "DID": "7"
    },
    {
      "E": "Vadakkekkara",
      "M": "വടക്കേക്കര",
      "BT": "5",
      "BID": "66",
      "DID": "7"
    },
    {
      "E": "Chittattukara",
      "M": "ചിറ്റാറ്റുകര",
      "BT": "5",
      "BID": "66",
      "DID": "7"
    },
    {
      "E": "Karumallur",
      "M": "കരുമാല്ലൂര്‍",
      "BT": "5",
      "BID": "67",
      "DID": "7"
    },
    {
      "E": "Varapuzha",
      "M": "വരാപ്പുഴ",
      "BT": "5",
      "BID": "67",
      "DID": "7"
    },
    {
      "E": "Alangad",
      "M": "ആലങ്ങാട്",
      "BT": "5",
      "BID": "67",
      "DID": "7"
    },
    {
      "E": "Kadungalloor",
      "M": "കടുങ്ങല്ലൂര്‍",
      "BT": "5",
      "BID": "67",
      "DID": "7"
    },
    {
      "E": "Mookkannur",
      "M": "മൂക്കന്നൂര്‍",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Thuravoor",
      "M": "തുറവൂര്‍",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Manjapra",
      "M": "മഞ്ഞപ്ര",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Karukutty",
      "M": "കറുകുറ്റി",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Ayyampuzha",
      "M": "അയ്യമ്പുഴ",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Sreemoolanagaram",
      "M": "ശ്രീമൂലനഗരം",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Kanjoor",
      "M": "കാഞ്ഞൂര്‍",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Kalady",
      "M": "കാലടി",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "MalayattoorNeeleswaram",
      "M": "മലയാറ്റൂര്‍ നീലേശ്വരം",
      "BT": "5",
      "BID": "68",
      "DID": "7"
    },
    {
      "E": "Asamannoor",
      "M": "അശമന്നൂര്‍",
      "BT": "5",
      "BID": "69",
      "DID": "7"
    },
    {
      "E": "Mudakuzha",
      "M": "മുടക്കുഴ",
      "BT": "5",
      "BID": "69",
      "DID": "7"
    },
    {
      "E": "Vengoor",
      "M": "വേങ്ങൂര്‍",
      "BT": "5",
      "BID": "69",
      "DID": "7"
    },
    {
      "E": "Rayamangalam",
      "M": "രായമംഗലം",
      "BT": "5",
      "BID": "69",
      "DID": "7"
    },
    {
      "E": "Koovappady",
      "M": "കൂവപ്പടി",
      "BT": "5",
      "BID": "69",
      "DID": "7"
    },
    {
      "E": "Okkal",
      "M": "ഒക്കല്‍",
      "BT": "5",
      "BID": "69",
      "DID": "7"
    },
    {
      "E": "Vengola",
      "M": "വെങ്ങോല",
      "BT": "5",
      "BID": "70",
      "DID": "7"
    },
    {
      "E": "Vazhakulam",
      "M": "വാഴക്കുളം",
      "BT": "5",
      "BID": "70",
      "DID": "7"
    },
    {
      "E": "Paravur",
      "M": "പറവൂര്‍",
      "BT": "2",
      "BID": "66",
      "DID": "7"
    },
    {
      "E": "Choornikkara",
      "M": "ചൂര്‍ണ്ണിക്കര",
      "BT": "5",
      "BID": "70",
      "DID": "7"
    },
    {
      "E": "Edathala",
      "M": "എടത്തല",
      "BT": "5",
      "BID": "70",
      "DID": "7"
    },
    {
      "E": "Keezhmad",
      "M": "കീഴ്മാട്",
      "BT": "5",
      "BID": "70",
      "DID": "7"
    },
    {
      "E": "Kadamakudy",
      "M": "കടമക്കുടി",
      "BT": "5",
      "BID": "71",
      "DID": "7"
    },
    {
      "E": "Cheranalloor",
      "M": "ചേരാനല്ലൂര്‍",
      "BT": "5",
      "BID": "71",
      "DID": "7"
    },
    {
      "E": "Mulavukad",
      "M": "മുളവുകാട്",
      "BT": "5",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Narakal",
      "M": "ഞാറക്കല്‍",
      "BT": "5",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Nayarambalam",
      "M": "നായരമ്പലം",
      "BT": "5",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Edavanakkad",
      "M": "എടവനക്കാട്",
      "BT": "5",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Elankunnapuzha",
      "M": "എളങ്കുന്നപ്പുഴ",
      "BT": "5",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Pallippuram",
      "M": "പള്ളിപ്പുറം",
      "BT": "5",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Kuzhuppilly",
      "M": "കുഴുപ്പിള്ളി",
      "BT": "5",
      "BID": "72",
      "DID": "7"
    },
    {
      "E": "Chellanam",
      "M": "ചെല്ലാനം",
      "BT": "5",
      "BID": "73",
      "DID": "7"
    },
    {
      "E": "Kumbalanghi",
      "M": "കുമ്പളങ്ങി",
      "BT": "5",
      "BID": "73",
      "DID": "7"
    },
    {
      "E": "Kumbalam",
      "M": "കുമ്പളം",
      "BT": "5",
      "BID": "74",
      "DID": "7"
    },
    {
      "E": "Udayamperoor",
      "M": "ഉദയംപേരൂര്‍",
      "BT": "5",
      "BID": "75",
      "DID": "7"
    },
    {
      "E": "Mulanthuruthy",
      "M": "മുളന്തുരുത്തി",
      "BT": "5",
      "BID": "75",
      "DID": "7"
    },
    {
      "E": "Chottanikkara",
      "M": "ചോറ്റാനിക്കര",
      "BT": "5",
      "BID": "75",
      "DID": "7"
    },
    {
      "E": "Edakkattuvayal",
      "M": "എടയ്ക്കാട്ടുവയല്‍",
      "BT": "5",
      "BID": "75",
      "DID": "7"
    },
    {
      "E": "Amballoor",
      "M": "ആമ്പല്ലൂര്‍",
      "BT": "5",
      "BID": "75",
      "DID": "7"
    },
    {
      "E": "Poothrikka",
      "M": "പൂത്തൃക്ക",
      "BT": "5",
      "BID": "76",
      "DID": "7"
    },
    {
      "E": "Thiruvaniyoor",
      "M": "തിരുവാണിയൂര്‍",
      "BT": "5",
      "BID": "76",
      "DID": "7"
    },
    {
      "E": "VadavucodePuthencruz",
      "M": "വടവുകോട് പുത്തന്‍കുരിശ്",
      "BT": "5",
      "BID": "76",
      "DID": "7"
    },
    {
      "E": "Mazhuvannoor",
      "M": "മഴുവന്നൂര്‍",
      "BT": "5",
      "BID": "76",
      "DID": "7"
    },
    {
      "E": "Aikaranad",
      "M": "ഐക്കരനാട്",
      "BT": "5",
      "BID": "76",
      "DID": "7"
    },
    {
      "E": "Kunnathunad",
      "M": "കുന്നത്തുനാട്",
      "BT": "5",
      "BID": "76",
      "DID": "7"
    },
    {
      "E": "Paingottoor",
      "M": "പൈങ്ങോട്ടൂര്‍",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Nellikuzhi",
      "M": "നെല്ലിക്കുഴി",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Pindimana",
      "M": "പിണ്ടിമന",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Kottappady",
      "M": "കോട്ടപ്പടി",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Kavalangad",
      "M": "കവളങ്ങാട്",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Varappetty",
      "M": "വാരപ്പെട്ടി",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Keerampara",
      "M": "കീരംപാറ",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Pothanicad",
      "M": "പോത്താനിക്കാട്",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Pallarimangalam",
      "M": "പല്ലാരിമംഗലം",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Kuttampuzha",
      "M": "കുട്ടമ്പുഴ",
      "BT": "5",
      "BID": "77",
      "DID": "7"
    },
    {
      "E": "Elanji",
      "M": "ഇലഞ്ഞി",
      "BT": "5",
      "BID": "78",
      "DID": "7"
    },
    {
      "E": "Thirumarady",
      "M": "തിരുമാറാടി",
      "BT": "5",
      "BID": "78",
      "DID": "7"
    },
    {
      "E": "Palakuzha",
      "M": "പാലക്കുഴ",
      "BT": "5",
      "BID": "78",
      "DID": "7"
    },
    {
      "E": "Maneed",
      "M": "മണീട്",
      "BT": "5",
      "BID": "78",
      "DID": "7"
    },
    {
      "E": "Pampakuda",
      "M": "പാമ്പാക്കുട",
      "BT": "5",
      "BID": "78",
      "DID": "7"
    },
    {
      "E": "Ramamangalam",
      "M": "രാമമംഗലം",
      "BT": "5",
      "BID": "78",
      "DID": "7"
    },
    {
      "E": "Puthenvelikkara",
      "M": "പുത്തന്‍വേലിക്കര",
      "BT": "5",
      "BID": "79",
      "DID": "7"
    },
    {
      "E": "Chengamanad",
      "M": "ചെങ്ങമനാട്",
      "BT": "5",
      "BID": "79",
      "DID": "7"
    },
    {
      "E": "Nedumbassery",
      "M": "നെടുമ്പാശ്ശേരി",
      "BT": "5",
      "BID": "79",
      "DID": "7"
    },
    {
      "E": "Parakkadavu",
      "M": "പാറക്കടവ്",
      "BT": "5",
      "BID": "79",
      "DID": "7"
    },
    {
      "E": "Kunnukara",
      "M": "കുന്നുകര",
      "BT": "5",
      "BID": "79",
      "DID": "7"
    },
    {
      "E": "Avoly",
      "M": "ആവോലി",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Arakuzha",
      "M": "ആരക്കുഴ",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Valakom",
      "M": "വാളകം",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Paipra",
      "M": "പായിപ്ര",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Kalloorkad",
      "M": "കല്ലൂര്‍ക്കാട്",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Ayavana",
      "M": "ആയവന",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Manjalloor",
      "M": "മഞ്ഞള്ളൂര്‍",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Marady",
      "M": "മാറാടി",
      "BT": "5",
      "BID": "80",
      "DID": "7"
    },
    {
      "E": "Cherpu",
      "M": "ചേര്‍പ്പ്",
      "BT": "2",
      "BID": "90",
      "DID": "8"
    },
    {
      "E": "Anthikad",
      "M": "അന്തിക്കാട്",
      "BT": "2",
      "BID": "89",
      "DID": "8"
    },
    {
      "E": "Thalikulam",
      "M": "തളിക്കുളം",
      "BT": "2",
      "BID": "88",
      "DID": "8"
    },
    {
      "E": "Mullassery",
      "M": "മുല്ലശ്ശേരി",
      "BT": "2",
      "BID": "87",
      "DID": "8"
    },
    {
      "E": "Puzhakkal",
      "M": "പുഴയ്ക്കല്‍",
      "BT": "2",
      "BID": "86",
      "DID": "8"
    },
    {
      "E": "Ollukkara",
      "M": "ഒല്ലൂക്കര",
      "BT": "2",
      "BID": "85",
      "DID": "8"
    },
    {
      "E": "Pazhayannur",
      "M": "പഴയന്നൂര്‍",
      "BT": "2",
      "BID": "84",
      "DID": "8"
    },
    {
      "E": "Wadakanchery",
      "M": "വടക്കാഞ്ചരി",
      "BT": "2",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Chowannur",
      "M": "ചൊവ്വന്നൂര്‍",
      "BT": "2",
      "BID": "82",
      "DID": "8"
    },
    {
      "E": "Chavakkad",
      "M": "ചാവക്കാട്",
      "BT": "2",
      "BID": "81",
      "DID": "8"
    },
    {
      "E": "Guruvayur",
      "M": "ഗുരുവായൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Kunnamkulam",
      "M": "കുന്നംകുളം",
      "BT": "3",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Chalakudy",
      "M": "ചാലക്കുടി",
      "BT": "3",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Kodungallur",
      "M": "കൊടുങ്ങല്ലൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Thrissur",
      "M": "തൃശ്ശൂര്‍",
      "BT": "4",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Chavakkad",
      "M": "ചാവക്കാട്",
      "BT": "3",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Thrissur",
      "M": "തൃശ്ശൂര്‍",
      "BT": "1",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Wadakanchery",
      "M": "വടക്കാഞ്ചേരി",
      "BT": "3",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Chalakudy",
      "M": "ചാലക്കുടി",
      "BT": "2",
      "BID": "97",
      "DID": "8"
    },
    {
      "E": "Mala",
      "M": "മാള",
      "BT": "2",
      "BID": "96",
      "DID": "8"
    },
    {
      "E": "Mathilakam",
      "M": "മതിലകം",
      "BT": "2",
      "BID": "94",
      "DID": "8"
    },
    {
      "E": "Vellangallur",
      "M": "വെള്ളാങ്ങല്ലൂര്‍",
      "BT": "2",
      "BID": "93",
      "DID": "8"
    },
    {
      "E": "Irinjalakuda",
      "M": "ഇരിങ്ങാലക്കുട",
      "BT": "2",
      "BID": "92",
      "DID": "8"
    },
    {
      "E": "Kodakara",
      "M": "കൊടകര",
      "BT": "2",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Irinjalakuda",
      "M": "ഇരിങ്ങാലക്കുട",
      "BT": "3",
      "BID": null,
      "DID": "8"
    },
    {
      "E": "Kadappuram",
      "M": "കടപ്പുറം",
      "BT": "5",
      "BID": "81",
      "DID": "8"
    },
    {
      "E": "Orumanayur",
      "M": "ഒരുമനയൂര്‍",
      "BT": "5",
      "BID": "81",
      "DID": "8"
    },
    {
      "E": "Punnayur",
      "M": "പുന്നയൂര്‍",
      "BT": "5",
      "BID": "81",
      "DID": "8"
    },
    {
      "E": "Punnayurkulam",
      "M": "പുന്നയൂര്‍ക്കുളം",
      "BT": "5",
      "BID": "81",
      "DID": "8"
    },
    {
      "E": "Vadakkekkad",
      "M": "വടക്കേക്കാട്",
      "BT": "5",
      "BID": "81",
      "DID": "8"
    },
    {
      "E": "Choondal",
      "M": "ചൂണ്ടല്‍",
      "BT": "5",
      "BID": "82",
      "DID": "8"
    },
    {
      "E": "Chowannur",
      "M": "ചൊവ്വന്നൂര്‍",
      "BT": "5",
      "BID": "82",
      "DID": "8"
    },
    {
      "E": "Kadavallur",
      "M": "കടവല്ലൂര്‍",
      "BT": "5",
      "BID": "82",
      "DID": "8"
    },
    {
      "E": "Kandanassery",
      "M": "കണ്ടാണശ്ശേരി",
      "BT": "5",
      "BID": "82",
      "DID": "8"
    },
    {
      "E": "Kattakampal",
      "M": "കാട്ടകാമ്പാല്‍",
      "BT": "5",
      "BID": "82",
      "DID": "8"
    },
    {
      "E": "Porkulam",
      "M": "പോര്‍ക്കുളം",
      "BT": "5",
      "BID": "82",
      "DID": "8"
    },
    {
      "E": "Desamangalam",
      "M": "ദേശമംഗലം",
      "BT": "5",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Erumapetty",
      "M": "എരുമപ്പെട്ടി",
      "BT": "5",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Kadangode",
      "M": "കടങ്ങോട്",
      "BT": "5",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Mullurkara",
      "M": "മുള്ളൂര്‍ക്കര",
      "BT": "5",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Thekkumkara",
      "M": "തെക്കുംകര",
      "BT": "5",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Varavoor",
      "M": "വരവൂര്‍",
      "BT": "5",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Velur",
      "M": "വേലൂര്‍",
      "BT": "5",
      "BID": "83",
      "DID": "8"
    },
    {
      "E": "Chelakkara",
      "M": "ചേലക്കര",
      "BT": "5",
      "BID": "84",
      "DID": "8"
    },
    {
      "E": "VallatholNagar",
      "M": "വള്ളത്തോള്‍ നഗര്‍",
      "BT": "5",
      "BID": "84",
      "DID": "8"
    },
    {
      "E": "Kondazhy",
      "M": "കൊണ്ടാഴി",
      "BT": "5",
      "BID": "84",
      "DID": "8"
    },
    {
      "E": "Panjal",
      "M": "പാഞ്ഞാള്‍",
      "BT": "5",
      "BID": "84",
      "DID": "8"
    },
    {
      "E": "Pazhayannur",
      "M": "പഴയന്നൂര്‍",
      "BT": "5",
      "BID": "84",
      "DID": "8"
    },
    {
      "E": "Thiruvilwamala",
      "M": "തിരുവില്വാമല",
      "BT": "5",
      "BID": "84",
      "DID": "8"
    },
    {
      "E": "Kolazhy",
      "M": "കോലഴി",
      "BT": "5",
      "BID": "85",
      "DID": "8"
    },
    {
      "E": "Madakkathara",
      "M": "മാടക്കത്തറ",
      "BT": "5",
      "BID": "85",
      "DID": "8"
    },
    {
      "E": "Nadathara",
      "M": "നടത്തറ",
      "BT": "5",
      "BID": "85",
      "DID": "8"
    },
    {
      "E": "Pananchery",
      "M": "പാണഞ്ചരി",
      "BT": "5",
      "BID": "85",
      "DID": "8"
    },
    {
      "E": "Puthur",
      "M": "പുത്തൂര്‍",
      "BT": "5",
      "BID": "85",
      "DID": "8"
    },
    {
      "E": "Adat",
      "M": "അടാട്ട്",
      "BT": "5",
      "BID": "86",
      "DID": "8"
    },
    {
      "E": "Arimpur",
      "M": "അരിമ്പൂര്‍",
      "BT": "5",
      "BID": "86",
      "DID": "8"
    },
    {
      "E": "Avanur",
      "M": "അവണൂര്‍",
      "BT": "5",
      "BID": "86",
      "DID": "8"
    },
    {
      "E": "Kaiparambu",
      "M": "കൈപ്പറമ്പ്",
      "BT": "5",
      "BID": "86",
      "DID": "8"
    },
    {
      "E": "Mulakunnathukavu",
      "M": "മുളകുന്നത്തുകാവ്",
      "BT": "5",
      "BID": "86",
      "DID": "8"
    },
    {
      "E": "Tholur",
      "M": "തോളൂര്‍",
      "BT": "5",
      "BID": "86",
      "DID": "8"
    },
    {
      "E": "Elavally",
      "M": "എളവള്ളി",
      "BT": "5",
      "BID": "87",
      "DID": "8"
    },
    {
      "E": "Mullassery",
      "M": "മുല്ലശ്ശേരി",
      "BT": "5",
      "BID": "87",
      "DID": "8"
    },
    {
      "E": "Pavaratty",
      "M": "പാവറട്ടി",
      "BT": "5",
      "BID": "87",
      "DID": "8"
    },
    {
      "E": "Venkitangu",
      "M": "വെങ്കിടങ്ങ്",
      "BT": "5",
      "BID": "87",
      "DID": "8"
    },
    {
      "E": "Engandiyur",
      "M": "ഏങ്ങണ്ടിയൂര്‍",
      "BT": "5",
      "BID": "88",
      "DID": "8"
    },
    {
      "E": "Vatanapally",
      "M": "വാടാനപ്പള്ളി",
      "BT": "5",
      "BID": "88",
      "DID": "8"
    },
    {
      "E": "Thalikulam",
      "M": "തളിക്കുളം",
      "BT": "5",
      "BID": "88",
      "DID": "8"
    },
    {
      "E": "Nattika",
      "M": "നാട്ടിക",
      "BT": "5",
      "BID": "88",
      "DID": "8"
    },
    {
      "E": "Valapad",
      "M": "വലപ്പാട്",
      "BT": "5",
      "BID": "88",
      "DID": "8"
    },
    {
      "E": "Anthikad",
      "M": "അന്തിക്കാട്",
      "BT": "5",
      "BID": "89",
      "DID": "8"
    },
    {
      "E": "Thanniyam",
      "M": "താന്ന്യം",
      "BT": "5",
      "BID": "89",
      "DID": "8"
    },
    {
      "E": "Chazhur",
      "M": "ചാഴൂര്‍",
      "BT": "5",
      "BID": "89",
      "DID": "8"
    },
    {
      "E": "Manalur",
      "M": "മണലൂര്‍",
      "BT": "5",
      "BID": "89",
      "DID": "8"
    },
    {
      "E": "Avinissery",
      "M": "ആവിണിശ്ശേരി",
      "BT": "5",
      "BID": "90",
      "DID": "8"
    },
    {
      "E": "Cherpu",
      "M": "ചേര്‍പ്പ്",
      "BT": "5",
      "BID": "90",
      "DID": "8"
    },
    {
      "E": "Paralam",
      "M": "പാറളം",
      "BT": "5",
      "BID": "90",
      "DID": "8"
    },
    {
      "E": "Vallachira",
      "M": "വല്ലച്ചിറ",
      "BT": "5",
      "BID": "90",
      "DID": "8"
    },
    {
      "E": "Alagappanagar",
      "M": "അളഗപ്പനഗര്‍",
      "BT": "5",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Kodakara",
      "M": "കൊടകര",
      "BT": "5",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Mattathur",
      "M": "മറ്റത്തൂര്‍",
      "BT": "5",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Nenmanikkara",
      "M": "നെന്‍മണിക്കര",
      "BT": "5",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Pudukad",
      "M": "പുതുക്കാട്",
      "BT": "5",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Thrikkur",
      "M": "തൃക്കൂര്‍",
      "BT": "5",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Varandarappilly",
      "M": "വരന്തരപ്പിള്ളി",
      "BT": "5",
      "BID": "91",
      "DID": "8"
    },
    {
      "E": "Karalam",
      "M": "കാറളം",
      "BT": "5",
      "BID": "92",
      "DID": "8"
    },
    {
      "E": "Kattoor",
      "M": "കാട്ടൂര്‍",
      "BT": "5",
      "BID": "92",
      "DID": "8"
    },
    {
      "E": "Muriyad",
      "M": "മുരിയാട്",
      "BT": "5",
      "BID": "92",
      "DID": "8"
    },
    {
      "E": "Parappukkara",
      "M": "പറപ്പൂക്കര",
      "BT": "5",
      "BID": "92",
      "DID": "8"
    },
    {
      "E": "Padiyur",
      "M": "പടിയൂര്‍",
      "BT": "5",
      "BID": "93",
      "DID": "8"
    },
    {
      "E": "Poomangalam",
      "M": "പൂമംഗലം",
      "BT": "5",
      "BID": "93",
      "DID": "8"
    },
    {
      "E": "Puthenchira",
      "M": "പുത്തന്‍ചിറ",
      "BT": "5",
      "BID": "93",
      "DID": "8"
    },
    {
      "E": "Vellangallur",
      "M": "വെള്ളാങ്ങല്ലൂര്‍",
      "BT": "5",
      "BID": "93",
      "DID": "8"
    },
    {
      "E": "Velukara",
      "M": "വേളൂക്കര",
      "BT": "5",
      "BID": "93",
      "DID": "8"
    },
    {
      "E": "Edathiruthy",
      "M": "എടത്തിരുത്തി",
      "BT": "5",
      "BID": "94",
      "DID": "8"
    },
    {
      "E": "Kaipamangalam",
      "M": "കൈപ്പമംഗലം",
      "BT": "5",
      "BID": "94",
      "DID": "8"
    },
    {
      "E": "Mathilakam",
      "M": "മതിലകം",
      "BT": "5",
      "BID": "94",
      "DID": "8"
    },
    {
      "E": "Perinjanam",
      "M": "പെരിഞ്ഞനം",
      "BT": "5",
      "BID": "94",
      "DID": "8"
    },
    {
      "E": "Sreenarayanapuram",
      "M": "ശ്രീനാരായണപുരം",
      "BT": "5",
      "BID": "94",
      "DID": "8"
    },
    {
      "E": "Edavilangu",
      "M": "എടവിലങ്ങ്",
      "BT": "5",
      "BID": "95",
      "DID": "8"
    },
    {
      "E": "Eriyad",
      "M": "എറിയാട്",
      "BT": "5",
      "BID": "95",
      "DID": "8"
    },
    {
      "E": "Aloor",
      "M": "ആളൂര്‍",
      "BT": "5",
      "BID": "96",
      "DID": "8"
    },
    {
      "E": "Annamanada",
      "M": "അന്നമനട",
      "BT": "5",
      "BID": "96",
      "DID": "8"
    },
    {
      "E": "Kuzhur",
      "M": "കുഴൂര്‍",
      "BT": "5",
      "BID": "96",
      "DID": "8"
    },
    {
      "E": "Mala",
      "M": "മാള",
      "BT": "5",
      "BID": "96",
      "DID": "8"
    },
    {
      "E": "Poyya",
      "M": "പൊയ്യ",
      "BT": "5",
      "BID": "96",
      "DID": "8"
    },
    {
      "E": "Kadukutty",
      "M": "കാടുകുറ്റി",
      "BT": "5",
      "BID": "97",
      "DID": "8"
    },
    {
      "E": "Kodassery",
      "M": "കോടശ്ശേരി",
      "BT": "5",
      "BID": "97",
      "DID": "8"
    },
    {
      "E": "Koratty",
      "M": "കൊരട്ടി",
      "BT": "5",
      "BID": "97",
      "DID": "8"
    },
    {
      "E": "Meloor",
      "M": "മേലൂര്‍",
      "BT": "5",
      "BID": "97",
      "DID": "8"
    },
    {
      "E": "Pariyaram",
      "M": "പരിയാരം",
      "BT": "5",
      "BID": "97",
      "DID": "8"
    },
    {
      "E": "Athirappilly",
      "M": "അതിരപ്പിള്ളി",
      "BT": "5",
      "BID": "97",
      "DID": "8"
    },
    {
      "E": "Koduvayur",
      "M": "കൊടുവായൂര്‍",
      "BT": "5",
      "BID": "107",
      "DID": "9"
    },
    {
      "E": "Kollengode",
      "M": "കൊല്ലങ്കോട്",
      "BT": "5",
      "BID": "107",
      "DID": "9"
    },
    {
      "E": "Vadakarapathy",
      "M": "വടകരപ്പതി",
      "BT": "5",
      "BID": "106",
      "DID": "9"
    },
    {
      "E": "Perumatty",
      "M": "പെരുമാട്ടി",
      "BT": "5",
      "BID": "106",
      "DID": "9"
    },
    {
      "E": "Pattanchery",
      "M": "പട്ടഞ്ചരി",
      "BT": "5",
      "BID": "106",
      "DID": "9"
    },
    {
      "E": "Nallepilly",
      "M": "നല്ലേപ്പിള്ളി",
      "BT": "5",
      "BID": "106",
      "DID": "9"
    },
    {
      "E": "Kozhinjampara",
      "M": "കൊഴിഞ്ഞാമ്പാറ",
      "BT": "5",
      "BID": "106",
      "DID": "9"
    },
    {
      "E": "Eruthenpathy",
      "M": "എരുത്തേമ്പതി",
      "BT": "5",
      "BID": "106",
      "DID": "9"
    },
    {
      "E": "Kannadi",
      "M": "കണ്ണാടി",
      "BT": "5",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Thenkurissi",
      "M": "തേങ്കുറിശ്ശി",
      "BT": "5",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Peringottukurissi",
      "M": "പെരിങ്ങോട്ടുകുറിശ്ശി",
      "BT": "5",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Mathur",
      "M": "മാത്തൂര്‍",
      "BT": "5",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Kuzhalmannam",
      "M": "കുഴല്‍മന്ദം",
      "BT": "5",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Kuthanur",
      "M": "കുത്തന്നൂര്‍",
      "BT": "5",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Kottayi",
      "M": "കോട്ടായി",
      "BT": "5",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Palakkad",
      "M": "പാലക്കാട്",
      "BT": "1",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Elavancherry",
      "M": "എലവഞ്ചരി",
      "BT": "5",
      "BID": "108",
      "DID": "9"
    },
    {
      "E": "Nelliyampathy",
      "M": "നെല്ലിയാമ്പതി",
      "BT": "5",
      "BID": "108",
      "DID": "9"
    },
    {
      "E": "Ayiloor",
      "M": "അയിലൂര്‍",
      "BT": "5",
      "BID": "108",
      "DID": "9"
    },
    {
      "E": "Vadavannur",
      "M": "വടവന്നൂര്‍",
      "BT": "5",
      "BID": "107",
      "DID": "9"
    },
    {
      "E": "Pudunagaram",
      "M": "പുതുനഗരം",
      "BT": "5",
      "BID": "107",
      "DID": "9"
    },
    {
      "E": "Chittur",
      "M": "ചിറ്റൂര്‍",
      "BT": "2",
      "BID": "106",
      "DID": "9"
    },
    {
      "E": "Kollengode",
      "M": "കൊല്ലങ്കോട്",
      "BT": "2",
      "BID": "107",
      "DID": "9"
    },
    {
      "E": "Nenmara",
      "M": "നെന്മാറ",
      "BT": "2",
      "BID": "108",
      "DID": "9"
    },
    {
      "E": "Alathur",
      "M": "ആലത്തൂര്‍",
      "BT": "2",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Muthalamada",
      "M": "മുതലമട",
      "BT": "5",
      "BID": "107",
      "DID": "9"
    },
    {
      "E": "Malampuzha",
      "M": "മലമ്പുഴ",
      "BT": "2",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Thenkara",
      "M": "തെങ്കര",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Mannarkad",
      "M": "മണ്ണാര്‍ക്കാട്",
      "BT": "3",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Cherpulassery",
      "M": "ചെര്‍പുളശ്ശേരി",
      "BT": "3",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Pattambi",
      "M": "പട്ടാമ്പി",
      "BT": "3",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Palakkad",
      "M": "പാലക്കാട്",
      "BT": "3",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Polpully",
      "M": "പൊല്‍പ്പുള്ളി",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Elappully",
      "M": "എലപ്പുള്ളി",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Pudusseri",
      "M": "പുതുശ്ശേരി",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Peruvemba",
      "M": "പെരുവെമ്പ്",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Puduppariyaram",
      "M": "പുതുപ്പരിയാരം",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Marutharode",
      "M": "മരുതറോഡ്",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Malampuzha",
      "M": "മലമ്പുഴ",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Akathethara",
      "M": "അകത്തേത്തറ",
      "BT": "5",
      "BID": "110",
      "DID": "9"
    },
    {
      "E": "Kannambra",
      "M": "കണ്ണമ്പ്ര",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Vadakkencheri",
      "M": "വടക്കഞ്ചരി",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Vandazhy",
      "M": "വണ്ടാഴി",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Tarur",
      "M": "തരൂര്‍",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Puducode",
      "M": "പുതുക്കോട്",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Kizhakkencherry",
      "M": "കിഴക്കഞ്ചരി",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Kavassery",
      "M": "കാവശ്ശേരി",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Erimayur",
      "M": "എരിമയൂര്‍",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Alathur",
      "M": "ആലത്തൂര്‍",
      "BT": "5",
      "BID": "109",
      "DID": "9"
    },
    {
      "E": "Nenmara",
      "M": "നെന്മാറ",
      "BT": "5",
      "BID": "108",
      "DID": "9"
    },
    {
      "E": "Melarcode",
      "M": "മേലാര്‍കോട്",
      "BT": "5",
      "BID": "108",
      "DID": "9"
    },
    {
      "E": "Pallassana",
      "M": "പല്ലശ്ശന",
      "BT": "5",
      "BID": "108",
      "DID": "9"
    },
    {
      "E": "Trithala",
      "M": "തൃത്താല",
      "BT": "2",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Pattambi",
      "M": "പട്ടാമ്പി",
      "BT": "2",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Ottapalam",
      "M": "ഒറ്റപ്പാലം",
      "BT": "2",
      "BID": "100",
      "DID": "9"
    },
    {
      "E": "Sreekrishnapuram",
      "M": "ശ്രീകൃഷ്ണപുരം",
      "BT": "2",
      "BID": "101",
      "DID": "9"
    },
    {
      "E": "Mannarkkad",
      "M": "മണ്ണാര്‍ക്കാട്",
      "BT": "2",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Attappady",
      "M": "അട്ടപ്പാടി",
      "BT": "2",
      "BID": "103",
      "DID": "9"
    },
    {
      "E": "Palakkad",
      "M": "പാലക്കാട്",
      "BT": "2",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Ottapalam",
      "M": "ഒറ്റപ്പാലം",
      "BT": "3",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Shoranur",
      "M": "ഷൊര്‍ണ്ണൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Chittur Tattamangalam",
      "M": "ചിറ്റൂര്‍ തത്തമംഗലം",
      "BT": "3",
      "BID": null,
      "DID": "9"
    },
    {
      "E": "Kuzhalmannam",
      "M": "കുഴല്‍മന്ദം",
      "BT": "2",
      "BID": "105",
      "DID": "9"
    },
    {
      "E": "Anakkara",
      "M": "ആനക്കര",
      "BT": "5",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Chalissery",
      "M": "ചാലിശ്ശേരി",
      "BT": "5",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Kappur",
      "M": "കപ്പൂര്‍",
      "BT": "5",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Nagalassery",
      "M": "നാഗലശ്ശേരി",
      "BT": "5",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Pattithara",
      "M": "പട്ടിത്തറ",
      "BT": "5",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Thirumittacode",
      "M": "തിരുമിറ്റക്കോട്",
      "BT": "5",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Trithala",
      "M": "തൃത്താല",
      "BT": "5",
      "BID": "98",
      "DID": "9"
    },
    {
      "E": "Koppam",
      "M": "കൊപ്പം",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Kulukkallur",
      "M": "കുലുക്കല്ലൂര്‍",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Muthuthala",
      "M": "മുതുതല",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Nellaya",
      "M": "നെല്ലായ",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Ongallur",
      "M": "ഓങ്ങല്ലൂര്‍",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Paruthur",
      "M": "പരുതൂര്‍",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Thiruvegappura",
      "M": "തിരുവേഗപ്പുറ",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Vallapuzha",
      "M": "വല്ലപ്പുഴ",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Vilayur",
      "M": "വിളയൂര്‍",
      "BT": "5",
      "BID": "99",
      "DID": "9"
    },
    {
      "E": "Ambalappara",
      "M": "അമ്പലപ്പാറ",
      "BT": "5",
      "BID": "100",
      "DID": "9"
    },
    {
      "E": "Ananganadi",
      "M": "അനങ്ങനടി",
      "BT": "5",
      "BID": "100",
      "DID": "9"
    },
    {
      "E": "Chalavara",
      "M": "ചളവറ",
      "BT": "5",
      "BID": "100",
      "DID": "9"
    },
    {
      "E": "Lakkidi - Perur",
      "M": "ലെക്കിടി  പേരൂര്‍",
      "BT": "5",
      "BID": "100",
      "DID": "9"
    },
    {
      "E": "Vaniamkulam",
      "M": "വാണിയംകുളം",
      "BT": "5",
      "BID": "100",
      "DID": "9"
    },
    {
      "E": "Kadampazhipuram",
      "M": "കടമ്പഴിപ്പുറം",
      "BT": "5",
      "BID": "101",
      "DID": "9"
    },
    {
      "E": "Karimpuzha",
      "M": "കരിമ്പുഴ",
      "BT": "5",
      "BID": "101",
      "DID": "9"
    },
    {
      "E": "Pookkottukavu",
      "M": "പൂക്കോട്ടുകാവ്",
      "BT": "5",
      "BID": "101",
      "DID": "9"
    },
    {
      "E": "Sreekrishnapuram",
      "M": "ശ്രീകൃഷ്ണപുരം",
      "BT": "5",
      "BID": "101",
      "DID": "9"
    },
    {
      "E": "Trikkaderi",
      "M": "തൃക്കടീരി",
      "BT": "5",
      "BID": "101",
      "DID": "9"
    },
    {
      "E": "Vellinezhi",
      "M": "വെള്ളിനേഴി",
      "BT": "5",
      "BID": "101",
      "DID": "9"
    },
    {
      "E": "Alanallur",
      "M": "അലനല്ലൂര്‍",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Karakurussi",
      "M": "കാരാകുറുശ്ശി",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Karimba",
      "M": "കരിമ്പ",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Kottopadam",
      "M": "കോട്ടോപ്പാടം",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Kumaramputhur",
      "M": "കുമരംപുത്തൂര്‍",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Kanhirapuzha",
      "M": "കാഞ്ഞിരപുഴ",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Thachanattukara",
      "M": "തച്ചനാട്ടുകര",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Tachampara",
      "M": "തച്ചമ്പാറ",
      "BT": "5",
      "BID": "102",
      "DID": "9"
    },
    {
      "E": "Agali",
      "M": "അഗളി",
      "BT": "5",
      "BID": "103",
      "DID": "9"
    },
    {
      "E": "Pudur",
      "M": "പുതൂര്‍",
      "BT": "5",
      "BID": "103",
      "DID": "9"
    },
    {
      "E": "Sholayoor",
      "M": "ഷോളയൂര്‍",
      "BT": "5",
      "BID": "103",
      "DID": "9"
    },
    {
      "E": "Kodumbu",
      "M": "കൊടുമ്പ്",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Keralassery",
      "M": "കേരളശ്ശേരി",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Kongad",
      "M": "കോങ്ങാട്",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Mankara",
      "M": "മങ്കര",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Mannur",
      "M": "മണ്ണൂര്‍",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Mundur",
      "M": "മുണ്ടൂര്‍",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Parali",
      "M": "പറളി",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Pirayiri",
      "M": "പിരായിരി",
      "BT": "5",
      "BID": "104",
      "DID": "9"
    },
    {
      "E": "Angadippuram",
      "M": "അങ്ങാടിപ്പുറം",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Parappanangadi",
      "M": "പരപ്പനങ്ങാടി",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Tirur",
      "M": "തിരൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Manjeri",
      "M": "മഞ്ചേരി",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Ponnani",
      "M": "പൊന്നാനി",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Perinthalmanna",
      "M": "പെരിന്തല്‍മണ്ണ",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Malappuram",
      "M": "മലപ്പുറം",
      "BT": "1",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Muthuvalloor",
      "M": "മുതുവല്ലൂര്‍",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Kaladi",
      "M": "കാലടി",
      "BT": "5",
      "BID": "123",
      "DID": "10"
    },
    {
      "E": "Amarambalam",
      "M": "അമരമ്പലം",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Chaliyar",
      "M": "ചാലിയാര്‍",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Chungathara",
      "M": "ചുങ്കത്തറ",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Karulai",
      "M": "കരുളായ്",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Moothedam",
      "M": "മൂത്തേടം",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Vazhikkadavu",
      "M": "വഴിക്കടവ്",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Edakkara",
      "M": "എടക്കര",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Kalikavu",
      "M": "കാളികാവ്",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Pothukallu",
      "M": "പോത്തുകല്ല്",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Chokkad",
      "M": "ചോക്കാട്",
      "BT": "5",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Mampad",
      "M": "മമ്പാട്",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Karuvarakundu",
      "M": "കരുവാരകുണ്ട്",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Pandikkad",
      "M": "പാണ്ടിക്കാട്",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Edavanna",
      "M": "എടവണ്ണ",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Porur",
      "M": "പോരൂര്‍",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Thrikkalangodu",
      "M": "തൃക്കലങ്ങോട്",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Thiruvali",
      "M": "തിരുവാലി",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Tuvvur",
      "M": "തുവ്വൂര്‍",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Wandoor",
      "M": "വണ്ടൂര്‍",
      "BT": "5",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Chelembra",
      "M": "ചേലേമ്പ്ര",
      "BT": "5",
      "BID": "113",
      "DID": "10"
    },
    {
      "E": "Cherukavu",
      "M": "ചെറുകാവ്",
      "BT": "5",
      "BID": "113",
      "DID": "10"
    },
    {
      "E": "Pallikkal",
      "M": "പള്ളിക്കല്‍",
      "BT": "5",
      "BID": "113",
      "DID": "10"
    },
    {
      "E": "Vazhayur",
      "M": "വാഴയൂര്‍",
      "BT": "5",
      "BID": "113",
      "DID": "10"
    },
    {
      "E": "Vazhakkad",
      "M": "വാഴക്കാട്",
      "BT": "5",
      "BID": "113",
      "DID": "10"
    },
    {
      "E": "Pulikkal",
      "M": "പുളിക്കല്‍",
      "BT": "5",
      "BID": "113",
      "DID": "10"
    },
    {
      "E": "Urangattiri",
      "M": "ഊര്‍ങ്ങാട്ടിരി",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Kavanur",
      "M": "കാവനൂര്‍",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Keezhuparamba",
      "M": "കീഴുപറമ്പ്",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Pulpatta",
      "M": "പുല്‍പ്പറ്റ",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Cheacode",
      "M": "ചീക്കോട്",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Kuzhimanna",
      "M": "കുഴിമണ്ണ",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Areacode",
      "M": "അരീക്കോട്",
      "BT": "5",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Anakkayam",
      "M": "ആനക്കയം",
      "BT": "5",
      "BID": "115",
      "DID": "10"
    },
    {
      "E": "Morayur",
      "M": "മൊറയൂര്‍",
      "BT": "5",
      "BID": "115",
      "DID": "10"
    },
    {
      "E": "Oorakam",
      "M": "ഊരകം",
      "BT": "5",
      "BID": "115",
      "DID": "10"
    },
    {
      "E": "Ponmala",
      "M": "പൊന്‍മള",
      "BT": "5",
      "BID": "115",
      "DID": "10"
    },
    {
      "E": "Pookkottur",
      "M": "പൂക്കോട്ടൂര്‍",
      "BT": "5",
      "BID": "115",
      "DID": "10"
    },
    {
      "E": "Aliparamba",
      "M": "ആലിപ്പറമ്പ്",
      "BT": "5",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Edappatta",
      "M": "എടപ്പറ്റ",
      "BT": "5",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Elamkulam",
      "M": "ഏലംകുളം",
      "BT": "5",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Melattur",
      "M": "മേലാറ്റൂര്‍",
      "BT": "5",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Keezhattur",
      "M": "കീഴാറ്റൂര്‍",
      "BT": "5",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Thazhekkode",
      "M": "താഴെക്കോട്",
      "BT": "5",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Vettathur",
      "M": "വെട്ടത്തൂര്‍",
      "BT": "5",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Kuruva",
      "M": "കുറുവ",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Mankada",
      "M": "മങ്കട",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Makkaraparamba",
      "M": "മക്കരപറമ്പ്",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Pulamanthole",
      "M": "പുലാമന്തോള്‍",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Moorkkanad",
      "M": "മൂര്‍ക്കനാട്",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Koottilangadi",
      "M": "കൂട്ടിലങ്ങാടി",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Puzhakkattiri",
      "M": "പുഴക്കാട്ടിരി",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Kodur",
      "M": "കോഡൂര്‍",
      "BT": "5",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Malappuram",
      "M": "മലപ്പുറം",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Athavanad",
      "M": "ആതവനാട്",
      "BT": "5",
      "BID": "118",
      "DID": "10"
    },
    {
      "E": "Edayur",
      "M": "എടയൂര്‍",
      "BT": "5",
      "BID": "118",
      "DID": "10"
    },
    {
      "E": "Irimbiliyam",
      "M": "ഇരിമ്പിളിയം",
      "BT": "5",
      "BID": "118",
      "DID": "10"
    },
    {
      "E": "Marakkara",
      "M": "മാറാക്കര",
      "BT": "5",
      "BID": "118",
      "DID": "10"
    },
    {
      "E": "Kuttippuram",
      "M": "കുറ്റിപ്പുറം",
      "BT": "5",
      "BID": "118",
      "DID": "10"
    },
    {
      "E": "ARNagar",
      "M": "അബ്ദുറഹിമാന്‍ നഗര്‍",
      "BT": "5",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Edarikode",
      "M": "എടരിക്കോട്",
      "BT": "5",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Othukkungal",
      "M": "ഒതുക്കുങ്ങല്‍",
      "BT": "5",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Parappur",
      "M": "പറപ്പൂര്‍",
      "BT": "5",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Thennala",
      "M": "തെന്നല",
      "BT": "5",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Vengara",
      "M": "വേങ്ങര",
      "BT": "5",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Kannamangalam",
      "M": "കണ്ണമംഗലം",
      "BT": "5",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Thenhipalam",
      "M": "തേഞ്ഞിപ്പലം",
      "BT": "5",
      "BID": "120",
      "DID": "10"
    },
    {
      "E": "Vallikkunnu",
      "M": "വള്ളിക്കുന്ന്",
      "BT": "5",
      "BID": "120",
      "DID": "10"
    },
    {
      "E": "Moonniyur",
      "M": "മൂന്നിയൂര്‍",
      "BT": "5",
      "BID": "120",
      "DID": "10"
    },
    {
      "E": "Nannambra",
      "M": "നന്നമ്പ്ര",
      "BT": "5",
      "BID": "120",
      "DID": "10"
    },
    {
      "E": "Peruvalloor",
      "M": "പെരുവള്ളൂര്‍",
      "BT": "5",
      "BID": "120",
      "DID": "10"
    },
    {
      "E": "Cheriyamundam",
      "M": "ചെറിയമുണ്ടം",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Kalpakanchery",
      "M": "കല്‍പകഞ്ചരി",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Ozhur",
      "M": "ഒഴൂര്‍",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Tanalur",
      "M": "താനാളൂര്‍",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Valavannur",
      "M": "വളവന്നൂര്‍",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Ponmundam",
      "M": "പൊന്മുണ്ടം",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Niramaruthur",
      "M": "നിറമരുതൂര്‍",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Perumanna Klari",
      "M": "പെരുമണ്ണ ക്ളാരി",
      "BT": "5",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Purathur",
      "M": "പുറത്തൂര്‍",
      "BT": "5",
      "BID": "122",
      "DID": "10"
    },
    {
      "E": "Thalakkad",
      "M": "തലക്കാട്",
      "BT": "5",
      "BID": "122",
      "DID": "10"
    },
    {
      "E": "Triprangode",
      "M": "തൃപ്രങ്ങോട്",
      "BT": "5",
      "BID": "122",
      "DID": "10"
    },
    {
      "E": "Vettom",
      "M": "വെട്ടം",
      "BT": "5",
      "BID": "122",
      "DID": "10"
    },
    {
      "E": "Thirunavaya",
      "M": "തിരുനാവായ",
      "BT": "5",
      "BID": "122",
      "DID": "10"
    },
    {
      "E": "Mangalam",
      "M": "മംഗലം",
      "BT": "5",
      "BID": "122",
      "DID": "10"
    },
    {
      "E": "Tavanur",
      "M": "തവനൂര്‍",
      "BT": "5",
      "BID": "123",
      "DID": "10"
    },
    {
      "E": "Vattamkulam",
      "M": "വട്ടംകുളം",
      "BT": "5",
      "BID": "123",
      "DID": "10"
    },
    {
      "E": "Edapal",
      "M": "എടപ്പാള്‍",
      "BT": "5",
      "BID": "123",
      "DID": "10"
    },
    {
      "E": "Alamkode",
      "M": "ആലംകോട്",
      "BT": "5",
      "BID": "124",
      "DID": "10"
    },
    {
      "E": "Maranchery",
      "M": "മാറഞ്ചരി",
      "BT": "5",
      "BID": "124",
      "DID": "10"
    },
    {
      "E": "Nannammukku",
      "M": "നന്നംമുക്ക്",
      "BT": "5",
      "BID": "124",
      "DID": "10"
    },
    {
      "E": "Perumpadappa",
      "M": "പെരുമ്പടപ്പ്",
      "BT": "5",
      "BID": "124",
      "DID": "10"
    },
    {
      "E": "Veliancode",
      "M": "വെളിയങ്കോട്",
      "BT": "5",
      "BID": "124",
      "DID": "10"
    },
    {
      "E": "Perumpadappa",
      "M": "പെരുമ്പടപ്പ്",
      "BT": "2",
      "BID": "124",
      "DID": "10"
    },
    {
      "E": "Kottakkal ",
      "M": "കോട്ടക്കല്‍ ",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Nilambur ",
      "M": "നിലമ്പൂര്‍ ",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Ponnani",
      "M": "പൊന്നാനി",
      "BT": "2",
      "BID": "123",
      "DID": "10"
    },
    {
      "E": "Kalikavu ",
      "M": "കാളികാവ് ",
      "BT": "2",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Tirur",
      "M": "തിരൂര്‍",
      "BT": "2",
      "BID": "122",
      "DID": "10"
    },
    {
      "E": "Tanur",
      "M": "താനൂര്‍",
      "BT": "2",
      "BID": "121",
      "DID": "10"
    },
    {
      "E": "Tirurangadi",
      "M": "തിരൂരങ്ങാടി",
      "BT": "2",
      "BID": "120",
      "DID": "10"
    },
    {
      "E": "Vengara",
      "M": "വേങ്ങര",
      "BT": "2",
      "BID": "119",
      "DID": "10"
    },
    {
      "E": "Kuttippuram",
      "M": "കുറ്റിപ്പുറം",
      "BT": "2",
      "BID": "118",
      "DID": "10"
    },
    {
      "E": "Mankada",
      "M": "മങ്കട",
      "BT": "2",
      "BID": "117",
      "DID": "10"
    },
    {
      "E": "Perinthalmanna",
      "M": "പെരിന്തല്‍മണ്ണ",
      "BT": "2",
      "BID": "116",
      "DID": "10"
    },
    {
      "E": "Malappuram",
      "M": "മലപ്പുറം",
      "BT": "2",
      "BID": "115",
      "DID": "10"
    },
    {
      "E": "Areacode",
      "M": "അരീക്കോട്",
      "BT": "2",
      "BID": "114",
      "DID": "10"
    },
    {
      "E": "Kondotty",
      "M": "കൊണ്ടോട്ടി",
      "BT": "2",
      "BID": "113",
      "DID": "10"
    },
    {
      "E": "Wandoor",
      "M": "വണ്ടൂര്‍",
      "BT": "2",
      "BID": "112",
      "DID": "10"
    },
    {
      "E": "Nilambur",
      "M": "നിലമ്പൂര്‍",
      "BT": "2",
      "BID": "111",
      "DID": "10"
    },
    {
      "E": "Kondotty",
      "M": "കൊണ്ടോട്ടി",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Valanchery",
      "M": "വളാഞ്ചേരി",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Tirurangadi",
      "M": "തിരൂരങ്ങാടി",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Tanur",
      "M": "താനൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "10"
    },
    {
      "E": "Valayam",
      "M": "വളയം",
      "BT": "5",
      "BID": "126",
      "DID": "11"
    },
    {
      "E": "Vanimal",
      "M": "വാണിമല്‍",
      "BT": "5",
      "BID": "126",
      "DID": "11"
    },
    {
      "E": "Kunnummal",
      "M": "കുന്നുമ്മല്‍",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Nadapuram",
      "M": "നാദാപുരം",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Kayakkody",
      "M": "കായക്കൊടി",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Kavilumpara",
      "M": "കാവിലുമ്പാറ",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Kuttiadi",
      "M": "കുറ്റ്യാടി",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Maruthonkara",
      "M": "മരുതോങ്കര",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Velom",
      "M": "വേളം",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Narippatta",
      "M": "നരിപ്പറ്റ",
      "BT": "5",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Ayancheri",
      "M": "ആയഞ്ചരി",
      "BT": "5",
      "BID": "128",
      "DID": "11"
    },
    {
      "E": "Villiappally",
      "M": "വില്യാപ്പള്ളി",
      "BT": "5",
      "BID": "128",
      "DID": "11"
    },
    {
      "E": "Maniyur",
      "M": "മണിയൂര്‍",
      "BT": "5",
      "BID": "128",
      "DID": "11"
    },
    {
      "E": "Thiruvallur",
      "M": "തിരുവള്ളൂര്‍",
      "BT": "5",
      "BID": "128",
      "DID": "11"
    },
    {
      "E": "Thurayur",
      "M": "തുറയൂര്‍",
      "BT": "5",
      "BID": "129",
      "DID": "11"
    },
    {
      "E": "Keezhariyur",
      "M": "കീഴരിയൂര്‍",
      "BT": "5",
      "BID": "129",
      "DID": "11"
    },
    {
      "E": "Thikkodi",
      "M": "തിക്കോടി",
      "BT": "5",
      "BID": "129",
      "DID": "11"
    },
    {
      "E": "Meppayur",
      "M": "മേപ്പയൂര്‍",
      "BT": "5",
      "BID": "129",
      "DID": "11"
    },
    {
      "E": "Cheruvannur",
      "M": "ചെറുവണ്ണൂര്‍",
      "BT": "5",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Nochad",
      "M": "നൊച്ചാട്",
      "BT": "5",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Changaroth",
      "M": "ചങ്ങരോത്ത്",
      "BT": "5",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Kayanna",
      "M": "കായണ്ണ",
      "BT": "5",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Koothali",
      "M": "കൂത്താളി",
      "BT": "5",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Perambra",
      "M": "പേരാമ്പ്ര",
      "BT": "5",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Chakkittapara",
      "M": "ചക്കിട്ടപ്പാറ",
      "BT": "5",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Balussery",
      "M": "ബാലുശ്ശേരി",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Naduvannur",
      "M": "നടുവണ്ണൂര്‍",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Atholi",
      "M": "അത്തോളി",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Ulliyeri",
      "M": "ഉള്ളിയേരി",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Kottur",
      "M": "കോട്ടൂര്‍",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Unnikulum",
      "M": "ഉണ്ണികുളം",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Panangad",
      "M": "പനങ്ങാട്",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Koorachundu",
      "M": "കൂരാച്ചുണ്ട്",
      "BT": "5",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Chemanchery",
      "M": "ചേമഞ്ചരി",
      "BT": "5",
      "BID": "132",
      "DID": "11"
    },
    {
      "E": "Arikkulam",
      "M": "അരിക്കുളം",
      "BT": "5",
      "BID": "132",
      "DID": "11"
    },
    {
      "E": "Moodadi",
      "M": "മൂടാടി",
      "BT": "5",
      "BID": "132",
      "DID": "11"
    },
    {
      "E": "Chengottukavu",
      "M": "ചേങ്ങോട്ടുകാവ്",
      "BT": "5",
      "BID": "132",
      "DID": "11"
    },
    {
      "E": "Kakkodi",
      "M": "കക്കോടി",
      "BT": "5",
      "BID": "133",
      "DID": "11"
    },
    {
      "E": "Chelannur",
      "M": "ചേളന്നൂര്‍",
      "BT": "5",
      "BID": "133",
      "DID": "11"
    },
    {
      "E": "Kakkur",
      "M": "കാക്കൂര്‍",
      "BT": "5",
      "BID": "133",
      "DID": "11"
    },
    {
      "E": "Nanminda",
      "M": "നന്മണ്ട",
      "BT": "5",
      "BID": "133",
      "DID": "11"
    },
    {
      "E": "Narikunni",
      "M": "നരിക്കുനി",
      "BT": "5",
      "BID": "133",
      "DID": "11"
    },
    {
      "E": "Thalakulathur",
      "M": "തലക്കുളത്തൂര്‍",
      "BT": "5",
      "BID": "133",
      "DID": "11"
    },
    {
      "E": "Thiruvambadi",
      "M": "തിരുവമ്പാടി",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Koodaranhi",
      "M": "കൂടരഞ്ഞി",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Kizhakkoth",
      "M": "കിഴക്കോത്ത്",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Madavoor",
      "M": "മടവൂര്‍",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Puduppady",
      "M": "പുതുപ്പാടി",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Thamarassery",
      "M": "താമരശ്ശേരി",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Omassery",
      "M": "ഓമശ്ശേരി",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Kodiyathur",
      "M": "കൊടിയത്തൂര്‍",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Feroke",
      "M": "ഫറോക്ക്",
      "BT": "3",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Mavoor",
      "M": "മാവൂര്‍",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Karassery",
      "M": "കാരശ്ശേരി",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Kunnamangalam",
      "M": "കുന്ദമംഗലം",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Chathamangalam",
      "M": "ചാത്തമംഗലം",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Kodanchery",
      "M": "കോടഞ്ചരി",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Peruvayal",
      "M": "പെരുവയല്‍",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Perumanna",
      "M": "പെരുമണ്ണ",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Kadalundi",
      "M": "കടലുണ്ടി",
      "BT": "5",
      "BID": "136",
      "DID": "11"
    },
    {
      "E": "Olavanna",
      "M": "ഒളവണ്ണ",
      "BT": "5",
      "BID": "136",
      "DID": "11"
    },
    {
      "E": "Kunnummal",
      "M": "കുന്നുമ്മല്‍",
      "BT": "2",
      "BID": "127",
      "DID": "11"
    },
    {
      "E": "Tuneri",
      "M": "തൂണേരി",
      "BT": "2",
      "BID": "126",
      "DID": "11"
    },
    {
      "E": "Vadakara",
      "M": "വടകര",
      "BT": "2",
      "BID": "125",
      "DID": "11"
    },
    {
      "E": "Balussery",
      "M": "ബാലുശ്ശേരി",
      "BT": "2",
      "BID": "131",
      "DID": "11"
    },
    {
      "E": "Kozhikode",
      "M": "കോഴിക്കോട്",
      "BT": "1",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Vadakara",
      "M": "വടകര",
      "BT": "3",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Panthalayani",
      "M": "പന്തലായനി",
      "BT": "2",
      "BID": "132",
      "DID": "11"
    },
    {
      "E": "Melady",
      "M": "മേലടി",
      "BT": "2",
      "BID": "129",
      "DID": "11"
    },
    {
      "E": "Thodannur",
      "M": "തോടന്നൂര്‍",
      "BT": "2",
      "BID": "128",
      "DID": "11"
    },
    {
      "E": "Kuruvattoor",
      "M": "കുരുവട്ടൂര്‍",
      "BT": "5",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Koyilandy",
      "M": "കൊയിലാണ്ടി",
      "BT": "3",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Kozhikode",
      "M": "കോഴിക്കോട്",
      "BT": "2",
      "BID": "136",
      "DID": "11"
    },
    {
      "E": "Kunnamangalam",
      "M": "കുന്ദമംഗലം",
      "BT": "2",
      "BID": "135",
      "DID": "11"
    },
    {
      "E": "Koduvally",
      "M": "കൊടുവള്ളി",
      "BT": "2",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Chelannur",
      "M": "ചേളന്നൂര്‍",
      "BT": "2",
      "BID": "133",
      "DID": "11"
    },
    {
      "E": "Kozhikode",
      "M": "കോഴിക്കോട്",
      "BT": "4",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Azhiyur",
      "M": "അഴിയൂര്‍",
      "BT": "5",
      "BID": "125",
      "DID": "11"
    },
    {
      "E": "Chorode",
      "M": "ചോറോട്",
      "BT": "5",
      "BID": "125",
      "DID": "11"
    },
    {
      "E": "Eramala",
      "M": "ഏറാമല",
      "BT": "5",
      "BID": "125",
      "DID": "11"
    },
    {
      "E": "Onchiyam",
      "M": "ഒഞ്ചിയം",
      "BT": "5",
      "BID": "125",
      "DID": "11"
    },
    {
      "E": "Chekkiad",
      "M": "ചെക്യാട്",
      "BT": "5",
      "BID": "126",
      "DID": "11"
    },
    {
      "E": "Edacheri",
      "M": "എടച്ചേരി",
      "BT": "5",
      "BID": "126",
      "DID": "11"
    },
    {
      "E": "Purameri",
      "M": "പുറമേരി",
      "BT": "5",
      "BID": "126",
      "DID": "11"
    },
    {
      "E": "Ramanattukara",
      "M": "രാമനാട്ടുകര",
      "BT": "3",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Mukkam",
      "M": "മുക്കം",
      "BT": "3",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Koduvally",
      "M": "കൊടുവള്ളി",
      "BT": "3",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Payyoli",
      "M": "പയ്യോളി",
      "BT": "3",
      "BID": null,
      "DID": "11"
    },
    {
      "E": "Tuneri",
      "M": "തൂണേരി",
      "BT": "5",
      "BID": "126",
      "DID": "11"
    },
    {
      "E": "Kattippara",
      "M": "കട്ടിപ്പാറ",
      "BT": "5",
      "BID": "134",
      "DID": "11"
    },
    {
      "E": "Perambra",
      "M": "പേരാമ്പ്ര",
      "BT": "2",
      "BID": "130",
      "DID": "11"
    },
    {
      "E": "Muppainad",
      "M": "മൂപ്പൈനാട്",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Meppadi",
      "M": "മേപ്പാടി",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Padinharathara",
      "M": "പടിഞ്ഞാറത്തറ",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Thariode",
      "M": "തരിയോട്",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Pozhuthana",
      "M": "പൊഴുതന",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Muttil",
      "M": "മുട്ടില്‍",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Vythiri",
      "M": "വൈത്തിരി",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Vengappally",
      "M": "വേങ്ങപ്പള്ളി",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Kottathara",
      "M": "കോട്ടത്തറ",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Pulpally",
      "M": "പുല്‍പ്പള്ളി",
      "BT": "5",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Mullankolly",
      "M": "മുള്ളന്‍കൊല്ലി",
      "BT": "5",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Noolpuzha",
      "M": "നൂല്‍പ്പുഴ",
      "BT": "5",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Poothadi",
      "M": "പൂതാടി",
      "BT": "5",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Ambalavayal",
      "M": "അമ്പലവയല്‍",
      "BT": "5",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Panamaram ",
      "M": "പനമരം ",
      "BT": "2",
      "BID": null,
      "DID": "12"
    },
    {
      "E": "Kaniyambetta",
      "M": "കണിയാമ്പറ്റ",
      "BT": "5",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Meenangadi",
      "M": "മീനങ്ങാടി",
      "BT": "5",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Panamaram",
      "M": "പനമരം",
      "BT": "5",
      "BID": "137",
      "DID": "12"
    },
    {
      "E": "Thavinhal",
      "M": "തവിഞ്ഞാല്‍",
      "BT": "5",
      "BID": "137",
      "DID": "12"
    },
    {
      "E": "Edavaka",
      "M": "എടവക",
      "BT": "5",
      "BID": "137",
      "DID": "12"
    },
    {
      "E": "Thondernad",
      "M": "തൊണ്ടര്‍നാട്",
      "BT": "5",
      "BID": "137",
      "DID": "12"
    },
    {
      "E": "Thirunelly",
      "M": "തിരുനെല്ലി",
      "BT": "5",
      "BID": "137",
      "DID": "12"
    },
    {
      "E": "Vellamunda",
      "M": "വെള്ളമുണ്ട",
      "BT": "5",
      "BID": "137",
      "DID": "12"
    },
    {
      "E": "Kalpetta",
      "M": "കല്‍പ്പറ്റ",
      "BT": "3",
      "BID": null,
      "DID": "12"
    },
    {
      "E": "Mananthavady",
      "M": "മാനന്തവാടി",
      "BT": "2",
      "BID": "137",
      "DID": "12"
    },
    {
      "E": "Sulthan Bathery",
      "M": "സുല്‍ത്താന്‍ ബത്തേരി",
      "BT": "2",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Kalpetta",
      "M": "കല്‍പ്പറ്റ",
      "BT": "2",
      "BID": "139",
      "DID": "12"
    },
    {
      "E": "Mananthavady",
      "M": "മാനന്തവാടി",
      "BT": "3",
      "BID": null,
      "DID": "12"
    },
    {
      "E": "Sulthan Bathery",
      "M": "സുല്‍ത്താന്‍ ബത്തേരി",
      "BT": "3",
      "BID": null,
      "DID": "12"
    },
    {
      "E": "Wayanad",
      "M": "വയനാട്",
      "BT": "1",
      "BID": null,
      "DID": "12"
    },
    {
      "E": "Nenmeni",
      "M": "നെന്മേനി",
      "BT": "5",
      "BID": "138",
      "DID": "12"
    },
    {
      "E": "Pariyaram",
      "M": "പരിയാരം",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Narath",
      "M": "നാറാത്ത്",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Chapparapadava",
      "M": "ചപ്പാരപ്പടവ്",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Naduvil",
      "M": "നടുവില്‍",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Udayagiri",
      "M": "ഉദയഗിരി",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Alakode",
      "M": "ആലക്കോട്",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Eruvessy",
      "M": "എരുവേശ്ശി",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Irikkur",
      "M": "ഇരിക്കൂര്‍",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Malappattam",
      "M": "മലപ്പട്ടം",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Payyavoor",
      "M": "പയ്യാവൂര്‍",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Kolachery",
      "M": "കൊളച്ചേരി",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Kuttiattoor",
      "M": "കുറ്റ്യാട്ടൂര്‍",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Mayyil",
      "M": "മയ്യില്‍",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Padiyoor ",
      "M": "പടിയൂര്‍ ",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Ulikkal",
      "M": "ഉളിക്കല്‍",
      "BT": "5",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Chirakkal",
      "M": "ചിറക്കല്‍",
      "BT": "5",
      "BID": "143",
      "DID": "13"
    },
    {
      "E": "Valapattanam",
      "M": "വളപട്ടണം",
      "BT": "5",
      "BID": "143",
      "DID": "13"
    },
    {
      "E": "Azhikode",
      "M": "അഴീക്കോട്",
      "BT": "5",
      "BID": "143",
      "DID": "13"
    },
    {
      "E": "Anjarakandy",
      "M": "അഞ്ചരക്കണ്ടി",
      "BT": "5",
      "BID": "144",
      "DID": "13"
    },
    {
      "E": "Kadambur",
      "M": "കടമ്പൂര്‍",
      "BT": "5",
      "BID": "144",
      "DID": "13"
    },
    {
      "E": "Muzhappilangad",
      "M": "മുഴപ്പിലങ്ങാട്",
      "BT": "5",
      "BID": "144",
      "DID": "13"
    },
    {
      "E": "Chembilode",
      "M": "ചെമ്പിലോട്",
      "BT": "5",
      "BID": "144",
      "DID": "13"
    },
    {
      "E": "Munderi",
      "M": "മുണ്ടേരി",
      "BT": "5",
      "BID": "144",
      "DID": "13"
    },
    {
      "E": "Peralassery",
      "M": "പെരളശ്ശേരി",
      "BT": "5",
      "BID": "144",
      "DID": "13"
    },
    {
      "E": "Dharmadam",
      "M": "ധര്‍മ്മടം",
      "BT": "5",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "Eranholi",
      "M": "എരഞ്ഞോളി",
      "BT": "5",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "Kadirur",
      "M": "കതിരൂര്‍",
      "BT": "5",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "Kottayam",
      "M": "കോട്ടയം",
      "BT": "5",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "Pinarayi",
      "M": "പിണറായി",
      "BT": "5",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "Chokli",
      "M": "ചൊക്ളി",
      "BT": "5",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "New Mahe",
      "M": "ന്യൂ മാഹി",
      "BT": "5",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "Mokeri",
      "M": "മൊകേരി",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Panniyannur",
      "M": "പന്ന്യന്നൂര്‍",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Triprangottoor",
      "M": "തൃപ്രങ്ങോട്ടൂര്‍",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Chittariparamba",
      "M": "ചിറ്റാരിപ്പറമ്പ്",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Kunnothuparamba",
      "M": "കുന്നാത്തുപറമ്പ്",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Mangattidam",
      "M": "മാങ്ങാട്ടിടം",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Pattiam",
      "M": "പാട്യം",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Vengad",
      "M": "വേങ്ങാട്",
      "BT": "5",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Aralam",
      "M": "ആറളം",
      "BT": "5",
      "BID": "147",
      "DID": "13"
    },
    {
      "E": "Ayyankunnu",
      "M": "അയ്യന്‍കുന്ന്",
      "BT": "5",
      "BID": "147",
      "DID": "13"
    },
    {
      "E": "Keezhallur",
      "M": "കീഴല്ലൂര്‍",
      "BT": "5",
      "BID": "147",
      "DID": "13"
    },
    {
      "E": "Thillankery",
      "M": "തില്ലങ്കേരി",
      "BT": "5",
      "BID": "147",
      "DID": "13"
    },
    {
      "E": "Koodali",
      "M": "കൂടാളി",
      "BT": "5",
      "BID": "147",
      "DID": "13"
    },
    {
      "E": "Payam",
      "M": "പായം",
      "BT": "5",
      "BID": "147",
      "DID": "13"
    },
    {
      "E": "Kanichar",
      "M": "കണിച്ചാര്‍",
      "BT": "5",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Kelakam",
      "M": "കേളകം",
      "BT": "5",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Kottiyoor",
      "M": "കൊട്ടിയൂര്‍",
      "BT": "5",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Muzhakkunnu",
      "M": "മുഴക്കുന്ന്",
      "BT": "5",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Kolayad",
      "M": "കോളയാട്",
      "BT": "5",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Malur",
      "M": "മാലൂര്‍",
      "BT": "5",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Peravoor",
      "M": "പേരാവൂര്‍",
      "BT": "5",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Iritty",
      "M": "ഇരിട്ടി",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Kannur",
      "M": "കണ്ണൂര്‍",
      "BT": "1",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Kuthuparamba",
      "M": "കൂത്തുപറമ്പ്",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Thalipparamba",
      "M": "തളിപ്പറമ്പ്",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Mattanur",
      "M": "മട്ടന്നൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Panoor",
      "M": "പാനൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Sreekandapuram",
      "M": "ശ്രീകണ്ഠാപുരം",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Anthoor",
      "M": "ആന്തൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Thalassery",
      "M": "തലശ്ശേരി",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Peravoor",
      "M": "പേരാവൂര്‍",
      "BT": "2",
      "BID": "148",
      "DID": "13"
    },
    {
      "E": "Iritty",
      "M": "ഇരിട്ടി",
      "BT": "2",
      "BID": "147",
      "DID": "13"
    },
    {
      "E": "Kuthuparamba",
      "M": "കൂത്തുപറമ്പ്",
      "BT": "2",
      "BID": "146",
      "DID": "13"
    },
    {
      "E": "Thalassery",
      "M": "തലശ്ശേരി",
      "BT": "2",
      "BID": "145",
      "DID": "13"
    },
    {
      "E": "Edakkad",
      "M": "എടക്കാട്",
      "BT": "2",
      "BID": "144",
      "DID": "13"
    },
    {
      "E": "Kannur",
      "M": "കണ്ണൂര്‍",
      "BT": "2",
      "BID": "143",
      "DID": "13"
    },
    {
      "E": "Irikkur",
      "M": "ഇരിക്കൂര്‍",
      "BT": "2",
      "BID": "142",
      "DID": "13"
    },
    {
      "E": "Thalipparamba",
      "M": "തളിപ്പറമ്പ്",
      "BT": "2",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Payyannur",
      "M": "പയ്യന്നൂര്‍",
      "BT": "2",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Payyannur",
      "M": "പയ്യന്നൂര്‍",
      "BT": "3",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Cheruthazham",
      "M": "ചെറുതാഴം",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Ezhome",
      "M": "ഏഴോം",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Kannur",
      "M": "കണ്ണൂര്‍",
      "BT": "4",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Panoor ",
      "M": "പാനൂര്‍ ",
      "BT": "2",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Kalliasseri ",
      "M": "കല്ല്യാശ്ശേരി ",
      "BT": "2",
      "BID": null,
      "DID": "13"
    },
    {
      "E": "Kunhimangalam",
      "M": "കുഞ്ഞിമംഗലം",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Madayi",
      "M": "മാടായി",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Mattool",
      "M": "മാട്ടൂല്‍",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Ramanthali",
      "M": "രാമന്തളി",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Kadannappally Panapuzha",
      "M": "കടന്നപ്പള്ളി പാണപ്പുഴ",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Karivellur Peralam",
      "M": "കരിവെള്ളൂര്‍ പെരളം",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Kankol - Alappadamba",
      "M": "കാങ്കോല്‍ - ആലപ്പടമ്പ",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Eramam Kuttur",
      "M": "എരമം കുറ്റൂര്‍",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Peringome Vayakkara",
      "M": "പെരിങ്ങോം വയക്കര",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Cherupuzha",
      "M": "ചെറുപുഴ",
      "BT": "5",
      "BID": "140",
      "DID": "13"
    },
    {
      "E": "Pattuvam",
      "M": "പട്ടുവം",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Cherukunnu",
      "M": "ചെറുകുന്ന്",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Kalliasseri",
      "M": "കല്ല്യാശ്ശേരി",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Kannapuram",
      "M": "കണ്ണപുരം",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Pappinisseri",
      "M": "പാപ്പിനിശ്ശേരി",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Chengalayi",
      "M": "ചെങ്ങളായി",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Kurumathur",
      "M": "കുറുമാത്തൂര്‍",
      "BT": "5",
      "BID": "141",
      "DID": "13"
    },
    {
      "E": "Bedadka",
      "M": "ബേഡഡുക്ക",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Valiyaparamba",
      "M": "വലിയപറമ്പ",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Trikaripur",
      "M": "തൃക്കരിപ്പൂര്‍",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Kinanoor - Karinthalam",
      "M": "കിനാനൂര്‍  കരിന്തളം",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "WestEleri",
      "M": "വെസ്റ് എളേരി",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Pilicode",
      "M": "പിലിക്കോട്",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "East Eleri",
      "M": "ഈസ്റ് എളേരി",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Kayyur Cheemeni",
      "M": "കയ്യൂര്‍ ചീമേനി",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Cheruvathur",
      "M": "ചെറുവത്തൂര്‍",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Kallar",
      "M": "കള്ളാര്‍",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "PullurPeriya",
      "M": "പുല്ലൂര്‍ പെരിയ",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Nileshwar ",
      "M": "നീലേശ്വരം ",
      "BT": "3",
      "BID": null,
      "DID": "14"
    },
    {
      "E": "Panathady",
      "M": "പനത്തടി",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Pallikere",
      "M": "പള്ളിക്കര",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Madikai",
      "M": "മടിക്കൈ",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "KodomBelur",
      "M": "കോടോം ബേളൂര്‍",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Balal",
      "M": "ബളാല്‍",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Karadka ",
      "M": "കാറഡുക്ക ",
      "BT": "2",
      "BID": null,
      "DID": "14"
    },
    {
      "E": "Parappa ",
      "M": "പരപ്പ ",
      "BT": "2",
      "BID": null,
      "DID": "14"
    },
    {
      "E": "Ajanur",
      "M": "അജാനൂര്‍",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Udma",
      "M": "ഉദുമ",
      "BT": "5",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Kuttikol",
      "M": "കുറ്റിക്കോല്‍",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "MogralPuthur",
      "M": "മൊഗരാല്‍ പുത്തൂര്‍",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Madhur",
      "M": "മധൂര്‍",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Padne",
      "M": "പടന്ന",
      "BT": "5",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Chemnad",
      "M": "ചെമ്മനാട്",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Chengala",
      "M": "ചെങ്കള",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Delampady",
      "M": "ദേലംപാടി",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Karadka",
      "M": "കാറഡുക്ക",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Muliyar",
      "M": "മുളിയാര്‍",
      "BT": "5",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Badiadka",
      "M": "ബദിയഡുക്ക",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Enmakaje",
      "M": "എന്‍മകജെ",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Paivalike",
      "M": "പൈവളികെ",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Kumbla",
      "M": "കുമ്പള",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Manjeshwar",
      "M": "മഞ്ചശ്വരം",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Meenja",
      "M": "മീഞ്ച",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Puthige",
      "M": "പുത്തിഗെ",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Vorkady",
      "M": "വോര്‍ക്കാടി",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Mangalpady",
      "M": "മംഗല്‍പാടി",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Kumbadaje",
      "M": "കുംബഡാജെ",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Belloor",
      "M": "ബേളൂര്‍",
      "BT": "5",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Kanhangad",
      "M": "കാഞ്ഞങ്ങാട്",
      "BT": "3",
      "BID": null,
      "DID": "14"
    },
    {
      "E": "Manjeshwar",
      "M": "മഞ്ചശ്വരം",
      "BT": "2",
      "BID": "149",
      "DID": "14"
    },
    {
      "E": "Kasaragod",
      "M": "കാസര്‍കോഡ്",
      "BT": "2",
      "BID": "150",
      "DID": "14"
    },
    {
      "E": "Kanhangad",
      "M": "കാഞ്ഞങ്ങാട്",
      "BT": "2",
      "BID": "151",
      "DID": "14"
    },
    {
      "E": "Nileshwar",
      "M": "നീലേശ്വരം",
      "BT": "2",
      "BID": "152",
      "DID": "14"
    },
    {
      "E": "Kasaragod",
      "M": "കാസര്‍കോഡ്",
      "BT": "1",
      "BID": null,
      "DID": "14"
    },
    {
      "E": "Kasaragod",
      "M": "കാസര്‍കോഡ്",
      "BT": "3",
      "BID": null,
      "DID": "14"
    }
   ];
  
  
  
  var meaningOfLife = 42;
  
      var masterDataPopulator = {};
  
      masterDataPopulator.getDistricts = function() {
        
        return districts;
  
      };


      masterDataPopulator.getBlocksForDistrict = function (districtName) {
        
          var distId = getDistrictId(districtName);
          var blocksForDistrict = [];
          console.log('district id : ' + distId);
          angular.forEach(blocks, function(value, key){
            
            if(value.DID == distId) {
              blocksForDistrict.push(value);
              console.log(JSON.stringify(value));
            }
    });
    return blocksForDistrict;
  };

  masterDataPopulator.getPostOfficesForDistrict = function (districtName) {
    
      var distId = getDistrictId(districtName);
      var postOfficesForDistrict = [];
      console.log('district id : ' + distId);
      angular.forEach(postoffices, function(value, key){
        
        if(value.DID == distId) {
          postOfficesForDistrict.push(value);
          console.log(JSON.stringify(value));
        }
});
return postOfficesForDistrict;
};

masterDataPopulator.getTaluksForDistrict = function (districtName) {

  var distId = getDistrictId(districtName);
  var taluksForDistrict = [];
  console.log('district id : ' + distId);
  angular.forEach(taluks, function(value, key){
    
    if(value.DID == distId) {
      taluksForDistrict.push(value);
      console.log(JSON.stringify(value));
    }
});
return taluksForDistrict;
};

masterDataPopulator.getVillagesForDistrict = function (districtName) {

  var distId = getDistrictId(districtName);
  var villagesForDistrict = [];
  console.log('district id : ' + distId);
  angular.forEach(villages, function(value, key){
    
    if(value.DID == distId) {
      villagesForDistrict.push(value);
      console.log(JSON.stringify(value));
    }
});
return villagesForDistrict;
};



    function getDistrictId(districtName) {
      var distId;
      angular.forEach(districts, function(value, key){
        console.log(key + ': ' + value);
        if(value.malDistName == districtName) {
          
          distId = value.distID
        }
   });

   return distId;
  }
  
      return masterDataPopulator;
  
      // Public API here
      // return {
      //   someMethod: function () {
      //     return meaningOfLife;
      //   }
      // };
  
   
  
     
  
    });
  
