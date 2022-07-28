import "./App.css";
import CardComponet from "./components/CardComponet";
import Header from "./components/Header";
import AddToCart from "./pages/AddToCart";

function App() {
  return (
    <>
      {/* ------------------Header------------------ */}
      <Header />
      {/* ---------------CardComponet--------------- */}
      <CardComponet />
      {/* ----------------AddToCart----------------- */}
      <AddToCart />
    </>
  );
}

export default App;
