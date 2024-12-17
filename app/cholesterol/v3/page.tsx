'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import LipidPanel from '../../../components/LipidPanel';

export default function LipidPanelV3() {
  return (
    <IntermediatePage title="Lipid Panel Results" version="v3" testType="lipid">
      <LipidPanel />
    </IntermediatePage>
  );
}
