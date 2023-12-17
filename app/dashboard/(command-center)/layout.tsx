'use client'

import DashboardItemProps from "@/src/dashboard/DashboardMenuItem"
import { usePathname, useRouter } from 'next/navigation';


export default function CommandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex ml-5">
        <DashboardItemProps onClick={() => router.push('/dashboard')} active={pathname === '/dashboard'} title="Revenue" />
        <DashboardItemProps onClick={() => router.push('/dashboard/expenses')} active={pathname === '/dashboard/expenses'} title="Expenses" />
        <DashboardItemProps onClick={() => router.push('/dashboard/engagements')} active={pathname === '/dashboard/engagements'} title="Engagements" />
      </div>
      <hr />
      <div className="p-3">
      {children}
      </div>
    </div>
  )
}
