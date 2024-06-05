import "./App.css";
import Menu from "./components/menu/Menu";
import ShopCard from "./components/shop-card/ShopCard";

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>

      <main>
        <section className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <ShopCard
                card={{ id: 1, title: "title 1", description: "description 1" }}
                otherval={"other"}
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;