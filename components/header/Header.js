const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse p-8 bg-white h-[80vh] justify-center items-center gap-16">
        <img src={"/photo-profile.jpg"} className="rounded-md w-[10rem] md:w-[12rem] border-4 border-[#023047]" />
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Ricky Indra Gunawan</h1>
          <p className="text-xl">I am a frontend developer looking for opportunities in the industry</p>
          <div className="flex justify-center gap-6">
            <a href="#portfolio" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg hover:bg-[#d87503] border-2 border-slate-300">
              my portfolio
            </a>
            <a href="#contact" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg hover:bg-[#d87503] border-2 border-slate-300">
              contact me
            </a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#023047"
          fillOpacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Header;
