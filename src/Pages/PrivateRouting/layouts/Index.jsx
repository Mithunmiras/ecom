import React from "react";
import SideBar from "./component/SideBar";
import TopHeader from "./component/Header";

function Index({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopHeader pageTitle="Dashboard" />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Index;
