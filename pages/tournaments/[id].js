import React,{useState} from 'react'
import Image from "next/image"
import style from "./tournamentview.module.scss"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageIcon from '@mui/icons-material/Language';
import GroupIcon from '@mui/icons-material/Group';
const Register = ({data}) => {
    const [det,setDet] = useState(false)
    console.log(data)
  return (
    <main className={style.home_main}>
        <section className={style.home_section}>
            <div className={style.image_bg}>
        {/* <img src="/pubg.jpg" alt="img" loading='lazy' height={220} width={230} /> */}
            </div>
            <div className={style.info_container}>
        <img style={{
            borderRadius:"20px"
        }} src="/logo.png" alt="img" loading='lazy' height={120} width={120} />

        <main className={style.info}>
            <p>{data.schedule}</p>
            <span><EmojiEventsIcon/> {data.PrizePool}</span>
        </main>
            </div>
            <section className={style.hoster_promo}>
            <img src="/logo.png" alt="img" loading='lazy' height={40} width={40} />
            <div className={style.promo_info}
            >
                <h1>Hosted by <b>Esports House</b></h1>
                {/* <p></p> */}
            </div>
            {/* <button>join</button> */}
            </section>
            <button onClick={()=>{
                setDet(true)
            }} className={style.join_btn}>Join tournament</button>
            {
                det?<div>
                <div><h1>ID: {data.id_game}</h1></div>
                <div><h1>Password: {data.password}</h1></div>
            </div>:""
            }
        </section>

{/* info here  */}
        <main className={style.tournament_info}>
            <section>
                <p>India</p>
                <div>
               <LanguageIcon/>
               region 
                </div>
            </section>
            
            <section>
                <p>{data.slot}</p>
                <div>
               <GroupIcon/>
               Slots
                </div>
            </section>

            <section>
                <p>{data.mode}</p>
                <div>
               <GroupIcon/>
               Mode
                </div>
            </section>
            </main>

            <section className={style.prize_pool}>
                <h1> <EmojiEventsIcon/> prize pool</h1>
                <div>
                    <h1>1st rank</h1>
                    <p>${data.PrizePool}</p>
                </div>
                {/* <div>
                    <h1>2st rank</h1>
                    <p>${data.PrizePool / 3}</p>
                </div>
                <div>
                    <h1>3st rank</h1>
                    <p>${data.PrizePool / 4}</p>
                </div> */}
            </section>
            

    </main>
  )
}

export default Register

export const getServerSideProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch(`https://esp-xecc.onrender.com/get-tournament?id=${id}`)
    const data = await res.json()
    console.log(data)
    return {
      props: {
        data:data[0]
      }
    }
  }