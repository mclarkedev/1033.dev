import React from 'react';
import { IPhoneXWithGif } from './IPhoneX';
import TimeMachine from './TimeMachine';

enum FeaturedContentType {
  arthur = 0,
  timeMachine = 1,
  notionDraw = 2,
}

interface Post {
  name: string;
  url?: string;
  id: FeaturedContentType;
}

const renderFeaturedContent = (type: FeaturedContentType) => {
  switch (type) {
    case FeaturedContentType.arthur:
      return <IPhoneXWithGif />;
    case FeaturedContentType.timeMachine:
      return <TimeMachine height="33vh" />;
    case FeaturedContentType.notionDraw:
      return (
        <div style={{ height: '55vh' }}>
          <embed
            src="https://www.notiondraw.com"
            height="100%"
            width="100%"
            className="rounded-xl"
          />
        </div>
      );
    default:
      return null;
  }
};

const Cell = ({ post, colSpan, theme }) => (
  <article
    key={post.name}
    aria-label={post.name}
    className={`p-8 rounded-xl md:col-span-${colSpan} ${
      theme === 'terminal'
        ? 'bg-gray-900 text-white font-mono text-xs'
        : 'bg-gray-100 text-black'
    }`}
    style={{ height: '66vh' }}
  >
    <figure className="flex flex-col">
      <figcaption>
        <h2 className="font-mono text-xs font-semibold">{post.name}</h2>
      </figcaption>
      {renderFeaturedContent(post.id)}
    </figure>
  </article>
);

export default function Row({ data, index }) {
  const isOdd = index % 2;
  const dynamicColSpan1 = isOdd ? 3 : 4;
  const dynamicColSpan2 = isOdd ? 4 : 3;

  return (
    <div className="grid gap-12 mt-12 md:grid-cols-7 grid-cols-1 grid-rows-1">
      {data?.map((post: Post, subIndex: number) => (
        <Cell
          post={post}
          index={subIndex}
          colSpan={subIndex === 0 ? dynamicColSpan1 : dynamicColSpan2}
          theme={post.id === 1 ? 'terminal' : null}
        />
      ))}
    </div>
  );
}
