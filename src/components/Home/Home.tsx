import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h1>Home</h1>

    <ul>
      <li><Link to="sorting">Sorting</Link></li>
    </ul></div>
  )
}

export default Home