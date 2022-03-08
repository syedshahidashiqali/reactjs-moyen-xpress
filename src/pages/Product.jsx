import { useEffect } from "react";

export default function Product(props) {
  const { isHome, setIsHome } = props.home;

  useEffect(() => {
    if (isHome === true) {
      setIsHome(false);
    }
  }, [isHome]);
  return (
    <div className="productSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
