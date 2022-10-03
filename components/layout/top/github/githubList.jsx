import Image from "next/image";
import Link from "next/link";

export function GithubList(props) {
  const githubProps = props.apiprops.githubRepos;
  console.log(githubProps);

  return (
    <ul>
      {githubProps.map((githubRepo) => (
        <li className="my-10" key={githubRepo.id}>
          <Link href={githubRepo.url}>
            <a target="_blank">
              <p className="text-lg font-bold">{githubRepo.name}</p>
              <p>{githubRepo.description}</p>

              <div className="flex items-center mt-2">
                <span className="flex mr-2 items-center">
                  <Image src="/star.png" alt="star" width={22} height={20} />

                  <p className="ml-2">{githubRepo.forkCount}</p>
                </span>
                <span className="flex">
                  <Image src="/fork.png" alt="star" width={22} height={20} />
                  <p className="ml-2">{githubRepo.stargazerCount}</p>
                </span>
              </div>

              <div className="w-full bg-gray rounded-full h-2.5 mt-4">
                <span className="flex h-full w-full overflow-hidden rounded-md">
                  {githubRepo.languages.edges.map((language) => {
                    return (
                      <span
                        // className=" h-2.5 rounded-full"
                        key={language.node.name}
                        style={{
                          width: `${
                            (language.size / githubRepo.languages.totalSize) *
                            100
                          }%`,
                          backgroundColor: `${language.node.color}`,
                        }}
                      ></span>
                    );
                  })}
                </span>
              </div>

              <div className="flex mt-4">
                {githubRepo.languages.edges.map((language) => {
                  return (
                    <div
                      // className=" h-2.5 rounded-full"
                      className="flex items-center mr-2"
                      key={language.node.name}
                    >
                      <span
                        className="rounded-full w-4 h-4 mr-2"
                        style={{
                          backgroundColor: `${language.node.color}`,
                        }}
                      ></span>
                      <span className="mr-2"> {language.node.name}</span>
                      <span>
                        {Math.round(
                          (language.size / githubRepo.languages.totalSize) *
                            100 *
                            100
                        ) / 100}
                        %
                      </span>
                    </div>
                  );
                })}
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
