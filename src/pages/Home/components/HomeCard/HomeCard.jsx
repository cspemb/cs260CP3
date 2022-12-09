import { Button } from "../../../../lib/components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./HomeCard.scss";

export const HomeCard = (props) => {
  const { header, content, route } = props;
  const navigate = useNavigate();

  return (
    <article>
      <h2>{header}</h2>

      <p>{content}</p>

      <Button
        className="CardButton"
        variant="primary"
        handleClick={() => navigate(route)}
      >
        {`Play`}
        <FontAwesomeIcon className="ButtonIcon" icon={faChevronRight} />
      </Button>
    </article>
  );
};
