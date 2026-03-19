import { Tooltip } from '@affine/component/ui/tooltip';
import { WorkspaceDialogService } from '@affine/core/modules/dialogs';
import type { SettingTab } from '@affine/core/modules/dialogs/constant';
import { GlobalContextService } from '@affine/core/modules/global-context';
import { UrlService } from '@affine/core/modules/url';
import { useI18n } from '@affine/i18n';
import { CloseIcon, NewIcon } from '@blocksuite/icons/rc';
import { useLiveData, useService, useServices } from '@toeverything/infra';
import { useCallback, useState } from 'react';

import { ContactIcon, HelpIcon, KeyboardIcon } from './icons';
import {
  StyledAnimateWrapper,
  StyledIconWrapper,
  StyledIsland,
  StyledTriggerWrapper,
} from './style';

const DEFAULT_SHOW_LIST: IslandItemNames[] = [
  'whatNew',
  'contact',
  'shortcuts',
];

const DESKTOP_SHOW_LIST: IslandItemNames[] = [...DEFAULT_SHOW_LIST];
type IslandItemNames = 'whatNew' | 'contact' | 'shortcuts';

const showList = BUILD_CONFIG.isElectron
  ? DESKTOP_SHOW_LIST
  : DEFAULT_SHOW_LIST;

export const HelpIsland = () => {
  return null;
};
