"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Check,
  Code,
  Palette,
  Zap,
  Shield,
  X,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  Search,
  Filter,
} from "lucide-react";
import { Chip } from "@heroui/react";

import { PaymentModal } from "@/components/PaymentModal";
import { GridBackground } from "@/components/ui/grid-background";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  techStack: string[];
  rating: number;
  sales: number;
  author: {
    name: string;
    image: string;
    role: string;
  };
  demoUrl: string;
  previewImages: string[];
}
const products: Product[] = [];

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onPurchase: (product: Product) => void;
}

const PreviewModal = ({
  isOpen,
  onClose,
  product,
  onPurchase,
}: PreviewModalProps) => {
  if (!isOpen || !product) return null;

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
            className="bg-black/90 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-white/10 relative"
            exit={{ scale: 0.9, opacity: 0 }}
            initial={{ scale: 0.9, opacity: 0 }}
          >
            <div className="sticky top-0 bg-black/90 backdrop-blur-sm z-10 flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="px-3 py-1 text-sm font-medium bg-primary text-black rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/60">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{product.rating}</span>
                      <span>({product.sales} sales)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  onClick={onClose}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                    <Image
                      alt={product.title}
                      className="object-cover w-full h-full"
                      height={450}
                      src={product.previewImages[0]}
                      width={800}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {product.previewImages.slice(1).map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-video rounded-xl overflow-hidden border border-white/10"
                      >
                        <Image
                          alt={`${product.title} preview ${idx + 2}`}
                          className="object-cover w-full h-full"
                          height={169}
                          src={img}
                          width={300}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Image
                      alt={product.author.name}
                      className="rounded-full ring-2 ring-white/10"
                      height={48}
                      src={product.author.image}
                      width={48}
                    />
                    <div>
                      <div className="font-medium text-white">
                        {product.author.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {product.author.role}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      About This Template
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium bg-white/5 text-white/70 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <h4 className="text-lg font-semibold mb-2 text-primary">
                      Get Started Today
                    </h4>
                    <p className="text-white/70 mb-4">
                      Purchase this template now and start building your amazing
                      project with our well-documented and easy-to-customize
                      code.
                    </p>
                    <button
                      className="w-full px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      onClick={() => {
                        onClose();
                        onPurchase(product);
                      }}
                    >
                      Purchase for ${product.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const OrderSuccessModal = ({
  isOpen,
  onClose,
  product,
}: OrderSuccessModalProps) => {
  if (!isOpen || !product) return null;

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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />

            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Order Successful!</h3>
                <p className="text-white/60">
                  Thank you for purchasing {product.title}
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/80">
                        {product.title}
                      </h4>
                      <p className="text-sm text-white/40">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Order ID</span>
                      <span className="font-mono">
                        #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Date</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Amount</span>
                      <span className="font-bold text-lg">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <h4 className="font-medium text-primary mb-2">
                    What&apos;s Next?
                  </h4>
                  <p className="text-sm text-white/60 mb-4">
                    You&apos;ll receive an email with download instructions and
                    access to your purchase shortly.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Instant access to files</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    className="flex-1 px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    onClick={onClose}
                  >
                    Continue Shopping
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const categories = [
  {
    name: "UI Templates",
    icon: Zap,
    count: 24,
    description: "Modern and responsive UI templates",
  },
  {
    name: "Components",
    icon: ShoppingBag,
    count: 48,
    description: "Reusable UI components and patterns",
  },
  {
    name: "Starter Kits",
    icon: Star,
    count: 16,
    description: "Full-stack starter templates",
  },
];

export default function MarketplacePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);

  const handlePurchase = (product: Product) => {
    setSelectedProduct(product);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    setIsOrderSuccessOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <GridBackground>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
            >
              <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
                Digital Marketplace
              </span>
              <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Premium Digital Assets
              </h1>
              <p className="text-lg text-muted-foreground font-mono">
                Discover high-quality templates, components, and resources to
                accelerate your development workflow.
              </p>
            </motion.div>

            {/* Search Section */}
            <Card className="bg-black/50 backdrop-blur-xl border-white/10 mb-12">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      className="pl-10 bg-black/30 border-white/10 text-white placeholder:text-muted-foreground"
                      placeholder="Search templates, components..."
                    />
                  </div>
                  <Button
                    className="border-white/10 hover:border-primary/50"
                    variant="secondary"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  animate={{ opacity: 1, y: 0 }}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold font-grotesk group-hover:text-primary transition-colors duration-300">
                              {category.name}
                            </h3>
                            <span className="text-sm text-white/60">
                              {category.count} items
                            </span>
                          </div>
                          <p className="text-sm text-white/60 mb-4">
                            {category.description}
                          </p>
                          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm mr-2">
                              Browse Collection
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Featured Item */}
            {products.length > 0 && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-black/50 to-primary/5 backdrop-blur-xl border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-2/3">
                        <span className="inline-block text-xs font-mono text-primary mb-4">
                          Featured Template
                        </span>
                        <h2 className="text-3xl font-bold font-grotesk mb-4 group-hover:text-primary transition-colors duration-300">
                          {products[0].title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {products[0].description}
                        </p>
                        <div className="flex items-center gap-4">
                          <Button
                            className="bg-primary/90 hover:bg-primary"
                            onClick={() => {
                              setSelectedProduct(products[0]);
                              setIsPreviewModalOpen(true);
                            }}
                          >
                            View Details
                          </Button>
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-white/60">
                              {products[0].rating}/5 ({products[0].sales} sales)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 relative aspect-[4/3] rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
                        <Image
                          fill
                          alt={products[0].title}
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          src={products[0].image}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>
      </GridBackground>

      <OrderSuccessModal
        isOpen={isOrderSuccessOpen}
        product={selectedProduct}
        onClose={() => setIsOrderSuccessOpen(false)}
      />

      {/* Preview Modal */}
      <PreviewModal
        isOpen={isPreviewModalOpen}
        product={selectedProduct}
        onClose={() => setIsPreviewModalOpen(false)}
        onPurchase={handlePurchase}
      />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        price={selectedProduct?.price || 0}
        productTitle={selectedProduct?.title || ""}
        onClose={() => setIsPaymentModalOpen(false)}
        onSuccess={handlePaymentSuccess}
      />

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                animate={{ opacity: 1, y: 0 }}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 hover:border-primary/20 rounded-xl overflow-hidden transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      alt={product.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      height={450}
                      src={product.image}
                      width={800}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsPreviewModalOpen(true);
                        }}
                      >
                        Preview Template
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Chip
                          className="bg-primary/10 text-primary"
                          color="primary"
                          variant="flat"
                        >
                          {product.category}
                        </Chip>
                        <div className="flex items-center gap-2 text-white/60">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">{product.rating}</span>
                          <span>({product.sales} sales)</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h2>
                      <p className="text-white/70">{product.description}</p>
                    </div>

                    <div>
                      <h3 className="font-medium text-sm text-white/60 mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.techStack.map((tech) => (
                          <Chip
                            key={tech}
                            className="bg-white/5 text-white/70 border border-white/10"
                            variant="flat"
                          >
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-sm text-white/60 mb-3">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {product.features.slice(0, 4).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-white/70"
                          >
                            <Check className="w-4 h-4 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <Image
                          alt={product.author.name}
                          className="rounded-full ring-2 ring-white/10"
                          height={40}
                          src={product.author.image}
                          width={40}
                        />
                        <div>
                          <div className="font-medium text-white">
                            {product.author.name}
                          </div>
                          <div className="text-sm text-white/60">
                            {product.author.role}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm text-white/60">Price</div>
                          <div className="text-2xl font-bold text-white">
                            ${product.price}
                          </div>
                        </div>
                        <button
                          className="px-6 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
                          onClick={() => handlePurchase(product)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Why Choose Us
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Built for Modern Developers
              </motion.h2>

              <motion.p
                className="text-lg text-white/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Our products are crafted with the latest technologies and best
                practices to help you build better applications faster.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Clean Code",
                  description:
                    "Well-structured and documented code following best practices",
                },
                {
                  icon: <Palette className="w-6 h-6" />,
                  title: "Modern Design",
                  description:
                    "Beautiful and responsive designs that work on all devices",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Performance",
                  description:
                    "Optimized for speed and excellent user experience",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Support",
                  description: "Dedicated support and regular updates",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="h-full p-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl transition-colors hover:border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
