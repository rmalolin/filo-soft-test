import { Photo } from '../types/Photo';

export const fetchPhotos = async (page: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`
  );

  const results = (await response.json()) as Photo[];

  return {
    results,
    nextPage: results.length ? page + 1 : null
  };
};
