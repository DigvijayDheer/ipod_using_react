import React from "react";
import "./Menu.css";
import { gamesPoster, musicPoster, settingsPoster } from "../../assets";

class Menu extends React.Component {
  render() {
    const { active, menuItems, songImgUrl } = this.props;
    return (
      <div className="menu-container">
        <div className="menu">
          <ul>
            {menuItems.map((element, index) => {
              return active === index ? (
                <li key={index} className="active">
                  &nbsp;{element}
                </li>
              ) : (
                <li key={index}>&nbsp;{element}</li>
              );
            })}
          </ul>
        </div>
        <div className="leaf">
          {active === 0 && (
            <img className="leaf-img" src={songImgUrl} alt="song"></img>
          )}
          {active === 1 && (
            <img className="leaf-img" src={musicPoster} alt="music"></img>
          )}
          {active === 2 && (
            <img className="leaf-img" src={gamesPoster} alt="games"></img>
          )}
          {active === 3 && (
            <img className="leaf-img" src={settingsPoster} alt="settings"></img>
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
