import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div>
      <Button variant={"elevated"}>
        I am an elevated button
      </Button>
      <Input placeholder="I am an input"/>
      <Progress value={50} />
    </div>
  );
}
