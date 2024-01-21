import EditLogo from "../features/edit/editNavbar/EditLogo";
import Collapse from "../ui/Collapse";
import EditHotelName from "../features/edit/EditHotelName";
import EditHomeHeader from "../features/edit/EditHomeHeader";
import EditRestaurantHeader from "../features/edit/editRestaurantPage/EditRestaurantHeader";
function EditWebsite() {
  return (
    <div className="flex flex-col px-2 py-10 md:px-10 md:py-5">
      <Collapse title="Edit Logo">
        <EditLogo />
      </Collapse>
      <Collapse title="Edit Hotel Name">
        <EditHotelName />
      </Collapse>
      <Collapse title="Edit Home Header">
        <EditHomeHeader />
      </Collapse>
      <Collapse title="Edit Restaurant Page">
        <EditRestaurantHeader />
      </Collapse>
    </div>
  );
}

export default EditWebsite;
