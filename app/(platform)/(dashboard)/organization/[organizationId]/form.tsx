"use client";

import { FormButton } from "./form-button";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/form/form-input";

export function BoardForm() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <div>
      <form action={onSubmit}>
        <div className="flex flex-col space-y-2">
          <FormInput label="Board Title" id="title" errors={fieldErrors} />
        </div>

        <FormButton />
      </form>
    </div>
  );
}
