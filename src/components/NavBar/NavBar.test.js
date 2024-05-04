import React from "react";
import { render, cleanup } from "@testing-library/react";
import NavBar from "./NavBar";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<NavBar />);
  expect(asFragment(<NavBar />)).toMatchSnapshot();
});
