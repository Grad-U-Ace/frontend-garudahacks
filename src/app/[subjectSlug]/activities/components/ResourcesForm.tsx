import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ResourcesForm() {
  return (
    <div className="flex h-full w-full flex-col gap-4 items-center justify-center p-4 text-2xl text-white">
      <div className="flex w-fit gap-9">
        <p className="w-[64px]">Topic</p>
        <Input className="w-[240px] text-black" />
      </div>
      <div className="flex w-fit gap-9">
        <p className="w-[64px]">Reference</p>
        <Input className="w-[240px] text-black" />
      </div>
      <div className="flex w-fit gap-9">
        <p className="w-[64px]">Type</p>
        <RadioGroup className="w-[240px]">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multiple-choice" id="multiple-choice" />
            <Label className="text-lg" htmlFor="multiple-choice">PDF Handout</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fill-in-the-blank" id="fill-in-the-blank" />
            <Label className="text-lg" htmlFor="fill-in-the-blank">Presentation Slide</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
