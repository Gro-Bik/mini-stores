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
        {apps.map(({title, text, date}) => (
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
