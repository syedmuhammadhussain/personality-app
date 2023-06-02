import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
// import App from './App';
// import { Questions } from "./components/Questions";
import { Actions } from "./components/Actions";

test("next button should be disabled when `checked` and `isLast` prop is false with `isFirst` true", () => {
  render(
    <Router>
      <Actions state={{ checked: false, isLast: false, isFirst: true }} />
    </Router>
  );
  const buttonElement = screen.getByTestId("next-button");

  expect(buttonElement).toBeDisabled();
});

test("next button should be enabled when `checked` is true", () => {
  render(
    <Router>
      <Actions state={{ checked: true, isLast: false, isFirst: true }} />
    </Router>
  );
  const buttonElement = screen.getByTestId("next-button");

  expect(buttonElement).toBeEnabled()
});
