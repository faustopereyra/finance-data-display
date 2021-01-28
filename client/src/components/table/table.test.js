import { shallow } from "enzyme";
import React from "react";
import Table from "./table.component";

it("expect to render Table component", () => {
    expect(shallow(<Table />)).toMatchSnapshot();
})