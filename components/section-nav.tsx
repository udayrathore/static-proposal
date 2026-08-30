"use client";

import { useEffect, useState } from "react";

const items = [
  ["overview", "Overview"],
  ["process", "Process"],
  ["platform", "Platform"],
  ["boundaries", "Boundaries"],
  ["technical", "Technical"],
  ["timeline", "Timeline"],
  ["support", "Support"],
  ["terms", "Terms"],
];

export function SectionNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const sections = items
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: [0, 0.1, 0.3] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-nav" aria-label="Proposal sections">
      <div>
        {items.map(([id, label], index) => (
          <a href={`#${id}`} key={id} className={active === id ? "active" : ""}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

