import {
  Code2,
  Layers3,
  LayoutTemplate,
  MonitorSmartphone,
  MousePointer2,
} from "lucide-react";

export const services = [
  {
    value: "ui-ux-design",
    name: "UI/UX Design",
    icon: MousePointer2,
    description:
      "Creating clear and user-friendly interfaces based on the project’s users, goals, and requirements.",
    deliverables: [
      "User flows",
      "Wireframes",
      "Interface designs",
      "Interactive prototypes",
      "Design revisions",
    ],
  },
  {
    value: "front-end-development",
    name: "Front-End Development",
    icon: Code2,
    description:
      "Building responsive and interactive web interfaces using React and Tailwind CSS.",
    deliverables: [
      "React pages",
      "Reusable components",
      "Responsive layouts",
      "Interactive interfaces",
      "Front-end improvements",
    ],
  },
  {
    value: "website-redesign",
    name: "Website Redesign",
    icon: LayoutTemplate,
    description:
      "Improving outdated or confusing websites through better layout, navigation, responsiveness, and visual hierarchy.",
    deliverables: [
      "Interface review",
      "Updated page layout",
      "Navigation improvements",
      "Mobile responsiveness",
      "Visual redesign",
    ],
  },
  {
    value: "responsive-web-design",
    name: "Responsive Web Design",
    icon: MonitorSmartphone,
    description:
      "Creating website layouts that remain clear and usable across mobile, tablet, laptop, and desktop screens.",
    deliverables: [
      "Mobile-first layouts",
      "Responsive components",
      "Tablet and desktop adjustments",
      "Cross-device testing",
      "Accessibility improvements",
    ],
  },
  {
    value: "design-to-code",
    name: "Design to Code",
    icon: Layers3,
    description:
      "Converting an approved interface design or prototype into a functional and responsive React page.",
    deliverables: [
      "React implementation",
      "Tailwind CSS styling",
      "Reusable components",
      "Responsive behavior",
      "Basic interactions",
    ],
  },
];

export const serviceOptions = [
  ...services.map(({ value, name }) => ({ value, name })),
  { value: "other", name: "Other" },
];
