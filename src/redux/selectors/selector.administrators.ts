import {Administrator} from './../types/types.administrators';
import {BaseDocReducers, BasedocStateRoot} from './../types/types.redux';

export const getAdministrators = (state: BasedocStateRoot): Administrator[] => {
  return state[BaseDocReducers.administrators][BaseDocReducers.administrators];
};

export const getAdministratorsMetadata = (
  state: BasedocStateRoot,
): {loading: boolean; error?: string | null} => {
  return {
    loading:
      state[BaseDocReducers.root][BaseDocReducers.administrators].loading,
    error: state[BaseDocReducers.root][BaseDocReducers.administrators].error,
  };
};
