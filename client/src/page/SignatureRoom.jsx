import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";

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
