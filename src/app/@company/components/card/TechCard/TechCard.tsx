"use client";
import React from 'react';
import styles from './TechCard.module.scss'
import { useSelectedTechnologies } from '$components/hooks/useSelectedTechnologies';
import { Dropdown } from '$components/Dropdown/Dropdown';
import { technologyIcons } from './TechCard.dada';
import { Multiselector } from '$components/Multiselector/Multiselector';

export const TechCard = () => (
  <Multiselector label="Technology" items={technologyIcons} />
);
