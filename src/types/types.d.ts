export type Icons = "world" | "notice" | "report" | "interview" | "editorial" | "draw" | "review" | "chronicle" | "letter" | "search";

export type MenuItemProps = {
  iconName: Icons;
  toPage: string;
  label: string;
};

export type Artwork = {
  _id: string;
  name: string;
  writter: string;
  link_description: string;
}

export type Author = {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    }
  };
}

export type InfoType = {
  title: string;
  slug: Icons;
}

export type News = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  artwork: Artwork;
  author: Author;
  mainImage: {
    asset: {
      url: string;
    }
  };
  infoType: InfoType;
  _createdAt: string;
  body: [object];
}

export type LineImageNews = {
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  mainImage: {
    asset: {
      url: string;
    }
  };
  infoType: InfoType;
  _createdAt: string;
}

export type HeadlineNews = {
  title: string;
  slug: {
    current: string;
  };
  infoType: InfoType;
  _createdAt: string;
}

export type AsideImageNews = {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    }
  };
  infoType: InfoType;
  _createdAt: string;
}

export type DefaultNews = {
  title: string;
  slug: {
    current: string;
  };
  infoType: InfoType;
  description?: string;
  _createdAt: string;
}