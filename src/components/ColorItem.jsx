import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
export const ColorItem = ({ item }) => {
  return (
    <Card sx={{ bgcolor: `${item}`, padding: 5 }}>
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }} align="center" variant="h4">
          {item}
        </Typography>
      </CardContent>
    </Card>
  );
};
