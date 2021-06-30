import { Meta } from "@storybook/react";
import { OverviewCard } from ".";
import { CicleIcon } from "../../atoms/CicleIcon";
import { IoDocumentTextOutline } from "react-icons/io5";

export default {
  title: "Molecules/OverviewCard",
  component: OverviewCard,
} as Meta;

export const Document = () => (
  <div style={{ width: "300px" }}>
    <OverviewCard>
      <CicleIcon
        className="document"
        icon={<IoDocumentTextOutline size="24" />}
      />
    </OverviewCard>
  </div>
);
