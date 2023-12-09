import { Meta, StoryObj } from "@storybook/react";
import { WidgetRow } from "./WidgetRow";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { argTypesVariant } from "../stories/variantStories";

const meta: Meta<typeof WidgetRow> = {
  title: "Widget/Row",
  component: WidgetRow,
  tags: ["autodocs"],
  argTypes: { ...argTypesVariant },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "default args is Text",
  },
};
export const WithIcon: Story = {
  args: {
    children: "je suis le children",
    icon: <UserOutlined />,
  },
};
export const WithDescription: Story = {
  args: {
    children: "je suis le children",
    description: "Je suis un description",
  },
};

export const WithDescriptionAndIcon: Story = {
  args: {
    children: "je suis le children",
    icon: <UserOutlined />,
    description: "Je suis un description",
  },
};

export const WithExtra: Story = {
  args: {
    children: "je suis le children",
    icon: <UserOutlined />,
    description: "Je suis un description",
    extra: <SettingOutlined />,
  },
};
