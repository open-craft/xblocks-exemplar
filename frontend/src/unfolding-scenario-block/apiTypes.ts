/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export type FeedbackType = "Correct" | "Incorrect" | "Warning";
export type InteractionType = "SelectOne" | "Explore";

/**
 * Full payload sent by the studio editor when saving the block.
 */
export interface Data {
  displayName: string;
  scenarioData: ScenarioData;
}
/**
 * All the learner-facing content of the Unfolding Scenario block.
 */
export interface ScenarioData {
  name: string;
  introduction: Introduction;
  scenarios: Scenario[];
  outcome: Outcome;
  interactionType: InteractionType;
}
/**
 * Introduction content that's presented by default by the XBlock.
 */
export interface Introduction {
  heading: string;
  description: string;
  imageURL: string;
}
/**
 * Scenario presented as an interactive slide.
 */
export interface Scenario {
  heading: string;
  description: string;
  instructionTitle: string;
  instructionDescription: string;
  prompt: string;
  options: Option[];
}
/**
 * Options presented in a scenario.
 */
export interface Option {
  value: string;
  feedback: string;
  type: FeedbackType;
}
/**
 * An optional "outcomes" slide at the end of scenarios.
 */
export interface Outcome {
  heading: string;
  description: string;
  displaySelectedOptions: boolean;
}
