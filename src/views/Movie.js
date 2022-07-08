import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { GET_MOVIE_BY_ID_URL } from "../constants";

export const MovieView = () => {
  const [movie, setMovie] = useState("");
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${GET_MOVIE_BY_ID_URL(id)}`);
      setMovie(data);
    };
    fetchData();
  });

  return (
    <>
      {!movie ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <Container
          fixed
          style={{
            marginTop: "40px",
          }}
        >
          <Grid container spacing={{ xs: 2 }} columns={12}>
            <Grid item xs={4} sm={4} md={4}>
              <Paper>
                <Box>
                  <img
                    src={movie.image}
                    alt={movie.plot}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
              <Typography variant="h3">{movie.fullTitle}</Typography>
              <Typography variant="subtitle1">Year: {movie.year}</Typography>
              <Typography variant="subtitle1">
                Duration: {movie.runtimeStr}
              </Typography>
              <Typography variant="h4">Actors:</Typography>
              <Grid container spacing={{ xs: 2 }} columns={12}>
                {movie.actorList.map((item) => (
                  <Grid key={item.id} item xs={3} sm={3} md={3}>
                    <img
                      style={{
                        width: "100%",
                        height: "250px",
                      }}
                      src={`${item.image}`}
                      alt={item.name}
                      loading="lazy"
                    />
                    <Typography variant="subtitle1">{item.name}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};
