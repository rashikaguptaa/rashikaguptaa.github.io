// ============================================================
//  YOUR WEBSITE CONTENT — edit this file to change the site.
//  Replace everything in quotes. Keep the quotes and commas.
//  To remove an item, delete its whole { ... }, line.
//  To leave a link out, set it to "" (empty quotes).
//  Anything marked [ADD ...] still needs your input.
// ============================================================

export const site = {
  name: "Rashika Gupta",
  position: "PhD Candidate, Operations & Decision Sciences",
  affiliation: "Indian Institute of Management Ahmedabad",

  // CHANGE THIS to your photo's file name in public/images/
  photo: "/images/formal.jpg",

  // A one-line summary shown in search results and link previews.
  description: "PhD candidate at IIM Ahmedabad working on Markov decision processes and queueing models for warehouse operations, EV charging, and freight transportation.",

  // Each line in quotes becomes one paragraph on the home page.
  bio: [
    "As a doctoral student in operations management, I study how logistics and mobility systems can make better decisions in the face of uncertainty. My work designs operating policies that help these systems run more efficiently and more sustainably, with a focus on warehouse operations, transportation and logistics.",
    "My research draws on stochastic models, including queueing networks, continuous-time Markov chains, simulation, and Markov decision processes. Current applications include robot routing in warehouses, admission and power allocation at EV charging stations, and truck platooning in freight transportation.",
    "My dissertation, “Dynamic decision making in intralogistics and e-mobility systems,” is supervised by a committee chaired by Prof. Debjit Roy, with Prof. Prahalad Venkateshan and Prof. Ivo Adan.",
  ],

  email: "phd22rashikag@iima.ac.in",
  address: "Indian Institute of Management Ahmedabad, Vastrapur, Ahmedabad, Gujarat 380015, India",

  // Upload your CV into the public folder as cv.pdf, then change this to "/cv.pdf".
  // While it is "", the CV link stays hidden.
  cv: "",

  links: {
    scholar: "",   // [ADD] your Google Scholar link, once you create a profile
    orcid: "https://orcid.org/0009-0001-7455-7069",
    arxiv: "",
    linkedin: "https://www.linkedin.com/in/rashika-g",
    github: "",
  },

  // Short items shown under "News" on the home page and the About page, newest first.
  // link is optional.
  news: [
    { date: "2026", text: "Won First Prize in the Student Poster Competition at the INFORMS Transportation Science and Logistics Society Triennial Conference, MIT Sloan School of Management.", link: "" },
    { date: "2026", text: "Our paper on stochastic modeling and design of truck platooning strategies is published in Transportation Research Part E.", link: "https://www.sciencedirect.com/science/article/pii/S1366554526000244" },
    { date: "2026", text: "Runner-up in the Student Paper Competition at the ISB-POMS Workshop, Indian School of Business, Mohali.", link: "" },
    { date: "Dec 2025", text: "Presented at the India Management Research Conference (IMRC), IIM Ahmedabad.", link: "" },
    { date: "Jul 2025", text: "Presented a poster at the ISB-POMS Workshop, Indian School of Business, Hyderabad.", link: "" },
    { date: "Jun 2025", text: "Taught the Mathematics Preparatory Course to 200+ incoming PGP and FABM students at IIM Ahmedabad.", link: "" },
    { date: "Dec 2024", text: "Runner-up, Best Research Presentation, India Management Research Conference (IMRC).", link: "" },
  ],

  interests: [
    "Warehouse operations and intralogistics",
    "Electric vehicle charging",
    "Freight transportation",
    "Last mile delivery",
  ],
};

// ------------------------------------------------------------
//  PHOTO BANNER — rotating photos on the home page, with captions.
//  Put photos in public/images/banner/ and list them here.
//  While the list is empty, the banner stays hidden.
// ------------------------------------------------------------
export const banner = [
  // { src: "/images/banner/mit-sloan.jpg", caption: "Receiving the TSL Student Poster Prize at MIT Sloan, 2026" },
  // { src: "/images/banner/imrc.jpg", caption: "Presenting at IMRC, IIM Ahmedabad" },
];

// ------------------------------------------------------------
//  RESEARCH AREAS — shown on the Research page.
//  art: "platoon", "warehouse" or "ev" picks a built-in drawing.
//  image: "/images/research/xyz.jpg" uses your own photo instead.
//  link: "" or a link to the paper ("Learn more" button).
// ------------------------------------------------------------
export const researchIntro =
  "I build stochastic models of operational systems (queueing networks, continuous-time Markov chains, and Markov decision processes) and use them to design operating policies that adapt to uncertainty. My dissertation, “Dynamic decision making in intralogistics and e-mobility systems,” develops these ideas in three areas.";

export const research = [
  {
    title: "Truck Platooning in Freight Transportation",
    text: "Trucks travelling in closely spaced platoons save fuel, but waiting to form a platoon causes coordination delays. I model platoon formation as a queueing network and use Markov decision processes to find formation strategies that balance throughput and fuel efficiency.",
    methods: ["Queueing networks", "Continuous-time Markov chains", "Markov decision processes"],
    art: "platoon",
    image: "",
    link: "https://www.sciencedirect.com/science/article/pii/S1366554526000244",
  },
  {
    title: "Robotic Warehouses and Intralogistics",
    text: "In robot-based warehouses, the choice of which orders to process and how to route robots determines throughput and order lead times. I study how routing and order selection decisions should respond to the state of the system.",
    methods: ["Queueing networks", "Markov decision processes", "Simulation"],
    art: "warehouse",
    image: "",
    link: "",
  },
  {
    title: "Electric Vehicle Charging Operations",
    text: "A charging station with limited power must decide which arriving vehicles to admit and how to divide power among them. I characterize optimal admission and power-aware charging policies for multiple classes of electric vehicles.",
    methods: ["Dynamic programming", "Markov decision processes"],
    art: "ev",
    image: "",
    link: "",
  },
];

