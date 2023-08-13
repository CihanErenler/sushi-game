import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Game from "./game/game";

const game = new Game();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App game={game} />);
