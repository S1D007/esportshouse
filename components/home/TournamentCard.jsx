import React from 'react'
import style from "./tournamentCard.module.scss"
import Image from "next/image"
import {useRouter} from "next/router"
import { Avatar, Chip } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
const Post = ({title,slot,banner,prize,mode,id,schd,game,participiants}) => {
  const router = useRouter()
  return (
    <div class={style.card}>
      <div className={style.card_img_holder}>
        <img src={banner} alt="image" />
      </div>
      <section className={style.blog_tittle}>
        <h3>{title}</h3>
        <Chip
          avatar={<Avatar alt="Natacha" src="logo.png" />}
          label={game}
          color='success'
          variant="outlined"
        />
      </section>
      {/* <div class={style.chip} >
        <Chip color='info' label="Squad" />
        <Chip color="error" label="MultiMap" />
        <Chip color="warning" label="TTP" />
      </div> */}
      <div class={style.options}>
        <div><h1>Organiser:</h1><h1>Esports House India</h1> </div>
        <p>schedule : {schd}</p>
        <p>prize : <b>{prize}</b></p>
        <p>slot : <b>{participiants.length}/{slot}</b></p>
        <p>mode : <b>{mode}</b></p>
        <div className={style.buttons}>
          <button style={{
            color:"#000"
          }}
           onClick={()=>{
            router.push(`/tournaments/${id}`)
            // alert("hi")
           }}>View Tournament</button>
          <ShareIcon onClick={()=>{
             navigator.clipboard.writeText(`https://esportshouse.vercel.app/tournaments/${id}`).then(() => {
              // Alert the user that the action took place.
              // Nobody likes hidden stuff being done under the hood!
              alert("Copied to clipboard");
          });
          }} />
        </div>
      </div>
    </div>
  )
}

export default Post