import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Aside />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src="/Assets/list.svg" alt="menu" />
      <img src="/Assets/shopping-cart.svg" alt="shopping_cart" />
      <span className="span-menu"></span>
    </header>
  );
}

function Main() {
  return <main>Header</main>;
}
function Aside() {
  return <aside>Aside</aside>;
}
