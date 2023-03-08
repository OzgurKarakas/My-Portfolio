import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-300 text-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 textt-gray-300'>Contact</p>
                <p className='text-grgay-300 py-4'>Contact Me!</p>
            </div>
            <input className='my-4 p-2 bg-[#0a192f] text-gray-300' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#0a192f] text-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#0a192f] p-2 text-gray-300' name="message" rows="10" placeholder='Message'></textarea>
            <button className='bg-[#0a192f] text-gray-300 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact