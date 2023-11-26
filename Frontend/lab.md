# ORGINAL RECORD

# 1 HTML basics

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>CSS Template</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
      }

      header {
        background-color: #666;
        padding: 30px;
        text-align: center;
        font-size: 35px;
        color: white;
      }

      nav {
        float: left;
        width: 30%;
        height: 300px;
        background: #ccc;
        padding: 20px;
      }

      nav ul {
        list-style-type: none;
        padding: 0;
      }

      article {
        float: left;
        padding: 20px;
        width: 70%;
        background-color: #f1f1f1;
        height: 300px;
        /* only for demonstration, should be removed */
      }

      section::after {
        content: "";
        display: table;
        clear: both;
      }

      @media (max-width: 600px) {
        nav,
        article {
          width: 100%;
          height: auto;
        }
      }
    </style>
  </head>

  <body>
    <header>
      <h2>Cities</h2>
    </header>
    <section>
      <nav>
        <ul>
          <li><a href="#London">London</a></li>
          <li><a href="#Paris">Paris</a></li>
          <li><a href="#Tokyo">Tokyo</a></li>
        </ul>
      </nav>
      <article>
        <h1 id="London">London</h1>
        <p>
          London is the capital city of England. It is the most populous city in
          the United Kingdom, with a metropolitan area of over 13 million
          inhabitants.
        </p>
        <p>
          Standing on the River Thames, London has been a major settlement for
          two millennia, its history going back to its founding by the Romans,
          who named it Londinium.
        </p>
      </article>
    </section>
  </body>
</html>
```

# 2 Rsponsive Design

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Responsive Webpage</title>
    <link rel="stylesheet" href="p2.css" />
  </head>

  <body>
    <div class="header">
      <h1>CHENNAI</h1>
    </div>
    <div class="row">
      <div class="col-3 menu">
        <ul>
          <li>The Flight</li>
          <li>The City</li>
          <li>The Island</li>
          <li>The Food</li>
        </ul>
      </div>
      <div class="col-6">
        <h1>The City</h1>
        <p>
          Chennai, on the Bay of Bengal in eastern India, is the capital of the
          state of Tamil Nadu. The city is home to Fort St. George, built in
          1644 and now a museum showcasing the city’s roots as a British
          military garrison and East India Company trading outpost, when it was
          called Madras.
        </p>
      </div>
      <div class="col-3 right">
        <div class="aside">
          <h2>What?</h2>
          <p>Chennai is a city in Tamil Nadu.</p>
          <h2>Where?</h2>
          <p>Chennai is the capital of the state of Tamil Nadu.</p>
          <h2>How?</h2>
          <p>You can reach Chennai airport from all over world.</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>
        Resize the browser window to see how the content respond to the
        resizing.
      </p>
    </div>
  </body>
</html>
```

```css
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: block;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

.header {
  background-color: #05b3b0;
  color: #ffffff;
  padding: 15px;
  text-align: center;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.footer {
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

/* For desktop: */
.col-1 {
  width: 8.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
```

# 3 JAVASCRIPT FUNDAMENTAL

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Interactive JavaScript Page</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 50px;
      }
    </style>
  </head>

  <body>
    <h1>Interactive JavaScript Page</h1>

    <p id="output">Click the button to see the magic!</p>

    <button onclick="changeText()">Click me</button>

    <script>
      let mode = 0;
      function changeText() {
        var outputElement = document.getElementById("output");
        if (mode) {
          outputElement.innerHTML = "I love <3 frontend";
          document.body.style.backgroundColor = "blue";
          mode = 0;
        } else {
          outputElement.innerHTML = "You clicked the button! 🚀";
          document.body.style.backgroundColor = "red";
          mode = 1;
        }
      }
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="p3.css" />
    <title>Theme Clock</title>
  </head>

  <body>
    <button class="toggle">Dark mode</button>
    <div class="clock-container">
      <div class="clock">
        <div class="needle hour"></div>
        <div class="needle minute"></div>
        <div class="needle second"></div>
        <div class="center-point"></div>
      </div>
      <div class="time"></div>
      <div class="date"></div>
    </div>
    <script src="p3.js"></script>
  </body>
