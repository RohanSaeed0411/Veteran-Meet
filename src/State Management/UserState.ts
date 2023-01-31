import create from "zustand";

import { User } from "../Data/EventsMockData";

interface userState {
  user: User | null;
  setUser: (user: User) => void;
}
const userStore = create<userState>((set) => ({
  user: null,
  setUser: (user) =>
    set((state) => ({
      user: (state.user = user),
    })),
}));

export default userStore
