const Input = ({
  placeholder = "",
  type = "email",
  size = "md",
  className = "",
  ...props
}) => {
  const sizes = {
    md: "px-4 py-3 text-body",
    lg: "px-8 py-6 text-[2rem]",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        w-full
        ${sizes[size] || sizes.md}
        rounded-xl
        border border-gray-20
        bg-white text-gray-100
        outline-none
        focus:border-blue-60
        transition-all duration-200
        placeholder:text-gray-40
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
