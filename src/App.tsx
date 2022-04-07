import React, { useEffect, useState } from 'react';
import './App.css';

import getApi from './services/api';
import { Anime } from './types/Anime';

import Container from './components/Container';
import Header from './components/Header';
import FactArea from './components/FactArea';
import Footer from './components/Footer';


function App() {
  const [facts, setFacts] = useState<Anime>();
  const [showAllFacts, setShowAllFacts] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const callSearch = async (method: string, query: string) => {
    setShowWarning(false);
    setLoading(true);
    setFacts(await getApi(method, query));
    setLoading(false);
  };


  useEffect(() => {
    callSearch("search", "Bleach");
  }, []);


  return (
    <div className="App">
      <Container>
        <Header
          changeInputValue={(event: React.ChangeEvent<HTMLInputElement>) => { setInputValue(event.target.value) }}
          inputValue={inputValue}
          callSearch={() => { callSearch("search", inputValue) }}
        />
        {showWarning &&
          <p className='warning'>There is no random fact or the anime is not in the database.</p>
        }
        {loading &&
          <div className='loading'></div>
        }
        {facts && !loading && !showWarning &&
          <FactArea
            AllFacts={facts}
            ShowAllFacts={showAllFacts}
            SetAllFacts={() => setShowAllFacts(!showAllFacts)}
          />
        }

        <Footer
          callSearch={callSearch}
        />
      </Container>
    </div>
  );
}

export default App;
