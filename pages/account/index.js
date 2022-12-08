import React,{ useEffect, useState } from 'react'
import Image from "next/image"
import LogoutIcon from '@mui/icons-material/Logout';
import style from "./profile.module.scss"
import GroupsIcon from '@mui/icons-material/Groups';
import { useRouter } from 'next/router';
import User from "../../components/utils/Users"
const Index = () => {
  const route = useRouter()
  const [name,setName] = useState("")
  const [users,setUsers] = useState(false)
  useEffect(()=>{
    const name = localStorage.getItem("username")
    setName(name)
  },[])
  return (
    !users?<main className={style.main_profile_page}>
    <section className={style.profile_top_view}>
      <div className={style.image_container}>
      <img src="/pic.jpeg" alt="img" width={40} height={50}/>
      </div>
      <div className={style.name_bio}>
      <h1>{name}</h1>
      <p>I Love Esports House</p>
      </div>
    </section>
    <section className={style.logout}>
      <button onClick={()=>{
          localStorage.clear()
          route.push("/account/signup")
      }}> <p>Log out</p><LogoutIcon/></button>
    </section>
  </main>:<User/>
  )
}

export default Index