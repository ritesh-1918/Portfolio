export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center container mx-auto justify-center gap-4 py-8 md:py-10">
      <div className="inline-block  text-center justify-center">{children}</div>
    </section>
  );
}
