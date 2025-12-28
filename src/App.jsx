import './App.css'
import Card from './components/card'
import usefetch from './hooks/usefetch'

function App() {
  const { data, err, loading } = usefetch("https://api.escuelajs.co/api/v1/products")

  if (loading) return <h1 className='bg-black w-full h-screen flex justify-center items-center text-white font-bold'>LOADING...</h1>
  if (err) return <h1 className='bg-black w-full h-screen flex justify-center items-center text-white font-bold'>ERROR OCCURED....</h1>


  return (
    <>
      <div className='flex flex-col'>
        <div><nav className='flex justify-center text-3xl p-5 fixed z-10 bg-gray-500 w-full font-bold'>Photos</nav></div>
        <div className='w-full mt-15 flex items-center bg-black text-white p-6'><a href="https://github.com/simarjeetdev/React-custom-hook">Github Repo Link with documentation In Read me file</a></div>
        <div className='bg-black p-2 pt-5 flex gap-2 w-full h-full justify-center text-white flex-wrap'>
          {data.map((e, idx) => {
            return <Card id={idx} title={e.title} img={e.images} des={e.description} price={e.price} />
          })}
        </div>
      </div>

    </>
  )
}

export default App
