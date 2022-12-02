import LiveDemoBtn from "../shared/LiveDemoBtn";
import RepoBtn from "../shared/RepoBtn";
import { ReactJsIcon, TailwindCssIcon } from "../shared/svgIcon";

const WebUIComponents = () => {
  return (
    <div id="ui-components" className="pt-8 mt-16 flex flex-col md:flex-row-reverse gap-8">
      <div className="group cursor-pointer relative md:w-[60%] md:max-w-[48rem] self-start border-4 border-[#fb8500] rounded-md shadow-lg shadow-black">
        <img src="/web-ui-components.png" alt="web ui components library" />
        <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-slate-300/40 justify-center items-center">
          <LiveDemoBtn link="https://ricky-gunawan.github.io/personal-ui-components" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:w-[40%]">
        <h3 className="uppercase text-lg font-semibold">web ui components</h3>
        <p>On this website, I have built common web UI components, such as button, modal, card, carousel, etc. In this project, I learned a lot about CSS.</p>
        <div className="flex gap-6">
          <LiveDemoBtn link="https://ricky-gunawan.github.io/personal-ui-components" />
          <RepoBtn link="https://github.com/ricky-gunawan/personal-ui-components" />
        </div>
        <div className="mt-4 flex flex-col gap-2 items-center">
          <p className="text-lg">Technology used:</p>
          {/* <div className="flex gap-4 items-center">
            <TailwindCssIcon />
            <ReactJsIcon />
          </div> */}
          <div>React JS, Tailwind CSS</div>
        </div>
      </div>
    </div>
  );
};

export default WebUIComponents;
