export type ProjectsDetailsProps = {
  detailsProject: DetailsProjectType;
};

export type DetailsProjectType = {
  body: string[];
  category: string[];
  excerpt: string;
  id: number;
  image: string;
  title: string;
};
