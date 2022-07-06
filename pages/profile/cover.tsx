import { Card, Grid, Typography } from '@epsor/flamingo';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    id: string,
    name : string,
    logo: string,
    risk: number,
    volatility: number,
    performance: number
}

const Cover = ({id, name, logo, risk, volatility, performance} :Props) => (
  <Card key={id}>
    <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={3}>
      <Grid item key={1}>
        <Image alt="test" src={`/${logo}.svg`} width="80px" height="80px"/>
      </Grid>
      <Grid item sm={2} key={1}>
        <Typography variant="h5">{name}</Typography>
      </Grid>
      <Grid item sm={2} key={1}>
        <Typography variant="caption" paragraph>
          Volatilité
        </Typography>
        <Typography variant="body2">
          {volatility} /100
        </Typography>
      </Grid>
      <Grid item sm={2} key={1}>
        <Typography variant="caption" paragraph>
          Risque
        </Typography>
        <Typography variant="body2">
          {risk} /6
        </Typography>
      </Grid>
      <Grid item sm={2} key={1}>
        <Typography variant="caption" paragraph>
          Performance
        </Typography>
        <Typography variant="body2">+ {performance} %</Typography>
      </Grid>
      <Grid item sm={2} key={1}>
        <Link href={`/profile/${id}`} >
          <Typography>{'>'}</Typography>
        </Link>
      </Grid>
    </Grid>
  </Card>
);

export default Cover;
