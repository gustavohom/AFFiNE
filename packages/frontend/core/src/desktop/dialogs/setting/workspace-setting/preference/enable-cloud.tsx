import { SettingRow } from '@affine/component/setting-components';
import { Button } from '@affine/component/ui/button';
import { useEnableCloud } from '@affine/core/components/hooks/affine/use-enable-cloud';
import {
  type Workspace,
  WorkspaceService,
} from '@affine/core/modules/workspace';
import { UNTITLED_WORKSPACE_NAME } from '@affine/env/constant';
import { useI18n } from '@affine/i18n';
import { useLiveData, useService } from '@toeverything/infra';
import { useCallback } from 'react';

export interface PublishPanelProps {
  workspace: Workspace | null;
}

export const EnableCloudPanel = ({
  onCloseSetting,
}: {
  onCloseSetting?: () => void;
}) => {
  return null;
};
