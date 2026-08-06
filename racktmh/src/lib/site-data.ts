export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Our Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
  { label: "Join Us", href: "/join" },
] as const;

export const heroStats = [
  { value: 18, suffix: "+", label: "Projects Completed" },
  { value: 84, suffix: "+", label: "Members Engaged" },
  { value: 12, suffix: "+", label: "Partner Organizations" },
  { value: 9, suffix: "+", label: "Years of Service" },
] as const;

export const previewSections = [
  {
    id: "about-preview",
    title: "About Us",
    href: "/about",
    description:
      "A Rotaract club shaped by practical service, leadership learning, and steady collaboration with community partners across Kathmandu.",
    bullets: ["Community-first projects", "Leadership development", "Rotary-aligned service"],
    metric: "From planning rooms to fieldwork",
  },
  {
    id: "team-preview",
    title: "Our Team",
    href: "/team",
    description:
      "A compact executive board, committee leads, and active members working across programs with clear ownership and shared momentum.",
    bullets: ["Executive board", "Committee chairs", "Past president network"],
    metric: "Small structure, wide reach",
  },
  {
    id: "impact-preview",
    title: "Our Impact",
    href: "/impact",
    description:
      "Projects that pair service with measurable action: education, environment, health, and long-term local partnerships.",
    bullets: ["Hands-on projects", "Community outcomes", "Youth leadership"],
    metric: "Service with visible follow-through",
  },
  {
    id: "contact-preview",
    title: "Contact",
    href: "/contact",
    description:
      "Reach the club for partnerships, volunteer enquiries, meeting details, or event coordination.",
    bullets: ["Quick response", "Meeting info", "Partnership enquiries"],
    metric: "Open channel for collaboration",
  },
  {
    id: "join-preview",
    title: "Join Us",
    href: "/join",
    description:
      "Membership for young people who want a structured way to serve, grow professionally, and build long-term friendships.",
    bullets: ["Clear process", "Member benefits", "Mentorship and fellowship"],
    metric: "A practical path into Rotaract",
  },
] as const;

export const aboutHighlights = [
  {
    title: "History",
    description:
      "Built to connect young leaders with service opportunities that feel local, practical, and consistent.",
    icon: "sparkles",
  },
  {
    title: "Mission",
    description:
      "To develop leadership while delivering community service that creates visible value for people in Kathmandu.",
    icon: "handshake",
  },
  {
    title: "Vision",
    description:
      "A club known for thoughtful service, disciplined teamwork, and partnerships that outlast each project cycle.",
    icon: "globe",
  },
  {
    title: "Core Values",
    description:
      "Service, integrity, fellowship, accountability, and steady growth through shared responsibility.",
    icon: "shield",
  },
] as const;

export const clubTimeline = [
  {
    year: "Foundation",
    title: "Club identity takes shape",
    description:
      "The club established a service-led culture with regular planning, partner outreach, and fellowship events.",
  },
  {
    year: "Growth",
    title: "Programs expand beyond one-off projects",
    description:
      "Community activities began to include repeat initiatives, stronger documentation, and cross-club collaboration.",
  },
  {
    year: "Today",
    title: "A steady model for youth service",
    description:
      "The club now balances service, professional development, and international fellowship with clearer systems.",
  },
] as const;

export const achievements = [
  {
    title: "Community days",
    description: "Regular service activity with local schools, neighborhoods, and civic partners.",
    stat: "20+",
  },
  {
    title: "Professional sessions",
    description: "Workshops that sharpen public speaking, project planning, and collaborative leadership.",
    stat: "12+",
  },
  {
    title: "Club partnerships",
    description: "Relationships built with Rotary network partners and youth-friendly institutions.",
    stat: "10+",
  },
] as const;

export const teamBlocks = [
  {
    title: "Executive Board",
    description:
      "President, Secretary, Treasurer, and directors who keep the club moving with clear priorities and communication.",
    roles: ["President", "Secretary", "Treasurer", "Vice President"],
  },
  {
    title: "Board Members",
    description:
      "Members leading service, communication, design, membership, and event execution.",
    roles: ["Programs", "Design", "Membership", "Public Relations"],
  },
  {
    title: "Committee Leads",
    description:
      "Project owners who turn ideas into schedules, partner calls, and on-the-ground delivery.",
    roles: ["Community Service", "Professional Development", "Fellowship", "Environment"],
  },
  {
    title: "Past Presidents",
    description:
      "A continuity network offering guidance, institutional memory, and mentorship to the current team.",
    roles: ["Advisory support", "Transition planning", "Mentorship"],
  },
] as const;

