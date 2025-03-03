import Button from "./global/Button";

interface MenuItemProps {
  image: string;
  title: string;
  description?: string;
  price?: string;
  buttonText?: string;
}

export const MenuItem = ({
  image,
  title,
  description,
  price,
  buttonText,
}: MenuItemProps) => {
  return (
    <div className="bg-white text-black  shadow-lg w-full md:w-80 flex flex-col items-center p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover "
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{price}</p>
      <p className="text-gray-600 text-center mt-2">{description}</p>
      {buttonText && <Button text={buttonText} />}
    </div>
  );
};
