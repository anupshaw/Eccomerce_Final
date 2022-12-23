import Header from "./component/Layout/Header";

// import Products from "./component/Product/Products";
import Footer from "./component/Layout/footer";
import Cart from "./component/Cart/Cart";
import React, { Suspense, useContext, useState } from "react";
import CartProvider from "./component/store/cart-Provider";
import Store from "./pages/Store";
import About from "./pages/AboutPage";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductSummary from "./component/Product/ProductSummary";
import Home from "./pages/HomePage";
import ContactUs from "./pages/ContactUsPage";
import ProductDetails from "./component/Product/ProductDetails";
// import AuthPage from "./pages/AuthPage";
import AuthContext from "./component/store/auth-Context";
import NotFound from "./pages/NotFound";
// import CartContext from "./component/store/cart-Context";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx = useContext(AuthContext);
  // const cartCtx=useContext(CartContext);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {authCtx.isLoggedIn && cartIsShown && <Cart />}
      <ProductSummary />
      <Switch>
        <Route path="/" exact>
          {authCtx.isLoggedIn && <Store />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/about" exact>
          {authCtx.isLoggedIn && <About />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/home" exact>
          {authCtx.isLoggedIn && <Home />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/contact" exact>
          {authCtx.isLoggedIn && <ContactUs />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/ProductDetails/:id" exact>
          {authCtx.isLoggedIn && <ProductDetails />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Suspense
          fallback={
            <div>
              <h1>Loading....</h1>
            </div>
          }
        >
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
        </Suspense>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer Description={"The Genrics"}></Footer>
    </CartProvider>
  );
}

export default App;
