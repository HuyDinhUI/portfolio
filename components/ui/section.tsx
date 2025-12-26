import { SectionContext } from "@/contexts/sectionContext";
import { useInView } from "framer-motion";
import { ReactNode, useContext, useEffect, useRef } from "react";

export default function Section({
  children,
  id,
  classname
}: {
  children: ReactNode;
  id: string;
  classname: string
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const section = useContext(SectionContext);

  useEffect(() => {
    if (isInView) section?.setSection(id);
  }, [isInView, id, section]);

  return (
    <section ref={ref} id={id} className={`${classname}`}>
      {children}
    </section>
  );
}
