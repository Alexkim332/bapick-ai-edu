import { ExternalLink, BookText, ArrowRight } from "lucide-react";
import Link from "next/link";

const guidebooks = [
  {
    id: "g1",
    title: "현업 200% 활용 AI 실무 심화 프롬프트 가이드",
    description: "실무에 즉시 적용 가능한 고급 프롬프트 작성법과 사례를 확인하세요.",
    notionLink: "https://aquamarine-relish-3ab.notion.site/AI-31c1ad0f003f80c68f89e224a19d7e02?pvs=143",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "g2",
    title: "2026 AI 실무 워크플로우 & 자동화 가이드",
    description: "최신 AI 툴을 활용한 워크플로우 구축 및 비즈니스 자동화 노하우.",
    notionLink: "https://aquamarine-relish-3ab.notion.site/2026-AI-3171ad0f003f80daa7fefeef3eec7d47",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "g3",
    title: "[NEW] 쌩초보도 따라 하는 오픈클로(OpenClaw) 세팅 가이드 🔥",
    description: "오픈클로를 처음 접하는 분들을 위한 단계별 A to Z 세팅 가이드.",
    notionLink: "https://aquamarine-relish-3ab.notion.site/OpenClaw-31a1ad0f003f80c9b644f4b66feac891?pvs=143",
    gradient: "from-blue-600 to-blue-800",
  },
];

export default function Guidebook() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl">가이드북</h1>
        <p className="mt-4 text-lg text-text-muted max-w-3xl mx-auto md:mx-0">
          실제 수익화 과정에 필요한 모든 텍스트 자료를 노션으로 깔끔하게 정리해 두었습니다.
          궁금한 점이 있을 때 언제든 꺼내 보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guidebooks.map((guide) => (
          <Link
            key={guide.id}
            href={guide.notionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
          >
            {/* Thumbnail Header */}
            <div className={`h-32 w-full bg-gradient-to-br ${guide.gradient} flex items-center justify-center relative overflow-hidden`}>
              {/* Optional pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>
              <BookText className="w-12 h-12 text-white/90 relative z-10" />
              <ExternalLink className="w-5 h-5 absolute top-4 right-4 text-white/70 group-hover:text-white transition-colors z-10" />
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                {guide.title}
              </h2>
              <p className="text-sm text-text-muted mb-6 flex-1">
                {guide.description}
              </p>
              
              {/* CTA Button */}
              <div className="mt-auto flex items-center justify-between font-medium text-sm text-primary">
                <span>가이드북 보기</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
