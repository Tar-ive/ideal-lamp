'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import LipidPanel from '../../../components/LipidPanel';

export default function CholesterolV3() {
  return (
    <IntermediatePage title="Cholesterol Results" version="v3">
      <LipidPanel />
    </IntermediatePage>
  );
}
