import React,{useState,useEffect} from 'react'
import Image from "next/image"
import style from "./tournamentview.module.scss"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Head from 'next/head'
import LanguageIcon from '@mui/icons-material/Language';
import GroupIcon from '@mui/icons-material/Group';
import axios from "axios"
const Register = ({data}) => {
    const [det,setDet] = useState(false)
    console.log(data)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [done,setDone] = useState(false)
    const [exist,setExist] = useState(false)
    useEffect(()=>{
        const email = localStorage.getItem("email")
        setEmail(email)
       const x =  localStorage.getItem(data.id)
       if(x){
        setExist(true)
       } 
    },[])
  return (
    <main className={style.home_main}>
        <Head>
    <script data-cfasync="false" type="text/javascript" data-adel="atag" src="//ashcdn.com/script/atg.js" czid="hjmsvgagon"></script>
    <script data-cfasync="false" type="text/javascript" src="//buzzonclick.com/a/display.php?r=6521458"></script>
    <script data-cfasync="false" src="//asacdn.com/script/ippg.js" data-adel="inpage" zid="6521470" rr="30" mads="2"></script>
            </Head> 
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
            <div className={style.promo_info}
            >
                
                <br/>
                <h1 style={{
                    // marginTop:"-150px"
                }} className="text-3xl mt-14" >{data.title}</h1>
                {/* <p></p> */}
            </div>
            <button style={{
                // marginTop:"-10px"
            }} disabled={done}  onClick={()=>{
                setDet(true)
            }} className={style.join_btn}>{done || exist ?"Registered":"Join Tournament"}</button>
            
            </section>
            

            <section>
            {
                det?<span style={{
                    display:"flex",
                    justifyContent:"center",
                    padding:"10px",
                    // marginTop:"-120px",
                    // alignItems:"center"
                }} >
                    {
                                    exist?"":<div>
                                        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="In Game Name"/>
                                    
                                    <button style={{
                                        backgroundColor:"#15151a",
                                        color:"#fff",
                                        padding:"10px",
                                        margin:"10px"

                                    }} onClick={()=>{
                                        if(name === "" && name.length < 3){
                                            window.alert("enter name")
                                        }else{
                                            setDone(true)
                                            const url = `https://esp-xecc.onrender.com/add-part?username=${name}&id=${data._id}&email={email}`
                                            axios.get(url).then(()=>{
                                                alert("regestration Done")
                                                localStorage.setItem(data.id,data.id)
                                                setExist(true)
                                            })
                                           
                                        }
                                    }}>Register</button>
                                    </div>
                                }
            </span>:""
            }
            </section>
            {
                exist?<div style={{
                    backgroundColor:"#15151a",
                    padding:"20px",
                    margin:"10px",
                    fontSize:"20px",
                    marginTop:"-120px",
                    borderRadius:"10px"
                }}>
                    <h1>ID:{data.id_game}</h1>
                    <h1>Password: {data.password}</h1>
                    {!data.game_id?`Please wait till ${data.schd}`:""}
                </div>:""
            }

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
