import React from "react";

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building modern, responsive web applications with cutting-edge technologies and best practices. Specializing in React, Next.js, and TypeScript.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    ),
    size: "large",
  },
  {
    id: "ui-design",
    title: "UI/UX Design",
    description:
      "Crafting beautiful and intuitive user interfaces that delight users. Focus on accessibility, performance, and modern design principles.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    ),
    size: "medium",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Creating native and cross-platform mobile applications using React Native and Flutter. Expertise in iOS and Android development.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    ),
    size: "medium",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description:
      "Deploying and managing scalable cloud infrastructure using AWS, Azure, and GCP. Expertise in serverless architecture and DevOps.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    ),
    size: "medium",
  },
  {
    id: "api-development",
    title: "API Development",
    description:
      "Building robust and scalable APIs using GraphQL, REST, and tRPC. Focus on performance, security, and developer experience.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    ),
    size: "small",
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description:
      "Strategic technology consulting and architecture design. Helping businesses make informed decisions about their tech stack.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    ),
    size: "small",
  },
];
