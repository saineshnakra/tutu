'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Type, ArrowRight } from 'lucide-react';

export default function TopicInput({ mode }: { mode: 'educational' | 'viral' | 'business' }) {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<{
    lyrics: string;
    style: string;
    urls: string[];
  } | null>(null);

  const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);
  const lyricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (responseData && audioRefs.current.length > 0) {
      const audio = audioRefs.current[0];
      if (audio && lyricsRef.current) {
        const handleTimeUpdate = () => {
          const scrollHeight = lyricsRef.current!.scrollHeight - lyricsRef.current!.clientHeight;
          const progress = audio.currentTime / audio.duration;
          const scrollPosition = Math.floor(progress * scrollHeight);
          lyricsRef.current!.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
      }
    }
  }, [responseData]);

  const makeRequest = async () => {
    try {
      const version = mode === 'educational' ? 1 : mode === 'viral' ? 2 : 3;
      const response = await axios.post('/api/generate', {
        query: topic,
        version: version
      });
      setResponseData(response.data);
    } catch (error) {
      console.error('Error generating song, retrying in 1 second...', error);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await makeRequest();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseData(null);

    try {
      await makeRequest();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="topic-input" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-st-tropaz mb-8 text-center">
          {mode === 'viral'
            ? "What do you want a viral hit for today?"
            : mode === 'business'
            ? "What business jingle do you want today?"
            : "What do you want to learn today?"}
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-4 mb-6">
            </div>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Type a topic here..."
              className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 text-lg text-black ${
                mode === 'viral'
                  ? 'border-custom-red focus:ring-custom-red'
                  : mode === 'business'
                  ? 'border-business-blue focus:ring-business-blue'
                  : 'border-st-tropaz focus:ring-bright-green'
              }`}
            />
            <button
              type="submit"
              className={`w-full mt-6 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-105 flex items-center justify-center ${
                mode === 'viral'
                  ? 'bg-custom-red'
                  : mode === 'business'
                  ? 'bg-business-blue'
                  : 'bg-bright-green'
              } text-white`}
            >
              Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          {isLoading && <p className="mt-4 text-center text-st-tropaz">Generating...</p>}

          {responseData && (
            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row">
                {/* Left side: Audio Players */}
                <div className="md:w-1/2 md:pr-4">
                  <h3 className="text-xl font-bold text-st-tropaz mb-4">Listen to Your Song:</h3>
                  {responseData.urls.map((url, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg mb-4">
                      <audio
                        controls
                        className="w-full"
                        ref={(el) => {
                          audioRefs.current[index] = el;
                        }}
                      >
                        <source src={url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  ))}
                </div>
                {/* Right side: Lyrics */}
                <div className="md:w-1/2 md:pl-4">
                  <h3 className="text-xl font-bold text-st-tropaz mb-4">Lyrics:</h3>
                  <div
                    ref={lyricsRef}
                    className="bg-white p-6 rounded-lg text-black overflow-y-auto max-h-[400px] shadow-inner"
                    style={{
                      scrollBehavior: 'smooth',
                      lineHeight: '1.8'
                    }}
                  >
                    {(() => {
                      const lyricsLines = responseData.lyrics.split('\n');
                      const startIndex = lyricsLines.findIndex(line => line.includes('Verse 1'));
                      const displayedLyrics = startIndex >= 0 ? lyricsLines.slice(startIndex) : lyricsLines;
                      return displayedLyrics.map((line, index) => (
                        <p 
                          key={index} 
                          className={`mb-3 ${
                            line.includes('Verse') || line.includes('Chorus') 
                              ? 'font-bold text-lg mt-4' 
                              : 'text-base'
                          }`}
                        >
                          {line}
                        </p>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}