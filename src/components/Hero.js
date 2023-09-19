import React from "react";
import {
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
  Card,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Hero = ({ myData }) => {
  const { name, img } = myData;

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              Welcome to
            </Typography>
            <Typography variant="h4">{name}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              eveniet voluptate harum in quis molestiae nihil ad, animi quidem
              illum eaque, nemo repellendus impedit culpa quod, pariatur fugit
              corrupti itaque?
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to="/products">
              <Button size="medium" variant="contained" color="primary">
                SHOP NOW
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <img
            src={img}
            alt="Hero"
            style={{
              height: "auto",
              width: "100%",
              margin: "auto",
              borderRadius: "10%",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
