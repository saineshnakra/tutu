"use client";

import { useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

export default function VideoGenerator({
  mode,
}: {
  mode: "educational" | "viral" | "business";
}) {
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setVideoUrl("");
    try {
      const response = await axios.get("/api/video", {
        params: {
          suno_id: "f88def67-ce7b-4940-b64c-833b284021d1",
          youtube_id: "pSgWt_CFtHM",
        },
      });
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      console.error("Error generating video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            mode === "viral"
              ? "text-custom-red"
              : mode === "business"
              ? "text-business-blue"
              : "text-st-tropaz"
          }`}
        >
          Generate Your Video
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter your topic"
              className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 ${
                mode === "viral"
                  ? "border-custom-red focus:ring-custom-red"
                  : mode === "business"
                  ? "border-business-blue focus:ring-business-blue"
                  : "border-st-tropaz focus:ring-bright-green"
              }`}
            />
            <button
              type="submit"
              className={`w-full mt-6 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-[1.05] ${
                mode === "viral"
                  ? "bg-custom-red text-white"
                  : mode === "business"
                  ? "bg-business-blue text-white"
                  : "bg-bright-green text-white"
              } flex items-center justify-center group`}
            >
              Generate Video
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </form>

          {isLoading && (
            <p className="mt-4 text-center">
              Generating video, please wait...
            </p>
          )}

          {videoUrl && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Your Video:</h3>
              <video
                controls
                className="w-full rounded-lg shadow-md"
                src={videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}