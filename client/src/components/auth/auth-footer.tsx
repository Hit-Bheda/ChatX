import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import Google from "@/assets/google.png";
import Github from "@/assets/github.png";
import Image from "next/image";

interface Props {
  text: string;
  url: string;
}

const AuthFooter: React.FC<Props> = ({ text, url }) => {
  return (
    <div className="w-full space-y-3 flex flex-col overflow-hidden">
      <div className="flex items-center justify-center w-full">
        <Separator />
        <Label className="p-2">Or</Label>
        <Separator />
      </div>

      <div className="flex flex-col w-full gap-3 items-center justify-between">
        <Button className="flex items-center w-full justify-center gap-3">
          <Image src={Google} alt="G" width={20} height={20} />
          <Label>Continue With Google</Label>
        </Button>
        <Button className="flex items-center w-full justify-center gap-3">
          <Image src={Github} alt="G" width={20} height={20} />
          <Label>Continue With Github</Label>
        </Button>
      </div>

      <Link href={url} className="w-full">
        <Button variant="link" className="w-full text-white">
          {text}
        </Button>
      </Link>
    </div>
  );
};

export default AuthFooter;
