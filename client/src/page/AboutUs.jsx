import Header from "../ui/Header";
import PageSection from "../components/pageSections/PageSection";
import { aboutData } from "../services/data/abouUsData";
import { v4 as uuidv4 } from "uuid";
import NavigateHelper from "../services/navigateHelper";

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
      <div className="p-5">
        {aboutData.map((data) => (
          <div key={uuidv4()}>
            <PageSection
              key={uuidv4()}
              title={data.title}
              imageUrl={data.imageUrl}
              content={data.content}
              position={data.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;

// imageUrl, textBeforeBr, textAfterBr, secondText
