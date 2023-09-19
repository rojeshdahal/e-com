import { Stack, Input, Typography, TextField, Button } from "@mui/material";
import React from "react";
const Contact = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h2" sx={{ my: 5 }} style={{ marginTop: "80px" }}>
          Contact Us
        </Typography>
        <iFrame
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8464.3846184213!2d85.35152798100724!3d27.67922014915115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1693378478431!5m2!1sen!2snp"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iFrame>
      </div>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        sx={{
          marginTop: "50px",
        }}
      >
        <form action="https://formspree.io/f/mjvqrbyy" method="POST">
          <Input
            type="text"
            placeholder="Name"
            name="Name"
            autoComplete="off"
            required
          ></Input>
          <br />
          <Input
            type="email"
            placeholder="Email"
            name="Mail"
            autoComplete="off"
            required
          ></Input>
          <br />
          <TextField
            id="outlined-multiline-static"
            placeholder="Message"
            name="Message"
            multiline
            rows={5}
            autoComplete="off"
            required
          />
          <br />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Stack>
    </>
  );
};

export default Contact;
