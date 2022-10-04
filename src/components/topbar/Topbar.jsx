import "./topbar.scss";

import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
const Topbar = ({menuOpen,setMenuOpen}) => {

  return (
          
    <div className={"topbar "+(menuOpen&&"active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Samkit.
          </a>
          <div className="itemContainer">
            <CallIcon className="icon" />
            <span>+91 7000017025</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>samkitchoudhary@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
