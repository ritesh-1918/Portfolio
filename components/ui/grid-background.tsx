import React from "react";

import { cn } from "@/lib/utils";

export function GridBackground({
  children,
  height = "min-h-screen",
}: {
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-white dark:bg-black",
        height,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-75",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      {children}
    </div>
  );
}
