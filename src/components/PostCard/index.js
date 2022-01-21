import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { makeStyles } from "@material-ui/styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
/* import CardMedia from '@mui/material/CardMedia'; */
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles({
  postCard: {
    marginBottom: "16px",
  },
  subheader: {
    display: "flex",
    alignItems: "center",
  },
  spacing: {
    marginRight: "8px",
  },
});

// por post ser um componente genérico, ele será um objeto.
function PostCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.postCard}>
      <CardHeader
        avatar={<Avatar src={post.autor.avatar} />}
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={
          <div className={classes.subheader}>
            <div className={classes.spacing}>
              <Typography variant="caption">{"Criado por "}</Typography>
            </div>
            <div className={classes.spacing}>
              <Typography variant="subtitle2">{post.autor.name}</Typography>
            </div>
            <div className={classes.spacing}>
              <Typography variant="caption">{post.date}</Typography>
            </div>
          </div>
        }
      />
      <CardContent />
      <CardActions></CardActions>
    </Card>
  );
}

export default PostCard;
