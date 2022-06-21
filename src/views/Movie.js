import { useParams } from "react-router-dom";

export const MovieView = () => {
  const { id } = useParams();
  return (
    <div>Movie id - {id}</div>
  )
}