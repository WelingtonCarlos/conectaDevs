import React from "react";
import { makeStyles } from "@material-ui/styles";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const useStyles = makeStyles({
  sideBar: {
    padding: "16px",
    width: "275px",
    marginRight: "16px",
  },
  button: {
    width: "100%",
  },
});

const tags = [
  { id: 1, name: "reactjs" },
  { id: 2, name: "javascript" },
  { id: 3, name: "tailwindcss" },
  { id: 4, name: "materialui" },
  { id: 5, name: "php" },
  { id: 6, name: "webdev" },
];

function SideBar() {
  const classes = useStyles();
  return (
    <Paper className={classes.sideBar}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Registar Novos
      </Button>
      <ListSubheader>{"Tags em Alta"}</ListSubheader>
      {tags.map(
        (
          item // vai navegar na minha lista de tags e renderizar cada item, tanto id quanto name.
        ) => (
          <ListItem dense button key={`item-${item.id}-${item.name}`}>
            <ListItemText primary={`#${item.name}`} />
          </ListItem>
        )
      )}
      <ListItem button>Exibir mais Tags</ListItem>
    </Paper>
  );
}

export default SideBar;
