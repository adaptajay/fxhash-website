import { PropsWithChildren } from "react"
import Link from "next/link"
import { TabDefinition, Tabs } from "../../components/Layout/Tabs"

const definition: TabDefinition[] = [
  { name: "gallery", props: { href: "/explore" } },
  { name: "reveal feed", props: { href: "/explore/reveal-feed" } }
]

interface TabProps {
  href: string,
  className: string
}
export function ExploreTab({ 
  href,
  className,
  children,
}: PropsWithChildren<TabProps>) {
  return (
    <Link href={href}>
      <a className={className}>{ children }</a>
    </Link>
  )
}

interface Props {
  active: number
}
export function ExploreTabs({ active }: Props) {
  return (
    <Tabs
      tabDefinitions={definition}
      activeIdx={active}
      tabsLayout="fixed-size"
      tabWrapperComponent={ExploreTab}
    />
  )
}