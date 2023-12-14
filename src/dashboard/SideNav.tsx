'use client'

import SideBarMenuItem from "./SideBarMenuItem";
import { usePathname, useRouter } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();
  const router = useRouter();
  
    return (
        <div className="h-[93vh] w-80 border-x p-4 fixed">
          <SideBarMenuItem onClick={() => router.push('/dashboard')}  multiple={false} active={pathname === '/dashboard'} title="Command center" />
          <SideBarMenuItem onClick={() => router.push('/dashboard/team')}  multiple={false} active={pathname === '/dashboard/team'} title="Team" />
          <SideBarMenuItem onClick={() => router.push('/dashboard/clients')} multiple={false} active={pathname === '/dashboard/clients'} title="Clients" />
          <SideBarMenuItem onClick={() => router.push('/dashboard/projects')} multiple={true} active={pathname === '/dashboard/projects'} title="Projects" />
          <SideBarMenuItem onClick={() => router.push('/dashboard/financials')} multiple={true} active={pathname === '/dashboard/financials'} title="Financials" />
          <SideBarMenuItem onClick={() => router.push('/dashboard/human-resources')} multiple={true} active={pathname === '/dashboard/human-resources'} title="Human Resources" />
          <SideBarMenuItem onClick={() => router.push('/dashboard/admin')} multiple={true} active={pathname === '/dashboard/admin'} title="Admin" />
          <SideBarMenuItem onClick={() => router.push('/dashboard/miscellaneous')} multiple={true} active={pathname === '/dashboard/miscellaneous'} title="Miscellaneous" />
        </div>
    );
}