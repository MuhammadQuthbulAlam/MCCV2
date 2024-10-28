import HeroImage from "../assets/images/MCC.jpg";
import AboutImage from "../assets/images/MCC2.jpg";
import Profile1 from "../assets/images/mochan1.jpg";
import org from "../assets/images/org.png";
import "./Contact.css";
import Swal from "sweetalert2";
import Model from "react-modal";
import { useState } from "react";
{
  /*import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";*/
}
import slide_image_1 from "../assets/images/MCC3.jpg";

const HomePage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c26ac3b5-3e36-48bf-a2eb-00635bd77bba");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Berhasil!",
        text: "Pesan Berhasil Terkirim!",
        icon: "success",
      });
    }
  };
  const [visible, setVisible] = useState(false);
  // const [modal, setModal] = useState(false);
  const customStyles = {
    content: {
      zIndex: 9999,
    },
  };
  return (
    <div className="homepage pb-10" id="home">
      <div className="container mx-auto px-9 xl:px-20 lg:px-20">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/8 mb-7 text-justify">
              Gedung Creative Center merupakan bentuk stimulasi yang diberikan
              kepada pelaku kreatif di Jawa Barat, terutama kepada generasi muda
              guna menunjang industri kreatif dalam meningkatkan ekonomi.
            </p>
            <a
              href="#about"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto  md:m-0 rounded-lg"
            />
          </div>
        </div>
        {/*About*/}
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="Aboout Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto rounded-lg"
            />
          </div>
          <div className="pt-20 box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Gedung Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/loose text-justify">
              <span className="font-bold">Gedung Creative Center</span> telah
              berdiri di Kabupaten Majalengka. Bangunan yang ditujukan sebagai
              ruang industri kreatif tersebut diresmikan pada 11 Januari 2023.
              Dalam proses peresmian, hadir Menteri Koperasi dan Usaha Kecil
              Menengah Teten Masduki, Wakil Gubernur Jabar Uu Ruzhanul Ulum,
              Bupati Majalengka Karna Sobahi, serta sejumlah tokoh Forkopimda.
              Kegiatan peresmian tersebut juga dihadiri Kepala Dinas Pariwisata
              dan Kebudayaan Provinsi Jawa Barat Benny Bachtiar yang diwakili
              Kepala Bidang Industri Pariwisata Rispiaga. Menurut Menteri
              Koperasi UMKM, keberadaan Gedung Creative Center Majalengka mejadi
              sebuah solusi dari ancaman resesi ekonomi. Masyarakat khususnya
              generasi muda bisa memanfaatkan Gedung Creative Center ini sebagai
              sarana pengembangan industri kreatif serta pemasaran produk-produk
              lokal.
            </p>
          </div>
        </div>
        {/*Visi & Misi*/}
        <div className="box pt-32" id="visimisi">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Visi & Misi <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <div className="text-center bg-white shadow rounded-lg w-auto h-auto items-center">
            <h3 className="pt-1 text-2xl font-medium text-sky-400">Visi</h3>
            <p className="text-center px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              fugit animi cupiditate quia ad maxime. Quidem recusandae iste
              placeat cum fugit esse quia, a eaque architecto repudiandae
              maiores animi voluptatum.
            </p>
            <h3 className="pt-5 text-2xl font-medium text-sky-400">Misi</h3>
            <p className="text-center px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              quod doloremque odit deleniti incidunt dicta porro corporis at
              aliquid possimus esse nobis. Mollitia quod voluptatibus nihil
              culpa vitae sunt, nemo omnis expedita facilis cumque velit illum,
              assumenda tenetur deleniti aperiam unde. Sed facere ullam
              architecto, dolores ipsa nobis itaque ex.
            </p>
          </div>
        </div>
        {/*Struktur Organisasi*/}
        <div className="pt-32" id="organisasi">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Struktur <span className="font-bold text-sky-400">Organisasi</span>
          </h1>
          <p className="pt-1 text-center">
            Struktur Organisasi Majalengka Creative Center
          </p>
          <img
            src={org}
            alt="Struktur Organisasi"
            className="mt-10 text-center lg:w-[500px] w-[400px] md:m-50 mx-auto rounded-lg shadow"
          />
        </div>
        {/*Fasilitas*/}
        <div className="pt-32" id="fasilitas">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Fasilitas <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <p className="pt-1 text-center">
            Fasilitas Majalengka Creative Center
          </p>
          <div className="fasilitas-box pt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
          </div>
          {/*Swiper Start
          <div className="container mt-10 ">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container relative -z-30"
            >
              <SwiperSlide className="z-10">
                <img
                  src={slide_image_1}
                  alt="slide_image"
                  className="h-72 w-96 mx-auto rounded-lg"
                />
                <h4 className="text-center font-bold">Ruang Kantor</h4>
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={slide_image_2}
                  alt="slide_image"
                  className="h-72 w-96 mx-auto rounded-lg"
                />
                <h4 className="text-center font-bold">Ruang Kantor</h4>
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={slide_image_3}
                  alt="slide_image"
                  className="h-72 w-96 mx-auto rounded-lg"
                />
                <h4 className="text-center font-bold">Ruang Kantor</h4>
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={slide_image_4}
                  alt="slide_image"
                  className="h-72 w-96 mx-auto rounded-lg"
                />
                <h4 className="text-center font-bold">Ruang Kantor</h4>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src={slide_image_5}
                  alt="slide_image"
                  className="h-72 w-96 mx-auto rounded-lg"
                />
                <h4 className="text-center font-bold">Ruang Kantor</h4>
              </SwiperSlide>

              <div className="slider_controler mt-10">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-circle-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        Swiper End*/}
        </div>
        {/*Profile*/}
        <div className="profile pt-32 z-50" id="profile">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Profile <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <p className="text-center">Profile Ekonomi Kreatif</p>
          <div className="profile-box pt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model
                isOpen={visible}
                onRequestClose={() => setVisible(false)}
                style={customStyles}
              >
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Profile1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">M Quthbul Alam</h3>
              <p className=" text-base/loose">Landscape Photography</p>
              <button
                onClick={() => setVisible(true)}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Detail Info
              </button>
              {/*Model 3 Start*/}
              <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                <h2 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
                  Detail Info
                </h2>
                <img
                  src={Profile1}
                  alt="profile 2"
                  className="mx-auto h-80 w-64 rounded-lg"
                />
                <button
                  onClick={() => setVisible(false)}
                  className="flex mt-20 items-center px-5 mx-auto bg-red-400 py-1 rounded-full text-white font-bold hover:bg-red-500 transition-all mb-2"
                >
                  Close
                </button>
              </Model>
            </div>
            {/* Model 3 End */}
            {/* Profile 3 End*/}
          </div>
        </div>
        {/*Kontak*/}
        <div className="kontak pt-24" id="kontak">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Kontak <span className="font-bold text-sky-400">Kami</span>
          </h1>
          <section className="contact">
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Masukkan Nama Anda"
                  name="name"
                  required
                />
              </div>
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  className="field"
                  placeholder="Masukkan Email Anda"
                  name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label>Pesan Anda</label>
                <textarea
                  name="message"
                  className="field mess"
                  placeholder="Masukkan Pesan Anda"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex px-5 mx-0 bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
