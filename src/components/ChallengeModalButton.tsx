'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { X, Copy } from "lucide-react";
import { submitApplication } from '@/app/actions/application';

interface ChallengeModalButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function ChallengeModalButton({ children, className }: ChallengeModalButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [depositorName, setDepositorName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleOpenClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            alert('로그인이 필요한 서비스입니다.');
            router.push('/login');
            return;
        }

        setIsModalOpen(true);
    };

    const handleCopyAccount = () => {
        navigator.clipboard.writeText("3333-12-3456789");
        alert("계좌번호가 복사되었습니다.");
    };

    const handleSubmit = async () => {
        if (!depositorName.trim()) {
            alert("입금자명을 입력해 주세요.");
            return;
        }

        setIsSubmitting(true);
        try {
            const result = await submitApplication(depositorName);
            if (result?.error) {
                alert(result.error);
                setIsSubmitting(false);
                return;
            }
            setIsModalOpen(false);
            alert("신청이 완료되었습니다. 마이페이지로 이동합니다.");
            router.push('/mypage');
        } catch (e) {
            alert("오류가 발생했습니다.");
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <button onClick={handleOpenClick} className={className}>
                {children}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity text-left">
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50">
                            <h2 className="text-xl font-bold text-white">1기 챌린지 수강 신청</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 -mr-2 text-gray-500 hover:text-gray-300 transition-colors rounded-full hover:bg-gray-800"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <p className="text-sm text-gray-300 mb-6">
                                아래 계좌로 99,000원을 입금하신 후, 입금자명을 정확히 입력해 주세요.
                            </p>

                            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 mb-6">
                                <div className="flex flex-col space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">은행명</span>
                                        <span className="font-bold text-white">토스뱅크</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-gray-400">계좌번호</span>
                                        <div className="flex items-center">
                                            <span className="font-bold text-purple-400 tracking-wider mr-2">1001-5654-2368</span>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText("1001-5654-2368");
                                                    alert("계좌번호가 복사되었습니다.");
                                                }}
                                                className="text-gray-400 hover:text-purple-400 transition-colors p-1 rounded-md hover:bg-gray-700"
                                                title="계좌번호 복사"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">예금주</span>
                                        <span className="font-bold text-white">김강민</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    입금자명 (실명 입력)
                                </label>
                                <input
                                    type="text"
                                    value={depositorName}
                                    onChange={(e) => setDepositorName(e.target.value)}
                                    className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-shadow placeholder-gray-600"
                                    placeholder="홍길동"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center py-4 border border-transparent text-base font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? '처리 중...' : '입금 완료 및 신청하기'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
