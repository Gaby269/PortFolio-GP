import cats from "../images/logo_catsquizz.png";
import gp from "../images/logoGP.png";
import jdd from "../images/logo_jdd.png";
//import jddn from "../images/logo_jddn.png";
import gpgh from "../images/logo_gpgh.png";
import jdv from "../images/jdv.png";
import colGra from "../images/logo_colGra.png";
import gts from "../images/logo_gts.png";
import ml from "../images/logo_fakenews.jpg";
import biblioP from "../images/logo_biblio_pointeau";

const projets = [
  {
    Titre: "Bibliothèques des POINTEAU",
    Image: biblioP,
    Alt: "BiblioPOINTEAU",
    Date: "Novembre 2023",
    DescriptionTitre: "Projet de programmation web personnel",
    DescriptionCorps:
      "Ce projet consiste à permettre à ma famille d'avoir accès aux livres, cd ou encore partitions etc... que chacun aurait dans sa bibliothèque. En effet, cela faciliterait au niveau des cadeaux d'éviter les doublons. Ainsi, ce projet est un projet web utilisant firebase pour stocker les données.",
    Langages: ["html", "css", "js", "firebase"],
    GitHubRepo: "https://github.com/Gaby269/Bibliotheques-des-POINTEAU",
    Site: "",
  },
  {
    Titre: "Gestion de tournois sportifs",
    Alt: "Tournois-Sportif",
    Image: gts,
    Date: "Octobre 2023 en cours",
    DescriptionTitre: "Site pour gérer différents tournois sportifs",
    DescriptionCorps:
      "L'idée de ce projet était de refaire le projet de L2 qui était de réaliser un site en PHP, HTML et CSS mais à l'aide du framework Symfony.",
    Langages: ["symfony", "js", "css", "boostrap"],
    GitHubRepo: "https://github.com/Gaby269/Gestion-Tournois-Sportif",
    Site: "",
  },
  {
    Titre: "CatsQuizz and DogsQuizz",
    Alt: "CatsQuizz",
    Image: cats,
    Date: "Septembre - Octobre 2023",
    DescriptionTitre: "Jeu pour apprendre les races de chat et de chien",
    DescriptionCorps:
      "Jeu qui permet d'apprendre et de s'entrainer sur ses connaissances sur les races de chats et de chiens. Vous pouvez apprendre des informations sur les races de chats et de chiens puis de jouer aux différents jeux (pour l'instant 1 seul).",
    Langages: ["html", "css", "axentix", "js"],
    GitHubRepo: "https://github.com/Gaby269/Breed-CatsDogs-Quizz",
    Site: "https://gaby269.github.io/Breed-CatsDogs-Quizz",
  },
  {
    Titre: "Portfolio",
    Alt: "PortFolio",
    Image: gp,
    Date: "Septembre 2023",
    DescriptionTitre: "Site pour présenter mes travaux",
    DescriptionCorps:
      "Ce site a été réalisé en ReactJS pour pouvoir vous faire part de mes projets réalisés tout au long de mon cursus d'étude.",
    Langages: ["reactJS", "css"],
    GitHubRepo: "https://github.com/Gaby269/PortFolio-GP",
    Site: "https://gaby269.github.io/PortFolio-GP/",
  },
  {
    Titre: "Jeu de Différence",
    Image: jdd,
    Alt: "Jeu de différence",
    Date: "Mai - Juin 2023",
    DescriptionTitre: "Projet de programmation de Master 1",
    DescriptionCorps:
      "Jeu de différence est un jeu où l'on confronte deux mots et où l'on donne leurs différences. On pourra par la suite également créer ses propres parties en proposant 2 mots qui se ressemblent et trouver leur différence pour que les autres utilisateurs puissent jouer à leurs parties. Il faudra cependant pour pouvoir le tester un compte utilisateur.",
    Langages: ["mysql", "js", "html", "css", "php"],
    GitHubRepo: "",
    Site: "https://jeuxdedifferences.000webhostapp.com/",
  },
  {
    Titre: "Application Mobile Interimaire",
    Image: gpgh,
    Alt: "AppliInterimaire",
    Date: "Février - Mai 2023",
    DescriptionTitre: "Application de gestion des offres d'interimaire",
    DescriptionCorps:
      "Le projet consistait à créer une application mobile servant aux utilisateurs à mettre en ligne des offres d'emploi d'intérimaire par des entreprises ou des agences d'intérimaire et que les utilisateurs en tant que candidat puissent postuler aux différentes offres.",
    Langages: ["android", "firebase", "java"],
    GitHubRepo: "https://github.com/Gaby269/Application-Mobile-Interimaire",
    Site: "",
  },
  {
    Titre: "Inférence sur le langage naturel",
    Image: "https://www.jeuxdemots.org/pics/logoJDMcarrevarianteFondNoir.png",
    Alt: "Inference",
    Date: "Février - Mai 2023",
    DescriptionTitre:
      "Projet sur les relations syntaxiques des mots du langage naturel",
    DescriptionCorps:
      "L'idée de ce projet était de réaliser, avec la base Jeux de Mots, un questionnaire visant à répondre à des questions simples comme 'Est ce qu'un chat peut manger ?'. Nous devions poser une question au programme et celui-ci répond par oui ou par non et nous fournit une explication en fonction de ce qu'il trouvait, par inférence, dans la base de données Jeux de Mots. Pour plus d'explication voire le README sur GitHub.",
    Langages: ["python"],
    GitHubRepo: "https://github.com/Gaby269/Projet_Inference_Langage_Naturel",
    Site: "",
  },
  {
    Titre: "Machine Learning",
    Alt: "Marchine-Learning",
    Image: ml,
    Date: "Février - Mai 2023",
    DescriptionTitre: "Projet de detection de fake news",
    DescriptionCorps:
      "L'idée de ce projet était d'utiliser les concept de machine learning pour réaliser de la détection de fake news, en utilisant le langage de programmation Python.",
    Langages: ["python"],
    GitHubRepo: "https://github.com/ArnaudCs/Projet-ML",
    Site: "",
  },
  {
    Titre: "Coloration de graphe répartis",
    Image: colGra,
    Alt: "JeuDeLaVie",
    Date: "Octobre - Décembre 2022",
    DescriptionTitre: "Projet de programmation répartis",
    DescriptionCorps:
      "Le but du projet était de colorier un graphe où chaque sommet est un client qui est relié entre eux par des sockets. Pour cela chaque client doit être colorié par une couleur différente de tous ses voisins. Pour cela nous utilisions les protocoles.",
    Langages: ["c"],
    GitHubRepo: "https://github.com/Gaby269/Coloration-de-graphe-repartis",
    Site: "",
  },
  {
    Titre: "Advent Of Code",
    Image: "https://adventofcode.com/favicon.png",
    Alt: "AdventOfCode",
    Date: "Décembre 2022",
    DescriptionTitre: "Concours de programmation",
    DescriptionCorps:
      "L'Advent Of Code est un concours de programmation qui se déroule au mois de décembre. C'est un calendrier de l'avant programmation dans n'importe quel langage (ici Python). Le but étant de résoudre chaque jour des petits problèmes de programmation en un minimum de temps, étant donné que la difficulté augmente au fil des jours.",
    Langages: ["python"],
    GitHubRepo: "https://github.com/Gaby269/AdventOfCode",
    Site: "https://adventofcode.com/",
  },
  {
    Titre: "Jeu de la vie",
    Image: jdv,
    Alt: "JeuDeLaVie",
    Date: "Février - Mai 2021",
    DescriptionTitre: "Projet de programmation de Licence 3",
    DescriptionCorps:
      "Le but de ce projet est d'élaborer un jeu de la vie qui génère des créatures pour chaque joueur sur une carte avec différents terrains. Ces créatures vont devoir survivre en satisfaisant leurs besoins vitaux de boire, manger et de se reproduire. Les joueurs n'interviennent que sur le paramétrage général des créatures, et n'interagissent pas avec elles durant la partie. On doit donc chercher les meilleurs paramètres d'entrée pour avoir le plus de créature vivante à la fin du jeu.",
    Langages: ["js", "html", "css"],
    GitHubRepo: "https://github.com/Gaby269/Jeu-de-la-vie",
    Site: "",
  },
];

export default projets;
