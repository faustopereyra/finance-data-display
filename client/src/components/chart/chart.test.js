import { shallow } from "enzyme";
import React from "react";
import Chart from "./chart.component";

it("expect to render Chart component", () => {
    const mockData = [{ price: 101, date: "Sun Sep 09 2001 3:46:40 AM" }, { price: 101, date: "Sun Sep 09 2001 6:33:20 AM" }]
    expect(shallow(<Chart data={mockData} />)).toMatchSnapshot();
})