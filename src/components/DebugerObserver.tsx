import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

//It should be placed inside the recoil root.

export default function DebugObserver() {
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    console.group("Recoil snapshot");

    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      const value = snapshot.getLoadable(node);
      console.log(node.key, value.contents);
    }
    console.groupEnd();
  }, [snapshot]);

  return null;
}
