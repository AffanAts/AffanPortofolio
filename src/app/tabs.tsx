"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TimelinePendidikan, TimelinePelatihan} from "../components/index";

export function TabsDefault() {
  return (
    <Tabs value="html">
      <TabsHeader className="max-w-md mx-auto flex justify-center space-x-2"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Tab
          value="html"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Pendidikan
        </Tab>
        <Tab
          value="react"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          React
        </Tab>
        <Tab
          value="vue"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Vue
        </Tab>
      </TabsHeader>
      <TabsBody
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <TabPanel value="html">
          <TimelinePendidikan />
        </TabPanel>
        <TabPanel value="react">
          <TimelinePelatihan/>
        </TabPanel>
        <TabPanel value="vue">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
