
export interface Response {
  type: ResponseType;
  content: string;
}

export enum ResponseType {
  text = 1,
  thumbnail = 2
}