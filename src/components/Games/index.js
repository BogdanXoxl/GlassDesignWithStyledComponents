import React, {useState, useEffect} from "react";
import {Cards, Status, StyledGames} from "./Games.styles";
import Card from "../Card";
import Loader from "../Loader";
import {useSearchData} from "../../hooks/useSearchData";


const Games = () => {
    const {games, value, loading, error, setValue} = useSearchData();
    return (
        <StyledGames>
            <Status>
                <h1>Active Games</h1>
                <input type="text" name="" id=""  value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            </Status>
            <Cards>
                {loading?
                    <Loader/> :
                    games.map(game => <Card {...game} key={game.title + game.src}/>)
                }
            </Cards>
        </StyledGames>
    );
};

export default Games;