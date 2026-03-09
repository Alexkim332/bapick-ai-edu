import Link from "next/link";
import { BookOpen, Calendar, MessageCircleQuestion, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center rounded-full border border-border bg-background-light px-3 py-1 text-sm font-medium text-text-muted">
              온라인 교육 플랫폼
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-main leading-tight tracking-tight">
              당신의 비즈니스를 돕는 <br className="hidden md:block" />
              <span className="text-primary">AI 자동화</span>, <br className="hidden lg:block" />
              밀착 케어로 확실하게.
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto md:mx-0">
              단순한 강의 수강이 아닙니다. 일주일 동안 매일 제공되는 학습 자료와 영상을 보고 챌린지 과제를 수행하며, 비개발자도 웹사이트를 직접 개발할 수 있는 실무 능력을 완벽하게 갖추게 해드립니다.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/premium"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors"
              >
                챌린지 커리큘럼 보기
              </Link>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex-1 w-full max-w-md mx-auto md:mx-0">
            <div className="p-8 border border-border rounded-2xl shadow-lg bg-white flex flex-col items-center select-none hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              {/* Optional background decoration */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-50 opacity-50 blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-text-main mb-2 relative z-10 text-center">AI 자동화 설계자 1주일 밀착 챌린지</h3>
              <p className="text-sm text-primary font-semibold mb-6 relative z-10">1기 챌린저 모집 중! 특별 할인가</p>
              
              <div className="flex items-center space-x-3 mb-2 relative z-10">
                <span className="text-lg text-gray-400 line-through font-medium">299,000원</span>
                <span className="text-sm font-bold px-2.5 py-1 bg-red-100 text-red-600 rounded-md tracking-wide">67%</span>
              </div>
              
              <div className="text-4xl font-extrabold text-text-main mb-6 flex items-baseline relative z-10">
                99,000<span className="text-lg font-medium text-text-muted ml-1">원</span>
              </div>
              
              <ul className="text-sm text-text-muted mb-8 space-y-4 w-full px-2 relative z-10">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">체계적인 1주일 학습자료 & 영상 제공</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">챌린지 과제 밀착 피드백</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">비밀 카톡방 초대 & 밀착 멘토링</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">비개발자도 웹사이트 개발 완수</span>
                </li>
              </ul>

              <Link 
                href="/premium"
                className="w-full inline-flex items-center justify-center py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-hover shadow-md transition-colors relative z-10"
              >
                챌린지 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-background-light py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Bapick AI Edu 챌린지만의 특별함
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              오직 성과를 위한 3가지 확실한 교육 철학을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">1주일 단기 완성 로드맵</h3>
              <p className="text-text-muted leading-relaxed">
                기초부터 실무 적용까지 단계별 자료와 영상으로 구성된 일주일 로드맵을 통해 단기간에 마스터할 수 있습니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">챌린지 과제 & 꼼꼼한 피드백</h3>
              <p className="text-text-muted leading-relaxed">
                단순한 시청을 넘어, 직접 적용해보는 매일의 챌린지 과제와 멘토의 꼼꼼한 피드백으로 실력을 끌어 올립니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary mb-6">
                <MessageCircleQuestion className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">비밀 카톡방 초대 & 밀착 멘토링</h3>
              <p className="text-text-muted leading-relaxed">
                막히는 부분이 있다면 비밀 카톡방에서 언제든 질문하세요. 멘토가 직접 빠르고 명확한 답변과 밀착 멘토링을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Pain Points & Value Proposition */}
      <section className="w-full bg-gray-50 py-20 md:py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            진짜 &apos;바이브 코딩&apos;이 무엇인지, 이론-실습-배포까지 한 번에!
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            AI 코딩, 말로만 듣고 아직 시작 못 하셨나요? 지금 아래와 같은 고민을 하고 계시다면 주목해 주세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <span className="text-red-400 flex-shrink-0 mt-0.5"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-gray-700 font-medium">개발의 &apos;개&apos;자도 모르는데 웹사이트를 만들 수 있을까?</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <span className="text-red-400 flex-shrink-0 mt-0.5"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-gray-700 font-medium">강의는 많이 들었는데, 막상 내 서비스는 하나도 없어요…</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <span className="text-red-400 flex-shrink-0 mt-0.5"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-gray-700 font-medium">혼자 영상을 보려니 자꾸 미루게 되고 의욕이 안 납니다ㅠㅠ</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <span className="text-red-400 flex-shrink-0 mt-0.5"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-gray-700 font-medium">코딩 없이 텍스트만 쳐서 홈페이지를 배포하고 싶어요!</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
            <p className="text-xl font-bold text-gray-900 leading-relaxed">
              <span className="text-primary">강의만 듣고 끝나는 뻔한 교육이 아닙니다.</span><br />
              딱 5일, 매일 쏟아지는 미션과 주말 밀착 케어로 직원 한 명 없이 <span className="text-primary bg-blue-100 px-2 py-0.5 rounded-md inline-block mt-2">&apos;진짜 내 웹사이트&apos;</span>를 완성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Curriculum Timeline */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-16">
            1기 전용 1주일 단기 완성 로드맵 🗓️
          </h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {/* Day 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">1일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">AI 기획 및 개발 환경 초기 세팅</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">코딩 전 필수! 토큰 비용을 아끼는 프롬프트 기획법 및 시크릿 AI 에이전트 툴 세팅</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">2일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">바이브 코딩 실전! 프론트엔드 UI 구축</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">자연어로 명령하여 웹사이트 겉모습 뚝딱 만들고 내 PC에서 미리보기</p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">3일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">개발자들의 비밀 무기, 저장소 구축</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">전 세계 개발자들의 놀이터 &apos;깃허브(GitHub)&apos; 가입 및 내 웹사이트 코드 안전하게 업로드하기</p>
              </div>
            </div>

            {/* Day 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">4일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">내 웹사이트를 전 세계에 배포하기</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">비용 0원! Vercel 클라우드 호스팅을 이용해 실제 인터넷 URL로 라이브 연결하기</p>
              </div>
            </div>

            {/* Day 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">5일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">최종 프로젝트 완성 및 제출 챌린지</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">완성된 나만의 웹사이트 URL 인증 및 AI 에이전트 매니저 활용 꿀팁</p>
              </div>
            </div>

            {/* Weekend */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-gray-800 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-sm">
                주말
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-gray-800 border border-gray-700 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-gray-700 text-white text-xs font-bold px-2.5 py-1 rounded-md">토/일</span>
                  <h3 className="font-bold text-white text-lg">복습 및 비밀 카톡방 집중 Q&A</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">막혔던 부분 완벽 해결! 챌린지 이후 나홀로 수익화 파이프라인 구축을 위한 방향성 제시</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 3: Final CTA & Benefits */}
      <section className="w-full bg-blue-50 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12 leading-tight">
            비개발자도 일주일이면 충분합니다.<br />지금 바로 1기에 합류하세요.
          </h2>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100 mx-auto relative overflow-hidden">
            {/* Top gradient bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-blue-400"></div>
            
            <div className="mb-10 space-y-5">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-bold text-red-600">
                🚨 참여 인원 : 선착순 딱 15명
              </div>
              <div className="text-gray-700 font-medium bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <span className="block text-primary font-bold mb-2 text-lg">💡 수강생 특별 혜택</span>
                <p className="text-gray-800 tracking-tight">비밀 카톡방 밀착 멘토링 &amp; 평생 소장 실습 가이드 제공</p>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <span className="text-xl text-gray-400 line-through font-medium">299,000원</span>
                <span className="text-sm font-bold px-3 py-1 bg-red-100 text-red-600 rounded-full tracking-wide">67% 할인</span>
              </div>
              <div className="text-5xl md:text-6xl font-extrabold text-red-600 flex items-baseline justify-center">
                99,000<span className="text-xl md:text-2xl font-bold text-red-600 ml-1">원</span>
              </div>
            </div>

            <Link 
              href="/premium"
              className="w-full max-w-md mx-auto flex items-center justify-center py-5 border border-transparent text-xl font-bold rounded-2xl text-white bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              1기 챌린지 신청하기 (99,000원)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

