import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            // key={pizza.name}
            // name={pizza.name}
            // ingredients={pizza.ingredients}
            // price={pizza.price}
            // photoName={pizza.photoName}
            // soldOut={pizza.soldOut}
            pizza={pizza}
            key={pizza.name}
          />
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarello"
        photoName="pizzas/spinaci.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <div className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <li>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </li>
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
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open!
    </footer>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
