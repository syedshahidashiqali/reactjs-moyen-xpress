import { useEffect } from "react";
import MyAccountMain from "../components/MyAccount";

function MyAccount(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <>
      <MyAccountMain />
    </>
  );
}

export default MyAccount;
