const timer = (ms = 1000) => new Promise((resolve) => {
    setTimeout(resolve, ms)
})



// const test = 
// timer().then(() => console.log('test!'))
// async () => console.log('right after'))

// async function test() {
//     await timer()
//     console.log('awaiting')
//     await timer(5000)
//     console.log('longer')
// } 
// test()


export default timer