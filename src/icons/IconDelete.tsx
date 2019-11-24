import { FC } from "react";
import styled from "styled-components";

const IconDelete: FC<{ onClick: (event: any) => void }> = ({ onClick }) => (
  <Button onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="trash-alt"
      width="16"
      height="16"
      role="img"
      viewBox="0 0 448 512"
      fill="#fff"
    >
      <title>Delete</title>
      <path
        fill="#fff"
        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
      />
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
export default IconDelete;
