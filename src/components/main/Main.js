import React, {useEffect, useState} from "react";
import style from "./Main.module.css";
import Summary from "./subcomponents/Summary";
import Container from "./subcomponents/layout/Container";
import RatedInfo from "./subcomponents/RatedInfo";


const Main = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://mcuapi.herokuapp.com/api/v1/movies');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();
            const loadedMovies = responseJson.data;
            setMovies(loadedMovies);
        };

        fetchMovies().catch((error) => {
            console.log(error)
        });


    }, []);

    if (!movies || movies.length === 0){
        return <div></div>
    }

    const featured = movies[[Math.floor(Math.random()*movies.length)]];

    return (
        <main className={style.main}>
            <iframe className={style["background-video"]}
                    src={`${featured["trailer_url"]}&autoplay=any&loop=1`}
                    title="SPIDER-MAN: NO WAY HOME - Official Teaser Trailer (HD)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            >
            </iframe>
            <Container>
                <Summary overview={featured.overview}/>
                <RatedInfo/>
            </Container>
        </main>

    );
}

export default Main;