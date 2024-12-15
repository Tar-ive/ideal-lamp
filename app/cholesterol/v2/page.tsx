'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import LipidPanel from '../../../components/LipidPanel';

export default function CholesterolV2() {
  return (
    <IntermediatePage title="Cholesterol Results" version="v2">
      <LipidPanel />
    </IntermediatePage>
  );
}
