import { LoginController } from "./controllers/login.controller";
import { LoginView } from "./view";

const Login = () => {
  const controller = new LoginController();
  return <LoginView loginController={controller} />;
};

export { Login };
