export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  commentsCount: number;
  desc: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How many calories are in honey?",
    category: "Service",
    image: "/assets/images/blog (1).webp",
    author: "By Admin",
    date: "January 28, 2023",
    commentsCount: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 2,
    title: "One pound of honey",
    category: "Honey",
    image: "/assets/images/blog (2).webp",
    author: "By Admin",
    date: "January 25, 2023",
    commentsCount: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 3,
    title: "What is honey?",
    category: "Beekeeping",
    image: "/assets/images/blog (3).webp",
    author: "By Admin",
    date: "January 15, 2023",
    commentsCount: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 4,
    title: "Hot honey: How to make and use",
    category: "Beekeeping",
    image: "/assets/images/blog (4).webp",
    author: "By Admin",
    date: "November 28, 2023",
    commentsCount: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 5,
    title: "Can Diabetics Replace Sugar With Honey?",
    category: "Dish Recipes",
    image: "/assets/images/blog (5).webp",
    author: "By Admin",
    date: "November 25, 2023",
    commentsCount: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 6,
    title: "National Beekeeping & Honey Mission",
    category: "Honey",
    image: "/assets/images/blog (6).webp",
    author: "By Admin",
    date: "November 18, 2023",
    commentsCount: 7,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 7,
    title: "Color of the Year: Honey",
    category: "Beekeeping",
    image: "/assets/images/beekeeper (3).webp",
    author: "By Admin",
    date: "November 18, 2023",
    commentsCount: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 8,
    title: "Summer weather aways honey bees' winter...",
    category: "Honey",
    image: "/assets/images/beekeeper (1).webp",
    author: "By Admin",
    date: "November 08, 2023",
    commentsCount: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
];
