import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../Styles/Form.css";
import { IconButton } from "@mui/material";

function Form({ img, formTitle }) {
  return (
    <div className="form-card">
      <img src={img} alt={formTitle} className="form-image" />
      <div className="form-info">
        <span className="form-text">{formTitle}</span>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Form;
