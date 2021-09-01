import {useState, useEffect} from "react";

const gamelist = [
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

export const useSearchData = () => {
    const [value, setValue] = useState("");
    const [games, setGames] = useState(gamelist);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchGames = (searchTerm) => {
        try{
            setError(false);
            setLoading(true);
            //fetching data
            const gms = gamelist.filter((el) => el?.title?.toLowerCase().includes(searchTerm.toLowerCase()));
            //set data
            setGames(gms);
        }catch (e){
            console.log(e);
            setError(true);
        }
        setLoading(false);
    };

    //init and search
    useEffect(() => {
        setGames(gamelist);
        fetchGames(value);
    }, [value]);


    return {games, value, loading, error, setValue};
};