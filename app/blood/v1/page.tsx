'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import BloodCountPanel from '../../../components/BloodCountPanel';

export default function BloodV1() {
  return (
    <IntermediatePage title="Blood Count Results" version="v1">
      <BloodCountPanel />
    </IntermediatePage>
  );
}
