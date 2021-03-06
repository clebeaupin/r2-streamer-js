import { getDefinition } from "../classes/object-definition";
import { FunctionType } from "../types";

export function XmlItemType(objectType: FunctionType) {
    return (target: any, key: string): void => {
        const property = getDefinition(target.constructor).getProperty(key);

        property.objectType = objectType;
    };
}
