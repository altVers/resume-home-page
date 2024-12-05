import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/cg.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'altVers Home Page',
  description: "altVers resume-site",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `altVers.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Timofey Degtyarev, <strong className="text-stone-100">Frontend developer</strong>, currently working at{' '}
        <strong className="text-stone-100">T-Bank</strong>. I have come a long way in development, learning along the
        way how to manage airplanes, people, and projects.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I am a volleyball player, an artist, the owner of four cats.{' '}
        <strong className="text-stone-100">Almost like Tony Stark, only better.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1kmPtCa2Jt07lIvs8o8nhGXrYxQWcnJU2/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      blank: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have come a long way in development, currently focusing on using React and TypeScript for building projects. In my free time, I dedicate myself to furthering my skills in development, alongside enjoying volleyball, expressing my creativity as an artist, and taking care of my four cats.`,
  aboutItems: [
    {label: 'Location', text: 'Minsk, RB', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Russian', Icon: FlagIcon},
    {label: 'Interests', text: 'Sport, music, art, games', Icon: SparklesIcon},
    {label: 'Study', text: 'Saint Petersburg State University of Civil Aviation', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'T-Bank', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Russian',
        level: 10,
      },
      {
        name: 'English',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'HTML5/CSS3',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Cinema Guide',
    description:
      'Cinema Guide is a web application that allows users to search for movie information, check ratings, and watch trailers.',
    url: 'https://cinema-guide.altvers.ru/',
    image: porfolioImage1,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2018 — 2022',
    location: 'Saint Petersburg State University of Civil Aviation',
    title: 'University — Bachelor`s degree',
    content: (
      <p>
        Overall, my studies did not provide me with skills in development, but they taught me to take responsibility,
        think critically, understand intricate details, and work as part of a team. And I became a pilot. Cool? Cool.
      </p>
    ),
  },
  {
    date: '2020',
    location: 'Skillbox',
    title: 'Online courses in backend development',
    content: (
      <p>
        Here, I started taking courses in C# development. I was fascinated by programming, but unfortunately, back-end
        development didn't grab my attention. However, the additional course on HTML/CSS, which came as a bonus, really
        caught my interest. That's when I realized that I would become a front-end developer as soon as I had the
        opportunity and time.
      </p>
    ),
  },
  {
    date: '2022 — 2023',
    location: 'Saint-Petersburg National Research University of Information Technologies, Mechanics and Optics',
    title: 'University — Master`s degree',
    content: (
      <p>
        It seems I took a wrong turn here. Not because a master's degree is bad, but because I drown for a direction
        that gives nothing in return. Interesting experience, but why?
      </p>
    ),
  },
  {
    date: '2022',
    location: 'Skillbox, Hexlet',
    title: 'Online courses in frontend development',
    content: (
      <p>
        So far, this is my most vibrant period in development. Online courses are great, but they have provided me not
        only with knowledge but also with motivation to grow. Each new topic I study opens up a new door for me, behind
        which lie dozens of others. It seems that I will never stop learning. I completed a nine-month course in
        front-end development and obtained the relevant knowledge and certificates. "Live as if you were to die
        tomorrow. Learn as if you were to live forever." — Mahatma Gandhi
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 — Present',
    location: 'T-Bank',
    title: 'Frontend developer',
    content: (
      <p>
        <br /> I worked almost for three years on media projects at T-Bank. The team supported projects like T-Help, T-Blog, Mobile
        Assistance, Currency Transfer Map, and the admin panel for content management.
        <br /> The products I worked on were high-load services with a total monthly active user count (MAU) of 23
        million. I actively wrote tests and participated in updating package versions to current ones.
        <br />
        <br /> My tech stack included:
        <br />- React,
        <br />- Redux,
        <br />- TUI (an internal UI kit),
        <br />- ANTD,
        <br />- TypeScript,
        <br />- GitLab,
        <br />- Jira,
        <br />- VSCode,
        <br />- and Jest.
        <br />
        <br />
        Key achievements:
        <br />
        - Optimized work with JSON-LD for schema.org by generating it from content, which reduced editors' workload.
        <br />- Added markup in T-Blog to enable reporting in "Yandex.Metrics".
        <br />
        - Redesigned the feedback widget, increasing the amount of feedback submitted by 30%.
        <br />- Introduced image delivery with varying DPR via the service.
      </p>
    ),
  },
  {
    date: '2021 — 2022',
    location: 'T-Bank',
    title: 'Content manager',
    content: (
      <p>
        My first leap into development was becoming a content manager. <br />
        At that time, I couldn't call myself a real developer, as I mostly worked within a CMS. I was part of a large
        team that maintained a knowledge base directory for a major bank. I was an executor, and my clients were product
        managers and editors. <br />
        The product that we have been developing —{' '}
        <a className="underline" href="https://www.tbank.ru/help/" target="_blank">
          T-Help.
        </a>{' '}
        <br />
        <br />
        In my work, I used: <br />- HTML,
        <br />- CSS,
        <br />- iframes,
        <br />- redirects,
        <br />- variables. <br />
        <br />
        We used corporate messengers for communication, and for project management, we utilized Kanban boards like:
        <br />- Jira,
        <br />- Trello,
        <br />- Kaiten. <br />
      </p>
    ),
  },
  // {
  //   date: '2023 — Present',
  //   location: 'T-Bank',
  //   title: 'Production editor',
  //   content: (
  //     <p>
  //       The next stage in my growth within this company was the position of a production editor. <br />
  //       It might seem that I've moved a bit away from development, and that could be true. However, if you look closely
  //       at what I do, you can see that I am studying development from the other side —{' '}
  //       <b>not as an executor, but as a client.</b> <br />
  //       <br />
  //       In this role, I serve as a link between content managers, developers, editorial staff, SEO specialists,
  //       analysts, designers, translators, and product managers. Here, I see enormous potential in myself: I`ve been able
  //       to look "behind the scenes" of each profession that is responsible for different processes within a single
  //       project, which allows me to more accurately define the role of development in the team and the value of the
  //       tasks they perform. During my work, I continuously study the tools that our developers use and gather knowledge
  //       from them. <br />
  //       <br />
  //       For my work, I use:
  //       <br />- Kanban boards,
  //       <br />- Wiki,
  //       <br />- Analytics tools,
  //       <br />- Google Docs,
  //       <br />- Google Sheets,
  //       <br />- AppsFlyer,
  //       <br />- Miro,
  //       <br />- Many internal tools of the company.
  //       <br />
  //       <br />
  //       This position significantly improved my communication and project management skills.
  //     </p>
  //   ),
  // },
  {
    date: '2023 — 2024',
    location: 'T-Bank',
    title: 'Designer',
    content: (
      <p>
        The company provided me with the opportunity to grow and offered me side jobs as a
        designer. <br />
        For over a year now, I have been helping my team with design tasks — I participate in:
        <br />- creating mockups,
        <br />- designing components,
        <br />- processing content materials used in the instructions for our knowledge base. <br />
        <br />
        For my work, I use:
        <br />- Figma,
        <br />- Photoshop, <br />- Blender,
        <br />- artificial intelligence.
      </p>
    ),
  },
  
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Yauheni Bykau, Frontend Developer',
      text: 'First Comment',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Alexey Kudryavtsev, Designer',
      text: 'Timofey and I spent several years gathering ongoing tasks for two T-Bank editorial teams at the intersection of the release and design teams. Working together was incredibly comfortable and productive. Timofey is a wonderful colleague, a reliable worker, and a pleasant person to communicate with. I would like to specifically highlight his ability to quickly learn new things and seamlessly onboard into any task or process.',
      image: 'https://i.ibb.co/BsR2D5k/photo-2022-10-12-13-45-49.jpg',
    },
    {
      name: 'Kolesov Daniil, Backend Developer',
      text: 'Third Comment',
      image: 'https://i.ibb.co/ZXD0jV5/photo-2024-06-23-14-40-50.jpg',
    },
    {
      name: 'Rikulskaya Maria, Content Manager',
      text: 'Fourth Comment',
      image: 'https://i.ibb.co/j8wvf7b/photo-2023-12-07-19-27-17.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'I appreciate your time and attention, and I look forward to the opportunity to connect and discuss how I can bring value to your team. Please feel free to reach out — I would love to hear from you!',
  items: [
    {
      type: ContactType.Email,
      text: 'tmostov@mail.ru',
      href: 'mailto:tmostov@mail.ru',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin',
      href: 'https://www.linkedin.com/in/timofey-degtyarev-50752033a/',
    },
    {
      type: ContactType.Instagram,
      text: '@timanred',
      href: 'https://www.instagram.com/timan.red/',
    },
    {
      type: ContactType.Github,
      text: 'altVers',
      href: 'https://github.com/altVers',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/altVers'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timofey-degtyarev-50752033a/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/timan.red/'},
];
