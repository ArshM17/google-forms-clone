import { Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

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

function FormBody({ fields }) {
  const classes = styles();
  return (
    <>
      <Paper className={classes.root}>
        <Tabs centered className={classes.tabs}>
          <Tab className={classes.tab} label="Questions"></Tab>
          <Tab className={classes.tab} label="Responses"></Tab>
        </Tabs>
      </Paper>
    </>
  );
}

export default FormBody;
