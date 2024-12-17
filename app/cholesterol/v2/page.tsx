'use client'

import IntermediatePage from '../../../components/IntermediatePage';
import LipidPanel from '../../../components/LipidPanel';

export default function LipidPanelV2() {
  return (
    <IntermediatePage title="Lipid Panel Results" version="v2" testType="lipid">
      <LipidPanel />
    </IntermediatePage>
  );
}
