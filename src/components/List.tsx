import { useCallback, useMemo, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchPhotos } from '../services/api';

import Card from './Card';

const List: React.FC = () => {
  const { data, error, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: ({ pageParam }) => fetchPhotos(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.nextPage
  });

  const list = useMemo(() => data?.pages.flatMap(page => page.results) ?? [], [data]);

  const handleObserver = useRef<IntersectionObserver>();

  const lastElement = useCallback(
    (element: HTMLElement | null) => {
      if (isLoading) return;

      if (handleObserver.current) {
        handleObserver.current.disconnect();
      }

      handleObserver.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          fetchNextPage();
        }
      });

      if (element) handleObserver.current.observe(element);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, hasNextPage]
  );

  if (isLoading) return <h2>Just a second...</h2>;

  if (error) return <h2>Oops! Something went wrong</h2>;

  return (
    <>
      <div className='list'>
        {list.map((item, i) => (
          <Card key={item.id} photo={item} ref={list.length === i + 1 ? lastElement : null} />
        ))}
      </div>

      {isFetching && <h2>Hold on...</h2>}

      {!hasNextPage && <h2>There are no more photos</h2>}
    </>
  );
};

export default List;
