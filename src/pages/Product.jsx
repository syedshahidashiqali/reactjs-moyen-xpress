import { useEffect } from "react";
import ProductIntro from "../components/Product/ProductIntro";

export default function Product(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <>
      <ProductIntro />
    </>
  );
}