</html>
```

```css
@import url("https://fonts.googleapis.com/css?family=Heebo:300&display=swap");
* {
  box-sizing: border-box;
}
:root {
  --primary-color: #000;
  --secondary-color: #fff;
}
html {
  transition: all 0.5s ease-in;
}
html.dark {
  --primary-color: #fff;
  --secondary-color: #333;
}
html.dark {
  background-color: #111;
  color: var(--primary-color);
}
body {
  font-family: "Heebo", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
.toggle {
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  top: 100px;
}
.toggle:focus {
  outline: none;
}
.clock-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.clock {
  position: relative;
  width: 200px;
  height: 200px;
}
.needle {
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}
.needle.hour {
  transform: translate(-50%, -100%) rotate(0deg);
}
.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
}
.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}
.center-point {
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.center-point::after {
  content: "";
  background-color: var(--primary-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.time {
  font-size: 60px;
}
.date {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.date .circle {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  transition: all 0.5s ease-in;
  font-size: 12px;
}
```

```js
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();
setInterval(setTime, 1000);
```

# 4 DOM MANIPULATION

```html
<!DOCTYPE html>
<html lang="en">
  <style>
    body {
      background-color: lightblue;
    }

    h1 {
      text-align: center;
    }
  </style>

  <head>
    <meta charset="UTF-8" />
    <title>DOM Manipulation Example</title>
    <script src="script.js" defer></script>
  </head>

  <body>
    <h1 id="mainHeading">Welcome to DOM Manipulation</h1>
    <center>
      <p>This is a paragraph. Click the button to change the text.</p>
    </center>
    <center><button id="changeTextButton">Change Text</button></center>
    <script>
      function changeText() {
        const mainHeading = document.getElementById("mainHeading");
        const paragraph = document.querySelector("p");
        mainHeading.textContent = "New Heading Text";
        paragraph.textContent = "New content for the paragraph.";
      }
      const changeTextButton = document.getElementById("changeTextButton");
      changeTextButton.addEventListener("click", changeText);
    </script>
  </body>
</html>
```

# 5 FORM VALIDATION

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Form Validation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 50px;
      }

      .error {
        color: red;
      }
    </style>
  </head>

  <body>
    <h1>Simple Form Validation</h1>

    <form id="myForm" onsubmit="return validateForm()">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />
      <span id="nameError" class="error"></span><br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
      <span id="emailError" class="error"></span><br />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <span id="passwordError" class="error"></span><br />

      <input type="submit" value="Submit" />
    </form>

    <script>
      function validateForm() {
        // Get form inputs
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Reset error messages
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";

        // Validate name
        if (name === "") {
          document.getElementById("nameError").innerHTML = "Name is required.";
          return false;
        }

        // Validate email
        if (email === "") {
          document.getElementById("emailError").innerHTML =
            "Email is required.";
          return false;
        }

        // Validate password
        if (password === "") {
          document.getElementById("passwordError").innerHTML =
            "Password is required.";
          return false;
        }

        // Additional validation logic can be added here

        // If all validations pass, the form is considered valid
        alert("Form submitted successfully!");
        return true;
      }
    </script>
  </body>
</html>
```

# 6 AJAX AND API INTEGRATION

```html
<!DOCTYPE html>
<html lang="en">
  <style>
    body {
      background-color: lightblue;
    }
  </style>

  <head>
    <meta charset="UTF-8" />
    <title>Weather Information</title>
    <script src="script.js" defer></script>
  </head>

  <body>
    <h1>Current Weather Information</h1>

    <div id="weatherInfo">
      <p>Loading...</p>
    </div>
    <script>
      const apiKey = "bd5e378503939ddaee76f12ad7a97608";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=pallavaram&appid=${apiKey}&units=metric`;
      const weatherInfo = document.getElementById("weatherInfo");
      function getWeather() {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const { main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;
            weatherInfo.innerHTML = `<p>Temperature: ${temperature} &deg;C</p><p>Description: ${description}</p>`;
          })
          .catch((error) => {
            weatherInfo.textContent = "Failed to fetch weather data";
            console.error("Error:", error);
          });
      }
      getWeather();
    </script>
  </body>
</html>
```

# 7 ANGULAR JS BASICS

```html
<!DOCTYPE html>
<html ng-app="myApp">
  <head>
    <meta charset="UTF-8" />
    <title>AngularJS Controllers and Templates</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="app.js"></script>
    <style>
      body {
        background-color: rgb(117, 213, 109);
      }
    </style>
  </head>

  <body>
    <div ng-controller="MyController">
      <h1>{{ title }}</h1>
      <h2>{{ titlee }}</h2>
      <ul>
        <li ng-repeat="item in items">{{ item.name }} - {{ item.price }}</li>
      </ul>
    </div>
  </body>
</html>
```

```js
var app = angular.module('myApp', []);
app.controller('MyController', function ($scope) {
    $scope.title = 'MOBILE STORE';
    $scope.titlee = 'Products:Apple Iphone';
    $scope.items = [
        { name: 'Apple Iphone 15 pro max', price: 159900 },
        { name: 'Apple Iphone 15 pro', price: 134900 },
        { name: 'Apple Iphone 14 pro max', price: 127999 },
        { name: 'Apple Iphone 14 pro', price: 119990 }
    ];
});
```

# EXTRA RECORD

