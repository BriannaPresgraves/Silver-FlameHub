function goToPerson(id) {
  window.location.href = `person.html?id=${id}`;
}

const people = {
chuanhui: {
    photo: "Chuanhui.png",
    name: "Chuanhui Yan",
    title: "Producer",
    bio: [
      "As a producer, I was responsible for planning and coordinating the team’s workflow to keep development on track. I helped break down tasks, adjust scope when needed, and ran meetings such as stand-ups, check-ins, and playtest reviews. I acted as a bridge between the programming and art teams, making sure priorities, dependencies, and expectations were clear. I also tracked progress and helped resolve issues during development, including adapting plans when assets or code were missing or not functioning. In addition, I supported implementation by placing assets into the Unity engine to build out scenes, assisted with bug identification through playtesting, and organized playtests while collecting and distributing feedback to the team.",
      "As an artist, I contributed to both the visual direction and asset production for the project. I helped develop the art style and created pipeline documentation to guide both 2D and 3D asset creation. I built reusable smart materials in Substance Painter for common surfaces such as wood and stone, as well as a base material with outline and overlay layers to maintain visual consistency. My work included modeling modular furniture assets and handling a large portion of the project’s texturing. I also created the happy ending cutscene, explored techniques for generating normal maps for 2D assets, and worked on shaders and visual effects. In addition, I was responsible for lighting and overall visual polish in Unity, ensuring the final presentation matched the intended look and feel."
    ],
    links: [
      { text: "Portfolio", url: "https://chuanhuiyan2.artstation.com/" },
      { text: "LinkedIn", url: "https://www.linkedin.com/in/chuanhui-yan/" }
    ]
  },

chase: {
    photo: "Chase.png",
    name: "Chase Smith",
    title: "Programming Lead",
    bio: ["As programming lead, I was responsible for meeting with the other team leads and making sure programmers were updated/on track with the current requirements. I also created the technical documentation of game systems and tested implemented systems to ensure requirements were met."],
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/chase-padilla-412438240/" }
    ]
  },

  kamilla: {
    photo: "Kamilla.png",
    name: "Kamilla Akhmedova",
    title: "Creative Director",
    bio: ["I led the overall creative vision of Krovna from concept to execution. I originated the game's core idea and narrative direction the shifting house, the generational curse, the two endings. Also developed the level design across all three acts, building out some spell mechanics, room layouts, and player flow in collaboration with the team. On the production side I handled Unity scene building, prop lists, and asset planning to bring the design into the engine. I also contributed to the game's visual identity through 2D and cutscene art, and shaped the audio direction to support the atmosphere of the house."],
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/kamilla-akhmedova-a172a8230/" }
    ]
  },

  john: {
    photo: "Cat.png",
    name: "John Guilfoyle",
    title: "Art Lead",
    bio: ["As Art Lead on KROVNA, a Russian folklore horror game developed by a 15-person team, I oversaw the visual direction and 3D art pipeline from concept through final delivery. My work spanned environment art, texture creation in Substance Painter, and Unity integration, and diegetic horror soundscape design. I coordinated art production across the team while maintaining a cohesive visual identity rooted in Slavic folklore and atmospheric horror."],
    links: [
      { text: "Portfolio", url: "https://www.artstation.com/johnguilfoyle4" },
      { text: "LinkedIn", url: "https://www.linkedin.com/in/john-guilfoyle/" }
    ]
  },
  
  jacob: {
    photo: "Jacob.png",
    name: "Jacob Bruckheim",
    title: "Graphic/Marketing Designer",
    bio: ["I worked as a graphic designer and marketing artist, creating the project’s logo, branding, and promotional materials. I focused on building a consistent visual identity across posters, presentation assets, and other marketing content. <br>I also contributed to 3D asset creation and supported visual storytelling, collaborating with the team to refine visuals and prepare final presentation materials."],
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/jacob-b-8192aa227/" }
    ]
  },

  daniella: {
    photo: "Daniella.png",
    name: "Daniella Solari",
    title: "Illustrator & Animator",
    bio: ["I am a part of the artists team for our senior project game, Krovna, where I have contributed in various areas. I have worked on character design, created 2D animated cutscenes for our visual story moments, and developed both 2D and 3D background assets to help build the game’s environment. Early in development, I also helped organize our team’s communication on Discord by setting up channels and its structure to keep everything running smoothly. It’s been really fun working with everyone and watching our project slowly come to life!"],
    links: [
      { text: "Portfolio", url: "https://www.behance.net/Fruffle" },
      { text: "LinkedIn", url: "https://www.linkedin.com/in/daniella-a-solari/" }
    ]
  },

  livy: {
    photo: "Livy.png",
    name: "Livy Guard",
    title: "Role",
    bio: ["Hi, I'm Livy! I'm a 22 year old artist from the US who specializes in making 2D animated art. I have a passion for bringing creative ideas to life and I love making new friends ♡"],
    links: [
      { text: "Portfolio", url: "https://thecandiebox.com/" },
    ]
  },

  jayoung: {
    photo: "JaYoung.png",
    name: "JaYoung Pan",
    title: "3D Modeler & QA",
    bio: ["I worked on this project mainly as a 3D modeler and QA tester, helping make sure the game didn't look bare. My background is mostly in game design and building virtual sets in Unreal, but this project gave me a chance to focus more on asset creation and testing."],
    links: [
      { text: "Portfolio", url: "https://www.artstation.com/myartstation/projects" },
      { text: "LinkedIn", url: "https://www.linkedin.com/in/jayoung-pan-155704231/" }
    ]
  },

  brianna: {
    photo: "Brianna.png",
    name: "Brianna Presgraves",
    title: "UI/UX Designer",
    bio: ["I worked as the UI/UX designer for Krovna where I was responsible for creating and refining UI prototypes and wireframes that supported the game’s overall look and feel. I conducted usability testing to identify areas of confusion and improve the player experience. I also worked on developing the game’s website to present the project and its features."],
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/brianna-presgraves-a81063231/" }
    ]
  },

  tavin: {
    photo: "Tavin.png",
    name: "Tavin Peterson",
    title: "Narrative Designer",
    bio: ["I helped to create the lore and setting of this game. I wrote the dialogue to help guide players through the game and get them immersed in the lore and mystery of the game. I also helped design and write the artifacts and their associated lore and descriptions to help make the game an even more engaging and immersive experience."],
    links: [
      { text: "Portfolio", url: "https://taplay.wixsite.com/tavin-peterson/portfolio" },
      { text: "LinkedIn", url: "https://www.linkedin.com/in/tavin-peterson-5795b7230/" }
    ]
  },

  anakin: {
    photo: "Cat.png",
    name: "Anakin Rosales",
    title: "Narrative Designer",
    bio: ["bio"],
    links: [
      { text: "Portfolio", url: "" },
      { text: "LinkedIn", url: "" }
    ]
  },

  jack: {
    photo: "Jack.png",
    name: "Jack Mordock",
    title: "Programmer",
    bio: ["I have worked on various things throughout the lifecycle of the project. This includes enemy logic and movement, certain spells, player health and its on-screen reactions, as well as other general programming here and there."],
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/jack-mardock-453b21233/" }
    ]
  },

  nam: {
    photo: "Nam.png",
    name: "Nam Hoang",
    title: "UI System Developer",
    bio: ["Designed and implemented an interactive inventory-based control interface enabling users to influence real-time room traversal within a dynamically shifting environment. Implemented UI-driven minigame that functioned as a control panel for environmental state transitions, integrating front-end interface logic with backend game state management systems."],
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/nam-hoang-nh559/" }
    ]
  },

  jae: {
    photo: "Jae.png",
    name: "Jae Lee",
    title: "Programmer",
    bio: ["Primarily worked on the portals/room traversal and the spells. Helped implement the items, inventory, and checkpoints. Integrated level designs to work with our systems."],
  },

  daniel: {
    photo: "Daniel.png",
    name: "Daniel Goetz",
    title: "Programmer",
    bio: ["I worked as a programmer on Krovna, collaborating closely with the art and narrative teams to build tools and systems for dialogue and cutscenes. I was responsible for developing and maintaining these systems, as well as implementing related UI. Early in development, I also contributed to boss and navigation mechanics."],
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/daniel-ry-goetz/" }
    ]
  },
};

const params = new URLSearchParams(window.location.search);
const personId = params.get("id");
const person = people[personId];

if (person) {
  document.getElementById("person-photo").src = person.photo;
  document.getElementById("person-photo").alt = person.name;
  document.getElementById("person-name").textContent = person.name;
  document.getElementById("person-title").textContent = person.title;

  // Paragraphs
  const bioContainer = document.getElementById("person-bio");
  bioContainer.innerHTML = "";

  person.bio.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    bioContainer.appendChild(p);
  });

  // Links
  const linksContainer = document.getElementById("person-links");
  linksContainer.innerHTML = "";

  if (person.links) {
    person.links.forEach(link => {
      if (link.url) {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        a.target = "_blank";
        linksContainer.appendChild(a);
      }
    });
  }

} else {
  document.querySelector(".person-profile").innerHTML =
    "<h1>Person not found</h1>";
}