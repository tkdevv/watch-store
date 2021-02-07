import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import GlobalState from "./context/WatchContext";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const mainCache = "v0.2";

  useEffect(() => {
    const assets = [];

    console.log("RUNNING");
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => {
              return name !== mainCache;
            })
            .map((cache) => caches.delete(cache))
        )
      )
      .catch((err) => console.log(err));

    // PRE-CACHES REQUESTS IN ASSETS VARIABLE
    caches.open(mainCache).then((cache) =>
      assets.forEach((asset) =>
        cache
          .match(asset)
          .then((res) => {
            if (!res) {
              cache
                .add(asset)
                .catch(() => console.log("couldn't cache", asset));
            }
          })
          .catch((err) => console.log(err))
      )
    );
  }, []);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <GlobalState>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/watch/:id" component={DetailPage} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="" component={HomePage} />
            </Switch>
          </AnimatePresence>
        </GlobalState>
      </div>
      <Footer />
    </div>
  );
}

export default App;
