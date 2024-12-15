'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import LipidPanel from '../../../components/LipidPanel';

export default function CholesterolV1() {
  return (
    <IntermediatePage title="Cholesterol Results" version="v1">
      <LipidPanel />
    </IntermediatePage>
  );
}
