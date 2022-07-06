import { Card, Grid, Typography } from '@epsor/flamingo';
import type { NextPage } from 'next';
import Image from 'next/image';

import profiles from '../../data/profiles.json';

type Props = { logo: string; name: string; volatility: number; risk: Array<string>; performance: number };

const Details: NextPage<Props> = ({ logo, name, volatility, risk, performance }: Props) => (
  <div style={{ padding: 40 }}>
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} columns={4}>
      <Grid item md={4}>
        <Card>
          <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={3}>
            <Grid item key={1}>
              <Image alt="test" src={`/${logo}.svg`} width="80px" height="80px" />
            </Grid>

            <Grid item sm={2} key={1}>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="caption">
                Volatilité :{' '}
                <Typography variant="body2" gutterBottom>
                  {volatility} /100
                </Typography>
              </Typography>

              <Typography variant="caption">
                Risque :{' '}
                {risk.map((value) => (
                  <Image key={value} alt="chili" src={`/chili-${value}.svg`} width="10px" height="10px" />
                ))}
              </Typography>
            </Grid>

            <Grid item sm={2} key={1}>
              <Typography variant="caption" paragraph>
                Performance
              </Typography>
              <Typography variant="body2">+ {performance} %</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card>
          <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={3}>
            <Grid item md={4}>
              <Typography variant="h4">Performance passée</Typography>
            </Grid>
            <Grid item md={12}>
              <Card sx={{ borderBlock: '2px solid grey' }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={3}>
                  <Grid item>
                  <Typography variant='h4'>Totale</Typography>
                    <Image
                      alt="chart"
                      src="/chart-full.svg"
                      width="500vw"
                      height="500vh"
                      style={{ textAlign: 'center' }}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

Details.getInitialProps = async (ctx) => {
  const profile = profiles.find(({ uuid }) => uuid === ctx.query.id);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { logo, name, volatility, risk, performance } = profile!;

  const riskChilies = [...Array(6).keys()].map((value) => {
    if (risk > value) {
      return 'full';
    }
    return 'empty';
  });
  return { logo, name, volatility, risk: riskChilies, performance };
};

export default Details;
