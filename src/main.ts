// 全てのことに対してmotivationは増減するし、アウトプットにも影響を及ぼす
// しかも増減に関してはメンバーごとに違う

import { Organization } from './organization';
import { OrganizationMemberType } from './organizationMember';
import { Bowz } from './organizationMember/bowz';

type SenseOfValueType = {};

type SkillSetType = {};

type OrganizationDomainKnowledgeType = {};

type OrganizationProductType = {};

type NextActionType = {};

const LACK_OF_MOTIVATION = 'lackOfMotivation';
const WORSENING_PHYSICAL_CONDITION = 'worseningPhysicalCondition';

const organizationMembers: OrganizationMemberType[] = [];

const main = () => {
  const operate = ({
    nextAction: currentAction,
  }: {
    nextAction: NextActionType;
  }) => {
    const outcomes: OutcomeType[] = [];

    try {
      // NOTE: 各メンバーがそのフェーズのアクションに対してコミットしていく様
      for (const member of organizationMembers) {
        // NOTE: メンバーの状態によってoutcomeは変動していく。上がりもするし下りもする
        const { outcome } = member.perform(currentAction);
        outcomes.push(outcome);
      }
    } catch (error) {
      // NOTE: うまくいかなくなる時はある。それはいつどこで起きるかわからない。
      // NOTE: Organizationはmemberのアクションから次の行動を考えられるか
      switch (error.type) {
        // NOTE: 課題が浮上する
        case RAISING_THE_ISSUE:
          error.payload.member.suggest({
            to: Organization,
            about: error.payload.issue,
          });
        // NOTE: モチベーションの低下
        case LACK_OF_MOTIVATION:
          error.payload.member.resign({ at: Organization });
          break;
        // NOTE: 体調不良
        case WORSENING_PHYSICAL_CONDITION:
          error.payload.member.leave({ at: Organization });
          break;
        // NOTE: 資金難
        case CASH_FLOW_PROBLEM:
          break;
        default:
          break;
      }
    } finally {
      // NOTE: 組織はそれでも動き続ける
      const nextAction = Organization.determine({ outcomes });
      operate({ nextAction });
    }
  };
};

main();
