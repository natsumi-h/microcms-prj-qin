export function Section(props) {
  const classContent = () => {
    if (props.half == "true") {
      return "pb-20 pt-20 px-5 md:w-6/12 md:px-40";
    } else {
      return " pb-20 pt-20 px-5 md:px-40";
    }
  };

  return (
    <section
      // className=" pb-20 pt-20 px-5 md:px-40"
      className={classContent()}
      apiprops={props.content.props.apiprops}
    >
      <h2 className="font-bold text-5xl text-zinc-800 font-avenir pb-3 border-b-gray border-solid border-b-2">
        {props.title}
      </h2>
      {props.content}
    </section>
  );
}
