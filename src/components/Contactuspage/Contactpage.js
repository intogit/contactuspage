import Content from "./Content";
import "./Contactpage.css";
import backgroundvideo from "../Media/Mt_Baker.mp4";

const Contactpage = () => {
  return (
    <div className="contact_page">
      <div className="video-container">
        <video className="background_video" autoPlay muted loop>
          <source src={backgroundvideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="overlay">
        <Content></Content>
      </div>
    </div>
  );
};

export default Contactpage;
