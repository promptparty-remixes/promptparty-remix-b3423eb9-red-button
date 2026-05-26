"use client";

import { useState } from "react";
import { PressableButton } from "@/components/pressable-button";
import { DotMatrixCounter } from "@/components/dot-matrix-counter";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative grid min-h-screen grid-rows-2 overflow-hidden bg-black px-5 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 75%, rgba(185, 28, 28, 0.22), rgba(0, 0, 0, 0) 34%)",
        }}
      />

      <div className="relative z-10 row-start-1 flex items-end justify-center pb-8">
        <DotMatrixCounter value={count} digits={4} />
      </div>

      <div className="relative z-10 row-start-2 flex items-center justify-center">
        <PressableButton
          ariaLabel="Press the red button"
          onPress={() => setCount((c) => c + 1)}
        />
      </div>
    </main>
  );
}
