'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import LipidPanel from '../../../components/LipidPanel';

export default function LipidPanelV1() {
  return (
    <IntermediatePage title="Lipid Panel Results" version="v1" testType="lipid">
      <LipidPanel />
    </IntermediatePage>
  );
}
