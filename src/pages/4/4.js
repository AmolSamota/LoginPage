import '../4/4.css';
// import Card from 'react-bootstrap/Card'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import LINE from "../../assests/page4/line.png";

function Page4() {
  return (
    <div>

        <div className="tt4">Workflow</div>
        <div className="tt42">Lorem ipsum dolor sit amet, conse ctetur 
        adipi scing elit. Aliq uam ex odio, 
        is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</div>

        <div className="col1"></div>
        <div className="col2"></div>
        <div className="col3"></div>

        
        <button className="colb1">STEP 1</button>
        <button className="colb2">STEP 2</button>
        <Button className="colb3">STEP 3</Button>


        <div className="colt2">Wait for delivery</div>
        <div className="colt1">Send your brief</div>
        <div className="colt3">Get your files!</div>

        
        <div className="colc1">L
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
        Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
        
        <br></br><br></br>

        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
        Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
        </div>

        <div className="colc2">L
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
        Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
        
        <br></br><br></br>

        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
        Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
        </div>

        <div className="colc3">L
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
        Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
        
        <br></br><br></br>

        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
        Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
        </div>


        <img src={LINE} alt="" className="l41"></img>
        <img src={LINE} alt="" className="l42"></img>
        <img src={LINE} alt="" className="l43"></img>
          

    </div>
);
}

export default Page4;