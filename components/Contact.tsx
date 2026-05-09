"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Input, Textarea, Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import { Github, Linkedin, Instagram, Mail, MapPin, Send, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { siteConfig } from "@/data/config";

const services = [
  { label: "Web Development", value: "web-development" },
  { label: "Mobile App Development", value: "mobile-app-development" },
  { label: "UI/UX Design", value: "ui-ux-design" },
  { label: "Consulting", value: "consulting" },
  { label: "Code Review", value: "code-review" },
  { label: "Other", value: "other" },
];

const budgetRanges = [
  { label: "Less than $5,000", value: "less-than-5000" },
  { label: "$5,000 - $10,000", value: "5000-10000" },
  { label: "$10,000 - $20,000", value: "10000-20000" },
  { label: "$20,000 - $50,000", value: "20000-50000" },
  { label: "More than $50,000", value: "more-than-50000" },
];

const ContactSuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className="bg-black/90 rounded-xl w-full max-w-lg p-8 border border-primary/20 relative overflow-hidden"
            exit={{ scale: 0.9, opacity: 0 }}
            initial={{ scale: 0.9, opacity: 0 }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />

            {/* Success Icon */}
            <div className="relative flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <motion.div
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Success Message */}
            <div className="relative text-center mb-8">
              <h3 className="text-2xl font-bold font-grotesk mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Message Sent Successfully!
              </h3>
              <p className="text-muted-foreground font-mono">
                Thank you for reaching out. I&apos;ll get back to you within
                24-48 hours.
              </p>
            </div>

            {/* Timeline Indicators */}
            <div className="relative mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-sm font-mono text-muted-foreground mb-1">
                    Response Time
                  </p>
                  <p className="font-grotesk text-primary">24-48 hours</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-sm font-mono text-muted-foreground mb-1">
                    Status
                  </p>
                  <p className="font-grotesk text-primary">Processing</p>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="relative">
              <Button
                className="w-full"
                size="lg"
                variant="primary"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Contact = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          service_type: formData.service || "Not specified",
          budget_range: formData.budget || "Not specified",
          timeline: formData.timeline || "Not specified",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccessModalOpen(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        setFormError("Something went wrong. Please try again or email directly.");
      }
    } catch {
      setFormError("Network error. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-black" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.05])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.05])_1px,transparent_1px)] bg-[size:4rem_4rem] dark:opacity-20 opacity-10" />
      </div>

      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-grotesk mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Have a project in mind? Fill out the form below and I&apos;ll get
              back to you within 24-48 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {/* Contact Info Cards */}
              <div className="space-y-6 mb-8">
                <a 
                  href="mailto:bonthalamadhavi1@gmail.com?subject=Project Inquiry &body=Hi Ritesh,%0D%0A%0D%0AI'm interested in working with you on a project. Here are some details:%0D%0A%0D%0A[Describe your project here]%0D%0A%0D%0ABest regards,"
                  className="block group"
                >
                  <Card className="bg-[#111111] border-white/5 overflow-hidden group-hover:border-primary/30 transition-all duration-300">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/70 mb-1">
                          Direct Email
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg font-bold font-grotesk text-white group-hover:text-primary transition-colors">
                          bonthalamadhavi1@gmail.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <Card className="bg-[#111111] border-white/5 overflow-hidden">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-xl bg-blue-500/10 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                        <path
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-500/70 mb-1">
                        Current Location
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-bold font-grotesk text-white">
                        Visakhapatnam, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>
                    Tell me about your project and requirements
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    {formError && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono">
                        {formError}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        isRequired
                        classNames={{
                          input: "bg-background dark:bg-background",
                          label: "text-foreground dark:text-foreground",
                          inputWrapper: "border-border",
                        }}
                        label="Name"
                        placeholder="Your name"
                        radius="lg"
                        type="text"
                        value={formData.name}
                        variant="bordered"
                        onValueChange={(val) => handleChange("name", val)}
                      />
                      <Input
                        isRequired
                        classNames={{
                          input: "bg-background dark:bg-background",
                          label: "text-foreground dark:text-foreground",
                          inputWrapper: "border-border",
                        }}
                        label="Email"
                        placeholder="your@email.com"
                        radius="lg"
                        type="email"
                        value={formData.email}
                        variant="bordered"
                        onValueChange={(val) => handleChange("email", val)}
                      />
                    </div>

                    <Input
                      classNames={{
                        input: "bg-background dark:bg-background",
                        label: "text-foreground dark:text-foreground",
                        inputWrapper: "border-border",
                      }}
                      label="Company"
                      placeholder="Your company name (optional)"
                      radius="lg"
                      type="text"
                      value={formData.company}
                      variant="bordered"
                      onValueChange={(val) => handleChange("company", val)}
                    />

                    <Select
                      classNames={{
                        trigger:
                          "bg-background dark:bg-background border-border",
                        label: "text-foreground dark:text-foreground",
                        value: "text-foreground dark:text-foreground",
                      }}
                      label="Service Type"
                      placeholder="Select a service"
                      radius="lg"
                      selectedKeys={formData.service ? [formData.service] : []}
                      variant="bordered"
                      onSelectionChange={(keys) => {
                        const selected = Array.from(keys)[0] as string;
                        handleChange("service", selected || "");
                      }}
                    >
                      {services.map((service) => (
                        <SelectItem key={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <Select
                      classNames={{
                        trigger:
                          "bg-background dark:bg-background border-border",
                        label: "text-foreground dark:text-foreground",
                        value: "text-foreground dark:text-foreground",
                      }}
                      label="Budget Range"
                      placeholder="Select your budget"
                      radius="lg"
                      selectedKeys={formData.budget ? [formData.budget] : []}
                      variant="bordered"
                      onSelectionChange={(keys) => {
                        const selected = Array.from(keys)[0] as string;
                        handleChange("budget", selected || "");
                      }}
                    >
                      {budgetRanges.map((range) => (
                        <SelectItem key={range.value}>{range.label}</SelectItem>
                      ))}
                    </Select>

                    <Input
                      classNames={{
                        input: "bg-background dark:bg-background",
                        label: "text-foreground dark:text-foreground",
                        inputWrapper: "border-border",
                      }}
                      label="Timeline"
                      placeholder="Expected project timeline"
                      radius="lg"
                      type="text"
                      value={formData.timeline}
                      variant="bordered"
                      onValueChange={(val) => handleChange("timeline", val)}
                    />

                    <Textarea
                      isRequired
                      classNames={{
                        input: "bg-background dark:bg-background",
                        label: "text-foreground dark:text-foreground",
                        inputWrapper: "border-border",
                      }}
                      label="Project Description"
                      minRows={4}
                      placeholder="Tell me about your project, goals, and any specific requirements"
                      radius="lg"
                      value={formData.message}
                      variant="bordered"
                      onValueChange={(val) => handleChange("message", val)}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      isLoading={isSubmitting}
                      size="lg"
                      type="submit"
                      variant="primary"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>

            {/* Map and Social Links */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.1428380970484!2d83.23113881166115!3d17.685252767828086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3969c848c3d059%3A0x47082f901f3f7036!2s65-31514%2F1%2C%20Ex-Service%20Men%20Colony%2C%20Gajuwaka%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530011!5e1!3m2!1sen!2sin!4v1777660860524!5m2!1sen!2sin"
                  title="Location"
                />
              </div>

              {/* Social Links Below Map */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-grotesk font-bold mb-4">
                    Let&apos;s Connect
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <a
                      className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#1A1A1A] hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                      href={siteConfig.contact.socialLinks.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Github className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                      <span className="font-mono text-sm text-white/70 group-hover:text-white transition-colors">
                        GitHub
                      </span>
                    </a>
                    <a
                      className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#1A1A1A] hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                      href={siteConfig.contact.socialLinks.linkedin}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Linkedin className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                      <span className="font-mono text-sm text-white/70 group-hover:text-white transition-colors">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#1A1A1A] hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                      href={siteConfig.contact.socialLinks.instagram}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Instagram className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                      <span className="font-mono text-sm text-white/70 group-hover:text-white transition-colors">
                        Instagram
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <ContactSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </section>
  );
};
