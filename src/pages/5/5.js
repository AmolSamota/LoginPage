import '../5/5.css';
import IMG1 from "../../assests/page5/img1.png";

// row 1
import P1 from "../../assests/page5/react.png";
import P2 from "../../assests/page5/googlecloud.png";
import P3 from "../../assests/page5/4.png";
import P4 from "../../assests/page5/5.png";
import P5 from "../../assests/page5/6.png";
import P6 from "../../assests/page5/7.png";
import P7 from "../../assests/page5/2.png";
import P9 from "../../assests/page5/9.png";
import P8 from "../../assests/page5/8.png";

function Page5() {
  return (
    <div>
        <div className="bg5"></div>
        <img src={IMG1} className="img1" alt=""></img>
        <div className="t51">Core Technologies</div>
        
        <div className="t52">
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis 
        accu msan congue euisque blandit dui Pelle ntesque habitant.
        </div>
        <div className="t5b"></div>


        <div className="t5c1">Design</div>
        <div className="t5c2">Development</div>
        <div className="t5c3">Marketing</div>

        {/* row 1 */}

        <div className="p51b"></div>
        <div className="p52b"></div>
        <div className="p53b"></div>
        <div className="p54b"></div>
        <div className="p55b"></div>
        <div className="p56b"></div>
        <div className="p57b"></div>


        <img src={P1} className="p51" alt=""></img>
        <img src={P2} className="p52" alt=""></img>
        <img src={P3} className="p53" alt=""></img>
        <img src={P4} className="p54" alt=""></img>
        <img src={P5} className="p55" alt=""></img>
        <img src={P6} className="p56" alt=""></img>
        <img src={P7} className="p57" alt=""></img>
        

        {/* row 2 */}

        <div className="p61b"></div>
        <div className="p62b"></div>
        <div className="p63b"></div>
        <div className="p64b"></div>
        <div className="p65b"></div>
        <div className="p66b"></div>

        <img src={P4} className="p61" alt=""></img>
        <img src={P3} className="p62" alt=""></img>
        <img src={P8} className="p63" alt=""></img>
        <img src={P9} className="p64" alt=""></img>
        <img src={P1} className="p65" alt=""></img>
        <img src={P5} className="p66" alt=""></img>
          

    </div>
);
}

export default Page5;