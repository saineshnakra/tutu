// HeroSection.tsx

"use client";

import { Music, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useState } from "react";
import TopicInput from "./TopicInput";
import "./HeroSection.css";

const educationMessages: ChatMessage[] = [
  { type: "user", message: "Hey Tutu, teach me calculus" },
  {
    type: "tutor",
    message: "Here's a catchy tune about derivatives and integrals!",
  },
];

const viralMessages: ChatMessage[] = [
  {
    type: "user",
    message: "Hey Tutu, give me a jingle to tease my History Class",
  },
  { type: "tutor", message: "Okay, here is a viral jingle of History facts" },
];

const businessMessages: ChatMessage[] = [
  {
    type: "user",
    message:
      "Hey Tutu, make a jingle for my Instagram ad for an earring company",
  },
  {
    type: "tutor",
    message: "Sure, here's a catchy tune to promote your earring company!",
  },
];

interface ChatMessage {
  type: "user" | "tutor";
  message: string;
}

export default function HeroSection() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState<"educational" | "viral" | "business">(
    "educational"
  );

  const showMessages = (messages: ChatMessage[], index = 0) => {
    if (index >= messages.length) return;

    const currentMessage = messages[index];

    if (currentMessage.type === "user") {
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
    if (mode === "viral") {
      showMessages(viralMessages);
    } else if (mode === "business") {
      showMessages(businessMessages);
    } else {
      showMessages(educationMessages);
    }
  }, [mode]);

  // Determine mode index for slider position
  const modeIndex = mode === "educational" ? 0 : mode === "viral" ? 1 : 2;

  return (
    <section
      className={`mt-10 relative w-full py-20 overflow-hidden mode-transition ${
        mode === "viral"
          ? "bg-custom-black text-white"
          : mode === "business"
          ? "bg-business-blue text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 relative z-10 ">
        {/* Align headings consistently */}
        <div className="flex flex-col items-start space-y-4 order-2 md:order-1 lg:px-6">
          <h2 className="text-2xl font-bold mb-4">
            {mode === "viral"
              ? "Viral Hits"
              : mode === "business"
              ? "Business Jingles"
              : "Educational Tunes"}
          </h2>
          <div className="space-y-4">
            {visibleMessages.map((chat, index) => (
              <ChatBubble
                key={index}
                type={chat.type}
                message={chat.message}
                alignment={mode === "viral" ? "right" : "left"}
                mode={mode}
              />
            ))}
            {isTyping && (
              <TypingIndicator
                alignment={mode === "viral" ? "right" : "left"}
              />
            )}
          </div>
        </div>

        {/* Center Column for Hero Content */}
        <div className="text-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="flex justify-center mb-8">
            <Music
              className={`h-24 w-24 transition-transform duration-500 hover:scale-110 ${
                mode === "viral"
                  ? "text-custom-red"
                  : mode === "business"
                  ? "text-white" // Changed from 'text-business-blue' to 'text-white'
                  : "text-bright-green"
              } animate-bounce`}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to{" "}
            <span
              className={`${
                mode === "viral"
                  ? "text-custom-red"
                  : mode === "business"
                  ? "text-white" // Change to white for visibility
                  : "text-bright-green"
              }`}
            >
              Tutu
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {mode === "viral"
              ? "Go viral with catchy tunes.\nBreak the internet with music."
              : mode === "business"
              ? "Turn your brand into a melody.\nMake your business memorable."
              : "Learning is emotion.\nYou remember what you feel."}
          </p>
          {/* Toggle Slider */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={() => setMode("educational")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                mode === "educational"
                  ? "bg-bright-green text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Educational
            </button>
            <button
              onClick={() => setMode("viral")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                mode === "viral"
                  ? "bg-custom-red text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Viral
            </button>
            <button
              onClick={() => setMode("business")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                mode === "business"
                  ? "bg-business-blue text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Business
            </button>
          </div>
          {/* Remove the text under the buttons but maintain spacing */}
          {/* Remove this div: <div className="mb-12"></div> */}
          {/* Move TypingText here */}
          <TypingText text="" mode={mode} />
        </div>
        {/* Remove TypingText from the side */}
        {/* Right Column for Additional Text */}
      </div>
      {/* Pass mode to TopicInput */}
      <TopicInput mode={mode} />
    </section>
  );
}

function ChatBubble({
  type,
  message,
  alignment,
  mode,
}: {
  type: "user" | "tutor";
  message: string;
  alignment: "left" | "right";
  mode: "educational" | "viral" | "business";
}) {
  const alignmentClass = alignment === "left" ? "self-start" : "self-end";

  // Adjust colors based on the mode
  let bgColor = "";
  let textColor = "text-white";
  if (mode === "viral") {
    // Viral mode colors
    if (type === "user") {
      bgColor = "bg-custom-red";
    } else {
      bgColor = "bg-black";
    }
  } else if (mode === "business") {
    if (type === "user") {
      bgColor = "bg-white";
      textColor = "text-business-blue";
    } else {
      bgColor = "bg-business-response";
    }
  } else {
    // Education mode colors
    if (type === "user") {
      bgColor = "bg-white";
      textColor = "text-st-tropaz";
    } else {
      bgColor = "bg-tutor-response";
    }
  }

  const animationClass = "animate-fadeInUp";

  return (
    <div className={`flex ${alignmentClass} max-w-sm ${animationClass}`}>
      <div
        className={`rounded-lg px-4 py-3 ${bgColor} ${textColor} shadow-md`}
        style={{ maxWidth: "75%" }}
      >
        <p className="whitespace-pre-line">{message}</p>
        {type === "tutor" && <MusicPlayer mode={mode} />}
      </div>
    </div>
  );
}

function MusicPlayer({ mode }: { mode: "educational" | "viral" | "business" }) {
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
  const progressBarColor =
    mode === "viral"
      ? "bg-custom-red"
      : mode === "business"
      ? "bg-business-blue"
      : "bg-bright-green";
  const textColor =
    mode === "viral"
      ? "text-custom-red"
      : mode === "business"
      ? "text-business-blue"
      : "text-st-tropaz";

  return (
    <div className={`mt-3 bg-white rounded-lg p-2 ${textColor} shadow-sm`}>
      <div className="flex items-center justify-between">
        <SkipBack
          size={20}
          className="cursor-pointer"
          onClick={handleSkipBack}
        />
        {isPlaying ? (
          <Pause
            size={24}
            className="cursor-pointer"
            onClick={handlePlayPause}
          />
        ) : (
          <Play
            size={24}
            className="cursor-pointer"
            onClick={handlePlayPause}
          />
        )}
        <SkipForward
          size={20}
          className="cursor-pointer"
          onClick={handleSkipForward}
        />
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

function TypingIndicator({ alignment }: { alignment: "left" | "right" }) {
  const alignmentClass = alignment === "left" ? "self-start" : "self-end";
  const bgColor = "bg-tutor-response text-white";

  return (
    <div className={`flex ${alignmentClass} max-w-sm`}>
      <div
        className={`rounded-lg px-4 py-2 ${bgColor} shadow-md flex items-center`}
        style={{ maxWidth: "75%" }}
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

function TypingText({
  text,
  mode,
}: {
  text: string;
  mode: "educational" | "viral" | "business";
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 25); // Faster typing effect
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <p
      className={`${
        mode === "viral"
          ? "text-custom-red"
          : mode === "business"
          ? "text-business-blue"
          : "text-bright-green"
      } font-bold text-lg md:text-xl mb-12 max-w-2xl mx-auto typing-text`}
    >
      {displayedText}
    </p>
  );
}
