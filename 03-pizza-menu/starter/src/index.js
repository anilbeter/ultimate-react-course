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
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
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
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

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
  // if (pizza.soldOut)
  //   return (
  //     <div className="pizza sold-out">
  //       <img src={pizza.photoName} alt={pizza.name} />
  //       <li>
  //         <h3>{pizza.name}</h3>
  //         <p>{pizza.ingredients}</p>
  //         <span>{pizza.price}</span>
  //       </li>
  //     </div>
  //   );

  return (
    <div className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
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
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour)
  //   console.log("We're currently open!");
  // else console.log("Sorry we're closed");

  if (!isOpen)
    return (
      <footer className="footer">
        <p>We're closed! This is coming from multiple return!</p>
      </footer>
    );

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're currently closed. Please come between {openHour}:00 and{" "}
          {closeHour}:00.
        </p>
      )}
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
