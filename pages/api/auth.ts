import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@/lib/session'
import { apiURL } from '@/lib/utils'

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = JSON.parse(await req.body)

  try {
    const url = apiURL("/auth");
    const rs = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });

    if (rs.ok) {
      const json = await rs.json();
      const user = json.user;
      req.session.user = user;
      await req.session.save();
      res.json(user);
    } else {
      const json = await rs.json();
      res.status(400).json({ message: json.info });
    }
  } catch (error) {;
    res.status(500).json({ message: (error as Error).message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);