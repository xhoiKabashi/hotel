import Header from "../shared/Header";
import PageSection from "../components/pageSections/PageSection";
import { aboutData } from "../utils/data/abouUsData";
import { v4 as uuidv4 } from "uuid";
import NavigateHelper from "../utils/navigateHelper";

const AboutUsPage = () => {
  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/about-us.jpg"
        textBeforeBr="About Us"
        secondTextBeforeBr="When you think of Blue Coast Resort & Residences, think of a small seaside town, "
        secondTextAfterBr="where your well-being is at the center of our services. "
      />
      {aboutData.map((data) => (
        <PageSection
          key={uuidv4()}
          title={data.title}
          imageUrl={data.imageUrl}
          content={data.content}
          position={data.position}
        />
      ))}
    </div>
  );
};

export default AboutUsPage;

// imageUrl, textBeforeBr, textAfterBr, secondText
