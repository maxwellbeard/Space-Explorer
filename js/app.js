const sunPic = document.getElementById("sunPic");
const sunInfo = document.getElementById("sunInfo");
const mercPic = document.getElementById("mercPic");
const mercInfo = document.getElementById("mercInfo");
const vencPic = document.getElementById("venPic");
const venInfo = document.getElementById("venInfo");
const earthPic = document.getElementById("earthPic");
const earthInfo = document.getElementById("earthInfo");
const marsPic = document.getElementById("marsPic");
const marsInfo = document.getElementById("marsInfo");
const jupPic = document.getElementById("jupPic");
const jupInfo = document.getElementById("jupInfo");
const satPic = document.getElementById("satPic");
const satInfo = document.getElementById("satInfo");
const uranusPic = document.getElementById("uranusPic");
const uranusInfo = document.getElementById("uranusInfo");
const neptPic = document.getElementById("neptPic");
const neptInfo = document.getElementById("neptInfo");

async function getData(id) {
  const urlBase = "https://api.le-systeme-solaire.net/rest/bodies/";
  const dataParam =
    "?data=englishName,moons,mass,massValue,massExponent,vol,volValue,volExponent,density,gravity,escape,meanRadius,sideralOrbit,sideralRotation";

  var response = await fetch(urlBase + id + dataParam);
  var data = await response.json();

  return data;
}

const displayInfo = (data) => `
    <h3>${data.englishName}</h3>
    <p>Mass: ${data.mass.massValue} x 10^${data.mass.massExponent} kg<br />
      Volume: ${data.vol.volValue} x 10^${data.vol.volExponent} kg<br />
      Density: ${data.density} g/cm^3<br />
      Gravity: ${data.gravity} m/s^2<br />
      Escape Velocity: ${data.escape} m/s<br />
      Mean Radius: ${data.meanRadius} km<br />
      Number of Moons: ${data.moons == null ? 0 : data.moons.length}<br />
      Days in Year: ${data.sideralOrbit} Earth days<br />
      Rotation around Axis: ${data.sideralRotation} hours
    </p> 
`;

// Sun
getData("soleil").then((data) => {
  const html = displayInfo(data);
  sunPic.innerHTML = '<img src="img/sun.jpg">';
  sunInfo.innerHTML = html;
});

// Mercury
getData("mercure").then((data) => {
  const html = displayInfo(data);
  mercPic.innerHTML = '<img src="img/mercury.jpg">';
  mercInfo.innerHTML = html;
});

// Venus
getData("venus").then((data) => {
  const html = displayInfo(data);
  venPic.innerHTML = '<img src="img/venus.png">';
  venInfo.innerHTML = html;
});

// Earth
getData("terre").then((data) => {
  const html = displayInfo(data);
  earthPic.innerHTML = '<img src="img/earth.jpg">';
  earthInfo.innerHTML = html;
});

// Mars
getData("mars").then((data) => {
  const html = displayInfo(data);
  marsPic.innerHTML = '<img src="img/mars.jpg">';
  marsInfo.innerHTML = html;
});

// Jupiter
getData("jupiter").then((data) => {
  const html = displayInfo(data);
  jupPic.innerHTML = '<img src="img/jupiter.jpg">';
  jupInfo.innerHTML = html;
});

// Saturn
getData("saturne").then((data) => {
  const html = displayInfo(data);
  satPic.innerHTML = '<img src="img/saturn.png">';
  satInfo.innerHTML = html;
});

// Uranus
getData("uranus").then((data) => {
  const html = displayInfo(data);
  uranusPic.innerHTML = '<img src="img/uranus.png">';
  uranusInfo.innerHTML = html;
});

// Neptune
getData("neptune").then((data) => {
  const html = displayInfo(data);
  neptPic.innerHTML = '<img src="img/neptune.png">';
  neptInfo.innerHTML = html;
});
