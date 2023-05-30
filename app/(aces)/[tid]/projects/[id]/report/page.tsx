import { BaseFrame } from "@/components/frames";

export default async function Page() {
  return (
    <div className="aces-project-report min-h-[500px]">
      <h2 className="text-slate-700 font-semibold">Project Report</h2>
      <p className="text-gray-500">Judul dan deskripsi diperlukan dalam laporan</p>
      <BaseFrame>
        <div className="flex items-center min-h-[300px] px-5 py-4">
          <p>
            Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for
            class names, generating the corresponding styles and then writing them to a static CSS file.
          </p>
        </div>
      </BaseFrame>
    </div>
  );
}