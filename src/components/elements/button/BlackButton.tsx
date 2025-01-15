import { Button } from "@/components/ui/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;

}
function BlackButton({ label, onClick }: Props) {
  return (
    <Button onClick={onClick} color={"white"} bgColor={"black"} >
      {label}
    </Button>
  );
}

export default BlackButton;
