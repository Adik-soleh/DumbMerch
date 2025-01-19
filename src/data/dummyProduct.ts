import { MyTransactionProps } from "@/types/types";
import Avatar from "@/assets/Avatar.svg";

export const dummyData: MyTransactionProps[] = [
  {
    id: 1,
    name: "Mouse",
    image: `${Avatar}`,
    date: "Saturday, 14 Juli 2021",
    stock: 200,
    price: 500000,
    total: 500000,
    description: "Mouse berkualitas tinggi dengan desain ergonomis.",
  },
];

export const dummyProduct: MyTransactionProps[] = [
  {
    id: 1,
    name: "Carger",
    image: `${Avatar}`,
    date: "Saturday, 14 Juli 2024",
    stock: 200,
    price: 300000,
    total: 100000,
    description: "Carger berkualitas tinggi dengan desain ergonomis",
  },
  {
    id: 2,
    name: "Mouse",
    image: `${Avatar}`,
    date: "Saturday, 15 Juli 2024",
    stock: 50,
    price: 500000,
    total: 500000,
    description: "Keyboard berkualitas tinggi dengan desain ergonomis.",
  },
  {
    id: 3,
    name: "Headset",
    image: `${Avatar}`,
    date: "Saturday, 16 Juli 2024",
    stock: 10,
    price: 500000,
    total: 500000,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore voluptatibus laborum quaerat obcaecati earum repudiandae voluptatem eius, sapiente eveniet amet. Ducimus enim deserunt, quaerat dicta eveniet ab ratione nobis Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore voluptatibus laborum quaerat obcaecati earum repudiandae voluptatem eius, sapiente eveniet amet. Ducimus enim deserunt, quaerat dicta eveniet ab ratione nobis.",
  },
  {
    id: 4,
    name: "Mouse Pad",
    image: `${Avatar}`,
    date: "Saturday, 16 Juli 2024",
    stock: 10,
    price: 500000,
    total: 500000,
    description: "Mouse Pad berkualitas tinggi dengan desain ergonomis.",
  },
];

export const items = [
  { id: 1, category: "Electronics" },
  { id: 2, category: "Home Appliances" },
  { id: 3, category: "Furniture" },
  { id: 4, category: "Electronics" },
  { id: 5, category: "Accessories" },
];
