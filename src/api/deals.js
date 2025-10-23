// Mock investment deals data
const mockDeals = [
  {
    id: 1,
    name: "TechFlow Ventures Series A",
    company: "TechFlow Inc.",
    sector: "SaaS",
    stage: "Series A",
    amount: 15000000,
    score: 8.5,
    description: "AI-powered workflow automation platform for enterprise clients. Strong recurring revenue model with 150% net revenue retention.",
    metrics: {
      revenue: "$2.4M ARR",
      growth: "300% YoY",
      customers: 45,
      teamSize: 28
    },
    investors: ["Accel Partners", "Index Ventures"],
    founded: 2021,
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "GreenEnergy Solutions Seed",
    company: "GreenEnergy Solutions",
    sector: "CleanTech",
    stage: "Seed",
    amount: 3500000,
    score: 7.2,
    description: "Solar panel efficiency optimization using machine learning. Targeting residential and commercial markets.",
    metrics: {
      revenue: "$450K ARR",
      growth: "180% YoY",
      customers: 12,
      teamSize: 15
    },
    investors: ["Breakthrough Energy Ventures"],
    founded: 2022,
    location: "Austin, TX"
  },
  {
    id: 3,
    name: "HealthTech Analytics Series B",
    company: "MedInsight Analytics",
    sector: "HealthTech",
    stage: "Series B",
    amount: 25000000,
    score: 9.1,
    description: "Healthcare data analytics platform helping hospitals reduce costs and improve patient outcomes through predictive insights.",
    metrics: {
      revenue: "$8.2M ARR",
      growth: "220% YoY",
      customers: 78,
      teamSize: 65
    },
    investors: ["Andreessen Horowitz", "GV", "Bessemer Venture Partners"],
    founded: 2019,
    location: "Boston, MA"
  },
  {
    id: 4,
    name: "FinTech Disruptor Seed",
    company: "PayFlow Technologies",
    sector: "FinTech",
    stage: "Seed",
    amount: 5000000,
    score: 6.8,
    description: "Digital payment infrastructure for emerging markets. Focus on cross-border transactions and financial inclusion.",
    metrics: {
      revenue: "$680K ARR",
      growth: "250% YoY",
      customers: 23,
      teamSize: 18
    },
    investors: ["Ribbit Capital", "QED Investors"],
    founded: 2022,
    location: "New York, NY"
  },
  {
    id: 5,
    name: "EdTech Revolution Series A",
    company: "LearnSmart Platform",
    sector: "EdTech",
    stage: "Series A",
    amount: 12000000,
    score: 8.0,
    description: "Personalized learning platform using AI to adapt curriculum to individual student needs. Strong adoption in K-12 schools.",
    metrics: {
      revenue: "$1.8M ARR",
      growth: "400% YoY",
      customers: 156,
      teamSize: 32
    },
    investors: ["Owl Ventures", "Reach Capital"],
    founded: 2020,
    location: "Seattle, WA"
  },
  {
    id: 6,
    name: "Cybersecurity Shield Series C",
    company: "SecureNet Systems",
    sector: "Cybersecurity",
    stage: "Series C",
    amount: 45000000,
    score: 9.3,
    description: "Enterprise cybersecurity platform with AI-driven threat detection. Protecting Fortune 500 companies from advanced persistent threats.",
    metrics: {
      revenue: "$18.5M ARR",
      growth: "180% YoY",
      customers: 234,
      teamSize: 145
    },
    investors: ["Sequoia Capital", "Lightspeed Venture Partners", "CRV"],
    founded: 2018,
    location: "Palo Alto, CA"
  }
];

/**
 * Simulates fetching investment deals from an API
 * @returns {Promise<Array>} Promise that resolves to array of deal objects
 */
export const fetchDeals = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate occasional API failures (5% chance)
      if (Math.random() < 0.05) {
        reject(new Error('Failed to fetch deals. Please try again.'));
        return;
      }
      
      resolve([...mockDeals]);
    }, 800 + Math.random() * 400); // Random delay between 800-1200ms
  });
};

/**
 * Simulates fetching a single deal by ID
 * @param {number} dealId - The ID of the deal to fetch
 * @returns {Promise<Object|null>} Promise that resolves to deal object or null if not found
 */
export const fetchDealById = (dealId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.05) {
        reject(new Error('Failed to fetch deal details. Please try again.'));
        return;
      }
      
      const deal = mockDeals.find(d => d.id === dealId);
      resolve(deal || null);
    }, 300 + Math.random() * 200);
  });
};
