import { shallow } from "enzyme";
import React from "react";
import ListData from "./list-data.component";

it("expect to render ListData component", () => {
    expect(shallow(<ListData />)).toMatchSnapshot();
})