import {
    XmlObject,
    XmlXPathSelector,
} from "@utils/xml-js-mapper";

@XmlObject({
    ds: "http://www.w3.org/2000/09/xmldsig#",
    enc: "http://www.w3.org/2001/04/xmlenc#",
    encryption: "urn:oasis:names:tc:opendocument:xmlns:container",
    ns: "http://www.idpf.org/2016/encryption#compression",
})
export class EncryptionMethod {

    // XPATH ROOT: /encryption:encryption/enc:EncryptedData/enc:EncryptionMethod

    @XmlXPathSelector("@Algorithm")
    public Algorithm: string;
}
