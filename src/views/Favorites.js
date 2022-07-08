import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MovieCard } from "../components";

export const FavoritesView = () => {
  const { favoritesList } = useSelector((state) => state.movies);

  return (
    <Container fixed>
      <Box
        style={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h2" color="#1976d2">
          Your favorite movies
        </Typography>
      </Box>
      {favoritesList.length === 0 ? (
        <Box
          style={{
            display: "flex",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100px",
          }}
        >
          <Typography variant="h5" color="#1976d2">
            You don't have favorites movies :(
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={{ xs: 2 }} columns={12}>
          {favoritesList.map((item) => {
            return (
              <Grid item xs={3} sm={3} md={3} key={item.id}>
                <MovieCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  isFavorite={item.isFavorite}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};
