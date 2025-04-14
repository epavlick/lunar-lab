"use client"

import type { Video } from "@/data/videos"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

interface VideosListProps {
  videos: Video[]
}

export default function VideosList({ videos }: VideosListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
          <div className="relative aspect-video overflow-hidden group">
            <img
              src={video.thumbnailUrl || "/placeholder.svg"}
              alt={video.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white text-purple-900 hover:bg-white hover:text-purple-700"
                onClick={() => window.open(video.videoUrl, "_blank")}
              >
                <Play className="h-6 w-6" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-purple-900">{video.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-2">{video.date}</p>
            <p>{video.description}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => window.open(video.videoUrl, "_blank")}>
              <ExternalLink className="mr-2 h-4 w-4" /> Watch Video
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
