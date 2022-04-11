import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id:1},
    {title: "bowser's live stream", id:2},
    {title: "race on moo moo farm", id:3}
  ])

  console.log(showModal)
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

  const handleClose = () => {
    setShowModal(false)
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
      {showEvents && <EventList events={events} handleClick={handleClick}/>}


        <div>
          <button onClick={() => setShowModal(true)}> Show Modal</button>
        </div>

      {showModal && <Modal handleClose={handleClose}>
        <h2>10% Off Coupon code!!</h2>
        <p>Use the code CODE10 at the checkout.</p>
      </Modal>}
    </div>
  );
}

export default App;
