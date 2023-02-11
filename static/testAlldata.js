//Map initialization
var map = L.map("map").setView([20.876, 95.843], 13);

googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

googleStreets.addTo(map);

//fireStations
let North_of_PyiTharYar_Quarter = [20.869178, 95.347886];
let East_of_Market = [20.876918, 95.860558];
let AungZayYarFire = [20.885439, 95.866083];
let AungSan_Firestation = [20.854212, 95.824492];
let Thee_Gyonehighway = [20.81447, 95.76991];
let Big_Market = [20.880978, 95.860107];
let Meiktila_Industrial_Zone = [20.958768, 95.959061];

//fireStations markers
var North_of_PyiTharYar_Quarter_Marker = L.marker(North_of_PyiTharYar_Quarter);
var East_of_Market_Marker = L.marker(East_of_Market);
var AungZayar_Marker = L.marker(AungZayYarFire);
var AungSan_Firestation_Marker = L.marker(AungSan_Firestation);
var Thee_Gyonehighway_Marker = L.marker(Thee_Gyonehighway);
var Big_Market_Marker = L.marker(Big_Market);
var Meiktila_Industrial_Zone_Marker = L.marker(Meiktila_Industrial_Zone);

North_of_PyiTharYar_Quarter_Marker.addTo(map);
East_of_Market_Marker.addTo(map);
AungZayar_Marker.addTo(map);
AungSan_Firestation_Marker.addTo(map);
Thee_Gyonehighway_Marker.addTo(map);
Big_Market_Marker.addTo(map);
Meiktila_Industrial_Zone_Marker.addTo(map);

//fireStations label
var North_of_PyiTharYar_Quarter_pop =
  North_of_PyiTharYar_Quarter_Marker.bindPopup("North_of_PyiTharYar_Quarter")
    .openPopup()
    .addTo(map);
var East_of_Market_pop = East_of_Market_Marker.bindPopup("East_of_Market")
  .openPopup()
  .addTo(map);
var AungZayar_pop = AungZayar_Marker.bindPopup("AungZayar")
  .openPopup()
  .addTo(map);
var AungSan_Firestation_pop = AungSan_Firestation_Marker.bindPopup(
  "AungSan_Firestation"
)
  .openPopup()
  .addTo(map);
var Thee_Gyonehighway_pop = Thee_Gyonehighway_Marker.bindPopup(
  "Thee_Gyonehighway"
)
  .openPopup()
  .addTo(map);
var Big_Market_pop = Big_Market_Marker.bindPopup("Big_Market")
  .openPopup()
  .addTo(map);
var Meiktila_Industrial_Zone_pop = Meiktila_Industrial_Zone_Marker.bindPopup(
  "Meiktila_Industrial_Zone"
)
  .openPopup()
  .addTo(map);

