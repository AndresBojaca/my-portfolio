import React from "react";
import './JobExperience.css';
import JobList from '../job-list/JobList';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const JobExperience = () => {

  return (
    <section className="min-h-[100vh] bg-black bg-opacity-5">
      <div className="py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl text-center md:text-left lg:text-left">
        <h1 className="text-2xl font-bold">Experiencia de Trabajo</h1>
        <div className="mt-[4rem]">
          {/* <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs> */}

          <JobList />
        </div>
      </div>
    </section>
  );
}

export default JobExperience;
