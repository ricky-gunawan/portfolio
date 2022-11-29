import RepoBtn from "../shared/RepoBtn";
import { ReactNativeIcon, ReduxIcon, TailwindCssIcon } from "../shared/svgIcon";

const SimpleNote = () => {
  return (
    <div id="simple-note" className="mt-32 pt-4 flex flex-col md:flex-row gap-8">
      <div className="mockup-phone border-[#fb8500] max-w-[18rem] self-start shadow-lg shadow-black">
        <div className="camera"></div>
        <div className="display">
          <img src="/android-1_home.png" alt="android-app" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="uppercase text-lg font-semibold">Simple Note Android App</h3>
        <p>Simple app to keep notes. You can create, search, and delete note. In this project I learned the basics of react native</p>
        <div className="flex gap-6">
          <a href="/simple-note.apk" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-[#d87503] border-2 border-slate-300">
            Download APK
          </a>
          <RepoBtn link="https://github.com/ricky-gunawan/react-native-simple-note" />
        </div>
        <div className="mt-4 flex flex-col gap-2 items-center">
          <p className="text-lg">Technology used:</p>
          {/* <div className="flex gap-4 items-center">
            <ReactNativeIcon />
            <ReduxIcon />
            <TailwindCssIcon />
            <p className="text-sm">React Native Async Storage</p>
          </div> */}
          <div>React Native, Redux, Tailwind CSS, React native Async Storage</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleNote;
