import React from "react";
import PostCard from "../../../components/PostCard";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  feed: {
    width: "100%",
  },
});

// os posts serão separados como componentes, pois serão utilizados em várias páginas.
const posts = [
  {
    id: 1,
    autor: {
      id: 1,
      name: "Welington Carlos",
      username: "WCAAF",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Criando um aplicativo web do zero utilizando React.js",
    date: "21/01/2022",
    description:
      "Iremos utilizar diversas ferramentas durante o desenvolvimento, dentre elas está o Material-ui que é um excelente materialdesign",
    hashtags: "#javascript, #reactjs, #webdev, #vscode",
    image: "/images/posts/post9.jpeg",
  },
  {
    id: 2,
    autor: {
      id: 1,
      name: "Welington Carlos",
      username: "WCAAF",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Criando um aplicativo a interface do YouTube do zero",
    date: "21/01/2022",
    description:
      "Iremos utilizar diversas ferramentas durante o desenvolvimento, dentre elas está o Tailwindcss que é um excelente frameword css",
    hashtags: "#javascript, #reactjs, #webdev, #vscode, #tailwindcss",
    image: "/images/posts/post8.jpeg",
  },
];

function Feed() {
  const classes = useStyles();
  return (
    <div className={classes.feed}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
