


import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

function App() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [referralCode, setReferralCode] = useState('');

    const [users, setUsers] = useState([]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email validation using regex
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            const newUser = { username, email, referralCode };
            const response = await axios.post('https://server-dkjk.onrender.com/users', newUser); // Replace with your backend URL
            console.log('User created:', response.data);
            // Optionally, you can reset the form fields here
            setUsername('');
            setEmail('');
            setReferralCode('');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className='md:w-[1200px] ml-auto mr-auto'>
      <div className='justify-center items-center flex '>
        <div className='w-[250px] mt-8'>
          <img className='w-[full]' src="images/logo.png" alt="" />
        </div>
      </div>
      <div className='flex justify-center items-center '>
        
        <form onSubmit={handleSubmit}>

        <div className='md:w-[500px] flex justify-items-start flex-col mt-8'>
        <h1 className='text-4xl font-extrabold text-[#182636]'>Refer & Earn</h1>
        <label class="block text-gray-700 text-xl font-bold mb-2 mt-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={username} placeholder="Name" onChange={(e) => setUsername(e.target.value)} required></input>

      <label className="block text-gray-700 text-xl font-bold mb-2 mt-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>

      <label className="block text-gray-700 text-xl font-bold mb-2 mt-2" for="referal code">
        Referal Code
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Referal Code"
      value={referralCode} onChange={(e) => setReferralCode(e.target.value)} required></input>
      <div className='flex justify-center items-center'>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 md:w-[150px] flex justify-center items-center">
  Send invites
</button>
 </div>
      
      </div> 

        </form>
       
      </div>
      
    </div>
    );
}

export default App;





