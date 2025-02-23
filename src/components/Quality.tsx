import { BodyWrapper } from "./ui/Wrapper";
import { FcCheckmark } from "react-icons/fc";

const Quality = () => {
  return (
    <BodyWrapper
      className="body-wrapper bg-cover bg-center py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center text-white"
      background={
        "https://momohut.ca/wp-content/uploads/2022/11/footer_bg_3.jpg"
      }
    >
      <div className="max-w-3xl text-center">
        <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
          High Standards
        </h3>
        <h2 className="text-4xl font-bold mt-2">
          Exceptional Quality, Every Bite
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          We are committed to using the freshest ingredients and traditional
          recipes to craft dishes that bring authentic flavors to your plate.
          Every meal is prepared with care, ensuring a delicious and memorable
          dining experience.
        </p>
        <ul className="mt-6 text-lg text-left max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-2">
            <span className="text-green-400">
              <FcCheckmark />
            </span>{" "}
            Fresh, Locally Sourced Ingredients
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">
              <FcCheckmark />
            </span>{" "}
            Authentic, Time-Tested Recipes
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">
              <FcCheckmark />
            </span>{" "}
            Skilled Chefs with a Passion for Flavor
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">
              <FcCheckmark />
            </span>{" "}
            Commitment to Hygiene & Excellence
          </li>
        </ul>
        <button className="mt-8 px-6 py-3 text-lg font-semibold bg-primary text-white rounded-2xl shadow-lg transition-transform hover:scale-105">
          View Our Menu
        </button>
      </div>
    </BodyWrapper>
  );
};

export default Quality;
