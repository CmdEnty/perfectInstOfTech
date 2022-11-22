import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const styles = {
    color: "#f1f1f1",
    minWidth: 90,
    "&:hover": {
      borderBottom: 1,
      borderColor: 'red'
    },
};


export default function AccountMenu() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Admitted Students">
          <Link
            to="/geography"
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "red" }}
          >
            <Typography sx={styles}>ADIMITTED</Typography>
          </Link>
        </Tooltip>
        <Tooltip title="Register Student">
          <Link to="/students" style={{ textDecoration: "none" }}>
            <Typography sx={styles}>REGISTER</Typography>
          </Link>
        </Tooltip>
        <Tooltip title="Pending Students">
          <Link to="/students" style={{ textDecoration: "none" }}>
            <Typography sx={styles}>PENDING</Typography>
          </Link>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}
