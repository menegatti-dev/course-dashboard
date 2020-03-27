import React from 'react';

import {
  Container,
  LogoArea,
  Navigation,
  Pages,
  Settings,
  RedirectPage
} from './styles';

import {
  LogoIcon,
  ChartIcon,
  FilesIcon,
  FoldersIcon,
  MailIcon,
  SettingsIcon
} from '../../assets/Icons';

export default function Sidebar() {
  return (
    <Container>
      <LogoArea>
        <LogoIcon />
      </LogoArea>
      <Navigation>
        <Pages>
          <RedirectPage to="#">
            <FoldersIcon />
          </RedirectPage>
          <RedirectPage to="#">
            <ChartIcon />
          </RedirectPage>
          <RedirectPage to="#">
            <MailIcon />
          </RedirectPage>
          <RedirectPage to="#">
            <FilesIcon />
          </RedirectPage>
        </Pages>
        <Settings>
          <RedirectPage to="#" margin={false}>
            <SettingsIcon />
          </RedirectPage>
        </Settings>
      </Navigation>

    </Container>
  );
}
