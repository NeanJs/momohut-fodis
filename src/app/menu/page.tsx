"use client";
import Newsletter from "@/components/Newsletter";
import Quality from "@/components/Quality";
import SpecialsMenu from "@/components/PopularItems";
import Banner from "@/components/global/Banner";
import MenuSidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import PopularItems from "@/components/PopularItems";
import { BodyWrapper } from "@/components/ui/Wrapper";
const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic tomato sauce, fresh mozzarella, basil",
    price: "$14.99",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Tomato sauce, mozzarella, pepperoni slices",
    price: "$16.99",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3,
    name: "Spaghetti Carbonara",
    description: "Spaghetti, egg, pancetta, parmesan, black pepper",
    price: "$15.99",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 4,
    name: "Fettuccine Alfredo",
    description: "Fettuccine pasta, cream sauce, parmesan",
    price: "$14.99",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: 5,
    name: "Classic Cheeseburger",
    description: "Beef patty, cheddar cheese, lettuce, tomato, onion",
    price: "$13.99",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan, caesar dressing",
    price: "$11.99",
    category: "Salad",
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    name: "Tiramisu",
    description: "Layers of coffee-soaked ladyfingers and mascarpone cream",
    price: "$8.99",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, vanilla ice cream",
    price: "$9.99",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1617805611663-39def836385a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
];

export default function MenuPage() {
  const categories = ["All", "Pizza", "Pasta", "Burger", "Salad", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    const newFilteredItems =
      selectedCategory === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === selectedCategory);

    setFilteredItems(newFilteredItems);
  }, [selectedCategory]);

  return (
    <BodyWrapper>
      <MenuSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Banner
        title="Our Menu"
        subtitle="Explore the delights of Indo-Nepalese Cuisine at Momohut"
        backgroundImage="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PopularItems />
      <Newsletter />
    </BodyWrapper>
  );
}
