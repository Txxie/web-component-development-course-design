import styled from "styled-components";

export const HotRecommendWrapper = styled.div`
  background-color: white;
  .recommend-list {
    width: 600px;
    margin-left: 200px;
    display: flex;
    flex-wrap: wrap;/*让弹性盒元素在必要的时候拆行*/
    justify-content: space-between;
  }
`