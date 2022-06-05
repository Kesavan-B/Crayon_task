import React from "react";
import { CycleData } from "../cycledata/CycleData";
import { MdCalendarToday } from "react-icons/md";
import { GiCartwheel } from "react-icons/gi";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import Content from "../contents/Content";
import { GiBodyHeight } from "react-icons/gi";
import StarIcon from "@mui/icons-material/Star";
import {
  Card,
  CardContent,
  Button,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";

function Itemlist() {
  return (
    <div className="itemlist">
      <div className="cardbox">
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
          style={{ background: "whitesmoke" }}
        >
          {/*mapping card datas*/}
          {CycleData &&
            CycleData.map((e, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xl={3}
                  lg={4}
                  md={4}
                  sm={6}
                  xs={12}
                  className="full-card"
                >
                  <Card className="card-d ">
                    <CardContent>
                      <div className="maintitle">
                        <h3 className="titl">
                          {e.title}
                          <FavoriteBorderOutlined className="hearticn" />{" "}
                        </h3>
                      </div>

                      <div className="subtitles">
                        <p className="sub1">
                          <MdCalendarToday className="crdicn" />
                          {e.subtitle1}
                        </p>
                        <p className="sub1">
                          <GiBodyHeight className="crdicn" />
                          {e.subtitle2}
                        </p>
                        <p className="sub1">
                          <GiCartwheel className="crdicn" />
                          {e.subtitle3}
                        </p>
                      </div>

                      <div className="ratings-review">
                        <button className="rating-btn">
                          <StarIcon style={{ fontSize: "10px",color:"#fff" }} />
                          {e.rating}
                        </button>
                        <button>{e.review}</button>
                      </div>
                      <div className="bike-types">
                        <div className="bike-type-color">
                          <p
                            className={`p-card-side ${ e.stock === "MTB" && "redbg"} ${e.stock === "EBIKE" && "greenbg"} ${e.stock === "CITY" && "bluebg"
                            } ${e.stock === "FTB" && "purplebg"} ${  e.stock === "ATB" && "orangebg" }`}
                          >
                            {e.stock}
                          </p>
                        </div>
                        <CardMedia
                          className="cycleimg"
                          component="img"
                          src={e.image}
                        />
                      </div>
                      <div className="allprice">
                        <div className="avails">
                          <span className="price">{e.price}</span>
                          <div className="avail">
                            <div className="offer1">
                              <div className=" strike">
                                <span className="underline">{e.underline}</span>

                                <span className="underline">
                                  {e.underline1}
                                </span>
                              </div>
                              <span className="offer2">{e.offer}</span>
                            </div>
                          </div>
                          <span className="emi">{e.emi}</span>
                        </div>
                        <div className="colors">
                          <div>
                            <p>Available In</p>
                          </div>

                          <div className="availcolors">
                            {e.availcolors &&
                              e.availcolors.map((a) => {
                                return (
                                  <div>
                                    <img src={a} alt="colors" />
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <Divider />
                    <div className="btns">
                      <div className="quick">
                        <Button
                          className="buybtn"
                          style={{ padding: "15px 0px", color: "#000" }}
                          fullWidth
                        >
                          {" "}
                          QUICK VIEW
                        </Button>
                      </div>
                      <div className="bnow">
                        <Button
                          className={`${e.status === "Buy Now" && "yellowbg"} ${
                            e.status === "Preview" && "redbg"
                          } ${e.status === "Notify Me" && "skybg"}`}
                          style={{
                            padding: "15px 0px",
                            color: "#000",
                          }}
                          fullWidth
                        >
                          {e.status}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Grid>
                );
            })}
          <Content />
        </Grid>
      </div>
    </div>
  );
}

export default Itemlist;
