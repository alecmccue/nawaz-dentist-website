import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const GeneralDentistry = () => (
  <ServiceWrapper>
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="General Dentistry" src="/general_dentistry.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              General & Family Dentistry
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              General dentistry services encompass a wide range of procedures
              designed to promote oral health, address dental issues, and
              enhance smiles. Regular visits to a general dentist play a vital
              role in keeping teeth and gums healthy, preventing potential
              complications, and ensuring a confident and radiant smile.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default GeneralDentistry;
