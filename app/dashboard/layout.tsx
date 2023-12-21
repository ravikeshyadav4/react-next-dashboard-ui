"use client"
import Header from "@/src/dashboard/Header"
import SideNav from "@/src/dashboard/SideNav"
import { useRouter } from 'next/navigation';
import { useEffect } from "react"
import { Reshaped, View } from "reshaped"
import "reshaped/themes/reshaped/theme.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  useEffect(() => {
    const storedValue = localStorage.getItem('user');
    if (!storedValue) {
      router.push('/auth/login');
    }
  }, [router]);


  return (
      <Reshaped theme="reshaped">
        <Header />
        <View.Item columns={12}>
          <SideNav />
            <div className="ml-80">
              {children}
            </div>
          </View.Item>
      </Reshaped>
  )
}
