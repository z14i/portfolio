import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { describe } from "node:test";

export const DATA = {
  name: "Abdulrahim Yousuf",
  initials: "Obaydev",
  url: "https://www.obaydev1.com/",
  location: "Oman, Muscat",
  locationLink: "#",
  description:
    "Full Stack Dev turned Digital Wizard 🧙‍♂️! Love building cool stuff and tackling big challenges 💻✨. Part-time fitness buff 🏋️‍♂️, full-time learner 📚.",
  summary:
    "Started as a Full Stack Dev, now I’m the Chief Wizard 🧙‍♂️ at [Nibras](nibras.com), building web magic and making big ideas real! Founded [Nibras](nibras.com) to bring my tech dreams to life—from crafting custom web experiences to launching apps that people actually love. When I’m not conjuring up digital solutions, you’ll find me hitting the gym 🏋️‍♂️ or plotting my return to football glory ⚽️. Always up for a challenge, a good laugh, and building cool stuff that makes a difference.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "React Native",
    "WordPress",
   "Postgres",
    "Mongodb",
    "MySql",
    "Docker",
    "C++",
    "WHM",
    "CPANEL",
    "AZUR",
    "LINUX",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "me@obaydev1.com",
    tel: "+96877505506",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/z14i",
        icon: Icons.github,

        navbar: true,
      },
      Whatsapp: {
        name: "GitHub",
        url: "https://wa.me/96877505506",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdulrahim-al-kiyumi-227021181/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/obaydev1",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/obaydev1",
        icon: Icons.instagram,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@AbdulrahimYousuf",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nibras Tech",
      badges: [],
      href: "https://nibrastech.com/",
      location: "Remote",
      title: "CEO & Founder",
      logoUrl: "/nibras.png",
      start: "NOW ",
      end: "",
      description:
        "As the Founder of Nibras, I’m dedicated to building innovative SaaS solutions that redefine user experiences. From crafting sleek, responsive interfaces to developing dynamic, scalable features, we’re on a mission to create powerful tools that make life easier for our users. At Nibras, it’s all about blending cutting-edge tech with seamless usability—ensuring every project doesn’t just look good but also delivers value and impact, every step of the way! 🚀✨",
    },
    {
      company: "FoxCode",
      href: "http://foxcod.com/",
      badges: [],
      location: "Muscat",
      title: "QA & Automation tester",
      logoUrl: "/foxcod_logo.png",
      start: "Jan 2025",
      end: "NOW",
      description:
        "I drive our automated testing efforts using Playwright, ensuring reliable and high-quality product releases. By developing streamlined test frameworks and generating daily testing reports, I keep stakeholders informed and enable swift issue resolution. Working closely with the development team, I integrate tests into our CI/CD pipeline for faster feedback and delivery. In this leadership role, I also mentor a small QA team, promoting continuous improvement and a collaborative culture focused on delivering defect-free software.",
    },
    {
      company: "FoxCode",
      href: "http://foxcod.com/",
      badges: [],
      location: "Muscat",
      title: "Wordpress Development Team Lead",
      logoUrl: "/foxcod_logo.png",
      start: "Jun 2022",
      end: "Jan 2025",
      description:
        "As the WordPress Team Lead at FoxCod, I’m the go-to guy for turning client dreams into pixel-perfect realities! From custom plugins to slick, user-friendly sites, I lead an awesome team of creatives to build web magic daily. I’m all about mixing creativity with serious functionality—making sure every project at FoxCod doesn’t just look great but also works like a charm! ✨",
    },
    {
      company: "FoxCode",
      href: "http://foxcod.com/",
      badges: [],
      location: "Muscat",
      title: "Front-end Developer",
      logoUrl: "/foxcod_logo.png",
      start: "Jun 2022",
      end: "Jan 2025",
      description:
        "As a Front-End Developer at FoxCod, I bring creative visions to life through interactive, high-performance web experiences. From sleek interfaces to smooth animations, I work with a talented team to build digital products that look stunning and feel effortless. I’m all about combining innovation with functionality—ensuring every project at FoxCod not only looks amazing but also delivers a seamless user experience! 🚀✨",
    },


  ],
  education: [
    {
      school: "UTAS",
      href: "https://www.utas.edu.om/",
      degree: "Diploma in Software Development",
      logoUrl: "/utas.png",
      start: "2017",
      end: "2022",
    },
  ],
  maintainence: [
    {
      website: "Experince Oman",
      href: "https://experienceoman.om/",
      technologies: [
        "Wordpress",
        "Azur",
        "Plesk",
      ],
      logoUrl: "/omanexplogo.webp",
      start: "2023",
      end: "2024",
    },
    {
      website: "Oman Adventures Center",
      href: "https://omanadventures.com/",
      technologies: [
        "Wordpress",
        "WHM",
        "Cpanel",
      ],
      logoUrl: "/omanadventuresLogo.png",
      start: "2023",
      end: "NOW",
    },
    {
      website: "Omran",
      href: "https://www.omran.om/",
      technologies: [
        "Wordpress",
        "WHM",
        "Cpanel",
      ],
      logoUrl: "/omranLogo.svg",
      start: "2022",
      end: "NOW",
    },
    {
      website: "Visit Oman",
      href: "https://visitoman.om/",
      technologies: [
        "Wordpress",
        "WHM",
        "Cpanel",
      ],
      logoUrl: "/visitLogo.png",
      start: "2022",
      end: "NOW",
    },
    {
      website: "Alhoota Cave",
      href: "https://www.alhootacave.om/",
      technologies: [
        "Wordpress",
        "WHM",
        "Cpanel",
      ],
      logoUrl: "/alhotaLogo.png",
      start: "2022",
      end: "NOW",
    },
    {
      website: "ras-aljinz turtle reserve",
      href: "https://www.rasaljinz-turtlereserve.com/ar/",
      technologies: [
        "Wordpress",
        "WHM",
        "Cpanel",
      ],
      logoUrl: "/rasAljinz.png",
      start: "2022",
      end: "NOW",
    },
  ],






  projects: [
    {
      title: "Intajee",
      href: "https://intajee.om/",
      dates: "",
      active: true,
      description:
        "As a Front-End Developer at FoxCod, I helped bring **Intajee.om** to life for Omran Group—a platform that empowers Omani brands with top-notch media magic! 🪄 I crafted sleek, responsive interfaces to boost visibility and engagement, helping Omran Group’s brands shine—locally and beyond! 🌍✨",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "JSON",
      ],
      links: [
        {
          type: "Website",
          href: "https://intajee.om/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/intajee.jpg",
      video:
        "",
    },
    {
      title: "HPSI",
      href: "https://hpsi.moh.gov.om/",
      dates: "",
      active: true,
      description:
        "As a Front-End Developer at FoxCod, I helped bring **hpsi.moh.gov.om** to life, supporting Oman’s Vision 2040 for a healthier society. 🌍💻 By creating user-focused interfaces, I contributed to a platform that raises health awareness, promotes preventive care, and empowers Omanis to take charge of their well-being. 🏥✨",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "JSON",
      ],
      links: [
        {
          type: "Website",
          href: "https://hpsi.moh.gov.om/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hpsi.jpg",
      video:
        "",
    },
    {
      title: "Afaf Couture",
      href: "https://afafcouture.com/",
      dates: "5 days (1-5 Oct 2024) ",
      active: true,
      description:
"At Nibras, I developed afafcouture.com, a stylish e-commerce platform using WooCommerce. 👗💻 The site showcases Afaf Couture’s fashion collections, supports both English and Arabic, and includes features like WhatsApp support and Thawani payment integration. 🛍️✨ This project highlights Nibras’ commitment to creating functional and visually appealing digital solutions.",
      technologies: [
        "Wordpress",
        "woocommerce",
        "Php",
        "Project Management",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/AfafCouture.png",
      video:
        "",
    },
    {
      title: "Tamaluk",
      href: "https://tamluk.om/ar",
      dates: "",
      active: true,
      description:
        "As a Front-End Developer at FoxCod, I was part of the team that launched Tamluk, the first real estate crowdfunding platform in Oman. 🏥✨ We crafted the interactive elements and user interface that allows individuals to easily participate in real estate investments with smaller contributions, making property investment attainable. 💻🌍",
      technologies: [
        "Typescript",
        "TailwindCSS",
        "JSON",
      ],
      links: [
        {
          type: "Website",
          href: "https://tamluk.om/ar",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tamaluk.jpg",
      video:
        "",
    },
    {
      title: "Oman Adventures Center",
      href: "https://omanadventures.com/",
      dates: "",
      active: true,
      description:
      "As the WordPress Team Leader at FoxCod, I developed the Oman Adventures website, a platform showcasing adrenaline-fueled activities in Musandam! 🏞️ From a record-breaking zipline to kayaking adventures, I created a seamless, responsive experience that captures the thrill of Oman’s landscapes. This project not only boosted Oman Adventures' online presence but also highlighted our dedication to crafting immersive user experiences. 🚀✨",
      technologies: [
        "Wordpress",
        "woocommerce",
        "Php",
        "Project Management",
      ],
      links: [
        {
          type: "Website",
          href: "https://omanadventures.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/omanadventures.jpg",
      video:
        "",
    },
    {
      title: "Experince Oman",
      href: "https://experienceoman.om/",
      dates: "",
      active: true,
      description:
        "As the WordPress Team Leader at FoxCod, I led the development of the Experience Oman website, a comprehensive platform highlighting Oman's rich culture, breathtaking landscapes, and diverse tourist attractions. I ensured the site was user-friendly and responsive, providing visitors with an engaging and informative experience. This project significantly enhanced Oman's digital tourism presence, attracting travelers worldwide.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://experienceoman.om/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/experinceoman.jpg",
      video:
        "",
    },

  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
