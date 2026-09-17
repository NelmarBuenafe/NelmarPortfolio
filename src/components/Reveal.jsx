import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const delayMs = typeof delay === "number" ? delay : Number(String(delay).replace(/\D/g, "")) || 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10%", threshold: 0.06 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`portfolio-reveal portfolio-reveal--${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
