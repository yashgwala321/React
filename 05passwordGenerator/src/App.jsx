import { useState, useCallback, useEffect , useRef} from 'react'

function App() {

  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // useRef hook 
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+={}[]|\\:;'<>,.?/"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordClipboard = useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllowed, charAllowed, PasswordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-3'>
        <h1 className='text-white text-center p-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label>Length: ({length}) </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              id='charactorInput'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="charactorInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App