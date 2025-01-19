import { Button } from "@/components/ui/button";

interface Props {
    label: string
    onClick?: () => void
    bgcolor: "#56c05a"|"#f74d4d"
}
export function ActionButton({ label, onClick,bgcolor }: Props) {
  return (
    <Button
      bgColor={bgcolor}
      width={{ base: "80px", md: "100px" }}
      padding="5px"
      borderRadius={"md"}
      color={"white"}
      border={"none"}
      cursor={"pointer"}
      fontSize={{ base: "sm", md: "md" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
