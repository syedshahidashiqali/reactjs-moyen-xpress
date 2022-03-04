import IntroSlider from "../components/Home/IntroSlider";
import CustomerSupport from "../components/common/CustomerSupport";
import CardContainer from "../components/common/CardContainer";

export default function Home() {
  return (
    <>
      <IntroSlider />
      <div className="container-fluid">
        <CustomerSupport />
      </div>
      <CardContainer />
    </>
  );
}
