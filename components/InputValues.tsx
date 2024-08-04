"use client";

import { revalidatePath } from 'next/cache';
import React, { useState } from 'react';



const InputValues = () => {
  
    const [date, setDate] = useState(new Date());
    const [symbol, setSymbol] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [soldPrice, setSoldPrice] = useState('');
    const [shareQuantity, setShareQuantity] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      const data = {
        date: date,
        symbol: symbol,
        purchaseprice: parseFloat(purchasePrice),
        soldprice: parseFloat(soldPrice),
        sharequantity: parseInt(shareQuantity),
      }

     
      await fetch('http://localhost:3000/api/tradingdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });

      

      

    }
    return (
      <form onSubmit={handleSubmit} className='px-60 pb-16 flex justify-center gap-1'>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name='date' placeholder="Date" className="h-28 w-80 rounded-l-xl text-center"/>
          <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} name='symbol' placeholder="Symbol"  className="h-28 w-80 text-center"/>
          <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} name='purchaseprice' placeholder="Purchase Price" className="h-28 w-80 text-center"/>
          <input type="number" value={soldPrice} onChange={(e) => setSoldPrice(e.target.value)} name='soldprice' placeholder="Sold Price" className="h-28 w-80 text-center"/>
          <input type="number" value={shareQuantity} onChange={(e) => setShareQuantity(e.target.value)} name='sharequantity' placeholder="Share Quantity" className="h-28 w-80 text-center"/>
          <button className='bg-primary-content p-8 rounded-r-xl'>Submit</button>
      </form>
  )
}

export default InputValues