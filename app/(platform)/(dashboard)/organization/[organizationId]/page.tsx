import { db } from "@/lib/db";
import React, { useState } from "react";
import { toast } from "sonner";
import { Board } from "./board";
import { BoardForm } from "./form";

const organizationPage = async ({
  params,
}: {
  params: { organizationId: string };
}) => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <BoardForm />

      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
};

export default organizationPage;
