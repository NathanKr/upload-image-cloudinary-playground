import './App.css'
import UploadWidget from './components/UploadWidget'

function App() {

  return (
    <>
      <h3>Upload image using cloudinary widget</h3>
      <UploadWidget/>
      <h2>Uploaded images</h2>
      <img src="https://res.cloudinary.com/duvy7wmyy/image/upload/v1683438274/kpox1bmtgceijjltjq7i.jpg" alt="" />
      <img src="https://res.cloudinary.com/duvy7wmyy/image/upload/v1683439627/a9igu4fueqd66zhfyw4u.jpg" alt="" />
    </>
  )
}

export default App
