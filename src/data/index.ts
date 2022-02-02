import type { SankeyNode, SankeyLink } from "d3-sankey";
import type { ExtraNodeProperties } from "../types";

export const data: {
  nodes: SankeyNode<ExtraNodeProperties, {}>[];
  links: SankeyLink<ExtraNodeProperties, {}>[];
} = {
  nodes: [
    { name: "Kohle", origin: "import", type: "primary" },
    { name: "Öl", origin: "import", type: "primary" },
    { name: "Gas", origin: "import", type: "primary" },
    {
      name: "Sonstige Biogene flüssig",
      description: "(Bioethanol, Biodiesel, Sonstige)",
      origin: "import",
      type: "primary"
    },
    {
      name: "Holz",
      description: "(Scheitholz, Pellets, Briketts, Holzabfall)",
      origin: "import",
      type: "primary"
    },
    { name: "Strom", origin: "import", type: "primary" },
    { name: "Lager", type: "primary" },
    { name: "Wasserkraft", origin: "inland", type: "primary" },
    { name: "Photovoltaik", origin: "inland", type: "primary" },
    { name: "Wind", origin: "inland", type: "primary" },
    {
      name: "Holz",
      description: "(Scheitholz, Pellets, Briketts, Holzabfall)",
      origin: "inland",
      type: "primary"
    },
    { name: "Brennbare Abfälle", origin: "inland", type: "primary" },
    {
      name: "Deponie-, Klär- & Biogas",
      origin: "inland",
      type: "primary"
    },
    { name: "Solarthermie", origin: "inland", type: "primary" },
    { name: "Geothermie", origin: "inland", type: "primary" },
    {
      name: "Umweltwärme",
      description: "(Erdwärme, Grundwasser, Luft)",
      origin: "inland",
      type: "primary"
    },
    { name: "Sonstige Biogene fest", origin: "inland", type: "primary" },
    { name: "Kraftwerke", type: "secondary" },
    { name: "Kraft-Wärme-Kopplungs-Anlagen", type: "secondary" },
    { name: "Heizwerke", type: "secondary" },
    { name: "Strom", type: "secondary" },
    { name: "Fernwärme", type: "secondary" },
    { name: "Umwandlungsverluste", type: "secondary" },
    { name: "Nicht-energetischer Verbrauch", type: "secondary" },
    { name: "Exporte", type: "secondary" },
    { name: "Transport-Verluste", type: "secondary" },
    { name: "Verbrauch Sektor Energie", type: "secondary" },
    { name: "Sonstiges / Gebäude", type: "end" },
    { name: "Produktion", type: "end" },
    { name: "Mobilität", type: "end" },
    { name: "Umwandlungs-Verluste", type: "end" },
    { name: "Sonstiges / Gebäude", type: "utility" },
    { name: "Produktion", type: "utility" },
    { name: "Mobilität", type: "utility" }
  ],
  links: [
    { source: 0, target: 23, value: 773 },
    { source: 0, target: 27, value: 34 },
    { source: 0, target: 28, value: 864 },
    { source: 0, target: 29, value: 1 },
    { source: 0, target: 23, value: 3780 },
    { source: 1, target: 27, value: 7115 },
    { source: 1, target: 28, value: 2173 },
    { source: 1, target: 29, value: 28222 },
    { source: 1, target: 19, value: 48 },
    { source: 2, target: 25, value: 1 },
    { source: 2, target: 26, value: 11 },
    { source: 2, target: 27, value: 5141 },
    { source: 2, target: 28, value: 6634 },
    { source: 2, target: 29, value: 155 },
    { source: 2, target: 17, value: 131 },
    { source: 2, target: 18, value: 680 },
    { source: 2, target: 19, value: 637 },
    { source: 3, target: 27, value: 37 },
    { source: 3, target: 28, value: 64 },
    { source: 3, target: 29, value: 1653 },
    { source: 4, target: 10, value: 1118 },
    { source: 5, target: 20, value: 23665 },
    { source: 6, target: 0, value: 13 },
    { source: 7, target: 20, value: 22684 },
    { source: 8, target: 20, value: 341 },
    { source: 9, target: 20, value: 0 },
    { source: 10, target: 6, value: 4 },
    { source: 10, target: 17, value: 800 },
    { source: 10, target: 18, value: 2022 },
    { source: 10, target: 19, value: 1634 },
    { source: 10, target: 24, value: 1729 },
    { source: 10, target: 28, value: 3290 },
    { source: 10, target: 27, value: 6829 },
    { source: 11, target: 28, value: 165 },
    { source: 12, target: 17, value: 318 },
    { source: 12, target: 18, value: 118 },
    { source: 12, target: 19, value: 4 },
    { source: 12, target: 27, value: 18 },
    { source: 12, target: 28, value: 18 },
    { source: 12, target: 29, value: 3 },
    { source: 13, target: 19, value: 6 },
    { source: 13, target: 27, value: 787 },
    { source: 13, target: 28, value: 1 },
    { source: 14, target: 27, value: 37 },
    { source: 15, target: 27, value: 930 },
    { source: 15, target: 28, value: 16 },
    { source: 16, target: 17, value: 42 },
    { source: 16, target: 28, value: 117 },
    { source: 17, target: 22, value: 743 },
    { source: 17, target: 20, value: 548 },
    { source: 18, target: 22, value: 719 },
    { source: 18, target: 20, value: 589 },
    { source: 18, target: 21, value: 1513 },
    { source: 19, target: 22, value: 303 },
    { source: 19, target: 21, value: 2026 },
    { source: 20, target: 24, value: 24772 },
    { source: 20, target: 25, value: 1642 },
    { source: 20, target: 26, value: 1456 },
    { source: 20, target: 27, value: 9793 },
    { source: 20, target: 28, value: 8587 },
    { source: 20, target: 29, value: 1576 },
    { source: 21, target: 25, value: 603 },
    { source: 21, target: 27, value: 2756 },
    { source: 21, target: 28, value: 180 },
    { source: 27, target: 30, value: 5476 },
    { source: 27, target: 31, value: 28000 },
    { source: 28, target: 30, value: 8646 },
    { source: 28, target: 32, value: 13463 },
    { source: 29, target: 30, value: 24191 },
    { source: 29, target: 33, value: 7419 }
  ]
};
