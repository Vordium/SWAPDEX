import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'b3jgd1a9',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skp83YaXCJYdQagdQapGjw2xdW6IJujOGCcIjMacYyB8egh5vUNl9N8veZyqyptNYcYQTHedj6xxC4Rgfn90u8To4CX9AtXmRWIvMtsZfAYTOFnQEs4arNPZChH7oeKzW6whiiFlU6LqNs8pR2Zj8RSfkKTnrdMf39DnUUoZoy4mly3vLJVq',
  useCdn: false,
})
