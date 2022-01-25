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
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";

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
  message: {
    height: "auto",
    marginBottom: "16px",
    padding: "0 24px",
  },
  image: {
    height: "300px",
    width: "100%",
    maxWidth: "100%",
  },
  content: {
    padding: "0",
  },
  message: {
    flexGrow: 1,
  },
  favorite: {},
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
      <CardContent className={classes.content}>
        <Typography className={classes.message} variante="body1">
          {post.hashtags}
        </Typography>
        <CardActionArea>
          <img src={post.image} className={classes.image} alt="imagem" />
        </CardActionArea>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{ cursor: "pointer" }}
            color="textSecondary"
            variant="body2"
          >
            {"10"}
          </Typography>
        </IconButton>
        <div className={classes.message}>
          <IconButton aria-label="comment">
            <MessageIcon />
            <Typography color="textSecondary" variant="body2">
              {"38"}
            </Typography>
          </IconButton>
        </div>
        <IconButton aria-label="favorite" className={classes.favorite}>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
