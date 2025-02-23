import React, { Children } from "react";

interface ButtonProps {
  text?: string;
  event?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
function Button({ text, event, children }: ButtonProps) {
  return (
    <button
      onClick={event}
      className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md mt-4 hover:bg-red-600"
    >
      {text || children}
    </button>
  );
}

export default Button;
