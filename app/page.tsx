import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import AnimatedLanding from "@/components/animated-landing"
import { SiteHeader } from "@/components/site-header"
import { MainNav } from "@/components/main-nav"

export default function IndexPage() {
  return <>
  <AnimatedLanding />
  </>
}
