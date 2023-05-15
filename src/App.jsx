import { Box } from "./components/box"

export function App() {

  const hooks = ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 'useRef', 'useImperativeHandle', 'useLayoutEffect', 'useDebugValue', 'useDeferredValue', 'useTransition', 'useId', 'useSyncExternalStore', 'useInsertionEffect']

  return (
    <div>

      {hooks.map( (hooks) => {
        return <Box hook={hooks}></Box>
      } )}
      
    </div>
  )
}
