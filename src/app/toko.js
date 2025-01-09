
export default function Toko() {
    return(
        <div className="flex flex-col justify-center items-center w-full px-6 lg:px-24 relative">
            <div className="text-5xl font-bold text-c_green p-10 text-center">
                <h1>Temukan Kami</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
                <a href="https://shopee.co.id/metto_tea" className="w-full h-1/5 ">
            <div className="flex justify-center items-center bg-c_shopee rounded-lg p-5 w-full relative hover:scale-105 transition-all duration-500">
                <img src="/assets/Shopee-white.svg" alt="tiktok shop" className="h-10"/>
                <div className="flex justify-center items-center text-white font-bold bg-c_green p-1 rounded-full absolute right-3 top-3 size-6">1</div>       
            </div>
            </a>
                <a href="#" className="w-full h-1/5 ">
            <div className="flex justify-center items-center bg-c_shopee rounded-lg p-5 w-full relative hover:scale-105 transition-all duration-500">
                <img src="/assets/Shopee-white.svg" alt="tiktok shop" className="h-10"/>
                <div className="flex justify-center items-center text-white font-bold bg-c_green p-1 rounded-full absolute right-3 top-3 size-6">2</div>       
            </div>
            </a>
                <a href="#" className="w-full h-1/5 ">
            <div className="flex justify-center items-center bg-black rounded-lg p-5 w-full relative hover:scale-105 transition-all duration-500">
                <img src="/assets/tiktok-shop-white.svg" alt="tiktok shop" className="h-10 w-60"/>
                <div className="flex justify-center items-center text-white font-bold bg-c_green p-1 rounded-full absolute right-3 top-3 size-6">1</div>       
            </div>
            </a>
                <a href="#" className="w-full h-1/5 ">
            <div className="flex justify-center items-center bg-black rounded-lg p-5 w-full relative hover:scale-105 transition-all duration-500">
                <img src="/assets/tiktok-shop-white.svg" alt="tiktok shop" className="h-10 w-60"/>
                <div className="flex justify-center items-center text-white font-bold bg-c_green p-1 rounded-full absolute right-3 top-3 size-6">2</div>       
            </div>
            </a>
            </div>
        </div>
    )
}
