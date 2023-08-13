import { useState, useEffect } from "react";
import "./App.css";

function App({ game }) {
  const [state, setState] = useState({});

  useState(() => {
    setInterval(() => {
      setState({});
      game.update();
    }, 100);
  }, []);

  return (
    <main>
      <h1>Sushi Store 🍣</h1>
      <table>
        <tbody>
          <tr className="sushi-row">
            <td style={{ fontWeight: "bold" }}>
              <h2>Sushi:</h2>
            </td>
            <td className="value">{game.totalSushi}</td>
            <td>
              <button
                className="btn"
                disabled={game.material < 100 ? true : false}
                onClick={game.makeSushi}
              >
                Make sushi
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Businnes</h3>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>Money:</td>
            <td className="value">{game.money.toFixed(0)}€</td>
          </tr>
          <tr>
            <td>Unsold Inventory:</td>
            <td className="value">{game.currentSushi}</td>
          </tr>
          <tr>
            <td>
              <span>Price per sushi:</span>
            </td>
            <td className="value">{game.price.toFixed(2)}€</td>
            <td>
              <button
                disabled={!game.canLowerPrice()}
                onClick={game.lowePrice}
                className="btn"
              >
                Lower
              </button>
            </td>
            <td>
              <button
                disabled={!game.canRaisePrice()}
                onClick={game.raisePrice}
                className="btn"
              >
                Raise
              </button>
            </td>
          </tr>
          <tr>
            <td>Demand:</td>
            <td className="value">{game.demand.toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
      <h3>Manufacturing</h3>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>Sushi per second:</td>
            <td className="value">{game.sushiPerSecond}</td>
          </tr>
          <tr>
            <td>Material:</td>
            <td className="value">{game.material}gr</td>
            <td>
              <button
                className="btn"
                disabled={!game.canBuyMaterial()}
                onClick={game.buyMaterial}
              >
                Buy material ({game.materialCost}€)
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                disabled={!game.canBuySushiMachine()}
                className="btn"
                onClick={game.buySushiMachine}
              >
                Sushi machine ({game.sushiMachinePrice}€)
              </button>
            </td>
            <td className="value">{game.sushiMachineAmount}</td>
          </tr>
          <tr>
            <td>
              <button
                disabled={!game.canHireErrand()}
                onClick={game.hireErrand}
                className="btn"
              >
                Hire errand ({game.errandHirePrice}€)
              </button>
            </td>
            <td className="value">{game.errandAmount}</td>
          </tr>
          <tr>
            <td>
              <button
                disabled={!game.canHireChef()}
                onClick={game.hireChef}
                className="btn"
              >
                Hire sushi shef ({game.chefHirePrice}€)
              </button>
            </td>
            <td className="value">{game.chefAmount}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default App;
