import CustomerCRUD from "./CustomerCRUD";
import Shoeshop from "./Shoeshop";
import SimpleNote from "./SimpleNote";
import WebUIComponents from "./WebUIComponents";

const Contents = () => {
  return (
    <>
      <div id="portfolio" className="px-8 bg-[#023047] text-white">
        <h2 className="text-3xl font-semibold text-center">Projects that I have personally built</h2>
        <Shoeshop />
        <CustomerCRUD />
        <SimpleNote />
        <WebUIComponents />
      </div>
      <svg className="bg-[#023047]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,224L120,229.3C240,235,480,245,720,229.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
    </>
  );
};

export default Contents;
