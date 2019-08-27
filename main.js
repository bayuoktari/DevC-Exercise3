// var planetss = [
//   {
//     name: "Alderaan",
//     rotation_period: "24",
//     orbital_period: "364",
//     diameter: "12500",
//     climate: "temperate",
//     gravity: "1 standard",
//     terrain: "grasslands, mountains",
//     surface_water: "40",
//     population: "2000000000"
//   },
//   {
//     name: "Yavin IV",
//     rotation_period: "24",
//     orbital_period: "4818",
//     diameter: "10200",
//     climate: "temperate, tropical",
//     gravity: "1 standard",
//     terrain: "jungle, rainforests",
//     surface_water: "8",
//     population: "1000"
//   },
//   {
//     name: "Hoth",
//     rotation_period: "23",
//     orbital_period: "549",
//     diameter: "7200",
//     climate: "frozen",
//     gravity: "1.1 standard",
//     terrain: "tundra, ice caves, mountain ranges",
//     surface_water: "100",
//     population: "unknown"
//   },
//   {
//     name: "Dagobah",
//     rotation_period: "23",
//     orbital_period: "341",
//     diameter: "8900",
//     climate: "murky",
//     gravity: "N/A",
//     terrain: "swamp, jungles",
//     surface_water: "8",
//     population: "unknown"
//   },
//   {
//     name: "Bespin",
//     rotation_period: "12",
//     orbital_period: "5110",
//     diameter: "118000",
//     climate: "temperate",
//     gravity: "1.5 (surface), 1 standard (Cloud City)",
//     terrain: "gas giant",
//     surface_water: "0",
//     population: "6000000"
//   },
//   {
//     name: "Endor",
//     rotation_period: "18",
//     orbital_period: "402",
//     diameter: "4900",
//     climate: "temperate",
//     gravity: "0.85 standard",
//     terrain: "forests, mountains, lakes",
//     surface_water: "8",
//     population: "30000000"
//   },
//   {
//     name: "Naboo",
//     rotation_period: "26",
//     orbital_period: "312",
//     diameter: "12120",
//     climate: "temperate",
//     gravity: "1 standard",
//     terrain: "grassy hills, swamps, forests, mountains",
//     surface_water: "12",
//     population: "4500000000"
//   },
//   {
//     name: "Coruscant",
//     rotation_period: "24",
//     orbital_period: "368",
//     diameter: "12240",
//     climate: "temperate",
//     gravity: "1 standard",
//     terrain: "cityscape, mountains",
//     surface_water: "unknown",
//     population: "1000000000000"
//   },
//   {
//     name: "Kamino",
//     rotation_period: "27",
//     orbital_period: "463",
//     diameter: "19720",
//     climate: "temperate",
//     gravity: "1 standard",
//     terrain: "ocean",
//     surface_water: "100",
//     population: "1000000000"
//   },
//   {
//     name: "Geonosis",
//     rotation_period: "30",
//     orbital_period: "256",
//     diameter: "11370",
//     climate: "temperate, arid",
//     gravity: "0.9 standard",
//     terrain: "rock, desert, mountain, barren",
//     surface_water: "5",
//     population: "100000000000"
//   }
// ];

var planets = [];

fetch("https://swapi.co/api/planets/")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    planet = json.results;
    showData(planet);
  })

function search() {
  var q = document.getElementById("searchplanet").value;
  data = planets.filter(function (planet) {
    return planet.name.toLowerCase().includes(q) ||
      planet.rotation_period.includes(q) ||
      planet.orbital_period.includes(q) ||
      planet.climate.includes(q) ||
      planet.diameter.includes(q) ||
      planet.gravity.includes(q) ||
      planet.terrain.includes(q) ||
      planet.surfaces_water.includes(q) ||
      planet.population.includes(q)
  });
  showData(data);
}

function showData(planets) {
  var tr, td;
  var tbody = document.getElementById("data-planet");
  tbody.innerHTML = '';

  for (var i = 0; i < planets.length; i++) {
    tr = tbody.insertRow(tbody.rows.length);
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = i + 1;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].name;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].rotation_period;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].orbital_period;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].diameter;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].climate;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].gravity;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].terrain;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].surfaces_water;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = planets[i].population;
  }
}
