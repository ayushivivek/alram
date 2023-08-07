const min = {
  0: "00",
  1: "01",
  2: "02",
  3: "03",
  4: "04",
  5: "05",
  6: "06",
  7: "07",
  8: "08",
  9: "09",
  10: "10",
  11: "11",
  12: "12",
  13: "13",
  14: "14",
  15: "15",
  16: "16",
  17: "17",
  18: "18",
  19: "19",
  20: "20",
  21: "21",
  22: "22",
  23: "23",
  24: "24",
  25: "25",
  26: "26",
  27: "27",
  28: "28",
  29: "29",
  30: "30",
  31: "31",
  32: "32",
  33: "33",
  34: "34",
  35: "35",
  36: "36",
  37: "37",
  38: "38",
  39: "39",
  40: "40",
  41: "41",
  42: "42",
  43: "43",
  44: "44",
  45: "45",
  46: "46",
  47: "47",
  48: "48",
  49: "49",
  50: "50",
  51: "51",
  52: "52",
  53: "53",
  54: "54",
  55: "55",
  56: "56",
  57: "57",
  58: "58",
  59: "59",
};
const hour2 = {
  0: "00",
  1: "01",
  2: "02",
  3: "03",
  4: "04",
  5: "05",
  6: "06",
  7: "07",
  8: "08",
  9: "09",
  10: "10",
  11: "11",
  12: "12",
  13: "13",
  14: "14",
  15: "15",
  16: "16",
  17: "17",
  18: "18",
  19: "19",
  20: "20",
  21: "21",
  22: "22",
  23: "23",
  24: "24",
  25: "25",
  26: "26",
  27: "27",
  28: "28",
  29: "29",
  30: "30",
  31: "31",
  32: "32",
  33: "33",
  34: "34",
  35: "35",
  36: "36",
  37: "37",
  38: "38",
  39: "39",
  40: "40",
  41: "41",
  42: "42",
  43: "43",
  44: "44",
  45: "45",
  46: "46",
  47: "47",
  48: "48",
  49: "49",
  50: "50",
  51: "51",
  52: "52",
  53: "53",
  54: "54",
  55: "55",
  56: "56",
  57: "57",
  58: "58",
  59: "59",
  60: "60",
  61: "61",
  62: "62",
  63: "63",
  64: "64",
  65: "65",
  66: "66",
  67: "67",
  68: "68",
  69: "69",
  70: "70",
  71: "71",
  72: "72",
  73: "73",
  74: "74",
  75: "75",
  76: "76",
  77: "77",
  78: "78",
  79: "79",
  80: "80",
  81: "81",
  82: "82",
  83: "83",
  84: "84",
  85: "85",
  86: "86",
  87: "87",
  88: "88",
  89: "89",
  90: "90",
  91: "91",
  92: "92",
  93: "93",
  94: "94",
  95: "95",
  96: "96",
  97: "97",
  98: "98",
  99: "99",
};
const hour = {
  "12 AM": "12 AM",
  "1 AM": "1 AM",
  "2 AM": "2 AM",
  "3 AM": "3 AM",
  "4 AM": "4 AM",
  "5 AM": "5 AM",
  "6 AM": "6 AM",
  "7 AM": "7 AM",
  "8 AM": "8 AM",
  "9 AM": "9 AM",
  "10 AM": "10 AM",
  "11 AM": "11 AM",
  "12 PM": "12 PM",
  "1 PM": "1 PM",
  "2 PM": "2 PM",
  "3 PM": "3 PM",
  "4 PM": "4 PM",
  "5 PM": "5 PM",
  "6 PM": "6 PM",
  "7 PM": "7 PM",
  "8 PM": "8 PM",
  "9 PM": "9 PM",
  "10 PM": "10 PM",
  "11 PM": "11 PM",
};

const tunes = {
  Classic: "https://downloads.imjafar.com/ringtones/Nokia-Classic-Ringtone.mp3",
  Nokia2600: "https://downloads.imjafar.com/ringtones/Nokia-2600-Ringtone.mp3",
  Lumia920: "https://downloads.imjafar.com/ringtones/Nokia-Lumia-920-Tune.mp3",
  SoulRingtone:
    "https://downloads.imjafar.com/ringtones/Nokia-1110-Soul-Ringtone.mp3",
  EspionageRingtone:
    "https://downloads.imjafar.com/ringtones/Nokia-1208-Espionage-Ringtone.mp3",
};

const quick = [
  "4:00 AM",
  "4:15 AM",
  "4:30 AM",
  "4:45 AM",
  "5:00 AM",
  "5:15 AM",
  "5:30 AM",
  "5:45 AM",
  "6:00 AM",
  "6:15 AM",
  "6:30 AM",
  "6:45 AM",
  "6:00 AM",
  "6:15 AM",
  "6:30 AM",
  "7:45 AM",
  "8:00 AM",
  "4:00 PM",
  "4:15 PM",
  "4:30 PM",
  "4:45 PM",
  "5:00 PM",
  "5:15 PM",
  "5:30 PM",
  "5:45 PM",
  "6:00 PM",
  "6:15 PM",
  "6:30 PM",
  "6:45 PM",
  "6:00 PM",
  "6:15 PM",
  "6:30 PM",
  "7:45 PM",
  "8:00 PM",
];

const quickset = {
  "4:00 AM": "4:00 AM",
  "4:50 AM": "4:50 AM",
  "5:10 AM": "5:10 AM",
  "6:30 AM": "6:30 AM",
  "1:10 AM": "1:10 AM",
};

export { hour, min, tunes, quick, hour2, quickset };