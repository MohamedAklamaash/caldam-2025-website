import SteeringCommitee from "@/components/commitees/components/SteeringCommitee";
import ProgramCommitee from "@/components/commitees/components/ProgramCommitee";
import OrganizingCommitee from "@/components/commitees/components/OrganizingCommitee";

function Commitees() {
  return (
    <div className="space-y-10">
      <SteeringCommitee />
      <ProgramCommitee />
      <OrganizingCommitee />
    </div>
  );
}

export default Commitees;
