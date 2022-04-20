import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')

  return (
    <div>
      <h2>Hey {name.toUpperCase()}, Contact us here ...</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minus sed molestiae tenetur iusto, nemo modi voluptates reprehenderit animi est alias similique quam quod laudantium ea dolore corporis. Quo, cumque.</p>
    </div>
  )
}
