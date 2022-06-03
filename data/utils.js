export const books = [
  {
    id: "1",
    name: "Avatar Battle",
    description: "This is my first book",
  },
  {
    id: "2",
    name: "God's Love",
    description: "This is my first book",
  },
  {
    id: "3",
    name: "Fear Women!",
    description: "This is my first book",
  },
  {
    id: "4",
    name: "Atomic Habits",
    description: "This is my first book",
  },
  {
    id: "5",
    name: "Rich Money Lust",
    description: "This is my first book",
  },
];

export const fetchBookID = (id) => {
  const fetchedBook = books.find((book) => book.id === id);
  return fetchedBook;
};
