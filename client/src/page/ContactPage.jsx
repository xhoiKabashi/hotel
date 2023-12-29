import ContactForm from "../components/ContactForm";
import NavigateHelper from "../utils/navigateHelper";
const ContactPage = () => {
  NavigateHelper();
  return (
    <div className="grid px-5 md:grid-cols-2 md:grid-rows-1 md:p-20 gap-10">
      <div>
        <section className="pt-28 md:pt-10 flex flex-col items-center px-5 text-center">
          <h1 className="text-4xl mb-4 italic">Contact Us</h1>
          <p className="text-balance">
            Escape to our beach hotel, where tranquility meets luxury, and every
            moment is an opportunity to create cherished memories.
          </p>
        </section>
        <ContactForm />
      </div>
      <div className="pt-10">
        <img src="./contact.jpg" alt="" />
        <div className="space-y-3 pt-5">
          <div className="text-xl md:text-2xl">
            <h1>123 Seafront Palase</h1>
            <h1>Himarë, Vlorë County</h1>
          </div>
          <div>
            <p>reservation@bluecoast.com</p>
            <p>+35500000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
