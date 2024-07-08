import IMAGES from '../assets/IMAGES';

type TImages = keyof typeof IMAGES;

type TServerResponse<T> = {
  statusCode: 200 | 400 | 500 | 401 | 201 | 204 | 429;
  status: 'success' | 'error';
  title: string;
  message: string;
  error?: string;
  data?: T;
  pageData?: unknown;
};
