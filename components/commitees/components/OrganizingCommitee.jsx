import organizingCommitee from "@/constants/organizingcommitee.json";
import organizingPatrons from "@/constants/organizingpatrons.json";
import orgChair from "@/constants/organizingChair.json";
import OrgCardGrid from "./OrgCardGrid";
import OrgCommitee from "./OrgCommitee";
import OrgCardFromAMCS from "./OrgCardForAMCS";

export default function OrganizingCommitee() {
  return (
    <div>
      <div className="p-8 lg:p-14">
        <p className="mb-10 text-4xl font-bold uppercase lg:text-5xl">
          Organizing Committee
        </p>
        <div className="space-y-10">
          <OrgCardGrid data={organizingPatrons} />
        </div>
      </div>
      <div className=" bg-bluecolor ">
        <div className=" p-8 max-lg:space-y-7 lg:p-14 ">
          <OrgCardGrid data={orgChair} />

          {/* <OrgCardGrid data={organizingCommitee} />  */}

          <div className="max-lg:border max-lg:border-white">
            <OrgCommitee data={organizingCommitee} />
          </div>

          {/* <OrgCardFromAMCS data={organizingCommitee} darkVariant={true} />  */}
        </div>
      </div>
    </div>
  );
}
