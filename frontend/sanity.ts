import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'btkdlghv', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset name
  useCdn: false, // `false` if you want fresh data
  apiVersion: '2021-03-25', // use a current ISO date
});

export default client;