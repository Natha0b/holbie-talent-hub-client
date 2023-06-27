"use client";
import React from 'react';
import styles from './TechCard.module.scss'
import { useSelectedTechnologies } from '$components/hooks/useSelectedTechnologies';
import { Dropdown } from '$components/Dropdown/Dropdown';
import { technologyIcons } from './TechCard.dada';
import { Multiselector } from '$components/Multiselector/Multiselector';


/**
 * The TechCard component represents a card for selecting technologies.
 * It uses the Multiselector component to display a label and a list of technology icons.
 * The technology icons are obtained from the TechCard.dada file.
 */
export const TechCard = () => (
  <Multiselector label="Technology" items={technologyIcons} />
);