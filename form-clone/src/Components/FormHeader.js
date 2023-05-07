import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";
import "../Styles/FormHeader.css";
import { Link } from "react-router-dom";

function FormHeader() {
  return (
    <>
      <div className="form-header-container">
        <div className="form-header-left">
          <Link to={"/"}>
            <DescriptionIcon style={{ height: "50px", width: "50px" }} />
          </Link>
          <span className="form-header-text">FormHeader</span>
        </div>

        <Button>Send</Button>
      </div>
    </>
  );
}

export default FormHeader;
