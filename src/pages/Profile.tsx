/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useEffect } from 'react'
import { BuboCityImage, useCollections } from '../hooks/useCollection'

export const Profile: React.FC = () => {
  const { ownedCollections } = useCollections()

  return (
    <Fragment>
      <div className="profile">
        <h1>My Bubos</h1>
        <p>
          Below are your bubos. the stamina of all of your owned bubos are
          compined into your wallet stamina.
        </p>
        <div className="game-cards-container">
          {ownedCollections.length > 0 &&
            ownedCollections.map((collection: BuboCityImage) => {
              const Stamina = collection.attributes.find((attribute) => {
                return attribute.trait_type === 'Stamina'
              })
              return (
                <div className="game-card">
                  <img
                    className="bubo-image"
                    src={collection.image_url}
                    alt="bubo"
                  />
                  <div className="game-content">
                    <p>Bubo #{collection.id}</p>
                    <p>Stamina: {Stamina?.value}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Fragment>
  )
}
