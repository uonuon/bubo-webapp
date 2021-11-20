/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment, useEffect, useRef, useState } from 'react'
// import Bubo from '../assets/50.png'
import { PropagateLoader } from 'react-spinners'
import { BuboCityImage, useCollections } from '../hooks/useCollection'

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const Collection: React.FC = () => {
  const {
    setStaminaState,
    staminaState,
    collection,
    getCollection,
    hasNextPage,
  } = useCollections()
  const [page, setPages] = useState(1)
  const prevStamina = usePrevious({ staminaState })

  useEffect(() => {
    if (
      prevStamina?.staminaState !== undefined &&
      prevStamina?.staminaState !== staminaState
    ) {
      setPages(1)
    }
  }, [staminaState])

  useEffect(() => {
    setTimeout(() => {
      getCollection(page)
    }, 500)
  }, [page, staminaState])
  const loader: any = useRef(null)

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities: any) => {
    const target = entities[0]
    if (target.isIntersecting) {
      setPages((page) => page + 1)
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    }
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options)
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, [loader.current])

  return (
    <Fragment>
      <div className="collections">
        <h1>All Characters</h1>
        <p>Massa, massa in cursus in mi arcu phasellus erat.</p>
        <div className="badges">
          <div
            onClick={() => {
              setStaminaState('common')
            }}
            className={`bubo-badge ${
              staminaState === 'common' ? 'badge-active' : ''
            }`}
          >
            <p>Common</p>
          </div>
          <div
            onClick={() => {
              setStaminaState('unique')
            }}
            className={`bubo-badge ${
              staminaState === 'unique' ? 'badge-active' : ''
            }`}
          >
            <p>Unique</p>
          </div>
          <div
            onClick={() => {
              setStaminaState('epic')
            }}
            className={`bubo-badge ${
              staminaState === 'epic' ? 'badge-active' : ''
            }`}
          >
            <p>Epic</p>
          </div>
          <div
            onClick={() => {
              setStaminaState('legend')
            }}
            className={`bubo-badge ${
              staminaState === 'legend' ? 'badge-active' : ''
            }`}
          >
            <p>Legendary</p>
          </div>
        </div>
        {collection.length > 0 && (
          <div>
            <div className="game-cards-container">
              {collection.length > 0 &&
                collection.map((collection: BuboCityImage) => {
                  return (
                    <div className="game-card">
                      <img
                        className="bubo-image"
                        src={collection.image_url}
                        alt="bubo"
                      />
                    </div>
                  )
                })}
            </div>
            {hasNextPage && (
              <div className="loading" ref={loader}>
                <PropagateLoader color="#F3E33A" />
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  )
}
