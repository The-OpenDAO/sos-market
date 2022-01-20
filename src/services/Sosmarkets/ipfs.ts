import api, { sosmarketApiUrl } from './api';

async function addFile(file: any) {
  const url = `${sosmarketApiUrl}/ipfs/add`;

  const form = new FormData();
  form.append('file', file);

  return api.post(url, form);
}

// eslint-disable-next-line import/prefer-default-export
export { addFile };
