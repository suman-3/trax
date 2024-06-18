"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCardModel } from "@/hooks/use-card-modal";

export const CardModal = () => {
  const id = useCardModel((state) => state.id);
  const isOpen = useCardModel((state) => state.isOpen);
  const onClose = useCardModel((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>I am a modal</DialogContent>
    </Dialog>
  );
};
