/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attempt } from "./attempt";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class AttemptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Attempt)
  data: Attempt;
}
