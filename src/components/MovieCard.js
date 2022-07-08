import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFavoritesList } from "../store";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MovieCard = ({ id, title, description, image }) => {
  const { favoritesList } = useSelector((state) => state.movies);
  const alreadуAdded = () => {
    const item = favoritesList.find((item) => item.id === id);
    if (typeof item == "object") return true;
    return false;
  };

  const [isAdded, setIsAdded] = useState(alreadуAdded());
  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    dispatch(updateFavoritesList({ id, title, description, image }));
    setIsAdded(!isAdded);
  };

  const navigate = useNavigate();

  return (
    <Card
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        title={title}
        style={{
          height: "96px",
        }}
      />
      <CardMedia
        className="movie_card_img"
        component="img"
        image={image}
        alt={title}
        height={"400px"}
        onClick={() => navigate(`/movies/${id}`)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleAddToFavorite} aria-label="add to favorites">
          {isAdded ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};
