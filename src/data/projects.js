import ghb from "../assets/projects/githubapi.jpg";
import raq from "../assets/projects/randomanimequote.jpg";
import water from "../assets/projects/watermyplants.png";

export const projectsData = [
  {
    id: "github-card",
    title: "GitHub User Card",
    description:
      "A React application that fetches GitHub user data via the GitHub API and renders dynamic profile cards with follower information.",
    image: ghb,
    techStack: ["React", "JavaScript", "REST API", "CSS"],
    githubUrl:
      "https://github.com/Retrofitt/web-module-project-lifecycle/tree/rafael-mendoza",
    liveUrl: "https://retrosghbusinesscard.vercel.app/",
  },
  {
    id: "anime-quote",
    title: "Random Anime Quote",
    description:
      "Built with Redux and async action creators. Fetches and displays random anime quotes from an external API with state management.",
    image: raq,
    techStack: ["React", "Redux", "Async/Await", "API"],
    githubUrl:
      "https://github.com/Retrofitt/web-module-project-async-redux/tree/main",
    liveUrl: "https://random-anime-quote.vercel.app/",
  },
  {
    id: "water-my-plants",
    title: "Water My Plants",
    description:
      "Full-stack app with user authentication. Backend REST API with database integration that reminds users when to water their plants.",
    image: water,
    techStack: ["Node.js", "Express", "SQLite", "JWT", "React"],
    githubUrl:
      "https://github.com/LambdaBuildWeekWaterMyPlants/watermyplants-backend",
    liveUrl: "https://water-myplants-frontend.netlify.app/",
  },
];
