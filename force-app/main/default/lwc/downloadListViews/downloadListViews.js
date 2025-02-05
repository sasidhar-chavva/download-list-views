import { LightningElement, api, wire } from "lwc";
import { CurrentPageReference} from "lightning/navigation";
 
export default class DownloadListViews extends LightningElement {

    @api invoke() {
        console.log("Hi, I'm an action invoke.");
    }

    @wire(CurrentPageReference)
    pageUrl;

    getStateParameters(pageUrl) {
        if (pageUrl) {
            const urlValue = pageUrl.state.c__myUrlParameter;
            if (urlValue) {
                console.log(`URL Value was: ${urlValue}`);
            } else {
                this.displayValue = `URL Value was not set`;
            }
        }
    }

}