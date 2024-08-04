import { useInterval } from "interval-hooks";
import { revalidatePath } from "next/cache";

export default async function TrackingTable() {

  function formatDateToDDMMYY(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;  
  }

  
  revalidatePath('/');
  
  const response = await fetch('http://localhost:3000/api/tradingdata', {
    method: "GET",
  });
  
  const data = await response.json();

  return (
    <div className='bg-secondary flex-grow flex flex-col py-60 px-60 pt-4 m-0'>
      <div className='p-0 mx-auto'> 
        <table className='w-full max-w-8xl text-center table-fixed border bg-accent border-accent-content text-accent-content'>
          <thead>
            <tr>
              <th className='px-8 py-4 border text-center'>S/N</th>
              <th className='px-16 py-4 border text-center'>Date</th>
              <th className='px-16 py-4 border text-center'>Symbol</th>
              <th className='px-16 py-4 border text-center'>Purchase Price</th>
              <th className='px-16 py-4 border text-center'>Sold Price</th>
              <th className='px-16 py-4 border text-center'>Purchase Quantity</th>
              <th className='px-16 py-4 border text-center'>Profit/Loss %/$</th>
              <th className='px-16 py-4 border text-center  '>Win/Loss</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className='px-8 py-4 border'>{item.serialnumber}</td>
                <td className='px-16 py-4 border'>{item.date}</td>
                <td className='px-16 py-4 border'>{item.symbol}</td>
                <td className='px-16 py-4 border'>{item.purchaseprice}</td>
                <td className='px-16 py-4 border'>{item.soldprice}</td>
                <td className='px-16 py-4 border'>{item.sharequantity}</td>
                <td className='px-16 py-4 border'>{(item.soldprice - item.purchaseprice)*item.sharequantity}</td>
                <td className={`px-16 py-4 border text-black font-bold ${item.soldprice - item.purchaseprice >= 0 ? 'bg-green-400' : 'bg-red-400'}`}>{(item.soldprice - item.purchaseprice) >= 0 ? 'W': 'L'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


