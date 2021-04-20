import { Post } from './ThreadPosts';

export default function PostCard(props: Post): JSX.Element {
  return (
    <div className="rounded-md shadow-md bg-purple-dark p-3 text-white">
      <div className="grid lg:grid-cols-4">
        <div className="flex lg:flex-col sm:flex-row justify-items-center items-start lg:px-7 sm:py-3">
          <img src={props.mediaUrl} alt={props.title} />
          <p className="text-sm-tracking-tighter"></p>
        </div>
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <p className="text-sm tracking-tighter">
            <span className="font-semibold text-cyan">{props.author}</span>
            {`No.${props.id} ${props.createdAt}`}
          </p>
          <p className="my-5">{props.desc}</p>
          <p className="text-sm tracking-tighter">{`${props.replyCount} replies`}</p>
        </div>
      </div>
    </div>
  );
}
