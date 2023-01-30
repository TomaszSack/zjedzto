import { render } from "@testing-library/react";
import Button from "components/Button";

test("should have pink background", () => {
  const { getByText } = render(<Button pink>test</Button>);
  expect(getByText("test").closest("a")).toHaveClass("bg-secondary-pink");
});

test("should have orange background", () => {
  const { getByText } = render(<Button>test</Button>);
  expect(getByText("test").closest("a")).toHaveClass("bg-secondary-orange");
});

test("should have white background", () => {
  const { getByText } = render(<Button cancel>test</Button>);
  expect(getByText("test").closest("a")).toHaveClass("bg-white");
});
