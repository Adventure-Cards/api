import type { NextApiRequest, NextApiResponse } from 'next'
import pino from 'pino'


type Data = {
  response: any,
  err?: any
}

const OPEN_SEA_BASE_URL = 'https://api.opensea.io/api/v1/assets?collection=adventure-cards&'
const logger = pino()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { token_ids } = req.query
  try {
    const encodedTokenIds = Array.isArray(token_ids) ?
      token_ids.map((id) => `token_ids=${id}`).join('&') :
      `token_ids=${token_ids}`
    const response = await fetch(OPEN_SEA_BASE_URL + encodedTokenIds)
      .then(res => res.json())
      .catch(err => {
        throw Error(err);
      });
    logger.info(response);
    return res.status(200).json({ ...response })
  } catch (err) {
    logger.error({ msg: 'err', err });
    return res.status(501).json({ response: 'err', err })
  }
}
