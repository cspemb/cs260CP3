import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./lib/components";
import { Home, NotFound } from "./pages";
import { Game2048, RPS, TicTacToe } from "./pages/games";

const paths = [
  { name: "Home", route: "/" },
  { name: "2048", route: "/2048" },
  { name: "Tic Tac Toe", route: "/tic-tac-toe" },
  { name: "Rock Paper Scissors", route: "/rps" },
];

function App() {
  return (
    <BrowserRouter basename="/cp3/dist">
      <Routes>
        <Route path={paths[0].route} element={<Layout paths={paths} />}>
          <Route index element={<Home paths={paths} />} />
          <Route path={paths[1].route} element={<Game2048 />} />
          <Route path={paths[2].route} element={<TicTacToe />} />
          <Route path={paths[3].route} element={<RPS />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
