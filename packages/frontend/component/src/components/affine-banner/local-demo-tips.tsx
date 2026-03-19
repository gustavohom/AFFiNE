import { Button, IconButton } from '@affine/component/ui/button';
import { useI18n } from '@affine/i18n';
import { CloseIcon } from '@blocksuite/icons/rc';
import { cssVar } from '@toeverything/theme';
import { useCallback } from 'react';

import * as styles from './index.css';

type LocalDemoTipsProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onEnableCloud: () => void;
  onClose: () => void;
};

export const LocalDemoTips = ({
  onClose,
  isLoggedIn,
  onLogin,
  onEnableCloud,
}: LocalDemoTipsProps) => {
  return null;
};

export default LocalDemoTips;
