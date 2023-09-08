import { useState } from 'react';

export default function Login ()
{
     const [ state, setstate ] = useState<boolean>( false );
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     async function onfinsh ( value: any )
     {
          const { username, password } = value.target;
          value.preventDefault();
          console.log( username.value );
          console.log( password.value );
          localStorage.setItem( 'username', username.value );
          localStorage.setItem( 'password', password.value );
     }

     return (
          <div
               style={ { fontStyle: 'normal' } }
               className='h-80 w-80 bg-slate-400 flex justify-center items-center rounded-lg'>
               <form onSubmit={ onfinsh }>
                    <h1 className='text-center font-medium text-xl p-2'>Login</h1>
                    <div className='formitem text-gray-500  p-2 font-semibold '>
                         <label htmlFor='username'></label>
                         <input
                              type='text'
                              id='username'
                              name='username'
                              placeholder='username'
                              // ref='username'
                              className=' p-2 outline-none rounded-lg'
                              required
                         />
                    </div>
                    <div className='formitem  p-2 text-gray-500 font-semibold'>
                         <label htmlFor='password'></label>
                         <input
                              type='password'
                              id='password'
                              name='password'
                              className='p-2 outline-none rounded-lg'
                              // ref='password'
                              placeholder='password'
                              required
                         />
                    </div>
                    <div className='formitem  rounded-lg text-gray-100 text-center p-2'>
                         <button
                              type='reset'
                              className=' p-2 bg-indigo-800 hover:bg-indigo-900 active:bg-indigo-500 rounded-l-md '>
                              reset
                         </button>
                         <button
                              onClick={ () =>
                              {
                                   console.log( state );
                                   setstate( !state );
                              } }
                              type='submit'
                              className='p-2 bg-indigo-800  hover:bg-indigo-900 active:bg-indigo-500  first-letter: rounded-r-md'>
                              login
                         </button>
                    </div>
               </form>
          </div>
     );
}
