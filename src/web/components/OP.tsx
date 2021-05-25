import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Post } from '../../domain/model';

const OP: React.FC<{ op: Post; title: string }> = (props) => {
  const { title, op } = props;

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  return (
    <div className="rounded-md shadow-md bg-purple-dark p-3 text-white">
      <div className="grid lg:grid-cols-4 grid-cols-1">
        <div className="flex lg:flex-col sm:flex-row justify-items-center items-start lg:px-7 sm:py-3">
          <img className="lg:w-full w-1/4" src={op.mediaUrl} alt={op.mediaUrl} />
          {isMobile && (
            <div className="ml-1">
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="text-xs tracking-tighter">
                <span className="font-semibold text-cyan">{op.name || 'Anonymous'}</span>
                {` No.${op.id} ${new Date(op.createdAt).toLocaleString()}`}
              </p>
            </div>
          )}
        </div>
        <div className="col-span-3">
          {isDesktop && (
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm tracking-tighter">
                <span className="font-semibold text-cyan">{op.name || 'Anonymous'}</span>
                {` No.${op.id} ${new Date(op.createdAt).toLocaleString()}`}
              </p>
            </div>
          )}
          <p className="my-5 lg:text-base text-sm">{op.text}</p>
          <p className="text-sm tracking-tighter">replies</p>
        </div>
      </div>
    </div>
  );
};
export default OP;
