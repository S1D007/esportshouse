import React,{useState,useEffect} from 'react'
import style from "./wallet.module.scss"

const Index = () => {
  const [coins,setCoins] = useState(0)
  useEffect(()=>{
    const coinBalace = localStorage.getItem("coins")
    setCoins(coinBalace)
  },[])
  return (
    <main className={style.wallet_card_box}>
    <nav>
        <section className={style.box_container}>
        <div className={style.ui_box_1}></div>
        <div className={style.ui_box_2}></div>
        <div className={style.ui_box_3}></div>
        </section>

        <h1>Comming Soon</h1>
    </nav>

<section className={style.balance}>
    <h1>balance</h1>
    <p>{coins}</p>
</section>
<button className={style.withdraw_btn}>withdraw money</button>
</main>
  )
}

export default Index