import { shallow } from "enzyme";
import React from "react";
import ViewData from "./view-data.component";

it("expect to render ViewData component", () => {
    expect(shallow(<ViewData />)).toMatchSnapshot();
})