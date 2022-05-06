import IntroSlider from "../components/Home/IntroSlider";
import CustomerSupport from "../components/common/CustomerSupport";
import CardContainer from "../components/common/CardContainer";
import CategoryBanner from "../components/Home/CategoryBanner";
import { useSelector } from "react-redux";

// import APIs
import {
  featuredDefault,
  FEATURED,
  newArrivalDefault,
  ARRIVALS,
} from "../apiRoutes";

export default function Home() {
  const { userData } = useSelector((state) => state.auth);
  return (
    <>
      <IntroSlider />
      <div className="container-fluid">
        <CustomerSupport />
      </div>
      <CardContainer
        name={"Deals Of The Day"}
        apiRoute={
          !userData.username ? featuredDefault : `${FEATURED}/${userData.id}`
        }
      />
      <CategoryBanner />
      <CardContainer
        name={"New Arrivals"}
        apiRoute={
          !userData.username ? newArrivalDefault : `${ARRIVALS}/${userData.id}`
        }
      />
    </>
  );
}
