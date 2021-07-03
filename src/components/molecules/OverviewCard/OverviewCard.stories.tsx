import { Meta } from "@storybook/react";
import { OverviewCard } from ".";
import { IoDocumentTextOutline } from "react-icons/io5";

export default {
  title: "Molecules/OverviewCard",
  component: OverviewCard,
} as Meta;

export const Document = () => (
  <div style={{ width: "300px" }}>
    <OverviewCard
      icon={<IoDocumentTextOutline size='24' />}
      iconType="document"
      title="New Document"
      subtitle="Europe Trip"
    />
  </div>
);