// ------------------------------------------------------------
//  PUBLICATIONS — newest first.
//  type: "journal", "conference", "preprint" or "working" (working papers)
//  selected: true  → marks a key paper (not shown separately at the moment)
//  status: e.g. "Under review" or "Major revision" (shown as a small label)
//  Optional extras: abstract, note, code, slides, bibtex
// ------------------------------------------------------------
export const publications = [
  {
    title: "Stochastic modeling and design of truck platooning strategies considering platoon dynamics",
    authors: "R Gupta, DK Baby, D Roy, SC Subramanian, S Chakrabarti",
    venue: "Transportation Research Part E: Logistics and Transportation Review",
    year: 2026,
    type: "journal",
    link: "https://www.sciencedirect.com/science/article/pii/S1366554526000244",   // [CHECK] swap for the DOI link ("https://doi.org/10.1016/j.tre....") once confirmed
    pdf: "",
    abstract: "Road transportation via trucks is a dominant mode for long-haul freight transport across countries. However, due to their significant dependence on fossil fuels, trucks are a large contributor to carbon emissions. Hence, new technology-driven solutions such as truck platoons are gaining momentum. While platoons promise to reduce fuel costs and emissions, they may increase transportation time due to additional coordination delays, such as the time required for platoon formation. In this research, we examine the performance trade-offs between platoon fuel savings and excess delay costs resulting from waiting for platoon formation among three platoon formation strategies: intermittent, continuous, and opportunistic. We develop a novel Closed Queuing Network model that captures the dynamics of platoons, as well as the stochasticity in truck travel times, and provides realistic estimates of platoon wait times and vehicle throughput. The platoon formation delays and size-dependent travel times are modeled using merging and load-dependent nodes, respectively, and analyzed through a continuous-time Markov chain. Our study provides key insights into the impact of increasing platoon size on performance measures, including system throughput and mean waiting time. With platooning, the network throughput capacity is reduced; however, fuel savings are realized. For a given network topology, we can identify an optimal platoon formation strategy that maximizes the throughput and fuel efficiency, while simultaneously minimizing vehicle waiting costs.",
    selected: true,
  },
];

// ------------------------------------------------------------
//  CONFERENCE PRESENTATIONS — newest first.
//  Shown on the Publications page. Leave title as "" to show only the conference.
// ------------------------------------------------------------
export const talks = [
  { date: "2026", title: "", event: "INFORMS TSL Society Triennial Conference (Student Poster Competition, First Prize)", location: "MIT Sloan School of Management, Cambridge, MA, USA", link: "" },
  { date: "2026", title: "", event: "ISB-POMS Workshop (Student Paper Competition, Runner-up)", location: "Indian School of Business, Mohali, India", link: "" },
  { date: "2026", title: "", event: "POMS 2026 Annual Conference", location: "Reno, NV, USA", link: "" },
  { date: "Dec 2025", title: "", event: "India Management Research Conference (IMRC)", location: "IIM Ahmedabad, India", link: "" },
  { date: "Jul 2025", title: "", event: "ISB-POMS Workshop (Student Poster Presentation)", location: "Indian School of Business, Hyderabad, India", link: "" },
  { date: "Dec 2024", title: "", event: "India Management Research Conference (IMRC) (Runner-up, Best Research Presentation)", location: "IIM Ahmedabad, India", link: "" },
  { date: "Dec 2024", title: "", event: "POMS India International Conference", location: "IIM Ranchi, India", link: "" },
];

// ------------------------------------------------------------
//  ABOUT PAGE — education, awards, service.
// ------------------------------------------------------------
export const education = [
  { years: "2022 – present", degree: "PhD in Management, Operations & Decision Sciences", institution: "Indian Institute of Management Ahmedabad", detail: "Committee: Debjit Roy (Chair), Prahalad Venkateshan, Ivo Adan" },
  { years: "2021 – 2022", degree: "M.Tech, Environmental Engineering (discontinued)", institution: "Indian Institute of Technology (BHU) Varanasi", detail: "" },
  { years: "2017 – 2021", degree: "B.Tech in Civil Engineering", institution: "Institute of Engineering & Technology", detail: "" },
];

export const awards = [
  { year: "2026", text: "First Prize, Student Poster Competition, INFORMS Transportation Science and Logistics Society Triennial Conference, MIT Sloan School of Management" },
  { year: "2026", text: "Runner-up, Student Paper Competition, ISB-POMS Workshop, Indian School of Business, Mohali" },
  { year: "2024", text: "Runner-up, Best Research Presentation, India Management Research Conference (IMRC)" },
  { year: "", text: "Industrial Finance Corporation of India (IFCI) Award for Best Thesis Proposal" },
  { year: "", text: "Mirae Asset Foundation Scholarship, IIM Ahmedabad" },
];

export const service = [
  "Reviewer, International Journal of Production Research",
  "Doctoral Scholar Coordinator, IIM Ahmedabad",
];

// ------------------------------------------------------------
//  TEACHING — newest first. Shown on the Teaching page.
// ------------------------------------------------------------
export const teaching = [
  { term: "Jun 2025", course: "Mathematics Preparatory Course for PGP", role: "Course instructor (16 sessions, 200+ PGP and FABM students)", institution: "IIM Ahmedabad" },
  { term: "Dec 2024 – Jan 2026", course: "Operations Management", role: "Academic assistant", institution: "IIM Ahmedabad" },
  { term: "Dec 2024 – Jan 2026", course: "Quantitative Methods", role: "Academic assistant", institution: "IIM Ahmedabad" },
];
