export enum OptionType {
  answer = 1,
  question = 2,
  answerCorrect = 3,
  answerWrong = 4
}

export interface Option {
  id?: number;
  text?: string;
  type?: OptionType;
  icon?: string;
  isCorrect?: boolean;
}

export interface Question {
  id?: number;
  text?: string;
  answers?: Answer[];
}

export interface Answer {
  id?: number;
  text?: string;
  isCorrect: boolean;
}