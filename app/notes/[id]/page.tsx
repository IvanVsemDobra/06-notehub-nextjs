import { dehydrate, QueryClient } from "@tanstack/react-query";
import TanStackProvider from "../../../components/TanStackProvider/TanStackProvider";
import NoteDetailsClient from "./NoteDetails.client";
import { fetchNoteById } from "../../../lib/api";

type Props = { params: { id: string } };

export default async function NoteDetailsPage({ params }: Props) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["note", id], () => fetchNoteById(id));

  const dehydratedState = dehydrate(queryClient);

  return (
    <TanStackProvider dehydratedState={dehydratedState}>
      <NoteDetailsClient id={id} />
    </TanStackProvider>
  );
}
