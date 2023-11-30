import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {
    const [nav, setnav] = useState(false);
  return (
    <div className="Header">
        <div className="titre">
            <div  onClick={()=> setnav(!nav)}>
                <AiOutlineMenu size={30}/>

            </div>
            <h1>Best<span>Eats</span></h1> 
            <div className="liv">
                <p>Delivery</p>
                <p>Pickup</p>
            </div>
        </div>

        {/* menu recherche */}
        <div className="recher">
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder='Rechercher des aliments' />
        </div>

        {/* cart button */}
        <button>
            <BsFillCartFill size={20}/> Cart
        </button>

        {/* menu mobile */}
        {nav ? <div className="na"></div>: '' }

        {/* side menu */}
        <div className={nav ?'nave': 'noNav'}>
            <AiOutlineClose
            onClick={()=> setnav(!nav)}
            size={30}
            className='close'
            />
         <h2 >
          Best <span>Eats</span>
        </h2>
        <nav>
            <ul >
                <li ><TbTruckDelivery size={25} c/> Orders</li>
                <li ><MdFavorite size={25}  /> Favorites</li>
                <li ><FaWallet size={25}  /> Wallet</li>
                <li ><MdHelp size={25}  /> Help</li>
                <li ><AiFillTag size={25}  /> Promotions</li>
                <li ><BsFillSaveFill size={25}  /> Best Ones</li>
                <li ><FaUserFriends size={25}  /> Invite Friends</li>
            </ul>
        </nav>   
        </div>
    </div>
  )
}

export default Navbar