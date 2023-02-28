import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faqs() {

  const [faqsData, setFaqs] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "faqs"]{
            question,
            answer,
        }`
      )
      .then((data) => setFaqs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="default-sec faqs-section">
      <div className="default-sec-overlay">
        <div className="default-sec-content">
          <div className="default-sec-wrap">
            <h2 className="center">Frequently Asked Questions</h2>
            <Accordion className="faqs-accordion">
              {faqsData &&
                faqsData.map((faqs, index) => (
                  <AccordionItem key={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton> {faqs.question} </AccordionItemButton>  
                    </AccordionItemHeading>
                    <AccordionItemPanel> {faqs.answer} </AccordionItemPanel>
                  </AccordionItem>
                  )
                )
              }
              </Accordion>
          </div> 
        </div>
      </div>
    </div>
  );
}