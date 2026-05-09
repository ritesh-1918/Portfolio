"use client";

import {
  Button as HeroButton,
  type ButtonProps as HeroButtonProps,
} from "@heroui/react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HeroButtonProps, "size" | "variant"> {
  variant?: "default" | "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      isLoading,
      fullWidth,
      children,
      ...props
    },
    ref,
  ) => {
    // Map our variants to HeroUI variants
    const heroVariant = variant === "primary" ? "solid" : "flat";

    // Type-safe size mapping
    const heroSize: "sm" | "md" | "lg" = size;

    return (
      <HeroButton
        ref={ref}
        className={cn(
          // Base styles
          "rounded-full font-medium transition-all duration-200",
          // Color variants
          {
            "bg-primary text-primary-foreground hover:bg-primary/90":
              variant === "default",
            "bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "bg-transparent hover:bg-accent hover:text-accent-foreground":
              variant === "ghost",
            "underline-offset-4 hover:underline text-foreground":
              variant === "link",
          },
          // Loading state
          {
            "opacity-50 cursor-not-allowed": isLoading,
          },
          className,
        )}
        fullWidth={fullWidth}
        isDisabled={isLoading}
        size={heroSize}
        variant={heroVariant}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </div>
        ) : (
          children
        )}
      </HeroButton>
    );
  },
);

Button.displayName = "Button";

export { Button };
