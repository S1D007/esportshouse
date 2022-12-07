import React from "react"
import Image from "next/image"
import style from "./games.module.scss"

function Topgames(){
    return(
        <main className={style.top_games_main}>
            <header>
            <h1>top featured games</h1>
            </header>
            <section className={style.games_container}>
                <div>
                    <Image src="/1.jpeg" alt="" width={70} height={70} />
                    <p>Play now</p>
                </div>
                <div>
                    <Image src="/2.jpeg" alt="" width={70} height={70} />
                    <p>Play now</p>
                </div>
                <div>
                    <Image src="/3.jpeg" alt="" width={70} height={70} />
                    <p>Play now</p>
                </div>
                <div>
                    <Image src="/4.jpeg" alt="" width={100} height={100} />
                    <p>Play now</p>
                </div>

            </section>
        </main>
    )
}
export default Topgames
