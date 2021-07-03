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

const OverviewCardIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  font-size: 21px;
  color: #fff;

  &.document {
    background-color: #e67e22;
  }
`;

interface IOverviewCardIcon {
  icon: React.ReactNode;
  className: string;
}

export const OverviewCardIcon = ({ className, icon }: IOverviewCardIcon) => (
  <OverviewCardIconStyle className={className}>{icon}</OverviewCardIconStyle>
);

const OverviewCardDescriptionTitleStyle = styled.h3`
  font-size: 18px;
  color: #1bbae1;
  margin: 0;
  font-weight: "bold";

  &.light {
    font-weight: 300;
  }
`;

interface IOverviewCardDescriptionTitle {
  className: any;
  text: string;
}

const OverviewCardDescriptionTitle = ({
  className,
  text,
}: IOverviewCardDescriptionTitle) => (
  <OverviewCardDescriptionTitleStyle className={className}>
    {text}
  </OverviewCardDescriptionTitleStyle>
);

const OverviewCardDescriptionSubTitleStyle = styled.p`
  margin: 2px;
  color: #777;
`;

interface IOverviewCardDescriptionSubTitle {
  text: string;
}

const OverviewCardDescriptionSubTitle = ({
  text,
}: IOverviewCardDescriptionSubTitle) => (
  <OverviewCardDescriptionSubTitleStyle>
    {text}
  </OverviewCardDescriptionSubTitleStyle>
);

const OverviewCardDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IOverviewCardDescription {
  title: string;
  subtitle: string;
}

export const OverviewCardDescription = ({
  title,
  subtitle,
}: IOverviewCardDescription) => (
  <OverviewCardDescriptionStyle>
    <OverviewCardDescriptionTitle className="light" text={title} />
    <OverviewCardDescriptionSubTitle text={subtitle} />
  </OverviewCardDescriptionStyle>
);

interface IOverviewCard {
  icon: any;
  iconType: string;
  title: string;
  subtitle: string;
}

export const OverviewCard = ({
  icon,
  iconType,
  title,
  subtitle,
}: IOverviewCard) => (
  <OverviewCardStyle>
    <OverviewCardIcon className={iconType} icon={icon} />
    <OverviewCardDescription title={title} subtitle={subtitle} />
  </OverviewCardStyle>
);

/*eslint no-lone-blocks: "off"*/
{
  /* 
  
  Codigo Original a ser refatorado

<div class="overviewCard">
  <div class="overviewCard-icon overviewCard-icon--document">
    <i class="far fa-file-alt"></i>
  </div>
  <div class="overviewCard-description">
    <h3 class="overviewCard-title text-light">
      New <strong>Document</strong>
    </h3>
    <p class="overviewCard-subtitle">Europe Trip</p>
  </div>
</div>; 
*/
}
