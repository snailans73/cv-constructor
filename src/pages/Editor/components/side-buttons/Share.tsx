import { observer } from 'mobx-react-lite'

const Share = observer(() => {
  return (
    <button onClick={() => {
      // navigator.clipboard.writeText(`http://localhost:3000/?editorCollapsed=false${userData.converToUrlParams()}`)
    }}>123</button>
  )
})

export default Share