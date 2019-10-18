import { useRouter } from "next/router";
import styled from "styled-components";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <ListItem href={href} path={router.pathname}>
      <Anchor href={href} onClick={handleClick} height={60}>
        {children}
      </Anchor>
    </ListItem>
  );
};

const Anchor = styled.a<{ href: string; height: number }>`
  height: ${props => props.height}px;
  line-height: ${props => props.height}px;
  width: 100%;
`;

const ListItem = styled.li<{ path: string; href: string }>`
  font-weight: 100;
  font-size: 1.1rem;
  margin: 0 4rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-width: 2px;
    border-style: solid;
    border-color: ${props =>
      props.path === props.href ? "#2e8e89" : "transparent"};
  }
`;
export { Anchor, ListItem };
export default ActiveLink;
