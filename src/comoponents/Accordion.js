import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.css";

export default function SimpleAccordion() {
  return (
    <div id="accordion__container">
      <h1>Frequently Asked Questions</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Where is AEP available ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            INVITE will be available for iOS, Android, and web very soon! We're
            launching in France, but plan to expand rapidly to the rest of
            Europe and from there, around the world! Check the app to see if
            there are services listed in your area.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What events can I organise ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can organize anything! It could be birthdays, dinners, baby
            showers, bachelor parties, weddings, surprises to your friends or
            family, baptisms, proms, date nights, Girls date/Brunch, Bridal
            Shower or any special celebration
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            What services for my event can I find on AEP ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here's a list of some of our popular services, but there are many
            more you'll find on AEP -Event planning -Catering services -Venues
            -Djs -Decorators Party Designers
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
