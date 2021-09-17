import React from 'react';
import Row from './Row';

function reduceToTupples(data: any[]): [any, any][] {
  if (!data) {
    console.error('No data passed to reduceToTupples');
    return [];
  }

  return data.reduce((result, _, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
}

export default function Grid({ data }: { data: any[] }) {
  const tuppleData = reduceToTupples(data);
  return (
    <div id="grid">
      {tuppleData?.map((tupple, index) => (
        <Row data={tupple} index={index} />
      ))}
    </div>
  );
}
