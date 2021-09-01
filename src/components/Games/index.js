import React from "react";
import {Cards, Status, StyledGames} from "./Games.styles";
import Card from "../Card";

const games = [
    {
        title: "Assassins Creed Valhalla",
        desc: "PS5 Version",
        percentage: 60,
        src: "https://github.com/developedbyed/glass-website/blob/master/images/assassins.png?raw=true"
    },
    {
        title: "Spider-Man: Miles Morales ",
        desc: "PS5 Version",
        percentage: 80,
        src: "https://github.com/developedbyed/glass-website/blob/master/images/spiderman.png?raw=true"
    },
    {
        title: "Sackboy: A Big Adventure",
        desc: "PS5 Version",
        percentage: 30,
        src: "https://github.com/developedbyed/glass-website/blob/master/images/sackboy.png?raw=true"
    },
    {
        title: "Assassins",
        desc: "PS5 Version",
        percentage: 60,
        src: "https://github.com/developedbyed/glass-website/blob/master/images/assassins.png?raw=true"
    },
];

const Games = () => {
    return (
        <StyledGames>
            <Status>
                <h1>Active Games</h1>
                <input type="text" name="" id=""/>
            </Status>
            <Cards>
                {games.map(game => <Card {...game} key={game.title + game.src}/>)}
            </Cards>
        </StyledGames>
    );
};

export default Games;