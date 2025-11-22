"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: "🏃",
      title: "URBAN RUNNING",
      description: "도시 곳곳의 콘크리트 길을 탐험하며 새로운 러닝 경험을 제공합니다.",
    },
    {
      icon: "🏗️",
      title: "INDUSTRIAL AESTHETIC",
      description: "브루탈리즘의 거친 아름다움을 러닝 문화에 접목시킨 독특한 스타일.",
    },
    {
      icon: "🤝",
      title: "COMMUNITY SPIRIT",
      description: "같은 열정을 공유하는 러너들과 함께하는 강력한 공동체 문화.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 mb-4">
            ABOUT CONCRETE RUNNERS
          </h2>
          <div className="w-24 h-1 bg-zinc-900 mx-auto" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-zinc-900">
              Industrial Spirit, Urban Running
            </h3>
            <p className="text-lg text-zinc-700">
              우리는 도시의 거친 콘크리트 위에서 달리며, 산업적 미학과 러닝의 순수함을 결합합니다.
              브루탈리즘의 강인함과 러너들의 열정이 만나는 곳입니다.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-zinc-900 bg-white hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold tracking-wide text-zinc-900">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-zinc-600">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
