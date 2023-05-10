import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverSurface,
  Button,
  PopoverProps,
} from "@fluentui/react-components";
import { QuestionCircle24Regular } from "@fluentui/react-icons";

type Props = Omit<PopoverProps, "children">;

export const Flyout: React.FC<Props> = (props) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>
        <Button id="button">Open</Button>
      </PopoverTrigger>
      <PopoverSurface>
        <div>AAAA</div>
        <div>
          <QuestionCircle24Regular />
        </div>
      </PopoverSurface>
    </Popover>
  );
};
