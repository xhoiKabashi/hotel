import EditNavbar from "../features/edit/editNavbar/EditNavbar";
import Collapse from "../ui/Collapse";

function EditWebsite() {
  return (
    <div className="flex flex-col px-10 py-5">
      <Collapse title="Edit">
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
