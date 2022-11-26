import React, { useState } from 'react'
import styles from '../../styles/admin/productmanage.module.css'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BiImageAdd } from 'react-icons/bi'
import { cloudinaryUpload, createProduct } from '../../util/baseUrl'

const AddProductForm = ({setOpenAddForm}) => {

  const [file, setFile] = useState(null)
  const [type, setType] = useState("meal")
  const [productName, setProductName] = useState("")
  const [smallSize, setSmallSize] = useState("")
  const [middleSize, setMiddleSize] = useState("")
  const [largeSize, setLargeSize] = useState("")
  const [noSize, setNoSize] = useState("")
  const [desc, setDesc] = useState("")
  
  const handleAddProduct = async(e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "uploads")

    try {
      const fileResponse = await cloudinaryUpload(data)
      const { url } = fileResponse.data

      let allInputs = {
        type: type,
        name: productName,
        price: (type === "side" || type === "dessert") ? 
        [parseInt(noSize)] :
        [parseInt(smallSize), parseInt(middleSize), parseInt(largeSize)]       ,
        desc: desc,
        image: url
      }

      await createProduct(allInputs)
      setOpenAddForm(false)

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className={styles.formbox}>
      <div className={styles.closebtn}>
        <FaRegTimesCircle 
          className={styles.closebtnicon}
          onClick={() => setOpenAddForm(false)}
        />
      </div>
     <form onSubmit={handleAddProduct}>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
          <option value="meal">Meal</option>
          <option value="side">Side Meal</option>
          <option value="dessert">Dessert</option>
          <option value="drink">Drink</option>
      </select>
      <input type="text" placeholder='Product name...' onChange={(e) => setProductName(e.target.value)} />
      {(type === "side" || type === "dessert") ? 
      <input type="number" placeholder='price' onChange={(e) => setNoSize(e.target.value)} /> :
      <div className={styles.priceinputs}>
        <input type="number" placeholder='Small' onChange={(e) => setSmallSize(e.target.value)} />
        <input type="number" placeholder='Medium' onChange={(e) => setMiddleSize(e.target.value)} />
        <input type="number" placeholder='Large' onChange={(e) => setLargeSize(e.target.value)} />
      </div>
    }
    <textarea placeholder='Product description...' onChange={(e) => setDesc(e.target.value)}></textarea>
    <div className={styles.fileupload}>
      <label htmlFor="file">
        <BiImageAdd className={styles.fileicon}/>
      </label>
      <input 
        type="file" 
        id="file" 
        onChange={(e) => setFile(e.target.files[0])}
      />
      <span className={styles.filename}>{ file? file.name: "No chosen image"}</span>
    </div>
    <button className={styles.addformbtn}>Add Product</button>
     </form>
    </div>
  )
}

export default AddProductForm