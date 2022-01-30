import React from "react";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SvgIcon from "@mui/material/SvgIcon";
import Avatar from "@mui/material/Avatar";

import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Bell } from "react-feather";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
  },
  img: {
    maxHeight: "55px",
  },
  grow: {
    flexGrow: "1",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {},
  bell: {
    marginLeft: "64px",
    marginRight: "32px",
  },
});

function Header() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <AppBar className={classes.appBar} position="fixed" color="inherit">
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Novo Post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          {/*Se existir um usuário ele irá preencher com a imagem do usuário no avatar*/}
          <Avatar alt="Remy Sharp" src={user && user.avatar} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
