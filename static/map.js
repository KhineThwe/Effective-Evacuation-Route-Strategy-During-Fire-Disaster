///Quaters List
////Quater ထပ်ထည့်လျှင်ဤ နေရာတွင် lat lon များကို အောက်တွင်ပြထားသည့်ပုံစံတိုင်း ထပ်မံထည့်ရမည်။
let Quaters = [
  { ThiriMinGular: [20.883638, 95.862809] },
  { AungZayYar: [20.884405, 95.867542] },
  { NanDawGone: [20.876902, 95.838725] },
];

//Quater ထပ်ထည့်လျှင် ဤ နေရာတွင် ထို Quater ကိုရောက်မည့် firestation 3 ခု ၏ lat lon များကို အောက်တွင်ပြထားသည့်ပုံစံတိုင်း ထပ်မံထည့်ရမည်။
let Firestations = {
  ThiriMinGular: [
    { Big_Market: [20.880978, 95.860107] },
    { AungZayYarFire: [20.885439, 95.866083] },
    { East_of_Market: [20.876918, 95.860558] },
  ],
  AungZayYar: [
    { Big_Market: [20.880978, 95.860107] },
    { AungZayYarFire: [20.885439, 95.866083] },
    { East_of_Market: [20.876918, 95.860558] },
  ],
  NanDawGone: [
    { East_of_Market: [20.876918, 95.860558] },
    { Thee_Gyonehighway: [20.81447, 95.76991] },
    { AungSan_Firestation: [20.854212, 95.824492] },
  ],
};
//for route
//Quater ထပ်ထည့်လျှင် ဤ နေရာတွင်  routes သွားရန်အတွက် firestations,Quaters,streets များအားလုံး ၏ lat lon အကုန်လုံးကိုထည့်ထားရမည်။ 
//မှတ်ချက်။ ။ Node များမထပ်စေရန်ဂရုပြုပါ။ Node များထပ်လျှင် error တက်နိုင်သည်။ 
let routes = {
  //firestations
  EastOfMarket: [20.876918, 95.860558],
  BigMarket: [20.880978, 95.860107],
  AungZayarFire: [20.885439, 95.866083],
  TheeGoneHighway: [20.81447, 95.76991],
  AungSanFire: [20.854212, 95.824492],
  ////quaters
  ThiriMinGular: [20.883638, 95.862809],
  AungZayYar: [20.884405, 95.867542],
  NanDawGone: [20.876902, 95.838725],
  ////streets
  ShweWintMugStreet: [20.883, 95.863],
  CherryStreet: [20.882, 95.864],
  NugWarStreet: [20.883, 95.861],
  ZayPyatStreet: [20.883, 95.862],
  NwadatStreet: [20.884, 95.867],
  PalaeZayStreet: [20.884, 95.866],
  MahaKyawStreet: [20.873, 95.839],
  MaKyeeGoneStreet: [20.874, 95.839],
  MaKyeeGoneBoneKgiKyaungStreet: [20.874, 95.838],
  MaKyeeGoneKyaungStreet: [20.877, 95.84],
  YangonMandalayRoad: [20.876, 95.86],
  MyoShweKyaungStreet: [20.875, 95.86],
  MeiktilaKyaukpadaungRoad: [20.877, 95.854],
  YoneGyiStreet: [20.878, 95.853],
  YoneStreet1: [20.876, 95.853],
  HninSiStreet: [20.878, 95.851],
  YoneStreet: [20.879, 95.851],
  ThukhaHtilaStreet: [20.879, 95.846],
  KhwarNyoStreet: [20.878, 95.85],
  TharyarKoneStreet: [20.878, 95.846],
  ManiZawKayoneStreet: [20.878, 95.843],
  BandulaStreet: [20.877, 95.843],
  YwarTitGoneStreet: [20.876, 95.843],
  YoneStreet2: [20.875, 95.853],
  NanDawKoneStreet: [20.877, 95.851],
  ChanAyeStreet: [20.876, 95.849],
  KanPatStreet: [20.874, 95.847],
  PaungChaungZayStreet: [20.875, 95.845],
};
