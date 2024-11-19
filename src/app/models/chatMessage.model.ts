export interface ChatMessage {
    message: string; //--
    type: 'sent' | 'received'; 
    date: Date; //--
  }