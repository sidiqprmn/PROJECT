import React from "react";

const dummyData = [
  {
    title: "Course Javascript",
    imageSrc: "/assets/konten/konten1.jpg",
    description: "Pelatihan ini berisi pelatihan dasar mengenai bahasa javascript, untuk pengembangan aplikasi berbasis website sederhana maupun profesional.",
  },
  {
    title: "Course PHP",
    imageSrc: "/assets/konten/konten2.jpg",
    description: "Pelatihan ini berisi pelatihan dasar mengenai bahasa PHP.",
  },
  {
    title: "Course Python",
    imageSrc: "/assets/konten/konten3.jpg",
    description: "Pelatihan ini berisi pelatihan dasar mengenai bahasa Python, untuk pegembangan aplikasi dekstop maupun website.",
  },
  {
    title: "Apa itu programming",
    imageSrc: "/assets/konten/konten4.jpg",
    description: "Part pertama tentang pengertaian programming.",
  },
  {
    title: "Apa itu programming",
    imageSrc: "/assets/konten/konten5.jpg",
    description: "Lanjutan dari part sebelumnya mengenai apa itu programming, potensi programmer dan masalah pada programming.",
  },
  {
    title: "Tips belajar",
    imageSrc: "/assets/konten/konten6.jpg",
    description: "Tips belajar programming terutama programming website.",
  },
];

const CardObjek = () => {
  return (
    <div className="mt-[-80px] max-w p-[70px] bg-[#35526C] rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl blur-border">
      <div className="flex flex-wrap justify-center">
        {dummyData.map((data, index) => (
          <div key={index} className="mx-4 my-4 w-[300px] max-w-[300px] bg-[#35526C] rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl blur-border">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={data.imageSrc} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </a>
                <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800">
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardObjek;
