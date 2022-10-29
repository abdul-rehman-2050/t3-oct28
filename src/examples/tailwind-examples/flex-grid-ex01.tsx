import React from 'react'

function FlexGridEx01() {
  return (
    <div className="container m-auto p-8 text-white">
    <div className="-mx-2 mb-8 flex">
      <div className="w-1/3 px-2">
        <div className="bg-grey-light h-12 border">1</div>
      </div>
      <div className="w-1/3 px-2">
        <div className="bg-grey h-12 border">2</div>
      </div>
      <div className="w-1/3 px-2">
        <div className="bg-grey-light h-12 border">3</div>
      </div>
    </div>

    <h2 className="mb-4">Responsive 3 col flex grid</h2>

    <div className="-mx-2 mb-8 flex flex-wrap">
      <div className="mb-4 w-full px-2 md:w-1/2 lg:w-1/4">
        <div className="text-grey-dark flex h-12 items-center justify-center border text-sm">
          <p>full / half / quarter</p>
        </div>
      </div>
      <div className="mb-4 w-full px-2 md:w-1/2 lg:w-1/4">
        <div className="text-grey-dark flex h-12 items-center justify-center border text-sm">
          <p>full / half / quarter</p>
        </div>
      </div>
      <div className="w-full px-2 lg:w-1/2">
        <div className="text-grey-dark flex h-12 items-center justify-center border text-sm">
          <p>full / half</p>
        </div>
      </div>
    </div>

    <h2 className="mb-4">Using borders for gutters</h2>

    <div className="bg-grey-light mb-8 flex w-full flex-wrap p-2">
      <div className="bg-grey h-16 w-full border-8 md:w-1/2 lg:w-1/4"></div>
      <div className="bg-grey h-16 w-full border-8 md:w-1/2 lg:w-1/4"></div>
      <div className="bg-grey h-16 w-full border-8 lg:w-1/2"></div>
    </div>
  </div>
  )
}

export default FlexGridEx01
