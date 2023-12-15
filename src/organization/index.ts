import { OrganizationMemberType } from '../organizationMember';

export type OrganizationType = {
  members: OrganizationMemberType[];
  leaveMembers: OrganizationMemberType[];
  products: OrganizationProductType[];
  onboard: ({ member }: { member: OrganizationMemberType }) => void;
  offboard: ({ member }: { member: OrganizationMemberType }) => void;
  perform: () => void;
  ask: ({
    member,
    to,
  }: {
    member: OrganizationMemberType;
    to: AskPurposeType;
  }) => void;

  determine: () => NextActions[];
  values: SenseOfValueType[];
};

class OrganizationImpl implements OrganizationType {
  constructor(
    readonly members: OrganizationMemberType[],
    readonly products: OrganizationProductType[],
    readonly values: SenseOfValueType[]
  ) {}

  onboard({ member }: { member: OrganizationMemberType }) {
    member.join({ values: this.values });
    this.members.push(member);
  }
  offboard({ member }: { member: OrganizationMemberType }) {
    this.members.filter();
  }
  ask({ member }: { member: OrganizationMemberType }) {
    this.members.filter();
  }
}

export const Organization = new OrganizationImpl([], [], []);
