import styled from "styled-components";

const OverviewCardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #fff;
  transform: translateY(0);
  transition: all 0.3s;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 5px rgb(0 0 0 / 10%);
    cursor: pointer;
  }
`;

interface IOverviewCard {
  children: React.ReactNode;
}

export const OverviewCard = ({ children }: IOverviewCard) => (
  <OverviewCardStyle>{children}</OverviewCardStyle>
);
