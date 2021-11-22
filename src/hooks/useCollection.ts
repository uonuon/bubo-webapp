/* eslint-disable array-callback-return */
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { accountsApi } from '../constants'
import { profileState } from './useConnect'

export interface BuboCityImage {
  attributes: {
    trait_type: string
    value: string
  }[]
  class: string
  dna: string
  id: string
  image_url: string
}

export const useCollections = () => {
  const [staminaState, setStaminaState] = useState('common')
  const [collection, setColleciton] = useState<BuboCityImage[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [ownedCollections, setOwnedCollections] = useState<
    BuboCityImage[] | []
  >([])
  const [profile] = useAtom(profileState)
  const [searchCollection, setSearchCollection] = useState<
    BuboCityImage[] | []
  >([])

  const getOwnedCollection = (ids: any) => {
    try {
      fetch(
        `https://api.bubo.gg/api/v1/owls/metadata?ids[]=${ids.join('&ids[]=')}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setOwnedCollections(data.data)
          }
        })
    } catch (error) {
      setHasError(true)
    }
  }

  const getOwnedNfts = async () => {
    if (profile) {
      const ownedNFT = await accountsApi.getAccountNft({
        principal: profile.stxAddress.mainnet,
      })
      const ids = ownedNFT.nft_events
        // eslint-disable-next-line consistent-return
        .map((nft) => {
          if (
            nft.asset_identifier ===
            'SP3N81TKV43PN24NPHNNM8BBNQJ51Q31HE9G0GC46.bubo::bubo'
          ) {
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

  const getSearchOwl = (ids: any) => {
    try {
      fetch(
        `https://api.bubo.gg/api/v1/owls/metadata?ids[]=${ids.join('&ids[]=')}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setSearchCollection(data.data)
          }
        })
    } catch (error) {
      setHasError(true)
    }
  }

  const getCollection = (page: number) => {
    try {
      setIsLoading(true)
      fetch(
        `https://api.bubo.gg/api/v1/owls/metadata?page=${page}&size=100&class=${staminaState}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setHasNextPage(data.data.length > 0)
            if (page !== 1) {
              const coll = collection.concat(data.data)
              setColleciton(coll)
            } else {
              setColleciton(data.data)
            }
          }
          setIsLoading(false)
        })
    } catch (error) {
      setIsLoading(false)
      setHasError(true)
    }
  }

  return {
    staminaState,
    getCollection,
    setStaminaState,
    collection,
    ownedCollections,
    searchCollection,
    hasError,
    getSearchOwl,
    getOwnedCollection,
    hasNextPage,
    isLoading,
    setColleciton,
  }
}
