import React, { Fragment } from 'react'
import Hands from '../assets/hands.svg'
import Hat from '../assets/hat.svg'
import Thor from '../assets/thor.svg'
import Knight from '../assets/knight.svg'
import N1 from '../assets/number1.svg'
import CardImage from '../assets/card.png'

export const Home: React.FC = () => {
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
        <div className="mint-button">
          <p>Mint</p>
        </div>
      </div>
      <div className="home-second-container">
        <h1>Start Now</h1>
        <p>Massa, massa in cursus in mi arcu phasellus erat.</p>
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
        <h1>Your heroic journey starts now!</h1>
        <p>Massa, massa in cursus in mi arcu phasellus erat..</p>
        <div className="cards-container">
          <div id="discord-card" className="action-card">
            <h3>Join bubo.gg</h3>
            <p>
              We welcome you to bubo family through our discord where we discuss
              future plans and our vision
            </p>
            <div className="mint-button">
              <p>Discord</p>
            </div>
          </div>
          <div id="mint-card" className="action-card">
            <h3>Dont have a bubo?</h3>
            <p>
              We welcome you to bubo family through our discord where we discuss
              future plans and our vision
            </p>
            <div className="buttons-container">
              <div className="mint-button">
                <p>Mint 1</p>
              </div>
              <div className="mint-button">
                <p>Mint 5</p>
              </div>
              <div className="mint-button">
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
                <p className="roadmap-header">🎉 Launch Bubo City</p>
                <p>
                  Role Selection: Each player should choose a role. One of the
                  players must be the Dragon, and the other players may choose
                  any of the 4 other roles (Mage, Hammer (Tank), Healer,
                  Knight), with none of the 5 roles repeating.
                </p>
              </div>
            </div>
            <div className="roadmap-item">
              <img alt="img" src={N1} />
              <div>
                <p className="roadmap-header">🤝 Level 1: Find Your Warriors</p>
                <p>
                  You will help the city’s maven to mint potential warriors out
                  of 10,000 Bubos, available at 10 STX. Each Bubo has
                  distinctive features and stamina that can’t be replicated nor
                  destroyed.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap-row">
            <div className="roadmap-item">
              <img alt="img" src={N1} />
              <div>
                <p className="roadmap-header">🏦 Join Community on Discord</p>
                <p>
                  You will help the city’s maven to mint potential warriors out
                  of 10,000 Bubos, available at 10 STX. Each Bubo has
                  distinctive features and stamina that can’t be replicated nor
                  destroyed.
                </p>
              </div>
            </div>
            <div className="roadmap-item">
              <img alt="img" src={N1} />
              <div>
                <p className="roadmap-header">
                  🐒️ Level 2: Train Your Warriors
                </p>
                <p>
                  First, you will need to combine your minted-cute Bubos to form
                  a unique team of Bubo warriors. All warriors then must be
                  trained by going into quests to equip their skills and
                  stamina.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap-row">
            <div className="roadmap-item">
              <img alt="img" src={N1} />
              <div>
                <p className="roadmap-header">⚖️ Level 3: Gear Up</p>
                <p>
                  By having enough stamina, your mighty warriors will be
                  reunited and combined once more to form the ultimate team and
                  be set off to explore new missions to harness engraved stones
                  to craft their gears.
                </p>
              </div>
            </div>
            <div className="roadmap-item">
              <img alt="img" src={N1} />
              <div>
                <p className="roadmap-header">👕 Level 4: Fight The Enemies</p>
                <p>
                  This is your day! Your victory! Your geared warriors will be
                  ready to squish the battlefields to bring peace back home once
                  and for all!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-fifth-container">
        <h1>Bubos</h1>
        <p>
          Do you have what it takes to ace the ghastly missions that awaits you?
        </p>
        <div className="cards">
          <img src={CardImage} alt="card" />
          <img src={CardImage} alt="card" />
          <img src={CardImage} alt="card" />
          <img src={CardImage} alt="card" />
          <img src={CardImage} alt="card" />
        </div>
        <div className="mint-button">
          <p>Mint</p>
        </div>
      </div>
    </Fragment>
  )
}
