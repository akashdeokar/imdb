import React from "react";

const Watchlist = () => {
  let movies = [
    {
      adult: false,
      backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
      id: 619930,
      title: "Narvik",
      original_language: "no",
      original_title: "Kampen om Narvik",
      overview:
        "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
      poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
      media_type: "movie",
      genre_ids: [10752, 18, 36, 28],
      popularity: 321.063,
      release_date: "2022-12-25",
      video: true,
      vote_average: 7.406,
      vote_count: 53,
    },
    {
      adult: false,
      backdrop_path: "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
      id: 804095,
      title: "The Fabelmans",
      original_language: "en",
      original_title: "The Fabelmans",
      overview:
        "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      poster_path: "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
      media_type: "movie",
      genre_ids: [18],
      popularity: 163.3,
      release_date: "2022-11-11",
      video: false,
      vote_average: 8.02,
      vote_count: 561,
    },
    {
      adult: false,
      backdrop_path: "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
      id: 1035806,
      title: "Detective Knight: Independence",
      original_language: "en",
      original_title: "Detective Knight: Independence",
      overview:
        "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
      poster_path: "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
      media_type: "movie",
      genre_ids: [28, 53, 80],
      popularity: 119.407,
      release_date: "2023-01-20",
      video: false,
      vote_average: 6.6,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
      id: 555604,
      title: "Guillermo del Toro's Pinocchio",
      original_language: "en",
      original_title: "Guillermo del Toro's Pinocchio",
      overview:
        "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
      poster_path: "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
      media_type: "movie",
      genre_ids: [16, 14, 18],
      popularity: 754.642,
      release_date: "2022-11-18",
      video: false,
      vote_average: 8.354,
      vote_count: 1694,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center mx-auto w-[15rem] h-[3rem] bg-blue-400 rounded-xl text-white">
        All Genres
      </div>
      <div className="flex justify-center my-4">
        <input
          className="px-4 justify-center text-lg h-[3rem] w-[18rem] bg-gray-200 outline-none"
          type="text"
          placeholder="Search for Movies"
        />
      </div>
      <div className="border m-8 rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-900 text-center border-b-2">
            <th>Name</th>
            <th className="flex justify-center">
              <div className="p-2">
                <i class="fa-solid fa-arrow-up" />
              </div>
              <div className="p-2">Ratings</div>
              <div className="p-2">
                <i class="fa-solid fa-arrow-down" />
              </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
            <th></th>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr className="border-b-2 text-center">
                <td className="flex items-center px-6 py-4">
                  <img
                    className="w-[8rem] aspect-[4/3]"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                  <div className="mx-4">{movie.title}</div>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.popularity}</td>
                <td>Action</td>
                <td className="text-red-600 hover:cursor-pointer focus:text-black-600">
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
