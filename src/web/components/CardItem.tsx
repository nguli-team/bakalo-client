import { Link } from 'react-router-dom';

interface Properties {
  path: string;
  label: string;
  src: string;
  text: string;
  thread: string;
}

export default function CardItem(props: Properties): JSX.Element {
  return (
    <div className="rounded border border-white bg-purple-light">
      <Link to={props.path}>
        <figure className="card-item-pic-wrap" data-category={props.label}>
          <img className="card-item-img" alt={props.label} src={props.src} />
        </figure>
        <div className="p-5">
          <h4 className="text-center text-lg text-cyan ">{props.thread}</h4>
          <h5 className="p-3 text-white text-sm">{props.text}</h5>
        </div>
      </Link>
    </div>
  );
}
