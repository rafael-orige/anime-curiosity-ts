import { useEffect, useState } from 'react';
import './App.css';

import getApi, { animeList } from './services/api';
import { Anime } from './types/Anime';

function App() {
  const [doneSearching, setDoneSearching] = useState<boolean>(false);
  const [doneMutating, setDoneMutating] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showOnScreen, setShowOnScreen] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [showAllFacts, setShowAllFacts] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<Anime | undefined>();
  const [allFacts, setAllFacts] = useState<Anime>();
  const [randomFact, setRandomFact] = useState<string>();

  async function callApi(method: string, querie: string) {
    setShowOnScreen(false);
    setShowWarning(false);
    setShowAllFacts(false);
    setLoading(true);

    let request: Anime = await getApi(method, querie);
    if (request.success) {
      setData(request);
      setDoneSearching(true);
    } else {
      setLoading(false);
      setShowWarning(true);
    }
  }

  useEffect(() => {
    if (doneSearching) {
      if (data) {
        setRandomFact(data.data[Math.floor(Math.random() * 11)].fact);
      }
      setAllFacts(data);
      setDoneSearching(false);
      setDoneMutating(true);
    }
  }, [doneSearching]);

  useEffect(() => {
    if (doneMutating) {
      setDoneMutating(false);
      setShowOnScreen(true);
      setLoading(false);
    }
  }, [doneMutating]);

  return (
    <div className="App">
      <div className='container'>
        <h1 className='page-title'>Are you curious? 👀</h1>
        <form>
          <input type="text" placeholder="Search here..." onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
          <button onClick={(event) => {
            event.preventDefault();
            if (inputValue !== "") {
              callApi("search", inputValue);
              setInputValue("");
            } else {
              window.alert("Please, write something before submiting!");
            }
          }}>Submit</button>
        </form>
        {showWarning &&
          <p className='warning'>There is no random fact or the anime is not in the database.</p>
        }
        {loading &&
          <div className='loading'></div>
        }
        {showOnScreen &&
          <div className='anime-fact'>
            <div className='anime-cover' >
              <img src={allFacts ? allFacts.img : ""} alt="" />
            </div>
            <div className='anime-fact--content'>
              <h1>Facts:</h1>
              {!showAllFacts &&
                <h2>{randomFact}</h2>
              }
              {showAllFacts &&
                allFacts?.data.map((item: {
                  fact_id: number,
                  fact: string
                }, index: number) => (
                  <h2>
                    {item.fact}
                  </h2>
                ))
              }
              <div className='anime-fact--options'>
                <p onClick={() => setShowAllFacts(!showAllFacts)}>{showAllFacts ? "Hide facts" : "Show all facts"}</p>
                {!showAllFacts &&
                  <p onClick={() => {
                    setRandomFact(allFacts ? allFacts.data[Math.floor(Math.random() * 11)].fact : "");
                  }}>Show another fact</p>
                }
              </div>
            </div>
          </div>
        }

        <div className='all-animes'>
          {animeList.map(item => (
            <>
              <p onClick={
                () => {
                  callApi("search", item.animeSearch);
                }
              }>
                {item.animeName}
              </p>
              <span>·</span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
