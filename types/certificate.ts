export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  verifyUrl?: string;
  category: "AI" | "Hardware" | "Full-Stack" | "Cloud";
}
