import IQuestion from "types/question";

export function transformToRequstBody(question: IQuestion[]) {
  let body: any = {};
  for (let el of question) {
    body[el.field] = el.answer;
  }
  return body;
}
