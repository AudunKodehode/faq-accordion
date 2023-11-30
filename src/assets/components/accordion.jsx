/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import iconplus from "/public/images/icon-plus.svg";
import iconminus from "/public/images/icon-minus.svg";
export default function Accordion({ header, children, open}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (open) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, [open]);
    
    return (
    
    <>
      <div className="accordionContainer " onClick={() => setIsOpen(!isOpen)}>
        <div className="headerContainer ">
          <h3>{header}</h3>
            <img src={isOpen ? iconminus : iconplus} alt="" onClick={() => setIsOpen(!isOpen)}/>
        </div>

        <div className={`accordion ${isOpen ? "accordionOpen" : "accordionClosed"}`}>
          <div className="accordionText">
        <h5>{children}</h5>
        </div>
        </div>


      </div>
    </>
  );
}
