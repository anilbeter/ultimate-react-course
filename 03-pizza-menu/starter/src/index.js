import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Spinaci Pizza" />
      <h2>{pizzaData[0].name}</h2>
      <p>{pizzaData[0].ingredients}</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour)
  //   console.log("We're currently open!");
  // else console.log("Sorry we're closed");

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
