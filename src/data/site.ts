export type ProfileLink = {
  label: string;
  href: string;
  icon?: string;
};

export type NewsItem = {
  date: string;
  html: string;
};

export type PublicationAuthor = {
  name: string;
  href?: string;
  me?: boolean;
};

export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  image: string;
  imageShape?: "standard" | "wide";
  authors: PublicationAuthor[];
  venue: {
    label: string;
    href: string;
    note?: string;
  };
  description: string;
  links: PublicationLink[];
};

export type EducationItem = {
  degree: string;
  period: string;
  logo: string;
  logoAlt: string;
  advisor: {
    label: string;
    href: string;
  };
};

export const profile = {
  name: "Xiaohao Sun",
  nativeName: "孙小皓",
  title: "Xiaohao Sun | 孙小皓",
  tagline:
    "Stay humble, trust your instincts. Most importantly, act. When you come to a fork in the road, take it.",
  role: "PhD Student",
  period: "Sep 2021 - Present",
  affiliation: "Simon Fraser University",
  affiliationHref: "https://www.sfu.ca",
  portrait: "files/xiaohao_sun.jpg",
  logo: "files/SFU.png",
  emailDisplay: 'xiaohao_sun-{at}-sfu-"dot"-ca',
  emailHref: "mailto:xiaohao_sun@sfu.ca",
  location: [
    "Simon Fraser University",
    "Burnaby, BC V5A 1S6, Canada",
    "Campus: Burnaby Campus",
    "Building: TASC1",
    "Room: 8002"
  ],
  bioHtml: `I'm currently a Ph.D. student of computer science at <a href="https://www.sfu.ca">Simon Fraser University</a>, advised by professor <a href="https://angelxuanchang.github.io">Angel Xuan Chang</a>. Prior to this, I got my Master of Applied Science degree from the Electrical Engineering Department <a href="https://www.uwindsor.ca/">University of Windsor</a>. And I received my Bachelor of Science degree in the area of Mathematical and Physics Basic Science at School of Mathematical from <a href="https://en.uestc.edu.cn/">University of Electronic Science and Technology of China</a>. Currently I am also a research assistant in <a href="https://gruvi.cs.sfu.ca/">SFU GrUVi Lab</a> working with professor <a href="https://angelxuanchang.github.io">Angel Xuan Chang</a> at <a href="https://www.sfu.ca">Simon Fraser University</a>. My research focuses on 3D scene understanding and synthesis, with growing interests in embodied AI systems that perceive, reason about, and interact with complex 3D environments.`,
  links: [
    {
      label: "CV",
      href: "files/Xiaohao_CV.pdf",
      icon: "files/icons/file-text.svg"
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=pQhGyqMAAAAJ&hl=en",
      icon: "files/icons/google-scholar.svg"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/xiaohao-sun-237537195/",
      icon: "files/icons/linkedin.svg"
    },
    {
      label: "Twitter",
      href: "https://twitter.com/XiaohaoSun4",
      icon: "files/icons/x.svg"
    }
  ] satisfies ProfileLink[],
  labLinks: [
    {
      label: "GrUVi",
      href: "https://gruvi.cs.sfu.ca/"
    },
    {
      label: "3DLG",
      href: "https://3dlg-hcvc.github.io/"
    }
  ] satisfies ProfileLink[]
};

export const news: NewsItem[] = [
  {
    date: "Nov, 2025",
    html: 'One paper got accpeted at <a href="https://3dvconf.github.io/2026/">3DV 2026</a>'
  },
  {
    date: "July, 2025",
    html: "Passed my PhD Thesis Proposal"
  },
  {
    date: "June, 2025",
    html: "Passed my PhD depth exam"
  },
  {
    date: "Oct, 2023",
    html: 'One paper got accpeted at <a href="https://3dvconf.github.io/2024/">3DV 2024</a> as Oral'
  },
  {
    date: "Aug, 2022",
    html: 'One paper got accpeted at <a href="https://3dvconf.github.io/2022/">3DV 2022</a>'
  },
  {
    date: "Jan, 2022",
    html: 'I joined GrUVi Lab, and start to work with Prof <a href="https://angelxuanchang.github.io">Angel Xuan Chang</a>'
  },
  {
    date: "Sep, 2021",
    html: 'Start my CS PHD at <a href="https://www.sfu.ca/">SFU</a>'
  }
];

