import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"


export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    const cookie_user = req.headers.cookie
    console.log(cookie_user)
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    ...

  })
}