"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type PressableButtonProps = {
  ariaLabel: string;
  onPress?: () => void;
};

export function PressableButton({ ariaLabel, onPress }: PressableButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const release = () => setIsPressed(false);

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={(event) => {
        if (event.detail === 0) {
          return;
        }

        onPress?.();
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={release}
      onPointerCancel={release}
      onPointerLeave={release}
      onBlur={release}
      onKeyDown={(event) => {
        if ((event.key === " " || event.key === "Enter") && !event.repeat) {
          event.preventDefault();
          setIsPressed(true);
        }
      }}
      onKeyUp={(event) => {
        if (event.key === " " || event.key === "Enter") {
          event.preventDefault();
          release();
          onPress?.();
        }
      }}
      className="group relative h-64 w-56 rounded-full outline-none sm:h-72 sm:w-64"
      animate={{
        y: isPressed ? 10 : 0,
        scale: isPressed ? 0.985 : 1,
      }}
      transition={{ type: "spring", stiffness: 520, damping: 28, mass: 0.7 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute -inset-x-14 -top-12 bottom-0 rounded-full bg-red-600/30 blur-3xl"
        animate={{
          opacity: isPressed ? 0.9 : 0.52,
          scale: isPressed ? 0.88 : 1,
        }}
        transition={{ duration: 0.18 }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute inset-x-3 bottom-3 top-16 rounded-[999px] bg-gradient-to-b from-red-700 via-red-900 to-[#360202]"
        animate={{
          y: isPressed ? 3 : 11,
          scaleY: isPressed ? 0.68 : 1,
          opacity: isPressed ? 0.72 : 1,
        }}
        transition={{ type: "spring", stiffness: 520, damping: 32 }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute inset-x-5 bottom-0 h-16 rounded-full bg-black blur-xl"
        animate={{
          opacity: isPressed ? 0.45 : 0.75,
          scaleX: isPressed ? 0.78 : 1,
          y: isPressed ? 0 : 15,
        }}
        transition={{ duration: 0.16 }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 size-56 rounded-full border border-red-200/20 bg-[radial-gradient(circle_at_50%_28%,#ff6f61_0%,#ef2c24_32%,#b90f17_66%,#76070d_100%)] sm:size-64"
        animate={{
          boxShadow: isPressed
            ? "inset 0 8px 18px rgba(255,255,255,0.18), inset 0 -10px 18px rgba(77,0,0,0.42), 0 8px 24px rgba(239,68,68,0.28)"
            : "inset 0 14px 28px rgba(255,255,255,0.22), inset 0 -18px 28px rgba(77,0,0,0.55), 0 24px 48px rgba(239,68,68,0.34)",
        }}
        transition={{ duration: 0.18 }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute left-[18%] right-[18%] top-[13%] h-[23%] rounded-full bg-gradient-to-b from-white/55 via-white/18 to-white/0 blur-[1px]"
        animate={{
          opacity: isPressed ? 0.34 : 0.62,
          y: isPressed ? 7 : 0,
          scaleX: isPressed ? 0.9 : 1,
        }}
        transition={{ duration: 0.16 }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute left-[13%] right-[13%] top-[13%] h-[66%] rounded-full border border-white/10"
        animate={{
          opacity: isPressed ? 0.22 : 0.4,
          scale: isPressed ? 0.96 : 1,
        }}
        transition={{ duration: 0.16 }}
      />

      <span className="absolute left-0 top-0 size-56 rounded-full ring-1 ring-white/10 transition group-focus-visible:ring-4 group-focus-visible:ring-red-200/70 sm:size-64" />
    </motion.button>
  );
}
