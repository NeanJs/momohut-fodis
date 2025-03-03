import React, { Children } from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  event?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
function Button({ text, event, children }: ButtonProps) {
  return (
    <button
      onClick={event}
      className="bg-red-600 hover:bg-red-700 text-white mt-4 h-fit w-fit py-4 px-6 font-semibold uppercase"
    >
      {children || text}
    </button>
  );
}

export default Button;
