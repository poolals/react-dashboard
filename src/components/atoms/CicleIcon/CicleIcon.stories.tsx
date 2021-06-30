import styled from "styled-components";
import { Meta } from "@storybook/react";
import { CicleIcon } from ".";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegCalendarCheck, FaRegFileImage } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default {
  title: "Atoms/CicleIcon",
  component: CicleIcon,
} as Meta;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  transform: translateY(0);
  transition: all 0.3s;
  width: 300px;
`;

export const CicleIcons = () => (
  <Container>
    <CicleIcon
      className="document"
      icon={<IoDocumentTextOutline size="24" />}
    />
    <CicleIcon className="calendar" icon={<FaRegCalendarCheck size="24" />} />
    <CicleIcon className="photo" icon={<FaRegFileImage size="24" />} />
    <CicleIcon className="email" icon={<HiOutlineMail size="24" />} />
  </Container>
);

export const Document = () => (
  <CicleIcon className="document" icon={<IoDocumentTextOutline size="24" />} />
);

export const Calendar = () => (
  <CicleIcon className="calendar" icon={<FaRegCalendarCheck size="24" />} />
);

export const Email = () => (
  <CicleIcon className="email" icon={<HiOutlineMail size="24" />} />
);

export const Photo = () => (
  <CicleIcon className="photo" icon={<FaRegFileImage size="24" />} />
);
