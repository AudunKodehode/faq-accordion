import "./App.css";
import Accordion from "./assets/components/accordion";
import staricon from "/public/images/icon-star.svg";
function App() {
  return (
    <>
    
    <div className="topBackground"></div>
      <div className="app">
        <div className="topContainer">
          <img src={staricon} alt="" />
          <h1>FAQs</h1>
        </div>
        
        <Accordion open header={"What is Frontend Mentor, and how will it help me?"}>
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.
        </Accordion>
        <div className="divider"></div>
        <Accordion header={"Is Frontend Mentor free?"}>
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </Accordion>
        <div className="divider"></div>
        <Accordion
          header={"Can I use Frontend Mentor projects in my portfolio?"}
        >
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It's an excellent way to showcase your skills to potential
          employers!
        </Accordion>
        <div className="divider"></div>
        <Accordion header={"How can I get help if I'm stuck on a challenge?"}>
          The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members.
        </Accordion>

      </div>
    </>
  );
}

export default App;
