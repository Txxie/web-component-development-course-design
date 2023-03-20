import styled from "styled-components";
import logoimg from '@/assets/img/logo.png';

export const HeaderWrapper = styled.div`
  height: 95px;
  font-size: 16px;
  color: #fff;
  background-color: #f0e7f5;

  .content {
    height: 90px;

    /* Flex布局 */
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #cac0d3;
  }
`

export const HeaderLeft = styled.div`
display: flex;

.logo {
    width: 176px;
    height: 85px;
    background: url(${logoimg}) no-repeat;
    background-size: 70% 100%;
    text-indent: -999999px;
}

.select-list {
    display: flex;
    line-height: 90px;

    .select-item {
      width: 140px;
      a {
        display: block;
        padding: 0 20px;
        color: #cac0d3;
      }

      &:hover a,
      a.active {
        color: #fff;
        background: #cac0d3;
        text-decoration: none;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #cac0d3;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    color: #cac0d3;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #cac0d3;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;/* 去除背景颜色，设置成透明 */
  }
`