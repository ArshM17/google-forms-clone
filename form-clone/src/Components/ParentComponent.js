import React, { useEffect, useRef, useState } from "react";
import ChildComponent from "./ChildComponent";
import ResponsesDisplayComponent from "./Responses";

import { Paper, Tab, Tabs, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "#444",
    textTransform: "capitalize",
    height: 10,
    fontWeight: 600,
  },
  tabs: {
    height: 10,
  },
});

const ParentComponent = () => {
  const classes = styles();

  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();

  useEffect(() => {
    fetchData();
    // setFormData({ title: "", questions: [{ question: "", options: [] }] });
  }, [value]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/form");
      const jsonData = await response.json();
      setFormData(jsonData);
      // console.log(formData);
      // console.log("json");
      // console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const title = useRef();

  const handleFormSubmit = () => {
    const formURL = `http://localhost:3000/form/response/${id}`;
    // Filter out questions with no question text and blank options
    const filteredQuestions = formData.filter((question) => {
      const hasQuestionText = question.question.trim() !== "";
      const hasOptions =
        question.options.length > 0 &&
        question.options.every((option) => option.trim() !== "");
      return hasQuestionText && hasOptions;
    });
    const form = {
      title: title.current.value,
      questions: filteredQuestions,
    };
    if (form.title === "") form.title = "Untitled Form";
    // Send filteredQuestions to the backend
    alert(`Link to answer : ${formURL}`);
    console.log(form);
  };

  if (!formData) {
    return <h6>Loading...</h6>;
  }

  return formData ? (
    <div>
      <input
        type="text"
        value={formData.title}
        placeholder="Form Title"
        ref={title}
      />
      <button onClick={handleFormSubmit}>Submit Form</button>

      <div>
        <Paper className={classes.root}>
          <Tabs
            centered
            className={classes.tabs}
            value={value}
            onChange={handleChange}
          >
            <Tab className={classes.tab} label="Questions"></Tab>
            <Tab className={classes.tab} label="Responses"></Tab>
          </Tabs>
        </Paper>
        <div className="panel-container">
          <div>
            <TabPanel value={value} index={0}>
              <ChildComponent
                formQuestions={formData.questions}
                setFormData={setFormData}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ResponsesDisplayComponent />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ParentComponent;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
