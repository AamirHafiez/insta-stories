import Row from "@/components/molecules/row/Row";
import React, { useMemo, Children } from "react";
import { StoryRowProps } from "./types";
import Spacer from "@/components/atoms/spacer/Spacer";

function StoryRow(props: StoryRowProps) {
  const allChildren = useMemo(
    () => Children.map(props.children, (_, index) => index),
    []
  );
  const length = allChildren?.length ?? 0;

  return (
    <Row className="w-screen overflow-x-auto no-scrollbar p-4">
      {Children.map(props.children, (child, index) => {
        return (
          <Row className="m-0">
            {index !== 0 && <Spacer />}
            {child}
            {index !== length - 1 && <Spacer />}
          </Row>
        );
      })}
    </Row>
  );
}

export default StoryRow;
