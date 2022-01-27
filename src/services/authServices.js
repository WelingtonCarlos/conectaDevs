import axios from "../utils/axios";

class AuthServices {
  /* OUTRAS FUNÇÕES */

  signIn(email, password) {
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
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const authService = new AuthServices();

export default authService;
