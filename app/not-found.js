import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-32 text-center">
      <h1 className="font-serif text-4xl text-navy mb-4">Page not found</h1>
      <p className="text-ink/70 mb-8">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button href="/">Back to home</Button>
    </section>
  );
}
