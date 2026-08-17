import ghb from "../assets/projects/githubapi.jpg";
import raq from "../assets/projects/randomanimequote.jpg";
import water from "../assets/projects/watermyplants.png";

export const projectsData = [
  {
    id: "github-card",
    title: "Github User Card",
    description:
      "This project showcases ability to make requests and render the responses using React.js",
    image: ghb,
    githubUrl:
      "https://github.com/Retrofitt/web-module-project-lifecycle/tree/rafael-mendoza",
    liveUrl: "https://retrosghbusinesscard.vercel.app/",
  },
  {
    id: "anime-quote",
    title: "Random Anime Quote",
    description:
      "This project uses Redux asynchronous action creators to display requests made to an API.",
    image: raq,
    githubUrl:
      "https://github.com/Retrofitt/web-module-project-async-redux/tree/main",
    liveUrl: "https://random-anime-quote.vercel.app/",
  },
  {
    id: "water-my-plants",
    title: "Water My Plants",
    description:
      "Created database and endpoints for an app that reminds signed up users when to water their plants",
    image: water,
    githubUrl:
      "https://github.com/LambdaBuildWeekWaterMyPlants/watermyplants-backend",
    liveUrl: "https://water-myplants-frontend.netlify.app/",
  },
];
