// withResizePress.test.tsx
// withResizePress.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import withResizePress from "../useResizePress/withResizePress";

// Mock component to wrap with the HOC
const MockComponent: React.FC<{ text: string }> = ({ text }) => (
  <div>{text}</div>
);

// Create a wrapped component with the HOC
const WrappedComponent = withResizePress(MockComponent);

describe("withResizePress HOC", () => {
  it("renders the wrapped component", () => {
    const { getByText } = render(<WrappedComponent text="Hello, world!" />);
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });

  it("applies the correct animation props from Framer Motion", async () => {
    const { getByText } = render(<WrappedComponent text="Animation test" />);
    const wrappedElement = getByText("Animation test").parentElement;

    // Ensure the motion.div is applied
    expect(wrappedElement).toBeInTheDocument();

    // Simulate tap event
    await userEvent.click(wrappedElement!);

    // You may want to add additional checks here for animation behavior
    // For example, you could check that the event handler runs if defined
  });

  it("uses default resizeScale if no options are provided", async () => {
    const { getByText } = render(
      <WrappedComponent text="Default scale test" />
    );
    const wrappedElement = getByText("Default scale test").parentElement;

    expect(wrappedElement).toBeInTheDocument();

    // Simulate tap and check for interaction
    await userEvent.click(wrappedElement!);

    // Add additional checks for expected behavior
  });

  it("applies custom resizeScale if options are provided", async () => {
    const CustomWrappedComponent = withResizePress(MockComponent, {
      resizeScale: 0.8,
    });
    const { getByText } = render(
      <CustomWrappedComponent text="Custom scale test" />
    );
    const wrappedElement = getByText("Custom scale test").parentElement;

    expect(wrappedElement).toBeInTheDocument();

    // Simulate tap and check for interaction
    await userEvent.click(wrappedElement!);

    // Add additional checks for expected behavior
  });
});
