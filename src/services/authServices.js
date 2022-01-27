import axios from "../utils/axios";

class AuthServices {
  /* OUTRAS FUNÇÕES */

  signIn = (email, password) => {
    /* resolve para mensagem positiva
    e reject para mensagem negativa*/

    /* Pega os dados da minha 'api' e guar o email e a senha
    se a senha que for digitada no index.js do SignIn for igual as 
    que estão presentes na api, então ele passará, 
    senão mostrará mensagem de erro.*/
    return new Promise((resolve, reject) => {
      axios
        .post("/api/home/login", { email, password })
        .then((response) => {
          if (response.data.user) {
            this.setUser(response.data.user);
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /* O primeiro parâmetro é uma key, e o segundo valor 
  é o valor que eu quero armazenar no meu navegador. */
  setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  /* É para obter o que foi colocado no localStorage,
  ou seja, o que foi digitado*/
  getUser = () => {
    const user = localStorage.getItem("user");
    return user;
  };

  isAuthenticated = () => !!this.getUser();
}
const authService = new AuthServices();

export default authService;
