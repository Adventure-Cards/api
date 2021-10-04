## Adventures Cards API

Centralised API for everything [Adventures Cards](https://adventure-cards.xyz/).

## Development

```bash
yarn dev
```

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/opensea](http://localhost:3000/api/hello). This endpoint will work as a proxy for calling the [OpenSea API](https://api.opensea.io/api/v1/assets?collection=lootproject&token_ids=26&token_ids=32&token_ids=38&token_ids=53&token_ids=62&token_ids=77&token_ids=119&token_ids=125&token_ids=136&token_ids=161&token_ids=162&token_ids=167&token_ids=180&token_ids=181&token_ids=189&token_ids=237&token_ids=246&token_ids=255&token_ids=265&token_ids=276).

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction).
