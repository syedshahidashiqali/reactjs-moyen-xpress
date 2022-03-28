import CartMain from "../components/Cart/CartMain";
import { useEffect } from "react";

export default function Cart(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <>
      <CartMain />
    </>
  );
}
