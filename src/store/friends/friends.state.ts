export type TFriend = {
  _id: string;
  name: {
    last: string;
    first: string;
  };
  email: string;
  picture: string;
  location: {
    latitude: number | null;
    longitude: number | null;
  };
};

const initialState = {
  data: [] as TFriend[],
};
export default initialState;
