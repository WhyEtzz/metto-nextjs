
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
            </div>
            </a>
                <a href="https://vt.tiktok.com/ZS6beVcyR/?page=Mall" className="w-full h-1/5 ">
            <div className="flex justify-center items-center bg-black rounded-lg p-5 w-full relative hover:scale-105 transition-all duration-500">
                <img src="/assets/tiktok-shop-white.svg" alt="tiktok shop" className="h-10 w-60"/> 
            </div>
            </a>
                <a href="https://maps.app.goo.gl/tGx5avRXacTDYoUm7" className="w-full h-1/5 ">
            <div className="flex justify-center items-center bg-[#045E4D] rounded-lg p-5 w-full relative hover:scale-105 transition-all duration-500">
                <img src="/assets/Toko Ban Sen Tong.svg" alt="offline shop" className="h-10 w-60"/>      
            </div>
            </a>
            </div>
        </div>
    )
}
