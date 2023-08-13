function getTimesOne(cityName) {
  let params = {
    country: "SY",
    city: cityName,
  };
  axios
    .get("http://api.aladhan.com/v1/timingsByCity", {
      params: params,
    })
    .then((res) => {
      let times = Object.entries(res.data.data.timings).slice(0, 7); //Array
      document.querySelector(".cards").innerHTML = "";
      times.map((item) => {
        document.querySelector(".cards").innerHTML += `
            <div class="card">
            <h4>${item[0]}</h4>
            <span>${item[1]}</span>
            </div>
          `;
      });
    });
}
//options cities
for (city of cities) {
  document.getElementById("select").innerHTML += `
 <option>${city.ar}</option>`;
}
// event
document.getElementById("select").addEventListener("change", () => {
  let cityName = "";
  for (city of cities) {
    if (document.getElementById("select").value == city.ar) {
      cityName = city.en;
      document.getElementById("title").innerHTML = cityName;
      getTimesOne(cityName);
    }
  }
});

//default value
document.getElementById("title").innerHTML = "Dimashq";
getTimesOne("Dimashq");

// date info
let dateNow = new Date();
let date = dateNow.getDate();
let month = dateNow.getMonth();
let year = dateNow.getFullYear();
document.getElementById("date").innerHTML = `${date}-${month + 1}-${year} `;
