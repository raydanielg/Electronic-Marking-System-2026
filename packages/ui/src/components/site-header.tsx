"use client"

import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Input } from "@workspace/ui/components/input"
import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon, Sun02Icon, Moon02Icon } from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"

export function SiteHeader({ title = "Dashboard" }: { title?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ms-1" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 data-vertical:self-auto"
        />
        <h1 className="text-base font-semibold tracking-tight">{title}</h1>

        <div className="ms-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <HugeiconsIcon
              icon={Search01Icon}
              strokeWidth={2}
              className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search..."
              className="h-8 w-48 ps-8 text-sm lg:w-64"
            />
          </div>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            <HugeiconsIcon
              icon={resolvedTheme === "dark" ? Sun02Icon : Moon02Icon}
              strokeWidth={2}
              className="size-4"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
