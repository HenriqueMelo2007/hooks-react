import { Box } from "./components/box"

export function App() {

  const hooks = [ {hook: 'useState', info: 'Gerencia o estado interno de um componente funcional.', id: 1}, {hook: 'useEffect', info: 'Executa efeitos colaterais em resposta a mudanças no componente.', id: 2}, {hook: 'useContext', info: 'Acessa um contexto definido em um componente pai.', id: 3}, {hook: 'useReducer', info: 'Gerencia o estado complexo com base em ações.', id: 4}, {hook: 'useRef', info: 'Cria uma referência mutável que persiste entre re-renderizações.', id: 5}, {hook: 'useMemo', info: 'Memoriza o valor de retorno de uma função para evitar cálculos desnecessários.', id: 6}, {hook: 'useCallback', info: 'Memoriza uma versão otimizada de uma função para evitar re-renderizações desnecessárias.', id: 7}, {hook: 'useLayoutEffect', info: 'Executa um efeito síncrono após as mutações do DOM.', id: 8}, {hook: 'useImperativeHandle', info: 'Personaliza a instância exposta de um componente filho.', id: 9}, {hook: 'useDebugValue', info: 'Fornece informações de depuração personalizadas para um hook personalizado.', id: 10} ]

  return (
    <div>

      <div className="header">
        <div className="logo-tittle">
          <img className="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
          <h1>React Hooks</h1>
        </div>
      </div>

      <div className="grid-container">
        {hooks.map( ( { hook, info, id } ) => {
        return <Box hook={hook} info={info} key={id}></Box>
        } )}
      </div>

      
      
    </div>
  )
}
