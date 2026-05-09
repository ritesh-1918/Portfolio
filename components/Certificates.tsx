"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Cpu, Brain, Globe, Eye, X } from "lucide-react";
import { Card, CardBody, Chip, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { certificates } from "@/data/certificates";

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "AI": return <Brain size={18} className="text-emerald-400" />;
    case "Hardware": return <Cpu size={18} className="text-blue-400" />;
    case "Full-Stack": return <Globe size={18} className="text-purple-400" />;
    default: return <Award size={18} className="text-primary" />;
  }
};

export const Certificates = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const handlePreview = (cert: typeof certificates[0]) => {
    setSelectedCert(cert);
    onOpen();
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="certificates">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            className="text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Credentials
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-grotesk"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Certifications
          </motion.h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            A curated selection of my most significant technical credentials and industry-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#111111] border border-white/5 hover:border-primary/30 transition-all duration-500 group h-full">
                <CardBody className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                        <CategoryIcon category={cert.category} />
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handlePreview(cert)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-white/50 hover:text-primary transition-all"
                          title="View Certificate"
                        >
                          <Eye size={18} />
                        </button>
                        <Chip 
                          size="sm" 
                          variant="flat" 
                          className="bg-white/5 text-white/50 border-white/10 font-mono"
                        >
                          {cert.date}
                        </Chip>
                      </div>
                    </div>

                    {/* Image Preview Thumbnail */}
                    <div 
                      className="relative h-48 w-full mb-6 rounded-xl overflow-hidden border border-white/5 group-hover:border-primary/20 cursor-pointer"
                      onClick={() => handlePreview(cert)}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                          <Eye className="text-primary" size={24} />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold font-grotesk mb-2 text-white group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary/90 font-medium mb-4">{cert.issuer}</p>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {cert.verifyUrl ? (
                    <a 
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-white/40 hover:text-white transition-colors mt-auto group/link"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button 
                      onClick={() => handlePreview(cert)}
                      className="flex items-center gap-2 text-sm font-mono text-white/40 hover:text-white transition-colors mt-auto group/link"
                    >
                      <span>View Full Certificate</span>
                      <Eye size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          size="4xl"
          backdrop="blur"
          className="bg-[#111111] border border-white/10 m-2 sm:m-4"
          scrollBehavior="inside"
          placement="center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 pr-12">
                  <h3 className="text-xl sm:text-2xl font-bold font-grotesk text-white">
                    {selectedCert?.title}
                  </h3>
                  <p className="text-sm font-mono text-primary/80">
                    {selectedCert?.issuer} • {selectedCert?.date}
                  </p>
                </ModalHeader>
                <ModalBody className="pb-8 px-2 sm:px-6">
                  <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/5">
                    {selectedCert && (
                      <Image
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        fill
                        className="object-contain sm:object-cover md:object-contain bg-black/40"
                        priority
                      />
                    )}
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};
