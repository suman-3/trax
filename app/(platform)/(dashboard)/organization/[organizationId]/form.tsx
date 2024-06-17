"use client";

import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";

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
          <FormInput errors={fieldErrors} />
        </div>

        <FormButton />
      </form>
    </div>
  );
}