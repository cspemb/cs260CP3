import { HomeCard, HomeIntro } from "./components";
import "./Home.scss";

const cardsInfo = [
  {
    header: "2048",
    content: "Play the classic 2048 puzzle. How high can you go?",
  },
  {
    header: "Tic Tac Toe",
    content: "Is there even a winning strategy for Tic-Tac-Toe?",
  },
  {
    header: "Rock Paper Scissors",
    content: "Grab a friend and have and RPS smackdown.",
  },
];

export const Home = (props) => {
  const { paths } = props;
  const cards = cardsInfo.map((cardInfo) => {
    const path = paths.find((path) => path.name === cardInfo.header).route;

    return (
      <HomeCard
        header={cardInfo.header}
        content={cardInfo.content}
        route={path}
      />
    );
  });

  return (
    <>
      <HomeIntro />

      <section className="cards">{cards}</section>
    </>
  );
};
