import '../8/8.css';
import P1 from "../../assests/page8/insta.png";
import P2 from "../../assests/page8/fb.png";
import P3 from "../../assests/page8/twi.png";
import P4 from "../../assests/page8/girl.png";
import P5 from "../../assests/page8/mail.png";
import P6 from "../../assests/page8/call.png";
import P789 from "../../assests/page8/triangle.png";
import P8 from "../../assests/page8/loc.png";
import P7 from "../../assests/page8/bass.png";
import P90 from "../../assests/page8/circ.png";
import f from "../../assests/page8/line.png";

function Page8() {
  return (
    <div>
      <img src={P7} className="bass" alt=""></img>
        <img src={P1} className="insta" alt=""></img>
        <img src={P2} className="fb" alt=""></img>
        <img src={P3} className="twi" alt=""></img>
        <img src={P4} className="girl" alt=""></img>
        <img src={P5} className="mail" alt=""></img>
        <img src={P6} className="call" alt=""></img>
        <img src={P789} className="tringle" alt=""></img>
        <img src={P8} className="loc" alt=""></img>
        <img src={P90} className="circ" alt=""></img>
        <img src={P90} className="circl" alt=""></img>
        {/* text */}
        <div className="foot">
        Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse 
        cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.
        </div>

        <div className="ours">Our Services</div>
        <div className="our2">Our Links</div>
        <div className="our3">Contact Us</div>

        <div className="oursc"><p>Web Development <br></br>
          Mobile Development <br></br>Cloud Technologies <br></br> UI/UX Desins</p></div>
        <div className="our2c"><p>Terms & Condition <br></br>Privacy Policy <br></br>Imprint Legal</p></div>
        <div className="our3c">
          <p>Al. Dummyodl 
          124/23 floor 123 Banswara Street, 02-577 India.
          <br></br> 00 1800 245 453 <br></br><br></br> hello@inkyy.com</p></div>

        <img src={f} className="ourr1" alt=""></img>
        <img src={f} className="ourr2" alt=""></img>
        <img src={f} className="ourr3" alt=""></img>

        
         <div className="rect"></div>
         <div className="send">Send Us message</div>
        <div className="pri">By sending this message, you confirm that
         you have read and agreed to our privacy-policy.</div>
         <button className="us"></button>
         <div className="start">Get Started</div>



         <div className="e1">Your Email* :</div>
         <div className="lineb"></div>
         <div className="e2">Your Name* :</div>
         <div className="e3">Phone Number* :</div>
         <div className="e4">Subject :</div>
         <div className="e5">Your Message :</div>

    </div>
);
}

export default Page8;