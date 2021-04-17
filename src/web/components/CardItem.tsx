import React from 'react';
import { Link } from 'react-router-dom';

export default function CardItem(props: {
  path: string;
  label: string;
  src: string;
  text: string;
  thread: string;
}) {
  return (
    <div className="cards__item">
      <Link to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img className="cards__item__img" alt="Travel Image" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h4 className="cards__item__thread">{props.thread}</h4>
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </div>
  );
}
