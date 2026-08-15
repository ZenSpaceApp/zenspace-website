export const MOCK_THERAPISTS = [
  {
    id: 1,
    name: "Dr. Sarah Chen, PsyD",
    specialty: "Anxiety & Career Burnout",
    insurance: ["Blue Cross", "Aetna", "Cigna"],
    rate: "$150/session",
    isLive: true, // This triggers the Pulse
    bio: "Specializing in the unique pressures of the SF tech ecosystem. I help founders and engineers rebuild their 'Zen' using evidence-based CBT and mindfulness.",
    verified: true,
    photo: "/images/therapists/sarah.jpg",
    tags: ["Cognitive Behavioral", "Mindfulness", "LGBTQ+ Affirming"]
  },
  {
    id: 2,
    name: "Marcus Rivera, LMFT",
    specialty: "Grief & Life Transitions",
    insurance: ["Kaiser", "United", "Medi-Cal"],
    rate: "$120/session",
    isLive: true,
    bio: "I focus on the 'Granola' side of healing—helping you reconnect with your core self after profound loss. Let's work through the layers together.",
    verified: true,
    photo: "/images/therapists/marcus.jpg",
    tags: ["Grief Counseling", "Holistic", "Trauma-Informed"]
  },
  {
    id: 3,
    name: "Elena Petrov, LCSW",
    specialty: "Depression & Mood Disorders",
    insurance: ["Blue Shield", "Cash Only"],
    rate: "$175/session",
    isLive: false, // No pulse, but still searchable
    bio: "If you feel like you've been 'gone' for a while, I provide a structured path back. We'll use active learning and cognitive challenges to rebuild your focus.",
    verified: true,
    photo: "/images/therapists/elena.jpg",
    tags: ["DBT", "Neuroplasticity", "Solution-Focused"]
  }
];
