import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const visibleSections = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.set(
              entry.target.id,
              entry.intersectionRatio,
            );
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });

        // chọn section chiếm diện tích lớn nhất
        const mostVisible = Array.from(visibleSections.current.entries()).sort(
          (a, b) => b[1] - a[1],
        )[0];

        if (mostVisible?.[0]) {
          setActiveId(mostVisible[0]);
        }
      },
      {
        root: null,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        rootMargin: "0px 0px -30% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
