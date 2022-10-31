export type Icons = "world" | "notice" | "report" | "interview" | "editorial" | "draw" | "review" | "chronicle" | "letter" | "search";

export type MenuItemProps = {
  iconName: Icons;
  toPage: string;
  label: string;
};