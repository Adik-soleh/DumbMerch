import { Button } from "@/components/ui/button";

interface Props {
  label: string;
  onClick?: () => void;
}
function RedButton({ label, onClick }: Props) {
  return (
    <Button onClick={onClick} bgColor={"#F74D4D"} color={"white"}>
      {label}
    </Button>
  );
}

export default RedButton;
