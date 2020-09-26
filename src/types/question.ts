export default interface IQuestion {
  index: number;
  type: IQuestionType;
  title: string;
  field: string;
  answer: string;
}

export enum IQuestionType {
  shortSentence = "shortSentence",
  score = "score",
  dateTime = "dateTime",
  select = "select",
  multiSelect = "multiSelect",
  longSentence = "longSentence",
}
