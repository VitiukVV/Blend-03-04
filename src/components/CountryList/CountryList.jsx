import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, country, flag }) => {
        return (
          <GridItem key={id}>
            <Link to={`${routes.COUNTRY}/${id}`}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
