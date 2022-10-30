import "./Button.scss";

const Button = (props) => {
  const { className, handleClick, children, type, variant, size } = props;

  return (
    <button
      className={`Button ${variant}Button ${size} ${className}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
};

export default Button;
