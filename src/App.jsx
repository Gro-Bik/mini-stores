import styles from './App.module.css'
import {AppCard} from './AppCard'
import {apps} from './variables'
import './style_variables.css'


export default function App() {
  return (
    <>
    <header>
      <img width="50" src="../IMG/Micke_Icon.png"></img>
      <h2>Micke Shop</h2>
    </header>
      
      <main>
        {apps.map(({title, text, date, price, img}) => (
          <AppCard 
            title={title}
            text={text}
            date={date}
            price={price}
            img={img}
          />
        ))}
      </main>
             
    
      <footer>
        <h3>©Kaga Corp. "Все права защещены 2021-2026"</h3>
        <div>О нас | Контакты</div>
                <div>
                    <a href="#">Политика конфиденциальности и Условия использования</a>
                </div>
      </footer>
    </>
  );
}
