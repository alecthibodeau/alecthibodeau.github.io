interface ProjectItem {
  id: string;
  name: string;
  description?: string,
  infoText: string;
  frontEndTechnology: string;
  backEndTechnology?: string;
  altText: string;
  website: string;
  clientRepo: string;
  apiRepo?: string;
  image: string;
}

export default ProjectItem;
