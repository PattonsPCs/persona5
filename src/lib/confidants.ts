export type Confidant = {
  id: string;
  name: string;
  role: string;
  tag: string;
};

export const confidants: Confidant[] = [
  { id: "joker", name: "Joker", role: "The Protagonist", tag: "Wild" },
  { id: "morgana", name: "Morgana", role: "The guide / cat", tag: "Magician" },
  {
    id: "ryuji",
    name: "Ryuji Sakamoto",
    role: "The hot-headed best friend",
    tag: "Chariot",
  },
  {
    id: "ann",
    name: "Ann Takamaki",
    role: "The compassionate actress",
    tag: "Lovers",
  },
  {
    id: "makoto",
    name: "Makoto Niijima",
    role: "The student council president",
    tag: "Priestess",
  },
  {
    id: "kasumi",
    name: "Kasumi Yoshizawa",
    role: "The talented gymnast",
    tag: "Faith",
  },
];
