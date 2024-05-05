import { Card } from 'entities/card'
import style from './products.module.css'
import { SkeletonCard } from 'entities/sceleton';

import { useAppSelector } from 'shared/lib/store';
import { useEffect, useState } from 'react';


const Products: React.FC = () => {
    const reduxGameList = useAppSelector(state => state.searchReducer);
    const [gameList, setGameList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setGameList(reduxGameList.gameList);
        setLoading(false);
    }, [reduxGameList]);


    console.log('gameList from widgets: ', reduxGameList);



    // useEffect(() => {
    //     const fetchGames = async () => {
    //         try {
    //             const games: any = await getGames('a');
    //             setGameList(games);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Ошибка при получении списка игр:', error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchGames()
    // }, []);

    return (
        <div className={style.products}>
            {loading ? (
                [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <SkeletonCard key={index} />
                ))
            ) : (
                gameList && gameList.length > 0 ? (
                    gameList.map((game: any, index: any) => (
                        <Card key={index} image={game?.thumb} title={game?.external} price={game?.cheapest} />
                    ))
                ) : (
                    <div>No games found</div>
                )
            
            )}
        </div>
    );
}

export {Products};
