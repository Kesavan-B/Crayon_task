import React from "react";
import { Button, Grid } from "@mui/material";

function Navimg() {
  return (
    <div className="manimg">
      <Grid direction="row" justifyContent="center" className="manimg-bg">
        <div className="man-title">
          <Grid>
            <div className="text">
              <h1>Men Bikes | Cycles By Type</h1>
              <div className="bike-cont">
                <div className="bike-para">
                  <p>
                    Reliable, affordable and trendy bicycles with unique frame
                    geometries and eye-catching designs that make for a smooth
                    and exhilarating ride
                  </p>
                </div>
              </div>
              <Grid container direction="row" justifyContent="center">
                <div className="btngrp">
                  <Button variant="contained" className="catecolors">
                    E-BIKE (3)
                  </Button>
                  <Button variant="contained" className="catecolors">
                    MTB (40)
                  </Button>
                  <Button variant="contained" className="catecolors">
                    ATB (21)
                  </Button>
                  <Button variant="contained" className="catecolors">
                    FTB (5)
                  </Button>
                  <Button variant="contained" className="catecolors">
                    CITY (10)
                  </Button>
                  <Button variant="contained" className="catecolors">
                    ROAD (3)
                  </Button>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Navimg;
