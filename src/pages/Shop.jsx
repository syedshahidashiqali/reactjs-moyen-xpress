import { useEffect } from "react";
import ShopMain from "../components/Shop/ShopMain";

export default function Shop(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <>
      <ShopMain />
    </>
  );
}
