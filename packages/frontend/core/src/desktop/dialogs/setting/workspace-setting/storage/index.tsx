import {
  SettingHeader,
  SettingRow,
  SettingWrapper,
} from '@affine/component/setting-components';
import { Button } from '@affine/component/ui/button';
import { WorkspaceService } from '@affine/core/modules/workspace';
import { useI18n } from '@affine/i18n';
import { useService } from '@toeverything/infra';

import { BlobManagementPanel } from './blob-management';

export const WorkspaceSettingStorage = ({
  onCloseSetting,
}: {
  onCloseSetting: () => void;
}) => {
  const t = useI18n();
  const workspace = useService(WorkspaceService).workspace;

  return (
    <>
      <SettingHeader
        title={t['Storage']()}
        subtitle={t['com.affine.settings.workspace.storage.subtitle']()}
      />

      <SettingWrapper>
        <SettingRow
          name="Web Backup"
          desc="Download a .zip file containing all the workspace data from your local browser database"
        >
          <Button
            variant="primary"
            onClick={() => {
              window.exportWorkspaceSnapshot().catch(console.error);
            }}
          >
            Export Backup
          </Button>
        </SettingRow>

        <SettingRow
          name="Web Restore"
          desc="Restore your workspace data from a .zip backup file (this may overwrite current data)"
        >
          <Button
            variant="primary"
            onClick={() => {
              window.importWorkspaceSnapshot().catch(console.error);
            }}
          >
            Restore Backup
          </Button>
        </SettingRow>
      </SettingWrapper>

      <SettingWrapper>
        <BlobManagementPanel />
      </SettingWrapper>
    </>
  );
};
