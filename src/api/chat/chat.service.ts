import { ChatDataResponse } from '@/api/chat/chat.interface';
import { httpClient } from '../interceptors';

export async function getChatData(): Promise<ChatDataResponse> {
  return httpClient.get('/1.json');
}

export async function askQuestion(params: {
  question: string;
}): Promise<any> {
  return httpClient.post('/chat', { dataid: '', message: params.question });
}
