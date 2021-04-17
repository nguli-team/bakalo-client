import React from 'react';
import './BoardsSection.css';
import { Link } from 'react-router-dom';

export default function BoardsSection() {
  return (
    <>
      <section
        className="boards-container"
        style={{
          background: `"${process.env.PUBLIC_URL}/assets/homeBG.png") no-repeat center/cover`
        }}
      >
        {/* <video src={require('../assets/home-bg.mp4').default} autoPlay loop muted/> */}

        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/catgirl.png`} alt="logo" />
        </div>
        <div className="boards roboto">
          <h1>Boards</h1>

          <div className="box">
            <div className="mt-2 flex md:gap-10">
              <ul className="w-full md:w-1/3">
                <li>
                  {' '}
                  <Link to="/">Politik</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Teknologi</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Otomotif</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Sains</Link>{' '}
                </li>
              </ul>
              <ul className="w-full md:w-1/3">
                <li>
                  {' '}
                  <Link to="/">Video Games</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Musik</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Olahraga</Link>{' '}
                </li>
              </ul>
              <ul className="w-full md:w-1/3">
                <li>
                  {' '}
                  <Link to="/">TV & Film</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Anime & Manga</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Paranormal</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link to="/">Bisnis & Keuangan</Link>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
