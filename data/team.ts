export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  website?: string
  github?: string
  twitter?: string
  googleScholar?: string
  email?: string
}

export const teamData: TeamMember[] = [
  {
    id: "faculty1",
    name: "Prof. Jane Smith",
    role: "Principal Investigator",
    image: "/confident-professor.png",
    bio: "Jane Smith is an Associate Professor of Computer Science at Brown University. Her research focuses on machine learning theory and applications to natural language processing.",
    website: "https://example.com/janesmith",
    github: "https://github.com/janesmith",
    twitter: "https://twitter.com/janesmith",
    googleScholar: "https://scholar.google.com/citations?user=janesmith",
    email: "jane_smith@brown.edu",
  },
  {
    id: "postdoc1",
    name: "Dr. Robert Chen",
    role: "Postdoctoral Researcher",
    image: "/focused-scientist.png",
    bio: "Robert Chen completed his PhD at MIT and is now working on multimodal learning and representation learning.",
    website: "https://example.com/robertchen",
    github: "https://github.com/robertchen",
    googleScholar: "https://scholar.google.com/citations?user=robertchen",
    email: "robert_chen@brown.edu",
  },
  {
    id: "phd1",
    name: "Sarah Williams",
    role: "PhD Student",
    image: "/confident-grad-portrait.png",
    bio: "Sarah is a third-year PhD student working on natural language understanding and reasoning.",
    github: "https://github.com/sarahwilliams",
    twitter: "https://twitter.com/sarahwilliams",
    email: "sarah_williams@brown.edu",
  },
  {
    id: "phd2",
    name: "Michael Brown",
    role: "PhD Student",
    image: "/confident-grad-student.png",
    bio: "Michael is a second-year PhD student focusing on reinforcement learning and decision making.",
    github: "https://github.com/michaelbrown",
    googleScholar: "https://scholar.google.com/citations?user=michaelbrown",
    email: "michael_brown@brown.edu",
  },
  {
    id: "phd3",
    name: "Emily Taylor",
    role: "PhD Student",
    image: "/confident-grad-portrait.png",
    bio: "Emily is a fourth-year PhD student researching causal inference and its applications to healthcare.",
    website: "https://example.com/emilytaylor",
    twitter: "https://twitter.com/emilytaylor",
    email: "emily_taylor@brown.edu",
  },
  {
    id: "masters1",
    name: "David Lee",
    role: "Master's Student",
    image: "/confident-grad-student.png",
    bio: "David is a Master's student working on efficient algorithms for large-scale machine learning.",
    github: "https://github.com/davidlee",
    email: "david_lee@brown.edu",
  },
  {
    id: "undergrad1",
    name: "Olivia Rodriguez",
    role: "Undergraduate Researcher",
    image: "/placeholder.svg?height=400&width=400&query=professional headshot of female undergraduate student",
    bio: "Olivia is a senior undergraduate student contributing to projects on human-AI collaboration.",
    github: "https://github.com/oliviarodriguez",
    email: "olivia_rodriguez@brown.edu",
  },
  {
    id: "undergrad2",
    name: "Daniel Kim",
    role: "Undergraduate Researcher",
    image: "/placeholder.svg?height=400&width=400&query=professional headshot of male undergraduate student",
    bio: "Daniel is a junior undergraduate student working on multimodal learning projects.",
    github: "https://github.com/danielkim",
    email: "daniel_kim@brown.edu",
  },
]
