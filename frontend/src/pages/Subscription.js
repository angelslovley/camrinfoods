import React from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubscription } from '../actions/auth';
import '../styles/profile.css';


const Subscription = () => {
    const user = useSelector(state=>state.user?.user)
    const dispatch =useDispatch()

    const handleUpdateSubscription = () => {
        dispatch(updateSubscription({isSubscribed: true}))
    }
 
  return (
      <>
      <SideBar/>
       <div className='mainarea  main-search'>
         <Header/>
        
         <div className='all-products'>
         <div className="add-sec-area">
                <div  className={`og-add `}>
                <p>Pricing stratergies</p>
                <span>Subscription can be segmented to gold and non-gold members</span>
                <span>Features: Free delivery</span>
                <span>Monthly Rate: 1500 </span>
                <div className="btns">
                {user?.isSubscribed ? <button className='btn' disabled>Subscribed</button> : <button className='btn' onClick={()=>handleUpdateSubscription()}>Subscribe</button> }    
                </div>
               </div>
        </div>
        </div>
         </div>
         <LeftSide/>
      </>
  );
};

export default Subscription;
