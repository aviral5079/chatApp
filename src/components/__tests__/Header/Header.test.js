import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import ChatInput from "../../ChatInput";
import Header from "../../Header";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("should render header component", () => {
  render(<Header />);

  var textElem = screen.getByTestId("text");

  expect(textElem).toBeInTheDocument();
});

test("text matches snapshot", () => {
  const component = renderer.create(<Header />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("header text changes after clicking submit button", () => {
  const { getByTestId } = render(<Header />);
  const { getByTestId: getByTestId2 } = render(<ChatInput />);

  fireEvent.change(getByTestId2("input"), {
    target: { value: "How are you today?" },
  });
  fireEvent.click(getByTestId2("submit"));

  expect(getByTestId("text")).toHaveTextContent("How are you today?");
});
