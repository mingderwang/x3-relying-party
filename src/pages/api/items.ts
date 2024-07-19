import { getUser } from '../../utils/kv'

export const GET = async ({  }) => {
  return new Response(JSON.stringify([
    await getUser() 
  ]))
}
