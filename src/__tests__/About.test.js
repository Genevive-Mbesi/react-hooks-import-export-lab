import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("it is exported as a default export", () => {
  try {
    expect(() => render(<About />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
