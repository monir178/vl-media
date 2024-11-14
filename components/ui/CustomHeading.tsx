import { cn } from "@/lib/utils";

interface CustomHeadingProps {
  text: string;
  className?: string;
}

const CustomHeading = ({ text, className }: CustomHeadingProps) => (
  <h1 className={cn("outlined-text", className)}>{text}</h1>
);

export default CustomHeading;
