import { GitHubIcon } from "./svgIcon";

const RepoBtn = ({ link }) => {
  return (
    <a href={link} target="blank" className="flex items-center gap-1 text-white uppercase bg-[#023047] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-black border-2 border-[#fb8500]">
      <span>Repository</span>
      <GitHubIcon fill="white" width="15" height="15" />
    </a>
  );
};
export default RepoBtn;
