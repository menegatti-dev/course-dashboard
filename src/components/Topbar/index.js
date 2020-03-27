import React from 'react';

import {
  Container,
  Search,
  Icon,
  UserArea,
  UserInfo
} from './styles';

import {
  SearchIcon,
  MoreIcon,
  NewNotificationIcon,
  LogoutIcon,
} from "../../assets/Icons";

import { Avatar1 } from "../../assets/Avatars";

export default function Topbar() {
  return (
    <Container>
      <Search>
        <Icon>
          <SearchIcon />
        </Icon>
        <input placeholder="Search..." />
      </Search>
      <UserArea>
        <UserInfo>
          <div>
            <strong>Cody Simmmons</strong>
            <span>Lecturer</span>
          </div>
          <Avatar1 />
          <Icon>
            <MoreIcon />
          </Icon>
        </UserInfo>
        <div id="vertical-bar" />
        <Icon>
          <NewNotificationIcon />
        </Icon>
        <Icon>
          <LogoutIcon />
        </Icon>
      </UserArea>
    </Container>
  );
}
