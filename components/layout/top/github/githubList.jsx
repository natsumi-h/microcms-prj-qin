export function GithubList(props) {
  const githubProps = props.apiprops.githubRepos;
  console.log(githubProps);

  return (
    <ul>
      {githubProps.map((githubRepo) => (
        <li className="my-10" key={githubRepo.id}>
          <p>{githubRepo.name}</p>
          <p>{githubRepo.description}</p>
          <p>forkcount:{githubRepo.forkCount}</p>
          <p>stargazercount:{githubRepo.stargazerCount}</p>

          {githubRepo.languages.edges.map((language) => {
            return (
              <div key={language.node.name} className="w-full bg-gray rounded-full h-2.5 mb-4">
                <div
                  className=" h-2.5 rounded-full"
                  style={{ width: `${(language.size / githubRepo.languages.totalSize) * 100}%`, backgroundColor:`${language.node.color}`}}
                ></div>
              </div>
            );
          })}
        </li>
      ))}
    </ul>
  );
}
