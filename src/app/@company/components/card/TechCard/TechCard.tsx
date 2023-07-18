"use client";
import { technologyIcons } from './TechCard.dada';
import { Multiselector } from '../../../../components/Multiselector/Multiselector';


/**
 * The TechCard component represents a card for selecting technologies.
 * It uses the Multiselector component to display a label and a list of technology icons.
 * The technology icons are obtained from the TechCard.dada file.
 */
export const TechCard = () => (
  <Multiselector label="Technology" items={technologyIcons} />
);