/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

/**
 * Full payload sent by the studio editor when saving the block.
 */
export interface Data {
  displayName: string;
  resources: Resource[];
}
/**
 * An external resource shown as a card to learners.
 */
export interface Resource {
  id: string;
  url: string;
  title: string;
  publisher: string;
  expectedMinutes: number;
  fileType: FileType;
  customFileType?: string;
  thumbnailUrl?: string;
  thumbnailAltText?: string;
  thumbnailIcon?: string;
}

/**
 * The type of an external resource. CUSTOM means the author typed their own
 * type in ``customFileType`` because none of the predefined ones fit.
 */
export const enum FileType {
  ARTICLE = "ARTICLE",
  VIDEO = "VIDEO",
  PDF = "PDF",
  TEXTBOOK = "TEXTBOOK",
  VIRTUAL_MACHINE = "VIRTUAL_MACHINE",
  INTERACTIVE_ACTIVITY = "INTERACTIVE_ACTIVITY",
  WGU_LIBRARY = "WGU_LIBRARY",
  CUSTOM = "CUSTOM"
}
