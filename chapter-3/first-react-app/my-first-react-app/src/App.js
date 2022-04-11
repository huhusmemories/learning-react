import './App.css';
import { useState } from 'react'
import Title from './components/Title'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id:1},
    {title: "bowser's live stream", id:2},
    {title: "race on moo moo farm", id:3}
  ])

  console.log(showEvents)
  // Why when we console.log(showEvents) it console.logs twice?

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const subtitle = "More events"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle}/>
      <Title title="No more events in your area" subtitle="Oh noo"/>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title.toUpperCase()}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
