import Button from "./button";
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
};

export const Default = {
  args:{
    children:"Button",
    variant:"ghost",
  },
};

export const Primary = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Destructive = {
  args: {
    children: "Destructive Button",
    variant: "destructive",
  },
};

export const Outline = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Ghost = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

export const Disabled = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const WithIcon = {
  args: {
    children: "Button with Icon",
    icon: <span>🚀</span>,
  },
};

export const IconOnly = {
  args: {
    icon: <span>🎨</span>,
  },
};
