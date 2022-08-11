export function Section(props) {
  return (
    <section className=" pb-20 pt-20 px-5">
      <h2 className="font-bold text-5xl text-zinc-800">{props.title}</h2>
      <div className="">devider</div>
      <div>{props.content}</div>
    </section>
  );
}
