import Image from "next/image";
import CreateTicket from "./_components/create-ticket";
import { AssignInvite } from "./_components/AssignInvite";
// import { UserProfileForm } from "./_components/profile-form";
// import App from "./_components/all-field";
// import CreateTicket from "../"
import EditorComponent from './_components/EditorComponent';
import {TicketDetails} from './_components/ticket_details'
import {BidTicket} from "./_components/bid-ticket"
export default function Home() {
  return (
    <>
      <CreateTicket/>
      <AssignInvite/>
      {/* <EditorComponent/> */}
      <TicketDetails/>
      <BidTicket/>
    </>
  );
}

// 