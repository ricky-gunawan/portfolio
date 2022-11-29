const LiveDemoBtn = ({ link }) => {
  return (
    <a href={link} target="blank" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-[#d87503] border-2 border-slate-300">
      Live Demo
    </a>
  );
};

export default LiveDemoBtn;
