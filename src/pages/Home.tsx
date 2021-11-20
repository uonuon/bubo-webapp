/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react'
import { useConnect } from '@stacks/connect-react'
import { StacksMainnet } from '@stacks/network'
import {
  FungibleConditionCode,
  // makeStandardNonFungiblePostCondition,
  makeStandardSTXPostCondition,
  // NonFungibleConditionCode,
  PostConditionMode,
} from '@stacks/transactions'
import { useAtom } from 'jotai'
import BigNum from 'bn.js'
import Hands from '../assets/hands.svg'
import Hat from '../assets/hat.svg'
import Thor from '../assets/thor.svg'
import Knight from '../assets/knight.svg'
import N1 from '../assets/1.svg'
import N2 from '../assets/2.svg'
import N3 from '../assets/3.svg'
import N4 from '../assets/4.svg'
import N5 from '../assets/5.svg'
import { profileState, useConnect as connect } from '../hooks/useConnect'

export const Home: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(false)
  const getABubo = "Don't have a bubo?"
  const { doContractCall } = useConnect()
  const [profile] = useAtom(profileState)
  const { handleOpenAuth } = connect()

  // TODO MINT / CONNECT
  const mint = async () => {
    await doContractCall({
      contractAddress: 'ST14XMM34Q08NRNC2P29N64QFG0ZAFE2B8RS84D4P',
      contractName: 'test_nft_contract_3',
      functionName: 'mint',
      functionArgs: [],
      network: new StacksMainnet(),
      postConditionMode: PostConditionMode.Allow,
      postConditions: [
        makeStandardSTXPostCondition(
          profile.stxAddress.testnet,
          FungibleConditionCode.Equal,
          new BigNum(10000000)
        ),
      ],
      onFinish: (data) => {
        console.log(data)
      },
      onCancel: () => {
        console.log('cancelled')
      },
    })
  }

  const mintFn = async (mintVal: any) => {
    if (profile) {
      mintVal()
    } else {
      handleOpenAuth()
    }
  }

  const mintTen = async () => {
    await doContractCall({
      contractAddress: 'ST14XMM34Q08NRNC2P29N64QFG0ZAFE2B8RS84D4P',
      contractName: 'test_nft_contract_3',
      functionName: 'mint-ten',
      functionArgs: [],
      network: new StacksMainnet(),
      postConditionMode: PostConditionMode.Allow,
      postConditions: [
        makeStandardSTXPostCondition(
          profile.stxAddress.testnet,
          FungibleConditionCode.Equal,
          new BigNum(100000000)
        ),
      ],
      onFinish: (data) => {
        console.log(data)
      },
      onCancel: () => {
        console.log('cancelled')
      },
    })
  }

  const mintFive = async () => {
    await doContractCall({
      contractAddress: 'ST14XMM34Q08NRNC2P29N64QFG0ZAFE2B8RS84D4P',
      contractName: 'test_nft_contract_3',
      functionName: 'mint-five',
      functionArgs: [],
      network: new StacksMainnet(),
      postConditionMode: PostConditionMode.Allow,
      postConditions: [
        makeStandardSTXPostCondition(
          profile.stxAddress.testnet,
          FungibleConditionCode.Equal,
          new BigNum(50000000)
        ),
      ],
      onFinish: (data) => {
        console.log(data)
      },
      onCancel: () => {
        console.log('cancelled')
      },
    })
  }

  return (
    <Fragment>
      <div className="home-container">
        <h1>Help Save Bubo City</h1>
        <p>
          Do you have what it takes to ace the ghastly missions that awaits you?
          In Bubo city, the first craftable NFTs game on stacks, you will claw
          your way through the unknown, fight frightful enemies, and save the
          city with the help of CUTE Bubo citizens.
        </p>
        <div
          onClick={() => {
            mintFn(mint)
          }}
          className="mint-button"
        >
          <p>Mint Now</p>
        </div>
      </div>
      <div className="home-second-container">
        <h1>Your Heroic Journey Starts Now!</h1>
        <div className="cards-container">
          <div id="card-one" className="card">
            <img alt="hands" src={Hands} />
            <p>Buy and Sell Bubos with our community</p>
          </div>
          <div id="card-two" className="card">
            <img alt="hands" src={Thor} />
            <p>Challenge your friends</p>
          </div>
          <div id="card-three" className="card">
            <img alt="hands" src={Knight} />
            <p>Level up and explore new adventures</p>
          </div>
          <div id="card-four" className="card">
            <img alt="hands" src={Hat} />
            <p>Craft your Unique warriors</p>
          </div>
        </div>
      </div>
      <div className="home-third-container">
        <h1>What Are You Waiting For?</h1>
        <div className="cards-container">
          <div id="discord-card" className="action-card">
            <h3>Join bubo city!</h3>
            <p>
              We welcome you to bubo family through our discord where we discuss
              future plans and our vision.
            </p>
            <div
              onClick={(e) => {
                e.preventDefault()
                window.open('https://discord.gg/sREepDdeZT')
              }}
              className="mint-button"
            >
              <p>Discord</p>
            </div>
          </div>

          <div id="mint-card" className="action-card">
            <h3>{getABubo}</h3>
            <p>
              Mint your first level 1 bubo from down below. Available at 10 STX
              each.
            </p>
            {/* <p className="minting-date">Minting starting at 21 Nov 2021</p> */}
            <div className="buttons-container">
              <div
                onClick={() => {
                  mintFn(mint)
                }}
                className="mint-button"
              >
                <p>Mint 1</p>
              </div>
              <div
                onClick={() => {
                  mintFn(mintFive)
                }}
                className="mint-button"
              >
                <p>Mint 5</p>
              </div>
              <div
                onClick={() => {
                  mintFn(mintTen)
                }}
                className="mint-button"
              >
                <p>Mint 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-forth-container">
        <h1>Roadmap</h1>
        <p>
          The city’s maven is on the search for mighty warriors to restore hope
          back to the Bubos and you are our first warrior! Below is our roadmap
          for the missions we have planned for Bubo City including the
          storyline, levels and more to come!
        </p>
        <div className="roadmap">
          <div className="roadmap-row">
            <div className="roadmap-item">
              <img alt="img" src={N1} />
              <div>
                <div className="roadmap-header-container">
                  <p className="roadmap-header">
                    🤝 Level 1: Find Your Warriors
                  </p>
                  <div className="badge badge-progress">
                    <p>In progress</p>
                  </div>
                </div>
                <p>
                  You will help the city’s maven to mint potential warriors out
                  of 10,000 Bubos, available at 10 STX. Each Bubo has
                  distinctive features and stamina that can’t be replicated nor
                  destroyed.
                </p>
              </div>
            </div>
            <div className="roadmap-item">
              <img alt="img" src={N2} />
              <div>
                <div className="roadmap-header-container">
                  <p className="roadmap-header">🏦 Join Community on Discord</p>
                  <div
                    onClick={(e) => {
                      e.preventDefault()
                      window.open('https://discord.gg/sREepDdeZT')
                    }}
                    className="badge discord-join"
                  >
                    <p>Join Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap-row">
            <div className="roadmap-item">
              <img alt="img" src={N3} />
              <div>
                <div className="roadmap-header-container">
                  <p className="roadmap-header">
                    💪️ Level 2: Train Your Warriors
                  </p>
                  <div className="badge badge-completed">
                    <p>Next</p>
                  </div>
                </div>
                <p>
                  First, you will need to combine your minted-cute Bubos to form
                  a unique team of Bubo warriors. All warriors then must be
                  trained by going into quests to equip their skills and
                  stamina.
                </p>
              </div>
            </div>
            <div className="roadmap-item">
              <img alt="img" src={N4} />
              <div>
                <div className="roadmap-header-container">
                  <p className="roadmap-header">🗡️️ Level 3: Gear Up</p>
                  <div className="badge badge-completed">
                    <p>Next</p>
                  </div>
                </div>
                <p>
                  By having enough stamina, your mighty warriors will be
                  reunited and combined once more to form the ultimate team and
                  be set off to explore new missions to harness engraved stones
                  to craft their gears.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap-row">
            <div className="roadmap-item">
              <img alt="img" src={N5} />
              <div>
                <div className="roadmap-header-container">
                  <p className="roadmap-header">
                    ⚔️ Level 4: Fight The Enemies
                  </p>
                  <div className="badge badge-completed">
                    <p>Next</p>
                  </div>
                </div>
                <p>
                  This is your day! Your victory! Your geared warriors will be
                  ready to squish the battlefields to bring peace back home once
                  and for all!
                </p>
              </div>
            </div>
            <div className="roadmap-item" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
