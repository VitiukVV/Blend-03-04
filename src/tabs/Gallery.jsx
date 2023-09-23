import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

import React, { useState, useEffect } from 'react';
import { async } from 'q';

export const Gallery = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    if (!searchValue) return;

    getImages();
  }, [searchValue, page]);

  const getImages = async () => {
    try {
      const { photos, total_results } = await ImageService.getImages({
        query: searchValue,
        page,
      });
      setPhoto(photos);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const onSubmit = value => {
    setSearchValue(value);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}></SearchForm>
      <Grid>
        <GridItem>
          <CardItem></CardItem>
        </GridItem>
      </Grid>
      <Button></Button>
    </>
  );
};
