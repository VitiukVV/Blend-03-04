import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

import React, { useState, useEffect, useCallback } from 'react';

export const Gallery = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const getNormalizedPhotos = arr => {
    return arr.map(({ id, alt, src, avg_color }) => ({
      id,
      alt,
      src,
      avg_color,
    }));
  };

  const getImages = useCallback(async () => {
    try {
      const { photos, total_results } = await ImageService.getImages({
        query: searchValue,
        page,
      });
      setPhoto(prev => [...prev, ...getNormalizedPhotos(photos)]);
      setShowBtn(page < Math.ceil(total_results / 15));
    } catch ({ message }) {
      console.log(message);
    }
  }, [searchValue, page]);

  useEffect(() => {
    if (!searchValue) return;

    getImages();
  }, [searchValue, getImages]);

  const onSubmit = value => {
    setPhoto([]);
    setPage(1);
    setSearchValue(value);
  };

  const handlerClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}></SearchForm>
      {photo.length > 0 && (
        <Grid>
          {photo.map(({ id, alt, src, avg_color }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={src.small} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
      )}
      {showBtn && <Button onClick={handlerClick}>Load more</Button>}
    </>
  );
};
