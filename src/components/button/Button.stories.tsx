import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  onClick: () => console.log("I have been clicked"),
};

export const SecondarRegularWithIcon = Template.bind({});
SecondarRegularWithIcon.args = {
  color: "secondary-light",
  icon: "anchor",
  width: "half",
  size: "regular",
  label: "Button",
  onClick: () => console.log("I have been clicked"),
};

export const TertiaryLargeIconRight = Template.bind({});
TertiaryLargeIconRight.args = {
  color: "tertiary",
  size: "large",
  icon: "anchor",
  iconRight: true,
  width: "full",
  label: "Button",
  onClick: () => console.log("I have been clicked"),
};

export const Loading = Template.bind({});
Loading.args = {
  color: "tertiary",
  loading: true,
};
