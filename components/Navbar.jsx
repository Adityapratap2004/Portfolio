import Link from "next/link"



const Navbar = () => {
  return (
    <nav className='text-white flex-between px-8 fixed w-full py-4'>

      <Link href="/" className="flex items-center gap-4">
        <div className=" bg-gray-500  rounded-full font-bold text-3xl py-1.5 px-3">
          A
        </div>
        <p className=" text-lg">Aditya Pratap Singh</p>
      </Link>

      <div>
        <a href="https://drive.google.com/file/d/1sXZQETTpxKV5cF9aEs226m3oKQcXBlc6/view" target="_blank" className=" text-lg bg-gray-500 px-6 py-3 ">
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
