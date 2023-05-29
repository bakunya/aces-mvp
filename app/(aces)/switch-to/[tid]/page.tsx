import { getCookieHeaders, getUserInfo } from "@/lib/cookies";
import { apiURL } from "@/lib/utils";
import SwitchForm from "./switch-form";

async function getData(tid: string) {
  const url = apiURL(`/switch-to/${tid}`);
  const headers = getCookieHeaders();
  const rs = await fetch(url, {
    ...headers,
    // next: { revalidate: 0 },
  });

  if (rs.ok) {
    const json = await rs.json();
    console.log("switch", json);
    return json;
  }
  return null;
}

interface Props {
  params: {
    tid: string;
  };
}

export default async function Page({ params }: Props) {
  // const user = await getUserInfo();
  const data = await getData(params.tid)
  return (
    <div className="aces-switch-account px-[12%] py-[4%]">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Switch Account</h1>
      <SwitchForm tid={params.tid} data={data} />
      <pre className="text-[12.25px]">{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
}