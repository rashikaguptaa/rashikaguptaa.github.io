// ============================================================
//  YOUR WEBSITE CONTENT — edit this file to change the site.
//  Replace everything in quotes. Keep the quotes and commas.
//  To remove an item, delete its whole { ... }, line.
//  To leave a link out, set it to "" (empty quotes).
// ============================================================

export const site = {
  name: "Rashika Gupta",
  position: "PhD Student",
  affiliation: "Operations & Decision Sciences, IIM Ahmedabad",

  // Put your photo in public/images/ and write its file name here.
  photo: "/images/profile.svg",

  // A one-line summary shown in search results and link previews.
  description: "PhD student working on Dynamic decision making and queuing theory.",

  // Each line in quotes becomes one paragraph on the home page.
  bio: [
    "I am a PhD student at IIM Ahmedabad, advised by Prof. Debjit Roy. I work on sequential decision-making under uncertainty.",
    "My research focuses on Markov decision processes: characterizing the structure of optimal policies, such as threshold and monotone policies, and using that structure to design efficient algorithms.",
  ],

  email: "phd22rashikag@iima.ac.in",

  // Upload your CV into the public folder as cv.pdf, then change this to "/cv.pdf".
  // While it is "", the CV link stays hidden.
  cv: "",

  links: {
    scholar: "",   // e.g. "https://scholar.google.com/citations?user=XXXX"
    orcid: "",     // e.g. "https://orcid.org/0000-0000-0000-0000"
    arxiv: "",     // e.g. "https://arxiv.org/a/lastname_f_1"
    linkedin: "",  // e.g. "https://linkedin.com/in/yourname"
    github: "",    // e.g. "https://github.com/yourname"
  },

  interests: [
    "Markov decision processes",
    "Structural properties of optimal policies",
    "Stochastic control and dynamic programming",
    "Applications in operations research",
  ],

  // Newest first. Shown on the home page.
  news: [
    { date: "Sep 2026", text: "Launched this website." },
    { date: "Aug 2026", text: "Presented a paper at Conference Name." },
  ],
};

// ------------------------------------------------------------
//  PUBLICATIONS — newest first.
//  type must be one of: "journal", "conference", "preprint"
//  selected: true  → also shown on the home page
//  link / pdf: set to "" if you don't have one
// ------------------------------------------------------------
export const publications = [
  {
    title: "Title of your paper",
    authors: "Your Name, Coauthor Name",
    venue: "Journal Name",
    year: 2026,
    type: "journal",
    link: "",
    pdf: "",
    selected: true,
  },
  {
    title: "Title of your working paper",
    authors: "Your Name, Coauthor Name",
    venue: "arXiv preprint",
    year: 2026,
    type: "preprint",
    link: "",
    pdf: "",
    selected: true,
  },
];
