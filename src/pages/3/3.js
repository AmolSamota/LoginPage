import '../3/3.css';
import A from "../../assests/page3/a.png";
import W from "../../assests/page3/white.png";
import B from "../../assests/page3/b.png";
import D from "../../assests/page3/d.png";
import C from "../../assests/page3/c.png";


function Page3() {
  return (
    <div>
      <div className="bgimg3"></div>
        <img className="at" src={A} alt=""></img>
        <img className="att" src={W} alt=""></img>
        <img className="bt" src={A} alt=""></img>
        <img className="btt" src={B} alt=""></img>
        <img className="dt" src={D} alt=""></img>
        <img className="p3c" src={C} alt=""></img>

        {/* text */}
        <div className="t11">UI/UX Designing</div>
        <div className="t12"><b>
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
        Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
          
          </b></div>

        <div className="t13">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</div>
        <div className="t14">Lorem ipsum dolor sit amet,</div>
        <div className="t15">Lorem ipsum dolor sit amet,</div>
        <div className="t16">Lorem ipsum dolor sit amet,</div>

        <img className="r1" src={D} alt=""></img>
        <img className="r2" src={D} alt=""></img>
        <img className="r3" src={D} alt=""></img>
        <img className="r4" src={D} alt=""></img>

        {/* buttons */}
        <button className="b1">Web Development</button>
        <button className="b2">Mobiile Development</button>
        <button className="b3">UI/UX Designing</button>
        <button className="b4">Branding</button>
        <button className="b5">Cloud Technology</button>

        {/* text */}
        <div className="p3t11">Transforming your ideas into Reality</div>
        <div className="p3t12">OUR SERVICES</div>

    </div>
);
}

export default Page3;