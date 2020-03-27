import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  position:fixed;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding-left: 170px;
  padding-right: 70px;
`;

export const Search = styled.div`
  display: flex;
  height: 24px;

  button:hover > svg {
     path {
      stroke: #0000;
      fill: rgba(201, 206, 214, 0.6);
     }
  }

  input {
    width: 99px;
    margin-left: 10px;
    border: none;
    color: #A6ACBE;

    &::placeholder {
      color: #A6ACBE;
    }
  }
`;

export const Icon = styled.button`
  background: none;
  border: none;

  &:hover {
    svg path {
      stroke: rgba(201, 206, 214, 0.6);
    }
  }
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;

  * {
    margin-left: 24px;
  }

  #vertical-bar {
    display: flex;
    border-right: 2px solid #EFF4F6;
    height: 64px;
    width: 22px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  display, svg, button {
    margin-left: 12px;
  }


  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    strong {
      color: #000;
      font-weight: normal;
    }
    span {
      font-size: 12px;
      color: #A6ACBE;
    }
  }
`;

