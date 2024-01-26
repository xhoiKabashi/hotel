import ContactForm from "../components/ContactForm";
import NavigateHelper from "../services/navigateHelper";
import getImage from "../services/getImage";
import { useGetHeader } from "../hooks/useGetDataQuery";

const ContactPage = () => {
  NavigateHelper();
  const queryHeader = {
    key: "contactData",
    endPoint: "contact-data",
  };
  const { data: contactData } = useGetHeader(queryHeader);

  return (
    <div className="grid px-5 md:grid-cols-2 md:grid-rows-1 md:p-28 gap-10">
      <div>
        <section className="pt-28 md:pt-10 flex flex-col items-center px-5 text-center">
          <h1 className="text-4xl mb-4 italic">Contact Us</h1>
          <p className="text-balance">{contactData?.quote}</p>
        </section>
        <ContactForm />
      </div>
      <div className="pt-10">
        <img src={getImage + contactData?.headerImage} alt="" />
        <div className="space-y-3 pt-5">
          <div className="text-xl md:text-2xl">
            <h1>{contactData?.address}</h1>
          </div>
          <div>
            <p>{contactData?.phoneNumber}</p>
            <p>{contactData?.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
