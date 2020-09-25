export default interface IDay {
  _id: string;
  userId?: string;
  goodThing: string;
  badThing: string;
  goalTomorrow: string;
  mainActivity: string;
  score: number;
  jobs?: Array<number>;
}
