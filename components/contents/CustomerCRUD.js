import LiveDemoBtn from "../shared/LiveDemoBtn";
import RepoBtn from "../shared/RepoBtn";
import { ReactJsIcon, TailwindCssIcon } from "../shared/svgIcon";

const CustomerCRUD = () => {
  return (
    <div id="customer-crud" className="pt-8 mt-16 flex flex-col md:flex-row-reverse gap-8">
      <div className="group cursor-pointer relative md:w-[60%] md:max-w-[48rem] self-start border-4 border-[#fb8500] rounded-md shadow-lg shadow-black">
        <img src="/customer-crud.png" alt="customer crud app" />
        <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-slate-300/40 justify-center items-center">
          <LiveDemoBtn link="https://ricky-gunawan.github.io/frontend-crud/" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:w-[40%]">
        <h3 className="uppercase text-lg font-semibold">Customer CRUD App</h3>
        <p>This is an app for creating, Reading, Updating, and Deleting Customers with a confirmation modal. This app also has other features like searching, filtering, and sorting.</p>
        <div className="flex gap-6">
          <LiveDemoBtn link="https://ricky-gunawan.github.io/frontend-crud/" />
          <RepoBtn link="https://github.com/ricky-gunawan/frontend-crud/" />
        </div>
        <div className="mt-4 flex flex-col gap-2 items-center">
          <p className="text-lg">Technology used:</p>
          {/* <div className="flex gap-4 items-center">
            <TailwindCssIcon />
            <ReactJsIcon />
          </div> */}
          <div className="text-center">React JS, Tailwind CSS, Redux</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCRUD;
