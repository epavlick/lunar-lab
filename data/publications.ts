export interface Publication {
  id: string
  title: string
  authors: string[]
  conference: string
  year: number
  link: string
  abstract: string
  tags: string[]
}

export const publicationsData: Publication[] = [
  {
    id: "pub1",
    title: "Neural Reasoning over Hierarchical Structures",
    authors: ["Jane Smith", "John Doe", "Alice Johnson"],
    conference: "NeurIPS",
    year: 2023,
    link: "https://example.com/paper1",
    abstract:
      "This paper introduces a novel neural architecture for reasoning over hierarchical structures, demonstrating improved performance on complex reasoning tasks.",
    tags: ["reasoning", "neural networks", "hierarchical structures"],
  },
  {
    id: "pub2",
    title: "Multimodal Learning with Limited Supervision",
    authors: ["Robert Chen", "Sarah Williams", "Michael Brown"],
    conference: "ICML",
    year: 2023,
    link: "https://example.com/paper2",
    abstract:
      "We present a new approach to multimodal learning that requires significantly less labeled data while maintaining competitive performance on benchmark tasks.",
    tags: ["multimodal learning", "few-shot learning", "semi-supervised learning"],
  },
  {
    id: "pub3",
    title: "Efficient Algorithms for Causal Discovery in Large Networks",
    authors: ["David Lee", "Emily Taylor", "James Wilson"],
    conference: "AAAI",
    year: 2022,
    link: "https://example.com/paper3",
    abstract:
      "This work introduces scalable algorithms for causal discovery that can handle large-scale networks with thousands of variables.",
    tags: ["algorithms", "causal discovery", "networks"],
  },
  {
    id: "pub4",
    title: "Human-AI Collaboration for Complex Problem Solving",
    authors: ["Lisa Garcia", "Thomas Martin", "Karen White"],
    conference: "CHI",
    year: 2022,
    link: "https://example.com/paper4",
    abstract:
      "We study how humans and AI systems can effectively collaborate to solve complex problems that neither can solve optimally alone.",
    tags: ["human-AI collaboration", "problem solving", "interactive systems"],
  },
  {
    id: "pub5",
    title: "Robust Representation Learning for Cross-Domain Adaptation",
    authors: ["Kevin Zhang", "Olivia Rodriguez", "Daniel Kim"],
    conference: "ICLR",
    year: 2022,
    link: "https://example.com/paper5",
    abstract:
      "This paper presents a novel approach to learning representations that are robust to domain shift, enabling more effective transfer learning across diverse domains.",
    tags: ["representation learning", "domain adaptation", "transfer learning"],
  },
  {
    id: "pub6",
    title: "Interpretable Deep Learning for Natural Language Understanding",
    authors: ["Sophia Patel", "Ryan Jackson", "Emma Thompson"],
    conference: "ACL",
    year: 2021,
    link: "https://example.com/paper6",
    abstract:
      "We develop interpretable deep learning models for natural language understanding that provide explanations for their predictions without sacrificing performance.",
    tags: ["interpretability", "natural language understanding", "deep learning"],
  },
  {
    id: "pub7",
    title: "Network Analysis for Social Computing Applications",
    authors: ["Michael Johnson", "Sarah Davis", "Robert Wilson"],
    conference: "WWW",
    year: 2023,
    link: "https://example.com/paper7",
    abstract:
      "This paper presents novel network analysis techniques for social computing applications, enabling better understanding of community structures and information flow.",
    tags: ["networks", "social computing", "community detection"],
  },
  {
    id: "pub8",
    title: "Logical Reasoning in Knowledge Graphs",
    authors: ["Jennifer Lee", "David Brown", "Emily White"],
    conference: "ISWC",
    year: 2022,
    link: "https://example.com/paper8",
    abstract:
      "We introduce a framework for logical reasoning over knowledge graphs that can handle uncertainty and incomplete information.",
    tags: ["reasoning", "knowledge graphs", "uncertainty"],
  },
  {
    id: "pub9",
    title: "Few-Shot Learning for Natural Language Processing Tasks",
    authors: ["Thomas Anderson", "Maria Garcia", "James Wilson"],
    conference: "EMNLP",
    year: 2023,
    link: "https://example.com/paper9",
    abstract:
      "This paper explores few-shot learning approaches for various NLP tasks, demonstrating how to achieve strong performance with limited labeled data.",
    tags: ["few-shot learning", "natural language processing", "transfer learning"],
  },
  {
    id: "pub10",
    title: "Deep Reinforcement Learning for Robotic Manipulation",
    authors: ["Alex Johnson", "Sarah Miller", "David Chen"],
    conference: "ICRA",
    year: 2022,
    link: "https://example.com/paper10",
    abstract:
      "We present a deep reinforcement learning approach for robotic manipulation tasks that can generalize to novel objects and environments.",
    tags: ["deep learning", "reinforcement learning", "robotics"],
  },
]
