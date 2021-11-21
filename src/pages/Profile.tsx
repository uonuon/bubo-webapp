/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useEffect } from 'react'
import { useAtom } from 'jotai'
import { profileState } from '../hooks/useConnect'
import { accountsApi } from '../constants'
import { BuboCityImage, useCollections } from '../hooks/useCollection'

export const Profile: React.FC = () => {
  const [profile] = useAtom(profileState)
  const { getOwnedCollection, ownedCollections } = useCollections()

  const getOwnedNfts = async () => {
    if (profile) {
      const ownedNFT = await accountsApi.getAccountNft({
        principal: profile.stxAddress.mainnet,
      })
      console.log(ownedNFT)
      const ids = ownedNFT.nft_events
        .map((nft) => {
          if (
            nft.asset_identifier ===
            'SP3N81TKV43PN24NPHNNM8BBNQJ51Q31HE9G0GC46.bubo::bubo'
          ) {
            console.log(+nft.value.repr.substr(1))
            return +nft.value.repr.substr(1)
          }
        })
        .filter((r) => r !== undefined)
      if (ids.length > 0) {
        getOwnedCollection(ids)
      }
    }
  }
  useEffect(() => {
    getOwnedNfts()
  }, [profile])

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
