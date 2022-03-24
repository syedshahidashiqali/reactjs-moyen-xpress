import { useEffect } from "react";
import WishlistMain from "../components/Wishlist/WishlistMain";

export default function Wishlist(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <>
      <WishlistMain />
    </>
  );
}
