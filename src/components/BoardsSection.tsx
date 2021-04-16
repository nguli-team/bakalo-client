import React from 'react'
import './BoardsSection.css'
import { Link } from 'react-router-dom'

const BoardsSection = () => {
    return (
        <>
            <section className='boards-container'>
                {/* <video src={require('../assets/home-bg.mp4').default} autoPlay loop muted/> */}

                <div className="logo-name roboto py-5">
                    <Link to="/">Bakalo</Link>
                </div>
                <div className='logo'>
                    <img src={require('../assets/catgirl.png').default} alt="logo" />
                </div>
                <div className='boards roboto'>
                    <h1>Boards</h1>

                    <div className='box'>
                        <div className='mt-2 flex md:gap-10'>
                            <div className="w-full md:w-1/3">
                                <li> <Link to="/">Politik</Link> </li>
                                <li> <Link to="/">Teknologi</Link> </li>
                                <li> <Link to="/">Otomotif</Link> </li>
                                <li> <Link to="/">Sains</Link> </li>
                            </div>
                            <div className="w-full md:w-1/3">
                                <li> <Link to="/">Video Games</Link> </li>
                                <li> <Link to="/">Musik</Link> </li>
                                <li> <Link to="/">Olahraga</Link> </li>
                            </div>
                            <div className="w-full md:w-1/3">
                                <li> <Link to="/">TV & Film</Link> </li>
                                <li> <Link to="/">Anime & Manga</Link> </li>
                                <li> <Link to="/">Paranormal</Link> </li>
                                <li> <Link to="/">Bisnis & Keuangan</Link> </li>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default BoardsSection

