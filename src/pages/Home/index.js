import React from "react";
/* import "./style.css"; */
import { makeStyles } from "@material-ui/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SideBar from "./components/SideBar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding: "24px",
  },
  toolbar: {
    minHeight: "64px",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Container maxWidth="xl">
          <Box display="flex">
            <SideBar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;
