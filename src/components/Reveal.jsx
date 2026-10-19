import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const delayMs = typeof delay === "number" ? delay : Number(String(delay).replace(/\D/g, "")) || 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frameId;

    if (typeof IntersectionObserver === "undefined") {
      frameId = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frameId);
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      frameId = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frameId);
    }

    let timer = setTimeout(() => {
      setVisible(true);
    }, 450);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(timer);
          observer.disconnect();
        }
      },
      { rootMargin: "50px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
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
