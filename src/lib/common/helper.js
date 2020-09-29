export function transformToRequstBody(question) {
  let body = {};
  for (let el of question) {
    body[el.field] = el.answer;
  }
  return body;
}
