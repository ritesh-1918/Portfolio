import { Card } from "@heroui/react";
import { Snippet } from "@heroui/snippet";
import { Button } from "@heroui/button";
import { Badge } from "@heroui/react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  title?: string;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="my-8"
      initial={{ opacity: 0, y: 20 }}
    >
      <Card className="bg-black/50 backdrop-blur-xl border-white/10 overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {title && (
                <span className="text-sm font-mono text-white/60">{title}</span>
              )}
              <Badge
                className="bg-primary/10 text-primary border-primary/20"
                size="sm"
              >
                {language}
              </Badge>
            </div>
            <Button
              className="text-white/40 hover:text-white"
              color="default"
              size="sm"
              startContent={
                copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )
              }
              variant="ghost"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Snippet
            hideSymbol
            className="bg-black/50 w-full font-mono !p-4"
            color="default"
            variant="flat"
          >
            {code}
          </Snippet>
        </div>
      </Card>
    </motion.div>
  );
}
