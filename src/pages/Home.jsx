import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useCallback, useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [arrCountries, setArrCountries] = useState([]);

  const fetchCountries = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getCountries();
      setArrCountries(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <Section>
      <Container>
        {arrCountries.length > 0 && <CountryList countries={arrCountries} />}
        {isLoading && <Loader />}
        {isError && <Heading>Not found</Heading>}
      </Container>
    </Section>
  );
};
