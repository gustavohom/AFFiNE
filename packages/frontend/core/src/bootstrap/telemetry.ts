import { sentry, tracker } from '@affine/track';

sentry.disable();
tracker.opt_out_tracking();
