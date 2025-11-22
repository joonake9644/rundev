"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      day: "15",
      month: "DEC",
      title: "CONCRETE NIGHT RUN",
      description: "도시의 밤을 달리는 특별한 야간 러닝 이벤트",
      location: "한강공원",
      time: "19:00",
      capacity: "30명",
    },
    {
      day: "22",
      month: "DEC",
      title: "INDUSTRIAL MARATHON",
      description: "산업 단지를 관통하는 풀 마라톤 코스",
      location: "성수동",
      time: "06:00",
      capacity: "100명",
    },
    {
      day: "29",
      month: "DEC",
      title: "YEAR-END PARTY",
      description: "한 해를 마무리하는 멤버들과의 특별한 모임",
      location: "클럽하우스",
      time: "18:00",
      capacity: "전체",
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 mb-4">
            UPCOMING EVENTS
          </h2>
          <div className="w-24 h-1 bg-zinc-900 mx-auto" />
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-zinc-900 hover:shadow-xl transition-shadow overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Date */}
                    <div className="bg-zinc-900 text-white p-6 flex flex-col items-center justify-center min-w-[100px]">
                      <span className="text-3xl font-bold">
                        {event.day}
                      </span>
                      <span className="text-sm tracking-wider">
                        {event.month}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-1">
                      <h3 className="text-lg font-bold tracking-wide text-zinc-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-zinc-600 mb-4">
                        {event.description}
                      </p>
                      <div className="space-y-1 text-xs text-zinc-500">
                        <div>📍 {event.location}</div>
                        <div>⏰ {event.time}</div>
                        <div>👥 {event.capacity}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
