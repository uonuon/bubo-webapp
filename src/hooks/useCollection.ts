import { useState } from 'react'

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
    hasError,
    hasNextPage,
    isLoading,
    setColleciton,
  }
}
