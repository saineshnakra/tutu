'use client'

import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { ArrowRight, Music, Video, Loader2 } from "lucide-react" // Add Loader2 import
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch" // Add this import

export default function TopicInput({ mode = "educational" }: { mode?: "educational" | "viral" | "business" }) {
  const [topic, setTopic] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [responseData, setResponseData] = useState<{
    lyrics?: string
    style?: string
    urls?: string[]
    videoUrl?: string
  } | null>(null)
  const [generateVideo, setGenerateVideo] = useState(false)

  const audioRefs = useRef<Array<HTMLAudioElement | null>>([])
  const lyricsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (responseData && audioRefs.current.length > 0) {
      const audio = audioRefs.current[0]
      if (audio && lyricsRef.current) {
        const handleTimeUpdate = () => {
          const scrollHeight = lyricsRef.current!.scrollHeight - lyricsRef.current!.clientHeight
          const progress = audio.currentTime / audio.duration
          const scrollPosition = Math.floor(progress * scrollHeight)
          lyricsRef.current!.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          })
        }

        audio.addEventListener("timeupdate", handleTimeUpdate)
        return () => audio.removeEventListener("timeupdate", handleTimeUpdate)
      }
    }
  }, [responseData])

  const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <img 
            src="/loading.gif" 
            alt="Generating" 
            className="w-full h-full object-contain"
          />
        </div>
        <Loader2 className="animate-spin text-gray-600 mb-4 h-8 w-8" />
        <p className="text-lg font-medium text-gray-800">
          {generateVideo ? "Creating your video..." : "Composing your song..."}
        </p>
        <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
      </div>
    </div>
  )

  const makeRequest = async () => {
    try {
      if (generateVideo) {
        await new Promise(resolve => setTimeout(resolve, 10000))
        const videoUrl = `/thermonuclear.mp4`
        setResponseData({ videoUrl })
      } else {
        const response = await axios.post("/api/generate", {
          query: topic,
          version: mode === "educational" ? 1 : mode === "viral" ? 2 : 3,
        })
        setResponseData(response.data)
      }
    } catch (error) {
      console.error("Error generating content:", error)
      // Reset loading state but don't show error to user
      setResponseData(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResponseData(null)

    try {
      await makeRequest()
    } finally {
      setIsLoading(false)
    }
  }

  const getThemeColor = () => {
    switch (mode) {
      case "viral":
        return "bg-custom-red hover:bg-red-600 text-white"
      case "business":
        return "bg-business-blue hover:bg-blue-600 text-white"
      default:
        return "bg-bright-green hover:bg-green-600 text-white"
    }
  }

  const getSwitchColor = () => {
    if (!generateVideo) return "bg-gray-200"
    switch (mode) {
      case "viral":
        return "bg-custom-red"
      case "business":
        return "bg-business-blue"
      default:
        return "bg-bright-green"
    }
  }

  return (
    <section id="topic-input" className="w-full bg-gray-50 py-16">
      {isLoading && <LoadingOverlay />}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {mode === "viral"
            ? "What do you want a viral hit for today?"
            : mode === "business"
            ? "What business jingle do you want today?"
            : "What do you want to learn today?"}
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-gray-800">Topic</Label>
              <Input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Type a topic here..."
                className="w-full text-gray-800"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gray-100">
                  {generateVideo ? (
                    <Video className={`h-5 w-5 ${
                      mode === "viral"
                        ? "text-custom-red"
                        : mode === "business"
                        ? "text-business-blue"
                        : "text-bright-green"
                    }`} />
                  ) : (
                    <Music className={`h-5 w-5 ${
                      mode === "viral"
                        ? "text-custom-red"
                        : mode === "business"
                        ? "text-business-blue"
                        : "text-bright-green"
                    }`} />
                  )}
                </div>
                <div>
                  <Label className="text-base font-medium text-gray-800">
                    Generate Video
                  </Label>
                  <p className="text-sm text-gray-500">
                    {generateVideo ? "Create a video" : "Generate music and lyrics"}
                  </p>
                </div>
              </div>
              <Switch
                checked={generateVideo}
                onCheckedChange={setGenerateVideo}
                className={`
                  relative inline-flex h-7 w-14 
                  items-center rounded-full
                  transition-colors duration-300 ease-in-out
                  ${generateVideo ? (
                    mode === "viral"
                      ? "bg-custom-red"
                      : mode === "business"
                      ? "bg-business-blue"
                      : "bg-bright-green"
                  ) : "bg-gray-200"}
                `}
              >
                <span
                  className={`
                    ${generateVideo ? "translate-x-8" : "translate-x-1"}
                    inline-block h-5 w-5 transform 
                    rounded-full bg-white shadow-lg
                    transition-transform duration-300 ease-in-out
                  `}
                />
              </Switch>
            </div>
            <Button
              type="submit"
              className={`w-full ${getThemeColor()} font-semibold rounded-lg py-3`}
              disabled={isLoading || !topic.trim()} // Also disable if topic is empty
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  {generateVideo ? "Creating..." : "Generating..."}
                </span>
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          {responseData && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              {generateVideo ? (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Your Generated Video:</h3>
                  <video controls className="w-full rounded-lg" src={responseData.videoUrl}></video>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Listen to Your Song:</h3>
                    {responseData.urls?.map((url, index) => (
                      <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                        <audio
                          controls
                          className="w-full"
                          ref={(el) => {
                            audioRefs.current[index] = el
                          }}
                        >
                          <source src={url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ))}
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Lyrics:</h3>
                    <div
                      ref={lyricsRef}
                      className="bg-gray-100 p-6 rounded-lg text-gray-800 overflow-y-auto max-h-[400px] shadow-inner"
                      style={{
                        scrollBehavior: "smooth",
                        lineHeight: "1.8",
                      }}
                    >
                      {(() => {
                        const lyricsLines = responseData.lyrics?.split("\n")
                        const startIndex = lyricsLines?.findIndex((line) => line.includes("Verse 1"))
                        const displayedLyrics = startIndex && startIndex >= 0 ? lyricsLines?.slice(startIndex) : lyricsLines
                        return displayedLyrics?.map((line, index) => (
                          <p
                            key={index}
                            className={`mb-3 ${
                              line.includes("Verse") || line.includes("Chorus") ? "font-bold text-lg mt-4" : "text-base"
                            }`}
                          >
                            {line}
                          </p>
                        ))
                      })()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}