export type Project = {
  image: string;
  technologies: string[];
  desc: string;
  title: string;
  features: string[];
  demoLink?: string;
  githubLink: GithubLink;
};

export enum RepoType {
  CLIENT = "Client",
  SERVER = "Server",
}

export type GithubLink = { link: string; type: RepoType }[] | string;
