import {
    XmlItemType,
    XmlObject,
    XmlXPathSelector,
} from "@utils/xml-js-mapper";
import { PageTarget } from "./ncx-pagetarget";

@XmlObject({
    ncx: "http://www.daisy.org/z3986/2005/ncx/",
})
export class PageList {

    // XPATH ROOT: /ncx:ncx/ncx:pageList

    @XmlXPathSelector("ncx:pageTarget")
    @XmlItemType(PageTarget)
    public PageTarget: PageTarget[];

    @XmlXPathSelector("@class")
    public Class: string;

    @XmlXPathSelector("@id")
    public ID: string;
}
