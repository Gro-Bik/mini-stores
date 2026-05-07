import styles from './App.module.css'
import {AppCard} from './AppCard'


export default function App() {
  return (
    <>
    <header id='header'>
      <h2  className={styles.header}><img width="50" src="../IMG/Micke_Icon.png"></img>Micke Shop</h2>
      </header>
      
      <main>
        {[
          {title: 'Футболка Кага', text: 'Футболка с персонажем Кага из Kancolle', date: '27.04', price: '1500₽'}, 
          {title: 'Кепка Эллиса', text: 'Кепка Эллиса из Left 4 Dead 2', date: '28.04', price: '975₽'}, 
          {title: 'Фигурка Шируи', text: 'Фигурка Шируи из Kancolle', date: '29.04', price: '15000₽'},
          {title: 'Фигурка Ремилия', text: 'Фигурка Ремилии из Touhou Project', date: '29.04', price: '12000₽'}
        ].map(({title, text, date}) => (
          <AppCard 
            title={title}
            text={text}
            date={date}
          />
        ))}
      </main>
    </>
  );
}
