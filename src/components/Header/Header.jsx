import React from 'react';
import {BiCloset} from 'react-icons/bi'
import {BsCartCheck, BsFillPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className='flex justify-between m-3 border-b border-gray-300 p-2'>
                <Link to='/' className='flex items-center text-red-400 text-lg font-sans font-medium'><BiCloset/><h1>Shoppy</h1></Link>
                <nav className='flex items-center gap-4'>
                    <Link to='/products' className=' font-bold'><button>Products</button></Link>
                    <Link to='/carts' className=' font-bold text-xl'><button><BsCartCheck/></button></Link>
                    <Link to='/products/new' className=' font-bold text-xl'><button><BsFillPencilFill/></button></Link>
                    <Link className='px-1 font-medium bg-red-400 text-white rounded-sm'><button>Login</button></Link>
                </nav>
            </header>
        </>
    );
}

