import React from 'react'

const Banner = () => {

  return (
    <div>
        <section
  className="relative bg-[url(https://img.freepik.com/free-photo/medium-shot-human-silhouettes-partying-together_23-2150039659.jpg?t=st=1715671013~exp=1715674613~hmac=4146294125288080eed1f2a8c89c800d315c1f3af0ee36797fab4da13404ab07&w=1060)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right mx-auto">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-sky-300 text-7xl"> Favorite Event </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white font-bold uppercase">
      "Crafting Memories, Creating Moments: Your Event, Our Expertise!"
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
        href='#'
          id="scrollButton"
          className="py-3  px-4 inline-flex justify-center mx-auto items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 hover:-translate-y-1 hover:scale-110 duration-300 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Banner