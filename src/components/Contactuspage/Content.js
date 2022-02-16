import "./Content.css";
import "./Contactpage.css";
import Header from "./Header";
import Form from "../Contactform/Form";
import Contactinfo from "../Contactinfo/Contactinfo";

const Content = () => {
  return (
    <div className="content">
      <div className="header">
        <Header></Header>
      </div>
      <div>
        <div className="container px-5 py-2">
          <div className="row">
            {/* <div className=" dsf d-flex">  */}
            <div className="col justify-content-center  py-2">
              <Contactinfo></Contactinfo>
            </div>
            <div className="col justify-content-center pb-5">
              <Form></Form>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
