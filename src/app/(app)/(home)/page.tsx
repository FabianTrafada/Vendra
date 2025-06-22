import configPromise from "@payload-config";
import { getPayload } from "payload";

/**
 * Asynchronously fetches user data from the Payload backend and displays it as formatted JSON within a React component.
 *
 * Retrieves all entries from the "users" collection and renders the resulting data inside a `<div>`.
 */
export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "users"
  })

  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
