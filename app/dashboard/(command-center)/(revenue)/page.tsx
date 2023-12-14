import PrimaryButton from "@/src/components/Button";

export default function Page() {
  return <div className="p-5">
    <h2 className="font-bold text-lg">Oct 01, 2021 – July 22, 2022</h2>
    <p className="text-sm text-gray-700">Comparing to: May 01, 2021 – Sept 15, 2022</p>
    
    <div className="flex justify-between items-stretch mr-auto">
      <div className="my-3 flex"> 
        <PrimaryButton title="Custom" active={true} />
        <PrimaryButton title="Last period" />
        <PrimaryButton title="Last 30d" />
        <PrimaryButton title="Last 60d" />
        <PrimaryButton title="Last 3m" />
      </div>
      <div className="my-3">
        <PrimaryButton title="0 applied" />
      </div>
    </div>
  </div>
}