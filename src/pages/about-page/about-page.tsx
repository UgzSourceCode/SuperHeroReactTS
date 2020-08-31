import React from 'react'
import { Link } from 'react-router-dom'
import { TopBar } from '../../component/top-bar/top-bar.component'
import "./about-page.styles.css";

const AboutPage = () => {
  return (
    <div>
      <TopBar />
      <div className="contentAbout">
        <p>It's my first app in React which use:</p>
        <ul>
          <li>Hooks</li>
          <li>Typescript</li>
          <li>useEfect</li>
          <li>useState</li>
          <li>Routing by react-router-dom</li>
          <li>Rest API</li>
          <li>Material UI</li>
        </ul>
        <p>In this app you can see pages:</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/random">Random</Link></li>
          <li><Link to="/details/2">Details for hero[example for hero with id: 2]</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <p>In the future I plan add:</p>
        <ul>
          <li className="doneToDo">Hooks</li>
          <li className="doneToDo">Typescript</li>
          <li className="doneToDo">useEfect</li>
          <li className="doneToDo">useState</li>
          <li className="doneToDo">Routing by react-router-dom</li>
          <li className="doneToDo">Rest API</li>
          <li className="doneToDo">Material UI</li>
          <li>unit test</li>
          <li>easy-peasy or redux</li>
          <li>i18next</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
