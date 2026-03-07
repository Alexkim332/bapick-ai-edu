import { PlayCircle } from "lucide-react";
import Link from "next/link";

const mockFreeCourses = [
  {
    id: "1",
    title: "AI 자동화 입문 가이드",
    description: "업무 생산성을 2배로 높여주는 챗GPT 기초 활용법과 프롬프트 엔지니어링 팁.",
    thumbnail: "bg-slate-200", 
    duration: "15분",
  },
  {
    id: "2",
    title: "노션 AI로 10분만에 기획안 쓰기",
    description: "아이디어 스케치부터 완성된 기획안까지, 노션 AI를 활용한 실무 밀착형 튜토리얼.",
    thumbnail: "bg-slate-200",
    duration: "22분",
  },
  {
    id: "3",
    title: "Zapier 기초 뽀개기",
    description: "코드 한 줄 없이 시작하는 앱 간 데이터 연동. 단순 반복 업무를 완전히 자동화하세요.",
    thumbnail: "bg-slate-200",
    duration: "30분",
  },
];

export default function FreeCourses() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl">무료 강의</h1>
        <p className="mt-4 text-lg text-text-muted">
          부담 없이 시작하세요. 실무에 바로 적용 가능한 실전 팁을 모았습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockFreeCourses.map((course) => (
          <Link 
            key={course.id} 
            href={`/free/${course.id}`}
            className="group flex flex-col bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Thumbnail Placeholder */}
            <div className={`aspect-video w-full ${course.thumbnail} relative flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
              <PlayCircle className="w-12 h-12 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-blue-700/10">
                  {course.duration}
                </span>
              </div>
              <h2 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
                {course.title}
              </h2>
              <p className="text-sm text-text-muted line-clamp-2">
                {course.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
