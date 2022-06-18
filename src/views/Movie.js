import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export const MovieView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: {
          userName: "Ruslan"
        }
      })
    }, 3000)
  }, [])
  console.log(location);
  return (
    <div>Movie id - {id}</div>
  )
}