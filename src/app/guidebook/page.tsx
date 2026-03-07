import { ExternalLink, BookText } from "lucide-react";
import Link from "next/link";

const mockGuidebooks = [
  {
    id: "g1",
    title: "AI 수익화 기초 가이드",
    description: "아무것도 모르는 초보자를 위한 0부터 1까지의 수익화 개념 잡기.",
    notionLink: "https://notion.so/dummy1",
  },
  {
    id: "g2",
    title: "프롬프트 작성법 바이블",
    description: "이것만 알면 원하는 결과를 무조건 얻어내는 만능 프롬프트 작성 템플릿.",
    notionLink: "https://notion.so/dummy2",
  },
  {
    id: "g3",
    title: "사례로 보는 자동화 비즈니스",
    description: "실제 적용 사례 10가지를 통해 알아보는 내 비즈니스 자동화 힌트.",
    notionLink: "https://notion.so/dummy3",
  },
  {
    id: "g4",
    title: "노코드/로우코드 툴 비교",
    description: "나에게 맞는 툴은 무엇일까? 자피어, 메이크, n8n 완벽 비교 분석.",
    notionLink: "https://notion.so/dummy4",
  },
];

export default function Guidebook() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl">가이드북</h1>
        <p className="mt-4 text-lg text-text-muted max-w-3xl">
          실제 수익화 과정에 필요한 모든 텍스트 자료를 노션으로 깔끔하게 정리해 두었습니다.
          궁금한 점이 있을 때 언제든 꺼내 보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockGuidebooks.map((guide) => (
          <Link
            key={guide.id}
            href={guide.notionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all duration-200"
          >
            <div className="bg-slate-50 p-6 flex flex-col items-center justify-center border-b border-border group-hover:bg-slate-100 transition-colors">
              <BookText className="w-12 h-12 text-slate-300 group-hover:text-primary transition-colors mb-4" />
              <ExternalLink className="w-5 h-5 absolute top-4 right-4 text-slate-300 group-hover:text-primary transition-colors" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-text-muted">
                {guide.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
