import EditNavbar from "../features/edit/editNavbar/EditNavbar";
import Collapse from "../ui/Collapse";

function EditWebsite() {
  return (
    <div className="flex flex-col px-2 py-10 md:px-10 md:py-5">
      <Collapse title="Edit Logo On Navbar">
        <EditNavbar />
      </Collapse>
      <Collapse title="Edit">
        <EditNavbar />
      </Collapse>
      <Collapse title="Edit">
        <EditNavbar />
      </Collapse>
    </div>
  );
}

export default EditWebsite;
