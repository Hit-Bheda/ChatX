import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
}

const CardWrapper: React.FC<Props> = ({
  children,
  title,
  description,
  footer,
}) => {
  return (
    <Card className="sm:w-[70%] w-[95%] md:w-[95%] lg:w-[80%] border-none">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default CardWrapper;
