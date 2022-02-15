import Phone from "../Contactinfodetails/Phone";
import Address from "../Contactinfodetails/Address";
import Email from "../Contactinfodetails/Email";
import "./Contactinfo.css";

const Contactinfo = () => {
  return (
    <div className="mh-auto">
      <div className="container-xl">
        <div className="contact_info py-1 px-3">
          <div className="contact_info_item  pt-3 d-flex justify-content-start">
            <Phone></Phone>
          </div>
          <div className="contact_info_item py-2 d-flex justify-content-start">
            <Email></Email>
          </div>
          <div className="contact_info_item pb-2 d-flex justify-content-start">
            <Address></Address>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactinfo;
