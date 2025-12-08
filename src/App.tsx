
import ProductsList from "./components/ProductsList"
import Button from "./components/UI/Button"
import Modal from "./components/UI/Modal"
import { useState } from "react"
import { inputFormList } from "./data"
import Input from "./components/UI/Input"

function App() {
  
  const [isOpen, setIsOpen] = useState(false)

// [x] handler modal
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

// [x] render
  const renderFormInputsList= inputFormList.map((input)=>(
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.name}>{input.label}</label>
      <Input type={input.type} name={input.name}/>
    </div>
  ))

  return (
    <main className="container mx-auto">

      <div className="flex">
        <Button onClick={open} className="bg-indigo-600 px-4 py-2 text-font-medium mt-7 mx-auto" width="w-fit">
                  Add new Product
        </Button>
      </div>

      <ProductsList/>

      <Modal isOpen={isOpen} close={close} title="Add new Product">

        <form className="space-y-3" onSubmit={(e)=>e.preventDefault()}>
          {renderFormInputsList}

          <div className="flex justify-between gap-3">
            <Button  className="items-center gap-2 rounded-md bg-indigo-600" onClick={close}>Submit</Button>
            <Button  className="items-center gap-2 rounded-md bg-gray-700" onClick={close}>Cancel</Button>
          </div>

        </form>
      </Modal>

    </main>
  )
}

export default App
