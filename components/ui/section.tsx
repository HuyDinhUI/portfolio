import { ReactNode } from "react";

export default function Section({
  children,
  id,
  classname
}: {
  children: ReactNode;
  id: string;
  classname: string
}) {

  return (
    <section id={id} className={`${classname}`}>
      {children}
    </section>
  );
}
