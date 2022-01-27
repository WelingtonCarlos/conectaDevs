import mock from "../utils/mock";

/* mock.onPost("/api/home/login").reply(200, {
  id: 1,
  username: "welingtoncarlos",
  email: "wcfilho98@hotmail.com",
}); */

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "wcfilho98@hotmail.com" || password !== "admin") {
    return [
      400,
      { message: "E-mail ou senha não coincidem com um usuário registrado" },
    ];
  }

  const user = {
    id: 1,
    name: "Welington Filho",
    username: "welington.filho",
    email: "wcfilho98@hotmail.com",
  };

  return [200, { user }];

  return [200, {}];
});
