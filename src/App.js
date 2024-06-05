import React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import ShopCard from "./components/shop-card/ShopCard";

function App() {
  const shopList = [
    {
      id: 1,
      name: "Яблуко",
      description: "10 грн",
      img: require("./imgs/13.jpg"),
    },
    {
      id: 2,
      name: "Слива",
      description: "15 грн",
      img: require("./imgs/12.jpg"),
    },
    {
      id: 3,
      name: "Апельсин",
      description: "20 грн",
      img: require("./imgs/11.jpg"),
    },
  ];

  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>

      <main>
        <section className="container">
          <div className="row">
            {shopList.map((good) => (
              <div key={good.id} className="col-12 col-lg-3">
                <ShopCard card={good} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;
