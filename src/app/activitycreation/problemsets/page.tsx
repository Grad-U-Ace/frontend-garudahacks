import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function BikinSoalPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-2xl text-white p-4">
      <div className="flex flex-col gap-4 *:first:text-right">
        <div className="flex gap-9 w-fit">
          <p className="w-[50px]">Topic</p>
          <Input className="text-black w-[240px]" />
        </div>
        <div className="flex gap-9 w-fit">
          <p className="w-[50px]">Question</p>
          <Input className="text-black w-[240px]" />
        </div>
        <div className="flex gap-9 w-fit">
          <p className="w-[50px]">Level</p>
          <Input className="text-black w-[240px]" />
        </div>
        <div className="flex gap-9 w-fit">
          <p className="w-[50px]">Type</p>
          <RadioGroup className="w-[240px]">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="multiple-choice"
                id="multiple-choice"
              />
              <Label htmlFor="multiple-choice">Multiple Choice</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="fill-in-the-blank"
                id="fill-in-the-blank"
              />
              <Label htmlFor="fill-in-the-blank">Fill in the Blank</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
