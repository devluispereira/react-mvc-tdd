import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "../index";
describe("Test page Login", () => {
  beforeEach(() => {
    cleanup();
  });

  describe("Test form", () => {
    it("should test Render Component", () => {
      const { queryByTestId } = render(<Login />);

      expect(queryByTestId("form")).toBeInTheDocument();
    });
    it("should test color form component", () => {
      const { queryByTestId } = render(<Login />);
      expect(queryByTestId("form")).toHaveStyle(
        "background:rgba(255, 255, 255, 0.8)"
      );
    });
  });

  describe("Test Inputs", () => {
    it("should test Render input Login Component", () => {
      const sut = render(<Login />);
      expect(sut.queryByTestId("form-input-login")).toBeInTheDocument();
    });
    it("should test Render input Password Component", () => {
      const sut = render(<Login />);
      expect(sut.queryByTestId("form-input-password")).toBeInTheDocument();
    });

    it("should test change component input login", () => {
      const sut = render(<Login />);
      const inputLogin = sut.queryByTestId("form-input-login");
      const mockEmail = "luis@email";
      fireEvent.change(inputLogin, { target: { value: mockEmail } });

      expect(inputLogin.value).toBe(mockEmail);
    });
    it("should test change component input password", () => {
      const sut = render(<Login />);
      const inputPassword = sut.queryByTestId("form-input-password");
      const mockPassword = "luis@email";
      fireEvent.change(inputPassword, { target: { value: mockPassword } });

      expect(inputPassword.value).toBe(mockPassword);
    });
  });

  describe("Test Button", () => {
    it("should test render Button", () => {
      const sut = render(<Login />);
      const button = sut.queryByTestId("form-submit-Button");

      expect(button).toBeInTheDocument();
    });

    it("should test click event Button", () => {
      const sut = render(<Login />);
      const button = sut.queryByTestId("form-submit-Button");

      fireEvent.click(button);

      expect(screen.queryByTestId("elipse")).toBeInTheDocument();
    });
  });

  describe("Test Checkbox", () => {
    it("should test render Checkbox", () => {
      const sut = render(<Login />);
      const checkbox = sut.queryByTestId("form-input-checkbox");

      expect(checkbox).toBeInTheDocument();
    });

    it("should test click event Checkbox", () => {
      const sut = render(<Login />);
      const checkbox = sut.queryByTestId("form-input-checkbox");

      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(true);

      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(false);
    });
  });
});
