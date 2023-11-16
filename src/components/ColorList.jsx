import { Grid, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { ColorItem } from "./ColorItem";

export const ColorList = () => {
  const [data, setData] = useState([
    "RED",
    "GREEN",
    "SKYBLUE",
    "PINK",
    "BLUE",
    "BROWN",
    "YELLOW",
    "AQUA",
  ]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={4}>
              <ColorItem item={item} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
