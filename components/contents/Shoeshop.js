import LiveDemoBtn from "../shared/LiveDemoBtn";
import RepoBtn from "../shared/RepoBtn";
import { ExpressJsIcon, MongoDbIcon, NodeJsIcon, ReactJsIcon, ReduxIcon, TailwindCssIcon } from "../shared/svgIcon";

const Shoeshop = () => {
  return (
    <div id="shoeshop" className="pt-4">
      <div className="mt-16 flex flex-col md:flex-row gap-8">
        <div className="group cursor-pointer relative md:w-[60%] md:max-w-[48rem] self-start border-4 border-[#fb8500] rounded-md shadow-lg shadow-black">
          <img src="/shoeshop.png" alt="shoeshop" />
          <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-slate-300/40 justify-center items-center">
            <LiveDemoBtn link="https://shoeshop.cyclic.app" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:w-[40%]">
          <h3 className="uppercase text-lg font-semibold">Shoeshop</h3>
          <div>
            <p>Simple online shop that I have built from the scratch. In this project I learn many things from frontend to backend, such as:</p>
            <ol className="list-disc list-inside overflow-hidden">
              <li>Built fully responsive frontend UI using Tailwind CSS and React JS</li>
              <li>Using Redux Toolkit for client state, and React Query for server state management</li>
              <li>Built Rest API using Express JS</li>
              <li>Using MongoDB Atlas for the database, and Cloudinary for image hosting</li>
              <li>Built Authentication System using JWT</li>
              <li>Built many features, like product filtering, customer cart, admin dashboard to manage products, users, and orders, etc</li>
              <li>Deploy app to cyclic.sh</li>
            </ol>
          </div>
          <div className="flex gap-2">
            <LiveDemoBtn link="https://shoeshop.cyclic.app" />
            <RepoBtn link="https://github.com/ricky-gunawan/shoeshop" />
          </div>
          <div className="mt-4 flex flex-col gap-2 items-center">
            <p className="text-lg">Technology used:</p>
            {/* <div className="flex gap-4 items-center flex-wrap">
          <TailwindCssIcon />
          <ReactJsIcon />
          <ReduxIcon />
          <NodeJsIcon />
          <ExpressJsIcon />
          <MongoDbIcon />
        </div> */}
            <div className="text-center">Tailwind CSS, React JS, Redux, React Query, Express JS, MongoDB, Cloudinary</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoeshop;
