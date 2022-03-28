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
import { AllNewArrivalsDataSkipUser } from "./apiRoutes";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import VendorRegister from "./components/Register/VendorRegister";
import CustomerRegister from "./components/Register/CustomerRegister";
import CustomerLogin from "./components/Login/CustomerLogin";
import VendorLogin from "./components/Login/VendorLogin";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
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
            path="/product/:productId"
            element={<Product home={{ isHome, setIsHome }} />}
          />
          <Route path="/shop" element={<Shop home={{ isHome, setIsHome }} />} />
          <Route path="/register" element={<Register />}>
            <Route path="vendor" element={<VendorRegister />} />
            <Route path="customer" element={<CustomerRegister />} />
          </Route>
          <Route path="/login" element={<Login />}>
            <Route path="vendor" element={<VendorLogin />} />
            <Route path="customer" element={<CustomerLogin />} />
          </Route>
          <Route
            path="/wishlist"
            element={<Wishlist home={{ isHome, setIsHome }} />}
          />
          <Route path="/cart" element={<Cart home={{ isHome, setIsHome }} />} />
        </Routes>
        <OurVendor />
        {!isHome && (
          <CardContainer
            name={"Related Products"}
            apiRoute={AllNewArrivalsDataSkipUser}
          />
        )}
        <Footer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
