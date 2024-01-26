import Header from "../ui/Header";
import PageSection from "../components/pageSections/PageSection";
import { v4 as uuidv4 } from "uuid";
import NavigateHelper from "../services/navigateHelper";
import { useGetHeader, useGetContent } from "../hooks/useGetDataQuery";

const AboutUsPage = () => {
  // get header
  const queryHeader = {
    key: "aboutUsPageHeader",
    endPoint: "about-us-header",
  };
  const { data: header } = useGetHeader(queryHeader);

  // get content

  const queryContent = {
    key: "aboutUsPageContent",
    endPoint: "about-us-content",
  };

  const { data: content } = useGetContent(queryContent);

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
