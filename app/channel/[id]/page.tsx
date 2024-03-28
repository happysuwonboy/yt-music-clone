import React from 'react';

interface PageProps {
  params: {
    id: string;
  },
  searchParams : {
    list : string
  };
}

const page: React.FC<PageProps> = (props) => {
  return <div>channel/[{props.params.id}]?list={props.searchParams.list}</div>;
};

export default page;
