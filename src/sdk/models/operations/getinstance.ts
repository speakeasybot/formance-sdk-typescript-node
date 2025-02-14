/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetInstanceRequest extends SpeakeasyBase {
  /**
   * The instance id
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=instanceID",
  })
  instanceID: string;
}

export class GetInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * General error
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  /**
   * The workflow instance
   */
  @SpeakeasyMetadata()
  getWorkflowInstanceResponse?: shared.GetWorkflowInstanceResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
