import React, { useState, Fragment } from 'react';
import './App.css';
import styled from 'styled-components'

import PlaceLoader from './components/PlaceLoader'
import { getBarsData } from './service/bars'
import { handleIncrement } from './utils'

import BarList from './components/BarList'
import Select from './components/Select'
import ButtonList from './components/ButtonList'

function App() {
  const [buttons, setButtons] = useState([])
  const [bars, setBars] = useState([])
  const [limit, setLimit] = useState(0)
  const [selectedBarIndex, setSelectedBarIndex] = useState(0)
  const [showPlaceLoader, setShowPlaceLoader] = useState(true)
  const [hasError, setShowError] = useState(false)

  React.useEffect(() => {
    getBarsData()
      .then(response => response.json())
      .then((data) => {
        setButtons(data.buttons)
        setBars(data.bars)
        setLimit(data.limit)
        setShowPlaceLoader(false)
      })
      .catch(() => {
        setShowError(true)
      })
  }, [])

  const onSelectChanged = (selectedValue) => {
    setSelectedBarIndex(selectedValue)
  }

  const onButtonClicked = (incrementValue) => {
    let barsData = [...bars]
    barsData[selectedBarIndex] = handleIncrement(barsData[selectedBarIndex], incrementValue, limit)
    setBars(barsData)
  }

  return (
    <div className="App">
      <Header>Progress Bar Demo</Header>
      {showPlaceLoader && <PlaceLoader />}

      {hasError && <div>An error occurred, please refresh to try again.</div>}

      {!showPlaceLoader &&
        <Fragment>
          <BarContainer>
            <BarList bars={bars} />
          </BarContainer>
          <ActionsContainer>
            <DropdownContainer>
              <Select
                options={bars}
                selectChanged={onSelectChanged} />
            </DropdownContainer>
            <ButtonsContainer>
              <ButtonList
                buttons={buttons}
                onButtonClicked={onButtonClicked}
                limit={limit} />
            </ButtonsContainer>
          </ActionsContainer>
        </Fragment>
      }
    </div>
  );
}

const Header = styled.h1`
  text-align: center;
`

const BarContainer = styled.div`
  width: 100%;
`

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

const DropdownContainer = styled.div`
  flex: 1 1 auto;
`

const ButtonsContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export default App;
