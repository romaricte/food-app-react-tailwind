import React from 'react'
import './HeadlineCard.css'
const HeadlineCard = () => {
    return (
        <div className='containerh'>
            {/* Card */}
            <div className='container-i'>
                {/* Overlay */}
                <div className='container-p'>
                    <p >Sun's Out, BOGO's Out</p>
                    <p >Through 8/26</p>
                    <button>Order Now</button>
                </div>
                <img
                    
                    src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='container-i'>
                {/* Overlay */}
                <div className='container-p'>
                    <p >New Restaurants</p>
                    <p >Added Daily</p>
                    <button >Order Now</button>
                </div>
                <img
                    
                    src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='container-i'>
                {/* Overlay */}
                <div className='container-p'>
                    <p >We Deliver Desserts Too</p>
                    <p >Tasty Treats</p>
                    <button >Order Now</button>
                </div>
                <img
                    
                    src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    alt='/'
                />
            </div>
        </div>


    )
}

export default HeadlineCard