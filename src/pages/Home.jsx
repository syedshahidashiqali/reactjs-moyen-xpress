import IntroSlider from "../components/Home/IntroSlider";
import CustomerSupport from "../components/common/CustomerSupport";
import CardContainer from "../components/common/CardContainer";
import CategoryBanner from "../components/Home/CategoryBanner";

export default function Home() {
  return (
    <>
      <IntroSlider />
      <div className="container-fluid">
        <CustomerSupport />
      </div>
      <CardContainer />
      <CategoryBanner />
    </>
  );
}
