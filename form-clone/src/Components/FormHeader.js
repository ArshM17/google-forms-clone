import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";
import "../Styles/FormHeader.css";
import { Link } from "react-router-dom";

function FormHeader({ form_title }) {
  return (
    <>
      <div className="form-header-container">
        <div className="form-header-left">
          <Link to={"/"}>
            <DescriptionIcon style={{ height: "50px", width: "50px" }} />
          </Link>
          <span className="form-header-text">{form_title}</span>
        </div>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#7316c4",
            padding: "5px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Send
        </Button>
      </div>
    </>
  );
}

export default FormHeader;
