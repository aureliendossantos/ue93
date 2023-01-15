export const SITE = {
  title: "Formation Game Design",
  description: "Formation au game design de jeux et jeux sérieux.",
  defaultLanguage: "fr_FR",
};

export const OPEN_GRAPH = {
  image: {
    src: "/default-og-image.png",
    alt: "décor spatial étoilé avec des planètes",
  },
  twitter: "Formation Game Design",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  French: "fr",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/aureliendossantos/ue93/tree/main`;

export const COMMUNITY_INVITE_URL = null;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  fr: {
    "Introduction au game design": [
      { text: "Bienvenue !", link: "fr/introduction" },
    ],
    "Univers, personnages et narration": [
      {
        text: "La fusion identitaire (Capsule vidéo)",
        link: "fr/capsule-video",
      },
    ],
    "Développement technique": [
      {
        text: "Structurer les données avec les ScriptableObjects (Infographie et Tutoriel)",
        link: "fr/tutoriel",
      },
    ],
    "Création de prototype": [
      {
        text: "Gérer le scope du jeu (Podcast)",
        link: "fr/podcast",
      },
    ],
  },
};
