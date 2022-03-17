import { useState } from "react";
import NavBar from "./components/common/NavBar";
import "./App.css";
import Home from "./pages/Home";
import OurVendor from "./components/common/OurVendor";
import Footer from "./components/common/Footer";
// import react-router-dom-6 things
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import CustomerSupport from "./components/common/CustomerSupport";
import CardContainer from "./components/common/CardContainer";
import Shop from "./pages/Shop";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        {!isHome && (
          <div className="container-fluid">
            <CustomerSupport />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Product home={{ isHome, setIsHome }} />}
          />
          <Route path="/shop" element={<Shop home={{ isHome, setIsHome }} />} />
        </Routes>
        <OurVendor />
        {!isHome && <CardContainer name={"Related Products"} />}
        <Footer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
