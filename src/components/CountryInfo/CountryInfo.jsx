import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
  country: {
    flag,
    capital,
    countryName,

    languages = [],
    population,
  },
}) => {
  return (
    <CountryWrapper>
      <Flag>
        <Image src={flag} alt={countryName} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital.join(', ')}</Accent>
        </CountryCapital>

        <CountryTitle>{countryName}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};
