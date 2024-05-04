import styles from './styles.module.css'

import searchIco from 'shared/assets/images/search.svg'

const SearchElement: React.FC = () => {
    return (
        <div className={styles.search_element}>
        <img className={styles.search_ico} src={searchIco} alt="search" />
          <input className={styles.input} placeholder='Search' type="text" name="search" id="search" />
        </div>
    )
}

export { SearchElement }