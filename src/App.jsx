import { useState } from 'react'
import styles from './App.module.css'
import { AppCard } from './AppCard'
import { apps } from './variables'
import './style_variables.css'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterPrice, setFilterPrice] = useState('all')

 
  const filteredApps = apps.filter(app => {
  
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.text.toLowerCase().includes(searchTerm.toLowerCase())
    
   
    let matchesPrice = true
    const priceNum = parseInt(app.price.replace('₽', '').replace(' ', ''))
    
    if (filterPrice === 'under1000') {
      matchesPrice = priceNum < 1000
    } else if (filterPrice === '1000-5000') {
      matchesPrice = priceNum >= 1000 && priceNum <= 5000
    } else if (filterPrice === 'over5000') {
      matchesPrice = priceNum > 5000
    }
    
    return matchesSearch && matchesPrice
  })

  return (
    <>
      <header>
        <img width="100" src="../IMG/NITORI_ICON2.png" alt="Logo"></img>
      </header>

     
      <div className={styles.filterSection}>
        <input 
          type="text"
          placeholder="Поиск товаров"
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className={styles.filterSelect}
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
        >
          <option value="all">Все цены</option>
          <option value="under1000">До 1000₽</option>
          <option value="1000-5000">1000₽ - 5000₽</option>
          <option value="over5000">От 5000₽</option>
        </select>
      </div>

      
      {filteredApps.length === 0 ? (
        <div className={styles.noResults}>
          <p> Ничего не найдено</p>
          <p>Попробуйте изменить поиск или фильтр</p>
        </div>
      ) : (
        <main>
          {filteredApps.map(({title, text, date, price, img}, index) => (
            <AppCard 
              key={index}
              title={title}
              text={text}
              date={date}
              price={price}
              img={img}
            />
          ))}
        </main>
      )}

      <footer>
        <h3>©Kaga Corp. "Все права защищены 2021-2026"</h3>
        <div>О нас | Контакты</div>
        <div>
          <a href="#">Политика конфиденциальности и Условия использования</a>
        </div>
      </footer>
    </>
  )
}