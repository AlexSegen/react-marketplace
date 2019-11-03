const items = [
  {
    name: "iphone 11",
    price: 1500,
    image: "/images/iphone.png",
    description: "The best iphone in the world.",
    sellerId: "john"
  },
  {
    name: "macbook",
    price: 2500,
    image: "/images/macbook.png",
    description: "The best laptop in the world.",
    sellerId: "joe"
  },
  {
    name: "macbook",
    price: 1500,
    image: "/images/iphone.png",
    description: "The best laptop in the world.",
    sellerId: "jun"
  }
];
const sellers = [
  {
    id: "john",
    name: " John Daglas",
    rating: 4,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/46.jpg",
    description: "He is a very good seller."
  },
  {
    id: "joe",
    rating: 4.5,
    name: " Joe Doe",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/59.jpg",
    description: "He is a very nice seller."
  },
  {
    id: "jun",
    rating: 4.5,
    name: " Jun Park",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/59.jpg",
    description: "He is a very nice seller."
  }
];

export { items, sellers };