//Quater_names
var quatersIcon = new L.Icon({
  iconUrl: "static//img/marker-icon-2x-violet.png",
  shadowUrl: "static//img/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
let ThiriMinGular = [20.883638, 95.862809];
let EasternMarket = [20.880069, 95.859152];
let KyiTawGone = [20.900271, 95.877531];
let YanMyoAung = [20.889983, 95.865675];
let WinZin = [20.897055, 95.857704];
let AungSan = [20.854772, 95.825979];
let PaukChaung = [20.874692, 95.846342];
let YadamaanAung = [20.880567, 95.86618];
let S_PyiTharYar = [20.905954, 95.886511];
let N_PyiTharYar = [20.908575, 95.882262];
let NanDawGone = [20.876902, 95.838725];
let AungZayYar = [20.884405, 95.867542];
let ChitSet = [20.87606, 95.885953];
let Maharsi = [20.87239, 95.895319];
let myoma = [20.88465, 95.86235];

//Quater_names markers

var ThiriMinGular_Marker = L.marker(ThiriMinGular, { icon: quatersIcon });
var EasternMarket_Marker = L.marker(EasternMarket, { icon: quatersIcon });
var KyiTawGone_Marker = L.marker(KyiTawGone, { icon: quatersIcon });
var YanMyoAung_Marker = L.marker(YanMyoAung, { icon: quatersIcon });
var WinZin_Marker = L.marker(WinZin, { icon: quatersIcon });
var AungSan_Marker = L.marker(AungSan, { icon: quatersIcon });
var PaukChaung_Marker = L.marker(PaukChaung, { icon: quatersIcon });
var YadamaanAung_Marker = L.marker(YadamaanAung, { icon: quatersIcon });
var S_PyiTharYar_Marker = L.marker(S_PyiTharYar, { icon: quatersIcon });
var N_PyiTharYar_Marker = L.marker(N_PyiTharYar, { icon: quatersIcon });
var NanDawGone_Marker = L.marker(NanDawGone, { icon: quatersIcon });
var AungZayYar_Marker = L.marker(AungZayYar, { icon: quatersIcon });
var ChitSet_Marker = L.marker(ChitSet, { icon: quatersIcon });
var Maharsi_Marker = L.marker(Maharsi, { icon: quatersIcon });
var myoma_Marker = L.marker(myoma, { icon: quatersIcon });

ThiriMinGular_Marker.addTo(map);
EasternMarket_Marker.addTo(map);
KyiTawGone_Marker.addTo(map);
YanMyoAung_Marker.addTo(map);
WinZin_Marker.addTo(map);
AungSan_Marker.addTo(map);
PaukChaung_Marker.addTo(map);
YadamaanAung_Marker.addTo(map);
S_PyiTharYar_Marker.addTo(map);
N_PyiTharYar_Marker.addTo(map);
NanDawGone_Marker.addTo(map);
AungZayYar_Marker.addTo(map);
ChitSet_Marker.addTo(map);
Maharsi_Marker.addTo(map);
myoma_Marker.addTo(map);

//Quaters labels

var ThiriMinGular_pop = ThiriMinGular_Marker.bindPopup("ThiriMinGular")
  .openPopup()
  .addTo(map);
var EasternMarket_pop = EasternMarket_Marker.bindPopup("EasternMarket")
  .openPopup()
  .addTo(map);
var KyiTawGone_pop = KyiTawGone_Marker.bindPopup("KyiTawGone")
  .openPopup()
  .addTo(map);
var YanMyoAung_pop = YanMyoAung_Marker.bindPopup("YanMyoAung")
  .openPopup()
  .addTo(map);
var WinZin_pop = WinZin_Marker.bindPopup("WinZin").openPopup().addTo(map);
var AungSan_pop = AungSan_Marker.bindPopup("AungSan").openPopup().addTo(map);
var PaukChaung_pop = PaukChaung_Marker.bindPopup("PaukChaung")
  .openPopup()
  .addTo(map);
var YadamaanAung_pop = YadamaanAung_Marker.bindPopup("YadamaanAung")
  .openPopup()
  .addTo(map);
var S_PyiTharYar_pop = S_PyiTharYar_Marker.bindPopup("S_PyiTharYar")
  .openPopup()
  .addTo(map);
var N_PyiTharYar_pop = N_PyiTharYar_Marker.bindPopup("N_PyiTharYar")
  .openPopup()
  .addTo(map);
var NanDawGone_pop = NanDawGone_Marker.bindPopup("NanDawGone")
  .openPopup()
  .addTo(map);
var AungZayYar_pop = AungZayYar_Marker.bindPopup("AungZayYar")
  .openPopup()
  .addTo(map);
var ChitSet_pop = ChitSet_Marker.bindPopup("ChitSet").openPopup().addTo(map);
var Maharsi_pop = Maharsi_Marker.bindPopup("Maharsi").openPopup().addTo(map);
var myoma_pop = myoma_Marker.bindPopup("myoma").openPopup().addTo(map);

//streets
var streetIcon = new L.Icon({
  iconUrl: "static/img/marker-icon-2x-black.png",
  shadowUrl: "static/img/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
let Meiktila_Kyaukpadaung_Road = [20.877, 95.854];
let BeHS_street = [20.878, 95.853];
let Yone_street_1 = [20.876, 95.853];
let Yone_street_2 = [20.875, 95.853];
let KanPat_street = [20.874, 95.853];
let Yone_Gyi = [20.878, 95.853];
let HninSi = [20.878, 95.851];
let Yone_street = [20.879, 95.851];
let Pauk_Chaung_zay = [20.878, 95.85];
let NanDawKone_street = [20.877, 95.851];
let KhwarNyo = [20.878, 95.85];
let North_Kan_Pat = [20.88, 95.853];
let Tha_Pyay = [20.88, 95.85];
let Sabal = [20.881, 95.85];
let Thazi = [20.881, 95.849];
let Hkhatter_Lane = [20.882, 95.849];
let Shin_Saw_lu_pagado = [20.882, 95.85];
let Padauk = [20.883, 95.848];
let U_yin_Chan = [20.88, 95.846];
let Thukha_Htila = [20.879, 95.846];
let Aung_Mingalar = [20.879, 95.844];
let Ahawyahtar = [20.877, 95.844];
let Kyan_Sitt_Thar = [20.887, 95.844];
let Bandula = [20.877, 95.843];
let Tharyar_Kone = [20.878, 95.846];
let Mani_zawti_kayone = [20.878, 95.843];
let Ywar_Thit_Gone = [20.876, 95.843];
let Ma_Kyee_Gone_Kyaung = [20.877, 95.84];
let Ma_Kyee_Gone_Tike = [20.878, 95.84];
let Ma_Kyee_Gone = [20.874, 95.839];
let Maha_Kyaw = [20.873, 95.839];
let Ma_kyee_Gone_Bone_Kgi_kyaung = [20.874, 95.838];
let Chan_Aye = [20.876, 95.849];
let Kan_Pat = [20.874, 95.847];
let Paung_Chaung_Zay = [20.875, 95.845];
let Baw_Lone_Kwin = [20.878, 95.845];

//streets markers
var Meiktila_Kyaukpadaung_Road_Marker = L.marker(Meiktila_Kyaukpadaung_Road, {
  icon: streetIcon,
});
var BeHS_street_Marker = L.marker(BeHS_street, { icon: streetIcon });
var Meiktila_Kyaukpadaung_Road_Marker = L.marker(Meiktila_Kyaukpadaung_Road, {
  icon: streetIcon,
});
var Yone_street_1_Marker = L.marker(Yone_street_1, { icon: streetIcon });
var Yone_street_2_Marker = L.marker(Yone_street_2, { icon: streetIcon });
var KanPat_street_Marker = L.marker(KanPat_street, { icon: streetIcon });
var Yone_Gyi_Marker = L.marker(Yone_Gyi, { icon: streetIcon });
var HninSi_Marker = L.marker(HninSi, { icon: streetIcon });
var Yone_street_Marker = L.marker(Yone_street, { icon: streetIcon });
var Pauk_Chaung_zay_Marker = L.marker(Pauk_Chaung_zay, {
  icon: streetIcon,
});
var NanDawKone_street_Marker = L.marker(NanDawKone_street, {
  icon: streetIcon,
});
var KhwarNyo_Marker = L.marker(KhwarNyo, { icon: streetIcon });
var North_Kan_Pat_Marker = L.marker(North_Kan_Pat, { icon: streetIcon });
var Tha_Pyay_Marker = L.marker(Tha_Pyay, { icon: streetIcon });
var Sabal_Marker = L.marker(Sabal, { icon: streetIcon });
var Thazi_Marker = L.marker(Thazi, { icon: streetIcon });
var Hkhatter_Lane_Marker = L.marker(Hkhatter_Lane, { icon: streetIcon });
var Shin_Saw_lu_pagado_Marker = L.marker(Shin_Saw_lu_pagado, {
  icon: streetIcon,
});
var Padauk_Marker = L.marker(Padauk, { icon: streetIcon });
var U_yin_Chan_Marker = L.marker(U_yin_Chan, { icon: streetIcon });
var Thukha_Htila_Marker = L.marker(Thukha_Htila, { icon: streetIcon });
var Aung_Mingalar_Marker = L.marker(Aung_Mingalar, { icon: streetIcon });
var Ahawyahtar_Marker = L.marker(Ahawyahtar, { icon: streetIcon });
var Kyan_Sitt_Thar_Marker = L.marker(Kyan_Sitt_Thar, {
  icon: streetIcon,
});
var Bandula_Marker = L.marker(Bandula, { icon: streetIcon });
var Tharyar_Kone_Marker = L.marker(Tharyar_Kone, { icon: streetIcon });
var Mani_zawti_kayone_Marker = L.marker(Mani_zawti_kayone, {
  icon: streetIcon,
});
var Ywar_Thit_Gone_Marker = L.marker(Ywar_Thit_Gone, {
  icon: streetIcon,
});
var Ma_Kyee_Gone_Kyaung_Marker = L.marker(Ma_Kyee_Gone_Kyaung, {
  icon: streetIcon,
});
var Ma_Kyee_Gone_Tike_Marker = L.marker(Ma_Kyee_Gone_Tike, {
  icon: streetIcon,
});
var Ma_Kyee_Gone_Marker = L.marker(Ma_Kyee_Gone, { icon: streetIcon });
var Maha_Kyaw_Marker = L.marker(Maha_Kyaw, { icon: streetIcon });
var Ma_kyee_Gone_Bone_Kgi_kyaung_Marker = L.marker(
  Ma_kyee_Gone_Bone_Kgi_kyaung,
  { icon: streetIcon }
);
var Chan_Aye_Marker = L.marker(Chan_Aye, { icon: streetIcon });
var Kan_Pat_Marker = L.marker(Kan_Pat, { icon: streetIcon });
var Paung_Chaung_Zay_Marker = L.marker(Paung_Chaung_Zay, {
  icon: streetIcon,
});
var Baw_Lone_Kwin_Marker = L.marker(Baw_Lone_Kwin, { icon: streetIcon });

//add to map
Meiktila_Kyaukpadaung_Road_Marker.addTo(map);
BeHS_street_Marker.addTo(map);
Yone_street_1_Marker.addTo(map);
Yone_street_2_Marker.addTo(map);
KanPat_street_Marker.addTo(map);
Yone_Gyi_Marker.addTo(map);
HninSi_Marker.addTo(map);
Yone_street_Marker.addTo(map);
Pauk_Chaung_zay_Marker.addTo(map);
NanDawKone_street_Marker.addTo(map);
KhwarNyo_Marker.addTo(map);
North_Kan_Pat_Marker.addTo(map);
Tha_Pyay_Marker.addTo(map);
Sabal_Marker.addTo(map);
Thazi_Marker.addTo(map);
Hkhatter_Lane_Marker.addTo(map);
Shin_Saw_lu_pagado_Marker.addTo(map);
Padauk_Marker.addTo(map);
U_yin_Chan_Marker.addTo(map);
Thukha_Htila_Marker.addTo(map);
Aung_Mingalar_Marker.addTo(map);
Ahawyahtar_Marker.addTo(map);
Kyan_Sitt_Thar_Marker.addTo(map);
Bandula_Marker.addTo(map);
Tharyar_Kone_Marker.addTo(map);
Mani_zawti_kayone_Marker.addTo(map);
Ywar_Thit_Gone_Marker.addTo(map);
Ma_Kyee_Gone_Kyaung_Marker.addTo(map);
Ma_Kyee_Gone_Tike_Marker.addTo(map);
Ma_Kyee_Gone_Marker.addTo(map);
Maha_Kyaw_Marker.addTo(map);
Ma_kyee_Gone_Bone_Kgi_kyaung_Marker.addTo(map);
Chan_Aye_Marker.addTo(map);
Kan_Pat_Marker.addTo(map);
Paung_Chaung_Zay_Marker.addTo(map);
Baw_Lone_Kwin_Marker.addTo(map);

//streets labels
var Meiktila_Kyaukpadaung_pop = Meiktila_Kyaukpadaung_Road_Marker.bindPopup(
  "Meiktila_Kyaukpadaung_Road_street"
)
  .openPopup()
  .addTo(map);
var BeHS_street_pop = BeHS_street_Marker.bindPopup("BeHS_street")
  .openPopup()
  .addTo(map);
var Yone_street_1_pop = Yone_street_1_Marker.bindPopup("Yone_street_1")
  .openPopup()
  .addTo(map);
var Yone_street_2_pop = Yone_street_2_Marker.bindPopup("Yone_street_2")
  .openPopup()
  .addTo(map);
var KanPat_street_pop = KanPat_street_Marker.bindPopup("KanPat_street")
  .openPopup()
  .addTo(map);
var Yone_Gyi_street_pop = Yone_Gyi_Marker.bindPopup("Yone_Gyi_street")
  .openPopup()
  .addTo(map);
var HninSi_Marker_street_pop = HninSi_Marker.bindPopup("HninSi_street")
  .openPopup()
  .addTo(map);
var Yone_street_pop = Yone_street_Marker.bindPopup("Yone_street_street")
  .openPopup()
  .addTo(map);
var Yone_Gyi_street_pop = Yone_Gyi_Marker.bindPopup("Yone_Gyi_street")
  .openPopup()
  .addTo(map);
var Pauk_Chaung_zay_pop = Pauk_Chaung_zay_Marker.bindPopup(
  "Pauk_Chaung_zay_street"
)
  .openPopup()
  .addTo(map);
var NanDawKone_street_pop = NanDawKone_street_Marker.bindPopup(
  "NanDawKone_street"
)
  .openPopup()
  .addTo(map);
var KhwarNyo_Marker_pop = KhwarNyo_Marker.bindPopup("KhwarNyo_street")
  .openPopup()
  .addTo(map);
var North_Kan_Pat_pop = North_Kan_Pat_Marker.bindPopup("North_Kan_Pat_street")
  .openPopup()
  .addTo(map);
var Tha_Pyay_pop = Tha_Pyay_Marker.bindPopup("Tha_Pyay_street")
  .openPopup()
  .addTo(map);
var Sabal_pop = Sabal_Marker.bindPopup("Sabal_street").openPopup().addTo(map);
var Thazi_pop = Thazi_Marker.bindPopup("Thazi_street").openPopup().addTo(map);
var Hkhatter_Lane_pop = Hkhatter_Lane_Marker.bindPopup("Hkhatter_Lane_street")
  .openPopup()
  .addTo(map);
var Shin_Saw_lu_pagado_pop = Shin_Saw_lu_pagado_Marker.bindPopup(
  "Shin_Saw_lu_pagado_street"
)
  .openPopup()
  .addTo(map);
var Padauk_pop = Padauk_Marker.bindPopup("Padauk_street")
  .openPopup()
  .addTo(map);
var U_yin_Chan_pop = U_yin_Chan_Marker.bindPopup("U_yin_Chan_street")
  .openPopup()
  .addTo(map);
var Thukha_Htila_pop = Thukha_Htila_Marker.bindPopup("Thukha_Htila_street")
  .openPopup()
  .addTo(map);
var Aung_Mingalar_pop = Aung_Mingalar_Marker.bindPopup("Aung_Mingalar_street")
  .openPopup()
  .addTo(map);
var Ahawyahtar_pop = Ahawyahtar_Marker.bindPopup("Ahawyahtar_street")
  .openPopup()
  .addTo(map);
var Kyan_Sitt_Thar_pop = Kyan_Sitt_Thar_Marker.bindPopup(
  "Kyan_Sitt_Thar_street"
)
  .openPopup()
  .addTo(map);
var Bandula_pop = Bandula_Marker.bindPopup("Bandula_street")
  .openPopup()
  .addTo(map);
var Tharyar_Kone_pop = Tharyar_Kone_Marker.bindPopup("Tharyar_Kone_street")
  .openPopup()
  .addTo(map);
var Mani_zawti_kayone_pop = Mani_zawti_kayone_Marker.bindPopup(
  "Mani_zawti_kayone_street"
)
  .openPopup()
  .addTo(map);
var Ywar_Thit_Gone_pop = Ywar_Thit_Gone_Marker.bindPopup(
  "Ywar_Thit_Gone_street"
)
  .openPopup()
  .addTo(map);
var Ma_Kyee_Gone_Kyaung_pop = Ma_Kyee_Gone_Kyaung_Marker.bindPopup(
  "Ma_Kyee_Gone_Kyaung_street"
)
  .openPopup()
  .addTo(map);
var Ma_Kyee_Gone_Tike_pop = Ma_Kyee_Gone_Tike_Marker.bindPopup(
  "Ma_Kyee_Gone_Tike_street"
)
  .openPopup()
  .addTo(map);
var Ma_Kyee_Gone_pop = Ma_Kyee_Gone_Marker.bindPopup("Ma_Kyee_Gone_street")
  .openPopup()
  .addTo(map);
var Maha_Kyaw_pop = Maha_Kyaw_Marker.bindPopup("Maha_Kyaw_street")
  .openPopup()
  .addTo(map);
var Ma_kyee_Gone_Bone_Kgi_kyaung_pop =
  Ma_kyee_Gone_Bone_Kgi_kyaung_Marker.bindPopup(
    "Ma_kyee_Gone_Bone_Kgi_kyaung_street"
  )
    .openPopup()
    .addTo(map);
var Ma_kyee_Gone_Bone_Kgi_kyaung_pop =
  Ma_kyee_Gone_Bone_Kgi_kyaung_Marker.bindPopup(
    "Ma_kyee_Gone_Bone_Kgi_kyaung_street"
  )
    .openPopup()
    .addTo(map);
var Chan_Aye_pop = Chan_Aye_Marker.bindPopup("Chan_Aye_street")
  .openPopup()
  .addTo(map);
var Kan_Pat_pop = Kan_Pat_Marker.bindPopup("Kan_Pat_street")
  .openPopup()
  .addTo(map);
var Paung_Chaung_Zay_pop = Paung_Chaung_Zay_Marker.bindPopup(
  "Paung_Chaung_Zay_street"
)
  .openPopup()
  .addTo(map);
var Baw_Lone_Kwin_pop = Baw_Lone_Kwin_Marker.bindPopup("Baw_Lone_Kwin_street")
  .openPopup()
  .addTo(map);

//thirimingalar data
let Myo_Shwe_Kyaung = [20.875, 95.86];
let Yadanar_Mhan_Aung_St = [20.878, 95.864];
let Thi_Kha_Waddy = [20.878, 95.866];
let Khaing_Marlar = [20.878, 95.865];
let Mahar_Bandula = [20.878, 95.864];
let Ta_Pin_Shwe_Htee = [20.879, 95.864];
let PhoYa_Zar = [20.879, 95.864];
let AirForce_Miliary_St = [20.88, 95.864];
let Khaing_Thazin = [20.879, 95.864];
let Baw_Ga_Bala_Lane = [20.879, 95.865];
let Baw_Ga_Bala_St = [20.879, 95.865];
let Khaing_Shwe_War = [20.879, 95.866];
let Khaing_Hnin_Si_St = [20.879, 95.864];
let Mya_Gone_Yaung = [20.88, 95.867];
let Mai_Taw_Gyi_Kyaung = [20.88, 95.867];
let Zaw_Ti_Ka_St = [20.879, 95.864];
let Butar_Haung_St = [20.881, 95.869];
let Nwadat = [20.884, 95.867];
let War_Tan = [20.883, 95.861];
let Nug_War = [20.883, 95.861];
let Zay_Pyat = [20.883, 95.862];
let Shwe_Wint_Mug = [20.883, 95.863];
let Cherry = [20.882, 95.864];
let Sein_Yadanar = [20.884, 95.866];
let Palae_Zay_St = [20.884, 95.866];
let Mya_Wutyi = [20.88, 95.865];
let Mya_Thida = [20.88, 95.865];
let Mya_Thazi = [20.88, 95.866];
let Yangon_Mandalay_Road = [20.876, 95.86];
//street markers
var Myo_Shwe_Kyaung_Marker = L.marker(Myo_Shwe_Kyaung, {
  icon: streetIcon,
});
var Yadanar_Mhan_Aung_St_Marker = L.marker(Yadanar_Mhan_Aung_St, {
  icon: streetIcon,
});
var Thi_Kha_Waddy_Marker = L.marker(Thi_Kha_Waddy, { icon: streetIcon });
var Khaing_Marlar_Marker = L.marker(Khaing_Marlar, { icon: streetIcon });
var Mahar_Bandula_Marker = L.marker(Mahar_Bandula, { icon: streetIcon });
var Ta_Pin_Shwe_Htee_Marker = L.marker(Ta_Pin_Shwe_Htee, {
  icon: streetIcon,
});
var PhoYa_Zar_Marker = L.marker(PhoYa_Zar, { icon: streetIcon });
var AirForce_Miliary_St_Marker = L.marker(AirForce_Miliary_St, {
  icon: streetIcon,
});
var Khaing_Thazin_Marker = L.marker(Khaing_Thazin, { icon: streetIcon });
var Baw_Ga_Bala_Lane_Marker = L.marker(Baw_Ga_Bala_Lane, {
  icon: streetIcon,
});
var Baw_Ga_Bala_St_Marker = L.marker(Baw_Ga_Bala_St, {
  icon: streetIcon,
});
var Khaing_Shwe_War_Marker = L.marker(Khaing_Shwe_War, {
  icon: streetIcon,
});
var Khaing_Hnin_Si_St_Marker = L.marker(Khaing_Hnin_Si_St, {
  icon: streetIcon,
});
var Mya_Gone_Yaung_Marker = L.marker(Mya_Gone_Yaung, {
  icon: streetIcon,
});
var Mai_Taw_Gyi_Kyaung_Marker = L.marker(Mai_Taw_Gyi_Kyaung, {
  icon: streetIcon,
});
var Zaw_Ti_Ka_St_Marker = L.marker(Zaw_Ti_Ka_St, { icon: streetIcon });
var Butar_Haung_St_Marker = L.marker(Butar_Haung_St, {
  icon: streetIcon,
});
var Nwadat_Marker = L.marker(Nwadat, { icon: streetIcon });
var War_Tan_Marker = L.marker(War_Tan, { icon: streetIcon });
var Nug_War_Marker = L.marker(Nug_War, { icon: streetIcon });
var Zay_Pyat_Marker = L.marker(Zay_Pyat, { icon: streetIcon });
var Shwe_Wint_Mug_Marker = L.marker(Shwe_Wint_Mug, { icon: streetIcon });
var Cherry_Marker = L.marker(Cherry, { icon: streetIcon });
var Sein_Yadanar_Marker = L.marker(Sein_Yadanar, { icon: streetIcon });
var Palae_Zay_St_Marker = L.marker(Palae_Zay_St, { icon: streetIcon });
var Mya_Wutyi_Marker = L.marker(Mya_Wutyi, { icon: streetIcon });
var Mya_Thida_Marker = L.marker(Mya_Thida, { icon: streetIcon });
var Mya_Thazi_Marker = L.marker(Mya_Thazi, { icon: streetIcon });
var Yangon_Mandalay_Road_Marker = L.marker(Yangon_Mandalay_Road, {
  icon: streetIcon,
});

//add to map
Myo_Shwe_Kyaung_Marker.addTo(map);
Yadanar_Mhan_Aung_St_Marker.addTo(map);
Thi_Kha_Waddy_Marker.addTo(map);
Khaing_Marlar_Marker.addTo(map);
Mahar_Bandula_Marker.addTo(map);
Ta_Pin_Shwe_Htee_Marker.addTo(map);
PhoYa_Zar_Marker.addTo(map);
AirForce_Miliary_St_Marker.addTo(map);
Khaing_Thazin_Marker.addTo(map);
Baw_Ga_Bala_Lane_Marker.addTo(map);
Baw_Ga_Bala_St_Marker.addTo(map);
Khaing_Shwe_War_Marker.addTo(map);
Khaing_Hnin_Si_St_Marker.addTo(map);
Mya_Gone_Yaung_Marker.addTo(map);
Mai_Taw_Gyi_Kyaung_Marker.addTo(map);
Zaw_Ti_Ka_St_Marker.addTo(map);
Butar_Haung_St_Marker.addTo(map);
Nwadat_Marker.addTo(map);
War_Tan_Marker.addTo(map);
Nug_War_Marker.addTo(map);
Zay_Pyat_Marker.addTo(map);
Shwe_Wint_Mug_Marker.addTo(map);
Cherry_Marker.addTo(map);
Sein_Yadanar_Marker.addTo(map);
Palae_Zay_St_Marker.addTo(map);
Mya_Wutyi_Marker.addTo(map);
Mya_Thida_Marker.addTo(map);
Mya_Thazi_Marker.addTo(map);
Yangon_Mandalay_Road_Marker.addTo(map);
//street labels
//
var Myo_Shwe_Kyaung_pop = Myo_Shwe_Kyaung_Marker.bindPopup(
  "Myo_Shwe_Kyaung_street"
)
  .openPopup()
  .addTo(map);
var Yadanar_Mhan_Aung_St_pop = Yadanar_Mhan_Aung_St_Marker.bindPopup(
  "Yadanar_Mhan_Aung_St_street"
)
  .openPopup()
  .addTo(map);
var Thi_Kha_Waddy_pop = Thi_Kha_Waddy_Marker.bindPopup("Thi_Kha_Waddy_street")
  .openPopup()
  .addTo(map);
var Khaing_Marlar_pop = Khaing_Marlar_Marker.bindPopup("Khaing_Marlar_street")
  .openPopup()
  .addTo(map);
var Mahar_Bandula_pop = Mahar_Bandula_Marker.bindPopup("Mahar_Bandula_street")
  .openPopup()
  .addTo(map);
var Ta_Pin_Shwe_Htee_pop = Ta_Pin_Shwe_Htee_Marker.bindPopup(
  "Ta_Pin_Shwe_Htee_street"
)
  .openPopup()
  .addTo(map);
var PhoYa_Zar_pop = PhoYa_Zar_Marker.bindPopup("PhoYa_Zar_street")
  .openPopup()
  .addTo(map);
var AirForce_Miliary_St_pop = AirForce_Miliary_St_Marker.bindPopup(
  "AirForce_Miliary_St_street"
)
  .openPopup()
  .addTo(map);
var Khaing_Thazin_pop = Khaing_Thazin_Marker.bindPopup("Khaing_Thazin_street")
  .openPopup()
  .addTo(map);
var Baw_Ga_Bala_Lane_pop = Baw_Ga_Bala_Lane_Marker.bindPopup(
  "Baw_Ga_Bala_Lane_street"
)
  .openPopup()
  .addTo(map);
var Baw_Ga_Bala_St_pop = Baw_Ga_Bala_St_Marker.bindPopup(
  "Baw_Ga_Bala_St_street"
)
  .openPopup()
  .addTo(map);
var Khaing_Shwe_War_pop = Khaing_Shwe_War_Marker.bindPopup(
  "Khaing_Shwe_War_street"
)
  .openPopup()
  .addTo(map);
var Khaing_Hnin_Si_St_pop = Khaing_Hnin_Si_St_Marker.bindPopup(
  "Khaing_Hnin_Si_St_street"
)
  .openPopup()
  .addTo(map);
var Mya_Gone_Yaung_pop = Mya_Gone_Yaung_Marker.bindPopup(
  "Mya_Gone_Yaung_street"
)
  .openPopup()
  .addTo(map);
var Mai_Taw_Gyi_Kyaung_pop = Mai_Taw_Gyi_Kyaung_Marker.bindPopup(
  "Mai_Taw_Gyi_Kyaung_street"
)
  .openPopup()
  .addTo(map);
var Zaw_Ti_Ka_St_pop = Zaw_Ti_Ka_St_Marker.bindPopup("Zaw_Ti_Ka_St_street")
  .openPopup()
  .addTo(map);
var Butar_Haung_St_pop = Butar_Haung_St_Marker.bindPopup(
  "Butar_Haung_St_street"
)
  .openPopup()
  .addTo(map);
var Nwadat_pop = Nwadat_Marker.bindPopup("Nwadat_street")
  .openPopup()
  .addTo(map);
var War_Tan_pop = War_Tan_Marker.bindPopup("War_Tan_street")
  .openPopup()
  .addTo(map);
var Nug_War_pop = Nug_War_Marker.bindPopup("Nug_War_street")
  .openPopup()
  .addTo(map);
var Zay_Pyat_pop = Zay_Pyat_Marker.bindPopup("Zay_Pyat_street")
  .openPopup()
  .addTo(map);
var Shwe_Wint_Mug_pop = Shwe_Wint_Mug_Marker.bindPopup("Shwe_Wint_Mug_street")
  .openPopup()
  .addTo(map);
var Cherry_pop = Cherry_Marker.bindPopup("Cherry_street")
  .openPopup()
  .addTo(map);
var Sein_Yadanar_pop = Sein_Yadanar_Marker.bindPopup("Sein_Yadanar_street")
  .openPopup()
  .addTo(map);
var Palae_Zay_St_Marker_pop = Palae_Zay_St_Marker.bindPopup(
  "Palae_Zay_St_street"
)
  .openPopup()
  .addTo(map);
var Mya_Wutyi_pop = Mya_Wutyi_Marker.bindPopup("Mya_Wutyi_street")
  .openPopup()
  .addTo(map);
var Mya_Thida_pop = Mya_Thida_Marker.bindPopup("Mya_Thida_street")
  .openPopup()
  .addTo(map);
var Mya_Thazi_pop = Mya_Thazi_Marker.bindPopup("Mya_Thazi_street")
  .openPopup()
  .addTo(map);
var Yangon_Mandalay_Road_pop = Yangon_Mandalay_Road_Marker.bindPopup(
  "Yangon_Mandalay_Road_street"
)
  .openPopup()
  .addTo(map);
