import { ChatDataResponse } from "@/api/chat/chat.interface";
import { httpClient } from '../interceptors';

export async function askQuestion(params: { question: string }): Promise<ChatDataResponse> {
  return httpClient.post('/question', { ...params });
}
