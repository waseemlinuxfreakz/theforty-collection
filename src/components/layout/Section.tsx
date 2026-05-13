import Link from "next/link";
import { ReactNode } from "react";

type SurfaceVariant = "paper" | "bone" | "oxide" | "brass";
type SectionSize = "default" | "lg" | "sm" | "none";
type ContainerVariant = "wide" | "tight" | "reading";

const surfaceClasses: Record<SurfaceVariant, string> = {
  paper: "bg-[var(--color-paper)] text-[var(--color-oxide)]",
  bone: "bg-[var(--color-bone)] text-[var(--color-oxide)]",
  oxide: "bg-[var(--color-oxide)] text-[var(--color-bone)]",
  brass: "bg-[var(--color-brass)] text-[var(--color-oxide)]",
};

const sizeClasses: Record<SectionSize, string> = {
  default: "section-y",
  lg: "section-y-lg",
  sm: "section-y-sm",
  none: "",
};

const containerClasses: Record<ContainerVariant, string> = {
  wide: "container-wide",
  tight: "container-tight",
  reading: "container-reading",
};

export function Section({
  surface = "paper",
  size = "default",
  container = "wide",
  id,
  className = "",
  children,
}: {
  surface?: SurfaceVariant;
  size?: SectionSize;
  container?: ContainerVariant | "none";
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${surfaceClasses[surface]} ${sizeClasses[size]} ${className}`}
    >
      {container === "none" ? (
        children
      ) : (
        <div className={containerClasses[container]}>{children}</div>
      )}
    </section>
  );
}

/* SectionHeader — consistent eyebrow + title + optional right-aligned link, underlined */
export function SectionHeader({
  eyebrow,
  title,
  link,
  meta,
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  link?: { href: string; label: string };
  meta?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className={`section-head ${onDark ? "section-head-on-dark" : ""}`}>
      <div className="section-head-title-block">
        {eyebrow && (
          <div
            className="eyebrow"
            style={{ color: onDark ? "var(--color-brass-light)" : "var(--color-brass)" }}
          >
            {eyebrow}
          </div>
        )}
        <h2 className="display-md">{title}</h2>
      </div>
      {link && (
        <Link href={link.href} className="text-link">
          {link.label}
        </Link>
      )}
      {meta && (
        <div
          className="eyebrow"
          style={{ color: onDark ? "rgba(232,225,212,0.5)" : "var(--color-stone)" }}
        >
          {meta}
        </div>
      )}
    </div>
  );
}

/* PageHeader — consistent on every top-of-page banner with nav clearance */
export function PageHeader({
  eyebrow,
  title,
  lead,
  ruleBelow = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  ruleBelow?: boolean;
}) {
  return (
    <section
      className="bg-[var(--color-oxide)] text-[var(--color-bone)] page-header-pad"
      style={ruleBelow ? { borderBottom: "var(--rule-line-dark)" } : undefined}
    >
      <div className="container-wide">
        {eyebrow && (
          <div
            className="eyebrow flex items-center gap-3"
            style={{ color: "var(--color-brass-light)", marginBottom: "16px" }}
          >
            <span className="block w-8 h-px bg-current" />
            {eyebrow}
          </div>
        )}
        <h1
          className="display-xl"
          style={{ marginBottom: lead ? "20px" : 0, maxWidth: "20ch" }}
        >
          {title}
        </h1>
        {lead && (
          <p className="body-xl" style={{ maxWidth: "60ch", color: "rgba(232, 225, 212, 0.78)" }}>
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

/* SplitTwo — consistent two-column layout for description / intro blocks */
export function SplitTwo({
  left,
  right,
  ratio = "balanced",
}: {
  left: ReactNode;
  right: ReactNode;
  ratio?: "balanced" | "narrow-left" | "narrow-right";
}) {
  const cols =
    ratio === "narrow-left"
      ? "md:grid-cols-[1fr_2fr]"
      : ratio === "narrow-right"
      ? "md:grid-cols-[2fr_1fr]"
      : "md:grid-cols-[2fr_3fr]";
  return (
    <div className={`grid ${cols} gap-10 md:gap-16 items-start`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
