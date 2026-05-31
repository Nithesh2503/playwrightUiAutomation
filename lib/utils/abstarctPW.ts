import { test, expect ,Page} from "@playwright/test";


let waitForEvent=async (page:Page,event:String)=>{

    switch (event) {
        case "domContent":
            
        await page.waitForLoadState('domcontentloaded')
            break;
    
        default:
            await page.waitForLoadState('networkidle')
            break;
    } 

}