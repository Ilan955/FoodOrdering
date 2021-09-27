import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCardIsShown] = useState(false);
  const showCartHandler = () => {
    setCardIsShown(true);
  };
  const hideCartHandler = () => {
    setCardIsShown(false);
  };
  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
