import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Box, Button, useTheme } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function NextOfKinAccordions() {
  const [expanded, setExpanded] = React.useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box display="flex" gap="100px">
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Full Names
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Jeremy Smalga
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Relationship
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Parent
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" gap="118px">
            <Box mt="-15px">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Country
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Kenya
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                County
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Mombasa
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Sub County
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Changamwe
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Location
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Chaani
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
            <Box mt="-15px">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                ID/Passport
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  3457889767
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Email
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Jeremysmalga@gmail.com
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Phone
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  +25478689777
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
