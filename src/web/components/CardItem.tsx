import React from 'react';
import { Link } from 'react-router-dom';

interface Properties {
  path: string;
  label: string;
  src?: string;
  text: string;
  thread: string;
}

const CardItem: React.FC<Properties> = (props) => {
  const { path, label, src, text, thread } = props;

  return (
    <div className="rounded border border-white bg-purple-light">
      <Link to={path}>
        <figure className="card-item-pic-wrap rounded-t" data-category={label}>
          {src && <img className="card-item-img" alt={label} src={src} />}
        </figure>
        <div className="p-5">
          <h4 className="text-center text-lg text-cyan ">{thread}</h4>
          <h5 className="text-center p-3 text-white text-sm">
            {text.length > 200 ? `${text.substring(0, 200)}...` : text}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
