// "use client"

// import React from 'react';
// import { TrendingUp } from "lucide-react"
// import { Area, AreaChart, CartesianGrid, XAxis, Pie, PieChart, Bar, BarChart, Label } from "recharts"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// import { Sidebar } from '@/components/sidebar';

// // Area Chart Data
// const areaChartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const areaChartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// // Pie Chart Data
// const pieChartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 190, fill: "var(--color-other)" },
// ]

// const pieChartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig

// // Bar Chart Data
// const barChartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const barChartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export default function Dashboard() {
//   const totalVisitors = React.useMemo(() => {
//     return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0)
//   }, [])

//   return (
//     <div className="flex flex-col lg:flex-row flex-wrap gap-4 px-4 py-5 w-[94%] mx-auto">
//          <div className='w-full lg:flex-1 min-w-[250px] max-w-auto lg:max-w-[200px]'>
//             <Sidebar setActiveTab={function (tab: string): void {
//           throw new Error('Function not implemented.');
//         } } />
            
//          </div>
//       {/* Area Chart */}
     
//       <Card className='w-full lg:flex-1 border rounded-[7px]'>
     
//         <CardHeader>
//           <CardTitle>Area Chart - Stacked</CardTitle>
//           <CardDescription>
//             Showing total visitors for the last 6 months
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <ChartContainer config={areaChartConfig}>
//             <AreaChart
//               accessibilityLayer
//               data={areaChartData}
//               margin={{
//                 left: 12,
//                 right: 12,
//               }}
//             >
//               <CartesianGrid vertical={false} />
//               <XAxis
//                 dataKey="month"
//                 tickLine={false}
//                 axisLine={false}
//                 tickMargin={8}
//                 tickFormatter={(value) => value.slice(0, 3)}
//               />
//               <ChartTooltip
//                 cursor={false}
//                 content={<ChartTooltipContent indicator="dot" />}
//               />
//               <Area
//                 dataKey="mobile"
//                 type="natural"
//                 fill="var(--color-mobile)"
//                 fillOpacity={0.4}
//                 stroke="var(--color-mobile)"
//                 stackId="a"
//               />
//               <Area
//                 dataKey="desktop"
//                 type="natural"
//                 fill="var(--color-desktop)"
//                 fillOpacity={0.4}
//                 stroke="var(--color-desktop)"
//                 stackId="a"
//               />
//             </AreaChart>
//           </ChartContainer>
//         </CardContent>
//         <CardFooter>
//           <div className="flex w-full items-start gap-2 text-sm">
//             <div className="flex flex-wrap gap-2">
//               <div className="flex items-center gap-2 font-medium leading-none">
//                 Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//               </div>
//               <div className="flex items-center gap-2 leading-none text-muted-foreground">
//                 January - June 2024
//               </div>
//             </div>
//           </div>
//         </CardFooter>
//       </Card>

//       {/* Pie Chart */}
//       <Card className="w-full lg:flex-1 flex flex-col border rounded-[7px]">
//         <CardHeader className="items-center pb-0">
//           <CardTitle>Pie Chart - Donut with Text</CardTitle>
//           <CardDescription>January - June 2024</CardDescription>
//         </CardHeader>
//         <CardContent className="flex-1 pb-0">
//           <ChartContainer
//             config={pieChartConfig}
//             className="mx-auto aspect-square max-h-[250px]"
//           >
//             <PieChart>
//               <ChartTooltip
//                 cursor={false}
//                 content={<ChartTooltipContent hideLabel />}
//               />
//               <Pie
//                 data={pieChartData}
//                 dataKey="visitors"
//                 nameKey="browser"
//                 innerRadius={60}
//                 strokeWidth={5}
//               >
//                 <Label
//                   content={({ viewBox }) => {
//                     if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                       return (
//                         <text
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           textAnchor="middle"
//                           dominantBaseline="middle"
//                         >
//                           <tspan
//                             x={viewBox.cx}
//                             y={viewBox.cy}
//                             className="fill-foreground text-3xl font-bold"
//                           >
//                             {totalVisitors.toLocaleString()}
//                           </tspan>
//                           <tspan
//                             x={viewBox.cx}
//                             y={(viewBox.cy || 0) + 24}
//                             className="fill-muted-foreground"
//                           >
//                             Visitors
//                           </tspan>
//                         </text>
//                       )
//                     }
//                   }}
//                 />
//               </Pie>
//             </PieChart>
//           </ChartContainer>
//         </CardContent>
//         <CardFooter className="flex-col gap-2 text-sm">
//           <div className="flex items-center gap-2 font-medium leading-none">
//             Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//           </div>
//           <div className="leading-none text-muted-foreground">
//             Showing total visitors for the last 6 months
//           </div>
//         </CardFooter>
//       </Card>

//       {/* Bar Chart */}
//       <Card className='w-full lg:flex-1 border rounded-[7px]'>
//         <CardHeader>
//           <CardTitle>Bar Chart - Multiple</CardTitle>
//           <CardDescription>January - June 2024</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <ChartContainer config={barChartConfig}>
//             <BarChart accessibilityLayer data={barChartData}>
//               <CartesianGrid vertical={false} />
//               <XAxis
//                 dataKey="month"
//                 tickLine={false}
//                 tickMargin={10}
//                 axisLine={false}
//                 tickFormatter={(value) => value.slice(0, 3)}
//               />
//               <ChartTooltip
//                 cursor={false}
//                 content={<ChartTooltipContent indicator="dashed" />}
//               />
//               <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//               <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//             </BarChart>
//           </ChartContainer>
//         </CardContent>
//         <CardFooter className="flex-col items-start gap-2 text-sm">
//           <div className="flex gap-2 font-medium leading-none">
//             Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//           </div>
//           <div className="leading-none text-muted-foreground">
//             Showing total visitors for the last 6 months
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }


"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, Pie, PieChart, Bar, BarChart, Label } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Sidebar } from '@/components/sidebar';
import LineChart from '@/components/line-chart';
import { DockDemo } from '@/components/dock-demo';

// Area Chart Data
const areaChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const areaChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

// Pie Chart Data
const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const pieChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

// Bar Chart Data
const barChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const barChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  const totalVisitors = React.useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div> */}
        {/* <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full filter blur-[100px] animate-spin-slow"></div>
      </div>  
     <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 ">
        <DockDemo />        
      </div>
    
      <motion.div 
        className="flex flex-col lg:flex-row flex-wrap gap-4 px-4 py-5 w-[94%] mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className='w-full lg:flex-1 min-w-[250px] max-w-auto lg:max-w-[200px]'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <Sidebar setActiveTab={function (tab: string): void {
            throw new Error('Function not implemented.');
          } } /> */}
          
        </motion.div>
        <div className="max-w-auto min-w-[1000px] w-full">
          <LineChart />
          
        </div>
        {/* Area Chart */}
        
        <motion.div
          className='w-full lg:flex-1'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        
          <Card className='border rounded-[7px]'>
            <CardHeader>
              <CardTitle>Total Visitors</CardTitle>
              <CardDescription>
                Showing total visitors for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={areaChartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={areaChartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill="var(--color-mobile)"
                    fillOpacity={0.4}
                    stroke="var(--color-mobile)"
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    January - June 2024
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          className="w-full lg:flex-1 flex flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="border rounded-[7px]">
            <CardHeader className="items-center pb-0">
              <CardTitle>Distribution</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={pieChartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={pieChartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Visitors
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className='w-full lg:flex-1'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className='border rounded-[7px]'>
            <CardHeader>
              <CardTitle>Dev</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={barChartConfig}>
                <BarChart accessibilityLayer data={barChartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </>
  )
}
