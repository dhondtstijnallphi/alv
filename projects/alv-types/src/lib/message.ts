export interface message {
  id: string;
  type: string;
  description: string;
  longDescription: string;
  timestamp: Date;
  location: string;
  sender: string;
  application: string;
  version: string;
}
