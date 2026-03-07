"use client";

import { CheckCircle2, Lock, X, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PremiumCourses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "card">("bank");

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("123-456-789012");
    alert("계좌번호가 복사되었습니다.");
  };

  return (
    <div className="flex flex-col relative">
      {/* Intro Section */}
      <section className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-primary-hover">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            프리미엄 밀착 케어 클래스
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            강의만 듣고 끝나는 것이 아닙니다. 
            당신의 비즈니스에 실제 성과가 날 때까지 멘토가 1주일간 밀착 동행합니다.
          </p>
        </div>
      </section>

      {/* Curriculum & Care Detail Section */}
      <section className="py-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-text-main">
              왜 '밀착 케어'가 필요한가요?
            </h2>
            <p className="mt-4 text-text-muted">
              많은 사람들이 강의를 수강하지만, 실무에 적용하는 데 어려움을 겪습니다. 
              bapick ai edu의 프리미엄 클래스는 실행과 결과에 초점을 맞춥니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold flex items-center text-text-main mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                커리큘럼 요약
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1일차:</span> 비즈니스 진단 및 자동화 설계
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3일차:</span> 맞춤형 AI 툴 연동 및 설정
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">5일차:</span> 자동화 파이프라인 테스트 및 최적화
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">7일차:</span> 최종 성과 점검 및 지속 방안 마련
                </li>
              </ul>
            </div>
            <div className="bg-background-light p-6 rounded-xl border border-border">
               <h3 className="text-lg font-bold flex items-center text-text-main mb-4">
                <Lock className="w-5 h-5 text-primary mr-2" />
                프리미엄 혜택
              </h3>
              <ul className="space-y-4 text-text-muted text-sm">
                <li>• 1:1 맞춤형 과제 피드백 파드 제공</li>
                <li>• 무제한 Q&A 채널(슬랙/디스코드) 접근권</li>
                <li>• 최신 AI 툴 프롬프트 라이브러리 프리패스</li>
              </ul>
            </div>
          </div>

          <div className="max-w-md mx-auto pt-8 border-t border-border mt-8">
            <div className="bg-white border border-border shadow-sm rounded-xl p-8 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-lg text-gray-400 line-through font-medium">₩ 220,000</span>
                <span className="bg-red-100 text-red-600 text-sm font-bold px-2.5 py-1 rounded-md tracking-wide">55% OFF</span>
              </div>
              <h3 className="text-4xl font-extrabold text-text-main mb-2">₩ 99,000</h3>
              <p className="text-sm text-text-muted mb-8 text-center">모든 프리미엄 혜택과 1주일 밀착 케어 포함</p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex w-full items-center justify-center py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-hover transition-colors shadow-sm"
              >
                1주일 밀착 케어 시작하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-background-light/50">
              <h2 className="text-xl font-bold text-text-main">수강 신청 및 결제</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 -mr-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Order Summary */}
              <div className="mb-8">
                <div className="text-sm text-text-muted mb-1">강의명</div>
                <div className="font-semibold text-text-main mb-4">AI 자동화 설계자 1:1 밀착 코스</div>
                <div className="flex items-end justify-between pb-4 border-b border-border">
                  <div className="text-sm text-text-muted">최종 결제 금액</div>
                  <div className="text-3xl font-bold text-red-500 tracking-tight">99,000원</div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-text-main mb-3">결제 수단 선택</h3>
                <div className="space-y-3">
                  <label 
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "bank" 
                        ? "border-primary bg-blue-50/50" 
                        : "border-border hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={() => setPaymentMethod("bank")}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-3 font-medium text-sm text-text-main">무통장 입금 / 토스페이 (수수료 0원)</span>
                    </div>
                  </label>

                  <label 
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "card" 
                        ? "border-primary bg-blue-50/50" 
                        : "border-border hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-3 font-medium text-sm text-text-main">신용카드 결제</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-md">준비 중</span>
                  </label>
                </div>
              </div>

              {/* Dynamic Content based on selection */}
              <div>
                {paymentMethod === "bank" ? (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="bg-gray-50 border border-border rounded-xl p-5 mb-6">
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">입금 은행</span>
                          <span className="font-medium text-text-main">국민은행</span>
                        </div>
                        <div className="flex justify-between items-center group">
                          <span className="text-text-muted">계좌번호</span>
                          <div className="flex items-center">
                            <span className="font-medium text-text-main tracking-wider mr-2">123-456-789012</span>
                            <button 
                              onClick={handleCopyAccount}
                              className="text-gray-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-white"
                              title="계좌번호 복사"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">예금주</span>
                          <span className="font-medium text-text-main">바픽</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="flex w-full items-center justify-center py-4 border border-transparent text-base font-bold rounded-xl text-white bg-text-main hover:bg-black transition-colors shadow-sm"
                    >
                      입금 완료 후 수강 승인 요청하기
                    </Link>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="bg-gray-50 border border-border rounded-xl p-6 text-center">
                      <p className="text-sm text-text-muted">
                        현재 카드 결제 시스템 연동 중입니다.<br />
                        안전하고 빠른 <strong className="text-text-main">무통장 입금</strong>을 이용해 주세요.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