export const impactPrograms = [
  {
    title: "Projects",
    description:
      "Small, repeatable efforts that solve a real need instead of creating short-lived visibility.",
    icon: "heart-handshake",
    metric: "18 initiatives",
  },
  {
    title: "Community Service",
    description:
      "Clean-ups, awareness campaigns, donation drives, and hands-on outreach with local beneficiaries.",
    icon: "users",
    metric: "4 districts reached",
  },
  {
    title: "Professional Development",
    description:
      "Talks, peer sessions, and leadership labs built for young professionals and students.",
    icon: "briefcase-business",
    metric: "Monthly sessions",
  },
  {
    title: "International Service",
    description:
      "Partnerships and Rotaract exchanges that keep the club connected to a broader service network.",
    icon: "globe",
    metric: "Global ties",
  },
  {
    title: "Club Service",
    description:
      "Internal projects focused on member wellbeing, transitions, and the quality of the club experience.",
    icon: "badge-check",
    metric: "Member-first",
  },
  {
    title: "Environmental Activities",
    description:
      "Tree planting, waste reduction, and awareness campaigns designed to keep the work practical.",
    icon: "leaf",
    metric: "Seasonal action",
  },
] as const;

export const impactStats = [
  { value: 18, suffix: "+", label: "Projects" },
  { value: 38, suffix: "+", label: "Service Days" },
  { value: 14, suffix: "+", label: "Partners" },
  { value: 220, suffix: "+", label: "People Reached" },
] as const;

export const impactStories = [
  {
    title: "Education support",
    description:
      "A hands-on program that paired school material support with a clean, dignified service experience.",
  },
  {
    title: "Community clean-up",
    description:
      "A visible neighborhood action day that combined waste collection, awareness, and local partnership.",
  },
  {
    title: "Leadership workshop",
    description:
      "A practical session for members and guests focused on communication, planning, and project ownership.",
  },
] as const;

export const contactDetails = [
  { label: "Address", value: "Kathmandu Height, Nepal" },
  { label: "Email", value: "hello@racktmh.org" },
  { label: "Phone", value: "+977 98XXXXXXXX" },
  { label: "Meetings", value: "Second and fourth Saturday" },
] as const;

export const officeHours = [
  { day: "Monday - Friday", time: "10:00 AM - 6:00 PM" },
  { day: "Saturday", time: "By appointment and club meetings" },
] as const;

export const contactFaqs = [
  {
    question: "How can I reach the club about a partnership?",
    answer:
      "Use the contact form or email the club with the project outline, timeline, and the support you are looking for.",
  },
  {
    question: "Do you accept volunteers outside the club?",
    answer:
      "Yes. We welcome volunteers and collaborators for specific service activities when a project needs extra hands.",
  },
  {
    question: "Can I visit a meeting before joining?",
    answer:
      "Yes. Send a short note and the club will share the next meeting schedule or a guest invitation.",
  },
] as const;

export const joinBenefits = [
  {
    title: "Service with structure",
    description: "A club that turns goodwill into consistent projects and a dependable membership rhythm.",
  },
  {
    title: "Leadership practice",
    description: "Opportunities to lead events, speak in public, and work in a team where accountability matters.",
  },
  {
    title: "Rotary network access",
    description: "Closer connection to Rotaract and Rotary spaces, including district events and collaborations.",
  },
  {
    title: "Fellowship and growth",
    description: "A supportive group of members who build friendships while learning through service.",
  },
] as const;

export const membershipSteps = [
  {
    title: "Inquiry",
    description: "Share a few details about your background, interests, and why Rotaract matters to you.",
  },
  {
    title: "Conversation",
    description: "A club representative follows up with meeting information and a short introduction call.",
  },
  {
    title: "Orientation",
    description: "You receive an overview of expectations, club rhythm, and where you can contribute first.",
  },
  {
    title: "Membership",
    description: "After orientation and confirmation, you join the club and begin participating in projects.",
  },
] as const;

export const joinFaqs = [
  {
    question: "Who can join Rotaract Club of Kathmandu Height?",
    answer:
      "Young professionals and students who meet the club's age and participation expectations can apply.",
  },
  {
    question: "What is expected after joining?",
    answer:
      "Members are expected to stay active, attend meetings, support projects, and maintain a collaborative attitude.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Any dues or participation fees should be confirmed with the club during the application process.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "The club has a strong balance of service and fellowship. You feel useful from the first project.",
    author: "Member perspective",
  },
  {
    quote:
      "What stands out is the discipline: meetings, projects, and follow-through all feel intentional.",
    author: "Project volunteer",
  },
  {
    quote:
      "Joining gave me a practical place to lead, learn, and contribute without losing the human side of service.",
    author: "Young professional",
  },
] as const;

export const galleryHighlights = [
  {
    title: "Service day",
    description: "Direct action, clear roles, and a visible result.",
  },
  {
    title: "Leadership session",
    description: "Members learning by doing, not just observing.",
  },
  {
    title: "Community partnership",
    description: "A project built with a local organization and shared trust.",
  },
  {
    title: "Fellowship night",
    description: "Rotaract is serious work, but never without warmth.",
  },
] as const;

export const partnerNames = [
  "Rotary network",
  "Local schools",
  "Health partners",
  "Youth groups",
  "Civic organizations",
  "Community donors",
] as const;