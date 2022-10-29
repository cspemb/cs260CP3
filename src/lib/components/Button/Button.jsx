const Button = (props) => {
  const { handleClick, children, type } = props;
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
