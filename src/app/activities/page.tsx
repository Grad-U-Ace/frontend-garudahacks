import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProblemSetForm from "./components/ProblemSetForm";
import ResourcesForm from "./components/ResourcesForm";

export default function ActivitiesPage() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Tabs
        defaultValue="account"
        className="flex w-[600px] flex-col items-center justify-between"
      >
        <TabsList>
          <TabsTrigger value="problemset">Problem Sets</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="problemset">
          <ProblemSetForm />
        </TabsContent>
        <TabsContent value="resources">
          <ResourcesForm />
        </TabsContent>
      </Tabs>
    </div>
    // <div className="flex w-full items-center justify-center p-6">
    // </div>
    // <div className="w-full h-full">
    // </div>
  );
}
