// https://github.com/edcarroll/ta-json
import {
    JsonElementType,
    JsonObject,
    JsonProperty,
} from "ta-json";

import { Encryption } from "./lcp-encryption";
import { Link } from "./lcp-link";
import { Rights } from "./lcp-rights";
import { Signature } from "./lcp-signature";
import { User } from "./lcp-user";

@JsonObject()
export class LCP {
    @JsonProperty("id")
    public ID: string;

    @JsonProperty("provider")
    public Provider: string;

    @JsonProperty("issued")
    public Issued: Date;

    @JsonProperty("updated")
    public Updated: Date;

    @JsonProperty("encryption")
    public Encryption: Encryption;

    @JsonProperty("rights")
    public Rights: Rights;

    @JsonProperty("user")
    public User: User;

    @JsonProperty("signature")
    public Signature: Signature;

    @JsonProperty("links")
    @JsonElementType(Link)
    public Links: Link[];

    public ZipPath: string;
}
