import { render, screen } from "@testing-library/react";
import App from "./App";

xdescribe("test of App component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/A & E/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should have carousel", () => {
    render(<App />);
    screen.getAllByText(/First slide/i);
  });

  it("should have navbar", () => {
    render(<App />);
    screen.getAllByText(/NavBar/i);
  });

  it("should have header", () => {
    render(<App />);
    screen.getAllByText(/Header/i);
  });

  it("should have footer", () => {
    render(<App />);
    screen.getAllByText(/Footer/i);
  });
});
