
export const projects = [
  {
    slug: "winova",
    number: "01",
    name: "Winova",
    subtitle: "Wine E-commerce Website",
    category: "E-COMMERCE / VANILLA JAVASCRIPT",
    status: "Completed",
    image: "/images/projects/winova.png",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "A responsive wine e-commerce website built with HTML, CSS and vanilla JavaScript. The project explores how core web technologies can create an interactive shopping experience without a frontend framework.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    overview:
      "Winova was my first SIWES frontend project. It applies foundational web development concepts to a multi-page wine store, including product discovery, filtering, shopping cart interactions and checkout.",
    concepts: [
      {
        title: "Dynamic product rendering",
        description:
          "Product information is stored in JavaScript data structures and used to generate product cards. This reduces repeated markup and makes the catalogue easier to update.",
        tags: ["Arrays", "Template literals", "DOM"],
      },
      {
        title: "DOM manipulation and events",
        description:
          "JavaScript responds to user actions such as clicking buttons, entering search terms and changing filters, updating the interface based on those interactions.",
        tags: ["DOM API", "Event listeners"],
      },
      {
        title: "Search and filtering",
        description:
          "Array methods are used to find products that match search queries and selected category, price and alcohol-percentage criteria.",
        tags: ["filter()", "find()", "Conditions"],
      },
      {
        title: "Cart persistence",
        description:
          "Browser localStorage can retain cart data between page visits, allowing the shopping experience to continue after navigation or refresh.",
        tags: ["localStorage", "JSON"],
      },
      {
        title: "Multi-page navigation",
        description:
          "Separate pages handle the homepage, product catalogue, individual products, cart and checkout, with product information passed between pages where needed.",
        tags: ["HTML pages", "URL parameters"],
      },
    ],
    features: [
      "Dynamic product catalogue",
      "Product search and filtering",
      "Individual product details",
      "Shopping cart and quantity management",
      "Cart persistence with localStorage",
      "Checkout and order confirmation",
    ],
    architecture: [
      "Product data",
      "JavaScript rendering and interaction",
      "Product catalogue",
      "Cart management",
      "Checkout",
      "Order confirmation",
    ],
    challenges: [
      {
        title: "Keeping product displays consistent",
        description:
          "Using structured product data and reusable rendering logic helps keep product information consistent across the catalogue and product detail views.",
      },
      {
        title: "Maintaining cart data",
        description:
          "Browser storage provides a way to persist cart information between visits. The stored data must be read and updated carefully as cart contents change.",
      },
    ],
    learning:
      "Winova strengthened my understanding of HTML structure, CSS layouts, JavaScript events, DOM manipulation, array methods and browser storage. It also helped me understand how separate pages work together as one user experience.",
    liveUrl: "https://winova.philipaipoh.com.ng/",
    documentationUrl: "https://winova.docny.app/winova/overview-1",
    githubUrl: "https://github.com/Babbler01/Winova",
    next: "mainstreet",
    previous: null,
  },

  {
    slug: "mainstreet",
    number: "02",
    name: "MainStreet",
    subtitle: "Barbershop Website",
    category: "BUSINESS WEBSITE / BOOTSTRAP",
    status: "Completed",
    image: "/images/projects/mainstreet.png",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "A responsive website for a barbershop, developed with Bootstrap and JavaScript to explore framework-based layouts, reusable UI components and service data integration.",
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "REST API"],
    overview:
      "MainStreet explores how a CSS framework can speed up the development of a responsive business website. The project includes a barbershop presentation, service information and planned appointment-booking functionality.",
    concepts: [
      {
        title: "Responsive grid system",
        description:
          "Bootstrap's container, row and column classes help organise content into layouts that adapt to different screen sizes.",
        tags: ["Containers", "Grid", "Breakpoints"],
      },
      {
        title: "Bootstrap components",
        description:
          "Framework components and utility classes provide a consistent foundation for navigation, buttons, cards, modals and other interface elements.",
        tags: ["Components", "Utilities"],
      },
      {
        title: "Custom styling",
        description:
          "Custom CSS extends the framework's default appearance to establish the website's typography, colour palette, spacing and visual identity.",
        tags: ["CSS", "Custom properties"],
      },
      {
        title: "API consumption",
        description:
          "JavaScript can request service information from the project's REST API and use the returned JSON data to populate interface elements.",
        tags: ["fetch()", "JSON", "async/await"],
      },
    ],
    features: [
      "Responsive navigation and page layouts",
      "Barbershop service presentation",
      "Service data integration through a REST API",
      "Interactive service details",
      "Gallery and business information",
      "Appointment-booking experience — in progress",
    ],
    architecture: [
      "Bootstrap layout",
      "JavaScript fetch request",
      "REST API response",
      "Service data rendering",
      "User interaction",
    ],
    challenges: [
      {
        title: "Customising framework defaults",
        description:
          "Bootstrap provides useful defaults, but the design still needs deliberate CSS overrides and consistent spacing to match the intended visual identity.",
      },
      {
        title: "Handling API responses",
        description:
          "The interface needs to account for returned data, loading behaviour and request errors when service information is retrieved from an API.",
      },
    ],
    learning:
      "MainStreet develops my understanding of Bootstrap's grid system, components and utilities, while reinforcing responsive design, custom CSS and asynchronous API requests.",
    liveUrl: "https://mainstreet.philipaipoh.com.ng/",
    documentationUrl: "",
    githubUrl: "https://github.com/Babbler01/MainStreet",
    next: "waini",
    previous: "winova",
  },

  {
    slug: "waini",
    number: "03",
    name: "Waini",
    subtitle: "React Wine E-commerce Application",
    category: "E-COMMERCE / REACT / API INTEGRATION",
    status: "Completed",
    image: "/images/projects/waini.png",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "A React-based wine e-commerce application exploring reusable components, application state, payment integration and an AI-powered shopping assistant.",
    stack: ["React", "Vite", "JavaScript", "Paystack", "Gemini API"],
    overview:
      "Waini builds on the e-commerce concept explored in Winova, using React to organise the interface into components and manage interactive application state. The project also explores third-party payment integration and an AI assistant powered by Gemini.",
    concepts: [
      {
        title: "Component-based architecture",
        description:
          "The interface is organised into reusable React components. This makes shared elements easier to maintain and allows the application to be developed in smaller, manageable parts.",
        tags: ["Components", "JSX", "Reusability"],
      },
      {
        title: "Props and state",
        description:
          "Props pass information between components, while state represents information that can change during use and trigger interface updates.",
        tags: ["Props", "useState"],
      },
      {
        title: "API integration",
        description:
          "The application communicates with external services through requests and processes their responses to support functionality beyond the frontend alone.",
        tags: ["HTTP", "JSON", "Async JavaScript"],
      },
      {
        title: "Payment integration",
        description:
          "Paystack integration explores the payment initiation and response flow. A production payment flow must also verify transaction status securely on a trusted backend.",
        tags: ["Paystack", "Transactions"],
      },
      {
        title: "AI assistant",
        description:
          "Gemini API integration explores how a language model can support a conversational assistant within an e-commerce interface.",
        tags: ["Gemini API", "Prompting"],
      },
    ],
    features: [
      "React-based product catalogue",
      "Reusable interface components",
      "Interactive shopping experience",
      "Paystack payment integration",
      "Gemini-powered AI assistant",
    ],
    architecture: [
      "React application",
      "Reusable components and state",
      "Product and cart interactions",
      "Paystack payment flow",
      "Gemini AI assistant",
    ],
    challenges: [
      {
        title: "React dependency compatibility",
        description:
          "Integrating third-party packages can expose version compatibility issues. Dependencies and peer requirements need to be checked before choosing an appropriate solution.",
      },
      {
        title: "Connecting external services",
        description:
          "API integrations require careful handling of asynchronous requests, responses, errors and configuration. Secret API keys should never be exposed in frontend code.",
      },
    ],
    learning:
      "Waini strengthened my understanding of React components, state-driven interfaces and third-party API integration. It also introduced practical considerations around payment flows, AI features and application security.",
    liveUrl: "https://waini.philipaipoh.com.ng/",
    documentationUrl: "https://winova.docny.app/waini/project-overview",
    githubUrl: "https://github.com/Babbler01/waini",
    next: null,
    previous: "mainstreet",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
