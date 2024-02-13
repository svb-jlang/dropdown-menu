import { MenuItem } from ".";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    stateProp: {
      options: ["hover", "selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showTrailingicon: false,
    showCheckbox: false,
    showLeadingicon: false,
    text: "Menu Item",
    stateProp: "hover",
    destructive: true,
    disabled: true,
    className: {},
  },
};
