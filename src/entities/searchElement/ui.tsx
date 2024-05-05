import styles from './styles.module.css'

import searchIco from 'shared/assets/images/search.svg'

type SearchElementProps = {
  searchText: string;
  handleChange: (e: string) => void;
}

const SearchElement: React.FC<SearchElementProps> = ({ searchText, handleChange }) => {
    return (
        <div className={styles.search_element}>
        <img className={styles.search_ico} src={searchIco} alt="search" />
          <input className={styles.input} value={searchText} placeholder='Search' type="text" name="search" id="search" onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export { SearchElement }