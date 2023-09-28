import gp from "../images/logoGP.png";
import jdd from "../images/logo_jdd.png";
//import jddn from "../images/logo_jddn.png";
import gpgh from "../images/logo_gpgh.png";
import jdv from "../images/jdv.png";
import colGra from "../images/logo_colGra.png";

const projets = [
  {
    Titre: "Portfolio",
    Alt: "PortFolio",
    Image: gp,
    Date: "September 2023",
    DescriptionTitre: "Site to present my work",
    DescriptionCorps:
      "This site has been created in ReactJS so that I can share with you the projects I've completed throughout my studies.",
    Langages: ["reactJS"],
    GitHubRepo: "https://github.com/Gaby269/PortFolio-GP",
    Site: "https://gaby269.github.io/PortFolio-GP/",
  },
  {
    Titre: "Game of Difference",
    Image: jdd,
    Alt: "Game of Difference",
    Date: "May - June 2023",
    DescriptionTitre: "Master 1 programming project",
    DescriptionCorps:
      "Game of differences is a game in which two words are pitted against each other and their differences revealed. You can also create your own games by proposing 2 words that are similar and finding their difference so that other users can play their games. It will be necessary however for the user account.",
    Langages: ["mysql", "js", "html", "css", "php"],
    GitHubRepo: "",
    Site: "https://jeuxdedifferences.000webhostapp.com/",
  },
  {
    Titre: "Mobile Application Temporary workers",
    Image: gpgh,
    Alt: "AppliInterimaire",
    Date: "February - May 2023",
    DescriptionTitre: "Application for managing temporary employment offers",
    DescriptionCorps:
      "The project consisted in creating a mobile application that users could use to post temping job offers online from companies or temping agencies, and that users as candidates could apply to the various offers.",
    Langages: ["android", "firebase", "java"],
    GitHubRepo: "https://github.com/Gaby269/Application-Mobile-Interimaire",
    Site: "",
  },
  {
    Titre: "Natural language inference",
    Image: "https://www.jeuxdemots.org/pics/logoJDMcarrevarianteFondNoir.png",
    Alt: "Inference",
    Date: "February - May 2023",
    DescriptionTitre:
      "Project on the syntactic relationships of natural language words",
    DescriptionCorps:
      "The idea behind this project was to use the Jeux de Mots database to create a questionnaire designed to answer simple questions such as 'Can a cat eat?'. We would ask the program a question, and it would answer yes or no and provide us with an explanation based on what it found, by inference, in the Jeux de Mots database. For more information, see the README on GitHub.",
    Langages: ["python"],
    GitHubRepo: "https://github.com/Gaby269/Projet_Inference_Langage_Naturel",
    Site: "",
  },
  {
    Titre: "Distributed graph colouring",
    Image: colGra,
    Alt: "JeuDeLaVie",
    Date: "October - December 2022",
    DescriptionTitre: "Distributed programming project",
    DescriptionCorps:
      "The aim of the project was to color a graph where each vertex is a client that is linked together by sockets. To achieve this, each client had to be colored differently from all its neighbors. To achieve this, we used protocols.",
    Langages: ["c"],
    GitHubRepo: "https://github.com/Gaby269/Coloration-de-graphe-repartis",
    Site: "",
  },
  {
    Titre: "Advent Of Code",
    Image: "https://adventofcode.com/favicon.png",
    Alt: "AdventOfCode",
    Date: "December 2022",
    DescriptionTitre: "Programming competitions",
    DescriptionCorps:
      "The Advent Of Code is a programming contest that takes place in December. It's a pre-programming calendar in any language (in this case, Python). The aim is to solve small programming problems each day in a minimum of time, as the difficulty increases with each passing day.",
    Langages: ["python"],
    GitHubRepo: "https://github.com/Gaby269/AdventOfCode",
    Site: "https://adventofcode.com/",
  },
  {
    Titre: "The Game of life",
    Image: jdv,
    Alt: "JeuDeLaVie",
    Date: "February - May 2021",
    DescriptionTitre: "Bachelor's 3 programming project",
    DescriptionCorps:
      "The aim of this project is to develop a game of life that generates creatures for each player on a map with different terrains. These creatures will have to survive by satisfying their vital needs to eat, drink and reproduce. The players only intervene in the general settings of the creatures, and do not interact with them during the game. So you have to look for the best input parameters to have the most living creatures at the end of the game.",
    Langages: ["js", "html", "css"],
    GitHubRepo: "https://github.com/Gaby269/Jeu-de-la-vie",
    Site: "",
  },
];

export default projets;
