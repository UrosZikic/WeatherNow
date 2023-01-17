var container = document.querySelector(".container");

const caller = (cityName) => {
  container.innerHTML = "";

  // /////////////////// //
  const call = new XMLHttpRequest();
  call.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b22f72ecf7abd4425283981f81d378cb`
  );

  call.send();

  call.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);

    ////////////////////////

    const html = `
<div class="container" id="container">
<strong>Weather in ${data.name}</strong>
<p>${data.main.temp.toFixed(0)} &#8451;</p>

<div>
  <p>${data.weather[0].main}</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Wind speed: ${data.wind.speed} km/h</p>
</div>
</div>
`;
    container.insertAdjacentHTML("beforeend", html);
  });
};

var submit = (document.querySelector(".submit").onclick = (e) => {
  var browseWeather = document.querySelector(".browse").value;

  caller(browseWeather);
});
