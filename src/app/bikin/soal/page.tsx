import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function BikinSoalPage() {
  return (
    <div className="text-2xl">
      <div>
        <div className="flex gap-9">
          <p>Topik</p>
          <Input className="text-black" />
        </div>
        <div className="flex gap-9">
          <p>Soal</p>
          <Input className="text-black" />
        </div>
        <div className="flex gap-9">
          <p>Level</p>
          <Input className="text-black" />
        </div>
        <div>
          <p>Type</p>
          <RadioGroup>
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
