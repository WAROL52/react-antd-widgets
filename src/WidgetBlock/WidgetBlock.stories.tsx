import { Meta, StoryObj } from "@storybook/react";
import { WidgetBlock, WidgetBlockProps } from "./WidgetBlock";
import { argTypesVariant } from "../stories/variantStories";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Button } from "antd";

const meta: Meta<typeof WidgetBlock> = {
  title: "Widget/Block",
  tags: ["autodocs"],
  component: WidgetBlock,
  argTypes: {
    ...argTypesVariant,
    type: {
      defaultValue: "div",
      control: "inline-radio",
      options: ["div", "card", "modal", "drawer"],
    },
  },
  args: {
    onClose: undefined,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    open: true,
    children: "default args is Text",
  },
};

export const WithTitle: Story = {
  args: {
    open: true,
    title: "Je suis un titre",
    children: "default args is Text",
  },
};

export const WithIcon: Story = {
  args: {
    open: true,
    title: "Je suis un titre",
    children: "default args is Text",
    icon: <UserOutlined />,
  },
};
export const WithDescription: Story = {
  args: {
    open: true,
    title: "Je suis un titre",
    children: "default args is Text",
    description: "je suis un description",
    icon: <UserOutlined />,
  },
};
export const WithExtra: Story = {
  args: {
    open: true,
    title: "Je suis un titre",
    children: "default args is Text",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam ad nemo, unde incidunt nostrum impedit, quibusdam laudantium culpa cupiditate provident ipsa quae? Voluptatibus quia enim nam doloribus beatae in!",
    icon: <UserOutlined />,
    extra: <SettingOutlined />,
  },
};
export const Card: Story = {
  args: {
    open: true,
    type: "card",
    title: "Je suis un titre",
    children: "default args is Text",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam ad nemo, unde incidunt nostrum impedit, quibusdam laudantium culpa cupiditate provident ipsa quae? Voluptatibus quia enim nam doloribus beatae in!",
    icon: <UserOutlined />,
    extra: <SettingOutlined />,
  },
};
function TemplateForPanel(props: WidgetBlockProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen((o) => !o)}>
        {!open ? "Ouvrir" : "Fermer"}
      </Button>
      <WidgetBlock
        description="je suis le description"
        title="Je suis un titre"
        icon={<UserOutlined />}
        extra={<SettingOutlined />}
        {...props}
        onClose={() => setOpen(false)}
        open={open}
      >
        default args is Text
      </WidgetBlock>
    </>
  );
}

export const Closable: Story = {
  render: TemplateForPanel,
};
export const Modal: Story = {
  render: TemplateForPanel,
  args: {
    type: "modal",
  },
};
export const Drawer: Story = {
  render: TemplateForPanel,
  args: {
    type: "drawer",
  },
};
export const Resizable: Story = {
  render: TemplateForPanel,
  args: {
    type: "div",
    resizable: true,
  },
};
export const ResizableForModal: Story = {
  render: TemplateForPanel,
  args: {
    type: "modal",
    resizable: true,
  },
};
export const ResizableForDrawer: Story = {
  render: TemplateForPanel,
  args: {
    type: "drawer",
    resizable: true,
  },
};
export const ResizableMakecopy: Story = {
  render: TemplateForPanel,
  args: {
    type: "div",
    resizable: "makeCopy",
  },
};
export const ResizableMakecopyForDrawer: Story = {
  render: TemplateForPanel,
  args: {
    type: "drawer",
    resizable: "makeCopy",
  },
};
export const ResizableMakecopyForModal: Story = {
  render: TemplateForPanel,
  args: {
    type: "modal",
    resizable: "makeCopy",
  },
};
