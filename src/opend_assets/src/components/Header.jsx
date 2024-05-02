import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import homeImage from "../../assets/home.png";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import { opend } from "../../../declarations/opend";
import CURRENT_USER_ID from "../index";
import homeImage1 from "../../assets/home1.png";
import homeImage2 from "../../assets/home2.png";
import homeImage3 from "../../assets/home3.png";
import homeImage4 from "../../assets/home4.png";
function Header() {
  const [userOwnedGallery, setOwnedGallery] = useState();
  const [listingGallery, setListingGallery] = useState();
  const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    return (
      <div className="image-slider-container">
        <img className="image-slider-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    );
  };
  const images = [
    homeImage,
    homeImage1,
    homeImage2,
    homeImage3,
    homeImage4
  ];
  async function getNFTs() {
    const userNFTIds = await opend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTIds);
    setOwnedGallery(
      <Gallery title="My NFTs" ids={userNFTIds} role="collection" />
    );

    const listedNFTIds = await opend.getListedNFTs();
    console.log(listedNFTIds);
    setListingGallery(
      <Gallery title="Discover" ids={listedNFTIds} role="discover" />
    );
  }

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <BrowserRouter >
      <div className="app-root-1">
        <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
          <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
            <div className="header-left-4"></div>
            <img className="header-logo-11" src={logo} />
            <div className="header-vertical-9"></div>
            <Link to="/">
              <h5 className="Typography-root header-logo-text">AvaxGod</h5>
            </Link>
            <div className="header-empty-6"></div>
            <div className="header-space-8"></div>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/discover">Discover</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/minter">Minter</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/collection">My NFTs</Link>
            </button>
          </div>
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          {/* <img className="bottom-space" src={homeImage} /> */}
          <ImageSlider images={images} />
        </Route>
        <Route path="/discover">{listingGallery}</Route>
        <Route path="/minter">
          <Minter />
        </Route>
        <Route path="/collection">{userOwnedGallery}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
