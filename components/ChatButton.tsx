import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const chatSuggestions = [
  {
    title: "Project Inquiry",
    suggestions: [
      "I need help with a web development project",
      "Can you build a mobile app?",
      "I'm looking for a UI/UX designer",
      "Need help with cloud infrastructure",
    ],
  },
  {
    title: "Quick Questions",
    suggestions: [
      "What's your development process?",
      "What technologies do you use?",
      "What are your rates?",
      "When can you start?",
    ],
  },
  {
    title: "Consultation",
    suggestions: [
      "Book a free consultation",
      "Schedule a video call",
      "Request a quote",
      "Technical audit request",
    ],
  },
];

export const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] hidden md:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute bottom-full right-0 mb-4"
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="w-80">
              <CardContent className="p-4">
                <div className="space-y-6">
                  {chatSuggestions.map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground font-mono">
                        {section.title}
                      </h3>
                      <div className="grid gap-1">
                        {section.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-secondary/50 transition-colors text-foreground hover:text-primary"
                            onClick={() => {
                              // Handle suggestion click
                              window.open(
                                `mailto:contact@example.com?subject=${encodeURIComponent(suggestion)}`,
                              );
                              setIsOpen(false);
                            }}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat suggestions"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          ) : (
            <path
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          )}
        </svg>
      </motion.button>
    </div>
  );
};
