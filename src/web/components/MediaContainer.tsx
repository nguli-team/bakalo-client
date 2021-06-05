import React from 'react';

const MediaContainer: React.FC<{ mediaUrl?: string; mediaFileName?: string }> = (props) => {
  const { mediaUrl, mediaFileName } = props;

  return (
    <a
      href={mediaUrl}
      rel="noreferrer"
      target="_blank"
      className="flex justify-center items-center"
    >
      <img src={mediaUrl} alt={mediaFileName} />
    </a>
  );
};

export default MediaContainer;
