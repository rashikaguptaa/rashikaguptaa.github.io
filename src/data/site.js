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
  description: "PhD candidate at IIM Ahmedabad researching electric vehicles, mobility systems, and transportation and logistics using stochastic models and dynamic optimization.",

  // Each line in quotes becomes one paragraph on the home page.
  bio: [
    "My research focuses on electric vehicles (EVs), mobility systems, and transportation and logistics. I study how operational decisions should adapt to uncertainty and limited resources, with applications in EV charging and intralogistics.",
    "I use Markov decision processes, dynamic programming, queueing models, and simulation to develop and analyze operating policies.",
    "My dissertation, “Dynamic Decision Making in Intralogistics and E-Mobility Systems,” comprises three essays on human–robot collaborative warehouse operations, EV charging admission and mode assignment, and dynamic charging-mode switching. My thesis committee is chaired by Prof. Debjit Roy, with Prof. Prahalad Venkateshan and Prof. Ivo Adan.",
  ],

  email: "phd22rashikag@iima.ac.in",
  address: "Indian Institute of Management Ahmedabad, Vastrapur, Ahmedabad, Gujarat 380015, India",

  // Upload your CV into the public folder as cv.pdf, then change this to "/cv.pdf".
  // While it is "", the CV link stays hidden.
  cv: "",

  links: {
    scholar: "https://scholar.google.com/citations?user=NjkakHIAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0001-7455-7069",
    arxiv: "",
    linkedin: "https://www.linkedin.com/in/rashika-g",
    github: "",
  },

  interests: [
    "Electric vehicles and charging systems",
    "Mobility systems",
    "Transportation and logistics",
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
//  art: "platoon", "warehouse", "ev" or "ev-switching" picks a built-in drawing.
//  image: "/images/research/xyz.jpg" uses your own photo instead.
//  link: "" or a link to the paper ("Learn more" button).
// ------------------------------------------------------------
export const researchIntro =
  "My research focuses on electric vehicles (EVs), mobility systems, and transportation and logistics. I use Markov decision processes, dynamic programming, queueing models, and simulation to study operating policies and resource allocation under uncertainty.";

export const research = [
  {
    category: "thesis",
    label: "Essay 1",
    title: "Order Selection and Robot Routing in Collaborative Warehouses",
    text: "I study how orders should be selected and robots routed in human–robot collaborative warehouses to maximize picking throughput.",
    methods: ["Markov decision processes", "Queueing theory", "Simulation"],
    art: "warehouse",
    image: "",
    link: "",
  },
  {
    category: "thesis",
    label: "Essay 2",
    title: "EV Charging Admission and Mode Assignment",
    text: "I study admission and fast or slow charging-mode assignment for heterogeneous vehicles at charging stations with shared charger and power constraints. The focus is on balancing vehicle waiting costs and charging operating costs, with charging modes fixed during each session.",
    methods: ["Markov decision processes", "Dynamic programming"],
    art: "ev",
    image: "",
    link: "",
  },
  {
    category: "thesis",
    label: "Essay 3",
    title: "Dynamic Charging-Mode Switching",
    text: "I extend the EV charging model to allow ongoing sessions to switch between fast and slow charging at arrival and completion events. I study how admission and mode-switching decisions should respond to changing queues and shared power constraints.",
    methods: ["Markov decision processes", "Dynamic programming"],
    art: "ev-switching",
    image: "",
    link: "",
  },
  {
    category: "publication",
    title: "Truck Platooning in Freight Transportation",
    text: "I study the trade-offs among fuel savings, vehicle throughput, and waiting costs in truck platooning. I use a closed queueing network model to compare intermittent, continuous, and opportunistic platoon formation strategies, accounting for formation delays and stochastic travel times that depend on platoon size.",
    methods: ["Queueing networks", "Continuous-time Markov chains"],
    art: "platoon",
    image: "",
    link: "https://www.sciencedirect.com/science/article/pii/S1366554526000244",
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
  {
    title: "Performance analysis of robot routing strategies in human-robot collaborative warehouses",
    authors: "D Roy, R Gupta",
    venue: "Proceedings of the 17th International Material Handling Research Colloquium (IMHRC)",
    year: 2025,
    type: "conference",
    link: "https://digitalcommons.georgiasouthern.edu/pmhr_2025/6/",
    abstract: "With growing customer expectations of speedy delivery and flexible throughput requirements, fulfillment centers are increasingly adopting human-robot collaborative systems for order picking. Existing research highlights the need for collaboration between pickers and robots to improve warehouse productivity. In this research, we develop a simulation model of the human-robot collaborative system to analyze the role of robot routing strategies in improving system throughput performance. In particular, we analyze three different robot routing strategies: sequential, random, and Probabilistic Shortest Queue routing. Thereafter, we examine the conditions under which a routing strategy outperforms the others.",
    note: "Trondheim, Norway",
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
  { date: "Dec 2024", title: "", event: "India Management Research Conference (IMRC) (2nd Runner-up, Best Research Presentation, Transportation and Logistics Track)", location: "IIM Ahmedabad, India", link: "" },
  { date: "Dec 2024", title: "", event: "POMS India International Conference", location: "IIM Ranchi, India", link: "" },
];

// ------------------------------------------------------------
//  ABOUT PAGE — education, awards, service.
// ------------------------------------------------------------
export const education = [
  { years: "2022 – present", degree: "PhD in Management, Operations & Decision Sciences", institution: "Indian Institute of Management Ahmedabad", detail: "Committee: Debjit Roy (Chair), Prahalad Venkateshan, Ivo Adan" },
  { years: "2021 – 2022", degree: "M.Tech in Environmental Engineering", institution: "Indian Institute of Technology (BHU) Varanasi", detail: "Completed first year" },
  { years: "2017 – 2021", degree: "B.Tech in Civil Engineering", institution: "Institute of Engineering & Technology, Lucknow", detail: "" },
];

export const awards = [
  { year: "2026", text: "First Prize, Student Poster Competition, INFORMS Transportation Science and Logistics Society Triennial Conference, MIT Sloan School of Management", link: "https://mitsloan.mit.edu/faculty/academic-groups/sponsors-2026-transportation-science-and-logistics-conference" },
  { year: "2026", text: "Runner-up, Student Paper Competition, ISB-POMS Workshop, Indian School of Business, Mohali", link: "https://www.isb.edu/events/isb-poms-workshop-2026?" },
  { year: "2026", text: "Industrial Finance Corporation of India (IFCI) Award for Best Thesis Proposal", link: "https://www.iima.ac.in/convocation2026?" },
  { year: "2024", text: "2nd Runner-up, Best Research Presentation, Transportation and Logistics Track, India Management Research Conference (IMRC)", link: "https://conference.iima.ac.in/imrc2024/wp-content/uploads/2024/12/IMRC-2024-Valedictory-Event_V1.6.pdf?" },
];

export const service = [
  "Reviewer: International Journal of Production Research",
  "Doctoral Scholar Coordinator, IIM Ahmedabad",
];

// ------------------------------------------------------------
//  TEACHING — newest first. Shown on the Teaching page.
// ------------------------------------------------------------
export const teaching = [
  {
    term: "Jun 2025",
    course: "Mathematics Preparatory Course for PGP",
    role: "Course instructor",
    institution: "IIM Ahmedabad",
    detail: "Delivered 16 sessions for 200+ PGP and FABM students.",
  },
  {
    term: "Dec 2024 – Jan 2026",
    course: "PGP courses",
    role: "Teaching assistant",
    institution: "IIM Ahmedabad",
    detail: "Provided lecture support, conducted tutorials, graded assignments, and mentored students.",
    courses: [
      "Operations Management I",
      "Operations Management III",
      "Quantitative Methods IB",
      "Quantitative Methods II",
    ],
  },
];
