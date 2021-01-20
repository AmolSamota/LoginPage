import './App.css';
import BG from "./assests/bg.png";
import RO from "./assests/rocket.png";
import CO from "./assests/circle.png";
import TRI from "./assests/tri1.png";
import TRI1 from "./assests/tri4.png";
import TRI2 from "./assests/tri5.png";
import TRI3 from "./assests/tri6.png";
import TRI4 from "./assests/tri7.png";
import TRII from "./assests/tri2.png";
import TRIII from "./assests/tri3.png";
import WEB from "./assests/web.png";
import WEB2 from "./assests/web3.png";

function App() {
  return (
    <div>
      <div className="App"><img src={BG}></img></div>
      <img className="roc" src={RO} ></img>
      <button className="get">Get Started</button>
      <img className="web" src={WEB} ></img>
      <img className="web2" src={WEB2} ></img>
      <img className="cir" src={CO} ></img>
      <img className="tri" src={TRI} ></img>

      {/* navbar */}
      <div className="logo">Logo</div>
      <div className="about">About</div>
      <div className="services">Services</div>
      <div className="test">Testimonials</div>
      <div className="case">Case Studies</div>
      <div className="contact">Contact</div>
      <button className="login">Login</button>

      
       
        {/* <img className="tri1" src={TRI} ></img>
        <img className="tri2" src={TRII} ></img> 
        <img className="tri22" src={TRII} ></img> */}
        {/* <img className="tri3" src={TRIII} ></img>
        <img className="tri" src={TRI1} ></img>  */}
    </div>
    
  );
}

export default App;