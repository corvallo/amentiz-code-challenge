import { getGrandMasters } from "@/entities/gm/model";
import { GrandMasterCard } from "@/features/grand-master-card";
import { grandMastersListStyle } from "./grand-masters-list.style";

export const GrandMastersList: React.FC = async () => {
  const { items, total } = await getGrandMasters();

  return (
    <div className={grandMastersListStyle()}>
      {items.map((gm) => (
        <GrandMasterCard
          key={gm.username}
          gm={gm}
          hasViewProfileAction={true}
        />
      ))}
      {/**TODO PAGINATION */}
    </div>
  );
};
