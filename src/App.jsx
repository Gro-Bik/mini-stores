import styles from './App.module.css'
import {AppCard} from './AppCard'


export default function App() {
  return (
    <>
      <h1 className={styles.header}><img width="100"src="../IMG/Micke_Icon.png"></img>Micke Shop</h1>
      <main>
        {[
          {title: 'Футболка Кага', text: 'Футболка с персонажем Кага из Kancolle', date: '27.04', price: '1500₽'}, 
          {title: 'Кепка Эллиса', text: 'Кепка Эллиса из Left 4 Dead 2', date: '28.04', price: '975₽'}, 
          {title: 'Фигурка Шируи', text: 'Фигурка Шируи из Kancolle', date: '29.04'}
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
