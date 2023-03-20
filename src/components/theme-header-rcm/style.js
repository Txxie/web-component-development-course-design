import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 50px;
  border-bottom: 2px solid #cac0d3;
  background-color: #b8d6c8;
  padding: 0 10px 4px 34px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      color: white;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }
  }

  .right  { 
    display: flex;
    align-items: center;
    a {
      color: white;
      font-size: 14px;
    }
  }
`