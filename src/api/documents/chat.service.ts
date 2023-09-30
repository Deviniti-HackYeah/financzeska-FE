import { httpClient } from '../interceptors';

export async function askQuestion(params: { question: string }) {
  return httpClient.post('/ask', { ...params });
}
