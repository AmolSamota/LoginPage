import '../1/1.css';
import BG from "../../assests/bg.png";
import CO from "../../assests/circle.png";
import TRI from "../../assests/tri1.png";
import TRI1 from "../../assests/tri4.png";
import TRII from "../../assests/tri2.png";
import TRIII from "../../assests/tri3.png";
import WEB from "../../assests/web.png";
import WEB2 from "../../assests/web3.png";
import ARROW from "../../assests/arrow.png";
import A from "../../assests/a.png";
import B from "../../assests/b.png";
import C from "../../assests/c.png";
import D from "../../assests/d.png";
import E from "../../assests/e.png";
import G from "../../assests/g.png";
import BA from "../../assests/ba.png";
import BAS from "../../assests/bas.png";

function Page1() {
  return (
    <div>

      {/* base */}
      <img className="img" src={BG} alt=""></img>
      <img className="ba" src={BA} alt=""></img>
      <img className="bas" src={BAS}alt=""></img>
      <img className="cir" src={CO} alt=""></img>


      {/* text here */}
      <button className="get">Get Started &nbsp; &nbsp;</button>
      <img className="web" src={WEB} alt=""></img>
      <img className="web2" src={WEB2} alt=""></img>

      
      {/* navbar */}
      <div className="logo">Logo</div>
      <div className="about">About</div>
      <div className="services">Services</div>
      <div className="test">Testimonials</div>
      <div className="case">Case Studies</div>
      <div className="contact">Contact</div>
      <button className="login">Login</button>
      
       
        {/* triangles here */}
        <img className="tri" src={TRI} ></img>
        <img className="tri3" src={TRIII} ></img>
         <img className="tri1" src={TRI} ></img>
         <img className="tri2" src={TRII} ></img> 
        <img className="tri22" src={TRII} ></img>
        <img className="a" src={A} ></img> 
        <img className="b" src={B} ></img> 
        <img className="c" src={C} ></img> 
        <img className="d" src={D} ></img>
        <img className="e" src={E} ></img>
        <img className="f" src={E} ></img>
        <img className="g" src={G} ></img>
        <img className="tri223" src={TRI1} ></img> 
        <img className="arrow" src={ARROW} alt=""></img> 
        <img className="arrow2" src={ARROW} alt=""></img> 
        {/* rendered in order */}
      
    </div>
    
  );
}

export default Page1;