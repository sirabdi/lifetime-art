"use client";

import Image from "next/image";

interface Props {
  items: string[];
}

export default function Slider({ items }: Props) {
  const allItems = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex animate-slider-infinite"
        style={{ width: `${allItems.length * 400}px` }}
      >
        {allItems.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[25rem] h-[31.25rem] mx-3 relative overflow-hidden"
          >
            <Image
              alt={`Slider item ${idx + 1}`}
              objectFit="cover"
              loading="eager"
              layout="fill"
              src={src}
              priority
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes slider-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slider-infinite {
          animation: slider-infinite 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
