import useGenres, { Genre } from '../hooks/UseGenres'

const GenreList = () => {
    
const {data:genres}=useGenres()
    
  return (

    <ul>{genres.map(g=><li key={g.id}>{g.name}</li>)}</ul>
  )
}

export default GenreList