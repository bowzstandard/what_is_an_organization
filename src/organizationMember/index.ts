export type OrganizationMemberType = {
  // commitだけを求められれば死ぬ人もいる
  commit: () => void;

  // イベント駆動のaddとremove
  join: ({ values }: { values: SenseOfValueType[] }) => void;
  resign: () => void;

  knowledge: OrganizationDomainKnowledgeType[];
  skillSets: SkillSetType[];
  motivation: number;
  healthCondition: number;
  psychologicalSafety: number;
  senseOfValues: SenseOfValueType[];

  issues: IssueType[];
};
