import React from "react";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import Music from "../Music/Music";
import Songs from "../Songs/Songs";
import Settings from "../Settings/Settings";
import Playing from "../Playing/Playing";
import "./Display.css";
import Themes from "../Themes/Themes";
import WheelColor from "../WheelColor/WheelColor";
import LockScreen from "../LockScreen/LockScreen";
import Wallpaper from "../Wallpaper/Wallpaper";

class Display extends React.Component {
  render() {
    const {
      active,
      currentMenu,
      menuItems,
      musicItems,
      songItems,
      playing,
      songIndex,
      audio,
      songUrl,
      songImgUrl,
      wallpaper,
      wallpaperItems,
      noty,
      setNoty,
      notifyText,
    } = this.props;

    return (
      <div
        style={{ backgroundImage: `url(${wallpaperItems[wallpaper]})` }}
        className="display"
      >
        <Navbar
          noty={noty}
          setNoty={setNoty}
          playing={playing}
          notifyText={notifyText}
        />
        {currentMenu === -2 && <LockScreen />}
        {currentMenu === -1 && (
          <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} />
        )}
        {currentMenu === 1 && <Music musicItems={musicItems} active={active} />}
        {currentMenu === 2 && (
          <div className="blank-div">
            <h1 className="empty-text">Games</h1>
          </div>
        )}
        {currentMenu === 3 && <Settings active={active} />}
        {currentMenu === 4 && <Songs songItems={songItems} active={active} />}
        {currentMenu === 5 && (
          <div className="blank-div">
            <h1 className="empty-text">Artists</h1>
          </div>
        )}
        {currentMenu === 6 && (
          <div className="blank-div">
            <h1 className="empty-text">Albums</h1>
          </div>
        )}
        {(currentMenu === 0 || currentMenu === 7) && (
          <Playing
            songImgUrl={songImgUrl}
            audio={audio}
            songUrl={songUrl}
            playing={playing}
            songIndex={songIndex}
            songItems={songItems}
          />
        )}
        {currentMenu === 8 && <Themes active={active} />}
        {currentMenu === 9 && <WheelColor active={active} />}
        {currentMenu === 10 && <Wallpaper active={active} />}
      </div>
    );
  }
}

export default Display;
