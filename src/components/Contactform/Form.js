import "../Contactuspage/Contactpage.css";
import "./Form.css";
// import backgroundvideo from "../Media/star.mp4";

const Form = () => {
  return (
    <div>
      <div className="mh-auto">
        <div className="container mh-auto">
          <div className="col">
            <div className="contact_form py-4">
              <div className="row">
                <div className="formtitle">
                  <h2>Get in touch</h2>
                </div>
              </div>
              <div className="row px-3">
                <form>
                  <div className=" mt-4 mb-3">
                    <input
                      type="text"
                      className="inputfield"
                      placeholder="Full name"
                      required
                    ></input>
                  </div>
                  <div className=" my-3">
                    <input
                      type="email"
                      className="inputfield"
                      placeholder="Email"
                      required
                    ></input>
                  </div>
                  <div className=" my-3">
                    <textarea
                      className="inputfield"
                      placeholder="message"
                      col="30"
                      row="20"
                    ></textarea>
                  </div>
                  <div className="contact_form_button mt-4 mb-2">
                    <button type="submit" className="button px-3">{" "}
                    SEND
                    {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-send"
                        viewBox="-4 3 19 13"
                      >
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                      </svg>{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
