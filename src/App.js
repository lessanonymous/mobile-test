import React from "react";
import "./App.css";

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function App() {
  return (
    <div className="App">
      <header>
        <h2>Header</h2>
      </header>
      <main>
        <h2>Main</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis
          incidunt mollitia ex. Sed voluptatem quidem harum blanditiis pariatur
          odit illum dolore repudiandae, corrupti quis provident veniam neque
          asperiores sunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis
          incidunt mollitia ex. Sed voluptatem quidem harum blanditiis pariatur
          odit illum dolore repudiandae, corrupti quis provident veniam neque
          asperiores sunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis
          incidunt mollitia ex. Sed voluptatem quidem harum blanditiis pariatur
          odit illum dolore repudiandae, corrupti quis provident veniam neque
          asperiores sunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis
          incidunt mollitia ex. Sed voluptatem quidem harum blanditiis pariatur
          odit illum dolore repudiandae, corrupti quis provident veniam neque
          asperiores sunt?
        </p>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
