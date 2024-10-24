import React, { FC } from 'react'
import Beer from './Beer'

interface BeerListProps {
  beerNames: string[],
  handleRemoveBeer: (beerToRemove: string) => void,
}

const BeerList: FC<BeerListProps> = ({beerNames, handleRemoveBeer}) => {

  return (
    <div style={{gap: 10, display: "flex", flexDirection: "column"}}>
      <h1 style={{textAlign: "left"}}>Liste de bières</h1>
      {
        beerNames.map((name, index) =>
            <Beer id={index.toString()} name={name} handleRemoveBeer={() => handleRemoveBeer(name)}/>
        )
      }
    </div>
  )
}

export default BeerList