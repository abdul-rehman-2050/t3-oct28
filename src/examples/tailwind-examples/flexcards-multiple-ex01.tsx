import React from 'react'



type Props = {
    cardnum:number
}


function FlexCardsMultiple(props: Props) {
    const rows = [];
  for (let i = 0; i < props.cardnum; i++) {
    rows.push(
      <div className=" m-1 h-64 border bg-teal-500 p-10 shadow-md">
        <div className="sm:w-24 md:w-40">
          <p>what is tha sdfa sd fasd fasdfis</p>
        </div>
      </div>
    );
  }
  return (
    <div className='flex flex-wrap'>
        {rows}
    </div>
  )
}

export default FlexCardsMultiple