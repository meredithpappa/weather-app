import React from "react";
import Weather from "Weather";
import "App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{"Meredith Pappa"}
          <a
            href="https://github.com/meredithpappa/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meredith Pappa
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/meredithpappa/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="hhttps://weather-app-meredith-pappa-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
