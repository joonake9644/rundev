"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.experience) {
      toast({
        variant: "destructive",
        title: "필수 항목 누락",
        description: "모든 필수 항목을 입력해주세요.",
      });
      return;
    }

    toast({
      title: "가입 신청 완료!",
      description: "가입 신청이 완료되었습니다. 곧 연락드리겠습니다.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
    });

    console.log("Form Data:", formData);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "info@concreterunners.com",
    },
    {
      icon: "📱",
      title: "Instagram",
      content: "@concrete_runners_seoul",
    },
    {
      icon: "📍",
      title: "Meeting Point",
      content: "성수동 카페거리\n매주 토요일 오전 7시",
    },
    {
      icon: "💬",
      title: "KakaoTalk",
      content: "오픈채팅방: \"콘크리트러너스\"",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 mb-4">
            JOIN THE CREW
          </h2>
          <div className="w-24 h-1 bg-zinc-900 mx-auto" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="border-2 border-zinc-900">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    이름
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-zinc-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-zinc-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    전화번호
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-zinc-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">
                    러닝 경험
                  </Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    required
                  >
                    <SelectTrigger className="border-zinc-300">
                      <SelectValue placeholder="선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">초보자 (6개월 미만)</SelectItem>
                      <SelectItem value="intermediate">중급자 (6개월-2년)</SelectItem>
                      <SelectItem value="advanced">상급자 (2년 이상)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    자기소개
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-zinc-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white tracking-wide"
                  size="lg"
                >
                  JOIN CONCRETE RUNNERS
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900">
              GET IN TOUCH
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="border border-zinc-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-zinc-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
