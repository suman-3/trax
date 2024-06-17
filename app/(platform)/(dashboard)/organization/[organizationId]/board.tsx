import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDeleteButton } from "./form-delete";

interface Boardprops {
  title: string;
  id: string;
}

export const Board = ({ title, id }: Boardprops) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title : {title}</p>
      <FormDeleteButton />
    </form>
  );
};
