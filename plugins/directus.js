import { Directus, AxiosTransport, MemoryStorage } from '@directus/sdk';

export default ({ app }, inject) => {
  const directus = new Directus(process.env.API_URL);
}
