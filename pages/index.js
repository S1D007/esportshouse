import React , {useEffect , Fragment} from 'react'
import Head from 'next/head'
import style from "../styles/Home.module.scss"
import ProfileSideBar from '../components/home/ProfileSideBar'
import style_ from "../components/home/homecompo.module.scss"
import Post from '../components/home/TournamentCard'
import style2 from "../components/home/tournamentCard.module.scss"
import Explore from '../components/home/Explore'
import Topfeatured from '../components/home/homeitems/Topfeatured'
import Topgames from '../components/home/homeitems/Topgames'
import Navbar from '../components/utils/Navbar'



export default function Home({tournaments}) {

  console.log(tournaments)
  return (
    <Fragment>
      {/* <Loader/> */}
      {/* <Getstart /> */}
      <main className={style.main_home}>
        {/* <Mobnav/> */}
        {/* <ProfileSideBar/> */}
        <main className={style_.post_main}>
      <section className={style_.post_container}>
{/* ?      <Explore/> */}

      
    {/* top featured */}

    {/* <Topfeatured /> */}
    <Topgames />
      <h1 className="text-3xl mx-2" >Recomemded Tournaments</h1>
      <div id="awn-z6521462">
      <section className={style2.post_container}>
      {
        tournaments.map(({bannerImgUrl,mode,title,PrizePool,slot,id,id_game,schd,game,participiants},i)=>{
          return <div key={i} >
          <Post banner={bannerImgUrl} gameID={id_game} schd={schd} id={id} mode={mode} title={title} prize={PrizePool} slot={slot} game={game} participiants={participiants} />
          </div>
        })
      }
      </section>
      </div>
      </section>
    </main>
        <Navbar/>
      </main>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://esp-xecc.onrender.com/all-tournament')
  // console.log(res)
  const tournaments = await res.json()

  return {
    props: {
      tournaments
    }, // will be passed to the page component as props
    revalidate: 10
  }
}
