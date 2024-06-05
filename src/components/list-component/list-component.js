import React from "react";
import ShopCard from "../shop-card/ShopCard";


  return (
    <section className="app">
      <header className="app-header"></header>
      <main>
        <section className="container">
          <div className="row">
            {shopList.map((good) => {
              return (
                <div className="col-12 col-lg-3 " key={good.id}>
                  <ShopCard card={good} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </section>
  );


export default ListComponent;
