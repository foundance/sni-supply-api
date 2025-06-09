import { ethers } from "ethers";
import { NextRequest, NextResponse } from "next/server";
import ERC20 from "../../abis/ERC20.json";

//Total Supply refers to the # of coins in existence right now (minus any coins that have been verifiably burned.
export async function GET(request: NextRequest) {
  const provider = new ethers.JsonRpcProvider("https://polygon-rpc.com");

  const sniContract = new ethers.Contract(
    process.env.SNI_ADDRESS as string,
    ERC20.abi,
    provider,
  );

  const totalSupply = await sniContract.totalSupply();

  return new Response(ethers.formatUnits(totalSupply, 18));
}
