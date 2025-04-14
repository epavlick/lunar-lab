export interface Video {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  date: string
}

export const videosData: Video[] = [
  {
    id: "video1",
    title: "Introduction to LUNAR Lab Research",
    description: "An overview of our lab's research areas and recent projects.",
    thumbnailUrl: "/ai-research-purple.png",
    videoUrl: "https://www.youtube.com/watch?v=example1",
    date: "October 15, 2023",
  },
  {
    id: "video2",
    title: "Neural Reasoning Techniques",
    description: "Prof. Jane Smith explains our latest work on neural reasoning over hierarchical structures.",
    thumbnailUrl: "/abstract-purple-network.png",
    videoUrl: "https://www.youtube.com/watch?v=example2",
    date: "August 3, 2023",
  },
  {
    id: "video3",
    title: "Multimodal Learning Workshop",
    description: "Recording of our workshop on multimodal learning with limited supervision.",
    thumbnailUrl: "/ai-research-purple.png",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    date: "June 22, 2023",
  },
  {
    id: "video4",
    title: "Human-AI Collaboration: Future Directions",
    description: "Panel discussion on the future of human-AI collaboration research.",
    thumbnailUrl: "/ai-panel-purple.png",
    videoUrl: "https://www.youtube.com/watch?v=example4",
    date: "May 10, 2023",
  },
]
