/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class WorkflowInstanceHistory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "input" })
  input: any;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "startedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "terminated" })
  terminated: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "terminatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  terminatedAt?: Date;
}
