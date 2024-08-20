import { toast } from "@/components/ui/use-toast";

export const copyClipBoard = (value: string) => {
  navigator.clipboard.writeText(value);
  toast({
    title: "value copied ☑",
  });
};
