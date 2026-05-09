"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Lock } from "lucide-react";


interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  price: number;
  productTitle: string;
}

export const PaymentModal = ({
  isOpen,
  onClose,
  onSuccess,
  price,
  productTitle,
}: PaymentModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300); // Match exit animation duration

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onMouseMove={(e) => {
            if (isMounted) {
              const event = new MouseEvent("mousemove", {
                bubbles: true,
                clientX: e.clientX,
                clientY: e.clientY,
              });

              document.dispatchEvent(event);
            }
          }}
        >
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className="bg-black/90 rounded-xl w-full max-w-lg p-8 border border-primary/20 relative overflow-hidden"
            exit={{ scale: 0.9, opacity: 0 }}
            initial={{ scale: 0.9, opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />

            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Complete Purchase</h3>
                <p className="text-white/60">
                  {"You're about to purchase "}
                  {productTitle}
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    className="block text-sm font-medium text-white/60 mb-2"
                    htmlFor="cardNumber"
                  >
                    Card Number
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-white/30"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    type="text"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-white/60 mb-2"
                      htmlFor="expiryDate"
                    >
                      Expiry Date
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-white/30"
                      id="expiryDate"
                      placeholder="MM/YY"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-white/60 mb-2"
                      htmlFor="cvc"
                    >
                      CVC
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-white/30"
                      id="cvc"
                      placeholder="123"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-white/10">
                  <span className="text-white/60">Total Amount</span>
                  <span className="text-2xl font-bold">${price}</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    className="flex-1 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                    type="button"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex-1 px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isProcessing}
                    type="submit"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
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
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" />
                        Pay Now
                      </span>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-white/40">
                  Your payment information is encrypted and secure. We never
                  store your card details.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
