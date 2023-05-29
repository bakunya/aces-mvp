interface Props {
  params: { tid: string; };
  children: React.ReactNode;
}

interface WithIdProps {
  params: {
    tid: string;
    id: string;
  };
}

interface User {
  ts: number;
  uid: string;
  tid: string;
  default_org: string;
  email: string;
  fullname: string;
  username: string;
  role: string;
  status: string;
  mems: number;
  active_mems: number;
  org_name: string;
  type: string;
  license: string;
  admin_id: string;
  exp_date: string | null;
}