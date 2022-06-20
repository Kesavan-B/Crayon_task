import { Grid, CardMedia, Card, CardContent, Button, Divider, } from '@mui/material'
import React from 'react'
import { CycleData } from "../cycledata/CycleData";
import { MdCalendarToday } from "react-icons/md";
import { GiCartwheel } from "react-icons/gi";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { GiBodyHeight } from "react-icons/gi";
import StarIcon from "@mui/icons-material/Star";

function Listview() {
    return (
        <>
            <div className='all-list-card'>
                {
                    CycleData && CycleData.map((e) => {
                        return (
                            <div>
                                <Card className='list-cards'>
                                <Grid container
                                    direction="row"
                                    
                                >
                                    <Grid item xs={6}> 
                                    <div className='bike-types'><div className="list-bike-type-color">
                                            <p
                                                className={`p-card-side ${e.stock === "MTB" && "redbg"} ${e.stock === "EBIKE" && "greenbg"} ${e.stock === "CITY" && "bluebg"
                                                    } ${e.stock === "FTB" && "purplebg"} ${e.stock === "ATB" && "orangebg"}`}
                                            >
                                                {e.stock}
                                            </p>
                                        </div></div>
                                     <CardMedia
                                            className="list-img"
                                            component="img"
                                            src={e.image}
                                        /></Grid>
                                    <Grid xs={6} className="right-list-cont">
                                        
                                        <div className="maintitle">
                                            <h3 className="list-titl">
                                                {e.title}
                                                <FavoriteBorderOutlined className="list-hearticn" />{" "}
                                            </h3>
                                        </div>
                                        <div className="list-subtitles">
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
                                                <StarIcon style={{ fontSize: "10px", color: "#fff" }} />
                                                {e.rating}
                                            </button>
                                            <button>{e.review}</button>
                                        </div>

                                        <div className="list-allprice">
                                            <div className="avails">
                                                <span className="list-price">{e.price}</span>
                                                <div className="list-avail">
                                                    <div className="list-offer1">
                                                        <div className="list-strike">
                                                            <span className="underline">{e.underline}</span>

                                                            <span className="underline">
                                                                {e.underline1}
                                                            </span>
                                                        </div>
                                                        <span className="offer2">{e.offer}</span>
                                                    </div>
                                                </div>
                                                <span className="list-emi">{e.emi}</span>
                                            </div>
                                            <div className="list-colors">
                                                <div>
                                                    <p>Available In</p>
                                                </div>

                                                <div className="list-availcolors">
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
                                        <Divider style={{width:'100%'}}/>
                                        <div className="list-btns">
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
                                                    className={`${e.status === "Buy Now" && "yellowbg"} ${e.status === "Preview" && "redbg"
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
                                     
                                    </Grid>
                                </Grid>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Listview