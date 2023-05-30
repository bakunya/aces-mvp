import { BaseFrame } from "@/components/frames";

export default async function Page() {
  return (
    <div className="aces-project-settings">
      <h2 className="text-slate-700 font-semibold">Title &amp; Description</h2>
      <p className="text-gray-500">Judul dan deskripsi diperlukan dalam laporan</p>
      <BaseFrame>
        <table className="w-full">
          <thead className="bg-gray-100 text-sm font-semibold">
            <tr>
              <td className="w-2/5 px-5 py-3">Kolom 1</td>
              <td className="px-5 py-2">Kolom 2</td>
            </tr>
          </thead>
          <tr>
            <td className="w-2/5 px-5 py-4">Kolom 1</td>
            <td className="px-5 py-3">Kolom 2</td>
          </tr>
        </table>
      </BaseFrame>
      {/*  */}
      <h2 className="text-slate-700 font-semibold">Modul Asesmen</h2>
      <p className="text-gray-500">Judul dan deskripsi diperlukan dalam laporan</p>
      <BaseFrame>
        <table className="w-full">
          <thead className="bg-gray-100 text-sm font-semibold">
            <tr>
              <td className="w-2/5 px-5 py-3">Kolom 1</td>
              <td className="px-5 py-2">Kolom 2</td>
            </tr>
          </thead>
          <tr>
            <td className="w-2/5 px-5 py-4">Kolom 1</td>
            <td className="px-5 py-3">Kolom 2</td>
          </tr>
        </table>
      </BaseFrame>
      {/*  */}
      <h2 className="text-slate-700 font-semibold">Kriteria</h2>
      <p className="text-gray-500">Kriteria adalah ... diperlukan dalam laporan</p>
      <BaseFrame>
        <table className="w-full">
          <thead className="bg-gray-100 text-sm font-semibold">
            <tr>
              <td className="w-2/5 px-5 py-3">Kolom 1</td>
              <td className="px-5 py-2">Kolom 2</td>
            </tr>
          </thead>
          <tr>
            <td className="w-2/5 px-5 py-4">Kolom 1</td>
            <td className="px-5 py-3">Kolom 2</td>
          </tr>
        </table>
      </BaseFrame>
    </div>
  );
}