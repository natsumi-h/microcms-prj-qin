import { PageTitle } from "../components/layout/page/title";
import { Portfolio } from "../components/layout/page/portfolio/portfolio";

export default function PortfolioPage() {
  return (
    <div className="pb-20 pt-20 px-5 md:px-40">
      <PageTitle title="Portfolio" />
      <Portfolio />
    </div>
  );
}
