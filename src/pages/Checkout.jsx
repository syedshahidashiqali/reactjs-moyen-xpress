import CheckoutMain from "../components/Checkout/CheckoutMain";
import { useEffect } from "react";

export default function Checkout(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <>
      <CheckoutMain />
    </>
  );
}
