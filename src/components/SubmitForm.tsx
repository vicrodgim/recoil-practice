import { useSetRecoilState, useRecoilValue } from "recoil";
import { submitFormSelector } from "../state/formState";
import { submissionTimeState } from "../state/formState";

export default function SubmitForm() {
  const submit = useSetRecoilState(submitFormSelector);
  const time = useRecoilValue(submissionTimeState);

  console.log("Submissiong time:", time);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <button onClick={() => submit(true)}>Submit</button>
      {time && (
        <p>
          <strong>Submitted at:</strong> {time}
        </p>
      )}
    </div>
  );
}
