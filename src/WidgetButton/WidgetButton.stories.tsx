import { Meta, StoryObj } from "@storybook/react";
import { WidgetButton } from "./WidgetButton";
import { argTypesVariant } from "../stories/variantStories";
import { UserOutlined } from "@ant-design/icons";

const meta: Meta<typeof WidgetButton> = {
  title: "Widget/Button",
  tags: ["autodocs"],
  component: WidgetButton,
  argTypes: {
    ...argTypesVariant,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "default args is Text",
  },
};
export const Icon: Story = {
  args: {
    children: "default args is Text",
    icon: <UserOutlined />,
  },
};
export const Primary: Story = {
  args: {
    children: "default args is Text",
    type: "primary",
  },
};
export const Dashed: Story = {
  args: {
    children: "default args is Text",
    type: "dashed",
  },
};
export const Link: Story = {
  args: {
    children: "je suis un lien",
    type: "link",
    href: "https://github.com/WAROL52",
    target: "_blank",
  },
};
export const Text: Story = {
  args: {
    children: "je suis un Text",
    type: "text",
  },
};
export const Danger: Story = {
  args: {
    children: "je suis un Text",
    danger: true,
  },
};
export const Confirm: Story = {
  args: {
    children: "Confirmer",
    confirmProps: {
      title: "Confirmation",
      cancelText: "Annuler",
      description: "Voulez vous confirmer votre action ?",
      okText: "Valider",
    },
  },
};
export const Popover: Story = {
  args: {
    children: "Confirmer",
    popoverProps: {
      title: "Titre",
      content: "Je suis le contenue!",
    },
  },
};
export const ConfirmAndPopover: Story = {
  args: {
    children: "Confirmer",
    confirmProps: {
      title: "Confirmation",
      cancelText: "Annuler",
      description: "Voulez vous confirmer votre action ?",
      okText: "Valider",
    },
    popoverProps: {
      title: "Titre",
      content: "Je suis le contenue!",
    },
  },
};
export const Tooltip: Story = {
  args: {
    children: "Confirmer",
    tooltipProps: {
      title: "Je suis un Tooltip",
      color: "blue",
    },
  },
};
