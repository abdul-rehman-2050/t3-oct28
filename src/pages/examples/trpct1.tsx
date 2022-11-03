import React from 'react'
import { trpc } from '../../utils/trpc';


function TrpcClientTest() {
  const hello = trpc.example.hello.useQuery();
  
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}

export default TrpcClientTest