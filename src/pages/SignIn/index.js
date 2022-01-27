import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import authService from "../../services/authServices";

import { makeStyles } from "@material-ui/styles";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import FormHelperText from "@mui/material/FormHelperText";

const useStyles = makeStyles({
  signin: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(images/background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  form: {
    margin: "64px 32px",
  },
  marginBtn: {
    margin: "16px 0",
  },
});

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <a color="inherit" href="https://github.com/WelingtonCarlos/conectaDevs">
        Welington Filho
      </a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //----------------------------------------------//

  /* EVENTO PARA O BOTÃO DE LOGIN */

  async function handleSignIn() {
    /* Chamada da API, se tudo estiver certo, o usuário será direcionado 
    para a Home, senão será exibida uma mensagem 
    obj promise */

    try {
      await authService.signIn(email, password);
      // ?? 200
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }

  //----------------------------------------------//

  return (
    <Grid container className={classes.signin}>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        padding="0 30px"
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: "#fff", fontSize: 35, lineHeight: "45px" }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgb(255,255,255, 0.7)",
            marginTop: 30,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
          software!
        </Typography>
      </Grid>
      <Grid item md={5} marginX="auto">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={8}
        >
          <Avatar sx={{ bgcolor: blue[500] }}>
            <LockIcon />
          </Avatar>
          <Typography mt={2} variant="h6">
            Entrar
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className={classes.marginBtn}>
              <Button
                onClick={handleSignIn}
                fullWidth
                variant="contained"
                color="primary"
              >
                Entrar
              </Button>
            </div>
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
            <Grid container marginTop="16px">
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem uma conta? Registre-se agora.</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
