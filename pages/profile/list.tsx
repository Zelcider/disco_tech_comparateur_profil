import { Grid } from '@epsor/flamingo';
import type { NextComponentType } from 'next';
import Cover from './cover';
import profiles from '../../data/profiles.json';

const List: NextComponentType = () => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={1}
    columns={{ xs: 2, sm: 4, md: 4 }}
  >
    {profiles.map(({ uuid, name, logo, risk, volatility, performance }) => (
      <Grid item xs={2} sm={4} md={4} key={uuid}>
        <Cover id={uuid} name={name} logo={logo} risk={risk} volatility={volatility} performance={performance} />
      </Grid>
    ))}
  </Grid>
);

export default List;
