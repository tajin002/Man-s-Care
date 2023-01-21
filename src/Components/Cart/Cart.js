import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import CarItem from '../CartItem/CarItem';
import { CartContext } from '../Layout/Main';

const Cart = () => {
    const [cart , setCart] = useContext(CartContext);

    const handleRemoveItem = id =>{
        const remaining = cart.filter(product=>product.id !== id)
        setCart(remaining);
        removeFromDb(id);
        toast.error('Product remove',{ autoClose: 500 })
    }

    let total = 0;

    for(const product of cart){
        total = total + product.price*product.quantity
    }

    const orderHandler = () => {
        if(cart.length){
            setCart([]);
            deleteShoppingCart();
            return toast.success('Order Placed!', { autoClose: 500 })
        }
        return toast.error('Cart is empty', { autoClose: 500 })
    }


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
                <h1 className='text-xl font-semibold'>
                    {cart.length ? 'Review Cart Product' : 'Cart is empty!!'}
                </h1>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {cart.map(product => (
                        <CarItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                        />
                    ))}
                </ul>
                <p className='flex justify-end'>
                    <span className='font-bold text-normal'> Total amount : </span><span className='font-semibold ml-1'>{total}$</span>
                </p>
                <div className='space-y-1 text-right'>
                
                <p className='text-sm text-gray-400'>
                    Not including taxes and shipping costs
                </p>
            </div>
            <div className='flex justify-end space-x-4'>
                <Link to='/shop'>
                    <button
                    type='button'
                    className='px-6 py-2 border rounded-full border-cyan-400'
                    >
                    Back <span className='sr-only sm:not-sr-only'>to shop</span>
                    </button>
                </Link>
                <button
                    onClick={orderHandler}
                    type='button'
                    className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
                >
                    Place Order
                </button>
            </div> 
            </div>
        </div>
    );
};

export default Cart;