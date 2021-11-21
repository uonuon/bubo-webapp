/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from 'react'
import LoreImg from '../assets/lore.jpg'

export const Lore: React.FC = () => {
  return (
    <Fragment>
      <div className="lore">
        <img alt="Bubo City" src={LoreImg} />
        <p>
          Bubo city is under attack by a villain (Lightcrafters). To protect the
          city you need to recruit/find their warriors. The city’s maven is on
          the search for the strongest bubos to train them and send them off on
          exploration quests to find special gears that leads to unprecedented
          success to retain back the evil..
        </p>
        <h2>To be continued..</h2>
      </div>
    </Fragment>
  )
}
