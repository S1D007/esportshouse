import React, { useState } from 'react'
import style from "./createtournament.module.scss"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from "axios"
const CreateTournament = () => {
    const [title, setTitle] = useState("")
    const [game, setGame] = useState("")
    const [mode, setMode] = useState("")
    const [slot, setSlot] = useState("")
    const [fee, setFee] = useState("")
    const [prize, setPrize] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const [banner, setBanner] = useState("")
    console.log(file)
    const handleCreate = (event) => {
        event.preventDefault()
        const url = 'https://esp-xecc.onrender.com/register-tournament';
        const formData = new FormData();
        formData.append('banner', banner);
        formData.append('title', title)
        formData.append('game', game)
        formData.append('mode', mode)
        formData.append('slot', slot)
        formData.append('EntryFees', fee)
        formData.append('description', description)
        formData.append('PrizePool', prize)
        console.log(formData)
        axios.post(url, formData).then((response) => {
            console.log(response.data);
            // setBanner(response.data.result)
        });

    }
    return (
        <main className={style.create_main}>
            <header className={style.header}>
                <img src="/logo_mini.png" alt="img" />
                <h1>My Club Name</h1>
                <h2>Create Tournament</h2>
                <h5>Enter Correct Details</h5>
            </header>
            <form action='POST' className={style.form}>
                <section className={style.input_box}>
                    <p>Title of Tournament<span>*</span> </p>
                    <input value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" placeholder='Eg. Free Fire T3 Tournament' />
                </section>
                <section className={style.input_box}>
                    <p>Game<span>*</span> </p>
                    <input value={game} onChange={(e) => {
                        setGame(e.target.value)
                    }} type="text" placeholder='Eg. Free Fire , Pubg ..' />
                </section>
                <section className={style.input_box}>
                    <p>Mode<span>*</span> </p>
                    <input value={mode} onChange={(e) => {
                        setMode(e.target.value)
                    }} type="text" placeholder='Eg. Solo , Duo ..' />
                </section>

                <section className={style.input_box}>
                    <p>Slot<span>*</span> </p>
                    <input value={slot} onChange={(e) => {
                        setSlot(e.target.value)
                    }} type="text" placeholder='Eg. 50 ..' />
                    <small>Number of Squad or Duo or Solo</small>
                </section>
                <section className={style.input_box}>
                    <p>Entry Fee<span>*</span> </p>
                    <input value={fee} onChange={(e) => {
                        setFee(e.target.value)
                    }} type="text" placeholder='Eg. $230 , Free' />
                    <small>If Tournament is Free then you have to Fill Free or Paid Amount</small>
                </section>
                <section className={style.input_box}>
                    <p>Prize Poll</p>
                    <input value={prize} onChange={(e) => {
                        setPrize(e.target.value)
                    }} type="text" placeholder='123' />
                </section>
                <section className={style.imageui_box}>
                    <label htmlFor="imagebanner">
                        {file !== null ? <>
                            <h1>{file ? file.name : ""}<CheckCircleIcon color='success' /></h1>
                        </> : <><FileUploadIcon />
                            <p>Select a Banner file</p></>}
                    </label>
                    <input onChange={(e) => {
                        setFile(e.target.files[0])
                        const url = "https://esp-xecc.onrender.com/upload"
                        const formData = new FormData()
                        formData.append('img', e.target.files[0]);
                        axios.post(url, formData).then((response) => {
                            console.log(response.data);
                            setBanner(response.data.result)
                        });
                    }} type="file" accept='image/*' id="imagebanner" />
                </section>
                <section className={style.desc_box}>
                    <textarea value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} name="" id="" cols="20" rows="5" placeholder='A Detailed Description of Tournament'>
                    </textarea>
                </section>
                <button onClick={handleCreate} >Create Tournament</button>
            </form>
        </main>
    )
}

export default CreateTournament