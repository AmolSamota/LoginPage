import '../2/2.css';
import A from "../../assests/page2/a.png";
import B from "../../assests/page2/b.png";
import C from "../../assests/page2/e.png";
import D from "../../assests/page2/d.png";
import arrow from "../../assests/page2/arrow.png";
import hj from "../../assests/page2/hj.png"
function Page2() {
  return (
    <div>
        <img className="aa" src={A} alt=""></img>
        <img className="bb" src={B} alt=""></img>
        <img className="cc" src={C} alt=""></img>
        <div className="t1">ABOUT US</div>
        <div className="t2">Great Digital Agency</div>
        <div className="t3">Our products are fully custom-made, built with the latest 
        technologies and cloud-architectures.</div>
        <div className="t4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant 
        morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        In convallis porta mauris non aliquam.</div>
        <button className="get2">Get Started &nbsp; &nbsp;</button>
        <img className="dd" src={D} alt=""></img>
        <img className="arr" src={arrow} alt=""></img>
        <img className="arr2" src={arrow} alt=""></img>
        <img src={hj} alt="" className="hj"></img>
    </div>
);
}

export default Page2;