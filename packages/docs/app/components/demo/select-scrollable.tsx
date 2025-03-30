import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/Select/Select.tsx";

export default () => {
  return (
    <Select>

      <SelectTrigger >
        <SelectValue placeholder="Select a region" asChild>
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Africa</SelectLabel>
          <SelectItem value="africa-south1">africa-south1</SelectItem>
        </SelectGroup>

        <SelectSeparator />

        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="asia-east1">asia-east1</SelectItem>
          <SelectItem value="asia-east2">asia-east2</SelectItem>
          <SelectItem value="asia-northeast1">asia-northeast1</SelectItem>
          <SelectItem value="asia-northeast2">asia-northeast2</SelectItem>
          <SelectItem value="asia-northeast3">asia-northeast3</SelectItem>
          <SelectItem value="asia-southeast1">asia-southeast1</SelectItem>
          <SelectItem value="asia-south1">asia-south1</SelectItem>
          <SelectItem value="asia-south2">asia-south2</SelectItem>
        </SelectGroup>

        <SelectSeparator />

        <SelectGroup>
          <SelectLabel>Australia</SelectLabel>
          <SelectItem value="australia-southeast1">australia-southeast1</SelectItem>
          <SelectItem value="australia-southeast2">australia-southeast2</SelectItem>
        </SelectGroup>

        <SelectSeparator />

        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="europe-west1">europe-west1</SelectItem>
          <SelectItem value="europe-west2">europe-west2</SelectItem>
          <SelectItem value="europe-west3">europe-west3</SelectItem>
          <SelectItem value="europe-west4">europe-west4</SelectItem>
          <SelectItem value="europe-west5">europe-west5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}