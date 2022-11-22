
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from "./data"
import pubdata from './pubdata'

export default function App() {

    const cards = pubdata.map(item => {
      return (
          <Card
              key={item.id}
              item={item}
          />
      )
  })    

  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

