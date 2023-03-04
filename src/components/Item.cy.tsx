import React from "react";
import Item from "./Item";

const mockItem = { id: 12, created_at: "01-01-01", description: "Milk" };

describe("<Item />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Item item={mockItem} />);
  });
});
