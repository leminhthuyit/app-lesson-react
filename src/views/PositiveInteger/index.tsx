import IntroductionApp from "../../Components/IntroductionApp";
import Navigation from "../../Components/Navigation";

const introductionData = {
  label: "Số nguyên dương",
  content: "",
};

const PositiveInteger = () => {
  return (
    <section>
      <Navigation />
      <IntroductionApp data={introductionData} />
    </section>
  );
};

export default PositiveInteger;
