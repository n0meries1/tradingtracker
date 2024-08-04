import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";


export async function GET() {
    const tradingData = await prisma.tradingData.findMany({
        orderBy: {
            serialnumber: 'asc',
        }
    });
    
    return NextResponse.json(tradingData);
}


export async function POST(request: Request) {
    
    const { date, symbol, purchaseprice, soldprice, sharequantity } = await request.json();
    const parsedDate = new Date(date);
    const isoDate = parsedDate.toISOString();

    const latestSerialNumber = await prisma.tradingData.findMany({
        orderBy: {
            serialnumber: 'desc',
        },
        take: 1,
    })

    const newLatestSerialNumber = latestSerialNumber.length > 0 ? latestSerialNumber[0].serialnumber + 1 : 1;
    
    const createdData = await prisma.tradingData.create({
        data: {
            date: isoDate,
            serialnumber: newLatestSerialNumber,
            symbol: symbol,
            purchaseprice: purchaseprice,
            soldprice: soldprice,
            sharequantity: sharequantity,
        },
    });

    return new Response(JSON.stringify(createdData), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}