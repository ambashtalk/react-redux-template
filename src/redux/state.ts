import { PostData } from "./actions";

export interface CounterInterface {
  count: number;
}

export const counterState = {
  count: 0,
};

export interface ThunkInterface {
  data: PostData;
}
export const thunkState: ThunkInterface = {
  data: {
    id: 0,
    userId: 0,
    body: "",
    title: "",
  },
};
