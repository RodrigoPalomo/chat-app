import React from 'react';
import { auth } from '../firebase';

const style = {
    button: `bg-gray-200 px-8 py-2 hover:bg-red-600 duration-500 rounded-xl font-mono
    transition ease-in-out hover:-translate-y-[1px] hover:scale-110`,
}

const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

    return (
    <div onClick={() => auth.signOut()} className={style.button}>
        Log Out
    </div>
  )
}

export default LogOut;