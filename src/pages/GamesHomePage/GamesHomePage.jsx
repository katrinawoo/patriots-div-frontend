// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Search from "../../components/Search/Search.jsx";
// import Button from "../../components/Button/Button.jsx";
 import "./GamesHomePage.scss";

export default function GamesHomePage() {

    
  return (
    <main className="games-home-page">
        <div className="games-home-page__wrapper">  
            <section className="games-home-page__header">

               
                <div className="games-home-page__header__line-container">
                    <div className="games-home-page__header__line games-home-page__header__gray-line"></div>
                    <div className="games-home-page__header__line games-home-page__header__blue-line"></div>
                </div>

                <div className="games-home-page__header__tagline">
                    <p>our values</p>
                    <p>are our pillars</p>
                </div>

                
                <h1 className="games-home-page__header__title">About Us</h1>
                
                <div className="games-home-page__header__about">
                    <p>Patriots Division is a game development company focused on creating next-generation digital experiences. Our studio is globally distributed, composed of creatives from all regions, industries, and backgrounds, with a shared experience in game development and passion for innovation.</p>
                </div>
                
                <div className="games-home-page__actions">
                {/* <Search />
                <Button text="+ Add New Warehouse" action={addWarehouseHandler} /> */}
                </div>
            </section>

            <section className="games-home-page__content">
                <article className="games-home-page__content__square">
                    <div className="games-home-page__content__bracket">[</div>
                    <div className="games-home-page__content__text">
                        <h3>PLAYER FIRST</h3>
                        <p>We put the players at the forefront of every decision we make - from the bottom up.</p>
                    </div>
                </article>
            </section>
        </div>
        

      
    </main>
);
}
