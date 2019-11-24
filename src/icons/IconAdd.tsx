import { FC } from "react";
import styled from "styled-components";

const IconAdd: FC<{ onClick: (event: any) => void }> = ({ onClick }) => (
  <Button onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#fff"
    >
      <title>Add</title>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Button>
);
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: #484848;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export default IconAdd;
