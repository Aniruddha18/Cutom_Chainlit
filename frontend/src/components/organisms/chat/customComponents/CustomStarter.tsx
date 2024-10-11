import { Fade, Grid, Stack } from '@mui/material';

import BotIcon from 'assets/bot';

import Starter from '../welcomeScreen/starter';
import { startersData } from './starter.data';

const CustomStarter = () => {
  return (
    <Fade in={true}>
      <Stack
        position="absolute"
        width="100%"
        height="100%"
        mx="auto"
        zIndex={1}
        left={0}
        right={0}
        sx={{ overflowY: 'auto' }}
        maxWidth="min(48rem, 80vw)"
        justifyContent={'center'}
        alignItems="center"
        gap={6}
        px={2}
        boxSizing={'border-box'}
      >
        <Stack>{<BotIcon />}</Stack>
        <Grid container spacing={2} minHeight={100} justifyContent="center">
          {startersData?.map((starter, i) => (
            <Fade in={true} timeout={i * 300} key={i}>
              <Grid item xs={6} sm={3}>
                <Starter starter={starter} />
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Stack>
    </Fade>
  );
};

export default CustomStarter;
