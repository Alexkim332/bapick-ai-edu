"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-800 bg-black/50 rounded-2xl overflow-hidden mb-4 transition-all duration-300 hover:border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            >
                <span className="text-white font-medium text-lg pr-4">{question}</span>
                <ChevronDown
                    className={`w-6 h-6 text-purple-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="text-gray-400 leading-relaxed text-base pt-2 border-t border-gray-800/50 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
}
