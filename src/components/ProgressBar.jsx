"use client";

import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
const ProgressBar = () => {
  return (
    <Timeline horizontal className="sticky top-5 p-3 z-30  items-center justify-center flex-row">
      <TimelineItem className="w-60">
        <TimelinePoint icon={HiCalendar} className="text-amber-300" />
        <TimelineContent>
          <TimelineTime>Postcode</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="w-60">
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>Wate Type</TimelineTime>         
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="w-60">
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>Select Skip</TimelineTime>         
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="w-60">
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>Permit Check</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="w-60">
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>Choose Date</TimelineTime>         
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="h-10 w-0">
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>Pay</TimelineTime>         
        </TimelineContent>
      </TimelineItem>
     
    </Timeline>
  );
}

export default ProgressBar