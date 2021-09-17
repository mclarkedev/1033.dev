import React from 'react';
import IPhoneX from './IPhoneX';
import TimeMachine from './TimeMachine';

enum FeaturedContentType {
  arthur = 0,
  timeMachine = 1,
}

interface Post {
  name: string;
  url?: string;
  id: FeaturedContentType;
}

const renderFeaturedContent = (type: FeaturedContentType) => {
  switch (type) {
    case FeaturedContentType.arthur:
      return <IPhoneX height="55vh" />;
    case FeaturedContentType.timeMachine:
      return <TimeMachine height="33vh" />;
    default:
      break;
  }
};

const Cell = ({ post, index, colSpan }) => (
  <article
    key={post.name}
    aria-label={post.name}
    className={`p-8 rounded-xl md:col-span-${colSpan}`}
    style={{ height: '66vh', backgroundColor: '#FAFAFA' }}
  >
    <h2 className="font-mono text-xs font-semibold">{post.name}</h2>
    <figure className="flex flex-col items-center">
      {renderFeaturedContent(index)}
      <figcaption>{post.name}</figcaption>
    </figure>
  </article>
);

export default function Row({ data, index }) {
  const isOdd = index % 2;
  const dynamicColSpan1 = isOdd ? 3 : 4;
  const dynamicColSpan2 = isOdd ? 4 : 3;

  return (
    <div className="grid gap-12 mt-12 md:grid-cols-7 grid-cols-1 grid-rows-1">
      {data?.map((post: Post, subIindex: number) => (
        <Cell
          post={post}
          index={subIindex}
          colSpan={subIindex === 0 ? dynamicColSpan1 : dynamicColSpan2}
        />
      ))}
    </div>
  );
}
