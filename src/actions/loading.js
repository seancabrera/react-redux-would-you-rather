export const SET_IS_LOADING = 'SET_IS_LOADING';

export function setIsLoading(loading) {
  return {
    type: SET_IS_LOADING,
    loading
  };
}