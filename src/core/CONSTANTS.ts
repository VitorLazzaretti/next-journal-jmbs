import { MenuItemProps } from "../types/types";

const MenuOptions: MenuItemProps[] = [
  {
    iconName: "world",
    label: "Todos",
    toPage: "/"
  },
  {
    iconName: "notice",
    label: "Noticías",
    toPage: "/notice"
  },
  {
    iconName: "report",
    label: "Reportagens",
    toPage: "/report"
  },
  {
    iconName: "interview",
    label: "Entrevistas",
    toPage: "/interview"
  },
  {
    iconName: "editorial",
    label: "Editoriais e Colunas",
    toPage: "/editorial"
  },
  {
    iconName: "draw",
    label: "HQ e Caricaturas",
    toPage: "/draw"
  },
  {
    iconName: "review",
    label: "Resenhas",
    toPage: "/review"
  },
  {
    iconName: "chronicle",
    label: "Crônicas",
    toPage: "/chronicle"
  },
  {
    iconName: "letter",
    label: "Cartas dos Leitores",
    toPage: "/letter"
  }
];

export default {
  MenuOptions: MenuOptions
};