import {Injectable} from '@angular/core';

@Injectable()
export class UtilityServiceService {
  crumbTextCreator(crumbName, crumbNameExtraPrefix?: string, crumbNameExtraSuffix ?: string, crumbExtraPunctuation ?: string) {
    let crumb = crumbName;
    if (this.nullCheck(crumbNameExtraPrefix)) {
      crumb = crumbExtraPunctuation === 'hyphen' ? `${crumbNameExtraPrefix} - ${crumbName}` : `${crumbNameExtraPrefix}${crumbName}`;
    }
    if (this.nullCheck(crumbNameExtraSuffix)) {
      crumb = crumbExtraPunctuation === 'hyphen' ? `${crumbName} - ${crumbNameExtraSuffix}` : `${crumbName}${crumbNameExtraSuffix}`;
    }
    return crumb;
  }

  /**
   @description: This method is used to perform null check.
   @param: element on which null check must be performed.
   @return: Returns true if the element is not null
   **/
  nullCheck(element): boolean {
    return element !== null && element !== undefined && element !== '';
  }

  /**
   @description: This method is used to perform array null check.
   @param: array on which null check must be performed.
   @return: Returns true if it is an array which has at least one item.
   **/
  arrayCheck(arrayElement): boolean {
    return this.nullCheck(arrayElement) && Object.prototype.toString.call(arrayElement) === '[object Array]' && arrayElement.length > 0;
  }

  /**

   @description: This method is used to perform object has the field check.
   @param: object which must contain the property.
   @param: property that is desired to be present in the object.
   @return: Returns true if the object has the property.
   **/
  objectHasPropertyCheck(objectElement: {}, propertyName: string): boolean {
    return this.nullCheck(objectElement) && objectElement.hasOwnProperty(propertyName) && this.nullCheck(objectElement[propertyName]);
  }

  /**
   @description: This method is used to compare string.
   @param: original string to be compared.
   @param: variable string to be compared
   @return: Returns boolean in both are not undefined and both match
   **/
  stringComparator(originalString: string, comparedString: string) {
    return this.nullCheck(originalString) &&
      this.nullCheck(comparedString) && originalString.toLowerCase() === comparedString.toLowerCase();
  }
}
