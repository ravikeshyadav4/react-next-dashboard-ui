"use client"

// import PrimaryButton from "@/src/components/Button";
import { Button, Container, Reshaped, View } from "reshaped";
import "reshaped/themes/reshaped/theme.css";

// reshaped/themes/reshaped/theme.css
export default function Page() {
  return <Container width="100%">
  {/* Assuming Container provides full-width by default */}
    <h2 className="font-bold text-lg">Oct 01, 2021 – July 22, 2022</h2>
    <p className="text-sm text-gray-700">Comparing to: May 01, 2021 – Sept 15, 2022</p>
    
    <View
      gap={4}
      paddingEnd={4}
      paddingTop={4}
      direction="row"
      align={"stretch"}
      justify={"space-between"}
    >
      <View.Item columns={10}>
        <View
          gap={4}
          direction="row"
        >
            <Button color="primary" href="#">Custom</Button>
            <Button href="#">Last period</Button>
            <Button href="#">Last 30d</Button>
            <Button href="#">Last 60d</Button>
            <Button href="#">Last 3m</Button>
        </View>
      </View.Item>
      <View.Item columns={2}>
        <Button href="#">0 applied</Button>
      </View.Item>
    </View>
    </Container>
}