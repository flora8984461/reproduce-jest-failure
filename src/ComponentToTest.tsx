import {
  makeStyles,
  shorthands,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    ...shorthands.overflow("hidden"),
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    ...shorthands.border("2px", "solid", tokens.colorBrandBackground),
    ...shorthands.padding("20px", "10px", "10px", "10px"),
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      ...shorthands.padding("1px", "4px", "1px"),
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (
  props
) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  console.log("isVisible", isVisible);

  if (isVisible) {
    return null;
  }

  // As an union between button props and div props may be conflicting, casting is required
  return <MenuItem>Item {id}</MenuItem>;
};

export const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const ComponentToTest = () => {
  const styles = useStyles();

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {itemIds.map((i) => (
          <OverflowItem key={i} id={i}>
            <Button>Item {i}</Button>
          </OverflowItem>
        ))}

        <OverflowMenu itemIds={itemIds} />
      </div>
    </Overflow>
  );
};
