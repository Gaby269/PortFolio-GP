import cats from "../images/logo_catsquizz.png";
import gp from "../images/logoGP.png";
import jdd from "../images/logo_jdd.png";
//import jddn from "../images/logo_jddn.png";
import gpgh from "../images/logo_gpgh.png";
import jdv from "../images/jdv.png";
import colGra from "../images/logo_colGra.png";
import gts from "../images/logo_gts.png";
import ml from "../images/logo_fakenews.jpg";
import biblioP from "../images/logo_biblio_pointeau.png";
import zoo from "../images/logo_dw_zoo.png";
import mariage from "../images/logo_mariage.png";

const projets = [
  {
    Titre: "Assignments by stable marriage",
    Image: mariage,
    Alt: "MaraigeStable",
    Date: "Novembre 2023",
    DescriptionTitre: "Decision Aids Project",
    DescriptionCorps:
      "This project involved working as a group to implement a decision aids system. The aim was to propose an implementation of the stable marriage algorithm and a method for evaluating preference satisfaction, as well as an interface for carrying out tests on randomly generated lists of preferences.",
    Langages: ["html", "css", "js"],
    GitHubRepo: "https://github.com/Gaby269/Affectations_Mariages_stables",
    Site: "",
    Video: "",
  },
  {
    Titre: "POINTEAU libraries",
    Image: biblioP,
    Alt: "BiblioPOINTEAU",
    Date: "November 2023",
    DescriptionTitre: "Personal web programming project",
    DescriptionCorps:
      "This project involves giving my family access to the books, CDs, sheet music, etc. that everyone has in their library. This would make it easier to avoid duplicating gifts. So this project is a web project using firebase to store the data.",
    Langages: ["html", "css", "js", "firpà)oebase"],
    GitHubRepo: "https://github.com/Gaby269/Bibliotheques-des-POINTEAU",
    Site: "",
    Video: "",
  },
  {
    Titre: "Managing sports tournaments",
    Alt: "Tournois-Sportif",
    Image: gts,
    Date: "October 2023 in progress",
    DescriptionTitre: "Website for managing various sports tournaments",
    DescriptionCorps:
      "The idea of this project was to redo the L2 project, which was to create a website in PHP, HTML and CSS using the Symfony framework.",
    Langages: ["symfony", "js", "css", "boostrap"],
    GitHubRepo: "https://github.com/Gaby269/Gestion-Tournois-Sportif",
    Site: "",
    Video:
      "https://photos.onedrive.com/share/DFF3F7C11C623ED4!124?cid=DFF3F7C11C623ED4&resId=DFF3F7C11C623ED4!124&authkey=!AEXX5_B3ovr9Cms&ithint=video&e=en70mP",
  },
  {
    Titre: "CatsQuizz",
    Alt: "CatsQuizz",
    Image: cats,
    Date: "September - October 2023",
    DescriptionTitre: "Game to learn about cat breeds",
    DescriptionCorps:
      "Learn and practise your knowledge of cat breeds. You can learn about cat breeds and then play the various games (currently only 1).",
    Langages: ["html", "css", "axentix", "js"],
    GitHubRepo: "https://github.com/Gaby269/CatsQuizz",
    Site: "https://gaby269.github.io/CatsQuizz",
    Video: "",
  },
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
    Video: "",
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
    GitHubRepo: "https://github.com/Gaby269/TER_2023_Jeux_de_Differences",
    Site: "https://jeuxdedifferences.000webhostapp.com/",
    Video: "",
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
    Video:
      "https://photos.onedrive.com/share/DFF3F7C11C623ED4!127?cid=DFF3F7C11C623ED4&resId=DFF3F7C11C623ED4!127&authkey=!ABhtyi2dHvTXjBA&ithint=video&e=IuEdgG",
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
    Video: "",
  },
  {
    Titre: "Machine Learning",
    Alt: "Marchine-Learning",
    Image: ml,
    Date: "Février - Mai 2023",
    DescriptionTitre: "Fake news detection project",
    DescriptionCorps:
      "The idea of this project was to use machine learning concepts to perform fake news detection, using the Python programming language.",
    Langages: ["python"],
    GitHubRepo: "https://github.com/ArnaudCs/Projet-ML",
    Site: "",
    Video: "",
  },

  {
    Titre: "Zoo or animal park management",
    Image: zoo,
    Alt: "DW-ZOO",
    Date: "November - December 2022",
    DescriptionTitre: "Data warehouse project",
    DescriptionCorps:
      "This project involved creating its own data warehouse. We chose to work on the management of a zoo or animal park with the aim of improving the lives of the animals by increasing the park's turnover. This project was carried out in SQL.",
    Langages: ["oracle", "plsql"],
    GitHubRepo: "https://github.com/Gaby269/Data-Warehouse-Zoo",
    Site: "",
    Video: "",
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
    Video: "",
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
    Video: "",
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
    Video: "",
  },
];

export default projets;
