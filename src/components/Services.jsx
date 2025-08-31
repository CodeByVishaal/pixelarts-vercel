"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Footer from "./common/Footer";

export default function ParallaxCards({ cards, height = "100vh" }) {
  const cardCount = cards?.length || 0;

  return (
    <section className="relative w-full" style={{ height }}>
      <div style={{ height: `${cardCount * 70}vh` }} className="relative mb-5">
        {cards?.map((card, index) => (
          <div key={index} className="sticky top-0 h-[70vh] z-[1]">
            <Card
              className={`w-full h-full flex items-center justify-center text-center p-8 rounded-none border-0 shadow-none ${card.lightBg} ${card.darkBg}`}
            >
              {card.content}
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
