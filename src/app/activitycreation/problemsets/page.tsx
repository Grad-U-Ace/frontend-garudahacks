import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ProblemSetMakerPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 text-2xl text-white">
      <div className="flex flex-col gap-4 *:first:text-right">
        <div className="flex w-fit gap-9">
          <p className="w-[64px]">Topic</p>
          <Input className="w-[240px] text-black" />
        </div>
        <div className="flex w-fit gap-9">
          <p className="w-[64px]">Question</p>
          <Input className="w-[240px] text-black" />
        </div>
        <div className="flex w-fit gap-9">
          <p className="w-[64px]">Level</p>
          <Input className="w-[240px] text-black" />
        </div>
        <div className="flex w-fit gap-9">
          <p className="w-[64px]">Type</p>
          <RadioGroup className="w-[240px]">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="multiple-choice" id="multiple-choice" />
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
        <div className="flex w-fit gap-9">
          <Label className="w-[64px] text-2xl" htmlFor="picture">Variants</Label>
          <Input id="picture" type="file" />
        </div>
      </div>
    </div>
  );
}
