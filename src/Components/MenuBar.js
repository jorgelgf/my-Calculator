import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{ color: "black", fontSize: "10px" }}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        ...
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://github.com/jorgelgf"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            My github
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.linkedin.com/in/jorgelgf/"
            target="_blank"
            rel="noreferrer"
          >
            My Linkedin
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
