import wait from "waait";
import faker from "faker";

const fit = (`Hello ${faker.name.lastName()}`);

document.getElementById('demo').innerHTML = fit; 
async function go() {
    console.log("Going!");
    await wait(200);
    console.log('Ending!');
}
go();

