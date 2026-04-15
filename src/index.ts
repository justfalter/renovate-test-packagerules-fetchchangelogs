import chalk from 'chalk';
import { log } from 'grunt';
import lodash from 'lodash';
import pThrottle from 'p-throttle';

const throttle = pThrottle({
  limit: 1,
  interval: 1000,
});

export const getRandomNumber = () : number => {
  return throttle(() => {
    log.warn(chalk.green('Hello, world!'));
    return lodash.random(1, 10);
  })();
};