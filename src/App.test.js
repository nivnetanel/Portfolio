import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders intro heading", () => {
  render(<App />);
  expect(screen.getByText(/I'm Niv Netanel/i)).toBeInTheDocument();
});

test("renders portfolio section", () => {
  render(<App />);
  expect(screen.getByText(/From concept to deployment/i)).toBeInTheDocument();
});
