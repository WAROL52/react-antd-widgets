import { Meta, StoryObj } from "@storybook/react";
import { WidgetForm } from "./WidgetForm";
import { argTypesVariant } from "../stories/variantStories";
import { Field } from "./Fields";

const meta: Meta<typeof WidgetForm> = {
  title: "Widget/Form",
  tags: ["autodocs"],
  component: WidgetForm,
  argTypes: {
    ...argTypesVariant,
  },
  args: {
    onClose: undefined,
    onFinish: (value) => alert(JSON.stringify(value, null, 2)),
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const FormLayout: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const FormDisabled: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const FormSize: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const WatchHooks: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const ValidateTrigger: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const ValidateOnly: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const PathPrefix: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const RequiredStyle: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const FormList: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const ComplexFormList: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const ControlBetweenForms: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const LoginForm: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const RegisterForm: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};

export const DynamicRules: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
export const CustomzedValidation: Story = {
  args: {
    children: (
      <>
        <Field.Text label="Username" name="Username" required />
        <Field.Password label="Password" name="Password" required />
        <Field.Checkbox name="remember" label="Remember me" />
        <Field.SubmitButon />
      </>
    ),
  },
};
