import "./TicTacToe.scss";
function TicTacToeBox(props) {
  const { children, onClick } = props;
  return (
    <div onClick={onClick} className="game-box">
      {children}
    </div>
  );
}

export default TicTacToeBox;
