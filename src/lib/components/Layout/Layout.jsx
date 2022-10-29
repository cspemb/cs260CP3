import { Button } from "../";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = (props) => {
  const { paths } = props;
  const navigate = useNavigate();

  const links = paths.map((path, index) => {
    const handleClick = () => {
      navigate(path.route);
    };
    return (
      <li key={index}>
        <Button handleClick={handleClick}>{path.name}</Button>
      </li>
    );
  });

  return (
    <>
      <h1>Layout</h1>

      <nav>
        <ul>{links}</ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
