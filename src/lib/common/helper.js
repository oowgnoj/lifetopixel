export function transformToRequstBody(question) {
  console.log(question)
  let body = {};
  for (let el of question) {
    if(el.field === 'tags') {
      body[el.field] = el.answer.map(el => el.value);
      break;
    }
    body[el.field] = el.answer;
  }
  console.log(body)
  return body;
}
