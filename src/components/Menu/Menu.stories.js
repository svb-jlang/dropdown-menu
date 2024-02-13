import { Menu } from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    count: {
      options: ["seven", "two", "ten", "three", "nine", "four", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    count: "seven",
    className: {},
  },
};
