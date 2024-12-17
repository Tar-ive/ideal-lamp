'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import BloodCountPanel from '../../../components/BloodCountPanel';

export default function BloodV3() {
  return (
    <IntermediatePage title="Blood Count Results" version="v3" testType="blood">
      <BloodCountPanel />
    </IntermediatePage>
  );
}
