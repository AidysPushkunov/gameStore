

import { Card } from 'entities/card'
import style from './products.module.css'
import { getGames } from 'shared/api/games/games'
import { useEffect, useState } from 'react';
import { SkeletonCard } from 'entities/sceleton';

const Products: React.FC = () => {
    const [gameList, setGameList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const games: any = await getGames('a');
                setGameList(games);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при получении списка игр:', error);
                setLoading(false);
            }
        };

        fetchGames()
    }, []);

    return (
        <div className={style.products}>
            {loading ? (
                [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <SkeletonCard key={index} />
                ))
            ) : (gameList.map((game, index) => (
                <Card key={index} image={game.thumb} title={game.external} price={game.cheapest} />
            )))}
        </div>
    );
}

export {Products};
