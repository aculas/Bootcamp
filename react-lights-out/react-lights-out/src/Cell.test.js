import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

describe("Cell /> redering", function () {
  let container;

  beforeEach(function () {
    // add a TR to the document create by the test
    // to avovid warnings in the test outputs
    // about appending to a TD to a DIV
    let tr = document.createElement("tr");
    containter = document.body.appendChild(tr);
  });

  it("renders without crashing", function () {
    render(<Cell />, { container });
  });

  it("matches snapshot when lit", function () {
    const { asFragment } = render(<Cell isLit />, { container });
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot when not lit", function () {
    const { asFragment } = render(<Cell />, { container });
    expect(asFragment()).toMatchSnapshot();
  });
});
