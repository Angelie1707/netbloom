import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faqs() {
  const [faqsData, setFaqs] = useState(null);
  const [expanded, setExpanded] = React.useState('panel');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
            <div>
              {faqsData &&
                faqsData.map((faqs, index) => (
                  <Accordion expanded={expanded === {index}} onChange={handleChange({index})} key={index}>
                      <AccordionSummary aria-controls={index} id={index}> {faqs.question} </AccordionSummary>
                      <AccordionDetails> {faqs.answer} </AccordionDetails>
                  </Accordion>
                  )
                )
              }
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}