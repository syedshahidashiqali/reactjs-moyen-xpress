import NotFoundMain from "../components/NotFound/NotFoundMain";
import { useEffect } from "react";

export default function NotFound(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <>
      <NotFoundMain />
    </>
  );
}
