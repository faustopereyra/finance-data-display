import { shallow } from "enzyme";
import React from "react";
import PaginationController from "./pagination-controller.component";

it("expect to render PaginationController component", () => {
    expect(shallow(<PaginationController />)).toMatchSnapshot();
})