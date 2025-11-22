"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Members() {
  const members = [
    {
      initials: "KJ",
      name: "김준호",
      role: "CREW LEADER",
      years: "5년",
      events: "15회",
    },
    {
      initials: "SY",
      name: "이서영",
      role: "EVENT ORGANIZER",
      years: "3년",
      events: "8회",
    },
    {
      initials: "MH",
      name: "박민혁",
      role: "TRAINING COACH",
      years: "7년",
      events: "23회",
    },
    {
      initials: "JY",
      name: "최지영",
      role: "COMMUNITY MANAGER",
      years: "2년",
      events: "5회",
    },
  ];

  return (
    <section id="members" className="py-20 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 mb-4">
            CREW MEMBERS
          </h2>
          <div className="w-24 h-1 bg-zinc-900 mx-auto" />
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-zinc-900 bg-white hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center space-y-4">
                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-zinc-600 tracking-wide mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-center gap-4 text-sm text-zinc-500">
                    <span>🏃 {member.years}</span>
                    <span>🏆 {member.events}</span>
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
