"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FancyMultiSelect } from "./multi-select"
import Assign from "./Assign"
import EditorComponent from "./EditorComponent";
// import {EditorComponent} from '../'

export function TicketDetails() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Requirements</TabsTrigger>
        <TabsTrigger value="password">Draft</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* dsafdsaf */}
            {/* <FancyMultiSelect/> */}
            <EditorComponent/>
          </CardContent>
          <CardFooter>
            <Button>Ok</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Draft</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <EditorComponent/>
          </CardContent>
          <CardFooter>
            <Button>Ok</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
