import { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import LineWaveloader from '../../../../../Loaders/LineWaveloader';

import './stylePage.css';

interface Card {
  image: string;
}

interface Pile {
  pile1: Card[];
  pile2: Card[];
  pile3: Card[];
}

interface GameProps {
  nextStep?: string;
  setGameMode: (mode: string | undefined) => void;
  pile: Pile;
  loading: boolean;
}

interface GameStepProps extends GameProps {
  onClickPile: (selectedPile: string) => void;
  nextStep: string;
}

function StartGame({ nextStep, setGameMode, pile, loading }: GameProps) {
  const cards = useMemo(() => {
    if (pile) {
      return [...pile.pile1, ...pile.pile2, ...pile.pile3];
    }
    return [];
  }, [pile]);
  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <h1 className="text_main">Memorize Your Card And Start Game </h1>
      ) : (
        <> </>
      )}

      <div className="cardContent flex flex-row justify-center">
        {loading ? (
          cards.map(card => (
            <img
              className="CardStart"
              src={card.image}
              key={card.image}
              alt="card"
            />
          ))
        ) : (
          <LineWaveloader />
        )}
      </div>
      {loading ? (
        <button
          type="button"
          className="p-2 w-1/3 rounded transition ease-in-out delay-150 text-black bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300"
          onClick={() => setGameMode(nextStep)}
        >
          Start Game
        </button>
      ) : (
        <> </>
      )}
    </div>
  );
}

function Result({ pile }: { pile: Pile }) {
  const allCards = [...pile.pile1, ...pile.pile2, ...pile.pile3];

  const chooseCards = allCards[10];
  return (
    <div className="flex flex-col items-center">
      <h1 className="text_main">Is this your card?</h1>
      <img className="p-9" src={chooseCards.image} alt="choosed card" />
      <Link to="/21cardgame">
        <button
          className="p-2 w-full rounded transition ease-in-out delay-150 text_main  bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300"
          type="button"
        >
          Restart Game
        </button>
      </Link>
    </div>
  );
}
function GameStep({ onClickPile, setGameMode, pile, nextStep }: GameStepProps) {
  return (
    <div className="flex flex-col items-center flex-nowrap">
      <h1 className="text_main">Which pile is your card in?</h1>
      <div>
        <div>
          <button
            type="button"
            className="gameCards pile0"
            onClick={() => {
              onClickPile('pile1');
              setGameMode(nextStep);
            }}
          >
            {pile.pile1.map(card => (
              <img
                className="Card"
                src={card.image}
                key={card.image}
                alt="card"
              />
            ))}
          </button>

          <button
            type="button"
            className=" gameCards pile1 mx-16"
            onClick={() => {
              onClickPile('pile2');
              setGameMode(nextStep);
            }}
          >
            {pile.pile2.map(card => (
              <img
                className="Card"
                src={card.image}
                key={card.image}
                alt="card"
              />
            ))}
          </button>

          <button
            type="button"
            className="gameCards pile2"
            onClick={() => {
              onClickPile('pile3');
              setGameMode(nextStep);
            }}
          >
            {pile.pile3.map(card => (
              <img
                className="Card"
                src={card.image}
                key={card.image}
                alt="card"
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  );
}
export default function Gaming() {
  const [loading, setLoading] = useState<boolean>(false);
  const [pile, setPile] = useState<Pile>({
    pile1: [],
    pile2: [],
    pile3: []
  });

  const [gameMode, setGameMode] = useState<string>('STEP0');

  useEffect(() => {
    (async () => {
      setLoading(false);

      const deckResponse = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
      );
      const deckId = deckResponse.data.deck_id;
      const cardsResponse = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=21`
      );
      setPile({
        pile1: cardsResponse.data.cards.slice(0, 7),
        pile2: cardsResponse.data.cards.slice(7, 14),
        pile3: cardsResponse.data.cards.slice(14, 21)
      });

      setLoading(true);
    })();
  }, []);

  const redistributeCards = useCallback(() => {
    const nextPositions = {
      0: 0,
      1: 7,
      2: 14,
      3: 1,
      4: 8,
      5: 15,
      6: 2,
      7: 9,
      8: 16,
      9: 3,
      10: 10,
      11: 17,
      12: 4,
      13: 11,
      14: 18,
      15: 5,
      16: 12,
      17: 19,
      18: 6,
      19: 13,
      20: 20
    };

    setPile(prevState => {
      const newCards: Card[] = [];
      const allCards: Card[] = [
        ...prevState.pile1,
        ...prevState.pile2,
        ...prevState.pile3
      ];
      allCards.forEach((card, index) => {
        newCards[nextPositions[index]] = card;
      });
      return {
        pile1: newCards.slice(0, 7),
        pile2: newCards.slice(7, 14),
        pile3: newCards.slice(14, 21)
      };
    });
  }, []);

  const onClickPile = useCallback((selectedPile: string) => {
    if (selectedPile === 'pile1') {
      setPile(prevState => ({
        pile1: prevState.pile3,
        pile2: prevState.pile1,
        pile3: prevState.pile2
      }));
    } else if (selectedPile === 'pile2') {
      setPile(prevState => ({
        pile1: prevState.pile3,
        pile2: prevState.pile2,
        pile3: prevState.pile1
      }));
    } else {
      setPile(prevState => ({
        pile1: prevState.pile2,
        pile2: prevState.pile3,
        pile3: prevState.pile1
      }));
    }
    redistributeCards();
  }, []);

  const RenderGameMode = useCallback(() => {
    switch (gameMode) {
      case 'STEP0':
        return (
          <StartGame
            setGameMode={setGameMode}
            pile={pile}
            nextStep="STEP1"
            loading={loading}
          />
        );
      case 'STEP1':
        return (
          <GameStep
            onClickPile={onClickPile}
            setGameMode={setGameMode}
            pile={pile}
            nextStep="STEP2"
          />
        );
      case 'STEP2':
        return (
          <GameStep
            onClickPile={onClickPile}
            setGameMode={setGameMode}
            pile={pile}
            nextStep="STEP3"
          />
        );
      case 'STEP3':
        return (
          <GameStep
            onClickPile={onClickPile}
            setGameMode={setGameMode}
            pile={pile}
            nextStep="STEP4"
          />
        );
      case 'STEP4':
        return <Result pile={pile} />;
      default:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text_main">ERROR</h1>
            <h3 className="text_main">Please, restart the game</h3>
            <Link to="/21cardgame">
              <button
                type="button"
                className="p-2 w-1/3 text-black rounded transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300"
              >
                Restart
              </button>
            </Link>
          </div>
        );
    }
  }, [gameMode, pile, onClickPile, loading]);

  return (
    <div id="1">
      <div className="flex flex-col items-center" />
      <div>
        <RenderGameMode />
      </div>
    </div>
  );
}
