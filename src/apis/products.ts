import type { Product } from '../types/product';
import type { HostNameType } from '../types/server';

import { servers } from '../constants/server';

export const getProducts = async (hostName: HostNameType) => {
  const hostURL = servers[hostName];
  const response = await fetch(`${hostURL}/products`);

  if (!response.ok) {
    throw new Error(response.status.toString());
  }

  const data: Product[] = await response.json();
  return data;
};
