import { Link } from 'react-router-dom';

interface Props {
  opId: string;
  title: string;
  opImgUrl: string;
  desc: string;
  replyCount: number;
  mediaCount: number;
}

export default function ThreadCard(props: Props): JSX.Element {
  return (
    <div className="rounded shadow-md bg-purple-light text-white p-3">
      <Link to={`./${props.opId}`}>
        <div>
          <img src={props.opImgUrl} alt={props.opImgUrl} />
        </div>
        <div className="mt-3 text-center">
          <h3 className="font-bold">{props.title}</h3>
          <p className="text-sm tracking-tighter">{`${props.replyCount} replies ${props.mediaCount} media`}</p>
          <p>{props.desc}</p>
        </div>
      </Link>
    </div>
  );
}
