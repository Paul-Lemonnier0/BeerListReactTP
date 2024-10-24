import React, { FC } from 'react'
import "./Beer.css"
import { IoIosClose } from "react-icons/io";

interface BeerProps {
  id: string,
  name: string,
  handleRemoveBeer: () => void,
}

const Beer: FC<BeerProps> = ({ id, name, handleRemoveBeer }) => {
  return (
    <li key={id}>
      <div id="beerContainer">
        <div>
          {name}
        </div>

        <IoIosClose id='deleteButton' onClick={handleRemoveBeer} size={24} />
      </div>
    </li>
  )
}

export default Beer
