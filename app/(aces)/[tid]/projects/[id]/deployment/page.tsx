import { BaseFrame } from "@/components/frames";

export default async function Page() {
  return (
    <div className="aces-project-deployment">
      <h2 className="text-slate-700 font-semibold">Waktu &amp; Tanggal Tes</h2>
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

      <h2 className="text-slate-700 font-semibold">Alamat Tes</h2>
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

      <h2 className="text-slate-700 font-semibold">Jadwal Interview</h2>
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

      <h2 className="text-slate-700 font-semibold">Jadwal Diskusi</h2>
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

      <h2 className="text-slate-700 font-semibold">Undangan / Notifikasi</h2>
      <p className="text-gray-500">Pengelompokan (grouping) diperlukan untuk penjadwalan Interview dan Diskusi</p>
      <BaseFrame>
        <div className="flex items-center min-h-[300px] px-5 py-4">
          <p className="max-w-3xl mx-auto text-center">
            Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for
            class names, generating the corresponding styles and then writing them to a static CSS file.
          </p>
        </div>
      </BaseFrame>
    </div>
  );
}