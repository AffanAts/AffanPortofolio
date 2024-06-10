import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export function ProjectCard({ img, title, desc, link }: ProjectCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody
        className="p-0"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <a
          href={link}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography
            variant="h5"
            className="mb-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {title}
          </Typography>
        </a>
        <Typography
          className="mb-6 font-normal !text-gray-500"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {desc}
        </Typography>
        <a href={link}>
          <Button
            color="gray"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            See details
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
