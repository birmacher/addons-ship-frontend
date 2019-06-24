import { getAppVersionsByVersion, getAppVersionsByBuildNumber } from './selectors';
import { RootState } from '@/store';
import { mockAppVersions } from '@/mocks';
import { AppVersion } from '@/models';

describe('getAppVersionsByVersion', () => {
  it('returns null', () => {
    expect(getAppVersionsByVersion({ appVersionList: null } as any)).toBeNull();
  });

  it('groups app versions by version', () => {
    const groupedAppVersions = getAppVersionsByVersion({ appVersionList: mockAppVersions } as RootState) as {
      groupName: string;
      appVersions: AppVersion[];
    }[];

    expect(groupedAppVersions).toMatchSnapshot();
  });
});

describe('getAppVersionsByBuildNumber', () => {
  it('returns null', () => {
    expect(getAppVersionsByBuildNumber({ appVersionList: null } as any)).toBeNull();
  });

  it('groups app versions by build number', () => {
    const groupedAppVersions = getAppVersionsByBuildNumber({ appVersionList: mockAppVersions } as RootState) as {
      groupName: string;
      appVersions: AppVersion[];
    }[];

    expect(groupedAppVersions).toMatchSnapshot();
  });
});
