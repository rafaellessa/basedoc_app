import {Administrator} from './../types/types.administrators';
import {BaseDocReducers, BasedocStateRoot} from './../types/types.redux';

export const getAdministrators = (state: BasedocStateRoot): Administrator[] => {
  return state[BaseDocReducers];
};

export const getAdministratorsMetadata = (
  state: BasedocStateRoot,
): {loading: boolean; error?: string | null} => {
  return {
    loading: state[BaseDocReducers.root].loading,
    error: state[BaseDocReducers.root].error,
  };
};
