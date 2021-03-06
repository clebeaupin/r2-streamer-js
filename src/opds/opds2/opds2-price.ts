// https://github.com/edcarroll/ta-json
import {
    JsonObject,
    JsonProperty,
    OnDeserialized,
} from "ta-json";

@JsonObject()
export class OPDSPrice {

    @JsonProperty("currency")
    public Currency: string;

    @JsonProperty("value")
    public Value: number;

    @OnDeserialized()
    // tslint:disable-next-line:no-unused-variable
    private _OnDeserialized() {
        if (!this.Currency) {
            console.log("OPDSPrice.Currency is not set!");
        }
        if (!this.Value) {
            console.log("OPDSPrice.Value is not set!");
        }
    }
}
