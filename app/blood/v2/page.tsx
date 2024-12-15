'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import BloodCountPanel from '../../../components/BloodCountPanel';

export default function BloodV2() {
  return (
    <IntermediatePage title="Blood Count Results" version="v2">
      <BloodCountPanel />
    </IntermediatePage>
  );
}
