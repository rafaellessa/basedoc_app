import {User} from './../types/types.auth';
import {BaseDocReducers, BasedocState} from './../types/types.redux';
export const getUser = (state: BasedocState): User | undefined => {
  return state[BaseDocReducers.auth].user?.asMutable({
    deep: true,
  });
};

export const getAuthMetadata = (
  state: BasedocState,
): {loading: boolean; error: string | null} => {
  return {
    loading: state[BaseDocReducers.auth].loading,
    error: state[BaseDocReducers.auth].error,
  };
};
