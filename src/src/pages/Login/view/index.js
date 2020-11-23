import {
  Container,
  BackgroundImage,
  Title,
  Input,
  Button,
  Content,
  Logo,
} from "./styles";

import imageBackground from "../../../../assets/background.jpg";
import LogoDev from "../../../../assets/logo.svg";

import Proptypes from "prop-types";

const LoginView = ({ loginController }) => {
  return (
    <Container>
      <BackgroundImage src={imageBackground} />
      <form data-testid="form">
        <Title>LOGIN</Title>
        <div id="inputs">
          <Input
            data-testid="form-input-login"
            name="login"
            placeholder="Login"
            value={loginController.login}
            onChange={(e) => loginController.handleSetLogin(e)}
          />
          <Input
            data-testid="form-input-password"
            name="password"
            type="password"
            value={loginController.password}
            placeholder="Your Password"
            onChange={(e) => loginController.handleSetPassword(e)}
          />
          <div id="remember">
            <Input
              data-testid="form-input-checkbox"
              type="checkbox"
              onClick={(e) =>
                loginController.handleCheckRemember(e.target.checked)
              }
            />
            <span>Remember me</span>
          </div>
        </div>

        <div id="actions">
          {loginController.loading ? (
            <div id="elipse" data-testid="elipse">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <Button
              onClick={(e) => loginController.handleSubmit(e)}
              data-testid="form-submit-Button"
            >
              Login
            </Button>
          )}
        </div>
      </form>
      <Content data-testid="content">
        <h1>Welcome !</h1>
        <span>
          This page was created to demonstrate the skills in React Js, TDD and
          the MVC architectural standard. See what I'm saying in the source
          code. Have a good time !
          <a href="https://github.com/devluispereira">For Git</a>
        </span>
      </Content>
      <Logo
        data-testid="logo"
        src={LogoDev}
        onClick={() => loginController.redirectGit()}
      />
    </Container>
  );
};

LoginView.propType = {
  loginController: Proptypes.objectOf({
    login: Proptypes.string,
    password: Proptypes.string,
    handleSetLogin: Proptypes.func,
    handleSetPassword: Proptypes.func,
  }),
};
export { LoginView };
