type StoryLink = [id: string, label: string];

type Topic = {
  name: string;
  hint: string;
  intro: string;
  stops: StoryLink[];
};

type Story = {
  name: string;
  role: string;
  period: string;
  topic: string;
  title: string;
  byline?: string;
  paragraphs: string[];
  next: StoryLink[];
};

export const topics: Record<string, Topic> = {
  learning: {
    name: "How do people learn?",
    hint: "Modern Bloom · Google Classroom · Synthesis · Alpha Schools",
    intro: "Tutoring, school infrastructure, and games each offer a different way to look at how people learn.",
    stops: [
      ["bloom", "Look closely at tutoring"],
      ["classroom", "Make school infrastructure work at scale"],
      ["synthesis", "Explore learning through play"],
      ["alpha", "Explore AI tools for schools"]
    ]
  },
  access: {
    name: "Who gets access?",
    hint: "GameAway · Google Maps · ClassDojo",
    intro: "A console, a language, or the way a school adopts software can determine who gets to use a product.",
    stops: [
      ["gameaway", "Play without owning a console"],
      ["maps", "Read a map in your own language"],
      ["classdojo", "Help more schools get started"]
    ]
  },
  context: {
    name: "What gets lost without context?",
    hint: "Hyde · writing",
    intro: "One project looks at context scattered across company data. An essay looks at what happens when old friends go too long without comparing notes.",
    stops: [
      ["hyde", "Connect knowledge scattered across a company"],
      ["friendships", "Borrow an idea from computer science"]
    ]
  }
};

export const stories: Record<string, Story> = {
  bloom: {
    name: "Modern Bloom", role: "Product & Research", period: "2026", topic: "learning",
    title: "What makes tutoring work?",
    paragraphs: [
      "At Modern Bloom, I work on tools that help tutors teach in public schools while gathering evidence about what makes tutoring effective.",
      "The research revisits Bloom’s 2 Sigma study with modern tools. The tutoring and the research happen together, so the team can study what works in practice."
    ],
    next: [["classroom", "Zoom out to the school system"], ["synthesis", "See another way to learn"]]
  },
  hyde: {
    name: "Hyde", role: "Product & Research", period: "2026", topic: "context",
    title: "Build context across company data.",
    paragraphs: [
      "I led Hyde’s first deep agent product deployment to build a context graph across enterprise data.",
      "I also created a benchmark product for specialist models."
    ],
    next: [["bloom", "Follow research into education"], ["friendships", "Look at a more personal kind of context"]]
  },
  gameaway: {
    name: "GameAway", role: "Co-founder", period: "2025", topic: "access",
    title: "Play without owning a console.",
    paragraphs: [
      "I co-founded a cloud gaming platform and grew it across India, Southeast Asia, the Middle East, and South America.",
      "The platform grew revenue 50% month over month."
    ],
    next: [["synthesis", "Follow play into learning"], ["maps", "Follow access into language"]]
  },
  alpha: {
    name: "Alpha Schools", role: "Product consulting", period: "2024–25", topic: "learning",
    title: "Explore AI tools for schools.",
    paragraphs: [
      "I consulted on product for Alpha Schools, exploring what AI could do in a school setting. Around the same time, I explored ideas in education and AI at South Park Commons."
    ],
    next: [["bloom", "Look closely at tutoring"], ["hyde", "Follow AI into company data"]]
  },
  classdojo: {
    name: "ClassDojo", role: "Country Lead, India", period: "2023", topic: "access",
    title: "Help more schools get started.",
    paragraphs: [
      "I led ClassDojo’s growth work in India. During that time, the number of schools with activated users doubled."
    ],
    next: [["classroom", "Follow school adoption into infrastructure"], ["maps", "See another product built for India"]]
  },
  synthesis: {
    name: "Synthesis", role: "Senior Product Manager", period: "2022–23", topic: "learning",
    title: "Explore learning through play.",
    paragraphs: [
      "At Synthesis, I helped shape on-demand play and safer game experiences."
    ],
    next: [["gameaway", "Follow play beyond the classroom"], ["bloom", "See what happens in one-to-one tutoring"]]
  },
  classroom: {
    name: "Google Classroom", role: "Senior Product Manager", period: "2021–22", topic: "learning",
    title: "Make school infrastructure work at scale.",
    paragraphs: [
      "I launched roster sync, which helps districts bring class rosters into Google Classroom. Nearly two million students used it in its first two months.",
      "I also helped shape an Education Leader Hub for large school districts."
    ],
    next: [["classdojo", "Follow school adoption into India"], ["bloom", "Zoom in on the individual learner"]]
  },
  maps: {
    name: "Google Maps", role: "Localization", period: "Google, 2015–22", topic: "access",
    title: "Read a map in your own language.",
    paragraphs: [
      "I worked on transliterating place names for Google Maps in India. Localized Maps coverage grew from 5% to 95%."
    ],
    next: [["gameaway", "Follow access into gaming"], ["classdojo", "Follow another project built for India"]]
  },
  friendships: {
    name: "Garbage Collection in Friendships", role: "Essay", period: "2024", topic: "context",
    title: "Garbage Collection in Friendships",
    byline: "Saumya Dalal · November 4, 2024",
    paragraphs: [
      `I love when programming concepts perfectly capture the messiness of human relationships. Take garbage collection – that behind-the-scenes process that cleans up unused memory and keeps your program running smoothly. Turns out, friendships need their own version of garbage collection too.`,
      `Here's the thing about old friendships: they're like legacy code. Robust, reliable, built to last. These are the friends who've seen you through your most awkward phases and still chose to stick around. You know they're not going anywhere – they're too deeply integrated into your life's codebase.`,
      `But just like any long-running program, friendships accumulate their own kind of memory leaks. Those tiny moments of irritation you swallow because "it's not worth mentioning." The slight changes in their personality that catch you off guard – when did they start using a vape like a pacifier? The inside jokes that don't land quite right anymore because you've both grown in different directions.`,
      `When you meet someone once a year instead of every day, these small misunderstandings don't get cleared up naturally. They sit there, taking up emotional memory space – until suddenly, your friendship starts throwing unexpected errors.`,
      `That's what happened with one of my dear old friends last month. I was thrown an "out of memory" error when I realized I hadn't made his wedding guest list. When I finally caught up with him over drinks in New York, he spilled years worth of grievances – incident after incident where I had hurt him. What he saw as deliberate slights were usually just misunderstandings, and what remained just needed acknowledgment – a simple "I get why that bothered you."`,
      `This is what makes friendship garbage collection different from regular arguments: it's not about being right or wrong. It's about clearing the cache, releasing the built-up tension, and making space for new memories. It's saying, "Hey, this tiny thing you did makes me feel weird, and I'm telling you because I trust our friendship can handle this conversation."`,
      `The beautiful part? Just like in programming, good garbage collection makes everything run more smoothly. My friend? We're back to our normal runtime environment – just the clean execution of a friendship built on two decades of shared history.`,
      `After all, the best programs, like the best friendships, aren't just built – they're maintained.`,
      `- Saums`
    ],
    next: [["hyde", "See how context gets lost inside organizations"]]
  }
};
