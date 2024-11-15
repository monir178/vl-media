import { cn } from "@/lib/utils";

interface CustomHeadingProps {
  text: string;
  className?: string;
}

const CustomHeading = ({ text, className }: CustomHeadingProps) => (
  <p className={cn("outlined-text", className)}>{text}</p>
);

export default CustomHeading;
