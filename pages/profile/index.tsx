import { Grid, Typography } from '@epsor/flamingo';
import type { NextPage } from 'next';
import List from './list';

const Index: NextPage = () => (
  <Grid container spacing={2} columns={2} sx={{ marginTop : "100px", padding:'0 50px' }} columnSpacing={3}>
    <Grid item xs={2} sm={4} md={4} key={1}>
      <Typography>
        Profils éligibles pour : <b>PEI EPSOR</b>
      </Typography>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={1}>
      <List />
    </Grid>
  </Grid>
);

export default Index;
