import Header from "../ui/Header";
import PageSection from "../components/pageSections/PageSection";
import { v4 as uuidv4 } from "uuid";
import NavigateHelper from "../services/navigateHelper";
import { useAboutUsHeader, useAboutUsContent } from "./../api/about/aboutUs";

const AboutUsPage = () => {
  const { data: header } = useAboutUsHeader();
  const { data: content } = useAboutUsContent();

  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl={header?.headerImage}
        textBeforeBr={header?.levelOneTitle}
        textAfterBr={header?.levelTwoTitle}
        secondTextBeforeBr={header?.levelThreeTitle}
      />
      <div className="p-5">
        {content?.map((data) => (
          <PageSection
            key={uuidv4()}
            title={data?.title}
            content={data?.description}
            imageUrl={data?.headerImage}
            position={data?.position}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;

// imageUrl, textBeforeBr, textAfterBr, secondText
