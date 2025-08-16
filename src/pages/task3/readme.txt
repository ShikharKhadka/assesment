 useMemo:  because in every re-render it wont return the value. It will cache the value. If the dependecy changes then it re-renders with new value.
 useCallback: similar as memo its cache the function instead the value. If dependecy changes it update that value.
 debounceSearch: after user stop typing for the set duration it wont trigger the function.If not then the function is called every time the use types each filed.

