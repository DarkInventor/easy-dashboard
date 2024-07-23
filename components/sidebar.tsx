import React from 'react';
import { Home, BarChart2, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <nav className="flex-1 flex-col space-y-2  shadow border rounded-[7px]">
      <Button variant="ghost" className="w-full justify-start bg-muted hover:bg-muted-foreground" onClick={() => setActiveTab('dashboard')}>
        <Home className="mr-2 h-4 w-4" />
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('users')}>
        <Users className="mr-2 h-4 w-4" />
        Users
      </Button>
      <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('analytics')}>
        <BarChart2 className="mr-2 h-4 w-4" />
        Analytics
      </Button>
      <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('settings')}>
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </nav>
  )
}