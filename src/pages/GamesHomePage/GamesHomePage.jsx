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
                <div className="games-home-page__header__tagline">
                    <p>our values</p>
                    <p>are our pillars</p>
                </div>
                <h1 className="games-home-page__header-title">About Us</h1>
                <p>Patriots Division is a game development company focused on creating next-generation digital experiences. Our studio is globally distributed, composed of creatives from all regions, industries, and backgrounds, with a shared experience in game development and passion for innovation.</p>
                <div className="games-home-page__actions">
                {/* <Search />
                <Button text="+ Add New Warehouse" action={addWarehouseHandler} /> */}
                </div>
            </section>

            <section className="games-home-page__content">

            </section>
        </div>
        

      
    </main>
);
}
