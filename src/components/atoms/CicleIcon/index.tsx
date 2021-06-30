import styled from "styled-components";

const CicleIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  font-size: 21px;
  color: #fff;
`;

const CicleIconsTypes = styled(CicleIconStyle)`
  &.document {
    background-color: #e67e22;
  }

  &.calendar {
    background-color: #27ae60;
  }

  &.email {
    background-color: #e74c3c;
  }

  &.photo {
    background-color: #af64cc;
  }
`;

interface ICicleIcon {
  className: string;
  icon: JSX.Element;
}

export const CicleIcon = ({ className, icon }: ICicleIcon) => (
  <CicleIconsTypes className={className}>{icon}</CicleIconsTypes>
);
