import { NextApiResponse, NextApiRequest } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@/lib/session'
import { apiURL } from '@/lib/utils'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != 'POST') return res.status(405).json({ info: 'Method Not Allowed' })

  const { uid, tid, password } = JSON.parse(await req.body);
  const url = apiURL(`/switch-to/${tid}`);
  const rs = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ uid, tid, password }),
  })

  if (rs.ok) {
    const json = await rs.json();
    const user = json.user;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } else {
    const json = await rs.json(); // -> { info: "..." }
    res.status(400).json({ message: json.info });
  }
}

export default withIronSessionApiRoute(handler, sessionOptions)
