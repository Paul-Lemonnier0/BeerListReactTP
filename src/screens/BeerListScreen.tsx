import React, { ChangeEvent, FC, useState } from 'react'
import BeerList from '../components/BeerList'
import { Link } from 'react-router-dom'
import './BeerListScreenStyle.css'
import { IoIosAdd } from 'react-icons/io'

interface BeerListScreenProps {
  beerList: string[],
  setBeerList: React.Dispatch<React.SetStateAction<string[]>>,
}

const BeerListScreen: FC<BeerListScreenProps> = ({beerList, setBeerList}) => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  const handleAddBeer = () => {
    setBeerList(prevVal => [...prevVal, inputValue])
    setInputValue("")
  }

  const handleRemoveBeer = (beerNameToRemove: string) => {
    setBeerList(prevBeerList => prevBeerList.filter(beer => beer !== beerNameToRemove))
  }

  return (
    <div className="beer-list-screen">
      <div className="beer-list-container">
        <BeerList beerNames={beerList} handleRemoveBeer={handleRemoveBeer} />
      </div>

      <div className="input-container">
        <div className='input-beer-container'>
          <input
            className="input-beer"
            placeholder='Entrez une bière...'
            value={inputValue}
            onChange={handleInputTextChange}
          />
        </div>
        <button
          className="add-beer-button"
          disabled={inputValue.trim().length === 0}
          onClick={handleAddBeer}
        >
          <IoIosAdd size={24}/>
        </button>
      </div>

      <div className="link-container">
        <Link to="/about" className="link-about">
          <div className="link-about-box">
            About
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BeerListScreen
