import styled from "styled-components";

export const PlayerWrapper = styled.div`
  .content {
    /* background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y; */
    background-color: #fff;
    display: flex;
  }
`;

export const PlayerLeft = styled.div`
  width: 270px;
  .info {
    font-size: 18px;
    text-align: center;
    color: #f7a09f;
  }
  .playimg {
    display: block;
    width: 150px;
    height: 150px;
    margin-top: 50px;
    margin-left: 50px;
    /* margin-bottom: 200px; */
    border: 4px solid #b8d6c8;
  }
`;

export const PlayerRight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 710px;
  padding: 20px 40px 40px 150px;
  .lyrleft {
    width: 200px;
  }
  .lycright {
    width: 200px;
  }
  p {
    width: 200px;
    margin: 0;
    padding: 0;
  }
  .lycactive {
    color: pink;
    font-size: 16px;
  }
`;
