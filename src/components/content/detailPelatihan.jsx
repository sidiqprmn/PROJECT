import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../layout/navigationBar/navigationBar";
import TransactionBox from "../kontenAll/transaksi";
import { Modal, Rate } from "antd";
import Ulasan from "../kontenAll/ulasan";
import FooterColumn from "../layout/footer/footer";

const DetailPelatihan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [shownReviews, setShownReviews] = useState(2);

  useEffect(() => {
    // Ganti URL dengan URL backend Anda
    axios
      .get("http://localhost:3100/comments")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data komentar:", error);
      });
  }, []);
  return (
    <div className="bg-gray-200">
      <NavigationBar />
      <TransactionBox />

      <div className="mt-6 ml-10">
        <h1 className="font-extrabold text-2xl">Detail Pelatihan</h1>
      </div>

      <div className="flex flex-col text-lg ml-12 mt-7">
        <h2 className="font-bold">Judul Pelatihan</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
      </div>

      <div className="flex flex-col ml-12 mt-20">
        <h2 className="font-bold">Tentang Pelatihan</h2>
        <p className="text-gray-600 mt-2 whitespace-no-wrap max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum
          enim quis ligula laoreet convallis. Fusce sodales ligula ut nibh
          finibus, at ultricies odio interdum. Etiam ac sapien euismod,
          fringilla lacus nec, feugiat massa. Suspendisse in arcu enim. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Fusce aliquet malesuada quam, ut hendrerit risus
          eleifend in. Nulla facilisi. Aliquam tincidunt odio nunc, sit amet
          feugiat quam convallis nec. Morbi laoreet nunc sed lacus elementum
          lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Donec varius libero augue, eget varius
          tellus cursus non.
        </p>
        <div className="font-extrabold text-lg mt-20">Konten Preview</div>
        <div className="max-w-4xl h-[600px] p-4 bg-white border border-black shadow rounded flex">
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

          <div className="w-[80%] h-full ml-3 p-4 bg-white shadow rounded border border-black">
            <div className="w-full h-1/2 mb-2 p-4 bg-white shadow rounded border border-black"></div>
            <div className="w-full h-1/2  p-4 bg-white shadow rounded border border-black"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-lg ml-12 mt-20">
        <h2 className="font-bold">Target Audiens</h2>
        <p className="text-gray-600">Internal NusaLearning</p>
      </div>

      <div className="flex flex-col text-lg ml-12 mt-7">
        <h2 className="font-bold">Kategori</h2>
        <p className="text-gray-600">Kategori A, Kategori B</p>
      </div>

      <div className="flex flex-col text-lg ml-12 mt-7">
        <h2 className="font-bold">Masa berlaku lisensi</h2>
        <p className="text-gray-600">Selamanya</p>
      </div>

      <div className="flex flex-col text-lg ml-12 mt-7">
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

      <div className="flex justify-center mb-24">
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
            {reviews.map((review, index) => (
              <Ulasan
                key={index}
                imageUrl={review.imageUrl}
                name={review.user}
                content={review.comment}
                replies={review.replies}
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
      <FooterColumn />
    </div>
  );
};

export default DetailPelatihan;
