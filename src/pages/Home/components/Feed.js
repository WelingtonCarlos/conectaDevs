import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  feed: {
    background: "yellow",
    width: "100%",
  },
});

function Feed() {
  const classes = useStyles();
  return <div className={classes.feed}></div>;
}

export default Feed;
