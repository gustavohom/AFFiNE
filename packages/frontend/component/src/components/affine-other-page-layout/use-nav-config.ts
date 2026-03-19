import { useI18n } from '@affine/i18n';
import { useMemo } from 'react';

export const useNavConfig = () => {
  const t = useI18n();
  return useMemo(
    () => [
      {
        title: t['com.affine.other-page.nav.official-website'](),
        path: '#',
      },
      {
        title: t['com.affine.other-page.nav.blog'](),
        path: '#',
      },
      {
        title: t['com.affine.other-page.nav.contact-us'](),
        path: '#',
      },
    ],
    [t]
  );
};
