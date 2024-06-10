"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function TimelinePendidikan() {
  const subTimelineData = [
    {
      title: "Sub Timeline Title 1",
      description: "Description for Sub Timeline Item 1.",
      avatar: "https://docs.material-tailwind.com/img/team-1.jpg",
    },
    {
      title: "Sub Timeline Title 2",
      description: "Description for Sub Timeline Item 2.",
      avatar: "https://docs.material-tailwind.com/img/team-2.jpg",
    },
  ];

  const timelineData = [
    {
      title: "Timeline Title 1",
      description: (
        <>
          <Timeline>
            {subTimelineData.map((subItem, subIndex) => (
              <TimelineItem key={subIndex}>
                {subIndex < subTimelineData.length - 1 && <TimelineConnector />}
                <TimelineHeader>
                  <TimelineIcon/>
                  <Typography variant="h6" color="blue-gray" placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}>
                    {subItem.title}
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-4">
                  <Typography color="gray" className="font-normal text-gray-600" placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}>
                    {subItem.description}
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </>
      ),
      avatar: "https://docs.material-tailwind.com/img/team-1.jpg",
    },
    {
      title: "Timeline Title 2",
      description:
        "The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.",
      avatar: "https://docs.material-tailwind.com/img/team-2.jpg",
    },
    {
      title: "Timeline Title 3",
      description:
        "The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.",
      avatar: "https://docs.material-tailwind.com/img/team-3.jpg",
    },
  ];

  return (
    <center>
      <div className="w-[32rem]">
        <Timeline>
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              {index < timelineData.length - 1 && <TimelineConnector />}
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="sm"
                    src={item.avatar}
                    alt={`user ${index + 1}`}
                    withBorder placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                  />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray" placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}>
                  {item.title}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-600" placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}>
                  {item.description}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </center>
  );
}
