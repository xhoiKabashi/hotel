import EditNavbar from "../features/edit/editNavbar/EditNavbar";
import Collapse from "../ui/Collapse";
import EditHotelName from "../features/edit/EditHotelName";
import EditHomeHeader from "../features/edit/EditHomeHeader";

function EditWebsite() {
  return (
    <div className="flex flex-col px-2 py-10 md:px-10 md:py-5">
      <Collapse title="Edit Logo On Navbar">
        <EditNavbar />
      </Collapse>
      <Collapse title="Edit Hotel Name">
        <EditHotelName />
      </Collapse>
      <Collapse title="Edit Home Header">
        <EditHomeHeader />
      </Collapse>
    </div>
  );
}

export default EditWebsite;
