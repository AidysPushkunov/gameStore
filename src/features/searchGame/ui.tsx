import { SearchElement } from "entities/searchElement";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "shared/api/games";
import { setSearchResults } from "./searchSlice/searchSlice";

const SearchGames: React.FC = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('a');
  const [ , setGameList] = useState<any[]>([]);
  const [ , setLoading] = useState(true);

  const handleChange = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games: any = await getGames(searchText);
        if (games && games.length > 0) {
          console.log('Games from features: ', games);
          dispatch(setSearchResults(games)); // Dispatching setSearchResults action
          setGameList(games);
          setLoading(false);
        } else {
          console.log('No games found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Ошибка при получении списка игр:', error);
        setLoading(false);
      }
    };
  
    fetchGames();
  }, [searchText, dispatch]);

  return (
    <SearchElement searchText={searchText} handleChange={handleChange} />
  );
};

export { SearchGames };
