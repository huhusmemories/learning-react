import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id:1},
    {title: "bowser's live stream", id:2},
    {title: "race on moo moo farm", id:3}
  ])

  console.log(showEvents)
  // Why when we console.log(showEvents) it console.logs twice?
  // Solution: Due to react lifecycle

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    // console.log(id)
  }

  const subtitle = "More events"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle}/>
      {/* <Title title="No more events in your area" subtitle="Oh noo"/> */}

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
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title.toUpperCase()}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))}

      <Modal>
        <h2>10% Off Coupon code!!</h2>
        <p>Use the code CODE10 at the checkout.</p>
      </Modal>
    </div>
  );
}

export default App;
