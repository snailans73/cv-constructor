import { Collapse, Tag } from "antd";
import styled from "styled-components";


export const PanelContentWrapper = styled.div<{
  $gap?: string
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap ?? '10px'};
`;

export const StyledCollapse = styled(Collapse)`
  .ant-collapse-content-box {
    padding: 0;
    padding-top: 0 !important;
  }
  .ant-collapse-header {
    padding: 12px 0 !important;
    .ant-collapse-arrow {
      right: 6px !important;
    }
  }
  .ant-collapse-item:not(:last-child) {
    border-bottom: 1px solid #E2E5E8;
  }
` 

export const StyledTag = styled(Tag)`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
  font-size: 14px;
  margin-bottom: 10px;
  padding: 2px 12px;
  cursor: crosshair;

  :hover {
    background-color: rgb(255, 77, 79, 0.1);
    box-shadow: 0px 3px 10px 0px rgb(255, 77, 79, 0.1);
  }
  
`