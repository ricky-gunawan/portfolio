import { GitHubIcon, GmailIcon, LinkedInIcon } from "../shared/svgIcon";

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col justify-center items-center gap-2 bg-[#ffffff] text-center">
      <h2 className="text-2xl font-semibold">Reach Me On:</h2>
      <div className="flex flex-col gap-2">
        <a href="https://www.linkedin.com/in/ricky-indra-gunawan-68a1281a1/" target="blank" className="flex items-center gap-2 hover:underline">
          <LinkedInIcon width="35" height="30" />
          <span>Ricky Indra Gunawan</span>
        </a>
        <a href="mailto:rickyindra006@gmail.com" target="blank" className="flex items-center gap-2 hover:underline">
          <GmailIcon />
          <span className="ml-1">rickyindra006@gmail.com</span>
        </a>
        <a href="https://github.com/ricky-gunawan" target="blank" className="flex items-center gap-2 hover:underline">
          <GitHubIcon width="31" height="30" />
          <span className="ml-1">ricky-gunawan</span>
        </a>
      </div>
      <p className="my-12">&copy; 2022, Ricky Indra Gunawan</p>
      {/* <div className="flex items-center gap-2">
        <span>Built with</span>
        <NextJsIcon />
      </div> */}
    </footer>
  );
};

export default Footer;
