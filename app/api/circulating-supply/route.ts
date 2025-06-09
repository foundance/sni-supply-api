import { ethers } from "ethers";
import { NextRequest, NextResponse } from "next/server";
import ERC20 from "../../abis/ERC20.json";

//Circulating Supply refers to the # of coins that are circulating in the market and in the general public's hands
export async function GET(request: NextRequest) {
  const provider = new ethers.JsonRpcProvider("https://polygon-rpc.com");

  const sniContract = new ethers.Contract(
    process.env.SNI_ADDRESS as string,
    ERC20.abi,
    provider,
  );

  const totalSupply: bigint = await sniContract.totalSupply();

  //Subtract tokens that are
  // - Staked
  // - In any of our 3 Safes
  const supplies: bigint[] = await Promise.all([
    sniContract.balanceOf(process.env.EXEC_SAFE_ADDRESS),
    sniContract.balanceOf(process.env.BUILDERS_SAFE_ADDRESS),
    sniContract.balanceOf(process.env.DEVELOPERS_SAFE_ADDRESS),
    sniContract.balanceOf(process.env.VESNI_ADDRESS),
  ]);

  const circulating =
    totalSupply -
    supplies.reduce((acc, val) => {
      return acc + val;
    }, 0n);

  return new Response(ethers.formatUnits(circulating, 18));
}
