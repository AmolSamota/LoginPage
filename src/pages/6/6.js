import '../6/6.css';
import RECT from "../../assests/page6/rect.png";
import ar from "../../assests/page6/ar.png";
import arrw from "../../assests/page6/arrw.png";
import gir from "../../assests/page6/gir.png";
import dot from "../../assests/page6/dot.png";
import react from "../../assests/page6/react.png";
import rect from "../../assests/page6/rect.png";

function Page6() {
  return (
    <div>
        <img src={RECT} alt="" className="recthuh"></img>
        <img src={ar} alt="" className="ar"></img>
        <img src={arrw} alt="" className="arrw"></img>
        <img src={gir} alt="" className="gir"></img>
        <img src={dot} alt="" className="dot"></img>
        <img src={react} alt="" className="react"></img>
        <img src={rect} alt="" className="rect"></img>

        <div className="p6t1">Check what our client say about us</div>
        <div className="p6t2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam ex turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique 
        senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
        </div>
        <div className="p6t3">SELECTED CUSTOMERS</div>
        
    </div>
);
}

export default Page6;