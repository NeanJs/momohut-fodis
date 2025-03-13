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
      className="bg-momo_red hover:bg-red-700 text-white h-fit min-w-fit p-4  font-semibold uppercase text-xs"
    >
      {children || text}
    </button>
  );
}

export default Button;
