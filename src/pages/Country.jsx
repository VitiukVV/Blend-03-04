import { Section, Container, CountryInfo, Loader } from 'components';
import { useCallback, useState, useEffect } from 'react';
import { fetchCountry } from 'service/country-service';
import { useParams } from 'react-router-dom';

export const Country = () => {
  const [country, setCounrty] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const { id } = useParams();
  const fetchCountryId = useCallback(async () => {
    setIsLoader(true);
    try {
      const data = await fetchCountry(id);
      console.log(data);
      setCounrty(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoader(false);
    }
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchCountryId();
  }, [fetchCountryId, id]);
  return (
    <Section>
      <Container>
        {isLoader && <Loader />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
