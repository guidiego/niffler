import { collectFIIData } from './crawler';

collectFIIData().then((data:any) => {
    console.log(data);
})