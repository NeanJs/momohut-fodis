"use client";
import { useState, useEffect } from "react";

import {
  Pizza,
  Utensils,
  Coffee,
  Salad,
  SidebarClose,
  SidebarOpen,
} from "lucide-react";

interface MenuSidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const MenuSidebar = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: MenuSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "pizza":
        return <Pizza className="h-5 w-5" />;
      case "pasta":
        return <Utensils className="h-5 w-5" />;
      case "dessert":
        return <Coffee className="h-5 w-5" />;
      case "salad":
        return <Salad className="h-5 w-5" />;
      default:
        return <Utensils className="h-5 w-5" />;
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex fixed left-0 top-24 z-50 bg-momo_red text-white p-2 rounded-r-lg shadow-md"
      >
        {isOpen ? <SidebarClose size={20} /> : <SidebarOpen size={20} />}
      </button>

      <div
        className={`fixed left-0 top-32 h-screen bg-white shadow-lg z-30 transition-all duration-300 pt-24 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isMobile ? "w-48" : "w-64"}`}
      >
        <div className="p-4">
          <h3 className="text-lg font-heading font-semibold mb-4 text-momo_red">
            Food Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    onSelectCategory(category);
                    if (isMobile) setIsOpen(false);
                  }}
                  className={`
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                  ${
                    selectedCategory === category
                      ? "bg-red-100 text-momo_red font-medium"
                      : "hover:bg-orange-50 text-gray-700"
                  }
                  `}
                >
                  {category !== "All" && getCategoryIcon(category)}
                  {category === "All" && <Utensils className="h-5 w-5" />}
                  <span>{category}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default MenuSidebar;
