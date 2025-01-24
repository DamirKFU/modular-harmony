export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Минималистичная вышивка 'Геометрия'",
    price: 2500,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Элегантный узор 'Волны'",
    price: 3200,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Классическая монограмма",
    price: 1800,
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Абстрактная композиция",
    price: 4100,
    image: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Современный орнамент",
    price: 2900,
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Японские мотивы",
    price: 3600,
    image: "/placeholder.svg"
  }
];