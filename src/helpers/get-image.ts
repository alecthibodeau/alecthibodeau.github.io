/* Interfaces */
import ContactImages from '../interfaces/ContactImages';
import ProjectImages from '../interfaces/ProjectImages';

export function getImage(key: string, images: ContactImages | ProjectImages) {
  return images[key as keyof typeof images];
};
