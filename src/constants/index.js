import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    github,
  } from "../assets";
  import Setting from "../assets/settings.png"
  import Aave from "../assets/social media icons/Aave.png";
  import Insta from "../assets/social media icons/instagram.svg";
  import FB from "../assets/social media icons/facebook.svg";
  import Linked from "../assets/social media icons/linked.svg";
  import DeepFake from "../assets/DeepFake.png";
  import Blogger from "../assets/Blogger.png";
  import Portifolio from "../assets/portifolio.png";
  import Terminal from "../assets/terminal.png";

  


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "Terminal",
      title: "terminal",
    },
    // {
    //   id: "Projects",
    //   title: "Projects",
    // },
  ];
  
 const socialMedia=[
    {
      src:github,
      title:"GitHub",
      link:"https://github.com/ajayjspk",
      class:""
    },
    {
      src:Insta,
      title:"8388ax",
      link:"https://www.instagram.com/8388ax/",
      class:""
    },
    {
      src:FB,
      title:"Ajay Arava",
      link:"",
      class:""
    },
    {
      src:Linked,
      title:"Ajay Arava",
      link:"https://www.linkedin.com/in/ajay-arava/",
      class:"invert"
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "INV technologies",
      icon: reactjs,
      iconBg: "#383E56",
      date: "November 2023 - December 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "FullStack web Developer",
      company_name: "Top Notch",
      icon: Aave,
      iconBg: "#E6DEDD",
      date: "10 July 2023 -8 Aug 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Deep Fake Detection",
      description:
        `Detecting deepfakes using advanced deep learning models such as ResNet and AlexNet has become a critical pursuit in computer vision. Deepfakes, AI-generated media that convincingly depict fabricated events or statements, pose significant risks including misinformation and privacy breaches. To tackle this challenge, researchers are turning to sophisticated neural network architectures.

ResNet, known as Residual Network, is celebrated for its capability to effectively train extremely deep networks. By introducing skip connections that facilitate learning residual functions rather than direct mappings, ResNet mitigates issues like the vanishing gradient problem. In the context of deepfake detection, ResNet architectures excel at identifying subtle patterns and distinguishing features that indicate manipulated content.

Similarly, AlexNet gained prominence for winning the ImageNet Challenge in 2012. Its architecture includes convolutional and fully connected layers, augmented with techniques like local response normalization and dropout to enhance performance and prevent overfitting. In the realm of deepfake detection, AlexNet's ability to extract intricate features from images plays a crucial role in detecting anomalies that may suggest tampering or AI-generated content.

As the race between creators of deepfakes and detection systems continues, leveraging advanced models such as ResNet and AlexNet, coupled with robust datasets and refined training methodologies, is essential. These efforts aim to bolster the accuracy and reliability of deepfake detection, thereby mitigating potential societal risks associated with manipulated media in today's digital era.`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
      ],
      image: DeepFake,
      source_code_link: "https://github.com/ajayjspk/DeepFake_Detection",
    },
    {
      name: "Blogger Website",
      description:
        `The Blogger website allows users to create, edit, and delete blog posts through an intuitive interface built with Material-UI components. Users can register and authenticate securely, with MongoDB storing user credentials and profile information. Node.js handles authentication processes and API requests, ensuring data security and seamless interactions between the frontend and backend.

The frontend, developed using React.js and Material-UI, offers a responsive design that adapts to various devices and screen sizes. Components like AppBar, Drawer, and Grid facilitate navigation, layout management, and content presentation, adhering to Material Design principles for a polished user experience.

Behind the scenes, MongoDB stores blog posts with rich text content, comments, and metadata, providing efficient querying and indexing capabilities. Node.js powers the server-side logic, handling CRUD operations on blog posts, user authentication, and authorization, ensuring data integrity and security.`,
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "NODE JS",
          color: "green-text-gradient",
        },
        {
          name: "TailWind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
      ],
      image: Blogger,
      source_code_link: "https://github.com/ajayjspk",
    },
    {
      name: "Personal Portifolio",
      description:
       `Welcome to my portfolio! Built using React.js, Three.js, and Framer Motion, this website showcases my journey and expertise in web development and 3D graphics.

Explore My Projects
In the Projects section, you'll find a collection of my latest works, each crafted with attention to detail and powered by React.js for seamless user interaction. Framer Motion adds fluid animations and transitions, making navigation a delightful experience.

Dive into 3D Visualizations
Using the power of Three.js, I've integrated interactive 3D models that highlight my skills and creativity in 3D graphics. Navigate through these immersive visuals to see how I blend technology and design.

Experience Seamless Interactions
With Framer Motion, I've brought my portfolio to life with smooth page transitions and dynamic hover effects. Every interaction is designed to engage and provide a glimpse into my passion for front-end development.`,
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: Portifolio,
      source_code_link: "https://github.com/ajayjspk/portifolio",
    },
    {
      name: "Terminal",
      description:
       `Welcome to my React Terminal! This interactive interface combines the familiarity of a command-line terminal with the flexibility of React, offering both light and dark modes for user preference. You can explore various default commands to navigate through different sections: use help to see available commands and their usage, about to learn about this terminal application, projects to discover my latest projects, skills to see my proficiency in various technologies, and contact to find ways to get in touch. Whether you're curious about my work or looking to connect, this terminal provides an engaging way to interact and explore.`,
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: Terminal,
      source_code_link: "https://github.com/ajayjspk/terminal",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,socialMedia };