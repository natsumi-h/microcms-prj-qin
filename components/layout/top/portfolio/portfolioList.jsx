export function PortfolioList(props) {
    return (
    <li className="my-10">
       <p>{props.img}</p>
       <p className="font-bold text-3xl"> {props.title}</p>
       <p>{props.excerpt}</p>
       <p>{props.date}</p>
    </li>
    );
  }
  