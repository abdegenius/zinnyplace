<script>
    
</script>
<div class="hidden w-full h-screen md:grid md:grid-cols-12 grid-rows-auto items-stretch border-blue-600 absolute top-0 left-0"  >
    <div class= "col-span-12 md:col-span-7 row-span-6  min-h-72 md:row-span-12 bg-black/50">
        
    </div>
    <div class="w-full row-span-6 sm:grid sm:grid-cols-12 md:col-span-5 md:row-span-12 sm:space-x-2 md:space-x-0 md:space-y-2 border-2 border-red-600 bg-white px-3 py-5 ">
        <div class="sm:col-span-6 md:col-span-12 border-2 rounded-lg p-4">
            <h1 class="text-lg text-primary font-semibold py-2 border-b-2">
                Order options
            </h1>
            <div class="flex justify-between text-lg text-primary font-semibold">
                <span>Basic</span>
                <span>$80</span>
            </div>
            <p class="text-sm text-stone-500 my-4">
                I Will Make Mobile App Design, Website Design, Figma, Wordpress Developement 
            </p>
            <h1 class="text-primary pt-2 font-semibold">How often do you need this service?</h1>
            <div class="border-2 rounded-lg px-2 py-3 space-y-3 text-sm md:text-md">
                <div class="flex justify-between border-b p-2">
                    <div class="font-bold text-stone-500">
                        Single order
                    </div>
                    <div class="font-bold text-primary">
                        $80
                    </div>
                </div>
                <div class="flex justify-between p-2">
                    <div class="font-bold text-stone-500">
                        Project Quantity
                    </div>
                    <div class=" flex space-x-2 justify-center items-center">
                        <button class="fa fa-minus text-stone-500 border w-5 h-5 rounded-full hover:text-red-700 hover:border-red-700"></button>
                        <span class="flex flex-none">1</span>
                        <button class="fa fa-plus text-stone-500 border w-5 h-5 rounded-full hover:text-primary hover:border-primary"></button>
                    </div>
                </div>
            </div>
            <div class="my-4 w-full px-3 py-4 bg-secondary rounded-lg">
                <div class="pb-2 space-y-1.5 text-start border-b">
                    <div class="text-primary font-semibold">
                        $80
                    </div>
                    <div class="text-primary text-sm">
                        Single order
                    </div>
                </div>
                <div class="space-y-2 py-3">
                    <div class="flex justify-between items-center">
                        <div class="flex space-x-1 items-center text-primary text-sm font-semibold">
                            <img class="w-4 h-4" src="/package-process.png" alt="">
                            <span>Basic package</span>
                        </div>
                        <div class="fa fa-angle-down text-primary hover:cursor-pointer">
                        </div>
                    </div>
                    <div class="flex space-x-1 items-center text-primary text-sm font-semibold">
                        <img class="w-4 h-4" src="/clock-02.png" alt="">
                        <span>9 day delivery</span>
                    </div>
                    <div class="flex space-x-1 items-center text-primary text-sm font-semibold">
                        <img class="w-4 h-4" src="/recycle_03.png" alt="">
                        <span>1 revision</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:col-span-6 md:col-span-12">
            <div class="rounded-lg border-2 flex justify-center items-center py-4">
                <div class="w-5/6 border-2 rounded-lg p-2">
                    <label class="text-stone-600" for="amount">You pay</label>
                    <div class="flex space-x-2 border-2 p-2 rounded-lg items-center">
                        <span class="text-stone-500 text-sm">USDT</span>
                        <input class="outline-none w-full text-stone-700" type="text" name="" id="amount">
                    </div>
                    <div class="flex justify-center my-2">
                        <div>
                            <h1 class="text-stone-600 text-center">Scan QR code</h1>
                            <img src="/qr_code.png" alt="">
                        </div>
                    </div>
                    <label class="text-stone-600" for="adrdess">Network address</label>
                    <div class=" border-2 p-2 rounded-lg">
                        <select  class="w-full bg-white" name="address" id="address" placeholder="networl">
                            <option value="">TRC-20</option>
                            <option value="">Ton</option>
                            <option value="">Linear</option>
                        </select>
                    </div>
                    <label class="text-stone-600" for="amount">Wallet address</label>
                    <div class="flex w-full space-x-2 border-2 p-2 rounded-lg items-center justify-between">
                        <div class="text-sm w-full overflow-hidden whitespace-nowrap overflow-ellipsis" >
                            3hfhYUhkg7960Hjfk80883
                        </div>
                        <button class="text-stone-500  text-sm fa fa-copy "></button>
                    </div> 
                    <div class="w-full my-2">
                        <button type="button" class="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90">I have made payment</button>
                    </div>
                    <div class="w-full my-2">
                        <button type="button" class="w-full py-2 bg-white text-red-600 rounded-lg">Cancle Payment</button>
                    </div>
                    <div class="w-full my-2">
                        <div class="w-full py-2 bg-white text-primary flex justify-center items-center rounded-lg text-sm space-x-1 md:text-md">
                            <span class="fa fa-lock-alt"></span>
                            <span>Safely secure a encrypted</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>