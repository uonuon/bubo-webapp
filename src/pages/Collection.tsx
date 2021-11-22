/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import ReactCardFlip from 'react-card-flip'
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
    searchCollection,
    getSearchOwl,
    hasNextPage,
  } = useCollections()
  const [page, setPages] = useState(1)
  const [input, setInput] = useState('')
  const prevStamina = usePrevious({ staminaState })
  const [flipped, setFlipped] = useState({
    isFlipped: false,
    id: '0',
  })
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
  // TODO: ATTRIBUTES
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

  useEffect(() => {
    if (input) {
      getSearchOwl([input])
    }
  }, [input])

  return (
    <Fragment>
      <div className="collections">
        <h1>Bubos Collection</h1>
        <p>
          Each bubo has its stamina value. stamina is detremined by the
          uniquness of each bubo attributes.
        </p>

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
        <input
          placeholder="Search your bubo here"
          className="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          color="#fff"
        />
        {input.length > 0 && collection.length > 0 ? (
          <div>
            {searchCollection.length > 0 &&
              searchCollection.map((collection: BuboCityImage) => {
                const Stamina = collection.attributes.find((attribute) => {
                  return attribute.trait_type === 'Stamina'
                })
                return (
                  <ReactCardFlip
                    isFlipped={
                      flipped.isFlipped && collection.id === flipped.id
                    }
                    flipDirection="horizontal"
                  >
                    <div
                      key={collection.id}
                      className="flip-container game-card"
                      onClick={() =>
                        setFlipped({
                          isFlipped: !flipped.isFlipped,
                          id: collection.id,
                        })
                      }
                    >
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
                    <div
                      key={collection.id}
                      className="flip-container game-card"
                      onClick={() =>
                        setFlipped({
                          isFlipped: !flipped.isFlipped,
                          id: collection.id,
                        })
                      }
                    >
                      <div className="game-content-back">
                        {collection.attributes.map((attr) => {
                          return (
                            <p>
                              {attr.trait_type}: {attr.value}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </ReactCardFlip>
                )
              })}
          </div>
        ) : (
          <div>
            <div className="game-cards-container">
              {collection.length > 0 &&
                collection.map((collection: BuboCityImage) => {
                  const Stamina = collection.attributes.find((attribute) => {
                    return attribute.trait_type === 'Stamina'
                  })
                  return (
                    <ReactCardFlip
                      isFlipped={
                        flipped.isFlipped && collection.id === flipped.id
                      }
                      flipDirection="horizontal"
                    >
                      <div
                        key={collection.id}
                        className="flip-container game-card"
                        onClick={() =>
                          setFlipped({
                            isFlipped: !flipped.isFlipped,
                            id: collection.id,
                          })
                        }
                      >
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
                      <div
                        key={collection.id}
                        className="flip-container game-card"
                        onClick={() =>
                          setFlipped({
                            isFlipped: !flipped.isFlipped,
                            id: collection.id,
                          })
                        }
                      >
                        <div className="game-content-back">
                          {collection.attributes.map((attr) => {
                            return (
                              <p>
                                {attr.trait_type}: {attr.value}
                              </p>
                            )
                          })}
                        </div>
                      </div>
                    </ReactCardFlip>
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
