/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: v1.0.0-beta.4
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Transaction } from '../models/Transaction';
import { HttpFile } from '../http/http';

export class ScriptResult {
    'details'?: string;
    'errorCode'?: ScriptResultErrorCodeEnum;
    'errorMessage'?: string;
    'transaction'?: Transaction;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "details",
            "baseName": "details",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "ScriptResultErrorCodeEnum",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScriptResult.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ScriptResultErrorCodeEnum = "INTERNAL" | "INSUFFICIENT_FUND" | "COMPILATION_FAILED" | "NO_SCRIPT" ;

