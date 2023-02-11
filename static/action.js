//map တွင် centre view ထားချင်သည့် နေရာ၏ lat,lon ထည့်ပေးထားခြင်းဖြစ်သည်။
var map = L.map("map").setView([20.876, 95.843], 13);

//map ကို google map view ဖြင့် ဖော်ပြထားခြင်းဖြစ်သည်၊။
googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
).addTo(map);

///quater
//map တွင် quater icon ဖော်သည့်နေရာဖြစ်သည်။
var quatersIcon = new L.Icon({
  iconUrl: "static/img/marker-icon-2x-violet.png",
  //icon ပုံပြောင်းလိုလျှင် static folder အောက်မှ img file ထဲမှ png တစ်ခုခုကို ယူ၍ ပေးနိုင်သည်။
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

var burningIcon = new L.Icon({
  iconUrl: "static/img/marker-icon-2x-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

var firestationIcon = new L.Icon({
  iconUrl: "static/img/marker-icon-2x-gold.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

let firestationMarker = [];
let routeMarker = [];
let firestationToQuater = [];

let quaterMarker = [];
let count = [];
let routingList = [];

//မြေပုံထဲတွင် quater များကိုပေါ်နေစေရန်ထည့်ထားခြင်းဖြစ်သည်။ 
Quaters.forEach((quater, i) => {
  let Marker = L.marker(quater[Object.keys(quater)], {
    icon: quatersIcon,
  });
  quaterMarker.push(Marker);
  map.addLayer(quaterMarker[i]);
});

///remove firestation marker from map
function removeFirestationMarker() {
  for (i = 0; i < firestationMarker.length; i++) {
    map.removeLayer(firestationMarker[i]);
  }
  firestationMarker = [];
}
///remove quater marker form map
function removeQuaterMarker() {
  for (i = 0; i < quaterMarker.length; i++) {
    map.removeLayer(quaterMarker[i]);
  }
  quaterMarker = [];
}

function removeRouting() {
  for (i = 0; i < routingList.length; i++) {
    map.removeControl(routingList[i]);
  }
  routingList = [];
}

//ui တွင် select ရွေးလိုက်သည့် quater ကို map ထဲတွင် marker အနီဖြင့်ပြထားပြီး အနီးဆုံး firestation 3 ခုကို ပြရန်ဖြစ်သည်။ 
document.querySelector("#quater").addEventListener("change", function () {
  removeFirestationMarker();
  removeQuaterMarker();
  removeRouting();
  let quater = $("#quater").val();

  Quaters.forEach((q) => {
    if (Object.keys(q) == quater) {
      let Marker = L.marker(q[Object.keys(q)], {
        icon: quatersIcon,
      });
      quaterMarker.push(Marker);
      map.addLayer(Marker);
    } else {
      // L.marker(q[Object.keys(q)], { icon: quatersIcon }).addTo(map);
    }
  });
  Firestations[quater].forEach((firestation) => {
    let Marker = L.marker(firestation[Object.keys(firestation)], {
      icon: firestationIcon,
    });
    firestationMarker.push(Marker);
    map.addLayer(Marker);
  });
  
  //အနီးဆုံး firestation 3 ခု ကို ui တွင် ပေါ်လာနိုင်ရန်ဖြစ်သည်။
  $(document).ready(function () {
    $.get("/calculate", { quater }, function (data) {
      firestationToQuater = data;
      $("#comparing").html("");
      count = [];
      let template = `
      <table class="table">
        <tbody>
          <tr>
            <td>
              <button onclick="one()" class="btn btn-sm btn-outline-secondary">
                ${data[0][0]}
              </button>
            </td>
            <td>
              <button onclick='two()'  class="btn btn-sm btn-outline-secondary">
                ${data[1][0]}
              </button>
            </td>
            <td>
              <button onclick='three()' class="btn btn-sm btn-outline-secondary">
                ${data[2][0]}
              </button>
            </td>
          </tr>
          <tr>
            <td id='firstNode'></td>
            <td id='secondNode'></td>
            <td id='thirdNode'></td>
          </tr>
          <tr>
            <td id='firstDistance'></td>
            <td id='secondDistance'></td>
            <td id='thirdDistance'></td>
          </tr>
          <tr>
            <td id='firstTime'></td>
            <td id='secondTime'></td>
            <td id='thirdTime'></td>
          </tr>
          <tr>
            <td id='firstDrive'></td>
            <td id='secondDrive'></td>
            <td id='thirdDrive'></td>
          </tr>
        </tbody>
      </table>`;
      $("#3fire").html(template);
      $("#detailCard").html("");
    });
  });
});
//funtion one,two,three တို့သည် 
//firestaion တစ်ခုချင်းစီ၏ nodes အရေအတွက် distance,algorithm time and route time တို့ ကို ui တွင်ပေါ်လာစေရန်ရေးထားခြင်းဖြစ်သည်။
function one() {
  count[0] = firestationToQuater[0];
  console.log(count);
  if (count.length == 3 && count[1]) {
    shortestRoute();
  }
  $("#firstNode").html(`${firestationToQuater[0].length - 3} nodes`);
  $("#firstDistance").html(
    `${firestationToQuater[0][firestationToQuater[0].length - 3]} miles`
  );
  $("#firstTime").html(
    firestationToQuater[0][firestationToQuater[0].length - 2]
  );
  $("#firstDrive").html(
    `${firestationToQuater[0][firestationToQuater[0].length - 1]} min`
  );
  let noderoude = "";
  let list = firestationToQuater[0].slice(0, -3);

  list.forEach((val) => {
    noderoude = noderoude + `${val} > `;
  });
  $("#detailCard").html(`
        <div class="card">
            <div class="card-body">
              <h6 class="card-title">${list[0]} to ${list[list.length - 1]}</h6>
              <p class="card-text">
               ${noderoude.slice(0, -2)}
              </p>
            </div>
        </div>
  `);

  list.forEach((val, i) => {
    if (i != 0) {
      routing = L.Routing.control({
        waypoints: [L.latLng(routes[list[i - 1]]), L.latLng(routes[val])],
        routeWhileDragging: false,
        fitSelectedRoutes: false,
        draggableWaypoints: false,
        lineOptions: { styles: [{ color: "#AB84CB", weight: 5 }] },
      }).addTo(map);
      var routingControlContainer = routing.getContainer();
      var controlContainerParent = routingControlContainer.parentNode;
      controlContainerParent.removeChild(routingControlContainer);
      routingList.push(routing);
    }
  });
  let Marker = L.marker(routes[list[list.length - 1]], {
    icon: quatersIcon,
  });
  quaterMarker.push(Marker);
  map.addLayer(Marker);
  let Marker1 = L.marker(routes[list[0]], {
    icon: firestationIcon,
  });
  quaterMarker.push(Marker1);
  map.addLayer(Marker1);
}

function two() {
  count[1] = firestationToQuater[1];
  console.log(count);
  if (count.length == 3 && count[0]) {
    shortestRoute();
  }
  $("#secondNode").html(`${firestationToQuater[1].length - 3} nodes`);
  $("#secondDistance").html(
    `${firestationToQuater[1][firestationToQuater[1].length - 3]} miles`
  );
  $("#secondTime").html(
    firestationToQuater[1][firestationToQuater[1].length - 2]
  );
  $("#secondDrive").html(
    `${firestationToQuater[1][firestationToQuater[1].length - 1]} min`
  );

  let noderoude = "";
  let list = firestationToQuater[1].slice(0, -3);

  list.forEach((val) => {
    noderoude = noderoude + `${val} > `;
  });
  $("#detailCard").html(`
        <div class="card">
            <div class="card-body">
              <h6 class="card-title">${list[0]} to ${list[list.length - 1]}</h6>
              <p class="card-text">
               ${noderoude.slice(0, -2)}
              </p>
            </div>
        </div>
  `);

  list.forEach((val, i) => {
    if (i != 0) {
      routing = L.Routing.control({
        waypoints: [L.latLng(routes[list[i - 1]]), L.latLng(routes[val])],
        routeWhileDragging: false,
        fitSelectedRoutes: false,
        draggableWaypoints: false,
        lineOptions: { styles: [{ color: "#1ff277", weight: 5 }] },
      }).addTo(map);
      var routingControlContainer = routing.getContainer();
      var controlContainerParent = routingControlContainer.parentNode;
      controlContainerParent.removeChild(routingControlContainer);
      routingList.push(routing);
    }
  });
  let Marker = L.marker(routes[list[list.length - 1]], {
    icon: quatersIcon,
  });
  quaterMarker.push(Marker);
  map.addLayer(Marker);
  let Marker1 = L.marker(routes[list[0]], {
    icon: firestationIcon,
  });
  quaterMarker.push(Marker1);
  map.addLayer(Marker1);
}

function three() {
  count[2] = firestationToQuater[2];
  console.log(count);
  if (count.length == 3 && count[0] && count[1]) {
    shortestRoute();
  }

  $("#thirdNode").html(`${firestationToQuater[2].length - 3} nodes`);
  $("#thirdDistance").html(
    `${firestationToQuater[2][firestationToQuater[2].length - 3]} miles`
  );
  $("#thirdTime").html(
    firestationToQuater[2][firestationToQuater[2].length - 2]
  );
  $("#thirdDrive").html(
    `${firestationToQuater[2][firestationToQuater[2].length - 1]} min`
  );

  let noderoude = "";
  let list = firestationToQuater[2].slice(0, -3);
  
  
  list.forEach((val) => {
    noderoude = noderoude + `${val} > `;
  });
  $("#detailCard").html(`
        <div class="card">
            <div class="card-body">
              <h6 class="card-title">${list[0]} to ${list[list.length - 1]}</h6>
              <p class="card-text">
               ${noderoude.slice(0, -2)}
              </p>
            </div>
        </div>
  `);

  list.forEach((val, i) => {
    if (i != 0) {
      routing = L.Routing.control({
        waypoints: [L.latLng(routes[list[i - 1]]), L.latLng(routes[val])],
        routeWhileDragging: false,
        fitSelectedRoutes: false,
        draggableWaypoints: false,
        lineOptions: { styles: [{ color: "#eb0748", weight: 5 }] },
      }).addTo(map);
      var routingControlContainer = routing.getContainer();
      var controlContainerParent = routingControlContainer.parentNode;
      controlContainerParent.removeChild(routingControlContainer);
      routingList.push(routing);
    }
  });
  let Marker = L.marker(routes[list[list.length - 1]], {
    icon: quatersIcon,
  });
  quaterMarker.push(Marker);
  map.addLayer(Marker);
  let Marker1 = L.marker(routes[list[0]], {
    icon: firestationIcon,
  });
  quaterMarker.push(Marker1);
  map.addLayer(Marker1);
}

//အနီးဆုံး firestation ကို နီးရာမှဝေးရာသို့ distance ပေါ်မူတည်၍ sorting စီကာ ပြရန်ရေးထားခြင်းဖြစ်သည်။
function shortestRoute() {
  let quater = firestationToQuater[0][firestationToQuater[0].length - 4];
  $(document).ready(function () {
    $.get("/sorting", { quater }, function (data) {
      $("#comparing").html(
        `<div class="alert alert-success" role="alert">
        The nearest Firestation is ${data[0][0]}<br><br>
        ${data[0][0]} < ${data[1][0]} < ${data[2][0]}
        </div>`
      );
    });
  });
}
