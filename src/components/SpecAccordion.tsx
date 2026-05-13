"use client";

import { useState } from "react";
import { SpecGroup } from "@/lib/builds";

type Theme = "light" | "dark";

export function SpecAccordion({
  groups,
  theme = "dark",
}: {
  groups: SpecGroup[];
  theme?: Theme;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const c =
    theme === "light"
      ? {
          rule: "1px solid rgba(14, 14, 14, 0.14)",
          dotted: "1px dotted rgba(14, 14, 14, 0.14)",
          title: "var(--color-oxide)",
          label: "var(--color-stone)",
          value: "var(--color-oxide)",
          accent: "var(--color-brass)",
        }
      : {
          rule: "1px solid rgba(232, 225, 212, 0.12)",
          dotted: "1px dotted rgba(232, 225, 212, 0.12)",
          title: "var(--color-bone)",
          label: "rgba(232, 225, 212, 0.5)",
          value: "var(--color-bone)",
          accent: "var(--color-brass-light)",
        };

  return (
    <div className="flex flex-col">
      {groups.map((group, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={group.title} style={{ borderTop: c.rule }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex justify-between items-center w-full text-left transition-colors"
              style={{ paddingBlock: "20px", color: c.title }}
            >
              <span className="flex items-baseline gap-4">
                <span
                  className="font-[family-name:var(--font-mono)]"
                  style={{
                    fontSize: "12px",
                    color: c.accent,
                    letterSpacing: "0.16em",
                  }}
                >
                  0{i + 1} /
                </span>
                <span
                  className="font-[family-name:var(--font-display)]"
                  style={{
                    fontSize: "26px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {group.title}
                </span>
              </span>
              <span
                className="font-[family-name:var(--font-mono)]"
                style={{
                  fontSize: "22px",
                  color: c.accent,
                  transition: "transform 280ms var(--ease-out-quart)",
                  transform: isOpen ? "rotate(45deg)" : "none",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "1200px" : "0",
                transition: "max-height 480ms var(--ease-out-quart)",
              }}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-10"
                style={{ paddingBottom: "24px" }}
              >
                {group.rows.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex justify-between items-baseline gap-3 py-3"
                    style={{
                      borderBottom: c.dotted,
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      style={{
                        color: c.label,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      {row.label}
                    </span>
                    <span style={{ color: c.value, textAlign: "right", fontWeight: 500 }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
