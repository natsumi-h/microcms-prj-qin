// import { Button } from "../button";
import { PortfolioList } from "./portfolioList";

export function Portfolio() {
  return (
    <div>
      <ul className="my-10 md:flex md:gap-x-5">
        <PortfolioList
          url="https://www.google.com/"
          imgsrc="/Thumbnail.png"
          title="portfoliotitle 1"
          excerpt="excerpt 1 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date1 2022/08/11"
        />
        <PortfolioList
          url="https://www.google.com/"
          imgsrc="/Thumbnail.png"
          title="portfoliotitle 2"
          excerpt="excerpt 2 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date2 2022/08/11"
        />
        <PortfolioList
          url="https://www.google.com/"
          imgsrc="/Thumbnail.png"
          title="portfoliotitle 3"
          excerpt="excerpt 3 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date3 2022/08/11"
        />
        <PortfolioList
          url="https://www.google.com/"
          imgsrc="/Thumbnail.png"
          title="portfoliotitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
      </ul>

      {/* <Button /> */}
    </div>
  );
}
