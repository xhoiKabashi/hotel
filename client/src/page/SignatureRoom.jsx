import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";

const SignatureRoom = () => {
  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/signature.jpg"
        textBeforeBr="Signature"
        textAfterBr="Room"
      />
    </div>
  );
};

export default SignatureRoom;
