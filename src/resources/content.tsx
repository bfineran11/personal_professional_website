import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Brendan",
  lastName: "Fineran",
  name: `Brendan Fineran`,
  role: "Musician",
  avatar: "/images/avatar.jpg",
  email: "bfineran727@gmail.com",
  location: "America/Detroit", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bfineran11",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/brendanpfmusic/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Phone",
    icon: "",
    link: 'tel:2488054566',
    essential: true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Brendan Fineran</>,
  featured: {
    display: false,
    title: (
      <></>
    ),
    href: "",
  },
  subline: (
    <>
      I'm Brendan Fineran, a guitar player in Detroit and Boston. I'm currently attending Berklee College of Music. I teach, gig, and write. Contact me if you're intrested in any of my services!
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Brendan is a multi-instrumentalist with a focus on guitar. He has been gigging
        for the past 5 years and has gone on tour with the School of Rock All Stars. In the
        time in between gigs, he has been working on personal music projects and creating
        self-promotion content on Instagram and Facebook. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Acromag",
        timeframe: "2024 - 2025",
        role: "Quality Control Software Engineer",
        achievements: [
          <>
            I developed a camera system to document products before they were
            shipped to protect the company and ensure accountability and
            responsibility.
          </>,
          <>
            I also coordinated with the shipping and final assembly
            departments and implemented barcodes on our inventory.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*
          {
            src: "",
            alt: "",
            width: 16,
            height: 9,
          },
          */
        ],
      },
      {
        company: "School of Rock All Stars",
        timeframe: "2024",
        role: "Guitar",
        achievements: [
          <>
            Passed all three rounds of auditions and got to play with the top 1% of students
            at School of Rock touring the Northeastern United States.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Berklee College of Music",
        description: <>Currently Studying Music Production and Engineering</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "C++, C#, Java, Python, HTML, CSS, JS",
        description: (
          <>Brendan has expierence working with these programming languages and the common
          toolsets and programs associated with them. He has used these languages both professionaly
          and for passion projects.</>
        ),
        tags: [
          {

          },
        ],

        // optional: leave the array empty if you don't want to display images
        images: [
          {
  
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about music and gigs...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Works",
  title: `Projects – ${person.name}`,
  description: `Music and other general projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/Allstars_1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Allstars_2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Allstars_3.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Board_1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Board_2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Board_3.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/CBW_1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/DXD_24_1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/DXD_24_2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/grad_party_24.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Micahs_guitar.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Sonic_journeys.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Summerfest_shred_1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/token_24_1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/token_24_2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
