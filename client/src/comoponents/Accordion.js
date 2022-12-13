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
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "#291452",
              fontSize: "20px",
            }}
          >
            Where is AEP available ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#7f68af" }}>
            AEP will be available for iOS and Android very soon! We're launching
            in France, but plan to expand rapidly to the rest of Europe and from
            there, around the world! Check the app to see if there are services
            listed in your area.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ color: "#291452", fontSize: "20px" }}>
            What events can I organise ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#7f68af" }}>
            You can organize anything! It could be birthdays, dinners, baby
            showers, bachelor parties, weddings, surprises to your friends or
            family, baptisms, proms, date nights, Girls date/Brunch, Bridal
            Shower or any special celebration
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ color: "#291452", fontSize: "20px" }}>
            What services for my event can I find on AEP ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#7f68af" }}>
            Here's a list of some of our popular services, but there are many
            more you'll find at AEP <br />
            -Event planning <br />
            -Catering services <br />
            -Venues
            <br />
            -Djs <br />
            -Decorators <br />
            -Party Designers
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
