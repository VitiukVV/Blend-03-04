import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams('');
  const searchValue = searchParam.get('search');

  const getCountriesByRegion = useCallback(async () => {
    setLoader(true);
    try {
      const data = await fetchByRegion(searchValue);
      setCountries(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  }, [searchValue]);

  const setSelectedRegion = value => {
    setSearchParam({ search: value });
  };

  useEffect(() => {
    if (!searchValue) return;
    getCountriesByRegion();
  }, [searchValue, getCountriesByRegion]);

  return (
    <Section>
      <Container>
        {loader && <Loader />}
        {error && <Heading>something get wrong</Heading>}
        <SearchForm setSelectedRegion={setSelectedRegion} />
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
