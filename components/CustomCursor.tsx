"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

interface CustomCursorProps {
  className?: string;
}

export const CustomCursor = ({ className }: CustomCursorProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handlePointerElements = () => {
      const buttons = document.querySelectorAll(
        'button, a, input, textarea, [role="button"], [role="link"]',
      );
      const textElements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, span",
      );

      const handleButtonEnter = () => setIsPointer(true);
      const handleButtonLeave = () => setIsPointer(false);
      const handleTextEnter = () => setIsText(true);
      const handleTextLeave = () => setIsText(false);

      buttons.forEach((el) => {
        el.addEventListener("mouseenter", handleButtonEnter);
        el.addEventListener("mouseleave", handleButtonLeave);
      });

      textElements.forEach((el) => {
        el.addEventListener("mouseenter", handleTextEnter);
        el.addEventListener("mouseleave", handleTextLeave);
      });

      return () => {
        buttons.forEach((el) => {
          el.removeEventListener("mouseenter", handleButtonEnter);
          el.removeEventListener("mouseleave", handleButtonLeave);
        });
        textElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleTextEnter);
          el.removeEventListener("mouseleave", handleTextLeave);
        });
      };
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const cleanup = handlePointerElements();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cleanup();
    };
  }, [cursorX, cursorY]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <motion.div
        className={cn(
          "pointer-events-none z-[1000] mix-blend-difference will-change-transform",
          className,
        )}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0,
          position: "fixed",
        }}
      >
        <div className="relative">
          {/* Main cursor */}
          <motion.div
            animate={{
              scale: isPointer ? 2 : isText ? 0.5 : 1,
              opacity: isPointer ? 0.5 : 1,
            }}
            className="w-8 h-8 bg-white rounded-full"
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
              mass: 0.5,
            }}
          />

          {/* Outer ring */}
          <motion.div
            animate={{
              scale: isPointer ? 1.5 : isText ? 2 : [1, 1.2, 1],
              opacity: isPointer ? 0.2 : isText ? 0.1 : 0.3,
            }}
            className="absolute inset-0 border border-white rounded-full"
            transition={
              isPointer || isText
                ? { type: "spring", damping: 20, stiffness: 200, mass: 0.5 }
                : { duration: 2, repeat: Infinity }
            }
          />

          {/* Additional ring for text */}
          {isText && (
            <motion.div
              animate={{
                scale: 2.5,
                opacity: 0.05,
              }}
              className="absolute inset-0 border border-white rounded-full"
              initial={{ scale: 1, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                mass: 0.5,
              }}
            />
          )}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }

        ::selection {
          background: rgba(255, 255, 255, 0.1);
          color: inherit;
        }
      `}</style>
    </>
  );
};
