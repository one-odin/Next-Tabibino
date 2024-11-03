const Button = ({ children, variant = "primary", size = "medium", icon, className = "", ...props }) => {
  const baseStyles = "focus:outline-none focus:ring-4 rounded-lg text-center font-bold me-2 mb-2";
  const variants = {
    primary: " text-white bg-gradient-to-br from-purple-700 to-purple-500 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-purple-200 rounded-lg ",
    primaryOutline: "text-purple-600 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300",
    redOutline: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300",
  };
  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-5 py-3 text-sm",
    large: "px-7 py-3 text-xl",
  };

  const style = `${baseStyles} ${variants[variant]} ${sizes[size]} ${icon ? "flex justify-center items-center" : ""} ${className}`;

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
