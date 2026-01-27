import { useState, useEffect } from "react";

interface Props {
  text: string;
  trigger: boolean;
}

const chars = "!@#$%^&*()_+-={}[]<>?/0123456789";

export default function DecryptedText({ text, trigger }: Props) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    let tick = 0;

    const interval = setInterval(() => {
      tick++;

      // reveal only every 2 ticks → slower
      if (tick % 2 === 0) {
        iteration++;
      }

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (i < iteration) return char;
            if (char === "+" || char === " ") return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 150); // 🔥 cinematic speed

    return () => clearInterval(interval);
  }, [trigger, text]);

  return <span>{display}</span>;
}
