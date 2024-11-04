// HeroSection.tsx

'use client';

import { Music, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useEffect, useState } from 'react';

const educationMessages: ChatMessage[] = [
  { type: 'user', message: 'Hey Tutu, teach me calculus' },
  { type: 'tutor', message: "Here's a catchy tune about derivatives and integrals!" },
];

const viralMessages: ChatMessage[] = [
  { type: 'user', message: 'Hey Tutu, give me a jingle to tease my History Class' },
  { type: 'tutor', message: 'Okay, here is a viral jingle of History facts' },
];

interface ChatMessage {
  type: 'user' | 'tutor';
  message: string;
}

export default function HeroSection() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isViral, setIsViral] = useState(false); 

  const showMessages = (
    messages: ChatMessage[],
    index = 0
  ) => {
    if (index >= messages.length) return;

    const currentMessage = messages[index];

    if (currentMessage.type === 'user') {
      // Display user's message immediately
      setVisibleMessages((prev) => [...prev, currentMessage]);

      // Show typing indicator after user's message
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        showMessages(messages, index + 1);
      }, 1000);
    } else {
      // Display tutor's message
      setVisibleMessages((prev) => [...prev, currentMessage]);
      setTimeout(() => showMessages(messages, index + 1), 1000);
    }
  };

  useEffect(() => {
    setVisibleMessages([]);
    if (isViral) {
      showMessages(viralMessages);
    } else {
      showMessages(educationMessages);
    }
  }, [isViral]);

  return (
    <section
      className={`relative w-full py-20 overflow-hidden ${
        isViral ? 'bg-custom-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 relative z-10">
        {/* Left or Right Column for Messages */}
        <div
          className={`flex flex-col ${
            isViral ? 'items-end' : 'items-start'
          } space-y-4 order-2 md:order-1`}
        >
          <h2 className="text-2xl font-bold mb-4">
            {isViral ? 'Viral Hits' : 'Educational Tunes'}
          </h2>
          <div className="space-y-4">
            {visibleMessages.map((chat, index) => (
              <ChatBubble
                key={index}
                type={chat.type}
                message={chat.message}
                alignment={isViral ? 'right' : 'left'}
                isViral={isViral}
              />
            ))}
            {isTyping && <TypingIndicator alignment={isViral ? 'right' : 'left'} />}
          </div>
        </div>

        {/* Center Column for Hero Content */}
        <div className="text-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="flex justify-center mb-8">
            <Music
              className={`h-24 w-24 transition-transform duration-500 hover:scale-110 ${
                isViral ? 'text-custom-red' : 'text-bright-green'
              }`}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className={`${isViral ? 'text-custom-red' : 'text-bright-green'}`}>Tutu</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Learning is emotion. <br />You remember what you feel.
          </p>
          {/* Toggle Slider */}
          <div className="flex justify-center items-center mt-6">
            <div className="relative inline-block w-64 h-12">
              {/* Background */}
              <div
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                  isViral ? 'bg-custom-red' : 'bg-bright-green'
                }`}
              ></div>
              {/* Slider Buttons */}
              <div className="absolute inset-0 flex">
                <button
                  onClick={() => setIsViral(false)}
                  className={`w-1/2 h-full ${
                    !isViral ? 'text-white font-bold' : 'text-black'
                  } focus:outline-none`}
                >
                  Educational
                </button>
                <button
                  onClick={() => setIsViral(true)}
                  className={`w-1/2 h-full ${
                    isViral ? 'text-white font-bold' : 'text-black'
                  } focus:outline-none`}
                >
                  Viral
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({
  type,
  message,
  alignment,
  isViral,
}: {
  type: 'user' | 'tutor';
  message: string;
  alignment: 'left' | 'right';
  isViral: boolean;
}) {
  const alignmentClass = alignment === 'left' ? 'self-start' : 'self-end';

  // Adjust colors based on the mode
  let bgColor = '';
  let textColor = 'text-white';
  if (isViral) {
    // Viral mode colors
    if (type === 'user') {
      bgColor = 'bg-custom-red';
    } else {
      bgColor = 'bg-black';
    }
  } else {
    // Education mode colors
    if (type === 'user') {
      bgColor = 'bg-white';
      textColor = 'text-st-tropaz';
    } else {
      bgColor = 'bg-tutor-response';
    }
  }

  const animationClass = 'animate-fadeInUp';

  return (
    <div className={`flex ${alignmentClass} max-w-sm ${animationClass}`}>
      <div
        className={`rounded-lg px-4 py-3 ${bgColor} ${textColor} shadow-md`}
        style={{ maxWidth: '75%' }}
      >
        <p className="whitespace-pre-line">{message}</p>
        {type === 'tutor' && <MusicPlayer isViral={isViral} />}
      </div>
    </div>
  );
}

function MusicPlayer({ isViral }: { isViral: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prevProgress + 1;
        });
      }, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipBack = () => {
    setProgress(0);
  };

  const handleSkipForward = () => {
    setProgress(100);
    setIsPlaying(false);
  };

  // Adjust colors based on mode
  const progressBarColor = isViral ? 'bg-custom-red' : 'bg-bright-green';
  const textColor = isViral ? 'text-custom-red' : 'text-st-tropaz';

  return (
    <div className={`mt-3 bg-white rounded-lg p-2 ${textColor} shadow-sm`}>
      <div className="flex items-center justify-between">
        <SkipBack size={20} className="cursor-pointer" onClick={handleSkipBack} />
        {isPlaying ? (
          <Pause size={24} className="cursor-pointer" onClick={handlePlayPause} />
        ) : (
          <Play size={24} className="cursor-pointer" onClick={handlePlayPause} />
        )}
        <SkipForward size={20} className="cursor-pointer" onClick={handleSkipForward} />
      </div>
      <div className="mt-2 bg-gray-200 rounded-full h-1">
        <div
          className={`${progressBarColor} h-1 rounded-full transition-all duration-100 ease-linear`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

function TypingIndicator({ alignment }: { alignment: 'left' | 'right' }) {
  const alignmentClass = alignment === 'left' ? 'self-start' : 'self-end';
  const bgColor = 'bg-tutor-response text-white';

  return (
    <div className={`flex ${alignmentClass} max-w-sm`}>
      <div
        className={`rounded-lg px-4 py-2 ${bgColor} shadow-md flex items-center`}
        style={{ maxWidth: '75%' }}
      >
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-typingBounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-typingBounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-typingBounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
}
