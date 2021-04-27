import React from 'react';
import { Link } from 'react-router-dom';

interface Properties {
  path: string;
  label: string;
  src: string;
  text: string;
  thread: string;
}

export default function CardItem(props: Properties): JSX.Element {
  const { path, label, src, text, thread } = props;

  return (
    <div className="rounded border border-white bg-purple-light">
      <Link to={path}>
        <figure className="card-item-pic-wrap" data-category={label}>
          <img className="card-item-img" alt={label} src={src} />
        </figure>
        <div className="p-5">
          <h4 className="text-center text-lg text-cyan ">{thread}</h4>
          <h5 className="p-3 text-white text-sm">{text}</h5>
        </div>
      </Link>
    </div>
  );
}
