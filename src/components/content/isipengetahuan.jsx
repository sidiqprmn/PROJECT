import React, { useState } from "react";
import NavigationBar from "../layout/navigationBar/navigationBar";
import TransactionBox from "../kontenAll/transaksi";
import { Modal, Rate, Image } from "antd";
import Ulasan from "../kontenAll/ulasan";
import FooterColumn from "../layout/footer/footer";

const Isipengetahuan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [shownReviews, setShownReviews] = useState(2);
  const reviews = [
    {
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/assets/hacker.jpg",
      replies: [
        {
          name: "Jane Doe",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          name: "John Doe",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      name: "Mary Jane",
      imageUrl: "/assets/hacker.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      replies: [
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
      ],
    },
  ];

  const coment = [
    {
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/assets/hacker.jpg",
      replies: [
        {
          name: "Jane Doe",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          name: "John Doe",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      name: "Mary Jane",
      imageUrl: "/assets/hacker.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      replies: [
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
      ],
    },
    {
      name: "Peter Parker",
      imageUrl: "/assets/hacker.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      replies: [
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
      ],
    },

    {
      name: "Steve Roger",
      imageUrl: "/assets/hacker.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      replies: [
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
        {
          name: "Jane Doe",
          content: "Reply from Jane Doe",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-200">
      <NavigationBar />
      <div className="container">
        <div className="mt-6 ml-10">
          <h1 className="font-extrabold text-2xl">Judul Pelatihan</h1>
          <Image
            width={1300}
            height={500}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>

        <div className="flex">
          <div className="w-[240px] h-[600px] ml-10 mt-8 p-4 bg-white border border-black shadow rounded flex">
            <div className="w-[220px] h-full border border-black">
              <div className="font-bold text-lg mt-2 ml-3">Modul 1</div>
              <hr className=" border-black" />
              <div className="flex flex-col mt-8 ml-2">
                <div className="mb-4">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 1
                  </button>
                </div>
                <div className="mb-4">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 2
                  </button>
                </div>
                <div className="mb-4">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 3
                  </button>
                </div>
                <div className="mb-8">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 4
                  </button>
                </div>
              </div>
              <hr className=" border-black" />

              <div className="font-bold text-lg mt-2 ml-3">Modul 2</div>
              <hr className=" border-black" />
              <div className="flex flex-col mt-8 ml-2">
                <div className="mb-4">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 1
                  </button>
                </div>
                <div className="mb-4">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 2
                  </button>
                </div>
                <div className="mb-4">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 3
                  </button>
                </div>
                <div className="mb-8">
                  <button className="rounded-md border border-black w-[180px] text-left">
                    Sub Modul 4
                  </button>
                </div>
              </div>
              <hr className=" border-black" />
              <div className="font-bold text-lg mt-2 ml-3">Final Quis</div>
            </div>
          </div>

          <div className="flex flex-col ml-10">

          <div className="mt-2">
            <div className="w-[1020px] h-[198px] p-4 bg-white shadow rounded mt-7 text-sm">
            <div className="text-lg font-bold">Yang kamu dapatkan:</div>
              <div className="flex flex-col p-3 ">
                <li className="mb-2">4 menit total video pembelajaran</li>
                <li className="mb-2">5 bahan bacaan</li>
                <li className="mb-2">5 konten dapat diunduh</li>
                <li className="mb-2">Kuis yang dapat dikerjakan</li>
                <li>Sertifikat dapat diunduh</li>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-lg mt-7">
            <h2 className="font-bold">Ulasan</h2>
            <hr className="max-w-4xl border border-black" />
            {reviews.map((review, index) => (
              <Ulasan
                key={index}
                imageUrl={review.imageUrl}
                name={review.name}
                content={review.content}
                replies={review.replies}
              />
            ))}
          </div>
          <br />

          <div className="flex justify-center mt-14">
            <button
              className="border border-black hover:border-blue-800 hover:text-blue-800 rounded-xl w-56 h-6"
              onClick={() => setModalOpen(true)}
            >
              Lihat Semua Ulasan
            </button>
          </div>
          <Modal
            style={{
              top: 20,
            }}
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            footer={null}
            width={1000}
          >
            <div className="flex">
              <div className="flex-col">
                <div className="w-[332px] h-[190px] border-black p-4 bg-white border ml-20 shadow rounded">
                  <div className="text-center text-2xl mb-3">4.5</div>
                  <span className="flex justify-center text-4xl">
                    <Rate disabled defaultValue={4} />
                  </span>
                  <span>
                    <div className="text-center text-base mt-5">
                      4.5/5.0 (10 ulasan)
                    </div>
                  </span>
                </div>
                {coment.slice(0, shownReviews).map((watch, index) => (
                  <Ulasan
                    key={index}
                    name={watch.name}
                    imageUrl={watch.imageUrl}
                    content={watch.content}
                    replies={watch.replies}
                  />
                ))}
              </div>

              <div className="w-[332px]  h-[190px] p-4 bg-white border border-black flex flex-col mr-20 shadow rounded">
                <span className="flex">
                  <Rate disabled defaultValue={5} className="flex-grow" />
                  <div className="mt-2">50%</div>
                </span>
                <span className="flex">
                  <Rate disabled defaultValue={4} className="flex-grow" />
                  <div className="mt-2">50%</div>
                </span>
                <span className="flex">
                  <Rate disabled defaultValue={3} className="flex-grow" />
                  <div className="mt-2">0%</div>
                </span>
                <span className="flex">
                  <Rate disabled defaultValue={2} className="flex-grow" />
                  <div className="mt-2">0%</div>
                </span>
                <span className="flex">
                  <Rate disabled defaultValue={1} className="flex-grow" />
                  <div className="mt-2">0%</div>
                </span>
              </div>
            </div>

            <div className="flex justify-center mb-24">
              <button
                className="border border-black hover:border-blue-800 hover:text-blue-800 rounded-xl w-56 h-6"
                onClick={() => setShownReviews(shownReviews + 2)}
              >
                Tampilkan Lebih Banyak
              </button>
            </div>
          </Modal>
          </div>
        </div>
        <div className="border border-b-2">
                  
        </div>
      </div>
    </div>
  );
};

export default Isipengetahuan;
