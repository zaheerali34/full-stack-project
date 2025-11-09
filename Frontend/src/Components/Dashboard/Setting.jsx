import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Setting() {
  const [setting, setSetting] = useState('');
  console.log(setting);

  useEffect(() => {
      async function getAPI() {
        const api = await axios.post('http://localhost:3000/user');
        setSetting(api.data)
      }
      getAPI();
  }, [])

  return (
    <div className='w-[20rem] h-[50vh] bg-white shadow-2xl fixed bottom-8  left-24 rounded-2xl py-4 px-5'>{setting}</div>
  )
}

export default Setting;