import NavBar from "./components/common/NavBar";
import "./App.css";
import Home from "./pages/Home";
import OurVendor from "./components/common/OurVendor";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <OurVendor />
      <Footer />
    </>
  );
}

export default App;
