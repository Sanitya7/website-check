
export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface LessonCard {
  title: string;
  description: string;
  tag: string;
}