export const publications: Publication[] = [
  {
    title:
      "SemLayoutDiff: Semantic Layout Generation with Diffusion Model for Indoor Scene Synthesis",
    image: "files/semlayoutdiff.png",
    imageShape: "wide",
    authors: [
      { name: "Xiaohao Sun", me: true },
      { name: "Divyam Goel", href: "https://dv-fenix.github.io/" },
      { name: "Angel X. Chang", href: "https://angelxuanchang.github.io/" }
    ],
    venue: {
      label: "3DV 2026",
      href: "https://3dvconf.github.io/2026/"
    },
    description:
      "We present SemLayoutDiff, a unified model for synthesizing diverse 3D indoor scenes across multiple room types. The model introduces a scene layout representation combining a top-down semantic map and attributes for each object. Unlike prior approaches, which cannot condition on architectural constraints, SemLayoutDiff employs a categorical diffusion model capable of conditioning scene synthesis explicitly on room masks. It first generates a coherent semantic map, followed by a cross-attention-based network to predict furniture placements that respect the synthesized layout. Our method also accounts for architectural elements such as doors and windows, ensuring that generated furniture arrangements remain practical and unobstructed. Experiments on the 3D-FRONT dataset show that SemLayoutDiff produces spatially coherent, realistic, and varied scenes, outperforming previous methods.",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2508.18597" },
      { label: "Project", href: "https://3dlg-hcvc.github.io/SemLayoutDiff/" },
      { label: "Code", href: "https://github.com/3dlg-hcvc/SemLayoutDiff" }
    ]
  },
  {
    title: "OPDMulti: Openable Part Detection for Multiple Objects",
    image: "files/opdmulti.png",
    imageShape: "wide",
    authors: [
      { name: "Xiaohao Sun*", me: true },
      { name: "Hanxiao Jiang*", href: "https://jianghanxiao.github.io/" },
      { name: "Angel X. Chang", href: "https://angelxuanchang.github.io/" },
      { name: "Manolis Savva", href: "https://msavva.github.io/" }
    ],
    venue: {
      label: "3DV 2024",
      href: "https://3dvconf.github.io/2024/",
      note: "Oral"
    },
    description:
      "Openable part detection is the task of detecting the openable parts of an object in a single-view image, and predicting corresponding motion parameters. Prior work investigated the unrealistic setting where all input images only contain a single openable object. We generalize this task to scenes with multiple objects each potentially possessing openable parts, and create a corresponding dataset based on real-world scenes. We then address this more challenging scenario with OPDFormer: a part-aware transformer architecture. Our experiments show that the OPDFormer architecture significantly outperforms prior work. The more realistic multiple-object scenarios we investigated remain challenging for all methods, indicating opportunities for future work.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2303.14087" },
      { label: "Project", href: "https://3dlg-hcvc.github.io/OPDMulti/" },
      { label: "Code", href: "https://github.com/3dlg-hcvc/OPDMulti" }
    ]
  },
  {
    title:
      "Articulated 3D Human-Object Interactions from RGB Videos: An Empirical Analysis of Approaches and Challenges",
    image: "files/articulated-3DHOI.png",
    authors: [
      { name: "Sanjay Haresh", href: "https://www.sanjayharesh.com/" },
      { name: "Xiaohao Sun", me: true },
      { name: "Hanxiao Jiang", href: "https://jianghanxiao.github.io/" },
      { name: "Angel X. Chang", href: "https://angelxuanchang.github.io/" },
      { name: "Manolis Savva", href: "https://msavva.github.io/" }
    ],
    venue: {
      label: "3DV 2022",
      href: "https://3dvconf.github.io/2022/"
    },
    description:
      "Human-object interactions with articulated objects are common in everyday life. Despite much progress in single-view 3D reconstruction, it is still challenging to infer an articulated 3D object model from an RGB video showing a person manipulating the object. We canonicalize the task of articulated 3D human-object interaction reconstruction from RGB video, and carry out a systematic benchmark of four methods for this task: 3D plane estimation, 3D cuboid estimation, CAD model fitting, and free-form mesh fitting. Our experiments show that all methods struggle to obtain high accuracy results even when provided ground truth information about the observed objects. We identify key factors which make the task challenging and suggest directions for future work on this challenging 3D computer vision task.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2209.05612" },
      { label: "Project", href: "https://3dlg-hcvc.github.io/3dhoi/" },
      { label: "Code", href: "https://github.com/3dlg-hcvc/3dhoi" }
    ]
  },
  {
    title: "Reading Line Classification Using Eye-trackers",
    image: "files/read_line.png",
    authors: [
      { name: "Xiaohao Sun", me: true },
      { name: "Balakumar Balasingam", href: "https://www.singamlabs.org/" }
    ],
    venue: {
      label: "IEEE TIM",
      href: "https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=9259274"
    },
    description:
      "Eye-tracking while reading is an emerging application where the goal is to track the progression of reading. The challenges for accurate tracking of the reading progression are due to the measurement noise of the eye-tracker and the rapid and uncertain movement of the eye gaze. Solutions to this problem developed in the recent past suffer from many limitations, such as the need to know the text context and the need to have a batch of one page of data for classification. In this article, we relax these assumptions and develop a novel, real-time line classification approach. The proposed solution consists of an improved slip-Kalman smoother (slip-KS) that is designed to detect new line returns and to reduce the variance in the eye-gaze measurements. After preprocessing of the data by the slip-KS, a classification approach is employed to track the lines being read in real-time. Two such classifiers are demonstrated in this article; one is based on Gaussian discriminants, and the other is based on support vector machines. The proposed approaches were tested using realistic eye-gaze data from seven participants. Analysis based on the collected data using the proposed algorithms shows significantly improved performance over existing methods.",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/9475049" }
    ]
  },
  {
    title: "Algorithms for Reading Line Classification",
    image: "files/KS.png",
    authors: [
      { name: "Xiaohao Sun", me: true },
      { name: "Balakumar Balasingam", href: "https://www.singamlabs.org/" }
    ],
    venue: {
      label: "IEEE SMC",
      href: "http://ieeesmc2021.org/"
    },
    description:
      "Eye-Tracking has been emerging as a useful tool in human-computer interaction. However, the state of the art in eye-tracking applications suffers from a significant amount of measurement noise. Also, the inherent nature of the eye-gaze movement adds to the difficulty of obtaining valuable information from eye-gaze measurements. In this paper, a novel classification approach is proposed to classify the lines being read based on eye-gaze measurements. The proposed approach consists of a novel Kalman smoother-based preprocessing procedure to separate eye-gaze data corresponding to different text lines and to reduce variance. The preprocessed data is then used to train two different classifiers, one based on Gaussian discriminants and the other based on support vector machines. The resulting line-classification approach is shown to be superior in performance compared to other recent approaches.",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/abstract/document/9658688" }
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Doctor of Philosoph, Computer Sciense, Simon Fraser University",
    period: "2021.9 - present",
    logo: "files/SFU.png",
    logoAlt: "Simon Fraser University",
    advisor: {
      label: "Prof. Angel Xuan Chang",
      href: "https://angelxuanchang.github.io"
    }
  },
  {
    degree: "Master of Applied Science, Electrical Engineer, University of Windsor",
    period: "2019.1 - 2021.9",
    logo: "files/uwindsor_logo.svg",
    logoAlt: "University of Windsor",
    advisor: {
      label: "Prof. Balakumar Balasingam",
      href: "https://www.singamlabs.org/"
    }
  },
  {
    degree:
      "Bachelor of Science, Mathematical and Physics Basic Science, University of Electronic Science and Technology of China",
    period: "2013.9 - 2017.7",
    logo: "files/UESTC.png",
    logoAlt: "University of Electronic Science and Technology of China",
    advisor: {
      label: "Prof. Chuan Huang",
      href: "https://sse.cuhk.edu.cn/en/faculty/huangchuan"
    }
  }
];

export const navItems = [
  { label: "Home", href: "index.html" },
  { label: "Publications", href: "pubs.html" },
  { label: "News", href: "news.html" },
  { label: "Experience", href: "experience.html" },
  { label: "Contact", href: "contact.html" }
] satisfies ProfileLink[];

export const analyticsId = "G-RX00NTCBPM";
export const googleSiteVerification = "s9HfQLacjwqz4eRF6EoYjc99aE5T00xyFcCA3zIniwc";
