import Link from "next/link";

export default function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-navy text-paper hover:bg-navy-light"
      : "border border-navy text-navy hover:bg-navy hover:text-paper";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
