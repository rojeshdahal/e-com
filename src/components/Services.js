import { Box, Grid, Paper } from "@mui/material";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { MdEmojiPeople } from "react-icons/md";
import React from "react";

const Services = () => {
  return (
    <Box sx={{ bgcolor: "#cfe8fc" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: "200px", flexGrow: 1 }}
      >
        <Grid item xs={2}>
          <Paper sx={{ textAlign: "center" }}>
            <TbTruckDelivery size={"5rem"} />
            <h3 style={{ textAlign: "center" }}>Free Delivery</h3>
          </Paper>
        </Grid>
        <Grid
          container
          item
          rowSpacing={2}
          xs={2}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item>
            <Paper sx={{ textAlign: "center" }}>
              <GiMoneyStack size={"3rem"} />
              <h5>Money Back</h5>
            </Paper>
          </Grid>
          <Grid item>
            <Paper sx={{ textAlign: "center" }}>
              <MdEmojiPeople size={"3rem"} />
              <h6>Customer Satisfaction</h6>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Paper sx={{ textAlign: "center" }}>
            <MdSecurity size={"5rem"} />
            <h5 style={{ textAlign: "center" }}>Secure Payment System</h5>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
